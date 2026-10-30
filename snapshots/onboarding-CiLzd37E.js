import { r as e } from "./rolldown-runtime-XKyaHtl9.js";
import {
  $ as t,
  H as n,
  Q as r,
  Z as i,
  et as a,
  f as o,
  l as s,
  m as c,
  z as l,
} from "./overlays-DU6_1PFU.js";
import { B as u, J as d, W as f, c as p, v as m } from "./ui-B1_fb4jE.js";
import { M as h, g, gr as _, rr as v } from "./rpg-CXlWCd94.js";
import { n as y } from "./PackArt-CY8OciGg.js";
import { E as b, T as x, v as S, x as C } from "./GachaCard-DUwnx9uc.js";
import { n as w } from "./index-DtcRi9Y9.js";
import { t as T } from "./BattleBoard-Dznt4VO3.js";
import { n as E } from "./LocalFight-CZPlsJix.js";
import { t as D } from "./TeamEditor-BUZfztPU.js";
var O = e(a(), 1),
  k = t(),
  A = r(),
  j = 6;
function M(e) {
  let [t, n] = (0, O.useState)(null);
  return (
    (0, O.useEffect)(() => {
      if (!e) return n(null);
      let t = 0,
        r = ``,
        i = () => {
          let t = document.querySelector(e)?.getBoundingClientRect(),
            i =
              t && t.width > 0
                ? {
                    left: t.left - j,
                    top: t.top - j,
                    width: t.width + 12,
                    height: t.height + 12,
                  }
                : null,
            a = i
              ? `${Math.round(i.left)},${Math.round(i.top)},${Math.round(i.width)},${Math.round(i.height)}`
              : ``;
          a !== r && ((r = a), n(i));
        },
        a = () => {
          (i(), (t = requestAnimationFrame(a)));
        };
      a();
      let o = window.setInterval(i, 250);
      return (
        window.addEventListener(`scroll`, i, !0),
        window.addEventListener(`resize`, i),
        () => {
          (cancelAnimationFrame(t),
            clearInterval(o),
            window.removeEventListener(`scroll`, i, !0),
            window.removeEventListener(`resize`, i));
        }
      );
    }, [e]),
    t
  );
}
function N({ step: e, block: t }) {
  let n = M(e?.target),
    r = M(e?.area),
    [i, a] = (0, O.useState)(null),
    o = (0, O.useRef)(null),
    c = (0, O.useRef)(null),
    l = !!(e || t),
    u = e
      ? `${e.target ?? ``}|${e.area ?? ``}|${String(e.title ?? ``)}|${e.next?.label ?? ``}`
      : ``,
    d = (0, O.useRef)(null);
  if (
    ((0, O.useEffect)(() => {
      if (!e?.target || !n) return;
      let t = n.top + window.scrollY,
        r = d.current;
      if (r && r.target === e.target && Math.abs(r.docTop - t) < 40) return;
      d.current = { target: e.target, docTop: t };
      let i = document.querySelector(e.target),
        a = (e) => e.top < 70 || e.top + e.height > window.innerHeight - 70;
      if (!i || !a(n)) return;
      i.scrollIntoView({ block: `center`, behavior: `smooth` });
      let o = window.setTimeout(
        () =>
          a(i.getBoundingClientRect()) && i.scrollIntoView({ block: `center` }),
        700,
      );
      return () => clearTimeout(o);
    }, [e?.target, n]),
    (0, O.useLayoutEffect)(() => {
      let t = o.current?.getBoundingClientRect();
      if (!e || !t) return a(null);
      let r = window.innerWidth,
        i = window.innerHeight;
      if (!n) return a({ left: (r - t.width) / 2, top: (i - t.height) / 2 });
      let s = {
          right: n.left + n.width + 14 + t.width < r - 8,
          left: n.left - 14 - t.width > 8,
          bottom: n.top + n.height + 14 + t.height < i - 8,
          top: n.top - 14 - t.height > 8,
        },
        c =
          [e.place ?? `right`, `right`, `bottom`, `left`, `top`].find(
            (e) => s[e],
          ) ?? `bottom`,
        l = (e) => Math.max(8, Math.min(r - t.width - 8, e)),
        u = (e) => Math.max(8, Math.min(i - t.height - 8, e)),
        d = n.left + n.width / 2 - t.width / 2,
        f = n.top + n.height / 2 - t.height / 2;
      a(
        c === `right`
          ? { left: n.left + n.width + 14, top: u(f) }
          : c === `left`
            ? { left: n.left - 14 - t.width, top: u(f) }
            : c === `top`
              ? { left: l(d), top: n.top - 14 - t.height }
              : { left: l(d), top: u(n.top + n.height + 14) },
      );
    }, [n, e]),
    (0, O.useEffect)(() => {
      if (!l) return;
      let t = (t) => {
          if (!(t instanceof Node)) return !1;
          if (o.current?.contains(t)) return !0;
          let n = e?.area
            ? document.querySelector(e.area)
            : e?.target
              ? document.querySelector(e.target)
              : null;
          return !!(n && n.contains(t));
        },
        n = (n) => {
          if (!t(n.target) || (n.key === `Tab` && !e?.area)) {
            if (n.key === `Tab`) {
              let t = [
                e?.target ? document.querySelector(e.target) : null,
                c.current,
              ].filter(Boolean);
              (n.preventDefault(),
                t.length &&
                  t[
                    (t.findIndex(
                      (e) =>
                        e === document.activeElement ||
                        e.contains(document.activeElement),
                    ) +
                      1) %
                      t.length
                  ].focus());
            } else n.preventDefault();
            n.stopPropagation();
          }
        };
      return (
        window.addEventListener(`keydown`, n, !0),
        () => window.removeEventListener(`keydown`, n, !0)
      );
    }, [l, u]),
    (0, O.useEffect)(() => {
      if (!e) return;
      let t = window.setTimeout(() => {
        e.next
          ? c.current?.focus()
          : e.target &&
            document.querySelector(e.target)?.focus?.({ preventScroll: !0 });
      }, 60);
      return () => clearTimeout(t);
    }, [u]),
    !l)
  )
    return null;
  let f = e?.dim ? `rgb(8 5 7 / 0.6)` : `transparent`,
    p = e?.area ? r : e?.target ? n : null,
    m = p
      ? [
          { left: 0, top: 0, width: `100vw`, height: Math.max(0, p.top) },
          {
            left: 0,
            top: p.top + p.height,
            width: `100vw`,
            height: `calc(100vh - ${p.top + p.height}px)`,
          },
          { left: 0, top: p.top, width: Math.max(0, p.left), height: p.height },
          {
            left: p.left + p.width,
            top: p.top,
            width: `calc(100vw - ${p.left + p.width}px)`,
            height: p.height,
          },
        ]
      : [{ left: 0, top: 0, width: `100vw`, height: `100vh` }];
  return (0, k.createPortal)(
    (0, A.jsxs)(`div`, {
      className: `coach`,
      "aria-live": `polite`,
      children: [
        m.map((e, t) =>
          (0, A.jsx)(
            `div`,
            {
              className: `coach-block`,
              style: { ...e, background: f },
              onPointerDown: (e) => e.preventDefault(),
            },
            t,
          ),
        ),
        n &&
          (0, A.jsx)(`div`, {
            className: `coach-ring`,
            style: n,
            "aria-hidden": !0,
          }),
        e &&
          (0, A.jsxs)(`div`, {
            ref: o,
            className: `coach-note${i ? `` : ` measuring`}`,
            style: i ?? { left: -9999, top: 0 },
            role: `dialog`,
            "aria-label": s(`coach.tutorial`),
            children: [
              e.title &&
                (0, A.jsx)(`b`, {
                  className: `coach-title`,
                  children: e.title,
                }),
              (0, A.jsx)(`div`, { className: `coach-text`, children: e.text }),
              e.next &&
                (0, A.jsx)(`button`, {
                  ref: c,
                  type: `button`,
                  className: `btn small`,
                  onClick: e.next.onClick,
                  children: e.next.label,
                }),
            ],
          }),
      ],
    }),
    document.body,
  );
}
var P = [
  { key: `pack`, label: `ob.step.pack` },
  { key: `team`, label: `ob.step.team` },
  { key: `battle`, label: `ob.step.battle` },
  { key: `rules`, label: `ob.step.rules` },
];
function F({ next: e }) {
  let t = e ? P.findIndex((t) => t.key === e) : P.length;
  return (0, A.jsx)(`ol`, {
    className: `ob-progress`,
    children: P.map((e, n) =>
      (0, A.jsxs)(
        `li`,
        {
          className: n < t ? `done` : n === t ? `now` : ``,
          children: [
            (0, A.jsx)(`span`, {
              className: `num`,
              children: n < t ? `✓` : n + 1,
            }),
            s(e.label),
          ],
        },
        e.key,
      ),
    ),
  });
}
function I({ state: e }) {
  let t = i(),
    [n, r] = (0, O.useState)(null),
    [a, o] = (0, O.useState)(!1),
    l = d({ queryKey: [`catalog`], queryFn: c.packs.catalog, staleTime: 3e5 }),
    f = d({
      queryKey: [`inventory`],
      queryFn: c.packs.inventory,
    }).data?.packs.find((t) => t.id === e.starter.packId),
    p = u((e) => c.packs.open(e.id).then((t) => ({ owned: e, result: t }))),
    h = f?.pack ??
      l.data?.find((e) => e.slug === `starter`) ?? {
        slug: `starter`,
        name: s(`ob.starterPack`),
        cardCount: 5,
      };
  (0, O.useEffect)(() => {
    if (!n) return;
    let e = setInterval(
      () => o(!!document.querySelector(`[data-coach="continue"]`)),
      200,
    );
    return () => clearInterval(e);
  }, [n]);
  let _ = n
    ? a
      ? {
          target: `[data-coach="continue"]`,
          title: s(`ob.coach.yours`),
          text: s(`ob.coach.yoursText`),
          place: `left`,
        }
      : null
    : f
      ? {
          target: `[data-coach="open-starter"]`,
          title: s(`ob.coach.firstPack`),
          text: s(`ob.coach.firstPackText`),
          dim: !0,
        }
      : null;
  return (0, A.jsxs)(`section`, {
    className: `ob-stage ob-pack`,
    children: [
      (0, A.jsx)(`div`, {
        className: `ob-pack-art`,
        children: (0, A.jsx)(y, { pack: h }),
      }),
      (0, A.jsxs)(`div`, {
        className: `ob-pack-copy`,
        children: [
          (0, A.jsx)(`h2`, { children: s(`ob.yourStarter`) }),
          (0, A.jsx)(`p`, {
            className: `muted`,
            children: s(`ob.starterText`),
          }),
          (0, A.jsx)(`div`, {
            className: `ob-class-row`,
            children: v.map((e) =>
              (0, A.jsxs)(
                `span`,
                {
                  className: `ob-class`,
                  style: { "--cls": C(e) },
                  children: [
                    (0, A.jsx)(S, { cls: e, size: 18 }),
                    (0, A.jsx)(`b`, { children: g(e).name }),
                    (0, A.jsx)(`small`, { children: g(e).identity }),
                  ],
                },
                e,
              ),
            ),
          }),
          (0, A.jsx)(`button`, {
            type: `button`,
            className: `btn big`,
            disabled: !f || p.isPending,
            onClick: () => f && p.mutate(f, { onSuccess: r }),
            "data-coach": `open-starter`,
            children: (0, A.jsx)(m, {
              labels: [s(`reveal.opening`), s(`ob.openStarter`)],
              children: p.isPending ? s(`reveal.opening`) : s(`ob.openStarter`),
            }),
          }),
        ],
      }),
      n &&
        (0, A.jsx)(w, {
          reveal: n,
          closable: !1,
          onClose: () => void 0,
          finish: (0, A.jsx)(`button`, {
            type: `button`,
            className: `btn`,
            "data-coach": `continue`,
            onClick: () => t.invalidateQueries({ queryKey: [`onboarding`] }),
            children: s(`ob.continueTeam`),
          }),
        }),
      (0, A.jsx)(N, { step: _ }),
    ],
  });
}
var L = {
  tank: `ob.pitch.tank`,
  dps: `ob.pitch.dps`,
  support: `ob.pitch.support`,
  cc: `ob.pitch.cc`,
};
function R({ state: e }) {
  let t = i(),
    n = e.starter.cards,
    [r, a] = (0, O.useState)(() => n.filter((t) => e.team.includes(t.id))),
    o = u(() => c.onboarding.setTeam(r.map((e) => e.id)), {
      invalidate: [[`onboarding`], [`tower`]],
    }),
    l = v.find((e) => !r.some((t) => b(t).cls === e)),
    d = l
      ? n
          .filter((e) => b(e).cls === l && !r.some((t) => t.id === e.id))
          .sort((e, t) => x(t).power - x(e).power)[0]
      : void 0,
    f =
      r.length < 4 && d && l
        ? {
            target: `[data-coach="pick-${d.id}"]`,
            title: s(`ob.coach.addA`, { cls: g(l).name }),
            text: `${s(L[l])} ${s(`ob.coach.clickToAdd`, { name: d.player.username })}`,
            place: `left`,
          }
        : r.length >= 4
          ? {
              target: `[data-coach="save-team"]`,
              title: s(`ob.coach.fullTeam`),
              text: s(`ob.coach.fullTeamText`),
              place: `right`,
            }
          : null;
  return (0, A.jsxs)(`section`, {
    className: `ob-stage`,
    children: [
      (0, A.jsx)(D, {
        team: r,
        onTeamChange: a,
        pool: n,
        guided: !0,
        dirty: !0,
        saving: o.isPending,
        saveLabel: s(`ob.saveStart`),
        onSave: () =>
          o.mutate(void 0, {
            onSuccess: (e) => t.setQueryData([`onboarding`], e),
          }),
      }),
      (0, A.jsx)(N, { step: o.isPending ? null : f, block: o.isPending }),
    ],
  });
}
var z = [
  { key: `field`, target: `[data-coach="field"]`, place: `right` },
  { key: `order`, target: `[data-coach="order"]`, place: `bottom` },
  { key: `details`, target: `[data-coach="details"]`, place: `left` },
  { key: `sp`, target: `[data-coach="sp"]`, place: `top` },
];
function B({ start: e, onDone: t }) {
  let [n, r] = (0, O.useState)(null),
    [i, a] = (0, O.useState)(null),
    o = (0, O.useMemo)(
      () => ({
        allies: e.allies,
        enemies: e.enemies,
        seed: e.seed,
        mod: null,
        aiLevel: e.aiLevel,
      }),
      [e],
    ),
    l = async (t) => {
      try {
        let n = await c.onboarding.finishBattle(e.id, t.inputs);
        r({ won: n.won });
      } catch (e) {
        a(e instanceof Error ? e.message : s(`common.somethingWrong`));
      }
    },
    [u, d] = (0, O.useState)(0),
    f = E(o, { manual: !0, onOver: l, paused: u < z.length }),
    { c: p, fx: m } = f,
    [v, y] = (0, O.useState)(`basic`),
    [b, x] = (0, O.useState)({ dpsDown: !1, broke: !1 }),
    [S, C] = (0, O.useState)(null),
    w = (e) => p.units.enemy.findIndex((t) => t.f.cls === e),
    D = w(`dps`),
    k = w(`tank`),
    j = (e) => e >= 0 && p.units.enemy[e].hp > 0,
    M = j(D) ? D : j(k) ? k : p.units.enemy.findIndex((e) => e.hp > 0);
  (0, O.useEffect)(() => {
    m.playing ||
      (!b.dpsDown && D >= 0 && !j(D) && !p.winner
        ? (x((e) => ({ ...e, dpsDown: !0 })), C(`dpsDown`))
        : !b.broke &&
          p.units.enemy.some((e) => e.broken) &&
          (x((e) => ({ ...e, broke: !0 })), C(`broke`)));
  });
  let P = !m.playing && !p.winner && u >= z.length && !S,
    F =
      P && p.waitingFor === `ally` && p.current
        ? p.units.ally[p.current.index]
        : null,
    I = p.inputs.length,
    L = F ? _(F.f) : null,
    R = !!(F && L && I >= 1 && p.sp.ally >= 2),
    B = F
      ? R
        ? {
            kind: `skill`,
            target:
              L.targets === `none`
                ? null
                : L.targets === `ally`
                  ? V(p)
                  : { side: `enemy`, index: M },
          }
        : { kind: `basic`, target: { side: `enemy`, index: M } }
      : null,
    H = b.dpsDown,
    U = (e, t) =>
      B
        ? H
          ? t == null ||
            t.side === `ally` ||
            (t.side === `enemy` && t.index === M)
          : e === B.kind
            ? B.target == null ||
              (t != null &&
                t.side === B.target.side &&
                t.index === B.target.index)
            : !1
        : !1,
    W = M >= 0 ? p.units.enemy[M].f.name : ``,
    G = null;
  if (u < z.length) {
    let e = z[u];
    G = {
      target: e.target,
      title: s(`ob.intro.${e.key}`),
      text: s(`ob.intro.${e.key}.text`),
      place: e.place,
      next: {
        label: u === z.length - 1 ? s(`ob.start`) : s(`ob.next`),
        onClick: () => d((e) => e + 1),
      },
    };
  } else if (S === `dpsDown`)
    G = {
      target: `[data-coach="field"]`,
      title: s(`ob.coach.dpsDown`),
      text: s(`ob.coach.dpsDownText`),
      place: `right`,
      next: { label: s(`ob.gotIt`), onClick: () => C(null) },
    };
  else if (S === `broke`) {
    let e = p.units.enemy.find((e) => e.broken);
    G = {
      target: e
        ? `[data-coach="unit-enemy-${e.ref.index}"]`
        : `[data-coach="field"]`,
      title: s(`ob.coach.broken`),
      text: s(`ob.coach.brokenText`),
      place: `right`,
      next: { label: s(`ob.nice`), onClick: () => C(null) },
    };
  } else if (F && B && L) {
    let e = `${F.f.name} (${g(F.f.cls).name})`,
      t = h(F.f.skill).name;
    if (H)
      G = {
        target: `[data-coach="unit-enemy-${M}"]`,
        area: `.bt`,
        title: s(`ob.coach.turnOf`, { who: e }),
        text: s(`ob.coach.attackFree`, { name: W, skill: t }),
        place: `right`,
      };
    else if (B.kind === `skill` && v !== `skill`)
      G = {
        target: `[data-coach="skill"]`,
        title: s(`ob.coach.use`, { skill: t }),
        text: `${h(F.f.skill).text} ${s(`ob.coach.costsSp`)}`,
        place: `top`,
      };
    else if (B.target) {
      let n = p.units[B.target.side][B.target.index];
      G = {
        target: `[data-coach="unit-${B.target.side}-${B.target.index}"]`,
        title:
          B.kind === `skill`
            ? s(`ob.coach.pickTarget`, { skill: t })
            : s(`ob.coach.turnOf`, { who: e }),
        text:
          B.kind === `skill`
            ? s(`ob.coach.clickName`, { name: n.f.name })
            : s(I === 0 ? `ob.coach.hitDps` : `ob.coach.keepPressure`, {
                name: n.f.name,
              }),
        place: `right`,
      };
    }
  }
  let K = !G && !p.winner;
  return (0, A.jsxs)(`section`, {
    className: `ob-stage`,
    children: [
      (0, A.jsx)(T, {
        c: p,
        fx: m,
        me: `ally`,
        canAct: !!F,
        onMove: (e, t) => {
          U(e, t) && (y(`basic`), f.act(e, t));
        },
        onModeChange: y,
        allow: U,
        info: (0, A.jsx)(`span`, {
          className: `faint`,
          children: s(`ob.guided`),
        }),
        waitingText: F || !P ? `` : s(`ob.enemyTurn`),
        outcome: (0, A.jsx)(`div`, {
          className: `battle-result ${n?.won ? `won` : n ? `lost` : ``}`,
          children: i
            ? (0, A.jsx)(`p`, { children: i })
            : n
              ? n.won
                ? (0, A.jsxs)(A.Fragment, {
                    children: [
                      (0, A.jsx)(`h3`, { children: s(`ob.won`) }),
                      (0, A.jsx)(`button`, {
                        type: `button`,
                        className: `btn big`,
                        onClick: () => t(!0),
                        "data-coach": `finish`,
                        children: s(`ob.finish`),
                      }),
                    ],
                  })
                : (0, A.jsxs)(A.Fragment, {
                    children: [
                      (0, A.jsx)(`h3`, { children: s(`ob.defeated`) }),
                      (0, A.jsx)(`p`, {
                        className: `faint`,
                        children: s(`ob.defeatedTip`),
                      }),
                      (0, A.jsx)(`button`, {
                        type: `button`,
                        className: `btn`,
                        onClick: () => t(!1),
                        children: s(`common.tryAgain`),
                      }),
                    ],
                  })
              : (0, A.jsx)(`p`, {
                  className: `faint`,
                  children: s(`ob.checking`),
                }),
        }),
      }),
      (0, A.jsx)(N, {
        step:
          p.winner && !m.playing
            ? n?.won
              ? {
                  target: `[data-coach="finish"]`,
                  title: s(`ob.victory`),
                  text: s(`ob.victoryText`),
                  place: `top`,
                }
              : null
            : G,
        block: K,
      }),
    ],
  });
}
function V(e) {
  return e.units.ally
    .filter((e) => e.hp > 0)
    .reduce((e, t) => (t.hp / t.f.maxHp < e.hp / e.f.maxHp ? t : e)).ref;
}
function H({ onWon: e }) {
  let [t, n] = (0, O.useState)(0),
    r = d({
      queryKey: [`onboarding`, `battle`, t],
      queryFn: c.onboarding.startBattle,
      staleTime: 1 / 0,
      gcTime: 0,
      retry: !1,
    });
  return r.error
    ? (0, A.jsx)(`p`, { className: `faint`, children: r.error.message })
    : r.data
      ? (0, A.jsx)(
          B,
          { start: r.data, onDone: (t) => (t ? e() : n((e) => e + 1)) },
          r.data.id,
        )
      : (0, A.jsx)(`div`, {
          className: `ob-loading faint`,
          children: s(`ob.settingUp`),
        });
}
var U = [`macros`, `accounts`, `boosting`, `rmt`, `bugs`, `chat`];
function W({ onAgreed: e }) {
  let [t, n] = (0, O.useState)(!1),
    r = u(() => c.onboarding.acceptRules());
  return (0, A.jsxs)(`section`, {
    className: `ob-stage ob-rules`,
    children: [
      (0, A.jsx)(`h2`, { children: s(`ob.rules.title`) }),
      (0, A.jsx)(`p`, { className: `muted`, children: s(`ob.rules.lead`) }),
      (0, A.jsx)(`ul`, {
        className: `ob-rules-list`,
        children: U.map((e) =>
          (0, A.jsxs)(
            `li`,
            {
              children: [
                (0, A.jsx)(`b`, { children: s(`about.rule.${e}`) }),
                (0, A.jsx)(`span`, {
                  className: `muted`,
                  children: s(`ob.rules.${e}`),
                }),
              ],
            },
            e,
          ),
        ),
      }),
      (0, A.jsxs)(`p`, {
        className: `faint small`,
        children: [
          s(`ob.rules.consequence`),
          ` `,
          (0, A.jsx)(l, {
            to: `/about?s=rules`,
            target: `_blank`,
            rel: `noreferrer`,
            children: s(`ob.rules.full`),
          }),
        ],
      }),
      (0, A.jsxs)(`label`, {
        className: `ob-rules-pledge`,
        children: [
          (0, A.jsx)(`input`, {
            type: `checkbox`,
            checked: t,
            onChange: (e) => n(e.target.checked),
          }),
          (0, A.jsx)(`span`, { children: s(`ob.rules.pledge`) }),
        ],
      }),
      (0, A.jsx)(`div`, {
        className: `row`,
        children: (0, A.jsx)(`button`, {
          type: `button`,
          className: `btn`,
          disabled: !t || r.isPending,
          onClick: () => r.mutate(void 0, { onSuccess: e }),
          children: s(`ob.rules.agree`),
        }),
      }),
    ],
  });
}
function G() {
  return (0, A.jsxs)(`section`, {
    className: `ob-stage ob-done`,
    children: [
      (0, A.jsx)(`h2`, { children: s(`ob.ready`) }),
      (0, A.jsx)(`p`, { className: `muted`, children: s(`ob.readyText`) }),
      (0, A.jsxs)(`div`, {
        className: `ob-next`,
        children: [
          (0, A.jsxs)(l, {
            to: `/tower`,
            className: `ob-next-tile tower`,
            children: [
              (0, A.jsx)(`b`, { children: s(`home.climb`) }),
              (0, A.jsx)(`span`, { children: s(`ob.next.tower`) }),
            ],
          }),
          (0, A.jsxs)(l, {
            to: `/packs`,
            className: `ob-next-tile packs`,
            children: [
              (0, A.jsx)(`b`, { children: s(`home.openPacks`) }),
              (0, A.jsx)(`span`, { children: s(`ob.next.packs`) }),
            ],
          }),
          (0, A.jsxs)(l, {
            to: `/farm`,
            className: `ob-next-tile maps`,
            children: [
              (0, A.jsx)(`b`, { children: s(`ob.runMaps`) }),
              (0, A.jsx)(`span`, { children: s(`ob.next.maps`) }),
            ],
          }),
          (0, A.jsxs)(l, {
            to: `/team`,
            className: `ob-next-tile team`,
            children: [
              (0, A.jsx)(`b`, { children: s(`ob.editTeam`) }),
              (0, A.jsx)(`span`, { children: s(`ob.next.team`) }),
            ],
          }),
        ],
      }),
    ],
  });
}
function K() {
  let e = i(),
    { data: t } = f(),
    { t: r } = o(),
    a = d({
      queryKey: [`onboarding`],
      queryFn: c.onboarding.state,
      enabled: !!t,
    }),
    [s, l] = (0, O.useState)(!1),
    u = a.data?.next ?? null;
  async function m() {
    await Promise.all(
      [`onboarding`, `me`, `tower`, `cards`].map((t) =>
        e.invalidateQueries({ queryKey: [t] }),
      ),
    );
  }
  async function h() {
    (l(!0),
      await Promise.all(
        [`onboarding`, `me`].map((t) => e.invalidateQueries({ queryKey: [t] })),
      ));
  }
  return t?.onboarded && !s && a.data && !a.data.next
    ? (0, A.jsx)(n, { to: `/packs`, replace: !0 })
    : (0, A.jsx)(p, {
        icon: `✦`,
        title: r(`ob.title`),
        subtitle: r(`ob.subtitle`),
        side: (0, A.jsx)(F, { next: u }),
        children: a.data
          ? u === `pack`
            ? (0, A.jsx)(I, { state: a.data })
            : u === `team`
              ? (0, A.jsx)(R, { state: a.data }, `team`)
              : u === `battle` && !s
                ? (0, A.jsx)(H, { onWon: m })
                : u === `rules` && !s
                  ? (0, A.jsx)(W, { onAgreed: h })
                  : (0, A.jsx)(G, {})
          : (0, A.jsx)(`div`, {
              className: `ob-loading faint`,
              children: r(`common.loadingDots`),
            }),
      });
}
export { K as WelcomePage };
