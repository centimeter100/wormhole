import {
  r as e
}
from'https://osugacha.com/assets/rolldown-runtime-XKyaHtl9.js';
import {
  F as t,
  L as n,
  Q as r,
  c as i,
  et as a,
  l as o,
  u as s,
  z as c
}
from'https://osugacha.com/assets/overlays-CTURBTFB.js';
var l = e(a(), 1);

function nextProb(t) {
  let new_t = t + 1831565813 >>> 0;
  let e = t;
  e = Math.imul(e ^ e >>> 15, e | 1);
  e ^= e + Math.imul(e ^ e >>> 7, e | 61);
  let final = ((e ^ e >>> 14) >>> 0) / 2**32;
  return { next: new_t, prob: final };
}

globalThis.shouldPrintRNG = false;
globalThis.shoudPrintTrace = false;
globalThis.nextProb = nextProb;

function u(e) {
  console.log("Initialize with seed: " + e);
  
  let t = e >>> 0;
  globalThis.printSeed = function() { 
    console.log("Current state: " + t);

    let { prob } = nextProb(t);

    console.log("Next random number: " + prob);
  }

  globalThis.getRNGState = function() {
    return t;
  }
  
  return {
    next() {
      let { next, prob } = nextProb(t);
      t = next;
      if (globalThis.shouldPrintRNG) {
        console.log("RNG updated: " + t + " -> " + next);
        console.log("RNG returned: " + prob);
      }

      if (globalThis.shoudPrintTrace) {
        console.trace();
      }
      
      return prob;
    }
  }
}
function d(e) {
  let t = 2166136261;
  for (let n = 0; n < e.length; n++) t = Math.imul(t ^ e.charCodeAt(n), 16777619);
  return t = Math.imul(t ^ t >>> 15, 739982445),
  t = Math.imul(t ^ t >>> 12, 695872825),
  ((t ^ t >>> 15) >>> 0) / 2**32
}
function ee(e, t) {
  let n = Object.entries(t),
  r = n.reduce((e, [
    ,
    t
  ]) => e + t, 0),
  i = d(e) * r;
  for (let[e,
  t]of n) {
    if (i < t) return e;
    i -= t
  }
  return n[n.length - 1][0]
}
var f = {
  fame: {
    hi: 150000,
    curve: 2.7
  },
  mapping: {
    lo: 200,
    hi: 300000,
    subsWeight: 4.8,
    mapCredit: 560,
    mapSoftCap: 20,
    guestWeight: 0.5,
    lovedWeight: 0.5
  },
  skill: {
    weight: 0.7,
    points: [
      [1,
      1],
      [
        5,
        0.8
      ],
      [
        25,
        0.52
      ],
      [
        250,
        0.34
      ],
      [
        2500,
        0.15
      ],
      [
        20000,
        0
      ]
    ]
  },
  second: 0.275
},
te = 10000,
p = [
  {
    rarity: `divine`,
    minScore: 1.035
  },
  {
    rarity: `mythic`,
    minScore: 0.73
  },
  {
    rarity: `legendary`,
    minScore: 0.6
  },
  {
    rarity: `epic`,
    minScore: 0.48
  },
  {
    rarity: `rare`,
    minScore: 0.38
  },
  {
    rarity: `uncommon`,
    minScore: 0.25
  }
];
[
  ...t
].reverse().filter(e => e !== `common` && e !== `divine`);
var ne = `legendary`;
function m(e, t = 3) {
  let n = 100 * 10**t,
  r = e.map(e => e * n),
  i = r.map(Math.floor),
  a = Math.round(r.reduce((e, t) => e + t, 0)) - i.reduce((e, t) => e + t, 0),
  o = r.map((e, t) => [e - i[t],
  t]).sort((e, t) => t[0] - e[0]);
  for (let[,
  e]of o) {
    if (a <= 0) break;
    i[e]++,
    a--
  }
  return i.map(e => e / 10**t)
}
var re = 1.5,
h = e => Math.floor(e * re),
g = [
  `tank`,
  `dps`,
  `support`,
  `cc`
],
_ = {
  tank: {
    name: `Tank`,
    identity: `Draws attacks and shields the team.`,
    atk: 0.85,
    hp: 1.35,
    spd: 0.94,
    def: 1.45,
    crit: 0,
    guard: 70,
    color: `#6f8fff`,
    glyph: `⛨`,
    odds: 24
  },
  dps: {
    name: `DPS`,
    identity: `Deals the damage.`,
    atk: 1.04,
    hp: 1.3,
    spd: 1.04,
    def: 0.85,
    crit: 0.04,
    guard: 45,
    color: `#ff6b5c`,
    glyph: `⚔`,
    odds: 28
  },
  support: {
    name: `Support`,
    identity: `Heals the team and keeps it standing.`,
    atk: 0.95,
    hp: 1.25,
    spd: 1.06,
    def: 1.05,
    crit: 0,
    guard: 45,
    color: `#8ce6a8`,
    glyph: `✚`,
    odds: 24
  },
  cc: {
    name: `CC`,
    identity: `Weakens and delays the enemy.`,
    atk: 0.9,
    hp: 1.2,
    spd: 1.1,
    def: 1.02,
    crit: 0,
    guard: 45,
    color: `#b48cff`,
    glyph: `☾`,
    odds: 24
  }
},
ie = {
  name: `Basic`,
  text: `Hits one enemy for 100% ATK and wears down its Guard. +1 Skill Point.`,
  targets: `enemy`,
  single: !0
},
ae = 0.03,
v = e => e === `support` ? {
  ...ie,
  text: `Hits one enemy for 100% ATK and heals the lowest-HP ally for ${ Math.round(ae * 100) }% of the Support’s max HP. +1 Skill Point.`
}
 : ie,
