/* =========================================================
   BulletStorm · 弹珠风暴
   打砖块 + 桌面弹球 的环形变种玩法
   ========================================================= */
(() => {
  'use strict';

  /* ---------------- 常量 ---------------- */
  const W = 800, H = 800, CX = W / 2, CY = H / 2;
  const SHELL_R   = 352;              // 外壳碰撞半径
  const PILLAR_RING = 288;            // 光柱所在环半径
  const PILLAR_R  = 24;               // 光柱碰撞半径
  const PILLAR_N  = 6;
  const GAP_A     = Math.PI / 2;      // 缺口中心（正下方）
  const GAP_HALF  = 0.235;
  const BALL_R    = 7.5;
  const V_LAUNCH  = 690;              // 蓄力中段基准速度（px/s）
  const V_MIN     = 350;
  const V_SPLIT   = 548;              // 高速阈值（超过才分裂）
  const V_LAUNCH_LO = 430;            // 蓄力 0% 时的初速（低于分裂阈值 → 不分裂）
  const V_LAUNCH_HI = 950;            // 蓄力 100% 时的初速
  const CHARGE_TIME = 1.15;           // 蓄满所需秒数
  const AIM_LIMIT   = 1.45;            // 炮口相对正上方的最大偏角（弧度，约83°）
  const BOUNCE_DECAY = 0.935;
  const MAX_BOUNCES = 20;
  const MAX_LIFE  = 3;                 // 子弹最长存活秒数（发射/分裂重生后统一计时）
  const MAX_BALLS = 72;
  const MICRO     = 4;                // 微步进长度(px)

  const COLORS = [
    { c: '#ff5470', l: '#ffb3c1', d: '#b8143b', n: '粉' },
    { c: '#ff9a2b', l: '#ffd7a1', d: '#c65c00', n: '橙' },
    { c: '#ffd93d', l: '#fff2ab', d: '#c99a00', n: '金' },
    { c: '#4ade80', l: '#bdf7d5', d: '#12a150', n: '绿' },
    { c: '#4dc9ff', l: '#b8ecff', d: '#0085c4', n: '蓝' },
    { c: '#b579ff', l: '#e2cdff', d: '#7a2ad9', n: '紫' }
  ];

  /* ---------------- 工具 ---------------- */
  const TAU = Math.PI * 2;
  const clamp = (v, a, b) => v < a ? a : (v > b ? b : v);
  const rnd = (a, b) => a + Math.random() * (b - a);
  const irnd = (a, b) => Math.floor(rnd(a, b + 1));
  function mulberry32(a) {
    return function () {
      a |= 0; a = a + 0x6D2B79F5 | 0;
      let t = Math.imul(a ^ a >>> 15, 1 | a);
      t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
      return ((t ^ t >>> 14) >>> 0) / 4294967296;
    };
  }
  function rr(c, x, y, w, h, r) {
    r = Math.min(r, w / 2, h / 2);
    c.beginPath();
    c.moveTo(x + r, y);
    c.arcTo(x + w, y, x + w, y + h, r);
    c.arcTo(x + w, y + h, x, y + h, r);
    c.arcTo(x, y + h, x, y, r);
    c.arcTo(x, y, x + w, y, r);
    c.closePath();
  }

  /* ---------------- 音效 ---------------- */
  const Sound = (() => {
    let ac = null, muted = false, budget = 0;
    function ensure() {
      if (!ac) {
        const AC = window.AudioContext || window.webkitAudioContext;
        if (!AC) return null;
        ac = new AC();
      }
      return ac;
    }
    function tone(o) {
      if (muted || budget <= 0) return;
      const a = ensure(); if (!a) return;
      budget--;
      if (a.state === 'suspended') a.resume();
      const { f = 440, to = f, d = 0.12, t = 'sine', v = 0.16, delay = 0 } = o;
      const t0 = a.currentTime + delay;
      const osc = a.createOscillator(), g = a.createGain();
      osc.type = t;
      osc.frequency.setValueAtTime(f, t0);
      if (to !== f) osc.frequency.exponentialRampToValueAtTime(Math.max(40, to), t0 + d);
      g.gain.setValueAtTime(0.0001, t0);
      g.gain.exponentialRampToValueAtTime(v, t0 + 0.012);
      g.gain.exponentialRampToValueAtTime(0.0001, t0 + d);
      osc.connect(g); g.connect(a.destination);
      osc.start(t0); osc.stop(t0 + d + 0.03);
    }
    return {
      tick() { budget = 4; },
      tone,
      get muted() { return muted; },
      set muted(v) { muted = v; if (!v) ensure(); },
      resume() { const a = ensure(); if (a && a.state === 'suspended') a.resume(); }
    };
  })();
  const SFX = {
    launch: p => Sound.tone({ f: 260 + p * 420, to: 520 + p * 700, d: 0.16, t: 'triangle', v: 0.13 }),
    bounce: () => Sound.tone({ f: 520 + Math.random() * 90, to: 340, d: 0.07, t: 'sine', v: 0.07 }),
    charge: () => Sound.tone({ f: 180, to: 640, d: 0.7, t: 'sawtooth', v: 0.05 }),
    split:  () => { Sound.tone({ f: 620, to: 1180, d: 0.16, t: 'square', v: 0.07 }); Sound.tone({ f: 900, to: 1500, d: 0.2, t: 'sine', v: 0.06, delay: .04 }); },
    match:  () => { Sound.tone({ f: 760, to: 1200, d: 0.11, t: 'triangle', v: 0.12 }); Sound.tone({ f: 1180, d: 0.09, t: 'sine', v: 0.07, delay: .05 }); },
    miss:   () => Sound.tone({ f: 190, to: 120, d: 0.13, t: 'sawtooth', v: 0.06 }),
    win:    () => [0, 1, 2, 3].forEach(i => Sound.tone({ f: [523, 659, 784, 1046][i], d: 0.3, t: 'triangle', v: 0.13, delay: i * .11 })),
    lose:   () => [0, 1, 2].forEach(i => Sound.tone({ f: [400, 320, 220][i], d: 0.34, t: 'sawtooth', v: 0.1, delay: i * .14 })),
    buy:    () => { Sound.tone({ f: 480, to: 900, d: 0.18, t: 'triangle', v: 0.12 }); }
  };

  /* ---------------- DOM ---------------- */
  const cvs = document.getElementById('cv');
  const ctx = cvs.getContext('2d');
  const stage = document.getElementById('stage');
  const $ = id => document.getElementById(id);
  const hLevel = $('hLevel'), hLeft = $('hLeft'), hTotal = $('hTotal'),
        hBullet = $('hBullet'), hDots = $('hDots'), hScore = $('hScore'),
        remain = $('remain'),
        overlay = $('overlay'), chip = $('chip');
  const ovIcon = $('ovIcon'), ovTitle = $('ovTitle'), ovDesc = $('ovDesc'),
        ovStats = $('ovStats'), ovBtns = $('ovBtns');

  /* ---------------- 状态 ---------------- */
  const S = {
    lv: 1, score: 0, bank: 0,
    bullets: 0, grant: 0, buys: 0, maxBuys: 3,
    total: 0, left: 0, colors: 5, pending: 0,
    phase: 'aim',            // aim | fly | over
    balls: [], bricks: [], pillars: [], fx: [], texts: [], floats: [],
    aim: -Math.PI / 2, aimTarget: -Math.PI / 2,  // 炮口当前角度 / 鼠标目标角度（随鼠标旋转）
    charge: 0, charging: false, power: 0,      // 蓄力进度 / 是否蓄力中 / 上次发射力度
    recoil: 0,                                // 炮管后移量 0~1（蓄力动画）
    clearT: 0,                                // 砖块清空后的等待计时（秒）
    combo: 0, bestCombo: 0,
    t: 0, shake: 0, banner: 2.2, endTimer: 0, endKind: null,
    launched: 0, destroyed: 0
  };

  /* ---------- 一次性缓存的渐变 ---------- */
  let bgGrad = null, shellGrad = null;
  const brickGrad = COLORS.map(c => {
    const g = ctx.createLinearGradient(0, -15, 0, 15);
    g.addColorStop(0, c.l); g.addColorStop(.42, c.c); g.addColorStop(1, c.d);
    return g;
  });
  function buildStaticGrads() {
    bgGrad = ctx.createRadialGradient(CX, CY - 60, 40, CX, CY, 470);
    bgGrad.addColorStop(0, '#2c3576');
    bgGrad.addColorStop(.45, '#1e2560');
    bgGrad.addColorStop(1, '#0d1030');
    shellGrad = ctx.createLinearGradient(0, 0, W, H);
    shellGrad.addColorStop(0, '#7de3ff');
    shellGrad.addColorStop(.5, '#a78bff');
    shellGrad.addColorStop(1, '#ff8ec7');
  }

  /* ---------------- 关卡配置 ---------------- */
  function levelConfig(lv) {
    const target = Math.min(26 + (lv - 1) * 11, 132);
    return {
      target,
      colors: Math.min(5 + Math.floor((lv - 1) / 3), COLORS.length),
      maxR: Math.min(152 + (lv - 1) * 9, 238),
      innerR: 44,
      step: 36,
      sectors: 3 + ((lv * 2) % 5),
      bullets: Math.max(10, Math.ceil(target / 3) + 5)
    };
  }

  /* ---------------- 生成砖块舞台 ---------------- */
  function buildStage(lv) {
    const cfg = levelConfig(lv);
    const rng = mulberry32(0x51f3c ^ (lv * 2654435761));
    const phase = rng() * TAU;
    const list = [];

    for (let r = cfg.innerR; r <= cfg.maxR + 0.1; r += cfg.step) {
      const n = Math.max(1, Math.round(TAU * r / 38));
      const off = (Math.round((r - cfg.innerR) / cfg.step) % 2) ? Math.PI / n : 0;
      for (let i = 0; i < n; i++) {
        const th = i * TAU / n + off;
        const petal = 0.5 + 0.5 * Math.cos(cfg.sectors * th + phase);
        const w = 0.45 + 0.75 * petal + rng() * 0.35 - (r / cfg.maxR) * 0.15;
        list.push({ r, th, w });
      }
    }
    list.sort((a, b) => b.w - a.w);
    const picked = list.slice(0, cfg.target);

    S.bricks = picked.map(p => {
      let ci = Math.floor(((p.th % TAU) + TAU) % TAU / TAU * cfg.colors);
      if (rng() < 0.13) ci = Math.floor(rng() * cfg.colors);
      return {
        x: CX + Math.cos(p.th) * p.r,
        y: CY + Math.sin(p.th) * p.r,
        a: p.th - Math.PI / 2,
        hw: 17, hh: 15, c: ci,
        alive: true, pop: 0, hitFlash: 0
      };
    });
    S.total = S.bricks.length;
    S.left = S.total;
    S.colors = cfg.colors;
    S.grant = Math.max(8, Math.round(cfg.bullets * 0.35));
    return cfg;
  }

  /* ---------------- 光柱 ---------------- */
  function buildPillars() {
    S.pillars = [];
    for (let i = 0; i < PILLAR_N; i++) {
      S.pillars.push({
        // 整体偏移半个扇区：避免光柱正对底部发射缺口，堵住出膛通道
        ang: -Math.PI / 2 + Math.PI / PILLAR_N + i * TAU / PILLAR_N,
        ph: Math.random() * TAU,
        spin: (i % 2 ? 1 : -1) * (0.6 + Math.random() * 0.5),
        x: 0, y: 0, flash: 0
      });
    }
  }
  function updatePillars(t) {
    for (const p of S.pillars) {
      const rr2 = PILLAR_RING + Math.sin(t * 0.85 + p.ph) * 5;
      p.x = CX + Math.cos(p.ang) * rr2;
      p.y = CY + Math.sin(p.ang) * rr2;
      if (p.flash > 0) p.flash = Math.max(0, p.flash - 0.05);
    }
  }

  /* ---------------- 开始关卡 ---------------- */
  function startLevel(lv, keepScore) {
    S.lv = lv;
    if (!keepScore) S.score = S.bank;
    const cfg = buildStage(lv);
    buildPillars();
    S.bullets = cfg.bullets;
    S.buys = 0;
    S.balls = []; S.fx = []; S.texts = []; S.floats = [];
    S.combo = 0; S.bestCombo = 0;
    S.phase = 'aim'; S.endTimer = 0; S.endKind = null;
    S.aim = -Math.PI / 2; S.aimTarget = -Math.PI / 2; S.shake = 0; S.banner = 2.0;
    S.launched = 0; S.destroyed = 0;
    S.charge = 0; S.charging = false; S.power = 0;
    S.recoil = 0;                          // 炮管后移量 0~1（蓄力动画）
    S.clearT = 0;                          // 砖块清空等待计时
    S.pending = pickColor();            // 本发主弹珠颜色（随机）
    hideOverlay();
    syncHUD();
    buildAmmo();
  }

  /* ---- 随机取色：颜色池 = 场上现存的砖块颜色，加权抽取 ---- */
  function pickColor() {
    const counts = colorCounts();
    const pool = [];
    for (let i = 0; i < S.colors; i++) {
      if (counts[i] > 0) {
        const w = 1 + counts[i];
        for (let k = 0; k < Math.min(w, 24); k++) pool.push(i);
      }
    }
    if (!pool.length) return 0;
    return pool[Math.floor(Math.random() * pool.length)];
  }
  function colorCounts() {
    const a = new Array(S.colors).fill(0);
    for (const b of S.bricks) if (b.alive) a[b.c]++;
    return a;
  }
  function aliveBricks() { let n = 0; for (const b of S.bricks) if (b.alive) n++; return n; }

  /* ---------------- 弹珠 ---------------- */
  function makeBall(x, y, ang, sp, color, splits, gen) {
    return {
      x, y,
      vx: Math.cos(ang) * sp, vy: Math.sin(ang) * sp,
      c: color, splits, gen,
      bounces: 0, life: 0, fade: 0, dead: false,
      trail: [], pill: 0, seed: Math.random() * TAU
    };
  }
  const padX = () => CX + Math.cos(GAP_A) * (SHELL_R - 34);
  const padY = () => CY + Math.sin(GAP_A) * (SHELL_R - 34);

  // 炮口角度跟随鼠标（相对正上方限位），带一点平滑转动质感
  function aimAt(mx, my) {
    const px = padX(), py = padY();
    let phi = Math.atan2(my - py, mx - px) + Math.PI / 2;
    while (phi > Math.PI) phi -= TAU;
    while (phi < -Math.PI) phi += TAU;
    S.aimTarget = clamp(phi, -AIM_LIMIT, AIM_LIMIT) - Math.PI / 2;
  }

  // 蓄力值(0~1) → 初速
  function powerToSpeed(p) { return V_LAUNCH_LO + (V_LAUNCH_HI - V_LAUNCH_LO) * clamp(p, 0, 1); }

  function launch(power) {
    if (S.phase !== 'aim' || S.bullets <= 0) return;
    const p = clamp(power === undefined ? S.charge : power, 0, 1);
    // 若本发颜色对应的砖块已被上一发打光，重抽一个有效颜色
    if (!S.bricks.some(b => b.alive && b.c === S.pending)) S.pending = pickColor();
    const c = S.pending;
    S.pending = pickColor();             // 提前定好下一发的随机颜色
    const ang = S.aim;               // 当前炮口朝向（跟随鼠标）
    const sp = powerToSpeed(p);
    // 出膛点固定，不随后移动画偏移——枪管仅是视觉表现，不参与任何碰撞/玩法
    const bx = padX() + Math.cos(ang) * 16, by = padY() + Math.sin(ang) * 16;
    S.balls.push(makeBall(bx, by, ang, sp, c, 2, 0));
    S.bullets--; S.launched++;
    S.power = p;
    S.combo = 0;
    S.charge = 0; S.charging = false;
    S.phase = 'fly';
    SFX.launch(p);
    burst(bx, by, 10 + Math.round(p * 12), COLORS[c].c, 140 + p * 140);
    popText(bx - 40, by - 6, COLORS[c].n, COLORS[c].l, 17);
    if (p >= 0.999) popText(bx, by - 34, '满力!', '#ffe066', 19);
    syncHUD();
    buildAmmo();
    setChip('');
  }

  /* ---------------- 特效 ---------------- */
  function burst(x, y, n, color, spread) {
    for (let i = 0; i < n; i++) {
      const a = Math.random() * TAU, s = spread * (0.35 + Math.random() * 0.8);
      S.fx.push({ t: 'p', x, y, vx: Math.cos(a) * s, vy: Math.sin(a) * s, life: 1, dl: 0.55 + Math.random() * .5, sz: rnd(2, 5), c: color, rot: Math.random() * TAU, vr: rnd(-9, 9) });
    }
  }
  function ring(x, y, color, max, wid) {
    S.fx.push({ t: 'r', x, y, life: 1, dl: 0.42, c: color, max: max, wid: wid || 3 });
  }
  function debris(x, y, a, color, hw, hh) {
    for (let i = 0; i < 8; i++) {
      const ox = rnd(-hw, hw), oy = rnd(-hh, hh);
      const px = x + ox * Math.cos(a) - oy * Math.sin(a);
      const py = y + ox * Math.sin(a) + oy * Math.cos(a);
      const aa = Math.atan2(py - CY, px - CX) + rnd(-.5, .5);
      S.fx.push({ t: 'd', x: px, y: py, vx: Math.cos(aa) * rnd(60, 220), vy: Math.sin(aa) * rnd(60, 220), life: 1, dl: 0.6 + Math.random() * .5, sz: rnd(4, 9), c: color, rot: Math.random() * TAU, vr: rnd(-12, 12) });
    }
  }
  function popText(x, y, txt, color, size) {
    S.texts.push({ x, y, txt, c: color, life: 1, dl: 0.8, sz: size || 20 });
  }

  /* ---------------- 砖块碰撞查询 ---------------- */
  function brickAt(bx, by, rad) {
    for (let i = 0; i < S.bricks.length; i++) {
      const k = S.bricks[i];
      if (!k.alive) continue;
      const dx = bx - k.x, dy = by - k.y;
      const dd = dx * dx + dy * dy;
      if (dd > 1024) continue;               // 粗筛 32px
      const ca = Math.cos(k.a), sa = Math.sin(k.a);
      const lx = dx * ca + dy * sa;
      const ly = -dx * sa + dy * ca;
      if (Math.abs(lx) > k.hw + rad || Math.abs(ly) > k.hh + rad) continue;
      return k;
    }
    return null;
  }

  /* ---------------- 分裂 ---------------- */
  function trySplit(b, px, py) {
    const sp = Math.hypot(b.vx, b.vy);
    if (b.splits <= 0 || sp < V_SPLIT) return false;
    const n = irnd(2, 4);                                   // 随机分裂数量
    const toCenter = Math.atan2(CY - py, CX - px);
    const fan = (2.0 + Math.random() * 1.4) / Math.max(1, n - 1);
    const rot = Math.random() * TAU;
    const newCols = [];                                     // 本次分裂出的新颜色
    let made = 0;
    for (let i = 0; i < n; i++) {
      if (S.balls.length >= MAX_BALLS) break;
      const off = (i - (n - 1) / 2) * fan;
      const a = toCenter + rot * 0.25 + off + rnd(-0.16, 0.16);   // 随机方向的散射
      const d = PILLAR_R + BALL_R + 3.5;
      // 分裂出的弹珠颜色从「场上现存砖块颜色池」中随机抽取
      const c = pickColor();
      const nb = makeBall(px + Math.cos(a) * d, py + Math.sin(a) * d, a,
                          sp * rnd(0.8, 1.02), c, b.splits - 1, b.gen + 1);
      S.balls.push(nb); made++;
      if (newCols.indexOf(c) < 0) newCols.push(c);
    }
    b.splits = Math.max(0, b.splits - 1);
    newCols.forEach((c, i) => {
      S.fx.push({ t: 'r', x: px, y: py, life: 1, dl: 0.45 + i * 0.06,
                  c: COLORS[c].l, max: 40 + i * 9, wid: 3 });
    });
    if (made) {
      SFX.split();
      ring(px, py, '#a9ecff', 54, 4);
      burst(px, py, 12, '#c9f2ff', 230);
    }
    return made > 0;
  }

  /* ---------------- 物理 ---------------- */
  function physics(dt) {
    updatePillars(S.t);
    for (let i = S.balls.length - 1; i >= 0; i--) {
      const b = S.balls[i];
      if (b.dead) { S.balls.splice(i, 1); continue; }

      b.life += dt;
      if (b.pill > 0) b.pill -= dt;
      if (b.fade > 0) {
        b.fade -= dt * 2.6;
        if (b.fade <= 0) { S.balls.splice(i, 1); continue; }
      }

      const sp = Math.hypot(b.vx, b.vy);
      const dist = sp * dt;
      const steps = clamp(Math.ceil(dist / MICRO), 1, 12);
      const sdt = dt / steps;
      let removed = false;

      for (let s = 0; s < steps && !removed; s++) {
        b.x += b.vx * sdt; b.y += b.vy * sdt;

        // ---- 光柱 ----
        for (const p of S.pillars) {
          const dx = b.x - p.x, dy = b.y - p.y;
          const dd = dx * dx + dy * dy;
          const lim = PILLAR_R + BALL_R;
          if (dd < lim * lim) {
            const d = Math.sqrt(dd) || 0.001;
            const nx = dx / d, ny = dy / d;
            const dot = b.vx * nx + b.vy * ny;
            if (dot < 0) {                    // 仅在朝向光柱运动时反弹；分离中不再触发，避免被夹住反复震动
              b.x = p.x + nx * (lim + 0.6);
              b.y = p.y + ny * (lim + 0.6);
              b.vx -= 2 * dot * nx; b.vy -= 2 * dot * ny;
              p.flash = 1;
              ring(p.x + nx * PILLAR_R, p.y + ny * PILLAR_R, '#bfeaff', 34, 3);
              if (b.pill <= 0) {
                trySplit(b, p.x, p.y);
                b.pill = 0.12;
              }
              SFX.bounce();
            }
          }
        }

        // ---- 砖块 ----
        const k = brickAt(b.x, b.y, BALL_R);
        if (k) {
          if (k.c === b.c) {
            k.alive = false; k.pop = 0.001;
            S.destroyed++; S.combo++;
            S.bestCombo = Math.max(S.bestCombo, S.combo);
            const gain = 10 + (S.combo - 1) * 4;
            S.score += gain;
            popText(k.x, k.y - 6, '+' + gain, COLORS[k.c].l, 22);
            if (S.combo >= 3) popText(k.x, k.y - 30, 'COMBO ×' + S.combo, '#ffe066', 17);
            debris(k.x, k.y, k.a, COLORS[k.c].c, k.hw, k.hh);
            ring(k.x, k.y, COLORS[k.c].l, 46, 4);
            S.shake = Math.min(9, S.shake + 4);
            SFX.match();
            syncHUD();
            // 同色：砖块消除，弹珠消失
            b.dead = true;
            removed = true;
            break;
          }
          // 异色：砖块闪白留场，弹珠沿最近面弹开（继续飞，自己赚下一次尝试机会）
          k.hitFlash = 1;
          SFX.miss();
          burst(b.x, b.y, 5, '#ffffff', 110);
          const ca = Math.cos(k.a), sa = Math.sin(k.a);
          const dx = b.x - k.x, dy = b.y - k.y;
          const lx = dx * ca + dy * sa, ly = -dx * sa + dy * ca;   // 转到砖块局部坐标
          const px = k.hw + BALL_R - Math.abs(lx);
          const py = k.hh + BALL_R - Math.abs(ly);
          let nlx, nly;
          if (px < py) { nlx = lx >= 0 ? 1 : -1; nly = 0; } else { nlx = 0; nly = ly >= 0 ? 1 : -1; }
          const nx = nlx * ca - nly * sa, ny = nlx * sa + nly * ca; // 世界空间法线
          const dot = b.vx * nx + b.vy * ny;
          if (dot < 0) { b.vx -= 2 * dot * nx; b.vy -= 2 * dot * ny; }  // 仅在朝向砖面时反射
          const pen = Math.min(px, py);
          b.x += nx * (pen + 0.5); b.y += ny * (pen + 0.5);             // 推出砖面
        }

        // ---- 外壳 ----
        const dx = b.x - CX, dy = b.y - CY;
        const d = Math.hypot(dx, dy);
        const lim = SHELL_R - BALL_R;
        if (d > lim) {
          const nx = dx / d, ny = dy / d;
          b.x = CX + nx * lim; b.y = CY + ny * lim;
          const dot = b.vx * nx + b.vy * ny;
          b.vx -= 2 * dot * nx; b.vy -= 2 * dot * ny;
          let ns = Math.hypot(b.vx, b.vy) * BOUNCE_DECAY;
          ns = Math.max(V_MIN, ns);
          const cur = Math.hypot(b.vx, b.vy);
          if (cur > 0.001) { b.vx = b.vx / cur * ns; b.vy = b.vy / cur * ns; }
          b.bounces++;
          SFX.bounce();
          S.fx.push({ t: 'w', x: CX + nx * SHELL_R, y: CY + ny * SHELL_R, a: Math.atan2(ny, nx), life: 1, dl: .3, c: '#9fe8ff' });
        }
      }

      if (removed) continue;

      // ---- 寿命到期 / 能量耗尽：到时间直接消失 ----
      if (b.life > MAX_LIFE || b.bounces > MAX_BOUNCES) {
        burst(b.x, b.y, 6, COLORS[b.c].c, 90);
        b.dead = true;
        removed = true;
      }

      // ---- 轨迹 ----
      b.trail.push(b.x, b.y);
      if (b.trail.length > 26) b.trail.splice(0, 2);
    }
    if (S.balls.some(b => b.dead)) S.balls = S.balls.filter(b => !b.dead);
  }

  /* ---------------- 回合结算 ---------------- */
  function checkRound() {
    // 砖块全部打完：等待 1 秒，随后子弹统一消失并显示结算界面
    if (S.phase === 'fly' && aliveBricks() === 0) {
      S.clearT += 1 / 60;
      if (S.clearT >= 1) {
        S.balls.length = 0;
        S.endKind = 'win'; S.endTimer = 0.4; S.phase = 'over';
        S.charging = false; S.charge = 0;
      }
    }
    const live = S.balls.filter(b => b.fade <= 0).length;
    if (S.phase === 'fly' && live === 0 && S.balls.length === 0 && aliveBricks() > 0) {
      if (S.bullets <= 0) {
        S.phase = 'over';
        S.charging = false; S.charge = 0;
        S.clearT = 0;
        if (S.buys < S.maxBuys) showBuy();
        else { S.endKind = 'lose'; S.endTimer = 0.5; }
      } else {
        S.phase = 'aim';
        S.charging = false; S.charge = 0;
        S.clearT = 0;
        S.pending = pickColor(); buildAmmo(); syncHUD();
        setChip('移动鼠标转向 · 按住蓄力，松手发射');
      }
    }
    if (S.endTimer > 0) {
      S.endTimer -= 1 / 60;
      if (S.endTimer <= 0) {
        if (S.endKind === 'win') showWin();
        else showLose();
        S.endTimer = 0; S.endKind = null;
      }
    }
  }

  /* ---------------- 绘制：背景 ---------------- */
  function drawBG(t) {
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, W, H);

    // 旋转射线
    ctx.save();
    ctx.translate(CX, CY); ctx.rotate(t * 0.035);
    ctx.strokeStyle = '#8fd8ff';
    for (let i = 0; i < 28; i++) {
      const a = i * Math.PI / 14;
      ctx.globalAlpha = i % 2 ? 0.035 : 0.018;
      ctx.lineWidth = i % 2 ? 2 : 7;
      ctx.beginPath();
      ctx.moveTo(Math.cos(a) * 96, Math.sin(a) * 96);
      ctx.lineTo(Math.cos(a) * SHELL_R, Math.sin(a) * SHELL_R);
      ctx.stroke();
    }
    ctx.restore();
    ctx.globalAlpha = 1;

    // 同心能量环
    ctx.strokeStyle = '#9fe8ff';
    for (let i = 0; i < 4; i++) {
      const r = 118 + i * 62;
      ctx.globalAlpha = 0.05 + 0.02 * Math.sin(t * 0.9 + i);
      ctx.lineWidth = 1.4;
      ctx.beginPath();
      ctx.arc(CX, CY, r + Math.sin(t * 0.7 + i * 1.3) * 4, 0, TAU);
      ctx.stroke();
    }
    ctx.globalAlpha = 1;

    // 漂浮星点
    for (let i = 0; i < 26; i++) {
      const a = i * 2.399 + t * 0.06;
      const r = 130 + ((i * 97) % 220);
      const x = CX + Math.cos(a) * r, y = CY + Math.sin(a) * r * 0.92;
      const s = 1 + ((i % 3) === 0 ? 1.2 : 0) + Math.sin(t * 2 + i) * 0.6;
      ctx.globalAlpha = 0.16 + 0.14 * Math.sin(t * 1.6 + i);
      ctx.fillStyle = '#cfe9ff';
      ctx.beginPath(); ctx.arc(x, y, Math.max(0.4, s), 0, TAU); ctx.fill();
    }
    ctx.globalAlpha = 1;
  }

  /* ---------------- 绘制：外壳 ---------------- */
  function drawShell(t) {
    const a0 = GAP_A + GAP_HALF, a1 = GAP_A - GAP_HALF + TAU;

    ctx.save();
    ctx.lineCap = 'round';

    // 外发光
    ctx.globalAlpha = 0.10; ctx.strokeStyle = shellGrad; ctx.lineWidth = 30;
    ctx.beginPath(); ctx.arc(CX, CY, SHELL_R + 6, a0, a1); ctx.stroke();
    ctx.globalAlpha = 0.18; ctx.lineWidth = 16;
    ctx.beginPath(); ctx.arc(CX, CY, SHELL_R + 6, a0, a1); ctx.stroke();

    // 主体
    ctx.globalAlpha = 1; ctx.lineWidth = 11;
    ctx.strokeStyle = shellGrad;
    ctx.beginPath(); ctx.arc(CX, CY, SHELL_R + 6, a0, a1); ctx.stroke();

    // 内侧亮线
    ctx.globalAlpha = 0.75; ctx.lineWidth = 2.5; ctx.strokeStyle = '#ffffff';
    ctx.beginPath(); ctx.arc(CX, CY, SHELL_R - 1, a0, a1); ctx.stroke();

    // 旋转能量虚线
    ctx.globalAlpha = 0.55; ctx.lineWidth = 3; ctx.strokeStyle = '#bff3ff';
    ctx.setLineDash([10, 22]); ctx.lineDashOffset = -t * 36;
    ctx.beginPath(); ctx.arc(CX, CY, SHELL_R + 15, a0, a1); ctx.stroke();
    ctx.setLineDash([]);

    // 端口节点
    [a0, a1].forEach(a => {
      const x = CX + Math.cos(a) * (SHELL_R + 6), y = CY + Math.sin(a) * (SHELL_R + 6);
      ctx.globalAlpha = 1;
      ctx.fillStyle = '#0e1330';
      ctx.beginPath(); ctx.arc(x, y, 9, 0, TAU); ctx.fill();
      ctx.fillStyle = '#7de3ff';
      ctx.beginPath(); ctx.arc(x, y, 5.5, 0, TAU); ctx.fill();
    });
    ctx.restore();
    ctx.globalAlpha = 1;

    drawPad(t);
  }

  function drawPad(t) {
    const px = CX + Math.cos(GAP_A) * (SHELL_R + 6);
    const py = CY + Math.sin(GAP_A) * (SHELL_R + 6);
    const ang = S.aim;               // 跟随鼠标转向
    const power = S.charging ? S.charge : 0;
    const a0 = GAP_A - GAP_HALF - 0.055, a1 = GAP_A + GAP_HALF + 0.055;

    ctx.save();
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    // 缺口底座（环形块）
    ctx.beginPath();
    ctx.arc(CX, CY, SHELL_R + 14, a0, a1);
    ctx.arc(CX, CY, SHELL_R - 14, a1, a0, true);
    ctx.closePath();
    ctx.fillStyle = '#141a3d';
    ctx.fill();
    ctx.strokeStyle = 'rgba(125,227,255,.85)'; ctx.lineWidth = 2;
    ctx.stroke();

    // 底座里侧能量条
    ctx.beginPath();
    ctx.arc(CX, CY, SHELL_R - 18, a0 + 0.02, a1 - 0.02);
    ctx.strokeStyle = 'rgba(255,255,255,' + (0.35 + 0.2 * Math.sin(t * 4)) + ')';
    ctx.lineWidth = 3;
    ctx.stroke();

    // 炮管（蓄力时整体后退，松手后快速回弹）
    const back = S.recoil * 26;                    // 后移像素量
    ctx.translate(px, py);
    ctx.rotate(ang);
    ctx.translate(-back, 0);
    const grd = ctx.createLinearGradient(0, -13, 0, 13);
    grd.addColorStop(0, '#ffffff'); grd.addColorStop(.5, '#c9d8ff'); grd.addColorStop(1, '#7d88c0');
    ctx.fillStyle = grd;
    rr(ctx, -20, -12, 74, 24, 10); ctx.fill();
    ctx.lineWidth = 2.4;
    ctx.strokeStyle = 'rgba(255,255,255,.6)';
    rr(ctx, -20, -12, 74, 24, 10); ctx.stroke();
    // 装饰环
    ctx.fillStyle = '#ff6b8a';
    rr(ctx, -24, -8, 14, 16, 7); ctx.fill();
    ctx.fillStyle = 'rgba(255,107,138,.55)';
    rr(ctx, 26, -13, 9, 26, 4); ctx.fill();
    // 炮口
    ctx.fillStyle = 'rgba(160,240,255,' + (0.5 + 0.3 * Math.sin(t * 6)) + ')';
    rr(ctx, 48, -9, 8, 18, 4); ctx.fill();
    // 蓄力时炮口升温
    if (power > 0.01) {
      ctx.fillStyle = 'rgba(255,224,120,' + (0.35 + power * 0.5) + ')';
      rr(ctx, 44, -11 - power * 3, 14, 22 + power * 6, 5); ctx.fill();
    }
    ctx.rotate(-ang);
    ctx.translate(-px, -py);

    // 底座光晕
    const g = ctx.createRadialGradient(px, py, 2, px, py, 52 + power * 26);
    g.addColorStop(0, 'rgba(255,255,255,' + (0.28 + power * 0.35) + ')');
    g.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = g;
    ctx.beginPath(); ctx.arc(px, py, 52 + power * 26, 0, TAU); ctx.fill();
    ctx.restore();

    // 蓄力聚拢粒子（起点跟随后退后的炮口）
    if (power > 0.02) {
      const mo = 16 - back * 0.9;
      const mx = padX() + Math.cos(ang) * mo, my = padY() + Math.sin(ang) * mo;
      ctx.fillStyle = 'rgba(255,235,170,' + (0.5 * power) + ')';
      for (let i = 0; i < 7; i++) {
        const a = ang + Math.PI + (t * 2.4 + i * 0.9) % TAU;
        const r = 70 - ((t * 130 + i * 22) % 70);
        if (r < 8) continue;
        ctx.globalAlpha = power * (1 - r / 70);
        ctx.beginPath();
        ctx.arc(mx + Math.cos(a) * r, my + Math.sin(a) * r, 1.6 + power * 1.8, 0, TAU);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
    }

    // 待发射弹珠（跟随后退后的炮口）
    if (S.phase === 'aim' && S.bullets > 0) {
      const mo = 16 - back * 0.9;
      const bx = padX() + Math.cos(ang) * mo, by = padY() + Math.sin(ang) * mo;
      const cc = COLORS[S.pending];
      const pulse = 1 + Math.sin(t * 6) * 0.07;
      const rad = BALL_R * (1 + power * 0.45);
      ctx.globalAlpha = .3;
      ctx.fillStyle = cc.c;
      ctx.beginPath(); ctx.arc(bx, by, rad * 2.6 * pulse, 0, TAU); ctx.fill();
      ctx.globalAlpha = 1;
      const bgr = ctx.createRadialGradient(bx - 2, by - 2, 1, bx, by, rad);
      bgr.addColorStop(0, '#ffffff'); bgr.addColorStop(.45, cc.l); bgr.addColorStop(1, cc.c);
      ctx.fillStyle = bgr;
      ctx.beginPath(); ctx.arc(bx, by, rad, 0, TAU); ctx.fill();
      ctx.strokeStyle = 'rgba(255,255,255,.85)'; ctx.lineWidth = 1.6;
      ctx.beginPath(); ctx.arc(bx, by, rad, 0, TAU); ctx.stroke();
      if (power > 0.98) {   // 满力光环
        ctx.strokeStyle = 'rgba(255,224,120,' + (0.4 + 0.4 * Math.sin(t * 10)) + ')';
        ctx.lineWidth = 2;
        ctx.beginPath(); ctx.arc(bx, by, rad + 7 + Math.sin(t * 10) * 2, 0, TAU); ctx.stroke();
      }
    }
  }

  /* ---------------- 绘制：光柱 ---------------- */
  function drawPillars(t) {
    for (const p of S.pillars) {
      const x = p.x, y = p.y;
      const fl = p.flash;

      // 光晕
      const g = ctx.createRadialGradient(x, y, 0, x, y, PILLAR_R * 2.9);
      g.addColorStop(0, 'rgba(150,235,255,' + (0.42 + fl * 0.4) + ')');
      g.addColorStop(.35, 'rgba(90,180,255,.16)');
      g.addColorStop(1, 'rgba(90,180,255,0)');
      ctx.fillStyle = g;
      ctx.beginPath(); ctx.arc(x, y, PILLAR_R * 2.9, 0, TAU); ctx.fill();

      ctx.save();
      ctx.translate(x, y);

      // 外虚线环
      ctx.save();
      ctx.rotate(t * 0.7 * p.spin + p.ph);
      ctx.setLineDash([7, 9]);
      ctx.strokeStyle = 'rgba(180,240,255,.55)';
      ctx.lineWidth = 2;
      ctx.beginPath(); ctx.arc(0, 0, PILLAR_R + 11, 0, TAU); ctx.stroke();
      ctx.setLineDash([]);
      ctx.restore();

      // 旋转花瓣
      ctx.save();
      ctx.rotate(-t * 1.5 * p.spin + p.ph);
      for (let i = 0; i < 3; i++) {
        const a = i * TAU / 3;
        const s = 0.42;
        const pg = ctx.createLinearGradient(0, 0, Math.cos(a) * 30, Math.sin(a) * 30);
        pg.addColorStop(0, 'rgba(255,255,255,' + (.55 + fl * .4) + ')');
        pg.addColorStop(1, 'rgba(120,220,255,.12)');
        ctx.fillStyle = pg;
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.quadraticCurveTo(Math.cos(a + s) * 19, Math.sin(a + s) * 19, Math.cos(a) * 30, Math.sin(a) * 30);
        ctx.quadraticCurveTo(Math.cos(a - s) * 19, Math.sin(a - s) * 19, 0, 0);
        ctx.fill();
      }
      ctx.restore();

      // 核心
      const pulse = 1 + Math.sin(t * 3 + p.ph) * 0.08 + fl * 0.25;
      const cg = ctx.createRadialGradient(0, 0, 1, 0, 0, PILLAR_R * pulse);
      cg.addColorStop(0, '#ffffff');
      cg.addColorStop(.3, '#d6f6ff');
      cg.addColorStop(.72, 'rgba(90,200,255,' + (.55 + fl * .3) + ')');
      cg.addColorStop(1, 'rgba(60,140,255,0)');
      ctx.fillStyle = cg;
      ctx.beginPath(); ctx.arc(0, 0, PILLAR_R * pulse, 0, TAU); ctx.fill();

      // 内核六边形
      ctx.rotate(t * 0.9 + p.ph);
      ctx.strokeStyle = 'rgba(255,255,255,.9)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      for (let i = 0; i <= 6; i++) {
        const a = i * TAU / 6;
        const r2 = 9;
        i ? ctx.lineTo(Math.cos(a) * r2, Math.sin(a) * r2) : ctx.moveTo(Math.cos(a) * r2, Math.sin(a) * r2);
      }
      ctx.closePath(); ctx.stroke();
      ctx.fillStyle = '#ffffff';
      ctx.beginPath(); ctx.arc(0, 0, 3.2 + fl * 2, 0, TAU); ctx.fill();

      ctx.restore();
    }
  }

  /* ---------------- 绘制：砖块 ---------------- */
  function drawBricks(t) {
    for (const k of S.bricks) {
      if (k.pop > 0) {
        k.pop += 0.075;
        if (k.pop >= 1.4) k.pop = 0;
      }
      if (k.hitFlash > 0) k.hitFlash -= 0.06;
      if (!k.alive && k.pop <= 0) continue;

      ctx.save();
      ctx.translate(k.x, k.y);
      ctx.rotate(k.a);
      if (k.pop > 0) {
        const s = 1 + k.pop * 0.85;
        ctx.scale(s, s);
        ctx.globalAlpha = Math.max(0, 1 - k.pop);
      }

      const C = COLORS[k.c];
      // 底部阴影
      ctx.fillStyle = 'rgba(0,0,0,.22)';
      rr(ctx, -k.hw + 1, -k.hh + 3, k.hw * 2, k.hh * 2, 7); ctx.fill();

      // 主体
      ctx.fillStyle = brickGrad[k.c];
      rr(ctx, -k.hw, -k.hh, k.hw * 2, k.hh * 2, 7); ctx.fill();

      // 卡通描边
      ctx.strokeStyle = 'rgba(255,255,255,.55)';
      ctx.lineWidth = 2;
      rr(ctx, -k.hw + 1, -k.hh + 1, k.hw * 2 - 2, k.hh * 2 - 2, 6); ctx.stroke();

      // 高光
      ctx.fillStyle = 'rgba(255,255,255,.42)';
      rr(ctx, -k.hw + 4, -k.hh + 3.5, k.hw * 2 - 8, 6, 3); ctx.fill();
      ctx.fillStyle = 'rgba(255,255,255,.20)';
      rr(ctx, -k.hw + 4, k.hh - 6, k.hw * 2 - 8, 3, 1.5); ctx.fill();

      // 小表情
      ctx.fillStyle = 'rgba(30,20,50,.34)';
      const ex = 5.5, ey = -1.5 + Math.sin(t * 1.4 + k.x * 0.05) * 0.5;
      ctx.beginPath(); ctx.arc(-ex, ey, 1.9, 0, TAU); ctx.fill();
      ctx.beginPath(); ctx.arc(ex, ey, 1.9, 0, TAU); ctx.fill();
      ctx.strokeStyle = 'rgba(30,20,50,.28)';
      ctx.lineWidth = 1.4; ctx.lineCap = 'round';
      ctx.beginPath(); ctx.arc(0, 2.5, 3.4, 0.25 * Math.PI, 0.75 * Math.PI); ctx.stroke();

      if (k.hitFlash > 0) {
        ctx.globalAlpha = k.hitFlash * 0.6;
        ctx.fillStyle = '#ffffff';
        rr(ctx, -k.hw, -k.hh, k.hw * 2, k.hh * 2, 7); ctx.fill();
      }
      ctx.restore();
      ctx.globalAlpha = 1;
    }
  }

  /* ---------------- 绘制：弹珠 ---------------- */
  function drawBalls(t) {
    for (const b of S.balls) {
      const C = COLORS[b.c];
      const sp = Math.hypot(b.vx, b.vy);
      const hot = sp >= V_SPLIT;
      const alpha = b.fade > 0 ? clamp(b.fade, 0, 1) : 1;

      // 拖尾
      const tr = b.trail;
      if (tr.length >= 4) {
        ctx.lineCap = 'round';
        for (let i = 2; i < tr.length; i += 2) {
          const f = i / tr.length;
          ctx.globalAlpha = f * 0.5 * alpha;
          ctx.strokeStyle = hot ? '#ffffff' : C.l;
          ctx.lineWidth = BALL_R * 1.5 * f;
          ctx.beginPath();
          ctx.moveTo(tr[i - 2], tr[i - 1]);
          ctx.lineTo(tr[i], tr[i + 1]);
          ctx.stroke();
        }
        ctx.globalAlpha = 1;
      }

      ctx.globalAlpha = alpha;
      // 外发光
      ctx.globalAlpha = (hot ? 0.42 : 0.26) * alpha;
      ctx.fillStyle = C.c;
      ctx.beginPath(); ctx.arc(b.x, b.y, BALL_R * (hot ? 3.1 : 2.4), 0, TAU); ctx.fill();

      // 速度线
      if (hot) {
        const a = Math.atan2(b.vy, b.vx);
        ctx.globalAlpha = 0.5 * alpha;
        ctx.strokeStyle = '#ffffff'; ctx.lineWidth = 2; ctx.lineCap = 'round';
        for (let i = 0; i < 3; i++) {
          const off = (i - 1) * 5;
          const bx = b.x - Math.cos(a) * 14 - Math.sin(a) * off;
          const by = b.y - Math.sin(a) * 14 + Math.cos(a) * off;
          ctx.beginPath();
          ctx.moveTo(bx, by);
          ctx.lineTo(bx - Math.cos(a) * 12, by - Math.sin(a) * 12);
          ctx.stroke();
        }
      }

      // 弹珠本体
      ctx.globalAlpha = alpha;
      const g = ctx.createRadialGradient(b.x - 2.5, b.y - 3, 0.8, b.x, b.y, BALL_R + 1);
      g.addColorStop(0, '#ffffff');
      g.addColorStop(.42, C.l);
      g.addColorStop(1, C.c);
      ctx.fillStyle = g;
      ctx.beginPath(); ctx.arc(b.x, b.y, BALL_R, 0, TAU); ctx.fill();
      ctx.strokeStyle = hot ? '#ffffff' : 'rgba(255,255,255,.7)';
      ctx.lineWidth = hot ? 2 : 1.3;
      ctx.beginPath(); ctx.arc(b.x, b.y, BALL_R, 0, TAU); ctx.stroke();
      ctx.globalAlpha = 1;
    }
  }

  /* ---------------- 绘制：粒子 ---------------- */
  function drawFX() {
    for (let i = S.fx.length - 1; i >= 0; i--) {
      const f = S.fx[i];
      const k = clamp(f.life, 0, 1);
      if (f.t === 'p' || f.t === 'd') {
        f.x += f.vx / 60; f.y += f.vy / 60;
        f.vx *= 0.94; f.vy *= 0.94; f.vy += 3;
        f.rot += f.vr / 60;
        f.life -= 1 / 60 / f.dl;
        ctx.globalAlpha = k;
        ctx.save();
        ctx.translate(f.x, f.y); ctx.rotate(f.rot);
        ctx.fillStyle = f.c;
        if (f.t === 'd') { rr(ctx, -f.sz / 2, -f.sz / 2, f.sz, f.sz, 2); ctx.fill(); }
        else { ctx.beginPath(); ctx.arc(0, 0, f.sz * k, 0, TAU); ctx.fill(); }
        ctx.restore();
        ctx.globalAlpha = 1;
      } else if (f.t === 'r') {
        f.life -= 1 / 60 / f.dl;
        ctx.globalAlpha = k * 0.85;
        ctx.strokeStyle = f.c; ctx.lineWidth = f.wid * k;
        ctx.beginPath();
        ctx.arc(f.x, f.y, f.max * (1.05 - k) + 4, 0, TAU);
        ctx.stroke();
        ctx.globalAlpha = 1;
      } else if (f.t === 'w') {
        f.life -= 1 / 60 / f.dl;
        ctx.save();
        ctx.translate(f.x, f.y); ctx.rotate(f.a + Math.PI / 2);
        ctx.globalAlpha = k * 0.6;
        ctx.strokeStyle = f.c; ctx.lineWidth = 3; ctx.lineCap = 'round';
        const w = 16 * k + 6;
        ctx.beginPath();
        ctx.moveTo(-w, 0); ctx.lineTo(w, 0);
        ctx.stroke();
        ctx.restore();
        ctx.globalAlpha = 1;
      }
      if (f.life <= 0) S.fx.splice(i, 1);
    }

    // 飘字
    for (let i = S.texts.length - 1; i >= 0; i--) {
      const tx = S.texts[i];
      tx.life -= 1 / 60 / tx.dl;
      tx.y -= 0.55;
      const k = clamp(tx.life, 0, 1);
      ctx.globalAlpha = k;
      ctx.font = '800 ' + tx.sz + 'px system-ui, "PingFang SC", sans-serif';
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.lineWidth = 4; ctx.strokeStyle = 'rgba(10,14,40,.55)';
      ctx.strokeText(tx.txt, tx.x, tx.y);
      ctx.fillStyle = tx.c;
      ctx.fillText(tx.txt, tx.x, tx.y);
      if (tx.life <= 0) S.texts.splice(i, 1);
    }
    ctx.globalAlpha = 1;
  }

  /* ---------------- 弹道预测（瞄准用） ---------------- */
  let traceCache = null, traceKey = '';
  function traceAim(ang, speed) {
    let x = padX() + Math.cos(ang) * 16, y = padY() + Math.sin(ang) * 16;
    let vx = Math.cos(ang) * speed, vy = Math.sin(ang) * speed;
    const pts = [x, y];
    let hit = null, bounces = 0;
    for (let i = 0; i < 150 && bounces < 2; i++) {
      x += vx * 0.011; y += vy * 0.011;                 // 约 10px/步
      pts.push(x, y);
      for (const p of S.pillars) {                       // 光柱
        const dx = x - p.x, dy = y - p.y, lim = PILLAR_R + BALL_R;
        if (dx * dx + dy * dy < lim * lim && !hit) { hit = { x, y, t: 'p' }; }
      }
      const k = brickAt(x, y, BALL_R);                   // 砖块
      if (k && !hit) { hit = { x, y, t: 'b', ok: k.c === S.pending }; }
      const dx = x - CX, dy = y - CY;                    // 外壳反弹
      const d = Math.hypot(dx, dy);
      if (d > SHELL_R - BALL_R) {
        const nx = dx / d, ny = dy / d;
        x = CX + nx * (SHELL_R - BALL_R); y = CY + ny * (SHELL_R - BALL_R);
        const dot = vx * nx + vy * ny;
        vx -= 2 * dot * nx; vy -= 2 * dot * ny;
        pts[pts.length - 2] = x; pts[pts.length - 1] = y;
        bounces++;
      }
    }
    return { pts, hit };
  }

  /* ---------------- 绘制：蓄力指示 ---------------- */
  function drawCharge() {
    if (S.phase !== 'aim' || S.bullets <= 0) return;
    const p = S.charging ? S.charge : 0;
    const ang = S.aim;                    // 跟随鼠标的炮口朝向
    const px = padX() + Math.cos(ang) * (16 - S.recoil * 23), py = padY() + Math.sin(ang) * (16 - S.recoil * 23);
    const speed = powerToSpeed(p);
    const canSplit = speed >= V_SPLIT;

    ctx.save();

    // 弹道预测线（含一次外壳反弹；命中光柱/砖块有标记）—— 按角度/力度量化缓存，避免每帧全量重算
    const tkey = ang.toFixed(2) + '|' + Math.round(p * 20) + '|' + S.left;
    if (tkey !== traceKey) { traceCache = traceAim(ang, speed); traceKey = tkey; }
    const { pts, hit } = traceCache;
    ctx.setLineDash([8, 10]);
    ctx.lineDashOffset = -S.t * 60;
    ctx.strokeStyle = canSplit ? 'rgba(150,235,255,.9)' : 'rgba(255,255,255,.55)';
    ctx.lineWidth = 2.6; ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(pts[0], pts[1]);
    for (let i = 2; i < pts.length; i += 2) ctx.lineTo(pts[i], pts[i + 1]);
    ctx.stroke();
    ctx.setLineDash([]);
    if (hit) {
      ctx.strokeStyle = hit.t === 'p' ? '#8fe6ff' : (hit.ok ? '#7dff9b' : '#ff8a8a');
      ctx.lineWidth = 2.6;
      ctx.beginPath(); ctx.arc(hit.x, hit.y, 20 + Math.sin(S.t * 8) * 3, 0, TAU); ctx.stroke();
    }

    // 蓄力环
    const R = 26;
    ctx.lineWidth = 5;
    ctx.strokeStyle = 'rgba(10,16,44,.55)';
    ctx.beginPath(); ctx.arc(px, py, R, 0, TAU); ctx.stroke();
    if (p > 0.001) {
      const g = ctx.createLinearGradient(px - R, py - R, px + R, py + R);
      g.addColorStop(0, '#8fe6ff'); g.addColorStop(1, canSplit ? '#ffd93d' : '#ff9a2b');
      ctx.strokeStyle = g;
      ctx.lineCap = 'round';
      ctx.beginPath();
      ctx.arc(px, py, R, -Math.PI / 2, -Math.PI / 2 + TAU * p);
      ctx.stroke();
    }
    // 达到分裂阈值的光点
    if (canSplit) {
      ctx.fillStyle = 'rgba(180,245,255,' + (0.5 + 0.5 * Math.sin(S.t * 9)) + ')';
      ctx.beginPath(); ctx.arc(px, py, R + 6, 0, TAU); ctx.fill();
    }

    // 力度百分比
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.font = '800 15px system-ui, "PingFang SC", sans-serif';
    ctx.lineWidth = 4; ctx.strokeStyle = 'rgba(10,14,40,.6)';
    const label = Math.round(p * 100) + '%';
    ctx.strokeText(label, px, py);
    ctx.fillStyle = canSplit ? '#ffe066' : '#ffffff';
    ctx.fillText(label, px, py);
    ctx.restore();
  }

  /* ---------------- 绘制：关卡横幅 ---------------- */
  function drawBanner() {
    if (S.banner <= 0) return;
    const k = S.banner / 2.0;
    const a = k > .75 ? (1 - k) * 4 : Math.min(1, k * 2.2);
    ctx.save();
    ctx.globalAlpha = a;
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.font = '800 20px system-ui, "PingFang SC", sans-serif';
    ctx.fillStyle = 'rgba(255,255,255,.65)';
    ctx.fillText('第 ' + S.lv + ' 关', CX, CY - 24);
    ctx.font = '800 62px system-ui, "PingFang SC", sans-serif';
    ctx.lineWidth = 8; ctx.strokeStyle = 'rgba(10,14,40,.5)';
    ctx.strokeText(S.total + ' 块', CX, CY + 22);
    const g = ctx.createLinearGradient(0, CY - 20, 0, CY + 60);
    g.addColorStop(0, '#ffffff'); g.addColorStop(1, '#8fe6ff');
    ctx.fillStyle = g;
    ctx.fillText(S.total + ' 块', CX, CY + 22);
    ctx.restore();
    ctx.globalAlpha = 1;
  }

  /* ---------------- 主渲染 ---------------- */
  function render() {
    const sx = S.shake > 0 ? rnd(-S.shake, S.shake) : 0;
    const sy = S.shake > 0 ? rnd(-S.shake, S.shake) : 0;
    if (S.shake > 0) S.shake = Math.max(0, S.shake - 0.55);

    ctx.setTransform(pxRatio * viewK, 0, 0, pxRatio * viewK, sx * viewK, sy * viewK);
    drawBG(S.t);
    drawShell(S.t);
    drawPillars(S.t);
    drawBricks(S.t);
    drawFX();
    drawBalls(S.t);
    drawCharge();
    drawBanner();

    // 边缘暗角
    ctx.setTransform(pxRatio * viewK, 0, 0, pxRatio * viewK, 0, 0);
    const vg = ctx.createRadialGradient(CX, CY, 240, CX, CY, 470);
    vg.addColorStop(0, 'rgba(0,0,0,0)');
    vg.addColorStop(1, 'rgba(4,6,22,.55)');
    ctx.fillStyle = vg; ctx.fillRect(0, 0, W, H);
  }

  /* ---------------- 尺寸 ---------------- */
  let pxRatio = 1, viewK = 1;
  function resize() {
    const rect = stage.getBoundingClientRect();
    pxRatio = Math.min(window.devicePixelRatio || 1, 2);
    cvs.width = Math.round(rect.width * pxRatio);
    cvs.height = Math.round(rect.height * pxRatio);
    viewK = rect.width / W;
  }
  window.addEventListener('resize', resize);

  /* ---------------- 输入 ---------------- */
  function canCharge() { return S.phase === 'aim' && S.bullets > 0; }
  function toLocal(e) {
    const r = cvs.getBoundingClientRect();
    return {
      x: (e.clientX - r.left) * W / r.width,
      y: (e.clientY - r.top) * H / r.height
    };
  }
  function startCharge() {
    if (!canCharge() || S.charging) return;
    S.charging = true; S.charge = 0;
    SFX.charge();
    setChip('松手发射 · 本发 ' + COLORS[S.pending].n + '色');
  }
  cvs.addEventListener('pointermove', e => {
    if (S.phase !== 'aim') return;
    const p = toLocal(e);
    aimAt(p.x, p.y);
    e.preventDefault();
  });
  cvs.addEventListener('pointerdown', e => {
    Sound.resume();
    if (!canCharge()) return;
    cvs.setPointerCapture(e.pointerId);
    const p = toLocal(e);
    aimAt(p.x, p.y);            // 按下瞬间也朝鼠标方向转向
    startCharge();
    e.preventDefault();
  });
  cvs.addEventListener('pointerup', e => {
    if (!S.charging) return;
    launch();
    e.preventDefault();
  });
  cvs.addEventListener('pointercancel', () => { S.charging = false; S.charge = 0; });
  cvs.addEventListener('contextmenu', e => e.preventDefault());

  window.addEventListener('keydown', e => {
    if (e.code === 'Space') {
      e.preventDefault();
      if (e.repeat) return;
      Sound.resume();
      startCharge();
    }
  });
  window.addEventListener('keyup', e => {
    if (e.code === 'Space' && S.charging) { e.preventDefault(); launch(); }
  });
  window.addEventListener('keyup', e => {
    if (e.code === 'Space') {
      e.preventDefault();
      if (S.charging) launch();
    }
  });

  /* ---------------- 弹药栏 / HUD ---------------- */
  function swatch(cls, ci, extra) {
    const el = document.createElement('div');
    el.className = cls;
    el.style.background = 'linear-gradient(160deg,' + COLORS[ci].l + ',' + COLORS[ci].c + ')';
    if (extra !== undefined) el.innerHTML = '<span>' + extra + '</span>';
    return el;
  }
  function buildAmmo() {
    const counts = colorCounts();
    // 场上各颜色剩余
    remain.innerHTML = '';
    for (let i = 0; i < S.colors; i++) {
      const el = swatch('cnt' + (counts[i] === 0 ? ' empty' : ''), i, counts[i]);
      el.title = COLORS[i].n + '色砖块剩余 ' + counts[i];
      remain.appendChild(el);
    }
  }
  function syncHUD() {
    hLevel.textContent = S.lv;
    S.left = aliveBricks();
    hLeft.textContent = S.left;
    hTotal.textContent = S.total;
    hBullet.textContent = S.bullets;
    hScore.textContent = S.score;
    let d = '';
    for (let i = 0; i < S.maxBuys; i++) d += '<i class="' + (i < S.maxBuys - S.buys ? '' : 'off') + '"></i>';
    hDots.innerHTML = d;
    buildAmmo();
  }
  function setChip(txt) {
    if (chip.textContent === txt) return;
    chip.textContent = txt;
    chip.classList.toggle('hide', !txt);
  }

  /* ---------------- 弹窗 ---------------- */
  function showOverlay(o) {
    ovIcon.textContent = o.icon || '';
    ovTitle.textContent = o.title || '';
    ovDesc.innerHTML = o.desc || '';
    ovStats.innerHTML = (o.stats || []).map(s => '<div><b>' + s.v + '</b>' + s.k + '</div>').join('');
    ovBtns.innerHTML = '';
    (o.btns || []).forEach(b => {
      const el = document.createElement('button');
      el.className = 'pbtn' + (b.ghost ? ' ghost' : '') + (b.gold ? ' gold' : '');
      el.textContent = b.label;
      el.onclick = () => { Sound.resume(); hideOverlay(); b.fn && b.fn(); };
      ovBtns.appendChild(el);
    });
    overlay.classList.remove('hidden');
  }
  function hideOverlay() { overlay.classList.add('hidden'); }

  function showBuy() {
    SFX.lose();
    setChip('');
    showOverlay({
      icon: '🪙',
      title: '弹珠耗尽！',
      desc: '场上还剩 <b>' + aliveBricks() + '</b> 块砖。<br>是否购买补给弹珠继续？',
      stats: [
        { k: '剩余补给', v: (S.maxBuys - S.buys) + '/3' },
        { k: '本次补给', v: '+' + S.grant },
        { k: '剩余砖块', v: aliveBricks() }
      ],
      btns: [
        {
          label: '购买补给 +' + S.grant + ' 颗', gold: true, fn: () => {
            S.buys++; S.bullets += S.grant;
            S.phase = 'aim'; SFX.buy();
            S.pending = pickColor(); buildAmmo(); syncHUD();
            setChip('补给完成 · 继续瞄准');
          }
        },
        { label: '放弃本关', ghost: true, fn: () => showLose() }
      ]
    });
  }
  function showWin() {
    const bonus = S.bullets * 12 + Math.max(0, 3 - S.buys) * 50;
    S.score += bonus;
    S.bank = S.score;
    SFX.win();
    for (let i = 0; i < 26; i++) {
      S.fx.push({
        t: 'd', x: CX + rnd(-160, 160), y: CY + rnd(-160, 160),
        vx: rnd(-260, 260), vy: rnd(-320, -60), life: 1, dl: rnd(1.2, 2),
        sz: rnd(5, 11), c: COLORS[irnd(0, COLORS.length - 1)].c, rot: Math.random() * TAU, vr: rnd(-10, 10)
      });
    }
    syncHUD();
    showOverlay({
      icon: '🏆',
      title: '通关成功！',
      desc: '你清空了整个砖块舞台',
      stats: [
        { k: '剩余弹珠', v: S.bullets },
        { k: '最高连击', v: S.bestCombo },
        { k: '通关奖励', v: '+' + bonus }
      ],
      btns: [
        { label: '进入第 ' + (S.lv + 1) + ' 关', fn: () => startLevel(S.lv + 1, true) },
        { label: '重玩本关', ghost: true, fn: () => startLevel(S.lv, false) }
      ]
    });
  }
  function showLose() {
    SFX.lose();
    S.phase = 'over';
    showOverlay({
      icon: '💥',
      title: '关卡失败',
      desc: '3 次补给都用完了，砖块还剩 <b>' + aliveBricks() + '</b> 块。',
      stats: [
        { k: '抵达关卡', v: S.lv },
        { k: '累计分数', v: S.score },
        { k: '清除砖块', v: S.destroyed + '/' + S.total }
      ],
      btns: [
        { label: '重玩本关', fn: () => startLevel(S.lv, false) },
        { label: '回到第 1 关', ghost: true, fn: () => { S.bank = 0; startLevel(1, false); } }
      ]
    });
  }

  document.getElementById('btnRestart').onclick = () => { S.bank = 0; startLevel(1, false); };
  document.getElementById('btnSound').onclick = e => {
    Sound.muted = !Sound.muted;
    e.currentTarget.textContent = Sound.muted ? '🔈' : '🔊';
    e.currentTarget.classList.toggle('muted', Sound.muted);
  };

  /* ---------------- 主循环 ---------------- */
  let last = performance.now(), acc = 0;
  const FIXED = 1 / 120;
  function loop(now) {
    let dt = (now - last) / 1000;
    last = now;
    if (dt > 0.05) dt = 0.05;
    Sound.tick();

    if (S.phase !== 'over' || S.endTimer > 0) {
      acc += dt;
      let guard = 0;
      while (acc >= FIXED && guard++ < 12) {
        S.t += FIXED;
        physics(FIXED);
        acc -= FIXED;
      }
      if (S.banner > 0) S.banner = Math.max(0, S.banner - dt);
    } else {
      S.t += dt * 0.4;
      updatePillars(S.t);
    }

    checkRound();
    // 蓄力推进
    if (S.charging) {
      const prev = S.charge;
      S.charge = Math.min(1, S.charge + dt / CHARGE_TIME);
      if (prev < 1 && S.charge >= 1) { S.shake = Math.min(9, S.shake + 3); Sound.tone({ f: 900, to: 1500, d: 0.18, t: 'square', v: 0.07 }); }
    }
    // 炮口转向平滑（快速跟上鼠标，约0.08s）
    {
      let d = S.aimTarget - S.aim;
      while (d > Math.PI) d -= TAU;
      while (d < -Math.PI) d += TAU;
      S.aim += d * (1 - Math.pow(0.00002, dt));
    }
    // 炮管后移动画：蓄力时随力度平滑后退，松手后快速复位
    (() => {
      const target = S.charging ? S.charge * 0.85 : 0;
      const k = S.charging ? 1 - Math.pow(0.001, dt)   // 蓄力：约 0.2s 跟上
                          : 1 - Math.pow(0.00002, dt); // 复位：约 0.12s 弹回
      S.recoil += (target - S.recoil) * k;
    })();
    if (S.phase === 'fly') setChip('弹珠飞行中 · ' + S.balls.length + ' 颗');
    render();
    requestAnimationFrame(loop);
  }

  // 调试 / 自动化接口
  window.__BSTORM__ = { S, startLevel, launch, pickColor, powerToSpeed, aimAt, pad: () => ({ x: padX(), y: padY() }), V_SPLIT, V_LAUNCH_LO, V_LAUNCH_HI, CHARGE_TIME, PILLAR_RING, PILLAR_R, SHELL_R, BALL_R };

  /* ---------------- 启动 ---------------- */
  buildStaticGrads();
  resize();
  startLevel(1, false);
  requestAnimationFrame(loop);
  window.addEventListener('load', resize);
})();
