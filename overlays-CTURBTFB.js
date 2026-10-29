import {
  r as e,
  t
}
from'./rolldown-runtime-XKyaHtl9.js';
var n = t(
  (
    e => {
      var t = Symbol.for(`react.transitional.element`),
      n = Symbol.for(`react.portal`),
      r = Symbol.for(`react.fragment`),
      i = Symbol.for(`react.strict_mode`),
      a = Symbol.for(`react.profiler`),
      o = Symbol.for(`react.consumer`),
      s = Symbol.for(`react.context`),
      c = Symbol.for(`react.forward_ref`),
      l = Symbol.for(`react.suspense`),
      u = Symbol.for(`react.memo`),
      d = Symbol.for(`react.lazy`),
      f = Symbol.for(`react.activity`),
      p = Symbol.for(`react.view_transition`),
      m = Symbol.iterator;
      function h(e) {
        return typeof e != `object` ||
        !e ? null : (e = m && e[m] || e[`@@iterator`], typeof e == `function` ? e : null)
      }
      var g = {
        isMounted: function () {
          return !1
        },
        enqueueForceUpdate: function () {
        },
        enqueueReplaceState: function () {
        },
        enqueueSetState: function () {
        }
      },
      _ = Object.assign,
      ee = {};
      function v(e, t, n) {
        this.props = e,
        this.context = t,
        this.refs = ee,
        this.updater = n ||
        g
      }
      v.prototype.isReactComponent = {},
      v.prototype.setState = function (e, t) {
        if (typeof e != `object` && typeof e != `function` && e != null) throw Error(
          `takes an object of state variables to update or a function which returns an object of state variables.`
        );
        this.updater.enqueueSetState(this, e, t, `setState`)
      },
      v.prototype.forceUpdate = function (e) {
        this.updater.enqueueForceUpdate(this, e, `forceUpdate`)
      };
      function y() {
      }
      y.prototype = v.prototype;
      function b(e, t, n) {
        this.props = e,
        this.context = t,
        this.refs = ee,
        this.updater = n ||
        g
      }
      var te = b.prototype = new y;
      te.constructor = b,
      _(te, v.prototype),
      te.isPureReactComponent = !0;
      var ne = Array.isArray;
      function x() {
      }
      var S = {
        H: null,
        A: null,
        T: null,
        S: null
      },
      re = Object.prototype.hasOwnProperty;
      function ie(e, n, r) {
        var i = r.ref;
        return {
          $$typeof: t,
          type: e,
          key: n,
          ref: i === void 0 ? null : i,
          props: r
        }
      }
      function ae(e, t) {
        return ie(e.type, t, e.props)
      }
      function oe(e) {
        return typeof e == `object` &&
        !!e &&
        e.$$typeof === t
      }
      function se(e) {
        var t = {
          '=': `=0`,
          ':': `=2`
        };
        return `$` + e.replace(/[=:]/g, function (e) {
          return t[e]
        })
      }
      var ce = /\/+/g;
      function le(e, t) {
        return typeof e == `object` &&
        e &&
        e.key != null ? se(`` + e.key) : t.toString(36)
      }
      function ue(e) {
        switch (e.status) {
          case `fulfilled`:
            return e.value;
          case `rejected`:
            throw e.reason;
          default:
            switch (
                typeof e.status == `string` ? e.then(x, x) : (
                  e.status = `pending`,
                  e.then(
                    function (t) {
                      e.status === `pending` &&
                      (e.status = `fulfilled`, e.value = t)
                    },
                    function (t) {
                      e.status === `pending` &&
                      (e.status = `rejected`, e.reason = t)
                    }
                  )
                ),
                e.status
              ) {
              case `fulfilled`:
                return e.value;
              case `rejected`:
                throw e.reason
            }
        }
        throw e
      }
      function de(e, r, i, a, o) {
        var s = typeof e;
        (s === `undefined` || s === `boolean`) &&
        (e = null);
        var c = !1;
        if (e === null) c = !0;
         else switch (s) {
          case `bigint`:
          case `string`:
          case `number`:
            c = !0;
            break;
          case `object`:
            switch (e.$$typeof) {
              case t:
              case n:
                c = !0;
                break;
              case d:
                return c = e._init,
                de(c(e._payload), r, i, a, o)
            }
        }
        if (c) return o = o(e),
        c = a === `` ? `.` + le(e, 0) : a,
        ne(o) ? (
          i = ``,
          c != null &&
          (i = c.replace(ce, `$&/`) + `/`),
          de(o, r, i, ``, function (e) {
            return e
          })
        ) : o != null &&
        (
          oe(o) &&
          (
            o = ae(
              o,
              i + (
                o.key == null ||
                e &&
                e.key === o.key ? `` : (`` + o.key).replace(ce, `$&/`) + `/`
              ) + c
            )
          ),
          r.push(o)
        ),
        1;
        c = 0;
        var l = a === `` ? `.` : a + `:`;
        if (ne(e)) for (var u = 0; u < e.length; u++) a = e[u],
        s = l + le(a, u),
        c += de(a, r, i, s, o);
         else if (u = h(e), typeof u == `function`) for (e = u.call(e), u = 0; !(a = e.next()).done; ) a = a.value,
        s = l + le(a, u++),
        c += de(a, r, i, s, o);
         else if (s === `object`) {
          if (typeof e.then == `function`) return de(ue(e), r, i, a, o);
          throw r = String(e),
          Error(
            `Objects are not valid as a React child (found: ` + (
              r === `[object Object]` ? `object with keys {` + Object.keys(e).join(`, `) + `}` : r
            ) + `). If you meant to render a collection of children, use an array instead.`
          )
        }
        return c
      }
      function fe(e, t, n) {
        if (e == null) return e;
        var r = [],
        i = 0;
        return de(e, r, ``, ``, function (e) {
          return t.call(n, e, i++)
        }),
        r
      }
      function pe(e) {
        if (e._status === - 1) {
          var t = e._result,
          n = t();
          n.then(
            function (t) {
              (e._status === 0 || e._status === - 1) &&
              (
                e._status = 1,
                e._result = t,
                n.status === void 0 &&
                (n.status = `fulfilled`, n.value = t)
              )
            },
            function (t) {
              (e._status === 0 || e._status === - 1) &&
              (
                e._status = 2,
                e._result = t,
                n.status === void 0 &&
                (n.status = `rejected`, n.reason = t)
              )
            }
          ),
          e._status === - 1 &&
          (e._status = 0, e._result = n)
        }
        if (e._status === 1) return e._result.default;
        throw e._result
      }
      var me = typeof reportError == `function` ? reportError : function (e) {
        if (typeof window == `object` && typeof window.ErrorEvent == `function`) {
          var t = new window.ErrorEvent(
            `error`,
            {
              bubbles: !0,
              cancelable: !0,
              message: typeof e == `object` &&
              e &&
              typeof e.message == `string` ? String(e.message) : String(e),
              error: e
            }
          );
          if (!window.dispatchEvent(t)) return
        } else if (typeof process == `object` && typeof process.emit == `function`) {
          process.emit(`uncaughtException`, e);
          return
        }
        console.error(e)
      };
      function he(e) {
        var t = S.T,
        n = {};
        n.types = t === null ? null : t.types,
        S.T = n;
        try {
          var r = e(),
          i = S.S;
          i !== null &&
          i(n, r),
          typeof r == `object` &&
          r &&
          typeof r.then == `function` &&
          r.then(x, me)
        } catch (e) {
          me(e)
        } finally {
          t !== null &&
          n.types !== null &&
          (t.types = n.types),
          S.T = t
        }
      }
      function ge(e) {
        var t = S.T;
        if (t !== null) {
          var n = t.types;
          n === null ? t.types = [
            e
          ] : n.indexOf(e) === - 1 &&
          n.push(e)
        } else he(ge.bind(null, e))
      }
      var _e = {
        map: fe,
        forEach: function (e, t, n) {
          fe(e, function () {
            t.apply(this, arguments)
          }, n)
        },
        count: function (e) {
          var t = 0;
          return fe(e, function () {
            t++
          }),
          t
        },
        toArray: function (e) {
          return fe(e, function (e) {
            return e
          }) ||
          []
        },
        only: function (e) {
          if (!oe(e)) throw Error(
            `React.Children.only expected to receive a single React element child.`
          );
          return e
        }
      };
      e.Activity = f,
      e.Children = _e,
      e.Component = v,
      e.Fragment = r,
      e.Profiler = a,
      e.PureComponent = b,
      e.StrictMode = i,
      e.Suspense = l,
      e.ViewTransition = p,
      e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = S,
      e.__COMPILER_RUNTIME = {
        __proto__: null,
        c: function (e) {
          return S.H.useMemoCache(e)
        }
      },
      e.addTransitionType = ge,
      e.cache = function (e) {
        return function () {
          return e.apply(null, arguments)
        }
      },
      e.cacheSignal = function () {
        return null
      },
      e.cloneElement = function (e, t, n) {
        if (e == null) throw Error(
          `The argument must be a React element, but you passed ` + e + `.`
        );
        var r = _({
        }, e.props),
        i = e.key;
        if (t != null) for (a in t.key !== void 0 && (i = `` + t.key), t) !re.call(t, a) ||
        a === `key` ||
        a === `__self` ||
        a === `__source` ||
        a === `ref` &&
        t.ref === void 0 ||
        (r[a] = t[a]);
        var a = arguments.length - 2;
        if (a === 1) r.children = n;
         else if (1 < a) {
          for (var o = Array(a), s = 0; s < a; s++) o[s] = arguments[s + 2];
          r.children = o
        }
        return ie(e.type, i, r)
      },
      e.createContext = function (e) {
        return e = {
          $$typeof: s,
          _currentValue: e,
          _currentValue2: e,
          _threadCount: 0,
          Provider: null,
          Consumer: null
        },
        e.Provider = e,
        e.Consumer = {
          $$typeof: o,
          _context: e
        },
        e
      },
      e.createElement = function (e, t, n) {
        var r,
        i = {},
        a = null;
        if (t != null) for (r in t.key !== void 0 && (a = `` + t.key), t) re.call(t, r) &&
        r !== `key` &&
        r !== `__self` &&
        r !== `__source` &&
        (i[r] = t[r]);
        var o = arguments.length - 2;
        if (o === 1) i.children = n;
         else if (1 < o) {
          for (var s = Array(o), c = 0; c < o; c++) s[c] = arguments[c + 2];
          i.children = s
        }
        if (e && e.defaultProps) for (r in o = e.defaultProps, o) i[r] === void 0 &&
        (i[r] = o[r]);
        return ie(e, a, i)
      },
      e.createRef = function () {
        return {
          current: null
        }
      },
      e.forwardRef = function (e) {
        return {
          $$typeof: c,
          render: e
        }
      },
      e.isValidElement = oe,
      e.lazy = function (e) {
        return {
          $$typeof: d,
          _payload: {
            _status: - 1,
            _result: e
          },
          _init: pe
        }
      },
      e.memo = function (e, t) {
        return {
          $$typeof: u,
          type: e,
          compare: t === void 0 ? null : t
        }
      },
      e.startTransition = he,
      e.unstable_useCacheRefresh = function () {
        return S.H.useCacheRefresh()
      },
      e.use = function (e) {
        return S.H.use(e)
      },
      e.useActionState = function (e, t, n) {
        return S.H.useActionState(e, t, n)
      },
      e.useCallback = function (e, t) {
        return S.H.useCallback(e, t)
      },
      e.useContext = function (e) {
        return S.H.useContext(e)
      },
      e.useDebugValue = function () {
      },
      e.useDeferredValue = function (e, t) {
        return S.H.useDeferredValue(e, t)
      },
      e.useEffect = function (e, t) {
        return S.H.useEffect(e, t)
      },
      e.useEffectEvent = function (e) {
        return S.H.useEffectEvent(e)
      },
      e.useId = function () {
        return S.H.useId()
      },
      e.useImperativeHandle = function (e, t, n) {
        return S.H.useImperativeHandle(e, t, n)
      },
      e.useInsertionEffect = function (e, t) {
        return S.H.useInsertionEffect(e, t)
      },
      e.useLayoutEffect = function (e, t) {
        return S.H.useLayoutEffect(e, t)
      },
      e.useMemo = function (e, t) {
        return S.H.useMemo(e, t)
      },
      e.useOptimistic = function (e, t) {
        return S.H.useOptimistic(e, t)
      },
      e.useReducer = function (e, t, n) {
        return S.H.useReducer(e, t, n)
      },
      e.useRef = function (e) {
        return S.H.useRef(e)
      },
      e.useState = function (e) {
        return S.H.useState(e)
      },
      e.useSyncExternalStore = function (e, t, n) {
        return S.H.useSyncExternalStore(e, t, n)
      },
      e.useTransition = function () {
        return S.H.useTransition()
      },
      e.version = `19.3.1`
    }
  )
),
r = t(((e, t) => {
  t.exports = n()
})),
i = t(
  (
    e => {
      var t = r();
      function n(e) {
        var t = `https://react.dev/errors/` + e;
        if (1 < arguments.length) {
          t += `?args[]=` + encodeURIComponent(arguments[1]);
          for (var n = 2; n < arguments.length; n++) t += `&args[]=` + encodeURIComponent(arguments[n])
        }
        return `Minified React error #` + e + `; visit ` + t + ` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`
      }
      function i() {
      }
      var a = {
        d: {
          f: i,
          r: function () {
            throw Error(n(522))
          },
          D: i,
          C: i,
          L: i,
          m: i,
          X: i,
          S: i,
          M: i
        },
        p: 0,
        findDOMNode: null
      },
      o = Symbol.for(`react.portal`),
      s = Symbol.for(`react.recoverable`),
      c = Symbol.for(`react.optimistic_key`);
      function l(e, t, n) {
        var r = 3 < arguments.length &&
        arguments[3] !== void 0 ? arguments[3] : null;
        return {
          $$typeof: o,
          key: r == null ? null : r === c ? c : `` + r,
          children: e,
          containerInfo: t,
          implementation: n
        }
      }
      var u = t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
      function d(e, t) {
        if (e === `font`) return ``;
        if (typeof t == `string`) return t === `use-credentials` ? t : ``
      }
      e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = a,
      e.browser = function (e) {
        return {
          $$typeof: s,
          _reason: e
        }
      },
      e.createPortal = function (e, t) {
        var r = 2 < arguments.length &&
        arguments[2] !== void 0 ? arguments[2] : null;
        if (!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11) throw Error(n(299));
        return l(e, t, null, r)
      },
      e.flushSync = function (e) {
        var t = u.T,
        n = a.p;
        try {
          if (u.T = null, a.p = 2, e) return e()
        } finally {
          u.T = t,
          a.p = n,
          a.d.f()
        }
      },
      e.preconnect = function (e, t) {
        typeof e == `string` &&
        (
          t ? (
            t = t.crossOrigin,
            t = typeof t == `string` ? t === `use-credentials` ? t : `` : void 0
          ) : t = null,
          a.d.C(e, t)
        )
      },
      e.prefetchDNS = function (e) {
        typeof e == `string` &&
        a.d.D(e)
      },
      e.preinit = function (e, t) {
        if (typeof e == `string` && t && typeof t.as == `string`) {
          var n = t.as,
          r = d(n, t.crossOrigin),
          i = typeof t.integrity == `string` ? t.integrity : void 0,
          o = typeof t.fetchPriority == `string` ? t.fetchPriority : void 0;
          n === `style` ? a.d.S(
            e,
            typeof t.precedence == `string` ? t.precedence : void 0,
            {
              crossOrigin: r,
              integrity: i,
              fetchPriority: o
            }
          ) : n === `script` &&
          a.d.X(
            e,
            {
              crossOrigin: r,
              integrity: i,
              fetchPriority: o,
              nonce: typeof t.nonce == `string` ? t.nonce : void 0
            }
          )
        }
      },
      e.preinitModule = function (e, t) {
        if (typeof e == `string`) {
          if (typeof t == `object` && t) {
            if (t.as == null || t.as === `script`) {
              var n = d(t.as, t.crossOrigin);
              a.d.M(
                e,
                {
                  crossOrigin: n,
                  integrity: typeof t.integrity == `string` ? t.integrity : void 0,
                  nonce: typeof t.nonce == `string` ? t.nonce : void 0,
                  fetchPriority: typeof t.fetchPriority == `string` ? t.fetchPriority : void 0
                }
              )
            }
          } else t ?? a.d.M(e)
        }
      },
      e.preload = function (e, t) {
        if (
          typeof e == `string` &&
          typeof t == `object` &&
          t &&
          typeof t.as == `string`
        ) {
          var n = t.as,
          r = d(n, t.crossOrigin);
          a.d.L(
            e,
            n,
            {
              crossOrigin: r,
              integrity: typeof t.integrity == `string` ? t.integrity : void 0,
              nonce: typeof t.nonce == `string` ? t.nonce : void 0,
              type: typeof t.type == `string` ? t.type : void 0,
              fetchPriority: typeof t.fetchPriority == `string` ? t.fetchPriority : void 0,
              referrerPolicy: typeof t.referrerPolicy == `string` ? t.referrerPolicy : void 0,
              imageSrcSet: typeof t.imageSrcSet == `string` ? t.imageSrcSet : void 0,
              imageSizes: typeof t.imageSizes == `string` ? t.imageSizes : void 0,
              media: typeof t.media == `string` ? t.media : void 0
            }
          )
        }
      },
      e.preloadModule = function (e, t) {
        if (typeof e == `string`) {
          if (t) {
            var n = d(t.as, t.crossOrigin);
            a.d.m(
              e,
              {
                as: typeof t.as == `string` &&
                t.as !== `script` ? t.as : void 0,
                crossOrigin: n,
                integrity: typeof t.integrity == `string` ? t.integrity : void 0,
                nonce: typeof t.nonce == `string` ? t.nonce : void 0,
                fetchPriority: typeof t.fetchPriority == `string` ? t.fetchPriority : void 0
              }
            )
          } else a.d.m(e)
        }
      },
      e.requestFormReset = function (e) {
        a.d.r(e)
      },
      e.unstable_batchedUpdates = function (e, t) {
        return e(t)
      },
      e.useFormState = function (e, t, n) {
        return u.H.useFormState(e, t, n)
      },
      e.useFormStatus = function () {
        return u.H.useHostTransitionStatus()
      },
      e.version = `19.3.1`
    }
  )
),
a = t(
  (
    (e, t) => {
      function n() {
        if (
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < `u` &&
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE == `function`
        ) try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)
        } catch (e) {
          console.error(e)
        }
      }
      n(),
      t.exports = i()
    }
  )
),
o = t(
  (
    e => {
      var t = Symbol.for(`react.transitional.element`),
      n = Symbol.for(`react.fragment`);
      function r(e, n, r) {
        var i = null;
        if (r !== void 0 && (i = `` + r), n.key !== void 0 && (i = `` + n.key), `key` in n) for (var a in r = {}, n) a !== `key` &&
        (r[a] = n[a]);
         else r = n;
        return n = r.ref,
        {
          $$typeof: t,
          type: e,
          key: i,
          ref: n === void 0 ? null : n,
          props: r
        }
      }
      e.Fragment = n,
      e.jsx = r,
      e.jsxs = r
    }
  )
),
s = t(((e, t) => {
  t.exports = o()
})),
c = e(r(), 1),
l = s(),
u = c.createContext(void 0),
d = e => {
  let t = c.useContext(u);
  if (e) return e;
  if (!t) throw Error(`No QueryClient set, use QueryClientProvider to set one`);
  return t
},
f = ({
  client: e,
  children: t
}) => (
  c.useEffect(() => (e.mount(), () => {
    e.unmount()
  }), [
    e
  ]),
  (0, l.jsx) (u.Provider, {
    value: e,
    children: t
  })
),
p = /^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,
m = /^[\\/]{2}/;
function h(e, t) {
  return t + e.replace(/\\/g, `/`)
}
var g = `popstate`;
function _(e) {
  return typeof e == `object` &&
  !!e &&
  `pathname` in e &&
  `search` in e &&
  `hash` in e &&
  `state` in e &&
  `key` in e
}
function ee(e = {}) {
  function t(e, t) {
    let n = t.state?.masked,
    {
      pathname: r,
      search: i,
      hash: a
    }
    = n ||
    e.location;
    return ne(
      ``,
      {
        pathname: r,
        search: i,
        hash: a
      },
      t.state &&
      t.state.usr ||
      null,
      t.state &&
      t.state.key ||
      `default`,
      n ? {
        pathname: e.location.pathname,
        search: e.location.search,
        hash: e.location.hash
      }
       : void 0
    )
  }
  function n(e, t) {
    return typeof t == `string` ? t : x(t)
  }
  return re(t, n, null, e)
}
function v(e, t) {
  if (e === !1 || e == null) throw Error(t)
}
function y(e, t) {
  if (!e) {
    typeof console < `u` &&
    console.warn(t);
    try {
      throw Error(t)
    } catch {
    }
  }
}
function b() {
  return Math.random().toString(36).substring(2, 10)
}
function te(e, t) {
  return {
    usr: e.state,
    key: e.key,
    idx: t,
    masked: e.mask ? {
      pathname: e.pathname,
      search: e.search,
      hash: e.hash
    }
     : void 0
  }
}
function ne(e, t, n = null, r, i) {
  return {
    pathname: typeof e == `string` ? e : e.pathname,
    search: ``,
    hash: ``,
    ...typeof t == `string` ? S(t) : t,
    state: n,
    key: t &&
    t.key ||
    r ||
    b(),
    mask: i
  }
}
function x({
  pathname: e = `/`,
  search: t = ``,
  hash: n = ``
}) {
  return t &&
  t !== `?` &&
  (e += t.charAt(0) === `?` ? t : `?` + t),
  n &&
  n !== `#` &&
  (e += n.charAt(0) === `#` ? n : `#` + n),
  e
}
function S(e) {
  let t = {};
  if (e) {
    let n = e.indexOf(`#`);
    n >= 0 &&
    (t.hash = e.substring(n), e = e.substring(0, n));
    let r = e.indexOf(`?`);
    r >= 0 &&
    (t.search = e.substring(r), e = e.substring(0, r)),
    e &&
    (t.pathname = e)
  }
  return t
}
function re(e, t, n, r = {}) {
  let {
    window: i = document.defaultView,
    v5Compat: a = !1
  }
  = r,
  o = i.history,
  s = `POP`,
  c = null,
  l = u();
  l ?? (l = 0, o.replaceState({
    ...o.state,
    idx: l
  }, ``));
  function u() {
    return (o.state || {
      idx: null
    }).idx
  }
  function d() {
    s = `POP`;
    let e = u(),
    t = e == null ? null : e - l;
    l = e,
    c &&
    c({
      action: s,
      location: h.location,
      delta: t
    })
  }
  function f(e, t) {
    s = `PUSH`;
    let r = _(e) ? e : ne(h.location, e, t);
    n &&
    n(r, e),
    l = u() + 1;
    let d = te(r, l),
    f = h.createHref(r.mask || r);
    try {
      o.pushState(d, ``, f)
    } catch (e) {
      if (e instanceof DOMException && e.name === `DataCloneError`) throw e;
      i.location.assign(f)
    }
    a &&
    c &&
    c({
      action: s,
      location: h.location,
      delta: 1
    })
  }
  function p(e, t) {
    s = `REPLACE`;
    let r = _(e) ? e : ne(h.location, e, t);
    n &&
    n(r, e),
    l = u();
    let i = te(r, l),
    d = h.createHref(r.mask || r);
    o.replaceState(i, ``, d),
    a &&
    c &&
    c({
      action: s,
      location: h.location,
      delta: 0
    })
  }
  function m(e) {
    return ie(i, e)
  }
  let h = {
    get action() {
      return s
    },
    get location() {
      return e(i, o)
    },
    listen(e) {
      if (c) throw Error(`A history only accepts one active listener`);
      return i.addEventListener(g, d),
      c = e,
      () => {
        i.removeEventListener(g, d),
        c = null
      }
    },
    createHref(e) {
      return t(i, e)
    },
    createURL: m,
    encodeLocation(e) {
      let t = m(e);
      return {
        pathname: t.pathname,
        search: t.search,
        hash: t.hash
      }
    },
    push: f,
    replace: p,
    go(e) {
      return o.go(e)
    }
  };
  return h
}
function ie(e, t, n = !1) {
  let r = `http://localhost`;
  e &&
  (
    r = e.location.origin === `null` ? e.location.href : e.location.origin
  ),
  v(r, `No window.location.(origin|href) available to create URL`);
  let i = typeof t == `string` ? t : x(t);
  return i = i.replace(/ $/, `%20`),
  !n &&
  m.test(i) &&
  (i = r + i),
  new URL(i, r)
}
function ae(e, t, n = `/`) {
  return oe(e, t, n, !1)
}
function oe(e, t, n, r, i) {
  let a = De((typeof t == `string` ? S(t) : t).pathname || `/`, n);
  if (a == null) return null;
  let o = i ?? se(e),
  s = null,
  c = Ee(a);
  for (let e = 0; s == null && e < o.length; ++e) s = Se(o[e], c, r);
  return s
}
function se(e) {
  let t = ce(e);
  return ue(t),
  t
}
function ce(e, t = [], n = [], r = ``, i = !1) {
  let a = (e, a, o = i, s) => {
    let c = {
      relativePath: s === void 0 ? e.path ||
      `` : s,
      caseSensitive: e.caseSensitive === !0,
      childrenIndex: a,
      route: e
    };
    if (c.relativePath.startsWith(`/`)) {
      if (!c.relativePath.startsWith(r) && o) return;
      v(
        c.relativePath.startsWith(r),
        `Absolute route path "${ c.relativePath }" nested under path "${ r }" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ),
      c.relativePath = c.relativePath.slice(r.length)
    }
    let l = C([r,
    c.relativePath]),
    u = n.concat(c);
    e.children &&
    e.children.length > 0 &&
    (
      v(
        e.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${ l }".`
      ),
      ce(e.children, t, u, l, o)
    ),
    (e.path != null || e.index) &&
    t.push({
      path: l,
      score: be(l, e.index),
      routesMeta: u.map(
        (e, t) => {
          let[n,
          r] = Te(e.relativePath, e.caseSensitive, t === u.length - 1);
          return {
            ...e,
            matcher: n,
            compiledParams: r
          }
        }
      )
    })
  };
  return e.forEach(
    (e, t) => {
      if (e.path === `` || !e.path?.includes(`?`)) a(e, t);
       else for (let n of le(e.path)) a(e, t, !0, n)
    }
  ),
  t
}
function le(e) {
  let t = e.split(`/`);
  if (t.length === 0) return [];
  let[n,
  ...r] = t,
  i = n.endsWith(`?`),
  a = n.replace(/\?$/, ``);
  if (r.length === 0) return i ? [
    a,
    ``
  ] : [
    a
  ];
  let o = le(r.join(`/`)),
  s = [];
  return s.push(...o.map(e => e === `` ? a : [
    a,
    e
  ].join(`/`))),
  i &&
  s.push(...o),
  s.map(t => e.startsWith(`/`) && t === `` ? `/` : t)
}
function ue(e) {
  e.sort(
    (e, t) => e.score === t.score ? xe(
      e.routesMeta.map(e => e.childrenIndex),
      t.routesMeta.map(e => e.childrenIndex)
    ) : t.score - e.score
  )
}
var de = /^:[\w-]+$/,
fe = /^:[\w-]+/,
pe = 3.5,
me = 3,
he = 2,
ge = 1,
_e = 10,
ve = - 2,
ye = e => e === `*`;
function be(e, t) {
  let n = e.split(`/`),
  r = n.length;
  return n.some(ye) &&
  (r += ve),
  t &&
  (r += he),
  n.filter(e => !ye(e)).reduce((e, t) => e + (de.test(t) ? me : fe.test(t) ? pe : t === `` ? ge : _e), r)
}
function xe(e, t) {
  return e.length === t.length &&
  e.slice(0, - 1).every((e, n) => e === t[n]) ? e[e.length - 1] - t[t.length - 1] : 0
}
function Se(e, t, n = !1) {
  let {
    routesMeta: r
  }
  = e,
  i = {},
  a = `/`,
  o = [];
  for (let e = 0; e < r.length; ++e) {
    let s = r[e],
    c = e === r.length - 1,
    l = a === `/` ? t : t.slice(a.length) ||
    `/`,
    u = {
      path: s.relativePath,
      caseSensitive: s.caseSensitive,
      end: c
    },
    d = s.matcher &&
    s.compiledParams ? we(u, l, s.matcher, s.compiledParams) : Ce(u, l),
    f = s.route;
    if (
      !d &&
      c &&
      n &&
      !r[r.length - 1].route.index &&
      (
        d = Ce({
          path: s.relativePath,
          caseSensitive: s.caseSensitive,
          end: !1
        }, l)
      ),
      !d
    ) return null;
    Object.assign(i, d.params),
    o.push({
      params: i,
      pathname: C([a,
      d.pathname]),
      pathnameBase: Ie(C([a,
      d.pathnameBase])),
      route: f
    }),
    d.pathnameBase !== `/` &&
    (a = C([a,
    d.pathnameBase]))
  }
  return o
}
function Ce(e, t) {
  typeof e == `string` &&
  (e = {
    path: e,
    caseSensitive: !1,
    end: !0
  });
  let[n,
  r] = Te(e.path, e.caseSensitive, e.end);
  return we(e, t, n, r)
}
function we(e, t, n, r) {
  let i = t.match(n);
  if (!i) return null;
  let a = i[0],
  o = Fe(a, 1),
  s = i.slice(1);
  return {
    params: r.reduce(
      (e, {
        paramName: t,
        isOptional: n
      }, r) => {
        if (t === `*`) {
          let e = s[r] ||
          ``;
          o = Fe(a.slice(0, a.length - e.length), 1)
        }
        let i = s[r];
        return e[t] = n &&
        !i ? void 0 : (i || ``).replace(/%2F/g, `/`),
        e
      },
      {
      }
    ),
    pathname: a,
    pathnameBase: o,
    pattern: e
  }
}
function Te(e, t = !1, n = !0) {
  y(
    e === `*` ||
    !e.endsWith(`*`) ||
    e.endsWith(`/*`),
    `Route path "${ e }" will be treated as if it were "${ e.replace(/\*$/, `/*`) }" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${ e.replace(/\*$/, `/*`) }".`
  );
  let r = [],
  i = `^` + e.replace(/\/*\*?$/, ``).replace(/^\/*/, `/`).replace(/[\\.*+^${}|()[\]]/g, `\\$&`).replace(
    /\/:([\w-]+)(\?)?/g,
    (e, t, n, i, a) => {
      if (r.push({
        paramName: t,
        isOptional: n != null
      }), n) {
        let t = a.charAt(i + e.length);
        return t &&
        t !== `/` ? `/([^\\/]*)` : `(?:/([^\\/]*))?`
      }
      return `/([^\\/]+)`
    }
  ).replace(/\/((?:[^/?()[\]*^\\]|\\.)+)\?(?=\/|$|\()/g, `(?:/$1)?`);
  return e.endsWith(`*`) ? (
    r.push({
      paramName: `*`
    }),
    i += e === `*` ||
    e === `/*` ? `(.*)$` : `(?:\\/(.+)|\\/*)$`
  ) : n ? i += `\\/*$` : e !== `` &&
  e !== `/` &&
  (i += `(?:(?=\\/|$))`),
  [
    new RegExp(i, t ? void 0 : `i`),
    r
  ]
}
function Ee(e) {
  try {
    return e.split(`/`).map(e => decodeURIComponent(e).replace(/\//g, `%2F`)).join(`/`)
  } catch (t) {
    return y(
      !1,
      `The URL path "${ e }" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${ t }).`
    ),
    e
  }
}
function De(e, t) {
  if (t === `/`) return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith(`/`) ? t.length - 1 : t.length,
  r = e.charAt(n);
  return r &&
  r !== `/` ? null : e.slice(n) ||
  `/`
}
function Oe(e, t = `/`) {
  let {
    pathname: n,
    search: r = ``,
    hash: i = ``
  }
  = typeof e == `string` ? S(e) : e,
  a;
  return n ? (
    n = Pe(n),
    a = n.startsWith(`/`) ||
    n.startsWith(`\\`) ? ke(n.substring(1), `/`) : ke(n, t)
  ) : a = t,
  {
    pathname: a,
    search: Le(r),
    hash: Re(i)
  }
}
function ke(e, t) {
  let n = Fe(t).split(`/`);
  return e.split(`/`).forEach(e => {
    e === `..` ? n.length > 1 &&
    n.pop() : e !== `.` &&
    n.push(e)
  }),
  n.length > 1 ? n.join(`/`) : `/`
}
function Ae(e, t, n, r) {
  return `Cannot include a '${ e }' character in a manually specified \`to.${ t }\` field [${ JSON.stringify(r) }].  Please separate it out to the \`to.${ n }\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`
}
function je(e) {
  return e.filter((e, t) => t === 0 || e.route.path && e.route.path.length > 0)
}
function Me(e) {
  let t = je(e);
  return t.map((e, n) => n === t.length - 1 ? e.pathname : e.pathnameBase)
}
function Ne(e, t, n, r = !1) {
  let i;
  typeof e == `string` ? i = S(e) : (
    i = {
      ...e
    },
    v(
      !i.pathname ||
      !i.pathname.includes(`?`),
      Ae(`?`, `pathname`, `search`, i)
    ),
    v(
      !i.pathname ||
      !i.pathname.includes(`#`),
      Ae(`#`, `pathname`, `hash`, i)
    ),
    v(!i.search || !i.search.includes(`#`), Ae(`#`, `search`, `hash`, i))
  );
  let a = e === `` ||
  i.pathname === ``,
  o = a ? `/` : i.pathname,
  s;
  if (o == null) s = n;
   else {
    let e = t.length - 1;
    if (!r && o.startsWith(`..`)) {
      let t = o.split(`/`);
      for (; t[0] === `..`; ) t.shift(),
      --e;
      i.pathname = t.join(`/`)
    }
    s = e >= 0 ? t[e] : `/`
  }
  let c = Oe(i, s),
  l = o &&
  o !== `/` &&
  o.endsWith(`/`),
  u = (a || o === `.`) &&
  n.endsWith(`/`);
  return !c.pathname.endsWith(`/`) &&
  (l || u) &&
  (c.pathname += `/`),
  c
}
var Pe = e => e.replace(/[\\/]{2,}/g, `/`),
C = e => Pe(e.join(`/`));
function Fe(e, t = 0) {
  let n = e.length;
  for (; n > t && e.charCodeAt(n - 1) === 47; ) n--;
  return n === e.length ? e : e.slice(0, n)
}
var Ie = e => Fe(e).replace(/^\/*/, `/`),
Le = e => !e ||
e === `?` ? `` : e.startsWith(`?`) ? e : `?` + e,
Re = e => !e ||
e === `#` ? `` : e.startsWith(`#`) ? e : `#` + e,
ze = class {
  status;
  statusText;
  data;
  error;
  internal;
  constructor(e, t, n, r = !1) {
    this.status = e,
    this.statusText = t ||
    ``,
    this.internal = r,
    n instanceof Error ? (this.data = n.toString(), this.error = n) : this.data = n
  }
};
function Be(e) {
  return e != null &&
  typeof e.status == `number` &&
  typeof e.statusText == `string` &&
  typeof e.internal == `boolean` &&
  `data` in e
}
function Ve(e) {
  return C(e.map(e => e.route.path).filter(Boolean)) ||
  `/`
}
var He = typeof window < `u` &&
window.document !== void 0 &&
window.document.createElement !== void 0;
function Ue(e, t) {
  let n = e;
  if (typeof n != `string` || !p.test(n)) return {
    absoluteURL: void 0,
    isExternal: !1,
    to: n
  };
  let r = n,
  i = !1;
  if (He) try {
    let e = new URL(window.location.href),
    r = m.test(n) ? new URL(h(n, e.protocol)) : new URL(n),
    a = De(r.pathname, t);
    r.origin === e.origin &&
    a != null ? n = a + r.search + r.hash : i = !0
  } catch {
    y(
      !1,
      `<Link to="${ n }"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
    )
  }
  return {
    absoluteURL: r,
    isExternal: i,
    to: n
  }
}
var We = new URL(`http://localhost`);
function Ge(e) {
  if (e.createURL) return e.createURL(`/`);
  try {
    return new URL(e.createHref(`/`), We)
  } catch {
    return We
  }
}
function Ke(e, t) {
  return e.origin === t.origin &&
  (e.origin !== `null` || e.protocol === t.protocol && e.host === t.host)
}
function qe(e, t) {
  if (e.startsWith(`//`)) return !0;
  let n = t.protocol.toLowerCase();
  return e.toLowerCase().startsWith(n) ? t.host === `` ||
  e.slice(n.length).startsWith(`//`) : !1
}
function Je(e, t, n, r) {
  let i = null;
  try {
    i = e == null ? null : new URL(e, n)
  } catch {
  }
  let a = new URL(t, n),
  o = i != null &&
  !Ke(i, n),
  s = !Ke(a, n);
  if (r === `reject`) {
    if (o || s) throw Error(`External navigation is not allowed`)
  } else if (s && (i == null || !qe(e, i) || !Ke(i, a))) throw Error(`External navigation is not allowed`)
}
var Ye = [
  `POST`,
  `PUT`,
  `PATCH`,
  `DELETE`
];
new Set(Ye);
var Xe = [
  `GET`,
  ...Ye
];
new Set(Xe);
var Ze = [
  `about:`,
  `blob:`,
  `chrome:`,
  `chrome-untrusted:`,
  `content:`,
  `data:`,
  `devtools:`,
  `file:`,
  `filesystem:`,
  `javascript:`
];
function Qe(e) {
  try {
    return Ze.includes(new URL(e).protocol)
  } catch {
    return !1
  }
}
var $e = c.createContext(null);
$e.displayName = `DataRouter`;
var et = c.createContext(null);
et.displayName = `DataRouterState`;
var tt = c.createContext(null);
tt.displayName = `DataRouterData`;
var nt = c.createContext(null);
nt.displayName = `DataRouterNavigation`;
var rt = c.createContext(!1);
function it() {
  return c.useContext(rt)
}
var at = c.createContext({
  isTransitioning: !1
});
at.displayName = `ViewTransition`;
var ot = c.createContext(null);
ot.displayName = `Fetchers`;
var st = c.createContext(null);
st.displayName = `Await`;
var w = c.createContext(null);
w.displayName = `Navigation`;
var ct = c.createContext(null);
ct.displayName = `Location`;
var T = c.createContext({
  outlet: null,
  matches: [],
  isDataRoute: !1
});
T.displayName = `Route`;
var lt = c.createContext(!1);
lt.displayName = `IsDataRoute`;
var ut = c.createContext(void 0);
ut.displayName = `RouteId`;
var dt = c.createContext(null);
dt.displayName = `RouteError`;
var ft = `REACT_ROUTER_ERROR`,
pt = `REDIRECT`,
mt = `ROUTE_ERROR_RESPONSE`;
function ht(e) {
  if (e.startsWith(`${ ft }:${ pt }:{`)) try {
    let t = JSON.parse(e.slice(28));
    if (
      typeof t == `object` &&
      t &&
      typeof t.status == `number` &&
      typeof t.statusText == `string` &&
      typeof t.location == `string` &&
      typeof t.reloadDocument == `boolean` &&
      typeof t.replace == `boolean`
    ) return t
  } catch {
  }
}
function gt(e) {
  if (e.startsWith(`${ ft }:${ mt }:{`)) try {
    let t = JSON.parse(e.slice(40));
    if (
      typeof t == `object` &&
      t &&
      typeof t.status == `number` &&
      typeof t.statusText == `string`
    ) return new ze(t.status, t.statusText, t.data)
  } catch {
  }
}
function _t(e, {
  relative: t
}
= {}) {
  v(
    vt(),
    `useHref() may be used only in the context of a <Router> component.`
  );
  let {
    basename: n,
    navigator: r
  }
  = c.useContext(w),
  {
    hash: i,
    pathname: a,
    search: o
  }
  = Tt(e, {
    relative: t
  }),
  s = a;
  return n !== `/` &&
  (s = a === `/` ? n : C([n,
  a])),
  r.createHref({
    pathname: s,
    search: o,
    hash: i
  })
}
function vt() {
  return c.useContext(ct) != null
}
function E() {
  return v(
    vt(),
    `useLocation() may be used only in the context of a <Router> component.`
  ),
  c.useContext(ct).location
}
var yt = `You should call navigate() in a React.useEffect(), not when your component is first rendered.`;
function bt() {
  return c.useContext(lt) ? Vt() : xt()
}
function xt() {
  v(
    vt(),
    `useNavigate() may be used only in the context of a <Router> component.`
  );
  let e = c.useContext($e),
  {
    basename: t,
    navigator: n
  }
  = c.useContext(w),
  {
    matches: r
  }
  = c.useContext(T),
  {
    pathname: i
  }
  = E(),
  a = JSON.stringify(Me(r)),
  o = c.useRef(!1);
  return c.useLayoutEffect(() => {
    o.current = !0
  }),
  c.useCallback(
    (r, s = {}) => {
      if (y(o.current, yt), !o.current) return;
      if (typeof r == `number`) {
        n.go(r);
        return
      }
      let c = Ne(r, JSON.parse(a), i, s.relative === `path`);
      e == null &&
      t !== `/` &&
      (c.pathname = c.pathname === `/` ? t : C([t,
      c.pathname])),
      Je(typeof r == `string` ? r : x(r), n.createHref(c), Ge(n), `reject`),
      (s.replace ? n.replace : n.push) (c, s.state, s)
    },
    [
      t,
      n,
      a,
      i,
      e
    ]
  )
}
var St = c.createContext(null);
function Ct(e) {
  let t = c.useContext(T).outlet;
  return c.useMemo(() => t && c.createElement(St.Provider, {
    value: e
  }, t), [
    t,
    e
  ])
}
function wt() {
  let {
    matches: e
  }
  = c.useContext(T);
  return e[e.length - 1]?.params ?? {
  }
}
function Tt(e, {
  relative: t
}
= {}) {
  let {
    matches: n
  }
  = c.useContext(T),
  {
    pathname: r
  }
  = E(),
  i = JSON.stringify(Me(n));
  return c.useMemo(() => Ne(e, JSON.parse(i), r, t === `path`), [
    e,
    i,
    r,
    t
  ])
}
function Et(e, t) {
  return Dt(e, t)
}
function Dt(e, t, n) {
  v(
    vt(),
    `useRoutes() may be used only in the context of a <Router> component.`
  );
  let {
    navigator: r
  }
  = c.useContext(w),
  {
    matches: i
  }
  = c.useContext(T),
  a = i[i.length - 1],
  o = a ? a.params : {
  };
  a &&
  a.pathname;
  let s = a ? a.pathnameBase : `/`;
  a &&
  a.route;
  let l = E(),
  u;
  if (t) {
    let e = typeof t == `string` ? S(t) : t;
    v(
      s === `/` ||
      e.pathname?.startsWith(s),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${ s }" but pathname "${ e.pathname }" was given in the \`location\` prop.`
    ),
    u = e
  } else u = l;
  let d = u.pathname ||
  `/`,
  f = d;
  if (s !== `/`) {
    let e = s.replace(/^\//, ``).split(`/`);
    f = `/` + d.replace(/^\//, ``).split(`/`).slice(e.length).join(`/`)
  }
  let p;
  p = n ? n.state.matches.length ? n.state.matches.map(e => Object.assign(e, {
    route: n.manifest[e.route.id] ||
    e.route
  })) : n.router.match(n.state.location) : ae(e, {
    pathname: f
  });
  let m = Pt(
    p &&
    p.map(
      e => Object.assign({
      }, e, {
        params: Object.assign({
        }, o, e.params),
        pathname: C(
          [s,
          r.encodeLocation ? r.encodeLocation(
            e.pathname.replace(/%/g, `%25`).replace(/\?/g, `%3F`).replace(/#/g, `%23`)
          ).pathname : e.pathname]
        ),
        pathnameBase: e.pathnameBase === `/` ? s : C(
          [s,
          r.encodeLocation ? r.encodeLocation(
            e.pathnameBase.replace(/%/g, `%25`).replace(/\?/g, `%3F`).replace(/#/g, `%23`)
          ).pathname : e.pathnameBase]
        )
      })
    ),
    i,
    n
  );
  return t &&
  m ? c.createElement(
    ct.Provider,
    {
      value: {
        location: {
          pathname: `/`,
          search: ``,
          hash: ``,
          state: null,
          key: `default`,
          mask: void 0,
          ...u
        },
        navigationType: `POP`
      }
    },
    m
  ) : m
}
function Ot() {
  let e = Bt(),
  t = Be(e) ? `${ e.status } ${ e.statusText }` : e instanceof Error ? e.message : JSON.stringify(e),
  n = e instanceof Error ? e.stack : null;
  return c.createElement(
    c.Fragment,
    null,
    c.createElement(`h2`, null, `Unexpected Application Error!`),
    c.createElement(`h3`, {
      style: {
        fontStyle: `italic`
      }
    }, t),
    n ? c.createElement(
      `pre`,
      {
        style: {
          padding: `0.5rem`,
          backgroundColor: `rgba(200,200,200, 0.5)`
        }
      },
      n
    ) : null,
    null
  )
}
var kt = c.createElement(Ot, null),
At = class extends c.Component {
  constructor(e) {
    super (e),
    this.state = {
      location: e.location,
      revalidation: e.revalidation,
      error: e.error
    }
  }
  static contextType = rt;
  static getDerivedStateFromError(e) {
    return {
      error: e
    }
  }
  static getDerivedStateFromProps(e, t) {
    return t.location !== e.location ||
    t.revalidation !== `idle` &&
    e.revalidation === `idle` ? {
      error: e.error,
      location: e.location,
      revalidation: e.revalidation
    }
     : {
      error: e.error === void 0 ? t.error : e.error,
      location: t.location,
      revalidation: e.revalidation ||
      t.revalidation
    }
  }
  componentDidCatch(e, t) {
    this.props.onError ? this.props.onError(e, t) : console.error(`React Router caught the following error during render`, e)
  }
  render() {
    let e = this.state.error;
    if (
      this.context &&
      typeof e == `object` &&
      e &&
      `digest` in e &&
      typeof e.digest == `string`
    ) {
      let t = gt(e.digest);
      t &&
      (e = t)
    }
    let t = e === void 0 ? this.props.children : c.createElement(
      T.Provider,
      {
        value: this.props.routeContext
      },
      c.createElement(
        lt.Provider,
        {
          value: this.props.routeContext.isDataRoute
        },
        c.createElement(
          ut.Provider,
          {
            value: this.props.routeContext.matches[this.props.routeContext.matches.length - 1]?.route.id
          },
          c.createElement(dt.Provider, {
            value: e,
            children: this.props.component
          })
        )
      )
    );
    return this.context ? c.createElement(Mt, {
      error: e
    }, t) : t
  }
},
jt = new WeakMap;
function Mt({
  children: e,
  error: t
}) {
  let {
    basename: n,
    navigator: r
  }
  = c.useContext(w);
  if (typeof t == `object` && t && `digest` in t && typeof t.digest == `string`) {
    let e = ht(t.digest);
    if (e) {
      let i = jt.get(t);
      if (i) throw i;
      let a = Ue(e.location, n),
      o = a.absoluteURL ||
      a.to;
      if (Je(e.location, o, Ge(r), `allow-explicit`), Qe(o)) throw Error(`Invalid redirect location`);
      if (He && !jt.get(t)) {
        if (a.isExternal || e.reloadDocument) window.location.href = o;
         else {
          let n = Promise.resolve().then(
            () => window.__reactRouterDataRouter.navigate(a.to, {
              replace: e.replace
            })
          );
          throw jt.set(t, n),
          n
        }
      }
      return c.createElement(`meta`, {
        httpEquiv: `refresh`,
        content: `0;url=${ o }`
      })
    }
  }
  return e
}
function Nt({
  routeContext: e,
  match: t,
  children: n
}) {
  let r = c.useContext($e);
  return r &&
  r.static &&
  r.staticContext &&
  (t.route.errorElement || t.route.ErrorBoundary) &&
  (r.staticContext._deepestRenderedBoundaryId = t.route.id),
  c.createElement(
    T.Provider,
    {
      value: e
    },
    c.createElement(
      lt.Provider,
      {
        value: e.isDataRoute
      },
      c.createElement(ut.Provider, {
        value: t.route.id
      }, n)
    )
  )
}
function Pt(e, t = [], n) {
  let r = n?.state;
  if (e == null) {
    if (!r) return null;
    if (r.errors) e = r.matches;
     else if (t.length === 0 && !r.initialized && r.matches.length > 0) e = r.matches;
     else return null
  }
  let i = e,
  a = r?.errors;
  if (a != null) {
    let e = i.findIndex(e => e.route.id && a?.[e.route.id] !== void 0);
    v(
      e >= 0,
      `Could not find a matching route for errors on route IDs: ${ Object.keys(a).join(`,`) }`
    ),
    i = i.slice(0, Math.min(i.length, e + 1))
  }
  let o = !1,
  s = - 1;
  if (n && r) {
    o = r.renderFallback;
    for (let e = 0; e < i.length; e++) {
      let t = i[e];
      if (
        (t.route.HydrateFallback || t.route.hydrateFallbackElement) &&
        (s = e),
        t.route.id
      ) {
        let {
          loaderData: e,
          errors: a
        }
        = r,
        c = t.route.loader &&
        !e.hasOwnProperty(t.route.id) &&
        (!a || a[t.route.id] === void 0);
        if (t.route.lazy || c) {
          n.isStatic &&
          (o = !0),
          i = s >= 0 ? i.slice(0, s + 1) : [
            i[0]
          ];
          break
        }
      }
    }
  }
  let l = n?.onError,
  u = r &&
  l ? (e, t) => {
    l(
      e,
      {
        location: r.location,
        params: r.matches?.[0]?.params ?? {
        },
        pattern: Ve(r.matches),
        errorInfo: t
      }
    )
  }
   : void 0;
  return i.reduceRight(
    (e, n, l) => {
      let d,
      f = !1,
      p = null,
      m = null;
      r &&
      (
        d = a &&
        n.route.id ? a[n.route.id] : void 0,
        p = n.route.errorElement ||
        kt,
        o &&
        (
          s < 0 &&
          l === 0 ? (
            Ut(
              `route-fallback`,
              !1,
              'No `HydrateFallback` element provided to render during initial hydration'
            ),
            f = !0,
            m = null
          ) : s === l &&
          (f = !0, m = n.route.hydrateFallbackElement || null)
        )
      );
      let h = t.concat(i.slice(0, l + 1)),
      g = () => {
        let t;
        return t = d ? p : f ? m : n.route.Component ? c.createElement(n.route.Component, null) : n.route.element ? n.route.element : e,
        c.createElement(
          Nt,
          {
            match: n,
            routeContext: {
              outlet: e,
              matches: h,
              isDataRoute: r != null
            },
            children: t
          }
        )
      };
      return r &&
      (n.route.ErrorBoundary || n.route.errorElement || l === 0) ? c.createElement(
        At,
        {
          location: r.location,
          revalidation: r.revalidation,
          component: p,
          error: d,
          children: g(),
          routeContext: {
            outlet: null,
            matches: h,
            isDataRoute: !0
          },
          onError: u
        }
      ) : g()
    },
    null
  )
}
function Ft(e) {
  return `${ e } must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`
}
function It(e) {
  let t = c.useContext($e);
  return v(t, Ft(e)),
  t
}
function Lt(e) {
  let t = c.useContext(et);
  return v(t, Ft(e)),
  t
}
function Rt(e) {
  let t = c.useContext(tt);
  return v(t, Ft(e)),
  t
}
function zt(e) {
  let t = c.useContext(ut);
  return v(
    t,
    `${ e } can only be used on routes that contain a unique "id"`
  ),
  t
}
function Bt() {
  let e = c.useContext(dt),
  t = Rt(`useRouteError`),
  n = zt(`useRouteError`);
  return e === void 0 ? t.errors?.[n] : e
}
function Vt() {
  let {
    router: e
  }
  = It(`useNavigate`),
  t = zt(`useNavigate`),
  n = c.useRef(!1);
  return c.useLayoutEffect(() => {
    n.current = !0
  }),
  c.useCallback(
    async(r, i = {}) => {
      y(n.current, yt),
      n.current &&
      (
        typeof r == `number` ? await e.navigate(r) : await e.navigate(r, {
          fromRouteId: t,
          ...i
        })
      )
    },
    [
      e,
      t
    ]
  )
}
var Ht = {};
function Ut(e, t, n) {
  !t &&
  !Ht[e] &&
  (Ht[e] = !0, y(!1, n))
}
function Wt(e, t) {
  if (e === !1 || e == null) throw Error(t)
}
function Gt(e, t, n) {
  let r = typeof e == `string` ? new URL(
    e,
    n ?? (
      typeof window > `u` ? `server://singlefetch/` : window.location.origin
    )
  ) : new URL(e);
  return n &&
  r.origin !== n &&
  (r = new URL(r.pathname + r.search + r.hash, n)),
  r.pathname.endsWith(`/`) ? r.pathname = `${ r.pathname }_.${ t }` : r.pathname = `${ r.pathname }.${ t }`,
  r
}
var Kt = `modulepreload`,
qt = function (e) {
  return `/` + e
},
Jt = {},
Yt = function (e) {
  return e.pathname.endsWith(`.css`)
},
Xt = function (e, t, n) {
  if (t in e) return e[t];
  let r = n();
  if (!r) {
    e[t] = void 0;
    return
  }
  let i = r.then(() => {
    e[t] = void 0
  }, n => {
    throw e[t] = void 0,
    n
  });
  return e[t] = i,
  i
},
D = function (e, t, n) {
  let r = Promise.resolve();
  if (t && t.length > 0) {
    let e,
    i = document.querySelector(`meta[property=csp-nonce]`),
    a = i?.nonce ||
    i?.getAttribute(`nonce`);
    function o(e) {
      return Promise.all(
        e.map(
          e => Promise.resolve(e).then(
            e => ({
              status: `fulfilled`,
              value: e
            }),
            e => ({
              status: `rejected`,
              reason: e
            })
          )
        )
      )
    }
    function s(e) {
      return import.meta.resolve ? new URL(import.meta.resolve(e)) : new URL(e, import.meta.url)
    }
    r = o(
      t.map(
        t => {
          t = qt(t, n);
          let r = s(t),
          i = Yt(r);
          return Xt(
            Jt,
            r.href,
            () => {
              if (e === void 0) {
                e = {
                  all: new Set,
                  styles: new Set
                };
                let t = document.getElementsByTagName(`link`);
                for (let n = t.length - 1; n >= 0; n--) {
                  let r = t[n];
                  e.all.add(r.href),
                  r.rel === `stylesheet` &&
                  e.styles.add(r.href)
                }
              }
              if ((i ? e.styles : e.all).has(r.href)) return;
              let t = document.createElement(`link`);
              if (
                t.rel = i ? `stylesheet` : Kt,
                i ||
                (t.as = `script`),
                t.crossOrigin = ``,
                t.href = r.href,
                a &&
                t.setAttribute(`nonce`, a),
                document.head.appendChild(t),
                i
              ) return new Promise(
                (e, n) => {
                  t.addEventListener(`load`, e),
                  t.addEventListener(`error`, () => n(Error(`Unable to preload CSS for ${ r }`)))
                }
              )
            }
          )
        }
      ).filter(e => e !== void 0)
    )
  }
  function i(e) {
    let t = new Event(`vite:preloadError`, {
      cancelable: !0
    });
    if (t.payload = e, window.dispatchEvent(t), !t.defaultPrevented) throw e
  }
  return r.then(
    t => {
      for (let e of t || []) e.status === `rejected` &&
      i(e.reason);
      return e().catch(i)
    }
  )
};
async function Zt(e, t) {
  if (e.id in t) return t[e.id];
  try {
    let n = await D(() => import (e.module), []);
    return t[e.id] = n,
    n
  } catch (t) {
    return console.error(
      `Error loading route module \`${ e.module }\`, reloading page...`
    ),
    console.error(t),
    window.__reactRouterContext &&
    window.__reactRouterContext.isSpaMode,
    window.location.reload(),
    new Promise(() => {
    })
  }
}
function Qt(e) {
  return e != null &&
  typeof e.page == `string`
}
function $t(e) {
  return e == null ? !1 : e.href == null ? e.rel === `preload` &&
  typeof e.imageSrcSet == `string` &&
  typeof e.imageSizes == `string` : typeof e.rel == `string` &&
  typeof e.href == `string`
}
async function en(e, t, n) {
  return on(
    (
      await Promise.all(
        e.map(
          async e => {
            let r = t.routes[e.route.id];
            if (r) {
              let e = await Zt(r, n);
              return e.links ? e.links() : []
            }
            return []
          }
        )
      )
    ).flat(1).filter($t).filter(e => e.rel === `stylesheet` || e.rel === `preload`).map(
      e => e.rel === `stylesheet` ? {
        ...e,
        rel: `prefetch`,
        as: `style`
      }
       : {
        ...e,
        rel: `prefetch`
      }
    )
  )
}
function tn(e, t, n, r, i, a) {
  let o = (e, t) => !n[t] ||
  e.route.id !== n[t].route.id,
  s = (e, t) => n[t].pathname !== e.pathname ||
  n[t].route.path?.endsWith(`*`) &&
  n[t].params[`*`] !== e.params[`*`];
  return a === `assets` ? t.filter((e, t) => o(e, t) || s(e, t)) : a === `data` ? t.filter(
    (t, a) => {
      let c = r.routes[t.route.id];
      if (!c || !c.hasLoader) return !1;
      if (o(t, a) || s(t, a)) return !0;
      if (t.route.shouldRevalidate) {
        let r = t.route.shouldRevalidate({
          currentUrl: new URL(i.pathname + i.search + i.hash, window.origin),
          currentParams: n[0]?.params ||
          {
          },
          nextUrl: new URL(e, window.origin),
          nextParams: t.params,
          defaultShouldRevalidate: !0
        });
        if (typeof r == `boolean`) return r
      }
      return !0
    }
  ) : []
}
function nn(e, t, {
  includeHydrateFallback: n
}
= {}) {
  return rn(
    e.map(
      e => {
        let r = t.routes[e.route.id];
        if (!r) return [];
        let i = [
          r.module
        ];
        return r.clientActionModule &&
        (i = i.concat(r.clientActionModule)),
        r.clientLoaderModule &&
        (i = i.concat(r.clientLoaderModule)),
        n &&
        r.hydrateFallbackModule &&
        (i = i.concat(r.hydrateFallbackModule)),
        r.imports &&
        (i = i.concat(r.imports)),
        i
      }
    ).flat(1)
  )
}
function rn(e) {
  return [...new Set(e)]
}
function an(e) {
  let t = {},
  n = Object.keys(e).sort();
  for (let r of n) t[r] = e[r];
  return t
}
function on(e, t) {
  let n = new Set,
  r = new Set(t);
  return e.reduce(
    (e, i) => {
      if (t && !Qt(i) && i.as === `script` && i.href && r.has(i.href)) return e;
      let a = JSON.stringify(an(i));
      return n.has(a) ||
      (n.add(a), e.push({
        key: a,
        link: i
      })),
      e
    },
    []
  )
}
var sn = c.createContext(void 0);
sn.displayName = `FrameworkContext`;
function cn() {
  let e = c.useContext(sn);
  return Wt(
    e,
    `You must render this element inside a <HydratedRouter> element`
  ),
  e
}
function ln(e, t) {
  let n = c.useContext(sn),
  [
    r,
    i
  ] = c.useState(!1),
  [
    a,
    o
  ] = c.useState(!1),
  {
    onFocus: s,
    onBlur: l,
    onMouseEnter: u,
    onMouseLeave: d,
    onTouchStart: f
  }
  = t,
  p = c.useRef(null);
  c.useEffect(
    () => {
      if (e === `render` && o(!0), e === `viewport`) {
        let e = new IntersectionObserver(e => {
          e.forEach(e => {
            o(e.isIntersecting)
          })
        }, {
          threshold: 0.5
        });
        return p.current &&
        e.observe(p.current),
        () => {
          e.disconnect()
        }
      }
    },
    [
      e
    ]
  ),
  c.useEffect(
    () => {
      if (r) {
        let e = setTimeout(() => {
          o(!0)
        }, 100);
        return () => {
          clearTimeout(e)
        }
      }
    },
    [
      r
    ]
  );
  let m = () => {
    i(!0)
  },
  h = () => {
    i(!1),
    o(!1)
  };
  return n ? e === `intent` ? [
    a,
    p,
    {
      onFocus: un(s, m),
      onBlur: un(l, h),
      onMouseEnter: un(u, m),
      onMouseLeave: un(d, h),
      onTouchStart: un(f, m)
    }
  ] : [
    a,
    p,
    {
    }
  ] : [
    !1,
    p,
    {
    }
  ]
}
function un(e, t) {
  return n => {
    e &&
    e(n),
    n.defaultPrevented ||
    t(n)
  }
}
function dn({
  page: e,
  ...t
}) {
  let n = it(),
  {
    nonce: r
  }
  = cn(),
  {
    router: i
  }
  = It(`PrefetchPageLinks`),
  a = c.useMemo(() => i.match(e), [
    i,
    i.routes,
    e
  ]);
  return a ? (
    t.nonce == null &&
    r &&
    (t = {
      ...t,
      nonce: r
    }),
    n ? c.createElement(pn, {
      page: e,
      matches: a,
      ...t
    }) : c.createElement(mn, {
      page: e,
      matches: a,
      ...t
    })
  ) : null
}
function fn(e) {
  let {
    manifest: t,
    routeModules: n
  }
  = cn(),
  [
    r,
    i
  ] = c.useState([]);
  return c.useEffect(
    () => {
      let r = !1;
      return en(e, t, n).then(e => {
        r ||
        i(e)
      }),
      () => {
        r = !0
      }
    },
    [
      e,
      t,
      n
    ]
  ),
  r
}
function pn({
  page: e,
  matches: t,
  ...n
}) {
  let r = E(),
  {
    unstable_apiServerOrigin: i
  }
  = cn(),
  a = c.useMemo(
    () => {
      if (e === r.pathname + r.search + r.hash) return [];
      let n = Gt(e, `rsc`, i),
      a = !1,
      o = [];
      for (let e of t) typeof e.route.shouldRevalidate == `function` ? a = !0 : o.push(e.route.id);
      return a &&
      o.length > 0 &&
      n.searchParams.set(`_routes`, o.join(`,`)),
      [
        i ? n.toString() : n.pathname + n.search
      ]
    },
    [
      e,
      r,
      t,
      i
    ]
  );
  return c.createElement(
    c.Fragment,
    null,
    a.map(
      e => c.createElement(`link`, {
        key: e,
        rel: `prefetch`,
        as: `fetch`,
        href: e,
        ...n
      })
    )
  )
}
function mn({
  page: e,
  matches: t,
  ...n
}) {
  let r = E(),
  {
    manifest: i,
    routeModules: a,
    unstable_apiServerOrigin: o
  }
  = cn(),
  {
    matches: s
  }
  = Lt(`PrefetchPageLinks`),
  {
    loaderData: l
  }
  = Rt(`PrefetchPageLinks`),
  u = c.useMemo(() => tn(e, t, s, i, r, `data`), [
    e,
    t,
    s,
    i,
    r
  ]),
  d = c.useMemo(() => tn(e, t, s, i, r, `assets`), [
    e,
    t,
    s,
    i,
    r
  ]),
  f = c.useMemo(
    () => {
      if (e === r.pathname + r.search + r.hash) return [];
      let n = new Set,
      s = !1;
      if (
        t.forEach(
          e => {
            let t = i.routes[e.route.id];
            t &&
            t.hasLoader &&
            (
              !u.some(t => t.route.id === e.route.id) &&
              e.route.id in l &&
              a[e.route.id]?.shouldRevalidate ||
              t.hasClientLoader ? s = !0 : n.add(e.route.id)
            )
          }
        ),
        n.size === 0
      ) return [];
      let c = Gt(e, `data`, o);
      return s &&
      n.size > 0 &&
      c.searchParams.set(
        `_routes`,
        t.filter(e => n.has(e.route.id)).map(e => e.route.id).join(`,`)
      ),
      [
        o ? c.toString() : c.pathname + c.search
      ]
    },
    [
      l,
      r,
      i,
      u,
      t,
      e,
      a,
      o
    ]
  ),
  p = c.useMemo(() => nn(d, i), [
    d,
    i
  ]),
  m = fn(d);
  return c.createElement(
    c.Fragment,
    null,
    f.map(
      e => c.createElement(`link`, {
        key: e,
        rel: `prefetch`,
        as: `fetch`,
        href: e,
        ...n
      })
    ),
    p.map(
      e => c.createElement(`link`, {
        key: e,
        rel: `modulepreload`,
        href: e,
        ...n
      })
    ),
    m.map(
      ({
        key: e,
        link: t
      }) => c.createElement(
        `link`,
        {
          key: e,
          nonce: n.nonce,
          ...t,
          crossOrigin: t.crossOrigin ?? n.crossOrigin
        }
      )
    )
  )
}
function hn(...e) {
  return t => {
    e.forEach(e => {
      typeof e == `function` ? e(t) : e != null &&
      (e.current = t)
    })
  }
}
c.memo(gn);
function gn({
  routes: e,
  manifest: t,
  state: n,
  isStatic: r,
  onError: i
}) {
  let a = c.useContext($e);
  v(
    a,
    `You must render this element inside a <DataRouterContext.Provider> element`
  );
  let o = c.useContext(sn) ?.routeDiscoveryRuntime;
  return c.useEffect(() => {
    n.initialized &&
    o?.markReady()
  }, [
    n.initialized,
    o
  ]),
  Dt(
    e,
    void 0,
    {
      router: a.router,
      manifest: t,
      state: n,
      isStatic: r,
      onError: i
    }
  )
}
function _n({
  to: e,
  replace: t,
  state: n,
  relative: r
}) {
  v(
    vt(),
    `<Navigate> may be used only in the context of a <Router> component.`
  );
  let {
    static: i,
    navigator: a
  }
  = c.useContext(w);
  y(
    !i,
    `<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.`
  );
  let {
    matches: o
  }
  = c.useContext(T),
  {
    pathname: s
  }
  = E(),
  l = bt(),
  u = Ne(e, Me(o), s, r === `path`);
  Je(typeof e == `string` ? e : x(e), a.createHref(u), Ge(a), `reject`);
  let d = JSON.stringify(u);
  return c.useEffect(
    () => {
      l(JSON.parse(d), {
        replace: t,
        state: n,
        relative: r
      })
    },
    [
      l,
      d,
      r,
      t,
      n
    ]
  ),
  null
}
function vn(e) {
  return Ct(e.context)
}
function yn(e) {
  v(
    !1,
    `A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.`
  )
}
function bn({
  basename: e = `/`,
  children: t = null,
  location: n,
  navigationType: r = `POP`,
  navigator: i,
  static: a = !1,
  useTransitions: o
}) {
  v(
    !vt(),
    `You cannot render a <Router> inside another <Router>. You should never have more than one in your app.`
  );
  let s = e.replace(/^\/*/, `/`),
  l = c.useMemo(
    () => ({
      basename: s,
      navigator: i,
      static: a,
      useTransitions: o,
      future: {
      }
    }),
    [
      s,
      i,
      a,
      o
    ]
  );
  typeof n == `string` &&
  (n = S(n));
  let {
    pathname: u = `/`,
    search: d = ``,
    hash: f = ``,
    state: p = null,
    key: m = `default`,
    mask: h
  }
  = n,
  g = c.useMemo(
    () => {
      let e = De(u, s);
      return e == null ? null : {
        location: {
          pathname: e,
          search: d,
          hash: f,
          state: p,
          key: m,
          mask: h
        },
        navigationType: r
      }
    },
    [
      s,
      u,
      d,
      f,
      p,
      m,
      r,
      h
    ]
  );
  return y(
    g != null,
    `<Router basename="${ s }"> is not able to match the URL "${ u }${ d }${ f }" because it does not start with the basename, so the <Router> won't render anything.`
  ),
  g == null ? null : c.createElement(
    w.Provider,
    {
      value: l
    },
    c.createElement(ct.Provider, {
      children: t,
      value: g
    })
  )
}
function xn({
  children: e,
  location: t
}) {
  return Et(Sn(e), t)
}
c.Component;
function Sn(e, t = []) {
  let n = [];
  return c.Children.forEach(
    e,
    (e, r) => {
      if (!c.isValidElement(e)) return;
      let i = [
        ...t,
        r
      ];
      if (e.type === c.Fragment) {
        n.push.apply(n, Sn(e.props.children, i));
        return
      }
      v(
        e.type === yn,
        `[${ typeof e.type == `string` ? e.type : e.type.name }] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
      );
      let a = e.props;
      v(
        !a.index ||
        !a.children,
        `An index route cannot have child routes.`
      );
      let o = {
        id: a.id ||
        i.join(`-`),
        caseSensitive: a.caseSensitive,
        element: a.element,
        Component: a.Component,
        index: a.index,
        path: a.path,
        middleware: a.middleware,
        loader: a.loader,
        action: a.action,
        hydrateFallbackElement: a.hydrateFallbackElement,
        HydrateFallback: a.HydrateFallback,
        errorElement: a.errorElement,
        ErrorBoundary: a.ErrorBoundary,
        shouldRevalidate: a.shouldRevalidate,
        handle: a.handle,
        lazy: a.lazy
      };
      a.children &&
      (o.children = Sn(a.children, i)),
      n.push(o)
    }
  ),
  n
}
var Cn = `application/x-www-form-urlencoded`;
function wn(e) {
  return typeof HTMLElement < `u` &&
  e instanceof HTMLElement
}
function Tn(e) {
  return wn(e) &&
  e.tagName.toLowerCase() === `button`
}
function En(e) {
  return wn(e) &&
  e.tagName.toLowerCase() === `form`
}
function Dn(e) {
  return wn(e) &&
  e.tagName.toLowerCase() === `input`
}
function On(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
}
function kn(e, t) {
  return e.button === 0 &&
  (!t || t === `_self`) &&
  !On(e)
}
function An(e = ``) {
  return new URLSearchParams(
    typeof e == `string` ||
    Array.isArray(e) ||
    e instanceof URLSearchParams ? e : Object.keys(e).reduce(
      (t, n) => {
        let r = e[n];
        return t.concat(Array.isArray(r) ? r.map(e => [n,
        e]) : [
          [n,
          r]
        ])
      },
      []
    )
  )
}
function jn(e, t) {
  let n = An(e);
  return t &&
  t.forEach((e, r) => {
    n.has(r) ||
    t.getAll(r).forEach(e => {
      n.append(r, e)
    })
  }),
  n
}
var Mn = null;
function Nn() {
  if (Mn === null) try {
    new FormData(document.createElement(`form`), 0),
    Mn = !1
  } catch {
    Mn = !0
  }
  return Mn
}
var Pn = new Set(
  [`application/x-www-form-urlencoded`,
  `multipart/form-data`,
  `text/plain`]
);
function Fn(e) {
  return e != null &&
  !Pn.has(e) ? (
    y(
      !1,
      `"${ e }" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ Cn }"`
    ),
    null
  ) : e
}
function In(e, t) {
  let n,
  r,
  i,
  a,
  o;
  if (En(e)) {
    let o = e.getAttribute(`action`);
    r = o ? De(o, t) : null,
    n = e.getAttribute(`method`) ||
    `get`,
    i = Fn(e.getAttribute(`enctype`)) ||
    Cn,
    a = new FormData(e)
  } else if (Tn(e) || Dn(e) && (e.type === `submit` || e.type === `image`)) {
    let o = e.form;
    if (o == null) throw Error(
      `Cannot submit a <button> or <input type="submit"> without a <form>`
    );
    let s = e.getAttribute(`formaction`) ||
    o.getAttribute(`action`);
    if (
      r = s ? De(s, t) : null,
      n = e.getAttribute(`formmethod`) ||
      o.getAttribute(`method`) ||
      `get`,
      i = Fn(e.getAttribute(`formenctype`)) ||
      Fn(o.getAttribute(`enctype`)) ||
      Cn,
      a = new FormData(o, e),
      !Nn()
    ) {
      let {
        name: t,
        type: n,
        value: r
      }
      = e;
      if (n === `image`) {
        let e = t ? `${ t }.` : ``;
        a.append(`${ e }x`, `0`),
        a.append(`${ e }y`, `0`)
      } else t &&
      a.append(t, r)
    }
  } else if (wn(e)) throw Error(
    `Cannot submit element that is not <form>, <button>, or <input type="submit|image">`
  );
   else n = `get`,
  r = null,
  i = Cn,
  o = e;
  return a &&
  i === `text/plain` &&
  (o = a, a = void 0),
  {
    action: r,
    method: n.toLowerCase(),
    encType: i,
    formData: a,
    body: o
  }
}
var Ln = typeof window < `u` &&
window.document !== void 0 &&
window.document.createElement !== void 0;
try {
  Ln &&
  (window.__reactRouterVersion = `8`)
} catch {
}
function Rn({
  basename: e,
  children: t,
  useTransitions: n,
  window: r
}) {
  let i = c.useRef(null);
  i.current ??= ee({
    window: r,
    v5Compat: !0
  });
  let a = i.current,
  [
    o,
    s
  ] = c.useState({
    action: a.action,
    location: a.location
  }),
  l = c.useCallback(e => {
    n === !1 ? s(e) : c.startTransition(() => s(e))
  }, [
    n
  ]);
  return c.useLayoutEffect(() => a.listen(l), [
    a,
    l
  ]),
  c.createElement(
    bn,
    {
      basename: e,
      children: t,
      location: o.location,
      navigationType: o.action,
      navigator: a,
      useTransitions: n
    }
  )
}
var zn = c.forwardRef(
  function ({
    onClick: e,
    discover: t = `render`,
    prefetch: n = `none`,
    relative: r,
    reloadDocument: i,
    replace: a,
    mask: o,
    state: s,
    target: l,
    to: u,
    preventScrollReset: d,
    viewTransition: f,
    defaultShouldRevalidate: m,
    ...h
  }, g) {
    let {
      basename: _,
      navigator: ee,
      useTransitions: v
    }
    = c.useContext(w),
    y = typeof u == `string` &&
    p.test(u),
    b = Ue(u, _);
    u = b.to;
    let te = _t(u, {
      relative: r
    }),
    ne = E(),
    x = null;
    if (o) {
      let e = Ne(o, [], ne.mask ? ne.mask.pathname : `/`, !0);
      _ !== `/` &&
      (e.pathname = e.pathname === `/` ? _ : C([_,
      e.pathname])),
      x = ee.createHref(e)
    }
    let[S,
    re,
    ie] = ln(n, h),
    ae = Hn(
      u,
      {
        replace: a,
        mask: o,
        state: s,
        target: l,
        preventScrollReset: d,
        relative: r,
        viewTransition: f,
        defaultShouldRevalidate: m,
        useTransitions: v
      }
    );
    function oe(t) {
      e &&
      e(t),
      t.defaultPrevented ||
      ae(t)
    }
    let se = !(b.isExternal || i),
    ce = c.createElement(
      `a`,
      {
        ...h,
        ...ie,
        href: (se ? x : void 0) ||
        b.absoluteURL ||
        te,
        onClick: se ? oe : e,
        ref: hn(g, re),
        target: l,
        'data-discover': !y &&
        t === `render` ? `true` : void 0
      }
    );
    return S &&
    !y ? c.createElement(c.Fragment, null, ce, c.createElement(dn, {
      page: te
    })) : ce
  }
);
zn.displayName = `Link`;
var Bn = c.forwardRef(
  function ({
    'aria-current': e = `page`,
    caseSensitive: t = !1,
    className: n = ``,
    end: r = !1,
    style: i,
    to: a,
    viewTransition: o,
    children: s,
    ...l
  }, u) {
    let d = Tt(a, {
      relative: l.relative
    }),
    f = E(),
    p = c.useContext(nt),
    {
      navigator: m,
      basename: h
    }
    = c.useContext(w),
    g = p != null &&
    Jn(d) &&
    o === !0,
    _ = m.encodeLocation ? m.encodeLocation(d).pathname : d.pathname,
    ee = f.pathname,
    v = p?.navigation.location ? p.navigation.location.pathname : null;
    t ||
    (
      ee = ee.toLowerCase(),
      v = v ? v.toLowerCase() : null,
      _ = _.toLowerCase()
    ),
    v &&
    h &&
    (v = De(v, h) || v);
    let y = _ !== `/` &&
    _.endsWith(`/`) ? _.length - 1 : _.length,
    b = ee === _ ||
    !r &&
    ee.startsWith(_) &&
    ee.charAt(y) === `/`,
    te = v != null &&
    (v === _ || !r && v.startsWith(_) && v.charAt(y) === `/`),
    ne = {
      isActive: b,
      isPending: te,
      isTransitioning: g
    },
    x = b ? e : void 0,
    S;
    S = typeof n == `function` ? n(ne) : [
      n,
      b ? `active` : null,
      te ? `pending` : null,
      g ? `transitioning` : null
    ].filter(Boolean).join(` `);
    let re = typeof i == `function` ? i(ne) : i;
    return c.createElement(
      zn,
      {
        ...l,
        'aria-current': x,
        className: S,
        ref: u,
        style: re,
        to: a,
        viewTransition: o
      },
      typeof s == `function` ? s(ne) : s
    )
  }
);
Bn.displayName = `NavLink`;
var Vn = c.forwardRef(
  ({
    discover: e = `render`,
    fetcherKey: t,
    navigate: n,
    reloadDocument: r,
    replace: i,
    state: a,
    method: o = `get`,
    action: s,
    onSubmit: l,
    relative: u,
    preventScrollReset: d,
    viewTransition: f,
    defaultShouldRevalidate: m,
    ...h
  }, g) => {
    let {
      useTransitions: _
    }
    = c.useContext(w),
    ee = Kn(),
    v = qn(s, {
      relative: u
    }),
    y = o.toLowerCase() === `get` ? `get` : `post`,
    b = typeof s == `string` &&
    p.test(s);
    return c.createElement(
      `form`,
      {
        ref: g,
        method: y,
        action: v,
        onSubmit: r ? l : e => {
          if (l && l(e), e.defaultPrevented) return;
          e.preventDefault();
          let r = e.nativeEvent.submitter,
          s = r?.getAttribute(`formmethod`) ||
          o,
          p = () => ee(
            r ||
            e.currentTarget,
            {
              fetcherKey: t,
              method: s,
              navigate: n,
              replace: i,
              state: a,
              relative: u,
              preventScrollReset: d,
              viewTransition: f,
              defaultShouldRevalidate: m
            }
          );
          _ &&
          n !== !1 ? c.startTransition(() => p()) : p()
        },
        ...h,
        'data-discover': !b &&
        e === `render` ? `true` : void 0
      }
    )
  }
);
Vn.displayName = `Form`;
function Hn(
  e,
  {
    target: t,
    replace: n,
    mask: r,
    state: i,
    preventScrollReset: a,
    relative: o,
    viewTransition: s,
    defaultShouldRevalidate: l,
    useTransitions: u
  }
  = {}
) {
  let d = bt(),
  f = E(),
  p = Tt(e, {
    relative: o
  });
  return c.useCallback(
    m => {
      if (kn(m, t)) {
        m.preventDefault();
        let t = n === void 0 ? x(f) === x(p) : n,
        h = () => d(
          e,
          {
            replace: t,
            mask: r,
            state: i,
            preventScrollReset: a,
            relative: o,
            viewTransition: s,
            defaultShouldRevalidate: l
          }
        );
        u ? c.startTransition(() => h()) : h()
      }
    },
    [
      f,
      d,
      p,
      n,
      r,
      i,
      t,
      e,
      a,
      o,
      s,
      l,
      u
    ]
  )
}
function Un(e) {
  y(
    typeof URLSearchParams < `u`,
    'You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.'
  );
  let t = c.useRef(An(e)),
  n = c.useRef(!1),
  r = E(),
  i = c.useMemo(() => jn(r.search, n.current ? null : t.current), [
    r.search
  ]),
  a = bt();
  return [i,
  c.useCallback(
    (e, t) => {
      let r = An(typeof e == `function` ? e(new URLSearchParams(i)) : e);
      n.current = !0,
      a(`?` + r, t)
    },
    [
      a,
      i
    ]
  )]
}
var Wn = 0,
Gn = () => `__${ String(++Wn) }__`;
function Kn() {
  let {
    router: e
  }
  = It(`useSubmit`),
  {
    basename: t
  }
  = c.useContext(w),
  n = zt(`useSubmit`),
  r = e.fetch,
  i = e.navigate;
  return c.useCallback(
    async(e, a = {}) => {
      let {
        action: o,
        method: s,
        encType: c,
        formData: l,
        body: u
      }
      = In(e, t);
      a.navigate === !1 ? await r(
        a.fetcherKey ||
        Gn(),
        n,
        a.action ||
        o,
        {
          defaultShouldRevalidate: a.defaultShouldRevalidate,
          preventScrollReset: a.preventScrollReset,
          relative: a.relative,
          formData: l,
          body: u,
          formMethod: a.method ||
          s,
          formEncType: a.encType ||
          c,
          flushSync: a.flushSync
        }
      ) : await i(
        a.action ||
        o,
        {
          defaultShouldRevalidate: a.defaultShouldRevalidate,
          preventScrollReset: a.preventScrollReset,
          relative: a.relative,
          formData: l,
          body: u,
          formMethod: a.method ||
          s,
          formEncType: a.encType ||
          c,
          replace: a.replace,
          state: a.state,
          fromRouteId: n,
          flushSync: a.flushSync,
          viewTransition: a.viewTransition
        }
      )
    },
    [
      r,
      i,
      t,
      n
    ]
  )
}
function qn(e, {
  relative: t
}
= {}) {
  let {
    basename: n
  }
  = c.useContext(w),
  r = c.useContext(T);
  v(r, `useFormAction must be used inside a RouteContext`);
  let[i] = r.matches.slice( - 1),
  a = {
    ...Tt(e || `.`, {
      relative: t
    })
  },
  o = E();
  if (e == null) {
    a.search = o.search;
    let e = new URLSearchParams(a.search),
    t = e.getAll(`index`);
    if (t.some(e => e === ``)) {
      e.delete(`index`),
      t.filter(e => e).forEach(t => e.append(`index`, t));
      let n = e.toString();
      a.search = n ? `?${ n }` : ``
    }
  }
  return (!e || e === `.`) &&
  i.route.index &&
  (a.search = a.search ? a.search.replace(/^\?/, `?index&`) : `?index`),
  n !== `/` &&
  (a.pathname = a.pathname === `/` ? n : C([n,
  a.pathname])),
  x(a)
}
function Jn(e, {
  relative: t
}
= {}) {
  let n = c.useContext(at);
  v(
    n != null,
    '`useViewTransitionState` must be used within `react-router/dom`\'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?'
  );
  let {
    basename: r
  }
  = It(`useViewTransitionState`),
  i = Tt(e, {
    relative: t
  });
  if (!n.isTransitioning) return !1;
  let a = De(n.currentLocation.pathname, r) ||
  n.currentLocation.pathname,
  o = De(n.nextLocation.pathname, r) ||
  n.nextLocation.pathname;
  return Ce(i.pathname, o) != null ||
  Ce(i.pathname, a) != null
}
var Yn = [
  `common`,
  `uncommon`,
  `rare`,
  `epic`,
  `legendary`,
  `mythic`,
  `divine`
],
Xn = [
  `restricted`
],
Zn = [
  ...Yn,
  ...Xn
],
Qn = {
  common: `#9ca3af`,
  uncommon: `#4ade80`,
  rare: `#60a5fa`,
  epic: `#c084fc`,
  legendary: `#fbbf24`,
  mythic: `#ff66aa`,
  divine: `#22e3ff`,
  restricted: `#ff2b2b`
};
function $n(e) {
  return Zn.indexOf(e)
}
var er = [
  {
    id: `osu`,
    label: `en`,
    postable: !0,
    dot: !0,
    page: 100
  },
  {
    id: `cn`,
    postable: !0,
    dot: !1,
    page: 100
  },
  {
    id: `pulls`,
    postable: !1,
    dot: !1,
    page: 50
  },
  {
    id: `guild`,
    postable: !0,
    dot: !0,
    page: 100,
    guildOnly: !0
  }
],
tr = er.map(e => e.id),
nr = e => er.find(t => t.id === e),
rr = e => nr(e).label ?? e,
ir = e => typeof e == `string` &&
tr.includes(e);
function ar(e) {
  let t = Object.values(e).filter(e => typeof e == `number`);
  return Object.entries(e).filter(([e,
  n]) => t.indexOf( + e) === - 1).map(([e,
  t]) => t)
}
function or(e, t = `|`) {
  return e.map(e => Ar(e)).join(t)
}
function sr(e, t) {
  return typeof t == `bigint` ? t.toString() : t
}
var cr = class {
  constructor(e) {
    this._getter = e,
    this._value = void 0
  }
  get value() {
    let e = this._getter;
    return e !== void 0 &&
    (this._value = e(), this._getter = void 0),
    this._value
  }
};
function lr(e) {
  return new cr(e)
}
function ur(e) {
  return e == null
}
function dr(e) {
  let t = + !!e.startsWith(`^`),
  n = e.endsWith(`$`) ? e.length - 1 : e.length;
  return e.slice(t, n)
}
function fr(e, t) {
  let n = e / t,
  r = Math.round(n),
  i = 4 * 2** - 52 * Math.max(Math.abs(n), 1);
  return Math.abs(n - r) < i ? 0 : n - r
}
function pr(e, t, n) {
  Object.defineProperty(e, t, {
    value: n,
    writable: !0,
    enumerable: !0,
    configurable: !0
  })
}
function mr(e) {
  let t = Object.getOwnPropertyDescriptor(e, `shape`);
  return t?.get ? t.get.raw : t?.value
}
function hr(e) {
  return mr(e._zod.def) ?? e._zod.def.shape
}
function gr(e, t, n) {
  Object.defineProperty(
    e,
    t,
    {
      get() {
        let e = n();
        return pr(this, t, e),
        e
      },
      enumerable: !0,
      configurable: !0
    }
  )
}
function _r(e, t, n) {
  t in e ? pr(e, t, n) : e[t] = n
}
function vr(e, t, n, r) {
  let i = hr(t);
  for (let a of n) {
    let n = Object.getOwnPropertyDescriptor(i, a);
    n.enumerable &&
    (
      n.get ? gr(e, a, () => {
        let e = t._zod.def.shape[a];
        return r ? r(e, a) : e
      }) : _r(e, a, r ? r(n.value, a) : n.value)
    )
  }
}
function yr(e, t) {
  for (let n of Reflect.ownKeys(t)) {
    let r = Object.getOwnPropertyDescriptor(t, n);
    r.enumerable &&
    (r.get ? gr(e, n, () => t[n]) : _r(e, n, r.value))
  }
}
function O(...e) {
  let t = {};
  for (let n of e) {
    let e = Object.getOwnPropertyDescriptors(n);
    Object.assign(t, e)
  }
  return Object.defineProperties({
  }, t)
}
function br(e) {
  return JSON.stringify(e)
}
function xr(e) {
  return e.toLowerCase().trim().replace(/[^\w\s-]/g, ``).replace(/[\s_-]+/g, `-`).replace(/^-+|-+$/g, ``)
}
var Sr = `captureStackTrace` in Error ? Error.captureStackTrace : (...e) => {
};
function Cr(e) {
  return typeof e == `object` &&
  !!e &&
  !Array.isArray(e)
}
var wr = lr(
  () => {
    if (
      M.jitless ||
      typeof navigator < `u` &&
      navigator?.userAgent?.includes(`Cloudflare`)
    ) return !1;
    try {
      return Function(``),
      !0
    } catch {
      return !1
    }
  }
);
function Tr(e) {
  if (Cr(e) === !1) return !1;
  let t = e.constructor;
  if (t === void 0 || typeof t != `function`) return !0;
  let n = t.prototype;
  return Cr(n) !== !1 &&
  Object.prototype.hasOwnProperty.call(n, `isPrototypeOf`) !== !1
}
function Er(e) {
  return Tr(e) ? {
    ...e
  }
   : Array.isArray(e) ? [
    ...e
  ] : e instanceof Map ? new Map(e) : e instanceof Set ? new Set(e) : e
}
var Dr = new Set([`string`,
`number`,
`symbol`]);
function Or(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, `\\$&`)
}
function kr(e, t, n) {
  let r = new e._zod.constr(t ?? e._zod.def);
  return (!t || n?.parent) &&
  (r._zod.parent = e),
  r
}
function k(e) {
  let t = e;
  if (!t) return {
  };
  if (typeof t == `string`) return {
    error: () => t
  };
  if (t?.message !== void 0) {
    if (t?.error !== void 0) throw Error('Cannot specify both `message` and `error` params');
    t.error = t.message
  }
  return delete t.message,
  typeof t.error == `string` ? {
    ...t,
    error: () => t.error
  }
   : t
}
function Ar(e) {
  return typeof e == `bigint` ? e.toString() + `n` : typeof e == `string` ? `"${ e }"` : `${ e }`
}
function jr(e) {
  return Object.keys(e).filter(t => e[t]._zod.optin !== void 0 && e[t]._zod.optout === `optional`)
}
var Mr = {
  safeint: [
    - (2**53 - 1),
    2**53 - 1
  ],
  int32: [
    - 2147483648,
    2147483647
  ],
  uint32: [
    0,
    4294967295
  ],
  float32: [
    - 3.4028234663852886e+38,
    3.4028234663852886e+38
  ],
  float64: [
    - Number.MAX_VALUE,
    Number.MAX_VALUE
  ]
},
Nr = {
  int64: [
    BigInt(`-9223372036854775808`),
    BigInt(`9223372036854775807`)
  ],
  uint64: [
    BigInt(0),
    BigInt(`18446744073709551615`)
  ]
};
function Pr(e, t) {
  let n = e._zod.def,
  r = n.checks;
  if (r && r.length > 0) throw Error(
    `.pick() cannot be used on object schemas containing refinements`
  );
  let i = {};
  return vr(i, e, Fr(e, t)),
  kr(e, O(n, {
    shape: i,
    checks: []
  }))
}
function Fr(e, t) {
  let n = hr(e),
  r = [];
  for (let e of Reflect.ownKeys(t)) {
    if (!Object.getOwnPropertyDescriptor(n, e) ?.enumerable) throw Error(`Unrecognized key: "${ String(e) }"`);
    t[e] &&
    r.push(e)
  }
  return r
}
function Ir(e, t) {
  let n = e._zod.def,
  r = n.checks;
  if (r && r.length > 0) throw Error(
    `.omit() cannot be used on object schemas containing refinements`
  );
  let i = new Set(Fr(e, t)),
  a = {};
  return vr(a, e, Reflect.ownKeys(hr(e)).filter(e => !i.has(e))),
  kr(e, O(n, {
    shape: a,
    checks: []
  }))
}
function Lr(e, t) {
  if (!Tr(t)) throw Error(`Invalid input to extend: expected a plain object`);
  let n = e._zod.def.checks;
  if (n && n.length > 0) {
    let n = hr(e);
    for (let e of Reflect.ownKeys(t)) if (Object.getOwnPropertyDescriptor(n, e) !== void 0) throw Error(
      'Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.'
    )
  }
  return kr(e, O(e._zod.def, {
    shape: Rr(e, t)
  }))
}
function Rr(e, t) {
  let n = {};
  return vr(n, e, Reflect.ownKeys(hr(e))),
  yr(n, t),
  n
}
function zr(e, t) {
  if (!Tr(t)) throw Error(`Invalid input to safeExtend: expected a plain object`);
  return kr(e, O(e._zod.def, {
    shape: Rr(e, t)
  }))
}
function Br(e, t) {
  if (!t?._zod?.def) throw Error(
    'Invalid input to merge: expected an object schema. To merge a plain shape, use `.extend()`.'
  );
  if (e._zod.def.checks?.length) throw Error(
    `.merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.`
  );
  let n = {};
  return vr(n, e, Reflect.ownKeys(hr(e))),
  vr(n, t, Reflect.ownKeys(hr(t))),
  kr(
    e,
    O(
      e._zod.def,
      {
        shape: n,
        get catchall() {
          return t._zod.def.catchall
        },
        checks: t._zod.def.checks ?? []
      }
    )
  )
}
function Vr(e, t, n, r = `partial`) {
  let i = t._zod.def.checks;
  if (i && i.length > 0) throw Error(
    `.${ r }() cannot be used on object schemas containing refinements`
  );
  let a = n ? new Set(Fr(t, n)) : void 0,
  o = {};
  return vr(
    o,
    t,
    Reflect.ownKeys(hr(t)),
    e &&
    ((t, n) => a && !a.has(n) ? t : new e({
      type: `optional`,
      innerType: t
    }))
  ),
  kr(t, O(t._zod.def, {
    shape: o,
    checks: []
  }))
}
function Hr(e, t, n) {
  let r = n ? new Set(Fr(t, n)) : void 0,
  i = {};
  return vr(
    i,
    t,
    Reflect.ownKeys(hr(t)),
    (t, n) => r &&
    !r.has(n) ? t : new e({
      type: `nonoptional`,
      innerType: t
    })
  ),
  kr(t, O(t._zod.def, {
    shape: i
  }))
}
function Ur(e, t = 0) {
  if (e.aborted === !0) return !0;
  for (let n = t; n < e.issues.length; n++) if (e.issues[n]?.continue !== !0) return !0;
  return !1
}
function Wr(e, t = 0) {
  if (e.aborted === !0) return !0;
  for (let n = t; n < e.issues.length; n++) if (e.issues[n]?.continue === !1) return !0;
  return !1
}
function Gr(e, t) {
  return t.map(t => {
    var n;
    return (n = t).path ?? (n.path = []),
    t.path.unshift(e),
    t
  })
}
function Kr(e) {
  return typeof e == `string` ? e : e?.message
}
function qr(e) {
  let t = [];
  for (let n of e ?? []) {
    let e = n._zod.def;
    if (!/_(length|size)$|_equals$/.test(e.check)) break;
    let r = e.maximum ?? e.length ?? e.size;
    r >= 0 &&
    t.push([r,
    n])
  }
  return t
}
function Jr(e, t, n) {
  var r;
  for (let i = t; i < e.length; i++) (r = e[i]).schema ?? (r.schema = n)
}
function Yr(e, t, n) {
  var r;
  let i = e.inst?._zod?.traits;
  i?.has(`$ZodType`) &&
  (
    i.has(`$ZodCheck`) ? (r = e).schema ?? (r.schema = e.inst) : e.schema = e.inst
  );
  let a = e.schema === e.inst ? void 0 : e.schema?._zod.def?.error,
  o = e.message ? e.message : Kr(e.inst?._zod.def?.error?.(e)) ?? Kr(a?.(e)) ?? Kr(t?.error?.(e)) ?? Kr(n.customError?.(e)) ?? Kr(n.localeError?.(e)) ?? `Invalid input`,
  s = {};
  for (let t of Object.keys(e)) t !== `inst` &&
  t !== `schema` &&
  t !== `continue` &&
  t !== `input` &&
  t !== `__proto__` &&
  (s[t] = e[t]);
  return s.path ??= [],
  s.message = o,
  t?.reportInput &&
  (s.input = e.input),
  s
}
var Xr = /[\uD800-\uDBFF]/;
function Zr(e) {
  let t = e.length;
  if (!Xr.test(e)) return t;
  let n = t;
  for (let r = 0; r < t - 1; r++) (e.charCodeAt(r) & 64512) == 55296 &&
  (e.charCodeAt(r + 1) & 64512) == 56320 &&
  (n--, r++);
  return n
}
function Qr(e) {
  return Array.isArray(e) ? `array` : typeof e == `string` ? `string` : `unknown`
}
function $r(e) {
  let t = typeof e;
  switch (t) {
    case `number`:
      return Number.isNaN(e) ? `nan` : `number`;
    case `object`:
      {
        if (e === null) return `null`;
        if (Array.isArray(e)) return `array`;
        let t = e;
        if (
          t &&
          Object.getPrototypeOf(t) !== Object.prototype &&
          `constructor` in t &&
          t.constructor
        ) return t.constructor.name
      }
  }
  return t
}
function ei(...e) {
  let[t,
  n,
  r] = e;
  return typeof t == `string` ? {
    message: t,
    code: `custom`,
    input: n,
    inst: r
  }
   : {
    ...t
  }
}
function ti(e, t) {
  for (let n in t) {
    let r = Object.getOwnPropertyDescriptor(t, n);
    r.get ? Object.defineProperty(e, n, {
      ...r,
      enumerable: !1
    }) : ai(e, n, r.value)
  }
}
function ni(e, t, n, r = !0) {
  return Object.defineProperty(e, t, {
    configurable: !0,
    writable: !0,
    enumerable: r,
    value: n
  }),
  n
}
function ri(e, t, n) {
  return ni(e, t, n, !1)
}
function ii(e, t) {
  for (let n in e) {
    let r = e[n];
    Object.defineProperty(
      t,
      n,
      {
        configurable: !0,
        enumerable: !0,
        get() {
          return ni(this, n, r(this))
        },
        set(e) {
          ni(this, n, e)
        }
      }
    )
  }
  return t
}
function ai(e, t, n) {
  Object.defineProperty(
    e,
    t,
    {
      configurable: !0,
      get() {
        return this == null ? n : ni(this, t, n.bind(this))
      },
      set(e) {
        ni(this, t, e)
      }
    }
  )
}
function oi(e, t) {
  let n = Object.getPrototypeOf(e);
  return t in n ? void 0 : n
}
var si,
ci = !1,
li = {
  configurable: !0,
  get() {
    ci = !0
  }
};
function A(e, t, n) {
  let r = Object.getPrototypeOf(e._zod);
  t in r &&
  si !== e._zod ? si = void 0 : (
    si = e._zod,
    Object.defineProperty(
      r,
      t,
      {
        configurable: !0,
        get() {
          Object.defineProperty(this, t, li);
          let e = ci;
          ci = !1;
          try {
            let r = n(this);
            return ci ? delete this[t] : Object.defineProperty(this, t, {
              configurable: !0,
              writable: !0,
              value: r
            }),
            ci ||= e,
            r
          } catch (n) {
            throw delete this[t],
            ci ||= e,
            n
          }
        },
        set(e) {
          Object.defineProperty(this, t, {
            configurable: !0,
            writable: !0,
            value: e
          })
        }
      }
    )
  )
}
function ui(e, t, n, r) {
  let i = oi(e, t);
  i &&
  Object.defineProperty(
    i,
    t,
    {
      configurable: !0,
      get() {
        let e = {
          configurable: !0,
          writable: !0,
          enumerable: r,
          value: void 0
        };
        return Object.defineProperty(this, t, e),
        e.value = n(this),
        Object.defineProperty(this, t, e),
        e.value
      },
      set(e) {
        Object.defineProperty(this, t, {
          configurable: !0,
          writable: !0,
          enumerable: r,
          value: e
        })
      }
    }
  )
}
var di = `~constantCatch`;
function fi(e) {
  let t = () => e;
  return t[di] = !0,
  t
}
var pi,
mi = {
  value: void 0,
  enumerable: !1
},
hi = `captureStackTrace` in Error ? Error : null;
function gi(e) {
  let t = hi;
  if (t) {
    let n = t.stackTraceLimit;
    if (typeof n == `number`) {
      try {
        t.stackTraceLimit = 0
      } catch {
        return hi = null,
        new e
      }
      try {
        return new e
      } finally {
        t.stackTraceLimit = n
      }
    }
  }
  return new e
}
function j(e, t, n, r) {
  let i = {};
  function a(e) {
    this.def = e,
    this.constr = d,
    this.traits = new Set
  }
  a.prototype = i;
  let o = n,
  s = o &&
  new WeakSet;
  function c(n, r) {
    if (!n._zod) {
      mi.value = new a(r);
      try {
        Object.defineProperty(n, '_zod', mi)
      } finally {
        mi.value = void 0
      }
    } else if (n._zod.traits.has(e)) return;
    if (n._zod.traits.add(e), t(n, r), s) {
      let e = Object.getPrototypeOf(n),
      t = n._zod.constr.prototype,
      r = e;
      for (; r && r !== t; ) r = Object.getPrototypeOf(r);
      let i = r ?? e;
      s.has(i) ||
      (s.add(i), ti(i, o))
    }
    let i = d.prototype;
    for (let e in i) Object.prototype.hasOwnProperty.call(i, e) &&
    (e in n || (n[e] = i[e].bind(n)))
  }
  let l = r?.Parent ?? Object;
  class u extends l {
  }
  Object.defineProperty(u, 'name', {
    value: e
  });
  function d(e) {
    let t = r?.Parent ? gi(u) : this;
    c(t, e);
    let n = t._zod.deferred;
    if (n) {
      for (let e of n) e();
      t._zod.deferred = void 0
    }
    let i = globalThis.__zod_globalConfig?.postProcessor;
    return i &&
    i(t),
    t
  }
  return Object.defineProperty(d, 'init', {
    value: c
  }),
  Object.defineProperty(
    d,
    Symbol.hasInstance,
    {
      value: t => r?.Parent &&
      t instanceof r.Parent ? !0 : t?._zod?.traits?.has(e)
    }
  ),
  Object.defineProperty(d, 'name', {
    value: e
  }),
  d
}
var _i = class extends Error {
  constructor() {
    super (
      `Encountered Promise during synchronous parse. Use .parseAsync() instead.`
    )
  }
},
vi = class extends Error {
  constructor(e) {
    super (`Encountered unidirectional transform during encode: ${ e }`),
    this.name = `ZodEncodeError`
  }
};
(pi = globalThis).__zod_globalConfig ?? (pi.__zod_globalConfig = {});
var M = globalThis.__zod_globalConfig;
function yi(e) {
  return e &&
  Object.assign(M, e),
  M
}
function bi() {
  let e = this._zod;
  return e.message ??= JSON.stringify(e.def, sr, 2),
  e.message
}
function xi(e) {
  this._zod.message = e
}
var Si = {
  get: bi,
  set: xi,
  enumerable: !0,
  configurable: !0
},
Ci = {
  value: void 0,
  enumerable: !1
},
wi = new WeakSet([Object.prototype,
Error.prototype]),
Ti = j(
  `$ZodError`,
  (e, t) => {
    e.name = `$ZodError`,
    Ci.value = t,
    Object.defineProperty(e, 'issues', Ci),
    Ci.value = void 0,
    Object.defineProperty(e, 'message', Si);
    let n = Object.getPrototypeOf(e);
    wi.has(n) ||
    (
      wi.add(n),
      Object.defineProperty(
        n,
        'toString',
        {
          configurable: !0,
          enumerable: !1,
          get() {
            let e = () => this.message;
            return Object.defineProperty(this, 'toString', {
              value: e,
              configurable: !0,
              writable: !0
            }),
            e
          },
          set(e) {
            Object.defineProperty(this, 'toString', {
              value: e,
              configurable: !0,
              writable: !0
            })
          }
        }
      )
    )
  }
);
function Ei(e, t, n) {
  return Object.prototype.hasOwnProperty.call(e, t) ||
  (
    t === `__proto__` ? Object.defineProperty(e, t, {
      value: n(),
      writable: !0,
      enumerable: !0,
      configurable: !0
    }) : e[t] = n()
  ),
  e[t]
}
function Di(e, t = e => e.message) {
  let n = {},
  r = [];
  for (let i of e.issues) i.path.length > 0 ? Ei(n, i.path[0], () => []).push(t(i)) : r.push(t(i));
  return {
    formErrors: r,
    fieldErrors: n
  }
}
function Oi(e, t = e => e.message) {
  let n = {
    _errors: []
  },
  r = (e, i = []) => {
    for (let a of e.issues) if (a.code === `invalid_union` && a.errors.length) a.errors.map(e => r({
      issues: e
    }, [
      ...i,
      ...a.path
    ]));
     else if (a.code === `invalid_key`) r({
      issues: a.issues
    }, [
      ...i,
      ...a.path
    ]);
     else if (a.code === `invalid_element`) r({
      issues: a.issues
    }, [
      ...i,
      ...a.path
    ]);
     else {
      let e = [
        ...i,
        ...a.path
      ];
      if (e.length === 0) n._errors.push(t(a));
       else {
        let r = n,
        i = 0;
        for (; i < e.length; ) {
          let n = e[i],
          o = i === e.length - 1;
          if (n === `_errors`) {
            o &&
            r._errors.push(t(a)),
            i++;
            continue
          }
          Object.prototype.hasOwnProperty.call(r, n) ||
          Object.defineProperty(
            r,
            n,
            {
              value: {
                _errors: []
              },
              enumerable: !0,
              writable: !0,
              configurable: !0
            }
          );
          let s = r[n];
          o &&
          s._errors.push(t(a)),
          r = s,
          i++
        }
      }
    }
  };
  return r(e),
  n
}
function ki(e, t) {
  return {
    callee: t?.callee ?? e,
    Err: t?.Err
  }
}
var Ai = e => {
  let t = (n, r, i, a) => {
    let o = i ? {
      ...i,
      async: !1
    }
     : {
      async: !1
    },
    s = n._zod.run({
      value: r,
      issues: []
    }, o);
    if (s instanceof Promise) throw new _i;
    if (s.issues.length) {
      let n = new ((a?.Err) ?? e) (s.issues.map(e => Yr(e, o, yi())));
      throw Sr(n, a?.callee ?? t),
      n
    }
    return s.value
  };
  return t
},
ji = e => {
  let t = async(n, r, i, a) => {
    let o = i ? {
      ...i,
      async: !0
    }
     : {
      async: !0
    },
    s = n._zod.run({
      value: r,
      issues: []
    }, o);
    if (s instanceof Promise && (s = await s), s.issues.length) {
      let n = new ((a?.Err) ?? e) (s.issues.map(e => Yr(e, o, yi())));
      throw Sr(n, a?.callee ?? t),
      n
    }
    return s.value
  };
  return t
},
Mi = e => (t, n, r) => {
  let i = r ? {
    ...r,
    async: !1
  }
   : {
    async: !1
  },
  a = t._zod.run({
    value: n,
    issues: []
  }, i);
  if (a instanceof Promise) throw new _i;
  return a.issues.length ? Ni(e, a.issues, i) : {
    success: !0,
    data: a.value
  }
};
function Ni(e, t, n) {
  let r;
  return {
    success: !1,
    get error() {
      return r ||
      (r = new e(t.map(e => Yr(e, n, yi()))), t = void 0, n = void 0),
      r
    },
    set error(e) {
      r = e,
      t = void 0,
      n = void 0
    }
  }
}
var Pi = e => async(t, n, r) => {
  let i = r ? {
    ...r,
    async: !0
  }
   : {
    async: !0
  },
  a = t._zod.run({
    value: n,
    issues: []
  }, i);
  return a instanceof Promise &&
  (a = await a),
  a.issues.length ? Ni(e, a.issues, i) : {
    success: !0,
    data: a.value
  }
},
Fi = Symbol.for(`zod.compile.invalid`),
Ii = Symbol.for(`zod.compile.fallback`),
Li = (
  (e, t, n) => {
    let r = e._zod.bag.validator;
    if (r !== void 0) {
      if (r(t) !== Fi) return !0;
      if (r.definite === !0 && n === void 0) return !1
    }
    return Ri(e, t, n)
  }
);
function Ri(e, t, n) {
  let r = n ? {
    ...n,
    async: !1,
    abortEarly: !0
  }
   : {
    async: !1,
    abortEarly: !0
  },
  i = e._zod.bag.fallbackRun,
  a;
  if (
    i ? (r[Ii] = !0, a = i({
      value: t,
      issues: []
    }, r)) : a = e._zod.run({
      value: t,
      issues: []
    }, r),
    a instanceof Promise
  ) throw new _i;
  return a.issues.length === 0
}
var zi = async(e, t, n) => {
  let r = n ? {
    ...n,
    async: !0,
    abortEarly: !0
  }
   : {
    async: !0,
    abortEarly: !0
  },
  i = e._zod.run({
    value: t,
    issues: []
  }, r);
  return i instanceof Promise &&
  (i = await i),
  i.issues.length === 0
},
Bi = e => {
  let t = Ai(e),
  n = (e, r, i, a) => {
    let o = i ? {
      ...i,
      direction: `backward`
    }
     : {
      direction: `backward`
    };
    return t(e, r, o, ki(n, a))
  };
  return n
},
Vi = e => {
  let t = Ai(e),
  n = (e, r, i, a) => t(e, r, i, ki(n, a));
  return n
},
Hi = e => {
  let t = ji(e),
  n = async(e, r, i, a) => {
    let o = i ? {
      ...i,
      direction: `backward`
    }
     : {
      direction: `backward`
    };
    return await t(e, r, o, ki(n, a))
  };
  return n
},
Ui = e => {
  let t = ji(e),
  n = async(e, r, i, a) => await t(e, r, i, ki(n, a));
  return n
},
Wi = e => (t, n, r) => {
  let i = r ? {
    ...r,
    direction: `backward`
  }
   : {
    direction: `backward`
  };
  return Mi(e) (t, n, i)
},
Gi = e => (t, n, r) => Mi(e) (t, n, r),
Ki = e => async(t, n, r) => {
  let i = r ? {
    ...r,
    direction: `backward`
  }
   : {
    direction: `backward`
  };
  return Pi(e) (t, n, i)
},
qi = e => async(t, n, r) => Pi(e) (t, n, r),
Ji = /^[cC][0-9a-z]{6,}$/,
Yi = /^[0-9a-z]+$/,
Xi = /^[0-7][0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{25}$/,
Zi = /^[0-9a-vA-V]{20}$/,
Qi = /^[A-Za-z0-9]{27}$/,
$i = /^[a-zA-Z0-9_-]{21}$/;
function ea(e) {
  return RegExp(`^[a-zA-Z0-9_-]{${ e }}$`)
}
var ta = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/,
na = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/,
ra = e => e ? RegExp(
  `^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${ e }[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`
) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/,
ia = /^(?:[A-Za-z0-9_'+\-]+\.)*[A-Za-z0-9_'+\-]*[A-Za-z0-9_+-]@(?:[A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/,
aa = `^(?=[\\s\\S]*[\\p{Extended_Pictographic}\\p{Regional_Indicator}\\u20E3])[\\p{Extended_Pictographic}\\p{Emoji_Component}]+$`;
function oa() {
  return new RegExp(aa, `u`)
}
var sa = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
ca = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/,
la = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/,
ua = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
da = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/,
fa = /^(?:[A-Za-z0-9_-]{4})*(?:[A-Za-z0-9_-]{2,3})?$/,
pa = /^https?$/,
ma = /^\+[1-9]\d{6,14}$/,
ha = `(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))`;
function ga(e) {
  return RegExp(`^${ e }$`)
}
var _a = ga(ha);
function va(e) {
  let t = `(?:[01]\\d|2[0-3]):[0-5]\\d`;
  return typeof e.precision == `number` ? e.precision === - 1 ? `${ t }` : e.precision === 0 ? `${ t }:[0-5]\\d` : `${ t }:[0-5]\\d\\.\\d{${ e.precision }}` : e.seconds ? `${ t }:[0-5]\\d(?:\\.\\d+)?` : `${ t }(?::[0-5]\\d(?:\\.\\d+)?)?`
}
function ya(e) {
  return RegExp(`^${ va(e) }$`)
}
function ba(e) {
  let t = [
    `Z`
  ];
  e.offset &&
  t.push(`([+-](?:[01]\\d|2[0-3]):[0-5]\\d)`);
  let n = `${ va({
    precision: e.precision,
    seconds: !0
  }) }(?:${ t.join(`|`) })`,
  r = e.local ? `${ n }|${ va({
    precision: e.precision
  }) }` : n;
  return RegExp(`^${ ha }T(?:${ r })$`)
}
var xa = /^[\s\S]{0,}$/,
Sa = /^-?\d+$/,
Ca = /^-?\d+(?:\.\d+)?$/,
wa = /^(?:true|false)$/i,
Ta = /^null$/i,
Ea = /^[^A-Z]*$/,
Da = /^[^a-z]*$/,
N = j(
  `$ZodCheck`,
  (e, t) => {
    var n;
    e._zod ??= {},
    e._zod.def = t,
    (n = e._zod).onattach ?? (n.onattach = [])
  }
),
Oa = e => {
  let t = e.value;
  return !ur(t) &&
  t.length !== void 0
},
ka = {
  number: `number`,
  bigint: `bigint`,
  object: `date`
},
Aa = j(
  `$ZodCheckLessThan`,
  (e, t) => {
    N.init(e, t);
    let n = ka[typeof t.value];
    e._zod.check = r => {
      (t.inclusive ? r.value <= t.value : r.value < t.value) ||
      r.issues.push({
        origin: ka[typeof r.value] ?? n,
        code: `too_big`,
        maximum: typeof t.value == `object` ? t.value.getTime() : t.value,
        input: r.value,
        inclusive: t.inclusive,
        inst: e,
        continue : !t.abort
      })
    }
  }
),
ja = j(
  `$ZodCheckGreaterThan`,
  (e, t) => {
    N.init(e, t);
    let n = ka[typeof t.value];
    e._zod.check = r => {
      (t.inclusive ? r.value >= t.value : r.value > t.value) ||
      r.issues.push({
        origin: ka[typeof r.value] ?? n,
        code: `too_small`,
        minimum: typeof t.value == `object` ? t.value.getTime() : t.value,
        input: r.value,
        inclusive: t.inclusive,
        inst: e,
        continue : !t.abort
      })
    }
  }
),
Ma = j(
  `$ZodCheckMultipleOf`,
  (e, t) => {
    N.init(e, t),
    e._zod.check = n => {
      if (typeof n.value != typeof t.value) throw Error(`Cannot mix number and bigint in multiple_of check.`);
      (
        typeof n.value == `bigint` ? t.value !== BigInt(0) &&
        n.value % t.value === BigInt(0) : fr(n.value, t.value) === 0
      ) ||
      n.issues.push({
        origin: typeof n.value,
        code: `not_multiple_of`,
        divisor: t.value,
        input: n.value,
        inst: e,
        continue : !t.abort
      })
    }
  }
),
Na = j(
  `$ZodCheckNumberFormat`,
  (e, t) => {
    N.init(e, t),
    t.format = t.format ||
    `float64`;
    let n = t.format?.includes(`int`),
    r = n ? `int` : `number`,
    [
      i,
      a
    ] = Mr[t.format];
    e._zod.check = o => {
      let s = o.value;
      if (n) {
        if (!Number.isInteger(s)) {
          o.issues.push({
            expected: r,
            format: t.format,
            code: `invalid_type`,
            continue : !1,
            input: s,
            inst: e
          });
          return
        }
        if (!Number.isSafeInteger(s)) {
          s > 0 ? o.issues.push({
            input: s,
            code: `too_big`,
            maximum: 2**53 - 1,
            note: `Integers must be within the safe integer range.`,
            inst: e,
            origin: r,
            inclusive: !0,
            continue : !t.abort
          }) : o.issues.push({
            input: s,
            code: `too_small`,
            minimum: - (2**53 - 1),
            note: `Integers must be within the safe integer range.`,
            inst: e,
            origin: r,
            inclusive: !0,
            continue : !t.abort
          });
          return
        }
      }
      s < i &&
      o.issues.push({
        origin: `number`,
        input: s,
        code: `too_small`,
        minimum: i,
        inclusive: !0,
        inst: e,
        continue : !t.abort
      }),
      s > a &&
      o.issues.push({
        origin: `number`,
        input: s,
        code: `too_big`,
        maximum: a,
        inclusive: !0,
        inst: e,
        continue : !t.abort
      })
    }
  }
),
Pa = j(
  `$ZodCheckMaxLength`,
  (e, t) => {
    var n;
    N.init(e, t),
    (n = e._zod.def).when ?? (n.when = Oa),
    e._zod.check = n => {
      let r = n.value,
      i = r.length;
      if ((typeof r == `string` && i > t.maximum ? Zr(r) : i) <= t.maximum) return;
      let a = Qr(r);
      n.issues.push({
        origin: a,
        code: `too_big`,
        maximum: t.maximum,
        inclusive: !0,
        input: r,
        inst: e,
        continue : !t.abort
      })
    }
  }
),
Fa = j(
  `$ZodCheckMinLength`,
  (e, t) => {
    var n;
    N.init(e, t),
    (n = e._zod.def).when ?? (n.when = Oa),
    e._zod.check = n => {
      let r = n.value,
      i = r.length;
      if (
        (typeof r == `string` && i >= t.minimum && i < t.minimum * 2 ? Zr(r) : i) >= t.minimum
      ) return;
      let a = Qr(r);
      n.issues.push({
        origin: a,
        code: `too_small`,
        minimum: t.minimum,
        inclusive: !0,
        input: r,
        inst: e,
        continue : !t.abort
      })
    }
  }
),
Ia = j(
  `$ZodCheckLengthEquals`,
  (e, t) => {
    var n;
    N.init(e, t),
    (n = e._zod.def).when ?? (n.when = Oa),
    e._zod.check = n => {
      let r = n.value,
      i = r.length,
      a = typeof r == `string` &&
      i >= t.length &&
      i <= t.length * 2 ? Zr(r) : i;
      if (a === t.length) return;
      let o = Qr(r),
      s = a > t.length;
      n.issues.push({
        origin: o,
        ...s ? {
          code: `too_big`,
          maximum: t.length
        }
         : {
          code: `too_small`,
          minimum: t.length
        },
        inclusive: !0,
        exact: !0,
        input: n.value,
        inst: e,
        continue : !t.abort
      })
    }
  }
),
La = j(
  `$ZodCheckStringFormat`,
  (e, t) => {
    var n,
    r;
    N.init(e, t),
    t.pattern ? (n = e._zod).check ?? (
      n.check = n => {
        t.pattern.lastIndex = 0,
        !t.pattern.test(n.value) &&
        n.issues.push({
          origin: `string`,
          code: `invalid_format`,
          format: t.format,
          input: n.value,
          ...t.pattern ? {
            pattern: t.pattern.toString()
          }
           : {
          },
          inst: e,
          continue : !t.abort
        })
      }
    ) : (r = e._zod).check ?? (r.check = () => {
    })
  }
),
Ra = j(
  `$ZodCheckRegex`,
  (e, t) => {
    La.init(e, t),
    e._zod.check = n => {
      t.pattern.lastIndex = 0,
      !t.pattern.test(n.value) &&
      n.issues.push({
        origin: `string`,
        code: `invalid_format`,
        format: `regex`,
        input: n.value,
        pattern: t.pattern.toString(),
        inst: e,
        continue : !t.abort
      })
    }
  }
),
za = j(`$ZodCheckLowerCase`, (e, t) => {
  t.pattern ??= Ea,
  La.init(e, t)
}),
Ba = j(`$ZodCheckUpperCase`, (e, t) => {
  t.pattern ??= Da,
  La.init(e, t)
}),
Va = j(
  `$ZodCheckIncludes`,
  (e, t) => {
    N.init(e, t);
    let n = Or(t.includes);
    t.pattern = new RegExp(typeof t.position == `number` ? `^.{${ t.position },}${ n }` : n),
    e._zod.check = n => {
      n.value.includes(t.includes, t.position) ||
      n.issues.push({
        origin: `string`,
        code: `invalid_format`,
        format: `includes`,
        includes: t.includes,
        input: n.value,
        inst: e,
        continue : !t.abort
      })
    }
  }
),
Ha = j(
  `$ZodCheckStartsWith`,
  (e, t) => {
    N.init(e, t);
    let n = RegExp(`^${ Or(t.prefix) }.*`);
    t.pattern ??= n,
    e._zod.check = n => {
      n.value.startsWith(t.prefix) ||
      n.issues.push({
        origin: `string`,
        code: `invalid_format`,
        format: `starts_with`,
        prefix: t.prefix,
        input: n.value,
        inst: e,
        continue : !t.abort
      })
    }
  }
),
Ua = j(
  `$ZodCheckEndsWith`,
  (e, t) => {
    N.init(e, t);
    let n = RegExp(`.*${ Or(t.suffix) }$`);
    t.pattern ??= n,
    e._zod.check = n => {
      n.value.endsWith(t.suffix) ||
      n.issues.push({
        origin: `string`,
        code: `invalid_format`,
        format: `ends_with`,
        suffix: t.suffix,
        input: n.value,
        inst: e,
        continue : !t.abort
      })
    }
  }
),
Wa = j(
  `$ZodCheckOverwrite`,
  (e, t) => {
    N.init(e, t),
    e._zod.check = e => {
      e.value = t.tx(e.value)
    }
  }
),
Ga = class {
  constructor(e = [], t = {}) {
    this.content = [],
    this.indent = 0,
    this.args = e,
    this.closed = t
  }
  indented(e) {
    this.indent += 1;
    try {
      e(this)
    } finally {
      --this.indent
    }
  }
  write(e) {
    if (typeof e == `function`) {
      e(this, {
        execution: `sync`
      }),
      e(this, {
        execution: `async`
      });
      return
    }
    let t = e.split(`

    `).filter(e => e),
    n = Math.min(...t.map(e => e.length - e.trimStart().length)),
    r = t.map(e => e.slice(n)).map(e => ` `.repeat(this.indent * 2) + e);
    for (let e of r) this.content.push(e)
  }
  compile() {
    let e = Function,
    t = this?.content ?? [``];
    return new e(
      ...Object.keys(this.closed),
      `return function (${ this.args.join(`, `) }) {
${ t.join(`

      `) }
};`
    ) (...Object.values(this.closed))
  }
},
Ka = {
  major: 4,
  minor: 6,
  patch: 7
},
P = j(
  `$ZodType`,
  (e, t) => {
    var n;
    e ??= {},
    e._zod.def = t,
    e._zod.bag = e._zod.bag ||
    {
    },
    e._zod.version = Ka;
    let r = e._zod.def.checks,
    i = e._zod.traits.has(`$ZodCheck`) ? [
      e,
      ...r ?? []
    ] : r?.length ? [
      ...r
    ] : [];
    for (let t of i) for (let n of t._zod.onattach) n(e);
    if (i.length === 0) (n = e._zod).deferred ?? (n.deferred = []),
    e._zod.deferred?.push(() => {
      e._zod.run = e._zod.parse
    });
     else {
      let t = (t, n, r) => {
        if (t.memo) return t;
        let i = Ur(t),
        a;
        for (let o of n) {
          if (o._zod.def.when) {
            if (Wr(t) || !o._zod.def.when(t)) continue
          } else if (i) continue;
          let n = t.issues.length,
          s = o._zod.check(t);
          if (s instanceof Promise && r?.async === !1) throw new _i;
          if (a || s instanceof Promise) a = (a ?? Promise.resolve()).then(
            async() => {
              await s,
              t.issues.length !== n &&
              (Jr(t.issues, n, e), i ||= Ur(t, n))
            }
          );
           else {
            if (t.issues.length === n) continue;
            Jr(t.issues, n, e),
            i ||= Ur(t, n)
          }
        }
        return a ? a.then(() => t) : t
      },
      n = (n, r, a) => {
        if (Ur(n)) return n.aborted = !0,
        n;
        let o = t(r, i, a);
        if (o instanceof Promise) {
          if (a.async === !1) throw new _i;
          return o.then(t => e._zod.parse(t, a))
        }
        return e._zod.parse(o, a)
      };
      e._zod.run = (r, a) => {
        if (a.skipChecks) return e._zod.parse(r, a);
        if (a.direction === `backward`) {
          let t = e._zod.parse({
            value: r.value,
            issues: []
          }, {
            ...a,
            skipChecks: !0
          });
          return t instanceof Promise ? t.then(e => n(e, r, a)) : n(t, r, a)
        }
        let o = e._zod.parse(r, a);
        if (o instanceof Promise) {
          if (a.async === !1) throw new _i;
          return o.then(e => t(e, i, a))
        }
        return t(o, i, a)
      }
    }
  },
  {
    get'~standard'() {
      return ri(this, `~standard`, Ya(this))
    },
    set'~standard'(e) {
      ni(this, `~standard`, e)
    }
  }
),
qa = (e, t) => e.issues.length ? {
  issues: e.issues.map(e => Yr(e, t, yi()))
}
 : {
  value: e.value
};
async function Ja(e, t) {
  let n = {
    async: !0
  };
  return qa(await e._zod.run({
    value: t,
    issues: []
  }, n), n)
}
function Ya(e) {
  return {
    validate: t => {
      let n = {
        async: !1
      };
      try {
        let r = e._zod.run({
          value: t,
          issues: []
        }, n);
        if (!(r instanceof Promise)) return qa(r, n)
      } catch {
      }
      return Ja(e, t)
    },
    vendor: `zod`,
    version: 1
  }
}
var Xa = j(
  `$ZodString`,
  (e, t) => {
    P.init(e, t),
    e._zod.pattern = t.pattern ?? xa,
    e._zod.parse = (n, r) => {
      if (t.coerce) try {
        n.value = String(n.value)
      } catch {
      }
      return typeof n.value == `string` ||
      n.issues.push({
        expected: `string`,
        code: `invalid_type`,
        input: n.value,
        inst: e
      }),
      n
    }
  }
),
F = j(`$ZodStringFormat`, (e, t) => {
  La.init(e, t),
  Xa.init(e, t)
}),
Za = j(`$ZodGUID`, (e, t) => {
  t.pattern ??= na,
  F.init(e, t)
}),
Qa = j(
  `$ZodUUID`,
  (e, t) => {
    if (t.version) {
      let e = {
        v1: 1,
        v2: 2,
        v3: 3,
        v4: 4,
        v5: 5,
        v6: 6,
        v7: 7,
        v8: 8
      }
      [
        t.version
      ];
      if (e === void 0) throw Error(`Invalid UUID version: "${ t.version }"`);
      t.pattern ??= ra(e)
    } else t.pattern ??= ra();
    F.init(e, t)
  }
),
$a = j(`$ZodEmail`, (e, t) => {
  t.pattern ??= ia,
  F.init(e, t)
});
function eo(e) {
  try {
    return typeof URL < `u` &&
    typeof URL.canParse == `function` ? URL.canParse(e) : (new URL(e), !0)
  } catch {
    return !1
  }
}
function to(e, t) {
  return !(`normalize` in t) &&
  !(`hostname` in t) &&
  !(`protocol` in t) ? eo(e) ||
  2 : no(e, t)
}
function no(e, t) {
  if (
    !t.normalize &&
    t.protocol?.source === pa.source &&
    !/^https?:\/\//i.test(e)
  ) return 1;
  try {
    if (typeof URL < `u`) {
      let t = URL;
      if (typeof t.parse == `function`) return t.parse(e) ?? 2
    }
    return new URL(e)
  } catch {
    return 2
  }
}
var ro = /[\t\n\r]/g;
function io(e) {
  return e.replace(ro, ``)
}
function ao(e, t) {
  return t.lastIndex = 0,
  t.test(e.hostname)
}
function oo(e, t) {
  return t.lastIndex = 0,
  t.test(e.protocol.endsWith(`:`) ? e.protocol.slice(0, - 1) : e.protocol)
}
var so = j(
  `$ZodURL`,
  (e, t) => {
    F.init(e, t),
    e._zod.check = n => {
      try {
        let r = n.value.trim(),
        i = to(r, t);
        if (i === 1) {
          n.issues.push({
            code: `invalid_format`,
            format: `url`,
            note: `Invalid URL format`,
            input: n.value,
            inst: e,
            continue : !t.abort
          });
          return
        }
        if (i === 2) {
          n.issues.push({
            code: `invalid_format`,
            format: `url`,
            input: n.value,
            inst: e,
            continue : !t.abort
          });
          return
        }
        if (i === !0) {
          n.value = io(r);
          return
        }
        t.hostname &&
        !ao(i, t.hostname) &&
        n.issues.push({
          code: `invalid_format`,
          format: `url`,
          note: `Invalid hostname`,
          pattern: t.hostname.source,
          input: n.value,
          inst: e,
          continue : !t.abort
        }),
        t.protocol &&
        !oo(i, t.protocol) &&
        n.issues.push({
          code: `invalid_format`,
          format: `url`,
          note: `Invalid protocol`,
          pattern: t.protocol.source,
          input: n.value,
          inst: e,
          continue : !t.abort
        }),
        n.value = t.normalize ? i.href : io(r);
        return
      } catch {
        n.issues.push({
          code: `invalid_format`,
          format: `url`,
          input: n.value,
          inst: e,
          continue : !t.abort
        })
      }
    }
  }
),
co = j(`$ZodEmoji`, (e, t) => {
  t.pattern ??= oa(),
  F.init(e, t)
}),
lo = j(
  `$ZodNanoID`,
  (e, t) => {
    if (t.length !== void 0 && (!Number.isInteger(t.length) || t.length < 1)) throw Error(`Invalid nanoid length: ${ t.length }`);
    t.pattern ??= t.length === void 0 ? $i : ea(t.length),
    F.init(e, t)
  }
),
uo = j(`$ZodCUID`, (e, t) => {
  t.pattern ??= Ji,
  F.init(e, t)
}),
fo = j(`$ZodCUID2`, (e, t) => {
  t.pattern ??= Yi,
  F.init(e, t)
}),
po = j(`$ZodULID`, (e, t) => {
  t.pattern ??= Xi,
  F.init(e, t)
}),
mo = j(`$ZodXID`, (e, t) => {
  t.pattern ??= Zi,
  F.init(e, t)
}),
ho = j(`$ZodKSUID`, (e, t) => {
  t.pattern ??= Qi,
  F.init(e, t)
}),
go = j(`$ZodISODateTime`, (e, t) => {
  t.pattern ??= ba(t),
  F.init(e, t)
}),
_o = j(`$ZodISODate`, (e, t) => {
  t.pattern ??= _a,
  F.init(e, t)
}),
vo = j(`$ZodISOTime`, (e, t) => {
  t.pattern ??= ya(t),
  F.init(e, t)
}),
yo = j(`$ZodISODuration`, (e, t) => {
  t.pattern ??= ta,
  F.init(e, t)
}),
bo = j(`$ZodIPv4`, (e, t) => {
  t.pattern ??= sa,
  F.init(e, t)
}),
xo = /^[0-9a-fA-F:.]+$/;
function So(e) {
  return xo.test(e) ? eo(`http://[${ e }]`) : !1
}
var Co = j(
  `$ZodIPv6`,
  (e, t) => {
    t.pattern ??= ca,
    F.init(e, t),
    e._zod.check = n => {
      So(n.value) ||
      n.issues.push({
        code: `invalid_format`,
        format: `ipv6`,
        input: n.value,
        inst: e,
        continue : !t.abort
      })
    }
  }
),
wo = j(`$ZodCIDRv4`, (e, t) => {
  t.pattern ??= la,
  F.init(e, t)
});
function To(e) {
  let t = e.split(`/`);
  if (t.length !== 2) return !1;
  let[n,
  r] = t;
  if (!r) return !1;
  let i = Number(r);
  return `${ i }` !== r ||
  i < 0 ||
  i > 128 ? !1 : So(n)
}
var Eo = j(
  `$ZodCIDRv6`,
  (e, t) => {
    t.pattern ??= ua,
    F.init(e, t),
    e._zod.check = n => {
      To(n.value) ||
      n.issues.push({
        code: `invalid_format`,
        format: `cidrv6`,
        input: n.value,
        inst: e,
        continue : !t.abort
      })
    }
  }
);
function Do(e) {
  if (e === ``) return !0;
  if (/\s/.test(e) || e.length % 4 != 0) return !1;
  try {
    return atob(e),
    !0
  } catch {
    return !1
  }
}
var Oo = /^[0-9a-zA-Z+/]*={0,2}$/,
ko = j(
  `$ZodBase64`,
  (e, t) => {
    t.pattern ??= Oo,
    F.init(e, t),
    e._zod.check = n => {
      Do(n.value) ||
      n.issues.push({
        code: `invalid_format`,
        format: `base64`,
        input: n.value,
        inst: e,
        continue : !t.abort
      })
    }
  }
),
Ao = /^[A-Za-z0-9_-]*$/;
function jo(e) {
  if (!Ao.test(e)) return !1;
  let t = e.replace(/[-_]/g, e => e === `-` ? `+` : `/`);
  return Do(t.padEnd(Math.ceil(t.length / 4) * 4, `=`))
}
var Mo = j(
  `$ZodBase64URL`,
  (e, t) => {
    t.pattern ??= Ao,
    F.init(e, t),
    e._zod.check = n => {
      jo(n.value) ||
      n.issues.push({
        code: `invalid_format`,
        format: `base64url`,
        input: n.value,
        inst: e,
        continue : !t.abort
      })
    }
  }
),
No = j(`$ZodE164`, (e, t) => {
  t.pattern ??= ma,
  F.init(e, t)
});
function Po(e, t = null) {
  try {
    let n = e.split(`.`);
    if (n.length !== 3) return !1;
    let[r] = n;
    if (!r) return !1;
    let i = JSON.parse(atob(r));
    return !(
      `typ` in i &&
      i?.typ !== `JWT` ||
      !i.alg ||
      t &&
      (!(`alg` in i) || i.alg !== t)
    )
  } catch {
    return !1
  }
}
var Fo = j(
  `$ZodJWT`,
  (e, t) => {
    F.init(e, t),
    e._zod.check = n => {
      Po(n.value, t.alg) ||
      n.issues.push({
        code: `invalid_format`,
        format: `jwt`,
        input: n.value,
        inst: e,
        continue : !t.abort
      })
    }
  }
),
Io = j(
  `$ZodNumber`,
  (e, t) => {
    P.init(e, t),
    e._zod.pattern = Ca,
    e._zod.parse = (n, r) => {
      if (t.coerce) try {
        n.value = Number(n.value)
      } catch {
      }
      let i = n.value;
      if (typeof i == `number` && !Number.isNaN(i) && Number.isFinite(i)) return n;
      let a = typeof i == `number` ? Number.isNaN(i) ? `NaN` : Number.isFinite(i) ? void 0 : String(i) : void 0;
      return n.issues.push({
        expected: `number`,
        code: `invalid_type`,
        input: i,
        inst: e,
        ...a ? {
          received: a
        }
         : {
        }
      }),
      n
    }
  }
),
Lo = j(`$ZodNumberFormat`, (e, t) => {
  Na.init(e, t),
  Io.init(e, t)
}),
Ro = j(
  `$ZodBoolean`,
  (e, t) => {
    P.init(e, t),
    e._zod.pattern = wa,
    e._zod.parse = (n, r) => {
      if (t.coerce) try {
        n.value = !!n.value
      } catch {
      }
      let i = n.value;
      return typeof i == `boolean` ||
      n.issues.push({
        expected: `boolean`,
        code: `invalid_type`,
        input: i,
        inst: e
      }),
      n
    }
  }
),
zo = j(
  `$ZodNull`,
  (e, t) => {
    P.init(e, t),
    e._zod.pattern = Ta,
    e._zod.values = new Set([null]),
    e._zod.parse = (t, n) => {
      let r = t.value;
      return r === null ||
      t.issues.push({
        expected: `null`,
        code: `invalid_type`,
        input: r,
        inst: e
      }),
      t
    }
  }
),
Bo = j(`$ZodUnknown`, (e, t) => {
  P.init(e, t),
  e._zod.parse = e => e
}),
Vo = j(
  `$ZodNever`,
  (e, t) => {
    P.init(e, t),
    e._zod.parse = (t, n) => (
      t.issues.push({
        expected: `never`,
        code: `invalid_type`,
        input: t.value,
        inst: e
      }),
      t
    )
  }
);
function Ho(e, t) {
  let n = qr(e._zod.def.checks);
  if (!n.length) return;
  let r = Math.min(...n.map(e => e[0])),
  i = e._zod.parse;
  e._zod.parse = (n, a) => {
    let o = t(n.value);
    if (o > r && !a?.skipChecks && a?.direction !== `backward`) {
      for (let[t,
      r]of qr(e._zod.def.checks)) if (o > t && r._zod.def.when(n)) {
        let t = n.issues.length;
        return r._zod.check(n),
        n.issues[t].continue = !1,
        Jr(n.issues, t, e),
        n
      }
    }
    return i(n, a)
  }
}
var Uo = e => Array.isArray(e) ? e.length : - 1;
function Wo(e, t, n) {
  e.issues.length &&
  t.issues.push(...Gr(n, e.issues)),
  t.value[n] = e.value
}
var Go = j(
  `$ZodArray`,
  (e, t) => {
    P.init(e, t);
    let n = M.memoizer;
    n?.attach(e),
    e._zod.parse = (r, i) => {
      let a = r.value;
      if (!Array.isArray(a)) return r.issues.push({
        expected: `array`,
        code: `invalid_type`,
        input: a,
        inst: e
      }),
      r;
      r.value = n ? n.alloc(e, r, Array(a.length), i) : Array(a.length);
      let o = [],
      s = i?.abortEarly;
      for (let e = 0; e < a.length; e++) {
        let n = a[e],
        c = t.element._zod.run({
          value: n,
          issues: []
        }, i);
        if (c instanceof Promise) o.push(c.then(t => Wo(t, r, e)));
         else if (Wo(c, r, e), s && c.issues.length !== 0 && Ur(c)) break
      }
      return o.length ? Promise.all(o).then(() => r) : r
    },
    Ho(e, Uo)
  }
);
function Ko(e, t, n, r, i, a) {
  let o = n in r,
  s = a === `optional`;
  if (o || !s || i !== `optional`) {
    if (e.issues.length) {
      if (i !== void 0 && s && !o) return;
      t.issues.push(...Gr(n, e.issues))
    }
    !o &&
    i === void 0 ? e.issues.length ||
    t.issues.push({
      code: `invalid_type`,
      expected: `nonoptional`,
      input: void 0,
      path: [
        n
      ]
    }) : e.value === void 0 ? (o || i === `defaulted` && !s) &&
    (t.value[n] = void 0) : t.value[n] = e.value
  }
}
var qo = [];
function Jo(e) {
  let t = Object.keys(e.shape),
  n = Object.getOwnPropertySymbols(e.shape),
  r = n.length ? n : qo,
  i = r.length ? [
    ...t,
    ...r
  ] : t;
  for (let t of i) if (!e.shape?.[t]?._zod?.traits?.has(`$ZodType`)) throw Error(
    `Invalid element at key "${ String(t) }": expected a Zod schema`
  );
  let a = jr(e.shape);
  return {
    ...e,
    allKeys: i,
    symbolKeys: r,
    keySet: new Set(t),
    numKeys: t.length,
    optionalKeys: new Set(a)
  }
}
function Yo(e, t, n, r, i, a, o) {
  let s = [],
  c = i.keySet,
  l = i.catchall._zod,
  u = l.def.type,
  d = l.optin,
  f = l.optout,
  p = 0;
  for (let i in t) {
    if (o && n.issues.length !== p) {
      if (Ur(n, p)) break;
      p = n.issues.length
    }
    if (c.has(i)) continue;
    if (i === `__proto__`) {
      u === `never` &&
      s.push(i);
      continue
    }
    if (u === `never`) {
      s.push(i);
      continue
    }
    let a = l.run({
      value: t[i],
      issues: []
    }, r);
    a instanceof Promise ? e.push(a.then(e => Ko(e, n, i, t, d, f))) : Ko(a, n, i, t, d, f)
  }
  return s.length &&
  n.issues.push({
    code: `unrecognized_keys`,
    keys: s,
    input: t,
    inst: a,
    continue : !0
  }),
  e.length ? Promise.all(e).then(() => n) : n
}
var Xo = j(
  `$ZodObject`,
  (e, t) => {
    P.init(e, t);
    let n = Object.getOwnPropertyDescriptor(t, `shape`),
    r = n?.get ? n.get.raw : t.shape ?? {
    };
    if (r) {
      let e = () => {
        let n = {
          ...r
        };
        return Object.defineProperty(t, 'shape', {
          value: n
        }),
        e.raw = n,
        n
      };
      e.raw = r,
      Object.defineProperty(t, 'shape', {
        get: e
      })
    }
    let i = lr(() => Jo(t));
    A(
      e,
      `propValues`,
      e => {
        let t = e.def.shape,
        n = {};
        for (let e in t) {
          let r = t[e]._zod;
          if (r.values) {
            Object.prototype.hasOwnProperty.call(n, e) ||
            pr(n, e, new Set);
            for (let t of r.values) n[e].add(t);
            r.optin !== void 0 &&
            n[e].add(void 0)
          }
        }
        return n
      }
    );
    let a = Cr,
    o = t.catchall,
    s,
    c = M.memoizer;
    c?.attach(e),
    e._zod.parse = (t, n) => {
      s ??= i.value;
      let r = t.value;
      if (!a(r)) return t.issues.push({
        expected: `object`,
        code: `invalid_type`,
        input: r,
        inst: e
      }),
      t;
      t.value = c ? c.alloc(e, t, {
      }, n) : {
      };
      let l = [],
      u = s.shape,
      d = n?.abortEarly,
      f = t.issues.length;
      for (let e of s.allKeys) {
        if (d && t.issues.length !== f) {
          if (Ur(t, f)) break;
          f = t.issues.length
        }
        if (e === `__proto__`) continue;
        let i = u[e],
        a = i._zod.optin,
        o = i._zod.optout,
        s = i._zod.run({
          value: r[e],
          issues: []
        }, n);
        s instanceof Promise ? l.push(s.then(n => Ko(n, t, e, r, a, o))) : Ko(s, t, e, r, a, o)
      }
      return o ? Yo(l, r, t, n, i.value, e, d === !0) : l.length ? Promise.all(l).then(() => t) : t
    }
  }
),
Zo = j(
  `$ZodObjectJIT`,
  (e, t) => {
    Xo.init(e, t);
    let n = e._zod.parse,
    r = lr(() => Jo(t)),
    i = M.memoizer,
    a = t => {
      let n = r.value,
      a = n.symbolKeys,
      o = new Ga([`payload`,
      `ctx`], {
        shape: t,
        inst: e,
        memo: i,
        syms: a
      }),
      s = e => `shape[${ e }]._zod.run({ value: input[${ e }], issues: [] }, ctx)`,
      c = (e, t) => `
          let 
      ${ e }_ab = false;
          for (let i = 0; i < 
      ${ e }.issues.length; i++) {
            const iss = 
      ${ e }.issues[i];
            iss.path = iss.path ? [
      ${ t }, ...iss.path] : [${ t }];
            payload.issues.push(iss);
            if (iss.continue !== true) 
      ${ e }_ab = true;
          }
          if (
      ${ e }_ab && ctx && ctx.abortEarly) {
            payload.value = newResult;
            return payload;
          }
      `;
      o.write(`const input = payload.value;`);
      let l = Object.create(null),
      u = 0;
      for (let e of n.allKeys) l[e] = `key_${ u++ }`;
      o.write(
        i ? `const newResult = memo.alloc(inst, payload, {}, ctx);` : `const newResult = {};`
      );
      for (let e of n.allKeys) {
        if (e === `__proto__`) continue;
        let n = l[e],
        r = typeof e == `symbol` ? `syms[${ a.indexOf(e) }]` : br(e),
        i = `${ r } in input`,
        u = t[e],
        d = u?._zod?.optin,
        f = d !== void 0,
        p = u?._zod?.optout === `optional`;
        if (o.write(`const ${ n } = ${ s(r) };`), f && p) {
          let e = d === `optional` ? `${ n }_present` : `${ n }.value !== undefined || ${ n }_present`;
          o.write(
            `
        const 
            ${ n }_present = ${ i };
        if (!
            ${ n }.issues.length || ${ n }_present) {
          if (
            ${ n }.issues.length) {${ c(n, r) }
          }

          if (
            ${ e }) {
            newResult[
            ${ r }] = ${ n }.value;
          }
        }

      
            `
          )
        } else f ? (
          o.write(
            `
        if (
            ${ n }.issues.length) {${ c(n, r) }
        }
      
            `
          ),
          d === `defaulted` ? o.write(`newResult[${ r }] = ${ n }.value;`) : o.write(
            `
        if (
            ${ n }.value !== undefined || ${ i }) {
          newResult[
            ${ r }] = ${ n }.value;
        }
      
            `
          )
        ) : o.write(
          `
        const 
          ${ n }_present = ${ i };
        if (
          ${ n }.issues.length) {${ c(n, r) }
        }
        if (!
          ${ n }_present && !${ n }.issues.length) {
          payload.issues.push({
            code: "invalid_type",
            expected: "nonoptional",
            input: undefined,
            path: [
          ${ r }]
          });
          if (ctx && ctx.abortEarly) {
            payload.value = newResult;
            return payload;
          }
        }

        if (
          ${ n }_present) {
          newResult[
          ${ r }] = ${ n }.value;
        }

      
          `
        )
      }
      return o.write(`payload.value = newResult;`),
      o.write(`return payload;`),
      o.compile()
    },
    o,
    s = Cr,
    c = !M.jitless,
    l = c &&
    wr.value,
    u = t.catchall,
    d;
    e._zod.parse = (i, f) => {
      d ??= r.value;
      let p = i.value;
      return s(p) ? c &&
      l &&
      f?.async === !1 &&
      f.jitless !== !0 ? (
        o ||= a(t.shape),
        i = o(i, f),
        u ? Yo([], p, i, f, d, e, f?.abortEarly === !0) : i
      ) : n(i, f) : (
        i.issues.push({
          expected: `object`,
          code: `invalid_type`,
          input: p,
          inst: e
        }),
        i
      )
    }
  }
);
function Qo(e, t, n, r) {
  for (let n of e) if (n.issues.length === 0) return t.value = n.value,
  t;
  let i = e.filter(e => !Ur(e));
  return i.length === 1 ? (t.value = i[0].value, i[0]) : (
    t.issues.push({
      code: `invalid_union`,
      input: t.value,
      inst: n,
      errors: e.map(e => e.issues.map(e => Yr(e, r, yi())))
    }),
    t
  )
}
var $o = j(
  `$ZodUnion`,
  (e, t) => {
    P.init(e, t),
    A(
      e,
      `optin`,
      e => e.def.options.some(e => e._zod.optin === `defaulted`) ? `defaulted` : e.def.options.some(e => e._zod.optin !== void 0) ? `optional` : void 0
    ),
    A(
      e,
      `optout`,
      e => e.def.options.some(e => e._zod.optout === `optional`) ? `optional` : void 0
    ),
    A(
      e,
      `values`,
      e => {
        if (e.def.options.every(e => e._zod.values)) return new Set(e.def.options.flatMap(e => Array.from(e._zod.values)))
      }
    ),
    A(
      e,
      `pattern`,
      e => {
        if (e.def.options.every(e => e._zod.pattern)) {
          let t = e.def.options.map(e => e._zod.pattern);
          return RegExp(`^(${ t.map(e => dr(e.source)).join(`|`) })$`)
        }
      }
    );
    let n = t.options.length === 1 ? t.options[0]._zod.run : null;
    e._zod.parse = (r, i) => {
      if (n) return n(r, i);
      let a = !1,
      o = [];
      for (let e of t.options) {
        let t = e._zod.run({
          value: r.value,
          issues: []
        }, i);
        if (t instanceof Promise) o.push(t),
        a = !0;
         else {
          if (t.issues.length === 0) return t;
          o.push(t)
        }
      }
      return a ? Promise.all(o).then(t => Qo(t, r, e, i)) : Qo(o, r, e, i)
    }
  }
);
function es(e) {
  let t = new Map;
  for (let n of e.options) {
    let r = n._zod.propValues?.[e.discriminator];
    if (!r || r.size === 0) throw Error(
      `Invalid discriminated union option at index "${ e.options.indexOf(n) }"`
    );
    for (let e of r) if (t.has(e)) {
      if (e !== void 0) throw Error(`Duplicate discriminator value "${ String(e) }"`);
      t.set(e, null)
    } else t.set(e, n)
  }
  return t
}
var ts = j(
  `$ZodDiscriminatedUnion`,
  (e, t) => {
    t.inclusive = !1,
    $o.init(e, t);
    let n = e._zod.parse;
    A(
      e,
      `propValues`,
      e => {
        let t = {},
        n = 0;
        for (let r of e.def.options) {
          let i = r._zod.propValues;
          if (!i || Object.keys(i).length === 0) throw Error(
            `Invalid discriminated union option at index "${ e.def.options.indexOf(r) }"`
          );
          i[e.def.discriminator]?.has(void 0) &&
          n++;
          for (let[e,
          n]of Object.entries(i)) {
            Object.prototype.hasOwnProperty.call(t, e) ||
            pr(t, e, new Set);
            for (let r of n) t[e].add(r)
          }
        }
        return !e.def.unionFallback &&
        n > 1 &&
        t[e.def.discriminator]?.delete (void 0),
        t
      }
    ),
    t.options.forEach(
      (e, n) => {
        let r = mr(e._zod.def);
        if (r && !Object.prototype.hasOwnProperty.call(r, t.discriminator)) throw Error(`Invalid discriminated union option at index "${ n }"`)
      }
    );
    let r = lr(() => es(t));
    e._zod.parse = (i, a) => {
      let o = i.value;
      if (!Cr(o)) return i.issues.push({
        code: `invalid_type`,
        expected: `object`,
        input: o,
        inst: e
      }),
      i;
      let s = o?.[t.discriminator],
      c = r.value.get(s);
      return c &&
      (s !== void 0 || a.direction !== `backward`) ? c._zod.run(i, a) : t.unionFallback ||
      a.direction === `backward` ? n(i, a) : (
        i.issues.push({
          code: `invalid_union`,
          errors: [],
          note: `No matching discriminator`,
          discriminator: t.discriminator,
          options: Array.from(r.value.keys()).filter(e => r.value.get(e) !== null),
          input: o,
          path: [
            t.discriminator
          ],
          inst: e
        }),
        i
      )
    }
  }
),
ns = j(
  `$ZodIntersection`,
  (e, t) => {
    P.init(e, t),
    e._zod.parse = (e, n) => {
      let r = e.value,
      i = t.left._zod.run({
        value: r,
        issues: []
      }, n),
      a = t.right._zod.run({
        value: r,
        issues: []
      }, n);
      return i instanceof Promise ||
      a instanceof Promise ? Promise.all([i,
      a]).then(([t,
      n]) => is(e, t, n)) : is(e, i, a)
    }
  }
);
function rs(e, t) {
  if (e === t || e instanceof Date && t instanceof Date && + e == + t) return {
    valid: !0,
    data: e
  };
  if (Tr(e) && Tr(t)) {
    let n = Object.keys(t),
    r = Object.keys(e).filter(e => n.indexOf(e) !== - 1),
    i = {
      ...e,
      ...t
    };
    Object.prototype.hasOwnProperty.call(i, `__proto__`) &&
    delete i.__proto__;
    for (let n of r) {
      if (n === `__proto__`) continue;
      let r = rs(e[n], t[n]);
      if (!r.valid) return {
        valid: !1,
        mergeErrorPath: [
          n,
          ...r.mergeErrorPath
        ]
      };
      i[n] = r.data
    }
    return {
      valid: !0,
      data: i
    }
  }
  if (Array.isArray(e) && Array.isArray(t)) {
    if (e.length !== t.length) return {
      valid: !1,
      mergeErrorPath: []
    };
    let n = [];
    for (let r = 0; r < e.length; r++) {
      let i = e[r],
      a = t[r],
      o = rs(i, a);
      if (!o.valid) return {
        valid: !1,
        mergeErrorPath: [
          r,
          ...o.mergeErrorPath
        ]
      };
      n.push(o.data)
    }
    return {
      valid: !0,
      data: n
    }
  }
  return {
    valid: !1,
    mergeErrorPath: []
  }
}
function is(e, t, n) {
  let r = new Map,
  i,
  a = new Map,
  o = (e, t) => {
    let n;
    if (e.code === `unrecognized_keys` && !e.path?.length) i ??= e,
    n = e.keys;
     else if (
      e.code === `invalid_key` &&
      e.origin === `record` &&
      e.path?.length === 1
    ) {
      let t = String(e.path[0]);
      a.has(t) ||
      a.set(t, e),
      n = [
        t
      ]
    } else return !1;
    for (let e of n) r.has(e) ||
    r.set(e, {
    }),
    r.get(e) [t] = !0;
    return !0
  };
  for (let n of t.issues) o(n, `l`) ||
  e.issues.push(n);
  for (let t of n.issues) o(t, `r`) ||
  e.issues.push(t);
  let s = [
    ...r
  ].filter(([,
  e]) => e.l && e.r).map(([e]) => e);
  if (s.length) {
    let t = i ? s.filter(e => i.keys.includes(e)) : [];
    t.length &&
    e.issues.push({
      ...i,
      keys: t
    });
    for (let n of s) !t.includes(n) &&
    a.has(n) &&
    e.issues.push(a.get(n))
  }
  let c = rs(t.value, n.value);
  if (!c.valid) {
    if (Ur(e)) return e;
    throw Error(
      `Unmergable intersection. Error path: ${ JSON.stringify(c.mergeErrorPath) }`
    )
  }
  return e.value = c.data,
  e
}
var as = j(
  `$ZodRecord`,
  (e, t) => {
    P.init(e, t);
    let n = M.memoizer;
    n?.attach(e),
    e._zod.parse = (r, i) => {
      let a = r.value;
      if (!Tr(a)) return r.issues.push({
        expected: `record`,
        code: `invalid_type`,
        input: a,
        inst: e
      }),
      r;
      let o = [],
      s = t.keyType._zod.values;
      if (s && !t.partial) {
        r.value = n ? n.alloc(e, r, {
        }, i) : {
        };
        let c = new Set;
        for (let n of s) if (typeof n == `string` || typeof n == `number` || typeof n == `symbol`) {
          if (c.add(typeof n == `number` ? n.toString() : n), n === `__proto__`) continue;
          let s = t.keyType._zod.run({
            value: n,
            issues: []
          }, i);
          if (s instanceof Promise) throw Error(`Async schemas not supported in object keys currently`);
          if (s.issues.length) {
            r.issues.push({
              code: `invalid_key`,
              origin: `record`,
              issues: s.issues.map(e => Yr(e, i, yi())),
              input: n,
              path: [
                n
              ],
              inst: e
            });
            continue
          }
          let l = s.value;
          if (l === `__proto__`) continue;
          let u = t.valueType._zod.run({
            value: a[n],
            issues: []
          }, i);
          u instanceof Promise ? o.push(
            u.then(
              e => {
                e.issues.length &&
                r.issues.push(...Gr(n, e.issues)),
                r.value[l] = e.value
              }
            )
          ) : (
            u.issues.length &&
            r.issues.push(...Gr(n, u.issues)),
            r.value[l] = u.value
          )
        }
        let l;
        for (let e in a) if (!c.has(e)) {
          if (t.mode === `loose`) {
            if (e === `__proto__`) continue;
            r.value[e] = a[e]
          } else l ??= [],
          l.push(e)
        }
        l &&
        l.length > 0 &&
        r.issues.push({
          code: `unrecognized_keys`,
          input: a,
          inst: e,
          keys: l,
          continue : !0
        })
      } else {
        r.value = n ? n.alloc(e, r, {
        }, i) : {
        };
        let c;
        for (let n of Reflect.ownKeys(a)) {
          if (
            n === `__proto__` ||
            !Object.prototype.propertyIsEnumerable.call(a, n)
          ) continue;
          let l = t.keyType._zod.run({
            value: n,
            issues: []
          }, i);
          if (l instanceof Promise) throw Error(`Async schemas not supported in object keys currently`);
          if (typeof n == `string` && Ca.test(n) && l.issues.length) {
            let e = t.keyType._zod.run({
              value: Number(n),
              issues: []
            }, i);
            if (e instanceof Promise) throw Error(`Async schemas not supported in object keys currently`);
            e.issues.length === 0 &&
            (l = e)
          }
          if (l.issues.length) {
            t.mode === `loose` ? r.value[n] = a[n] : s ? (c ??= [], c.push(n)) : r.issues.push({
              code: `invalid_key`,
              origin: `record`,
              issues: l.issues.map(e => Yr(e, i, yi())),
              input: n,
              path: [
                n
              ],
              inst: e
            });
            continue
          }
          let u = l.value;
          if (u === `__proto__`) continue;
          let d = t.valueType._zod.run({
            value: a[n],
            issues: []
          }, i);
          d instanceof Promise ? o.push(
            d.then(
              e => {
                e.issues.length &&
                r.issues.push(...Gr(n, e.issues)),
                r.value[u] = e.value
              }
            )
          ) : (
            d.issues.length &&
            r.issues.push(...Gr(n, d.issues)),
            r.value[u] = d.value
          )
        }
        c &&
        c.length > 0 &&
        r.issues.push({
          code: `unrecognized_keys`,
          input: a,
          inst: e,
          keys: c,
          continue : !0
        })
      }
      return o.length ? Promise.all(o).then(() => r) : r
    }
  }
),
os = j(
  `$ZodEnum`,
  (e, t) => {
    P.init(e, t);
    let n = ar(t.entries),
    r = new Set(n);
    e._zod.values = r,
    A(
      e,
      `pattern`,
      e => {
        let t = ar(e.def.entries).filter(e => Dr.has(typeof e));
        return RegExp(
          t.length ? `^(${ t.map(e => Or(e.toString())).join(`|`) })$` : `^[^\\s\\S]$`
        )
      }
    ),
    e._zod.parse = (t, i) => {
      let a = t.value;
      return r.has(a) ||
      t.issues.push({
        code: `invalid_value`,
        values: n,
        input: a,
        inst: e
      }),
      t
    }
  }
),
ss = j(
  `$ZodLiteral`,
  (e, t) => {
    P.init(e, t);
    let n = new Set(t.values);
    e._zod.values = n,
    A(
      e,
      `pattern`,
      e => {
        let t = e.def.values;
        return RegExp(
          t.length ? `^(${ t.map(e => typeof e == `string` ? Or(e) : e ? Or(e.toString()) : String(e)).join(`|`) })$` : `^[^\\s\\S]$`
        )
      }
    ),
    e._zod.parse = (r, i) => {
      let a = r.value;
      return n.has(a) ||
      r.issues.push({
        code: `invalid_value`,
        values: t.values,
        input: a,
        inst: e
      }),
      r
    }
  }
),
cs = j(
  `$ZodTransform`,
  (e, t) => {
    P.init(e, t),
    e._zod.optin = `optional`,
    M.memoizer?.guard(e),
    e._zod.parse = (n, r) => {
      if (r.direction === `backward`) throw new vi(e.constructor.name);
      let i = t.transform(n.value, n);
      if (r.async) return (i instanceof Promise ? i : Promise.resolve(i)).then(e => (n.value = e, n));
      if (i instanceof Promise) throw new _i;
      return n.value = i,
      n
    }
  }
);
function ls(e, t) {
  return e.value = t.issues.length ? void 0 : t.value,
  e
}
var us = j(
  `$ZodOptional`,
  (e, t) => {
    P.init(e, t),
    A(
      e,
      `optin`,
      e => e.def.innerType._zod.optin === `defaulted` ? `defaulted` : `optional`
    ),
    e._zod.optout = `optional`,
    A(
      e,
      `values`,
      e => {
        let t = e.def.innerType._zod.values;
        return t ? new Set([...t,
        void 0]) : void 0
      }
    ),
    A(
      e,
      `pattern`,
      e => {
        let t = e.def.innerType._zod.pattern;
        return t ? RegExp(`^(${ dr(t.source) })?$`) : void 0
      }
    ),
    e._zod.parse = (e, n) => {
      if (e.value === void 0) {
        if (t.innerType._zod.optin !== `defaulted`) return e;
        let r = t.innerType._zod.run({
          value: e.value,
          issues: []
        }, n);
        return r instanceof Promise ? r.then(t => ls(e, t)) : ls(e, r)
      }
      return t.innerType._zod.run(e, n)
    }
  }
),
ds = j(
  `$ZodExactOptional`,
  (e, t) => {
    us.init(e, t),
    A(e, `values`, e => e.def.innerType._zod.values),
    A(e, `pattern`, e => e.def.innerType._zod.pattern),
    e._zod.parse = (e, n) => t.innerType._zod.run(e, n)
  }
),
fs = j(
  `$ZodNullable`,
  (e, t) => {
    P.init(e, t),
    A(e, `optin`, e => e.def.innerType._zod.optin),
    A(e, `optout`, e => e.def.innerType._zod.optout),
    A(
      e,
      `pattern`,
      e => {
        let t = e.def.innerType._zod.pattern;
        return t ? RegExp(`^(${ dr(t.source) }|null)$`) : void 0
      }
    ),
    A(
      e,
      `values`,
      e => e.def.innerType._zod.values ? new Set([...e.def.innerType._zod.values,
      null]) : void 0
    ),
    e._zod.parse = (e, n) => e.value === null ? e : t.innerType._zod.run(e, n)
  }
),
ps = j(
  `$ZodDefault`,
  (e, t) => {
    P.init(e, t),
    e._zod.optin = `defaulted`,
    A(e, `values`, e => e.def.innerType._zod.values),
    e._zod.parse = (e, n) => {
      if (n.direction === `backward`) return t.innerType._zod.run(e, n);
      if (e.value === void 0) return e.value = t.defaultValue,
      e;
      let r = t.innerType._zod.run(e, n);
      return r instanceof Promise ? r.then(e => ms(e, t)) : ms(r, t)
    }
  }
);
function ms(e, t) {
  return e.value === void 0 &&
  (e.value = t.defaultValue),
  e
}
var hs = j(
  `$ZodPrefault`,
  (e, t) => {
    P.init(e, t),
    e._zod.optin = `defaulted`,
    A(e, `values`, e => e.def.innerType._zod.values),
    e._zod.parse = (e, n) => (
      n.direction === `backward` ||
      e.value === void 0 &&
      (e.value = t.defaultValue),
      t.innerType._zod.run(e, n)
    )
  }
),
gs = j(
  `$ZodNonOptional`,
  (e, t) => {
    P.init(e, t),
    A(
      e,
      `values`,
      e => {
        let t = e.def.innerType._zod.values;
        return t ? new Set([...t].filter(e => e !== void 0)) : void 0
      }
    ),
    e._zod.parse = (n, r) => {
      let i = t.innerType._zod.run(n, r);
      return i instanceof Promise ? i.then(t => _s(t, e)) : _s(i, e)
    }
  }
);
function _s(e, t) {
  return !e.issues.length &&
  e.value === void 0 &&
  e.issues.push({
    code: `invalid_type`,
    expected: `nonoptional`,
    input: e.value,
    inst: t
  }),
  e
}
function vs(e, t, n, r) {
  return t.issues.length ? (
    e.value = n.catchValue({
      ...t,
      value: e.value,
      error: {
        issues: t.issues.map(e => Yr(e, r, yi()))
      },
      input: e.value
    }),
    e
  ) : (e.value = t.value, t.memo && (e.memo = !0), e)
}
var ys = j(
  `$ZodCatch`,
  (e, t) => {
    P.init(e, t),
    A(
      e,
      `optin`,
      e => e.def.innerType._zod.optin === `defaulted` ? `defaulted` : `optional`
    ),
    A(e, `optout`, e => e.def.innerType._zod.optout),
    A(e, `values`, e => e.def.innerType._zod.values),
    e._zod.parse = (e, n) => {
      if (n.direction === `backward`) return t.innerType._zod.run(e, n);
      let r = t.innerType._zod.run({
        value: e.value,
        issues: []
      }, n);
      return r instanceof Promise ? r.then(r => vs(e, r, t, n)) : vs(e, r, t, n)
    }
  }
),
bs = j(
  `$ZodPipe`,
  (e, t) => {
    P.init(e, t),
    A(e, `values`, e => e.def.in._zod.values),
    A(e, `optin`, e => e.def.in._zod.optin),
    A(e, `optout`, e => e.def.out._zod.optout),
    A(e, `propValues`, e => e.def.in._zod.propValues),
    e._zod.parse = (e, n) => {
      if (n.direction === `backward`) {
        let r = t.out._zod.run(e, n);
        return r instanceof Promise ? r.then(e => xs(e, t.in, n)) : xs(r, t.in, n)
      }
      let r = t.in._zod.run(e, n);
      return r instanceof Promise ? r.then(e => xs(e, t.out, n)) : xs(r, t.out, n)
    }
  }
);
function xs(e, t, n) {
  return e.issues.some(e => e.code !== `unrecognized_keys`) ? (e.aborted = !0, e) : t._zod.run({
    value: e.value,
    issues: e.issues
  }, n)
}
var Ss = j(`$ZodPreprocess`, (e, t) => {
  bs.init(e, t)
}),
Cs = j(
  `$ZodReadonly`,
  (e, t) => {
    P.init(e, t),
    A(e, `propValues`, e => e.def.innerType._zod.propValues),
    A(e, `values`, e => e.def.innerType._zod.values),
    A(e, `optin`, e => e.def.innerType?._zod?.optin),
    A(e, `optout`, e => e.def.innerType?._zod?.optout),
    e._zod.parse = (e, n) => {
      if (n.direction === `backward`) return t.innerType._zod.run(e, n);
      let r = t.innerType._zod.run(e, n);
      return r instanceof Promise ? r.then(ws) : ws(r)
    }
  }
);
function ws(e) {
  return e.memo ||
  (e.value = Object.freeze(e.value)),
  e
}
var Ts = j(
  `$ZodCustom`,
  (e, t) => {
    N.init(e, t),
    P.init(e, t),
    e._zod.parse = (e, t) => e,
    e._zod.check = n => {
      let r = n.value,
      i = t.fn(r);
      if (i instanceof Promise) return i.then(t => Es(t, n, r, e));
      Es(i, n, r, e)
    }
  }
);
function Es(e, t, n, r) {
  if (!e) {
    let e = {
      code: `custom`,
      input: n,
      inst: r,
      path: [
        ...r._zod.def.path ?? []
      ],
      continue : !r._zod.def.abort
    };
    r._zod.def.params &&
    (e.params = r._zod.def.params),
    t.issues.push(ei(e))
  }
}
var Ds = class extends Error {
  constructor() {
    super (
      `Cannot parse a reference cycle that closes through a transform`
    ),
    this.name = `ZodCyclicError`
  }
},
Os = `~memo`,
ks = [];
function As(e) {
  return typeof e == `object` &&
  !!e
}
function js(e) {
  return e.map(e => e.path ? {
    ...e,
    path: e.path.slice()
  }
   : {
    ...e
  })
}
var Ms = new WeakMap,
Ns = 0,
Ps = 1,
Fs = 2;
function Is(e, t, n) {
  let r = Ms.get(e);
  if (r !== void 0) return r ? Fs : Ns;
  if (t.has(e)) return Fs;
  t.add(e);
  let i = Ns,
  a = e => {
    if (i !== Fs && e?._zod) {
      let r = Is(e, t, n);
      r > i &&
      (i = r)
    }
  },
  o = (e, r) => {
    let i = Ns;
    for (let a of Reflect.ownKeys(e)) {
      let o = Object.getOwnPropertyDescriptor(e, a);
      if (r && !o.enumerable) continue;
      let s = o.get ? Ps : o.value?._zod ? Is(o.value, t, n) : Ns;
      s > i &&
      (i = s)
    }
    return i
  },
  s = e => {
    e > i &&
    (i = e)
  },
  c = e._zod.def;
  switch (c.type) {
    case `object`:
      {
        let e = mr(c);
        s(e ? o(e, !0) : Ps),
        a(c.catchall);
        break
      }
    case `array`:
      a(c.element);
      break;
    case `tuple`:
      for (let e of c.items) a(e);
      a(c.rest);
      break;
    case `record`:
    case `map`:
      a(c.keyType),
      a(c.valueType);
      break;
    case `set`:
      a(c.valueType);
      break;
    case `union`:
      for (let e of c.options) a(e);
      break;
    case `intersection`:
      a(c.left),
      a(c.right);
      break;
    case `optional`:
    case `nullable`:
    case `default`:
    case `prefault`:
    case `catch`:
    case `readonly`:
    case `nonoptional`:
    case `promise`:
    case `success`:
      a(c.innerType);
      break;
    case `pipe`:
      a(c.in),
      a(c.out);
      break;
    case `function`:
      a(c.input),
      a(c.output);
      break;
    case `lazy`:
      {
        let r = c._cachedInner ?? (n ? e._zod.innerType : void 0);
        s(r ? Is(r, t, !1) : Ps);
        break
      }
    case `template_literal`:
    case `string`:
    case `number`:
    case `int`:
    case `boolean`:
    case `bigint`:
    case `symbol`:
    case `undefined`:
    case `null`:
    case `void`:
    case `never`:
    case `any`:
    case `unknown`:
    case `date`:
    case `nan`:
    case `enum`:
    case `literal`:
    case `file`:
    case `transform`:
    case `custom`:
      break;
    default:
      for (let e in c) {
        let t = Object.getOwnPropertyDescriptor(c, e);
        if (!t || t.get) continue;
        let n = t.value;
        if (n && typeof n == `object`) {
          if (n._zod) a(n);
           else if (Array.isArray(n)) for (let e of n) a(e)
        }
      }
  }
  return t.delete(e),
  Ls(e, i)
}
function Ls(e, t) {
  return t !== Ps &&
  Ms.set(e, t === Fs),
  t
}
function Rs(e, t) {
  let n = e.buckets.get(t);
  return n ||
  (n = new WeakMap, e.buckets.set(t, n)),
  n
}
var zs,
Bs = [],
Vs = {
  alloc(e, t, n) {
    let r = zs;
    if (!r) return n;
    zs = void 0;
    let i = {
      value: n,
      issues: null
    };
    return r.set(t.value, i),
    Bs.push(i),
    n
  },
  guard(e) {
    var t;
    (t = e._zod).deferred ?? (t.deferred = []),
    e._zod.deferred.push(
      () => {
        let t = e._zod.parse,
        n = (e, n) => {
          if (n.direction !== `backward` && Us(n, e.value)) throw new Ds;
          return t(e, n)
        };
        e._zod.parse = n,
        e._zod.run === t &&
        (e._zod.run = n)
      }
    )
  },
  attach(e) {
    var t;
    let n,
    r = !1,
    i,
    a;
    (t = e._zod).deferred ?? (t.deferred = []),
    e._zod.deferred.push(
      () => {
        let t = e._zod.parse,
        o = (s, c) => {
          if (n === void 0) {
            let i = Is(e, new Set, !1);
            if (i === Ns) return e._zod.parse = t,
            e._zod.run === o &&
            (e._zod.run = t),
            t(s, c);
            i === Fs ||
            r ? n = !0 : r = !0
          }
          let l = s.value;
          if (!As(l)) return t(s, c);
          let u = c[Os];
          u ||
          (u = {
            buckets: new WeakMap,
            backEdges: void 0
          }, c[Os] = u);
          let d;
          i === c ? d = a : (d = Rs(u, e), i = c, a = d);
          let f = d.get(l);
          if (f) return s.value = f.value,
          f.issues ? f.issues.length &&
          s.issues.push(...js(f.issues)) : (
            s.memo = !0,
            u.backEdges ?? (u.backEdges = new WeakSet),
            u.backEdges.add(f.value)
          ),
          s;
          zs = d;
          let p = Bs.length,
          m = t(s, c);
          zs = void 0;
          let h = Bs.length > p ? Bs.pop() : void 0;
          return m instanceof Promise ? m.then(e => (h && (h.issues = e.issues.length ? js(e.issues) : ks), e)) : (h && (h.issues = m.issues.length ? js(m.issues) : ks), m)
        };
        e._zod.parse = o,
        e._zod.run === t &&
        (e._zod.run = o)
      }
    )
  }
};
function Hs() {
  return Vs
}
function Us(e, t) {
  let n = e[Os]?.backEdges;
  return n !== void 0 &&
  As(t) &&
  n.has(t)
}
var Ws = () => {
  let e = {
    string: {
      unit: `characters`,
      verb: `to have`
    },
    file: {
      unit: `bytes`,
      verb: `to have`
    },
    array: {
      unit: `items`,
      verb: `to have`
    },
    set: {
      unit: `items`,
      verb: `to have`
    },
    map: {
      unit: `entries`,
      verb: `to have`
    }
  };
  function t(t) {
    return e[t] ?? null
  }
  let n = {
    regex: `input`,
    email: `email address`,
    url: `URL`,
    emoji: `emoji`,
    uuid: `UUID`,
    uuidv4: `UUIDv4`,
    uuidv6: `UUIDv6`,
    nanoid: `nanoid`,
    guid: `GUID`,
    cuid: `cuid`,
    cuid2: `cuid2`,
    ulid: `ULID`,
    xid: `XID`,
    ksuid: `KSUID`,
    datetime: `ISO datetime`,
    date: `ISO date`,
    time: `ISO time`,
    duration: `ISO duration`,
    ipv4: `IPv4 address`,
    ipv6: `IPv6 address`,
    mac: `MAC address`,
    cidrv4: `IPv4 range`,
    cidrv6: `IPv6 range`,
    base64: `base64-encoded string`,
    base64url: `base64url-encoded string`,
    json_string: `JSON string`,
    e164: `E.164 number`,
    currency_code: `currency code`,
    credit_card: `credit card number`,
    iban: `IBAN`,
    jwt: `JWT`,
    template_literal: `input`
  },
  r = {
    nan: `NaN`
  };
  function i(e, t) {
    return e === `number` &&
    typeof t == `number` &&
    !Number.isFinite(t) ? String(t) : r[e] ?? e
  }
  return e => {
    switch (e.code) {
      case `invalid_type`:
        return `Invalid input: expected ${ i(e.expected) }, received ${ i($r(e.input), e.input) }`;
      case `invalid_value`:
        return e.values.length === 1 ? `Invalid input: expected ${ Ar(e.values[0]) }` : `Invalid option: expected one of ${ or(e.values, `|`) }`;
      case `too_big`:
        {
          let n = e.exact ? `exactly ` : e.inclusive ? `<=` : `<`,
          r = t(e.origin);
          return r ? `Too big: expected ${ e.origin ?? `value` } to have ${ n }${ e.maximum.toString() } ${ r.unit ?? `elements` }` : `Too big: expected ${ e.origin ?? `value` } to be ${ n }${ e.maximum.toString() }`
        }
      case `too_small`:
        {
          let n = e.exact ? `exactly ` : e.inclusive ? `>=` : `>`,
          r = t(e.origin);
          return r ? `Too small: expected ${ e.origin } to have ${ n }${ e.minimum.toString() } ${ r.unit }` : `Too small: expected ${ e.origin } to be ${ n }${ e.minimum.toString() }`
        }
      case `invalid_format`:
        {
          let t = e;
          return t.format === `starts_with` ? `Invalid string: must start with "${ t.prefix }"` : t.format === `ends_with` ? `Invalid string: must end with "${ t.suffix }"` : t.format === `includes` ? `Invalid string: must include "${ t.includes }"` : t.format === `regex` ? `Invalid string: must match pattern ${ t.pattern }` : `Invalid ${ n[t.format] ?? e.format }`
        }
      case `not_multiple_of`:
        return `Invalid number: must be a multiple of ${ e.divisor }`;
      case `unrecognized_keys`:
        return `Unrecognized key${ e.keys.length > 1 ? `s` : `` }: ${ or(e.keys, `, `) }`;
      case `invalid_key`:
        return `Invalid key in ${ e.origin }`;
      case `invalid_union`:
        return e.options &&
        Array.isArray(e.options) &&
        e.options.length > 0 ? `Invalid discriminator value. Expected ${ e.options.map(e => `'${ e }'`).join(` | `) }` : e.inclusive === !1 ? `Invalid input: more than one option matched` : `Invalid input`;
      case `invalid_element`:
        return `Invalid value in ${ e.origin }`;
      default:
        return `Invalid input`
    }
  }
};
function Gs() {
  return {
    localeError: Ws()
  }
}
var Ks,
qs = class {
  constructor() {
    this._map = new WeakMap,
    this._idmap = new Map
  }
  add(e, ...t) {
    let n = t[0];
    return this._map.set(e, n),
    n &&
    typeof n == `object` &&
    `id` in n &&
    this._idmap.set(n.id, e),
    this
  }
  clear() {
    return this._map = new WeakMap,
    this._idmap = new Map,
    this
  }
  remove(e) {
    let t = this._map.get(e);
    return t &&
    typeof t == `object` &&
    `id` in t &&
    this._idmap.delete(t.id),
    this._map.delete(e),
    this
  }
  get(e) {
    let t = e._zod.parent;
    if (t) {
      let n = {
        ...this.get(t) ?? {
        }
      };
      delete n.id;
      let r = {
        ...n,
        ...this._map.get(e)
      };
      return Object.keys(r).length ? r : void 0
    }
    return this._map.get(e)
  }
  has(e) {
    return this._map.has(e)
  }
};
function Js() {
  return new qs
}(Ks = globalThis).__zod_globalRegistry ?? (Ks.__zod_globalRegistry = Js());
var Ys = globalThis.__zod_globalRegistry;
function Xs(e) {
  return e.checks &&= [
    ...e.checks
  ],
  e
}
function Zs(e, t) {
  return new e(Xs({
    type: `string`,
    ...k(t)
  }))
}
function Qs(e, t) {
  return new e({
    type: `string`,
    format: `email`,
    check: `string_format`,
    abort: !1,
    ...k(t)
  })
}
function $s(e, t) {
  return new e({
    type: `string`,
    format: `guid`,
    check: `string_format`,
    abort: !1,
    ...k(t)
  })
}
function ec(e, t) {
  return new e({
    type: `string`,
    format: `uuid`,
    check: `string_format`,
    abort: !1,
    ...k(t)
  })
}
function tc(e, t) {
  return new e({
    type: `string`,
    format: `uuid`,
    check: `string_format`,
    abort: !1,
    version: `v4`,
    ...k(t)
  })
}
function nc(e, t) {
  return new e({
    type: `string`,
    format: `uuid`,
    check: `string_format`,
    abort: !1,
    version: `v6`,
    ...k(t)
  })
}
function rc(e, t) {
  return new e({
    type: `string`,
    format: `uuid`,
    check: `string_format`,
    abort: !1,
    version: `v7`,
    ...k(t)
  })
}
function ic(e, t) {
  return new e({
    type: `string`,
    format: `url`,
    check: `string_format`,
    abort: !1,
    ...k(t)
  })
}
function ac(e, t) {
  return new e({
    type: `string`,
    format: `emoji`,
    check: `string_format`,
    abort: !1,
    ...k(t)
  })
}
function oc(e, t) {
  return new e({
    type: `string`,
    format: `nanoid`,
    check: `string_format`,
    abort: !1,
    ...k(t)
  })
}
function sc(e, t) {
  return new e({
    type: `string`,
    format: `cuid`,
    check: `string_format`,
    abort: !1,
    ...k(t)
  })
}
function cc(e, t) {
  return new e({
    type: `string`,
    format: `cuid2`,
    check: `string_format`,
    abort: !1,
    ...k(t)
  })
}
function lc(e, t) {
  return new e({
    type: `string`,
    format: `ulid`,
    check: `string_format`,
    abort: !1,
    ...k(t)
  })
}
function uc(e, t) {
  return new e({
    type: `string`,
    format: `xid`,
    check: `string_format`,
    abort: !1,
    ...k(t)
  })
}
function dc(e, t) {
  return new e({
    type: `string`,
    format: `ksuid`,
    check: `string_format`,
    abort: !1,
    ...k(t)
  })
}
function fc(e, t) {
  return new e({
    type: `string`,
    format: `ipv4`,
    check: `string_format`,
    abort: !1,
    ...k(t)
  })
}
function pc(e, t) {
  return new e({
    type: `string`,
    format: `ipv6`,
    check: `string_format`,
    abort: !1,
    ...k(t)
  })
}
function mc(e, t) {
  return new e({
    type: `string`,
    format: `cidrv4`,
    check: `string_format`,
    abort: !1,
    ...k(t)
  })
}
function hc(e, t) {
  return new e({
    type: `string`,
    format: `cidrv6`,
    check: `string_format`,
    abort: !1,
    ...k(t)
  })
}
function gc(e, t) {
  return new e({
    type: `string`,
    format: `base64`,
    check: `string_format`,
    abort: !1,
    ...k(t)
  })
}
function _c(e, t) {
  return new e({
    type: `string`,
    format: `base64url`,
    check: `string_format`,
    abort: !1,
    ...k(t)
  })
}
function vc(e, t) {
  return new e({
    type: `string`,
    format: `e164`,
    check: `string_format`,
    abort: !1,
    ...k(t)
  })
}
function yc(e, t) {
  return new e({
    type: `string`,
    format: `jwt`,
    check: `string_format`,
    abort: !1,
    ...k(t)
  })
}
function bc(e, t) {
  return new e({
    type: `string`,
    format: `datetime`,
    check: `string_format`,
    offset: !1,
    local: !1,
    precision: null,
    ...k(t)
  })
}
function xc(e, t) {
  return new e({
    type: `string`,
    format: `date`,
    check: `string_format`,
    ...k(t)
  })
}
function Sc(e, t) {
  return new e({
    type: `string`,
    format: `time`,
    check: `string_format`,
    precision: null,
    ...k(t)
  })
}
function Cc(e, t) {
  return new e({
    type: `string`,
    format: `duration`,
    check: `string_format`,
    ...k(t)
  })
}
function wc(e, t) {
  return new e(Xs({
    type: `number`,
    checks: [],
    ...k(t)
  }))
}
function Tc(e, t) {
  return new e(Xs({
    type: `number`,
    coerce: !0,
    checks: [],
    ...k(t)
  }))
}
function Ec(e, t) {
  return new e({
    type: `number`,
    check: `number_format`,
    abort: !1,
    format: `safeint`,
    ...k(t)
  })
}
function Dc(e, t) {
  return new e({
    type: `boolean`,
    ...k(t)
  })
}
function Oc(e, t) {
  return new e({
    type: `null`,
    ...k(t)
  })
}
function kc(e) {
  return new e({
    type: `unknown`
  })
}
function Ac(e, t) {
  return new e({
    type: `never`,
    ...k(t)
  })
}
function jc(e, t) {
  return new Aa({
    check: `less_than`,
    ...k(t),
    value: e,
    inclusive: !1
  })
}
function Mc(e, t) {
  return new Aa({
    check: `less_than`,
    ...k(t),
    value: e,
    inclusive: !0
  })
}
function Nc(e, t) {
  return new ja({
    check: `greater_than`,
    ...k(t),
    value: e,
    inclusive: !1
  })
}
function Pc(e, t) {
  return new ja({
    check: `greater_than`,
    ...k(t),
    value: e,
    inclusive: !0
  })
}
function Fc(e, t) {
  return new Ma({
    check: `multiple_of`,
    ...k(t),
    value: e
  })
}
function Ic(e, t) {
  return new Pa({
    check: `max_length`,
    ...k(t),
    maximum: e
  })
}
function Lc(e, t) {
  return new Fa({
    check: `min_length`,
    ...k(t),
    minimum: e
  })
}
function Rc(e, t) {
  return new Ia({
    check: `length_equals`,
    ...k(t),
    length: e
  })
}
function zc(e, t) {
  return new Ra({
    check: `string_format`,
    format: `regex`,
    ...k(t),
    pattern: e
  })
}
function Bc(e) {
  return new za({
    check: `string_format`,
    format: `lowercase`,
    ...k(e)
  })
}
function Vc(e) {
  return new Ba({
    check: `string_format`,
    format: `uppercase`,
    ...k(e)
  })
}
function Hc(e, t) {
  return new Va({
    check: `string_format`,
    format: `includes`,
    ...k(t),
    includes: e
  })
}
function Uc(e, t) {
  return new Ha({
    check: `string_format`,
    format: `starts_with`,
    ...k(t),
    prefix: e
  })
}
function Wc(e, t) {
  return new Ua({
    check: `string_format`,
    format: `ends_with`,
    ...k(t),
    suffix: e
  })
}
function Gc(e) {
  return new Wa({
    check: `overwrite`,
    tx: e
  })
}
function Kc(e) {
  return Gc(t => t.normalize(e))
}
function qc() {
  return Gc(e => e.trim())
}
function Jc() {
  return Gc(e => e.toLowerCase())
}
function Yc() {
  return Gc(e => e.toUpperCase())
}
function Xc() {
  return Gc(e => xr(e))
}
function Zc(e, t, n) {
  return new e({
    type: `array`,
    element: t,
    ...k(n)
  })
}
function Qc(e, t, n) {
  return new e({
    type: `custom`,
    check: `custom`,
    fn: t,
    ...k(n)
  })
}
function $c(e, t) {
  let n = el(
    t => (
      t.addIssue = e => {
        if (typeof e == `string`) t.issues.push(ei(e, t.value, n._zod.def));
         else {
          let r = e;
          r.fatal &&
          (r.continue = !1),
          r.code ??= `custom`,
          `input` in r ||
          (r.input = t.value),
          r.inst ??= n,
          r.continue ??= !n._zod.def.abort,
          t.issues.push(ei(r))
        }
      },
      e(t.value, t)
    ),
    t
  );
  return n
}
function el(e, t) {
  let n = new N({
    check: `custom`,
    ...k(t)
  });
  return n._zod.check = e,
  n
}
function tl(e, ...t) {
  for (let n of t) for (let t of Reflect.ownKeys(n)) Object.prototype.propertyIsEnumerable.call(n, t) &&
  pr(e, t, n[t]);
  return e
}
function nl(e) {
  let t = e?.target ?? `draft-2020-12`;
  return t === `draft-4` &&
  (t = `draft-04`),
  t === `draft-7` &&
  (t = `draft-07`),
  {
    processors: e.processors ?? {
    },
    metadataRegistry: e?.metadata ?? Ys,
    target: t,
    unrepresentable: e?.unrepresentable ?? `throw`,
    override: e?.override ?? (() => {
    }),
    io: e?.io ?? `output`,
    counter: 0,
    seen: new Map,
    sharedDefsExtractedFor: void 0,
    sharedEmitDoneFor: void 0,
    cycles: e?.cycles ?? `ref`,
    reused: e?.reused ?? `inline`,
    intersections: [],
    deferred: [],
    external: e?.external ?? void 0
  }
}
function rl(e, t, n, r, i) {
  let a = typeof t.unrepresentable == `function` ? t.unrepresentable({
    zodSchema: e,
    path: r.path,
    message: i
  }) : t.unrepresentable;
  if (a === `any`) return !1;
  if (a === void 0 || a === `throw`) throw Error(i);
  return Object.assign(n, a),
  !0
}
function I(e, t, n = {
  path: [],
  schemaPath: []
}) {
  var r;
  let i = e._zod.def,
  a = t.seen.get(e);
  if (a) return a.count++,
  n.schemaPath.includes(e) &&
  (a.cycle = n.path),
  a.schema;
  let o = {
    schema: {
    },
    count: 1,
    cycle: void 0,
    path: n.path
  };
  t.seen.set(e, o),
  t.sharedDefsExtractedFor = void 0,
  t.sharedEmitDoneFor = void 0;
  let s = e._zod.toJSONSchema?.();
  if (s) o.schema = s;
   else {
    let r = {
      ...n,
      schemaPath: [
        ...n.schemaPath,
        e
      ],
      path: n.path
    };
    if (e._zod.processJSONSchema) e._zod.processJSONSchema(t, o.schema, r);
     else {
      let n = o.schema,
      a = t.processors[i.type];
      if (!a) throw Error(
        `[toJSONSchema]: Non-representable type encountered: ${ i.type }`
      );
      a(e, t, n, r)
    }
    let a = e._zod.parent;
    a &&
    (o.ref ||= a, I(a, t, r), t.seen.get(a).isParent = !0)
  }
  let c = t.metadataRegistry.get(e);
  return c &&
  tl(o.schema, c),
  t.io === `input` &&
  L(e) &&
  (delete o.schema.examples, delete o.schema.default),
  t.io === `input` &&
  `_prefault` in o.schema &&
  ((r = o.schema).default ?? (r.default = o.schema._prefault)),
  delete o.schema._prefault,
  t.seen.get(e).schema
}
function il(e) {
  return e.replace(/~/g, `~0`).replace(/\//g, `~1`)
}
function al(e, t) {
  let n = e.seen.get(t);
  if (!n) throw Error(`Unprocessed schema. This is a bug in Zod.`);
  if (e.external && e.sharedDefsExtractedFor === e.external) return;
  let r = new Map;
  for (let t of e.seen.entries()) {
    let n = e.metadataRegistry.get(t[0]) ?.id;
    if (n) {
      let e = r.get(n);
      if (e && e !== t[0]) throw Error(
        `Duplicate schema id "${ n }" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`
      );
      r.set(n, t[0])
    }
  }
  let i = t => {
    let r = e.target === `draft-2020-12` ? `$defs` : `definitions`;
    if (e.external) {
      let n = e.external.registry.get(t[0]) ?.id,
      i = e.external.uri ?? (e => e);
      if (n) return {
        ref: i(n)
      };
      let a = t[1].defId ?? t[1].schema.id ?? `schema${ e.counter++ }`;
      return t[1].defId = a,
      {
        defId: a,
        ref: `${ i(`__shared`) }#/${ r }/${ il(a) }`
      }
    }
    let i = `#/${ r }/`;
    if (t[1] === n && !t[1].schema.id) return {
      ref: `#`
    };
    let a = t[1].schema.id ?? `__schema${ e.counter++ }`;
    return {
      defId: a,
      ref: i + il(a)
    }
  },
  a = e => {
    if (e[1].schema.$ref) return;
    let t = e[1],
    {
      ref: n,
      defId: r
    }
    = i(e);
    t.def = {
      ...t.schema
    },
    r &&
    (t.defId = r);
    let a = t.schema;
    for (let e in a) delete a[e];
    a.$ref = n
  };
  if (e.cycles === `throw`) for (let t of e.seen.entries()) {
    let e = t[1];
    if (e.cycle) throw Error(
      `Cycle detected: #/${ e.cycle?.join(`/`) }/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.
      `
    )
  }
  for (let n of e.seen.entries()) {
    let r = n[1];
    if (t === n[0]) a(n);
     else {
      if (e.external) {
        let r = e.external.registry.get(n[0]) ?.id;
        if (t !== n[0] && r) {
          a(n);
          continue
        }
      }(
        e.metadataRegistry.get(n[0]) ?.id ||
        r.cycle ||
        r.count > 1 &&
        e.reused === `ref`
      ) &&
      a(n)
    }
  }
  e.external &&
  (e.sharedDefsExtractedFor = e.external)
}
function ol(e) {
  let t = e.anyOf;
  if (!Array.isArray(t) || t.length === 0 || e.type !== void 0) return;
  let n = [];
  for (let e of t) {
    if (!e || typeof e != `object`) return;
    ol(e);
    let t = Object.keys(e);
    if (t.length !== 1 || t[0] !== `type`) return;
    let r = e.type;
    for (let e of Array.isArray(r) ? r : [
      r
    ]) {
      if (typeof e != `string`) return;
      n.includes(e) ||
      n.push(e)
    }
  }
  delete e.anyOf,
  e.type = n.length === 1 ? n[0] : n
}
var sl = new Set([`type`,
`properties`,
`required`,
`additionalProperties`]),
cl = [
  `oneOf`,
  `anyOf`
];
function ll(e) {
  let t = e.additionalProperties;
  return t === void 0 ||
  t === !1 ||
  typeof t != `object` ||
  !t ? null : Object.keys(t).length ? t : null
}
function ul(e) {
  let t = [];
  for (let n of e) {
    if (typeof n != `object` || n.type !== `object`) return null;
    for (let e in n) if (!sl.has(e)) return null;
    t.push(n)
  }
  let n = {},
  r = new Set;
  for (let e of t) {
    for (let r in e.properties) {
      if (Object.prototype.hasOwnProperty.call(n, r)) continue;
      let e = [];
      for (let n of t) {
        let t = n.properties?.[r] ?? ll(n);
        t != null &&
        (e.some(e => JSON.stringify(e) === JSON.stringify(t)) || e.push(t))
      }
      pr(n, r, e.length === 1 ? e[0] : ul(e) ?? {
        allOf: e
      })
    }
    for (let t of e.required ?? []) r.add(t)
  }
  let i = {
    type: `object`,
    properties: n
  };
  if (
    r.size &&
    (i.required = [
      ...r
    ]),
    t.every(e => e.additionalProperties === !1)
  ) i.additionalProperties = !1;
   else {
    let e = [];
    for (let n of t) {
      let t = ll(n);
      t &&
      !e.some(e => JSON.stringify(e) === JSON.stringify(t)) &&
      e.push(t)
    }
    e.length === 1 ? i.additionalProperties = e[0] : e.length > 1 &&
    (i.additionalProperties = {
      allOf: e
    })
  }
  return i
}
function dl(e) {
  let t = e.allOf;
  if (!Array.isArray(t) || t.length < 2) return;
  for (let t of sl) if (t in e) return;
  let n = t.filter(e => cl.some(t => Array.isArray(e[t]))),
  r = null;
  if (!n.length) r = ul(t);
   else {
    let e = n[0],
    i = cl.find(t => Array.isArray(e[t]));
    if (Object.keys(e).length !== 1) return;
    let a = t.filter(t => t !== e),
    o = e[i].map(e => ul([...a,
    e]));
    if (o.some(e => !e)) return;
    r = {
      [
        i
      ]: o
    }
  }
  r &&
  (delete e.allOf, tl(e, r))
}
function fl(e, t) {
  let n = e.seen.get(t);
  if (!n) throw Error(`Unprocessed schema. This is a bug in Zod.`);
  let r = t => {
    let n = e.seen.get(t);
    if (n.ref === null) return;
    let i = n.def ?? n.schema,
    a = {
      ...i
    },
    o = n.ref;
    if (n.ref = null, o) {
      r(o);
      let n = e.seen.get(o),
      s = n.schema;
      if (
        s.$ref &&
        (
          e.target === `draft-07` ||
          e.target === `draft-04` ||
          e.target === `openapi-3.0`
        ) ? (i.allOf = i.allOf ?? [], i.allOf.push(s)) : tl(i, s),
        tl(i, a),
        t._zod.parent === o
      ) for (let e in i) e !== `$ref` &&
      e !== `allOf` &&
      (e in a || delete i[e]);
      if (s.$ref && n.def) for (let e in i) e !== `$ref` &&
      e !== `allOf` &&
      e in n.def &&
      JSON.stringify(i[e]) === JSON.stringify(n.def[e]) &&
      delete i[e]
    }
    let s = t._zod.parent;
    if (s && s !== o) {
      r(s);
      let t = e.seen.get(s);
      if (t?.schema.$ref && (i.$ref = t.schema.$ref, t.def)) for (let e in i) e !== `$ref` &&
      e !== `allOf` &&
      e in t.def &&
      JSON.stringify(i[e]) === JSON.stringify(t.def[e]) &&
      delete i[e]
    }
    e.override({
      zodSchema: t,
      jsonSchema: i,
      path: n.path ?? []
    })
  };
  if (!e.external || e.sharedEmitDoneFor !== e.external) {
    for (let t of [
      ...e.seen.entries()
    ].reverse()) r(t[0]);
    if (e.target !== `openapi-3.0`) for (let t of e.seen.entries()) ol(t[1].def ?? t[1].schema);
    for (let t of e.deferred) t();
    if (e.intersections.length) {
      let t = new Map;
      for (let n of e.seen.values()) for (let e of [
        n.schema,
        n.def
      ]) {
        let n = e?.allOf;
        if (!Array.isArray(n)) continue;
        let r = t.get(n);
        r ? r.push(e) : t.set(n, [
          e
        ])
      }
      for (let n of e.intersections) for (let e of t.get(n) ?? []) dl(e)
    }
  }
  let i = {};
  if (
    e.target === `draft-2020-12` ? i.$schema = `https://json-schema.org/draft/2020-12/schema` : e.target === `draft-07` ? i.$schema = `http://json-schema.org/draft-07/schema#` : e.target === `draft-04` ? i.$schema = `http://json-schema.org/draft-04/schema#` : e.target,
    e.external?.uri
  ) {
    let n = e.external.registry.get(t) ?.id;
    if (!n) throw Error('Schema is missing an `id` property');
    i.$id = e.external.uri(n)
  }
  tl(i, n.defId ? n.schema : n.def ?? n.schema);
  let a = e.metadataRegistry.get(t) ?.id;
  a !== void 0 &&
  i.id === a &&
  delete i.id;
  let o = e.external?.defs ?? {
  };
  if (!e.external || e.sharedEmitDoneFor !== e.external) for (let t of e.seen.entries()) {
    let e = t[1];
    e.def &&
    e.defId &&
    (e.def.id === e.defId && delete e.def.id, pr(o, e.defId, e.def))
  }
  e.external &&
  (e.sharedEmitDoneFor = e.external),
  e.external ||
  Object.keys(o).length > 0 &&
  (e.target === `draft-2020-12` ? i.$defs = o : i.definitions = o);
  try {
    let n = JSON.parse(JSON.stringify(i));
    return Object.defineProperty(
      n,
      '~standard',
      {
        value: {
          ...t[`~standard`],
          jsonSchema: {
            input: ml(t, `input`, e.processors),
            output: ml(t, `output`, e.processors)
          }
        },
        enumerable: !1,
        writable: !1
      }
    ),
    n
  } catch {
    throw Error(`Error converting schema to JSON.`)
  }
}
function L(e, t) {
  let n = t ?? {
    seen: new Set
  };
  if (n.seen.has(e)) return !1;
  n.seen.add(e);
  let r = e._zod.def;
  if (r.type === `transform`) return !0;
  if (r.type === `array`) return L(r.element, n);
  if (r.type === `set`) return L(r.valueType, n);
  if (r.type === `lazy`) return L(r.getter(), n);
  if (
    r.type === `promise` ||
    r.type === `optional` ||
    r.type === `nonoptional` ||
    r.type === `nullable` ||
    r.type === `readonly` ||
    r.type === 'default' ||
    r.type === `prefault` ||
    r.type === `catch`
  ) return L(r.innerType, n);
  if (r.type === `intersection`) return L(r.left, n) ||
  L(r.right, n);
  if (r.type === `record` || r.type === `map`) return L(r.keyType, n) ||
  L(r.valueType, n);
  if (r.type === `pipe`) return e._zod.traits.has(`$ZodCodec`) ? !0 : L(r.in, n) ||
  L(r.out, n);
  if (r.type === `object`) {
    for (let e in r.shape) if (L(r.shape[e], n)) return !0;
    return !1
  }
  if (r.type === `union`) {
    for (let e of r.options) if (L(e, n)) return !0;
    return !1
  }
  if (r.type === `tuple`) {
    for (let e of r.items) if (L(e, n)) return !0;
    return !!(r.rest && L(r.rest, n))
  }
  return !1
}
var pl = (e, t = {}) => n => {
  let r = nl({
    ...n,
    processors: t
  });
  return I(e, r),
  al(r, e),
  fl(r, e)
},
ml = (e, t, n = {}) => r => {
  let {
    libraryOptions: i,
    target: a
  }
  = r ?? {
  },
  o = nl({
    ...i ?? {
    },
    target: a,
    io: t,
    processors: n
  });
  return I(e, o),
  al(o, e),
  fl(o, e)
},
hl = (e, t, n) => {
  (e[t] === void 0 || n > e[t]) &&
  (e[t] = n)
},
gl = (e, t, n) => {
  (e[t] === void 0 || n < e[t]) &&
  (e[t] = n)
},
_l = (e, t) => {
  hl(e, `minimum`, t),
  gl(e, `maximum`, t)
},
vl = (e, t) => {
  e.multipleOf ??= [],
  e.multipleOf.includes(t) ||
  e.multipleOf.push(t)
},
yl = (e, t) => {
  e.patterns ??= new Set,
  e.patterns.add(t)
},
bl = (e, t) => {
  e.mime = e.mime ? e.mime.filter(e => t.includes(e)) : [
    ...t
  ]
},
xl = (e, t) => {
  e.format = t,
  t.includes(`int`) &&
  (e.isInt = !0)
},
Sl = (e, t) => hl(e, `minimum`, t.minimum),
Cl = (e, t) => gl(e, `maximum`, t.maximum),
wl = e => (t, n) => {
  xl(t, n.format);
  let[r,
  i] = e[n.format];
  hl(t, `minimum`, r),
  gl(t, `maximum`, i)
},
Tl = {
  greater_than: (e, t) => hl(e, t.inclusive ? `minimum` : `exclusiveMinimum`, t.value),
  less_than: (e, t) => gl(e, t.inclusive ? `maximum` : `exclusiveMaximum`, t.value),
  multiple_of: (e, t) => vl(e, t.value),
  number_format: wl(Mr),
  bigint_format: wl(Nr),
  min_length: Sl,
  max_length: Cl,
  length_equals: (e, t) => _l(e, t.length),
  min_size: Sl,
  max_size: Cl,
  size_equals: (e, t) => _l(e, t.size),
  string_format: (e, t) => {
    xl(e, t.format),
    t.pattern &&
    yl(e, t.pattern),
    (t.format === `base64` || t.format === `base64url`) &&
    (e.contentEncoding = t.format),
    (t.local || t.precision === - 1) &&
    (e.laxFormat = !0)
  },
  mime_type: (e, t) => bl(e, t.mime)
};
function R(e) {
  let t = {},
  n = e._zod.def,
  r = e._zod.traits.has(`$ZodCheck`) ? [
    e,
    ...n.checks ?? []
  ] : n.checks ?? [];
  for (let e of r) Tl[e._zod.def.check]?.(t, e._zod.def);
  let i = e._zod.bag;
  i.minimum !== void 0 &&
  hl(t, `minimum`, i.minimum),
  i.exclusiveMinimum !== void 0 &&
  hl(t, `exclusiveMinimum`, i.exclusiveMinimum),
  i.maximum !== void 0 &&
  gl(t, `maximum`, i.maximum),
  i.exclusiveMaximum !== void 0 &&
  gl(t, `exclusiveMaximum`, i.exclusiveMaximum),
  i.multipleOf !== void 0 &&
  vl(t, i.multipleOf),
  i.format !== void 0 &&
  (t.format ??= i.format, i.format.includes(`int`) && (t.isInt = !0)),
  i.mime &&
  bl(t, i.mime);
  for (let e of i.patterns ?? []) yl(t, e);
  return t
}
var El = {
  guid: `uuid`,
  url: `uri`,
  datetime: `date-time`,
  json_string: `json-string`,
  regex: ``
},
Dl = new Map([[Oo,
da],
[
  Ao,
  fa
]]),
Ol = e => Dl.get(e) ?? e,
kl = (e, t, n, r) => {
  let i = n;
  i.type = `string`;
  let {
    minimum: a,
    maximum: o,
    format: s,
    patterns: c,
    contentEncoding: l,
    laxFormat: u
  }
  = R(e);
  if (
    typeof a == `number` &&
    (i.minLength = a),
    typeof o == `number` &&
    (i.maxLength = o),
    s &&
    (
      i.format = El[s] ?? s,
      i.format === `` &&
      delete i.format,
      (s === `time` || u) &&
      delete i.format
    ),
    l &&
    (i.contentEncoding = l),
    c &&
    c.size > 0
  ) {
    let e = [
      ...c
    ].map(Ol);
    e.length === 1 ? i.pattern = e[0].source : e.length > 1 &&
    (
      i.allOf = [
        ...e.map(
          e => ({
            ...t.target === `draft-07` ||
            t.target === `draft-04` ||
            t.target === `openapi-3.0` ? {
              type: `string`
            }
             : {
            },
            pattern: e.source
          })
        )
      ]
    )
  }
},
Al = (e, t, n, r) => {
  let i = n,
  {
    minimum: a,
    maximum: o,
    multipleOf: s,
    exclusiveMaximum: c,
    exclusiveMinimum: l,
    isInt: u
  }
  = R(e);
  i.type = u ? `integer` : `number`;
  let d = typeof l == `number` &&
  l >= (a ?? - 1 / 0),
  f = typeof c == `number` &&
  c <= (o ?? 1 / 0),
  p = t.target === `draft-04` ||
  t.target === `openapi-3.0`;
  if (
    d ? p ? (i.minimum = l, i.exclusiveMinimum = !0) : i.exclusiveMinimum = l : typeof a == `number` &&
    (i.minimum = a),
    f ? p ? (i.maximum = c, i.exclusiveMaximum = !0) : i.exclusiveMaximum = c : typeof o == `number` &&
    (i.maximum = o),
    s
  ) {
    let n = new Set;
    for (let a of s) Number.isFinite(a) &&
    a !== 0 ? n.add(Math.abs(a)) : rl(
      e,
      t,
      i,
      r,
      `A multipleOf divisor of ${ a } cannot be represented in JSON Schema`
    );
    let[a,
    ...o] = n;
    a !== void 0 &&
    (i.multipleOf = a),
    o.length &&
    (i.allOf = [
      ...i.allOf ?? [],
      ...o.map(e => ({
        multipleOf: e
      }))
    ])
  }
},
jl = (e, t, n, r) => {
  n.type = `boolean`
},
Ml = (e, t, n, r) => {
  t.target === `openapi-3.0` ? (n.type = `string`, n.nullable = !0, n.enum = [
    null
  ]) : n.type = `null`
},
Nl = (e, t, n, r) => {
  n.not = {}
},
Pl = (e, t, n, r) => {
  let i = e._zod.def,
  a = ar(i.entries);
  a.length === 0 ? n.not = {}
   : (
    a.every(e => typeof e == `number`) &&
    (n.type = `number`),
    a.every(e => typeof e == `string`) &&
    (n.type = `string`),
    n.enum = a
  )
},
Fl = (e, t, n, r) => {
  let i = e._zod.def;
  if (i.values.length === 0) {
    n.not = {};
    return
  }
  let a = [];
  for (let o of i.values) if (o === void 0) {
    if (
      rl(
        e,
        t,
        n,
        r,
        'Literal `undefined` cannot be represented in JSON Schema'
      )
    ) return
  } else if (typeof o == `bigint`) {
    if (
      rl(
        e,
        t,
        n,
        r,
        `BigInt literals cannot be represented in JSON Schema`
      )
    ) return;
    a.push(Number(o))
  } else a.push(o);
  if (a.length !== 0) {
    if (a.length === 1) {
      let e = a[0];
      n.type = e === null ? `null` : typeof e,
      t.target === `draft-04` ||
      t.target === `openapi-3.0` ? n.enum = [
        e
      ] : n.const = e
    } else a.every(e => typeof e == `number`) &&
    (n.type = `number`),
    a.every(e => typeof e == `string`) &&
    (n.type = `string`),
    a.every(e => typeof e == `boolean`) &&
    (n.type = `boolean`),
    a.every(e => e === null) &&
    (n.type = `null`),
    n.enum = a
  }
},
Il = (e, t, n, r) => {
  rl(e, t, n, r, `Custom types cannot be represented in JSON Schema`)
},
Ll = (e, t, n, r) => {
  rl(e, t, n, r, `Transforms cannot be represented in JSON Schema`)
},
Rl = (e, t, n, r) => {
  let i = n,
  a = e._zod.def,
  {
    minimum: o,
    maximum: s
  }
  = R(e);
  typeof o == `number` &&
  (i.minItems = o),
  typeof s == `number` &&
  (i.maxItems = s),
  i.type = `array`,
  i.items = I(a.element, t, {
    ...r,
    path: [
      ...r.path,
      `items`
    ]
  })
};
function zl(e) {
  let t = e._zod.def;
  return t.type === `pipe` &&
  t.in._zod.traits.has(`$ZodTransform`) ? zl(t.out) : t.type === `catch` ? zl(t.innerType) : e._zod.optin
}
var Bl = (e, t, n, r) => {
  let i = n,
  a = e._zod.def,
  o = a.shape;
  if (
    Object.getOwnPropertySymbols(o).length &&
    rl(e, t, i, r, `Symbol keys cannot be represented in JSON Schema`)
  ) return;
  i.type = `object`,
  i.properties = {};
  for (let e in o) pr(
    i.properties,
    e,
    I(o[e], t, {
      ...r,
      path: [
        ...r.path,
        `properties`,
        e
      ]
    })
  );
  let s = [];
  for (let e of Object.keys(o)) {
    let n = a.shape[e];
    (t.io === `input` ? zl(n) === void 0 : n._zod.optout === void 0) &&
    s.push(e)
  }
  s.length > 0 &&
  (i.required = s),
  a.catchall?._zod.def.type === `never` ? i.additionalProperties = !1 : a.catchall ? a.catchall &&
  (
    i.additionalProperties = I(a.catchall, t, {
      ...r,
      path: [
        ...r.path,
        `additionalProperties`
      ]
    })
  ) : t.io === `output` &&
  (i.additionalProperties = !1)
},
Vl = (e, t, n, r) => {
  let i = e._zod.def,
  a = i.inclusive === !1,
  o = i.options.map((e, n) => I(e, t, {
    ...r,
    path: [
      ...r.path,
      a ? `oneOf` : `anyOf`,
      n
    ]
  }));
  a ? n.oneOf = o : n.anyOf = o
},
Hl = (e, t, n, r) => {
  let i = e._zod.def,
  a = I(i.left, t, {
    ...r,
    path: [
      ...r.path,
      `allOf`,
      0
    ]
  }),
  o = I(i.right, t, {
    ...r,
    path: [
      ...r.path,
      `allOf`,
      1
    ]
  }),
  s = e => `allOf` in e &&
  Object.keys(e).length === 1,
  c = [
    ...s(a) ? a.allOf : [
      a
    ],
    ...s(o) ? o.allOf : [
      o
    ]
  ];
  n.allOf = c,
  t.intersections.push(c)
};
function Ul(e, t, n) {
  if (t.$ref) {
    if (n.has(t)) return t;
    n.add(t);
    let r = e.get(t) ?.def;
    if (!r) return t;
    let i = Ul(e, r, n);
    return i === r ? t : i
  }
  for (let r of [
    `anyOf`,
    `oneOf`
  ]) {
    let i = t[r];
    if (!Array.isArray(i)) continue;
    let a = i.map(t => Ul(e, t, n));
    a.some((e, t) => e !== i[t]) &&
    (t = {
      ...t,
      [
        r
      ]: a
    })
  }
  let r = Array.isArray(t.type) ? t.type : [
    t.type
  ],
  i = !r.includes(`string`) &&
  r.some(e => e === `number` || e === `integer`),
  a = t.enum ?? (t.const === void 0 ? void 0 : [
    t.const
  ]);
  if (!i && !a?.some(e => typeof e == `number`)) return t;
  let {
    minimum: o,
    maximum: s,
    exclusiveMinimum: c,
    exclusiveMaximum: l,
    multipleOf: u,
    format: d,
    id: f,
    ...p
  }
  = t;
  return p.enum ? p.enum = p.enum.map(e => typeof e == `number` ? String(e) : e) : typeof p.const == `number` &&
  (p.const = String(p.const)),
  i &&
  (
    p.type = `string`,
    a ||
    (p.pattern = (r.includes(`number`) ? Ca : Sa).source)
  ),
  p
}
var Wl = new WeakMap;
function Gl(e) {
  let t = new Map;
  for (let n of e.seen.values()) n.def &&
  !t.has(n.schema) &&
  t.set(n.schema, n);
  let n = new Map;
  for (let r of Wl.get(e) ?? []) {
    let i = e.seen.get(r),
    a = (i?.def ?? i?.schema) ?.propertyNames;
    if (!a || a === !0 || n.has(a)) continue;
    let o = Ul(t, a, new Set);
    o !== a &&
    n.set(a, o)
  }
  if (n.size) for (let t of e.seen.values()) for (let e of [
    t.schema,
    t.def
  ]) {
    let t = e &&
    n.get(e.propertyNames);
    t &&
    (e.propertyNames = t)
  }
}
var Kl = (e, t, n, r) => {
  let i = n,
  a = e._zod.def;
  i.type = `object`;
  let o = a.keyType,
  s = R(o).patterns;
  if (a.mode === `loose` && s && s.size > 0) {
    let e = I(
      a.valueType,
      t,
      {
        ...r,
        path: [
          ...r.path,
          `patternProperties`,
          `*`
        ]
      }
    );
    i.patternProperties = {};
    for (let t of s) pr(i.patternProperties, Ol(t).source, e)
  } else {
    if (t.target === `draft-07` || t.target === `draft-2020-12`) {
      i.propertyNames = I(a.keyType, t, {
        ...r,
        path: [
          ...r.path,
          `propertyNames`
        ]
      });
      let n = Wl.get(t);
      n ||
      (n = [], Wl.set(t, n), t.deferred.push(() => Gl(t))),
      n.push(e)
    }
    i.additionalProperties = I(a.valueType, t, {
      ...r,
      path: [
        ...r.path,
        `additionalProperties`
      ]
    })
  }
  let c = o._zod.values,
  l = t.io === `input` &&
  zl(a.valueType) !== void 0;
  if (c && !a.partial && !l) {
    let e = [
      ...c
    ].filter(e => typeof e == `string` || typeof e == `number`);
    e.length > 0 &&
    (i.required = e.map(String))
  }
},
ql = (e, t, n, r) => {
  let i = e._zod.def,
  a = I(i.innerType, t, r),
  o = t.seen.get(e);
  t.target === `openapi-3.0` ? (o.ref = i.innerType, n.nullable = !0) : n.anyOf = [
    a,
    {
      type: `null`
    }
  ]
},
Jl = (e, t, n, r) => {
  let i = e._zod.def;
  I(i.innerType, t, r);
  let a = t.seen.get(e);
  a.ref = i.innerType
},
Yl = Symbol();
function Xl(e, t, n, r, i) {
  let a = !1,
  o = JSON.stringify(e, (e, t) => typeof t == `bigint` ? (a = !0, null) : t);
  return a ? (
    rl(
      t,
      n,
      r,
      i,
      `BigInt defaults cannot be represented in JSON Schema`
    ),
    Yl
  ) : JSON.parse(o)
}
var Zl = (e, t, n, r) => {
  let i = e._zod.def;
  I(i.innerType, t, r);
  let a = t.seen.get(e);
  a.ref = i.innerType;
  let o = Xl(i.defaultValue, e, t, n, r);
  o !== Yl &&
  (n.default = o)
},
Ql = (e, t, n, r) => {
  let i = e._zod.def;
  I(i.innerType, t, r);
  let a = t.seen.get(e);
  if (a.ref = i.innerType, t.io !== `input`) return;
  let o = Xl(i.defaultValue, e, t, n, r);
  o !== Yl &&
  (n._prefault = o)
},
$l = (e, t, n, r) => {
  let i = e._zod.def;
  I(i.innerType, t, r);
  let a = t.seen.get(e);
  a.ref = i.innerType;
  let o;
  try {
    o = i.catchValue(void 0)
  } catch {
    rl(
      e,
      t,
      n,
      r,
      `Dynamic catch values are not supported in JSON Schema`
    );
    return
  }
  n.default = o
},
eu = (e, t, n, r) => {
  let i = e._zod.def,
  a = i.in._zod.traits.has(`$ZodTransform`),
  o = t.io === `input` ? a ? i.out : i.in : i.out;
  I(o, t, r);
  let s = t.seen.get(e);
  s.ref = o
},
tu = (e, t, n, r) => {
  let i = e._zod.def;
  I(i.innerType, t, r);
  let a = t.seen.get(e);
  a.ref = i.innerType,
  n.readOnly = !0
},
nu = (e, t, n, r) => {
  let i = e._zod.def;
  I(i.innerType, t, r);
  let a = t.seen.get(e);
  a.ref = i.innerType
},
ru = new WeakSet([Object.prototype,
Error.prototype]);
function iu(e, t, n) {
  Object.defineProperty(
    e,
    t,
    {
      configurable: !0,
      enumerable: !1,
      get() {
        let e = n(this);
        return Object.defineProperty(this, t, {
          value: e,
          configurable: !0,
          writable: !0
        }),
        e
      },
      set(e) {
        Object.defineProperty(this, t, {
          value: e,
          configurable: !0,
          writable: !0
        })
      }
    }
  )
}
var z = j(
  `ZodError`,
  (e, t) => {
    Ti.init(e, t),
    e.name = `ZodError`;
    let n = Object.getPrototypeOf(e);
    ru.has(n) ||
    (
      ru.add(n),
      iu(n, `format`, e => t => Oi(e, t)),
      iu(n, `flatten`, e => t => Di(e, t)),
      iu(
        n,
        `addIssue`,
        e => t => {
          e.issues.push(t),
          e.message = JSON.stringify(e.issues, sr, 2)
        }
      ),
      iu(
        n,
        `addIssues`,
        e => t => {
          e.issues.push(...t),
          e.message = JSON.stringify(e.issues, sr, 2)
        }
      ),
      Object.defineProperty(
        n,
        'isEmpty',
        {
          configurable: !0,
          enumerable: !1,
          get() {
            return this.issues.length === 0
          }
        }
      )
    )
  },
  void 0,
  {
    Parent: Error
  }
),
au = Ai(z),
ou = ji(z),
su = Mi(z),
cu = Pi(z),
lu = Bi(z),
uu = Vi(z),
du = Hi(z),
fu = Ui(z),
pu = Wi(z),
mu = Gi(z),
hu = Ki(z),
gu = qi(z);
function _u() {
  M.localeError ||
  yi(Gs())
}
function vu() {
  M.memoizer ||
  yi({
    memoizer: Hs()
  })
}
var B = j(
  `ZodType`,
  (e, t) => (_u(), P.init(e, t), e.def = t, e.type = t.type, e),
  {
    check(...e) {
      let t = this.def;
      return this.clone(
        O(
          t,
          {
            checks: [
              ...t.checks ?? [],
              ...e.map(
                e => typeof e == `function` ? {
                  _zod: {
                    check: e,
                    def: {
                      check: `custom`
                    },
                    onattach: []
                  }
                }
                 : e
              )
            ]
          }
        ),
        {
          parent: !0
        }
      )
    },
    with (...e) {
      return this.check(...e)
    },
    clone(e, t) {
      return kr(this, e, t)
    },
    brand() {
      return this
    },
    register(e, t) {
      return e.add(this, t),
      this
    },
    refine(e, t) {
      return this.check(Ld(e, t))
    },
    superRefine(e, t) {
      return this.check(Rd(e, t))
    },
    overwrite(e) {
      return this.check(Gc(e))
    },
    optional() {
      return vd(this)
    },
    exactOptional() {
      return bd(this)
    },
    nullable() {
      return Sd(this)
    },
    nullish() {
      return vd(Sd(this))
    },
    nonoptional(e) {
      return Od(this, e)
    },
    array() {
      return K(this)
    },
    or(e) {
      return id([this,
      e])
    },
    and(e) {
      return cd(this, e)
    },
    transform(e) {
      return Md(this, gd(e))
    },
  default(e) {
      return wd(this, e)
    },
    prefault(e) {
      return Ed(this, e)
    },
    catch (e) {
      return Ad(this, e)
    },
    pipe(e) {
      return Md(this, e)
    },
    readonly() {
      return Fd(this)
    },
    describe(e) {
      let t = this.clone();
      return Ys.add(t, {
        description: e
      }),
      t
    },
    meta(...e) {
      if (e.length === 0) return Ys.get(this);
      let t = this.clone();
      return Ys.add(t, e[0]),
      t
    },
    isOptional() {
      return this.safeParse(void 0).success
    },
    isNullable() {
      return this.safeParse(null).success
    },
    apply(e, ...t) {
      return t.length === 0 ? e(this) : e(this, ...t)
    },
    get'~standard'() {
      return ri(
        this,
        `~standard`,
        {
          ...Ya(this),
          jsonSchema: {
            input: ml(this, `input`),
            output: ml(this, `output`)
          }
        }
      )
    },
    set'~standard'(e) {
      ni(this, `~standard`, e)
    },
    parse:
    function e(t, n) {
      return au(this, t, n, {
        callee: e
      })
    },
    parseAsync: async function e(t, n) {
      return await ou(this, t, n, {
        callee: e
      })
    },
    safeParse(e, t) {
      return su(this, e, t)
    },
    async safeParseAsync(e, t) {
      return cu(this, e, t)
    },
    get spa() {
      return this?.safeParseAsync
    },
    set spa(e) {
      ni(this, `spa`, e)
    },
    validate(e, t) {
      return Li(this, e, t)
    },
    validateAsync(e, t) {
      return zi(this, e, t)
    },
    encode: function e(t, n) {
      return lu(this, t, n, {
        callee: e
      })
    },
    decode: function e(t, n) {
      return uu(this, t, n, {
        callee: e
      })
    },
    encodeAsync: async function e(t, n) {
      return await du(this, t, n, {
        callee: e
      })
    },
    decodeAsync: async function e(t, n) {
      return await fu(this, t, n, {
        callee: e
      })
    },
    safeEncode(e, t) {
      return pu(this, e, t)
    },
    safeDecode(e, t) {
      return mu(this, e, t)
    },
    async safeEncodeAsync(e, t) {
      return hu(this, e, t)
    },
    async safeDecodeAsync(e, t) {
      return gu(this, e, t)
    },
    toJSONSchema(e) {
      return pl(this, {
      }) (e)
    },
    get description() {
      return Ys.get(this) ?.description
    },
    get _def() {
      return this._zod.def
    }
  }
),
yu = j(
  `_ZodString`,
  (e, t) => {
    Xa.init(e, t),
    B.init(e, t),
    e._zod.processJSONSchema = (t, n, r) => kl(e, t, n, r)
  },
  ii({
    format: e => R(e).format ?? null,
    minLength: e => R(e).minimum ?? null,
    maxLength: e => R(e).maximum ?? null
  }, {
    regex(...e) {
      return this.check(zc(...e))
    },
    includes(...e) {
      return this.check(Hc(...e))
    },
    startsWith(...e) {
      return this.check(Uc(...e))
    },
    endsWith(...e) {
      return this.check(Wc(...e))
    },
    min(...e) {
      return this.check(Lc(...e))
    },
    max(...e) {
      return this.check(Ic(...e))
    },
    length(...e) {
      return this.check(Rc(...e))
    },
    nonempty(...e) {
      return this.check(Lc(1, ...e))
    },
    lowercase(e) {
      return this.check(Bc(e))
    },
    uppercase(e) {
      return this.check(Vc(e))
    },
    trim() {
      return this.check(qc())
    },
    normalize(...e) {
      return this.check(Kc(...e))
    },
    toLowerCase() {
      return this.check(Jc())
    },
    toUpperCase() {
      return this.check(Yc())
    },
    slugify() {
      return this.check(Xc())
    }
  })
),
bu = j(
  `ZodString`,
  (e, t) => {
    Xa.init(e, t),
    yu.init(e, t)
  },
  {
    email(e) {
      return this.check(Qs(Tu, e))
    },
    url(e) {
      return this.check(ic(ku, e))
    },
    jwt(e) {
      return this.check(yc(Wu, e))
    },
    emoji(e) {
      return this.check(ac(Au, e))
    },
    guid(e) {
      return this.check($s(Du, e))
    },
    uuid(e) {
      return this.check(ec(Ou, e))
    },
    uuidv4(e) {
      return this.check(tc(Ou, e))
    },
    uuidv6(e) {
      return this.check(nc(Ou, e))
    },
    uuidv7(e) {
      return this.check(rc(Ou, e))
    },
    nanoid(e) {
      return this.check(oc(ju, e))
    },
    cuid(e) {
      return this.check(sc(Mu, e))
    },
    cuid2(e) {
      return this.check(cc(Nu, e))
    },
    ulid(e) {
      return this.check(lc(Pu, e))
    },
    base64(e) {
      return this.check(gc(Vu, e))
    },
    base64url(e) {
      return this.check(_c(Hu, e))
    },
    xid(e) {
      return this.check(uc(Fu, e))
    },
    ksuid(e) {
      return this.check(dc(Iu, e))
    },
    ipv4(e) {
      return this.check(fc(Lu, e))
    },
    ipv6(e) {
      return this.check(pc(Ru, e))
    },
    cidrv4(e) {
      return this.check(mc(zu, e))
    },
    cidrv6(e) {
      return this.check(hc(Bu, e))
    },
    e164(e) {
      return this.check(vc(Uu, e))
    },
    datetime(e) {
      return this.check(bc(xu, e))
    },
    date(e) {
      return this.check(xc(Su, e))
    },
    time(e) {
      return this.check(Sc(Cu, e))
    },
    duration(e) {
      return this.check(Cc(wu, e))
    }
  }
);
function V(e) {
  return Zs(bu, e)
}
var H = j(`ZodStringFormat`, (e, t) => {
  F.init(e, t),
  yu.init(e, t)
}),
xu = j(`ZodISODateTime`, (e, t) => {
  go.init(e, t),
  H.init(e, t)
}),
Su = j(`ZodISODate`, (e, t) => {
  _o.init(e, t),
  H.init(e, t)
}),
Cu = j(`ZodISOTime`, (e, t) => {
  vo.init(e, t),
  H.init(e, t)
}),
wu = j(`ZodISODuration`, (e, t) => {
  yo.init(e, t),
  H.init(e, t)
}),
Tu = j(`ZodEmail`, (e, t) => {
  $a.init(e, t),
  H.init(e, t)
});
function Eu(e) {
  return Qs(Tu, e)
}
var Du = j(`ZodGUID`, (e, t) => {
  Za.init(e, t),
  H.init(e, t)
}),
Ou = j(`ZodUUID`, (e, t) => {
  Qa.init(e, t),
  H.init(e, t)
});
function U(e) {
  return ec(Ou, e)
}
var ku = j(`ZodURL`, (e, t) => {
  so.init(e, t),
  H.init(e, t)
}),
Au = j(`ZodEmoji`, (e, t) => {
  co.init(e, t),
  H.init(e, t)
}),
ju = j(`ZodNanoID`, (e, t) => {
  lo.init(e, t),
  H.init(e, t)
}),
Mu = j(`ZodCUID`, (e, t) => {
  uo.init(e, t),
  H.init(e, t)
}),
Nu = j(`ZodCUID2`, (e, t) => {
  fo.init(e, t),
  H.init(e, t)
}),
Pu = j(`ZodULID`, (e, t) => {
  po.init(e, t),
  H.init(e, t)
}),
Fu = j(`ZodXID`, (e, t) => {
  mo.init(e, t),
  H.init(e, t)
}),
Iu = j(`ZodKSUID`, (e, t) => {
  ho.init(e, t),
  H.init(e, t)
}),
Lu = j(`ZodIPv4`, (e, t) => {
  bo.init(e, t),
  H.init(e, t)
}),
Ru = j(`ZodIPv6`, (e, t) => {
  Co.init(e, t),
  H.init(e, t)
}),
zu = j(`ZodCIDRv4`, (e, t) => {
  wo.init(e, t),
  H.init(e, t)
}),
Bu = j(`ZodCIDRv6`, (e, t) => {
  Eo.init(e, t),
  H.init(e, t)
}),
Vu = j(`ZodBase64`, (e, t) => {
  ko.init(e, t),
  H.init(e, t)
}),
Hu = j(`ZodBase64URL`, (e, t) => {
  Mo.init(e, t),
  H.init(e, t)
}),
Uu = j(`ZodE164`, (e, t) => {
  No.init(e, t),
  H.init(e, t)
}),
Wu = j(`ZodJWT`, (e, t) => {
  Fo.init(e, t),
  H.init(e, t)
}),
Gu = j(
  `ZodNumber`,
  (e, t) => {
    Io.init(e, t),
    B.init(e, t),
    e._zod.processJSONSchema = (t, n, r) => Al(e, t, n, r),
    e.isFinite = !0
  },
  ii({
    minValue: e => {
      let {
        minimum: t,
        exclusiveMinimum: n
      }
      = R(e);
      return Math.max(t ?? - 1 / 0, n ?? - 1 / 0)
    },
    maxValue: e => {
      let {
        maximum: t,
        exclusiveMaximum: n
      }
      = R(e);
      return Math.min(t ?? 1 / 0, n ?? 1 / 0)
    },
    isInt: e => {
      let {
        isInt: t,
        multipleOf: n
      }
      = R(e);
      return !!t ||
      !!n?.some(Number.isSafeInteger)
    },
    format: e => R(e).format ?? null
  }, {
    gt(e, t) {
      return this.check(Nc(e, t))
    },
    gte(e, t) {
      return this.check(Pc(e, t))
    },
    min(e, t) {
      return this.check(Pc(e, t))
    },
    lt(e, t) {
      return this.check(jc(e, t))
    },
    lte(e, t) {
      return this.check(Mc(e, t))
    },
    max(e, t) {
      return this.check(Mc(e, t))
    },
    int(e) {
      return this.check(W(e))
    },
    safe(e) {
      return this.check(W(e))
    },
    positive(e) {
      return this.check(Nc(0, e))
    },
    nonnegative(e) {
      return this.check(Pc(0, e))
    },
    negative(e) {
      return this.check(jc(0, e))
    },
    nonpositive(e) {
      return this.check(Mc(0, e))
    },
    multipleOf(e, t) {
      return this.check(Fc(e, t))
    },
    step(e, t) {
      return this.check(Fc(e, t))
    },
    finite() {
      return this
    }
  })
);
function Ku(e) {
  return wc(Gu, e)
}
var qu = j(`ZodNumberFormat`, (e, t) => {
  Lo.init(e, t),
  Gu.init(e, t)
});
function W(e) {
  return Ec(qu, e)
}
var Ju = j(
  `ZodBoolean`,
  (e, t) => {
    Ro.init(e, t),
    B.init(e, t),
    e._zod.processJSONSchema = (t, n, r) => jl(e, t, n, r)
  }
);
function G(e) {
  return Dc(Ju, e)
}
var Yu = j(
  `ZodNull`,
  (e, t) => {
    zo.init(e, t),
    B.init(e, t),
    e._zod.processJSONSchema = (t, n, r) => Ml(e, t, n, r)
  }
);
function Xu(e) {
  return Oc(Yu, e)
}
var Zu = j(
  `ZodUnknown`,
  (e, t) => {
    Bo.init(e, t),
    B.init(e, t),
    e._zod.processJSONSchema = (e, t, n) => void 0
  }
);
function Qu() {
  return kc(Zu)
}
var $u = j(
  `ZodNever`,
  (e, t) => {
    Vo.init(e, t),
    B.init(e, t),
    e._zod.processJSONSchema = (t, n, r) => Nl(e, t, n, r)
  }
);
function ed(e) {
  return Ac($u, e)
}
var td = j(
  `ZodArray`,
  (e, t) => {
    vu(),
    Go.init(e, t),
    B.init(e, t),
    e._zod.processJSONSchema = (t, n, r) => Rl(e, t, n, r),
    e.element = t.element
  },
  {
    min(e, t) {
      return this.check(Lc(e, t))
    },
    nonempty(e) {
      return this.check(Lc(1, e))
    },
    max(e, t) {
      return this.check(Ic(e, t))
    },
    length(e, t) {
      return this.check(Rc(e, t))
    },
    unwrap() {
      return this.element
    }
  }
);
function K(e, t) {
  return Zc(td, e, t)
}
var nd = j(
  `ZodObject`,
  (e, t) => {
    vu(),
    Zo.init(e, t),
    B.init(e, t),
    e._zod.processJSONSchema = (t, n, r) => Bl(e, t, n, r),
    ui(e, `shape`, e => e._zod.def.shape, !1)
  },
  {
    keyof() {
      return J(Object.keys(this._zod.def.shape))
    },
    catchall(e) {
      return this.clone(O(this._zod.def, {
        catchall: e
      }))
    },
    passthrough() {
      return this.clone(O(this._zod.def, {
        catchall: Qu()
      }))
    },
    loose() {
      return this.clone(O(this._zod.def, {
        catchall: Qu()
      }))
    },
    strict() {
      return this.clone(O(this._zod.def, {
        catchall: ed()
      }))
    },
    strip() {
      return this.clone(O(this._zod.def, {
        catchall: void 0
      }))
    },
    extend(e) {
      return Lr(this, e)
    },
    safeExtend(e) {
      return zr(this, e)
    },
    merge(e) {
      return Br(this, e)
    },
    pick(e) {
      return Pr(this, e)
    },
    omit(e) {
      return Ir(this, e)
    },
    partial(...e) {
      return Vr(_d, this, e[0])
    },
    exactPartial(...e) {
      return Vr(yd, this, e[0], `exactPartial`)
    },
    required(...e) {
      return Hr(Dd, this, e[0])
    }
  }
);
function q(e, t) {
  return new nd({
    type: `object`,
    shape: e ?? {
    },
    ...k(t)
  })
}
var rd = j(
  `ZodUnion`,
  (e, t) => {
    $o.init(e, t),
    B.init(e, t),
    e._zod.processJSONSchema = (t, n, r) => Vl(e, t, n, r),
    e.options = t.options
  }
);
function id(e, t) {
  return new rd({
    type: `union`,
    options: e,
    ...k(t)
  })
}
var ad = j(`ZodDiscriminatedUnion`, (e, t) => {
  rd.init(e, t),
  ts.init(e, t)
});
function od(e, t, n) {
  return new ad({
    type: `union`,
    options: t,
    discriminator: e,
    ...k(n)
  })
}
var sd = j(
  `ZodIntersection`,
  (e, t) => {
    ns.init(e, t),
    B.init(e, t),
    e._zod.processJSONSchema = (t, n, r) => Hl(e, t, n, r)
  }
);
function cd(e, t) {
  return new sd({
    type: `intersection`,
    left: e,
    right: t
  })
}
var ld = j(
  `ZodRecord`,
  (e, t) => {
    vu(),
    as.init(e, t),
    B.init(e, t),
    e._zod.processJSONSchema = (t, n, r) => Kl(e, t, n, r),
    e.keyType = t.keyType,
    e.valueType = t.valueType
  }
);
function ud(e, t, n) {
  return !t ||
  !t._zod ? new ld({
    type: `record`,
    keyType: V(),
    valueType: e,
    ...k(t)
  }) : new ld({
    type: `record`,
    keyType: e,
    valueType: t,
    ...k(n)
  })
}
function dd(e, t, n) {
  return new ld({
    type: `record`,
    keyType: e,
    valueType: t,
    ...k(n),
    partial: !0
  })
}
var fd = j(
  `ZodEnum`,
  (e, t) => {
    os.init(e, t),
    B.init(e, t),
    e._zod.processJSONSchema = (t, n, r) => Pl(e, t, n, r),
    e.enum = t.entries,
    e.options = [
      ...e._zod.values
    ];
    let n = new Set(Object.keys(t.entries));
    e.extract = (e, r) => {
      let i = {};
      for (let r of e) if (n.has(r)) i[r] = t.entries[r];
       else throw Error(`Key ${ r } not found in enum`);
      return new fd({
        ...t,
        checks: [],
        ...k(r),
        entries: i
      })
    },
    e.exclude = (e, r) => {
      let i = {
        ...t.entries
      };
      for (let t of e) if (n.has(t)) delete i[t];
       else throw Error(`Key ${ t } not found in enum`);
      return new fd({
        ...t,
        checks: [],
        ...k(r),
        entries: i
      })
    }
  }
);
function J(e, t) {
  return new fd({
    type: `enum`,
    entries: Array.isArray(e) ? Object.fromEntries(e.map(e => [e,
    e])) : e,
    ...k(t)
  })
}
var pd = j(
  `ZodLiteral`,
  (e, t) => {
    ss.init(e, t),
    B.init(e, t),
    e._zod.processJSONSchema = (t, n, r) => Fl(e, t, n, r),
    e.values = new Set(t.values),
    Object.defineProperty(
      e,
      'value',
      {
        get() {
          if (t.values.length > 1) throw Error(
            'This schema contains multiple valid literal values. Use `.values` instead.'
          );
          return t.values[0]
        }
      }
    )
  }
);
function md(e, t) {
  return new pd({
    type: `literal`,
    values: Array.isArray(e) ? e : [
      e
    ],
    ...k(t)
  })
}
var hd = j(
  `ZodTransform`,
  (e, t) => {
    vu(),
    cs.init(e, t),
    B.init(e, t),
    e._zod.processJSONSchema = (t, n, r) => Ll(e, t, n, r),
    e._zod.parse = (n, r) => {
      if (r.direction === `backward`) throw new vi(e.constructor.name);
      n.addIssue = r => {
        if (typeof r == `string`) n.issues.push(ei(r, n.value, t));
         else {
          let t = r;
          t.fatal &&
          (t.continue = !1),
          t.code ??= `custom`,
          `input` in t ||
          (t.input = n.value),
          t.inst ??= e,
          n.issues.push(ei(t))
        }
      };
      let i = t.transform(n.value, n);
      return i instanceof Promise ? i.then(e => (n.value = e, n)) : (n.value = i, n)
    }
  }
);
function gd(e) {
  return new hd({
    type: `transform`,
    transform: e
  })
}
var _d = j(
  `ZodOptional`,
  (e, t) => {
    us.init(e, t),
    B.init(e, t),
    e._zod.processJSONSchema = (t, n, r) => nu(e, t, n, r),
    e.unwrap = () => e._zod.def.innerType
  }
);
function vd(e) {
  return new _d({
    type: `optional`,
    innerType: e
  })
}
var yd = j(
  `ZodExactOptional`,
  (e, t) => {
    ds.init(e, t),
    B.init(e, t),
    e._zod.processJSONSchema = (t, n, r) => nu(e, t, n, r),
    e.unwrap = () => e._zod.def.innerType
  }
);
function bd(e) {
  return new yd({
    type: `optional`,
    innerType: e
  })
}
var xd = j(
  `ZodNullable`,
  (e, t) => {
    fs.init(e, t),
    B.init(e, t),
    e._zod.processJSONSchema = (t, n, r) => ql(e, t, n, r),
    e.unwrap = () => e._zod.def.innerType
  }
);
function Sd(e) {
  return new xd({
    type: `nullable`,
    innerType: e
  })
}
var Cd = j(
  `ZodDefault`,
  (e, t) => {
    ps.init(e, t),
    B.init(e, t),
    e._zod.processJSONSchema = (t, n, r) => Zl(e, t, n, r),
    e.unwrap = () => e._zod.def.innerType,
    e.removeDefault = e.unwrap
  }
);
function wd(e, t) {
  return new Cd({
    type: `default`,
    innerType: e,
    get defaultValue() {
      return typeof t == `function` ? t() : Er(t)
    }
  })
}
var Td = j(
  `ZodPrefault`,
  (e, t) => {
    hs.init(e, t),
    B.init(e, t),
    e._zod.processJSONSchema = (t, n, r) => Ql(e, t, n, r),
    e.unwrap = () => e._zod.def.innerType
  }
);
function Ed(e, t) {
  return new Td({
    type: `prefault`,
    innerType: e,
    get defaultValue() {
      return typeof t == `function` ? t() : Er(t)
    }
  })
}
var Dd = j(
  `ZodNonOptional`,
  (e, t) => {
    gs.init(e, t),
    B.init(e, t),
    e._zod.processJSONSchema = (t, n, r) => Jl(e, t, n, r),
    e.unwrap = () => e._zod.def.innerType
  }
);
function Od(e, t) {
  return new Dd({
    type: `nonoptional`,
    innerType: e,
    ...k(t)
  })
}
var kd = j(
  `ZodCatch`,
  (e, t) => {
    ys.init(e, t),
    B.init(e, t),
    e._zod.processJSONSchema = (t, n, r) => $l(e, t, n, r),
    e.unwrap = () => e._zod.def.innerType,
    e.removeCatch = e.unwrap
  }
);
function Ad(e, t) {
  return new kd({
    type: `catch`,
    innerType: e,
    catchValue: typeof t == `function` ? t : fi(t)
  })
}
var jd = j(
  `ZodPipe`,
  (e, t) => {
    bs.init(e, t),
    B.init(e, t),
    e._zod.processJSONSchema = (t, n, r) => eu(e, t, n, r),
    e.in = t.in,
    e.out = t.out
  }
);
function Md(e, t) {
  return new jd({
    type: `pipe`,
    in : e,
    out: t
  })
}
var Nd = j(`ZodPreprocess`, (e, t) => {
  jd.init(e, t),
  Ss.init(e, t)
}),
Pd = j(
  `ZodReadonly`,
  (e, t) => {
    Cs.init(e, t),
    B.init(e, t),
    e._zod.processJSONSchema = (t, n, r) => tu(e, t, n, r),
    e.unwrap = () => e._zod.def.innerType
  }
);
function Fd(e) {
  return new Pd({
    type: `readonly`,
    innerType: e
  })
}
var Id = j(
  `ZodCustom`,
  (e, t) => {
    Ts.init(e, t),
    B.init(e, t),
    e._zod.processJSONSchema = (t, n, r) => Il(e, t, n, r)
  }
);
function Ld(e, t = {}) {
  return Qc(Id, e, t)
}
function Rd(e, t) {
  return $c(e, t)
}
function zd(e, t) {
  return new Nd({
    type: `pipe`,
    in : gd(e),
    out: t
  })
}
function Bd(e) {
  return bc(xu, e)
}
function Y(e) {
  return Tc(Gu, e)
}
var Vd = J(Yn),
Hd = id([Vd,
md(`signature`)]),
Ud = V().trim().min(2).max(32).regex(
  /^[A-Za-z0-9_\-[\] ]+$/,
  `Only letters, numbers, spaces and _-[] are allowed`
),
Wd = V().min(8).max(200);
q({
  text: V().max(20000)
}),
q({
  username: Ud
}),
q({
  from: Bd({
    offset: !0
  }),
  to: Bd({
    offset: !0
  }),
  dryRun: G().default(!1),
  confirm: V().max(64).optional()
}).refine(
  e => Date.parse(e.from) < Date.parse(e.to),
  {
    message: `The start must be before the end`,
    path: [
      `to`
    ]
  }
),
q({
  cosmeticId: V().min(1).max(64)
}),
q({
  email: Eu().max(254),
  username: Ud,
  password: Wd
}),
q({
  login: V().trim().min(1).max(254).optional(),
  email: V().trim().min(1).max(254).optional(),
  password: V().min(1).max(200)
}).refine(
  e => e.login ||
  e.email,
  {
    message: `Enter your email or username`,
    path: [
      `login`
    ]
  }
).transform(e => ({
  login: e.login ?? e.email,
  password: e.password
})),
q({
  token: V().min(10).max(200)
}),
q({
  email: Eu()
}),
q({
  token: V().min(10).max(200),
  password: Wd
});
var Gd = {
  limit: Y().int().min(1).max(100).default(30),
  offset: Y().int().min(0).default(0)
},
Kd = J([`tank`,
`dps`,
`support`,
`cc`]),
qd = J(
  [`ez`,
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
  `rx`]
),
Jd = J(
  [`hp`,
  `atk`,
  `def`,
  `hpPct`,
  `atkPct`,
  `defPct`,
  `spd`,
  `critRate`,
  `critDmg`,
  `guardDmg`,
  `outHeal`]
),
Yd = V().regex(/^[a-z0-9_]{2,40}$/),
Xd = V().trim().regex(/^[A-Za-z]{2}$/).transform(e => e.toUpperCase());
q({
  rarity: Hd.optional(),
  q: V().trim().max(64).optional(),
  sort: J([`newest`,
  `rarity`,
  `popularity`,
  `cp`,
  `level`,
  `serial`]).default(`newest`),
  country: Xd.optional(),
  cls: Kd.optional(),
  skill: V().regex(/^[a-z-]{2,32}$/).optional(),
  passive: V().regex(/^[a-z-]{2,32}$/).optional(),
  playerId: Y().int().positive().optional(),
  dupes: zd(e => e === !0 || e === `true` || e === `1`, G()).optional(),
  state: J([`locked`,
  `unlocked`,
  `listed`,
  `unlisted`]).optional(),
  ids: zd(
    e => typeof e == `string` ? e.split(`,`).filter(Boolean) : e,
    K(U()).max(100).optional()
  ),
  ...Gd
});
var Zd = zd(e => e === !0 || e === `true` || e === `1`, G());
q({
  maxRarity: Vd.default(`rare`),
  includeBuilt: Zd.default(!1),
  includeGodRolls: Zd.default(!1)
}),
q({
  qty: W().positive().max(100000).optional()
}),
od(
  `kind`,
  [
    q({
      kind: md(`card`),
      cardId: U(),
      price: W().positive()
    }),
    q({
      kind: md(`mod`),
      modId: U(),
      price: W().positive()
    }),
    q({
      kind: md(`item`),
      itemId: Yd,
      qty: W().min(1).max(100000),
      price: W().positive()
    })
  ]
),
q({
  kind: J([`card`,
  `mod`,
  `item`]).optional(),
  rarity: Hd.optional(),
  modType: qd.optional(),
  itemId: Yd.optional(),
  q: V().trim().max(64).optional(),
  cls: Kd.optional(),
  skill: V().regex(/^[a-z-]{2,32}$/).optional(),
  passive: V().regex(/^[a-z-]{2,32}$/).optional(),
  modRarity: Y().int().min(1).max(5).optional(),
  main: Jd.optional(),
  sub: Jd.optional(),
  sellerId: U().optional(),
  owned: zd(e => e === !0 || e === `true` || e === `1`, G()).optional(),
  missing: zd(e => e === !0 || e === `true` || e === `1`, G()).optional(),
  sort: J([`newest`,
  `price_asc`,
  `price_desc`,
  `serial`]).default(`newest`),
  ...Gd
});
var Qd = {
  cardIds: K(U()).max(20).default([]),
  modIds: K(U()).max(20).default([]),
  items: K(q({
    id: Yd,
    qty: W().min(1).max(100000)
  })).max(20).default([]),
  stars: W().min(0).default(0)
};
q({
  recipient: Ud,
  offer: q(Qd).default({
    cardIds: [],
    modIds: [],
    items: [],
    stars: 0
  }),
  request: q(Qd).default({
    cardIds: [],
    modIds: [],
    items: [],
    stars: 0
  }),
  message: V().trim().max(280).optional()
}).omit({
  recipient: !0
}),
q({
  items: ud(Yd, W().min(0).max(10000)).default({
  }),
  fodderCardIds: K(U()).max(100).default([])
}),
q({
  cardIds: K(U()).min(1).max(6)
}),
q({
  part: J([`skill`,
  `passive`])
}),
q({
  modIds: K(U().nullable()).max(3)
}),
q({
  type: qd.optional(),
  rarity: Y().int().min(1).max(5).optional(),
  main: Jd.optional(),
  sub: Jd.optional(),
  q: V().trim().max(40).optional(),
  equipped: J([`yes`,
  `no`]).optional(),
  locked: J([`yes`,
  `no`]).optional(),
  sort: J([`newest`,
  `rarity`,
  `level`]).default(`rarity`),
  limit: Y().int().min(1).max(200).default(60),
  offset: Y().int().min(0).default(0)
}),
q({
  fragments: W().min(0).max(1000000).default(0),
  fodderModIds: K(U()).max(50).default([])
}),
q({
  ids: K(U()).min(1).max(200)
}),
q({
  maxRarity: Y().int().min(1).max(4).default(3),
  maxLevel: Y().int().min(0).max(15).default(0)
}),
q({
  ids: K(U()).min(1).max(200),
  locked: G()
}),
q({
  stageId: V().min(1).max(40),
  tier: W().min(1).max(6),
  overtime: G().optional()
}),
q({
  count: W().min(1).max(50)
}),
q({
  via: J([`mouse`,
  `pen`,
  `touch`,
  `key`,
  `none`]),
  x: W().min( - 100000).max(100000).optional(),
  y: W().min( - 100000).max(100000).optional(),
  moves: W().min(0).max(1000000000).optional(),
  trusted: G(),
  hidden: G(),
  decoy: G().optional()
}),
q({
  count: W().min(1).max(100)
}),
q({
  count: id([md(1),
  md(10)])
}),
q({
  count: W().min(1).max(40)
}),
q({
  from: V().min(1).max(40),
  count: W().min(1).max(1000)
}),
q({
  target: V().min(1).max(40),
  need: W().min(1).max(1000)
}),
q({
  query: V().trim().min(1).max(32)
}),
q({
  q: V().trim().max(32).optional(),
  rarity: Vd.optional(),
  country: Xd.optional(),
  sort: J([`popular`,
  `country`]).default(`popular`),
  ...Gd
});
var $d = Ku().min(0).max(100).optional();
q({
  shares: q({
    mythic: $d,
    legendary: $d,
    epic: $d,
    rare: $d,
    uncommon: $d
  }),
  note: V().max(200).optional(),
  activate: G().default(!0)
}),
q({
  basis: J([`mint`,
  `current`])
}),
q({
  username: Ud,
  amount: W().refine(e => e !== 0, `Amount must not be zero`)
}),
q({
  name: V().trim().min(2).max(40),
  description: V().trim().max(300),
  cardCount: W().min(1).max(15),
  weights: dd(Vd, Ku().min(0)),
  guaranteedMinRarity: Vd.nullable(),
  slotWeight: W().positive().nullable(),
  upgradeToSlug: V().min(1).max(64).nullable(),
  upgradeChance: Ku().min(0).lt(1),
  active: G()
}).partial(),
q({
  slug: V().min(1).max(64),
  count: W().min(1).max(50).default(1)
});
var ef = q({
  playerId: W().positive(),
  level: W().min(1).max(80).optional(),
  ascension: W().min(0).max(6).optional(),
  eidolon: W().min(0).max(6).optional()
});
q({
  username: Ud
}),
ef.extend({
  rarity: Vd.optional(),
  skill: V().max(40).optional(),
  passive: V().max(40).optional(),
  count: W().min(1).max(20).default(1)
}),
q({
  itemId: Yd,
  qty: W().min( - 1000000).max(1000000).refine(e => e !== 0, `Quantity must not be zero`)
}),
q({
  type: qd,
  rarity: W().min(1).max(5),
  level: W().min(0).max(15).default(0),
  count: W().min(1).max(20).default(1)
});
var tf = 4000,
nf = id([V().max(200),
Ku(),
Xu()]);
q({
  iteration: W().min(0).max(1000000),
  phase: V().trim().min(1).max(80),
  summary: V().trim().min(1).max(8000),
  table: q({
    columns: K(V().max(80)).min(1).max(30),
    rows: K(K(nf).max(30)).max(200)
  }).optional(),
  changes: V().trim().max(8000).optional(),
  next: V().trim().max(4000).optional(),
  answers: K(W().positive()).max(50).optional()
}),
q({
  text: V().trim().min(1).max(tf)
}),
q({
  skill: V().max(40).nullable().optional(),
  passive: V().max(40).nullable().optional()
}),
q({
  itemId: Yd,
  qty: W().refine(e => e !== 0, `Quantity must not be zero`)
}),
q({
  type: qd,
  rarity: W().min(1).max(5),
  level: W().min(0).max(15).default(0)
}),
q({
  status: J([`open`,
  `dismissed`,
  `actioned`]),
  note: V().trim().max(500).optional()
}),
q({
  frozen: G(),
  reason: V().trim().max(300).optional()
}),
q({
  reason: V().trim().max(300).optional(),
  ips: G().default(!0)
}),
q({
  role: J([`user`,
  `helper`,
  `mod`,
  `admin`])
}),
q({
  q: V().trim().max(64).optional(),
  limit: Y().int().min(1).max(100).default(50)
}),
q({
  kind: J([`bug`,
  `idea`,
  `support`,
  `other`]),
  message: V().trim().min(5, `Tell us a bit more (at least 5 characters)`).max(2000),
  contact: V().trim().max(200).optional(),
  page: V().max(300).optional()
}),
q({
  cardIds: K(U()).max(4).refine(
    e => new Set(e).size === e.length,
    `A card can only be in the team once`
  )
}),
q({
  name: V().trim().min(1).max(24),
  cardIds: K(U()).min(1).max(4).refine(
    e => new Set(e).size === e.length,
    `A card can only be in the team once`
  )
}),
q({
  floor: W().min(1).max(1000)
}),
q({
  round: W().min(1).max(12)
});
var rf = q({
  side: J([`ally`,
  `enemy`]),
  index: W().min(0).max(3)
});
q({
  inputs: K(
    q({
      at: W().min(0).max(1000),
      side: md(`ally`),
      unit: W().min(0).max(3),
      kind: J([`basic`,
      `skill`]),
      target: rf.nullable().optional()
    })
  ).max(1000)
});
var af = W().min(1).max(100000);
q({
  amount: af,
  target: Ku().min(2).max(98),
  direction: J([`under`,
  `over`])
}),
q({
  bets: K(
    q({
      type: J(
        [`straight`,
        `red`,
        `black`,
        `odd`,
        `even`,
        `low`,
        `high`,
        `dozen`,
        `column`]
      ),
      value: W().min(0).max(37).optional(),
      amount: af
    })
  ).min(1).max(50)
}),
q({
  bets: q({
    player: W().min(0).max(100000).optional(),
    banker: W().min(0).max(100000).optional(),
    tie: W().min(0).max(100000).optional()
  })
}),
q({
  amount: af,
  perfectPairs: W().min(0).max(100000).optional(),
  twentyOnePlusThree: W().min(0).max(100000).optional()
}),
q({
  action: J([`hit`,
  `stand`,
  `double`,
  `split`,
  `insure`,
  `no_insurance`])
}),
q({
  amount: af,
  mines: W().min(1).max(24)
}),
q({
  tile: W().min(0).max(24)
}),
q({
  amount: af,
  rows: id([md(8),
  md(12),
  md(16)]),
  risk: J([`low`,
  `medium`,
  `high`])
}),
q({
  amount: af,
  picks: K(W().min(1).max(40)).min(1).max(10)
}),
q({
  amount: af,
  target: Ku().min(1.01).max(1000)
});
var of = J([`heads`,
`tails`]);
q({
  amount: af,
  side: of ,
  coins: W().min(1).max(20).default(1),
  min: W().min(1).max(20).default(1)
}),
q({
  amount: af,
  side: of
}),
q({
  side: of
}),
q({
  kind: J([`rakeback`,
  `weekly`,
  `monthly`,
  `rank`])
}),
q({
  kind: J([`latest`,
  `mine`,
  `high`,
  `wins`]).default(`latest`),
  limit: Y().int().refine(e => [10,
  20,
  50].includes(e), `Use 10, 20 or 50`).default(10)
}),
q({
  seq: W().min(0).max(1000),
  kind: J([`basic`,
  `skill`]),
  unit: W().min(0).max(3),
  target: rf.nullable().optional()
}),
q({
  username: V().trim().min(1).max(32)
}),
q({
  token: V().max(4096).optional(),
  choice: J([`circle`,
  `triangle`,
  `square`,
  `star`]).optional()
}),
q({
  body: V().trim().min(1).max(300),
  mentions: K(V().min(1).max(32)).max(5).default([]),
  channel: J(er.filter(e => e.postable).map(e => e.id)).default(`osu`)
});
var sf = J(
  [`owner`,
  `chief`,
  `strategist`,
  `captain`,
  `recruiter`,
  `recruit`]
),
cf = q({
  shape: J([`banner`,
  `shield`,
  `round`,
  `hex`]),
  base: W().min(0).max(15),
  accent: W().min(0).max(15),
  pattern: J(
    [`plain`,
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
    `triangles`]
  ),
  symbol: J(
    [`none`,
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
    `moon`]
  ),
  symbolColor: W().min(0).max(15)
}),
lf = V().trim().regex(/^[A-Za-z]{3,4}$/, `A tag is 3 or 4 letters (A–Z)`);
q({
  tag: lf
}),
q({
  name: V().trim().min(3).max(24),
  tag: lf,
  banner: cf
}),
q({
  banner: cf.optional(),
  announcement: V().max(500).optional()
}),
q({
  rank: sf.exclude([`owner`])
}),
q({
  username: V().trim().min(1).max(32)
}),
q({
  q: V().trim().max(32).optional(),
  ...Gd
}),
q({
  userId: U()
}),
q({
  confirm: V().trim().max(32)
}),
q({
  amount: Ku().int().min(1).max(10000000)
}),
q({
  userId: U(),
  minutes: W().min(1).max(43200).nullable(),
  reason: V().trim().max(200).optional(),
  silence: G().default(!1),
  announce: G().default(!0)
}),
q({
  userId: U()
}),
q({
  text: V().trim().min(2).max(320)
}),
q({
  messageId: U()
}),
q({
  userId: U(),
  messageId: U().optional(),
  reason: V().trim().min(3).max(300)
}),
q({
  status: J([`open`,
  `closed`]).default(`open`)
}),
q({
  status: J([`resolved`,
  `dismissed`]),
  note: V().trim().max(200).optional()
}),
q({
  before: U().optional(),
  limit: Y().int().min(1).max(100).default(50)
});
var uf = {
  pink: `#ff7eb6`,
  red: `#ff6b6b`,
  orange: `#ff9f43`,
  amber: `#ffc94a`,
  lime: `#b8e86b`,
  green: `#4fd18b`,
  teal: `#3fd0c9`,
  cyan: `#56c8ff`,
  blue: `#6c8cff`,
  violet: `#a78bfa`,
  purple: `#d07cff`,
  grey: `#a8b0c0`
},
df = Object.keys(uf),
ff = [
  `showcase`,
  `about`,
  `pulls`
],
pf = [
  `level`,
  `team`,
  `collection`,
  `dex`,
  `tower`,
  `weekly`,
  `pvp`,
  `maps`,
  `casino`
],
mf = [
  ...ff,
  ...pf,
  `lastSeen`
],
hf = {
  tester: {
    kind: `badge`,
    color: `#ff66aa`
  },
  game_breaker: {
    kind: `badge`,
    color: `#ff5470`
  }
},
gf = V().regex(/^[a-z0-9_]{2,40}$/);
q({
  bio: V().max(1000).optional(),
  bannerCardId: U().nullable().optional(),
  accent: J(df).nullable().optional(),
  layout: q({
    order: K(J(ff)).max(ff.length),
    hidden: K(J(mf)).max(mf.length)
  }).optional(),
  equipped: q({
    badges: K(gf).max(5)
  }).optional(),
  backerAccent: V().regex(/^#[0-9a-fA-F]{6}$/).transform(e => e.toLowerCase()).nullable().optional(),
  backerFrame: G().optional()
}),
q({
  bio: G().default(!0),
  banner: G().default(!1),
  lockDays: W().min(0).max(3650).nullable().default(0),
  reason: V().trim().max(200).optional()
}),
q({
  reason: V().trim().min(3).max(300)
});
var _f = Math.round(
  [{
    id: `server`,
    usd: 48,
    per: `month`
  },
  {
    id: `domain`,
    usd: 10,
    per: `year`
  }
  ].reduce((e, t) => e + (t.per === `year` ? t.usd / 12 : t.usd), 0) * 100
) / 100,
vf = [
  1,
  6,
  12
],
yf = e => e >= vf[2] ? 3 : e >= vf[1] ? 2 : 1;
function bf(e) {
  let t = t => {
    let n = parseInt(e.slice(1 + t * 2, 3 + t * 2), 16) / 255;
    return n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) **2.4
  };
  return 0.2126 * t(0) + 0.7152 * t(1) + 0.0722 * t(2)
}
var xf = e => /^#[0-9a-f]{6}$/i.test(e) &&
bf(e) >= 0.2;
q({
  listed: G()
}),
q({
  username: V().trim().min(1).max(64),
  linkEmail: G().default(!0)
}),
q({
  username: V().trim().min(1).max(64),
  days: W().min(1).max(400)
}),
q({
  username: V().trim().min(1).max(64)
});
var Sf = 2000,
Cf = 2000;
q({
  message: V().trim().min(20, `Tell us a bit more (at least 20 characters)`).max(Sf)
}),
q({
  reply: V().trim().min(1).max(Cf)
}),
q({
  decision: J([`accept`,
  `decline`]),
  reply: V().trim().max(Cf).optional()
}),
q({
  status: J([`open`,
  `closed`,
  `all`]).default(`open`)
});
var wf = 1500,
Tf = 0,
Ef = `mouse`,
Df = null,
Of = !1,
kf = e => e === `touch` ? `touch` : e === `pen` ? `pen` : `mouse`;
if (typeof document < `u`) {
  let e = {
    capture: !0,
    passive: !0
  };
  document.addEventListener(`pointermove`, e => {
    e.pointerType !== `touch` &&
    Tf++
  }, e),
  document.addEventListener(`pointerdown`, e => Ef = kf(e.pointerType), e),
  document.addEventListener(
    `click`,
    e => {
      Df = {
        at: performance.now(),
        via: e.detail === 0 &&
        e.isTrusted ? `key` : Ef,
        x: Math.round(e.screenX),
        y: Math.round(e.screenY),
        trusted: e.isTrusted,
        hidden: document.visibilityState !== `visible`
      }
    },
    e
  )
}
function Af() {
  Of = !0
}
function jf() {
  let e = Df &&
  performance.now() - Df.at < wf ? Df : null;
  Df = null;
  let t = Of;
  Of = !1;
  let n = t ? {
    decoy: !0
  }
   : {
  };
  if (!e) return {
    via: `none`,
    trusted: !0,
    hidden: typeof document < `u` &&
    document.visibilityState !== `visible`,
    ...n
  };
  let r = e.via === `mouse` ||
  e.via === `pen`,
  i = {
    via: e.via,
    trusted: e.trusted,
    hidden: e.hidden,
    ...r ? {
      x: e.x,
      y: e.y,
      moves: Tf
    }
     : {
    },
    ...n
  };
  return Tf = 0,
  i
}
var Mf = class extends Error {
  status;
  code;
  constructor(e, t, n) {
    super (n),
    this.status = e,
    this.code = t
  }
},
Nf = 0,
Pf = 1 / 0,
Ff = () => Date.now() + Nf;
function If(e, t) {
  let n = Number(e.headers.get(`x-server-time`));
  if (!n) return;
  let r = Date.now() - t;
  r > Pf ||
  (Pf = r, Nf = n - (t + r / 2))
}
async function X(e, t, n, r, i) {
  let a = Date.now(),
  o = await fetch(
    `/api${ t }`,
    {
      method: e,
      signal: r,
      keepalive: i,
      credentials: `same-origin`,
      headers: {
        'x-client-build': `1793234837756`,
        ...n === void 0 ? {
        }
         : {
          'content-type': `application/json`
        }
      },
      body: n === void 0 ? void 0 : JSON.stringify(n)
    }
  );
  if (If(o, a), o.status === 204) return;
  let s = await o.json().catch(() => null);
  if (!o.ok) throw s?.error?.code === `challenge_required` &&
  window.dispatchEvent(new Event(Lf)),
  new Mf(
    o.status,
    s?.error?.code ?? `error`,
    s?.error?.message ?? o.statusText
  );
  return s
}
var Lf = `anticheat-check`,
Rf = e => e instanceof Mf &&
e.code === `challenge_required`,
zf = e => e instanceof Mf &&
e.code === `account_frozen`;
function Z(e) {
  let t = Object.entries(e).filter(([,
  e]) => e !== void 0 && e !== `` && e !== null);
  return t.length ? `?${ new URLSearchParams(t.map(([e,
  t]) => [e,
  String(t)])) }` : ``
}
var Q = e => X(`GET`, e),
$ = (e, t = {}) => X(`POST`, e, t),
Bf = (e, t) => X(`PATCH`, e, t),
Vf = {
  config: () => Q(`/config`),
  anticheat: {
    status: () => Q(`/anticheat`),
    pass: e => $(`/anticheat/pass`, e)
  },
  backer: {
    me: () => Q(`/backer/me`),
    setListed: e => X(`PUT`, `/backer/me`, {
      listed: e
    }),
    thanks: () => Q(`/backer/thanks`)
  },
  support: {
    get: () => Q(`/support`),
    appeal: e => $(`/support/appeal`, {
      message: e
    })
  },
  feedback: {
    send: e => $(`/feedback`, e)
  },
  auth: {
    me: () => Q(`/auth/me`).then(e => e.user),
    login: (e, t) => $(`/auth/login`, {
      login: e,
      password: t
    }),
    register: (e, t, n) => $(`/auth/register`, {
      email: e,
      username: t,
      password: n
    }),
    logout: () => $(`/auth/logout`),
    changelogSeen: () => $(`/auth/changelog-seen`),
    verifyEmail: e => $(`/auth/verify-email`, {
      token: e
    }),
    resendVerification: () => $(`/auth/resend-verification`),
    requestReset: e => $(`/auth/request-password-reset`, {
      email: e
    }),
    resetPassword: (e, t) => $(`/auth/reset-password`, {
      token: e,
      password: t
    }),
    osuLoginUrl: (e = !1) => `/api/auth/osu/start${ e ? `?link=1` : `` }`
  },
  items: {
    inventory: () => Q(`/items`),
    refill: () => $(`/items/stamina/refill`),
    useFuel: e => $(`/items/fuel`, {
      count: e
    }),
    upgrade: (e, t) => $(`/items/upgrade`, {
      from: e,
      count: t
    }),
    breakdown: (e, t) => $(`/items/breakdown`, {
      from: e,
      count: t
    }),
    convert: (e, t) => $(`/items/convert`, {
      target: e,
      need: t
    })
  },
  mods: {
    list: (e = {}) => Q(`/mods${ Z(e) }`),
    get: e => Q(`/mods/${ e }`),
    enhance: (e, t) => $(`/mods/${ e }/enhance`, t),
    salvage: e => $(`/mods/salvage`, {
      ids: e
    }),
    lock: (e, t) => $(`/mods/lock`, {
      ids: e,
      locked: t
    }),
    salvageAllPreview: e => Q(`/mods/salvage-all${ Z(e) }`),
    salvageAll: e => $(`/mods/salvage-all`, e)
  },
  farm: {
    view: () => Q(`/farm`),
    start: (e, t, n = !1) => $(`/farm/battles`, {
      stageId: e,
      tier: t,
      ...n ? {
        overtime: n
      }
       : {
      }
    }),
    finish: (e, t) => $(`/farm/battles/${ e }/finish`, {
      inputs: t
    })
  },
  onboarding: {
    state: () => Q(`/onboarding`),
    claimWelcomeGift: () => $(`/onboarding/welcome-gift`),
    setTeam: e => $(`/onboarding/team`, {
      cardIds: e
    }),
    startBattle: () => $(`/onboarding/battle`),
    acceptRules: () => $(`/onboarding/rules`),
    finishBattle: (e, t) => $(`/onboarding/battle/${ e }/finish`, {
      inputs: t
    })
  },
  dex: {
    view: e => Q(`/dex${ Z(e) }`)
  },
  friends: {
    list: () => Q(`/friends`),
    follow: e => $(`/friends/${ encodeURIComponent(e) }`),
    unfollow: e => X(`DELETE`, `/friends/${ encodeURIComponent(e) }`)
  },
  notifications: {
    list: () => Q(`/notifications`),
    markRead: e => $(`/notifications/read`, e ? {
      ids: e
    }
     : {
    })
  },
  quests: {
    list: () => Q(`/quests`),
    claim: e => $(`/quests/${ e }/claim`)
  },
  wallet: {
    get: () => Q(`/wallet`),
    claimDaily: () => $(`/wallet/daily`)
  },
  banner: {
    view: () => Q(`/banner`),
    buyKeys: e => $(`/banner/keys`, {
      count: e
    }),
    pull: e => $(`/banner/pull`, {
      count: e
    })
  },
  packs: {
    catalog: () => Q(`/packs`),
    inventory: () => Q(`/packs/inventory`),
    open: e => $(`/packs/inventory/${ e }/open`, {
      input: jf()
    }),
    fill: e => $(`/packs/fill`, {
      count: e
    })
  },
  cards: {
    mine: (e = {}) => Q(`/cards${ Z(e) }`),
    fodder: (e, t) => Q(`/cards/fodder${ Z({
      card: e,
      upTo: t
    }) }`),
    progress: () => Q(`/cards/progress`),
    get: e => Q(`/cards/${ e }`),
    quicksell: e => $(`/cards/${ e }/quicksell`),
    setLocked: (e, t) => $(`/cards/${ e }/lock`, {
      locked: t
    }),
    quicksellAllPreview: e => Q(`/cards/quicksell-all${ Z(e) }`),
    quicksellAll: e => $(`/cards/quicksell-all`, e),
    quicksellMany: e => $(`/cards/quicksell`, {
      ids: e
    }),
    setShowcase: (e, t) => $(`/cards/${ e }/showcase`, {
      pinned: t
    }),
    level: (e, t) => $(`/cards/${ e }/level`, t),
    eidolon: (e, t) => $(`/cards/${ e }/eidolon`, {
      cardIds: t
    }),
    ascend: e => $(`/cards/${ e }/ascend`),
    reroll: (e, t) => $(`/cards/${ e }/reroll`, {
      part: t
    }),
    equip: (e, t) => $(`/cards/${ e }/mods`, {
      modIds: t
    })
  },
  users: {
    online: () => Q(`/users/online`),
    showcase: e => Q(`/users/${ encodeURIComponent(e) }/showcase`),
    page: e => Q(`/users/${ encodeURIComponent(e) }/profile`),
    saveProfile: e => X(`PUT`, `/users/me/profile`, e),
    reportProfile: (e, t) => $(`/users/${ encodeURIComponent(e) }/report`, {
      reason: t
    }),
    clearProfile: (e, t) => $(`/users/${ encodeURIComponent(e) }/profile/clear`, t),
    casino: e => Q(`/users/${ encodeURIComponent(e) }/casino`),
    mods: (e, t = {}) => Q(`/users/${ encodeURIComponent(e) }/mods${ Z(t) }`),
    profile: (e, t = {}) => Q(`/users/${ encodeURIComponent(e) }${ Z(t) }`)
  },
  players: {
    search: e => Q(`/players${ Z(e) }`),
    countries: () => Q(`/players/countries`),
    lookup: e => $(`/players/lookup`, {
      query: e
    }),
    owners: (e, t, n = `count`) => Q(
      `/players/${ e }/owners${ Z({
        sig: t ||
        void 0,
        sort: n === `serial` ? n : void 0
      }) }`
    )
  },
  market: {
    list: (e = {}) => Q(`/market/listings${ Z(e) }`),
    create: e => $(`/market/listings`, e),
    cancel: e => X(`DELETE`, `/market/listings/${ e }`),
    buy: (e, t) => $(`/market/listings/${ e }/buy`, t ? {
      qty: t
    }
     : {
    })
  },
  trades: {
    list: () => Q(`/trades`),
    get: e => Q(`/trades/${ e }`),
    create: e => $(`/trades`, e),
    counter: (e, t) => $(`/trades/${ e }/counter`, t),
    accept: e => $(`/trades/${ e }/accept`),
    decline: e => $(`/trades/${ e }/decline`),
    cancel: e => $(`/trades/${ e }/cancel`)
  },
  casino: {
    dice: e => $(`/casino/dice`, e),
    roulette: e => $(`/casino/roulette`, e),
    baccarat: e => $(`/casino/baccarat`, e),
    blackjackActive: () => Q(`/casino/blackjack`),
    blackjackDeal: e => $(`/casino/blackjack`, e),
    blackjackAction: (e, t) => $(`/casino/blackjack/${ e }/action`, {
      action: t
    }),
    plinko: e => $(`/casino/plinko`, e),
    keno: e => $(`/casino/keno`, e),
    limbo: e => $(`/casino/limbo`, e),
    coinflip: e => $(`/casino/coinflip`, e),
    streakActive: () => Q(`/casino/coinflip/streak`),
    streakStart: e => $(`/casino/coinflip/streak`, e),
    streakFlip: (e, t) => $(`/casino/coinflip/streak/${ e }/flip`, {
      side: t
    }),
    streakCashout: e => $(`/casino/coinflip/streak/${ e }/cashout`),
    minesActive: () => Q(`/casino/mines`),
    minesStart: e => $(`/casino/mines`, e),
    minesReveal: (e, t) => $(`/casino/mines/${ e }/reveal`, {
      tile: t
    }),
    minesCashout: e => $(`/casino/mines/${ e }/cashout`),
    history: () => Q(`/casino/history`),
    feed: (e, t) => Q(`/casino/feed${ Z({
      kind: e,
      limit: t
    }) }`),
    vip: () => Q(`/casino/vip`),
    claimVip: e => $(`/casino/vip/claim`, {
      kind: e
    })
  },
  tower: {
    get: () => Q(`/tower`),
    floor: e => Q(`/tower/floors/${ e }`),
    setSquad: e => $(`/tower/squad`, {
      cardIds: e
    }),
    presets: () => Q(`/tower/presets`),
    savePreset: (e, t, n) => X(`PUT`, `/tower/presets/${ e }`, {
      name: t,
      cardIds: n
    }),
    deletePreset: e => X(`DELETE`, `/tower/presets/${ e }`),
    start: e => $(`/tower/battles`, {
      floor: e
    }),
    finish: (e, t) => $(`/tower/battles/${ e }/finish`, {
      inputs: t
    })
  },
  weekly: {
    get: () => Q(`/weekly`),
    round: e => Q(`/weekly/rounds/${ e }`),
    start: e => $(`/weekly/battles`, {
      round: e
    }),
    finish: (e, t) => $(`/weekly/battles/${ e }/finish`, {
      inputs: t
    })
  },
  guilds: {
    list: (e = {}) => Q(`/guilds${ Z(e) }`),
    mine: () => Q(`/guilds/mine`),
    byTag: e => Q(`/guilds/by-tag/${ encodeURIComponent(e) }`),
    create: e => $(`/guilds`, e),
    update: e => Bf(`/guilds/mine`, e),
    changeTag: e => $(`/guilds/mine/tag`, {
      tag: e
    }),
    leave: () => $(`/guilds/mine/leave`),
    transfer: e => $(`/guilds/mine/transfer`, {
      userId: e
    }),
    disband: e => $(`/guilds/mine/disband`, {
      confirm: e
    }),
    invite: e => $(`/guilds/mine/invites`, {
      username: e
    }),
    request: e => $(`/guilds/by-tag/${ encodeURIComponent(e) }/requests`),
    answerInvite: (e, t) => $(`/guilds/invites/${ e }/answer`, {
      accept: t
    }),
    answerRequest: (e, t) => $(`/guilds/requests/${ e }/answer`, {
      accept: t
    }),
    cancel: e => $(`/guilds/invites/${ e }/cancel`),
    setRank: (e, t) => $(`/guilds/mine/members/${ e }/rank`, {
      rank: t
    }),
    kick: e => $(`/guilds/mine/members/${ e }/kick`),
    raid: () => Q(`/guilds/mine/raid`),
    startRaid: () => $(`/guilds/mine/raid/battles`),
    finishRaid: (e, t) => $(`/guilds/mine/raid/battles/${ e }/finish`, {
      inputs: t
    }),
    claimRaid: () => $(`/guilds/mine/raid/claim`)
  },
  spots: {
    list: () => Q(`/spots`),
    detail: e => Q(`/spots/${ e }`),
    guild: () => Q(`/spots/guild`),
    fight: e => $(`/spots/${ e }/battles`),
    finish: (e, t) => $(`/spots/battles/${ e }/finish`, {
      inputs: t
    }),
    cheer: e => $(`/spots/${ e }/cheer`),
    leave: e => $(`/spots/${ e }/leave`),
    claimSeason: () => $(`/spots/season/claim`)
  },
  bank: {
    get: () => Q(`/guilds/mine/bank`),
    deposit: e => $(`/guilds/mine/bank/deposit`, {
      amount: e
    }),
    rally: () => $(`/guilds/mine/bank/rally`)
  },
  chat: {
    list: e => Q(`/chat${ e ? `?after=${ e }` : `` }`),
    command: e => $(`/chat/command`, {
      text: e
    }),
    pin: e => $(`/chat/pin`, {
      messageId: e
    }),
    unpin: () => X(`DELETE`, `/chat/pin`),
    report: e => $(`/chat/reports`, e),
    reports: e => Q(`/chat/reports?status=${ e }`),
    closeReport: (e, t) => $(`/chat/reports/${ e }/close`, t),
    post: (e, t, n = `osu`) => $(`/chat`, {
      body: e,
      mentions: t,
      channel: n
    }),
    users: e => Q(`/chat/users?q=${ encodeURIComponent(e) }`),
    remove: e => X(`DELETE`, `/chat/${ e }`),
    mute: e => $(`/chat/mute`, e),
    unmute: e => $(`/chat/unmute`, {
      userId: e
    }),
    standing: e => Q(`/chat/standing/${ e }`),
    log: (e, t) => Q(`/chat/log/${ e }${ t ? `?before=${ t }` : `` }`),
    moderation: () => Q(`/chat/moderation`)
  },
  activity: () => Q(`/activity`),
  battles: {
    open: () => Q(`/battles/open`),
    progress: (e, t) => X(`POST`, `/battles/${ e }/progress`, {
      inputs: t
    }, void 0, !0),
    forfeit: e => $(`/battles/${ e }/forfeit`)
  },
  pvp: {
    state: () => Q(`/pvp/state`),
    join: () => $(`/pvp/queue`),
    leave: () => $(`/pvp/queue/leave`),
    ghost: () => $(`/pvp/ghost`),
    acceptPop: () => $(`/pvp/queue/accept`),
    declinePop: () => $(`/pvp/queue/decline`),
    challenge: e => $(`/pvp/challenges`, {
      username: e
    }),
    accept: e => $(`/pvp/challenges/${ e }/accept`),
    decline: e => $(`/pvp/challenges/${ e }/decline`),
    cancel: e => $(`/pvp/challenges/${ e }/cancel`),
    match: e => Q(`/pvp/matches/${ e }`),
    wait: (e, t, n) => X(`GET`, `/pvp/matches/${ e }/wait?seq=${ t }`, void 0, n),
    act: (e, t) => $(`/pvp/matches/${ e }/act`, t),
    forfeit: e => $(`/pvp/matches/${ e }/forfeit`),
    ladder: () => Q(`/pvp/ladder`),
    claim: () => $(`/pvp/rewards/claim`)
  },
  dev: {
    access: () => Q(`/dev/access`),
    grant: e => $(`/dev/access`, {
      username: e
    }),
    revoke: e => X(`DELETE`, `/dev/access/${ e }`),
    handoff: () => $(`/dev/handoff`),
    spawn: e => $(`/dev/cards`, e),
    setKit: (e, t) => $(`/dev/cards/${ e }/kit`, t),
    items: e => $(`/dev/items`, e),
    mods: e => $(`/dev/mods`, e)
  },
  balance: {
    feed: (e, t) => Q(`/dev/balance/reports${ Z({
      after: e,
      messagesAfter: t
    }) }`),
    message: e => $(`/dev/balance/messages`, {
      text: e
    })
  },
  admin: {
    guilds: (e = {}) => Q(`/admin/guilds${ Z(e) }`),
    retagGuild: (e, t) => $(`/admin/guilds/${ e }/tag`, {
      tag: t
    }),
    disbandGuild: e => $(`/admin/guilds/${ e }/disband`),
    rarity: () => Q(`/admin/rulesets`),
    createRuleset: (e, t) => $(`/admin/rulesets`, {
      shares: e,
      note: t,
      activate: !0
    }),
    calibrate: () => $(`/admin/calibrate`),
    stats: () => Q(`/admin/stats`),
    activity: () => Q(`/admin/activity`),
    anticheat: (e = `flagged`, t = ``) => Q(`/admin/anticheat${ Z({
      view: e,
      q: t ||
      void 0
    }) }`),
    anticheatDetail: e => Q(`/admin/anticheat/${ e }`),
    anticheatChallenge: e => $(`/admin/anticheat/${ e }/challenge`),
    anticheatClear: e => $(`/admin/anticheat/${ e }/clear`),
    perf: e => Q(`/admin/perf?minutes=${ e }`),
    perfHistory: e => Q(`/admin/perf/history?hours=${ e }`),
    perfQueries: e => Q(`/admin/perf/queries?sort=${ e }`),
    perfQueriesReset: () => $(`/admin/perf/queries/reset`),
    ledger: e => Q(`/admin/users/${ e }/ledger`),
    findCard: e => Q(`/admin/cards/lookup${ Z({
      ref: e
    }) }`),
    removeCard: e => $(`/admin/cards/${ e }/remove`),
    removeCards: e => $(`/admin/cards/remove`, {
      ids: e
    }),
    moveCard: (e, t) => $(`/admin/cards/${ e }/transfer`, {
      username: t
    }),
    users: e => Q(`/admin/users${ Z({
      q: e
    }) }`),
    setRole: (e, t) => $(`/admin/users/${ e }/role`, {
      role: t
    }),
    grantStars: (e, t) => $(`/admin/users/${ e }/stars`, {
      amount: t
    }),
    resetQuests: e => $(`/admin/users/${ e }/reset-quests`),
    resetDex: e => $(`/admin/users/${ e }/reset-dex`),
    resetUser: (e, t) => $(`/admin/users/${ e }/reset`, {
      confirm: t
    }),
    deletePreview: e => Q(`/admin/users/${ e }/delete-preview`),
    deleteUser: (e, t, n) => $(`/admin/users/${ e }/delete`, {
      confirm: t,
      reason: n ||
      void 0
    }),
    mergePreview: (e, t, n) => Q(`/admin/users/${ e }/merge-preview${ Z({
      into: t,
      guild: n
    }) }`),
    mergeUser: (e, t) => $(`/admin/users/${ e }/merge`, {
      ...t,
      reason: t.reason ||
      void 0
    }),
    giftCard: (e, t) => $(`/admin/users/${ e }/cards`, t),
    giftPacks: (e, t, n) => $(`/admin/users/${ e }/packs`, {
      slug: t,
      count: n
    }),
    grantItem: (e, t, n) => $(`/admin/users/${ e }/items`, {
      itemId: t,
      qty: n
    }),
    grantMod: (e, t, n, r) => $(`/admin/users/${ e }/mods`, {
      type: t,
      rarity: n,
      level: r
    }),
    freeze: (e, t, n) => $(`/admin/users/${ e }/freeze`, {
      frozen: t,
      reason: n
    }),
    rename: (e, t) => $(`/admin/users/${ e }/rename`, {
      username: t
    }),
    clawback: (e, t) => $(`/admin/users/${ e }/clawback`, t),
    cosmetics: e => Q(`/admin/users/${ e }/cosmetics`),
    grantCosmetic: (e, t) => $(`/admin/users/${ e }/cosmetics`, {
      cosmeticId: t
    }),
    revokeCosmetic: (e, t) => X(`DELETE`, `/admin/users/${ e }/cosmetics/${ t }`),
    network: e => Q(`/admin/users/${ e }/network`),
    ban: (e, t, n) => $(`/admin/users/${ e }/ban`, {
      reason: t,
      ips: n
    }),
    unban: e => $(`/admin/users/${ e }/unban`),
    signals: (e = `open`) => Q(`/admin/signals${ Z({
      status: e
    }) }`),
    updateSignal: (e, t, n) => $(`/admin/signals/${ e }`, {
      status: t,
      note: n
    }),
    transactions: e => Q(`/admin/transactions${ Z(e) }`),
    reverseTrade: e => $(`/admin/trades/${ e }/reverse`),
    rpgEconomy: e => Q(`/admin/economy/rpg${ Z({
      days: e
    }) }`),
    packs: () => Q(`/admin/packs`),
    updatePack: (e, t) => Bf(`/admin/packs/${ e }`, t),
    refreshPlayer: e => $(`/admin/players/${ e }/refresh`),
    bulkPlayers: e => $(`/admin/players/bulk`, {
      text: e
    }),
    bulkPlayersJob: e => Q(`/admin/players/bulk/${ e }`),
    resetPulls: e => $(`/admin/players/${ e }/reset-pulls`),
    setOptOut: (e, t) => $(`/admin/players/${ e }/opt-out`, {
      optedOut: t
    }),
    setPlayerClass: (e, t) => $(`/admin/players/${ e }/class`, {
      cls: t
    }),
    setPlayerRarity: (e, t) => $(`/admin/players/${ e }/rarity`, {
      rarity: t
    }),
    recalculate: e => $(`/admin/recalculate`, {
      basis: e
    }),
    grant: (e, t) => $(`/admin/grant`, {
      username: e,
      amount: t
    }),
    importTop: e => $(`/admin/import-top`, {
      maxRank: e
    }),
    retryImportFailures: () => $(`/admin/import-top/retry-failed`),
    economy: e => Q(`/admin/economy${ Z({
      days: e
    }) }`),
    casino: e => Q(`/admin/casino${ Z({
      days: e
    }) }`),
    setCasinoOpen: e => $(`/admin/casino/open`, {
      open: e
    }),
    tower: e => Q(`/admin/tower${ Z({
      days: e
    }) }`),
    userSummary: e => Q(`/admin/users/${ e }/summary`),
    feedback: () => Q(`/admin/feedback`),
    backerPayments: e => Q(`/admin/backer/payments${ Z({
      filter: e
    }) }`),
    backerUser: e => Q(`/admin/backer/user${ Z({
      username: e
    }) }`),
    backerLink: (e, t, n) => $(`/admin/backer/payments/${ e }/link`, {
      username: t,
      linkEmail: n
    }),
    backerGrant: (e, t) => $(`/admin/backer/grant`, {
      username: e,
      days: t
    }),
    backerRevoke: e => $(`/admin/backer/revoke`, {
      username: e
    }),
    resolveFeedback: e => $(`/admin/feedback/${ e }/resolve`),
    appeals: e => Q(`/admin/appeals?status=${ e }`),
    appealsOpen: () => Q(`/admin/appeals/count`),
    replyAppeal: (e, t) => $(`/admin/appeals/${ e }/reply`, {
      reply: t
    }),
    decideAppeal: (e, t, n) => $(`/admin/appeals/${ e }/decide`, {
      decision: t,
      reply: n
    })
  }
},
Hf = a(),
Uf = {
  'nav.group.play': `Play`,
  'nav.group.battle': `Battle`,
  'nav.group.collection': `Collection`,
  'nav.group.trade': `Trade`,
  'nav.group.social': `Social`,
  'nav.group.extras': `Extras`,
  'nav.group.staff': `Staff`,
  'nav.packs': `Packs`,
  'nav.banner': `Banner`,
  'nav.quests': `Quests`,
  'nav.team': `Team`,
  'nav.tower': `Tower`,
  'nav.weekly': `Weekly`,
  'nav.maps': `Maps`,
  'nav.pvp': `PvP`,
  'nav.guide': `Guide`,
  'nav.cards': `Cards`,
  'nav.mods': `Mods`,
  'nav.inventory': `Inventory`,
  'nav.dex': `Dex`,
  'nav.market': `Market`,
  'nav.trades': `Trades`,
  'nav.friends': `Friends`,
  'nav.online': `Online`,
  'nav.guild': `Guild`,
  'nav.spots': `Domains`,
  'nav.players': `Players`,
  'nav.casino': `Casino`,
  'nav.admin': `Admin`,
  'nav.reports': `Reports`,
  'nav.group.dev': `Dev`,
  'nav.devSite': `Dev site`,
  'nav.devTools': `Dev tools`,
  'nav.combat': `Combat`,
  'nav.more': `More`,
  'common.tryAgain': `Try again`,
  'common.progress': `Progress`,
  'time.daysHours': `{days}d {hours}h`,
  'quests.title': `Quests`,
  'quests.subtitle': `Daily, weekly and monthly goals that pay Stars and Fuel.`,
  'quests.today': `Today's quests`,
  'quests.thisWeek': `This week's quests`,
  'quests.thisMonth': `This month's quests`,
  'quests.doneOf': `{done} of {total} done`,
  'quests.stillToEarn': `Still to earn`,
  'quests.newIn': `New in`,
  'quests.claim': `Claim`,
  'quests.claiming': `Claiming…`,
  'quests.claimed': `Claimed ✓`,
  'quests.inProgress': `In progress`,
  'quests.claimAll': `Claim all`,
  'quests.claimAllStars': `Claim all · ★ {stars}`,
  'quests.fuel_one': `{count} Fuel`,
  'quests.fuel_other': `{count} Fuel`,
  'quests.fuelTip_one': `+{count} Fuel. It refills {stamina} Stamina.`,
  'quests.fuelTip_other': `+{count} Fuel. Each one refills {stamina} Stamina.`,
  'quests.staminaGained': `+{count} Stamina`,
  'quests.staminaTip': `+{count} Stamina, added straight away.`,
  'settings.language': `Language`,
  'settings.languageNote': `The site's text on this device. Some pages are still English-only.`,
  'common.dismiss': `Dismiss`,
  'common.logIn': `Log in`,
  'common.logOut': `Log out`,
  'layout.linkNotice': `<link>Link your osu! account</link> for the market, trades, PvP and friends.`,
  'layout.aboutFaq': `About & FAQ`,
  'layout.discord': `Join the Discord`,
  'layout.madeBy': `Made by <b>touka</b> & <b>visionary</b>`,
  'layout.disclaimer': `Fan project, not affiliated with osu! or ppy Pty Ltd. No real money involved.`,
  'layout.home': `osu! gacha home`,
  'layout.welcome': `Welcome, {name}`,
  'layout.account': `Account · {name}`,
  'layout.accountUnlinked': `Account · {name}. Link your osu! account for the market, trades, PvP and friends.`,
  'layout.accountLabel': `Account ({name})`,
  'layout.accountLabelUnlinked': `Account ({name}), osu! account not linked`,
  'layout.updateOut': `A new version of the site is out.`,
  'layout.reload': `Reload`,
  'layout.mainNav': `Main`,
  'daily.claimed': `+{amount} Stars daily reward`,
  'daily.claimedStreak': `+{amount} Stars · {streak}-day streak!`,
  'daily.inARow_one': `{count} day in a row`,
  'daily.inARow_other': `{count} days in a row`,
  'daily.keepStreak': `{days}: claim today to keep it. Each day adds 10% to the daily, up to double.`,
  'daily.claimTip': `Claim your daily Stars`,
  'daily.claim': `Claim ★{reward}`,
  'daily.nextTip': `Next daily: {reward} Stars at 00:00 UTC.`,
  'daily.next': `Next`,
  'common.ordinal_one': `{count}st`,
  'common.ordinal_two': `{count}nd`,
  'common.ordinal_few': `{count}rd`,
  'common.ordinal_other': `{count}th`,
  'rarity.common': `Common`,
  'rarity.uncommon': `Uncommon`,
  'rarity.rare': `Rare`,
  'rarity.epic': `Epic`,
  'rarity.legendary': `Legendary`,
  'rarity.mythic': `Mythic`,
  'rarity.divine': `Divine`,
  'rarity.restricted': `Restricted`,
  'common.loading': `Loading`,
  'common.close': `Close`,
  'common.confirm': `Confirm`,
  'common.cancel': `Cancel`,
  'common.send': `Send`,
  'common.accept': `Accept`,
  'common.decline': `Decline`,
  'common.clearSearch': `Clear search`,
  'common.rarity': `Rarity`,
  'common.allRarities': `All rarities`,
  'common.stars': `Stars`,
  'pager.label': `Pagination`,
  'pager.prev': `← Prev`,
  'pager.next': `Next →`,
  'pager.first': `First page`,
  'pager.last': `Last page`,
  'pager.goTo': `Go to page`,
  'pager.range': `{from}–{to} of {total}`,
  'time.justNow': `just now`,
  'time.minutesAgo': `{n}m ago`,
  'time.hoursAgo': `{n}h ago`,
  'time.daysAgo': `{n}d ago`,
  'notif.title': `Notifications`,
  'notif.labelUnread_one': `Notifications, {count} unread`,
  'notif.labelUnread_other': `Notifications, {count} unread`,
  'notif.empty': `Nothing yet. Trade offers and market sales show up here.`,
  'notif.someone': `Someone`,
  'notif.modRefund': `Mods are now about 10× cheaper to level, so you got back the extra you paid: {fragments} Mod Fragments and {stars} Stars. Your mods keep their levels.`,
  'notif.bannerGift': `A Banner Key for the {banner}, on us. Enjoy the banner!`,
  'notif.tradeReceived': `{who} sent you a trade offer`,
  'notif.tradeAccepted': `{who} accepted your trade`,
  'notif.tradeDeclined': `{who} declined your trade`,
  'notif.tradeCancelled': `{who} took back their trade offer`,
  'notif.tradeInvalidated': `Your trade with {who} fell through because a card changed hands`,
  'notif.tradeCountered': `{who} sent you a counteroffer`,
  'notif.newFollower': `{who} followed you`,
  'notif.chatMention': `{who} mentioned you in chat`,
  'notif.chatMentionText': `{who} mentioned you in chat: “{text}”`,
  'notif.pvpChallenge': `{who} challenged you to a Tower PvP match`,
  'notif.marketSold': `{who} bought your card.`,
  'notif.marketSoldPlayer': `{who} bought your {player} card.`,
  'notif.earned': `You got {stars} Stars.`,
  'notif.guildInvite': `{who} invited you to join [{tag}]`,
  'notif.guildRequest': `{who} asked to join [{tag}]`,
  'notif.guildJoined': `{who} joined [{tag}]`,
  'notif.spotLost': `{who} took {place} from your team`,
  'notif.chatMuted': `{who} muted you in chat until {until}.`,
  'notif.chatSilenced': `{who} silenced you in chat until {until} and removed your recent messages.`,
  'notif.untilLifted': `a moderator lifts it`,
  'notif.reason': `Reason: {reason}`,
  'notif.chatReport': `{who} reported {target}: “{reason}”`,
  'notif.reportResolved': `{who} resolved your report about {target}.`,
  'notif.reportDismissed': `{who} dismissed your report about {target}.`,
  'notif.profileCleared': `{who} cleared your profile.`,
  'notif.profileLockedUntil': `You can edit it again from {until}.`,
  'notif.profileLockedLifted': `Editing stays locked until staff lift it.`,
  'activity.matchFound': `Match found`,
  'activity.rankedLive': `Ranked PvP · live 1v1`,
  'activity.accepted': `{n} of 2 players accepted`,
  'activity.waiting': `Waiting for your opponent…`,
  'activity.opponentDeclined': `Your opponent didn't accept. You're back in the queue.`,
  'activity.youDeclined': `You didn't accept the match, so you left the queue.`,
  'activity.couldNotAccept': `Could not accept`,
  'activity.couldNotGhost': `Could not start a ghost match`,
  'activity.forfeitTitle': `Forfeit this fight?`,
  'activity.forfeitBody': `{label} counts as a loss.`,
  'activity.forfeit': `Forfeit`,
  'activity.forfeited': `Fight forfeited`,
  'activity.couldNotForfeit': `Could not forfeit`,
  'activity.pvpMatch': `PvP match`,
  'activity.yourMove': `Your move · {clock}`,
  'activity.theirMove': `Their move`,
  'activity.goToMatch': `Go to match`,
  'activity.finding': `Finding a PvP opponent`,
  'activity.fightGhost': `Fight a ghost`,
  'activity.leaveQueue': `Leave queue`,
  'activity.battleInProgress': `Battle in progress`,
  'activity.return': `Return`,
  'feedback.title': `Feedback & Support`,
  'feedback.sent': `Thanks! Your message was sent.`,
  'feedback.about': `What's this about?`,
  'feedback.kind.bug': `Bug report`,
  'feedback.kind.idea': `Idea / feedback`,
  'feedback.kind.support': `Need help`,
  'feedback.kind.other': `Something else`,
  'feedback.message': `Message`,
  'feedback.bugPlaceholder': `What happened, and what did you expect?`,
  'feedback.placeholder': `Tell us more…`,
  'feedback.reach': `How can we reach you?`,
  'feedback.optional': `(optional)`,
  'feedback.optionalFrom': `(optional, we'll see it's from {name})`,
  'feedback.contactPlaceholder': `Email, Discord or osu! username`,
  'gift.allYours': `All yours!`,
  'gift.welcome': `Welcome, {name}!`,
  'gift.later': `Later`,
  'changelog.title': `Changelog`,
  'changelog.subtitle': `Every update to osu! gacha, newest first`,
  'changelog.whatsNew': `What's new`,
  'changelog.seeAll': `Full changelog`,
  'changelog.gotIt': `Got it`,
  'changelog.alsoMissed_one': `{count} more update you missed`,
  'changelog.alsoMissed_other': `{count} more updates you missed`,
  'changelog.hideOlder': `Hide older updates`,
  'changelog.versionLabel': `Version {version}`,
  'gift.openPack': `Open the {pack}`,
  'gift.claim': `Claim my gift`,
  'gift.added': `Added to your account. Your pack is waiting on the Packs page.`,
  'gift.lead': `Thanks for playing osu! gacha. Here's a little something to get you started.`,
  'chat.title': `Chat`,
  'chat.open': `Open chat`,
  'chat.close': `Close chat`,
  'chat.mentioned': `You were mentioned`,
  'chat.new': `{n} new`,
  'chat.hidePreview': `Hide the latest message here`,
  'chat.showPreview': `Show the latest message here`,
  'chat.hide': `Hide chat`,
  'chat.show': `Show chat`,
  'chat.couldNotRemove': `Could not remove it`,
  'chat.couldNotSend': `Could not send that`,
  'chat.empty': `No messages yet.`,
  'chat.channels': `Channels`,
  'chat.channel.pulls.empty': `No big pulls in the last day yet.`,
  'chat.channel.cn.empty': `Nothing said here in the last day. This channel is for chatting in Chinese.`,
  'chat.channel.guild.empty': `Nothing said in your guild in the last day. Only your guild can see this channel.`,
  'chat.channel.pulls.note': `Mythic and Divine pulls show up here. Chat happens in #en.`,
  'chat.channel.readOnly': `Nobody can type in this channel.`,
  'anticheat.title': `Quick check`,
  'anticheat.text': `You’ve been opening packs non-stop for a while, so we need to check you’re a person before you open or buy more.`,
  'anticheat.continue': `Continue`,
  'anticheat.pick': `Pick the {shape}.`,
  'anticheat.shape.circle': `circle`,
  'anticheat.shape.triangle': `triangle`,
  'anticheat.shape.square': `square`,
  'anticheat.shape.star': `star`,
  'anticheat.thanks': `Thanks, carry on!`,
  'anticheat.failed': `The check didn’t go through. Try again.`,
  'chat.profileOf': `{name}'s profile`,
  'chat.mention': `Mention`,
  'chat.mentionName': `Mention {name}`,
  'chat.mentionSomeone': `Mention someone`,
  'chat.removeMessage': `Remove message`,
  'chat.openCard': `{name}: chat log and moderation`,
  'chat.announcement': `Announcement`,
  'chat.pulled': `pulled`,
  'chat.wasMuted': `was muted for {time}`,
  'chat.wasMutedPerm': `was muted until further notice`,
  'chat.wasSilenced': `was silenced for {time}`,
  'chat.wasSilencedPerm': `was silenced until further notice`,
  'chat.noticeBy': `by <b>{name}</b>`,
  'chat.pinned': `Pinned message`,
  'chat.pinnedBy': `pinned by {name}`,
  'chat.pin': `Pin this message`,
  'chat.unpin': `Unpin`,
  'chat.locked': `Chat is muted by an admin.`,
  'chat.lockedUntil': `Chat is muted by an admin until {when}.`,
  'chat.lockedStaff': `Chat is muted for players: only staff can talk.`,
  'chat.lockedStaffUntil': `Chat is muted for players until {when}: only staff can talk.`,
  'chat.slow': `Slow mode: one message every {n}s.`,
  'chat.slowStaff': `Slow mode is on for players ({n}s).`,
  'cmd.title': `Commands`,
  'cmd.tab': `Tab to complete`,
  'cmd.unknown': `No command /{name}. Type /help for the list.`,
  'cmd.helpTitle': `Commands you can use (Tab completes, Enter runs):`,
  'cmd.arg.player': `player`,
  'cmd.arg.time': `time`,
  'cmd.arg.reason': `reason`,
  'cmd.arg.seconds': `seconds|off`,
  'cmd.arg.message': `message`,
  'cmd.desc.help': `List the commands you can use`,
  'cmd.desc.mute': `Stop them chatting (10m by default; 30m, 1h, 1d, 7d or perm)`,
  'cmd.desc.silentmute': `Mute them without announcing it in chat`,
  'cmd.desc.silence': `Mute them and remove their messages from the last day`,
  'cmd.desc.unmute': `Let them chat again`,
  'cmd.desc.purge': `Remove their messages from the last day`,
  'cmd.desc.log': `Open their chat log and moderation card`,
  'cmd.desc.slow': `Players can post once every so many seconds`,
  'cmd.desc.chat': `Mute the whole chat for players (staff can still talk)`,
  'cmd.desc.clear': `Remove every message from the last day`,
  'cmd.desc.announce': `Post a highlighted announcement (staff: once every 2 minutes)`,
  'cmd.desc.report': `Report a player to the mods and admins`,
  'cmd.desc.pin': `Pin a message above the chat`,
  'cmd.desc.unpin': `Remove the pinned message`,
  'cmd.desc.helper': `Make them a helper`,
  'cmd.desc.unhelper': `Take their helper rank away`,
  'cmd.desc.freeze': `Freeze their account (no online features)`,
  'cmd.desc.unfreeze': `Unfreeze their account`,
  'cmd.desc.mod': `Make them a mod`,
  'cmd.desc.unmod': `Take their mod rank away`,
  'cmd.done.help': `Type /help for the list of commands.`,
  'cmd.done.muted': `{name} is muted for {time}.`,
  'cmd.done.mutedPerm': `{name} is muted until someone lifts it.`,
  'cmd.done.mutedQuietly': `{name} is muted for {time} (not announced).`,
  'cmd.done.mutedPermQuietly': `{name} is muted until someone lifts it (not announced).`,
  'cmd.done.silenced': `{name} is silenced ({time}); {n} messages removed.`,
  'cmd.done.unmuted': `{name} can chat again.`,
  'cmd.done.purged': `Removed {n} of {name}’s messages.`,
  'cmd.done.opened': `Opened {name}’s card.`,
  'cmd.done.slowOn': `Slow mode on: players can post once every {n}s.`,
  'cmd.done.slowOff': `Slow mode is off.`,
  'cmd.done.chatMuted': `Chat is muted for players for {time}.`,
  'cmd.done.chatMutedPerm': `Chat is muted for players until /chat unmute.`,
  'cmd.done.chatUnmuted': `Chat is open again.`,
  'cmd.done.cleared': `Cleared the chat ({n} messages).`,
  'cmd.done.announced': `Announced.`,
  'cmd.done.reported': `Reported {name} to the mods.`,
  'cmd.done.pinned': `Pinned.`,
  'cmd.done.unpinned': `Unpinned.`,
  'cmd.done.helperAdded': `{name} is now a helper.`,
  'cmd.done.helperRemoved': `{name} is no longer a helper.`,
  'cmd.done.frozen': `{name}’s account is frozen.`,
  'cmd.done.unfrozen': `{name}’s account is unfrozen.`,
  'cmd.done.modded': `{name} is now a mod.`,
  'cmd.done.unmodded': `{name} is no longer a mod.`,
  'chat.remove': `Remove`,
  'chat.rules': `Rules`,
  'chat.linkToChat': `<link>Link your osu! account</link> to chat.`,
  'chat.mutedUntil': `You’re muted in chat until {when}.`,
  'chat.mutedLifted': `You’re muted in chat until a moderator lifts it.`,
  'role.admin': `ADMIN`,
  'role.mod': `MOD`,
  'role.adminTip': `Admin: runs the site`,
  'role.modTip': `Moderator: keeps chat friendly`,
  'role.helper': `HELPER`,
  'role.helperTip': `Helper: keeps chat tidy and reports problems to the mods`,
  'moderate.title': `Moderate {name}`,
  'moderate.muteOrSilence': `Mute or silence`,
  'moderate.10m': `10 min`,
  'moderate.1h': `1 hour`,
  'moderate.6h': `6 hours`,
  'moderate.1d': `1 day`,
  'moderate.7d': `7 days`,
  'moderate.lifted': `Until lifted`,
  'moderate.howLong': `How long`,
  'moderate.reason': `Reason (they see it)`,
  'moderate.silence': `Silence`,
  'moderate.silenceTip': `also removes their messages from the last day`,
  'moderate.announce': `Announce in chat`,
  'moderate.announceTip': `“… was muted for 1h by you · reason”`,
  'moderate.helperLimits': `Helpers can mute for up to 1 hour, and it’s always announced. For anything more, report it to a mod.`,
  'moderate.reportTip': `Mods and admins get a notification and look into it. Say what happened.`,
  'moderate.attachMessage': `Attach their message`,
  'moderate.reportReason': `What happened?`,
  'moderate.sendReport': `Send report`,
  'moderate.reportedToast': `Reported {name} to the mods`,
  'reports.title': `Reports`,
  'reports.subtitle': `What helpers and mods have reported. Look into each one, then resolve or dismiss it: the reporter is told.`,
  'reports.mine': `Your reports, and what the mods did about them.`,
  'reports.show': `Show`,
  'reports.open': `Open`,
  'reports.openN': `Open ({n})`,
  'reports.closed': `Closed`,
  'reports.empty': `No open reports. All quiet.`,
  'reports.emptyClosed': `No closed reports yet.`,
  'reports.staffOnly': `Only staff can see reports.`,
  'reports.reported': `<b>{reporter}</b> reported`,
  'reports.openCard': `Open card`,
  'reports.note': `Note for the reporter (optional)`,
  'reports.resolve': `Resolve`,
  'reports.dismiss': `Dismiss`,
  'reports.resolvedBy': `Resolved by {name}`,
  'reports.dismissedBy': `Dismissed by {name}`,
  'reports.resolvedToast': `Report resolved`,
  'reports.dismissedToast': `Report dismissed`,
  'reports.waiting': `Waiting for a mod.`,
  'reports.profileTag': `Profile`,
  'reports.openProfile': `Open profile`,
  'moderate.doMute': `Mute`,
  'moderate.doSilence': `Silence`,
  'moderate.unmute': `Unmute`,
  'moderate.notMuted': `Not muted.`,
  'moderate.mutedUntil': `Muted until {when}`,
  'moderate.mutedUntilLifted': `Muted until lifted`,
  'moderate.mutedToast': `{name} is muted until {when}`,
  'moderate.mutedLiftedToast': `{name} is muted until you lift it`,
  'moderate.silencedToast': `{name} is silenced; {n} messages removed`,
  'moderate.unmutedToast': `{name} can chat again`,
  'moderate.history': `History`,
  'moderate.noHistory': `Nothing on record.`,
  'moderate.until': `until {when}`,
  'moderate.untilLifted': `until lifted`,
  'moderate.kind.mute': `muted them`,
  'moderate.kind.silence': `silenced them`,
  'moderate.kind.unmute': `unmuted them`,
  'moderate.kind.delete_message': `removed a message`,
  'moderate.kind.purge': `cleared their messages`,
  'moderate.kind.freeze': `froze their account`,
  'moderate.kind.rename': `renamed their account`,
  'moderate.kind.clawback': `took back gains from opened packs`,
  'moderate.kind.badge': `gave or took back a badge`,
  'moderate.kind.unfreeze': `unfroze their account`,
  'moderate.kind.clear_profile': `cleared their profile`,
  'support.title': `Support`,
  'support.subtitle': `Your account’s standing, freeze appeals and where to get help`,
  'support.appeal': `Appeal`,
  'support.frozenToast': `Your account is frozen, so this is paused for now. Think it’s a mistake? You can appeal.`,
  'support.frozenNotice': `Your account is frozen.`,
  'support.frozenPill': `Frozen · Appeal`,
  'support.feedbackHint': `Appealing a frozen account? Use the <link>Support page</link>: staff answer appeals there.`,
  'support.accountTitle': `Your account`,
  'support.loggedOut': `Log in to see your account’s standing or to appeal a freeze.`,
  'support.okTitle': `Your account is in good standing`,
  'support.okText': `Nothing on it is frozen. For anything else, see Other help.`,
  'support.since': `Frozen since`,
  'support.reason': `Reason`,
  'support.noReason': `No reason was given.`,
  'support.frozenWhat': `While it’s frozen, everything with other players (the market, trades, PvP, friends and chat) is paused. Solo play still works. If you think it’s a mistake, tell the staff here.`,
  'support.appealTitle': `Appeal the freeze`,
  'support.appealHint': `Explain what happened in your own words: how you play and open packs, and anything staff should know about your trades. Be specific. You can send one appeal at a time, and it can’t be edited once sent.`,
  'support.placeholder': `What happened, from your side…`,
  'support.minChars': `At least {n} characters`,
  'support.oneAtATime': `One appeal at a time`,
  'support.send': `Send appeal`,
  'support.sent': `Appeal sent. You’ll get a notification when staff answer.`,
  'support.cooldown': `Your last appeal was declined. You can send a new one from {date}.`,
  'support.yourAppeals': `Your appeals`,
  'support.status.open': `Waiting for staff`,
  'support.status.accepted': `Accepted`,
  'support.status.declined': `Declined`,
  'support.sentOn': `Sent {date}`,
  'support.staffReply': `Staff reply`,
  'support.waiting': `Staff haven’t answered yet. You’ll get a notification when they do.`,
  'support.helpTitle': `Other help`,
  'support.faq.frozenQ': `What does a frozen account mean?`,
  'support.faq.frozenA': `Staff froze it while they look into something, like automated pack opening or trades that moved value between accounts. Everything with other players is paused until then; solo play keeps working.`,
  'support.faq.appealQ': `How do appeals work?`,
  'support.faq.appealA': `Send one message from this page. Staff read it and may reply, then accept it (the freeze is lifted) or decline it (the account stays frozen). After a declined appeal, you can send a new one 3 days later.`,
  'support.faq.waitQ': `How long does it take?`,
  'support.faq.waitA': `Staff answer appeals by hand, so it can take a few days. You get a notification when they reply or decide, so there’s no need to send it twice.`,
  'support.faq.otherQ': `My problem isn’t a freeze`,
  'support.faq.otherA': `For bugs, missing cards, Backer payments or anything else, send a message with Feedback & Support (add a way to reach you), or ask on the Discord.`,
  'support.contactTitle': `Contact`,
  'support.contactText': `Staff will never ask for your password. Feedback goes straight to the admins; the Discord is quickest for small questions.`,
  'notif.appealReplied': `Staff replied to your appeal.`,
  'notif.appealAccepted': `Your appeal was accepted: your account is unfrozen.`,
  'notif.appealDeclined': `Your appeal was declined. Your account stays frozen.`,
  'moderate.kind.appeal_reply': `replied to their appeal`,
  'moderate.kind.appeal_accept': `accepted their appeal (unfroze them)`,
  'moderate.kind.appeal_decline': `declined their appeal`,
  'moderate.kind.delete_account': `deleted their account`,
  'moderate.kind.merge_account': `merged another account into theirs`,
  'moderate.card.joined': `Joined {date}`,
  'moderate.card.messages_one': `{count} message`,
  'moderate.card.messages_other': `{count} messages`,
  'moderate.card.removed': `{n} removed`,
  'moderate.card.mutes_one': `{count} mute`,
  'moderate.card.mutes_other': `{count} mutes`,
  'moderate.card.profile': `Profile`,
  'moderate.card.view': `Show`,
  'moderate.card.log': `Chat log`,
  'moderate.card.moderate': `Moderate`,
  'moderate.card.report': `Report`,
  'moderate.card.empty': `They haven’t said anything in chat yet.`,
  'moderate.card.older': `Load older`,
  'moderate.card.removedBy': `removed by {name}`,
  'moderate.card.removedTag': `removed`,
  'moderate.card.remove': `Remove this message`,
  'moderate.card.removedToast': `Message removed`,
  'common.locked': `Locked`,
  'common.listed': `Listed`,
  'common.inATrade': `In a trade`,
  'pack.tag.rare': `Rare`,
  'pack.tag.veryRare': `Very rare`,
  'pack.tag.ultraRare': `Ultra rare`,
  'pack.tag.jackpot': `Jackpot`,
  'pack.dropRates': `{pack} drop rates`,
  'pack.rarityEach': `Rarity (each card)`,
  'pack.oddsGuaranteed_one': `These odds apply to each card; if the card is not {rarity} or better, it is re-rolled among {rarity}+ (same relative odds).`,
  'pack.oddsGuaranteed_other': `These odds apply to each card; if none of the {count} cards is {rarity} or better, the last one is re-rolled among {rarity}+ (same relative odds).`,
  'pack.oddsEach': `These odds apply independently to each card.`,
  'pack.slotChance': `{pct}% of slot refills are this pack.`,
  'pack.upgradeChance': `Chance to upgrade (each pack)`,
  'pack.stays': `Stays a {pack}`,
  'pack.upgradesTo': `Upgrades to {pack}`,
  'pack.pity': `Pity: after {count} packs in a row without a {rarity} or better, your next pack guarantees one.`,
  'pack.cards_one': `{count} card`,
  'pack.cards_other': `{count} cards`,
  'pack.odds': `Odds`,
  'rarity.scorePerTier': `Rarity score per tier`,
  'mod.onACard': `On a card`,
  'mod.noSubstats': `No substats yet`,
  'item.whereToFarm': `{name} — where to farm`,
  'card.godRoll': `God roll`,
  'card.signature': `Signature`,
  'card.signatureName': `Signature {name}`,
  'card.skillKind': `Skill · costs 1 Skill Point`,
  'card.passiveKind': `Passive · always on`,
  'card.passive': `Passive`,
  'card.none': `None`,
  'card.noPassive': `No passive`,
  'card.noPassiveText': `This card has no passive.`,
  'card.passiveLabel': `Passive: {name}`,
  'card.skillLabel': `Skill: {name}`,
  'card.basicKind': `Basic · +1 Skill Point`,
  'card.basicAttack': `Basic attack`,
  'card.unlockName': `Unlock {name}`,
  'card.lockName': `Lock {name}`,
  'card.lockedClick': `Locked: can't be quicksold, fed or listed. Click to unlock.`,
  'card.lockTip': `Lock this card so it can’t be quicksold, fed or listed`,
  'card.locked': `Locked: can't be quicksold, fed or listed`,
  'card.modSlots': `Mod slots`,
  'card.battlePower': `Battle Power {bp}`,
  'card.boss': `Boss`,
  'card.gone': `Gone`,
  'card.serialTip': `Copy {no} of {of} {name} cards pulled · card ID {id}`,
  'card.ariaName': `{name}, {rarity} {cls}, level {level}`,
  'battle.details': `Details`,
  'battle.log': `Battle log`,
  'battle.logEmpty': `Moves show up here as the fight goes.`,
  'battle.pointAtCard': `Point at or tap a card to see its details.`,
  'battle.itsTurn': `Its turn`,
  'battle.ally': `Ally`,
  'battle.enemy': `Enemy`,
  'battle.shield': `Shield`,
  'battle.broken': `Broken`,
  'common.saving': `Saving…`,
  'common.saved': `Saved`,
  'common.unsaved': `Unsaved changes`,
  'common.all': `All`,
  'common.searchPlayers': `Search players`,
  'stat.guard': `Guard`,
  'card.level': `Level`,
  'card.ascension': `Ascension`,
  'card.eidolon': `Eidolon`,
  'card.kit': `Kit`,
  'card.stats': `Stats`,
  'card.lock': `Lock`,
  'card.unlock': `Unlock`,
  'card.lockedToast': `Card locked`,
  'card.unlockedToast': `Card unlocked`,
  'team.mixHint': `Mix classes and countries for team bonuses.`,
  'team.remove': `Remove from team`,
  'team.add': `Add to team`,
  'team.swapInFor': `Swap in for`,
  'team.putIn': `Put {name} in {other}’s slot`,
  'team.upgrade': `Upgrade`,
  'team.upgradeTip': `Level, ascend, eidolons and mods`,
  'team.upgradeLong': `Upgrade: level, ascend, eidolons, mods`,
  'team.cardPage': `Card page`,
  'team.save': `Save team`,
  'team.full': `A team has {n} cards. Remove one first.`,
  'team.samePlayer': `{name} is already in this team. A team has each player once (a Signature card counts as its player).`,
  'team.noCards': `No cards yet. Open some packs first.`,
  'team.noMatch': `No cards match.`,
  'team.couldNotPick': `Could not pick a team`,
  'team.yourTeam': `Your team`,
  'team.yourCards': `Your cards`,
  'team.power': `Team power`,
  'team.classesIn': `Classes in the team`,
  'team.classMissing': `{cls} (missing)`,
  'team.emptySlot': `Empty: pick one of your cards`,
  'team.upgradeName': `Upgrade {name}`,
  'team.detailsOf': `Details of {name}`,
  'team.clickToUpgrade': `{rarity} · click to upgrade`,
  'team.moveUp': `Move up`,
  'team.moveDown': `Move down`,
  'team.moveUpName': `Move {name} up`,
  'team.moveDownName': `Move {name} down`,
  'team.removeName': `Remove {name}`,
  'team.suggested': `Suggested teams`,
  'team.picking': `Picking…`,
  'team.strongest': `Strongest`,
  'team.strongestTip': `The highest team power, bonuses included`,
  'team.oneOfEach': `One of each`,
  'team.oneOfEachTip': `One of each class: the Full team bonus`,
  'team.countOf': `{n}/{max} cards`,
  'team.filterClass': `Filter by class`,
  'team.inTeamTip': `In your team · double-click to take it out`,
  'team.addTip': `Double-click to add it to the team`,
  'team.cardDetails': `Card details`,
  'team.clickCard': `Click a card to see what you can do with it.`,
  'team.pointCard': `Point at a card to see its details.`,
  'common.continue': `Continue`,
  'common.areYouSure': `Are you sure?`,
  'common.cantUndo': `This can't be undone.`,
  'reveal.revealCard': `Reveal card`,
  'reveal.sold': `Sold`,
  'reveal.new': `New`,
  'reveal.newLower': `new`,
  'reveal.newPlayer': `New player for your collection`,
  'reveal.unlockCard': `Unlock card`,
  'reveal.lockCard': `Lock card`,
  'reveal.lockedClick': `Locked: can't be quicksold or listed. Click to unlock.`,
  'reveal.lockTip': `Lock this card so it can’t be quicksold`,
  'reveal.skip': `Skip`,
  'reveal.opening': `Opening…`,
  'reveal.upgrade': `Upgrade! {pack}`,
  'reveal.revealAll': `Reveal all`,
  'banner.limited': `Limited banner`,
  'banner.notOwned': `Not owned`,
  'banner.buy': `Buy {n}`,
  'banner.buyTitle': `Buy {n} Banner Keys?`,
  'banner.buyBody': `{n} × Banner Key for ★ {stars}. You will have ★ {after} left.`,
  'banner.buyConfirm': `Buy for ★ {stars}`,
  'banner.shortTitle': `Not enough Banner Keys`,
  'banner.shortBody': `You need {n} more Banner Keys for this. Buy them for ★ {stars} and pull? You will have ★ {after} left.`,
  'banner.shortConfirm': `Buy and pull · ★ {stars}`,
  'banner.pull': `Pull ×{n}`,
  'banner.bought': `Banner Keys: {keys}`,
  'banner.oneKeyEach': `One Banner Key per pull.`,
  'banner.ended': `This banner has ended`,
  'banner.soon': `Opens soon`,
  'banner.endsIn': `Ends in {time}`,
  'banner.pity': `Pity`,
  'banner.pityBanner': `Banner card guaranteed within: {n}`,
  'banner.pitySsr': `SSR guaranteed within: {n}`,
  'banner.pullsSoFar': `Pulls so far: {n}`,
  'banner.odds': `Odds per pull`,
  'banner.normalCard': `Normal card (Golden Pack odds)`,
  'mark.payload': `Crop Marks`,
  'mark.payloadTip': `Takes {pct}% more damage from everyone until its next turn.`,
  'mark.exposure': `Second exposure`,
  'mark.exposureTip': `Lands on the next enemy to act, whoever it is, for {pct}%.`,
  'mark.rain': `Rainfall`,
  'mark.rainTip': `Heals at the start of its turns while the rain lasts.`,
  'mark.ramp': `Ramp Up`,
  'mark.rampTip': `+{spd}% SPD. Stream hits {hits} times. Being Slowed resets it.`,
  'mark.runners': `Runners on base`,
  'mark.runnersTip': `Clear the Bases deals {pct}% more.`,
  'mark.simmer': `Slow Simmer`,
  'mark.simmerTip': `The next bowl heals {pct}% more.`,
  'mark.bowl': `Toppings in the bowl`,
  'mark.bowlTip': `{n} of 4 toppings in: the next bowl adds the next one.`,
  'banner.dupesTitle': `Duplicates`,
  'banner.dupes': `A banner card you already have comes as another copy, like any pull. Feed copies to it to raise its eidolon.`,
  'banner.tradeable': `Banner cards can be traded and sold on the Market like any other card.`,
  'banner.revealTitle': `Banner pull ×{n}`,
  'reveal.quicksellUnlocked': `Quicksell unlocked`,
  'reveal.quicksellAll': `Quicksell all`,
  'reveal.couldNotOpen': `Could not open that pack`,
  'reveal.done': `Done`,
  'reveal.openingNext': `Opening next…`,
  'reveal.openNext': `Open next · {pack}`,
  'reveal.quicksold_one': `Quicksold {count} card for {value} Stars`,
  'reveal.quicksold_other': `Quicksold {count} cards for {value} Stars`,
  'reveal.confirmAll_one': `Quicksell the card?`,
  'reveal.confirmAll_other': `Quicksell all {count} cards?`,
  'reveal.confirmUnlocked_one': `Quicksell the unlocked card?`,
  'reveal.confirmUnlocked_other': `Quicksell the {count} unlocked cards?`,
  'reveal.confirmBody': `You get {value} Stars and the cards are destroyed.`,
  'reveal.lockedStay_one': `{count} locked card stays.`,
  'reveal.lockedStay_other': `{count} locked cards stay.`,
  'reveal.includes': `This includes {list}. This can't be undone.`,
  'reveal.yesQuicksell': `Yes, quicksell for {value}`,
  'reveal.pity': `Pity guarantee!`,
  'reveal.plusNew': `+{n} new`,
  'reveal.noNew': `No new players`,
  'reveal.packWorth': `pack worth ★ {value}`,
  'reveal.collected': `{n} / {pool} collected`,
  'reveal.soldFor': `Sold for ★ {value}`,
  'casino.betAmount': `Bet Amount`,
  'casino.overBalance': `Can't bet more than your balance`,
  'casino.recent': `Recent results`,
  'casino.stopProfit': `Autobet stopped: profit target reached ({net})`,
  'casino.stopLoss': `Autobet stopped: loss limit reached ({net})`,
  'casino.stopBroke': `Autobet stopped: not enough Stars for the next bet`,
  'casino.betMode': `Bet mode`,
  'casino.manual': `Manual`,
  'casino.auto': `Auto`,
  'casino.reset': `Reset`,
  'casino.raiseBy': `Raise by`,
  'casino.raiseLabel': `{label}: raise the bet by this many percent`,
  'casino.off': `Off`,
  'casino.autoSettings': `Auto settings`,
  'casino.configureAuto': `Configure Auto`,
  'casino.onWin': `On Win`,
  'casino.onLoss': `On Loss`,
  'casino.stopOnProfit': `Stop on Net Profit`,
  'casino.stopOnLoss': `Stop on Net Loss`,
  'casino.numberOfBets': `Number of Bets`,
  'casino.net': `Net {net}`,
  'casino.betsLabel': `Number of bets (empty for no limit)`,
  'casino.infiniteTip': `Keep going until you press Stop`,
  'casino.configureTip': `On win, on loss and stop limits`,
  'casino.configure': `Configure`,
  'casino.stopping': `Stopping…`,
  'casino.stopAutobet': `Stop Autobet`,
  'casino.startAutobet': `Start Autobet`,
  'farm.stamina': `Stamina`,
  'farm.plusOneIn': `+1 in <b></b>`,
  'farm.fullIn': `Full in <b></b>`,
  'farm.overCap': `{over} over the cap. It's kept (up to {max}).`,
  'farm.full': `Full. It regenerates again once you spend some.`,
  'farm.plusStamina': `+{n} Stamina`,
  'farm.fuelUsed': `Fuel used. Stamina: {n}`,
  'farm.refill': `Refill Stamina`,
  'farm.buyWithStars': `Buy with Stars`,
  'farm.buyFor': `Buy for <m></m>`,
  'farm.youHave': `You have <m></m>`,
  'farm.useFuel': `Use Fuel`,
  'farm.fuelHave': `You have {n} · +{each} each`,
  'farm.fuelToUse': `Fuel to use`,
  'farm.useN': `Use {n} Fuel`,
  'farm.fuelFrom': `From daily quests and Tower milestones.`,
  'farm.regenNote': `Stamina regenerates 1 every {minutes} minutes up to {cap}. Refills can take you past that; the extra is kept, up to {max}.`,
  'farm.range': `{min} to {max}`,
  'farm.dropTip': `{name}: {amount} a run`,
  'farm.dropTipSometimes': `{name}: {amount} a run (not every run)`,
  'farm.nothing': `Nothing this time.`,
  'farm.mods_one': `{count} mod`,
  'farm.mods_other': `{count} mods`,
  'home.classSkills': `{cls} Skills · each player has one`,
  'home.fanOwn': `Your strongest cards`,
  'home.fanSample': `Some of the cards you can pull`,
  'home.place.packs_one': `A free pack every minute. Save up to {cap}.`,
  'home.place.packs_other': `A free pack every {count} minutes. Save up to {cap}.`,
  'home.place.team': `{n} cards, one for every job.`,
  'home.place.tower': `A boss every 5th floor.`,
  'home.place.maps': `Spend Stamina, farm upgrades.`,
  'home.place.pvp': `Live 1v1, weekly ladder.`,
  'home.place.casino': `Nine games, VIP bonuses. Stars only.`,
  'home.place.market': `Buy, sell and trade cards and mods.`,
  'home.place.banner': `Limited Signature cards with moves of their own.`,
  'home.place.guilds': `Join a guild, level up together.`,
  'home.place.domains': `Hold a map, earn Stars by the hour.`,
  'home.free': `Free`,
  'home.floors': `{n} floors`,
  'home.lv': `Lv {n}`,
  'home.limited': `Limited`,
  'home.domainsOpen': `{n} open`,
  'home.eyebrow': `Free gacha RPG · no real money`,
  'home.title': `Pull your favourite <accent>osu!</accent> players.`,
  'home.lead': `Every card is a real osu! player with a class, a Skill and a passive. Build a team of {n} and battle your way up.`,
  'home.openPacks': `Open packs`,
  'home.climb': `Climb the Tower`,
  'home.playFree': `Play free`,
  'home.howItWorks': `How it works`,
  'home.stat.packs': `Free packs`,
  'home.stat.classes': `Classes`,
  'home.stat.floors': `Floors`,
  'home.stat.battles': `Battles`,
  'home.places': `Where to play`,
  'home.placesSub': `Pull, build, battle, trade.`,
  'home.classes': `Four classes`,
  'home.classesSub': `A player's class never changes.`,
  'home.battleGuide': `Battle guide`,
  'home.rarity': `How rare is rare?`,
  'home.raritySub': `The bigger the name in osu!, the rarer the card.`,
  'home.lookUp': `Look anyone up`,
  'home.band.fresh': `A fresh pack is waiting.`,
  'home.band.first': `Your first pack is waiting.`,
  'home.band.freshSub_one': `One fills up every minute, for free.`,
  'home.band.freshSub_other': `One fills up every {count} minutes, for free.`,
  'home.band.firstSub': `Five cards, at least one Epic, one of every class.`,
  'home.startPlaying': `Start playing`,
  'packs.title': `Your packs`,
  'packs.subtitle': `A new pack every minute, up to 10.`,
  'packs.pity': `Pity`,
  'packs.pityTip': `Go long enough without a big pull and you're guaranteed one. Only slot packs count: gift packs don't move it.`,
  'packs.pityIn_one': `<b>{rarity}+</b> guaranteed in <b>{count}</b> pack`,
  'packs.pityIn_other': `<b>{rarity}+</b> guaranteed in <b>{count}</b> packs`,
  'packs.open': `Open`,
  'packs.openName': `Open {pack}`,
  'packs.openPack': `Open pack`,
  'packs.noneToOpen': `No packs to open`,
  'packs.nextIn': `Next pack in <time></time>`,
  'packs.slotsFull': `Your slots are full.`,
  'packs.arrivesIn': `Pack arrives in {time}`,
  'packs.emptySlot': `Empty slot`,
  'packs.fillTip': `Fill this slot now for {price} Stars ({left} of {max} fills left today)`,
  'packs.noFillsTip': `No Stars fills left today ({max} a day)`,
  'packs.fill': `Fill`,
  'packs.noFills': `No fills left`,
  'packs.filled_one': `Slot filled`,
  'packs.filled_other': `{count} slots filled`,
  'packs.drops': `Pack drops`,
  'packs.dropsLabel': `Chance of each pack when a slot refills (click for drop rates)`,
  'packs.rarities': `Card rarities`,
  'packs.raritiesLabel': `Card rarity tiers, worst to best`,
  'packs.logIn': `Log in to start getting packs.`,
  'packs.nextPack': `Next pack`,
  'packs.giftPack': `Gift pack`,
  'packs.nextUp': `Next up`,
  'packs.waiting_one': `{count} pack waiting`,
  'packs.waiting_other': `{count} packs waiting`,
  'packs.openingHint': `Opening shows the next pack in the same window, so you can go through them all.`,
  'packs.slots': `Pack slots`,
  'packs.slotsInfo': `{n}/{cap} slots filled · {left}/{max} Stars fills left today`,
  'packs.fillAll': `Fill all {n}`,
  'packs.fillN': `Fill {n}`,
  'packs.gifts': `Gift packs`,
  'packs.giftsNone': `Packs you win in the Tower, the Weekly Tournament and PvP show up here.`,
  'auth.osu.state': `Your osu! login timed out. Please try again.`,
  'auth.osu.failed': `osu! login failed. Please try again.`,
  'auth.osu.alreadyLinked': `That osu! account is already linked to another user.`,
  'auth.banned': `This account has been banned.`,
  'auth.signupBlocked': `New accounts can't be made from this network.`,
  'auth.osu.unavailable': `osu! login is not configured on this server yet.`,
  'auth.failed': `Login failed.`,
  'auth.perks': `What you get`,
  'auth.classes': `{n} classes`,
  'auth.noMoney': `No real money`,
  'auth.metaDescription': `Log in to osu! gacha with your osu! account or email and start pulling cards of real osu! players.`,
  'auth.resetSent': `If that email has an account, a reset link is on its way.`,
  'auth.resetTitle': `Reset your password`,
  'auth.join': `Join osu! gacha`,
  'auth.welcomeBack': `Welcome back`,
  'auth.resetLead': `We’ll email you a link to choose a new one.`,
  'auth.lead': `Pull real osu! players, build a team, climb the Tower.`,
  'auth.noOauth': `This server has no osu! OAuth app configured`,
  'auth.osuUnavailable': `osu! login unavailable`,
  'auth.continueOsu': `Continue with osu!`,
  'auth.orEmail': `or with email`,
  'auth.mode': `Mode`,
  'auth.signUp': `Sign up`,
  'auth.emailOrUsername': `Email or username`,
  'auth.email': `Email`,
  'auth.username': `Username`,
  'auth.password': `Password`,
  'auth.oneMoment': `One moment…`,
  'auth.create': `Create account`,
  'auth.sendReset': `Send reset link`,
  'auth.back': `← Back to log in`,
  'auth.forgot': `Forgot password?`,
  'auth.verifyMeta': `Verify email`,
  'auth.verifyTitle': `Email verification`,
  'auth.verified': `Your email is verified.`,
  'auth.openSome': `Open some packs`,
  'auth.noToken': `This link is missing its token.`,
  'auth.newLink': `Send a new link`,
  'auth.newPassword': `New password`,
  'auth.chooseNew': `Choose a new password`,
  'auth.atLeast8': `At least 8 characters.`,
  'auth.changed': `Password changed. You can log in now.`,
  'auth.savePassword': `Save password`,
  'ledger.signup_bonus': `Welcome bonus`,
  'ledger.daily_reward': `Daily reward`,
  'ledger.market_purchase': `Market purchase`,
  'ledger.market_sale': `Market sale`,
  'ledger.market_escrow': `Market listing`,
  'ledger.market_refund': `Market refund`,
  'ledger.trade': `Trade`,
  'ledger.trade_reversal': `Trade reversed by an admin`,
  'ledger.quicksell': `Quicksell`,
  'ledger.admin_grant': `Admin grant`,
  'ledger.quest_reward': `Quest reward`,
  'ledger.boost_purchase': `Speed boost`,
  'ledger.tower_reward': `Tower reward`,
  'ledger.pvp_reward': `PvP reward`,
  'ledger.farm_reward': `Map reward`,
  'ledger.casino_bet': `Casino bet`,
  'ledger.casino_win': `Casino win`,
  'ledger.casino_bonus': `Casino VIP bonus`,
  'ledger.stamina_refill': `Stamina refill`,
  'ledger.card_level': `Card level-up`,
  'ledger.ascension': `Ascension`,
  'ledger.mod_enhance': `Mod enhance`,
  'ledger.pack_fill': `Pack slot fill`,
  'ledger.kit_reroll': `Skill / passive reroll`,
  'ledger.item_upgrade': `Material upgrade`,
  'ledger.welcome_gift': `Welcome gift`,
  'ledger.grading': `Grading`,
  'ledger.talent': `Talent level-up`,
  'settings.title': `Settings`,
  'settings.subtitle': `Your account, osu! link, email, password and wallet.`,
  'settings.linkedSubtitle': `osu! account linked: online features are on.`,
  'settings.account': `Account`,
  'settings.osuLink': `osu! link`,
  'settings.wallet': `Wallet`,
  'settings.danger': `Danger zone`,
  'settings.onlineList': `Online list`,
  'settings.verificationSent': `Verification email sent`,
  'settings.resetSent': `Reset link sent: check your inbox`,
  'settings.frozen': `Frozen`,
  'settings.levelTip': `Spending Stamina on Maps raises your Account Level`,
  'settings.accountLevel': `Account Level · {into}/{next} XP`,
  'settings.featureAt': `{feature} at Lv {lv}`,
  'settings.balance': `Balance`,
  'settings.usernameNote': `Your name on the market, in trades and on Online.`,
  'settings.streak': `Daily streak`,
  'settings.days_one': `{count} day`,
  'settings.days_other': `{count} days`,
  'settings.noStreak': `No streak yet`,
  'settings.publicProfile': `Public profile`,
  'settings.osuAccount': `osu! account`,
  'settings.osuText': `Linking turns on everything you do with other players.`,
  'settings.frozenTitle': `Your account is frozen`,
  'settings.frozenText': `An admin is reviewing recent trades or sales, so online features are paused. Solo play still works.`,
  'settings.justLinked': `Linked! Online features are on.`,
  'settings.linkedTo': `Linked to osu! #{id}`,
  'settings.exempt': `Exempt (admin)`,
  'settings.linkedText': `The market, trades, PvP, friends and Online are open to you.`,
  'settings.notLinked': `Not linked yet`,
  'settings.notLinkedText': `Packs, Maps and the Tower work without it.`,
  'settings.linkOsu': `Link osu! account`,
  'settings.osuProfile': `osu! profile ↗`,
  'settings.on': `On`,
  'settings.paused': `Paused`,
  'settings.needsOsu': `Needs osu!`,
  'settings.emailText': `Used to log in and to reset your password.`,
  'settings.address': `Address`,
  'settings.noEmail': `No email on this account`,
  'settings.verifiedNote': `Verified.`,
  'settings.unverifiedNote': `Not verified yet: check your inbox for the link.`,
  'settings.osuSignup': `You signed up with osu!, so you log in with osu!.`,
  'settings.verified': `Verified`,
  'settings.unverified': `Unverified`,
  'settings.sent': `Sent ✓`,
  'settings.sending': `Sending…`,
  'settings.resend': `Resend link`,
  'settings.resetLink': `Reset link`,
  'settings.resetSentNote': `Sent. The link works for a short while.`,
  'settings.resetNote': `Opens a page where you pick a new password.`,
  'settings.noPassword': `Accounts made with osu! have no password: log in with osu!.`,
  'settings.walletText': `Your latest Stars in and out.`,
  'settings.nothingYet': `Nothing yet.`,
  'settings.dangerText': `Leaving, for a while or for good.`,
  'settings.thisDevice': `This device`,
  'settings.logOutNote': `Your cards stay safe. Log back in any time.`,
  'settings.delete': `Delete my account`,
  'settings.deleteNote': `Send us a message and we'll remove the account and everything on it.`,
  'common.somethingWrong': `Something went wrong`,
  'common.loadingDots': `Loading…`,
  'ob.title': `Welcome to osu! gacha`,
  'ob.subtitle': `Three quick steps: open a pack, build a team, win a battle.`,
  'ob.step.pack': `Open your pack`,
  'ob.step.team': `Build your team`,
  'ob.step.battle': `Win your first battle`,
  'ob.step.rules': `Agree to the rules`,
  'ob.rules.title': `The rules`,
  'ob.rules.lead': `A few rules keep the game fair for everyone. Please read them before you start.`,
  'ob.rules.macros': `Play by hand: no scripts, macros, auto-clickers or other programs that play for you.`,
  'ob.rules.accounts': `One account per person, no extra accounts for free packs or rewards.`,
  'ob.rules.boosting': `Don't move value between accounts with lopsided trades or sales.`,
  'ob.rules.rmt': `Nothing in the game is bought or sold for real money.`,
  'ob.rules.bugs': `Found a bug that gives you too much? Report it instead of using it.`,
  'ob.rules.chat': `No harassment, slurs, spam or sharing personal details.`,
  'ob.rules.consequence': `Breaking them can get your account frozen, wiped or banned.`,
  'ob.rules.full': `Read the full rules`,
  'ob.rules.pledge': `I won't use external programs, scripts, macros or auto-clickers to automate anything in the game, and I'll follow these rules.`,
  'ob.rules.agree': `Agree and continue`,
  'rules.popup.title': `Playing fair`,
  'rules.popup.body': `Using scripts, macros, auto-clickers or any third-party software to automate anything in the game isn't allowed. Accounts that do can be frozen, wiped or banned.`,
  'rules.popup.check': `I won't use scripts or third-party software to automate any activity in the game.`,
  'rules.popup.agree': `Agree`,
  'ob.starterPack': `Starter Pack`,
  'ob.yourStarter': `Your Starter Pack`,
  'ob.starterText': `Five real osu! players as cards. Every card has a class, a Skill and a passive of its own.`,
  'ob.openStarter': `Open the Starter Pack`,
  'ob.continueTeam': `Continue · build your team`,
  'ob.coach.yours': `They’re yours`,
  'ob.coach.yoursText': `Five cards, one of every class. Next, put four of them into a team.`,
  'ob.coach.firstPack': `Your first pack`,
  'ob.coach.firstPackText': `Open your Starter Pack: five cards, at least one Epic or better, and every class.`,
  'ob.pitch.tank': `Tanks draw the enemy’s attacks and shield your team.`,
  'ob.pitch.dps': `DPS deal the damage.`,
  'ob.pitch.support': `Supports heal your team.`,
  'ob.pitch.cc': `CC weaken and delay the enemy.`,
  'ob.coach.addA': `Add a {cls}`,
  'ob.coach.clickToAdd': `Click {name} to put them in your team.`,
  'ob.coach.fullTeam': `A full team`,
  'ob.coach.fullTeamText': `One of each class: everyone gets +10% ATK and HP. Your team is used in the Tower, Maps and PvP. Save it.`,
  'ob.saveStart': `Save team · start the battle`,
  'ob.intro.field': `Your first battle`,
  'ob.intro.field.text': `Your team is at the bottom, the enemy’s at the top: a Tank and a DPS. Knock them both out to win.`,
  'ob.intro.order': `Turn order`,
  'ob.intro.order.text': `Faster cards act first and more often. The first face is acting now; its card has a yellow ring.`,
  'ob.intro.details': `Card details`,
  'ob.intro.details.text': `The card whose turn it is shows up here, with its passive (P), Skill (S) and Basic attack (B). Point at any card to see its details.`,
  'ob.intro.sp': `Skill Points`,
  'ob.intro.sp.text': `Your team shares these. A Basic attack gives +1, a Skill costs 1 (up to 5).`,
  'ob.start': `Start`,
  'ob.next': `Next`,
  'ob.gotIt': `Got it`,
  'ob.nice': `Nice`,
  'ob.coach.dpsDown': `Their DPS is down`,
  'ob.coach.dpsDownText': `Taking out the damage dealer first keeps your team healthy. Now finish the Tank: it has more HP and Guard, so use your Skills.`,
  'ob.coach.broken': `Broken!`,
  'ob.coach.brokenText': `Every attack wears down Guard (the grey bar). At zero the card is Broken: its turn is pushed back and it takes 30% more damage until it recovers.`,
  'ob.coach.turnOf': `{who}'s turn`,
  'ob.coach.attackFree': `Attack {name}: click it for a Basic attack, or press the Skill button first to use {skill}.`,
  'ob.coach.use': `Use {skill}`,
  'ob.coach.costsSp': `It costs 1 Skill Point.`,
  'ob.coach.pickTarget': `Pick a target for {skill}`,
  'ob.coach.clickName': `Click {name}.`,
  'ob.coach.hitDps': `Hit the enemy DPS first: it deals the most damage. Click {name} to attack it. Basic attacks give +1 Skill Point.`,
  'ob.coach.keepPressure': `Keep the pressure on {name}. Click it for a Basic attack.`,
  'ob.guided': `Guided battle · the enemy only uses Basic attacks`,
  'ob.enemyTurn': `Enemy turn…`,
  'ob.checking': `Checking the result…`,
  'ob.won': `You won your first battle!`,
  'ob.finish': `Finish`,
  'ob.defeated': `Defeated`,
  'ob.defeatedTip': `Go for their DPS first, and use Skills when you have Skill Points.`,
  'ob.victory': `Victory`,
  'ob.victoryText': `That’s the whole loop: pull cards, build a team, battle. The Tower, Maps and PvP all play like this.`,
  'ob.settingUp': `Setting up the battle…`,
  'ob.ready': `You’re ready`,
  'ob.readyText': `Your team is saved. Here’s where to go next.`,
  'ob.next.tower': `Floor after floor of tougher teams, with packs and mods as rewards.`,
  'ob.next.packs': `A new pack every minute, up to ten.`,
  'ob.runMaps': `Run Maps`,
  'ob.next.maps': `Farm XP, Stars, ascension materials and mods.`,
  'ob.editTeam': `Edit your team`,
  'ob.next.team': `Swap cards in as your collection grows.`,
  'team.saved': `Team saved`,
  'teamPage.subtitle': `Four cards, used in the Tower, on Maps and in PvP. Click one to see what you can do with it.`,
  'teamPage.saved': `Saved teams`,
  'teamPage.savedTip': `Save this team, or switch to one you saved`,
  'teamPage.switched': `Team switched`,
  'teamPage.deleted': `Saved team deleted`,
  'teamPage.note_one': `Use switches your team right away. Save here keeps the team you're editing ({count} card) in that slot.`,
  'teamPage.note_other': `Use switches your team right away. Save here keeps the team you're editing ({count} cards) in that slot.`,
  'teamPage.teamN': `Team {n}`,
  'teamPage.nameOf': `Name of saved team {n}`,
  'teamPage.gone': `{n} gone`,
  'teamPage.empty': `Empty`,
  'teamPage.use': `Use`,
  'teamPage.saveHere': `Save here`,
  'teamPage.replaceTip': `Replace it with the team you’re editing`,
  'teamPage.saveHereTip': `Save the team you’re editing here`,
  'teamPage.delete': `Delete`,
  'teamPage.deleteName': `Delete {name}`,
  'tower.title': `osu! Tower`,
  'tower.progress': `Floor {n} of {total} cleared`,
  'tower.climb': `Climb {total} floors`,
  'tower.ai.0': `Plays simple: Basic attacks only`,
  'tower.ai.1': `Plays smart: uses Skills sensibly`,
  'tower.ai.2': `Plays sharp: uses Skills and focuses your key cards`,
  'tower.ai.3': `Plays like a pro: takes knockouts, protects its weakest and saves Skill Points`,
  'tower.floors': `Tower floors`,
  'tower.floor': `Floor`,
  'tower.floorN': `Floor {n}`,
  'tower.floorLower': `floor {n}`,
  'tower.theTop': `the top`,
  'tower.starMod': `{n}★ mod`,
  'tower.cleared': `Floor {n} cleared!`,
  'tower.outOfTime': `Out of time`,
  'tower.rewards': `Rewards`,
  'tower.accountXp': `+{n} Account XP`,
  'tower.alreadyCleared': `Already cleared, so no reward this time.`,
  'tower.back': `Back to the Tower`,
  'tower.nextFloor': `Next floor`,
  'tower.bossIs': `Boss: {name}.`,
  'tower.enemiesLv': `Enemies Lv{n}`,
  'tower.randomMix': `A random mix.`,
  'tower.bossLeads': `<b>{name}</b> leads it.`,
  'tower.theBoss': `The boss`,
  'tower.enemyTeam': `Enemy team`,
  'tower.editTeam': `Edit team`,
  'tower.replayNothing': `Cleared · replays pay nothing`,
  'tower.firstClear': `First clear`,
  'tower.clearFirst': `Clear floor {n} first`,
  'tower.replay': `Replay floor {n}`,
  'tower.fight': `Fight floor {n}`,
  'tower.allCleared': `You cleared all {n} floors. Legend.`,
  'weekly.title': `Weekly Tournament`,
  'weekly.subtitle': `Twelve rounds, a new bracket every Monday`,
  'weekly.progress': `{n} of {total} rounds won this week · each pays once a week`,
  'weekly.round': `Round`,
  'weekly.roundN': `Round {n}`,
  'weekly.semifinal': `Semifinal`,
  'weekly.final': `Final`,
  'weekly.grandFinal': `Grand Final`,
  'weekly.won': `{round} won!`,
  'weekly.knockedOut': `Knocked out`,
  'weekly.alreadyWon': `Already won this week, so no reward this time.`,
  'weekly.gearUp': `Level up, ascend and gear your team, then try again.`,
  'weekly.back': `Back to the bracket`,
  'weekly.nextRound': `Next round`,
  'weekly.thisWeek': `This week`,
  'weekly.newIn': `New bracket in`,
  'weekly.themeMod': `{mod} on every round but the bosses`,
  'weekly.bosses': `Bosses`,
  'weekly.rounds': `This week's rounds`,
  'weekly.asHard': `As hard as Tower floor {n}`,
  'weekly.lvFloor': `Lv{lv} · floor {n}`,
  'weekly.theEnd': `the end of the bracket`,
  'weekly.replayNothing': `Won this week · replays pay nothing`,
  'weekly.winFirst': `Win {round} first`,
  'weekly.replay': `Replay {round}`,
  'weekly.fight': `Fight {round}`,
  'weekly.allWon': `You won the Grand Final this week. See you on Monday.`,
  'friends.offline': `Offline`,
  'friends.seen': `Seen {ago}`,
  'friends.nowFriends': `You and {name} are now friends`,
  'friends.followingName': `Following {name}`,
  'friends.unfollowed': `Unfollowed {name}`,
  'friends.clickUnfollow': `Click to unfollow`,
  'friends.friendsCheck': `Friends ✓`,
  'friends.following': `Following`,
  'friends.followingDots': `Following…`,
  'friends.follow': `Follow`,
  'friends.followBack': `Follow back`,
  'friends.followsYou': `Follows you`,
  'friends.chip.friend': `Friend`,
  'friends.chip.waiting': `Waiting`,
  'friends.empty.mutuals': `No friends yet. Follow someone and ask them to follow you back.`,
  'friends.empty.followers': `Nobody new. Follow back anyone who follows you to become friends.`,
  'friends.empty.following': `You're not waiting on anyone to follow you back.`,
  'friends.collectionOf': `{name}'s collection`,
  'friends.trade': `Trade`,
  'friends.frozen': `Following is paused while your account is frozen.`,
  'friends.needsOsu': `Following people needs a linked osu! account.`,
  'friends.linkOsu': `Link osu!`,
  'friends.followBy': `Follow by username`,
  'friends.usernameToFollow': `Username to follow`,
  'friends.everyone': `Everyone`,
  'friends.lists': `Lists`,
  'friends.now': `<on>{online}</on> online · <b>{friends}</b> friends`,
  'friends.subtitle': `Follow people. When you follow each other, you're friends.`,
  'friends.nobody': `Nobody here yet`,
  'friends.nobodyText': `Follow someone by their username, or find players on the <link>Online</link> page. Follow each other to become friends.`,
  'online.sort.score': `Cards + Stars`,
  'online.sort.floor': `Tower floor`,
  'online.sort.cards': `Card count`,
  'online.sort.wagered': `Casino wagered`,
  'online.openProfile': `Open {name}'s profile`,
  'online.rankTip': `#{n} by cards + Stars`,
  'online.scoreTip': `Cards worth {cards} + {stars} Stars held`,
  'online.floorTip': `Highest Tower floor cleared: {n}`,
  'online.show': `Show`,
  'online.now': `Online now`,
  'online.searchName': `Search by name`,
  'online.sort': `Sort`,
  'online.shown': `<b>{n}</b> shown`,
  'online.subtitle': `Who's playing right now, ranked by cards plus Stars. Pick anyone to see their best cards.`,
  'online.nobodyCalled': `Nobody called “{q}”.`,
  'online.nobodyOnline': `Nobody is online right now.`,
  'online.showEveryone': `Show everyone`,
  'dex.pulled': `Pulled`,
  'dex.missing': `Missing`,
  'dex.progress': `Dex progress`,
  'dex.ofPool': `{pct}% of the pool`,
  'dex.tier': `Rarity tier`,
  'dex.complete': `Complete!`,
  'dex.stillToPull': `{n} still to pull`,
  'dex.notPulled': `No. {n}: not pulled yet`,
  'dex.no': `No. {n}`,
  'dex.pulledTimes': `Pulled ×{n}`,
  'dex.byTrade': `Got by trade`,
  'dex.first': `first {date}`,
  'dex.subtitle': `Every player you've ever pulled, even after you sell the card. Fill it up.`,
  'dex.tierPulled': `{n} / {total} pulled`,
  'dex.noneYet': `No {rarity} players pulled yet.`,
  'dex.allPulled': `Every {rarity} player pulled!`,
  'dex.nobodyTier': `Nobody in this tier yet.`,
  'inv.kind.consumable': `Consumable`,
  'inv.kind.xp': `Card XP`,
  'inv.kind.boss': `Rare material`,
  'inv.kind.mod': `Mod material`,
  'inv.kind.key': `Banner pull`,
  'inv.owned': `{n} owned`,
  'inv.dropsFrom': `Drops from {list}`,
  'inv.whereMore': `Where to get more {name}`,
  'inv.made': `Made {n} {name}`,
  'inv.got': `Got {n} {name}`,
  'inv.youHave': `You have {n}`,
  'inv.howManyMake': `How many {name} to make`,
  'inv.howManyBreak': `How many {name} to break down`,
  'inv.make': `Make {n}`,
  'inv.break': `Break {n}`,
  'inv.upgradeTitle': `Upgrade {what}`,
  'inv.insigniaRule': `3 Insignia of a tier make 1 of the next tier, for the same class, plus a small Stars fee.`,
  'inv.replayRule': `Replays combine by their card XP (5 Bronze make a Silver, 4 Silver make a Gold), free.`,
  'inv.breakRule': `Break down: 1 Insignia makes 2 of the tier below, free (handy when an ascension needs a lower tier).`,
  'inv.replays': `Replays`,
  'inv.hint.replays': `Card XP. Feed them on a card’s Level tab.`,
  'inv.hint.insignia': `Ascend cards of the same class.`,
  'inv.hint.trophy': `Ascension 3 and up.`,
  'inv.hint.fragments': `Enhance mods.`,
  'inv.hint.fuel': `+60 {stamina} each.`,
  'inv.hint.bannerKey': `One banner pull each. Bought with Stars on the Banner page.`,
  'inv.upgradeTip': `Turn lower tiers into higher ones`,
  'inv.farmOn': `Farm them on {map}.`,
  'inv.tier': `Tier {n}`,
  'inv.jumpTo': `Jump to`,
  'inv.refill': `Refill`,
  'inv.earn': `Earn`,
  'inv.currency': `Currency`,
  'inv.starsFor': `Stamina refills, mod enhancing, ascension and the market.`,
  'inv.starsFrom': `From quests, Galaxy Collapse, the Tower and quickselling`,
  'inv.subtitle': `Your materials, what they're for and where to farm more.`,
  'inv.goToMaps': `Go to Maps`,
  'inv.enhance': `Enhance`,
  'maps.ready': `Ready`,
  'maps.tough': `Tough`,
  'maps.tooHard': `Too hard`,
  'maps.bestClearN': `Best clear: {n} of 3 stars`,
  'maps.notClearedYet': `Not cleared yet`,
  'maps.notCleared': `Not cleared`,
  'maps.accountLevel': `Account Level`,
  'maps.maxLevel': `Max level`,
  'maps.featureAt': `{feature} at {lv}`,
  'maps.plusOne': `+1 in {time}`,
  'maps.full': `Full`,
  'maps.perWin': `Stamina per win`,
  'maps.al': `AL {n}`,
  'maps.opensAt': `Opens at Account Level {n}. You're Level {lv}.`,
  'maps.tierOpensAt': `{tier} opens at Account Level {n} or Tower floor {floor}. You're Level {lv}, floor {at}.`,
  'maps.pickTeam': `Pick a team on the <link>Team page</link> first.`,
  'maps.needStamina': `You need {n} Stamina.`,
  'maps.runsCost_one': `{count} run: {cost} Stamina. Fights only spend it when you win.`,
  'maps.runsCost_other': `{count} runs: {cost} Stamina. Fights only spend it when you win.`,
  'maps.enemiesList': `Enemies: {list}`,
  'maps.difficulty': `{name} difficulty`,
  'maps.tierNeeds': `{tier}: Account Level {n} or Tower floor {floor}`,
  'maps.enemies': `Enemies`,
  'maps.recommended': `Recommended`,
  'maps.teamLevelTip': `Your team's average level against the recommended level`,
  'maps.bestClear': `Best clear`,
  'maps.dropsAWin': `Drops a win`,
  'maps.starting': `Starting…`,
  'maps.fight': `Fight`,
  'maps.runs': `Runs`,
  'maps.repeat': `Repeat`,
  'maps.repeatTip': `Plays the fights on Auto, one after another, until a loss or you run out of Stamina`,
  'maps.lastRun': `last run`,
  'maps.runsLeft': `{n} runs left`,
  'maps.costOnWin': `{n} Stamina, spent only on a win`,
  'maps.cleared': `Cleared`,
  'maps.starsOf': `{n} of 3 stars`,
  'maps.drops': `Drops`,
  'maps.items_one': `{count} item`,
  'maps.items_other': `{count} items`,
  'maps.clearedTitle': `{name} · {tier} cleared`,
  'maps.noSpent': `No Stamina spent. Level up, ascend, or try an easier difficulty.`,
  'maps.stop': `Stop`,
  'maps.back': `Back to Maps`,
  'maps.again': `Again`,
  'maps.overtime': `Overtime`,
  'maps.overtimeLeft': `Overtime · {n} left`,
  'maps.overtimeHint': `Out of Stamina: Overtime fights cost nothing and pay {pct}% of the drops, with no Stars. {left} of {daily} left today.`,
  'maps.overtimeDone': `Out of Stamina, and today's {daily} Overtime wins are used up. More at 00:00 UTC.`,
  'maps.overtimeInfo': `Overtime: no Stamina, {pct}% of the drops`,
  'maps.overtimeLost': `Losses don't use up Overtime. Level up, ascend, or try an easier difficulty.`,
  'maps.overtimeUnpaid': `Today's Overtime wins ran out, so this one paid nothing.`,
  'maps.overtimeTip': `Fights with no Stamina for {pct}% of the drops. No Stars or Account XP, and they don't count for Map quests.`,
  'maps.overtimeStatus': `Overtime {left}/{daily}`,
  'maps.map': `Map`,
  'maps.couldNotStart': `Could not start that fight`,
  'maps.subtitle': `Spend Stamina for card XP, Stars, materials and mods. It's only spent when you win.`,
  'maps.couldNotLoad': `Couldn't load the Maps.`,
  'maps.wonFights_one': `{count} won fight.`,
  'maps.wonFights_other': `{count} won fights.`,
  'maps.staminaLeft': `Stamina left: {n}/{cap}.`,
  'stat.healing': `Healing`,
  'mods.inTrade': `Offered in a pending trade`,
  'mods.listed': `Listed on the market`,
  'mods.type': `Mod type`,
  'mods.clear': `Clear`,
  'mods.autofill': `Auto-fill`,
  'mods.autofillTip': `Spare 1–3★ mods at +0 first, the smallest first, then Mod Fragments, up to the max level.`,
  'mods.filters': `Filters`,
  'mods.equipCombo': `Equip {mods} on one card.`,
  'mods.replacesPairs': `Replaces the pairs inside it.`,
  'mods.combo': `Combo`,
  'mods.comboLabel': `{name} combo`,
  'mods.combos': `Combos`,
  'mods.withFirst': `With {mod} first`,
  'mods.combosSub': `Mods that power up together on one card`,
  'mods.up': `Up`,
  'mods.rolling': `Rolling`,
  'mods.lockedToast': `Mod locked`,
  'mods.unlockedToast': `Mod unlocked`,
  'mods.salvagedFor': `Salvaged for {n} {frags}`,
  'mods.feedTitle': `Feed these mods?`,
  'mods.precious_one': `{count} of them is 4★ or better, or already enhanced. Fodder is used up.`,
  'mods.precious_other': `{count} of them are 4★ or better, or already enhanced. Fodder is used up.`,
  'mods.wasteXp': `{n} XP goes past +{cap} and is lost.`,
  'mods.feedThem': `Feed them`,
  'mods.salvageOne': `Salvage this mod?`,
  'mods.salvageFor': `Salvage for {n}`,
  'mods.alwaysOn': `{mod} · always on while equipped`,
  'mods.bonus': `Bonus`,
  'mods.slot': `Slot {n}`,
  'mods.notOnCard': `Not on a card. Equip it from a card's Mods tab.`,
  'mods.salvageTip': `Salvage for {n} {frags}`,
  'mods.unlockFirst': `Unlock and unequip it first`,
  'mods.salvage': `Salvage`,
  'mods.keepEnhancing': `Keep enhancing`,
  'mods.maxedAt': `Maxed at +{cap}`,
  'mods.maxedText': `Feed it to another mod or salvage it for {n} {frags}.`,
  'mods.rolls': `Rolls`,
  'mods.rollsAt': `Substat rolls at {list}`,
  'mods.cost': `Cost`,
  'mods.wasteFodder': `{n} fodder XP goes past +{cap} and is lost.`,
  'mods.needStars': `You need {n} more Stars.`,
  'mods.xpPerStar': `{n} XP per Star. Fodder XP is used first.`,
  'mods.fragments': `Fragments`,
  'mods.fragsToUse': `Mod Fragments to use`,
  'mods.toLevel': `To +{n}`,
  'mods.max': `Max`,
  'mods.none': `None`,
  'mods.getMore': `Get more from <link>Remote Control or Everything will freeze</link>, or by salvaging.`,
  'mods.feedMods': `Feed mods`,
  'mods.fodderRarity': `Fodder rarity`,
  'mods.noSpare': `No spare mods. Locked and equipped ones aren't listed.`,
  'mods.enhancing': `Enhancing…`,
  'mods.enhanceTo': `Enhance to +{n}`,
  'mods.pickFeed': `Pick what to feed`,
  'mods.lockedN_one': `Locked {count} mod`,
  'mods.lockedN_other': `Locked {count} mods`,
  'mods.unlockedN_one': `Unlocked {count} mod`,
  'mods.unlockedN_other': `Unlocked {count} mods`,
  'mods.salvagedN_one': `Salvaged {count} mod for {n} {frags}`,
  'mods.salvagedN_other': `Salvaged {count} mods for {n} {frags}`,
  'mods.salvageN_one': `Salvage {count} mod?`,
  'mods.salvageN_other': `Salvage {count} mods?`,
  'mods.highN_one': `{count} of them is 4★ or better.`,
  'mods.highN_other': `{count} of them are 4★ or better.`,
  'mods.skipped': `{n} locked, equipped or listed stay.`,
  'mods.count': `<b>{n}</b> mods`,
  'mods.any': `Any`,
  'mods.rarest': `Rarest`,
  'mods.newest': `Newest`,
  'mods.main': `Main`,
  'mods.substat': `Substat`,
  'mods.anySubstat': `Any substat`,
  'mods.clearFilters': `Clear filters`,
  'mods.equipped': `Equipped`,
  'mods.free': `Free`,
  'mods.unlocked': `Unlocked`,
  'mods.subtitle': `Three per card, all different. Enhance them with Mod Fragments or other mods.`,
  'mods.select': `Select`,
  'mods.noMatch': `No mods match these filters.`,
  'mods.noMods': `No mods yet. Remote Control, Everything will freeze and Tower bosses drop them.`,
  'mods.goTo': `Go to {map}`,
  'mods.tapSelect': `Tap mods to select them`,
  'mods.quickSalvageDots': `Quick salvage…`,
  'mods.quickSalvageTip': `Salvage mods in bulk: pick a rarity and a level`,
  'mods.quickSalvageTitle': `Quick salvage`,
  'mods.qsUnlevelled': `+0 only`,
  'mods.qsUpTo': `Up to +{n}`,
  'mods.qsNote': `Salvages every mod from 1★ up to {rarity}★, up to that level, into {frags}. 5★ mods, locked mods, mods on a card and listed mods always stay.`,
  'mods.qsCap': `At most {cap} at a time: run it again for the rest.`,
  'mods.qsWarn': `Press again to salvage them. This can't be undone. Lock anything you want to keep first.`,
  'mods.yesSalvage': `Yes, salvage them`,
  'mods.nothingToSalvage': `Nothing to salvage`,
  'mods.tapEnhance': `Tap a mod to enhance it`,
  'mods.selectedMods': `Selected mods`,
  'mods.selected': `<b>{n}</b> selected`,
  'mods.unselectPage': `Unselect page`,
  'mods.selectPage': `Select page`,
  'market.group.consumables': `Consumables`,
  'market.group.insignia': `Class Insignia`,
  'market.group.boss': `Boss materials`,
  'market.group.mod': `Mod materials`,
  'market.now': `now`,
  'market.m': `{n}m`,
  'market.h': `{n}h`,
  'market.d': `{n}d`,
  'market.gate.title': `Trading is an online feature`,
  'market.gate.login': `Log in to trade`,
  'market.gate.loginText': `Buying, selling and trading need an account with a linked osu! profile.`,
  'market.gate.link': `Link osu! to trade`,
  'market.gate.linkText': `The market and trades need a linked osu! account. Solo play works without it.`,
  'market.gate.frozenText': `An admin is looking at recent trades or sales. Online features are paused until then. Questions? Use Feedback & Support.`,
  'market.aCard': `a card`,
  'market.aMod': `a mod`,
  'market.items': `items`,
  'market.item': `Item`,
  'market.each': `★{price} each`,
  'market.unlist': `Unlist`,
  'market.buy': `Buy`,
  'market.notEnough': `Not enough Stars`,
  'market.yours': `Yours`,
  'market.howManyBuy': `How many`,
  'market.ofListed': `of {n} listed`,
  'market.boundNote': `Your welcome gift's Fuel is bound to your account: you can use it, but not sell or trade it.`,
  'market.expiresIn': `closes in {t}`,
  'market.listingRule': `Listings close after {days} days and what you listed comes back to you. Up to {max} listings at once.`,
  'market.from': `From {name}`,
  'market.fullyBuilt': `Comes fully built: level, ascension, eidolons and its mods.`,
  'market.bought': `Bought {what}`,
  'market.removed': `Listing removed`,
  'market.buyCard': `Buy this card?`,
  'market.buyMod': `Buy this mod?`,
  'market.buyThese': `Buy these?`,
  'market.buyFor': `Buy for ★ {price}`,
  'market.nCards_one': `<b>{n}</b> card`,
  'market.nCards_other': `<b>{n}</b> cards`,
  'market.nMods_one': `<b>{n}</b> mod`,
  'market.nMods_other': `<b>{n}</b> mods`,
  'market.nListings_one': `<b>{n}</b> listing`,
  'market.nListings_other': `<b>{n}</b> listings`,
  'market.sellSomething': `Sell something`,
  'market.itemsTab': `Items`,
  'market.yourListings': `Your listings`,
  'market.searchPlayers': `Search players…`,
  'market.allItems': `All items`,
  'market.cheapest': `Cheapest`,
  'market.owned': `Players I own`,
  'market.ownedTip': `Only players you already have a card of: copies to feed for eidolons. A banner card only matches the same banner card.`,
  'market.missing': `Players I don't own`,
  'market.missingTip': `Only players you don't have a card of yet. A banner card counts apart from its player's normal cards.`,
  'market.priciest': `Priciest`,
  'market.subtitle': `Buy and sell cards, mods and items. Sellers pay a {fee} fee.`,
  'market.frozen': `Account frozen`,
  'market.linkToSell': `Link osu! to sell`,
  'market.logInToSell': `Log in to sell`,
  'market.sell': `Sell`,
  'market.noneListed': `You haven't listed anything.`,
  'market.nothingMatches': `Nothing matches.`,
  'market.nothingYet': `Nothing listed yet.`,
  'market.youGet': `You get <m></m> after the {fee}% fee. Unlist any time.`,
  'market.pickAndPrice': `Pick something and set a price.`,
  'market.listFor': `List for ★ {price}`,
  'market.list': `List`,
  'market.price': `Price (Stars)`,
  'market.card': `Card`,
  'market.cardListed': `{name} is on the market`,
  'market.searchYourCards': `Search your cards…`,
  'market.lockedCantPick': `Locked and listed cards can't be picked.`,
  'market.noCardsYet': `No cards yet.`,
  'market.noCardPicked': `No card picked`,
  'market.modListed': `Mod listed on the market`,
  'market.freeModsOnly': `Free, unlocked mods only. Mods on a card sell with the card.`,
  'market.noMods': `No mods to sell.`,
  'market.noModsType': `No mods to sell of that type.`,
  'market.noModPicked': `No mod picked`,
  'market.itemsListed': `{n}× {name} listed`,
  'market.itemsLeave': `Listed items leave your inventory until they sell. Unlist to get them back.`,
  'market.noItems': `No items yet. Run Maps to get some.`,
  'market.roughGuide': `A rough guide, not a price`,
  'market.noItemPicked': `No item picked`,
  'market.howMany': `How many`,
  'market.howManySell': `How many to sell`,
  'market.eachPrice': `Each (Stars)`,
  'market.sellTitle': `Sell on the market`,
  'market.whatToSell': `What to sell`,
  'market.aCardTab': `A card`,
  'market.aModTab': `A mod`,
  'trade.pickBelow': `Pick below`,
  'trade.nothing': `Nothing`,
  'trade.removeMod': `Remove {mod} mod`,
  'trade.youGive': `You give`,
  'trade.youGet': `You get`,
  'trade.youGetFrom': `You get from {name}`,
  'trade.status.pending': `Pending`,
  'trade.status.accepted': `Done`,
  'trade.status.declined': `Declined`,
  'trade.status.cancelled': `Cancelled`,
  'trade.status.invalidated': `Void`,
  'trade.incoming': `Incoming`,
  'trade.sent': `Sent`,
  'trade.history': `History`,
  'trade.new': `New trade`,
  'trade.accepted': `Trade accepted`,
  'trade.declined': `Trade declined`,
  'trade.cancelled': `Offer cancelled`,
  'trade.acceptTitle': `Accept {name}'s trade?`,
  'trade.acceptTrade': `Accept trade`,
  'trade.from': `From`,
  'trade.to': `To`,
  'trade.voidTip': `Something in it changed hands first`,
  'trade.frozen': `Your account is frozen.`,
  'trade.linkToAccept': `Link osu! to accept.`,
  'trade.cancelOffer': `Cancel offer`,
  'trade.empty.incoming': `No offers waiting for you.`,
  'trade.empty.outgoing': `You haven't sent any offers.`,
  'trade.empty.history': `No finished trades yet.`,
  'trade.subtitle': `Swap cards, mods, items and Stars with other players.`,
  'trade.class': `Class`,
  'trade.noCards': `No cards.`,
  'trade.theirMods': `Their loose mods (not on a card, not listed).`,
  'trade.looseOnly': `Loose mods only: mods on a card go with the card.`,
  'trade.noLoose': `No loose mods.`,
  'trade.noLooseType': `No loose mods of that type.`,
  'trade.noItems': `You have no items yet.`,
  'trade.cantSeeItems': `You can't see their items: they need to have these when they accept.`,
  'trade.toOffer': `{name} to offer`,
  'trade.toAskFor': `{name} to ask for`,
  'trade.whatGive': `What to give`,
  'trade.whatAsk': `What to ask for`,
  'trade.offerSent': `Trade offer sent`,
  'trade.sendTitle': `Send this offer to {name}?`,
  'trade.sendOffer': `Send offer`,
  'trade.thatsYou': `That's you`,
  'trade.who': `Who do you want to trade with?`,
  'trade.looking': `Looking…`,
  'trade.noUser': `No user by that name`,
  'trade.ready': `Ready to trade`,
  'trade.with': `Trade with`,
  'trade.withLabel': `Trade with (username)`,
  'trade.newSubtitle': `Pick what you give and what you want back.`,
  'trade.enterName.cards': `Enter a username to see their cards.`,
  'trade.enterName.mods': `Enter a username to see their mods.`,
  'trade.enterName.items': `Enter a username to see their items.`,
  'trade.addMessage': `Add a message (optional)`,
  'trade.nForN': `{a} for {b}`,
  'trade.youHave': `You have ★{n}`,
  'trade.pickPartner': `Pick a partner`,
  'trade.addSomething': `Add something`,
  'trade.cancelAnyTime': `Cancel any time`,
  'trade.review': `Review and send`,
  'trade.status.countered': `Countered`,
  'trade.counter': `Counter`,
  'trade.counterTip': `Answer with your own offer`,
  'trade.counteroffer': `Counteroffer`,
  'trade.seeOriginal': `See the offer it answers`,
  'trade.seeYourCounter': `See your counteroffer`,
  'trade.seeTheirCounter': `See their counteroffer`,
  'trade.counterTitle': `Counteroffer`,
  'trade.counterSubtitle': `Change {name}'s offer, then send it back.`,
  'trade.counterReady': `Their offer, the other way round`,
  'trade.counterCloses': `Sending closes their offer`,
  'trade.counterSent': `Counteroffer sent`,
  'trade.sendCounterTitle': `Send this counteroffer to {name}?`,
  'trade.sendCounter': `Send counteroffer`,
  'trade.counterNote': `{name}'s offer closes and everything in it goes back to them. They get this as a new offer.`,
  'trade.counterGone': `That offer is no longer open.`,
  'coll.rarest': `Rarest`,
  'coll.lowestNo': `Lowest #`,
  'coll.bp': `Battle Power`,
  'coll.popular': `Most popular`,
  'coll.skill': `Skill`,
  'coll.anySkill': `Any Skill`,
  'coll.anyPassive': `Any passive`,
  'coll.copies': `Copies`,
  'coll.dupes': `Duplicates`,
  'coll.show': `Show`,
  'coll.unlocked': `Unlocked`,
  'coll.onMarket': `On the Market`,
  'coll.notListed': `Not listed`,
  'coll.searchByPlayer': `Search cards by player`,
  'coll.nCards_one': `<b>{n}</b> card`,
  'coll.nCards_other': `<b>{n}</b> cards`,
  'coll.clearFilter': `Clear filter`,
  'coll.progressTip': `Different players you own a card of, out of everyone in the pool (open the Dex)`,
  'coll.players': `<b>{n}</b> / {pool} players`,
  'coll.eidolonTip': `You have a spare copy: feed it for an eidolon`,
  'coll.eidolonLabel': `Raise {name}'s eidolon with a spare copy`,
  'coll.nothingToSell': `Nothing to quicksell`,
  'coll.quicksellTitle': `Quicksell cards`,
  'coll.quicksellN_one': `Quicksell {count} card`,
  'coll.quicksellN_other': `Quicksell {count} cards`,
  'coll.yesDestroy': `Yes, destroy them`,
  'coll.upTo': `Up to`,
  'coll.builtUp': `Built up`,
  'coll.godRolls': `God rolls`,
  'coll.keep': `Keep them`,
  'coll.sellToo': `Sell them too`,
  'coll.qsNote': `Sells every card from Common up to {rarity}. Built up means levelled, ascended, given eidolons or mods (mods come back to you). Locked cards, listed cards and your team are always kept.`,
  'coll.qsWarn': `This destroys {n} cards. It can't be undone. Lock anything you want to keep first.`,
  'coll.qsWarnRare': `This destroys {n} cards, including {rare} Rare or better. It can't be undone. Lock anything you want to keep first.`,
  'coll.lockedN_one': `Locked {count} card`,
  'coll.lockedN_other': `Locked {count} cards`,
  'coll.subtitle': `Can you collect them all?`,
  'coll.quicksellTip': `Sell cards in bulk: pick a rarity and what to keep`,
  'coll.quicksellDots': `Quicksell…`,
  'coll.quicksell': `Quicksell`,
  'coll.noneYet': `No cards here yet.`,
  'coll.openAPack': `Open a pack`,
  'coll.tapSelect': `Tap cards to select`,
  'coll.selectedCards': `Selected cards`,
  'coll.selected': `selected`,
  'coll.confirmTitle_one': `Quicksell {count} card?`,
  'coll.confirmTitle_other': `Quicksell {count} cards?`,
  'coll.confirmBody': `These cards are destroyed and you get {value} Stars. Listed and locked cards can't be selected.`,
  'coll.quicksellFor': `Quicksell for {value}`,
  'coll.noCardsYet': `No cards yet`,
  'coll.pinned': `Pinned`,
  'coll.showcaseOf': `{name}'s showcase`,
  'coll.cards': `cards`,
  'coll.rarestCard': `Rarest card: {name}`,
  'coll.best': `best`,
  'coll.public': `Public collection`,
  'prof.edit': `Edit profile`,
  'prof.save': `Save`,
  'prof.cancel': `Cancel`,
  'prof.saved': `Profile saved`,
  'prof.about': `About me`,
  'prof.tab.overview': `Overview`,
  'prof.statsShown': `Stats shown`,
  'prof.showcase': `Showcase`,
  'prof.pulls': `Recent big pulls`,
  'prof.aboutPlaceholder': `Say hi! Your favourite players, what you collect, your osu! story…`,
  'prof.aboutEmpty': `Nothing here yet. Use Edit profile to write an About me.`,
  'prof.pullsEmpty': `Your Mythic and Divine pulls will show up here.`,
  'prof.pinHint': `Pin up to 5 cards from their card page. Until then, your most valuable cards fill the spots.`,
  'prof.chars': `{n}/{max}`,
  'prof.joined': `Joined {date}`,
  'prof.onlineNow': `Online now`,
  'prof.seen': `Seen {when}`,
  'prof.lastSeen': `Last seen`,
  'prof.stat.cards': `Cards`,
  'prof.stat.dex': `Dex`,
  'prof.stat.dexOf': `{caught} of {total}`,
  'prof.stat.tower': `Tower floor`,
  'prof.stat.level': `Account Level`,
  'prof.stat.team': `Team power`,
  'prof.stat.noTeam': `No team yet`,
  'prof.stat.weekly': `Weekly best`,
  'prof.stat.weeklyThis': `This week: round {round}`,
  'prof.stat.pvp': `PvP rating`,
  'prof.stat.pvpRecord': `{wins}W {losses}L`,
  'prof.stat.unranked': `No matches yet`,
  'prof.stat.maps': `Map stars`,
  'prof.stat.mapsCleared': `{n} cleared`,
  'prof.stat.casino': `Casino VIP`,
  'prof.banner': `Change banner`,
  'prof.bannerTitle': `Pick a banner`,
  'prof.bannerHint': `The cover of any player whose card you own, or your own osu! cover.`,
  'prof.bannerOsu': `My osu! cover`,
  'prof.accent': `Accent`,
  'prof.accentAuto': `Automatic: the colour of your rarest card`,
  'prof.badges': `Badges`,
  'prof.hide': `Hide`,
  'prof.show': `Show`,
  'prof.moveUp': `Move up`,
  'prof.moveDown': `Move down`,
  'prof.locked': `Staff have locked your profile until {when}.`,
  'prof.lockedForever': `Staff have locked your profile.`,
  'prof.report': `Report`,
  'prof.reportTitle': `Report {name}'s profile`,
  'prof.reportTip': `For an About me or banner that breaks the rules. A mod will take a look.`,
  'prof.reportReason': `What's wrong with it?`,
  'prof.reportSend': `Send report`,
  'prof.reported': `Thanks! A mod will take a look.`,
  'prof.clear': `Clear profile`,
  'prof.clearTitle': `Clear {name}'s profile`,
  'prof.clearBio': `Clear their About me`,
  'prof.clearBanner': `Reset their banner`,
  'prof.lockFor': `Lock editing`,
  'prof.lockNone': `No lock`,
  'prof.lock30d': `30 days`,
  'prof.clearReason': `Reason (they'll see it)`,
  'prof.clearDo': `Clear`,
  'prof.clearedToast': `Profile cleared`,
  'prof.cosmetic.tester': `Tester`,
  'prof.cosmetic.game_breaker': `Game Breaker`,
  'prof.cosmeticTip.tester': `Helped test the game.`,
  'prof.cosmeticTip.game_breaker': `#{n} · found and reported a game-breaking bug.`,
  'prof.badgeGiven': `Given {date}`,
  'prof.badgeMonths_one': `{count} month`,
  'prof.badgeMonths_other': `{count} months`,
  'backer.name': `Backer`,
  'backer.namePlural': `Backers`,
  'backer.title': `Become a {backer}`,
  'backer.subtitle': `Help pay for the server: {price} a month on Ko-fi, thanked with cosmetic flair`,
  'backer.badgeTip_one': `{backer} · {count} month`,
  'backer.badgeTip_other': `{backer} · {count} months`,
  'backer.tabJoin': `Join`,
  'backer.tabAbout': `Why`,
  'backer.tabThanks': `Thanks`,
  'backer.howTitle': `How to join`,
  'backer.openKofi': `Open Ko-fi`,
  'backer.noKofi': `Ko-fi isn't set up yet: check back soon.`,
  'backer.stepJoin': `Join the <b>{backer}</b> membership on <kofi>Ko-fi</kofi> (or pay ahead below).`,
  'backer.stepName': `Use your osu! username as your name on Ko-fi: <name>{username}</name>`,
  'backer.stepNameOut': `Use your osu! username as your name on Ko-fi.`,
  'backer.step3': `Your flair shows within a minute. Renewals from the same Ko-fi email count on their own.`,
  'backer.statusTitle': `Your status`,
  'backer.statusActive_one': `{backer} for {count} month, until {date}`,
  'backer.statusActive_other': `{backer} for {count} months, until {date}`,
  'backer.statusLapsed': `Your {backer} time ended on {date}.`,
  'backer.statusNone': `Not a {backer} yet.`,
  'backer.linkedEmails': `Linked Ko-fi email: {emails}`,
  'backer.listMe': `Show me on the Thanks list`,
  'backer.missing': `Paid, but no flair after a few minutes? Send us feedback with your Ko-fi name and we'll link it by hand.`,
  'backer.costsTitle': `Where the money goes`,
  'backer.costsBody': `osu! gacha runs on one rented server, and at peak hours it's working flat out. {backers} pay for that server, the database and its backups, and a bigger server once there's enough. Nothing else.`,
  'backer.getTitle': `What you get`,
  'backer.getName': `A coloured name and a {backer} badge in chat, on your profile, in your guild and on leaderboards`,
  'backer.getLevels': `The badge changes at 1, 6 and 12 months`,
  'backer.getProfile': `Your own profile colour, and a frame around your showcase`,
  'backer.getThanks': `A spot on the Thanks list, if you want one`,
  'backer.level': `{n}+ months`,
  'backer.sampleName': `YourName`,
  'backer.nameColour': `Name colour`,
  'backer.notTitle': `What you don't get`,
  'backer.notBody': `No Stars, packs, pity, Stamina, rewards, lower fees, shorter timers or extra loadouts. Nothing random and nothing to trade. Backing never changes how the game plays.`,
  'backer.thanksTitle': `Thanks to our {backers}`,
  'backer.thanksEmpty': `Nobody on the list yet.`,
  'backer.termsTitle': `The small print`,
  'backer.terms': `{backer} is a monthly Ko-fi membership. Cancel it on Ko-fi any time: your flair stays until the time you paid for runs out. Refunds go through Ko-fi, and a refund or chargeback ends the flair. It's cosmetic only and gives no advantage in the game.`,
  'backer.privacy': `Privacy: to link payments to your account we keep your Ko-fi email, the name and message you sent, and the payment's ids. Ko-fi handles the payment itself; we never see card details.`,
  'backer.profileStyle': `{backer} style`,
  'backer.accentPick': `Pick a colour`,
  'backer.accentOwn': `Your colour`,
  'backer.accentClear': `Remove`,
  'backer.frame': `Showcase frame`,
  'backer.accentTooDark': `Too dark to read: pick a lighter colour`,
  'backer.profileHint': `{backers} can pick their own colour and a showcase frame.`,
  'backer.heroTitle': `Keep osu! gacha online`,
  'backer.heroBody': `The game is free to play. {backers} chip in for the server and get some flair as thanks.`,
  'backer.fundingTitle': `Server costs`,
  'backer.fundingRaised': `{raised} of {goal}`,
  'backer.fundingLeft': `{left} to go this month`,
  'backer.fundingCovered': `Covered this month: thank you!`,
  'backer.activeCount_one': `{count} {backer}`,
  'backer.activeCount_other': `{count} {backers}`,
  'backer.perMonth': `{price}/month`,
  'backer.tierBackerPerks': `Badge, coloured name, profile colour and showcase frame`,
  'backer.joinTier': `Join`,
  'backer.aheadTitle': `Pay for several months at once`,
  'backer.months_one': `{count} month`,
  'backer.months_other': `{count} months`,
  'backer.aheadBody': `Send {amount} as a one-off payment on Ko-fi, with your osu! username as your name.`,
  'backer.previewTitle': `How it looks`,
  'backer.sample1': `just pulled a divine!!`,
  'backer.sample2': `omg who?`,
  'backer.sample3': `cookiezi!`,
  'backer.sample4': `asked`,
  'backer.sample5': `?XDDDDDDDDDDDDDD`,
  'coll.profileDescription': `{name}'s osu! gacha card collection.`,
  'coll.proposeTrade': `Propose trade`,
  'coll.rarityScore': `Rarity score`,
  'coll.pts': `{n} pts`,
  'coll.whoHas': `Who has`,
  'coll.backToPlayer': `Back to the player`,
  'coll.bestCopy': `Best copy: {rarity} · worth {value} Stars`,
  'coll.nobodyHas': `Nobody has one yet`,
  'coll.pulledTotal': `{n} pulled in total`,
  'coll.notPullable': `Not pullable`,
  'coll.unranked': `Unranked`,
  'coll.score': `Score`,
  'coll.seeWhoHas': `See who has {name}'s cards`,
  'coll.pulledArrow': `Pulled ›`,
  'coll.poolTitle': `Player pool`,
  'coll.poolSubtitle': `Everyone you can pull, and how rare each one is.`,
  'coll.searchPool': `Search the player pool`,
  'coll.nPlayers_one': `<b>{n}</b> player`,
  'coll.nPlayers_other': `<b>{n}</b> players`,
  'coll.country': `Country`,
  'coll.anyCountry': `Any country`,
  'coll.noPlayers': `No players match.`,
  'pvp.draw': `Draw`,
  'pvp.win': `You win!`,
  'pvp.winForfeit': `You win: they forfeited`,
  'pvp.lost': `You lost`,
  'pvp.lostForfeit': `You lost: forfeited`,
  'pvp.forfeitTitle': `Forfeit this match?`,
  'pvp.forfeitBody': `You lose the match and the rating that goes with it.`,
  'pvp.you': `You`,
  'pvp.ghostOf': `{name}'s ghost`,
  'pvp.yourMove': `Your move · {s}s`,
  'pvp.theirMove': `Their move · {s}s`,
  'pvp.over': `Match over`,
  'pvp.timeouts': `Timeouts: you {you}/{max} · them {them}/{max}`,
  'pvp.rating': `{n} rating`,
  'pvp.back': `Back to PvP`,
  'pvp.ghostChoosing': `The ghost is choosing…`,
  'pvp.choosing': `{name} is choosing…`,
  'pvp.claimed': `Claimed {n} Stars`,
  'pvp.claimedPacks': `Claimed {n} Stars and {packs}`,
  'pvp.challengeSent': `Challenge sent. It lasts 2 minutes.`,
  'pvp.yourRating': `Your rating`,
  'pvp.record': `{w}W · {l}L`,
  'pvp.rankWeek': `#{n} this week`,
  'pvp.defences_one': `Your ghost won {count} defence today:`,
  'pvp.defences_other': `Your ghost won {count} defences today:`,
  'pvp.found': `Match found!`,
  'pvp.looking': `Looking for an opponent…`,
  'pvp.givesUp': `gives up in {t}`,
  'pvp.keepPlaying': `Keep playing elsewhere: when a match is found you get a sound and 15 seconds to accept it, on any page.`,
  'pvp.nobody': `Nobody around? Fight a real player's team, played by the AI, for half the Stars and rating.`,
  'pvp.live': `Live 1v1 with your team`,
  'pvp.rules': `25 seconds a move; three timeouts forfeits.`,
  'pvp.paidToday': `Paid matches today: {n}/{max}`,
  'pvp.find': `Find match`,
  'pvp.pickTeam': `Pick a team first`,
  'pvp.challengeTitle': `Challenge a player`,
  'pvp.usernamePh': `username`,
  'pvp.usernameLabel': `Username to challenge`,
  'pvp.challenge': `Challenge`,
  'pvp.challengeNote': `They get a notification and 2 minutes to accept.`,
  'pvp.challengedYou': `<b>{name}</b> challenged you`,
  'pvp.waitingFor': `Waiting for <b>{name}</b>`,
  'pvp.lastWeek': `Last week you finished <b>#{n}</b>:`,
  'pvp.andAPack': `and a pack`,
  'pvp.resets': `Resets {when}`,
  'pvp.noMatches': `No matches yet this week. Be the first.`,
  'pvp.played': `{n} played`,
  'pvp.rankedAfter': `Ranked once you've played {n} matches this week.`,
  'pvp.weeklyRewards': `Weekly rewards`,
  'pvp.paidWhen': `Paid when the week ends (Monday 00:00 UTC); claim them here.`,
  'pvp.everyMatch': `Every match`,
  'pvp.wdl': `Win · draw · loss`,
  'pvp.wdlStars': `{w} · {d} · {l} Stars`,
  'pvp.dailyNote': `For your first {n} matches a day (UTC), win or lose. Ghost matches pay half; friend challenges and forfeits don't pay.`,
  'pvp.subtitle': `Live 1v1 against other players' teams, with a weekly ladder.`,
  'pvp.needsLink': `PvP is an online feature: link your osu! account to play other people.`,
  'pvp.opensAt': `PvP opens at Account Level {n}`,
  'pvp.youreLevel': `You're Level {n}. Spending Stamina on Maps and clearing Tower floors level you up.`,
  'guide.tab.battle': `Battle`,
  'guide.tab.passives': `Passives`,
  'guide.tab.bonuses': `Team bonuses`,
  'guide.tab.growth': `Growth`,
  'guide.nOf': `{n} of {of}`,
  'guide.subtitle': `How battles work: classes, Skill Points, Guard, team bonuses and mods.`,
  'guide.sections': `Sections`,
  'guide.battle.title': `A battle in four beats`,
  'guide.battle.lead': `Four cards a side. Knock out the other team to win.`,
  'guide.order': `Faster cards act first and more often. The strip above the field shows who's next.`,
  'guide.basic': `Basic`,
  'guide.basicOrSkill': `Basic or Skill`,
  'guide.basicOrSkillText': `A Basic attack earns a Skill Point. A Skill spends one: it's the card's big move.`,
  'guide.spStart': `Start {start} · max {max}`,
  'guide.sharedSp': `Shared Skill Points`,
  'guide.sharedSpText': `The whole team shares one pool, so decide who gets to use their Skill.`,
  'guide.guardBreak': `Guard and Break`,
  'guide.guardBreakText': `Every hit wears down Guard (a Basic by {basic}). At zero the card is Broken: its turn is pushed back {delay}% and it takes {taken}% more damage until it recovers.`,
  'guide.tip.passives': `<b>Passives</b> work by themselves.`,
  'guide.tip.statuses': `<b>Statuses</b> (Exposed, Weakened, Slowed, Taunt…) show under each card; hover them for details.`,
  'guide.tip.target': `<b>Target the DPS first</b>, then break the Tank.`,
  'guide.classesLead': `Every osu! player has one class.`,
  'guide.passivesLead': `Always on. Hover one to see what it does and what it pairs with.`,
  'guide.godrollsLead': `One passive per Skill fits it best. A card with that pair gets a gold border.`,
  'guide.godrollsOf': `{cls} god rolls`,
  'guide.modsTitle': `Mods and combos`,
  'guide.modsLead': `Three slots per card. Each type has its own bonus; the right pairs and trios unlock combos.`,
  'guide.for': `For {who}`,
  'guide.growthTitle': `Growing a card`,
  'guide.growthLead': `Levels, ascensions and duplicates make a card stronger.`,
  'guide.growth.level': `Feed it XP (Replays from Maps, or other cards). Every level adds HP, ATK and DEF, and a little SPD.`,
  'guide.growth.ascend': `Ascending raises the level cap. It costs Insignia (from The Big Black and FREEDOM DiVE) and Stars.`,
  'guide.growth.eidolon': `Duplicates of the same player unlock Eidolons: hover a class to see them.`,
  'guide.mapsTitle': `Maps, Stamina and Overtime`,
  'guide.mapsLead': `Maps are where Replays, Insignia, mods and Stars come from.`,
  'guide.maps.staminaHead': `{cap} Stamina`,
  'guide.maps.stamina': `A win costs Stamina; a loss costs nothing. One point comes back every {min} minutes, so a full bar is a day of regen.`,
  'guide.maps.overtimeHead': `Overtime: {pct}% drops`,
  'guide.maps.overtime': `Out of Stamina, you can keep fighting Maps for free: up to {daily} wins a day (new ones at 00:00 UTC), each paying {pct}% of the usual drops. No Stars or Account XP, and they don't count for Map quests. Losses don't use one up.`,
  'guide.maps.tiersHead': `{n} difficulties`,
  'guide.maps.tiers': `Harder difficulties drop more, and better. Each opens with your Account Level or a Tower floor.`,
  'guide.towerTitle': `The Tower`,
  'guide.towerLead': `Floor mods twist the rules, a boss leads every 5th floor, and each floor fields a known kind of team. From floor 60 they are full squads like the ones top players run.`,
  'guide.floorPlus': `Floor {n}+`,
  'about.subtitle': `A free gacha RPG where every card is a real osu! player.`,
  'about.description': `What is osu! gacha? A free gacha RPG where every card is a real osu! player. How packs, rarity, the four classes, teams of {n}, Skill Points and Guard, levelling, ascension, Eidolons, mods, Maps, the {floors}-floor Tower, PvP, trading and the market work.`,
  'about.fullTeam': `One of each class: {bonus}`,
  'about.fullTeamPlain': `One of each class makes the whole team stronger.`,
  'about.spPips': `{n} of {max} Skill Points`,
  'about.step.packs': `Pull packs`,
  'about.step.packsText': `A free pack every minute. Up to {cap} wait for you.`,
  'about.step.players': `Real players`,
  'about.step.playersText': `Every card is an osu! player. Famous players are the rare ones.`,
  'about.step.team': `A team of {n}`,
  'about.step.basicText': `A Basic gives the team a Skill Point, a Skill spends one. Start with {start}, hold {max}.`,
  'about.step.guard': `Break the Guard`,
  'about.step.guardText': `Hits wear Guard down. At zero the card is Broken: slowed and easier to hurt.`,
  'about.broken': `BROKEN`,
  'about.step.grow': `Grow your cards`,
  'about.step.growText': `Level to {n}, ascend, stack duplicates and fit three mods.`,
  'about.step.battle': `Battle everywhere`,
  'about.step.battleText': `{n} Tower floors, Maps for materials, live PvP.`,
  'about.step.tradeText': `Sell on the market or swap with friends. Cards move fully built.`,
  'about.q.what': `What is osu! gacha?`,
  'about.a.what': `A free gacha RPG for the osu! community. Every card is a real osu! player: pull them from packs, build a team of {n} and battle in the <tower>Tower</tower>, on <farm>Maps</farm> and in <pvp>PvP</pvp>.`,
  'about.q.free': `Is it free?`,
  'about.a.free': `Yes. There is no real money anywhere and nothing to buy. You earn Stars from the daily reward, quests, Maps, the Tower, PvP and the market, and spend them on levelling, ascension, mods and Stamina refills.`,
  'about.q.signup': `What happens when I sign up?`,
  'about.a.signup': `You open a Starter Pack (5 cards, at least one Epic or better, one of every class), build your first team and win a short guided battle. Then the rest of the game opens up.`,
  'about.q.cards': `How do I get more cards?`,
  'about.a.cards': `A free pack fills a slot every minute, up to {cap} at a time. Some Tower floors, the PvP ladder and quests pay packs too, and the <market>market</market> sells cards. Every pull counts: duplicates raise Eidolons, the rest is XP.`,
  'about.q.rarity': `How does rarity work?`,
  'about.a.rarity': `Every player has a rarity score that reflects how big a name they are in osu!, as a player, a mapper or both. The score sets the tier, from Common to Divine. Look anyone up in the <players>player pool</players>.`,
  'about.q.classes': `What do the classes do?`,
  'about.a.classes': `<b>Tanks</b> draw attacks and shield the team, <b>DPS</b> deal the damage, <b>Supports</b> heal and <b>CC</b> weaken and delay the enemy. A player's class is always the same.`,
  'about.q.battles': `How do battles work?`,
  'about.a.battles': `{n} cards a side. Faster cards act first. On a turn, use a <b>Basic</b> attack (+1 Skill Point for the team) or the card's <b>Skill</b> (−1; you start with {start} and hold up to {max}). Passives work by themselves. Every hit wears down <b>Guard</b>: at zero the card is Broken, its turn is pushed back and it takes more damage. Team bonuses reward mixing classes, countries and rarities. The <guide>Guide</guide> has the details.`,
  'about.q.stronger': `How do cards get stronger?`,
  'about.a.stronger': `<b>Levels</b> (up to {lv}) come from Replays or from feeding spare cards. <b>Ascension</b> raises the level cap in {asc} steps with Class Insignia, Stars and, later, Boss Trophies. <b>Eidolons</b> come from duplicates of the same player, E0 to E{eid}, each adding an effect. <b>Mods</b> fill three slots.`,
  'about.q.mods': `What are mods and combos?`,
  'about.a.mods': `Gear named after osu! mods (HD, DT, HR, EZ and more), from 1★ to 5★, with a main stat and substats. Enhance them with Mod Fragments. Some mixes form combos, like {a} or {b}. Mods open at Account Level {lv}.`,
  'about.q.maps': `What are Maps and Stamina?`,
  'about.a.maps': `<farm>Maps</farm> are real osu! maps with six difficulties each. A run costs Stamina (you hold {cap} and get one back every {min} minutes) and drops Replays, Stars, Insignia or mods. Spending Stamina raises your Account Level, which opens more Maps, mods and PvP.`,
  'about.q.tower': `How does the Tower work?`,
  'about.a.tower': `{n} floors of battles, each against a known kind of team. Some floors are played with osu! mods that twist the rules, and a boss leads every 5th floor. Scout the next floor before you go. The Weekly Tournament runs twelve more rounds with the same team, a new bracket every Monday. First clears pay Stars, Replays, Insignia, mods, Boss Trophies and packs.`,
  'about.q.pvp': `What is PvP?`,
  'about.a.pvp': `Live 1v1 battles with your team, against someone from the queue or a player you challenge. Wins move your rating, and the weekly ladder pays the top players. It opens at Account Level {lv} and needs a linked osu! account.`,
  'about.q.bp': `What is Battle Power?`,
  'about.a.bp': `BP sums up how strong a card is in battle: level, ascension, Eidolons and mods all count. It's on every card's ribbon.`,
  'about.q.trade': `Can I trade or sell?`,
  'about.a.trade': `Yes, once your osu! account is linked. List cards, mods and materials on the <market>market</market> (sellers pay a {fee}% fee), or propose <trades>trades</trades> with Stars on either side. Cards change hands fully built, mods included. Lock a card and it can't be sold, fed or listed by accident.`,
  'about.q.boosting': `Boosting isn't allowed`,
  'about.a.boosting': `Boosting means moving value between your own accounts, or to a friend's to push it ahead: lopsided trades, selling far below worth, handing a new account built cards. Admins review flagged trades and sales and can reverse them and freeze accounts.`,
  'about.q.link': `Why link my osu! account?`,
  'about.a.link': `Online features need it: the market, trades, PvP, friends and showing up on <online>Online</online>. Packs, Maps and the Tower work without it. Link it in <settings>Settings</settings>.`,
  'about.q.casino': `What is in the casino?`,
  'about.a.casino': `Dice, Limbo, Roulette, Blackjack, Baccarat, Mines, Plinko, Keno and Coinflip, all with Stars, never real money. Every bet counts towards a VIP rank with rakeback and weekly and monthly bonuses. The house keeps a small edge.`,
  'about.q.optout': `I'm an osu! player and don't want a card`,
  'about.a.optout': `Send a message through Feedback & Support at the bottom of the menu and we'll take you out of the pool.`,
  'about.q.official': `Is this an official osu! game?`,
  'about.a.official': `No. osu! gacha is a fan project, not affiliated with osu! or ppy Pty Ltd. Player data comes from the public osu! API.`,
  'about.tab.how': `How it works`,
  'about.tab.classes': `The four classes`,
  'about.tab.faq': `FAQ`,
  'about.rule.macros': `No macros or bots`,
  'about.rule.macros.text': `Play by hand. Auto-clickers, scripts or anything else that opens packs, fights or clicks for you is not allowed. Admins check how packs are opened.`,
  'about.rule.accounts': `One account each`,
  'about.rule.accounts.text': `Play on one account. Extra accounts to collect free packs, gifts or rewards are removed.`,
  'about.rule.boosting': `No boosting`,
  'about.rule.boosting.text': `Don’t move value between your own accounts, or to a friend’s to push it ahead: lopsided trades, selling far below worth, handing a new account built cards. Flagged trades and sales are reviewed and can be reversed.`,
  'about.rule.rmt': `No real-money trading`,
  'about.rule.rmt.text': `Cards, mods, items, Stars and accounts are never sold or bought for real money or anything outside the game.`,
  'about.rule.bugs': `Report bugs, don’t use them`,
  'about.rule.bugs.text': `If something gives you more than it should, tell us through Feedback & Support. Using it on purpose counts as cheating.`,
  'about.rule.chat': `Be decent in chat`,
  'about.rule.chat.text': `No harassment, slurs, spam, advertising or sharing other people’s personal details. Helpers (lime names, HELPER badge), moderators (teal, MOD) and admins (red, ADMIN) keep chat friendly: they remove messages and can mute you for a while, and helpers report bigger problems to the mods. Admins can also freeze accounts.`,
  'about.rulesNote': `Breaking a rule can mean losing what it gained you, a frozen account or a ban, depending on how serious it is.`,
  'about.questions': `Questions`,
  'cp.n.spareCopy_one': `{count} spare copy`,
  'cp.n.spareCopy_other': `{count} spare copies`,
  'cp.n.copy_one': `{count} copy`,
  'cp.n.copy_other': `{count} copies`,
  'cp.n.pull_one': `{count} pull`,
  'cp.n.pull_other': `{count} pulls`,
  'cp.tab.overview': `Overview`,
  'cp.tab.level': `Level up`,
  'cp.tab.ascend': `Ascend`,
  'cp.tab.eidolons': `Eidolons`,
  'cp.subtitle': `{rarity} {cls} · owned by {owner}`,
  'cp.docTitle': `{name} {rarity} card`,
  'cp.description': `{name}'s {rarity} {cls} card on osu! gacha, No. {no} of {of}, owned by {owner}.`,
  'cp.backToCards': `Back to your cards`,
  'cp.listedFor': `Listed on the market for <m></m>, so it can't be changed. Unlist it first.`,
  'cp.listedNotice': `Listed on the market, so it can't be changed. Unlist it first.`,
  'cp.tradingNotice': `Offered in a pending trade, so it's held until the trade is accepted, declined or cancelled. Cancel the trade in <link>Trades</link> to change it.`,
  'cp.tradingShort': `Offered in a pending trade, so it's held until the trade is accepted, declined or cancelled.`,
  'cp.openPage': `Open card page`,
  'cp.sections': `Card sections`,
  'cp.convert': `Convert`,
  'cp.converting': `Converting…`,
  'cp.converted': `Converted`,
  'cp.convertTitle': `Convert Insignia`,
  'cp.youllHave': `You'll have {n} {name}, enough to ascend.`,
  'cp.upgradeCosts': `Upgrading costs <m></m>.`,
  'cp.toFeed': `{what} to feed`,
  'cp.loading': `Loading the card`,
  'cp.theCard': `The card`,
  'cp.bpTip': `Battle Power: how strong this card is on its own, before team bonuses.`,
  'cp.maxLevelTip': `Max level.`,
  'cp.capTip': `Level {lv}: the cap at A{a}. Ascend to raise it.`,
  'cp.levelTip': `Level {lv} of {cap} · {xp} / {next} XP to the next`,
  'cp.ascTip': `Ascension {n} of {max}: each one raises the level cap by 10 and base stats a little.`,
  'cp.eidTip': `Eidolon {n} of {max}: each duplicate of {name} fed in unlocks one, plus any eidolons it had.`,
  'cp.owner': `Owner`,
  'cp.copy': `Copy`,
  'cp.copyTip': `The {nth} of {of} {name} cards pulled · card ID {id} · pulled {date}`,
  'cp.value': `Value`,
  'cp.valueTip': `Quicksells for ★ {n}`,
  'cp.gone': `This card is gone: it was quicksold, fed to another card or removed.`,
  'cp.seeMarket': `See it on the market`,
  'cp.onSale': `On sale · ★ {price}`,
  'cp.proposeTrade': `Propose a trade`,
  'cp.showcaseN': `Showcase: {n}/5 pinned`,
  'cp.quicksoldFor': `Quicksold for {n} Stars`,
  'cp.qsTitle': `Quicksell this card?`,
  'cp.qsBody': `It's destroyed and you get <m></m>.`,
  'cp.qsBuilt': `Its levels, ascension and eidolons are lost.`,
  'cp.qsMods': `Its mods go back to your inventory.`,
  'cp.qsFor': `Quicksell for ★ {n}`,
  'cp.pinnedTip': `Pinned to your public profile. Click to unpin.`,
  'cp.pinTip': `Pin it to your public profile (up to 5 cards)`,
  'cp.pinLink': `Link your osu! account in Settings to use the showcase`,
  'cp.showcase': `Showcase`,
  'cp.unlistTip': `Listed for {n} Stars. Click to take it off the market.`,
  'cp.marketLink': `Link your osu! account to use the market`,
  'cp.unlockToList': `Unlock it to list it`,
  'cp.sellTip': `Sell it to another player on the market`,
  'cp.unlockToSell': `Unlock it to quicksell it`,
  'cp.cancelTradeFirst': `Cancel the trade first`,
  'cp.unlistFirst': `Unlist it first`,
  'cp.destroyFor': `Destroy it for {n} Stars`,
  'cp.listed': `Listed on the market`,
  'cp.seeTheMarket': `See the market`,
  'cp.priceInStars': `Price in Stars`,
  'cp.youGetAfter': `You get ★ {n} after the {fee}% fee.`,
  'cp.buyerGets': `The buyer gets it as it is, mods included.`,
  'cp.eidUnlocked': `Eidolon {n} · unlocked`,
  'cp.eidLocked': `Eidolon {n} · locked`,
  'cp.bestMatches': `Best matches`,
  'cp.bestPassiveFor': `Best passive for <b>{name}</b>:`,
  'cp.bestSkillFor': `Best Skill for <b>{name}</b>:`,
  'cp.noGodRoll': `<b>{name}</b> isn't the god roll of any Skill.`,
  'cp.thisCard': `This card`,
  'cp.rerolled': `Rerolled`,
  'cp.rerollSkillTitle': `Reroll the Skill?`,
  'cp.rerollPassiveTitle': `Reroll the passive?`,
  'cp.rerollSkillBody': `{name} (Skill) is replaced by a random different {cls} Skill. The other one stays.`,
  'cp.rerollPassiveBody': `{name} (passive) is replaced by a random different passive. The other one stays.`,
  'cp.rerollCost': `Every reroll costs the same, however often this card has been rerolled.`,
  'cp.rerollFor': `Reroll for ★ {n}`,
  'cp.rerollHint': `Reroll the Skill (within the class) or the passive. Some pairs work especially well together.`,
  'cp.rerollSkill': `Reroll skill`,
  'cp.rerollPassive': `Reroll passive`,
  'cp.classProfile': `Class stat profile`,
  'cp.strongerPassive': `Stronger passive`,
  'cp.strongerSkill': `Stronger Skill`,
  'cp.skillUpgrade': `Skill upgrade`,
  'cp.basicKind': `Basic · gives 1 Skill Point`,
  'cp.strongerBasic': `Stronger Basic`,
  'cp.crits': `Critical hits`,
  'cp.critText': `A crit deals +{dmg} damage.`,
  'cp.guardText': `Every hit on it wears Guard down. At zero it's Broken: its turn is pushed back and it takes more damage.`,
  'cp.baseFrom': `Base {base} from rarity, class, level and ascension.`,
  'cp.baseFromMods': `Base {base} from rarity, class, level and ascension; {extra} from mods, passive and eidolons.`,
  'cp.change': `Change`,
  'cp.details': `Details`,
  'cp.activeCombos': `Active combos`,
  'cp.noCombo': `No combo. Some pairs and trios of mod types form one.`,
  'cp.feedN': `Feed {what}`,
  'cp.allEidolons': `All eidolons`,
  'cp.noEidolons': `None yet. Every duplicate of {name} fed into this card unlocks one.`,
  'cp.andList': `{list} and {last}`,
  'cp.youHaveStars': `You have {n} Stars`,
  'cp.oneLess': `One less {label}`,
  'cp.oneMore': `One more {label}`,
  'cp.nowLevel': `Now level {n}`,
  'cp.noFodder': `No Replays or spare cards to feed.`,
  'cp.noReplays': `No Replays. Let Auto-fill use cards too, or farm Galaxy Collapse.`,
  'cp.fillPartial': `That's everything that fits the filter: {xp} of the {cap} XP to the cap.`,
  'cp.couldNotFill': `Could not auto-fill`,
  'cp.feedTitle': `Feed {what}?`,
  'cp.usedUp': `They're used up for XP.`,
  'cp.usedUpIncluding': `They're used up for XP, including {list}.`,
  'cp.comesBack': `XP past the level cap comes back as {what}.`,
  'cp.feedAndLevel': `Feed and level up`,
  'cp.cap': `cap {n}`,
  'cp.capReached': `Level cap reached`,
  'cp.toLevel': `To level {n}`,
  'cp.toCap': `To the cap · Lv {n}`,
  'cp.xpToGo': `{n} XP to go`,
  'cp.theTop': `Level {n}: the top`,
  'cp.cappedAt': `Capped at level {n}`,
  'cp.cantLevel': `This card can’t level any further.`,
  'cp.ascendToRaise': `Ascend to A{a} to raise the cap to {n}.`,
  'cp.autofill': `Auto-fill`,
  'cp.cardsUpTo': `Cards up to`,
  'cp.replaysOnly': `Replays only`,
  'cp.autofillTip': `Replays first, then spare cards (lowest rarity first) until the level cap`,
  'cp.filling': `Filling…`,
  'cp.autofillNote': `Replays first, then spare cards you haven’t built up, lowest rarity first, until the level cap. Other copies of this player are kept for eidolons.`,
  'cp.getReplays': `Get Replays on Galaxy Collapse →`,
  'cp.replaysNotNeeded': `Replays that aren’t needed to reach the cap aren’t used.`,
  'cp.feedCards': `Feed cards`,
  'cp.pickCards': `Pick cards`,
  'cp.spareIntoXp': `Spare cards you haven't built up turn into XP.`,
  'cp.dontFeed': `Don't feed {name}`,
  'cp.fedGive': `Fed cards give XP by rarity, plus 60% of any XP that was put into them.`,
  'cp.levelling': `Levelling…`,
  'cp.notEnoughStars': `Not enough Stars.`,
  'cp.someUnused': `Some of those Replays aren’t needed, so they won’t be used.`,
  'cp.starPerXp': `1 Star per {n} XP.`,
  'cp.pickToFeed': `Pick cards to feed`,
  'cp.noFeedHere': `No cards to feed here. Only unlocked cards that haven't been levelled or given mods can be fed.`,
  'cp.dupeTip': `Same player: it could raise the eidolon instead`,
  'cp.dupe': `Dupe`,
  'cp.hiddenN_one': `{count} card on this page is locked, listed or built up, so hidden.`,
  'cp.hiddenN_other': `{count} cards on this page are locked, listed or built up, so hidden.`,
  'cp.ascendedTo': `Ascended to A{n}`,
  'cp.levelN': `Level {n}`,
  'cp.reached': `Reached`,
  'cp.materials': `Materials`,
  'cp.missing': `Missing`,
  'cp.notEnough': `Not enough`,
  'cp.ascPhases': `Ascension phases`,
  'cp.fullyAscended': `Fully ascended`,
  'cp.capHighest': `The level cap is {n}, the highest there is.`,
  'cp.nextAscension': `Next ascension`,
  'cp.levelCap': `Level cap`,
  'cp.baseStats': `Base stats`,
  'cp.needs': `Needs`,
  'cp.ascending': `Ascending…`,
  'cp.ascendTo': `Ascend to A{n}`,
  'cp.levelFirst': `Level up first`,
  'cp.tapMissing': `Tap a missing material to see which Map drops it.`,
  'cp.feedDupes': `Feed duplicates`,
  'cp.eidComplete': `E{n}: complete`,
  'cp.noSpares': `No spare copies`,
  'cp.allUnlocked': `Every eidolon is unlocked.`,
  'cp.eachUnlocks': `Each one fed in unlocks the next eidolon, plus any eidolons it had (BP +{bp} for E{e}).`,
  'cp.pullAnother': `Pull another {name} card to unlock E{e}.`,
  'cp.feedCopies': `Feed copies`,
  'cp.eidolonE': `Eidolon E{n}`,
  'cp.feedBuiltTitle': `Feed built-up copies?`,
  'cp.feedBuiltBody_one': `One of them has levels or mods. Its eidolons carry over, but levels and ascension are lost (mods go back to your inventory).`,
  'cp.feedBuiltBody_other': `{count} of them have levels or mods. Their eidolons carry over, but levels and ascension are lost (mods go back to your inventory).`,
  'cp.feedCopiesOf': `Feed {name} copies`,
  'cp.wasted': `{n} past E{max} would go to waste.`,
  'cp.eachCopy': `Each copy brings 1 plus its own eidolons. Locked and listed copies can't be fed (click a padlock to unlock).`,
  'cp.feedGo': `Feed {n} · E{from} → E{to}`,
  'cp.pickCopies': `Pick copies`,
  'cp.noCopies': `No other copies right now.`,
  'cp.modsSaved': `Mods saved`,
  'cp.alreadyBest': `It already wears its best mods.`,
  'cp.autoPicked': `Auto-equip picked the mods with the most Battle Power ({bp} BP). Save to keep them.`,
  'cp.couldNotLoadMods': `Could not load your mods`,
  'cp.replaced': `One mod of each type: it replaced the {mod} in slot {n}.`,
  'cp.equippedMods': `Equipped mods`,
  'cp.allYourMods': `All your mods`,
  'cp.saveMods': `Save mods`,
  'cp.autoEquipTip': `Pick the mods that give this card the most Battle Power (you still Save)`,
  'cp.finding': `Finding…`,
  'cp.autoEquip': `Auto-equip`,
  'cp.takeAllOff': `Take all off`,
  'cp.upToThree': `Up to three mods, one of each type.`,
  'cp.enhanceTip': `Enhance this mod with Mod Fragments or other mods`,
  'cp.takeOffName': `Take off {mod}`,
  'cp.takeOff': `Take it off`,
  'cp.pickBelow': `Pick a mod below`,
  'cp.tapToFill': `Tap to fill`,
  'cp.notSaved': `Not saved`,
  'cp.couldMake': `Combos you could make`,
  'cp.insteadTip': `With your other mods, adding {mods} makes {combo} instead (a three-mod combo replaces the pairs inside it).`,
  'cp.missingMods': `{mods}, missing {missing}`,
  'cp.compare': `Compare`,
  'cp.modBonuses': `Mod bonuses`,
  'cp.modBonusNote': `Each mod type also gives its own bonus on top of its stats.`,
  'cp.pickMod': `Pick a mod`,
  'cp.intoSlot': `Into slot {n}`,
  'cp.searchMods': `Search mods or stats`,
  'cp.mainStat': `Main stat`,
  'cp.anyMain': `Any main stat`,
  'cp.whichMods': `Which mods`,
  'cp.spare': `Spare`,
  'cp.allMods': `All mods`,
  'cp.noSpareMods': `No spare mods. They drop on Mod Maps.`,
  'cp.noSpareModsLocked': `No spare mods. They drop on Mod Maps (open at Account Level {lv}).`,
  'cp.noModsMatch': `No mods match.`,
  'cp.inLoadout': `In this loadout`,
  'cp.movesHere': `On another card: moves here`,
  'cp.someone': `someone`,
  'cp.ev.minted': `Pulled by <b>{who}</b>`,
  'cp.ev.moved': `Moved by an admin from <b>{from}</b> to <b>{to}</b>`,
  'cp.ev.traded': `Traded from <b>{from}</b> to <b>{to}</b>`,
  'cp.ev.sold': `Sold by <b>{from}</b> to <b>{to}</b> for <m></m>`,
  'cp.ev.quicksold': `Quicksold by <b>{who}</b>`,
  'cp.ev.removed': `Removed by an admin`,
  'cp.ev.rarity': `Rarity changed: {from} → {to}`,
  'cp.ev.fedEidolon': `Fed to another copy for an eidolon`,
  'cp.ev.fedXp': `Fed to another card for {n} XP`,
  'cp.ev.seeIt': `see it`,
  'cp.ev.fedN': `{what} fed`,
  'cp.ev.ascended': `Ascended to <b>A{n}</b>`,
  'cp.ev.reversed': `Trade reversed by an admin: back to <b>{who}</b>`,
  'cp.ev.skillRerolled': `Skill rerolled: {from} → <b>{to}</b>`,
  'cp.ev.passiveRerolled': `Passive rerolled: {from} → <b>{to}</b>`,
  'cp.ev.changed': `Changed`,
  'cp.newestFirst': `Newest first`,
  'cp.starsSpent': `Stars spent`,
  'cp.whoOwns': `Who owns {name}`,
  'cp.owners': `Owners`,
  'cp.mostCopies': `Most copies`,
  'cp.lowestTip': `Their lowest copy: No. {no} of {of}`,
  'cp.ownerTip': `{what}, best {rarity}`,
  'cp.nobodyHolds': `Nobody holds one right now.`,
  'cp.couldNotOwners': `Couldn't load the owners.`,
  'casino.game.dice': `Dice`,
  'casino.game.limbo': `Limbo`,
  'casino.game.coinflip': `Coinflip`,
  'casino.game.roulette': `Roulette`,
  'casino.game.blackjack': `Blackjack`,
  'casino.game.baccarat': `Baccarat`,
  'casino.game.mines': `Mines`,
  'casino.game.plinko': `Plinko`,
  'casino.game.keno': `Keno`,
  'casino.profitOnWin': `Profit on Win`,
  'casino.rolling': `Rolling…`,
  'casino.bet': `Bet`,
  'casino.target': `Target`,
  'casino.multiplier': `Multiplier`,
  'casino.rollUnder': `Roll Under`,
  'casino.rollOver': `Roll Over`,
  'casino.switchDirection': `Switch between roll over and roll under`,
  'casino.winChance': `Win Chance`,
  'casino.spinLimit': `Bets on one spin can add up to {n}`,
  'casino.handLimit': `Bets on one hand can add up to {n}`,
  'casino.takeChipOff': `Click to take a chip off`,
  'casino.chipValue': `Chip Value`,
  'casino.spinning': `Spinning…`,
  'casino.rouletteNote': `American wheel (0 and 00). Numbers pay 35:1, dozens and columns 2:1, the rest 1:1. Chips stay on the table for the next spin.`,
  'casino.undo': `Undo`,
  'casino.range': `{a} to {b}`,
  'casino.even': `Even`,
  'casino.odd': `Odd`,
  'casino.cardOf': `{rank} of {suit}`,
  'casino.hiddenCard': `Hidden card`,
  'casino.sidePayouts': `Side bet payouts`,
  'casino.firstTwo': `Your first two cards`,
  'casino.twoPlusDealer': `Your two cards + the dealer's up card`,
  'casino.betType': `Bet type`,
  'casino.standard': `Standard`,
  'casino.sideBet': `Side bet`,
  'casino.sideBetOf': `Side Bet ({name})`,
  'casino.insuranceQ': `Would you like insurance?`,
  'casino.acceptInsurance': `Accept Insurance · ★ {n}`,
  'casino.noInsurance': `No Insurance`,
  'casino.hit': `Hit`,
  'casino.stand': `Stand`,
  'casino.split': `Split`,
  'casino.splitTip': `Split a pair into two hands (costs your bet again)`,
  'casino.double': `Double`,
  'casino.dealing': `Dealing…`,
  'casino.bjNote': `Eight decks, reshuffled every hand. The dealer hits soft 17. Double on your first two cards, split a pair once (split Aces get one card each). When the dealer shows an Ace you can insure for half your bet.`,
  'casino.bjPays': `Blackjack pays 3 to 2`,
  'casino.insurancePays': `Insurance pays 2 to 1`,
  'casino.bac.player': `Player`,
  'casino.bac.tie': `Tie`,
  'casino.bac.banker': `Banker`,
  'casino.bacNote': `Bet on the hand that ends closer to 9. Banker wins pay 0.95:1; on a tie, Player and Banker bets come back. Bets stay for the next hand.`,
  'casino.subtitle': `Dice, limbo, coinflip, roulette, blackjack, baccarat, mines, plinko and keno for Stars. Stars only: no real money, ever.`,
  'casino.games': `Games`,
  'casino.soundOff': `Sound off`,
  'casino.soundOn': `Sound on`,
  'vip.feed.mine': `My Bets`,
  'vip.feed.latest': `Latest Bets`,
  'vip.feed.high': `High Rollers`,
  'vip.feed.wins': `Big Wins`,
  'vip.rows': `Rows`,
  'vip.user': `User`,
  'vip.game': `Game`,
  'vip.payout': `Payout`,
  'vip.noBets': `No bets yet.`,
  'vip.bonus.rakeback': `Instant Rakeback`,
  'vip.bonus.rakeback.text': `A share of every bet, claim any time.`,
  'vip.bonus.weekly': `Weekly Bonus`,
  'vip.bonus.weekly.text': `Bigger the more you played since last week’s claim.`,
  'vip.bonus.monthly': `Monthly Bonus`,
  'vip.bonus.monthly.text': `Covers everything you played since last month’s claim.`,
  'vip.bonus.rank': `Rank-Up Bonus`,
  'vip.bonus.rank.text': `A one-off reward for every rank you reach.`,
  'vip.inDays': `in {n}d`,
  'vip.inHours': `in {n}h`,
  'vip.tip': `VIP rank and bonuses`,
  'vip.claimed': `Claimed ★ {n}`,
  'vip.wagered': `<m></m> wagered`,
  'vip.toNext': `<m></m> to <b>{name}</b>`,
  'vip.topRank': `the top rank`,
  'vip.pctOf': `{pct} of {n} wagered`,
  'vip.unlocksAt': `Unlocks at {name}`,
  'vip.opens': `Opens {when}`,
  'vip.reach': `Reach {name} to earn it`,
  'vip.allClaimed': `All rank bonuses claimed`,
  'vip.play': `Play to build it up`,
  'vip.ranks': `VIP ranks`,
  'vip.minWagered': `{n} wagered`,
  'vip.startHere': `Start here`,
  'vip.perk.rakeback': `Instant rakeback: {pct} of every bet`,
  'vip.perk.weekly': `Weekly bonus: {pct} of the week's wagers`,
  'vip.perk.weeklyNone': `Weekly bonus: not yet`,
  'vip.perk.monthly': `Monthly bonus: {pct} of the month's wagers`,
  'vip.perk.monthlyNone': `Monthly bonus: not yet`,
  'vip.perk.rankUp': `Rank-up bonus: {n}`,
  'vip.benefits': `The benefits`,
  'vip.rank': `VIP Rank`,
  'vip.bonusIncrease': `Bonus Increase`,
  'games.fewerMines': `Fewer mines`,
  'games.moreMines': `More mines`,
  'games.gems': `Gems`,
  'games.quickMines': `Quick mine counts`,
  'games.minesLocked': `The mine count is locked until you cash out or hit a mine`,
  'games.totalProfit': `Total profit ({x}×)`,
  'games.randomTile': `Pick random tile`,
  'games.cashout': `Cash out`,
  'games.cashoutN': `Cash out · ★ {n}`,
  'games.nextGem': `Next gem: {x}×`,
  'games.allSafe': `Every safe tile found.`,
  'games.minesNote': `Pick tiles to raise the multiplier; cash out before a mine.`,
  'games.gem': `Gem`,
  'games.mine': `Mine`,
  'games.tile': `Tile {n}`,
  'games.risk': `Risk`,
  'games.risk.low': `Low`,
  'games.risk.medium': `Medium`,
  'games.risk.high': `High`,
  'games.plinkoNote': `Click as fast as you like, or hold Bet to keep dropping. Edges pay the most; returns about 93%.`,
  'games.recentDrops': `Recent drops`,
  'games.autoPick': `Auto pick`,
  'games.clearTable': `Clear table`,
  'games.drawing': `Drawing…`,
  'games.kenoPicked': `{n} of {max} picked. 10 numbers are drawn from 40.`,
  'games.kenoPick': `Pick up to {max} numbers, then bet. 10 numbers are drawn from 40.`,
  'games.chance': `{pct}% chance`,
  'games.hits': `{n} hits`,
  'games.kenoEmpty': `Select 1–10 numbers to play`,
  'games.limboNote': `Set a target multiplier. If the roll reaches it, you win your bet times the target. Hold Bet to keep going.`,
  'games.targetMultiplier': `Target Multiplier`,
  'games.heads': `Heads`,
  'games.tails': `Tails`,
  'games.mode': `Game Mode`,
  'games.continuousTip': `Keep calling to double up, or cash out`,
  'games.continuous': `Continuous`,
  'games.classic': `Classic`,
  'games.coins': `Coins`,
  'games.atLeast': `At least`,
  'games.atLeastLabel': `At least this many on your side`,
  'games.autoSide': `Auto {side}`,
  'games.betSide': `Bet {side}`,
  'games.callAgain': `Call again for {x}×, or cash out.`,
  'games.topStreak': `Top of the streak.`,
  'games.streakNote': `Every right call doubles the multiplier, up to {n} in a row.`,
  'games.classicNote': `Call heads or tails. A right call pays 1.96×.`,
  'games.profitX': `Profit on Win ({x}×)`,
  'games.streak': `Streak`,
  'coach.tutorial': `Tutorial`,
  'team.hint.full': `Add a {cls} for Full team (+{n}%)`,
  'team.hint.duo': `Add a {cls} for {bonus}`,
  'team.hint.country': `1 more {code} card: +{n}% for {code}`,
  'team.hint.underdogs': `One more Common, Uncommon or Rare card for Underdogs (+15%)`,
  'guild.title': `Guilds`,
  'guild.subtitle': `Team up under a [TAG], level up together and hold Domains.`,
  'guild.tagTitle': `Guild [{tag}]`,
  'guild.banner': `Guild banner`,
  'guild.yours': `Your guild`,
  'guild.open': `Open`,
  'guild.allMembers': `All members`,
  'guild.noneYet': `You’re not in a guild. Join one below or start your own.`,
  'guild.create': `Create a guild`,
  'guild.createNeeds': `Needs Account Level {level} and {stars} Stars.`,
  'guild.how': `How guilds work`,
  'guild.how.tag': `Your guild’s [TAG] shows next to your name everywhere.`,
  'guild.how.xp': `XP you earn also levels up the guild: more member slots, banner parts and raid Stars.`,
  'guild.how.raid': `Every week the guild fights one raid boss together. Everyone gets 3 attempts, and every 25% of its HP pays everyone who hit it.`,
  'guild.how.ranks': `Ranks: Owner, Chief, Strategist, Captain, Recruiter, Recruit. You can only manage members below you.`,
  'guild.leaderboard': `Top guilds`,
  'guild.results': `Results`,
  'guild.search': `Search by name or tag`,
  'guild.noMatch': `No guild matches that.`,
  'guild.noGuilds': `No guilds yet.`,
  'guild.levelN': `Level {n}`,
  'guild.lv': `Lv {n}`,
  'guild.xpOf': `{into} / {next} XP`,
  'guild.maxLevel': `Max level`,
  'guild.membersOf': `{n}/{cap} members`,
  'guild.ownedBy': `led by {name}`,
  'guild.invitations': `Invites and requests`,
  'guild.invited': `Invited you`,
  'guild.invitedBy': `Invited by {name}`,
  'guild.asked': `You asked to join`,
  'guild.accept': `Accept`,
  'guild.decline': `Decline`,
  'guild.cancelRequest': `Cancel request`,
  'guild.joined': `You joined the guild`,
  'guild.declined': `Invite declined`,
  'guild.requestCancelled': `Request cancelled`,
  'guild.requestSent': `Request sent`,
  'guild.askToJoin': `Ask to join`,
  'guild.browse': `Browse guilds`,
  'guild.notFound': `There’s no guild [{tag}].`,
  'guild.createTitle': `Create a guild`,
  'guild.createSubtitle': `Pick a tag, a name and a banner. You can change the banner later.`,
  'guild.tag': `Tag`,
  'guild.tagHelp': `3 or 4 letters, shown as [ABC] next to members’ names.`,
  'guild.tagChanged': `Tag changed`,
  'guild.changeTagPrice': `Change tag · {stars} Stars`,
  'guild.changeTagFree': `Change tag · free`,
  'guild.tagChangeHelp': `3 or 4 letters. The first change is free; after that each one costs 1,000 Stars. The guild page moves to the new tag.`,
  'guild.name': `Name`,
  'guild.namePlaceholder': `Guild name`,
  'guild.nameHelp': `3 to 24 characters.`,
  'guild.needLink': `Link your osu! account to create a guild.`,
  'guild.needLevel': `You need Account Level {n} to create a guild.`,
  'guild.needStars': `You need {n} Stars to create a guild.`,
  'guild.costs': `Costs {stars} Stars.`,
  'guild.found': `Create · {stars} Stars`,
  'guild.founding': `Creating…`,
  'guild.founded': `[{tag}] created`,
  'guild.shuffle': `Shuffle`,
  'guild.shape': `Shape`,
  'guild.colours': `Colours`,
  'guild.colour.base': `Base`,
  'guild.colour.accent': `Accent`,
  'guild.colour.symbol': `Symbol`,
  'guild.pattern': `Pattern`,
  'guild.symbol': `Symbol`,
  'guild.shape.banner': `Banner`,
  'guild.shape.shield': `Shield`,
  'guild.shape.round': `Round`,
  'guild.shape.hex': `Hexagon`,
  'guild.pattern.plain': `Plain`,
  'guild.pattern.band': `Band`,
  'guild.pattern.chevron': `Chevron`,
  'guild.pattern.diagonal': `Diagonal`,
  'guild.pattern.split': `Split`,
  'guild.pattern.cross': `Cross`,
  'guild.pattern.saltire': `Saltire`,
  'guild.pattern.border': `Border`,
  'guild.pattern.bars': `Bars`,
  'guild.pattern.checks': `Checks`,
  'guild.pattern.ring': `Ring`,
  'guild.pattern.triangles': `Triangles`,
  'guild.symbol.none': `None`,
  'guild.symbol.circle': `Hit circle`,
  'guild.symbol.slider': `Slider`,
  'guild.symbol.spinner': `Spinner`,
  'guild.symbol.star': `Star`,
  'guild.symbol.heart': `Heart`,
  'guild.symbol.crown': `Crown`,
  'guild.symbol.note': `Note`,
  'guild.symbol.bolt': `Bolt`,
  'guild.symbol.tank': `Tank`,
  'guild.symbol.dps': `DPS`,
  'guild.symbol.support': `Support`,
  'guild.symbol.cc': `CC`,
  'guild.symbol.hex': `Hex`,
  'guild.symbol.flame': `Flame`,
  'guild.symbol.moon': `Moon`,
  'guild.tab.overview': `Overview`,
  'guild.tab.members': `Members`,
  'guild.tab.raid': `Raid`,
  'guild.tab.bank': `Domains & bank`,
  'guild.tab.requests': `Requests`,
  'guild.tab.settings': `Settings`,
  'guild.rank.owner': `Owner`,
  'guild.rank.chief': `Chief`,
  'guild.rank.strategist': `Strategist`,
  'guild.rank.captain': `Captain`,
  'guild.rank.recruiter': `Recruiter`,
  'guild.rank.recruit': `Recruit`,
  'guild.announcement': `Announcement`,
  'guild.noAnnouncement': `No announcement.`,
  'guild.announcementPlaceholder': `Anything your members should know`,
  'guild.saveNote': `Save`,
  'guild.noteSaved': `Saved`,
  'guild.nextLevels': `Next levels`,
  'guild.perk.slots': `{n} member slots`,
  'guild.perk.shape': `{name} shape`,
  'guild.perk.pattern': `{name} pattern`,
  'guild.perk.symbol': `{name} symbol`,
  'guild.perk.tier': `Tier {n} banner stand`,
  'guild.perk.raid': `+{n}% raid Stars`,
  'guild.topMembers': `Top members`,
  'guild.xp': `XP`,
  'guild.xpEarned': `Guild XP earned`,
  'guild.raidDamage': `Raid damage this week`,
  'guild.online': `Online`,
  'guild.setRank': `{name}’s rank`,
  'guild.rankSet': `Rank changed`,
  'guild.kick': `Kick`,
  'guild.kickTitle': `Kick {name}?`,
  'guild.kickBody': `They can ask to join again later. Their teams come off any domains they hold.`,
  'guild.kicked': `{name} was kicked`,
  'guild.transfer': `Make owner`,
  'guild.transferTitle': `Make {name} the owner?`,
  'guild.transferBody': `You become a Chief. Only they can give it back.`,
  'guild.transferred': `{name} is the owner now`,
  'guild.invite': `Invite`,
  'guild.invitePlaceholder': `Username`,
  'guild.inviteSent': `Invite sent`,
  'guild.inviteJoined': `They had already asked to join, so they’re in.`,
  'guild.requests': `Requests to join`,
  'guild.noRequests': `No requests.`,
  'guild.invitesSent': `Invites sent`,
  'guild.noInvites': `No open invites.`,
  'guild.cancelInvite': `Cancel`,
  'guild.inviteCancelled': `Invite cancelled`,
  'guild.welcomed': `Accepted`,
  'guild.turnedDown': `Declined`,
  'guild.saveBanner': `Save banner · {stars} Stars`,
  'guild.bannerSaved': `Banner saved`,
  'guild.reset': `Reset`,
  'guild.disband': `Disband guild`,
  'guild.disbandHelp': `Everyone is removed and [{tag}] is deleted, level and all. Type the tag to confirm.`,
  'guild.disbandConfirm': `Type {tag} to confirm`,
  'guild.disbanded': `Guild disbanded`,
  'guild.leave': `Leave guild`,
  'guild.leaveTitle': `Leave [{tag}]?`,
  'guild.leaveBody': `Your guild XP stays with the guild. Leave your domains first.`,
  'guild.lastLeave': `You’re the last member, so leaving deletes the guild.`,
  'guild.ownerLeave': `Make someone else the owner first (Members tab).`,
  'guild.left': `You left the guild`,
  'guild.raid.title': `Guild raid`,
  'guild.raid.short': `Raid`,
  'guild.raid.endsIn': `Ends in {t}`,
  'guild.raid.rules': `{attempts} attempts a week, {n} turns each.`,
  'guild.raid.progress': `Raid boss {pct}% down`,
  'guild.raid.boss': `Raid boss`,
  'guild.raid.attempts': `Your attempts`,
  'guild.raid.attemptsLeft': `Attempts left: {n}`,
  'guild.raid.yourDamage': `Your damage: {n}`,
  'guild.raid.fight': `Attempt {n}`,
  'guild.raid.noneLeft': `No attempts left this week`,
  'guild.raid.down': `Boss down. A new one comes on Monday.`,
  'guild.raid.membersOnly': `Only members can fight it.`,
  'guild.raid.claim': `Claim rewards ({n})`,
  'guild.raid.claimed': `Raid rewards`,
  'guild.raid.milestones': `Milestones`,
  'guild.raid.milestoneHelp': `Each one pays every member who hit the boss this week.`,
  'guild.raid.reached': `Reached`,
  'guild.raid.top': `Top damage`,
  'guild.raid.noneYet': `Nobody has fought it yet.`,
  'guild.raid.cta': `Open the raid`,
  'guild.raid.attempt': `Attempt {n}/{max}`,
  'guild.raid.turns': `{n} turns`,
  'guild.raid.dealt': `{n} damage`,
  'guild.raid.xp': `+{n} guild XP`,
  'guild.raid.back': `Back to the raid`,
  'guild.raid.again': `Go again ({n} left)`,
  'guild.raid.endWon': `Boss down!`,
  'guild.raid.endLost': `Attempt over`,
  'guild.raid.endDraw': `Time’s up`,
  'guild.bannerFromBank': `Paid from the guild bank if it has enough, otherwise from your Stars.`,
  'spot.title': `Domains`,
  'spot.subtitle': `{n} famous maps are open at a time, with a new set twice a day. Beat the team on one to take it; it pays Stars until someone takes it from you or it closes.`,
  'spot.rankingTitle': `Guild ranking`,
  'spot.closeLabel': `Closing bonus`,
  'spot.rotationEnds': `New domains in {t}`,
  'spot.upNext': `Up next`,
  'spot.upNextNote': `Open in {t}`,
  'spot.opensIn': `Opens in {t}`,
  'spot.tier.bronze': `Bronze`,
  'spot.tier.silver': `Silver`,
  'spot.tier.gold': `Gold`,
  'spot.tier.platinum': `Platinum`,
  'spot.tileHeld': `{name}, held by {who}`,
  'spot.tileOpen': `{name}, open`,
  'spot.open': `Open`,
  'spot.holder': `Held by`,
  'spot.guardedBy': `Guarded by`,
  'spot.guardiansTitle': `Guardians`,
  'spot.holderTeam': `{name}’s team`,
  'spot.pays': `Pays`,
  'spot.strength': `Team strength`,
  'spot.strengthTitle': `Strength: {pct}`,
  'spot.strengthHint': `Their team is at {now}. Held teams weaken to {pct} over {h} hours unless cheered.`,
  'spot.yoursHint': `Your team holds it. It weakens to {pct} over {h} hours unless you or a guildmate cheer it.`,
  'spot.lostWait': `You can try this domain again in {m} minutes.`,
  'spot.fullStrength': `Full strength`,
  'spot.shieldNote': `It just changed hands. You can challenge it in {t}.`,
  'spot.contested': `Contested`,
  'spot.contestedNote': `Someone is fighting for it right now. You can challenge it in {t} at most.`,
  'spot.cooldown': `Try again in {t}`,
  'spot.logIn': `Log in to take a domain.`,
  'spot.yours': `Your team holds it.`,
  'spot.guildmate': `A guildmate holds it. Cheer it to keep it strong.`,
  'spot.claim': `Take it`,
  'spot.challenge': `Challenge`,
  'spot.defendingCards': `Some cards in your team are defending a domain ({n}). Swap them out to attack.`,
  'spot.limit': `You hold {n} domains already. Leave one to take another.`,
  'spot.cheer': `Cheer (back to full)`,
  'spot.cheerIn': `Cheer again in {t}`,
  'spot.cheered': `Back to full strength`,
  'spot.leave': `Leave`,
  'spot.leaveTitle': `Leave {place}?`,
  'spot.leaveBody': `Your team comes off it and anyone else can take it. You and your guild can’t take it back for {min} minutes.`,
  'spot.left': `You left {place}`,
  'spot.took': `{place} is yours!`,
  'spot.tooLate': `You won, but someone else took it first.`,
  'spot.wonNothing': `You won.`,
  'spot.lost': `You lost.`,
  'spot.backToSpots': `Back to Domains`,
  'spot.holding': `Your domains`,
  'spot.starsToday': `Stars today`,
  'spot.noGuild': `In a guild, your domain also pays the guild bank and scores for the monthly ranking.`,
  'spot.claimSeason': `Claim your #{n} reward`,
  'spot.seasonClaimed': `#{n} last month`,
  'spot.ranking': `This month`,
  'spot.endsIn': `ends in {t}`,
  'spot.points': `{n} pts`,
  'spot.noPoints': `No guild has held a domain this month.`,
  'spot.lastMonth': `Last month`,
  'spot.medalTitle': `#{n} in last month’s Domains ranking`,
  'spot.how': `How it works`,
  'spot.how.claim': `Beat the team on a domain and yours takes its place. It pays Stars every minute until someone beats you.`,
  'spot.how.rotate': `{n} domains are open at a time, and a new set opens at 00:00 and 12:00 UTC. Whoever holds one when it closes gets an extra hour of its Stars.`,
  'spot.how.one': `Hold up to {max} domains, each with different cards. Fight as often as you like; after a loss, wait {m} minutes to try that domain again.`,
  'spot.how.tire': `Held teams weaken over a few hours. You or a guildmate can cheer yours back to full every hour.`,
  'spot.how.rank': `Guilds score for every minute their members hold domains (Silver ×{silver}, Gold ×{gold}, Platinum ×{platinum}). The top 10 each month get rewards.`,
  'spot.rule.nine': `Every 9th turn, whoever acts lands guaranteed crits.`,
  'spot.rule.air-shooter': `Hits on a whole team deal 25% more.`,
  'spot.rule.the-world': `Turn advances and delays are 50% stronger.`,
  'spot.rule.presents': `Every card starts with a shield worth 10% of its max HP.`,
  'spot.rule.live': `After a Skill, a card has a 20% chance to go again.`,
  'spot.rule.sakura': `+15% crit rate for everyone.`,
  'spot.rule.blank': `Both teams start with 0 Skill Points.`,
  'spot.rule.spring': `Every card heals 4% of its max HP when its turn starts.`,
  'spot.rule.comet': `After turn 20, a comet hits every card for 25% of its max HP.`,
  'spot.rule.shred': `+5% ATK for every turn a card takes, up to +60%.`,
  'spot.rule.dodge': `Every hit has a 15% chance to miss.`,
  'spot.rule.mind-games': `Debuffs last 1 turn longer and are 25% stronger.`,
  'spot.rule.scramble': `Each card’s next turn comes up to 30% sooner or later.`,
  'spot.rule.crown': `The first card to knock someone out gets +30% damage for the rest of the fight.`,
  'spot.rule.drop': `Every 8th turn, whoever acts deals double damage.`,
  'spot.rule.aleph': `Basic attacks give 2 Skill Points instead of 1.`,
  'spot.rule.yomi': `The first card knocked out on each side comes back once with 30% HP.`,
  'spot.guild.title': `Domains your members hold ({n})`,
  'spot.guild.perDay': `Pays the bank up to`,
  'spot.guild.none': `None of your members holds a domain.`,
  'spot.guild.find': `Find a domain`,
  'bank.balance': `Guild bank`,
  'bank.income': `Fills up from members’ domains.`,
  'bank.depositLabel': `Put in Stars (at least {n})`,
  'bank.deposit': `Deposit`,
  'bank.depositNote': `Stars in the bank can’t be taken back out.`,
  'bank.deposited': `Deposited`,
  'bank.spend': `Spend`,
  'bank.rally': `Rally`,
  'bank.rallyText': `+{pct}% Account XP for every member (and the guild) for {h} hours.`,
  'bank.rallyLeft': `{t} left`,
  'bank.rallyOn': `Rally started`,
  'bank.buy': `Buy · {stars} Stars`,
  'bank.bannerTitle': `New banner`,
  'bank.bannerText': `Changing the banner costs {stars} Stars from the bank.`,
  'bank.editBanner': `Edit banner`,
  'bank.chiefsSpend': `Only Chiefs and the Owner can spend from the bank.`,
  'bank.log': `History`,
  'bank.logEmpty': `Nothing yet.`,
  'bank.log.income': `Domain income`,
  'bank.log.deposit': `{name} deposited`,
  'bank.log.banner': `{name} changed the banner`,
  'bank.log.tag': `{name} changed the tag`,
  'bank.log.rally': `{name} started a Rally`,
  'dev.banner': `Dev site: test away, nothing here touches the live game.`,
  'dev.backToLive': `Back to the live site`,
  'dev.signIn.title': `Dev site`,
  'dev.signIn.lead': `Sign in through the live site: your account and a copy of your collection come along.`,
  'dev.signIn.button': `Continue on the live site`,
  'dev.error.access': `This account doesn't have dev site access yet. Ask an admin.`,
  'dev.error.handoff': `That sign-in link expired. Open the dev site from the live one again.`,
  'dev.error.devSite': `Accounts on the dev site come from the live one: sign in there.`,
  'dev.error.live': `The live site didn't answer. Try again in a moment.`,
  'dev.gate.title': `Dev site`,
  'dev.gate.opening': `Opening the dev site…`,
  'dev.gate.noAccess': `The dev site is for testers an admin let in. Ask an admin if you should have access.`,
  'dev.gate.off': `There's no dev site right now.`,
  'dev.tools.title': `Dev tools`,
  'dev.tools.subtitle': `Spawn any card, material or mod, and change abilities. Stamina never runs out here.`,
  'dev.tools.spawn': `Spawn cards`,
  'dev.tools.player': `Player`,
  'dev.tools.findPlayer': `Find a player by name`,
  'dev.tools.rarity': `Tier`,
  'dev.tools.own': `Player's own`,
  'dev.tools.level': `Level`,
  'dev.tools.ascension': `Ascension`,
  'dev.tools.eidolon': `Eidolon`,
  'dev.tools.skill': `Skill`,
  'dev.tools.passive': `Passive`,
  'dev.tools.count': `How many`,
  'dev.tools.spawnButton': `Spawn {name}`,
  'dev.tools.pickFirst': `Pick a player first`,
  'dev.tools.spawned': `Spawned {n} cards`,
  'dev.tools.abilities': `Abilities`,
  'dev.tools.abilitiesHint': `Open any of your cards to change its Skill and passive (on the card's Overview).`,
  'dev.tools.devOnly': `Dev`,
  'dev.tools.save': `Save abilities`,
  'dev.tools.saved': `Abilities saved`,
  'dev.tools.materials': `Spawn materials`,
  'dev.tools.item': `Material`,
  'dev.tools.qty': `Amount (negative takes away)`,
  'dev.tools.itemButton': `Add to bag`,
  'dev.tools.itemDone': `You now have {n} {name}`,
  'dev.tools.mods': `Spawn mods`,
  'dev.tools.modType': `Mod`,
  'dev.tools.modStars': `Stars`,
  'dev.tools.modLevel': `Level`,
  'dev.tools.modButton': `Spawn mods`,
  'dev.tools.modDone': `Spawned {n} mods (they are in Mods)`
},
Wf = {
  en: `English`,
  es: `Español`,
  zh: `简体中文`,
  ru: `Русский`,
  ja: `日本語`,
  ko: `한국어`,
  fr: `Français`,
  pt: `Português (Brasil)`,
  de: `Deutsch`,
  pl: `Polski`
},
Gf = {
  es: () => D(() => import (`./es-HlMqRF5O.js`), []),
  zh: () => D(() => import (`./zh-DL_MDmQa.js`), []),
  ru: () => D(() => import (`./ru-BqtVsASX.js`), []),
  ja: () => D(() => import (`./ja-DfvHsvU_.js`), []),
  ko: () => D(() => import (`./ko-DBLraJ7o.js`), []),
  fr: () => D(() => import (`./fr-ldvqGAC3.js`), []),
  pt: () => D(() => import (`./pt-B8BJX2iJ.js`), []),
  de: () => D(() => import (`./de-DT1hkHli.js`), []),
  pl: () => D(() => import (`./pl-DvPNXvQ9.js`), [])
},
Kf = `lang`,
qf = e => !!e &&
Object.hasOwn(Wf, e);
function Jf() {
  try {
    let e = localStorage.getItem(Kf);
    if (qf(e)) return e
  } catch {
  }
  for (let e of navigator.languages ?? [navigator.language]) {
    let t = e.toLowerCase().split(`-`) [0];
    if (qf(t)) return t
  }
  return `en`
}
var Yf = {
  locale: `en`,
  messages: {
  },
  content: {
  }
},
Xf = new Set,
Zf = new Map([[`en`,
Yf]]),
Qf = `en`;
async function $f(e) {
  Qf = e;
  let t = Zf.get(e);
  if (!t) {
    let n = await Gf[e]();
    t = {
      locale: e,
      messages: n.default,
      content: n.content ?? {
      }
    },
    Zf.set(e, t)
  }
  Qf === e &&
  (Yf = t, document.documentElement.lang = e, Xf.forEach(e => e()))
}
async function ep(e) {
  try {
    localStorage.setItem(Kf, e)
  } catch {
  }
  await $f(e)
}
var tp = new Map,
np = new Map,
rp = (e, t = !1) => {
  let n = `${ e }:${ t }`;
  return tp.get(n) ?? tp.set(n, new Intl.PluralRules(e, {
    type: t ? `ordinal` : `cardinal`
  })).get(n)
},
ip = () => Yf.locale,
ap = e => np.get(e) ?? np.set(e, new Intl.NumberFormat(e)).get(e),
op = (e, t = Yf.locale) => ap(t).format(e),
sp = Uf,
cp = (e, t) => e[t];
function lp(e, t, n) {
  return t ? e.replace(
    /\{(\w+)\}/g,
    (e, r) => {
      let i = t[r];
      return i === void 0 ? e : typeof i == `number` ? op(i, n) : i
    }
  ) : e
}
function up(e, t, {
  locale: n,
  messages: r
}
= Yf) {
  let i;
  if (typeof t?.count == `number`) {
    let a = t.count,
    o = t.ordinal === `yes`;
    i = cp(r, `${ e }_${ rp(n, o).select(a) }`) ?? cp(r, `${ e }_other`),
    i ??= cp(sp, `${ e }_${ rp(`en`, o).select(a) }`) ?? cp(sp, `${ e }_other`)
  }
  return i ??= cp(r, e) ?? cp(sp, e),
  i === void 0 ? e : lp(i, t, n)
}
function dp(e, t) {
  let n = [],
  r = /<(\w+)>(.*?)<\/\1>/g,
  i = 0;
  for (let a = r.exec(e); a; a = r.exec(e)) {
    a.index > i &&
    n.push(e.slice(i, a.index));
    let[,
    o = ``,
    s = ``] = a,
    l = t[o];
    n.push((0, c.createElement) (c.Fragment, {
      key: a.index
    }, l ? l(s) : s)),
    i = r.lastIndex
  }
  return i < e.length &&
  n.push(e.slice(i)),
  n
}
var fp = (e, t, n) => lp(Yf.content[e] ?? t, n, Yf.locale),
pp = e => up(`rarity.${ e }`),
mp = (e, t, n) => dp(up(e, n), t),
hp = e => (Xf.add(e), () => Xf.delete(e)),
gp = () => Yf;
function _p() {
  let e = (0, c.useSyncExternalStore) (hp, gp);
  return {
    locale: e.locale,
    t: (t, n) => up(t, n, e),
    tr: (t, n, r) => dp(up(t, r, e), n),
    tc: (t, n, r) => lp(e.content[t] ?? n, r, e.locale),
    n: t => op(t, e.locale),
    setLocale: ep
  }
}
var vp = Jf();
document.documentElement.lang = vp,
vp !== `en` &&
$f(vp);
var yp = (0, c.createContext) (() => {
});
function bp({
  children: e
}) {
  let[t,
  n] = (0, c.useState) ([]),
  r = (0, c.useRef) (1),
  i = (0, c.useCallback) (e => n(t => t.filter(t => t.id !== e)), []),
  a = (0, c.useCallback) (
    (e, t, a) => {
      let o = r.current++;
      n(n => [...n.slice( - 3),
      {
        id: o,
        kind: e,
        message: t,
        link: a
      }
      ]),
      setTimeout(() => i(o), a ? 9000 : e === `error` ? 6000 : 3500)
    },
    [
      i
    ]
  );
  return (0, l.jsxs) (
    yp.Provider,
    {
      value: a,
      children: [
        e,
        (0, Hf.createPortal) (
          (0, l.jsx) (
            `div`,
            {
              className: `toasts`,
              role: `status`,
              'aria-live': `polite`,
              children: t.map(
                e => (0, l.jsxs) (
                  `div`,
                  {
                    className: `toast ${ e.kind }`,
                    children: [
                      (0, l.jsx) (`span`, {
                        children: e.message
                      }),
                      e.link &&
                      (0, l.jsx) (
                        zn,
                        {
                          className: `toast-link`,
                          to: e.link.to,
                          onClick: () => i(e.id),
                          children: e.link.label
                        }
                      ),
                      (0, l.jsx) (
                        `button`,
                        {
                          'aria-label': up(`common.dismiss`),
                          onClick: () => i(e.id),
                          children: `×`
                        }
                      )
                    ]
                  },
                  e.id
                )
              )
            }
          ),
          document.body
        )
      ]
    }
  )
}
var xp = () => (0, c.useContext) (yp);
function Sp({
  title: e,
  onClose: t,
  children: n,
  footer: r,
  width: i,
  closable: a = !0
}) {
  let o = (0, c.useRef) (null);
  return (0, c.useEffect) (
    () => {
      let e = e => {
        if (!a || e.key !== `Escape`) return;
        let n = document.querySelectorAll(`.overlay`);
        n[n.length - 1] === o.current?.parentElement &&
        t()
      };
      document.addEventListener(`keydown`, e);
      let n = document.activeElement;
      return o.current?.focus(),
      () => {
        document.removeEventListener(`keydown`, e),
        n?.focus()
      }
    },
    [
      t,
      a
    ]
  ),
  (0, Hf.createPortal) (
    (0, l.jsx) (
      `div`,
      {
        className: `overlay`,
        onMouseDown: e => a &&
        e.target === e.currentTarget &&
        t(),
        children: (0, l.jsxs) (
          `div`,
          {
            className: `dialog`,
            role: `dialog`,
            'aria-modal': `true`,
            tabIndex: - 1,
            ref: o,
            style: {
              '--dialog-w': i ? `${ i }px` : void 0
            },
            children: [
              (0, l.jsxs) (
                `div`,
                {
                  className: `dialog-head`,
                  children: [
                    (0, l.jsx) (`h2`, {
                      children: e
                    }),
                    a &&
                    (0, l.jsx) (
                      `button`,
                      {
                        className: `btn ghost small`,
                        onClick: t,
                        'aria-label': up(`common.close`),
                        children: `✕`
                      }
                    )
                  ]
                }
              ),
              (0, l.jsx) (`div`, {
                className: `dialog-body`,
                children: n
              }),
              r &&
              (0, l.jsx) (`div`, {
                className: `dialog-foot`,
                children: r
              })
            ]
          }
        )
      }
    ),
    document.body
  )
}
function Cp() {
  let[e,
  t] = (0, c.useState) (null),
  n = (0, c.useCallback) (
    e => new Promise(n => t({
      confirmLabel: up(`common.confirm`),
      ...e,
      resolve: n
    })),
    []
  ),
  r = n => {
    e?.resolve(n),
    t(null)
  };
  return {
    confirm: n,
    element: e ? (0, l.jsx) (
      Sp,
      {
        title: e.title,
        width: e.width,
        onClose: () => r(!1),
        footer: (0, l.jsxs) (
          l.Fragment,
          {
            children: [
              (0, l.jsx) (
                `button`,
                {
                  className: `btn ghost`,
                  onClick: () => r(!1),
                  children: up(`common.cancel`)
                }
              ),
              (0, l.jsx) (
                `button`,
                {
                  className: `btn ${ e.danger ? `danger` : `` }`,
                  onClick: () => r(!0),
                  autoFocus: !0,
                  children: e.confirmLabel
                }
              )
            ]
          }
        ),
        children: e.body
      }
    ) : null
  }
}
export {
  a as $,
  er as A,
  Bn as B,
  yf as C,
  df as D,
  uf as E,
  Yn as F,
  xn as G,
  _n as H,
  Qn as I,
  bt as J,
  D as K,
  $n as L,
  nr as M,
  rr as N,
  pf as O,
  ir as P,
  s as Q,
  Rn as R,
  _f as S,
  hf as T,
  vn as U,
  Un as V,
  yn as W,
  f as X,
  wt as Y,
  d as Z,
  Ff as _,
  Wf as a,
  Cf as b,
  pp as c,
  mp as d,
  r as et,
  _p as f,
  zf as g,
  Rf as h,
  xp as i,
  tr as j,
  tf as k,
  up as l,
  Vf as m,
  bp as n,
  ip as o,
  Lf as p,
  E as q,
  Cp as r,
  op as s,
  Sp as t,
  fp as u,
  Af as v,
  xf as w,
  vf as x,
  Sf as y,
  zn as z
};