y = {
  bulwark: 0.7,
  ironSkin: 2.6,
  counterStance: 2.2,
  counterHit: 0.8,
  protect: 0.2,
  ironSkinProtect: 0.35,
  mendHeal: 0.18,
  sanctuaryHeal: 0.14,
  hymnHeal: 0.1,
  hymnAtk: 0.35,
  hymnAdvance: 0.5,
  overtureSp: 1,
  overtureHeal: 0.08,
  overtureAdvance: 0.4,
  curseHit: 0.9,
  curseExpose: 0.45,
  curseSpread: 0.15,
  witherHit: 0.9,
  witherWeaken: 0.45,
  witherSpread: 0.12,
  stallHit: 0.8,
  stallDelay: 0.6,
  stallSlow: 0.2,
  stallSpread: 0.1,
  fractureHit: 1.25,
  fractureCrack: 0.35,
  fractureExpose: 0.45,
  fractureSpread: 15
},
b = y,
x = e => `${ Math.round(e * 1000) / 10 }%`,
oe = {
  bulwark: {
    id: `bulwark`,
    cls: `tank`,
    name: `Bulwark`,
    text: `Shields every ally for ${ x(b.bulwark) } of the Tank’s DEF and Taunts for 2 turns.`,
    targets: `none`
  },
  'iron-skin': {
    id: `iron-skin`,
    cls: `tank`,
    name: `Iron Skin`,
    text: `Shields itself for ${ x(b.ironSkin) } of its DEF and Taunts for 2 turns. While Taunting it takes ${ x(b.ironSkinProtect) } of the damage dealt to its allies (instead of ${ x(b.protect) }).`,
    targets: `none`
  },
  'shield-bash': {
    id: `shield-bash`,
    cls: `tank`,
    name: `Shield Bash`,
    text: `Hits one enemy for 130% with triple Guard damage and Taunts for 2 turns.`,
    targets: `enemy`,
    single: !0
  },
  'heavy-strike': {
    id: `heavy-strike`,
    cls: `dps`,
    name: `Heavy Strike`,
    text: `Hits one enemy for 155% with quadruple Guard damage.`,
    targets: `enemy`,
    single: !0
  },
  'blade-storm': {
    id: `blade-storm`,
    cls: `dps`,
    name: `Blade Storm`,
    text: `Hits every enemy for 72%.`,
    targets: `none`,
    aoe: !0
  },
  execute: {
    id: `execute`,
    cls: `dps`,
    name: `Execute`,
    text: `Hits one enemy for 155%, or 240% if it is under half HP.`,
    targets: `enemy`,
    single: !0
  },
  mend: {
    id: `mend`,
    cls: `support`,
    name: `Mend`,
    text: `Heals one ally for ${ x(b.mendHeal) } of the Support’s max HP.`,
    targets: `ally`
  },
  sanctuary: {
    id: `sanctuary`,
    cls: `support`,
    name: `Sanctuary`,
    text: `Heals every ally for ${ x(b.sanctuaryHeal) } of the Support’s max HP and removes one debuff from each.`,
    targets: `none`
  },
  'battle-hymn': {
    id: `battle-hymn`,
    cls: `support`,
    name: `Battle Hymn`,
    text: `Heals one ally for ${ x(b.hymnHeal) }, gives it +${ x(b.hymnAtk) } ATK for 2 turns and moves its turn up ${ x(b.hymnAdvance) }.`,
    targets: `ally`
  },
  curse: {
    id: `curse`,
    cls: `cc`,
    name: `Curse`,
    text: `Hits one enemy for ${ x(b.curseHit) } and Exposes it (+${ x(b.curseExpose) } damage taken) for 2 turns, and every other enemy by ${ x(b.curseSpread) }.`,
    targets: `enemy`,
    single: !0
  },
  wither: {
    id: `wither`,
    cls: `cc`,
    name: `Wither`,
    text: `Hits one enemy for ${ x(b.witherHit) }, Weakens it (−${ x(b.witherWeaken) } damage dealt) for 2 turns and strips its buffs (ATK up, DMG up, Ward); every other enemy is Weakened by ${ x(b.witherSpread) }.`,
    targets: `enemy`,
    single: !0
  },
  stall: {
    id: `stall`,
    cls: `cc`,
    name: `Stall`,
    text: `Hits one enemy for ${ x(b.stallHit) }, pushes its turn back ${ x(b.stallDelay) } and Slows it by ${ x(b.stallSlow) } for 2 turns; every other enemy's turn is pushed back ${ x(b.stallSpread) }.`,
    targets: `enemy`,
    single: !0
  },
  'counter-stance': {
    id: `counter-stance`,
    cls: `tank`,
    name: `Counter Stance`,
    text: `Shields itself for ${ x(b.counterStance) } of its DEF, Taunts for 2 turns and hits back for ${ x(b.counterHit) } whenever it’s attacked while Taunting.`,
    targets: `none`
  },
  'piercing-shot': {
    id: `piercing-shot`,
    cls: `dps`,
    name: `Piercing Shot`,
    text: `Hits one enemy for 135%, ignoring its shield and 30% of its DEF.`,
    targets: `enemy`,
    single: !0
  },
  overture: {
    id: `overture`,
    cls: `support`,
    name: `Overture`,
    text: `Gives the team ${ b.overtureSp } Skill Point, heals one ally for ${ x(b.overtureHeal) } and moves its turn up ${ x(b.overtureAdvance) }.`,
    targets: `ally`
  },
  fracture: {
    id: `fracture`,
    cls: `cc`,
    name: `Fracture`,
    text: `Hits one enemy for ${ x(b.fractureHit) } with quadruple Guard damage and Exposes it (+${ x(b.fractureCrack) } damage taken, +${ x(b.fractureExpose) } if that Breaks it) for 2 turns; every other enemy loses ${ b.fractureSpread } Guard.`,
    targets: `enemy`,
    single: !0
  }
};
Object.keys(oe);
var se = {
  tank: [
    `bulwark`,
    `iron-skin`,
    `shield-bash`,
    `counter-stance`
  ],
  dps: [
    `heavy-strike`,
    `blade-storm`,
    `execute`,
    `piercing-shot`
  ],
  support: [
    `mend`,
    `sanctuary`,
    `battle-hymn`,
    `overture`
  ],
  cc: [
    `curse`,
    `wither`,
    `stall`,
    `fracture`
  ]
},
S = [
  `guard-breaker`,
  `exploit`,
  `weak-point`,
  `follow-up`,
  `momentum`,
  `thrifty`,
  `guardian-angel`,
  `undying`,
  `vampirism`,
  `spiked-armor`,
  `deadeye`,
  `avenger`,
  `unshakable`,
  `ambush`,
  `encore`,
  `bloodlust`,
  `opportunist`,
  `bastion`,
  `lifeline`
],
C = {
  guardBreaker: 0.7,
  guardBreakerTaken: 0.25,
  guardBreakerEcho: 0.2,
  exploit: 0.45,
  exploitGuard: 0.25,
  weakPoint: 0.5,
  weakPointExpose: 0.2,
  followUp: 0.6,
  momentumSp: 2,
  momentumAdvance: 0.35,
  momentumDmg: 0.1,
  momentumTurns: 2,
  thrifty: 0.35,
  thriftyBuff: 0.2,
  thriftyTurns: 1,
  guardianAngel: 0.1,
  undyingDelay: 0.15,
  undyingE2Hp: 0.1,
  unshakableDebuff: 0.5,
  unshakablePush: 0.75,
  unshakableE2Dr: 0.05,
  vampirism: 0.2,
  spikedArmor: 0.25,
  spikedArmorTaunt: 0.35,
  deadeyeRate: 0.08,
  deadeyeDmg: 0.25,
  deadeyeVsLow: 0.15,
  deadeyeVsLowDmg: 0.2,
  avengerAtk: 0.3,
  avengerAdvance: 0.2,
  ambushStart: 0.45,
  encore: 0.2,
  bloodlust: 0.4,
  bloodlustAdvance: 0.5,
  opportunist: 0.35,
  bastion: 0.15,
  bastionStart: 0.1,
  lifeline: 0.01,
  lifelineHeal: 0.12
},
w = C,
T = e => `${ Math.round(e * 100) }%`,
E = {
  'guard-breaker': {
    name: `Guard Breaker`,
    text: `+${ T(w.guardBreaker) } Guard damage. The hit that Breaks an enemy deals ${ T(w.guardBreakerEcho) } of itself again, and the enemy takes ${ T(w.guardBreakerTaken) } more damage while Broken.`,
    combo: `Breaks enemies fast for Exploit, Follow-up and Momentum allies.`
  },
  exploit: {
    name: `Exploit`,
    text: `+${ T(w.exploitGuard) } Guard damage and +${ T(w.exploit) } damage to Broken enemies.`,
    combo: `Pairs with Guard Breaker.`
  },
  'weak-point': {
    name: `Weak Point`,
    text: `+${ T(w.weakPoint) } damage to Exposed enemies. Its crits Expose the target (+${ T(w.weakPointExpose) } damage taken) for 1 turn.`,
    combo: `Pairs with a CC that Curses.`
  },
  'follow-up': {
    name: `Follow-up`,
    text: `Attacks the same enemy for ${ T(w.followUp) } whenever its team breaks one.`,
    combo: `Pairs with Guard Breaker and Shield Bash.`
  },
  momentum: {
    name: `Momentum`,
    text: `Whenever it Breaks an enemy: its team gains ${ w.momentumSp } Skill Points and deals +${ T(w.momentumDmg) } damage for ${ w.momentumTurns } turns, and its next turn comes ${ T(w.momentumAdvance) } sooner.`,
    combo: `Pairs with Shield Bash and Heavy Strike: Breaks keep the whole team rolling.`
  },
  thrifty: {
    name: `Thrifty`,
    text: `Its Skill has a ${ T(w.thrifty) } chance to give its Skill Point back. Buffs from its Skill are ${ T(w.thriftyBuff) } stronger and last ${ w.thriftyTurns } turn longer.`
  },
  'guardian-angel': {
    name: `Guardian Angel`,
    text: `Shields an ally who drops under 30% HP for ${ T(w.guardianAngel) } of its own max HP (once per ally).`
  },
  undying: {
    name: `Undying`,
    text: `Survives one hit that would knock it out, at 1 HP, but its next turn comes ${ T(w.undyingDelay) } of a turn later.`
  },
  vampirism: {
    name: `Vampirism`,
    text: `Heals for ${ T(w.vampirism) } of the damage it deals.`
  },
  'spiked-armor': {
    name: `Spiked Armor`,
    text: `Whoever hits it takes damage equal to ${ T(w.spikedArmor) } of its DEF (${ T(w.spikedArmorTaunt) } while Taunting).`
  },
  deadeye: {
    name: `Deadeye`,
    text: `+${ T(w.deadeyeRate) } CRIT Rate and +${ T(w.deadeyeDmg) } CRIT DMG; against enemies under half HP, another +${ T(w.deadeyeVsLow) } and +${ T(w.deadeyeVsLowDmg) }.`
  },
  avenger: {
    name: `Avenger`,
    text: `Each ally knocked out gives it +${ T(w.avengerAtk) } ATK (up to twice) and moves its turn up ${ T(w.avengerAdvance) }.`
  },
  unshakable: {
    name: `Unshakable`,
    text: `Debuffs on it are ${ T(1 - w.unshakableDebuff) } weaker, and Breaks and Stalls push its turn back ${ T(1 - w.unshakablePush) } less.`
  },
  ambush: {
    name: `Ambush`,
    text: `Takes its first turn early: starts ${ T(1 - w.ambushStart) } of a turn ahead.`
  },
  encore: {
    name: `Encore`,
    text: `After its Skill, ${ T(w.encore) } chance to take another turn right away.`
  },
  bloodlust: {
    name: `Bloodlust`,
    text: `+${ T(w.bloodlust) } damage to enemies under half HP. Each enemy it knocks out moves its turn up ${ T(w.bloodlustAdvance) }.`
  },
  opportunist: {
    name: `Opportunist`,
    text: `+${ T(w.opportunist) } damage to debuffed enemies (Exposed, Weakened or Slowed).`,
    combo: `Pairs with any CC.`
  },
  bastion: {
    name: `Bastion`,
    text: `Starts each fight shielded for ${ T(w.bastionStart) } of its max HP. Shields it gives are ${ T(w.bastion) } stronger.`
  },
  lifeline: {
    name: `Lifeline`,
    text: `At the start of each of its turns, heals the lowest-HP ally for ${ T(w.lifeline) } of its own max HP. Its heals are ${ T(w.lifelineHeal) } stronger.`
  }
},
D = {
  tank: [
    `Taunting also cuts damage taken by 10%.`,
    `Shields it gives are 20% stronger.`,
    `While Taunting, counters every hit for 60% ATK.`
  ],
  dps: [
    `+10% CRIT Rate.`,
    `+20% CRIT DMG.`,
    `Its Skill hits a second time for half damage.`
  ],
  support: [
    `Heals 10% more.`,
    `Its heals also cleanse one debuff.`,
    `Its Skill also heals the lowest-HP other ally for half as much.`
  ],
  cc: [
    `Debuffs it applies are 5 points stronger.`,
    `Debuffs it applies last 1 turn longer.`,
    `Its Skill also lands on the enemy whose turn comes next: half the damage, the whole effect.`
  ]
};
function ce(e, t) {
  if (t === 2) return `Passive: one tier stronger (its numbers ×1.3).`;
  if (t === 3) return `Skill: 20% stronger, and its buffs, debuffs and turn pushes 10% stronger.`;
  if (t === 5) return `Basic: 30% stronger, with 50% more Guard damage.`;
  let[n,
  r,
  i] = D[e];
  return t === 1 ? n : t === 4 ? r : i
}
var O = Object.fromEntries(g.map(e => [e,
_[e].odds])),
k = e => ee(`player-${ e }#class`, O);
function A(e, t = k(e)) {
  return {
    cls: t,
    skill: se[t][Math.floor(d(`player-${ e }#skill`) * se[t].length)],
    passive: S[Math.floor(d(`player-${ e }#passive`) * S.length)]
  }
}
var le = e => A(e),
j = e => typeof e == `string` &&
g.includes(e);
function ue(e) {
  if (!j(e.cls)) return le(e.id);
  let t = A(e.id, e.cls);
  return {
    cls: e.cls,
    skill: M(e.cls, e.skill) ? e.skill : t.skill,
    passive: fe(e.passive) ? e.passive : t.passive
  }
}
var de = e => oe[e.skill],
M = (e, t) => typeof t == `string` &&
se[e].includes(t),
fe = e => typeof e == `string` &&
S.includes(e),
pe = {
  skill: 1000,
  passive: 500
},
me = e => pe[e],
N = {
  bulwarkWard: 0.1,
  ironSkinGuard: 10,
  shieldBashGuard: 5,
  counterUndyingHp: 0.5,
  heavyEcho: 1,
  bladeStorm: 0.8,
  executeLow: 0.9,
  mendShield: 0.25,
  lifelineMult: 1.5,
  overtureDmg: 0.2,
  sanctuaryShield: 0.05,
  hymnSecond: 0.6,
  curseExpose: 0.5,
  curseSpread: 0.3,
  stallSpread: 0.1,
  piercingCritDef: 0.6,
  fractureFollow: 1
},
P = N,
he = {
  bulwark: {
    passive: `bastion`,
    why: `A wall of shields for the whole team.`,
    bonus: `Bulwark also makes every ally take ${ T(P.bulwarkWard) } less damage for 2 turns.`
  },
  'iron-skin': {
    passive: `spiked-armor`,
    why: `Taunts, soaks every hit on a huge shield and reflects all of it.`,
    bonus: `Reflected hits also wear down the attacker’s Guard.`
  },
  'shield-bash': {
    passive: `momentum`,
    why: `Bashes through Guard, and every Break keeps the team rolling.`,
    bonus: `Shield Bash deals ${ P.shieldBashGuard }× Guard damage instead of 3×.`
  },
  'counter-stance': {
    passive: `undying`,
    why: `A last stand: it refuses to fall and keeps hitting back.`,
    bonus: `When Undying saves it, it gets back up at ${ T(P.counterUndyingHp) } HP, right into Counter Stance.`
  },
  'heavy-strike': {
    passive: `guard-breaker`,
    why: `Breaks in one swing, and what it Breaks takes even more damage.`,
    bonus: `A Heavy Strike that Breaks deals ${ T(P.heavyEcho) } of itself again (instead of 20%).`
  },
  'blade-storm': {
    passive: `vampirism`,
    why: `Hits everyone and heals from all of it.`,
    bonus: `Blade Storm hits for ${ T(P.bladeStorm) } (not 72%), and its lifesteal heals the whole team.`
  },
  execute: {
    passive: `bloodlust`,
    why: `Finishes the weak and moves on to the next one.`,
    bonus: `Execute’s 240% hit and Bloodlust’s bonus work on enemies under ${ T(P.executeLow) } HP (not half).`
  },
  'piercing-shot': {
    passive: `deadeye`,
    why: `Crits that go straight through shields and armor.`,
    bonus: `Piercing Shot crits ignore ${ T(P.piercingCritDef) } of the target’s DEF (instead of 30%).`
  },
  mend: {
    passive: `lifeline`,
    why: `Bigger heals, plus a small one every turn: the lowest ally never drops.`,
    bonus: `Lifeline’s heal each turn is ${ T(P.lifelineMult - 1) } bigger, and Mend’s overhealing becomes a shield (up to ${ T(P.mendShield) } of max HP).`
  },
  sanctuary: {
    passive: `guardian-angel`,
    why: `Heals everyone, and catches anyone who still drops low.`,
    bonus: `Sanctuary also shields every ally for ${ T(P.sanctuaryShield) } of the Support’s max HP, and lets Guardian Angel catch everyone again.`
  },
  'battle-hymn': {
    passive: `thrifty`,
    why: `Its ATK buff lasts a turn longer, and it often casts it for free.`,
    bonus: `Battle Hymn also gives the other ally with the most ATK ${ T(P.hymnSecond) } of the ATK buff.`
  },
  overture: {
    passive: `encore`,
    why: `Sets the stage, and the ally it plays for steals the show.`,
    bonus: `Overture also gives its target +${ T(P.overtureDmg) } damage for 2 turns.`
  },
  curse: {
    passive: `weak-point`,
    why: `Marks an enemy, then hits the mark far harder.`,
    bonus: `Curse Exposes for ${ T(P.curseExpose) } (not ${ T(b.curseExpose) }), and every other enemy for ${ T(P.curseSpread) } (not ${ T(b.curseSpread) }).`
  },
  wither: {
    passive: `opportunist`,
    why: `Weakens an enemy, then makes it pay.`,
    bonus: `The buffs Wither strips are stolen: its team gets them for a turn.`
  },
  stall: {
    passive: `ambush`,
    why: `Strikes first and freezes the enemy before it can move.`,
    bonus: `Every Stall pushes every other enemy back ${ T(P.stallSpread) } more (${ T(b.stallSpread + P.stallSpread) } in all).`
  },
  fracture: {
    passive: `exploit`,
    why: `Cracks the Guard open, then hits the crack.`,
    bonus: `When Fracture Breaks an enemy, it hits it again for ${ T(P.fractureFollow) }.`
  }
},
ge = e => he[e.skill]?.passive === e.passive,
_e = e => e.passive &&
ge({
  skill: e.skill,
  passive: e.passive
}) ? he[e.skill].bonus : null,
F = {
  stars: `Stars`,
  stamina: `Stamina`,
  fuel: `Fuel`,
  accountLevel: `Account Level`,
  maps: `Maps`,
  replays: [
    `Bronze Replay`,
    `Silver Replay`,
    `Gold Replay`
  ],
  insignia: `Class Insignia`,
  trophy: `Boss Trophy`,
  fragments: `Mod Fragments`,
  bannerKey: `Banner Key`
},
ve = [
  1,
  2,
  3
],
ye = [
  ``,
  `I`,
  `II`,
  `III`
],
I = {
  1: 1500,
  2: 7500,
  3: 30000
},
L = (e, t) => `insignia_${ e }_${ t }`,
be = e => `replay_${ e }`;
function xe() {
  let e = {};
  e.fuel = {
    id: `fuel`,
    name: F.fuel,
    kind: `consumable`,
    tier: 2,
    text: `Restores 60 ${ F.stamina }.`,
    sources: [
      `Daily quests`,
      `Tower milestones`,
      `Events`
    ]
  };
  for (let t of ve) e[be(t)] = {
    id: be(t),
    name: F.replays[t - 1],
    kind: `xp`,
    tier: t,
    xp: I[t],
    text: `${ I[t].toLocaleString(`en-US`) } card XP.`,
    sources: t === 1 ? [
      `Galaxy Collapse`,
      `Tower`,
      `Weekly Tournament`
    ] : t === 2 ? [
      `Galaxy Collapse (Expert and up)`,
      `Tower`,
      `Weekly Tournament`
    ] : [
      `Tower`,
      `Weekly Tournament`
    ]
  };
  for (let t of g) {
    let n = _[t].name;
    for (let r of ve) e[L(t, r)] = {
      id: L(t, r),
      name: `${ n } ${ F.insignia } ${ ye[r] }`,
      kind: `ascension`,
      tier: r,
      cls: t,
      text: `Ascends ${ n } cards.`,
      sources: [
        t === `tank` ||
        t === `dps` ? `The Big Black` : `FREEDOM DiVE`,
        `Tower`,
        `Weekly Tournament`
      ]
    }
  }
  return e.boss_trophy = {
    id: `boss_trophy`,
    name: F.trophy,
    kind: `boss`,
    tier: 3,
    text: `Needed for ascension 3 and up.`,
    sources: [
      `Weekly Tournament`,
      `Tower bosses`
    ]
  },
  e.mod_fragment = {
    id: `mod_fragment`,
    name: F.fragments,
    kind: `mod`,
    tier: 1,
    text: `Enhances mods. Salvaging a mod gives some back.`,
    sources: [
      `Remote Control`,
      `Everything will freeze`,
      `Salvage`
    ]
  },
  e.banner_key = {
    id: `banner_key`,
    name: F.bannerKey,
    kind: `key`,
    tier: 3,
    text: `One pull on the banner.`,
    sources: [
      `Banner (Stars)`
    ]
  },
  e
}
var Se = xe(),
Ce = Object.keys(Se),
we = e => e in Se,
Te = {
  ratio: 3,
  stars: {
    2: 200,
    3: 600
  }
};
function R(e) {
  if (!we(e)) return null;
  let t = Se[e];
  if (t.tier >= 3) return null;
  let n = t.tier + 1;
  return t.kind === `xp` ? {
    from: e,
    to: be(n),
    ratio: I[n] / I[t.tier],
    stars: 0
  }
   : t.kind === `ascension` &&
  t.cls ? {
    from: e,
    to: L(t.cls, n),
    ratio: Te.ratio,
    stars: Te.stars[n]
  }
   : null
}
function Ee(e) {
  if (!we(e)) return null;
  let t = Se[e];
  return t.kind !== `ascension` ||
  !t.cls ||
  t.tier <= 1 ? null : {
    from: e,
    to: L(t.cls, t.tier - 1),
    yield: 2
  }
}
function z(e, t, n, r) {
  let i = t => L(e, t),
  [
    a,
    o,
    s
  ] = [
    r(i(1)),
    r(i(2)),
    r(i(3))
  ],
  c = n - [0,
  a,
  o,
  s][t];
  if (c <= 0) return {
    steps: [],
    stars: 0
  };
  let l = [],
  u = (e, t) => t > 0 &&
  l.push({
    kind: `upgrade`,
    from: i(e),
    to: i(e + 1),
    count: t
  }),
  d = (e, t) => t > 0 &&
  l.push({
    kind: `breakdown`,
    from: i(e),
    to: i(e - 1),
    count: t
  });
  if (t === 1) {
    let e = Math.min(o, Math.ceil(c / 2));
    c -= e * 2;
    let t = c > 0 ? Math.ceil(c / 2) : 0,
    n = Math.ceil(t / 2);
    if (n > s) return null;
    d(3, n),
    d(2, e + t)
  } else if (t === 2) {
    let e = Math.min(Math.floor(a / 3), c);
    c -= e;
    let t = Math.ceil(Math.max(0, c) / 2);
    if (t > s) return null;
    u(1, e),
    d(3, t)
  } else {
    let e = 3 * c,
    t = Math.max(0, e - o);
    if (t * 3 > a) return null;
    u(1, t),
    u(2, c)
  }
  return {
    steps: l,
    stars: l.reduce(
      (e, t) => e + (t.kind === `upgrade` ? (R(t.from) ?.stars ?? 0) * t.count : 0),
      0
    )
  }
}
function De(e) {
  let t = Se[e];
  return t ? e === `fuel` ? 150 : e === `mod_fragment` ? 3 : e === `boss_trophy` ? 1500 : t.kind === `xp` ? Math.round((t.xp ?? 0) * 0.05) : [
    0,
    120,
    400,
    1100
  ][t.tier] ?? 0 : 0
}
var Oe = [
  `hp`,
  `atk`,
  `def`,
  `hpPct`,
  `atkPct`,
  `defPct`,
  `spd`,
  `critRate`,
  `critDmg`,
  `guardDmg`,
  `outHeal`
],
ke = {
  hp: {
    name: `HP`,
    short: `HP`,
    pct: !1
  },
  atk: {
    name: `ATK`,
    short: `ATK`,
    pct: !1
  },
  def: {
    name: `DEF`,
    short: `DEF`,
    pct: !1
  },
  hpPct: {
    name: `HP%`,
    short: `HP%`,
    pct: !0
  },
  atkPct: {
    name: `ATK%`,
    short: `ATK%`,
    pct: !0
  },
  defPct: {
    name: `DEF%`,
    short: `DEF%`,
    pct: !0
  },
  spd: {
    name: `SPD`,
    short: `SPD`,
    pct: !1
  },
  critRate: {
    name: `CRIT Rate`,
    short: `CR`,
    pct: !0
  },
  critDmg: {
    name: `CRIT DMG`,
    short: `CD`,
    pct: !0
  },
  guardDmg: {
    name: `Guard DMG`,
    short: `GD`,
    pct: !0
  },
  outHeal: {
    name: `Outgoing Healing`,
    short: `OH`,
    pct: !0
  }
};
function Ae(e, t, n) {
  e[t] = (e[t] ?? 0) + n
}
function je(e, t) {
  return ke[e].pct ? `+${ (t * 100).toFixed(1) }%` : `+${ Math.round(t) }`
}
var Me = [
  `ez`,
  `nf`,
  `ht`,
  `hr`,
  `sd`,
  `dt`,
  `hd`,
  `fl`,
  `nc`,
  `pf`,
  `so`,
  `rx`
],
Ne = [
  1,
  2,
  3,
  4,
  5
],
Pe = {
  1: `#9ca3af`,
  2: `#4ade80`,
  3: `#60a5fa`,
  4: `#c084fc`,
  5: `#fbbf24`
},
Fe = {
  ez: {
    name: `Easy`,
    short: `EZ`,
    color: `#8ce6a8`,
    identity: `Healing, max HP and utility`,
    bonus: `+HP% and +Outgoing Healing`
  },
  nf: {
    name: `No Fail`,
    short: `NF`,
    color: `#6f8fff`,
    identity: `Shielding and survival`,
    bonus: `Stronger shields; takes 8% less damage while shielded`
  },
  ht: {
    name: `Half Time`,
    short: `HT`,
    color: `#9fb0c8`,
    identity: `Defence and control`,
    bonus: `+DEF%; slows it applies last 1 turn longer`
  },
  hr: {
    name: `Hard Rock`,
    short: `HR`,
    color: `#ff6b5c`,
    identity: `Crit`,
    bonus: `+CRIT Rate`
  },
  sd: {
    name: `Sudden Death`,
    short: `SD`,
    color: `#ff4d6d`,
    identity: `Execution, glass cannon`,
    bonus: `+DMG to enemies under 50% HP; −max HP%`
  },
  dt: {
    name: `Double Time`,
    short: `DT`,
    color: `#4fd8f0`,
    identity: `Speed`,
    bonus: `+SPD`
  },
  hd: {
    name: `Hidden`,
    short: `HD`,
    color: `#b48cff`,
    identity: `Debuffs`,
    bonus: `Debuffs it applies are stronger; +DMG to debuffed enemies`
  },
  fl: {
    name: `Flashlight`,
    short: `FL`,
    color: `#ffd84d`,
    identity: `Single-target focus`,
    bonus: `+DMG with single-target moves`
  },
  nc: {
    name: `Nightcore`,
    short: `NC`,
    color: `#ff9edb`,
    identity: `Skills`,
    bonus: `Skills hit, heal and shield harder`
  },
  pf: {
    name: `Perfect`,
    short: `PF`,
    color: `#ffb84d`,
    identity: `Crit damage, all or nothing`,
    bonus: `+CRIT DMG, half as much again while above 80% HP`
  },
  so: {
    name: `Spun Out`,
    short: `SO`,
    color: `#7fe0c8`,
    identity: `Breaking`,
    bonus: `+Guard DMG; Broken enemies take more from it`
  },
  rx: {
    name: `Relax`,
    short: `RX`,
    color: `#c8f07f`,
    identity: `Buffing allies`,
    bonus: `Buffs it gives are stronger and last 1 turn longer`
  }
},
B = {
  ez: {
    hpPct: 40,
    outHeal: 35,
    defPct: 25
  },
  nf: {
    hpPct: 40,
    defPct: 40,
    atkPct: 20
  },
  ht: {
    defPct: 45,
    hpPct: 25,
    spd: 15,
    atkPct: 15
  },
  hr: {
    critRate: 40,
    atkPct: 25,
    critDmg: 20,
    guardDmg: 15
  },
  sd: {
    atkPct: 45,
    critDmg: 25,
    critRate: 15,
    spd: 15
  },
  dt: {
    spd: 45,
    atkPct: 30,
    critRate: 25
  },
  hd: {
    atkPct: 40,
    guardDmg: 25,
    spd: 20,
    hpPct: 15
  },
  fl: {
    atkPct: 40,
    critDmg: 25,
    critRate: 20,
    guardDmg: 15
  },
  nc: {
    atkPct: 35,
    spd: 25,
    outHeal: 20,
    hpPct: 20
  },
  pf: {
    critDmg: 45,
    atkPct: 25,
    critRate: 15,
    hpPct: 15
  },
  so: {
    guardDmg: 50,
    atkPct: 25,
    spd: 25
  },
  rx: {
    hpPct: 30,
    spd: 35,
    outHeal: 35
  }
},
V = {
  hpPct: 0.432,
  atkPct: 0.432,
  defPct: 0.54,
  spd: 25,
  critRate: 0.324,
  critDmg: 0.55,
  guardDmg: 0.648,
  outHeal: 0.345
},
Ie = {
  hp: 185,
  atk: 9,
  def: 19,
  hpPct: 0.039,
  atkPct: 0.039,
  defPct: 0.049,
  spd: 2.3,
  critRate: 0.029,
  critDmg: 0.058,
  guardDmg: 0.058,
  outHeal: 0.03
},
Le = {
  hp: 1,
  atk: 1,
  def: 1,
  hpPct: 1,
  atkPct: 1,
  defPct: 1,
  spd: 0.8,
  critRate: 1,
  critDmg: 1,
  guardDmg: 1,
  outHeal: 0.6
},
Re = {
  1: 0.35,
  2: 0.5,
  3: 0.65,
  4: 0.82,
  5: 1
},
H = {
  1: 3,
  2: 6,
  3: 9,
  4: 12,
  5: 15
},
ze = {
  1: [
    0,
    0
  ],
  2: [
    0,
    1
  ],
  3: [
    1,
    2
  ],
  4: [
    2,
    3
  ],
  5: [
    3,
    4
  ]
},
Be = [
  0.8,
  0.9,
  1
];
function Ve(e, t, n = []) {
  let r = Object.entries(e).filter(([e,
  t]) => t > 0 && !n.includes(e)),
  i = r.reduce((e, [
    ,
    t
  ]) => e + t, 0),
  a = t.next() * i;
  for (let[e,
  t]of r) {
    if (a < t) return e;
    a -= t
  }
  return r[r.length - 1][0]
}
function He(e, t, n) {
  let r = (V[e] ?? 0) * Re[t] * (1 + 5.17 * n / 15) / 6.17;
  return ke[e].pct ? Math.round(r * 10000) / 10000 : Math.round(r * 10) / 10
}
function Ue(e, t, n) {
  let r = Ie[e] * Re[t] * Be[Math.floor(n.next() * Be.length)];
  return ke[e].pct ? Math.round(r * 10000) / 10000 : Math.round(r * 10) / 10
}
function We(e, t) {
  let n = Ve(Le, t, [
    e.main.stat,
    ...e.subs.map(e => e.stat)
  ]);
  return {
    stat: n,
    value: Ue(n, e.rarity, t),
    rolls: 1
  }
}
function Ge(e, t, n) {
  let r = Ve(B[t], e),
  i = {
    type: t,
    rarity: n,
    level: 0,
    xp: 0,
    main: {
      stat: r,
      value: He(r, n, 0)
    },
    subs: []
  },
  [
    a,
    o
  ] = ze[n],
  s = a + Math.floor(e.next() * (o - a + 1));
  for (let t = 0; t < s; t++) i.subs.push(We(i, e));
  return i
}
var Ke = {
  1: 2,
  2: 3,
  3: 4,
  4: 6,
  5: 9
},
qe = (e, t) => Math.round(Ke[e] * (1 + t * 0.5));
function Je(e) {
  let t = e.xp;
  for (let n = 0; n < e.level; n++) t += qe(e.rarity, n);
  return t
}
function Ye(e) {
  let t = - e.xp;
  for (let n = e.level; n < H[e.rarity]; n++) t += qe(e.rarity, n);
  return Math.max(0, t)
}
var Xe = 0.1,
Ze = {
  1: 20,
  2: 40,
  3: 80,
  4: 160,
  5: 300
},
Qe = e => Ze[e.rarity] + Math.floor(Je(e) * 0.8),
$e = Qe,
et = {
  1: 0.4,
  2: 0.55,
  3: 0.7,
  4: 0.85,
  5: 1
},
tt = () => ({
  shieldMult: 0,
  shieldedDr: 0,
  slowTurns: 0,
  dmgVsLow: 0,
  debuffPower: 0,
  dmgVsDebuffed: 0,
  singleDmg: 0,
  skillMult: 0,
  pfCritDmg: 0,
  guardMult: 0,
  dmgVsBroken: 0,
  buffPower: 0,
  buffTurns: 0
});
function nt(e, t, n, r) {
  let i = et[t],
  a = e => Math.round(e * i * 10000) / 10000;
  switch (e) {
    case `ez`:
      Ae(n, `hpPct`, a(0.1)),
      Ae(n, `outHeal`, a(0.1));
      break;
    case `nf`:
      r.shieldMult += a(0.15),
      r.shieldedDr += 0.08;
      break;
    case `ht`:
      Ae(n, `defPct`, a(0.12)),
      r.slowTurns += 1;
      break;
    case `hr`:
      Ae(n, `critRate`, a(0.06));
      break;
    case `sd`:
      r.dmgVsLow += a(0.2),
      Ae(n, `hpPct`, - a(0.08));
      break;
    case `dt`:
      Ae(n, `spd`, a(6));
      break;
    case `hd`:
      r.debuffPower += a(0.2),
      r.dmgVsDebuffed += a(0.1);
      break;
    case `fl`:
      r.singleDmg += a(0.12);
      break;
    case `nc`:
      r.skillMult += a(0.15);
      break;
    case `pf`:
      Ae(n, `critDmg`, a(0.12)),
      r.pfCritDmg += a(0.06);
      break;
    case `so`:
      r.guardMult += a(0.25),
      r.dmgVsBroken += a(0.1);
      break;
    case `rx`:
      r.buffPower += a(0.2),
      r.buffTurns += 1
  }
}
function rt(e, t) {
  let n = et[t],
  r = e => `${ Math.round(e * n * 1000) / 10 }%`;
  switch (e) {
    case `ez`:
      return `+${ r(0.1) } HP, +${ r(0.1) } Outgoing Healing`;
    case `nf`:
      return `Shields ${ r(0.15) } stronger; 8% less damage taken while shielded`;
    case `ht`:
      return `+${ r(0.12) } DEF; slows it applies last 1 turn longer`;
    case `hr`:
      return `+${ r(0.06) } CRIT Rate`;
    case `sd`:
      return `+${ r(0.2) } DMG to enemies under 50% HP; −${ r(0.08) } max HP`;
    case `dt`:
      return `+${ Math.round(6 * n * 10) / 10 } SPD`;
    case `hd`:
      return `Debuffs ${ r(0.2) } stronger; +${ r(0.1) } DMG to debuffed enemies`;
    case `fl`:
      return `+${ r(0.12) } DMG with single-target moves`;
    case `nc`:
      return `Skills ${ r(0.15) } stronger`;
    case `pf`:
      return `+${ r(0.12) } CRIT DMG, +${ r(0.06) } more while above 80% HP`;
    case `so`:
      return `+${ r(0.25) } Guard damage; +${ r(0.1) } DMG to Broken enemies`;
    case `rx`:
      return `Buffs it gives ${ r(0.2) } stronger and 1 turn longer`
  }
}
var U = {
  firstAidAt: 0.3,
  firstAidHeal: 0.04,
  juggernautAtk: 0.007,
  juggernautGuard: 0.3,
  juggernautShield: 0.05,
  lockdownSlow: 0.1,
  lockdownPush: 0.12,
  openingDmg: 0.2,
  overclockCrit: 0.1,
  overclockAdvance: 0.3,
  lastStandDmg: 0.25,
  lastStandDr: 0.15,
  contagionShare: 0.7,
  riposteHit: 0.8,
  secondChanceHp: 0.05,
  desperadoSpd: 0.3,
  desperadoDmg: 0.4,
  desperadoHeal: 0.08
},
W = e => `${ Math.round(e * 1000) / 10 }%`,
it = [
  {
    id: `burst`,
    name: `Burst DPS`,
    mods: [
      `hd`,
      `dt`
    ],
    forWho: `Skill carries`,
    text: `After using its Skill: +25% DMG and +10% SPD until the end of its next turn.`
  },
  {
    id: `crit`,
    name: `Crit DPS`,
    mods: [
      `hd`,
      `hr`
    ],
    forWho: `Crit carries`,
    text: `+15% CRIT Rate; +40% CRIT DMG against debuffed enemies.`
  },
  {
    id: `hypercarry`,
    name: `Hypercarry`,
    mods: [
      `hd`,
      `dt`,
      `hr`
    ],
    forWho: `Main damage dealer`,
    text: `Crits build Overdrive (max 5). At 5, its next Skill spends it all for +60% DMG and ignores 20% DEF.`
  },
  {
    id: `assassin`,
    name: `Assassin`,
    mods: [
      `hd`,
      `dt`,
      `fl`
    ],
    forWho: `DPS`,
    text: `+25% DMG on its first hit each turn against the lowest-HP enemy; a knockout moves its turn up 50%.`
  },
  {
    id: `defensive`,
    name: `Defensive Support`,
    mods: [
      `ez`,
      `nf`,
      `ht`
    ],
    forWho: `Tanks and Supports`,
    text: `Healing and shields +5%; at the start of each of its turns, shields the lowest-HP ally for 3% of its max HP.`
  },
  {
    id: `focus`,
    name: `Focus`,
    mods: [
      `hd`,
      `fl`
    ],
    forWho: `Single-target dealers`,
    text: `Each hit in a row on the same enemy stacks +8% DMG (max 5); switching targets resets it.`
  },
  {
    id: `sustain`,
    name: `Sustain`,
    mods: [
      `ez`,
      `ht`
    ],
    forWho: `Supports`,
    text: `Healing +15%; overhealing becomes a shield (up to 10% of max HP).`
  },
  {
    id: `fortress`,
    name: `Fortress`,
    mods: [
      `nf`,
      `ht`
    ],
    forWho: `Tanks`,
    text: `+15% DEF; 10% less damage taken while Taunting.`
  },
  {
    id: `glass`,
    name: `Glass Cannon`,
    mods: [
      `sd`,
      `hr`
    ],
    forWho: `DPS`,
    text: `+30% DMG; −15% max HP.`
  },
  {
    id: `hex`,
    name: `Hex`,
    mods: [
      `hd`,
      `ht`
    ],
    forWho: `CC`,
    text: `Debuffs last 1 turn longer; slows are 50% stronger.`
  },
  {
    id: `tempo`,
    name: `Tempo`,
    mods: [
      `dt`,
      `rx`
    ],
    forWho: `Supports`,
    text: `Heals and buffs it gives also move the target’s turn up 15%.`
  },
  {
    id: `kiai`,
    name: `Kiai Time`,
    mods: [
      `nc`,
      `dt`
    ],
    forWho: `Skill-focused cards`,
    text: `Using its Skill moves its next turn up 20%.`
  },
  {
    id: `shatter`,
    name: `Shatter`,
    mods: [
      `so`,
      `fl`
    ],
    forWho: `DPS and Tanks`,
    text: `Single-target hits deal 40% more Guard damage; +20% DMG to Broken enemies.`
  },
  {
    id: `storm`,
    name: `Spinner Storm`,
    mods: [
      `so`,
      `nc`
    ],
    forWho: `Blade Storm DPS`,
    text: `Moves that hit every enemy deal 30% more Guard damage; breaking an enemy gives its team 1 Skill Point (once a turn).`
  },
  {
    id: `ss`,
    name: `SS Rank`,
    mods: [
      `pf`,
      `hr`
    ],
    forWho: `Crit carries`,
    text: `+15% CRIT Rate and +35% CRIT DMG; lost for 1 turn after it takes damage.`
  },
  {
    id: `conductor`,
    name: `Conductor`,
    mods: [
      `rx`,
      `nc`,
      `dt`
    ],
    forWho: `Supports`,
    text: `When it uses its Skill, every ally gets +15% DMG for 1 turn.`
  },
  {
    id: `executioner`,
    name: `Executioner`,
    mods: [
      `sd`,
      `pf`,
      `fl`
    ],
    forWho: `DPS`,
    text: `+10% DMG, and +25% more to enemies under 35% HP; a knockout makes its next hit a sure crit.`
  },
  {
    id: `firstaid`,
    name: `First Aid`,
    mods: [
      `ez`,
      `nf`
    ],
    forWho: `Tanks and Supports`,
    text: `The first time each ally drops under ${ W(U.firstAidAt) } HP, heals it for ${ W(U.firstAidHeal) } of this card's max HP.`
  },
  {
    id: `juggernaut`,
    name: `Juggernaut`,
    mods: [
      `nf`,
      `so`
    ],
    forWho: `Attacking Tanks`,
    text: `+ATK equal to ${ W(U.juggernautAtk) } of its max HP, and +${ W(U.juggernautGuard) } Guard damage. Breaking an enemy shields it for ${ W(U.juggernautShield) } of its max HP.`
  },
  {
    id: `pindown`,
    name: `Pin Down`,
    mods: [
      `hd`,
      `ht`,
      `fl`
    ],
    forWho: `CC`,
    text: `Debuffs last 1 turn longer and slows are 50% stronger. Its single-target hits Slow the enemy by ${ W(U.lockdownSlow) }; hits on an enemy that was already Slowed also push its turn back ${ W(U.lockdownPush) }.`
  },
  {
    id: `lockdown`,
    name: `Lockdown`,
    mods: [
      `ht`,
      `fl`
    ],
    forWho: `CC`,
    text: `Its single-target hits Slow the enemy by ${ W(U.lockdownSlow) }; hits on an enemy that was already Slowed also push its turn back ${ W(U.lockdownPush) }.`
  },
  {
    id: `opening`,
    name: `Opening`,
    mods: [
      `so`,
      `rx`
    ],
    forWho: `Cards that Break`,
    text: `When it Breaks an enemy, every ally gets +${ W(U.openingDmg) } DMG for 2 turns.`
  },
  {
    id: `overclock`,
    name: `Overclock`,
    mods: [
      `dt`,
      `fl`
    ],
    forWho: `DPS`,
    text: `+${ W(U.overclockCrit) } CRIT Rate; its first crit each turn moves its next turn up ${ W(U.overclockAdvance) }.`
  },
  {
    id: `laststand`,
    name: `Last Stand`,
    mods: [
      `nf`,
      `sd`
    ],
    forWho: `DPS and Tanks`,
    text: `Under 50% HP: +${ W(U.lastStandDmg) } DMG and ${ W(U.lastStandDr) } less damage taken.`
  },
  {
    id: `contagion`,
    name: `Contagion`,
    mods: [
      `hd`,
      `ht`,
      `nc`
    ],
    forWho: `CC`,
    text: `Debuffs from its Skill also land on every other enemy at ${ W(U.contagionShare) } strength.`
  },
  {
    id: `riposte`,
    name: `Riposte`,
    mods: [
      `ht`,
      `so`,
      `fl`
    ],
    forWho: `Tanks`,
    text: `While Taunting, it hits back every attacker (once per move) for ${ W(U.riposteHit) } of its ATK, with double Guard damage.`
  },
  {
    id: `secondchance`,
    name: `Second Chance`,
    mods: [
      `ez`,
      `nf`,
      `rx`
    ],
    forWho: `Supports`,
    text: `Once per fight, the first ally that would be knocked out stays up with ${ U.secondChanceHp ? W(U.secondChanceHp) : `1` } HP instead.`
  },
  {
    id: `desperado`,
    name: `Desperado`,
    mods: [
      `sd`,
      `dt`,
      `ez`
    ],
    forWho: `DPS`,
    text: `Under 50% HP: +${ W(U.desperadoSpd) } SPD and +${ W(U.desperadoDmg) } DMG. Each knockout heals it for ${ W(U.desperadoHeal) } of its max HP.`
  }
],
at = Object.fromEntries(it.map(e => [e.id,
e]));
function ot(e) {
  let t = new Set(e),
  n = e => e.mods.every(e => t.has(e)),
  r = it.find(e => e.mods.length === 3 && n(e));
  return r ? [
    r.id
  ] : it.filter(e => e.mods.length === 2 && n(e)).map(e => e.id)
}
function st(e, t = {}) {
  Ae(t, e.main.stat, e.main.value);
  for (let n of e.subs) Ae(t, n.stat, n.value);
  return t
}
var ct = {
  r: `R`,
  sr: `SR`,
  ssr: `SSR`
},
lt = e => e === `r` ||
e === `sr` ||
e === `ssr`,
G = {
  volleyPool: 3.9,
  volleyCap: 1.6,
  volleyGuard: 4,
  rallyMax: 3,
  rallyDmg: 0.2,
  payloadHit: 1.7,
  payloadGuard: 3,
  payloadBlast: 1.4,
  payloadTaken: 0.25,
  starHeal: 0.075,
  starAdvance: 0.25,
  starSp: 1,
  pacifistHeal: 0.15,
  pacifistSp: 2,
  biteHit: 1.2,
  biteGuard: 3,
  biteTurns: 2,
  biteWeaken: 0.25,
  biteShield: 1,
  biteTeamShield: 0.3,
  riptidePush: 0.15,
  hazeHit: 0.45,
  hazeGuard: 2,
  hazeTurns: 1,
  hazeMiss: 0.1,
  rampSpd: 0.08,
  rampMax: 5,
  streamBase: 2,
  streamHit: 0.6,
  streamGuard: 0.5,
  ramenHeal: 0.07,
  chashuAtk: 0.15,
  eggShield: 0.05,
  scallionAdvance: 0.15,
  simmerHeal: 0.2,
  simmerMax: 3,
  heatHit: 0.7,
  heatGuard: 2,
  heatSlow: 0.2,
  heatTurns: 1,
  warmAtk: 0.2,
  rainHeal: 0.13,
  rainTurns: 2,
  steadyHeal: 0.13
},
K = G,
q = e => `${ + (e * 100).toFixed(1) }%`,
ut = e => typeof e == `string` &&
e in dt,
dt = {
  volley: {
    id: `volley`,
    cls: `dps`,
    skill: {
      name: `Clear the Bases`,
      text: `Deals ${ q(K.volleyPool) } ATK split evenly between the enemies still standing (at most ${ q(K.volleyCap) } each), lowest HP first. Damage past a knockout carries on to the rest.`,
      targets: `none`,
      aoe: !0
    },
    passive: {
      name: `Cleanup Hitter`,
      text: `Each time an ally uses a Skill, a runner gets on base (up to ${ K.rallyMax }). Clear the Bases brings them all home: +${ q(K.rallyDmg) } damage each.`
    }
  },
  payload: {
    id: `payload`,
    cls: `dps`,
    skill: {
      name: `Double Exposure`,
      text: `Hits one enemy for ${ q(K.payloadHit) } and puts crop marks on it. Just before the next enemy’s turn, whoever it is, a second exposure lands on that enemy for another ${ q(K.payloadBlast) }.`,
      targets: `enemy`,
      single: !0
    },
    passive: {
      name: `Crop Marks`,
      text: `An enemy with its crop marks takes ${ q(K.payloadTaken) } more damage from everyone until its next turn. If it’s knocked out first, the marks move to the lowest-HP enemy.`
    }
  },
  replay: {
    id: `replay`,
    cls: `support`,
    skill: {
      name: `Starlight`,
      text: `Starlight falls on the team: every ally heals ${ q(K.starHeal) } of this card’s max HP and its next turn comes ${ q(K.starAdvance) } sooner. The Skill Point comes back. Deals no damage.`,
      targets: `none`
    },
    passive: {
      name: `Grace`,
      text: `Never attacks: its Basic heals one ally for ${ q(K.pacifistHeal) } of its max HP and gives ${ K.pacifistSp } Skill Points.`
    },
    basic: {
      name: `Basic`,
      text: `Heals one ally for ${ q(K.pacifistHeal) } of its max HP. +${ K.pacifistSp } Skill Points.`,
      targets: `ally`
    },
    pacifist: !0
  },
  bite: {
    id: `bite`,
    cls: `tank`,
    skill: {
      name: `Mental Bite`,
      text: `Bites one enemy for ${ q(K.biteHit) } with heavy Guard damage and gets in its head: for ${ K.biteTurns } turns it has to attack this card, and deals ${ q(K.biteWeaken) } less damage. Shields itself for ${ q(K.biteShield) } of its DEF and every other ally for ${ q(K.biteTeamShield) }.`,
      targets: `enemy`,
      single: !0
    },
    passive: {
      name: `Riptide`,
      text: `An enemy that hits it while it’s Taunting, or while it’s been bitten, is dragged under: its next turn comes ${ q(K.riptidePush) } later.`
    }
  },
  stream: {
    id: `stream`,
    cls: `dps`,
    skill: {
      name: `Stream`,
      text: `Hits one enemy ${ K.streamBase } times, plus once for every Ramp Up stack, for ${ q(K.streamHit) } each (if it goes down, the rest go to the lowest-HP enemy). Then Ramp Up starts over.`,
      targets: `enemy`,
      single: !0
    },
    passive: {
      name: `Ramp Up`,
      text: `Each of its turns gives it +${ q(K.rampSpd) } SPD, up to ${ K.rampMax } times. Being Slowed resets it.`
    }
  },
  ramen: {
    id: `ramen`,
    cls: `support`,
    skill: {
      name: `Shoyu Ramen`,
      text: `Adds the next topping to the bowl, then serves it: heals every ally for ${ q(K.ramenHeal) } of its max HP, plus every topping in the bowl.
Chashu: +${ q(K.chashuAtk) } ATK for 2 turns.
Egg: a ${ q(K.eggShield) } shield.
Nori: removes a debuff.
Scallions: their next turn comes ${ q(K.scallionAdvance) } sooner.`,
      targets: `none`
    },
    passive: {
      name: `Slow Simmer`,
      text: `Each Basic lets the broth simmer: the next bowl heals ${ q(K.simmerHeal) } more, up to +${ q(K.simmerHeal * K.simmerMax) }.`
    }
  },
  heatwave: {
    id: `heatwave`,
    cls: `cc`,
    skill: {
      name: `Heatwave`,
      text: `Hits one enemy for ${ q(K.heatHit) }, and the heat Slows every enemy by ${ q(K.heatSlow) } for ${ K.heatTurns === 1 ? `its next turn` : `${ K.heatTurns } turns` }.`,
      targets: `enemy`,
      single: !0
    },
    passive: {
      name: `Warm Up`,
      text: `Each Heatwave also warms up the team: every ally gets +${ q(K.warmAtk) } ATK for 2 turns.`
    }
  },
  rain: {
    id: `rain`,
    cls: `support`,
    skill: {
      name: `Rainfall`,
      text: `Rain falls on the team: every ally heals ${ q(K.rainHeal) } of this card’s max HP at the start of each of its next ${ K.rainTurns } turns.`,
      targets: `none`
    },
    passive: {
      name: `Steady Rain`,
      text: `An ally still under Rainfall when it’s used again heals ${ q(K.steadyHeal) } at once.`
    }
  },
  haze: {
    id: `haze`,
    cls: `cc`,
    skill: {
      name: `Haze`,
      text: `Hits one enemy for ${ q(K.hazeHit) } and fogs over the enemy team: every enemy is Hazy for its next ${ K.hazeTurns === 1 ? `turn` : `${ K.hazeTurns } turns` } and can’t see what it’s aiming at, so its single-target attacks land on a random target.`,
      targets: `enemy`,
      single: !0
    },
    passive: {
      name: `Low Visibility`,
      text: `Hazy enemies miss ${ q(K.hazeMiss) } of their single-target attacks.`
    }
  }
};
function ft(e) {
  if (e.sig) {
    let t = dt[e.sig];
    return {
      skill: t.skill,
      passive: t.passive,
      basic: t.basic ?? v(t.cls),
      sig: !0
    }
  }
  return {
    skill: de(e),
    passive: e.passive ? E[e.passive] : null,
    basic: v(e.cls),
    sig: !1
  }
}
var pt = {
  keyPrice: 1600,
  maxKeysPerBuy: 100,
  odds: {
    ssr: 0.02,
    sr: 0.05,
    r: 0.15
  },
  bannerEvery: 10,
  ssrBy: 80,
  statBonus: 0.03
},
mt = {
  r: `legendary`,
  sr: `mythic`,
  ssr: `divine`
},
ht = [
  20,
  30,
  40,
  50,
  60,
  70,
  80
],
gt = ht.length - 1,
_t = e => ht[Math.max(0, Math.min(gt, e))],
vt = e => e >= 80 ? 0 : Math.round(200 + 60 * e + e**4 / 380);
function yt(e, t) {
  let n = 0;
  for (let r = e; r < t; r++) n += vt(r);
  return n
}
var bt = 6**(10 / 79);
function xt(e, t) {
  return bt**((Math.max(1, Math.min(100, e)) - 1) / 10) * (1 + t / 30)
}
function St(e, t) {
  let n = _t(e.ascension),
  {
    level: r,
    xp: i
  }
  = e,
  a = Math.max(0, Math.floor(t)),
  o = a;
  for (; a > 0 && r < n; ) {
    let e = vt(r) - i;
    if (a < e) {
      i += a,
      a = 0;
      break
    }
    a -= e,
    r++,
    i = 0
  }
  return {
    level: r,
    xp: r >= n ? 0 : i,
    ascension: e.ascension,
    used: o - a
  }
}
function Ct(e, t) {
  let n = [
    [1,
    5,
    0,
    50],
    [
      1,
      10,
      0,
      100
    ],
    [
      2,
      8,
      2,
      200
    ],
    [
      2,
      15,
      4,
      400
    ],
    [
      3,
      15,
      7,
      5000
    ],
    [
      3,
      30,
      12,
      10000
    ]
  ],
  [
    r,
    i,
    a,
    o
  ] = n[t - 1] ?? n[n.length - 1],
  s = {
    [
      L(e, r)
    ]: i
  };
  return a &&
  (s.boss_trophy = a),
  {
    items: s,
    stars: o
  }
}
var wt = e => e.ascension < gt &&
e.level >= _t(e.ascension),
Tt = {
  common: 100,
  uncommon: 150,
  rare: 250,
  epic: 500,
  legendary: 1000,
  mythic: 2000,
  divine: 4000,
  restricted: 4000
};
function Et(e) {
  return {
    base: Tt[e.rarity],
    refund: Math.floor((yt(1, e.level) + e.xp) * 0.6)
  }
}
function Dt(e) {
  let t = {},
  n = Math.max(0, Math.floor(e));
  for (let e of [
    ...ve
  ].reverse()) {
    let r = Math.floor(n / I[e]);
    r > 0 &&
    (t[be(e)] = r),
    n -= r * I[e]
  }
  return n >= I[1] / 2 &&
  (t[be(1)] = (t[be(1)] ?? 0) + 1),
  t
}
var Ot = 0.001,
kt = [
  `hr`,
  `dt`,
  `hd`,
  `fl`,
  `sd`,
  `ht`
],
At = {
  common: 51,
  uncommon: 54,
  rare: 57,
  epic: 60,
  legendary: 63,
  mythic: 67,
  divine: 72,
  restricted: 72
},
jt = 1.6,
Mt = 0.05,
Nt = 0.5;
function Pt(e) {
  let t = {},
  n = tt();
  for (let r of e.mods) st(r, t),
  nt(r.type, r.rarity, t, n);
  for (let[n,
  r]of Object.entries(e.boons?.stats ?? {
  })) t[n] = (t[n] ?? 0) + r;
  for (let[t,
  r]of Object.entries(e.boons?.fx ?? {
  })) n[t] += r;
  let r = e.mods.map(e => e.type),
  i = ot(r),
  a = (e, n) => t[e] = (t[e] ?? 0) + n;
  i.includes(`crit`) &&
  a(`critRate`, 0.15),
  i.includes(`fortress`) &&
  a(`defPct`, 0.15),
  i.includes(`glass`) &&
  a(`hpPct`, - 0.15),
  i.includes(`overclock`) &&
  a(`critRate`, U.overclockCrit);
  let o = e.eidolon >= 2 ? 1.3 : 1;
  return e.passive === `deadeye` &&
  (a(`critRate`, C.deadeyeRate * o), a(`critDmg`, C.deadeyeDmg * o)),
  e.cls === `dps` &&
  e.eidolon >= 1 &&
  a(`critRate`, 0.1),
  e.cls === `dps` &&
  e.eidolon >= 4 &&
  a(`critDmg`, 0.2),
  e.cls === `support` &&
  e.eidolon >= 1 &&
  a(`outHeal`, 0.1),
  {
    bag: t,
    fx: n,
    modTypes: r,
    combos: i,
    passiveMult: o
  }
}
var Ft = 0.0025,
It = (e, t) => (100 + 0.5 * Math.max(0, n(e.rarity))) * t * (1 + Ft * Math.max(0, e.level - 1)),
Lt = e => e.sig ? 1 + pt.statBonus : 1;
function Rt(e, t) {
  let n = _[e.cls] ?? _.dps,
  r = At[e.rarity] * xt(e.level, e.ascension) * Lt(e),
  i = e.scale ?? 1;
  return {
    atk: (r * n.atk * (1 + (t.atkPct ?? 0)) + (t.atk ?? 0)) * i,
    maxHp: Math.max(1, (r * 22 * n.hp * (1 + (t.hpPct ?? 0)) + (t.hp ?? 0)) * i * (e.hpScale ?? 1)),
    def: r * jt * n.def * (1 + (t.defPct ?? 0)) + (t.def ?? 0),
    spd: It(e, n.spd) + (t.spd ?? 0),
    critRate: Mt + n.crit + (t.critRate ?? 0),
    critDmg: Nt + (t.critDmg ?? 0),
    guardDmg: t.guardDmg ?? 0,
    outHeal: t.outHeal ?? 0
  }
}
function zt(e) {
  let t = _[e.cls] ?? _.dps,
  {
    bag: n,
    fx: r,
    modTypes: i,
    combos: a,
    passiveMult: o
  }
  = Pt(e),
  s = At[e.rarity] * xt(e.level, e.ascension) * Lt(e),
  c = e.scale ?? 1,
  l = (s * t.atk * (1 + (n.atkPct ?? 0)) + (n.atk ?? 0)) * c,
  u = (s * t.atk + (n.atk ?? 0)) * c,
  d = Math.max(1, (s * 22 * t.hp * (1 + (n.hpPct ?? 0)) + (n.hp ?? 0)) * c * (e.hpScale ?? 1)),
  ee = s * jt * t.def * (1 + (n.defPct ?? 0)) + (n.def ?? 0),
  f = It(e, t.spd) + (n.spd ?? 0),
  te = {
    maxHp: d,
    atk: l,
    atkBase: u,
    atkPct: n.atkPct ?? 0,
    def: ee,
    spd: f,
    critRate: Mt + t.crit + (n.critRate ?? 0),
    critDmg: Nt + (n.critDmg ?? 0),
    guardDmg: n.guardDmg ?? 0,
    outHeal: n.outHeal ?? 0,
    maxGuard: Math.max(1, Math.round(e.guard ?? t.guard)),
    passiveMult: o,
    modTypes: i,
    combos: a,
    fx: r
  };
  return {
    ...te,
    power: Gt(te, e.eidolon, e.cls, Rt(e, {
    }), e.level)
  }
}
var Bt = {
  dps: {
    dmg: 1.4,
    tough: 0.45,
    spd: 1,
    heal: 0
  },
  tank: {
    dmg: 0.5,
    tough: 1.5,
    spd: 0.8,
    heal: 0
  },
  support: {
    dmg: 0.7,
    tough: 1,
    spd: 1,
    heal: 0.9
  },
  cc: {
    dmg: 1,
    tough: 0.8,
    spd: 1.3,
    heal: 0
  }
},
Vt = e => e.atk * (1 + Math.min(1, e.critRate) * e.critDmg) * (1 + e.guardDmg * 0.15),
Ht = 9 / 22,
Ut = 0.6 / jt,
Wt = (e, t) => Math.sqrt(e.maxHp * Ht * (1 + e.def * Ut / (200 + 10 * t)));
function Gt(e, t, n, r, i) {
  let a = Bt[n] ?? Bt.dps,
  o = Vt(r) * Wt(r, i) * (r.spd / 100),
  s = (Vt(e) / Vt(r)) **a.dmg * (Wt(e, i) / Wt(r, i)) **a.tough * (e.spd / r.spd) **a.spd * ((1 + e.outHeal) / (1 + r.outHeal)) **a.heal,
  c = 1 + 0.06 * e.combos.length + (e.combos.length === 1 && at[e.combos[0]].mods.length === 3 ? 0.06 : 0);
  return Math.round(o * s * (1 + 0.05 * t) * c / 9)
}
var Kt = 0.35,
J = {
  twinAtk: 0.25,
  twinHp: 0.12,
  twinSpd: 0.05,
  recklessHp: 0.1,
  wallAtk: 0.22,
  wallHp: 0.1,
  choirSpd: 0.06,
  choirAtk: 0.05,
  covenAtk: 0.12,
  covenSpd: 0.08,
  siegeAtk: 0.3
},
qt = e => `${ Math.round(e * 100) }%`,
Jt = [
  {
    id: `full`,
    name: `Full team`,
    text: `One of each class (Tank, DPS, Support and CC): +10% ATK and HP for everyone.`
  },
  {
    id: `frontline`,
    name: `Frontline`,
    text: `A Tank and a DPS: both get +10% HP.`
  },
  {
    id: `mark`,
    name: `Mark for death`,
    text: `A CC and a DPS: both get +10% ATK.`
  },
  {
    id: `lifeline`,
    name: `Lifeline`,
    text: `A Tank and a Support: both get +8% SPD.`
  },
  {
    id: `country`,
    name: `Country`,
    text: `Cards from the same country: 2 give them +4%, 3 give +8%, all 4 give +12% ATK and HP.`
  },
  {
    id: `underdogs`,
    name: `Underdogs`,
    text: `Three or more Common, Uncommon or Rare cards: they get +15% ATK and HP.`
  },
  {
    id: `rainbow`,
    name: `Rainbow`,
    text: `Four different rarities: +5% ATK and HP for everyone.`
  },
  {
    id: `twin`,
    name: `Twin Blades`,
    text: `Two or more DPS: they get +${ qt(J.twinAtk) } ATK, +${ qt(J.twinHp) } HP and +${ qt(J.twinSpd) } SPD.`
  },
  {
    id: `wall`,
    name: `Iron Wall`,
    text: `Two or more Tanks: everyone gets +${ qt(J.wallAtk) } ATK and +${ qt(J.wallHp) } HP.`
  },
  {
    id: `choir`,
    name: `Choir`,
    text: `Two or more Supports: everyone gets +${ qt(J.choirSpd) } SPD and +${ qt(J.choirAtk) } ATK.`
  },
  {
    id: `coven`,
    name: `Hex Circle`,
    text: `Two or more CC: everyone gets +${ qt(J.covenAtk) } ATK and +${ qt(J.covenSpd) } SPD.`
  },
  {
    id: `reckless`,
    name: `Reckless`,
    text: `Twin Blades with no Tank: everyone also gets +${ qt(J.recklessHp) } HP.`
  },
  {
    id: `siege`,
    name: `Siege`,
    text: `Two Tanks and two Supports: everyone gets +${ qt(J.siegeAtk) } ATK.`
  },
  {
    id: `shape`,
    name: `One shape bonus`,
    text: `A team gets one of Siege, Hex Circle, Twin Blades, Iron Wall or Choir: the first that fits, in that order.`
  },
  {
    id: `stacked`,
    name: `Stacked`,
    text: `Four of one class weakens them by 20%.`
  },
  {
    id: `cap`,
    name: `Adding up`,
    text: `Bonuses add together, up to +35% ATK, HP or SPD per card.`
  }
],
Yt = [
  0,
  0,
  0.04,
  0.08,
  0.12
],
Xt = [
  {
    id: `frontline`,
    label: `Frontline`,
    classes: [
      `tank`,
      `dps`
    ],
    hp: 1.1
  },
  {
    id: `mark`,
    label: `Mark for death`,
    classes: [
      `cc`,
      `dps`
    ],
    atk: 1.1
  },
  {
    id: `lifeline`,
    label: `Lifeline`,
    classes: [
      `tank`,
      `support`
    ],
    spd: 1.08
  }
],
Zt = [
  `common`,
  `uncommon`,
  `rare`
],
Qt = e => `a ${ _[e].name }`;
function $t(e) {
  let t = [],
  n = e.map((e, t) => t),
  r = e => t.push({
    atk: 1,
    hp: 1,
    spd: 1,
    ...e
  }),
  i = e.map(e => e.cls),
  a = e => i.includes(e),
  o = e => n.filter(t => e.includes(i[t]));
  g.every(a) &&
  r({
    id: `full`,
    label: `Full team +10%`,
    members: n,
    atk: 1.1,
    hp: 1.1
  });
  for (let e of Xt) if (a(e.classes[0]) && a(e.classes[1])) {
    let t = Math.round(((e.atk ?? e.hp ?? e.spd ?? 1) - 1) * 100);
    r({
      id: e.id,
      label: `${ e.label } +${ t }%`,
      members: o(e.classes),
      atk: e.atk ?? 1,
      hp: e.hp ?? 1,
      spd: e.spd ?? 1
    })
  }
  let s = new Map;
  e.forEach(
    (e, t) => e.countryCode &&
    s.set(e.countryCode, [
      ...s.get(e.countryCode) ?? [],
      t
    ])
  );
  for (let[e,
  t]of s) {
    let n = Yt[Math.min(t.length, Yt.length - 1)] ?? 0;
    n &&
    r({
      id: `country-${ e }`,
      label: `${ e } ×${ t.length } +${ Math.round(n * 100) }%`,
      members: t,
      atk: 1 + n,
      hp: 1 + n
    })
  }
  let c = n.filter(t => Zt.includes(e[t].rarity));
  c.length >= 3 &&
  r({
    id: `underdogs`,
    label: `Underdogs +15%`,
    members: c,
    atk: 1.15,
    hp: 1.15
  }),
  e.length >= 4 &&
  new Set(e.map(e => e.rarity)).size >= 4 &&
  r({
    id: `rainbow`,
    label: `Rainbow +5%`,
    members: n,
    atk: 1.05,
    hp: 1.05
  });
  let l = J,
  u = e => i.filter(t => t === e).length,
  d = e => Math.round(e * 100);
  e.length >= 4 &&
  (
    u(`tank`) >= 2 &&
    u(`support`) >= 2 ? r({
      id: `siege`,
      label: `Siege +${ d(l.siegeAtk) }%`,
      members: n,
      atk: 1 + l.siegeAtk
    }) : u(`cc`) >= 2 ? r({
      id: `coven`,
      label: `Hex Circle +${ d(l.covenAtk) }%`,
      members: n,
      atk: 1 + l.covenAtk,
      spd: 1 + l.covenSpd
    }) : u(`dps`) >= 2 ? (
      r({
        id: `twin`,
        label: `Twin Blades +${ d(l.twinAtk) }%`,
        members: o([`dps`]),
        atk: 1 + l.twinAtk,
        hp: 1 + l.twinHp,
        spd: 1 + l.twinSpd
      }),
      u(`tank`) === 0 &&
      r({
        id: `reckless`,
        label: `Reckless +${ d(l.recklessHp) }% HP`,
        members: n,
        hp: 1 + l.recklessHp
      })
    ) : u(`tank`) >= 2 ? r({
      id: `wall`,
      label: `Iron Wall +${ d(l.wallAtk) }%`,
      members: n,
      atk: 1 + l.wallAtk,
      hp: 1 + l.wallHp
    }) : u(`support`) >= 2 &&
    r({
      id: `choir`,
      label: `Choir +${ d(l.choirSpd) }% SPD`,
      members: n,
      atk: 1 + l.choirAtk,
      spd: 1 + l.choirSpd
    })
  );
  for (let e of g) {
    let t = o([e]);
    if (t.length >= 4) {
      let n = 0.8;
      r({
        id: `stacked-${ e }`,
        label: `Stacked ${ _[e].name } −20%`,
        members: t,
        atk: n,
        hp: n,
        bad: !0
      })
    }
  }
  return t
}
function en(e) {
  let t = [],
  n = e.map(e => e.cls),
  r = e => n.includes(e),
  i = g.filter(e => !r(e));
  i.length === 1 &&
  t.push(`Add ${ Qt(i[0]) } for Full team (+10%)`);
  for (let e of Xt) {
    let[n,
    i] = e.classes;
    r(n) !== r(i) &&
    t.push(`Add ${ Qt(r(n) ? i : n) } for ${ e.label }`)
  }
  if (e.length < 4) {
    let n = new Map;
    for (let t of e) t.countryCode &&
    n.set(t.countryCode, (n.get(t.countryCode) ?? 0) + 1);
    for (let[e,
    r]of n) r >= 1 &&
    r < 4 &&
    t.push(
      `1 more ${ e } card: +${ Math.round((Yt[r + 1] ?? 0) * 100) }% for ${ e }`
    )
  }
  return e.filter(e => Zt.includes(e.rarity)).length === 2 &&
  t.push(
    `One more Common, Uncommon or Rare card for Underdogs (+15%)`
  ),
  t
}
function tn(e, t) {
  let n = e => 1 + Math.min(Kt, e);
  return Array.from({
    length: t
  }, (t, r) => {
    let i = e.filter(e => e.members.includes(r)),
    a = e => i.reduce((t, n) => t + (n[e] - 1), 0);
    return {
      atk: n(a(`atk`)),
      hp: n(a(`hp`)),
      spd: n(a(`spd`))
    }
  })
}
function nn(e) {
  let t = tn($t(e), e.length);
  return e.map(
    (e, n) => {
      let r = zt(e),
      i = t[n],
      a = e.boss ? {
        atk: 1.2,
        hp: 2.2
      }
       : {
        atk: 1,
        hp: 1
      },
      o = {
        ...r,
        atk: r.atk * i.atk * a.atk,
        atkBase: r.atkBase * a.atk,
        atkPct: r.atkPct + (i.atk - 1),
        maxHp: r.maxHp * i.hp * a.hp,
        spd: r.spd * i.spd
      };
      return {
        ...e,
        ...o,
        power: Gt(o, e.eidolon, e.cls, Rt(e, {
        }), e.level)
      }
    }
  )
}
var rn = e => e.reduce((e, t) => e + t.power, 0),
an = 0.08,
on = 0.9,
sn = {
  hr: {
    name: `Hard Rock`,
    short: `HR`,
    text: `Everyone hits 30% harder and healing is halved.`
  },
  dt: {
    name: `Double Time`,
    short: `DT`,
    text: `Everyone acts 40% faster.`
  },
  hd: {
    name: `Hidden`,
    short: `HD`,
    text: `You can't see the enemies' HP or Guard.`
  },
  fl: {
    name: `Flashlight`,
    short: `FL`,
    text: `Taunts do nothing: every card can be targeted.`
  },
  sd: {
    name: `Sudden Death`,
    short: `SD`,
    text: `Shields, Guardian Angel and Undying don't work.`
  },
  ht: {
    name: `Half Time`,
    short: `HT`,
    text: `Everyone acts 30% slower and healing is 50% stronger.`
  }
},
cn = {
  regen: {
    name: `Regen`,
    text: `Every third turn, instead of attacking, the boss heals its whole team by 10% of their max HP.`
  },
  armor: {
    name: `Armor`,
    text: `The boss takes 40% less damage until it is Broken.`
  },
  frenzy: {
    name: `Frenzy`,
    text: `The boss acts 60% more often.`
  },
  enrage: {
    name: `Enrage`,
    text: `Under half HP, the boss hits 40% harder.`
  }
};
function Y(e, t, n, r) {
  return {
    cls: e,
    skill: t,
    passive: n,
    mods: r.split(` `).map(e => e.split(`:`))
  }
}
var ln = [
  {
    id: `balanced`,
    name: `Balanced`,
    source: `classic`,
    text: `One of each class. Take the DPS out first, then break the Tank.`,
    classes: [
      `tank`,
      `dps`,
      `support`,
      `cc`
    ]
  },
  {
    id: `glass`,
    name: `Glass Cannons`,
    source: `classic`,
    text: `Two DPS behind a CC: they hit very hard but fold fast. Shield up, then hit back.`,
    classes: [
      `dps`,
      `dps`,
      `cc`,
      `support`
    ]
  },
  {
    id: `turtle`,
    name: `Turtle`,
    source: `classic`,
    text: `Two Tanks and two Supports: slow and very tough. Break the Tanks and keep the pressure on.`,
    classes: [
      `tank`,
      `tank`,
      `support`,
      `support`
    ]
  },
  {
    id: `hex`,
    name: `Hex Circle`,
    source: `classic`,
    text: `Two CC Weaken and slow your team while their DPS finishes it. Heal through, and hit the CC.`,
    classes: [
      `cc`,
      `cc`,
      `dps`,
      `tank`
    ]
  },
  {
    id: `warband`,
    name: `War Band`,
    source: `classic`,
    text: `A Tank holds the line for two DPS. Break the Tank, or beat the DPS to it.`,
    classes: [
      `tank`,
      `dps`,
      `dps`,
      `support`
    ]
  }
],
un = [
  {
    id: `vanguard`,
    name: `Vanguard`,
    source: `layout`,
    text: `Two Tanks shield a DPS and a CC. Break one Tank at a time, or go around them.`,
    classes: [
      `tank`,
      `tank`,
      `dps`,
      `cc`
    ]
  },
  {
    id: `medics`,
    name: `Field Medics`,
    source: `layout`,
    text: `Two Supports keep a DPS and a CC standing. Burst one down at a time, or hit the Supports first.`,
    classes: [
      `support`,
      `support`,
      `dps`,
      `cc`
    ]
  },
  {
    id: `strike`,
    name: `Strike Team`,
    source: `layout`,
    text: `Two DPS and two CC and no healing: they hit fast and fold fast. Outlast the opening.`,
    classes: [
      `dps`,
      `cc`,
      `dps`,
      `cc`
    ]
  }
],
X = e => ({
  ...e,
  classes: e.slots.map(e => e.cls)
}),
dn = [
  X({
    id: `firing-squad`,
    power: 0.88,
    name: `Firing Squad`,
    source: `layout`,
    text: `Three DPS and a Thrifty Battle Hymn, and nobody to protect them: they hit very hard but fold fast. Shield up, then knock out the Execute first.`,
    slots: [
      Y(
        `dps`,
        `execute`,
        `bloodlust`,
        `hd:atkPct hr:critRate pf:critDmg`
      ),
      Y(
        `dps`,
        `piercing-shot`,
        `deadeye`,
        `hr:critRate hd:atkPct pf:critDmg`
      ),
      Y(
        `dps`,
        `blade-storm`,
        `momentum`,
        `sd:atkPct dt:atkPct hr:critRate`
      ),
      Y(
        `support`,
        `battle-hymn`,
        `thrifty`,
        `ez:outHeal ht:hpPct rx:spd`
      )
    ]
  }),
  X({
    id: `choir`,
    power: 0.71,
    name: `Choir`,
    source: `layout`,
    text: `Three Supports heal, shield and buff one Avenger Heavy Strike. Their damage is all in one card: take it out and the Choir can’t hurt you.`,
    slots: [
      Y(
        `support`,
        `sanctuary`,
        `guardian-angel`,
        `ez:outHeal nf:hpPct ht:hpPct`
      ),
      Y(
        `support`,
        `battle-hymn`,
        `thrifty`,
        `rx:outHeal ez:outHeal dt:spd`
      ),
      Y(`support`, `mend`, `lifeline`, `ez:outHeal ht:hpPct nf:hpPct`),
      Y(
        `dps`,
        `heavy-strike`,
        `avenger`,
        `hd:atkPct hr:critRate pf:critDmg`
      )
    ]
  }),
  X({
    id: `pitcrew`,
    power: 0.88,
    name: `Pit Crew`,
    source: `layout`,
    text: `A Momentum Overture refuels the team while a Guard Breaker Fracture and an Exploit Wither take your Guard apart. Keep your Guard up, and take the Overture out first.`,
    slots: [
      Y(
        `tank`,
        `shield-bash`,
        `follow-up`,
        `nf:hpPct ht:defPct ez:hpPct`
      ),
      Y(
        `cc`,
        `fracture`,
        `guard-breaker`,
        `so:guardDmg hd:atkPct fl:atkPct`
      ),
      Y(`cc`, `wither`, `exploit`, `hd:atkPct hr:critRate ht:defPct`),
      Y(`support`, `overture`, `momentum`, `rx:spd ez:outHeal dt:spd`)
    ]
  }),
  X({
    id: `hexcourt`,
    power: 0.97,
    name: `Hex Court`,
    source: `layout`,
    text: `Three CC Slow, Weaken and Expose your team so an Opportunist Piercing Shot can cash in. Cleanse the debuffs, or rush the DPS.`,
    slots: [
      Y(`cc`, `stall`, `encore`, `dt:spd hd:atkPct hr:critRate`),
      Y(`cc`, `wither`, `thrifty`, `hd:atkPct ht:defPct nf:hpPct`),
      Y(`cc`, `curse`, `weak-point`, `hd:atkPct hr:critRate pf:critDmg`),
      Y(
        `dps`,
        `piercing-shot`,
        `opportunist`,
        `hd:atkPct hr:critRate pf:critDmg`
      )
    ]
  }),
  X({
    id: `bloodpact`,
    power: 0.93,
    name: `Blood Pact`,
    source: `layout`,
    text: `Vampirism on every card: each hit heals them. Slow damage won’t do: burst one down at a time, starting with the Blade Storm.`,
    slots: [
      Y(
        `dps`,
        `blade-storm`,
        `vampirism`,
        `hd:atkPct hr:critRate pf:critDmg`
      ),
      Y(
        `tank`,
        `shield-bash`,
        `vampirism`,
        `nf:hpPct ht:defPct ez:hpPct`
      ),
      Y(`support`, `mend`, `vampirism`, `ez:outHeal nf:hpPct ht:hpPct`),
      Y(`cc`, `wither`, `vampirism`, `hd:atkPct hr:critRate ht:defPct`)
    ]
  }),
  X({
    id: `wrecking`,
    power: 0.86,
    name: `Wrecking Crew`,
    source: `layout`,
    text: `Shield Bash, Heavy Strike and Fracture smash your Guard, and every Break sets off a Follow-up or an Exploit. Keep your Guard up and hit the Guard Breaker first.`,
    slots: [
      Y(
        `tank`,
        `shield-bash`,
        `follow-up`,
        `nf:hpPct ht:defPct ez:hpPct`
      ),
      Y(
        `dps`,
        `heavy-strike`,
        `guard-breaker`,
        `hd:atkPct hr:critRate so:guardDmg`
      ),
      Y(`dps`, `execute`, `exploit`, `hd:atkPct hr:critRate pf:critDmg`),
      Y(`cc`, `fracture`, `momentum`, `so:guardDmg hd:atkPct fl:atkPct`)
    ]
  }),
  X({
    id: `encore-act`,
    power: 0.91,
    name: `Encore Act`,
    source: `layout`,
    text: `Encore on every card: any Skill can come twice in a row, and an Overture feeds them Skill Points. Slow them back down, and take the Overture out first.`,
    slots: [
      Y(`support`, `overture`, `encore`, `rx:spd ez:outHeal dt:spd`),
      Y(`cc`, `stall`, `encore`, `dt:spd hd:atkPct ht:spd`),
      Y(`cc`, `curse`, `encore`, `hd:atkPct hr:critRate dt:spd`),
      Y(
        `dps`,
        `piercing-shot`,
        `encore`,
        `hd:atkPct hr:critRate pf:critDmg`
      )
    ]
  })
],
fn = [
  X({
    id: `meta`,
    power: 0.82,
    name: `Ladder Meta`,
    source: `live`,
    text: `What the top climbers run: a Deadeye Piercing Shot, a Spiked Armor Counter Stance, a Lifeline Battle Hymn and an Encore Stall. Kill the DPS through the counters.`,
    slots: [
      Y(
        `dps`,
        `piercing-shot`,
        `deadeye`,
        `hd:atkPct hr:critRate pf:critDmg`
      ),
      Y(
        `tank`,
        `counter-stance`,
        `spiked-armor`,
        `nf:hpPct ht:defPct ez:hpPct`
      ),
      Y(
        `support`,
        `battle-hymn`,
        `lifeline`,
        `ez:outHeal ht:defPct nf:hpPct`
      ),
      Y(`cc`, `stall`, `encore`, `hd:atkPct hr:critRate pf:critDmg`)
    ]
  }),
  X({
    id: `national`,
    power: 0.75,
    name: `National Team`,
    source: `live`,
    country: !0,
    text: `Four players from one country, +30% ATK and HP from their flag, around an Execute Hypercarry. Every card is tougher than it looks: focus one at a time.`,
    slots: [
      Y(
        `tank`,
        `iron-skin`,
        `guardian-angel`,
        `ht:defPct nf:hpPct ez:hpPct`
      ),
      Y(`dps`, `execute`, `deadeye`, `hr:critRate hd:atkPct dt:atkPct`),
      Y(
        `support`,
        `overture`,
        `unshakable`,
        `nf:hpPct ht:hpPct ez:outHeal`
      ),
      Y(`cc`, `wither`, `thrifty`, `hd:atkPct ht:spd dt:spd`)
    ]
  }),
  X({
    id: `hypercarry`,
    power: 0.83,
    name: `Hypercarry`,
    source: `live`,
    text: `Everything feeds one Execute: a Thrifty Battle Hymn buffs it and its crits build Overdrive. Kill it or Weaken it before it cashes in.`,
    slots: [
      Y(`dps`, `execute`, `deadeye`, `hr:critRate hd:atkPct dt:atkPct`),
      Y(
        `support`,
        `battle-hymn`,
        `thrifty`,
        `ez:outHeal nc:atkPct dt:spd`
      ),
      Y(
        `tank`,
        `counter-stance`,
        `guardian-angel`,
        `ez:hpPct ht:defPct nf:hpPct`
      ),
      Y(`cc`, `stall`, `encore`, `hr:critRate pf:critDmg hd:atkPct`)
    ]
  }),
  X({
    id: `expose`,
    power: 0.56,
    name: `Expose and Pierce`,
    source: `live`,
    text: `A Weak Point Curse Exposes you for a glass-cannon Piercing Shot that ignores shields. Cleanse the Curse, or take the CC out first.`,
    slots: [
      Y(`cc`, `curse`, `weak-point`, `dt:spd hd:atkPct hr:critRate`),
      Y(
        `tank`,
        `counter-stance`,
        `spiked-armor`,
        `nf:hpPct ht:defPct ez:hpPct`
      ),
      Y(
        `support`,
        `overture`,
        `undying`,
        `ht:hpPct nf:hpPct ez:outHeal`
      ),
      Y(
        `dps`,
        `piercing-shot`,
        `deadeye`,
        `pf:critDmg sd:atkPct hr:critRate`
      )
    ]
  }),
  X({
    id: `breakline`,
    power: 0.87,
    name: `Break Line`,
    source: `live`,
    text: `Fracture and Heavy Strike shatter your Guard, and Momentum and Follow-up cash in every Break. Keep your Guard up, or break them first.`,
    slots: [
      Y(
        `dps`,
        `heavy-strike`,
        `momentum`,
        `hr:critRate hd:atkPct fl:atkPct`
      ),
      Y(
        `cc`,
        `fracture`,
        `follow-up`,
        `hd:atkPct hr:critRate fl:atkPct`
      ),
      Y(
        `tank`,
        `shield-bash`,
        `spiked-armor`,
        `ez:hpPct nf:hpPct ht:defPct`
      ),
      Y(
        `support`,
        `sanctuary`,
        `follow-up`,
        `rx:outHeal ez:outHeal dt:spd`
      )
    ]
  }),
  X({
    id: `sustain`,
    power: 0.7,
    name: `Sustain Wall`,
    source: `live`,
    text: `Iron Skin, a Vampirism Mend and a Vampirism Execute heal through slow damage. Burst one down at a time, starting with the Support.`,
    slots: [
      Y(
        `tank`,
        `iron-skin`,
        `spiked-armor`,
        `ez:hpPct nf:hpPct ht:defPct`
      ),
      Y(`support`, `mend`, `vampirism`, `ez:outHeal nf:hpPct ht:hpPct`),
      Y(
        `dps`,
        `execute`,
        `vampirism`,
        `hd:atkPct hr:critRate pf:critDmg`
      ),
      Y(`cc`, `wither`, `exploit`, `hd:atkPct hr:critRate ht:defPct`)
    ]
  }),
  X({
    id: `tempo`,
    power: 0.83,
    name: `Tempo`,
    source: `live`,
    text: `Double Time, Relax and Nightcore: a Lifeline Overture and a Thrifty Stall keep them acting before you. Slow them back, or out-heal the rush.`,
    slots: [
      Y(`support`, `overture`, `lifeline`, `dt:spd rx:spd ez:outHeal`),
      Y(`cc`, `stall`, `thrifty`, `dt:spd nc:atkPct hd:atkPct`),
      Y(
        `dps`,
        `heavy-strike`,
        `avenger`,
        `hd:atkPct dt:atkPct hr:critRate`
      ),
      Y(
        `tank`,
        `counter-stance`,
        `unshakable`,
        `ht:spd nf:hpPct ez:hpPct`
      )
    ]
  }),
  X({
    id: `twinstorm`,
    power: 0.86,
    name: `Twin Storm`,
    source: `live`,
    text: `Two Momentum Blade Storms hit your whole team at once, and every Break hands them Skill Points. Taunts don’t help: shield everyone and kill one Storm fast.`,
    slots: [
      Y(
        `dps`,
        `blade-storm`,
        `momentum`,
        `sd:atkPct hr:critRate pf:critDmg`
      ),
      Y(
        `dps`,
        `blade-storm`,
        `momentum`,
        `so:guardDmg nc:atkPct dt:atkPct`
      ),
      Y(
        `tank`,
        `bulwark`,
        `guardian-angel`,
        `nf:hpPct ht:defPct ez:hpPct`
      ),
      Y(
        `support`,
        `overture`,
        `lifeline`,
        `ez:outHeal ht:hpPct nf:hpPct`
      )
    ]
  }),
  X({
    id: `thorns`,
    power: 0.88,
    name: `Iron Maiden`,
    source: `designed`,
    text: `Spiked Armor on three cards: two Tanks Taunt in turn and hurt whoever hits them while a Curse Exposes you. Pierce or ignore the Tanks; Flashlight floors switch the Taunts off.`,
    slots: [
      Y(
        `cc`,
        `curse`,
        `spiked-armor`,
        `hd:atkPct hr:critRate pf:critDmg`
      ),
      Y(
        `tank`,
        `iron-skin`,
        `spiked-armor`,
        `nf:hpPct ht:defPct ez:hpPct`
      ),
      Y(
        `tank`,
        `counter-stance`,
        `spiked-armor`,
        `nf:defPct ht:defPct ez:hpPct`
      ),
      Y(
        `support`,
        `sanctuary`,
        `lifeline`,
        `ez:outHeal ht:hpPct nf:hpPct`
      )
    ]
  }),
  X({
    id: `executioners`,
    power: 0.68,
    name: `Executioners`,
    source: `designed`,
    text: `Two Sudden Death Executes finish anyone under half HP, fed by a Thrifty Battle Hymn. Keep your HP high and kill them first.`,
    slots: [
      Y(`dps`, `execute`, `bloodlust`, `sd:atkPct pf:critDmg fl:atkPct`),
      Y(`dps`, `execute`, `deadeye`, `sd:atkPct hr:critRate hd:atkPct`),
      Y(`cc`, `stall`, `encore`, `hd:atkPct ht:spd dt:spd`),
      Y(
        `support`,
        `battle-hymn`,
        `thrifty`,
        `rx:outHeal ez:outHeal dt:spd`
      )
    ]
  }),
  X({
    id: `undying`,
    power: 0.67,
    name: `Undying Legion`,
    source: `designed`,
    text: `Undying and Guardian Angel on every card: they get back up. Hit each one twice, or fight them on Sudden Death.`,
    slots: [
      Y(
        `support`,
        `sanctuary`,
        `undying`,
        `ez:outHeal nf:hpPct ht:hpPct`
      ),
      Y(
        `tank`,
        `bulwark`,
        `guardian-angel`,
        `nf:hpPct ht:defPct ez:hpPct`
      ),
      Y(
        `dps`,
        `heavy-strike`,
        `undying`,
        `hd:atkPct hr:critRate pf:critDmg`
      ),
      Y(`cc`, `wither`, `undying`, `hd:atkPct ht:defPct nf:hpPct`)
    ]
  }),
  X({
    id: `avengers`,
    power: 0.87,
    name: `Avengers`,
    source: `designed`,
    text: `All four are Avengers: every knockout makes the rest hit 25% harder and act sooner. Spread your damage, then finish the last two together.`,
    slots: [
      Y(`tank`, `shield-bash`, `avenger`, `nf:hpPct ht:defPct ez:hpPct`),
      Y(
        `dps`,
        `piercing-shot`,
        `avenger`,
        `hd:atkPct hr:critRate pf:critDmg`
      ),
      Y(`cc`, `curse`, `avenger`, `hd:atkPct hr:critRate dt:spd`),
      Y(
        `support`,
        `battle-hymn`,
        `avenger`,
        `ez:outHeal ht:hpPct rx:spd`
      )
    ]
  }),
  X({
    id: `ambush`,
    power: 0.67,
    name: `Ambush`,
    source: `designed`,
    text: `Ambush and Double Time on everyone: they move first, and the Assassin goes for your weakest card. Shield up on your first turn.`,
    slots: [
      Y(
        `dps`,
        `piercing-shot`,
        `ambush`,
        `hd:atkPct dt:atkPct fl:atkPct`
      ),
      Y(`cc`, `stall`, `ambush`, `dt:spd hd:atkPct ht:spd`),
      Y(`support`, `overture`, `ambush`, `rx:spd nc:outHeal dt:spd`),
      Y(`tank`, `counter-stance`, `ambush`, `dt:spd nf:hpPct ht:defPct`)
    ]
  }),
  X({
    id: `orchestra`,
    power: 0.69,
    name: `Orchestra`,
    source: `designed`,
    text: `Two Conductor Supports chain extra turns and +15% DMG into a Guard Breaker Hypercarry. No Tank: silence the conductors first.`,
    slots: [
      Y(`support`, `overture`, `encore`, `rx:spd nc:outHeal dt:spd`),
      Y(
        `support`,
        `battle-hymn`,
        `thrifty`,
        `rx:outHeal nc:hpPct dt:spd`
      ),
      Y(
        `dps`,
        `heavy-strike`,
        `guard-breaker`,
        `hd:atkPct dt:atkPct hr:critRate`
      ),
      Y(`cc`, `fracture`, `momentum`, `so:guardDmg fl:atkPct hd:atkPct`)
    ]
  }),
  X({
    id: `coven`,
    power: 0.82,
    name: `Coven`,
    source: `designed`,
    text: `Two Hex CC Curse, Weaken and Slow your team for longer, and a Weak Point Piercing Shot hits the Exposed. Cleanse, or take the CC out first.`,
    slots: [
      Y(`cc`, `curse`, `encore`, `hd:atkPct ht:spd dt:spd`),
      Y(`cc`, `wither`, `thrifty`, `hd:atkPct ht:defPct nf:hpPct`),
      Y(
        `dps`,
        `piercing-shot`,
        `weak-point`,
        `hd:atkPct hr:critRate pf:critDmg`
      ),
      Y(
        `support`,
        `sanctuary`,
        `unshakable`,
        `ez:outHeal ht:hpPct nf:hpPct`
      )
    ]
  }),
  X({
    id: `breakstorm`,
    power: 0.86,
    name: `Spinner Storm`,
    source: `designed`,
    text: `A Spun Out Blade Storm with Vampirism breaks every Guard at once and heals off it, while a Guard Breaker Fracture cashes in. Kill the Storm first.`,
    slots: [
      Y(
        `dps`,
        `blade-storm`,
        `vampirism`,
        `so:guardDmg nc:atkPct dt:atkPct`
      ),
      Y(
        `cc`,
        `fracture`,
        `guard-breaker`,
        `so:guardDmg fl:atkPct hd:atkPct`
      ),
      Y(`support`, `overture`, `encore`, `rx:spd nc:outHeal dt:spd`),
      Y(`tank`, `bulwark`, `bastion`, `nf:hpPct ht:defPct ez:hpPct`)
    ]
  })
],
pn = [
  ...ln,
  ...un,
  ...dn,
  ...fn
],
mn = e => pn.find(t => t.id === e),
hn = [
  `US`,
  `KR`,
  `JP`,
  `PL`,
  `DE`,
  `RU`,
  `CA`,
  `FR`,
  `GB`,
  `BR`,
  `CN`,
  `AU`
],
gn = [
  `common`,
  `uncommon`,
  `rare`,
  `epic`,
  `legendary`,
  `mythic`,
  `divine`
],
_n = {
  levelPow: 0.85,
  eidolonFrom: 0.4,
  eidolonMax: 6,
  steepFrom: 60,
  steepPerFloor: 0.04,
  mods: [
    [1,
    0,
    1,
    0],
    [
      8,
      1,
      2,
      0.3
    ],
    [
      15,
      2,
      3,
      0.4
    ],
    [
      28,
      3,
      3,
      0.7
    ],
    [
      40,
      3,
      4,
      0.8
    ],
    [
      55,
      3,
      4,
      1
    ],
    [
      70,
      3,
      5,
      0.6
    ],
    [
      85,
      3,
      5,
      1
    ]
  ]
};
function vn(e) {
  let t = ht.findIndex(t => e <= t);
  return t < 0 ? ht.length - 1 : t
}
function yn(e) {
  let t = Math.max(0, Math.min(1, (e - 1) / 99)),
  n = e > 100 ? Math.min(100, 80 + Math.round((e - 100) * 0.8)) : Math.max(1, Math.min(80, Math.round(1 + 79 * t**_n.levelPow))),
  r = (t - _n.eidolonFrom) / (1 - _n.eidolonFrom),
  i = r <= 0 ? 0 : Math.min(_n.eidolonMax, Math.round(_n.eidolonMax * r**1.3)),
  [
    ,
    a,
    o,
    s
  ] = [
    ..._n.mods
  ].reverse().find(([t]) => e >= t);
  return {
    level: n,
    ascension: vn(n),
    eidolon: i,
    mods: {
      count: a,
      rarity: o,
      level: Math.round(H[o] * s)
    }
  }
}
var bn = [
  `regen`,
  `armor`,
  `frenzy`,
  `enrage`
],
xn = {
  25: 5,
  50: 3,
  75: 2,
  100: 1,
  125: 1
},
Sn = e => e % 5 == 0;
function Cn(e) {
  if (!Sn(e)) return null;
  let t = e / 5;
  return {
    kind: bn[(t - 1) % bn.length],
    popularityRank: xn[e] ?? 6 + t * 7 % 25
  }
}
var wn = e => Math.min(100, 30 + Math.floor(e * 0.7)),
Tn = {
  share: 0.75,
  gap: 5,
  perFloor: 0.02,
  max: 0.4
};
function En(e, t) {
  let n = Math.min(t, 100) - Tn.gap - e;
  return n > 0 ? 1 - Math.min(Tn.max, Tn.perFloor * n) : 1
}
var Dn = {
  from: 60,
  perFloor: 0.01
};
function On(e) {
  let t = Math.min(e, 100);
  if (t <= Dn.from) return 1;
  let n = 1 + _n.steepPerFloor * Math.max(0, t - _n.steepFrom);
  return (1 - Dn.perFloor * (t - Dn.from)) / n
}
function kn(e, t = 0) {
  let n = An(e),
  r = e >= 60 ? Ln(n, In(e), Mn(`floor-${ e }`)) : n,
  i = En(e, t) * On(e);
  return i < 1 ? {
    ...r,
    scale: r.scale * i
  }
   : r
}
function An(e) {
  let t = u(e * 7919 + 17),
  n = yn(e),
  r = Math.min(gn.length - 1, (e - 1) / 99 * (gn.length - 1)),
  i = e <= 3 ? null : ln[Math.floor(t.next() * ln.length)],
  a = i ? [
    ...i.classes
  ] : Array.from({
    length: 4
  }, () => g[Math.floor(t.next() * g.length)]),
  o = Cn(e),
  s = wn(e),
  c = a.map(
    (i, a) => {
      let c = Math.min(gn.length - 1, Math.floor(r) + + (t.next() < r % 1)),
      l = Math.round(s * (i === `tank` ? 1.5 : 1) * (o && a === 0 ? 2 : 1));
      return {
        rarity: gn[c],
        cls: i,
        guard: l,
        passive: e > 3,
        ...jn(e, a, n.eidolon)
      }
    }
  ),
  l = t.next(),
  d = kt[Math.floor(t.next() * kt.length)],
  ee = e > 5 &&
  !o &&
  l < 0.45 ? d : null,
  f = e < 10 ? 0 : e < 40 ? 1 : e < 60 ? 2 : 3,
  te = (1 + _n.steepPerFloor * Math.max(0, e - _n.steepFrom)) * (1 + an * Math.max(0, e - 100)),
  p = (e < 5 ? 0.6 + 0.08 * e : (e < 25 ? 0.9 : 1) * (e <= 100 ? on : 1)) * (o ? 1.12 : 1) * te;
  return {
    floor: e,
    level: n.level,
    build: n,
    slots: c,
    party: i ? {
      id: i.id,
      name: i.name
    }
     : {
      id: `mixed`,
      name: `Mixed`
    },
    scale: p,
    eidolon: n.eidolon,
    boss: o,
    mod: ee,
    aiLevel: f
  }
}
function jn(e, t, n) {
  if (e < 20) return {
  };
  let r = e < 50 ? 1 : e < 80 ? 1.5 : 2,
  i = Nn(4, u(e * 6101 + 5)),
  a = Math.round([ - 3,
  - 1,
  1,
  3][i[t]] * r),
  o = [
    - 1,
    0,
    0,
    1
  ][i[(t + 1) % 4]],
  s = n + o < 0 ||
  n + o > 6 ? 0 : o;
  return {
    levelOffset: a,
    ...s ? {
      eidolonOffset: s
    }
     : {
    }
  }
}
var Mn = e => hn[Math.floor(d(`${ e }#country`) * hn.length)];
function Nn(e, t) {
  let n = Array.from({
    length: e
  }, (e, t) => t);
  for (let r = e - 1; r > 0; r--) {
    let e = Math.floor(t.next() * (r + 1));
    [
      n[r],
      n[e]
    ] = [
      n[e],
      n[r]
    ]
  }
  return n
}
function Pn(e) {
  let t = fn.length,
  n = Nn(t, u(e * 7907 + 3));
  return e > 0 &&
  n[0] === Pn(e - 1) [t - 1] &&
  ([n[0],
  n[1]] = [
    n[1],
    n[0]
  ]),
  n
}
var Fn = `hypercarry`;
function In(e) {
  let t = e => {
    let t = Math.max(0, e - 60);
    return fn[Pn(Math.floor(t / fn.length)) [t % fn.length]]
  };
  if (e === 100 || e >= 125) return mn(Fn);
  let n = t(e);
  return (e === 99 || e === 124) &&
  n.id === `hypercarry` ? t(e + 1) : n
}
function Ln(e, t, n) {
  let r = wn(e.floor),
  i = t.classes.map(
    (i, a) => {
      let o = t.slots?.[a],
      s = e.slots[a];
      return {
        rarity: s.rarity,
        cls: i,
        guard: Math.round(r * (i === `tank` ? 1.5 : 1) * (e.boss && a === 0 ? 2 : 1)),
        passive: s.passive,
        ...jn(e.floor, a, e.eidolon),
        ...o ? {
          kit: {
            skill: o.skill,
            passive: o.passive
          },
          mods: o.mods
        }
         : {
        },
        ...t.country &&
        n ? {
          country: n
        }
         : {
        }
      }
    }
  );
  return {
    ...e,
    slots: i,
    party: {
      id: t.id,
      name: t.name
    },
    scale: e.scale * (t.power ?? 1)
  }
}
function Rn(e) {
  return Math.max(5, Math.round(4 * e**1.25 / 5) * 5)
}
function zn(e) {
  return e === 100 ||
  e === 125 ? `prismatic` : e === 50 ? `mythic` : e % 25 == 0 ? `legendary` : e % 10 == 0 ? `golden` : null
}
function Bn(e) {
  let t = {};
  if (e < 30 ? t[be(1)] = 2 : e < 70 ? t[be(2)] = 1 : t[be(3)] = 1, e % 10 == 0) {
    let n = g[Math.floor(d(`floor-${ e }-class`) * g.length)],
    r = e < 40 ? 1 : e < 80 ? 2 : 3;
    t[L(n, r)] = 3
  }
  let n = Sn(e);
  return n &&
  (t.boss_trophy = e % 25 == 0 ? 3 : 1),
  {
    stars: Rn(e),
    fuel: e % 25 == 0 ? 2 : + !!n,
    items: t,
    pack: zn(e),
    mod: n ? e <= 25 ? 3 : e <= 60 ? 4 : 5 : null,
    accountXp: 10
  }
}
var Vn = {
  cap: 360,
  regenSeconds: 240,
  reserveCap: 2400,
  refillAmount: 60,
  fuelAmount: 60
},
Hn = {
  class_maps: 2,
  mods: 4,
  pvp: 8
},
Un = {
  class_maps: `Insignia Maps`,
  mods: `Mods and Mod Maps`,
  pvp: `Tower PvP`
},
Wn = (e, t) => e >= Hn[t],
Gn = [
  1,
  2,
  3,
  4,
  5,
  6
],
Kn = [
  ``,
  `Easy`,
  `Normal`,
  `Hard`,
  `Insane`,
  `Expert`,
  `Expert+`
],
qn = e => `${ e.slice(0, - 1).map(e => Fe[e].short).join(`, `) } and ${ Fe[e[e.length - 1]].short }`,
Jn = [
  {
    id: `galaxy-collapse`,
    beatmapsetId: 396221,
    kind: `xp`,
    name: `Galaxy Collapse`,
    artist: `Kurokotei`,
    text: `Replays (card XP) and ${ F.stars }.`,
    cost: 10,
    party: [
      `dps`,
      `tank`,
      `support`,
      `dps`
    ]
  },
  {
    id: `the-big-black`,
    beatmapsetId: 867737,
    kind: `class`,
    name: `The Big Black`,
    artist: `The Quick Brown Fox`,
    text: `${ _.tank.name } and ${ _.dps.name } ${ F.insignia }, to ascend those cards.`,
    cost: 10,
    classes: [
      `tank`,
      `dps`
    ],
    party: [
      `tank`,
      `dps`,
      `dps`,
      `cc`
    ]
  },
  {
    id: `freedom-dive`,
    beatmapsetId: 2237410,
    kind: `class`,
    name: `FREEDOM DiVE`,
    artist: `xi`,
    text: `${ _.support.name } and ${ _.cc.name } ${ F.insignia }, to ascend those cards.`,
    cost: 10,
    classes: [
      `support`,
      `cc`
    ],
    party: [
      `support`,
      `cc`,
      `cc`,
      `dps`
    ]
  },
  {
    id: `remote-control`,
    beatmapsetId: 351630,
    kind: `mod`,
    name: `Remote Control`,
    artist: `kradness & Reol`,
    text: `${ qn([`ez`,
    `nf`,
    `rx`,
    `hr`,
    `sd`,
    `dt`]) } mods, and ${ F.fragments }.`,
    cost: 10,
    modTypes: [
      `ez`,
      `nf`,
      `rx`,
      `hr`,
      `sd`,
      `dt`
    ],
    party: [
      `tank`,
      `cc`,
      `dps`,
      `dps`
    ]
  },
  {
    id: `everything-will-freeze`,
    beatmapsetId: 158023,
    kind: `mod`,
    name: `Everything will freeze`,
    artist: `UNDEAD CORPORATION`,
    text: `${ qn([`hd`,
    `fl`,
    `nc`,
    `pf`,
    `so`,
    `ht`]) } mods, and ${ F.fragments }.`,
    cost: 10,
    modTypes: [
      `hd`,
      `fl`,
      `nc`,
      `pf`,
      `so`,
      `ht`
    ],
    party: [
      `cc`,
      `tank`,
      `dps`,
      `support`
    ]
  }
],
Yn = e => Jn.find(t => t.id === e),
Xn = (e, t = `cover`) => `https://assets.ppy.sh/beatmaps/${ e }/covers/${ t }@2x.jpg`,
Zn = e => Jn.find(t => t.classes?.includes(e)),
Qn = {
  dailyWins: 40,
  share: 0.2
},
$n = [
  {
    kind: `spend_stamina`,
    variants: [
      {
        id: `stamina-60`,
        title: `Spend 60 Stamina`,
        goal: 60,
        reward: 60
      },
      {
        id: `stamina-120`,
        title: `Spend 120 Stamina`,
        goal: 120,
        reward: 100,
        fuel: 1
      },
      {
        id: `stamina-200`,
        title: `Spend 200 Stamina`,
        goal: 200,
        reward: 150,
        fuel: 1
      }
    ]
  },
  {
    kind: `clear_maps`,
    variants: [
      {
        id: `clear-2`,
        title: `Clear 2 Maps`,
        goal: 2,
        reward: 70
      },
      {
        id: `clear-5`,
        title: `Clear 5 Maps`,
        goal: 5,
        reward: 130,
        fuel: 1
      }
    ]
  },
  {
    kind: `enhance_mods`,
    feature: `mods`,
    variants: [
      {
        id: `enhance-1`,
        title: `Enhance a mod`,
        goal: 1,
        reward: 60
      },
      {
        id: `enhance-3`,
        title: `Enhance mods 3 times`,
        goal: 3,
        reward: 110
      }
    ]
  },
  {
    kind: `level_cards`,
    variants: [
      {
        id: `level-1`,
        title: `Level up a card`,
        goal: 1,
        reward: 50
      },
      {
        id: `level-3`,
        title: `Level up cards 3 times`,
        goal: 3,
        reward: 100
      }
    ]
  },
  {
    kind: `tower_clears`,
    variants: [
      {
        id: `tower-1`,
        title: `Clear a new Tower floor`,
        goal: 1,
        reward: 80
      },
      {
        id: `tower-3`,
        title: `Clear 3 new Tower floors`,
        goal: 3,
        reward: 150,
        fuel: 1
      }
    ]
  }
],
er = [
  {
    kind: `open_packs`,
    variants: [
      {
        id: `open-10`,
        title: `Open 10 packs`,
        goal: 10,
        reward: 60
      },
      {
        id: `open-20`,
        title: `Open 20 packs`,
        goal: 20,
        reward: 100
      },
      {
        id: `open-35`,
        title: `Open 35 packs`,
        goal: 35,
        reward: 160
      }
    ]
  },
  {
    kind: `pack_upgrade`,
    variants: [
      {
        id: `upgrade-1`,
        title: `Get a pack to upgrade while opening it`,
        goal: 1,
        reward: 130
      }
    ]
  },
  {
    kind: `pull_rarity`,
    variants: [
      {
        id: `rare-3`,
        title: `Pull 3 Rare or better cards`,
        goal: 3,
        reward: 70,
        rarity: `rare`
      },
      {
        id: `rare-8`,
        title: `Pull 8 Rare or better cards`,
        goal: 8,
        reward: 140,
        rarity: `rare`
      },
      {
        id: `epic-1`,
        title: `Pull an Epic or better card`,
        goal: 1,
        reward: 100,
        rarity: `epic`
      },
      {
        id: `epic-3`,
        title: `Pull 3 Epic or better cards`,
        goal: 3,
        reward: 200,
        rarity: `epic`
      },
      {
        id: `legendary-1`,
        title: `Pull a Legendary or better card`,
        goal: 1,
        reward: 300,
        rarity: `legendary`
      }
    ]
  },
  {
    kind: `pull_new_players`,
    variants: [
      {
        id: `new-5`,
        title: `Pull 5 players you've never had`,
        goal: 5,
        reward: 70
      },
      {
        id: `new-15`,
        title: `Pull 15 players you've never had`,
        goal: 15,
        reward: 160
      }
    ]
  },
  {
    kind: `pull_value`,
    variants: [
      {
        id: `value-100`,
        title: `Pull cards worth 100 Stars in total`,
        goal: 100,
        reward: 80
      },
      {
        id: `value-300`,
        title: `Pull cards worth 300 Stars in total`,
        goal: 300,
        reward: 160
      }
    ]
  },
  {
    kind: `quicksell`,
    variants: [
      {
        id: `quicksell-10`,
        title: `Quicksell 10 cards`,
        goal: 10,
        reward: 50
      },
      {
        id: `quicksell-30`,
        title: `Quicksell 30 cards`,
        goal: 30,
        reward: 110
      }
    ]
  },
  {
    kind: `quicksell_value`,
    variants: [
      {
        id: `quicksell-value-50`,
        title: `Quicksell cards for 50 Stars in total`,
        goal: 50,
        reward: 60
      },
      {
        id: `quicksell-value-150`,
        title: `Quicksell cards for 150 Stars in total`,
        goal: 150,
        reward: 130
      }
    ]
  },
  {
    kind: `list_cards`,
    needsTrading: !0,
    variants: [
      {
        id: `list-1`,
        title: `List a card on the market`,
        goal: 1,
        reward: 50
      },
      {
        id: `list-3`,
        title: `List 3 cards on the market`,
        goal: 3,
        reward: 100
      }
    ]
  },
  {
    kind: `market_buy`,
    needsTrading: !0,
    variants: [
      {
        id: `market-buy-1`,
        title: `Buy a card on the market`,
        goal: 1,
        reward: 90
      }
    ]
  },
  {
    kind: `market_sell`,
    needsTrading: !0,
    variants: [
      {
        id: `market-sell-1`,
        title: `Sell a card on the market`,
        goal: 1,
        reward: 90
      }
    ]
  }
],
tr = [
  {
    kind: `open_packs`,
    variants: [
      {
        id: `wk-open-100`,
        title: `Open 100 packs`,
        goal: 100,
        reward: 700
      },
      {
        id: `wk-open-200`,
        title: `Open 200 packs`,
        goal: 200,
        reward: 1200
      }
    ]
  },
  {
    kind: `pull_rarity`,
    variants: [
      {
        id: `wk-epic-10`,
        title: `Pull 10 Epic or better cards`,
        goal: 10,
        reward: 900,
        rarity: `epic`
      },
      {
        id: `wk-legendary-2`,
        title: `Pull 2 Legendary or better cards`,
        goal: 2,
        reward: 1300,
        rarity: `legendary`
      },
      {
        id: `wk-mythic-1`,
        title: `Pull a Mythic card`,
        goal: 1,
        reward: 2000,
        rarity: `mythic`
      }
    ]
  },
  {
    kind: `pull_new_players`,
    variants: [
      {
        id: `wk-new-50`,
        title: `Pull 50 players you've never had`,
        goal: 50,
        reward: 700
      },
      {
        id: `wk-new-100`,
        title: `Pull 100 players you've never had`,
        goal: 100,
        reward: 1200
      }
    ]
  },
  {
    kind: `pull_value`,
    variants: [
      {
        id: `wk-value-3000`,
        title: `Pull cards worth 3,000 Stars`,
        goal: 3000,
        reward: 800
      },
      {
        id: `wk-value-7500`,
        title: `Pull cards worth 7,500 Stars`,
        goal: 7500,
        reward: 1400
      }
    ]
  },
  {
    kind: `spend_stamina`,
    variants: [
      {
        id: `wk-stamina-1000`,
        title: `Spend 1,000 Stamina`,
        goal: 1000,
        reward: 900,
        fuel: 2
      },
      {
        id: `wk-stamina-1600`,
        title: `Spend 1,600 Stamina`,
        goal: 1600,
        reward: 1300,
        fuel: 3
      }
    ]
  },
  {
    kind: `clear_maps`,
    feature: `mods`,
    variants: [
      {
        id: `wk-mod-maps-10`,
        title: `Clear a mod Map 10 times`,
        goal: 10,
        reward: 1200,
        fuel: 2,
        stage: `mod`
      }
    ]
  },
  {
    kind: `tower_clears`,
    variants: [
      {
        id: `wk-tower-10`,
        title: `Clear 10 new Tower floors`,
        goal: 10,
        reward: 1000,
        fuel: 1
      }
    ]
  },
  {
    kind: `pack_upgrade`,
    variants: [
      {
        id: `wk-upgrade-3`,
        title: `Get 3 packs to upgrade while opening`,
        goal: 3,
        reward: 900
      }
    ]
  },
  {
    kind: `quicksell`,
    variants: [
      {
        id: `wk-quicksell-150`,
        title: `Quicksell 150 cards`,
        goal: 150,
        reward: 600
      }
    ]
  },
  {
    kind: `market_sell`,
    needsTrading: !0,
    variants: [
      {
        id: `wk-market-sell-5`,
        title: `Sell 5 cards on the market`,
        goal: 5,
        reward: 900
      }
    ]
  }
],
nr = tr.filter(e => e.kind !== `tower_clears`),
rr = tr.map(
  e => e.kind === `pull_value` ? {
    kind: `pull_value`,
    variants: [
      {
        id: `wk-value-2000`,
        title: `Pull cards worth 2,000 Stars`,
        goal: 2000,
        reward: 800
      },
      {
        id: `wk-value-5000`,
        title: `Pull cards worth 5,000 Stars`,
        goal: 5000,
        reward: 1400
      }
    ]
  }
   : e
),
ir = [
  {
    kind: `open_packs`,
    variants: [
      {
        id: `mo-open-1200`,
        title: `Open 1,200 packs`,
        goal: 1200,
        reward: 4000
      },
      {
        id: `mo-open-1800`,
        title: `Open 1,800 packs`,
        goal: 1800,
        reward: 6000
      }
    ]
  },
  {
    kind: `pull_rarity`,
    variants: [
      {
        id: `mo-legendary-80`,
        title: `Pull 80 Legendary or better cards`,
        goal: 80,
        reward: 5000,
        rarity: `legendary`
      },
      {
        id: `mo-mythic-20`,
        title: `Pull 20 Mythic or better cards`,
        goal: 20,
        reward: 7000,
        rarity: `mythic`
      }
    ]
  },
  {
    kind: `pull_new_players`,
    variants: [
      {
        id: `mo-new-4000`,
        title: `Pull 4,000 players you've never had`,
        goal: 4000,
        reward: 5000
      },
      {
        id: `mo-new-6000`,
        title: `Pull 6,000 players you've never had`,
        goal: 6000,
        reward: 7000
      }
    ]
  },
  {
    kind: `pull_value`,
    variants: [
      {
        id: `mo-value-45000`,
        title: `Pull cards worth 45,000 Stars`,
        goal: 45000,
        reward: 5000
      }
    ]
  },
  {
    kind: `spend_stamina`,
    variants: [
      {
        id: `mo-stamina-6000`,
        title: `Spend 6,000 Stamina`,
        goal: 6000,
        reward: 5000,
        fuel: 5
      }
    ]
  },
  {
    kind: `use_fragments`,
    feature: `mods`,
    variants: [
      {
        id: `mo-fragments-10000`,
        title: `Use 10,000 Mod Fragments`,
        goal: 10000,
        reward: 4500,
        fuel: 3
      }
    ]
  },
  {
    kind: `pack_upgrade`,
    variants: [
      {
        id: `mo-upgrade-40`,
        title: `Get 40 packs to upgrade while opening`,
        goal: 40,
        reward: 4500
      }
    ]
  },
  {
    kind: `quicksell`,
    variants: [
      {
        id: `mo-quicksell-1000`,
        title: `Quicksell 1,000 cards`,
        goal: 1000,
        reward: 3500
      }
    ]
  }
],
ar = [
  {
    kind: `open_packs`,
    variants: [
      {
        id: `mo-open-600`,
        title: `Open 600 packs`,
        goal: 600,
        reward: 4000
      },
      {
        id: `mo-open-1000`,
        title: `Open 1,000 packs`,
        goal: 1000,
        reward: 6000
      }
    ]
  },
  {
    kind: `pull_rarity`,
    variants: [
      {
        id: `mo-legendary-10`,
        title: `Pull 10 Legendary or better cards`,
        goal: 10,
        reward: 5000,
        rarity: `legendary`
      },
      {
        id: `mo-mythic-3`,
        title: `Pull 3 Mythic or better cards`,
        goal: 3,
        reward: 7000,
        rarity: `mythic`
      }
    ]
  },
  {
    kind: `pull_new_players`,
    variants: [
      {
        id: `mo-new-300`,
        title: `Pull 300 players you've never had`,
        goal: 300,
        reward: 5000
      },
      {
        id: `mo-new-500`,
        title: `Pull 500 players you've never had`,
        goal: 500,
        reward: 7000
      }
    ]
  },
  {
    kind: `pull_value`,
    variants: [
      {
        id: `mo-value-15000`,
        title: `Pull cards worth 15,000 Stars`,
        goal: 15000,
        reward: 5000
      }
    ]
  },
  {
    kind: `spend_stamina`,
    variants: [
      {
        id: `mo-stamina-6000`,
        title: `Spend 6,000 Stamina`,
        goal: 6000,
        reward: 5000,
        fuel: 5
      }
    ]
  },
  {
    kind: `use_fragments`,
    feature: `mods`,
    variants: [
      {
        id: `mo-fragments-10000`,
        title: `Use 10,000 Mod Fragments`,
        goal: 10000,
        reward: 4500,
        fuel: 3
      }
    ]
  },
  {
    kind: `pack_upgrade`,
    variants: [
      {
        id: `mo-upgrade-12`,
        title: `Get 12 packs to upgrade while opening`,
        goal: 12,
        reward: 4500
      }
    ]
  },
  {
    kind: `quicksell`,
    variants: [
      {
        id: `mo-quicksell-1000`,
        title: `Quicksell 1,000 cards`,
        goal: 1000,
        reward: 3500
      }
    ]
  }
],
or = [
  {
    kind: `pvp_matches`,
    feature: `pvp`,
    variants: [
      {
        id: `pvp-2`,
        title: `Play 2 PvP matches`,
        goal: 2,
        reward: 90
      },
      {
        id: `pvp-4`,
        title: `Play 4 PvP matches`,
        goal: 4,
        reward: 150
      }
    ]
  }
],
sr = [
  {
    kind: `pvp_matches`,
    feature: `pvp`,
    variants: [
      {
        id: `wk-pvp-10`,
        title: `Play 10 PvP matches`,
        goal: 10,
        reward: 700
      },
      {
        id: `wk-pvp-20`,
        title: `Play 20 PvP matches`,
        goal: 20,
        reward: 1200
      }
    ]
  }
],
cr = [
  {
    id: `wk-floors-8`,
    kind: `tower_clears`,
    title: `Clear 8 new Tower floors`,
    goal: 8,
    reward: 0,
    stamina: 240,
    catchUp: !0
  },
  {
    id: `wk-stamina-600`,
    kind: `spend_stamina`,
    title: `Spend 600 Stamina`,
    goal: 600,
    reward: 0,
    stamina: 240,
    catchUp: !0
  }
],
lr = [
  {
    id: `mo-enhance-60`,
    kind: `enhance_mods`,
    title: `Enhance mods 60 times`,
    goal: 60,
    reward: 4500,
    fuel: 3
  }
],
ur = [
  ...[
    ...$n,
    ...er,
    ...or,
    ...nr,
    ...rr,
    ...sr,
    ...ir,
    ...ar
  ].flatMap(e => e.variants.map(t => ({
    ...t,
    kind: e.kind
  }))),
  ...cr,
  ...lr
].filter((e, t, n) => n.findIndex(t => t.id === e.id) === t);
function dr(e) {
  if (ut(e.sig?.id)) {
    let t = dt[e.sig.id].cls;
    return {
      cls: t,
      skill: se[t][0],
      passive: S[0]
    }
  }
  let t = ue(e.player);
  return {
    cls: t.cls,
    skill: M(t.cls, e.skill) ? e.skill : t.skill,
    passive: fe(e.passive) ? e.passive : t.passive
  }
}
function fr(e) {
  let t = dr(e);
  return {
    cardId: e.id,
    playerId: e.player.id,
    name: e.player.username,
    avatarUrl: e.player.avatarUrl,
    coverUrl: e.player.coverUrl,
    countryCode: e.player.countryCode,
    rarity: e.rarity,
    cls: t.cls,
    skill: t.skill,
    passive: ut(e.sig?.id) ? null : t.passive,
    level: e.level,
    ascension: e.ascension,
    eidolon: e.eidolon,
    mods: e.mods.map(
      ({
        type: e,
        rarity: t,
        level: n,
        xp: r,
        main: i,
        subs: a
      }) => ({
        type: e,
        rarity: t,
        level: n,
        xp: r,
        main: i,
        subs: a
      })
    ),
    ...ut(e.sig?.id) &&
    lt(e.sig.tier) ? {
      sig: e.sig.id,
      sigTier: e.sig.tier
    }
     : {
    }
  }
}
var pr = {
  stars: 5000,
  items: {
    fuel: 10
  },
  packSlug: `mythic`
},
mr = 100000,
hr = 0.99,
gr = (e, t) => t === `under` ? e : 100 - e;
function _r(e, t) {
  let n = Math.floor(gr(e, t) * hr * 100) / 100;
  return t === `under` ? n : 100 - n
}
function vr(e, t) {
  return Math.floor(gr(e, t) * hr * 100) / 100
}
function yr(e, t) {
  return Math.floor(99 / gr(e, t) * 10000) / 10000
}
var br = e => e === 37 ? `00` : String(e),
xr = new Set([1,
3,
5,
7,
9,
12,
14,
16,
18,
19,
21,
23,
25,
27,
30,
32,
34,
36]),
Sr = [
  0,
  28,
  9,
  26,
  30,
  11,
  7,
  20,
  32,
  17,
  5,
  22,
  34,
  15,
  3,
  24,
  36,
  13,
  1,
  37,
  27,
  10,
  25,
  29,
  12,
  8,
  19,
  31,
  18,
  6,
  21,
  33,
  16,
  4,
  23,
  35,
  14,
  2
],
Cr = e => e === 0 ||
e === 37 ? `green` : xr.has(e) ? `red` : `black`,
wr = {
  perfect: 25,
  colored: 10,
  mixed: 6
},
Tr = {
  'suited-trips': 100,
  'straight-flush': 50,
  trips: 30,
  straight: 10,
  flush: 4
},
Er = {
  perfect: `Perfect Pair`,
  colored: `Coloured Pair`,
  mixed: `Mixed Pair`,
  'suited-trips': `Suited Trips`,
  'straight-flush': `Straight Flush`,
  trips: `Three of a Kind`,
  straight: `Straight`,
  flush: `Flush`
},
Dr = 1000;
function Or(e, t) {
  let n = 1;
  for (let r = 1; r <= t; r++) n = n * (e - t + r) / r;
  return n
}
var kr = e => e >= 100 ? Math.round(e) : e >= 10 ? Math.round(e * 10) / 10 : Math.round(e * 100) / 100;
function Ar(e, t, n, r) {
  let i = r => e.reduce((e, i, a) => e + i * Math.min(Dr, t[a] + r * n[a]), 0),
  a = 0,
  o = 1000000000;
  for (let e = 0; e < 200; e++) {
    let e = (a + o) / 2;
    i(e) < r ? a = e : o = e
  }
  return t.map((e, t) => e === 0 && n[t] === 0 ? 0 : kr(Math.min(Dr, e + a * n[t])))
}
var jr = [
  8,
  12,
  16
],
Mr = 0.93,
Nr = {
  low: {
    floor: 0.5,
    power: {
      8: 2,
      12: 2.5,
      16: 3
    }
  },
  medium: {
    floor: 0.3,
    power: {
      8: 3,
      12: 4,
      16: 5
    }
  },
  high: {
    floor: 0.2,
    power: {
      8: 4,
      12: 5.5,
      16: 7
    }
  }
};
function Pr(e, t) {
  let {
    floor: n,
    power: r
  }
  = Nr[t],
  i = Array.from({
    length: e + 1
  }, (t, n) => Or(e, n) / 2**e),
  a = i.map((t, n) => (Math.abs(n - e / 2) / (e / 2)) **r[e]);
  return Ar(i, i.map(() => n), a, Mr)
}
var Fr = 0.98;
function Ir(e, t) {
  return Or(10, t) * Or(30, e - t) / Or(40, e)
}
function Lr(e) {
  let t = e <= 2 ? 1 : Math.ceil(e / 2),
  n = Array.from({
    length: e + 1
  }, (t, n) => Ir(e, n)),
  r = n.map((e, n) => n < t ? 0 : (1 / e) **0.55);
  return Ar(n, n.map(() => 0), r, Fr)
}
var Rr = 1.01,
zr = Dr,
Br = e => 0.98 / e * 100,
Vr = e => Math.round(0.98 / (e / 100) * 100) / 100,
Hr = 0.97;
function Ur(e) {
  return e <= 0 ? 1 : Math.min(Dr, Math.floor(2**e * 0.98 * 100) / 100)
}
var Wr = Math.ceil(Math.log2(Dr / 0.98));
function Gr(e, t) {
  let n = 0;
  for (let r = t; r <= e; r++) n += Or(e, r);
  return n / 2**e
}
function Kr(e) {
  let t = e;
  for (; t > 1 && Gr(e, t) * 1000 < Hr; ) t--;
  return t
}
function qr(e, t) {
  return Math.min(Dr, Math.floor(0.98 / Gr(e, t) * 100) / 100)
}
var Z = {
  nineEvery: 9,
  airShooter: 0.25,
  theWorld: 1.5,
  presents: 0.1,
  live: 0.2,
  sakura: 0.15,
  spring: 0.04,
  cometAt: 20,
  comet: 0.25,
  shredStep: 0.05,
  shredMax: 0.6,
  dodge: 0.15,
  mindTurns: 1,
  mindPower: 0.25,
  scramble: 0.3,
  crown: 0.3,
  dropEvery: 8,
  drop: 1,
  alephSp: 2,
  yomiHp: 0.3
},
Jr = 0.5,
Yr = y.protect,
Xr = y.ironSkinProtect,
Zr = y.hymnAtk,
Qr = {
  bulwark: y.bulwark,
  ironSkin: y.ironSkin,
  counterStance: y.counterStance
},
$r = {
  curseExpose: y.curseExpose,
  witherWeaken: y.witherWeaken,
  stallDelay: y.stallDelay,
  stallSlow: y.stallSlow,
  fractureExpose: y.fractureExpose,
  fractureCrack: y.fractureCrack
},
ei = 0.015,
ti = 10000,
ni = 0.5,
ri = 3.1,
ii = 0.3,
ai = 0.6,
oi = {
  pushCap: 0.6
},
si = [
  `expose`,
  `weaken`,
  `slow`,
  `haze`
],
ci = {
  expose: {
    short: `EXP`,
    name: `Exposed`,
    text: `Takes more damage.`,
    bad: !0
  },
  weaken: {
    short: `WKN`,
    name: `Weakened`,
    text: `Deals less damage.`,
    bad: !0
  },
  slow: {
    short: `SLW`,
    name: `Slowed`,
    text: `Its turns come less often.`,
    bad: !0
  },
  atk: {
    short: `ATK`,
    name: `ATK up`,
    text: `Hits harder.`,
    bad: !1
  },
  dmg: {
    short: `DMG`,
    name: `DMG up`,
    text: `Deals more damage.`,
    bad: !1
  },
  taunt: {
    short: `TNT`,
    name: `Taunting`,
    text: `Enemies’ single-target attacks have to hit it, and it takes a share of the damage dealt to its allies. It can’t Taunt again for a turn after it ends.`,
    bad: !1
  },
  counter: {
    short: `CTR`,
    name: `Countering`,
    text: `Hits back when attacked while Taunting.`,
    bad: !1
  },
  ward: {
    short: `WRD`,
    name: `Warded`,
    text: `Takes less damage.`,
    bad: !1
  },
  fixate: {
    short: `FIX`,
    name: `Fixated`,
    text: `Has to attack the card that bit it.`,
    bad: !0
  },
  haze: {
    short: `HZY`,
    name: `Hazy`,
    text: `Can’t see: its single-target attacks land on a random target, and can miss.`,
    bad: !0
  }
};
function li(e) {
  let t = [],
  n = e => Math.round(e * 100);
  if (e.payload) {
    let r = G.payloadTaken * e.payload.from.f.passiveMult;
    t.push({
      key: `payload`,
      short: `CRP`,
      name: `Crop Marks`,
      text: `Takes ${ n(r) }% more damage from everyone until its next turn.`,
      bad: !0,
      vars: {
        pct: n(r)
      }
    })
  }
  e.exposing &&
  t.push({
    key: `exposure`,
    short: `EXP`,
    name: `Second exposure`,
    text: `Lands on the next enemy to act, whoever it is, for ${ n(G.payloadBlast * e.exposing) }%.`,
    bad: !1,
    vars: {
      pct: n(G.payloadBlast * e.exposing)
    }
  }),
  e.rain &&
  t.push({
    key: `rain`,
    short: `RAIN`,
    name: `Rainfall`,
    text: `Heals at the start of its turns while the rain lasts.`,
    bad: !1,
    n: e.rain.turns
  });
  let r = e.f.passiveMult;
  return e.ramp > 0 &&
  t.push({
    key: `ramp`,
    short: `RMP`,
    name: `Ramp Up`,
    text: `+${ n(G.rampSpd * r * e.ramp) }% SPD. Stream hits ${ G.streamBase + e.ramp } times. Being Slowed resets it.`,
    bad: !1,
    n: e.ramp,
    vars: {
      spd: n(G.rampSpd * r * e.ramp),
      hits: G.streamBase + e.ramp
    }
  }),
  e.f.sig === `volley` &&
  e.charges > 0 &&
  t.push({
    key: `runners`,
    short: `RUN`,
    name: `Runners on base`,
    text: `Clear the Bases deals ${ n(G.rallyDmg * r * e.charges) }% more.`,
    bad: !1,
    n: e.charges,
    vars: {
      pct: n(G.rallyDmg * r * e.charges)
    }
  }),
  e.f.sig === `ramen` &&
  e.simmer > 0 &&
  t.push({
    key: `simmer`,
    short: `SIM`,
    name: `Slow Simmer`,
    text: `The next bowl heals ${ n(G.simmerHeal * r * e.simmer) }% more.`,
    bad: !1,
    n: e.simmer,
    vars: {
      pct: n(G.simmerHeal * r * e.simmer)
    }
  }),
  e.f.sig === `ramen` &&
  e.toppings > 0 &&
  t.push({
    key: `bowl`,
    short: `BWL`,
    name: `Toppings in the bowl`,
    text: `${ e.toppings } of 4 toppings in: the next bowl adds the next one.`,
    bad: !1,
    n: e.toppings,
    vars: {
      n: e.toppings
    }
  }),
  t
}
function ui(e) {
  let t = u(e.seed),
  n = e.mod ?? null,
  r = e.twist ?? null,
  i = e.aiLevel ?? 1,
  a = {
    ally: e.control?.ally ?? `human`,
    enemy: e.control?.enemy ?? `ai`
  },
  o = (n === `hr` ? 0.5 : 1) * (n === `ht` ? 1.5 : 1),
  s = n === `dt` ? 1.4 : n === `ht` ? 0.7 : 1,
  c = e => `${ e.side }${ e.index }`,
  l = {
    ally: e.perks?.ally ?? {
    },
    enemy: e.perks?.enemy ?? {
    }
  },
  d = (e, t) => l[e.ref.side][t] ?? 0,
  ee = (e, t) => t.map(
    (t, n) => ({
      ref: {
        side: e,
        index: n
      },
      f: t,
      hp: t.startHp === void 0 ? t.maxHp : Math.max(1, t.maxHp * Math.min(1, t.startHp)),
      shield: 0,
      av: 0,
      guard: Math.round(t.maxGuard * 2),
      maxGuard: Math.round(t.maxGuard * 2),
      broken: !1,
      statuses: [],
      undyingUsed: !1,
      guarded: [],
      avenger: 0,
      kills: 0,
      breakTaken: 0,
      turns: 0,
      overdrive: 0,
      focus: {
        target: null,
        stacks: 0
      },
      burst: 0,
      ssOff: 0,
      sureCrit: !1,
      nextAdvance: 0,
      firstHitDone: !1,
      stormUsed: !1,
      aided: [],
      overclocked: !1,
      secondChanceUsed: !1,
      tauntCd: 0,
      pushed: 0,
      god: t.passive &&
      ge({
        skill: t.skill,
        passive: t.passive
      }) ? t.skill : null,
      skills: 0,
      charges: 0,
      payload: null,
      fixatedOn: null,
      exposing: 0,
      ramp: 0,
      toppings: 0,
      simmer: 0,
      rain: null
    })
  ),
  f = {
    ally: ee(`ally`, nn(e.allies)),
    enemy: ee(`enemy`, nn(e.enemies))
  },
  te = r === `blank` ? 0 : 3,
  p = {
    ally: Math.min(5, te + (l.ally.spStart ?? 0)),
    enemy: Math.min(5, te + (l.enemy.spStart ?? 0))
  },
  ne = null,
  m = {
    ally: !1,
    enemy: !1
  },
  re = e => (g + 1) % e === 0,
  h = [],
  g = 0,
  _ = null,
  ie = null,
  v = [],
  b = new Set,
  x = new Set,
  oe = e => D(e, `haze`),
  se = null,
  S = e => e === `ally` ? `enemy` : `ally`,
  w = e => f[e].filter(e => e.hp > 0),
  T = e => e ? f[e.side]?.[e.index] : void 0,
  E = (e, t) => e.statuses.some(e => e.kind === t),
  D = (e, t) => e.statuses.filter(e => e.kind === t).reduce((e, t) => e + t.value, 0),
  ce = e => e.statuses.some(e => si.includes(e.kind)),
  O = e => e.hp / e.f.maxHp,
  k = (e, t) => e.f.combos.includes(t),
  A = e => e.f.passiveMult,
  le = e => e.f.passive === `unshakable`,
  j = (e, t) => e.god === t,
  ue = e => e.f.spd * s * (e.f.boss === `frenzy` ? 1.6 : 1) * Math.max(0.5, 1 - D(e, `slow`)) * (e.burst > 0 ? 1.1 : 1) * (k(e, `desperado`) && O(e) < 0.5 ? 1 + U.desperadoSpd : 1) * (1 + G.rampSpd * A(e) * e.ramp),
  M = e => ti / (100 * (ue(e) / 100) **ni),
  fe = e => e.f.atk * (1 + D(e, `atk`) + C.avengerAtk * A(e) * e.avenger) + (k(e, `juggernaut`) ? e.f.maxHp * U.juggernautAtk : 0),
  pe = e => e.f.atkBase + (k(e, `juggernaut`) ? e.f.maxHp * U.juggernautAtk : 0),
  me = e => e.f.atkPct + D(e, `atk`) + C.avengerAtk * A(e) * e.avenger,
  P = e => D(e, `expose`) + (e.broken ? ii + e.breakTaken : 0) + (e.payload ? G.payloadTaken * A(e.payload.from) : 0),
  he = e => _ === e,
  _e = e => d(e, `sureCritEvery`) > 0 &&
  re(d(e, `sureCritEvery`)),
  F = e => e.f.eidolon >= 3 ? 1.1 : 1,
  ve = e => (e.f.eidolon >= 3 ? 1.2 : 1) * (1 + e.f.fx.skillMult),
  ye = e => !!(e.f.sig && dt[e.f.sig].pacifist),
  I = e => 2 + e.f.fx.buffTurns + (e.f.passive === `thrifty` ? C.thriftyTurns : 0),
  L = e => 1 + e.f.fx.buffPower + (e.f.passive === `thrifty` ? C.thriftyBuff * A(e) : 0),
  be = e => k(e, `hex`) ||
  k(e, `pindown`),
  xe = e => k(e, `lockdown`) ||
  k(e, `pindown`),
  Se = (e, t, n = 2) => n + + !!be(e) + (t === `slow` ? e.f.fx.slowTurns : 0) + + (e.f.cls === `cc` && e.f.eidolon >= 4) + d(e, `debuffTurns`),
  Ce = e => 1 + e.f.fx.debuffPower,
  we = e => e.f.cls === `cc` &&
  e.f.eidolon >= 1 ? 0.05 : 0;
  for (let e of [
    ...f.ally,
    ...f.enemy
  ]) e.av = M(e) * (e.f.passive === `ambush` ? 1 - (1 - C.ambushStart) * A(e) : 1) * (0.95 + t.next() * 0.1);
  for (let e of [
    ...f.ally,
    ...f.enemy
  ]) e.f.passive === `bastion` &&
  V(e, e, e.f.maxHp * C.bastionStart * A(e), !0);
  if (r === `presents`) for (let e of [
    ...f.ally,
    ...f.enemy
  ]) V(e, e, e.f.maxHp * Z.presents, !0);
  for (let e of [
    ...f.ally,
    ...f.enemy
  ]) d(e, `startShield`) > 0 &&
  V(e, e, e.f.maxHp * d(e, `startShield`), !0);
  function Te(e, t) {
    let n = Math.max(0, Math.min(5, p[e] + t));
    n !== p[e] &&
    (p[e] = n, v.push({
      t: `sp`,
      side: e,
      sp: n
    }))
  }
  function R(e, t, n, r, i) {
    if (e.hp <= 0) return;
    le(e) &&
    si.includes(t) &&
    (r *= C.unshakableDebuff);
    let a = e.statuses.find(e => e.kind === t);
    a ? (a.turns = Math.max(a.turns, n), a.value = Math.max(a.value, r)) : e.statuses.push({
      kind: t,
      turns: n,
      value: r
    }),
    i &&
    v.push({
      t: `status`,
      who: e.ref,
      text: i,
      kind: t
    }),
    t === `slow` &&
    e.ramp > 0 &&
    (e.ramp = 0, v.push({
      t: `status`,
      who: e.ref,
      text: `RAMP RESET`
    }))
  }
  function Ee(e, t, n, i, a, o = 2) {
    let s = (i + we(e)) * Ce(e) * F(e);
    n === `slow` &&
    be(e) &&
    (s *= 1.5);
    let c = r === `mind-games`;
    c &&
    (s *= 1 + Z.mindPower);
    let l = Se(e, n, o) + (c ? Z.mindTurns : 0),
    u = Math.min(n === `weaken` ? 0.6 : 0.8, s);
    if (R(t, n, l, u, a), k(e, `contagion`) && se === e) for (let e of w(t.ref.side)) e !== t &&
    R(e, n, l, u * U.contagionShare)
  }
  function z(e, t) {
    e.hp <= 0 ||
    (
      r === `the-world` &&
      (t *= Z.theWorld),
      he(e) ? e.nextAdvance += t : e.av = Math.max(0, e.av - t * M(e))
    )
  }
  function De(e, t) {
    if (e.hp <= 0) return;
    let n = t * (le(e) ? C.unshakablePush : 1) * (r === `the-world` ? Z.theWorld : 1),
    i = Math.min(n, Math.max(0, oi.pushCap - e.pushed));
    e.pushed += i,
    e.av += i * M(e)
  }
  function Oe(e) {
    e.statuses = [],
    e.rain = null,
    e.shield = 0,
    e.broken = !1,
    v.push({
      t: `ko`,
      who: e.ref
    }),
    e.payload &&= (Ue(e.payload.from, e.ref.side, e.payload.mult), null);
    for (let t of w(e.ref.side)) t.f.passive === `avenger` &&
    t.avenger < 2 &&
    (
      t.avenger++,
      z(t, C.avengerAdvance * A(t)),
      v.push({
        t: `status`,
        who: t.ref,
        text: `AVENGER`
      })
    )
  }
  function ke(e, t, n) {
    if (e.hp <= 0 || t <= 0) return;
    let r = Math.min(e.shield, t);
    e.shield -= r,
    e.hp = Math.max(0, e.hp - (t - r)),
    v.push({
      t: `hit`,
      from: n.ref,
      to: e.ref,
      amount: Math.round(t),
      crit: !1,
      guard: 0
    }),
    e.hp === 0 &&
    !Ne(e) ? Oe(e) : Ae(e)
  }
  function Ae(e) {
    je(e),
    Me(e)
  }
  function je(e) {
    if (O(e) >= 0.3 || e.hp <= 0 || n === `sd`) return;
    let t = w(e.ref.side).find(
      t => t !== e &&
      t.f.passive === `guardian-angel` &&
      !t.guarded.includes(e.ref.index)
    );
    t &&
    (
      t.guarded.push(e.ref.index),
      V(t, e, t.f.maxHp * C.guardianAngel * A(t))
    )
  }
  function Me(e) {
    if (O(e) >= U.firstAidAt || e.hp <= 0) return;
    let t = w(e.ref.side).find(t => k(t, `firstaid`) && !t.aided.includes(e.ref.index));
    t &&
    (
      t.aided.push(e.ref.index),
      v.push({
        t: `status`,
        who: e.ref,
        text: `FIRST AID`
      }),
      B(t, e, t.f.maxHp * U.firstAidHeal)
    )
  }
  function Ne(e) {
    return e.f.passive !== `undying` ||
    e.undyingUsed ||
    n === `sd` ? Fe(e) ||
    Pe(e) : (
      e.undyingUsed = !0,
      v.push({
        t: `status`,
        who: e.ref,
        text: `UNDYING`
      }),
      j(e, `counter-stance`) ? (
        e.hp = Math.max(1, Math.round(e.f.maxHp * N.counterUndyingHp)),
        Ze(e),
        !0
      ) : (
        e.hp = A(e) > 1 ? Math.max(1, Math.round(e.f.maxHp * C.undyingE2Hp)) : 1,
        e.av += M(e) * C.undyingDelay / A(e),
        !0
      )
    )
  }
  function Pe(e) {
    return r !== `yomi` ||
    m[e.ref.side] ? !1 : (
      m[e.ref.side] = !0,
      e.hp = Math.max(1, Math.round(e.f.maxHp * Z.yomiHp)),
      v.push({
        t: `status`,
        who: e.ref,
        text: `RETURNED`
      }),
      !0
    )
  }
  function Fe(e) {
    if (n === `sd`) return !1;
    let t = [
      e,
      ...w(e.ref.side)
    ].find(e => k(e, `secondchance`) && !e.secondChanceUsed);
    return t ? (
      t.secondChanceUsed = !0,
      e.hp = Math.max(1, Math.round(e.f.maxHp * U.secondChanceHp)),
      v.push({
        t: `status`,
        who: e.ref,
        text: `SECOND CHANCE`
      }),
      !0
    ) : !1
  }
  function B(e, t, n) {
    if (t.hp <= 0) return 0;
    let r = n * (
      1 + e.f.outHeal + (k(e, `defensive`) ? 0.05 : 0) + (k(e, `sustain`) ? 0.15 : 0) + (e.f.passive === `lifeline` ? C.lifelineHeal * A(e) : 0)
    ) * o,
    i = Math.round(Math.min(t.f.maxHp - t.hp, r));
    if (
      i > 0 &&
      (t.hp += i, v.push({
        t: `heal`,
        from: e.ref,
        to: t.ref,
        amount: i
      })),
      e.f.cls === `support` &&
      e.f.eidolon >= 4
    ) {
      let e = t.statuses.findIndex(e => si.includes(e.kind));
      e >= 0 &&
      t.statuses.splice(e, 1)
    }
    if (k(e, `sustain`) && r > i) {
      let n = Math.max(0, t.f.maxHp * 0.1 - t.shield),
      a = Math.min(n, r - i);
      a >= 1 &&
      V(e, t, a, !0)
    }
    return k(e, `tempo`) &&
    t !== e &&
    z(t, 0.15),
    Math.max(0, r - i)
  }
  function V(e, t, r, i = !1) {
    if (n === `sd` || t.hp <= 0) return;
    let a = i ? 1 : 1 + e.f.fx.shieldMult + (k(e, `defensive`) ? 0.05 : 0) + (e.f.cls === `tank` && e.f.eidolon >= 4 ? 0.2 : 0) + (e.f.passive === `bastion` ? C.bastion * A(e) : 0),
    o = Math.min(
      Math.round(r * a),
      Math.max(0, Math.round(t.f.maxHp * Jr) - t.shield)
    );
    o <= 0 ||
    (
      t.shield += o,
      v.push({
        t: `shield`,
        from: e.ref,
        to: t.ref,
        amount: o
      })
    )
  }
  function Ie(e, t) {
    if (
      t.broken = !0,
      t.guard = 0,
      v.push({
        t: `break`,
        who: t.ref,
        by: e.ref
      }),
      De(t, ai),
      t.breakTaken = e.f.passive === `guard-breaker` ? C.guardBreakerTaken * A(e) : 0,
      e.f.passive === `momentum`
    ) {
      Te(e.ref.side, Math.round(C.momentumSp * A(e))),
      z(e, C.momentumAdvance * A(e));
      for (let t of w(e.ref.side)) R(
        t,
        `dmg`,
        C.momentumTurns,
        C.momentumDmg * A(e),
        t === e ? `MOMENTUM` : void 0
      )
    }
    if (
      k(e, `storm`) &&
      !e.stormUsed &&
      (e.stormUsed = !0, Te(e.ref.side, 1)),
      k(e, `juggernaut`) &&
      V(e, e, e.f.maxHp * U.juggernautShield),
      k(e, `opening`)
    ) for (let t of w(e.ref.side)) R(t, `dmg`, 2, U.openingDmg, t === e ? `OPENING` : void 0);
    for (let n of w(e.ref.side)) n === e ||
    n.f.passive !== `follow-up` ||
    t.hp <= 0 ||
    (
      v.push({
        t: `status`,
        who: n.ref,
        text: `FOLLOW-UP`
      }),
      H(n, t, C.followUp * A(n), 0, {
        kind: `basic`,
        single: !0,
        extra: !0
      })
    )
  }
  function Le(e, t) {
    let n = (e.f.passive === `unshakable` && A(e) > 1 ? C.unshakableE2Dr : 0) + D(e, `ward`);
    return e.shield > 0 &&
    e.f.fx.shieldedDr &&
    (n += e.f.fx.shieldedDr),
    (E(e, `taunt`) || t && t.fixatedOn === e) &&
    (
      e.f.cls === `tank` &&
      e.f.eidolon >= 1 &&
      (n += 0.1),
      k(e, `fortress`) &&
      (n += 0.1)
    ),
    k(e, `laststand`) &&
    O(e) < 0.5 &&
    (n += U.lastStandDr),
    e.f.boss === `armor` &&
    !e.broken &&
    (n += 0.4),
    n
  }
  function Re(e, t) {
    let n = w(e).filter(e => e !== t);
    return n.length ? n.reduce((e, t) => O(t) < O(e) ? t : e) : void 0
  }
  function H(e, i, a, o, s) {
    if (i.hp <= 0 || e.hp <= 0) return 0;
    if (
      !s.extra &&
      s.single &&
      e.ref.side !== i.ref.side &&
      E(e, `haze`) &&
      t.next() < oe(e) ||
      r === `dodge` &&
      t.next() < Z.dodge
    ) return v.push({
      t: `status`,
      who: i.ref,
      text: `MISS`
    }),
    0;
    let l = e.f,
    u = E(i, `expose`),
    d = ce(i),
    ee = E(i, `slow`),
    f = k(e, `ss`) &&
    e.ssOff === 0,
    // 暴击率计算
    te = l.critRate + (f ? 0.15 : 0) + (l.passive === `deadeye` && O(i) < 0.5 ? C.deadeyeVsLow * A(e) : 0) + (r === `sakura` ? Z.sakura : 0),
    p = l.critDmg + (f ? 0.35 : 0) + (l.fx.pfCritDmg && O(e) > 0.8 ? l.fx.pfCritDmg : 0) + (k(e, `crit`) && d ? 0.4 : 0) + (l.passive === `deadeye` && O(i) < 0.5 ? C.deadeyeVsLowDmg * A(e) : 0),
    m = e.sureCrit ||
    r === `nine` &&
    he(e) &&
    re(Z.nineEvery) ||
    he(e) &&
    _e(e) ||
    // 暴击率检验
    t.next() < te;
    e.sureCrit &&= !1;
    let h = D(e, `dmg`);
    e.burst > 0 &&
    (h += 0.25),
    s.single &&
    (h += l.fx.singleDmg),
    O(i) < 0.5 &&
    (h += l.fx.dmgVsLow),
    d &&
    (h += l.fx.dmgVsDebuffed),
    i.broken &&
    (
      h += l.fx.dmgVsBroken + (l.passive === `exploit` ? C.exploit * A(e) : 0) + (k(e, `shatter`) ? 0.2 : 0)
    ),
    l.passive === `weak-point` &&
    u &&
    (h += C.weakPoint * A(e)),
    l.passive === `opportunist` &&
    d &&
    (h += C.opportunist * A(e)),
    l.passive === `bloodlust` &&
    O(i) < (j(e, `execute`) ? N.executeLow : 0.5) &&
    (h += C.bloodlust * A(e)),
    k(e, `glass`) &&
    (h += 0.3),
    k(e, `executioner`) &&
    (h += O(i) < 0.35 ? 0.35 : 0.1),
    k(e, `laststand`) &&
    O(e) < 0.5 &&
    (h += U.lastStandDmg),
    k(e, `desperado`) &&
    O(e) < 0.5 &&
    (h += U.desperadoDmg),
    k(e, `assassin`) &&
    !e.firstHitDone &&
    i === Re(i.ref.side) &&
    (h += 0.25),
    k(e, `focus`) &&
    (
      h += 0.08 * (e.focus.target === c(i.ref) ? Math.min(5, e.focus.stacks) : 0)
    ),
    s.overdrive &&
    (h += 0.6),
    l.boss === `enrage` &&
    O(e) < 0.5 &&
    (h += 0.4),
    n === `hr` &&
    (h += 0.3),
    r === `air-shooter` &&
    s.aoe &&
    (h += Z.airShooter),
    r === `crown` &&
    ne === e &&
    (h += Z.crown),
    r === `drop` &&
    he(e) &&
    re(Z.dropEvery) &&
    (h += Z.drop),
    r === `shred` &&
    (h += Math.min(Z.shredMax, Z.shredStep * e.turns)),
    e.firstHitDone = !0;
    let _ = i.f.def * (s.overdrive ? 0.8 : 1) * (s.pierce ? 1 - (m && j(e, `piercing-shot`) ? N.piercingCritDef : 0.3) : 1),
    ie = 1 - _ / (_ + 200 + 10 * l.level),
    ae = me(e) + h + P(i),
    y = Math.min(0.8, D(e, `weaken`) + Le(i, e)),
    se = 1 + ei * Math.max(0, g - 120),
    S = pe(e) * a * (1 + ae) * (m ? 1 + p : 1) * ie * (1 - y) * ri * se;
    S = Math.max(1, Math.round(S));
    let T = i.f.cls === `tank` &&
    E(i, `taunt`) ? void 0 : ze(i.ref.side).find(e => e.f.cls === `tank` && e !== i),
    le = T ? Math.round(S * (T.f.skill === `iron-skin` ? Xr : Yr)) : 0;
    S -= le;
    let ue = s.pierce ? 0 : Math.min(i.shield, S);
    i.shield -= ue;
    let de = S - ue;
    i.hp = Math.max(0, i.hp - de);
    let M = 0;
    if (!i.broken && o > 0) {
      let t = (1 + l.guardDmg + l.fx.guardMult) * (l.passive === `guard-breaker` ? 1 + C.guardBreaker * A(e) : 1) * (l.passive === `exploit` ? 1 + C.exploitGuard * A(e) : 1) * (s.single && k(e, `shatter`) ? 1.4 : 1) * (s.aoe && k(e, `storm`) ? 1.3 : 1) * (k(e, `juggernaut`) ? 1 + U.juggernautGuard : 1);
      M = Math.min(i.guard, Math.round(o * t)),
      i.guard -= M
    }
    if (
      v.push({
        t: `hit`,
        from: e.ref,
        to: i.ref,
        amount: S,
        crit: m,
        guard: M
      }),
      T &&
      le > 0 &&
      ke(T, Math.round(le * (1 - Math.min(0.8, Le(T, e)))), e),
      k(e, `focus`)
    ) {
      let t = c(i.ref);
      e.focus = e.focus.target === t ? {
        target: t,
        stacks: Math.min(5, e.focus.stacks + 1)
      }
       : {
        target: t,
        stacks: 1
      }
    }
    if (
      m &&
      k(e, `hypercarry`) &&
      !s.overdrive &&
      (e.overdrive = Math.min(5, e.overdrive + 1)),
      m &&
      k(e, `overclock`) &&
      !s.extra &&
      !e.overclocked &&
      (e.overclocked = !0, z(e, U.overclockAdvance)),
      k(i, `ss`) &&
      S > 0 &&
      (i.ssOff = 1),
      i.hp === 0 &&
      Ne(i),
      l.passive === `vampirism` &&
      de > 0
    ) {
      let t = de * C.vampirism * A(e);
      if (B(e, e, t), s.aoe && j(e, `blade-storm`)) for (let n of w(e.ref.side)) n !== e &&
      B(e, n, t)
    }
    if (
      m &&
      l.passive === `weak-point` &&
      i.hp > 0 &&
      R(i, `expose`, 1, C.weakPointExpose * A(e), `EXPOSED`),
      i.hp === 0
    ) Oe(i),
    e.kills++,
    r === `crown` &&
    !ne &&
    (ne = e, v.push({
      t: `status`,
      who: e.ref,
      text: `CROWNED`
    })),
    l.passive === `bloodlust` &&
    z(e, C.bloodlustAdvance * A(e)),
    k(e, `executioner`) &&
    (e.sureCrit = !0),
    k(e, `assassin`) &&
    z(e, 0.5),
    k(e, `desperado`) &&
    B(e, e, e.f.maxHp * U.desperadoHeal);
     else {
      if (!i.broken && i.guard <= 0 && M > 0) {
        Ie(e, i);
        let t = s.kind === `skill` &&
        j(e, `heavy-strike`) ? N.heavyEcho : C.guardBreakerEcho * A(e);
        l.passive === `guard-breaker` &&
        !s.extra &&
        i.hp > 0 &&
        ke(i, Math.round(S * t), e)
      }
      s.single &&
      !s.extra &&
      xe(e) &&
      i.hp > 0 &&
      (
        ee &&
        De(i, U.lockdownPush),
        Ee(e, i, `slow`, U.lockdownSlow, `SLOWED`)
      ),
      Ae(i)
    }
    !s.extra &&
    i.f.passive === `spiked-armor` &&
    e.hp > 0 &&
    (
      ke(
        e,
        Math.round(i.f.def * (E(i, `taunt`) ? C.spikedArmorTaunt : C.spikedArmor) * A(i)),
        i
      ),
      j(i, `iron-skin`) &&
      e.hp > 0 &&
      !e.broken &&
      (
        e.guard -= Math.min(e.guard, N.ironSkinGuard),
        e.guard <= 0 &&
        Ie(i, e)
      )
    ),
    !s.extra &&
    i.f.sig === `bite` &&
    e.hp > 0 &&
    e.ref.side !== i.ref.side &&
    !x.has(c(e.ref)) &&
    (E(i, `taunt`) || e.fixatedOn === i) &&
    (
      x.add(c(e.ref)),
      De(e, G.riptidePush * A(i)),
      v.push({
        t: `status`,
        who: e.ref,
        text: `RIPTIDE`
      })
    );
    let fe = k(i, `riposte`),
    ge = Math.max(
      i.f.cls === `tank` &&
      i.f.eidolon >= 6 ? 0.6 : 0,
      D(i, `counter`),
      fe ? U.riposteHit : 0
    );
    return !s.extra &&
    i.hp > 0 &&
    e.hp > 0 &&
    ge > 0 &&
    (E(i, `taunt`) || e.fixatedOn === i) &&
    !b.has(c(i.ref)) &&
    (
      b.add(c(i.ref)),
      v.push({
        t: `status`,
        who: i.ref,
        text: `COUNTER`
      }),
      H(i, e, ge, 10 * (fe ? 2 : 1), {
        kind: `basic`,
        single: !0,
        extra: !0
      })
    ),
    de
  }
  let ze = e => n === `fl` ? [] : w(e).filter(e => E(e, `taunt`));
  function Be(e, t) {
    return t === `basic` ? ye(e) ? `ally` : `enemy` : e.f.sig ? dt[e.f.sig].skill.targets : de(e.f).targets
  }
  function Ve(e, t, n) {
    let r = Be(e, t);
    if (r === `none`) return !0;
    if (!n || n.hp <= 0) return !1;
    if (r === `ally`) return n.ref.side === e.ref.side;
    if (n.ref.side === e.ref.side) return !1;
    let i = He(e);
    return i.length === 0 ||
    i.includes(n)
  }
  function He(e) {
    let t = e.fixatedOn;
    return t &&
    t.hp > 0 &&
    E(e, `fixate`) ? [
      t
    ] : ze(S(e.ref.side))
  }
  function Ue(e, t, n) {
    if (e.hp <= 0) return;
    let r = Re(t);
    r &&
    !r.payload &&
    (
      r.payload = {
        from: e,
        mult: n
      },
      v.push({
        t: `status`,
        who: r.ref,
        text: `CROP MARKS`
      })
    )
  }
  let We = {
    ally: null,
    enemy: null
  };
  function Ge(e) {
    let t = We[e.ref.side];
    t &&
    (
      We[e.ref.side] = null,
      t.from.exposing = 0,
      !(t.from.hp <= 0 || e.hp <= 0) &&
      (
        v.push({
          t: `status`,
          who: e.ref,
          text: `DOUBLE EXPOSURE`
        }),
        H(
          t.from,
          e,
          G.payloadBlast * t.mult,
          10,
          {
            kind: `skill`,
            single: !0,
            extra: !0
          }
        )
      )
    )
  }
  let Ke = [
    `chashu`,
    `egg`,
    `nori`,
    `scallions`
  ];
  function qe(e, t) {
    let n = e.ref.side,
    r = ve(e),
    i = e.f.eidolon >= 6,
    a = t => {
      if (!i) return;
      let r = w(n).filter(t => t !== e).reduce((e, t) => !e || O(t) < O(e) ? t : e, void 0);
      r &&
      B(e, r, t / 2)
    },
    o = (a, o) => {
      if (!i) return;
      let s = w(S(n)).filter(e => e !== t).reduce((e, t) => !e || t.av < e.av ? t : e, void 0);
      s &&
      H(e, s, a * r * 0.5, o / 2, {
        kind: `skill`,
        single: !0,
        extra: !0
      })
    };
    switch (e.f.sig) {
      case `volley`:
        {
          e.charges > 0 &&
          v.push({
            t: `status`,
            who: e.ref,
            text: `RUNNERS ×${ e.charges }`
          });
          let t = G.volleyPool * (1 + G.rallyDmg * A(e) * e.charges);
          e.charges = 0;
          let a = (t, i, a) => {
            let o = w(S(n)).sort((e, t) => e.hp + e.shield - (t.hp + t.shield)),
            s = 10 * a / Math.max(1, o.length);
            o.forEach(
              (n, a) => {
                let c = Math.min(i, t / (o.length - a)),
                l = n.hp,
                u = H(e, n, c * r, s, {
                  kind: `skill`,
                  aoe: !0
                });
                t -= n.hp <= 0 &&
                u > l ? l / u * c : c
              }
            )
          };
          a(t, G.volleyCap, G.volleyGuard),
          i &&
          a(t / 2, G.volleyCap / 2, G.volleyGuard / 2);
          break
        }
      case `payload`:
        if (!t) break;
        H(
          e,
          t,
          G.payloadHit * r,
          10 * G.payloadGuard,
          {
            kind: `skill`,
            single: !0
          }
        ),
        i &&
        t.hp > 0 &&
        H(
          e,
          t,
          G.payloadHit * r * 0.5,
          10 * G.payloadGuard / 2,
          {
            kind: `skill`,
            single: !0,
            extra: !0
          }
        ),
        t.hp > 0 ? (
          t.payload = {
            from: e,
            mult: r
          },
          v.push({
            t: `status`,
            who: t.ref,
            text: `CROP MARKS`
          })
        ) : Ue(e, t.ref.side, r),
        We[t.ref.side] &&
        (We[t.ref.side].from.exposing = 0),
        We[t.ref.side] = {
          from: e,
          mult: r
        },
        e.exposing = r;
        break;
      case `haze`:
        if (!t) break;
        H(e, t, G.hazeHit * r, 10 * G.hazeGuard, {
          kind: `skill`,
          single: !0
        }),
        o(G.hazeHit, 10 * G.hazeGuard);
        for (let t of w(S(n))) Ee(e, t, `haze`, G.hazeMiss * A(e), `HAZY`, G.hazeTurns);
        break;
      case `bite`:
        if (!t) break;
        if (
          H(e, t, G.biteHit * r, 10 * G.biteGuard, {
            kind: `skill`,
            single: !0
          }),
          G.biteShield > 0 &&
          V(e, e, e.f.def * G.biteShield * r),
          G.biteTeamShield > 0
        ) for (let t of w(n)) t !== e &&
        V(e, t, e.f.def * G.biteTeamShield * r);
        t.hp > 0 &&
        (
          t.fixatedOn = e,
          R(t, `fixate`, G.biteTurns, 1, `FIXATED`),
          Ee(e, t, `weaken`, G.biteWeaken, `WEAKENED`)
        );
        break;
      case `stream`:
        {
          if (!t) break;
          let a = G.streamBase + e.ramp;
          v.push({
            t: `status`,
            who: e.ref,
            text: `STREAM ×${ a }`
          });
          let o = t;
          for (let t = 0; t < a && o; t++) H(
            e,
            o,
            G.streamHit * r,
            10 * G.streamGuard,
            {
              kind: `skill`,
              single: !0,
              extra: t > 0
            }
          ),
          o.hp <= 0 &&
          (o = Re(S(n)));
          if (i) for (let t = 0; t < a && o; t++) H(
            e,
            o,
            G.streamHit * r * 0.5,
            10 * G.streamGuard / 2,
            {
              kind: `skill`,
              single: !0,
              extra: !0
            }
          ),
          o.hp <= 0 &&
          (o = Re(S(n)));
          e.ramp = 0;
          break
        }
      case `ramen`:
        {
          e.toppings < Ke.length &&
          e.toppings++;
          let t = Ke.slice(0, e.toppings);
          v.push({
            t: `status`,
            who: e.ref,
            text: t.join(` + `).toUpperCase()
          });
          let i = e.f.maxHp * G.ramenHeal * r * (1 + G.simmerHeal * A(e) * e.simmer);
          e.simmer = 0;
          for (let a of w(n)) {
            if (
              B(e, a, i),
              t.includes(`chashu`) &&
              R(a, `atk`, I(e), G.chashuAtk * L(e) * F(e)),
              t.includes(`egg`) &&
              V(e, a, e.f.maxHp * G.eggShield * r),
              t.includes(`nori`)
            ) {
              let e = a.statuses.findIndex(e => si.includes(e.kind));
              e >= 0 &&
              a.statuses.splice(e, 1)
            }
            t.includes(`scallions`) &&
            z(a, G.scallionAdvance * F(e))
          }
          a(i);
          break
        }
      case `heatwave`:
        if (!t) break;
        H(e, t, G.heatHit * r, 10 * G.heatGuard, {
          kind: `skill`,
          single: !0
        }),
        o(G.heatHit, 10 * G.heatGuard);
        for (let t of w(S(n))) Ee(e, t, `slow`, G.heatSlow, `SLOWED`, G.heatTurns);
        for (let t of w(n)) R(t, `atk`, I(e), G.warmAtk * A(e) * L(e) * F(e), `ATK UP`);
        break;
      case `rain`:
        v.push({
          t: `status`,
          who: e.ref,
          text: `RAINFALL`
        });
        for (let t of w(n)) t.rain &&
        t.rain.turns > 0 &&
        B(e, t, e.f.maxHp * G.steadyHeal * A(e) * r),
        t.rain = {
          from: e,
          turns: G.rainTurns,
          amount: e.f.maxHp * G.rainHeal * r
        };
        a(e.f.maxHp * G.rainHeal * r);
        break;
      case `replay`:
        v.push({
          t: `status`,
          who: e.ref,
          text: `STARLIGHT`
        });
        for (let t of w(n)) B(e, t, e.f.maxHp * G.starHeal * r),
        t !== e &&
        z(t, G.starAdvance * F(e));
        a(e.f.maxHp * G.starHeal * r),
        Te(n, G.starSp)
    }
  }
  function Je(e, t) {
    if (e.f.sig) {
      qe(e, t),
      e.skills++;
      return
    }
    let n = e.ref.side,
    r = ve(e),
    i = k(e, `hypercarry`) &&
    e.overdrive >= 5;
    i &&
    (
      e.overdrive = 0,
      v.push({
        t: `status`,
        who: e.ref,
        text: `OVERDRIVE`
      })
    );
    let a = {
      kind: `skill`,
      single: !0,
      overdrive: i
    },
    o = e.f.cls === `dps` &&
    e.f.eidolon >= 6,
    s = (t, n, i) => {
      let s = H(e, t, n * r, i, a);
      return o &&
      t.hp > 0 &&
      H(e, t, n * r * 0.5, i / 2, a),
      s
    },
    c = (t, r) => {
      if (e.f.eidolon < 6) return;
      let i = w(n).filter(e => e !== t).reduce((e, t) => !e || O(t) < O(e) ? t : e, void 0);
      i &&
      B(e, i, r / 2)
    };
    switch (e.f.skill) {
      case `bulwark`:
        for (let t of w(n)) V(e, t, e.f.def * Qr.bulwark * r),
        j(e, `bulwark`) &&
        R(t, `ward`, 2, N.bulwarkWard, t === e ? `WARD` : void 0);
        Xe(e);
        break;
      case `iron-skin`:
        V(e, e, e.f.def * Qr.ironSkin * r),
        Xe(e);
        break;
      case `shield-bash`:
        t &&
        s(t, 1.3, 10 * (j(e, `shield-bash`) ? N.shieldBashGuard : 3)),
        Xe(e);
        break;
      case `counter-stance`:
        Ze(e);
        break;
      case `heavy-strike`:
        t &&
        s(t, 1.55, 40);
        break;
      case `blade-storm`:
        {
          let t = j(e, `blade-storm`) ? N.bladeStorm : 0.72;
          for (let a of w(S(n))) H(e, a, t * r, 10, {
            kind: `skill`,
            aoe: !0,
            overdrive: i
          });
          if (o) for (let i of w(S(n))) H(e, i, t * 0.58 * r, 5, {
            kind: `skill`,
            aoe: !0
          });
          break
        }
      case `execute`:
        t &&
        s(t, O(t) < (j(e, `execute`) ? N.executeLow : 0.5) ? 2.4 : 1.55, 20);
        break;
      case `piercing-shot`:
        if (t) {
          let n = {
            ...a,
            pierce: !0
          };
          H(e, t, 1.35 * r, 20, n),
          o &&
          t.hp > 0 &&
          H(e, t, 0.675 * r, 10, n)
        }
        break;
      case `mend`:
        {
          let n = t,
          i = e.f.maxHp * y.mendHeal * r,
          a = B(e, n, i);
          j(e, `mend`) &&
          a > 0 &&
          V(
            e,
            n,
            Math.min(a, Math.max(0, n.f.maxHp * N.mendShield - n.shield)),
            !0
          ),
          c(n, i);
          break
        }
      case `sanctuary`:
        j(e, `sanctuary`) &&
        (e.guarded = []);
        for (let t of w(n)) {
          B(e, t, e.f.maxHp * y.sanctuaryHeal * r * (e.f.eidolon >= 6 ? 1.5 : 1));
          let n = t.statuses.map(e => si.includes(e.kind)).lastIndexOf(!0);
          n >= 0 &&
          t.statuses.splice(n, 1),
          j(e, `sanctuary`) &&
          V(e, t, e.f.maxHp * N.sanctuaryShield * r)
        }
        v.push({
          t: `status`,
          who: e.ref,
          text: `CLEANSE`
        });
        break;
      case `battle-hymn`:
        {
          let i = t,
          a = e.f.maxHp * y.hymnHeal * r;
          if (
            B(e, i, a),
            R(i, `atk`, I(e), Zr * L(e) * F(e), `ATK UP`),
            z(i, y.hymnAdvance * F(e)),
            j(e, `battle-hymn`)
          ) {
            let t = w(n).filter(t => t !== i && t !== e).reduce((e, t) => !e || fe(t) > fe(e) ? t : e, void 0);
            t &&
            R(t, `atk`, I(e), Zr * N.hymnSecond * L(e) * F(e), `ATK UP`)
          }
          c(i, a);
          break
        }
      case `overture`:
        {
          let i = t,
          a = e.f.maxHp * y.overtureHeal * r;
          Te(n, y.overtureSp),
          B(e, i, a),
          z(i, y.overtureAdvance * F(e)),
          j(e, `overture`) &&
          i !== e &&
          R(i, `dmg`, 2, N.overtureDmg, `ENCORE`),
          c(i, a);
          break
        }
      case `curse`:
      case `wither`:
      case `fracture`:
      case `stall`:
        if (t && (Ye(e, t, 1, !0), e.f.eidolon >= 6)) {
          let r = w(S(n)).filter(e => e !== t).reduce((e, t) => !e || t.av < e.av ? t : e, void 0);
          r &&
          Ye(e, r, 0.5, !1)
        }
    }
    e.skills++
  }
  function Ye(e, t, n, r) {
    let i = e.ref.side,
    a = ve(e) * n,
    o = {
      kind: `skill`,
      single: !0
    };
    switch (e.f.skill) {
      case `curse`:
        if (
          H(e, t, y.curseHit * a, 20 * n, o),
          Ee(
            e,
            t,
            `expose`,
            j(e, `curse`) ? N.curseExpose : $r.curseExpose,
            `EXPOSED`
          ),
          r
        ) for (let n of w(S(i))) n !== t &&
        Ee(
          e,
          n,
          `expose`,
          j(e, `curse`) ? N.curseSpread : y.curseSpread,
          `EXPOSED`
        );
        break;
      case `wither`:
        if (
          H(e, t, y.witherHit * a, 20 * n, o),
          Ee(e, t, `weaken`, $r.witherWeaken, `WEAKENED`),
          r
        ) for (let n of w(S(i))) n !== t &&
        Ee(e, n, `weaken`, y.witherSpread, `WEAKENED`);
        let s = t.hp > 0 ? t.statuses.filter(e => e.kind === `atk` || e.kind === `dmg` || e.kind === `ward`) : [];
        if (
          s.length &&
          (
            t.statuses = t.statuses.filter(e => !s.includes(e)),
            v.push({
              t: `status`,
              who: t.ref,
              text: `DISPELLED`
            }),
            j(e, `wither`)
          )
        ) for (let t of w(i)) for (let n of s) R(t, n.kind, t === e ? 2 : 1, n.value, t === e ? `STOLEN` : void 0);
        break;
      case `fracture`:
        {
          let s = t.broken;
          if (H(e, t, y.fractureHit * a, 40 * n, o), r) for (let e of w(S(i))) e !== t &&
          !e.broken &&
          (e.guard = Math.max(1, e.guard - y.fractureSpread));
          let c = !s &&
          t.broken;
          t.hp > 0 &&
          Ee(e, t, `expose`, c ? $r.fractureExpose : $r.fractureCrack, `EXPOSED`),
          c &&
          t.hp > 0 &&
          j(e, `fracture`) &&
          H(e, t, N.fractureFollow * a, 0, o);
          break
        }
      case `stall`:
        if (
          H(e, t, y.stallHit * a, 20 * n, o),
          t.hp > 0 &&
          (
            De(t, $r.stallDelay * F(e)),
            Ee(e, t, `slow`, $r.stallSlow, `SLOWED`)
          ),
          r
        ) for (let n of w(S(i))) n !== t &&
        De(n, (y.stallSpread + (j(e, `stall`) ? N.stallSpread : 0)) * F(e))
    }
  }
  function Xe(e) {
    !E(e, `taunt`) &&
    e.tauntCd === 0 &&
    R(e, `taunt`, 2, 0, `TAUNT`)
  }
  function Ze(e) {
    let t = ve(e);
    V(e, e, e.f.def * Qr.counterStance * t),
    Xe(e),
    R(e, `counter`, 2, y.counterHit * t)
  }
  function Qe(e, n, i) {
    let a = e.ref.side;
    if (i && i.ref.side !== a && E(e, `haze`)) {
      let n = He(e),
      r = n.length ? n : w(S(a));
      r.length &&
      (i = r[Math.floor(t.next() * r.length)])
    }
    b = new Set,
    x = new Set;
    let o = Be(e, n),
    s = e.f.sig ? dt[e.f.sig].skill.name : de(e.f).name;
    if (
      v.push({
        t: `move`,
        who: e.ref,
        kind: n,
        name: n === `basic` ? `Basic` : s,
        target: o === `none` ||
        !i ? null : i.ref
      }),
      n === `basic` &&
      ye(e)
    ) {
      let t = i &&
      i.ref.side === a &&
      i.hp > 0 ? i : Re(a);
      t &&
      B(e, t, e.f.maxHp * G.pacifistHeal * A(e) * (e.f.eidolon >= 5 ? 1.3 : 1)),
      Te(a, G.pacifistSp)
    } else if (n === `basic`) {
      let n = e.f.eidolon >= 5;
      if (
        H(e, i, n ? 1.3 : 1, 10 * (n ? 1.5 : 1), {
          kind: `basic`,
          single: !0
        }),
        e.f.cls === `support`
      ) {
        let t = Re(a);
        t &&
        B(e, t, e.f.maxHp * ae)
      }
      e.f.sig === `ramen` &&
      e.simmer < G.simmerMax &&
      e.simmer++;
      let o = + (d(e, `basicSp`) >= 1 || d(e, `basicSp`) > 0 && t.next() < d(e, `basicSp`));
      Te(a, (r === `aleph` ? Z.alephSp : 1) + o)
    } else {
      Te(a, - 1),
      e.f.passive === `thrifty` &&
      t.next() < C.thrifty * A(e) &&
      (v.push({
        t: `status`,
        who: e.ref,
        text: `THRIFTY`
      }), Te(a, 1)),
      se = e,
      Je(e, i),
      se = null;
      for (let t of w(a)) t !== e &&
      t.f.sig === `volley` &&
      t.charges < G.rallyMax &&
      t.charges++;
      if (
        // 安可几率计算: A 函数是计算安可概率倍率, 有星魂就是 1.3 倍, 否则是 1 倍.
        e.f.passive === `encore` &&
        e.hp > 0 &&
        t.next() < C.encore * A(e) &&
        (v.push({
          t: `status`,
          who: e.ref,
          text: `ENCORE`
        }), z(e, 1)),
        r === `live` &&
        e.hp > 0 &&
        t.next() < Z.live &&
        (v.push({
          t: `status`,
          who: e.ref,
          text: `ENCORE`
        }), z(e, 1)),
        d(e, `againChance`) > 0 &&
        e.hp > 0 &&
        t.next() < d(e, `againChance`) &&
        (v.push({
          t: `status`,
          who: e.ref,
          text: `ENCORE`
        }), z(e, 1)),
        k(e, `burst`) &&
        (e.burst = 2),
        k(e, `kiai`) &&
        z(e, 0.2),
        k(e, `conductor`)
      ) {
        for (let e of w(a)) R(e, `dmg`, 1, 0.15);
        v.push({
          t: `status`,
          who: e.ref,
          text: `CONDUCTOR`
        })
      }
    }
  }
  function $e() {
    if (ie) return;
    let t = w(`ally`).length > 0,
    n = w(`enemy`).length > 0;
    !t ||
    !n ? ie = t ? `ally` : n ? `enemy` : `draw` : g >= (e.maxActions ?? 400) &&
    (ie = `draw`)
  }
  function et(e) {
    e.pushed = 0;
    for (let t of e.statuses) t.turns--;
    let n = e.statuses.some(e => e.kind === `taunt` && e.turns <= 0);
    e.statuses = e.statuses.filter(e => e.turns > 0),
    e.tauntCd > 0 &&
    e.tauntCd--,
    n &&
    (e.tauntCd = 1),
    e.burst > 0 &&
    e.burst--,
    e.ssOff > 0 &&
    e.ssOff--,
    e.f.sig === `stream` &&
    e.ramp < G.rampMax &&
    (
      e.ramp++,
      v.push({
        t: `status`,
        who: e.ref,
        text: `RAMP UP ×${ e.ramp }`
      })
    ),
    e.av = Math.max(0, M(e) * (1 - e.nextAdvance)) * (r === `scramble` ? 1 - Z.scramble + t.next() * 2 * Z.scramble : 1),
    e.nextAdvance = 0,
    e.turns++,
    g++,
    _ = null,
    r === `comet` &&
    g === Z.cometAt &&
    tt(),
    $e(),
    nt()
  }
  function tt() {
    for (let e of [
      ...w(`ally`),
      ...w(`enemy`)
    ]) v.push({
      t: `status`,
      who: e.ref,
      text: `COMET`
    }),
    ke(e, Math.round(e.f.maxHp * Z.comet), e)
  }
  function nt() {
    for (; !ie && !_; ) {
      let e = [
        ...w(`ally`),
        ...w(`enemy`)
      ],
      t = e.reduce(
        (e, t) => t.av < e.av ||
        t.av === e.av &&
        t.ref.side === `ally` &&
        e.ref.side === `enemy` ? t : e
      ),
      n = t.av;
      for (let t of e) t.av -= n;
      if (t.av = 0, We[t.ref.side] && (Ge(t), t.hp <= 0)) $e();
       else {
        if (
          t.payload &&= null,
          t.broken &&
          (
            t.broken = !1,
            t.guard = t.maxGuard,
            v.push({
              t: `status`,
              who: t.ref,
              text: `GUARD UP`
            })
          ),
          k(t, `defensive`)
        ) {
          let e = Re(t.ref.side);
          e &&
          V(t, e, t.f.maxHp * 0.03)
        }
        if (
          t.rain &&= (
            t.rain.from.hp > 0 &&
            B(t.rain.from, t, t.rain.amount),
            --t.rain.turns > 0 ? t.rain : null
          ),
          r === `spring` &&
          B(t, t, t.f.maxHp * Z.spring),
          d(t, `turnHeal`) > 0 &&
          B(t, t, t.f.maxHp * d(t, `turnHeal`)),
          (r === `nine` && re(Z.nineEvery) || _e(t)) &&
          v.push({
            t: `status`,
            who: t.ref,
            text: `⑨`
          }),
          r === `drop` &&
          re(Z.dropEvery) &&
          v.push({
            t: `status`,
            who: t.ref,
            text: `DROP`
          }),
          t.f.passive === `lifeline`
        ) {
          let e = Re(t.ref.side);
          e &&
          B(t, e, t.f.maxHp * C.lifeline * A(t) * (j(t, `mend`) ? N.lifelineMult : 1))
        }
        t.firstHitDone = !1,
        t.stormUsed = !1,
        t.overclocked = !1,
        _ = t,
        v.push({
          t: `turn`,
          who: t.ref
        })
      }
    }
  }
  function rt(e, n, r = `basic`) {
    let i = w(S(e.ref.side)),
    a = He(e),
    o = a.length ? a : i;
    if (!o.length) return;
    if (n <= 0) return o[Math.floor(t.next() * o.length)];
    let s = t => {
      let r = (1 - O(t)) * 2 + (t.broken ? 0 : 0.8 * (1 - t.guard / t.maxGuard));
      return n >= 2 &&
      (
        t.broken &&
        (r += 1.5),
        E(t, `expose`) &&
        (r += 0.5),
        (t.f.cls === `dps` || t.f.cls === `support`) &&
        (r += 0.7),
        k(e, `focus`) &&
        e.focus.target === c(t.ref) &&
        (r += 0.8)
      ),
      r
    };
    return o.reduce((e, t) => s(t) > s(e) ? t : e)
  }
  let W = {
    'shield-bash': {
      mult: 1.3,
      guard: 3
    },
    'heavy-strike': {
      mult: 1.55,
      guard: 4
    },
    execute: {
      mult: 1.55,
      guard: 2
    },
    'piercing-shot': {
      mult: 1.35,
      guard: 2,
      pierce: !0
    },
    curse: {
      mult: 1.25,
      guard: 2
    },
    wither: {
      mult: 1.25,
      guard: 2
    },
    fracture: {
      mult: 1.15,
      guard: 4
    },
    stall: {
      mult: 1,
      guard: 2
    },
    'blade-storm': {
      mult: 0.72,
      guard: 1
    }
  },
  it = [
    `mend`,
    `sanctuary`,
    `battle-hymn`,
    `overture`
  ],
  at = [
    `bulwark`,
    `iron-skin`,
    `counter-stance`
  ];
  function ot(e, t, r, i = !1) {
    let a = e.f,
    o = O(t) < 0.5,
    s = Math.min(
      1,
      a.critRate + (a.passive === `deadeye` && o ? C.deadeyeVsLow * A(e) : 0)
    ),
    c = a.critDmg + (k(e, `crit`) && ce(t) ? 0.4 : 0) + (a.passive === `deadeye` && o ? C.deadeyeVsLowDmg * A(e) : 0),
    l = D(e, `dmg`) + (e.burst > 0 ? 0.25 : 0) + a.fx.singleDmg;
    o &&
    (
      l += a.fx.dmgVsLow + (a.passive === `bloodlust` ? C.bloodlust * A(e) : 0)
    ),
    ce(t) &&
    (l += a.fx.dmgVsDebuffed),
    t.broken &&
    (
      l += a.fx.dmgVsBroken + (a.passive === `exploit` ? C.exploit * A(e) : 0) + (k(e, `shatter`) ? 0.2 : 0)
    ),
    k(e, `glass`) &&
    (l += 0.3),
    k(e, `executioner`) &&
    (l += O(t) < 0.35 ? 0.35 : 0.1),
    k(e, `laststand`) &&
    O(e) < 0.5 &&
    (l += U.lastStandDmg),
    k(e, `desperado`) &&
    O(e) < 0.5 &&
    (l += U.desperadoDmg),
    n === `hr` &&
    (l += 0.3);
    let u = t.f.def * (i ? 0.7 : 1),
    d = 1 - u / (u + 200 + 10 * a.level),
    ee = Math.min(0.8, D(e, `weaken`) + Le(t, e));
    return pe(e) * r * (1 + me(e) + l + P(t)) * (1 + s * c) * d * (1 - ee) * ri
  }
  let st = (e, t = !1) => e.hp + (t ? 0 : e.shield),
  ct = e => e.f.eidolon >= 5 ? 1.3 : 1;
  function lt(e, t) {
    let n = W[e.f.skill];
    return !n ||
    e.f.skill === `blade-storm` ? 0 : ot(
      e,
      t,
      (e.f.skill === `execute` && O(t) < 0.5 ? 2.4 : n.mult) * ve(e) * ((e.f.cls === `dps` || e.f.cls === `cc`) && e.f.eidolon >= 6 ? 1.5 : 1),
      n.pierce
    )
  }
  let K = e => fe(e) * (1 + Math.min(1, e.f.critRate) * e.f.critDmg) * (e.f.cls === `support` ? 1.25 : 1) * (E(e, `weaken`) ? 0.65 : 1);
  function q(e) {
    let t = e.ref.side,
    n = w(t),
    r = w(S(t)),
    i = He(e),
    a = i.length ? i : r;
    if (!a.length) return {
      kind: `basic`
    };
    let o = (e, t) => e.reduce((e, n) => t(n) > t(e) ? n : e),
    s = 0.9,
    c = p[t] >= 1,
    l = e.f.skill,
    u = W[l],
    d = a.filter(t => ot(e, t, ct(e)) * s >= st(t));
    if (d.length) return {
      kind: `basic`,
      target: o(d, K).ref
    };
    if (c && u && l !== `blade-storm`) {
      let t = a.filter(t => lt(e, t) * s >= st(t, u.pierce));
      if (t.length) return {
        kind: `skill`,
        target: o(t, K).ref
      }
    }
    if (
      c &&
      l === `blade-storm` &&
      (
        r.filter(t => ot(e, t, 0.72 * ve(e)) * s >= st(t)).length >= 1 ||
        r.length >= 3
      )
    ) return {
      kind: `skill`
    };
    let ee = t => Math.max(1, ot(e, t, ct(e))),
    f = e => !e.broken &&
    e.guard <= 20 ? 0.35 : 0,
    te = o(
      a,
      e => K(e) / Math.max(1, st(e) / ee(e)) * (1 + f(e) + (e.broken ? 0.25 : 0) + (E(e, `expose`) ? 0.2 : 0))
    ),
    ne = te;
    if (l === `curse` || l === `wither` || l === `stall`) {
      let r = n.some(t => t !== e && (it.includes(t.f.skill) || at.includes(t.f.skill))) &&
      n.some(e => O(e) < 0.5);
      if (!c || p[t] - + !!r < 1) return {
        kind: `basic`,
        target: te.ref
      };
      if (l === `stall`) return {
        kind: `skill`,
        target: o(a, e => K(e) / Math.max(1, e.av)).ref
      };
      let i = l === `curse` ? `expose` : `weaken`,
      s = i === `weaken` ? o(a, e => E(e, `weaken`) ? - 1 : K(e)) : ne;
      return E(s, i) ? {
        kind: `basic`,
        target: te.ref
      }
       : {
        kind: `skill`,
        target: s.ref
      }
    }
    let m = ft(e, 2);
    return m.target &&
    m.target.side !== t ? {
      kind: m.kind,
      target: (m.kind === `skill` ? ne : te).ref
    }
     : m
  }
  function ut(e, t) {
    let n = e.ref.side,
    r = rt(e, Math.min(t, 2)),
    i = ye(e) ? {
      kind: `basic`,
      target: Re(n) ?.ref
    }
     : {
      kind: `basic`,
      target: r?.ref
    };
    if (p[n] < 1) return i;
    let a = p[n] >= 2 ||
    t >= 2;
    switch (e.f.sig) {
      case `volley`:
        return a ||
        e.charges >= 2 ? {
          kind: `skill`
        }
         : i;
      case `payload`:
        {
          let t = He(e),
          o = (t.length ? t : w(S(n))).filter(e => !e.payload),
          s = r &&
          !r.payload ? r : o[0];
          return a &&
          s ? {
            kind: `skill`,
            target: s.ref
          }
           : i
        }
      case `haze`:
        {
          let e = w(S(n)).filter(e => E(e, `haze`)).length;
          return a &&
          r &&
          e < w(S(n)).length / 2 ? {
            kind: `skill`,
            target: r.ref
          }
           : i
        }
      case `bite`:
        {
          let t = He(e),
          r = (t.length ? t : w(S(n))).filter(t => !(t.fixatedOn === e && E(t, `fixate`)));
          return !a ||
          !r.length ? i : {
            kind: `skill`,
            target: r.reduce((e, t) => K(t) > K(e) ? t : e).ref
          }
        }
      case `stream`:
        {
          let t = He(e),
          a = (t.length ? t : w(S(n))).find(t => ot(e, t, G.streamHit * (G.streamBase + e.ramp)) * 0.9 >= st(t));
          return a ? {
            kind: `skill`,
            target: a.ref
          }
           : e.ramp >= G.rampMax - 1 &&
          r ? {
            kind: `skill`,
            target: r.ref
          }
           : i
        }
      case `rain`:
        {
          let e = w(n),
          t = e.filter(e => !e.rain).length;
          return e.some(e => O(e) < 0.5) ||
          a &&
          t >= 2 ? {
            kind: `skill`
          }
           : i
        }
      case `heatwave`:
        {
          let e = w(S(n)),
          t = e.filter(e => !E(e, `slow`)).length;
          return r &&
          t >= Math.max(1, e.length / 2) &&
          (a || t === e.length) ? {
            kind: `skill`,
            target: r.ref
          }
           : i
        }
      case `ramen`:
        {
          let t = w(n);
          return t.filter(e => O(e) < 0.7).length >= 2 ||
          t.some(e => O(e) < 0.4) ||
          a &&
          e.simmer >= 2 ? {
            kind: `skill`
          }
           : i
        }
      case `replay`:
        return {
          kind: `skill`
        }
    }
    return i
  }
  function ft(e, t) {
    if (e.f.sig && t >= 1) return ut(e, t);
    if (t >= 3) return q(e);
    let n = e.ref.side,
    r = w(n),
    i = rt(e, t),
    a = rt(e, t, `skill`),
    o = {
      kind: `basic`,
      target: i?.ref
    };
    if (t <= 0 || p[n] < 1) return o;
    let s = p[n] >= 2 ||
    t >= 2 &&
    p[n] >= 1,
    c = r.reduce((e, t) => O(t) < O(e) ? t : e);
    switch (e.f.skill) {
      case `bulwark`:
      case `iron-skin`:
      case `counter-stance`:
        return !E(e, `taunt`) &&
        (r.some(e => O(e) < 0.7) || s) ? {
          kind: `skill`
        }
         : o;
      case `mend`:
        return O(c) < 0.6 ? {
          kind: `skill`,
          target: c.ref
        }
         : o;
      case `sanctuary`:
        return r.filter(e => O(e) < 0.7).length >= 2 ||
        r.some(e => O(e) < 0.4 || ce(e)) ? {
          kind: `skill`
        }
         : o;
      case `battle-hymn`:
        {
          if (O(c) < 0.5) return {
            kind: `skill`,
            target: c.ref
          };
          let t = r.filter(t => t !== e && !E(t, `atk`)).sort(
            (e, t) => Number(t.f.cls === `dps`) - Number(e.f.cls === `dps`) ||
            fe(t) - fe(e)
          ) [0];
          return s &&
          t ? {
            kind: `skill`,
            target: t.ref
          }
           : o
        }
      case `overture`:
        {
          if (O(c) < 0.6) return {
            kind: `skill`,
            target: c.ref
          };
          let t = r.filter(t => t !== e).sort(
            (e, t) => Number(t.f.cls === `dps`) - Number(e.f.cls === `dps`) ||
            fe(t) - fe(e)
          ) [0];
          return s &&
          t ? {
            kind: `skill`,
            target: t.ref
          }
           : o
        }
      case `blade-storm`:
        return s &&
        w(S(n)).length >= 2 ? {
          kind: `skill`
        }
         : o;
      case `curse`:
      case `wither`:
        {
          let t = e.f.skill === `curse` ? `expose` : `weaken`;
          return s &&
          a &&
          !E(a, t) ? {
            kind: `skill`,
            target: a.ref
          }
           : o
        }
      default:
        return s &&
        a ? {
          kind: `skill`,
          target: a.ref
        }
         : o
    }
  }
  function pt(e, t, n, r = !0) {
    let i = _;
    if (ie || !i || i.ref.side !== e || t === `skill` && p[e] < 1) return [];
    let a = T(n);
    return Ve(i, t, a) ? (
      r &&
      h.push({
        at: g,
        side: e,
        unit: i.ref.index,
        kind: t,
        target: Be(i, t) === `none` ? null : n ?? null
      }),
      v = [],
      Qe(i, t, a),
      $e(),
      ie ||
      et(i),
      gt()
    ) : []
  }
  function mt(e, t, n) {
    let r = _;
    if (ie || !r) return [];
    let o = t ?? (a[r.ref.side] === `ai` && r.ref.side === `enemy` ? i : 2);
    if (r.f.boss === `regen` && (r.turns + 1) % 3 == 0 && !e) {
      v = [
        {
          t: `status`,
          who: r.ref,
          text: `REGEN`
        }
      ];
      for (let e of w(r.ref.side)) B(r, e, e.f.maxHp * 0.055);
      return et(r),
      gt()
    }
    let s = ft(r, o),
    c = n &&
    Be(r, s.kind) === `enemy` &&
    Ve(r, s.kind, T(n)) ? n : s.target ?? null;
    return pt(r.ref.side, s.kind, c, e)
  }
  let ht = [];
  function gt() {
    let e = v;
    v = [];
    for (let t of e) ht.push(t);
    return e
  }
  return nt(),
  {
    units: f,
    sp: p,
    inputs: h,
    mod: n,
    twist: r,
    control: a,
    opening: gt(),
    history: ht,
    get actions() {
      return g
    },
    get current() {
      return _?.ref ?? null
    },
    get winner() {
      return ie
    },
    get waitingFor() {
      return _ &&
      a[_.ref.side] === `human` ? _.ref.side : null
    },
    targetsOf: (e, t, n) => Be(f[e][t], n),
    canTarget: (e, t, n, r) => {
      let i = f[e][t];
      return !!(i && Ve(i, n, T(r)))
    },
    move: (e, t, n) => pt(e, t, n ?? null),
    stepAi: () => _ &&
    a[_.ref.side] === `ai` ? mt(!1) : [],
    autoMove: (e, t) => _ ? mt(!0, e, t) : [],
    suggest: () => _ ? ft(_, 2) : null,
    preview(e = 8) {
      let t = [
        ...w(`ally`),
        ...w(`enemy`)
      ].map(e => ({
        u: e,
        av: e === _ ? 0 : e.av
      })),
      n = [];
      for (let r = 0; r < e && t.length; r++) {
        let e = t.reduce((e, t) => t.av < e.av ? t : e);
        n.push(e.u.ref);
        let r = e.av;
        for (let e of t) e.av -= r;
        e.av = M(e.u)
      }
      return n
    },
    has: (e, t) => {
      let n = T(e);
      return !!(n && E(n, t))
    },
    speedOf: e => {
      let t = T(e);
      return t ? ue(t) : 0
    }
  }
}
function di(e, t) {
  let n = ui(e);
  for (let e of t) {
    for (
      ;
      !n.winner &&
      n.actions < e.at &&
      n.current &&
      n.control[n.current.side] === `ai`;
    ) n.stepAi();
    if (
      n.winner ||
      n.actions !== e.at ||
      n.current?.side !== e.side ||
      n.current.index !== e.unit
    ) break;
    let t = n.inputs.length;
    if (n.move(e.side, e.kind, e.target ?? null), n.inputs.length === t) break
  }
  return n
}
function fi(e, t) {
  return e.at === t.at &&
  e.side === t.side &&
  e.unit === t.unit &&
  e.kind === t.kind &&
  (e.target?.side ?? null) === (t.target?.side ?? null) &&
  (e.target?.index ?? null) === (t.target?.index ?? null)
}
[
  8,
  15,
  22,
  30,
  38,
  46,
  54,
  62,
  70,
  78,
  86,
  95
].findIndex(e => e >= 60) + 1,
[
  ...ln,
  ...un,
  ...dn
];
var pi = {
  stars: 5000,
  accountLevel: 5
},
mi = 1000,
hi = [
  `DEV`,
  `MOD`,
  `ADM`,
  `GMT`,
  `STF`,
  `SYS`,
  `OSU`,
  `PPY`,
  `NAT`,
  `BAN`,
  `BOT`,
  `GAC`,
  `DEVS`,
  `MODS`,
  `ADMN`,
  `STAF`,
  `TEAM`,
  `GACH`,
  `PEPY`,
  `OSUG`
],
gi = [
  `FUK`,
  `FCK`,
  `FUC`,
  `CUM`,
  `FAG`,
  `NIG`,
  `NGR`,
  `KKK`,
  `SEX`,
  `XXX`,
  `ASS`,
  `TIT`,
  `DIK`,
  `DIC`,
  `COK`,
  `CNT`,
  `NAZ`,
  `HTL`,
  `RAP`,
  `PED`,
  `PDO`,
  `WTF`
],
_i = [
  `SHIT`,
  `DICK`,
  `COCK`,
  `SLUT`,
  `WHOR`,
  `TWAT`,
  `PISS`,
  `JIZZ`,
  `NIGA`,
  `FAGS`,
  `HOES`,
  `BOOB`,
  `TITS`,
  `ANAL`
],
vi = [
  `fuck`,
  `nigg`,
  `fagg`,
  `cunt`,
  `nazi`,
  `hitler`,
  `rape`,
  `pedo`,
  `porn`
],
yi = e => e.trim().toUpperCase();
function bi(e, {
  admin: t = !1
}
= {}) {
  let n = yi(e);
  if (!/^[A-Z]{3,4}$/.test(n)) return `A tag is 3 or 4 letters (A–Z)`;
  let r = n.toLowerCase();
  return gi.some(e => n.includes(e)) ||
  _i.includes(n) ||
  vi.some(e => r.includes(e)) ? `That tag isn't allowed` : !t &&
  hi.includes(n) ? `That tag is reserved` : null
}
function xi(e) {
  let t = e.replace(/\s+/g, ` `).trim();
  if (t.length < 3 || t.length > 24) return `A guild name is 3 to 24 characters`;
  if (!/^[\p{L}\p{N} '._!-]+$/u.test(t)) return `Use letters, numbers, spaces and . _ - ' ! only`;
  let n = t.toLowerCase().replace(/[^a-z]/g, ``);
  return vi.some(e => n.includes(e)) ? `That name isn't allowed` : null
}
var Si = [
  `owner`,
  `chief`,
  `strategist`,
  `captain`,
  `recruiter`,
  `recruit`
],
Ci = e => Si.length - Si.indexOf(e),
wi = {
  invite: `recruiter`,
  answer_requests: `recruiter`,
  promote: `captain`,
  kick: `chief`,
  edit: `chief`,
  spend: `chief`,
  transfer: `owner`,
  disband: `owner`
},
Ti = (e, t) => Ci(e) >= Ci(wi[t]);
function Ei(e, t, n) {
  return !Ti(e, `promote`) ||
  n === `owner` ? !1 : Ci(t) < Ci(e) &&
  Ci(n) < Ci(e)
}
var Di = (e, t) => Ti(e, `kick`) &&
Ci(t) < Ci(e),
Oi = e => Math.min(50, 5 + 2 * (e - 1)),
ki = e => Math.min(6, 1 + Math.floor(e / 10)),
Ai = e => Math.min(0.5, 0.02 * (e - 1)),
ji = [
  `#ff66aa`,
  `#cc3378`,
  `#ff6b5c`,
  `#ff9f43`,
  `#ffd966`,
  `#b3d944`,
  `#5fd17e`,
  `#2fb59b`,
  `#66ccff`,
  `#3d7bff`,
  `#7c5cff`,
  `#b48cff`,
  `#e8e8ee`,
  `#9aa0ad`,
  `#3a3d48`,
  `#16151b`
],
Mi = [
  `banner`,
  `shield`,
  `round`,
  `hex`
],
Ni = [
  `plain`,
  `band`,
  `chevron`,
  `diagonal`,
  `split`,
  `cross`,
  `saltire`,
  `border`,
  `bars`,
  `checks`,
  `ring`,
  `triangles`
],
Pi = [
  `none`,
  `circle`,
  `slider`,
  `spinner`,
  `star`,
  `heart`,
  `crown`,
  `note`,
  `bolt`,
  `tank`,
  `dps`,
  `support`,
  `cc`,
  `hex`,
  `flame`,
  `moon`
],
Fi = [
  {
    level: 3,
    kind: `pattern`,
    part: `cross`,
    what: `Cross pattern`
  },
  {
    level: 3,
    kind: `symbol`,
    part: `crown`,
    what: `Crown symbol`
  },
  {
    level: 5,
    kind: `shape`,
    part: `round`,
    what: `Round shape`
  },
  {
    level: 5,
    kind: `pattern`,
    part: `saltire`,
    what: `Saltire pattern`
  },
  {
    level: 8,
    kind: `pattern`,
    part: `checks`,
    what: `Checks pattern`
  },
  {
    level: 8,
    kind: `symbol`,
    part: `flame`,
    what: `Flame symbol`
  },
  {
    level: 10,
    kind: `shape`,
    part: `hex`,
    what: `Hexagon shape`
  },
  {
    level: 12,
    kind: `pattern`,
    part: `ring`,
    what: `Ring pattern`
  },
  {
    level: 15,
    kind: `symbol`,
    part: `moon`,
    what: `Moon symbol`
  },
  {
    level: 20,
    kind: `pattern`,
    part: `triangles`,
    what: `Triangles pattern`
  }
],
Ii = (e, t) => Fi.find(n => n.kind === e && n.part === t) ?.level ?? 1,
Li = {
  shape: `banner`,
  base: 0,
  accent: 15,
  pattern: `band`,
  symbol: `circle`,
  symbolColor: 12
};
function Ri(e, t) {
  let n = e => Number.isInteger(e) &&
  e >= 0 &&
  e < ji.length;
  if (
    !Mi.includes(e.shape) ||
    !Ni.includes(e.pattern) ||
    !Pi.includes(e.symbol)
  ) return `Unknown banner part`;
  if (!n(e.base) || !n(e.accent) || !n(e.symbolColor)) return `Unknown banner colour`;
  if (e.pattern !== `plain` && e.base === e.accent) return `Pick two different colours`;
  if (
    e.symbol !== `none` &&
    e.symbolColor === e.base &&
    (e.pattern === `plain` || e.symbolColor === e.accent)
  ) return `The symbol wouldn't show: pick another colour for it`;
  for (
    let[n,
    r]of [
      [`shape`,
      e.shape],
      [
        `pattern`,
        e.pattern
      ],
      [
        `symbol`,
        e.symbol
      ]
    ]
  ) {
    let e = Ii(n, r);
    if (e > t) return `That needs guild level ${ e }`
  }
  return null
}
var zi = {
  bronze: {
    floor: 15,
    starsPerHour: 50,
    points: 1
  },
  silver: {
    floor: 30,
    starsPerHour: 90,
    points: 2
  },
  gold: {
    floor: 45,
    starsPerHour: 150,
    points: 3
  },
  platinum: {
    floor: 60,
    starsPerHour: 225,
    points: 4
  }
},
Bi = [
  `bronze`,
  `silver`,
  `gold`,
  `platinum`
],
Q = (e, t, n, r, i, a) => ({
  id: e,
  name: t,
  artist: n,
  tier: r,
  beatmapsetId: i,
  rule: a
}),
Vi = [
  Q(
    `oer-the-flood`,
    `o'er the flood`,
    `goreshit`,
    `bronze`,
    51972,
    `the-world`
  ),
  Q(`gold-dust`, `Gold Dust`, `DJ Fresh`, `bronze`, 28107, `aleph`),
  Q(
    `rockefeller-street`,
    `Rockefeller Street`,
    `Getter Jaani`,
    `bronze`,
    33842,
    `presents`
  ),
  Q(
    `neuronecia`,
    `Neuronecia`,
    `Function Phantom`,
    `bronze`,
    186911,
    `sakura`
  ),
  Q(
    `t-t-techno`,
    `T-T-Techno`,
    `DJ S3RL feat. Jesskah`,
    `bronze`,
    83560,
    `shred`
  ),
  Q(
    `kira-kira-days`,
    `Kira Kira Days`,
    `HO-KAGO TEA TIME`,
    `bronze`,
    444335,
    `spring`
  ),
  Q(
    `tear-rain`,
    `Tear Rain`,
    `cYsmix feat. Emmy`,
    `bronze`,
    140662,
    `hd`
  ),
  Q(`my-love`, `My Love`, `Kuba Oms`, `bronze`, 163112, `live`),
  Q(
    `make-a-move`,
    `Make a Move`,
    `Icon For Hire`,
    `silver`,
    765778,
    `hr`
  ),
  Q(`hitorigoto`, `Hitorigoto`, `ClariS`, `silver`, 596704, `hd`),
  Q(
    `cold-green-eyes`,
    `Cold Green Eyes`,
    `Station Earth ft. Roos Denayer`,
    `silver`,
    371128,
    `fl`
  ),
  Q(
    `monochrome-butterfly`,
    `Monochrome Butterfly`,
    `Aitsuki Nakuru`,
    `silver`,
    516109,
    `scramble`
  ),
  Q(
    `masterpiece`,
    `masterpiece`,
    `Hommarju feat. Latte`,
    `silver`,
    12483,
    `live`
  ),
  Q(
    `harumachi-clover`,
    `Harumachi Clover`,
    `Will Stetson`,
    `silver`,
    842412,
    `spring`
  ),
  Q(
    `sentimental-skyscraper`,
    `Sentimental Skyscraper`,
    `Halozy`,
    `silver`,
    100348,
    `comet`
  ),
  Q(`quaver`, `quaver`, `dj TAKA`, `silver`, 873811, `nine`),
  Q(
    `yomi-yori-kikoyu`,
    `Yomi yori Kikoyu`,
    `Imperial Circus Dead Decadence`,
    `gold`,
    461744,
    `yomi`
  ),
  Q(
    `exit-this-earth`,
    `Exit This Earth's Atomosphere`,
    `Camellia`,
    `gold`,
    517474,
    `sd`
  ),
  Q(
    `furioso-melodia`,
    `furioso melodia`,
    `gmtn. (witch's slave)`,
    `gold`,
    280107,
    `shred`
  ),
  Q(
    `genryuu-kaiko`,
    `Genryuu Kaiko`,
    `Halozy`,
    `gold`,
    180138,
    `the-world`
  ),
  Q(`tsukinami`, `Tsukinami`, `Wakeshima Kanon`, `gold`, 896080, `fl`),
  Q(`no-title`, `No title`, `Reol`, `gold`, 320118, `blank`),
  Q(
    `black-rover`,
    `Black Rover`,
    `Vickeblanka`,
    `gold`,
    781509,
    `mind-games`
  ),
  Q(`megalovania`, `MEGALOVANIA`, `toby fox`, `gold`, 387700, `dodge`),
  Q(`blue-zenith`, `Blue Zenith`, `xi`, `platinum`, 292301, `crown`),
  Q(
    `image-material`,
    `IMAGE -MATERIAL-`,
    `Tatsh`,
    `platinum`,
    93523,
    `hr`
  ),
  Q(
    `highscore`,
    `Highscore`,
    `Panda Eyes & Teminite`,
    `platinum`,
    332532,
    `drop`
  ),
  Q(
    `airman`,
    `Can't Defeat Airman`,
    `Team Nekokan`,
    `platinum`,
    24313,
    `air-shooter`
  )
],
Hi = [
  Q(
    `padoru`,
    `PADORU / PADORU`,
    `Turbo`,
    `bronze`,
    1073074,
    `presents`
  ),
  Q(
    `yoru-no-kodomo-tachi`,
    `Yoru no Kodomo tachi`,
    `Roses Epicurean`,
    `bronze`,
    325112,
    `blank`
  ),
  Q(`pika-girl`, `Pika Girl`, `S3RL`, `bronze`, 40440, `live`),
  Q(`ignite`, `IGNITE`, `Aoi Eir`, `bronze`, 190222, `nine`),
  Q(`dear-you`, `Dear You`, `DJ Genericname`, `bronze`, 43466, `yomi`),
  Q(
    `koigokoro`,
    `Koigokoro`,
    `Primastella`,
    `bronze`,
    127712,
    `spring`
  ),
  Q(
    `koi-no-hime-hime-pettanko`,
    `Koi no Hime Hime Pettanko`,
    `*namirin`,
    `bronze`,
    485056,
    `presents`
  ),
  Q(
    `sweets-weekend`,
    `Sweets Weekend`,
    `Primary`,
    `bronze`,
    380545,
    `spring`
  ),
  Q(
    `daidai-genome`,
    `Daidai Genome`,
    `Tsunamaru`,
    `bronze`,
    221954,
    `scramble`
  ),
  Q(
    `natsukoi-hanabi`,
    `Natsukoi Hanabi`,
    `chano & 40mP`,
    `bronze`,
    538998,
    `comet`
  ),
  Q(
    `asu-no-yozora`,
    `Asu no Yozora Shoukaihan`,
    `Yuaru`,
    `silver`,
    384772,
    `comet`
  ),
  Q(
    `yubi-bouenkyou`,
    `Yubi Bouenkyou`,
    `Nogizaka46`,
    `silver`,
    623924,
    `sakura`
  ),
  Q(
    `blade-dance`,
    `Blade Dance`,
    `Ni-Sokkususu`,
    `silver`,
    372851,
    `crown`
  ),
  Q(
    `pensamento`,
    `pensamento tipico de esquerda caviar`,
    `Maffalda`,
    `silver`,
    175036,
    `mind-games`
  ),
  Q(
    `dark-flight-dreamer`,
    `Dark Flight Dreamer`,
    `ALiCE'S EMOTiON`,
    `silver`,
    185250,
    `fl`
  ),
  Q(
    `classic-pursuit`,
    `Classic Pursuit`,
    `cYsmix`,
    `silver`,
    488238,
    `dodge`
  ),
  Q(
    `wizards-tower`,
    `Wizard's Tower`,
    `Loki`,
    `silver`,
    985788,
    `aleph`
  ),
  Q(`shiori`, `SHIORI`, `ClariS`, `silver`, 661919, `blank`),
  Q(`granat`, `Granat`, `Drop`, `silver`, 219763, `crown`),
  Q(`asymmetry`, `Asymmetry`, `Reol`, `silver`, 292077, `hr`),
  Q(
    `high-free-spirits`,
    `High Free Spirits`,
    `TrySail`,
    `silver`,
    440706,
    `aleph`
  ),
  Q(`monster`, `MONSTER`, `Reol`, `silver`, 661483, `drop`),
  Q(
    `yababaina`,
    `YABABAINA`,
    `SatapanP feat. Hatsune Miku, Kasane Teto, Zundamon`,
    `gold`,
    2205641,
    `scramble`
  ),
  Q(`deadlocked`, `Deadlocked`, `F-777`, `gold`, 2440153, `the-world`),
  Q(`ily`, `ILY`, `Panda Eyes`, `gold`, 653534, `sakura`),
  Q(
    `tower-of-heaven`,
    `Tower Of Heaven (You Are Slaves)`,
    `Feint`,
    `gold`,
    128931,
    `sd`
  ),
  Q(
    `blue-dragon`,
    `BLUE DRAGON`,
    `Seiryu`,
    `gold`,
    326920,
    `air-shooter`
  ),
  Q(`teo`, `Teo`, `Omoi`, `gold`, 721804, `nine`),
  Q(
    `kokou-no-sousei`,
    `Kokou no Sousei`,
    `Yousei Teikoku`,
    `gold`,
    28705,
    `sd`
  ),
  Q(
    `brain-power`,
    `Brain Power`,
    `NOMA`,
    `gold`,
    357777,
    `mind-games`
  ),
  Q(
    `sendan-life`,
    `Sendan Life`,
    `Remo Prototype[CV: Hanamori Yumiri]`,
    `gold`,
    416153,
    `drop`
  ),
  Q(
    `hibana`,
    `HIBANA`,
    `DECO*27 feat. Hatsune Miku`,
    `gold`,
    671199,
    `air-shooter`
  ),
  Q(
    `crack-traxxxx`,
    `Crack Traxxxx`,
    `Lite Show Magic (t+pazolite vs C-Show)`,
    `gold`,
    139525,
    `scramble`
  ),
  Q(
    `toumei-elegy`,
    `Toumei Elegy`,
    `Konuko`,
    `platinum`,
    219380,
    `hd`
  ),
  Q(
    `snow-drive`,
    `Snow Drive(01.23)`,
    `Omoi`,
    `platinum`,
    478405,
    `dodge`
  ),
  Q(
    `through-the-fire-and-flames`,
    `Through the Fire and Flames`,
    `DragonForce`,
    `platinum`,
    382400,
    `shred`
  ),
  Q(`ghost-rule`, `Ghost Rule`, `DECO*27`, `platinum`, 413117, `yomi`)
],
Ui = [
  ...Vi,
  ...Hi
];
new Map(Ui.map(e => [e.id,
e]));
var Wi = {
  hours: 12,
  mix: {
    platinum: 2,
    gold: 4,
    silver: 4,
    bronze: 2
  }
},
Gi = Wi.hours * 3600000,
Ki = Object.values(Wi.mix).reduce((e, t) => e + t, 0),
qi = (e => Math.floor(e.getTime() / Gi)) (new Date(`2026-10-28T00:00:00Z`)),
Ji = e => Object.fromEntries(
  Bi.map(
    t => [t,
    e.filter(e => e.tier === t).sort((e, t) => d(`rotation#${ e.id }`) - d(`rotation#${ t.id }`))]
  )
),
Yi = Ji(Vi),
Xi = Ji(Ui),
Zi = (e, t, n) => Array.from({
  length: t
}, (t, r) => e[((n + r) % e.length + e.length) % e.length]);
Object.fromEntries(
  Bi.map(
    e => {
      let t = Wi.mix[e],
      n = new Set(Zi(Yi[e], t, (qi - 1) * t).map(e => e.id));
      return [e,
      Xi[e].findIndex((r, i) => Zi(Xi[e], t, i).every(e => !n.has(e.id)))]
    }
  )
);
var Qi = 0.6;
[
  ...Array.from({
    length: 7
  }, () => ({
    stars: 1000,
    items: {
    }
  }))
];
var $i = e => s(`pack.${ e.slug }`, e.name),
ea = e => s(`packShort.${ e.slug }`, e.name.replace(/ Pack$/, ``)),
ta = e => ({
  ..._[e],
  name: s(`class.${ e }`, _[e].name),
  identity: s(`class.${ e }.identity`, _[e].identity)
}),
na = e => ({
  ...oe[e],
  name: s(`skill.${ e }`, oe[e].name),
  text: s(`skill.${ e }.text`, oe[e].text)
}),
ra = e => ({
  ...E[e],
  name: s(`passive.${ e }`, E[e].name),
  text: s(`passive.${ e }.text`, E[e].text)
});
function ia(e) {
  let t = v(e);
  return {
    ...t,
    name: s(`basic`, t.name),
    text: s(e === `support` ? `basic.support.text` : `basic.text`, t.text)
  }
}
var aa = e => ({
  ...sn[e],
  name: s(`floorMod.${ e }`, sn[e].name),
  text: s(`floorMod.${ e }.text`, sn[e].text)
}),
oa = (e, t) => s(`comp.${ e }`, t),
sa = (e, t) => s(`comp.${ e }.text`, t),
ca = e => s(`boss.${ e }`, cn[e].name),
la = e => s(`boss.${ e }.text`, cn[e].text),
ua = (e, t) => s(`godroll.${ e }`, t);
function da(e) {
  if (!we(e)) return e;
  let t = Se[e];
  if (t.kind === `ascension` && t.cls) {
    let n = [
      `I`,
      `II`,
      `III`
    ][t.tier - 1] ?? ``;
    return s(
      `item.${ e }`,
      s(`item.insignia`, t.name, {
        cls: ta(t.cls).name,
        tier: n
      })
    )
  }
  return s(`item.${ e }`, t.name)
}
var fa = e => s(`term.${ e }`, F[e]),
pa = e => s(`source.${ e }`, e),
ma = e => s(`feature.${ e }`, Un[e]),
ha = (e, t) => s(`map.${ e }.text`, t),
ga = e => s(`stat.${ e }`, ke[e].name),
_a = e => s(`mod.${ e }.bonus`, Fe[e].bonus),
va = (e, t) => s(`synergy.${ e }`, t),
ya = (e, t) => s(`synergy.${ e }.text`, t),
ba = e => g.find(t => _[t].name === e);
function xa(e) {
  let t = Jt.find(t => e.id === t.id || e.id.startsWith(`${ t.id }-`));
  if (!t || !e.label.startsWith(t.name)) return e.label;
  let n = e.label.slice(t.name.length).replace(
    /\b(Tank|DPS|Support|CC)\b/g,
    e => {
      let t = ba(e);
      return t ? ta(t).name : e
    }
  );
  return va(t.id, t.name) + n
}
function Sa(e) {
  let t = /^Add an? (\w+) for Full team \(\+(\d+)%\)$/.exec(e);
  if (t && ba(t[1])) return o(`team.hint.full`, {
    cls: ta(ba(t[1])).name,
    n: Number(t[2])
  });
  if (t = /^Add an? (\w+) for (.+)$/.exec(e), t && ba(t[1])) {
    let e = Jt.find(e => e.name === t[2]);
    return o(
      `team.hint.duo`,
      {
        cls: ta(ba(t[1])).name,
        bonus: e ? va(e.id, e.name) : t[2]
      }
    )
  }
  return t = /^1 more (\w+) card: \+(\d+)% for \w+$/.exec(e),
  t ? o(`team.hint.country`, {
    code: t[1],
    n: Number(t[2])
  }) : e.startsWith(`One more Common, Uncommon or Rare card`) ? o(`team.hint.underdogs`) : e
}
var Ca = (e, t) => s(`godroll.${ e }.why`, t),
wa = e => s(`mod.${ e }.identity`, Fe[e].identity),
Ta = e => ({
  ...e,
  name: s(`combo.${ e.id }`, e.name),
  forWho: s(`combo.${ e.id }.for`, e.forWho),
  text: s(`combo.${ e.id }.text`, e.text)
}),
Ea = e => s(`item.${ e }.text`, Se[e].text),
Da = e => e.sig ? o(`card.signature`) : i(e.rarity),
Oa = e => e.sig ? o(`card.signatureName`, {
  name: e.player.username
}) : e.player.username,
$ = r(),
ka = `M50 6 L89 28 L89 72 L50 94 L11 72 L11 28Z`,
Aa = 22,
ja = [
  [50,
  - 2.8],
  [
    96.8,
    23.6
  ],
  [
    96.8,
    76.4
  ],
  [
    50,
    102.8
  ],
  [
    3.2,
    76.4
  ],
  [
    3.2,
    23.6
  ]
],
Ma = ja.map(([e,
t], n) => Math.hypot(ja[(n + 1) % 6][0] - e, ja[(n + 1) % 6][1] - t)),
Na = Ma.reduce((e, t) => e + t, 0);
function Pa(e) {
  return Array.from({
    length: e
  }, (t, n) => {
    let r = n * Na / e,
    i = 0;
    for (; i < 5 && r > Ma[i]; ) r -= Ma[i++];
    let a = r / Ma[i],
    [
      o,
      s
    ] = ja[i],
    [
      c,
      l
    ] = ja[(i + 1) % 6];
    return [o + (c - o) * a,
    s + (l - s) * a]
  })
}
var Fa = e => e === `outHeal` ? o(`stat.healing`) : ke[e] ? ga(e) : e;
function Ia({
  mod: e
}) {
  let t = e.main.stat;
  return (0, $.jsxs) (
    `span`,
    {
      className: `md-tip`,
      children: [
        (0, $.jsxs) (
          `small`,
          {
            children: [
              e.rarity,
              `★ · +`,
              e.level,
              `/`,
              H[e.rarity]
            ]
          }
        ),
        (0, $.jsx) (`b`, {
          children: Fe[e.type].name
        }),
        (0, $.jsxs) (
          `span`,
          {
            className: `md-tip-main`,
            children: [
              Fa(t),
              ` `,
              (0, $.jsx) (`b`, {
                className: `num`,
                children: je(t, e.main.value)
              })
            ]
          }
        ),
        e.subs.map(
          (e, t) => (0, $.jsxs) (
            `span`,
            {
              className: `md-tip-sub`,
              children: [
                Fa(e.stat),
                ` `,
                (0, $.jsx) (`b`, {
                  className: `num`,
                  children: je(e.stat, e.value)
                })
              ]
            },
            t
          )
        )
      ]
    }
  )
}
function La({
  type: e,
  rarity: t,
  level: n,
  size: r = 28,
  title: i,
  empty: a,
  dots: o
}) {
  if (a || !e || !t) return (0, $.jsx) (
    `svg`,
    {
      className: `mod-badge mod-badge-empty`,
      viewBox: `0 0 100 100`,
      width: r,
      height: r,
      'aria-hidden': !0,
      children: (0, $.jsx) (`path`, {
        d: ka
      })
    }
  );
  let s = Fe[e],
  c = i ?? `${ s.name } ${ t }★${ n == null ? `` : ` +${ n }` }`,
  l = H[t],
  u = o &&
  n != null &&
  r >= Aa,
  d = Math.min(6.5, 66 / l);
  return (0, $.jsxs) (
    `svg`,
    {
      className: `mod-badge${ u ? ` with-dots` : `` }`,
      viewBox: u ? `-10 -10 120 120` : `0 0 100 100`,
      width: r,
      height: r,
      role: `img`,
      'aria-label': c,
      style: {
        '--mod-r': Pe[t],
        '--mod-t': s.color
      },
      children: [
        (0, $.jsx) (`title`, {
          children: c
        }),
        u &&
        (0, $.jsx) (
          `g`,
          {
            className: `mod-dots`,
            'aria-hidden': !0,
            children: Pa(l).map(
              ([e,
              t], r) => (0, $.jsx) (`circle`, {
                cx: e,
                cy: t,
                r: d,
                className: r < n ? `on` : void 0
              }, r)
            )
          }
        ),
        (0, $.jsx) (`path`, {
          d: ka,
          className: `mod-badge-fill`
        }),
        (0, $.jsx) (
          `path`,
          {
            d: `M50 18 L79 34.5 L79 65.5 L50 82 L21 65.5 L21 34.5Z`,
            className: `mod-badge-inner`
          }
        ),
        (0, $.jsx) (
          `text`,
          {
            x: `50`,
            y: `50`,
            dominantBaseline: `central`,
            textAnchor: `middle`,
            children: s.short
          }
        )
      ]
    }
  )
}
function Ra({
  n: e,
  max: t = 5,
  className: n = ``
}) {
  return (0, $.jsx) (
    `span`,
    {
      className: `stars ${ n }`,
      'aria-label': `${ e } of ${ t }`,
      children: Array.from({
        length: t
      }, (t, n) => (0, $.jsx) (`i`, {
        className: n < e ? `on` : ``
      }, n))
    }
  )
}
function za({
  line: e,
  main: t
}) {
  let n = ke[e.stat];
  return (0, $.jsxs) (
    `span`,
    {
      className: `stat-line${ t ? ` main` : `` }`,
      children: [
        (0, $.jsx) (`span`, {
          children: n?.name ?? e.stat
        }),
        (0, $.jsx) (`b`, {
          className: `num`,
          children: je(e.stat, e.value)
        }),
        !t &&
        (e.rolls ?? 1) > 1 &&
        (0, $.jsxs) (`small`, {
          className: `num`,
          children: [
            `×`,
            e.rolls
          ]
        })
      ]
    }
  )
}
function Ba({
  mod: e,
  selected: t,
  onClick: n,
  footer: r,
  compact: i,
  onCardId: a
}) {
  let s = Fe[e.type],
  c = H[e.rarity],
  l = (0, $.jsxs) (
    $.Fragment,
    {
      children: [
        (0, $.jsxs) (
          `span`,
          {
            className: `mod-tile-head`,
            children: [
              (0, $.jsx) (La, {
                type: e.type,
                rarity: e.rarity,
                level: e.level,
                size: i ? 30 : 38
              }),
              (0, $.jsxs) (
                `span`,
                {
                  className: `mod-tile-title`,
                  children: [
                    (0, $.jsx) (`b`, {
                      children: s.name
                    }),
                    (0, $.jsxs) (
                      `span`,
                      {
                        className: `row`,
                        style: {
                          gap: `0.35rem`
                        },
                        children: [
                          (0, $.jsx) (Ra, {
                            n: e.rarity
                          }),
                          (0, $.jsxs) (
                            `span`,
                            {
                              className: `num faint small`,
                              children: [
                                `+`,
                                e.level,
                                `/`,
                                c
                              ]
                            }
                          )
                        ]
                      }
                    )
                  ]
                }
              ),
              (0, $.jsxs) (
                `span`,
                {
                  className: `mod-tile-flags`,
                  children: [
                    e.locked &&
                    (0, $.jsx) (
                      `span`,
                      {
                        className: `tag`,
                        title: o(`common.locked`),
                        children: `🔒`
                      }
                    ),
                    e.equippedCardId &&
                    e.equippedCardId !== a &&
                    (0, $.jsx) (`span`, {
                      className: `tag pink`,
                      children: o(`mod.onACard`)
                    }),
                    e.status === `listed` &&
                    (0, $.jsx) (`span`, {
                      className: `tag lime`,
                      children: o(`common.listed`)
                    }),
                    e.status === `trading` &&
                    (0, $.jsx) (`span`, {
                      className: `tag lime`,
                      children: o(`common.inATrade`)
                    })
                  ]
                }
              )
            ]
          }
        ),
        (0, $.jsx) (za, {
          line: e.main,
          main: !0
        }),
        !i &&
        (0, $.jsx) (
          `span`,
          {
            className: `mod-tile-subs`,
            children: e.subs.length ? e.subs.map((e, t) => (0, $.jsx) (za, {
              line: e
            }, t)) : (0, $.jsx) (
              `span`,
              {
                className: `faint small`,
                children: o(`mod.noSubstats`)
              }
            )
          }
        ),
        r
      ]
    }
  ),
  u = `mod-tile${ t ? ` selected` : `` }${ i ? ` compact` : `` }`,
  d = {
    '--mod-r': Pe[e.rarity],
    '--mod-t': s.color
  };
  return n ? (0, $.jsx) (
    `button`,
    {
      type: `button`,
      className: u,
      style: d,
      onClick: n,
      'aria-pressed': t,
      children: l
    }
  ) : (0, $.jsx) (`div`, {
    className: u,
    style: d,
    children: l
  })
}
var Va = {
  1: `#c98a52`,
  2: `#c9d3e0`,
  3: `#ffd166`
};
function Ha({
  id: e,
  size: t = 32
}) {
  let n = `key-${ (0, l.useId) ().replace(/[^a-zA-Z0-9_-]/g, ``) }`;
  if (!we(e)) return (0, $.jsx) (`span`, {
    className: `item-icon`,
    style: {
      width: t,
      height: t
    }
  });
  let r = Se[e],
  i = Va[r.tier],
  a = r.cls ? _[r.cls].color : i,
  o;
  switch (r.kind) {
    case `consumable`:
      o = (0, $.jsxs) (
        $.Fragment,
        {
          children: [
            (0, $.jsx) (
              `path`,
              {
                d: `M34 22 h32 l6 10 v50 a6 6 0 0 1 -6 6 h-32 a6 6 0 0 1 -6 -6 v-50z`,
                fill: `#ff8a3d`
              }
            ),
            (0, $.jsx) (
              `rect`,
              {
                x: `40`,
                y: `12`,
                width: `20`,
                height: `10`,
                rx: `2`,
                fill: `#ffd166`
              }
            ),
            (0, $.jsx) (
              `path`,
              {
                d: `M50 40 L40 60 H50 L46 76 L62 52 H52 L56 40Z`,
                fill: `#2b1200`
              }
            )
          ]
        }
      );
      break;
    case `xp`:
      o = (0, $.jsxs) (
        $.Fragment,
        {
          children: [
            (0, $.jsx) (`rect`, {
              x: `14`,
              y: `14`,
              width: `72`,
              height: `72`,
              rx: `16`,
              fill: i
            }),
            (0, $.jsx) (`path`, {
              d: `M42 34 L68 50 L42 66Z`,
              fill: `#1a1a1f`
            })
          ]
        }
      );
      break;
    case `ascension`:
      o = (0, $.jsxs) (
        $.Fragment,
        {
          children: [
            (0, $.jsx) (
              `path`,
              {
                d: `M50 8 L86 22 L80 66 L50 92 L20 66 L14 22Z`,
                fill: a
              }
            ),
            (0, $.jsx) (
              `path`,
              {
                d: `M50 20 L74 30 L70 62 L50 80 L30 62 L26 30Z`,
                fill: `none`,
                stroke: i,
                strokeWidth: `5`
              }
            ),
            (0, $.jsx) (
              `text`,
              {
                x: `50`,
                y: `52`,
                dominantBaseline: `central`,
                textAnchor: `middle`,
                fontSize: `26`,
                fontWeight: `900`,
                fill: `#111`,
                children: [
                  ``,
                  `I`,
                  `II`,
                  `III`
                ][r.tier]
              }
            )
          ]
        }
      );
      break;
    case `boss`:
      o = (0, $.jsxs) (
        $.Fragment,
        {
          children: [
            (0, $.jsx) (
              `path`,
              {
                d: `M28 14 h44 v20 a22 22 0 0 1 -44 0z`,
                fill: `#ffd166`
              }
            ),
            (0, $.jsx) (
              `path`,
              {
                d: `M28 20 h-10 a10 12 0 0 0 10 16 M72 20 h10 a10 12 0 0 1 -10 16`,
                fill: `none`,
                stroke: `#ffd166`,
                strokeWidth: `5`
              }
            ),
            (0, $.jsx) (`rect`, {
              x: `44`,
              y: `56`,
              width: `12`,
              height: `14`,
              fill: `#e0a400`
            }),
            (0, $.jsx) (
              `rect`,
              {
                x: `30`,
                y: `70`,
                width: `40`,
                height: `14`,
                rx: `3`,
                fill: `#9b6b00`
              }
            )
          ]
        }
      );
      break;
    case `mod`:
      o = (0, $.jsxs) (
        $.Fragment,
        {
          children: [
            (0, $.jsx) (`path`, {
              d: `M50 8 L80 40 L50 92 L20 40Z`,
              fill: `#7fe0c8`
            }),
            (0, $.jsx) (
              `path`,
              {
                d: `M20 40 H80 M50 8 L38 40 L50 92 L62 40Z`,
                fill: `none`,
                stroke: `#1d5f52`,
                strokeWidth: `3`
              }
            )
          ]
        }
      );
      break;
    case `key`:
      o = (0, $.jsxs) (
        $.Fragment,
        {
          children: [
            (0, $.jsx) (
              `defs`,
              {
                children: (0, $.jsxs) (
                  `linearGradient`,
                  {
                    id: n,
                    gradientUnits: `userSpaceOnUse`,
                    x1: `10`,
                    y1: `12`,
                    x2: `88`,
                    y2: `90`,
                    children: [
                      (0, $.jsx) (`stop`, {
                        offset: `0`,
                        stopColor: `#ff7ad9`
                      }),
                      (0, $.jsx) (`stop`, {
                        offset: `0.5`,
                        stopColor: `#ffd36b`
                      }),
                      (0, $.jsx) (`stop`, {
                        offset: `1`,
                        stopColor: `#6bd5ff`
                      })
                    ]
                  }
                )
              }
            ),
            (0, $.jsxs) (
              `g`,
              {
                fill: `none`,
                stroke: `url(#${ n })`,
                strokeWidth: `9`,
                strokeLinecap: `round`,
                children: [
                  (0, $.jsx) (`circle`, {
                    cx: `32`,
                    cy: `34`,
                    r: `17`
                  }),
                  (0, $.jsx) (`path`, {
                    d: `M44 46 L84 86 M66 68 L74 60 M74 76 L82 68`
                  })
                ]
              }
            )
          ]
        }
      )
  }
  return (0, $.jsxs) (
    `svg`,
    {
      className: `item-icon`,
      viewBox: `0 0 100 100`,
      width: t,
      height: t,
      role: `img`,
      'aria-label': r.name,
      children: [
        (0, $.jsx) (`title`, {
          children: r.name
        }),
        o
      ]
    }
  )
}
var Ua = e => Jn.find(t => e.startsWith(t.name)),
Wa = {
  'Daily quests': `/quests`,
  Quests: `/quests`,
  Tower: `/tower`,
  'Tower milestones': `/tower`,
  'Tower bosses': `/tower`,
  'Weekly Tournament': `/weekly`,
  Salvage: `/mods`,
  Quicksell: `/collection`,
  Market: `/market`
};
function Ga(e) {
  if (!we(e)) return null;
  let t = Se[e].sources,
  n = t.map(Ua).find(Boolean);
  if (n) return {
    label: n.name,
    to: `/farm#${ e }`
  };
  let r = t.find(e => Wa[e]);
  return r ? {
    label: pa(r),
    to: Wa[r]
  }
   : null
}
function Ka({
  id: e,
  qty: t,
  need: n,
  link: r
}) {
  let i = we(e) ? da(e) : e,
  a = n != null &&
  t < n,
  s = (0, $.jsxs) (
    $.Fragment,
    {
      children: [
        (0, $.jsx) (Ha, {
          id: e,
          size: 26
        }),
        (0, $.jsx) (
          `span`,
          {
            className: `num`,
            children: n == null ? `×${ t.toLocaleString() }` : `${ t.toLocaleString() }/${ n.toLocaleString() }`
          }
        )
      ]
    }
  );
  return r ? (0, $.jsx) (
    c,
    {
      to: Ga(e) ?.to ?? `/farm#${ e }`,
      className: `item-chip${ a ? ` short` : `` }`,
      title: o(`item.whereToFarm`, {
        name: i
      }),
      children: s
    }
  ) : (0, $.jsx) (
    `span`,
    {
      className: `item-chip${ a ? ` short` : `` }`,
      title: i,
      children: s
    }
  )
}
function qa({
  eidolon: e,
  vertical: t
}) {
  return (0, $.jsx) (
    `span`,
    {
      className: `eidolon-pips${ t ? ` vertical` : `` }`,
      title: `Eidolon E${ e }`,
      'aria-label': `Eidolon ${ e } of 6`,
      children: Array.from({
        length: 6
      }, (t, n) => (0, $.jsx) (`i`, {
        className: n < e ? `on` : ``
      }, n))
    }
  )
}
function Ja({
  ascension: e
}) {
  return (0, $.jsx) (
    `span`,
    {
      className: `asc-stars`,
      title: `Ascension ${ e }/${ gt }`,
      'aria-label': `Ascension ${ e } of ${ gt }`,
      children: Array.from({
        length: gt
      }, (t, n) => (0, $.jsx) (`i`, {
        className: n < e ? `on` : ``
      }, n))
    }
  )
}
export {
  Ri as $,
  we as $n,
  pn as $t,
  ea as A,
  Fe as An,
  yr as At,
  Ki as B,
  Ye as Bn,
  fr as Bt,
  Ca as C,
  mt as Cn,
  u as Cr,
  Er as Ct,
  _a as D,
  it as Dn,
  qr as Dt,
  ha as E,
  ft as En,
  Kr as Et,
  Sa as F,
  Xe as Fn,
  Vr as Ft,
  Mi as G,
  je as Gn,
  Qn as Gt,
  zi as H,
  Ge as Hn,
  ur as Ht,
  xa as I,
  ot as In,
  Pr as It,
  Li as J,
  I as Jn,
  Wn as Jt,
  Pi as K,
  Se as Kn,
  Vn as Kt,
  va as L,
  rt as Ln,
  Cr as Lt,
  na as M,
  Ne as Mn,
  Ir as Mt,
  pa as N,
  Pe as Nn,
  Lr as Nt,
  wa as O,
  at as On,
  Ur as Ot,
  ga as P,
  Me as Pn,
  Br as Pt,
  Ii as Q,
  z as Qn,
  cn as Qt,
  ya as R,
  Qe as Rn,
  br as Rt,
  ua as S,
  vt as Sn,
  te as Sr,
  Sr as St,
  Ea as T,
  ct as Tn,
  Gr as Tt,
  ji as U,
  Oe as Un,
  Hn as Ut,
  Qi as V,
  qe as Vn,
  dr as Vt,
  Ni as W,
  ke as Wn,
  Gn as Wt,
  pi as X,
  Ee as Xn,
  Yn as Xt,
  mi as Y,
  ve as Yn,
  Zn as Yt,
  Si as Z,
  L as Zn,
  Xn as Zt,
  Ta as _,
  Et as _n,
  h as _r,
  Wr as _t,
  La as a,
  Jt as an,
  se as ar,
  xi as at,
  ma as b,
  Dt as bn,
  f as br,
  wr as bt,
  Ra as c,
  rn as cn,
  E as cr,
  bi as ct,
  ia as d,
  ht as dn,
  _e as dr,
  ci as dt,
  sn as en,
  De as er,
  ki as et,
  ca as f,
  Ot as fn,
  j as fr,
  ui as ft,
  ta as g,
  wt as gn,
  de as gr,
  mr as gt,
  Da as h,
  Ct as hn,
  me as hr,
  li as ht,
  Ha as i,
  kt as in ,
  _ as ir,
  Oi as it,
  ra as j,
  H as jn,
  _r as jt,
  $i as k,
  B as kn,
  vr as kt,
  Ga as l,
  $t as ln,
  oe as lr,
  ai as lt,
  Oa as m,
  St as mn,
  ue as mr,
  fi as mt,
  qa as n,
  kn as nn,
  R as nr,
  Di as nt,
  Ba as o,
  nn as on,
  he as or,
  Ai as ot,
  la as p,
  gt as pn,
  ge as pr,
  di as pt,
  Fi as q,
  Ce as qn,
  Kn as qt,
  Ka as r,
  Bn as rn,
  g as rr,
  Ei as rt,
  Ia as s,
  zt as sn,
  S as sr,
  Ci as st,
  Ja as t,
  mn as tn,
  be as tr,
  Ti as tt,
  Fa as u,
  en as un,
  ce as ur,
  ii as ut,
  oa as v,
  _t as vn,
  ne as vr,
  zr as vt,
  da as w,
  dt as wn,
  Tr as wt,
  aa as x,
  yt as xn,
  p as xr,
  jr as xt,
  sa as y,
  xt as yn,
  m as yr,
  Rr as yt,
  fa as z,
  $e as zn,
  pr as zt
};
