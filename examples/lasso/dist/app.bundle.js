!(function(t) {
  var e = {};
  function i(n) {
    if (e[n]) return e[n].exports;
    var r = (e[n] = { i: n, l: !1, exports: {} });
    return t[n].call(r.exports, r, r.exports, i), (r.l = !0), r.exports;
  }
  (i.m = t),
    (i.c = e),
    (i.d = function(t, e, n) {
      i.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
    }),
    (i.r = function(t) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(t, '__esModule', { value: !0 });
    }),
    (i.t = function(t, e) {
      if ((1 & e && (t = i(t)), 8 & e)) return t;
      if (4 & e && 'object' == typeof t && t && t.__esModule) return t;
      var n = Object.create(null);
      if (
        (i.r(n),
        Object.defineProperty(n, 'default', { enumerable: !0, value: t }),
        2 & e && 'string' != typeof t)
      )
        for (var r in t)
          i.d(
            n,
            r,
            function(e) {
              return t[e];
            }.bind(null, r)
          );
      return n;
    }),
    (i.n = function(t) {
      var e =
        t && t.__esModule
          ? function() {
              return t.default;
            }
          : function() {
              return t;
            };
      return i.d(e, 'a', e), e;
    }),
    (i.o = function(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (i.p = ''),
    i((i.s = 5));
})([
  function(t, e, i) {
    var n,
      r,
      s,
      a = function(o, h) {
        var u = (o = o || i(3)).window,
          c = o.document,
          l = new function() {
            var t = /^(statics|enumerable|beans|preserve)$/,
              e = [],
              i = e.slice,
              n = Object.create,
              r = Object.getOwnPropertyDescriptor,
              s = Object.defineProperty,
              a =
                e.forEach ||
                function(t, e) {
                  for (var i = 0, n = this.length; i < n; i++)
                    t.call(e, this[i], i, this);
                },
              o =
                Object.assign ||
                function(t) {
                  for (var e = 1, i = arguments.length; e < i; e++) {
                    var n = arguments[e];
                    for (var r in n) n.hasOwnProperty(r) && (t[r] = n[r]);
                  }
                  return t;
                },
              u = function(t, e, i) {
                if (t) {
                  var n = r(t, 'length');
                  (n && 'number' == typeof n.value
                    ? a
                    : function(t, e) {
                        for (var i in this)
                          this.hasOwnProperty(i) && t.call(e, this[i], i, this);
                      }
                  ).call(t, e, (i = i || t));
                }
                return i;
              };
            function c(e, i, n, a, o) {
              var h = {};
              function u(t, u) {
                'string' ==
                  typeof (u = u || ((u = r(i, t)) && (u.get ? u : u.value))) &&
                  '#' === u[0] &&
                  (u = e[u.substring(1)] || u);
                var c,
                  f = 'function' == typeof u,
                  d = u,
                  p = o || (f && !u.base) ? (u && u.get ? t in e : e[t]) : null;
                (o && p) ||
                  (f && p && (u.base = p),
                  f &&
                    !1 !== a &&
                    (c = t.match(/^([gs]et|is)(([A-Z])(.*))$/)) &&
                    (h[c[3].toLowerCase() + c[4]] = c[2]),
                  (d &&
                    !f &&
                    d.get &&
                    'function' == typeof d.get &&
                    l.isPlainObject(d)) ||
                    (d = { value: d, writable: !0 }),
                  (r(e, t) || { configurable: !0 }).configurable &&
                    ((d.configurable = !0),
                    (d.enumerable = null != n ? n : !c)),
                  s(e, t, d));
              }
              if (i) {
                for (var c in i) i.hasOwnProperty(c) && !t.test(c) && u(c);
                for (var c in h) {
                  var f = h[c],
                    d = e['set' + f],
                    p = e['get' + f] || (d && e['is' + f]);
                  !p ||
                    (!0 !== a && 0 !== p.length) ||
                    u(c, { get: p, set: d });
                }
              }
              return e;
            }
            function l() {
              for (var t = 0, e = arguments.length; t < e; t++) {
                var i = arguments[t];
                i && o(this, i);
              }
              return this;
            }
            return c(l, {
              inject: function(t) {
                if (t) {
                  var e = !0 === t.statics ? t : t.statics,
                    i = t.beans,
                    n = t.preserve;
                  e !== t && c(this.prototype, t, t.enumerable, i, n),
                    c(this, e, null, i, n);
                }
                for (var r = 1, s = arguments.length; r < s; r++)
                  this.inject(arguments[r]);
                return this;
              },
              extend: function() {
                for (
                  var t, e, i, r = this, a = 0, o = arguments.length;
                  a < o && (!t || !e);
                  a++
                )
                  (i = arguments[a]),
                    (t = t || i.initialize),
                    (e = e || i.prototype);
                return (
                  (e = (t =
                    t ||
                    function() {
                      r.apply(this, arguments);
                    }).prototype =
                    e || n(this.prototype)),
                  s(e, 'constructor', {
                    value: t,
                    writable: !0,
                    configurable: !0,
                  }),
                  c(t, this),
                  arguments.length && this.inject.apply(t, arguments),
                  (t.base = r),
                  t
                );
              },
            }).inject({
              enumerable: !1,
              initialize: l,
              set: l,
              inject: function() {
                for (var t = 0, e = arguments.length; t < e; t++) {
                  var i = arguments[t];
                  i && c(this, i, i.enumerable, i.beans, i.preserve);
                }
                return this;
              },
              extend: function() {
                var t = n(this);
                return t.inject.apply(t, arguments);
              },
              each: function(t, e) {
                return u(this, t, e);
              },
              clone: function() {
                return new this.constructor(this);
              },
              statics: {
                set: o,
                each: u,
                create: n,
                define: s,
                describe: r,
                clone: function(t) {
                  return o(new t.constructor(), t);
                },
                isPlainObject: function(t) {
                  var e = null != t && t.constructor;
                  return e && (e === Object || e === l || 'Object' === e.name);
                },
                pick: function(t, e) {
                  return t !== h ? t : e;
                },
                slice: function(t, e, n) {
                  return i.call(t, e, n);
                },
              },
            });
          }();
        (t.exports = l),
          l.inject(
            {
              enumerable: !1,
              toString: function() {
                return null != this._id
                  ? (this._class || 'Object') +
                      (this._name ? " '" + this._name + "'" : ' @' + this._id)
                  : '{ ' +
                      l
                        .each(
                          this,
                          function(t, e) {
                            if (!/^_/.test(e)) {
                              var i = typeof t;
                              this.push(
                                e +
                                  ': ' +
                                  ('number' === i
                                    ? g.instance.number(t)
                                    : 'string' === i
                                      ? "'" + t + "'"
                                      : t)
                              );
                            }
                          },
                          []
                        )
                        .join(', ') +
                      ' }';
              },
              getClassName: function() {
                return this._class || '';
              },
              importJSON: function(t) {
                return l.importJSON(t, this);
              },
              exportJSON: function(t) {
                return l.exportJSON(this, t);
              },
              toJSON: function() {
                return l.serialize(this);
              },
              set: function(t, e) {
                return t && l.filter(this, t, e, this._prioritize), this;
              },
            },
            {
              beans: !1,
              statics: {
                exports: {},
                extend: function t() {
                  var e = t.base.apply(this, arguments),
                    i = e.prototype._class;
                  return i && !l.exports[i] && (l.exports[i] = e), e;
                },
                equals: function(t, e) {
                  if (t === e) return !0;
                  if (t && t.equals) return t.equals(e);
                  if (e && e.equals) return e.equals(t);
                  if (t && e && 'object' == typeof t && 'object' == typeof e) {
                    if (Array.isArray(t) && Array.isArray(e)) {
                      if ((i = t.length) !== e.length) return !1;
                      for (; i--; ) if (!l.equals(t[i], e[i])) return !1;
                    } else {
                      var i,
                        n = Object.keys(t);
                      if ((i = n.length) !== Object.keys(e).length) return !1;
                      for (; i--; ) {
                        var r = n[i];
                        if (!e.hasOwnProperty(r) || !l.equals(t[r], e[r]))
                          return !1;
                      }
                    }
                    return !0;
                  }
                  return !1;
                },
                read: function(t, e, i, n) {
                  if (this === l) {
                    var r = this.peek(t, e);
                    return t.__index++, r;
                  }
                  var s = this.prototype,
                    a = s._readIndex,
                    o = e || (a && t.__index) || 0,
                    u = t.length,
                    c = t[o];
                  if (
                    ((n = n || u - o),
                    c instanceof this ||
                      (i && i.readNull && null == c && n <= 1))
                  )
                    return (
                      a && (t.__index = o + 1),
                      c && i && i.clone ? c.clone() : c
                    );
                  if (
                    ((c = l.create(s)),
                    a && (c.__read = !0),
                    (c =
                      c.initialize.apply(
                        c,
                        o > 0 || o + n < u ? l.slice(t, o, o + n) : t
                      ) || c),
                    a)
                  ) {
                    t.__index = o + c.__read;
                    var f = c.__filtered;
                    f && ((t.__filtered = f), (c.__filtered = h)),
                      (c.__read = h);
                  }
                  return c;
                },
                peek: function(t, e) {
                  return t[(t.__index = e || t.__index || 0)];
                },
                remain: function(t) {
                  return t.length - (t.__index || 0);
                },
                readList: function(t, e, i, n) {
                  for (
                    var r, s = [], a = e || 0, o = n ? a + n : t.length, h = a;
                    h < o;
                    h++
                  )
                    s.push(
                      Array.isArray((r = t[h]))
                        ? this.read(r, 0, i)
                        : this.read(t, h, i, 1)
                    );
                  return s;
                },
                readNamed: function(t, e, i, n, r) {
                  var s = this.getNamed(t, e),
                    a = s !== h;
                  if (a) {
                    var o = t.__filtered;
                    o ||
                      ((o = t.__filtered = l.create(t[0])).__unfiltered = t[0]),
                      (o[e] = h);
                  }
                  var u = a ? [s] : t;
                  return this.read(u, i, n, r);
                },
                getNamed: function(t, e) {
                  var i = t[0];
                  if (
                    (t._hasObject === h &&
                      (t._hasObject = 1 === t.length && l.isPlainObject(i)),
                    t._hasObject)
                  )
                    return e ? i[e] : t.__filtered || i;
                },
                hasNamed: function(t, e) {
                  return !!this.getNamed(t, e);
                },
                filter: function(t, e, i, n) {
                  var r;
                  function s(n) {
                    if (!((i && n in i) || (r && n in r))) {
                      var s = e[n];
                      s !== h && (t[n] = s);
                    }
                  }
                  if (n) {
                    for (var a, o = {}, u = 0, c = n.length; u < c; u++)
                      (a = n[u]) in e && (s(a), (o[a] = !0));
                    r = o;
                  }
                  return Object.keys(e.__unfiltered || e).forEach(s), t;
                },
                isPlainValue: function(t, e) {
                  return (
                    l.isPlainObject(t) ||
                    Array.isArray(t) ||
                    (e && 'string' == typeof t)
                  );
                },
                serialize: function(t, e, i, n) {
                  e = e || {};
                  var r,
                    s = !n;
                  if (
                    (s &&
                      ((e.formatter = new g(e.precision)),
                      (n = {
                        length: 0,
                        definitions: {},
                        references: {},
                        add: function(t, e) {
                          var i = '#' + t._id,
                            n = this.references[i];
                          if (!n) {
                            this.length++;
                            var r = e.call(t),
                              s = t._class;
                            s && r[0] !== s && r.unshift(s),
                              (this.definitions[i] = r),
                              (n = this.references[i] = [i]);
                          }
                          return n;
                        },
                      })),
                    t && t._serialize)
                  ) {
                    r = t._serialize(e, n);
                    var a = t._class;
                    !a ||
                      t._compactSerialize ||
                      (!s && i) ||
                      r[0] === a ||
                      r.unshift(a);
                  } else if (Array.isArray(t)) {
                    r = [];
                    for (var o = 0, h = t.length; o < h; o++)
                      r[o] = l.serialize(t[o], e, i, n);
                  } else if (l.isPlainObject(t)) {
                    r = {};
                    var u = Object.keys(t);
                    for (o = 0, h = u.length; o < h; o++) {
                      var c = u[o];
                      r[c] = l.serialize(t[c], e, i, n);
                    }
                  } else
                    r =
                      'number' == typeof t
                        ? e.formatter.number(t, e.precision)
                        : t;
                  return s && n.length > 0
                    ? [['dictionary', n.definitions], r]
                    : r;
                },
                deserialize: function(t, e, i, n, r) {
                  var s = t,
                    a = !i,
                    o = a && t && t.length && 'dictionary' === t[0][0];
                  if (((i = i || {}), Array.isArray(t))) {
                    var h = t[0],
                      u = 'dictionary' === h;
                    if (1 == t.length && /^#/.test(h)) return i.dictionary[h];
                    s = [];
                    for (
                      var c = (h = l.exports[h]) ? 1 : 0, f = t.length;
                      c < f;
                      c++
                    )
                      s.push(l.deserialize(t[c], e, i, u, o));
                    if (h) {
                      var d = s;
                      e
                        ? (s = e(h, d, a || r))
                        : ((s = l.create(h.prototype)), h.apply(s, d));
                    }
                  } else if (l.isPlainObject(t))
                    for (var p in ((s = {}), n && (i.dictionary = s), t))
                      s[p] = l.deserialize(t[p], e, i);
                  return o ? s[1] : s;
                },
                exportJSON: function(t, e) {
                  var i = l.serialize(t, e);
                  return e && 0 == e.asString ? i : JSON.stringify(i);
                },
                importJSON: function(t, e) {
                  return l.deserialize(
                    'string' == typeof t ? JSON.parse(t) : t,
                    function(t, i, n) {
                      var r = n && e && e.constructor === t,
                        s = r ? e : l.create(t.prototype);
                      if (
                        1 === i.length &&
                        s instanceof P &&
                        (r || !(s instanceof E))
                      ) {
                        var a = i[0];
                        l.isPlainObject(a) && (a.insert = !1);
                      }
                      return (r ? s.set : t).apply(s, i), r && (e = null), s;
                    }
                  );
                },
                splice: function(t, e, i, n) {
                  var r = e && e.length,
                    s = i === h;
                  (i = s ? t.length : i) > t.length && (i = t.length);
                  for (var a = 0; a < r; a++) e[a]._index = i + a;
                  if (s) return t.push.apply(t, e), [];
                  var o = [i, n];
                  e && o.push.apply(o, e);
                  for (
                    var u = t.splice.apply(t, o), c = ((a = 0), u.length);
                    a < c;
                    a++
                  )
                    u[a]._index = h;
                  for (a = i + r, c = t.length; a < c; a++) t[a]._index = a;
                  return u;
                },
                capitalize: function(t) {
                  return t.replace(/\b[a-z]/g, function(t) {
                    return t.toUpperCase();
                  });
                },
                camelize: function(t) {
                  return t.replace(/-(.)/g, function(t, e) {
                    return e.toUpperCase();
                  });
                },
                hyphenate: function(t) {
                  return t.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
                },
              },
            }
          );
        var f = {
            on: function(t, e) {
              if ('string' != typeof t)
                l.each(
                  t,
                  function(t, e) {
                    this.on(e, t);
                  },
                  this
                );
              else {
                var i = this._eventTypes,
                  n = i && i[t],
                  r = (this._callbacks = this._callbacks || {});
                -1 === (r = r[t] = r[t] || []).indexOf(e) &&
                  (r.push(e),
                  n && n.install && 1 === r.length && n.install.call(this, t));
              }
              return this;
            },
            off: function(t, e) {
              if ('string' == typeof t) {
                var i,
                  n = this._eventTypes,
                  r = n && n[t],
                  s = this._callbacks && this._callbacks[t];
                return (
                  s &&
                    (!e || (-1 !== (i = s.indexOf(e)) && 1 === s.length)
                      ? (r && r.uninstall && r.uninstall.call(this, t),
                        delete this._callbacks[t])
                      : -1 !== i && s.splice(i, 1)),
                  this
                );
              }
              l.each(
                t,
                function(t, e) {
                  this.off(e, t);
                },
                this
              );
            },
            once: function(t, e) {
              return this.on(t, function() {
                e.apply(this, arguments), this.off(t, e);
              });
            },
            emit: function(t, e) {
              var i = this._callbacks && this._callbacks[t];
              if (!i) return !1;
              var n = l.slice(arguments, 1),
                r = e && e.target && !e.currentTarget;
              (i = i.slice()), r && (e.currentTarget = this);
              for (var s = 0, a = i.length; s < a; s++)
                if (0 == i[s].apply(this, n)) {
                  e && e.stop && e.stop();
                  break;
                }
              return r && delete e.currentTarget, !0;
            },
            responds: function(t) {
              return !(!this._callbacks || !this._callbacks[t]);
            },
            attach: '#on',
            detach: '#off',
            fire: '#emit',
            _installEvents: function(t) {
              var e = this._eventTypes,
                i = this._callbacks,
                n = t ? 'install' : 'uninstall';
              if (e)
                for (var r in i)
                  if (i[r].length > 0) {
                    var s = e[r],
                      a = s && s[n];
                    a && a.call(this, r);
                  }
            },
            statics: {
              inject: function t(e) {
                var i = e._events;
                if (i) {
                  var n = {};
                  l.each(i, function(t, i) {
                    var r = 'string' == typeof t,
                      s = r ? t : i,
                      a = l.capitalize(s),
                      o = s.substring(2).toLowerCase();
                    (n[o] = r ? {} : t),
                      (s = '_' + s),
                      (e['get' + a] = function() {
                        return this[s];
                      }),
                      (e['set' + a] = function(t) {
                        var e = this[s];
                        e && this.off(o, e), t && this.on(o, t), (this[s] = t);
                      });
                  }),
                    (e._eventTypes = n);
                }
                return t.base.apply(this, arguments);
              },
            },
          },
          d = l.extend({
            _class: 'PaperScope',
            initialize: function t() {
              (a = this),
                (this.settings = new l({
                  applyMatrix: !0,
                  insertItems: !0,
                  handleSize: 4,
                  hitTolerance: 0,
                })),
                (this.project = null),
                (this.projects = []),
                (this.tools = []),
                (this._id = t._id++),
                (t._scopes[this._id] = this);
              var e = t.prototype;
              if (!this.support) {
                var i = ot.getContext(1, 1) || {};
                (e.support = {
                  nativeDash: 'setLineDash' in i || 'mozDash' in i,
                  nativeBlendModes: ht.nativeModes,
                }),
                  ot.release(i);
              }
              if (!this.agent) {
                var n = o.navigator.userAgent.toLowerCase(),
                  r = (/(darwin|win|mac|linux|freebsd|sunos)/.exec(n) || [])[0],
                  s = 'darwin' === r ? 'mac' : r,
                  h = (e.agent = e.browser = { platform: s });
                s && (h[s] = !0),
                  n.replace(
                    /(opera|chrome|safari|webkit|firefox|msie|trident|atom|node)\/?\s*([.\d]+)(?:.*version\/([.\d]+))?(?:.*rv\:v?([.\d]+))?/g,
                    function(t, e, i, n, r) {
                      if (!h.chrome) {
                        var s =
                          'opera' === e
                            ? n
                            : /^(node|trident)$/.test(e)
                              ? r
                              : i;
                        (h.version = s),
                          (h.versionNumber = parseFloat(s)),
                          (e = 'trident' === e ? 'msie' : e),
                          (h.name = e),
                          (h[e] = !0);
                      }
                    }
                  ),
                  h.chrome && delete h.webkit,
                  h.atom && delete h.chrome;
              }
            },
            version: '0.11.5',
            getView: function() {
              var t = this.project;
              return t && t._view;
            },
            getPaper: function() {
              return this;
            },
            execute: function(t, e) {
              a.PaperScript.execute(t, this, e), X.updateFocus();
            },
            install: function(t) {
              var e = this;
              for (var i in (l.each(['project', 'view', 'tool'], function(i) {
                l.define(t, i, {
                  configurable: !0,
                  get: function() {
                    return e[i];
                  },
                });
              }),
              this))
                !/^_/.test(i) && this[i] && (t[i] = this[i]);
            },
            setup: function(t) {
              return (a = this), (this.project = new A(t)), this;
            },
            createCanvas: function(t, e) {
              return ot.getCanvas(t, e);
            },
            activate: function() {
              a = this;
            },
            clear: function() {
              for (
                var t = this.projects, e = this.tools, i = t.length - 1;
                i >= 0;
                i--
              )
                t[i].remove();
              for (i = e.length - 1; i >= 0; i--) e[i].remove();
            },
            remove: function() {
              this.clear(), delete d._scopes[this._id];
            },
            statics: new function() {
              function t(t) {
                return (
                  (t += 'Attribute'),
                  function(e, i) {
                    return e[t](i) || e[t]('data-paper-' + i);
                  }
                );
              }
              return {
                _scopes: {},
                _id: 0,
                get: function(t) {
                  return this._scopes[t] || null;
                },
                getAttribute: t('get'),
                hasAttribute: t('has'),
              };
            }(),
          }),
          p = l.extend(f, {
            initialize: function(t) {
              (this._scope = a),
                (this._index = this._scope[this._list].push(this) - 1),
                (!t && this._scope[this._reference]) || this.activate();
            },
            activate: function() {
              if (!this._scope) return !1;
              var t = this._scope[this._reference];
              return (
                t && t !== this && t.emit('deactivate'),
                (this._scope[this._reference] = this),
                this.emit('activate', t),
                !0
              );
            },
            isActive: function() {
              return this._scope[this._reference] === this;
            },
            remove: function() {
              return (
                null != this._index &&
                (l.splice(this._scope[this._list], null, this._index, 1),
                this._scope[this._reference] == this &&
                  (this._scope[this._reference] = null),
                (this._scope = null),
                !0)
              );
            },
            getView: function() {
              return this._scope.getView();
            },
          }),
          g = l.extend({
            initialize: function(t) {
              (this.precision = l.pick(t, 5)),
                (this.multiplier = Math.pow(10, this.precision));
            },
            number: function(t) {
              return this.precision < 16
                ? Math.round(t * this.multiplier) / this.multiplier
                : t;
            },
            pair: function(t, e, i) {
              return this.number(t) + (i || ',') + this.number(e);
            },
            point: function(t, e) {
              return this.number(t.x) + (e || ',') + this.number(t.y);
            },
            size: function(t, e) {
              return this.number(t.width) + (e || ',') + this.number(t.height);
            },
            rectangle: function(t, e) {
              return this.point(t, e) + (e || ',') + this.size(t, e);
            },
          });
        g.instance = new g();
        var _ = new function() {
            var t = [
                [0.5773502691896257],
                [0, 0.7745966692414834],
                [0.33998104358485626, 0.8611363115940526],
                [0, 0.5384693101056831, 0.906179845938664],
                [0.2386191860831969, 0.6612093864662645, 0.932469514203152],
                [0, 0.4058451513773972, 0.7415311855993945, 0.9491079123427585],
                [
                  0.1834346424956498,
                  0.525532409916329,
                  0.7966664774136267,
                  0.9602898564975363,
                ],
                [
                  0,
                  0.3242534234038089,
                  0.6133714327005904,
                  0.8360311073266358,
                  0.9681602395076261,
                ],
                [
                  0.14887433898163122,
                  0.4333953941292472,
                  0.6794095682990244,
                  0.8650633666889845,
                  0.9739065285171717,
                ],
                [
                  0,
                  0.26954315595234496,
                  0.5190961292068118,
                  0.7301520055740494,
                  0.8870625997680953,
                  0.978228658146057,
                ],
                [
                  0.1252334085114689,
                  0.3678314989981802,
                  0.5873179542866175,
                  0.7699026741943047,
                  0.9041172563704749,
                  0.9815606342467192,
                ],
                [
                  0,
                  0.2304583159551348,
                  0.44849275103644687,
                  0.6423493394403402,
                  0.8015780907333099,
                  0.9175983992229779,
                  0.9841830547185881,
                ],
                [
                  0.10805494870734367,
                  0.31911236892788974,
                  0.5152486363581541,
                  0.6872929048116855,
                  0.827201315069765,
                  0.9284348836635735,
                  0.9862838086968123,
                ],
                [
                  0,
                  0.20119409399743451,
                  0.3941513470775634,
                  0.5709721726085388,
                  0.7244177313601701,
                  0.8482065834104272,
                  0.937273392400706,
                  0.9879925180204854,
                ],
                [
                  0.09501250983763744,
                  0.2816035507792589,
                  0.45801677765722737,
                  0.6178762444026438,
                  0.755404408355003,
                  0.8656312023878318,
                  0.9445750230732326,
                  0.9894009349916499,
                ],
              ],
              e = [
                [1],
                [0.8888888888888888, 0.5555555555555556],
                [0.6521451548625461, 0.34785484513745385],
                [0.5688888888888889, 0.47862867049936647, 0.23692688505618908],
                [0.46791393457269104, 0.3607615730481386, 0.17132449237917036],
                [
                  0.4179591836734694,
                  0.3818300505051189,
                  0.27970539148927664,
                  0.1294849661688697,
                ],
                [
                  0.362683783378362,
                  0.31370664587788727,
                  0.22238103445337448,
                  0.10122853629037626,
                ],
                [
                  0.3302393550012598,
                  0.31234707704000286,
                  0.26061069640293544,
                  0.1806481606948574,
                  0.08127438836157441,
                ],
                [
                  0.29552422471475287,
                  0.26926671930999635,
                  0.21908636251598204,
                  0.1494513491505806,
                  0.06667134430868814,
                ],
                [
                  0.2729250867779006,
                  0.26280454451024665,
                  0.23319376459199048,
                  0.18629021092773426,
                  0.1255803694649046,
                  0.05566856711617366,
                ],
                [
                  0.24914704581340277,
                  0.2334925365383548,
                  0.20316742672306592,
                  0.16007832854334622,
                  0.10693932599531843,
                  0.04717533638651183,
                ],
                [
                  0.2325515532308739,
                  0.22628318026289723,
                  0.2078160475368885,
                  0.17814598076194574,
                  0.13887351021978725,
                  0.09212149983772845,
                  0.04048400476531588,
                ],
                [
                  0.2152638534631578,
                  0.2051984637212956,
                  0.18553839747793782,
                  0.15720316715819355,
                  0.12151857068790319,
                  0.08015808715976021,
                  0.03511946033175186,
                ],
                [
                  0.2025782419255613,
                  0.19843148532711158,
                  0.1861610000155622,
                  0.16626920581699392,
                  0.13957067792615432,
                  0.10715922046717194,
                  0.07036604748810812,
                  0.03075324199611727,
                ],
                [
                  0.1894506104550685,
                  0.18260341504492358,
                  0.16915651939500254,
                  0.14959598881657674,
                  0.12462897125553388,
                  0.09515851168249279,
                  0.062253523938647894,
                  0.027152459411754096,
                ],
              ],
              i = Math.abs,
              n = Math.sqrt,
              r = Math.pow,
              s =
                Math.log2 ||
                function(t) {
                  return Math.log(t) * Math.LOG2E;
                };
            function a(t, e, i) {
              return t < e ? e : t > i ? i : t;
            }
            function o(t, e, n) {
              function r(t) {
                var e = 134217729 * t,
                  i = t - e + e;
                return [i, t - i];
              }
              var s = e * e - t * n,
                a = e * e + t * n;
              if (3 * i(s) < a) {
                var o = r(t),
                  h = r(e),
                  u = r(n),
                  c = e * e,
                  l = t * n;
                s =
                  c -
                  l +
                  (h[0] * h[0] -
                    c +
                    2 * h[0] * h[1] +
                    h[1] * h[1] -
                    (o[0] * u[0] -
                      l +
                      o[0] * u[1] +
                      o[1] * u[0] +
                      o[1] * u[1]));
              }
              return s;
            }
            function h() {
              var t = Math.max.apply(Math, arguments);
              return t && (t < 1e-8 || t > 1e8) ? r(2, -Math.round(s(t))) : 0;
            }
            return {
              EPSILON: 1e-12,
              MACHINE_EPSILON: 1.12e-16,
              CURVETIME_EPSILON: 1e-8,
              GEOMETRIC_EPSILON: 1e-7,
              TRIGONOMETRIC_EPSILON: 1e-8,
              KAPPA: 4 * (n(2) - 1) / 3,
              isZero: function(t) {
                return t >= -1e-12 && t <= 1e-12;
              },
              clamp: a,
              integrate: function(i, n, r, s) {
                for (
                  var a = t[s - 2],
                    o = e[s - 2],
                    h = 0.5 * (r - n),
                    u = h + n,
                    c = 0,
                    l = (s + 1) >> 1,
                    f = 1 & s ? o[c++] * i(u) : 0;
                  c < l;

                ) {
                  var d = h * a[c];
                  f += o[c++] * (i(u + d) + i(u - d));
                }
                return h * f;
              },
              findRoot: function(t, e, n, r, s, o, h) {
                for (var u = 0; u < o; u++) {
                  var c = t(n),
                    l = c / e(n),
                    f = n - l;
                  if (i(l) < h) {
                    n = f;
                    break;
                  }
                  c > 0
                    ? ((s = n), (n = f <= r ? 0.5 * (r + s) : f))
                    : ((r = n), (n = f >= s ? 0.5 * (r + s) : f));
                }
                return a(n, r, s);
              },
              solveQuadratic: function(t, e, r, s, u, c) {
                var l,
                  f = 1 / 0;
                if (i(t) < 1e-12) {
                  if (i(e) < 1e-12) return i(r) < 1e-12 ? -1 : 0;
                  l = -r / e;
                } else {
                  var d = o(t, (e *= -0.5), r);
                  if (d && i(d) < 1.12e-16) {
                    var p = h(i(t), i(e), i(r));
                    p && (d = o((t *= p), (e *= p), (r *= p)));
                  }
                  if (d >= -1.12e-16) {
                    var g = d < 0 ? 0 : n(d),
                      _ = e + (e < 0 ? -g : g);
                    0 === _ ? (f = -(l = r / t)) : ((l = _ / t), (f = r / _));
                  }
                }
                var v = 0,
                  m = null == u,
                  y = u - 1e-12,
                  x = c + 1e-12;
                return (
                  isFinite(l) &&
                    (m || (l > y && l < x)) &&
                    (s[v++] = m ? l : a(l, u, c)),
                  f !== l &&
                    isFinite(f) &&
                    (m || (f > y && f < x)) &&
                    (s[v++] = m ? f : a(f, u, c)),
                  v
                );
              },
              solveCubic: function(t, e, s, o, u, c, l) {
                var f,
                  d,
                  p,
                  g,
                  v,
                  m = h(i(t), i(e), i(s), i(o));
                function y(i) {
                  var n = t * (f = i);
                  (g = (n + (d = n + e)) * f + (p = d * f + s)),
                    (v = p * f + o);
                }
                if (
                  (m && ((t *= m), (e *= m), (s *= m), (o *= m)), i(t) < 1e-12)
                )
                  (t = e), (d = s), (p = o), (f = 1 / 0);
                else if (i(o) < 1e-12) (d = e), (p = s), (f = 0);
                else {
                  y(-e / t / 3);
                  var x = v / t,
                    w = r(i(x), 1 / 3),
                    b = x < 0 ? -1 : 1,
                    C = -g / t,
                    S = C > 0 ? 1.324717957244746 * Math.max(w, n(C)) : w,
                    k = f - b * S;
                  if (k !== f) {
                    do {
                      y(k), (k = 0 === g ? f : f - v / g / (1 + 1.12e-16));
                    } while (b * k > b * f);
                    i(t) * f * f > i(o / f) && (d = ((p = -o / f) - s) / f);
                  }
                }
                var A = _.solveQuadratic(t, d, p, u, c, l),
                  P = null == c;
                return (
                  isFinite(f) &&
                    (0 === A || (A > 0 && f !== u[0] && f !== u[1])) &&
                    (P || (f > c - 1e-12 && f < l + 1e-12)) &&
                    (u[A++] = P ? f : a(f, c, l)),
                  A
                );
              },
            };
          }(),
          v = {
            _id: 1,
            _pools: {},
            get: function(t) {
              if (t) {
                var e = this._pools[t];
                return e || (e = this._pools[t] = { _id: 1 }), e._id++;
              }
              return this._id++;
            },
          },
          m = l.extend(
            {
              _class: 'Point',
              _readIndex: !0,
              initialize: function(t, e) {
                var i = typeof t,
                  n = this.__read,
                  r = 0;
                if ('number' === i) {
                  var s = 'number' == typeof e;
                  this._set(t, s ? e : t), n && (r = s ? 2 : 1);
                } else if ('undefined' === i || null === t)
                  this._set(0, 0), n && (r = null === t ? 1 : 0);
                else {
                  var a = 'string' === i ? t.split(/[\s,]+/) || [] : t;
                  (r = 1),
                    Array.isArray(a)
                      ? this._set(+a[0], +(a.length > 1 ? a[1] : a[0]))
                      : 'x' in a
                        ? this._set(a.x || 0, a.y || 0)
                        : 'width' in a
                          ? this._set(a.width || 0, a.height || 0)
                          : 'angle' in a
                            ? (this._set(a.length || 0, 0),
                              this.setAngle(a.angle || 0))
                            : (this._set(0, 0), (r = 0));
                }
                return n && (this.__read = r), this;
              },
              set: '#initialize',
              _set: function(t, e) {
                return (this.x = t), (this.y = e), this;
              },
              equals: function(t) {
                return (
                  this === t ||
                  (t &&
                    ((this.x === t.x && this.y === t.y) ||
                      (Array.isArray(t) &&
                        this.x === t[0] &&
                        this.y === t[1]))) ||
                  !1
                );
              },
              clone: function() {
                return new m(this.x, this.y);
              },
              toString: function() {
                var t = g.instance;
                return (
                  '{ x: ' + t.number(this.x) + ', y: ' + t.number(this.y) + ' }'
                );
              },
              _serialize: function(t) {
                var e = t.formatter;
                return [e.number(this.x), e.number(this.y)];
              },
              getLength: function() {
                return Math.sqrt(this.x * this.x + this.y * this.y);
              },
              setLength: function(t) {
                if (this.isZero()) {
                  var e = this._angle || 0;
                  this._set(Math.cos(e) * t, Math.sin(e) * t);
                } else {
                  var i = t / this.getLength();
                  _.isZero(i) && this.getAngle(),
                    this._set(this.x * i, this.y * i);
                }
              },
              getAngle: function() {
                return (
                  180 * this.getAngleInRadians.apply(this, arguments) / Math.PI
                );
              },
              setAngle: function(t) {
                this.setAngleInRadians.call(this, t * Math.PI / 180);
              },
              getAngleInDegrees: '#getAngle',
              setAngleInDegrees: '#setAngle',
              getAngleInRadians: function() {
                if (arguments.length) {
                  var t = m.read(arguments),
                    e = this.getLength() * t.getLength();
                  if (_.isZero(e)) return NaN;
                  var i = this.dot(t) / e;
                  return Math.acos(i < -1 ? -1 : i > 1 ? 1 : i);
                }
                return this.isZero()
                  ? this._angle || 0
                  : (this._angle = Math.atan2(this.y, this.x));
              },
              setAngleInRadians: function(t) {
                if (((this._angle = t), !this.isZero())) {
                  var e = this.getLength();
                  this._set(Math.cos(t) * e, Math.sin(t) * e);
                }
              },
              getQuadrant: function() {
                return this.x >= 0
                  ? this.y >= 0
                    ? 1
                    : 4
                  : this.y >= 0
                    ? 2
                    : 3;
              },
            },
            {
              beans: !1,
              getDirectedAngle: function() {
                var t = m.read(arguments);
                return 180 * Math.atan2(this.cross(t), this.dot(t)) / Math.PI;
              },
              getDistance: function() {
                var t = m.read(arguments),
                  e = t.x - this.x,
                  i = t.y - this.y,
                  n = e * e + i * i;
                return l.read(arguments) ? n : Math.sqrt(n);
              },
              normalize: function(t) {
                t === h && (t = 1);
                var e = this.getLength(),
                  i = 0 !== e ? t / e : 0,
                  n = new m(this.x * i, this.y * i);
                return i >= 0 && (n._angle = this._angle), n;
              },
              rotate: function(t, e) {
                if (0 === t) return this.clone();
                t = t * Math.PI / 180;
                var i = e ? this.subtract(e) : this,
                  n = Math.sin(t),
                  r = Math.cos(t);
                return (
                  (i = new m(i.x * r - i.y * n, i.x * n + i.y * r)),
                  e ? i.add(e) : i
                );
              },
              transform: function(t) {
                return t ? t._transformPoint(this) : this;
              },
              add: function() {
                var t = m.read(arguments);
                return new m(this.x + t.x, this.y + t.y);
              },
              subtract: function() {
                var t = m.read(arguments);
                return new m(this.x - t.x, this.y - t.y);
              },
              multiply: function() {
                var t = m.read(arguments);
                return new m(this.x * t.x, this.y * t.y);
              },
              divide: function() {
                var t = m.read(arguments);
                return new m(this.x / t.x, this.y / t.y);
              },
              modulo: function() {
                var t = m.read(arguments);
                return new m(this.x % t.x, this.y % t.y);
              },
              negate: function() {
                return new m(-this.x, -this.y);
              },
              isInside: function() {
                return b.read(arguments).contains(this);
              },
              isClose: function() {
                var t = m.read(arguments),
                  e = l.read(arguments);
                return this.getDistance(t) <= e;
              },
              isCollinear: function() {
                var t = m.read(arguments);
                return m.isCollinear(this.x, this.y, t.x, t.y);
              },
              isColinear: '#isCollinear',
              isOrthogonal: function() {
                var t = m.read(arguments);
                return m.isOrthogonal(this.x, this.y, t.x, t.y);
              },
              isZero: function() {
                var t = _.isZero;
                return t(this.x) && t(this.y);
              },
              isNaN: function() {
                return isNaN(this.x) || isNaN(this.y);
              },
              isInQuadrant: function(t) {
                return (
                  this.x * (t > 1 && t < 4 ? -1 : 1) >= 0 &&
                  this.y * (t > 2 ? -1 : 1) >= 0
                );
              },
              dot: function() {
                var t = m.read(arguments);
                return this.x * t.x + this.y * t.y;
              },
              cross: function() {
                var t = m.read(arguments);
                return this.x * t.y - this.y * t.x;
              },
              project: function() {
                var t = m.read(arguments),
                  e = t.isZero() ? 0 : this.dot(t) / t.dot(t);
                return new m(t.x * e, t.y * e);
              },
              statics: {
                min: function() {
                  var t = m.read(arguments),
                    e = m.read(arguments);
                  return new m(Math.min(t.x, e.x), Math.min(t.y, e.y));
                },
                max: function() {
                  var t = m.read(arguments),
                    e = m.read(arguments);
                  return new m(Math.max(t.x, e.x), Math.max(t.y, e.y));
                },
                random: function() {
                  return new m(Math.random(), Math.random());
                },
                isCollinear: function(t, e, i, n) {
                  return (
                    Math.abs(t * n - e * i) <=
                    1e-8 * Math.sqrt((t * t + e * e) * (i * i + n * n))
                  );
                },
                isOrthogonal: function(t, e, i, n) {
                  return (
                    Math.abs(t * i + e * n) <=
                    1e-8 * Math.sqrt((t * t + e * e) * (i * i + n * n))
                  );
                },
              },
            },
            l.each(
              ['round', 'ceil', 'floor', 'abs'],
              function(t) {
                var e = Math[t];
                this[t] = function() {
                  return new m(e(this.x), e(this.y));
                };
              },
              {}
            )
          ),
          y = m.extend({
            initialize: function(t, e, i, n) {
              (this._x = t),
                (this._y = e),
                (this._owner = i),
                (this._setter = n);
            },
            _set: function(t, e, i) {
              return (
                (this._x = t),
                (this._y = e),
                i || this._owner[this._setter](this),
                this
              );
            },
            getX: function() {
              return this._x;
            },
            setX: function(t) {
              (this._x = t), this._owner[this._setter](this);
            },
            getY: function() {
              return this._y;
            },
            setY: function(t) {
              (this._y = t), this._owner[this._setter](this);
            },
            isSelected: function() {
              return !!(this._owner._selection & this._getSelection());
            },
            setSelected: function(t) {
              this._owner._changeSelection(this._getSelection(), t);
            },
            _getSelection: function() {
              return 'setPosition' === this._setter ? 4 : 0;
            },
          }),
          x = l.extend(
            {
              _class: 'Size',
              _readIndex: !0,
              initialize: function(t, e) {
                var i = typeof t,
                  n = this.__read,
                  r = 0;
                if ('number' === i) {
                  var s = 'number' == typeof e;
                  this._set(t, s ? e : t), n && (r = s ? 2 : 1);
                } else if ('undefined' === i || null === t)
                  this._set(0, 0), n && (r = null === t ? 1 : 0);
                else {
                  var a = 'string' === i ? t.split(/[\s,]+/) || [] : t;
                  (r = 1),
                    Array.isArray(a)
                      ? this._set(+a[0], +(a.length > 1 ? a[1] : a[0]))
                      : 'width' in a
                        ? this._set(a.width || 0, a.height || 0)
                        : 'x' in a
                          ? this._set(a.x || 0, a.y || 0)
                          : (this._set(0, 0), (r = 0));
                }
                return n && (this.__read = r), this;
              },
              set: '#initialize',
              _set: function(t, e) {
                return (this.width = t), (this.height = e), this;
              },
              equals: function(t) {
                return (
                  t === this ||
                  (t &&
                    ((this.width === t.width && this.height === t.height) ||
                      (Array.isArray(t) &&
                        this.width === t[0] &&
                        this.height === t[1]))) ||
                  !1
                );
              },
              clone: function() {
                return new x(this.width, this.height);
              },
              toString: function() {
                var t = g.instance;
                return (
                  '{ width: ' +
                  t.number(this.width) +
                  ', height: ' +
                  t.number(this.height) +
                  ' }'
                );
              },
              _serialize: function(t) {
                var e = t.formatter;
                return [e.number(this.width), e.number(this.height)];
              },
              add: function() {
                var t = x.read(arguments);
                return new x(this.width + t.width, this.height + t.height);
              },
              subtract: function() {
                var t = x.read(arguments);
                return new x(this.width - t.width, this.height - t.height);
              },
              multiply: function() {
                var t = x.read(arguments);
                return new x(this.width * t.width, this.height * t.height);
              },
              divide: function() {
                var t = x.read(arguments);
                return new x(this.width / t.width, this.height / t.height);
              },
              modulo: function() {
                var t = x.read(arguments);
                return new x(this.width % t.width, this.height % t.height);
              },
              negate: function() {
                return new x(-this.width, -this.height);
              },
              isZero: function() {
                var t = _.isZero;
                return t(this.width) && t(this.height);
              },
              isNaN: function() {
                return isNaN(this.width) || isNaN(this.height);
              },
              statics: {
                min: function(t, e) {
                  return new x(
                    Math.min(t.width, e.width),
                    Math.min(t.height, e.height)
                  );
                },
                max: function(t, e) {
                  return new x(
                    Math.max(t.width, e.width),
                    Math.max(t.height, e.height)
                  );
                },
                random: function() {
                  return new x(Math.random(), Math.random());
                },
              },
            },
            l.each(
              ['round', 'ceil', 'floor', 'abs'],
              function(t) {
                var e = Math[t];
                this[t] = function() {
                  return new x(e(this.width), e(this.height));
                };
              },
              {}
            )
          ),
          w = x.extend({
            initialize: function(t, e, i, n) {
              (this._width = t),
                (this._height = e),
                (this._owner = i),
                (this._setter = n);
            },
            _set: function(t, e, i) {
              return (
                (this._width = t),
                (this._height = e),
                i || this._owner[this._setter](this),
                this
              );
            },
            getWidth: function() {
              return this._width;
            },
            setWidth: function(t) {
              (this._width = t), this._owner[this._setter](this);
            },
            getHeight: function() {
              return this._height;
            },
            setHeight: function(t) {
              (this._height = t), this._owner[this._setter](this);
            },
          }),
          b = l.extend(
            {
              _class: 'Rectangle',
              _readIndex: !0,
              beans: !0,
              initialize: function(t, e, i, n) {
                var r,
                  s = typeof t;
                if (
                  ('number' === s
                    ? (this._set(t, e, i, n), (r = 4))
                    : 'undefined' === s || null === t
                      ? (this._set(0, 0, 0, 0), (r = null === t ? 1 : 0))
                      : 1 === arguments.length &&
                        (Array.isArray(t)
                          ? (this._set.apply(this, t), (r = 1))
                          : t.x !== h || t.width !== h
                            ? (this._set(
                                t.x || 0,
                                t.y || 0,
                                t.width || 0,
                                t.height || 0
                              ),
                              (r = 1))
                            : t.from === h &&
                              t.to === h &&
                              (this._set(0, 0, 0, 0),
                              l.filter(this, t),
                              (r = 1))),
                  r === h)
                ) {
                  var a,
                    o,
                    u = m.readNamed(arguments, 'from'),
                    c = l.peek(arguments),
                    f = u.x,
                    d = u.y;
                  if ((c && c.x !== h) || l.hasNamed(arguments, 'to')) {
                    var p = m.readNamed(arguments, 'to');
                    (a = p.x - f),
                      (o = p.y - d),
                      a < 0 && ((f = p.x), (a = -a)),
                      o < 0 && ((d = p.y), (o = -o));
                  } else {
                    var g = x.read(arguments);
                    (a = g.width), (o = g.height);
                  }
                  this._set(f, d, a, o), (r = arguments.__index);
                  var _ = arguments.__filtered;
                  _ && (this.__filtered = _);
                }
                return this.__read && (this.__read = r), this;
              },
              set: '#initialize',
              _set: function(t, e, i, n) {
                return (
                  (this.x = t),
                  (this.y = e),
                  (this.width = i),
                  (this.height = n),
                  this
                );
              },
              clone: function() {
                return new b(this.x, this.y, this.width, this.height);
              },
              equals: function(t) {
                var e = l.isPlainValue(t) ? b.read(arguments) : t;
                return (
                  e === this ||
                  (e &&
                    this.x === e.x &&
                    this.y === e.y &&
                    this.width === e.width &&
                    this.height === e.height) ||
                  !1
                );
              },
              toString: function() {
                var t = g.instance;
                return (
                  '{ x: ' +
                  t.number(this.x) +
                  ', y: ' +
                  t.number(this.y) +
                  ', width: ' +
                  t.number(this.width) +
                  ', height: ' +
                  t.number(this.height) +
                  ' }'
                );
              },
              _serialize: function(t) {
                var e = t.formatter;
                return [
                  e.number(this.x),
                  e.number(this.y),
                  e.number(this.width),
                  e.number(this.height),
                ];
              },
              getPoint: function(t) {
                return new (t ? m : y)(this.x, this.y, this, 'setPoint');
              },
              setPoint: function() {
                var t = m.read(arguments);
                (this.x = t.x), (this.y = t.y);
              },
              getSize: function(t) {
                return new (t ? x : w)(
                  this.width,
                  this.height,
                  this,
                  'setSize'
                );
              },
              _fw: 1,
              _fh: 1,
              setSize: function() {
                var t = x.read(arguments),
                  e = this._sx,
                  i = this._sy,
                  n = t.width,
                  r = t.height;
                e && (this.x += (this.width - n) * e),
                  i && (this.y += (this.height - r) * i),
                  (this.width = n),
                  (this.height = r),
                  (this._fw = this._fh = 1);
              },
              getLeft: function() {
                return this.x;
              },
              setLeft: function(t) {
                if (!this._fw) {
                  var e = t - this.x;
                  this.width -= 0.5 === this._sx ? 2 * e : e;
                }
                (this.x = t), (this._sx = this._fw = 0);
              },
              getTop: function() {
                return this.y;
              },
              setTop: function(t) {
                if (!this._fh) {
                  var e = t - this.y;
                  this.height -= 0.5 === this._sy ? 2 * e : e;
                }
                (this.y = t), (this._sy = this._fh = 0);
              },
              getRight: function() {
                return this.x + this.width;
              },
              setRight: function(t) {
                if (!this._fw) {
                  var e = t - this.x;
                  this.width = 0.5 === this._sx ? 2 * e : e;
                }
                (this.x = t - this.width), (this._sx = 1), (this._fw = 0);
              },
              getBottom: function() {
                return this.y + this.height;
              },
              setBottom: function(t) {
                if (!this._fh) {
                  var e = t - this.y;
                  this.height = 0.5 === this._sy ? 2 * e : e;
                }
                (this.y = t - this.height), (this._sy = 1), (this._fh = 0);
              },
              getCenterX: function() {
                return this.x + this.width / 2;
              },
              setCenterX: function(t) {
                this._fw || 0.5 === this._sx
                  ? (this.x = t - this.width / 2)
                  : (this._sx && (this.x += 2 * (t - this.x) * this._sx),
                    (this.width = 2 * (t - this.x))),
                  (this._sx = 0.5),
                  (this._fw = 0);
              },
              getCenterY: function() {
                return this.y + this.height / 2;
              },
              setCenterY: function(t) {
                this._fh || 0.5 === this._sy
                  ? (this.y = t - this.height / 2)
                  : (this._sy && (this.y += 2 * (t - this.y) * this._sy),
                    (this.height = 2 * (t - this.y))),
                  (this._sy = 0.5),
                  (this._fh = 0);
              },
              getCenter: function(t) {
                return new (t ? m : y)(
                  this.getCenterX(),
                  this.getCenterY(),
                  this,
                  'setCenter'
                );
              },
              setCenter: function() {
                var t = m.read(arguments);
                return this.setCenterX(t.x), this.setCenterY(t.y), this;
              },
              getArea: function() {
                return this.width * this.height;
              },
              isEmpty: function() {
                return 0 === this.width || 0 === this.height;
              },
              contains: function(t) {
                return (t && t.width !== h) ||
                  4 === (Array.isArray(t) ? t : arguments).length
                  ? this._containsRectangle(b.read(arguments))
                  : this._containsPoint(m.read(arguments));
              },
              _containsPoint: function(t) {
                var e = t.x,
                  i = t.y;
                return (
                  e >= this.x &&
                  i >= this.y &&
                  e <= this.x + this.width &&
                  i <= this.y + this.height
                );
              },
              _containsRectangle: function(t) {
                var e = t.x,
                  i = t.y;
                return (
                  e >= this.x &&
                  i >= this.y &&
                  e + t.width <= this.x + this.width &&
                  i + t.height <= this.y + this.height
                );
              },
              intersects: function() {
                var t = b.read(arguments),
                  e = l.read(arguments) || 0;
                return (
                  t.x + t.width > this.x - e &&
                  t.y + t.height > this.y - e &&
                  t.x < this.x + this.width + e &&
                  t.y < this.y + this.height + e
                );
              },
              intersect: function() {
                var t = b.read(arguments),
                  e = Math.max(this.x, t.x),
                  i = Math.max(this.y, t.y),
                  n = Math.min(this.x + this.width, t.x + t.width),
                  r = Math.min(this.y + this.height, t.y + t.height);
                return new b(e, i, n - e, r - i);
              },
              unite: function() {
                var t = b.read(arguments),
                  e = Math.min(this.x, t.x),
                  i = Math.min(this.y, t.y),
                  n = Math.max(this.x + this.width, t.x + t.width),
                  r = Math.max(this.y + this.height, t.y + t.height);
                return new b(e, i, n - e, r - i);
              },
              include: function() {
                var t = m.read(arguments),
                  e = Math.min(this.x, t.x),
                  i = Math.min(this.y, t.y),
                  n = Math.max(this.x + this.width, t.x),
                  r = Math.max(this.y + this.height, t.y);
                return new b(e, i, n - e, r - i);
              },
              expand: function() {
                var t = x.read(arguments),
                  e = t.width,
                  i = t.height;
                return new b(
                  this.x - e / 2,
                  this.y - i / 2,
                  this.width + e,
                  this.height + i
                );
              },
              scale: function(t, e) {
                return this.expand(
                  this.width * t - this.width,
                  this.height * (e === h ? t : e) - this.height
                );
              },
            },
            l.each(
              [
                ['Top', 'Left'],
                ['Top', 'Right'],
                ['Bottom', 'Left'],
                ['Bottom', 'Right'],
                ['Left', 'Center'],
                ['Top', 'Center'],
                ['Right', 'Center'],
                ['Bottom', 'Center'],
              ],
              function(t, e) {
                var i = t.join(''),
                  n = /^[RL]/.test(i);
                e >= 4 && (t[1] += n ? 'Y' : 'X');
                var r = t[n ? 0 : 1],
                  s = t[n ? 1 : 0],
                  a = 'get' + r,
                  o = 'get' + s,
                  h = 'set' + r,
                  u = 'set' + s,
                  c = 'set' + i;
                (this['get' + i] = function(t) {
                  return new (t ? m : y)(this[a](), this[o](), this, c);
                }),
                  (this[c] = function() {
                    var t = m.read(arguments);
                    this[h](t.x), this[u](t.y);
                  });
              },
              { beans: !0 }
            )
          ),
          C = b.extend(
            {
              initialize: function(t, e, i, n, r, s) {
                this._set(t, e, i, n, !0),
                  (this._owner = r),
                  (this._setter = s);
              },
              _set: function(t, e, i, n, r) {
                return (
                  (this._x = t),
                  (this._y = e),
                  (this._width = i),
                  (this._height = n),
                  r || this._owner[this._setter](this),
                  this
                );
              },
            },
            new function() {
              var t = b.prototype;
              return l.each(
                ['x', 'y', 'width', 'height'],
                function(t) {
                  var e = l.capitalize(t),
                    i = '_' + t;
                  (this['get' + e] = function() {
                    return this[i];
                  }),
                    (this['set' + e] = function(t) {
                      (this[i] = t),
                        this._dontNotify || this._owner[this._setter](this);
                    });
                },
                l.each(
                  [
                    'Point',
                    'Size',
                    'Center',
                    'Left',
                    'Top',
                    'Right',
                    'Bottom',
                    'CenterX',
                    'CenterY',
                    'TopLeft',
                    'TopRight',
                    'BottomLeft',
                    'BottomRight',
                    'LeftCenter',
                    'TopCenter',
                    'RightCenter',
                    'BottomCenter',
                  ],
                  function(e) {
                    var i = 'set' + e;
                    this[i] = function() {
                      (this._dontNotify = !0),
                        t[i].apply(this, arguments),
                        (this._dontNotify = !1),
                        this._owner[this._setter](this);
                    };
                  },
                  {
                    isSelected: function() {
                      return !!(2 & this._owner._selection);
                    },
                    setSelected: function(t) {
                      var e = this._owner;
                      e._changeSelection && e._changeSelection(2, t);
                    },
                  }
                )
              );
            }()
          ),
          S = l.extend(
            {
              _class: 'Matrix',
              initialize: function t(e, i) {
                var n = arguments.length,
                  r = !0;
                if (
                  (n >= 6
                    ? this._set.apply(this, arguments)
                    : 1 === n || 2 === n
                      ? e instanceof t
                        ? this._set(e._a, e._b, e._c, e._d, e._tx, e._ty, i)
                        : Array.isArray(e)
                          ? this._set.apply(this, i ? e.concat([i]) : e)
                          : (r = !1)
                      : n
                        ? (r = !1)
                        : this.reset(),
                  !r)
                )
                  throw new Error('Unsupported matrix parameters');
                return this;
              },
              set: '#initialize',
              _set: function(t, e, i, n, r, s, a) {
                return (
                  (this._a = t),
                  (this._b = e),
                  (this._c = i),
                  (this._d = n),
                  (this._tx = r),
                  (this._ty = s),
                  a || this._changed(),
                  this
                );
              },
              _serialize: function(t, e) {
                return l.serialize(this.getValues(), t, !0, e);
              },
              _changed: function() {
                var t = this._owner;
                t && (t._applyMatrix ? t.transform(null, !0) : t._changed(9));
              },
              clone: function() {
                return new S(
                  this._a,
                  this._b,
                  this._c,
                  this._d,
                  this._tx,
                  this._ty
                );
              },
              equals: function(t) {
                return (
                  t === this ||
                  (t &&
                    this._a === t._a &&
                    this._b === t._b &&
                    this._c === t._c &&
                    this._d === t._d &&
                    this._tx === t._tx &&
                    this._ty === t._ty)
                );
              },
              toString: function() {
                var t = g.instance;
                return (
                  '[[' +
                  [
                    t.number(this._a),
                    t.number(this._c),
                    t.number(this._tx),
                  ].join(', ') +
                  '], [' +
                  [
                    t.number(this._b),
                    t.number(this._d),
                    t.number(this._ty),
                  ].join(', ') +
                  ']]'
                );
              },
              reset: function(t) {
                return (
                  (this._a = this._d = 1),
                  (this._b = this._c = this._tx = this._ty = 0),
                  t || this._changed(),
                  this
                );
              },
              apply: function(t, e) {
                var i = this._owner;
                return (
                  !!i &&
                  (i.transform(null, !0, l.pick(t, !0), e), this.isIdentity())
                );
              },
              translate: function() {
                var t = m.read(arguments),
                  e = t.x,
                  i = t.y;
                return (
                  (this._tx += e * this._a + i * this._c),
                  (this._ty += e * this._b + i * this._d),
                  this._changed(),
                  this
                );
              },
              scale: function() {
                var t = m.read(arguments),
                  e = m.read(arguments, 0, { readNull: !0 });
                return (
                  e && this.translate(e),
                  (this._a *= t.x),
                  (this._b *= t.x),
                  (this._c *= t.y),
                  (this._d *= t.y),
                  e && this.translate(e.negate()),
                  this._changed(),
                  this
                );
              },
              rotate: function(t) {
                t *= Math.PI / 180;
                var e = m.read(arguments, 1),
                  i = e.x,
                  n = e.y,
                  r = Math.cos(t),
                  s = Math.sin(t),
                  a = i - i * r + n * s,
                  o = n - i * s - n * r,
                  h = this._a,
                  u = this._b,
                  c = this._c,
                  l = this._d;
                return (
                  (this._a = r * h + s * c),
                  (this._b = r * u + s * l),
                  (this._c = -s * h + r * c),
                  (this._d = -s * u + r * l),
                  (this._tx += a * h + o * c),
                  (this._ty += a * u + o * l),
                  this._changed(),
                  this
                );
              },
              shear: function() {
                var t = m.read(arguments),
                  e = m.read(arguments, 0, { readNull: !0 });
                e && this.translate(e);
                var i = this._a,
                  n = this._b;
                return (
                  (this._a += t.y * this._c),
                  (this._b += t.y * this._d),
                  (this._c += t.x * i),
                  (this._d += t.x * n),
                  e && this.translate(e.negate()),
                  this._changed(),
                  this
                );
              },
              skew: function() {
                var t = m.read(arguments),
                  e = m.read(arguments, 0, { readNull: !0 }),
                  i = Math.PI / 180,
                  n = new m(Math.tan(t.x * i), Math.tan(t.y * i));
                return this.shear(n, e);
              },
              append: function(t, e) {
                if (t) {
                  var i = this._a,
                    n = this._b,
                    r = this._c,
                    s = this._d,
                    a = t._a,
                    o = t._c,
                    h = t._b,
                    u = t._d,
                    c = t._tx,
                    l = t._ty;
                  (this._a = a * i + h * r),
                    (this._c = o * i + u * r),
                    (this._b = a * n + h * s),
                    (this._d = o * n + u * s),
                    (this._tx += c * i + l * r),
                    (this._ty += c * n + l * s),
                    e || this._changed();
                }
                return this;
              },
              prepend: function(t, e) {
                if (t) {
                  var i = this._a,
                    n = this._b,
                    r = this._c,
                    s = this._d,
                    a = this._tx,
                    o = this._ty,
                    h = t._a,
                    u = t._c,
                    c = t._b,
                    l = t._d,
                    f = t._tx,
                    d = t._ty;
                  (this._a = h * i + u * n),
                    (this._c = h * r + u * s),
                    (this._b = c * i + l * n),
                    (this._d = c * r + l * s),
                    (this._tx = h * a + u * o + f),
                    (this._ty = c * a + l * o + d),
                    e || this._changed();
                }
                return this;
              },
              appended: function(t) {
                return this.clone().append(t);
              },
              prepended: function(t) {
                return this.clone().prepend(t);
              },
              invert: function() {
                var t = this._a,
                  e = this._b,
                  i = this._c,
                  n = this._d,
                  r = this._tx,
                  s = this._ty,
                  a = t * n - e * i,
                  o = null;
                return (
                  a &&
                    !isNaN(a) &&
                    isFinite(r) &&
                    isFinite(s) &&
                    ((this._a = n / a),
                    (this._b = -e / a),
                    (this._c = -i / a),
                    (this._d = t / a),
                    (this._tx = (i * s - n * r) / a),
                    (this._ty = (e * r - t * s) / a),
                    (o = this)),
                  o
                );
              },
              inverted: function() {
                return this.clone().invert();
              },
              concatenate: '#append',
              preConcatenate: '#prepend',
              chain: '#appended',
              _shiftless: function() {
                return new S(this._a, this._b, this._c, this._d, 0, 0);
              },
              _orNullIfIdentity: function() {
                return this.isIdentity() ? null : this;
              },
              isIdentity: function() {
                return (
                  1 === this._a &&
                  0 === this._b &&
                  0 === this._c &&
                  1 === this._d &&
                  0 === this._tx &&
                  0 === this._ty
                );
              },
              isInvertible: function() {
                var t = this._a * this._d - this._c * this._b;
                return (
                  t && !isNaN(t) && isFinite(this._tx) && isFinite(this._ty)
                );
              },
              isSingular: function() {
                return !this.isInvertible();
              },
              transform: function(t, e, i) {
                return arguments.length < 3
                  ? this._transformPoint(m.read(arguments))
                  : this._transformCoordinates(t, e, i);
              },
              _transformPoint: function(t, e, i) {
                var n = t.x,
                  r = t.y;
                return (
                  e || (e = new m()),
                  e._set(
                    n * this._a + r * this._c + this._tx,
                    n * this._b + r * this._d + this._ty,
                    i
                  )
                );
              },
              _transformCoordinates: function(t, e, i) {
                for (var n = 0, r = 2 * i; n < r; n += 2) {
                  var s = t[n],
                    a = t[n + 1];
                  (e[n] = s * this._a + a * this._c + this._tx),
                    (e[n + 1] = s * this._b + a * this._d + this._ty);
                }
                return e;
              },
              _transformCorners: function(t) {
                var e = t.x,
                  i = t.y,
                  n = e + t.width,
                  r = i + t.height,
                  s = [e, i, n, i, n, r, e, r];
                return this._transformCoordinates(s, s, 4);
              },
              _transformBounds: function(t, e, i) {
                for (
                  var n = this._transformCorners(t),
                    r = n.slice(0, 2),
                    s = r.slice(),
                    a = 2;
                  a < 8;
                  a++
                ) {
                  var o = n[a],
                    h = 1 & a;
                  o < r[h] ? (r[h] = o) : o > s[h] && (s[h] = o);
                }
                return (
                  e || (e = new b()),
                  e._set(r[0], r[1], s[0] - r[0], s[1] - r[1], i)
                );
              },
              inverseTransform: function() {
                return this._inverseTransform(m.read(arguments));
              },
              _inverseTransform: function(t, e, i) {
                var n = this._a,
                  r = this._b,
                  s = this._c,
                  a = this._d,
                  o = this._tx,
                  h = this._ty,
                  u = n * a - r * s,
                  c = null;
                if (u && !isNaN(u) && isFinite(o) && isFinite(h)) {
                  var l = t.x - this._tx,
                    f = t.y - this._ty;
                  e || (e = new m()),
                    (c = e._set((l * a - f * s) / u, (f * n - l * r) / u, i));
                }
                return c;
              },
              decompose: function() {
                var t,
                  e,
                  i,
                  n = this._a,
                  r = this._b,
                  s = this._c,
                  a = this._d,
                  o = n * a - r * s,
                  h = Math.sqrt,
                  u = Math.atan2,
                  c = 180 / Math.PI;
                if (0 !== n || 0 !== r) {
                  var l = h(n * n + r * r);
                  (t = Math.acos(n / l) * (r > 0 ? 1 : -1)),
                    (e = [l, o / l]),
                    (i = [u(n * s + r * a, l * l), 0]);
                } else if (0 !== s || 0 !== a) {
                  var f = h(s * s + a * a);
                  (t = Math.asin(s / f) * (a > 0 ? 1 : -1)),
                    (e = [o / f, f]),
                    (i = [0, u(n * s + r * a, f * f)]);
                } else (t = 0), (i = e = [0, 0]);
                return {
                  translation: this.getTranslation(),
                  rotation: t * c,
                  scaling: new m(e),
                  skewing: new m(i[0] * c, i[1] * c),
                };
              },
              getValues: function() {
                return [this._a, this._b, this._c, this._d, this._tx, this._ty];
              },
              getTranslation: function() {
                return new m(this._tx, this._ty);
              },
              getScaling: function() {
                return (this.decompose() || {}).scaling;
              },
              getRotation: function() {
                return (this.decompose() || {}).rotation;
              },
              applyToContext: function(t) {
                this.isIdentity() ||
                  t.transform(
                    this._a,
                    this._b,
                    this._c,
                    this._d,
                    this._tx,
                    this._ty
                  );
              },
            },
            l.each(
              ['a', 'b', 'c', 'd', 'tx', 'ty'],
              function(t) {
                var e = l.capitalize(t),
                  i = '_' + t;
                (this['get' + e] = function() {
                  return this[i];
                }),
                  (this['set' + e] = function(t) {
                    (this[i] = t), this._changed();
                  });
              },
              {}
            )
          ),
          k = l.extend({
            _class: 'Line',
            initialize: function(t, e, i, n, r) {
              var s = !1;
              arguments.length >= 4
                ? ((this._px = t),
                  (this._py = e),
                  (this._vx = i),
                  (this._vy = n),
                  (s = r))
                : ((this._px = t.x),
                  (this._py = t.y),
                  (this._vx = e.x),
                  (this._vy = e.y),
                  (s = i)),
                s || ((this._vx -= this._px), (this._vy -= this._py));
            },
            getPoint: function() {
              return new m(this._px, this._py);
            },
            getVector: function() {
              return new m(this._vx, this._vy);
            },
            getLength: function() {
              return this.getVector().getLength();
            },
            intersect: function(t, e) {
              return k.intersect(
                this._px,
                this._py,
                this._vx,
                this._vy,
                t._px,
                t._py,
                t._vx,
                t._vy,
                !0,
                e
              );
            },
            getSide: function(t, e) {
              return k.getSide(
                this._px,
                this._py,
                this._vx,
                this._vy,
                t.x,
                t.y,
                !0,
                e
              );
            },
            getDistance: function(t) {
              return Math.abs(this.getSignedDistance(t));
            },
            getSignedDistance: function(t) {
              return k.getSignedDistance(
                this._px,
                this._py,
                this._vx,
                this._vy,
                t.x,
                t.y,
                !0
              );
            },
            isCollinear: function(t) {
              return m.isCollinear(this._vx, this._vy, t._vx, t._vy);
            },
            isOrthogonal: function(t) {
              return m.isOrthogonal(this._vx, this._vy, t._vx, t._vy);
            },
            statics: {
              intersect: function(t, e, i, n, r, s, a, o, h, u) {
                h || ((i -= t), (n -= e), (a -= r), (o -= s));
                var c = i * o - n * a;
                if (!_.isZero(c)) {
                  var l = t - r,
                    f = e - s,
                    d = (a * f - o * l) / c,
                    p = (i * f - n * l) / c;
                  if (
                    u ||
                    (-1e-12 < d && d < 1 + 1e-12 && -1e-12 < p && p < 1 + 1e-12)
                  )
                    return (
                      u || (d = d <= 0 ? 0 : d >= 1 ? 1 : d),
                      new m(t + d * i, e + d * n)
                    );
                }
              },
              getSide: function(t, e, i, n, r, s, a, o) {
                a || ((i -= t), (n -= e));
                var h = r - t,
                  u = h * n - (s - e) * i;
                return (
                  !o &&
                    _.isZero(u) &&
                    (u = (h * i + h * i) / (i * i + n * n)) >= 0 &&
                    u <= 1 &&
                    (u = 0),
                  u < 0 ? -1 : u > 0 ? 1 : 0
                );
              },
              getSignedDistance: function(t, e, i, n, r, s, a) {
                return (
                  a || ((i -= t), (n -= e)),
                  0 === i
                    ? n > 0
                      ? r - t
                      : t - r
                    : 0 === n
                      ? i < 0
                        ? s - e
                        : e - s
                      : ((r - t) * n - (s - e) * i) / Math.sqrt(i * i + n * n)
                );
              },
              getDistance: function(t, e, i, n, r, s, a) {
                return Math.abs(k.getSignedDistance(t, e, i, n, r, s, a));
              },
            },
          }),
          A = p.extend({
            _class: 'Project',
            _list: 'projects',
            _reference: 'project',
            _compactSerialize: !0,
            initialize: function(t) {
              p.call(this, !0),
                (this._children = []),
                (this._namedChildren = {}),
                (this._activeLayer = null),
                (this._currentStyle = new K(null, null, this)),
                (this._view = X.create(this, t || ot.getCanvas(1, 1))),
                (this._selectionItems = {}),
                (this._selectionCount = 0),
                (this._updateVersion = 0);
            },
            _serialize: function(t, e) {
              return l.serialize(this._children, t, !0, e);
            },
            _changed: function(t, e) {
              if (1 & t) {
                var i = this._view;
                i &&
                  ((i._needsUpdate = !0),
                  !i._requested && i._autoUpdate && i.requestUpdate());
              }
              var n = this._changes;
              if (n && e) {
                var r = this._changesById,
                  s = e._id,
                  a = r[s];
                a ? (a.flags |= t) : n.push((r[s] = { item: e, flags: t }));
              }
            },
            clear: function() {
              for (var t = this._children, e = t.length - 1; e >= 0; e--)
                t[e].remove();
            },
            isEmpty: function() {
              return !this._children.length;
            },
            remove: function t() {
              return (
                !!t.base.call(this) && (this._view && this._view.remove(), !0)
              );
            },
            getView: function() {
              return this._view;
            },
            getCurrentStyle: function() {
              return this._currentStyle;
            },
            setCurrentStyle: function(t) {
              this._currentStyle.set(t);
            },
            getIndex: function() {
              return this._index;
            },
            getOptions: function() {
              return this._scope.settings;
            },
            getLayers: function() {
              return this._children;
            },
            getActiveLayer: function() {
              return this._activeLayer || new E({ project: this, insert: !0 });
            },
            getSymbolDefinitions: function() {
              var t = [],
                e = {};
              return (
                this.getItems({
                  class: M,
                  match: function(i) {
                    var n = i._definition,
                      r = n._id;
                    return e[r] || ((e[r] = !0), t.push(n)), !1;
                  },
                }),
                t
              );
            },
            getSymbols: 'getSymbolDefinitions',
            getSelectedItems: function() {
              var t = this._selectionItems,
                e = [];
              for (var i in t) {
                var n = t[i],
                  r = n._selection;
                1 & r && n.isInserted()
                  ? e.push(n)
                  : r || this._updateSelection(n);
              }
              return e;
            },
            _updateSelection: function(t) {
              var e = t._id,
                i = this._selectionItems;
              t._selection
                ? i[e] !== t && (this._selectionCount++, (i[e] = t))
                : i[e] === t && (this._selectionCount--, delete i[e]);
            },
            selectAll: function() {
              for (var t = this._children, e = 0, i = t.length; e < i; e++)
                t[e].setFullySelected(!0);
            },
            deselectAll: function() {
              var t = this._selectionItems;
              for (var e in t) t[e].setFullySelected(!1);
            },
            addLayer: function(t) {
              return this.insertLayer(h, t);
            },
            insertLayer: function(t, e) {
              if (e instanceof E) {
                e._remove(!1, !0),
                  l.splice(this._children, [e], t, 0),
                  e._setProject(this, !0);
                var i = e._name;
                i && e.setName(i),
                  this._changes && e._changed(5),
                  this._activeLayer || (this._activeLayer = e);
              } else e = null;
              return e;
            },
            _insertItem: function(t, e, i) {
              return (
                (e =
                  this.insertLayer(t, e) ||
                  (
                    this._activeLayer ||
                    this._insertItem(h, new E(P.NO_INSERT), !0)
                  ).insertChild(t, e)),
                i && e.activate && e.activate(),
                e
              );
            },
            getItems: function(t) {
              return P._getItems(this, t);
            },
            getItem: function(t) {
              return P._getItems(this, t, null, null, !0)[0] || null;
            },
            importJSON: function(t) {
              this.activate();
              var e = this._activeLayer;
              return l.importJSON(t, e && e.isEmpty() && e);
            },
            removeOn: function(t) {
              var e = this._removeSets;
              if (e) {
                'mouseup' === t && (e.mousedrag = null);
                var i = e[t];
                if (i) {
                  for (var n in i) {
                    var r = i[n];
                    for (var s in e) {
                      var a = e[s];
                      a && a != i && delete a[r._id];
                    }
                    r.remove();
                  }
                  e[t] = null;
                }
              }
            },
            draw: function(t, e, i) {
              this._updateVersion++, t.save(), e.applyToContext(t);
              for (
                var n = this._children,
                  r = new l({
                    offset: new m(0, 0),
                    pixelRatio: i,
                    viewMatrix: e.isIdentity() ? null : e,
                    matrices: [new S()],
                    updateMatrix: !0,
                  }),
                  s = 0,
                  a = n.length;
                s < a;
                s++
              )
                n[s].draw(t, r);
              if ((t.restore(), this._selectionCount > 0)) {
                t.save(), (t.strokeWidth = 1);
                var o = this._selectionItems,
                  h = this._scope.settings.handleSize,
                  u = this._updateVersion;
                for (var c in o) o[c]._drawSelection(t, e, h, o, u);
                t.restore();
              }
            },
          }),
          P = l.extend(
            f,
            {
              statics: {
                extend: function t(e) {
                  return (
                    e._serializeFields &&
                      (e._serializeFields = l.set(
                        {},
                        this.prototype._serializeFields,
                        e._serializeFields
                      )),
                    t.base.apply(this, arguments)
                  );
                },
                NO_INSERT: { insert: !1 },
              },
              _class: 'Item',
              _name: null,
              _applyMatrix: !0,
              _canApplyMatrix: !0,
              _canScaleStroke: !1,
              _pivot: null,
              _visible: !0,
              _blendMode: 'normal',
              _opacity: 1,
              _locked: !1,
              _guide: !1,
              _clipMask: !1,
              _selection: 0,
              _selectBounds: !0,
              _selectChildren: !1,
              _serializeFields: {
                name: null,
                applyMatrix: null,
                matrix: new S(),
                pivot: null,
                visible: !0,
                blendMode: 'normal',
                opacity: 1,
                locked: !1,
                guide: !1,
                clipMask: !1,
                selected: !1,
                data: {},
              },
              _prioritize: ['applyMatrix'],
            },
            new function() {
              var t = [
                'onMouseDown',
                'onMouseUp',
                'onMouseDrag',
                'onClick',
                'onDoubleClick',
                'onMouseMove',
                'onMouseEnter',
                'onMouseLeave',
              ];
              return l.each(
                t,
                function(t) {
                  this._events[t] = {
                    install: function(t) {
                      this.getView()._countItemEvent(t, 1);
                    },
                    uninstall: function(t) {
                      this.getView()._countItemEvent(t, -1);
                    },
                  };
                },
                {
                  _events: {
                    onFrame: {
                      install: function() {
                        this.getView()._animateItem(this, !0);
                      },
                      uninstall: function() {
                        this.getView()._animateItem(this, !1);
                      },
                    },
                    onLoad: {},
                    onError: {},
                  },
                  statics: { _itemHandlers: t },
                }
              );
            }(),
            {
              initialize: function() {},
              _initialize: function(t, e) {
                var i = t && l.isPlainObject(t),
                  n = i && !0 === t.internal,
                  r = (this._matrix = new S()),
                  s = (i && t.project) || a.project,
                  o = a.settings;
                return (
                  (this._id = n ? null : v.get()),
                  (this._parent = this._index = null),
                  (this._applyMatrix = this._canApplyMatrix && o.applyMatrix),
                  e && r.translate(e),
                  (r._owner = this),
                  (this._style = new K(s._currentStyle, this, s)),
                  n ||
                  (i && 0 == t.insert) ||
                  (!o.insertItems && (!i || !0 !== t.insert))
                    ? this._setProject(s)
                    : ((i && t.parent) || s)._insertItem(h, this, !0),
                  i &&
                    t !== P.NO_INSERT &&
                    this.set(t, {
                      internal: !0,
                      insert: !0,
                      project: !0,
                      parent: !0,
                    }),
                  i
                );
              },
              _serialize: function(t, e) {
                var i = {},
                  n = this;
                function r(r) {
                  for (var s in r) {
                    var a = n[s];
                    l.equals(a, 'leading' === s ? 1.2 * r.fontSize : r[s]) ||
                      (i[s] = l.serialize(a, t, 'data' !== s, e));
                  }
                }
                return (
                  r(this._serializeFields),
                  this instanceof I || r(this._style._defaults),
                  [this._class, i]
                );
              },
              _changed: function(t) {
                var e = this._symbol,
                  i = this._parent || e,
                  n = this._project;
                8 & t &&
                  (this._bounds = this._position = this._decomposed = this._globalMatrix = h),
                  i && 40 & t && P._clearBoundsCache(i),
                  2 & t && P._clearBoundsCache(this),
                  n && n._changed(t, this),
                  e && e._changed(t);
              },
              getId: function() {
                return this._id;
              },
              getName: function() {
                return this._name;
              },
              setName: function(t) {
                if ((this._name && this._removeNamed(), t === +t + ''))
                  throw new Error(
                    'Names consisting only of numbers are not supported.'
                  );
                var e = this._getOwner();
                if (t && e) {
                  var i = e._children,
                    n = e._namedChildren;
                  (n[t] = n[t] || []).push(this), t in i || (i[t] = this);
                }
                (this._name = t || h), this._changed(128);
              },
              getStyle: function() {
                return this._style;
              },
              setStyle: function(t) {
                this.getStyle().set(t);
              },
            },
            l.each(
              ['locked', 'visible', 'blendMode', 'opacity', 'guide'],
              function(t) {
                var e = l.capitalize(t),
                  i = '_' + t,
                  n = { locked: 128, visible: 137 };
                (this['get' + e] = function() {
                  return this[i];
                }),
                  (this['set' + e] = function(e) {
                    e != this[i] && ((this[i] = e), this._changed(n[t] || 129));
                  });
              },
              {}
            ),
            {
              beans: !0,
              getSelection: function() {
                return this._selection;
              },
              setSelection: function(t) {
                if (t !== this._selection) {
                  this._selection = t;
                  var e = this._project;
                  e && (e._updateSelection(this), this._changed(129));
                }
              },
              _changeSelection: function(t, e) {
                var i = this._selection;
                this.setSelection(e ? i | t : i & ~t);
              },
              isSelected: function() {
                if (this._selectChildren)
                  for (var t = this._children, e = 0, i = t.length; e < i; e++)
                    if (t[e].isSelected()) return !0;
                return !!(1 & this._selection);
              },
              setSelected: function(t) {
                if (this._selectChildren)
                  for (var e = this._children, i = 0, n = e.length; i < n; i++)
                    e[i].setSelected(t);
                this._changeSelection(1, t);
              },
              isFullySelected: function() {
                var t = this._children,
                  e = !!(1 & this._selection);
                if (t && e) {
                  for (var i = 0, n = t.length; i < n; i++)
                    if (!t[i].isFullySelected()) return !1;
                  return !0;
                }
                return e;
              },
              setFullySelected: function(t) {
                var e = this._children;
                if (e)
                  for (var i = 0, n = e.length; i < n; i++)
                    e[i].setFullySelected(t);
                this._changeSelection(1, t);
              },
              isClipMask: function() {
                return this._clipMask;
              },
              setClipMask: function(t) {
                this._clipMask != (t = !!t) &&
                  ((this._clipMask = t),
                  t && (this.setFillColor(null), this.setStrokeColor(null)),
                  this._changed(129),
                  this._parent && this._parent._changed(1024));
              },
              getData: function() {
                return this._data || (this._data = {}), this._data;
              },
              setData: function(t) {
                this._data = t;
              },
              getPosition: function(t) {
                var e = this._position,
                  i = t ? m : y;
                if (!e) {
                  var n = this._pivot;
                  e = this._position = n
                    ? this._matrix._transformPoint(n)
                    : this.getBounds().getCenter(!0);
                }
                return new i(e.x, e.y, this, 'setPosition');
              },
              setPosition: function() {
                this.translate(
                  m.read(arguments).subtract(this.getPosition(!0))
                );
              },
              getPivot: function() {
                var t = this._pivot;
                return t ? new y(t.x, t.y, this, 'setPivot') : null;
              },
              setPivot: function() {
                (this._pivot = m.read(arguments, 0, {
                  clone: !0,
                  readNull: !0,
                })),
                  (this._position = h);
              },
            },
            l.each(
              {
                getStrokeBounds: { stroke: !0 },
                getHandleBounds: { handle: !0 },
                getInternalBounds: { internal: !0 },
              },
              function(t, e) {
                this[e] = function(e) {
                  return this.getBounds(e, t);
                };
              },
              {
                beans: !0,
                getBounds: function(t, e) {
                  var i = e || t instanceof S,
                    n = l.set({}, i ? e : t, this._boundsOptions);
                  (n.stroke && !this.getStrokeScaling()) ||
                    (n.cacheItem = this);
                  var r = this._getCachedBounds(i && t, n).rect;
                  return arguments.length
                    ? r
                    : new C(r.x, r.y, r.width, r.height, this, 'setBounds');
                },
                setBounds: function() {
                  var t = b.read(arguments),
                    e = this.getBounds(),
                    i = this._matrix,
                    n = new S(),
                    r = t.getCenter();
                  n.translate(r),
                    (t.width == e.width && t.height == e.height) ||
                      (i.isInvertible() ||
                        (i.set(
                          i._backup || new S().translate(i.getTranslation())
                        ),
                        (e = this.getBounds())),
                      n.scale(
                        0 !== e.width ? t.width / e.width : 0,
                        0 !== e.height ? t.height / e.height : 0
                      )),
                    (r = e.getCenter()),
                    n.translate(-r.x, -r.y),
                    this.transform(n);
                },
                _getBounds: function(t, e) {
                  var i = this._children;
                  return i && i.length
                    ? (P._updateBoundsCache(this, e.cacheItem),
                      P._getBounds(i, t, e))
                    : new b();
                },
                _getBoundsCacheKey: function(t, e) {
                  return [t.stroke ? 1 : 0, t.handle ? 1 : 0, e ? 1 : 0].join(
                    ''
                  );
                },
                _getCachedBounds: function(t, e, i) {
                  t = t && t._orNullIfIdentity();
                  var n = e.internal && !i,
                    r = e.cacheItem,
                    s = n ? null : this._matrix._orNullIfIdentity(),
                    a =
                      r && (!t || t.equals(s)) && this._getBoundsCacheKey(e, n),
                    o = this._bounds;
                  if (
                    (P._updateBoundsCache(this._parent || this._symbol, r),
                    a && o && a in o)
                  )
                    return {
                      rect: (f = o[a]).rect.clone(),
                      nonscaling: f.nonscaling,
                    };
                  var h = this._getBounds(t || s, e),
                    u = h.rect || h,
                    c = this._style,
                    l =
                      h.nonscaling || (c.hasStroke() && !c.getStrokeScaling());
                  if (a) {
                    o || (this._bounds = o = {});
                    var f = (o[a] = {
                      rect: u.clone(),
                      nonscaling: l,
                      internal: n,
                    });
                  }
                  return { rect: u, nonscaling: l };
                },
                _getStrokeMatrix: function(t, e) {
                  var i = this.getStrokeScaling()
                      ? null
                      : e && e.internal
                        ? this
                        : this._parent || (this._symbol && this._symbol._item),
                    n = i ? i.getViewMatrix().invert() : t;
                  return n && n._shiftless();
                },
                statics: {
                  _updateBoundsCache: function(t, e) {
                    if (t && e) {
                      var i = e._id,
                        n = (t._boundsCache = t._boundsCache || {
                          ids: {},
                          list: [],
                        });
                      n.ids[i] || (n.list.push(e), (n.ids[i] = e));
                    }
                  },
                  _clearBoundsCache: function(t) {
                    var e = t._boundsCache;
                    if (e) {
                      t._bounds = t._position = t._boundsCache = h;
                      for (var i = 0, n = e.list, r = n.length; i < r; i++) {
                        var s = n[i];
                        s !== t &&
                          ((s._bounds = s._position = h),
                          s._boundsCache && P._clearBoundsCache(s));
                      }
                    }
                  },
                  _getBounds: function(t, e, i) {
                    var n = 1 / 0,
                      r = -n,
                      s = n,
                      a = r,
                      o = !1;
                    i = i || {};
                    for (var h = 0, u = t.length; h < u; h++) {
                      var c = t[h];
                      if (c._visible && !c.isEmpty()) {
                        var l = c._getCachedBounds(
                            e && e.appended(c._matrix),
                            i,
                            !0
                          ),
                          f = l.rect;
                        (n = Math.min(f.x, n)),
                          (s = Math.min(f.y, s)),
                          (r = Math.max(f.x + f.width, r)),
                          (a = Math.max(f.y + f.height, a)),
                          l.nonscaling && (o = !0);
                      }
                    }
                    return {
                      rect: isFinite(n) ? new b(n, s, r - n, a - s) : new b(),
                      nonscaling: o,
                    };
                  },
                },
              }
            ),
            {
              beans: !0,
              _decompose: function() {
                return this._applyMatrix
                  ? null
                  : this._decomposed ||
                      (this._decomposed = this._matrix.decompose());
              },
              getRotation: function() {
                var t = this._decompose();
                return t ? t.rotation : 0;
              },
              setRotation: function(t) {
                var e = this.getRotation();
                if (null != e && null != t) {
                  var i = this._decomposed;
                  this.rotate(t - e),
                    i && ((i.rotation = t), (this._decomposed = i));
                }
              },
              getScaling: function() {
                var t = this._decompose(),
                  e = t && t.scaling;
                return new y(e ? e.x : 1, e ? e.y : 1, this, 'setScaling');
              },
              setScaling: function() {
                var t = this.getScaling(),
                  e = m.read(arguments, 0, { clone: !0, readNull: !0 });
                if (t && e && !t.equals(e)) {
                  var i = this.getRotation(),
                    n = this._decomposed,
                    r = new S(),
                    s = this.getPosition(!0);
                  r.translate(s),
                    i && r.rotate(i),
                    r.scale(e.x / t.x, e.y / t.y),
                    i && r.rotate(-i),
                    r.translate(s.negate()),
                    this.transform(r),
                    n && ((n.scaling = e), (this._decomposed = n));
                }
              },
              getMatrix: function() {
                return this._matrix;
              },
              setMatrix: function() {
                var t = this._matrix;
                t.initialize.apply(t, arguments);
              },
              getGlobalMatrix: function(t) {
                var e = this._globalMatrix,
                  i = this._project._updateVersion;
                if ((e && e._updateVersion !== i && (e = null), !e)) {
                  e = this._globalMatrix = this._matrix.clone();
                  var n = this._parent;
                  n && e.prepend(n.getGlobalMatrix(!0)), (e._updateVersion = i);
                }
                return t ? e : e.clone();
              },
              getViewMatrix: function() {
                return this.getGlobalMatrix().prepend(this.getView()._matrix);
              },
              getApplyMatrix: function() {
                return this._applyMatrix;
              },
              setApplyMatrix: function(t) {
                (this._applyMatrix = this._canApplyMatrix && !!t) &&
                  this.transform(null, !0);
              },
              getTransformContent: '#getApplyMatrix',
              setTransformContent: '#setApplyMatrix',
            },
            {
              getProject: function() {
                return this._project;
              },
              _setProject: function(t, e) {
                if (this._project !== t) {
                  this._project && this._installEvents(!1), (this._project = t);
                  for (
                    var i = this._children, n = 0, r = i && i.length;
                    n < r;
                    n++
                  )
                    i[n]._setProject(t);
                  e = !0;
                }
                e && this._installEvents(!0);
              },
              getView: function() {
                return this._project._view;
              },
              _installEvents: function t(e) {
                t.base.call(this, e);
                for (
                  var i = this._children, n = 0, r = i && i.length;
                  n < r;
                  n++
                )
                  i[n]._installEvents(e);
              },
              getLayer: function() {
                for (var t = this; (t = t._parent); )
                  if (t instanceof E) return t;
                return null;
              },
              getParent: function() {
                return this._parent;
              },
              setParent: function(t) {
                return t.addChild(this);
              },
              _getOwner: '#getParent',
              getChildren: function() {
                return this._children;
              },
              setChildren: function(t) {
                this.removeChildren(), this.addChildren(t);
              },
              getFirstChild: function() {
                return (this._children && this._children[0]) || null;
              },
              getLastChild: function() {
                return (
                  (this._children &&
                    this._children[this._children.length - 1]) ||
                  null
                );
              },
              getNextSibling: function() {
                var t = this._getOwner();
                return (t && t._children[this._index + 1]) || null;
              },
              getPreviousSibling: function() {
                var t = this._getOwner();
                return (t && t._children[this._index - 1]) || null;
              },
              getIndex: function() {
                return this._index;
              },
              equals: function(t) {
                return (
                  t === this ||
                  (t &&
                    this._class === t._class &&
                    this._style.equals(t._style) &&
                    this._matrix.equals(t._matrix) &&
                    this._locked === t._locked &&
                    this._visible === t._visible &&
                    this._blendMode === t._blendMode &&
                    this._opacity === t._opacity &&
                    this._clipMask === t._clipMask &&
                    this._guide === t._guide &&
                    this._equals(t)) ||
                  !1
                );
              },
              _equals: function(t) {
                return l.equals(this._children, t._children);
              },
              clone: function(t) {
                var e = new this.constructor(P.NO_INSERT),
                  i = this._children,
                  n = l.pick(t ? t.insert : h, t === h || !0 === t),
                  r = l.pick(t ? t.deep : h, !0);
                i && e.copyAttributes(this),
                  (i && !r) || e.copyContent(this),
                  i || e.copyAttributes(this),
                  n && e.insertAbove(this);
                var s = this._name,
                  a = this._parent;
                if (s && a) {
                  i = a._children;
                  for (var o = s, u = 1; i[s]; ) s = o + ' ' + u++;
                  s !== o && e.setName(s);
                }
                return e;
              },
              copyContent: function(t) {
                for (var e = t._children, i = 0, n = e && e.length; i < n; i++)
                  this.addChild(e[i].clone(!1), !0);
              },
              copyAttributes: function(t, e) {
                this.setStyle(t._style);
                for (
                  var i = [
                      '_locked',
                      '_visible',
                      '_blendMode',
                      '_opacity',
                      '_clipMask',
                      '_guide',
                    ],
                    n = 0,
                    r = i.length;
                  n < r;
                  n++
                ) {
                  var s = i[n];
                  t.hasOwnProperty(s) && (this[s] = t[s]);
                }
                e || this._matrix.set(t._matrix, !0),
                  this.setApplyMatrix(t._applyMatrix),
                  this.setPivot(t._pivot),
                  this.setSelection(t._selection);
                var a = t._data,
                  o = t._name;
                (this._data = a ? l.clone(a) : null), o && this.setName(o);
              },
              rasterize: function(t, e) {
                var i = this.getStrokeBounds(),
                  n = (t || this.getView().getResolution()) / 72,
                  r = i.getTopLeft().floor(),
                  s = i.getBottomRight().ceil(),
                  a = new x(s.subtract(r)),
                  o = new L(P.NO_INSERT);
                if (!a.isZero()) {
                  var u = ot.getCanvas(a.multiply(n)),
                    c = u.getContext('2d'),
                    f = new S().scale(n).translate(r.negate());
                  c.save(),
                    f.applyToContext(c),
                    this.draw(c, new l({ matrices: [f] })),
                    c.restore(),
                    o.setCanvas(u);
                }
                return (
                  o.transform(
                    new S().translate(r.add(a.divide(2))).scale(1 / n)
                  ),
                  (e === h || e) && o.insertAbove(this),
                  o
                );
              },
              contains: function() {
                return !!this._contains(
                  this._matrix._inverseTransform(m.read(arguments))
                );
              },
              _contains: function(t) {
                var e = this._children;
                if (e) {
                  for (var i = e.length - 1; i >= 0; i--)
                    if (e[i].contains(t)) return !0;
                  return !1;
                }
                return t.isInside(this.getInternalBounds());
              },
              isInside: function() {
                return b.read(arguments).contains(this.getBounds());
              },
              _asPathItem: function() {
                return new F.Rectangle({
                  rectangle: this.getInternalBounds(),
                  matrix: this._matrix,
                  insert: !1,
                });
              },
              intersects: function(t, e) {
                return (
                  t instanceof P &&
                  this._asPathItem().getIntersections(
                    t._asPathItem(),
                    null,
                    e,
                    !0
                  ).length > 0
                );
              },
            },
            new function() {
              function t() {
                return this._hitTest(
                  m.read(arguments),
                  O.getOptions(arguments)
                );
              }
              function e() {
                var t = m.read(arguments),
                  e = O.getOptions(arguments),
                  i = [];
                return this._hitTest(t, l.set({ all: i }, e)), i;
              }
              function i(t, e, i, n) {
                var r = this._children;
                if (r)
                  for (var s = r.length - 1; s >= 0; s--) {
                    var a = r[s],
                      o = a !== n && a._hitTest(t, e, i);
                    if (o && !e.all) return o;
                  }
                return null;
              }
              return (
                A.inject({ hitTest: t, hitTestAll: e, _hitTest: i }),
                { hitTest: t, hitTestAll: e, _hitTestChildren: i }
              );
            }(),
            {
              _hitTest: function(t, e, i) {
                if (
                  this._locked ||
                  !this._visible ||
                  (this._guide && !e.guides) ||
                  this.isEmpty()
                )
                  return null;
                var n = this._matrix,
                  r = i
                    ? i.appended(n)
                    : this.getGlobalMatrix().prepend(this.getView()._matrix),
                  s = Math.max(e.tolerance, 1e-12),
                  a = (e._tolerancePadding = new x(
                    F._getStrokePadding(s, n._shiftless().invert())
                  ));
                if (
                  !(t = n._inverseTransform(t)) ||
                  (!this._children &&
                    !this.getBounds({ internal: !0, stroke: !0, handle: !0 })
                      .expand(a.multiply(2))
                      ._containsPoint(t))
                )
                  return null;
                var o,
                  h,
                  u = !(
                    (e.guides && !this._guide) ||
                    (e.selected && !this.isSelected()) ||
                    (e.type && e.type !== l.hyphenate(this._class)) ||
                    (e.class && !(this instanceof e.class))
                  ),
                  c = e.match,
                  f = this;
                function d(t) {
                  return (
                    t && c && !c(t) && (t = null),
                    t && e.all && e.all.push(t),
                    t
                  );
                }
                function p(e, i) {
                  var n = i ? o['get' + i]() : f.getPosition();
                  if (t.subtract(n).divide(a).length <= 1)
                    return new O(e, f, {
                      name: i ? l.hyphenate(i) : e,
                      point: n,
                    });
                }
                var g = e.position,
                  _ = e.center,
                  v = e.bounds;
                if (u && this._parent && (g || _ || v)) {
                  if (
                    ((_ || v) && (o = this.getInternalBounds()),
                    !(h =
                      (g && p('position')) || (_ && p('center', 'Center'))) &&
                      v)
                  )
                    for (
                      var m = [
                          'TopLeft',
                          'TopRight',
                          'BottomLeft',
                          'BottomRight',
                          'LeftCenter',
                          'TopCenter',
                          'RightCenter',
                          'BottomCenter',
                        ],
                        y = 0;
                      y < 8 && !h;
                      y++
                    )
                      h = p('bounds', m[y]);
                  h = d(h);
                }
                return (
                  h ||
                    (h =
                      this._hitTestChildren(t, e, r) ||
                      (u &&
                        d(
                          this._hitTestSelf(
                            t,
                            e,
                            r,
                            this.getStrokeScaling()
                              ? null
                              : r._shiftless().invert()
                          )
                        )) ||
                      null),
                  h && h.point && (h.point = n.transform(h.point)),
                  h
                );
              },
              _hitTestSelf: function(t, e) {
                if (e.fill && this.hasFill() && this._contains(t))
                  return new O('fill', this);
              },
              matches: function(t, e) {
                var i = typeof t;
                if ('object' === i) {
                  for (var n in t)
                    if (t.hasOwnProperty(n) && !this.matches(n, t[n]))
                      return !1;
                  return !0;
                }
                if ('function' === i) return t(this);
                if ('match' === t) return e(this);
                var r = /^(empty|editable)$/.test(t)
                  ? this['is' + l.capitalize(t)]()
                  : 'type' === t
                    ? l.hyphenate(this._class)
                    : this[t];
                if ('class' === t) {
                  if ('function' == typeof e) return this instanceof e;
                  r = this._class;
                }
                if ('function' == typeof e) return !!e(r);
                if (e) {
                  if (e.test) return e.test(r);
                  if (l.isPlainObject(e))
                    return (function t(e, i) {
                      for (var n in e)
                        if (e.hasOwnProperty(n)) {
                          var r = e[n],
                            s = i[n];
                          if (l.isPlainObject(r) && l.isPlainObject(s)) {
                            if (!t(r, s)) return !1;
                          } else if (!l.equals(r, s)) return !1;
                        }
                      return !0;
                    })(e, r);
                }
                return l.equals(r, e);
              },
              getItems: function(t) {
                return P._getItems(this, t, this._matrix);
              },
              getItem: function(t) {
                return P._getItems(this, t, this._matrix, null, !0)[0] || null;
              },
              statics: {
                _getItems: function t(e, i, n, r, s) {
                  if (!r) {
                    var a = 'object' == typeof i && i,
                      o = a && a.overlapping,
                      h = a && a.inside,
                      u = (m = o || h) && b.read([m]);
                    (r = {
                      items: [],
                      recursive: a && !1 !== a.recursive,
                      inside: !!h,
                      overlapping: !!o,
                      rect: u,
                      path: o && new F.Rectangle({ rectangle: u, insert: !1 }),
                    }),
                      a &&
                        (i = l.filter({}, i, {
                          recursive: !0,
                          inside: !0,
                          overlapping: !0,
                        }));
                  }
                  var c = e._children,
                    f = r.items;
                  n = (u = r.rect) && (n || new S());
                  for (var d = 0, p = c && c.length; d < p; d++) {
                    var g = c[d],
                      _ = n && n.appended(g._matrix),
                      v = !0;
                    if (u) {
                      var m = g.getBounds(_);
                      if (!u.intersects(m)) continue;
                      u.contains(m) ||
                        (r.overlapping &&
                          (m.contains(u) || r.path.intersects(g, _))) ||
                        (v = !1);
                    }
                    if (v && g.matches(i) && (f.push(g), s)) break;
                    if (
                      (!1 !== r.recursive && t(g, i, _, r, s),
                      s && f.length > 0)
                    )
                      break;
                  }
                  return f;
                },
              },
            },
            {
              importJSON: function(t) {
                var e = l.importJSON(t, this);
                return e !== this ? this.addChild(e) : e;
              },
              addChild: function(t) {
                return this.insertChild(h, t);
              },
              insertChild: function(t, e) {
                var i = e ? this.insertChildren(t, [e]) : null;
                return i && i[0];
              },
              addChildren: function(t) {
                return this.insertChildren(this._children.length, t);
              },
              insertChildren: function(t, e) {
                var i = this._children;
                if (i && e && e.length > 0) {
                  for (
                    var n = {}, r = (e = l.slice(e)).length - 1;
                    r >= 0;
                    r--
                  ) {
                    var s = (u = e[r]) && u._id;
                    !u || n[s]
                      ? e.splice(r, 1)
                      : (u._remove(!1, !0), (n[s] = !0));
                  }
                  l.splice(i, e, t, 0);
                  for (
                    var a = this._project,
                      o = a._changes,
                      h = ((r = 0), e.length);
                    r < h;
                    r++
                  ) {
                    var u,
                      c = (u = e[r])._name;
                    (u._parent = this),
                      u._setProject(a, !0),
                      c && u.setName(c),
                      o && u._changed(5);
                  }
                  this._changed(11);
                } else e = null;
                return e;
              },
              _insertItem: '#insertChild',
              _insertAt: function(t, e) {
                var i = t && t._getOwner(),
                  n = t !== this && i ? this : null;
                return (
                  n && (n._remove(!1, !0), i._insertItem(t._index + e, n)), n
                );
              },
              insertAbove: function(t) {
                return this._insertAt(t, 1);
              },
              insertBelow: function(t) {
                return this._insertAt(t, 0);
              },
              sendToBack: function() {
                var t = this._getOwner();
                return t ? t._insertItem(0, this) : null;
              },
              bringToFront: function() {
                var t = this._getOwner();
                return t ? t._insertItem(h, this) : null;
              },
              appendTop: '#addChild',
              appendBottom: function(t) {
                return this.insertChild(0, t);
              },
              moveAbove: '#insertAbove',
              moveBelow: '#insertBelow',
              addTo: function(t) {
                return t._insertItem(h, this);
              },
              copyTo: function(t) {
                return this.clone(!1).addTo(t);
              },
              reduce: function(t) {
                var e = this._children;
                if (e && 1 === e.length) {
                  var i = e[0].reduce(t);
                  return (
                    this._parent
                      ? (i.insertAbove(this), this.remove())
                      : i.remove(),
                    i
                  );
                }
                return this;
              },
              _removeNamed: function() {
                var t = this._getOwner();
                if (t) {
                  var e = t._children,
                    i = t._namedChildren,
                    n = this._name,
                    r = i[n],
                    s = r ? r.indexOf(this) : -1;
                  -1 !== s &&
                    (e[n] == this && delete e[n],
                    r.splice(s, 1),
                    r.length ? (e[n] = r[0]) : delete i[n]);
                }
              },
              _remove: function(t, e) {
                var i = this._getOwner(),
                  n = this._project,
                  r = this._index;
                return (
                  !!i &&
                  (this._name && this._removeNamed(),
                  null != r &&
                    (n._activeLayer === this &&
                      (n._activeLayer =
                        this.getNextSibling() || this.getPreviousSibling()),
                    l.splice(i._children, null, r, 1)),
                  this._installEvents(!1),
                  t && n._changes && this._changed(5),
                  e && i._changed(11, this),
                  (this._parent = null),
                  !0)
                );
              },
              remove: function() {
                return this._remove(!0, !0);
              },
              replaceWith: function(t) {
                var e = t && t.insertBelow(this);
                return e && this.remove(), e;
              },
              removeChildren: function(t, e) {
                if (!this._children) return null;
                (t = t || 0), (e = l.pick(e, this._children.length));
                for (
                  var i = l.splice(this._children, null, t, e - t),
                    n = i.length - 1;
                  n >= 0;
                  n--
                )
                  i[n]._remove(!0, !1);
                return i.length > 0 && this._changed(11), i;
              },
              clear: '#removeChildren',
              reverseChildren: function() {
                if (this._children) {
                  this._children.reverse();
                  for (var t = 0, e = this._children.length; t < e; t++)
                    this._children[t]._index = t;
                  this._changed(11);
                }
              },
              isEmpty: function() {
                var t = this._children;
                return !t || !t.length;
              },
              isEditable: function() {
                for (var t = this; t; ) {
                  if (!t._visible || t._locked) return !1;
                  t = t._parent;
                }
                return !0;
              },
              hasFill: function() {
                return this.getStyle().hasFill();
              },
              hasStroke: function() {
                return this.getStyle().hasStroke();
              },
              hasShadow: function() {
                return this.getStyle().hasShadow();
              },
              _getOrder: function(t) {
                function e(t) {
                  var e = [];
                  do {
                    e.unshift(t);
                  } while ((t = t._parent));
                  return e;
                }
                for (
                  var i = e(this),
                    n = e(t),
                    r = 0,
                    s = Math.min(i.length, n.length);
                  r < s;
                  r++
                )
                  if (i[r] != n[r]) return i[r]._index < n[r]._index ? 1 : -1;
                return 0;
              },
              hasChildren: function() {
                return this._children && this._children.length > 0;
              },
              isInserted: function() {
                return !!this._parent && this._parent.isInserted();
              },
              isAbove: function(t) {
                return -1 === this._getOrder(t);
              },
              isBelow: function(t) {
                return 1 === this._getOrder(t);
              },
              isParent: function(t) {
                return this._parent === t;
              },
              isChild: function(t) {
                return t && t._parent === this;
              },
              isDescendant: function(t) {
                for (var e = this; (e = e._parent); ) if (e === t) return !0;
                return !1;
              },
              isAncestor: function(t) {
                return !!t && t.isDescendant(this);
              },
              isSibling: function(t) {
                return this._parent === t._parent;
              },
              isGroupedWith: function(t) {
                for (var e = this._parent; e; ) {
                  if (
                    e._parent &&
                    /^(Group|Layer|CompoundPath)$/.test(e._class) &&
                    t.isDescendant(e)
                  )
                    return !0;
                  e = e._parent;
                }
                return !1;
              },
            },
            l.each(
              ['rotate', 'scale', 'shear', 'skew'],
              function(t) {
                var e = 'rotate' === t;
                this[t] = function() {
                  var i = (e ? l : m).read(arguments),
                    n = m.read(arguments, 0, { readNull: !0 });
                  return this.transform(
                    new S()[t](i, n || this.getPosition(!0))
                  );
                };
              },
              {
                translate: function() {
                  var t = new S();
                  return this.transform(t.translate.apply(t, arguments));
                },
                transform: function(t, e, i, n) {
                  var r = this._matrix,
                    s = t && !t.isIdentity(),
                    a =
                      (e || this._applyMatrix) &&
                      (!r.isIdentity() || s || (e && i && this._children));
                  if (!s && !a) return this;
                  if (s) {
                    !t.isInvertible() &&
                      r.isInvertible() &&
                      (r._backup = r.getValues()),
                      r.prepend(t, !0);
                    var o = this._style,
                      h = o.getFillColor(!0),
                      u = o.getStrokeColor(!0);
                    h && h.transform(t), u && u.transform(t);
                  }
                  if (a && (a = this._transformContent(r, i, n))) {
                    var c = this._pivot;
                    c && r._transformPoint(c, c, !0),
                      r.reset(!0),
                      n && this._canApplyMatrix && (this._applyMatrix = !0);
                  }
                  var l = this._bounds,
                    f = this._position;
                  (s || a) && this._changed(9);
                  var d = s && l && t.decompose();
                  if (d && d.skewing.isZero() && d.rotation % 90 == 0) {
                    for (var p in l) {
                      var g = l[p];
                      if (g.nonscaling) delete l[p];
                      else if (a || !g.internal) {
                        var _ = g.rect;
                        t._transformBounds(_, _);
                      }
                    }
                    this._bounds = l;
                    var v =
                      l[this._getBoundsCacheKey(this._boundsOptions || {})];
                    v && (this._position = v.rect.getCenter(!0));
                  } else
                    s &&
                      f &&
                      this._pivot &&
                      (this._position = t._transformPoint(f, f));
                  return this;
                },
                _transformContent: function(t, e, i) {
                  var n = this._children;
                  if (n) {
                    for (var r = 0, s = n.length; r < s; r++)
                      n[r].transform(t, !0, e, i);
                    return !0;
                  }
                },
                globalToLocal: function() {
                  return this.getGlobalMatrix(!0)._inverseTransform(
                    m.read(arguments)
                  );
                },
                localToGlobal: function() {
                  return this.getGlobalMatrix(!0)._transformPoint(
                    m.read(arguments)
                  );
                },
                parentToLocal: function() {
                  return this._matrix._inverseTransform(m.read(arguments));
                },
                localToParent: function() {
                  return this._matrix._transformPoint(m.read(arguments));
                },
                fitBounds: function(t, e) {
                  t = b.read(arguments);
                  var i = this.getBounds(),
                    n = i.height / i.width,
                    r = t.height / t.width,
                    s = (e
                    ? n > r
                    : n < r)
                      ? t.width / i.width
                      : t.height / i.height,
                    a = new b(new m(), new x(i.width * s, i.height * s));
                  a.setCenter(t.getCenter()), this.setBounds(a);
                },
              }
            ),
            {
              _setStyles: function(t, e, i) {
                var n = this._style,
                  r = this._matrix;
                if (
                  (n.hasFill() &&
                    (t.fillStyle = n.getFillColor().toCanvasStyle(t, r)),
                  n.hasStroke())
                ) {
                  (t.strokeStyle = n.getStrokeColor().toCanvasStyle(t, r)),
                    (t.lineWidth = n.getStrokeWidth());
                  var s = n.getStrokeJoin(),
                    o = n.getStrokeCap(),
                    h = n.getMiterLimit();
                  if (
                    (s && (t.lineJoin = s),
                    o && (t.lineCap = o),
                    h && (t.miterLimit = h),
                    a.support.nativeDash)
                  ) {
                    var u = n.getDashArray(),
                      c = n.getDashOffset();
                    u &&
                      u.length &&
                      ('setLineDash' in t
                        ? (t.setLineDash(u), (t.lineDashOffset = c))
                        : ((t.mozDash = u), (t.mozDashOffset = c)));
                  }
                }
                if (n.hasShadow()) {
                  var l = e.pixelRatio || 1,
                    f = i._shiftless().prepend(new S().scale(l, l)),
                    d = f.transform(new m(n.getShadowBlur(), 0)),
                    p = f.transform(this.getShadowOffset());
                  (t.shadowColor = n.getShadowColor().toCanvasStyle(t)),
                    (t.shadowBlur = d.getLength()),
                    (t.shadowOffsetX = p.x),
                    (t.shadowOffsetY = p.y);
                }
              },
              draw: function(t, e, i) {
                var n = (this._updateVersion = this._project._updateVersion);
                if (this._visible && 0 !== this._opacity) {
                  var r = e.matrices,
                    s = e.viewMatrix,
                    a = this._matrix,
                    o = r[r.length - 1].appended(a);
                  if (o.isInvertible()) {
                    (s = s ? s.appended(o) : o),
                      r.push(o),
                      e.updateMatrix &&
                        ((o._updateVersion = n), (this._globalMatrix = o));
                    var h,
                      u,
                      c,
                      l = this._blendMode,
                      f = this._opacity,
                      d = 'normal' === l,
                      p = ht.nativeModes[l],
                      g =
                        (d && 1 === f) ||
                        e.dontStart ||
                        e.clip ||
                        ((p || (d && f < 1)) && this._canComposite()),
                      _ = e.pixelRatio || 1;
                    if (!g) {
                      var v = this.getStrokeBounds(s);
                      if (!v.width || !v.height) return;
                      (c = e.offset),
                        (u = e.offset = v.getTopLeft().floor()),
                        (h = t),
                        (t = ot.getContext(
                          v
                            .getSize()
                            .ceil()
                            .add(1)
                            .multiply(_)
                        )),
                        1 !== _ && t.scale(_, _);
                    }
                    t.save();
                    var m = i
                        ? i.appended(a)
                        : this._canScaleStroke &&
                          !this.getStrokeScaling(!0) &&
                          s,
                      y = !g && e.clipItem,
                      x = !m || y;
                    if (
                      (g
                        ? ((t.globalAlpha = f),
                          p && (t.globalCompositeOperation = l))
                        : x && t.translate(-u.x, -u.y),
                      x && (g ? a : s).applyToContext(t),
                      y && e.clipItem.draw(t, e.extend({ clip: !0 })),
                      m)
                    ) {
                      t.setTransform(_, 0, 0, _, 0, 0);
                      var w = e.offset;
                      w && t.translate(-w.x, -w.y);
                    }
                    this._draw(t, e, s, m),
                      t.restore(),
                      r.pop(),
                      e.clip && !e.dontFinish && t.clip(),
                      g ||
                        (ht.process(l, t, h, f, u.subtract(c).multiply(_)),
                        ot.release(t),
                        (e.offset = c));
                  }
                }
              },
              _isUpdated: function(t) {
                var e = this._parent;
                if (e instanceof j) return e._isUpdated(t);
                var i = this._updateVersion === t;
                return (
                  !i &&
                    e &&
                    e._visible &&
                    e._isUpdated(t) &&
                    ((this._updateVersion = t), (i = !0)),
                  i
                );
              },
              _drawSelection: function(t, e, i, n, r) {
                var s = this._selection,
                  a = 1 & s,
                  o = 2 & s || (a && this._selectBounds),
                  h = 4 & s;
                if (
                  (this._drawSelected || (a = !1),
                  (a || o || h) && this._isUpdated(r))
                ) {
                  var u,
                    c =
                      this.getSelectedColor(!0) ||
                      ((u = this.getLayer()) && u.getSelectedColor(!0)),
                    l = e.appended(this.getGlobalMatrix(!0)),
                    f = i / 2;
                  if (
                    ((t.strokeStyle = t.fillStyle = c
                      ? c.toCanvasStyle(t)
                      : '#009dec'),
                    a && this._drawSelected(t, l, n),
                    h)
                  ) {
                    var d = this.getPosition(!0),
                      p = d.x,
                      g = d.y;
                    t.beginPath(),
                      t.arc(p, g, f, 0, 2 * Math.PI, !0),
                      t.stroke();
                    for (
                      var _ = [[0, -1], [1, 0], [0, 1], [-1, 0]],
                        v = f,
                        m = i + 1,
                        y = 0;
                      y < 4;
                      y++
                    ) {
                      var x = _[y],
                        w = x[0],
                        b = x[1];
                      t.moveTo(p + w * v, g + b * v),
                        t.lineTo(p + w * m, g + b * m),
                        t.stroke();
                    }
                  }
                  if (o) {
                    var C = l._transformCorners(this.getInternalBounds());
                    t.beginPath();
                    for (y = 0; y < 8; y++)
                      t[y ? 'lineTo' : 'moveTo'](C[y], C[++y]);
                    t.closePath(), t.stroke();
                    for (y = 0; y < 8; y++)
                      t.fillRect(C[y] - f, C[++y] - f, i, i);
                  }
                }
              },
              _canComposite: function() {
                return !1;
              },
            },
            l.each(
              ['down', 'drag', 'up', 'move'],
              function(t) {
                this['removeOn' + l.capitalize(t)] = function() {
                  var e = {};
                  return (e[t] = !0), this.removeOn(e);
                };
              },
              {
                removeOn: function(t) {
                  for (var e in t)
                    if (t[e]) {
                      var i = 'mouse' + e,
                        n = this._project,
                        r = (n._removeSets = n._removeSets || {});
                      (r[i] = r[i] || {}), (r[i][this._id] = this);
                    }
                  return this;
                },
              }
            )
          ),
          I = P.extend({
            _class: 'Group',
            _selectBounds: !1,
            _selectChildren: !0,
            _serializeFields: { children: [] },
            initialize: function(t) {
              (this._children = []),
                (this._namedChildren = {}),
                this._initialize(t) ||
                  this.addChildren(Array.isArray(t) ? t : arguments);
            },
            _changed: function t(e) {
              t.base.call(this, e), 1026 & e && (this._clipItem = h);
            },
            _getClipItem: function() {
              var t = this._clipItem;
              if (t === h) {
                t = null;
                for (var e = this._children, i = 0, n = e.length; i < n; i++)
                  if (e[i]._clipMask) {
                    t = e[i];
                    break;
                  }
                this._clipItem = t;
              }
              return t;
            },
            isClipped: function() {
              return !!this._getClipItem();
            },
            setClipped: function(t) {
              var e = this.getFirstChild();
              e && e.setClipMask(t);
            },
            _getBounds: function t(e, i) {
              var n = this._getClipItem();
              return n
                ? n._getCachedBounds(
                    e && e.appended(n._matrix),
                    l.set({}, i, { stroke: !1 })
                  )
                : t.base.call(this, e, i);
            },
            _hitTestChildren: function t(e, i, n) {
              var r = this._getClipItem();
              return (!r || r.contains(e)) && t.base.call(this, e, i, n, r);
            },
            _draw: function(t, e) {
              var i = e.clip,
                n = !i && this._getClipItem();
              (e = e.extend({ clipItem: n, clip: !1 })),
                i
                  ? (t.beginPath(), (e.dontStart = e.dontFinish = !0))
                  : n && n.draw(t, e.extend({ clip: !0 }));
              for (var r = this._children, s = 0, a = r.length; s < a; s++) {
                var o = r[s];
                o !== n && o.draw(t, e);
              }
            },
          }),
          E = I.extend({
            _class: 'Layer',
            initialize: function() {
              I.apply(this, arguments);
            },
            _getOwner: function() {
              return this._parent || (null != this._index && this._project);
            },
            isInserted: function t() {
              return this._parent ? t.base.call(this) : null != this._index;
            },
            activate: function() {
              this._project._activeLayer = this;
            },
            _hitTestSelf: function() {},
          }),
          T = P.extend(
            {
              _class: 'Shape',
              _applyMatrix: !1,
              _canApplyMatrix: !1,
              _canScaleStroke: !0,
              _serializeFields: { type: null, size: null, radius: null },
              initialize: function(t, e) {
                this._initialize(t, e);
              },
              _equals: function(t) {
                return (
                  this._type === t._type &&
                  this._size.equals(t._size) &&
                  l.equals(this._radius, t._radius)
                );
              },
              copyContent: function(t) {
                this.setType(t._type),
                  this.setSize(t._size),
                  this.setRadius(t._radius);
              },
              getType: function() {
                return this._type;
              },
              setType: function(t) {
                this._type = t;
              },
              getShape: '#getType',
              setShape: '#setType',
              getSize: function() {
                var t = this._size;
                return new w(t.width, t.height, this, 'setSize');
              },
              setSize: function() {
                var t = x.read(arguments);
                if (this._size) {
                  if (!this._size.equals(t)) {
                    var e = this._type,
                      i = t.width,
                      n = t.height;
                    'rectangle' === e
                      ? this._radius.set(x.min(this._radius, t.divide(2)))
                      : 'circle' === e
                        ? ((i = n = (i + n) / 2), (this._radius = i / 2))
                        : 'ellipse' === e && this._radius._set(i / 2, n / 2),
                      this._size._set(i, n),
                      this._changed(9);
                  }
                } else this._size = t.clone();
              },
              getRadius: function() {
                var t = this._radius;
                return 'circle' === this._type
                  ? t
                  : new w(t.width, t.height, this, 'setRadius');
              },
              setRadius: function(t) {
                var e = this._type;
                if ('circle' === e) {
                  if (t === this._radius) return;
                  var i = 2 * t;
                  (this._radius = t), this._size._set(i, i);
                } else if (((t = x.read(arguments)), this._radius)) {
                  if (this._radius.equals(t)) return;
                  if ((this._radius.set(t), 'rectangle' === e)) {
                    i = x.max(this._size, t.multiply(2));
                    this._size.set(i);
                  } else
                    'ellipse' === e &&
                      this._size._set(2 * t.width, 2 * t.height);
                } else this._radius = t.clone();
                this._changed(9);
              },
              isEmpty: function() {
                return !1;
              },
              toPath: function(t) {
                var e = new F[(l.capitalize(this._type))]({
                  center: new m(),
                  size: this._size,
                  radius: this._radius,
                  insert: !1,
                });
                return (
                  e.copyAttributes(this),
                  a.settings.applyMatrix && e.setApplyMatrix(!0),
                  (t === h || t) && e.insertAbove(this),
                  e
                );
              },
              toShape: '#clone',
              _asPathItem: function() {
                return this.toPath(!1);
              },
              _draw: function(t, e, i, n) {
                var r = this._style,
                  s = r.hasFill(),
                  a = r.hasStroke(),
                  o = e.dontFinish || e.clip,
                  h = !n;
                if (s || a || o) {
                  var u = this._type,
                    c = this._radius,
                    l = 'circle' === u;
                  if ((e.dontStart || t.beginPath(), h && l))
                    t.arc(0, 0, c, 0, 2 * Math.PI, !0);
                  else {
                    var f = l ? c : c.width,
                      d = l ? c : c.height,
                      p = this._size,
                      g = p.width,
                      _ = p.height;
                    if (h && 'rectangle' === u && 0 === f && 0 === d)
                      t.rect(-g / 2, -_ / 2, g, _);
                    else {
                      var v = g / 2,
                        m = _ / 2,
                        y = 0.44771525016920644,
                        x = f * y,
                        w = d * y,
                        b = [
                          -v,
                          -m + d,
                          -v,
                          -m + w,
                          -v + x,
                          -m,
                          -v + f,
                          -m,
                          v - f,
                          -m,
                          v - x,
                          -m,
                          v,
                          -m + w,
                          v,
                          -m + d,
                          v,
                          m - d,
                          v,
                          m - w,
                          v - x,
                          m,
                          v - f,
                          m,
                          -v + f,
                          m,
                          -v + x,
                          m,
                          -v,
                          m - w,
                          -v,
                          m - d,
                        ];
                      n && n.transform(b, b, 32),
                        t.moveTo(b[0], b[1]),
                        t.bezierCurveTo(b[2], b[3], b[4], b[5], b[6], b[7]),
                        v !== f && t.lineTo(b[8], b[9]),
                        t.bezierCurveTo(
                          b[10],
                          b[11],
                          b[12],
                          b[13],
                          b[14],
                          b[15]
                        ),
                        m !== d && t.lineTo(b[16], b[17]),
                        t.bezierCurveTo(
                          b[18],
                          b[19],
                          b[20],
                          b[21],
                          b[22],
                          b[23]
                        ),
                        v !== f && t.lineTo(b[24], b[25]),
                        t.bezierCurveTo(
                          b[26],
                          b[27],
                          b[28],
                          b[29],
                          b[30],
                          b[31]
                        );
                    }
                  }
                  t.closePath();
                }
                o ||
                  (!s && !a) ||
                  (this._setStyles(t, e, i),
                  s &&
                    (t.fill(r.getFillRule()),
                    (t.shadowColor = 'rgba(0,0,0,0)')),
                  a && t.stroke());
              },
              _canComposite: function() {
                return !(this.hasFill() && this.hasStroke());
              },
              _getBounds: function(t, e) {
                var i = new b(this._size).setCenter(0, 0),
                  n = this._style,
                  r = e.stroke && n.hasStroke() && n.getStrokeWidth();
                return (
                  t && (i = t._transformBounds(i)),
                  r
                    ? i.expand(
                        F._getStrokePadding(r, this._getStrokeMatrix(t, e))
                      )
                    : i
                );
              },
            },
            new function() {
              function t(t, e, i) {
                var n = t._radius;
                if (!n.isZero())
                  for (var r = t._size.divide(2), s = 1; s <= 4; s++) {
                    var a = new m(s > 1 && s < 4 ? -1 : 1, s > 2 ? -1 : 1),
                      o = a.multiply(r),
                      h = o.subtract(a.multiply(n));
                    if (new b(i ? o.add(a.multiply(i)) : o, h).contains(e))
                      return { point: h, quadrant: s };
                  }
              }
              function e(t, e, i, n) {
                var r = t.divide(e);
                return (
                  (!n || r.isInQuadrant(n)) &&
                  r
                    .subtract(r.normalize())
                    .multiply(e)
                    .divide(i).length <= 1
                );
              }
              return {
                _contains: function e(i) {
                  if ('rectangle' === this._type) {
                    var n = t(this, i);
                    return n
                      ? i
                          .subtract(n.point)
                          .divide(this._radius)
                          .getLength() <= 1
                      : e.base.call(this, i);
                  }
                  return i.divide(this.size).getLength() <= 0.5;
                },
                _hitTestSelf: function i(n, r, s, a) {
                  var o = !1,
                    h = this._style,
                    u = r.stroke && h.hasStroke(),
                    c = r.fill && h.hasFill();
                  if (u || c) {
                    var l = this._type,
                      f = this._radius,
                      d = u ? h.getStrokeWidth() / 2 : 0,
                      p = r._tolerancePadding.add(
                        F._getStrokePadding(d, !h.getStrokeScaling() && a)
                      );
                    if ('rectangle' === l) {
                      var g = p.multiply(2),
                        _ = t(this, n, g);
                      if (_) o = e(n.subtract(_.point), f, p, _.quadrant);
                      else {
                        var v = new b(this._size).setCenter(0, 0),
                          m = v.expand(g),
                          y = v.expand(g.negate());
                        o = m._containsPoint(n) && !y._containsPoint(n);
                      }
                    } else o = e(n, f, p);
                  }
                  return o
                    ? new O(u ? 'stroke' : 'fill', this)
                    : i.base.apply(this, arguments);
                },
              };
            }(),
            {
              statics: new function() {
                function t(t, e, i, n, r) {
                  var s = new T(l.getNamed(r), e);
                  return (s._type = t), (s._size = i), (s._radius = n), s;
                }
                return {
                  Circle: function() {
                    var e = m.readNamed(arguments, 'center'),
                      i = l.readNamed(arguments, 'radius');
                    return t('circle', e, new x(2 * i), i, arguments);
                  },
                  Rectangle: function() {
                    var e = b.readNamed(arguments, 'rectangle'),
                      i = x.min(
                        x.readNamed(arguments, 'radius'),
                        e.getSize(!0).divide(2)
                      );
                    return t(
                      'rectangle',
                      e.getCenter(!0),
                      e.getSize(!0),
                      i,
                      arguments
                    );
                  },
                  Ellipse: function() {
                    var e = T._readEllipse(arguments),
                      i = e.radius;
                    return t('ellipse', e.center, i.multiply(2), i, arguments);
                  },
                  _readEllipse: function(t) {
                    var e, i;
                    if (l.hasNamed(t, 'radius'))
                      (e = m.readNamed(t, 'center')),
                        (i = x.readNamed(t, 'radius'));
                    else {
                      var n = b.readNamed(t, 'rectangle');
                      (e = n.getCenter(!0)), (i = n.getSize(!0).divide(2));
                    }
                    return { center: e, radius: i };
                  },
                };
              }(),
            }
          ),
          L = P.extend(
            {
              _class: 'Raster',
              _applyMatrix: !1,
              _canApplyMatrix: !1,
              _boundsOptions: { stroke: !1, handle: !1 },
              _serializeFields: { crossOrigin: null, source: null },
              _prioritize: ['crossOrigin'],
              initialize: function(t, e) {
                if (!this._initialize(t, e !== h && m.read(arguments, 1))) {
                  var i = 'string' == typeof t ? c.getElementById(t) : t;
                  i ? this.setImage(i) : this.setSource(t);
                }
                this._size || ((this._size = new x()), (this._loaded = !1));
              },
              _equals: function(t) {
                return this.getSource() === t.getSource();
              },
              copyContent: function(t) {
                var e = t._image,
                  i = t._canvas;
                if (e) this._setImage(e);
                else if (i) {
                  var n = ot.getCanvas(t._size);
                  n.getContext('2d').drawImage(i, 0, 0), this._setImage(n);
                }
                this._crossOrigin = t._crossOrigin;
              },
              getSize: function() {
                var t = this._size;
                return new w(
                  t ? t.width : 0,
                  t ? t.height : 0,
                  this,
                  'setSize'
                );
              },
              setSize: function() {
                var t = x.read(arguments);
                if (!t.equals(this._size))
                  if (t.width > 0 && t.height > 0) {
                    var e = this.getElement();
                    this._setImage(ot.getCanvas(t)),
                      e &&
                        this.getContext(!0).drawImage(
                          e,
                          0,
                          0,
                          t.width,
                          t.height
                        );
                  } else
                    this._canvas && ot.release(this._canvas),
                      (this._size = t.clone());
              },
              getWidth: function() {
                return this._size ? this._size.width : 0;
              },
              setWidth: function(t) {
                this.setSize(t, this.getHeight());
              },
              getHeight: function() {
                return this._size ? this._size.height : 0;
              },
              setHeight: function(t) {
                this.setSize(this.getWidth(), t);
              },
              getLoaded: function() {
                return this._loaded;
              },
              isEmpty: function() {
                var t = this._size;
                return !t || (0 === t.width && 0 === t.height);
              },
              getResolution: function() {
                var t = this._matrix,
                  e = new m(0, 0).transform(t),
                  i = new m(1, 0).transform(t).subtract(e),
                  n = new m(0, 1).transform(t).subtract(e);
                return new x(72 / i.getLength(), 72 / n.getLength());
              },
              getPpi: '#getResolution',
              getImage: function() {
                return this._image;
              },
              setImage: function(t) {
                var e = this;
                function i(t) {
                  var i = e.getView(),
                    n = (t && t.type) || 'load';
                  i && e.responds(n) && ((a = i._scope), e.emit(n, new tt(t)));
                }
                this._setImage(t),
                  this._loaded
                    ? setTimeout(i, 0)
                    : t &&
                      J.add(t, {
                        load: function(n) {
                          e._setImage(t), i(n);
                        },
                        error: i,
                      });
              },
              _setImage: function(t) {
                this._canvas && ot.release(this._canvas),
                  t && t.getContext
                    ? ((this._image = null),
                      (this._canvas = t),
                      (this._loaded = !0))
                    : ((this._image = t),
                      (this._canvas = null),
                      (this._loaded = !!(t && t.src && t.complete))),
                  (this._size = new x(
                    t ? t.naturalWidth || t.width : 0,
                    t ? t.naturalHeight || t.height : 0
                  )),
                  (this._context = null),
                  this._changed(521);
              },
              getCanvas: function() {
                if (!this._canvas) {
                  var t = ot.getContext(this._size);
                  try {
                    this._image && t.drawImage(this._image, 0, 0),
                      (this._canvas = t.canvas);
                  } catch (e) {
                    ot.release(t);
                  }
                }
                return this._canvas;
              },
              setCanvas: '#setImage',
              getContext: function(t) {
                return (
                  this._context ||
                    (this._context = this.getCanvas().getContext('2d')),
                  t && ((this._image = null), this._changed(513)),
                  this._context
                );
              },
              setContext: function(t) {
                this._context = t;
              },
              getSource: function() {
                var t = this._image;
                return (t && t.src) || this.toDataURL();
              },
              setSource: function(t) {
                var e = new o.Image(),
                  i = this._crossOrigin;
                i && (e.crossOrigin = i), (e.src = t), this.setImage(e);
              },
              getCrossOrigin: function() {
                var t = this._image;
                return (t && t.crossOrigin) || this._crossOrigin || '';
              },
              setCrossOrigin: function(t) {
                this._crossOrigin = t;
                var e = this._image;
                e && (e.crossOrigin = t);
              },
              getElement: function() {
                return this._canvas || (this._loaded && this._image);
              },
            },
            {
              beans: !1,
              getSubCanvas: function() {
                var t = b.read(arguments),
                  e = ot.getContext(t.getSize());
                return (
                  e.drawImage(
                    this.getCanvas(),
                    t.x,
                    t.y,
                    t.width,
                    t.height,
                    0,
                    0,
                    t.width,
                    t.height
                  ),
                  e.canvas
                );
              },
              getSubRaster: function() {
                var t = b.read(arguments),
                  e = new L(P.NO_INSERT);
                return (
                  e._setImage(this.getSubCanvas(t)),
                  e.translate(t.getCenter().subtract(this.getSize().divide(2))),
                  e._matrix.prepend(this._matrix),
                  e.insertAbove(this),
                  e
                );
              },
              toDataURL: function() {
                var t = this._image,
                  e = t && t.src;
                if (/^data:/.test(e)) return e;
                var i = this.getCanvas();
                return i ? i.toDataURL.apply(i, arguments) : null;
              },
              drawImage: function(t) {
                var e = m.read(arguments, 1);
                this.getContext(!0).drawImage(t, e.x, e.y);
              },
              getAverageColor: function(t) {
                var e, i;
                if (
                  (t
                    ? t instanceof D
                      ? ((i = t), (e = t.getBounds()))
                      : 'object' == typeof t &&
                        ('width' in t
                          ? (e = new b(t))
                          : 'x' in t && (e = new b(t.x - 0.5, t.y - 0.5, 1, 1)))
                    : (e = this.getBounds()),
                  !e)
                )
                  return null;
                var n = Math.min(e.width, 32),
                  r = Math.min(e.height, 32),
                  s = L._sampleContext;
                s
                  ? s.clearRect(0, 0, 33, 33)
                  : (s = L._sampleContext = ot.getContext(new x(32))),
                  s.save();
                var a = new S()
                  .scale(n / e.width, r / e.height)
                  .translate(-e.x, -e.y);
                a.applyToContext(s),
                  i && i.draw(s, new l({ clip: !0, matrices: [a] })),
                  this._matrix.applyToContext(s);
                var o = this.getElement(),
                  h = this._size;
                o && s.drawImage(o, -h.width / 2, -h.height / 2), s.restore();
                for (
                  var u = s.getImageData(0.5, 0.5, Math.ceil(n), Math.ceil(r))
                      .data,
                    c = [0, 0, 0],
                    f = 0,
                    d = 0,
                    p = u.length;
                  d < p;
                  d += 4
                ) {
                  var g = u[d + 3];
                  (f += g),
                    (g /= 255),
                    (c[0] += u[d] * g),
                    (c[1] += u[d + 1] * g),
                    (c[2] += u[d + 2] * g);
                }
                for (d = 0; d < 3; d++) c[d] /= f;
                return f ? W.read(c) : null;
              },
              getPixel: function() {
                var t = m.read(arguments),
                  e = this.getContext().getImageData(t.x, t.y, 1, 1).data;
                return new W(
                  'rgb',
                  [e[0] / 255, e[1] / 255, e[2] / 255],
                  e[3] / 255
                );
              },
              setPixel: function() {
                var t = m.read(arguments),
                  e = W.read(arguments),
                  i = e._convert('rgb'),
                  n = e._alpha,
                  r = this.getContext(!0),
                  s = r.createImageData(1, 1),
                  a = s.data;
                (a[0] = 255 * i[0]),
                  (a[1] = 255 * i[1]),
                  (a[2] = 255 * i[2]),
                  (a[3] = null != n ? 255 * n : 255),
                  r.putImageData(s, t.x, t.y);
              },
              createImageData: function() {
                var t = x.read(arguments);
                return this.getContext().createImageData(t.width, t.height);
              },
              getImageData: function() {
                var t = b.read(arguments);
                return (
                  t.isEmpty() && (t = new b(this._size)),
                  this.getContext().getImageData(t.x, t.y, t.width, t.height)
                );
              },
              setImageData: function(t) {
                var e = m.read(arguments, 1);
                this.getContext(!0).putImageData(t, e.x, e.y);
              },
              _getBounds: function(t, e) {
                var i = new b(this._size).setCenter(0, 0);
                return t ? t._transformBounds(i) : i;
              },
              _hitTestSelf: function(t) {
                if (this._contains(t)) {
                  var e = this;
                  return new O('pixel', e, {
                    offset: t.add(e._size.divide(2)).round(),
                    color: {
                      get: function() {
                        return e.getPixel(this.offset);
                      },
                    },
                  });
                }
              },
              _draw: function(t) {
                var e = this.getElement();
                e &&
                  ((t.globalAlpha = this._opacity),
                  t.drawImage(
                    e,
                    -this._size.width / 2,
                    -this._size.height / 2
                  ));
              },
              _canComposite: function() {
                return !0;
              },
            }
          ),
          M = P.extend({
            _class: 'SymbolItem',
            _applyMatrix: !1,
            _canApplyMatrix: !1,
            _boundsOptions: { stroke: !0 },
            _serializeFields: { symbol: null },
            initialize: function(t, e) {
              this._initialize(t, e !== h && m.read(arguments, 1)) ||
                this.setDefinition(t instanceof N ? t : new N(t));
            },
            _equals: function(t) {
              return this._definition === t._definition;
            },
            copyContent: function(t) {
              this.setDefinition(t._definition);
            },
            getDefinition: function() {
              return this._definition;
            },
            setDefinition: function(t) {
              (this._definition = t), this._changed(9);
            },
            getSymbol: '#getDefinition',
            setSymbol: '#setDefinition',
            isEmpty: function() {
              return this._definition._item.isEmpty();
            },
            _getBounds: function(t, e) {
              var i = this._definition._item;
              return i._getCachedBounds(i._matrix.prepended(t), e);
            },
            _hitTestSelf: function(t, e, i) {
              var n = this._definition._item._hitTest(t, e, i);
              return n && (n.item = this), n;
            },
            _draw: function(t, e) {
              this._definition._item.draw(t, e);
            },
          }),
          N = l.extend({
            _class: 'SymbolDefinition',
            initialize: function(t, e) {
              (this._id = v.get()),
                (this.project = a.project),
                t && this.setItem(t, e);
            },
            _serialize: function(t, e) {
              return e.add(this, function() {
                return l.serialize([this._class, this._item], t, !1, e);
              });
            },
            _changed: function(t) {
              8 & t && P._clearBoundsCache(this),
                1 & t && this.project._changed(t);
            },
            getItem: function() {
              return this._item;
            },
            setItem: function(t, e) {
              t._symbol && (t = t.clone()),
                this._item && (this._item._symbol = null),
                (this._item = t),
                t.remove(),
                t.setSelected(!1),
                e || t.setPosition(new m()),
                (t._symbol = this),
                this._changed(9);
            },
            getDefinition: '#getItem',
            setDefinition: '#setItem',
            place: function(t) {
              return new M(this, t);
            },
            clone: function() {
              return new N(this._item.clone(!1));
            },
            equals: function(t) {
              return t === this || (t && this._item.equals(t._item)) || !1;
            },
          }),
          O = l.extend({
            _class: 'HitResult',
            initialize: function(t, e, i) {
              (this.type = t), (this.item = e), i && this.inject(i);
            },
            statics: {
              getOptions: function(t) {
                var e = t && l.read(t);
                return l.set(
                  {
                    type: null,
                    tolerance: a.settings.hitTolerance,
                    fill: !e,
                    stroke: !e,
                    segments: !e,
                    handles: !1,
                    ends: !1,
                    position: !1,
                    center: !1,
                    bounds: !1,
                    guides: !1,
                    selected: !1,
                  },
                  e
                );
              },
            },
          }),
          V = l.extend({
            _class: 'Segment',
            beans: !0,
            _selection: 0,
            initialize: function(t, e, i, n, r, s) {
              var a,
                o,
                u,
                c,
                l = arguments.length;
              l > 0 &&
                (null == t || 'object' == typeof t
                  ? 1 === l && t && 'point' in t
                    ? ((a = t.point),
                      (o = t.handleIn),
                      (u = t.handleOut),
                      (c = t.selection))
                    : ((a = t), (o = e), (u = i), (c = n))
                  : ((a = [t, e]),
                    (o = i !== h ? [i, n] : null),
                    (u = r !== h ? [r, s] : null))),
                new z(a, this, '_point'),
                new z(o, this, '_handleIn'),
                new z(u, this, '_handleOut'),
                c && this.setSelection(c);
            },
            _serialize: function(t, e) {
              var i = this._point,
                n = this._selection,
                r =
                  n || this.hasHandles()
                    ? [i, this._handleIn, this._handleOut]
                    : i;
              return n && r.push(n), l.serialize(r, t, !0, e);
            },
            _changed: function(t) {
              var e = this._path;
              if (e) {
                var i,
                  n = e._curves,
                  r = this._index;
                n &&
                  ((t && t !== this._point && t !== this._handleIn) ||
                    !(i =
                      r > 0 ? n[r - 1] : e._closed ? n[n.length - 1] : null) ||
                    i._changed(),
                  (t && t !== this._point && t !== this._handleOut) ||
                    !(i = n[r]) ||
                    i._changed()),
                  e._changed(25);
              }
            },
            getPoint: function() {
              return this._point;
            },
            setPoint: function() {
              this._point.set(m.read(arguments));
            },
            getHandleIn: function() {
              return this._handleIn;
            },
            setHandleIn: function() {
              this._handleIn.set(m.read(arguments));
            },
            getHandleOut: function() {
              return this._handleOut;
            },
            setHandleOut: function() {
              this._handleOut.set(m.read(arguments));
            },
            hasHandles: function() {
              return !this._handleIn.isZero() || !this._handleOut.isZero();
            },
            isSmooth: function() {
              var t = this._handleIn,
                e = this._handleOut;
              return !t.isZero() && !e.isZero() && t.isCollinear(e);
            },
            clearHandles: function() {
              this._handleIn._set(0, 0), this._handleOut._set(0, 0);
            },
            getSelection: function() {
              return this._selection;
            },
            setSelection: function(t) {
              var e = this._selection,
                i = this._path;
              (this._selection = t = t || 0),
                i &&
                  t !== e &&
                  (i._updateSelection(this, e, t), i._changed(129));
            },
            _changeSelection: function(t, e) {
              var i = this._selection;
              this.setSelection(e ? i | t : i & ~t);
            },
            isSelected: function() {
              return !!(7 & this._selection);
            },
            setSelected: function(t) {
              this._changeSelection(7, t);
            },
            getIndex: function() {
              return this._index !== h ? this._index : null;
            },
            getPath: function() {
              return this._path || null;
            },
            getCurve: function() {
              var t = this._path,
                e = this._index;
              return t
                ? (e > 0 && !t._closed && e === t._segments.length - 1 && e--,
                  t.getCurves()[e] || null)
                : null;
            },
            getLocation: function() {
              var t = this.getCurve();
              return t ? new B(t, this === t._segment1 ? 0 : 1) : null;
            },
            getNext: function() {
              var t = this._path && this._path._segments;
              return (
                (t && (t[this._index + 1] || (this._path._closed && t[0]))) ||
                null
              );
            },
            smooth: function(t, e, i) {
              var n = t || {},
                r = n.type,
                s = n.factor,
                a = this.getPrevious(),
                o = this.getNext(),
                u = (a || this)._point,
                c = this._point,
                l = (o || this)._point,
                f = u.getDistance(c),
                d = c.getDistance(l);
              if (r && 'catmull-rom' !== r) {
                if ('geometric' !== r)
                  throw new Error(
                    "Smoothing method '" + r + "' not supported."
                  );
                if (a && o) {
                  var p = u.subtract(l),
                    g = s === h ? 0.4 : s,
                    _ = g * f / (f + d);
                  e || this.setHandleIn(p.multiply(_)),
                    i || this.setHandleOut(p.multiply(_ - g));
                }
              } else {
                var v = s === h ? 0.5 : s,
                  y = Math.pow(f, v),
                  x = y * y,
                  w = Math.pow(d, v),
                  b = w * w;
                if (!e && a) {
                  var C = 2 * b + 3 * w * y + x,
                    S = 3 * w * (w + y);
                  this.setHandleIn(
                    0 !== S
                      ? new m(
                          (b * u._x + C * c._x - x * l._x) / S - c._x,
                          (b * u._y + C * c._y - x * l._y) / S - c._y
                        )
                      : new m()
                  );
                }
                if (!i && o) {
                  (C = 2 * x + 3 * y * w + b), (S = 3 * y * (y + w));
                  this.setHandleOut(
                    0 !== S
                      ? new m(
                          (x * l._x + C * c._x - b * u._x) / S - c._x,
                          (x * l._y + C * c._y - b * u._y) / S - c._y
                        )
                      : new m()
                  );
                }
              }
            },
            getPrevious: function() {
              var t = this._path && this._path._segments;
              return (
                (t &&
                  (t[this._index - 1] ||
                    (this._path._closed && t[t.length - 1]))) ||
                null
              );
            },
            isFirst: function() {
              return !this._index;
            },
            isLast: function() {
              var t = this._path;
              return (t && this._index === t._segments.length - 1) || !1;
            },
            reverse: function() {
              var t = this._handleIn,
                e = this._handleOut,
                i = t.clone();
              t.set(e), e.set(i);
            },
            reversed: function() {
              return new V(this._point, this._handleOut, this._handleIn);
            },
            remove: function() {
              return !!this._path && !!this._path.removeSegment(this._index);
            },
            clone: function() {
              return new V(this._point, this._handleIn, this._handleOut);
            },
            equals: function(t) {
              return (
                t === this ||
                (t &&
                  this._class === t._class &&
                  this._point.equals(t._point) &&
                  this._handleIn.equals(t._handleIn) &&
                  this._handleOut.equals(t._handleOut)) ||
                !1
              );
            },
            toString: function() {
              var t = ['point: ' + this._point];
              return (
                this._handleIn.isZero() ||
                  t.push('handleIn: ' + this._handleIn),
                this._handleOut.isZero() ||
                  t.push('handleOut: ' + this._handleOut),
                '{ ' + t.join(', ') + ' }'
              );
            },
            transform: function(t) {
              this._transformCoordinates(t, new Array(6), !0), this._changed();
            },
            interpolate: function(t, e, i) {
              var n = 1 - i,
                r = i,
                s = t._point,
                a = e._point,
                o = t._handleIn,
                h = e._handleIn,
                u = e._handleOut,
                c = t._handleOut;
              this._point._set(n * s._x + r * a._x, n * s._y + r * a._y, !0),
                this._handleIn._set(
                  n * o._x + r * h._x,
                  n * o._y + r * h._y,
                  !0
                ),
                this._handleOut._set(
                  n * c._x + r * u._x,
                  n * c._y + r * u._y,
                  !0
                ),
                this._changed();
            },
            _transformCoordinates: function(t, e, i) {
              var n = this._point,
                r = i && this._handleIn.isZero() ? null : this._handleIn,
                s = i && this._handleOut.isZero() ? null : this._handleOut,
                a = n._x,
                o = n._y,
                h = 2;
              return (
                (e[0] = a),
                (e[1] = o),
                r && ((e[h++] = r._x + a), (e[h++] = r._y + o)),
                s && ((e[h++] = s._x + a), (e[h++] = s._y + o)),
                t &&
                  (t._transformCoordinates(e, e, h / 2),
                  (a = e[0]),
                  (o = e[1]),
                  i
                    ? ((n._x = a),
                      (n._y = o),
                      (h = 2),
                      r && ((r._x = e[h++] - a), (r._y = e[h++] - o)),
                      s && ((s._x = e[h++] - a), (s._y = e[h++] - o)))
                    : (r || ((e[h++] = a), (e[h++] = o)),
                      s || ((e[h++] = a), (e[h++] = o)))),
                e
              );
            },
          }),
          z = m.extend({
            initialize: function(t, e, i) {
              var n, r, s;
              if (t)
                if ((n = t[0]) !== h) r = t[1];
                else {
                  var a = t;
                  (n = a.x) === h && (n = (a = m.read(arguments)).x),
                    (r = a.y),
                    (s = a.selected);
                }
              else n = r = 0;
              (this._x = n),
                (this._y = r),
                (this._owner = e),
                (e[i] = this),
                s && this.setSelected(!0);
            },
            _set: function(t, e) {
              return (
                (this._x = t), (this._y = e), this._owner._changed(this), this
              );
            },
            getX: function() {
              return this._x;
            },
            setX: function(t) {
              (this._x = t), this._owner._changed(this);
            },
            getY: function() {
              return this._y;
            },
            setY: function(t) {
              (this._y = t), this._owner._changed(this);
            },
            isZero: function() {
              var t = _.isZero;
              return t(this._x) && t(this._y);
            },
            isSelected: function() {
              return !!(this._owner._selection & this._getSelection());
            },
            setSelected: function(t) {
              this._owner._changeSelection(this._getSelection(), t);
            },
            _getSelection: function() {
              var t = this._owner;
              return this === t._point
                ? 1
                : this === t._handleIn
                  ? 2
                  : this === t._handleOut
                    ? 4
                    : 0;
            },
          }),
          R = l.extend(
            {
              _class: 'Curve',
              beans: !0,
              initialize: function(t, e, i, n, r, s, a, o) {
                var h,
                  u,
                  c,
                  l,
                  f,
                  d,
                  p = arguments.length;
                3 === p
                  ? ((this._path = t), (h = e), (u = i))
                  : p
                    ? 1 === p
                      ? 'segment1' in t
                        ? ((h = new V(t.segment1)), (u = new V(t.segment2)))
                        : 'point1' in t
                          ? ((c = t.point1),
                            (f = t.handle1),
                            (d = t.handle2),
                            (l = t.point2))
                          : Array.isArray(t) &&
                            ((c = [t[0], t[1]]),
                            (l = [t[6], t[7]]),
                            (f = [t[2] - t[0], t[3] - t[1]]),
                            (d = [t[4] - t[6], t[5] - t[7]]))
                      : 2 === p
                        ? ((h = new V(t)), (u = new V(e)))
                        : 4 === p
                          ? ((c = t), (f = e), (d = i), (l = n))
                          : 8 === p &&
                            ((c = [t, e]),
                            (l = [a, o]),
                            (f = [i - t, n - e]),
                            (d = [r - a, s - o]))
                    : ((h = new V()), (u = new V())),
                  (this._segment1 = h || new V(c, null, f)),
                  (this._segment2 = u || new V(l, d, null));
              },
              _serialize: function(t, e) {
                return l.serialize(
                  this.hasHandles()
                    ? [
                        this.getPoint1(),
                        this.getHandle1(),
                        this.getHandle2(),
                        this.getPoint2(),
                      ]
                    : [this.getPoint1(), this.getPoint2()],
                  t,
                  !0,
                  e
                );
              },
              _changed: function() {
                this._length = this._bounds = h;
              },
              clone: function() {
                return new R(this._segment1, this._segment2);
              },
              toString: function() {
                var t = ['point1: ' + this._segment1._point];
                return (
                  this._segment1._handleOut.isZero() ||
                    t.push('handle1: ' + this._segment1._handleOut),
                  this._segment2._handleIn.isZero() ||
                    t.push('handle2: ' + this._segment2._handleIn),
                  t.push('point2: ' + this._segment2._point),
                  '{ ' + t.join(', ') + ' }'
                );
              },
              classify: function() {
                return R.classify(this.getValues());
              },
              remove: function() {
                var t = !1;
                if (this._path) {
                  var e = this._segment2,
                    i = e._handleOut;
                  (t = e.remove()) && this._segment1._handleOut.set(i);
                }
                return t;
              },
              getPoint1: function() {
                return this._segment1._point;
              },
              setPoint1: function() {
                this._segment1._point.set(m.read(arguments));
              },
              getPoint2: function() {
                return this._segment2._point;
              },
              setPoint2: function() {
                this._segment2._point.set(m.read(arguments));
              },
              getHandle1: function() {
                return this._segment1._handleOut;
              },
              setHandle1: function() {
                this._segment1._handleOut.set(m.read(arguments));
              },
              getHandle2: function() {
                return this._segment2._handleIn;
              },
              setHandle2: function() {
                this._segment2._handleIn.set(m.read(arguments));
              },
              getSegment1: function() {
                return this._segment1;
              },
              getSegment2: function() {
                return this._segment2;
              },
              getPath: function() {
                return this._path;
              },
              getIndex: function() {
                return this._segment1._index;
              },
              getNext: function() {
                var t = this._path && this._path._curves;
                return (
                  (t &&
                    (t[this._segment1._index + 1] ||
                      (this._path._closed && t[0]))) ||
                  null
                );
              },
              getPrevious: function() {
                var t = this._path && this._path._curves;
                return (
                  (t &&
                    (t[this._segment1._index - 1] ||
                      (this._path._closed && t[t.length - 1]))) ||
                  null
                );
              },
              isFirst: function() {
                return !this._segment1._index;
              },
              isLast: function() {
                var t = this._path;
                return (
                  (t && this._segment1._index === t._curves.length - 1) || !1
                );
              },
              isSelected: function() {
                return (
                  this.getPoint1().isSelected() &&
                  this.getHandle1().isSelected() &&
                  this.getHandle2().isSelected() &&
                  this.getPoint2().isSelected()
                );
              },
              setSelected: function(t) {
                this.getPoint1().setSelected(t),
                  this.getHandle1().setSelected(t),
                  this.getHandle2().setSelected(t),
                  this.getPoint2().setSelected(t);
              },
              getValues: function(t) {
                return R.getValues(this._segment1, this._segment2, t);
              },
              getPoints: function() {
                for (var t = this.getValues(), e = [], i = 0; i < 8; i += 2)
                  e.push(new m(t[i], t[i + 1]));
                return e;
              },
            },
            {
              getLength: function() {
                return (
                  null == this._length &&
                    (this._length = R.getLength(this.getValues(), 0, 1)),
                  this._length
                );
              },
              getArea: function() {
                return R.getArea(this.getValues());
              },
              getLine: function() {
                return new k(this._segment1._point, this._segment2._point);
              },
              getPart: function(t, e) {
                return new R(R.getPart(this.getValues(), t, e));
              },
              getPartLength: function(t, e) {
                return R.getLength(this.getValues(), t, e);
              },
              divideAt: function(t) {
                return this.divideAtTime(
                  t && t.curve === this ? t.time : this.getTimeAt(t)
                );
              },
              divideAtTime: function(t, e) {
                var i = null;
                if (t >= 1e-8 && t <= 1 - 1e-8) {
                  var n = R.subdivide(this.getValues(), t),
                    r = n[0],
                    s = n[1],
                    a = e || this.hasHandles(),
                    o = this._segment1,
                    h = this._segment2,
                    u = this._path;
                  a &&
                    (o._handleOut._set(r[2] - r[0], r[3] - r[1]),
                    h._handleIn._set(s[4] - s[6], s[5] - s[7]));
                  var c = r[6],
                    l = r[7],
                    f = new V(
                      new m(c, l),
                      a && new m(r[4] - c, r[5] - l),
                      a && new m(s[2] - c, s[3] - l)
                    );
                  u
                    ? (u.insert(o._index + 1, f), (i = this.getNext()))
                    : ((this._segment2 = f),
                      this._changed(),
                      (i = new R(f, h)));
                }
                return i;
              },
              splitAt: function(t) {
                var e = this._path;
                return e ? e.splitAt(t) : null;
              },
              splitAtTime: function(t) {
                return this.splitAt(this.getLocationAtTime(t));
              },
              divide: function(t, e) {
                return this.divideAtTime(
                  t === h ? 0.5 : e ? t : this.getTimeAt(t)
                );
              },
              split: function(t, e) {
                return this.splitAtTime(
                  t === h ? 0.5 : e ? t : this.getTimeAt(t)
                );
              },
              reversed: function() {
                return new R(
                  this._segment2.reversed(),
                  this._segment1.reversed()
                );
              },
              clearHandles: function() {
                this._segment1._handleOut._set(0, 0),
                  this._segment2._handleIn._set(0, 0);
              },
              statics: {
                getValues: function(t, e, i, n) {
                  var r = t._point,
                    s = t._handleOut,
                    a = e._handleIn,
                    o = e._point,
                    h = r.x,
                    u = r.y,
                    c = o.x,
                    l = o.y,
                    f = n
                      ? [h, u, h, u, c, l, c, l]
                      : [h, u, h + s._x, u + s._y, c + a._x, l + a._y, c, l];
                  return i && i._transformCoordinates(f, f, 4), f;
                },
                subdivide: function(t, e) {
                  var i = t[0],
                    n = t[1],
                    r = t[2],
                    s = t[3],
                    a = t[4],
                    o = t[5],
                    u = t[6],
                    c = t[7];
                  e === h && (e = 0.5);
                  var l = 1 - e,
                    f = l * i + e * r,
                    d = l * n + e * s,
                    p = l * r + e * a,
                    g = l * s + e * o,
                    _ = l * a + e * u,
                    v = l * o + e * c,
                    m = l * f + e * p,
                    y = l * d + e * g,
                    x = l * p + e * _,
                    w = l * g + e * v,
                    b = l * m + e * x,
                    C = l * y + e * w;
                  return [[i, n, f, d, m, y, b, C], [b, C, x, w, _, v, u, c]];
                },
                getMonoCurves: function(t, e) {
                  var i = [],
                    n = e ? 0 : 1,
                    r = t[n + 0],
                    s = t[n + 2],
                    a = t[n + 4],
                    o = t[n + 6];
                  if ((r >= s == s >= a && s >= a == a >= o) || R.isStraight(t))
                    i.push(t);
                  else {
                    var h = 3 * (s - a) - r + o,
                      u = 2 * (r + a) - 4 * s,
                      c = s - r,
                      l = [],
                      f = _.solveQuadratic(h, u, c, l, 1e-8, 1 - 1e-8);
                    if (f) {
                      l.sort();
                      var d = l[0],
                        p = R.subdivide(t, d);
                      i.push(p[0]),
                        f > 1 &&
                          ((d = (l[1] - d) / (1 - d)),
                          (p = R.subdivide(p[1], d)),
                          i.push(p[0])),
                        i.push(p[1]);
                    } else i.push(t);
                  }
                  return i;
                },
                solveCubic: function(t, e, i, n, r, s) {
                  var a = t[e],
                    o = t[e + 2],
                    h = t[e + 4],
                    u = t[e + 6],
                    c = 0;
                  if (
                    !(
                      (a < i && u < i && o < i && h < i) ||
                      (a > i && u > i && o > i && h > i)
                    )
                  ) {
                    var l = 3 * (o - a),
                      f = 3 * (h - o) - l,
                      d = u - a - l - f;
                    c = _.solveCubic(d, f, l, a - i, n, r, s);
                  }
                  return c;
                },
                getTimeOf: function(t, e) {
                  var i = new m(t[0], t[1]),
                    n = new m(t[6], t[7]);
                  if (
                    null ===
                    (e.isClose(i, 1e-12) ? 0 : e.isClose(n, 1e-12) ? 1 : null)
                  )
                    for (var r = [e.x, e.y], s = [], a = 0; a < 2; a++)
                      for (
                        var o = R.solveCubic(t, a, r[a], s, 0, 1), h = 0;
                        h < o;
                        h++
                      ) {
                        var u = s[h];
                        if (e.isClose(R.getPoint(t, u), 1e-7)) return u;
                      }
                  return e.isClose(i, 1e-7) ? 0 : e.isClose(n, 1e-7) ? 1 : null;
                },
                getNearestTime: function(t, e) {
                  if (R.isStraight(t)) {
                    var i = t[0],
                      n = t[1],
                      r = t[6] - i,
                      s = t[7] - n,
                      a = r * r + s * s;
                    if (0 === a) return 0;
                    var o = ((e.x - i) * r + (e.y - n) * s) / a;
                    return o < 1e-12
                      ? 0
                      : o > 0.999999999999
                        ? 1
                        : R.getTimeOf(t, new m(i + o * r, n + o * s));
                  }
                  var h = 1 / 0,
                    u = 0;
                  function c(i) {
                    if (i >= 0 && i <= 1) {
                      var n = e.getDistance(R.getPoint(t, i), !0);
                      if (n < h) return (h = n), (u = i), !0;
                    }
                  }
                  for (var l = 0; l <= 100; l++) c(l / 100);
                  for (var f = 0.005; f > 1e-8; )
                    c(u - f) || c(u + f) || (f /= 2);
                  return u;
                },
                getPart: function(t, e, i) {
                  var n = e > i;
                  if (n) {
                    var r = e;
                    (e = i), (i = r);
                  }
                  return (
                    e > 0 && (t = R.subdivide(t, e)[1]),
                    i < 1 && (t = R.subdivide(t, (i - e) / (1 - e))[0]),
                    n ? [t[6], t[7], t[4], t[5], t[2], t[3], t[0], t[1]] : t
                  );
                },
                isFlatEnough: function(t, e) {
                  var i = t[0],
                    n = t[1],
                    r = t[2],
                    s = t[3],
                    a = t[4],
                    o = t[5],
                    h = t[6],
                    u = t[7],
                    c = 3 * r - 2 * i - h,
                    l = 3 * s - 2 * n - u,
                    f = 3 * a - 2 * h - i,
                    d = 3 * o - 2 * u - n;
                  return (
                    Math.max(c * c, f * f) + Math.max(l * l, d * d) <=
                    16 * e * e
                  );
                },
                getArea: function(t) {
                  var e = t[0],
                    i = t[1],
                    n = t[2],
                    r = t[3],
                    s = t[4],
                    a = t[5],
                    o = t[6],
                    h = t[7];
                  return (
                    3 *
                    ((h - i) * (n + s) -
                      (o - e) * (r + a) +
                      r * (e - s) -
                      n * (i - a) +
                      h * (s + e / 3) -
                      o * (a + i / 3)) /
                    20
                  );
                },
                getBounds: function(t) {
                  for (
                    var e = t.slice(0, 2), i = e.slice(), n = [0, 0], r = 0;
                    r < 2;
                    r++
                  )
                    R._addBounds(
                      t[r],
                      t[r + 2],
                      t[r + 4],
                      t[r + 6],
                      r,
                      0,
                      e,
                      i,
                      n
                    );
                  return new b(e[0], e[1], i[0] - e[0], i[1] - e[1]);
                },
                _addBounds: function(t, e, i, n, r, s, a, o, h) {
                  function u(t, e) {
                    var i = t - e,
                      n = t + e;
                    i < a[r] && (a[r] = i), n > o[r] && (o[r] = n);
                  }
                  s /= 2;
                  var c = a[r] - s,
                    l = o[r] + s;
                  if (
                    t < c ||
                    e < c ||
                    i < c ||
                    n < c ||
                    t > l ||
                    e > l ||
                    i > l ||
                    n > l
                  )
                    if (e < t != e < n && i < t != i < n) u(t, s), u(n, s);
                    else {
                      var f = 3 * (e - i) - t + n,
                        d = 2 * (t + i) - 4 * e,
                        p = e - t,
                        g = _.solveQuadratic(f, d, p, h);
                      u(n, 0);
                      for (var v = 0; v < g; v++) {
                        var m = h[v],
                          y = 1 - m;
                        1e-8 <= m &&
                          m <= 1 - 1e-8 &&
                          u(
                            y * y * y * t +
                              3 * y * y * m * e +
                              3 * y * m * m * i +
                              m * m * m * n,
                            s
                          );
                      }
                    }
                },
              },
            },
            l.each(
              ['getBounds', 'getStrokeBounds', 'getHandleBounds'],
              function(t) {
                this[t] = function() {
                  this._bounds || (this._bounds = {});
                  var e = this._bounds[t];
                  return (
                    e ||
                      (e = this._bounds[t] = F[t](
                        [this._segment1, this._segment2],
                        !1,
                        this._path
                      )),
                    e.clone()
                  );
                };
              },
              {}
            ),
            l.each(
              {
                isStraight: function(t, e, i, n) {
                  if (e.isZero() && i.isZero()) return !0;
                  var r = n.subtract(t);
                  if (r.isZero()) return !1;
                  if (r.isCollinear(e) && r.isCollinear(i)) {
                    var s = new k(t, n);
                    if (
                      s.getDistance(t.add(e)) < 1e-7 &&
                      s.getDistance(n.add(i)) < 1e-7
                    ) {
                      var a = r.dot(r),
                        o = r.dot(e) / a,
                        h = r.dot(i) / a;
                      return o >= 0 && o <= 1 && h <= 0 && h >= -1;
                    }
                  }
                  return !1;
                },
                isLinear: function(t, e, i, n) {
                  var r = n.subtract(t).divide(3);
                  return e.equals(r) && i.negate().equals(r);
                },
              },
              function(t, e) {
                (this[e] = function(e) {
                  var i = this._segment1,
                    n = this._segment2;
                  return t(i._point, i._handleOut, n._handleIn, n._point, e);
                }),
                  (this.statics[e] = function(e, i) {
                    var n = e[0],
                      r = e[1],
                      s = e[6],
                      a = e[7];
                    return t(
                      new m(n, r),
                      new m(e[2] - n, e[3] - r),
                      new m(e[4] - s, e[5] - a),
                      new m(s, a),
                      i
                    );
                  });
              },
              {
                statics: {},
                hasHandles: function() {
                  return (
                    !this._segment1._handleOut.isZero() ||
                    !this._segment2._handleIn.isZero()
                  );
                },
                hasLength: function(t) {
                  return (
                    (!this.getPoint1().equals(this.getPoint2()) ||
                      this.hasHandles()) &&
                    this.getLength() > (t || 0)
                  );
                },
                isCollinear: function(t) {
                  return (
                    t &&
                    this.isStraight() &&
                    t.isStraight() &&
                    this.getLine().isCollinear(t.getLine())
                  );
                },
                isHorizontal: function() {
                  return (
                    this.isStraight() &&
                    Math.abs(this.getTangentAtTime(0.5).y) < 1e-8
                  );
                },
                isVertical: function() {
                  return (
                    this.isStraight() &&
                    Math.abs(this.getTangentAtTime(0.5).x) < 1e-8
                  );
                },
              }
            ),
            {
              beans: !1,
              getLocationAt: function(t, e) {
                return this.getLocationAtTime(e ? t : this.getTimeAt(t));
              },
              getLocationAtTime: function(t) {
                return null != t && t >= 0 && t <= 1 ? new B(this, t) : null;
              },
              getTimeAt: function(t, e) {
                return R.getTimeAt(this.getValues(), t, e);
              },
              getParameterAt: '#getTimeAt',
              getOffsetAtTime: function(t) {
                return this.getPartLength(0, t);
              },
              getLocationOf: function() {
                return this.getLocationAtTime(
                  this.getTimeOf(m.read(arguments))
                );
              },
              getOffsetOf: function() {
                var t = this.getLocationOf.apply(this, arguments);
                return t ? t.getOffset() : null;
              },
              getTimeOf: function() {
                return R.getTimeOf(this.getValues(), m.read(arguments));
              },
              getParameterOf: '#getTimeOf',
              getNearestLocation: function() {
                var t = m.read(arguments),
                  e = this.getValues(),
                  i = R.getNearestTime(e, t),
                  n = R.getPoint(e, i);
                return new B(this, i, n, null, t.getDistance(n));
              },
              getNearestPoint: function() {
                var t = this.getNearestLocation.apply(this, arguments);
                return t ? t.getPoint() : t;
              },
            },
            new function() {
              var t = [
                'getPoint',
                'getTangent',
                'getNormal',
                'getWeightedTangent',
                'getWeightedNormal',
                'getCurvature',
              ];
              return l.each(
                t,
                function(t) {
                  (this[t + 'At'] = function(e, i) {
                    var n = this.getValues();
                    return R[t](n, i ? e : R.getTimeAt(n, e));
                  }),
                    (this[t + 'AtTime'] = function(e) {
                      return R[t](this.getValues(), e);
                    });
                },
                { statics: { _evaluateMethods: t } }
              );
            }(),
            new function() {
              function t(t) {
                var e = t[0],
                  i = t[1],
                  n = t[2],
                  r = t[3],
                  s = t[4],
                  a = t[5],
                  o = 9 * (n - s) + 3 * (t[6] - e),
                  h = 6 * (e + s) - 12 * n,
                  u = 3 * (n - e),
                  c = 9 * (r - a) + 3 * (t[7] - i),
                  l = 6 * (i + a) - 12 * r,
                  f = 3 * (r - i);
                return function(t) {
                  var e = (o * t + h) * t + u,
                    i = (c * t + l) * t + f;
                  return Math.sqrt(e * e + i * i);
                };
              }
              function e(t, e) {
                return Math.max(
                  2,
                  Math.min(16, Math.ceil(32 * Math.abs(e - t)))
                );
              }
              function i(t, e, i, n) {
                if (null == e || e < 0 || e > 1) return null;
                var r = t[0],
                  s = t[1],
                  a = t[2],
                  o = t[3],
                  h = t[4],
                  u = t[5],
                  c = t[6],
                  l = t[7],
                  f = _.isZero;
                f(a - r) && f(o - s) && ((a = r), (o = s)),
                  f(h - c) && f(u - l) && ((h = c), (u = l));
                var d,
                  p,
                  g = 3 * (a - r),
                  v = 3 * (h - a) - g,
                  y = c - r - g - v,
                  x = 3 * (o - s),
                  w = 3 * (u - o) - x,
                  b = l - s - x - w;
                if (0 === i)
                  (d =
                    0 === e ? r : 1 === e ? c : ((y * e + v) * e + g) * e + r),
                    (p =
                      0 === e
                        ? s
                        : 1 === e
                          ? l
                          : ((b * e + w) * e + x) * e + s);
                else {
                  if (
                    (e < 1e-8
                      ? ((d = g), (p = x))
                      : e > 1 - 1e-8
                        ? ((d = 3 * (c - h)), (p = 3 * (l - u)))
                        : ((d = (3 * y * e + 2 * v) * e + g),
                          (p = (3 * b * e + 2 * w) * e + x)),
                    n)
                  ) {
                    0 === d &&
                      0 === p &&
                      (e < 1e-8 || e > 1 - 1e-8) &&
                      ((d = h - a), (p = u - o));
                    var C = Math.sqrt(d * d + p * p);
                    C && ((d /= C), (p /= C));
                  }
                  if (3 === i) {
                    (h = 6 * y * e + 2 * v), (u = 6 * b * e + 2 * w);
                    var S = Math.pow(d * d + p * p, 1.5);
                    (d = 0 !== S ? (d * u - p * h) / S : 0), (p = 0);
                  }
                }
                return 2 === i ? new m(p, -d) : new m(d, p);
              }
              return {
                statics: {
                  classify: function(t) {
                    var e = t[0],
                      i = t[1],
                      n = t[2],
                      r = t[3],
                      s = t[4],
                      a = t[5],
                      o = t[6],
                      u = t[7],
                      c = n * (i - u) + r * (o - e) + e * u - i * o,
                      l = 3 * (s * (r - i) + a * (e - n) + n * i - r * e),
                      f = l - c,
                      d = f - c + (e * (u - a) + i * (s - o) + o * a - u * s),
                      p = Math.sqrt(d * d + f * f + l * l),
                      g = 0 !== p ? 1 / p : 0,
                      v = _.isZero;
                    function m(t, e, i) {
                      var n = e !== h,
                        r = n && e > 0 && e < 1,
                        s = n && i > 0 && i < 1;
                      return (
                        !n ||
                          ((r || s) && ('loop' !== t || (r && s))) ||
                          ((t = 'arch'), (r = s = !1)),
                        {
                          type: t,
                          roots:
                            r || s
                              ? r && s
                                ? e < i
                                  ? [e, i]
                                  : [i, e]
                                : [r ? e : i]
                              : null,
                        }
                      );
                    }
                    if (((f *= g), (l *= g), v((d *= g))))
                      return v(f)
                        ? m(v(l) ? 'line' : 'quadratic')
                        : m('serpentine', l / (3 * f));
                    var y = 3 * f * f - 4 * d * l;
                    if (v(y)) return m('cusp', f / (2 * d));
                    var x = y > 0 ? Math.sqrt(y / 3) : Math.sqrt(-y),
                      w = 2 * d;
                    return m(
                      y > 0 ? 'serpentine' : 'loop',
                      (f + x) / w,
                      (f - x) / w
                    );
                  },
                  getLength: function(i, n, r, s) {
                    if (
                      (n === h && (n = 0), r === h && (r = 1), R.isStraight(i))
                    ) {
                      var a = i;
                      r < 1 && ((a = R.subdivide(a, r)[0]), (n /= r)),
                        n > 0 && (a = R.subdivide(a, n)[1]);
                      var o = a[6] - a[0],
                        u = a[7] - a[1];
                      return Math.sqrt(o * o + u * u);
                    }
                    return _.integrate(s || t(i), n, r, e(n, r));
                  },
                  getTimeAt: function(i, n, r) {
                    if ((r === h && (r = n < 0 ? 1 : 0), 0 === n)) return r;
                    var s = Math.abs,
                      a = n > 0,
                      o = a ? r : 0,
                      u = a ? 1 : r,
                      c = t(i),
                      l = R.getLength(i, o, u, c),
                      f = s(n) - l;
                    if (s(f) < 1e-12) return a ? u : o;
                    if (f > 1e-12) return null;
                    var d = n / l,
                      p = 0;
                    return _.findRoot(
                      function(t) {
                        return (
                          (p += _.integrate(c, r, t, e(r, t))), (r = t), p - n
                        );
                      },
                      c,
                      r + d,
                      o,
                      u,
                      32,
                      1e-12
                    );
                  },
                  getPoint: function(t, e) {
                    return i(t, e, 0, !1);
                  },
                  getTangent: function(t, e) {
                    return i(t, e, 1, !0);
                  },
                  getWeightedTangent: function(t, e) {
                    return i(t, e, 1, !1);
                  },
                  getNormal: function(t, e) {
                    return i(t, e, 2, !0);
                  },
                  getWeightedNormal: function(t, e) {
                    return i(t, e, 2, !1);
                  },
                  getCurvature: function(t, e) {
                    return i(t, e, 3, !1).x;
                  },
                  getPeaks: function(t) {
                    var e = t[0],
                      i = t[1],
                      n = t[2],
                      r = t[3],
                      s = t[4],
                      a = t[5],
                      o = 3 * n - e - 3 * s + t[6],
                      h = 3 * e - 6 * n + 3 * s,
                      u = -3 * e + 3 * n,
                      c = 3 * r - i - 3 * a + t[7],
                      l = 3 * i - 6 * r + 3 * a,
                      f = -3 * i + 3 * r,
                      d = [];
                    return (
                      _.solveCubic(
                        9 * (o * o + c * c),
                        9 * (o * h + l * c),
                        2 * (h * h + l * l) + 3 * (u * o + f * c),
                        u * h + l * f,
                        d,
                        1e-8,
                        1 - 1e-8
                      ),
                      d.sort()
                    );
                  },
                },
              };
            }(),
            new function() {
              function t(t, e, i, n, r, s, a) {
                var o = !a && i.getPrevious() === r,
                  h = !a && i !== r && i.getNext() === r;
                if (
                  null !== n &&
                  n >= (o ? 1e-8 : 0) &&
                  n <= (h ? 1 - 1e-8 : 1) &&
                  null !== s &&
                  s >= (h ? 1e-8 : 0) &&
                  s <= (o ? 1 - 1e-8 : 1)
                ) {
                  var u = new B(i, n, null, a),
                    c = new B(r, s, null, a);
                  (u._intersection = c),
                    (c._intersection = u),
                    (e && !e(u)) || B.insert(t, u, !0);
                }
              }
              function e(t, e, n, r) {
                return t[0][1] < n
                  ? i(t, !0, n)
                  : e[0][1] > r
                    ? i(e, !1, r)
                    : t[0][0];
              }
              function i(t, e, i) {
                for (
                  var n = t[0][0], r = t[0][1], s = 1, a = t.length;
                  s < a;
                  s++
                ) {
                  var o = t[s][0],
                    h = t[s][1];
                  if (e ? h >= i : h <= i)
                    return h === i ? o : n + (i - r) * (o - n) / (h - r);
                  (n = o), (r = h);
                }
                return null;
              }
              function n(t, e, i, n, r) {
                var s = _.isZero;
                if (s(n) && s(r)) {
                  var a = R.getTimeOf(t, new m(e, i));
                  return null === a ? [] : [a];
                }
                for (
                  var o = Math.atan2(-r, n),
                    h = Math.sin(o),
                    u = Math.cos(o),
                    c = [],
                    l = [],
                    f = 0;
                  f < 8;
                  f += 2
                ) {
                  var d = t[f] - e,
                    p = t[f + 1] - i;
                  c.push(d * u - p * h, d * h + p * u);
                }
                return R.solveCubic(c, 1, 0, l, 0, 1), l;
              }
              function r(i, r, s, o, h, u) {
                var c = Math.min,
                  l = Math.max;
                if (
                  l(i[0], i[2], i[4], i[6]) + 1e-12 >
                    c(r[0], r[2], r[4], r[6]) &&
                  c(i[0], i[2], i[4], i[6]) - 1e-12 <
                    l(r[0], r[2], r[4], r[6]) &&
                  l(i[1], i[3], i[5], i[7]) + 1e-12 >
                    c(r[1], r[3], r[5], r[7]) &&
                  c(i[1], i[3], i[5], i[7]) - 1e-12 < l(r[1], r[3], r[5], r[7])
                ) {
                  var f = a(i, r);
                  if (f)
                    for (var d = 0; d < 2; d++) {
                      var p = f[d];
                      t(h, u, s, p[0], o, p[1], !0);
                    }
                  else {
                    var g = R.isStraight(i),
                      _ = R.isStraight(r),
                      v = g && _,
                      y = g && !_,
                      x = h.length;
                    if (
                      ((v
                        ? function(e, i, n, r, s, a) {
                            var o = k.intersect(
                              e[0],
                              e[1],
                              e[6],
                              e[7],
                              i[0],
                              i[1],
                              i[6],
                              i[7]
                            );
                            o &&
                              t(
                                s,
                                a,
                                n,
                                R.getTimeOf(e, o),
                                r,
                                R.getTimeOf(i, o)
                              );
                          }
                        : g || _
                          ? function(e, i, r, s, a, o, h) {
                              for (
                                var u = i[0],
                                  c = i[1],
                                  l = n(e, u, c, i[6] - u, i[7] - c),
                                  f = 0,
                                  d = l.length;
                                f < d;
                                f++
                              ) {
                                var p = l[f],
                                  g = R.getPoint(e, p),
                                  _ = R.getTimeOf(i, g);
                                null !== _ &&
                                  t(
                                    a,
                                    o,
                                    h ? s : r,
                                    h ? _ : p,
                                    h ? r : s,
                                    h ? p : _
                                  );
                              }
                            }
                          : function i(n, r, s, a, o, h, u, c, l, f, d, p, g) {
                              if (++l >= 4096 || ++c >= 40) return l;
                              var _,
                                v,
                                m = r[0],
                                y = r[1],
                                x = r[6],
                                w = r[7],
                                b = k.getSignedDistance,
                                C = b(m, y, x, w, r[2], r[3]),
                                S = b(m, y, x, w, r[4], r[5]),
                                A = C * S > 0 ? 0.75 : 4 / 9,
                                P = A * Math.min(0, C, S),
                                I = A * Math.max(0, C, S),
                                E = b(m, y, x, w, n[0], n[1]),
                                T = b(m, y, x, w, n[2], n[3]),
                                L = b(m, y, x, w, n[4], n[5]),
                                M = b(m, y, x, w, n[6], n[7]),
                                N = (function(t, e, i, n) {
                                  var r,
                                    s = [0, t],
                                    a = [1 / 3, e],
                                    o = [2 / 3, i],
                                    h = [1, n],
                                    u = e - (2 * t + n) / 3,
                                    c = i - (t + 2 * n) / 3;
                                  if (u * c < 0) r = [[s, a, h], [s, o, h]];
                                  else {
                                    var l = u / c;
                                    r = [
                                      l >= 2
                                        ? [s, a, h]
                                        : l <= 0.5
                                          ? [s, o, h]
                                          : [s, a, o, h],
                                      [s, h],
                                    ];
                                  }
                                  return (u || c) < 0 ? r.reverse() : r;
                                })(E, T, L, M),
                                O = N[0],
                                V = N[1];
                              if (
                                (0 === C &&
                                  0 === S &&
                                  0 === E &&
                                  0 === T &&
                                  0 === L &&
                                  0 === M) ||
                                null == (_ = e(O, V, P, I)) ||
                                null == (v = e(O.reverse(), V.reverse(), P, I))
                              )
                                return l;
                              var z = f + (d - f) * _,
                                B = f + (d - f) * v;
                              if (Math.max(g - p, B - z) < 1e-9) {
                                var D = (z + B) / 2,
                                  F = (p + g) / 2;
                                t(
                                  o,
                                  h,
                                  u ? a : s,
                                  u ? F : D,
                                  u ? s : a,
                                  u ? D : F
                                );
                              } else if (
                                ((n = R.getPart(n, _, v)), v - _ > 0.8)
                              )
                                if (B - z > g - p)
                                  (D = (z + B) / 2),
                                    (l = i(
                                      r,
                                      (j = R.subdivide(n, 0.5))[0],
                                      a,
                                      s,
                                      o,
                                      h,
                                      !u,
                                      c,
                                      l,
                                      p,
                                      g,
                                      z,
                                      D
                                    )),
                                    (l = i(
                                      r,
                                      j[1],
                                      a,
                                      s,
                                      o,
                                      h,
                                      !u,
                                      c,
                                      l,
                                      p,
                                      g,
                                      D,
                                      B
                                    ));
                                else {
                                  var j;
                                  (F = (p + g) / 2),
                                    (l = i(
                                      (j = R.subdivide(r, 0.5))[0],
                                      n,
                                      a,
                                      s,
                                      o,
                                      h,
                                      !u,
                                      c,
                                      l,
                                      p,
                                      F,
                                      z,
                                      B
                                    )),
                                    (l = i(
                                      j[1],
                                      n,
                                      a,
                                      s,
                                      o,
                                      h,
                                      !u,
                                      c,
                                      l,
                                      F,
                                      g,
                                      z,
                                      B
                                    ));
                                }
                              else
                                l =
                                  g - p >= 1e-9
                                    ? i(r, n, a, s, o, h, !u, c, l, p, g, z, B)
                                    : i(n, r, s, a, o, h, u, c, l, z, B, p, g);
                              return l;
                            })(
                        y ? r : i,
                        y ? i : r,
                        y ? o : s,
                        y ? s : o,
                        h,
                        u,
                        y,
                        0,
                        0,
                        0,
                        1,
                        0,
                        1
                      ),
                      !v || h.length === x)
                    )
                      for (d = 0; d < 4; d++) {
                        var w = d >> 1,
                          b = 1 & d,
                          C = 6 * w,
                          S = 6 * b,
                          A = new m(i[C], i[C + 1]),
                          P = new m(r[S], r[S + 1]);
                        A.isClose(P, 1e-12) && t(h, u, s, w, o, b);
                      }
                  }
                }
                return h;
              }
              function s(e, i, n, r) {
                var s = R.classify(e);
                if ('loop' === s.type) {
                  var a = s.roots;
                  t(n, r, i, a[0], i, a[1]);
                }
                return n;
              }
              function a(t, e) {
                function i(t) {
                  var e = t[6] - t[0],
                    i = t[7] - t[1];
                  return e * e + i * i;
                }
                var n = Math.abs,
                  r = k.getDistance,
                  s = R.isStraight(t),
                  a = R.isStraight(e),
                  o = s && a,
                  h = i(t) < i(e),
                  u = h ? e : t,
                  c = h ? t : e,
                  l = u[0],
                  f = u[1],
                  d = u[6] - l,
                  p = u[7] - f;
                if (
                  r(l, f, d, p, c[0], c[1], !0) < 1e-7 &&
                  r(l, f, d, p, c[6], c[7], !0) < 1e-7
                )
                  !o &&
                    r(l, f, d, p, u[2], u[3], !0) < 1e-7 &&
                    r(l, f, d, p, u[4], u[5], !0) < 1e-7 &&
                    r(l, f, d, p, c[2], c[3], !0) < 1e-7 &&
                    r(l, f, d, p, c[4], c[5], !0) < 1e-7 &&
                    (s = a = o = !0);
                else if (o) return null;
                if (s ^ a) return null;
                for (
                  var g = [t, e], _ = [], v = 0;
                  v < 4 && _.length < 2;
                  v++
                ) {
                  var y = 1 & v,
                    x = 1 ^ y,
                    w = v >> 1,
                    b = R.getTimeOf(
                      g[y],
                      new m(g[x][w ? 6 : 0], g[x][w ? 7 : 1])
                    );
                  if (null != b) {
                    var C = y ? [w, b] : [b, w];
                    (!_.length ||
                      (n(C[0] - _[0][0]) > 1e-8 && n(C[1] - _[0][1]) > 1e-8)) &&
                      _.push(C);
                  }
                  if (v > 2 && !_.length) break;
                }
                if (2 !== _.length) _ = null;
                else if (!o) {
                  var S = R.getPart(t, _[0][0], _[1][0]),
                    A = R.getPart(e, _[0][1], _[1][1]);
                  (n(A[2] - S[2]) > 1e-7 ||
                    n(A[3] - S[3]) > 1e-7 ||
                    n(A[4] - S[4]) > 1e-7 ||
                    n(A[5] - S[5]) > 1e-7) &&
                    (_ = null);
                }
                return _;
              }
              return {
                getIntersections: function(t) {
                  var e = this.getValues(),
                    i = t && t !== this && t.getValues();
                  return i ? r(e, i, this, t, []) : s(e, this, []);
                },
                statics: {
                  getOverlaps: a,
                  getIntersections: function(t, e, i, n, a, o) {
                    var h = !e;
                    h && (e = t);
                    for (
                      var u,
                        c,
                        l = t.length,
                        f = e.length,
                        d = [],
                        p = [],
                        g = 0;
                      g < f;
                      g++
                    )
                      d[g] = e[g].getValues(a);
                    for (g = 0; g < l; g++) {
                      var _ = t[g],
                        v = h ? d[g] : _.getValues(n),
                        m = _.getPath();
                      m !== c && ((c = m), (u = []), p.push(u)),
                        h && s(v, _, u, i);
                      for (var y = h ? g + 1 : 0; y < f; y++) {
                        if (o && u.length) return u;
                        r(v, d[y], _, e[y], u, i);
                      }
                    }
                    (u = []), (g = 0);
                    for (var x = p.length; g < x; g++) u.push.apply(u, p[g]);
                    return u;
                  },
                  getCurveLineIntersections: n,
                },
              };
            }()
          ),
          B = l.extend(
            {
              _class: 'CurveLocation',
              initialize: function(t, e, i, n, r) {
                if (e >= 0.99999999) {
                  var s = t.getNext();
                  s && ((e = 0), (t = s));
                }
                this._setCurve(t),
                  (this._time = e),
                  (this._point = i || t.getPointAtTime(e)),
                  (this._overlap = n),
                  (this._distance = r),
                  (this._intersection = this._next = this._previous = null);
              },
              _setCurve: function(t) {
                var e = t._path;
                (this._path = e),
                  (this._version = e ? e._version : 0),
                  (this._curve = t),
                  (this._segment = null),
                  (this._segment1 = t._segment1),
                  (this._segment2 = t._segment2);
              },
              _setSegment: function(t) {
                this._setCurve(t.getCurve()),
                  (this._segment = t),
                  (this._time = t === this._segment1 ? 0 : 1),
                  (this._point = t._point.clone());
              },
              getSegment: function() {
                var t = this._segment;
                if (!t) {
                  var e = this.getCurve(),
                    i = this.getTime();
                  0 === i
                    ? (t = e._segment1)
                    : 1 === i
                      ? (t = e._segment2)
                      : null != i &&
                        (t =
                          e.getPartLength(0, i) < e.getPartLength(i, 1)
                            ? e._segment1
                            : e._segment2),
                    (this._segment = t);
                }
                return t;
              },
              getCurve: function() {
                var t = this._path,
                  e = this;
                function i(t) {
                  var i = t && t.getCurve();
                  if (i && null != (e._time = i.getTimeOf(e._point)))
                    return e._setCurve(i), i;
                }
                return (
                  t &&
                    t._version !== this._version &&
                    (this._time = this._offset = this._curveOffset = this._curve = null),
                  this._curve ||
                    i(this._segment) ||
                    i(this._segment1) ||
                    i(this._segment2.getPrevious())
                );
              },
              getPath: function() {
                var t = this.getCurve();
                return t && t._path;
              },
              getIndex: function() {
                var t = this.getCurve();
                return t && t.getIndex();
              },
              getTime: function() {
                var t = this.getCurve(),
                  e = this._time;
                return t && null == e
                  ? (this._time = t.getTimeOf(this._point))
                  : e;
              },
              getParameter: '#getTime',
              getPoint: function() {
                return this._point;
              },
              getOffset: function() {
                var t = this._offset;
                if (null == t) {
                  t = 0;
                  var e = this.getPath(),
                    i = this.getIndex();
                  if (e && null != i)
                    for (var n = e.getCurves(), r = 0; r < i; r++)
                      t += n[r].getLength();
                  this._offset = t += this.getCurveOffset();
                }
                return t;
              },
              getCurveOffset: function() {
                var t = this._curveOffset;
                if (null == t) {
                  var e = this.getCurve(),
                    i = this.getTime();
                  this._curveOffset = t =
                    null != i && e && e.getPartLength(0, i);
                }
                return t;
              },
              getIntersection: function() {
                return this._intersection;
              },
              getDistance: function() {
                return this._distance;
              },
              divide: function() {
                var t = this.getCurve(),
                  e = t && t.divideAtTime(this.getTime());
                return e && this._setSegment(e._segment1), e;
              },
              split: function() {
                var t = this.getCurve(),
                  e = t._path,
                  i = t && t.splitAtTime(this.getTime());
                return i && this._setSegment(e.getLastSegment()), i;
              },
              equals: function(t, e) {
                var i = this === t;
                if (!i && t instanceof B) {
                  var n = this.getCurve(),
                    r = t.getCurve(),
                    s = n._path;
                  if (s === r._path) {
                    var a = Math.abs,
                      o = a(this.getOffset() - t.getOffset()),
                      h = !e && this._intersection,
                      u = !e && t._intersection;
                    i =
                      (o < 1e-7 || (s && a(s.getLength() - o) < 1e-7)) &&
                      ((!h && !u) || (h && u && h.equals(u, !0)));
                  }
                }
                return i;
              },
              toString: function() {
                var t = [],
                  e = this.getPoint(),
                  i = g.instance;
                e && t.push('point: ' + e);
                var n = this.getIndex();
                null != n && t.push('index: ' + n);
                var r = this.getTime();
                return (
                  null != r && t.push('time: ' + i.number(r)),
                  null != this._distance &&
                    t.push('distance: ' + i.number(this._distance)),
                  '{ ' + t.join(', ') + ' }'
                );
              },
              isTouching: function() {
                var t = this._intersection;
                if (t && this.getTangent().isCollinear(t.getTangent())) {
                  var e = this.getCurve(),
                    i = t.getCurve();
                  return !(
                    e.isStraight() &&
                    i.isStraight() &&
                    e.getLine().intersect(i.getLine())
                  );
                }
                return !1;
              },
              isCrossing: function() {
                var t = this._intersection;
                if (!t) return !1;
                var e = this.getTime(),
                  i = t.getTime(),
                  n = e >= 1e-8 && e <= 1 - 1e-8,
                  r = i >= 1e-8 && i <= 1 - 1e-8;
                if (n && r) return !this.isTouching();
                var s = this.getCurve(),
                  a = e < 1e-8 ? s.getPrevious() : s,
                  o = t.getCurve(),
                  h = i < 1e-8 ? o.getPrevious() : o;
                if (
                  (e > 1 - 1e-8 && (s = s.getNext()),
                  i > 1 - 1e-8 && (o = o.getNext()),
                  !(a && s && h && o))
                )
                  return !1;
                var u = [];
                function c(t, e) {
                  var i = t.getValues(),
                    n = R.classify(i).roots || R.getPeaks(i),
                    r = n.length,
                    s = e && r > 1 ? n[r - 1] : r > 0 ? n[0] : 0.5;
                  u.push(R.getLength(i, e ? s : 0, e ? 1 : s) / 2);
                }
                function l(t, e, i) {
                  return e < i ? t > e && t < i : t > e || t < i;
                }
                n || (c(a, !0), c(s, !1)), r || (c(h, !0), c(o, !1));
                var f = this.getPoint(),
                  d = Math.min.apply(Math, u),
                  p = n ? s.getTangentAtTime(e) : s.getPointAt(d).subtract(f),
                  g = n ? p.negate() : a.getPointAt(-d).subtract(f),
                  _ = r ? o.getTangentAtTime(i) : o.getPointAt(d).subtract(f),
                  v = r ? _.negate() : h.getPointAt(-d).subtract(f),
                  m = g.getAngle(),
                  y = p.getAngle(),
                  x = v.getAngle(),
                  w = _.getAngle();
                return !!(n
                  ? l(m, x, w) ^ l(y, x, w) && l(m, w, x) ^ l(y, w, x)
                  : l(x, m, y) ^ l(w, m, y) && l(x, y, m) ^ l(w, y, m));
              },
              hasOverlap: function() {
                return !!this._overlap;
              },
            },
            l.each(
              R._evaluateMethods,
              function(t) {
                var e = t + 'At';
                this[t] = function() {
                  var t = this.getCurve(),
                    i = this.getTime();
                  return null != i && t && t[e](i, !0);
                };
              },
              { preserve: !0 }
            ),
            new function() {
              function t(t, e, i) {
                var n = t.length,
                  r = 0,
                  s = n - 1;
                function a(i, r) {
                  for (var s = i + r; s >= -1 && s <= n; s += r) {
                    var a = t[(s % n + n) % n];
                    if (!e.getPoint().isClose(a.getPoint(), 1e-7)) break;
                    if (e.equals(a)) return a;
                  }
                  return null;
                }
                for (; r <= s; ) {
                  var o,
                    h = (r + s) >>> 1,
                    u = t[h];
                  if (i && (o = e.equals(u) ? u : a(h, -1) || a(h, 1)))
                    return (
                      e._overlap &&
                        (o._overlap = o._intersection._overlap = !0),
                      o
                    );
                  var c = e.getPath(),
                    l = u.getPath();
                  (c !== l
                    ? c._id - l._id
                    : e.getIndex() +
                      e.getTime() -
                      (u.getIndex() + u.getTime())) < 0
                    ? (s = h - 1)
                    : (r = h + 1);
                }
                return t.splice(r, 0, e), e;
              }
              return {
                statics: {
                  insert: t,
                  expand: function(e) {
                    for (var i = e.slice(), n = e.length - 1; n >= 0; n--)
                      t(i, e[n]._intersection, !1);
                    return i;
                  },
                },
              };
            }()
          ),
          D = P.extend({
            _class: 'PathItem',
            _selectBounds: !1,
            _canScaleStroke: !0,
            beans: !0,
            initialize: function() {},
            statics: {
              create: function(t) {
                var e, i, n;
                if (
                  (l.isPlainObject(t)
                    ? ((i = t.segments), (e = t.pathData))
                    : Array.isArray(t)
                      ? (i = t)
                      : 'string' == typeof t && (e = t),
                  i)
                ) {
                  var r = i[0];
                  n = r && Array.isArray(r[0]);
                } else
                  e &&
                    (n =
                      (e.match(/m/gi) || []).length > 1 || /z\s*\S+/i.test(e));
                return new (n ? j : F)(t);
              },
            },
            _asPathItem: function() {
              return this;
            },
            isClockwise: function() {
              return this.getArea() >= 0;
            },
            setClockwise: function(t) {
              this.isClockwise() != (t = !!t) && this.reverse();
            },
            setPathData: function(t) {
              var e,
                i,
                n,
                r = t && t.match(/[mlhvcsqtaz][^mlhvcsqtaz]*/gi),
                s = !1,
                a = new m(),
                o = new m();
              function h(t, i) {
                var n = +e[t];
                return s && (n += a[i]), n;
              }
              function u(t) {
                return new m(h(t, 'x'), h(t + 1, 'y'));
              }
              this.clear();
              for (var c = 0, l = r && r.length; c < l; c++) {
                var f = r[c],
                  d = f[0],
                  p = d.toLowerCase(),
                  g =
                    (e = f.match(
                      /[+-]?(?:\d*\.\d+|\d+\.?)(?:[eE][+-]?\d+)?/g
                    )) && e.length;
                switch (
                  ((s = d === p),
                  'z' !== i || /[mz]/.test(p) || this.moveTo(a),
                  p)
                ) {
                  case 'm':
                  case 'l':
                    for (var _ = 'm' === p, v = 0; v < g; v += 2)
                      this[_ ? 'moveTo' : 'lineTo']((a = u(v))),
                        _ && ((o = a), (_ = !1));
                    n = a;
                    break;
                  case 'h':
                  case 'v':
                    var y = 'h' === p ? 'x' : 'y';
                    a = a.clone();
                    for (v = 0; v < g; v++) (a[y] = h(v, y)), this.lineTo(a);
                    n = a;
                    break;
                  case 'c':
                    for (v = 0; v < g; v += 6)
                      this.cubicCurveTo(u(v), (n = u(v + 2)), (a = u(v + 4)));
                    break;
                  case 's':
                    for (v = 0; v < g; v += 4)
                      this.cubicCurveTo(
                        /[cs]/.test(i) ? a.multiply(2).subtract(n) : a,
                        (n = u(v)),
                        (a = u(v + 2))
                      ),
                        (i = p);
                    break;
                  case 'q':
                    for (v = 0; v < g; v += 4)
                      this.quadraticCurveTo((n = u(v)), (a = u(v + 2)));
                    break;
                  case 't':
                    for (v = 0; v < g; v += 2)
                      this.quadraticCurveTo(
                        (n = /[qt]/.test(i) ? a.multiply(2).subtract(n) : a),
                        (a = u(v))
                      ),
                        (i = p);
                    break;
                  case 'a':
                    for (v = 0; v < g; v += 7)
                      this.arcTo(
                        (a = u(v + 5)),
                        new x(+e[v], +e[v + 1]),
                        +e[v + 2],
                        +e[v + 4],
                        +e[v + 3]
                      );
                    break;
                  case 'z':
                    this.closePath(1e-12), (a = o);
                }
                i = p;
              }
            },
            _canComposite: function() {
              return !(this.hasFill() && this.hasStroke());
            },
            _contains: function(t) {
              var e = t.isInside(this.getBounds({ internal: !0, handle: !0 }))
                ? this._getWinding(t)
                : {};
              return (
                e.onPath ||
                !!('evenodd' === this.getFillRule()
                  ? 1 & e.windingL || 1 & e.windingR
                  : e.winding)
              );
            },
            getIntersections: function(t, e, i, n) {
              var r = this === t || !t,
                s = this._matrix._orNullIfIdentity(),
                a = r ? s : (i || t._matrix)._orNullIfIdentity();
              return r || this.getBounds(s).intersects(t.getBounds(a), 1e-12)
                ? R.getIntersections(
                    this.getCurves(),
                    !r && t.getCurves(),
                    e,
                    s,
                    a,
                    n
                  )
                : [];
            },
            getCrossings: function(t) {
              return this.getIntersections(t, function(t) {
                return t.hasOverlap() || t.isCrossing();
              });
            },
            getNearestLocation: function() {
              for (
                var t = m.read(arguments),
                  e = this.getCurves(),
                  i = 1 / 0,
                  n = null,
                  r = 0,
                  s = e.length;
                r < s;
                r++
              ) {
                var a = e[r].getNearestLocation(t);
                a._distance < i && ((i = a._distance), (n = a));
              }
              return n;
            },
            getNearestPoint: function() {
              var t = this.getNearestLocation.apply(this, arguments);
              return t ? t.getPoint() : t;
            },
            interpolate: function(t, e, i) {
              var n = !this._children,
                r = n ? '_segments' : '_children',
                s = t[r],
                a = e[r],
                o = this[r];
              if (!s || !a || s.length !== a.length)
                throw new Error(
                  'Invalid operands in interpolate() call: ' + t + ', ' + e
                );
              var h = o.length,
                u = a.length;
              if (h < u)
                for (var c = n ? V : F, l = h; l < u; l++) this.add(new c());
              else h > u && this[n ? 'removeSegments' : 'removeChildren'](u, h);
              for (l = 0; l < u; l++) o[l].interpolate(s[l], a[l], i);
              n && (this.setClosed(t._closed), this._changed(9));
            },
            compare: function(t) {
              var e = !1;
              if (t) {
                var i = this._children || [this],
                  n = t._children ? t._children.slice() : [t],
                  r = i.length,
                  s = n.length,
                  a = [],
                  o = 0;
                e = !0;
                for (var h = r - 1; h >= 0 && e; h--) {
                  var u = i[h];
                  e = !1;
                  for (var c = s - 1; c >= 0 && !e; c--)
                    u.compare(n[c]) && (a[c] || ((a[c] = !0), o++), (e = !0));
                }
                e = e && o === s;
              }
              return e;
            },
          }),
          F = D.extend(
            {
              _class: 'Path',
              _serializeFields: { segments: [], closed: !1 },
              initialize: function(t) {
                (this._closed = !1), (this._segments = []), (this._version = 0);
                var e = Array.isArray(t)
                  ? 'object' == typeof t[0]
                    ? t
                    : arguments
                  : !t || t.size !== h || (t.x === h && t.point === h)
                    ? null
                    : arguments;
                e && e.length > 0
                  ? this.setSegments(e)
                  : ((this._curves = h),
                    (this._segmentSelection = 0),
                    e ||
                      'string' != typeof t ||
                      (this.setPathData(t), (t = null))),
                  this._initialize(!e && t);
              },
              _equals: function(t) {
                return (
                  this._closed === t._closed &&
                  l.equals(this._segments, t._segments)
                );
              },
              copyContent: function(t) {
                this.setSegments(t._segments), (this._closed = t._closed);
              },
              _changed: function t(e) {
                if ((t.base.call(this, e), 8 & e)) {
                  if (((this._length = this._area = h), 16 & e))
                    this._version++;
                  else if (this._curves)
                    for (var i = 0, n = this._curves.length; i < n; i++)
                      this._curves[i]._changed();
                } else 32 & e && (this._bounds = h);
              },
              getStyle: function() {
                var t = this._parent;
                return (t instanceof j ? t : this)._style;
              },
              getSegments: function() {
                return this._segments;
              },
              setSegments: function(t) {
                var e = this.isFullySelected(),
                  i = t && t.length;
                if (
                  ((this._segments.length = 0),
                  (this._segmentSelection = 0),
                  (this._curves = h),
                  i)
                ) {
                  var n = t[i - 1];
                  'boolean' == typeof n && (this.setClosed(n), i--),
                    this._add(V.readList(t, 0, {}, i));
                }
                e && this.setFullySelected(!0);
              },
              getFirstSegment: function() {
                return this._segments[0];
              },
              getLastSegment: function() {
                return this._segments[this._segments.length - 1];
              },
              getCurves: function() {
                var t = this._curves,
                  e = this._segments;
                if (!t) {
                  var i = this._countCurves();
                  t = this._curves = new Array(i);
                  for (var n = 0; n < i; n++)
                    t[n] = new R(this, e[n], e[n + 1] || e[0]);
                }
                return t;
              },
              getFirstCurve: function() {
                return this.getCurves()[0];
              },
              getLastCurve: function() {
                var t = this.getCurves();
                return t[t.length - 1];
              },
              isClosed: function() {
                return this._closed;
              },
              setClosed: function(t) {
                if (this._closed != (t = !!t)) {
                  if (((this._closed = t), this._curves)) {
                    var e = (this._curves.length = this._countCurves());
                    t &&
                      (this._curves[e - 1] = new R(
                        this,
                        this._segments[e - 1],
                        this._segments[0]
                      ));
                  }
                  this._changed(25);
                }
              },
            },
            {
              beans: !0,
              getPathData: function(t, e) {
                var i,
                  n,
                  r,
                  s,
                  a,
                  o,
                  h,
                  u,
                  c = this._segments,
                  l = c.length,
                  f = new g(e),
                  d = new Array(6),
                  p = !0,
                  _ = [];
                function v(e, c) {
                  if (
                    (e._transformCoordinates(t, d), (i = d[0]), (n = d[1]), p)
                  )
                    _.push('M' + f.pair(i, n)), (p = !1);
                  else if (
                    ((a = d[2]),
                    (o = d[3]),
                    a === i && o === n && h === r && u === s)
                  ) {
                    if (!c) {
                      var l = i - r,
                        g = n - s;
                      _.push(
                        0 === l
                          ? 'v' + f.number(g)
                          : 0 === g
                            ? 'h' + f.number(l)
                            : 'l' + f.pair(l, g)
                      );
                    }
                  } else
                    _.push(
                      'c' +
                        f.pair(h - r, u - s) +
                        ' ' +
                        f.pair(a - r, o - s) +
                        ' ' +
                        f.pair(i - r, n - s)
                    );
                  (r = i), (s = n), (h = d[4]), (u = d[5]);
                }
                if (!l) return '';
                for (var m = 0; m < l; m++) v(c[m]);
                return (
                  this._closed && l > 0 && (v(c[0], !0), _.push('z')),
                  _.join('')
                );
              },
              isEmpty: function() {
                return !this._segments.length;
              },
              _transformContent: function(t) {
                for (
                  var e = this._segments, i = new Array(6), n = 0, r = e.length;
                  n < r;
                  n++
                )
                  e[n]._transformCoordinates(t, i, !0);
                return !0;
              },
              _add: function(t, e) {
                for (
                  var i = this._segments,
                    n = this._curves,
                    r = t.length,
                    s = null == e,
                    a = ((e = s ? i.length : e), 0);
                  a < r;
                  a++
                ) {
                  var o = t[a];
                  o._path && (o = t[a] = o.clone()),
                    (o._path = this),
                    (o._index = e + a),
                    o._selection && this._updateSelection(o, 0, o._selection);
                }
                if (s) i.push.apply(i, t);
                else {
                  i.splice.apply(i, [e, 0].concat(t));
                  a = e + r;
                  for (var h = i.length; a < h; a++) i[a]._index = a;
                }
                if (n) {
                  var u = this._countCurves(),
                    c = e > 0 && e + r - 1 === u ? e - 1 : e,
                    l = c,
                    f = Math.min(c + r, u);
                  t._curves &&
                    (n.splice.apply(n, [c, 0].concat(t._curves)),
                    (l += t._curves.length));
                  for (a = l; a < f; a++)
                    n.splice(a, 0, new R(this, null, null));
                  this._adjustCurves(c, f);
                }
                return this._changed(25), t;
              },
              _adjustCurves: function(t, e) {
                for (
                  var i, n = this._segments, r = this._curves, s = t;
                  s < e;
                  s++
                )
                  ((i = r[s])._path = this),
                    (i._segment1 = n[s]),
                    (i._segment2 = n[s + 1] || n[0]),
                    i._changed();
                (i = r[this._closed && !t ? n.length - 1 : t - 1]) &&
                  ((i._segment2 = n[t] || n[0]), i._changed()),
                  (i = r[e]) && ((i._segment1 = n[e]), i._changed());
              },
              _countCurves: function() {
                var t = this._segments.length;
                return !this._closed && t > 0 ? t - 1 : t;
              },
              add: function(t) {
                return arguments.length > 1 && 'number' != typeof t
                  ? this._add(V.readList(arguments))
                  : this._add([V.read(arguments)])[0];
              },
              insert: function(t, e) {
                return arguments.length > 2 && 'number' != typeof e
                  ? this._add(V.readList(arguments, 1), t)
                  : this._add([V.read(arguments, 1)], t)[0];
              },
              addSegment: function() {
                return this._add([V.read(arguments)])[0];
              },
              insertSegment: function(t) {
                return this._add([V.read(arguments, 1)], t)[0];
              },
              addSegments: function(t) {
                return this._add(V.readList(t));
              },
              insertSegments: function(t, e) {
                return this._add(V.readList(e), t);
              },
              removeSegment: function(t) {
                return this.removeSegments(t, t + 1)[0] || null;
              },
              removeSegments: function(t, e, i) {
                (t = t || 0), (e = l.pick(e, this._segments.length));
                var n = this._segments,
                  r = this._curves,
                  s = n.length,
                  a = n.splice(t, e - t),
                  o = a.length;
                if (!o) return a;
                for (var h = 0; h < o; h++) {
                  var u = a[h];
                  u._selection && this._updateSelection(u, u._selection, 0),
                    (u._index = u._path = null);
                }
                h = t;
                for (var c = n.length; h < c; h++) n[h]._index = h;
                if (r) {
                  var f = t > 0 && e === s + (this._closed ? 1 : 0) ? t - 1 : t;
                  for (h = (r = r.splice(f, o)).length - 1; h >= 0; h--)
                    r[h]._path = null;
                  i && (a._curves = r.slice(1)), this._adjustCurves(f, f);
                }
                return this._changed(25), a;
              },
              clear: '#removeSegments',
              hasHandles: function() {
                for (var t = this._segments, e = 0, i = t.length; e < i; e++)
                  if (t[e].hasHandles()) return !0;
                return !1;
              },
              clearHandles: function() {
                for (var t = this._segments, e = 0, i = t.length; e < i; e++)
                  t[e].clearHandles();
              },
              getLength: function() {
                if (null == this._length) {
                  for (
                    var t = this.getCurves(), e = 0, i = 0, n = t.length;
                    i < n;
                    i++
                  )
                    e += t[i].getLength();
                  this._length = e;
                }
                return this._length;
              },
              getArea: function() {
                var t = this._area;
                if (null == t) {
                  var e = this._segments,
                    i = this._closed;
                  t = 0;
                  for (var n = 0, r = e.length; n < r; n++) {
                    var s = n + 1 === r;
                    t += R.getArea(
                      R.getValues(e[n], e[s ? 0 : n + 1], null, s && !i)
                    );
                  }
                  this._area = t;
                }
                return t;
              },
              isFullySelected: function() {
                var t = this._segments.length;
                return (
                  this.isSelected() && t > 0 && this._segmentSelection === 7 * t
                );
              },
              setFullySelected: function(t) {
                t && this._selectSegments(!0), this.setSelected(t);
              },
              setSelection: function t(e) {
                1 & e || this._selectSegments(!1), t.base.call(this, e);
              },
              _selectSegments: function(t) {
                var e = this._segments,
                  i = e.length,
                  n = t ? 7 : 0;
                this._segmentSelection = n * i;
                for (var r = 0; r < i; r++) e[r]._selection = n;
              },
              _updateSelection: function(t, e, i) {
                (t._selection = i),
                  (this._segmentSelection += i - e) > 0 && this.setSelected(!0);
              },
              divideAt: function(t) {
                var e,
                  i = this.getLocationAt(t);
                return i && (e = i.getCurve().divideAt(i.getCurveOffset()))
                  ? e._segment1
                  : null;
              },
              splitAt: function(t) {
                var e = this.getLocationAt(t),
                  i = e && e.index,
                  n = e && e.time;
                n > 1 - 1e-8 && (i++, (n = 0));
                var r = this.getCurves();
                if (i >= 0 && i < r.length) {
                  n >= 1e-8 && r[i++].divideAtTime(n);
                  var s,
                    a = this.removeSegments(i, this._segments.length, !0);
                  return (
                    this._closed
                      ? (this.setClosed(!1), (s = this))
                      : ((s = new F(P.NO_INSERT)).insertAbove(this),
                        s.copyAttributes(this)),
                    s._add(a, 0),
                    this.addSegment(a[0]),
                    s
                  );
                }
                return null;
              },
              split: function(t, e) {
                var i,
                  n =
                    e === h
                      ? t
                      : (i = this.getCurves()[t]) && i.getLocationAtTime(e);
                return null != n ? this.splitAt(n) : null;
              },
              join: function(t, e) {
                var i = e || 0;
                if (t && t !== this) {
                  var n = t._segments,
                    r = this.getLastSegment(),
                    s = t.getLastSegment();
                  if (!s) return this;
                  r && r._point.isClose(s._point, i) && t.reverse();
                  var a = t.getFirstSegment();
                  if (r && r._point.isClose(a._point, i))
                    r.setHandleOut(a._handleOut), this._add(n.slice(1));
                  else {
                    var o = this.getFirstSegment();
                    o && o._point.isClose(a._point, i) && t.reverse(),
                      (s = t.getLastSegment()),
                      o && o._point.isClose(s._point, i)
                        ? (o.setHandleIn(s._handleIn),
                          this._add(n.slice(0, n.length - 1), 0))
                        : this._add(n.slice());
                  }
                  t._closed && this._add([n[0]]), t.remove();
                }
                var h = this.getFirstSegment(),
                  u = this.getLastSegment();
                return (
                  h !== u &&
                    h._point.isClose(u._point, i) &&
                    (h.setHandleIn(u._handleIn),
                    u.remove(),
                    this.setClosed(!0)),
                  this
                );
              },
              reduce: function(t) {
                for (
                  var e = this.getCurves(),
                    i = t && t.simplify,
                    n = i ? 1e-7 : 0,
                    r = e.length - 1;
                  r >= 0;
                  r--
                ) {
                  var s = e[r];
                  !s.hasHandles() &&
                    (!s.hasLength(n) || (i && s.isCollinear(s.getNext()))) &&
                    s.remove();
                }
                return this;
              },
              reverse: function() {
                this._segments.reverse();
                for (var t = 0, e = this._segments.length; t < e; t++) {
                  var i = this._segments[t],
                    n = i._handleIn;
                  (i._handleIn = i._handleOut),
                    (i._handleOut = n),
                    (i._index = t);
                }
                (this._curves = null), this._changed(9);
              },
              flatten: function(t) {
                for (
                  var e = new q(this, t || 0.25, 256, !0).parts,
                    i = e.length,
                    n = [],
                    r = 0;
                  r < i;
                  r++
                )
                  n.push(new V(e[r].curve.slice(0, 2)));
                !this._closed &&
                  i > 0 &&
                  n.push(new V(e[i - 1].curve.slice(6))),
                  this.setSegments(n);
              },
              simplify: function(t) {
                var e = new U(this).fit(t || 2.5);
                return e && this.setSegments(e), !!e;
              },
              smooth: function(t) {
                var e = this,
                  i = t || {},
                  n = i.type || 'asymmetric',
                  r = this._segments,
                  s = r.length,
                  a = this._closed;
                function o(t, i) {
                  var n = t && t.index;
                  if (null != n) {
                    var r = t.path;
                    if (r && r !== e)
                      throw new Error(
                        t._class + ' ' + n + ' of ' + r + ' is not part of ' + e
                      );
                    i && t instanceof R && n++;
                  } else n = 'number' == typeof t ? t : i;
                  return Math.min(
                    n < 0 && a ? n % s : n < 0 ? n + s : n,
                    s - 1
                  );
                }
                var u = a && i.from === h && i.to === h,
                  c = o(i.from, 0),
                  l = o(i.to, s - 1);
                if (c > l)
                  if (a) c -= s;
                  else {
                    var f = c;
                    (c = l), (l = f);
                  }
                if (/^(?:asymmetric|continuous)$/.test(n)) {
                  var d = 'asymmetric' === n,
                    p = Math.min,
                    g = l - c + 1,
                    _ = g - 1,
                    v = u ? p(g, 4) : 1,
                    m = v,
                    y = v,
                    x = [];
                  if (
                    (a || ((m = p(1, c)), (y = p(1, s - l - 1))),
                    (_ += m + y) <= 1)
                  )
                    return;
                  for (var w = 0, b = c - m; w <= _; w++, b++)
                    x[w] = r[(b < 0 ? b + s : b) % s]._point;
                  var C = x[0]._x + 2 * x[1]._x,
                    S = x[0]._y + 2 * x[1]._y,
                    k = 2,
                    A = _ - 1,
                    P = [C],
                    I = [S],
                    E = [k],
                    T = [],
                    L = [];
                  for (w = 1; w < _; w++) {
                    var M = w < A,
                      N = M ? 4 : d ? 2 : 7,
                      O = M ? 4 : d ? 3 : 8,
                      V = M ? 2 : d ? 0 : 1,
                      z = (M ? 1 : d ? 1 : 2) / k;
                    (k = E[w] = N - z),
                      (C = P[w] = O * x[w]._x + V * x[w + 1]._x - z * C),
                      (S = I[w] = O * x[w]._y + V * x[w + 1]._y - z * S);
                  }
                  (T[A] = P[A] / E[A]), (L[A] = I[A] / E[A]);
                  for (w = _ - 2; w >= 0; w--)
                    (T[w] = (P[w] - T[w + 1]) / E[w]),
                      (L[w] = (I[w] - L[w + 1]) / E[w]);
                  (T[_] = (3 * x[_]._x - T[A]) / 2),
                    (L[_] = (3 * x[_]._y - L[A]) / 2);
                  w = m;
                  var B = _ - y;
                  for (b = c; w <= B; w++, b++) {
                    var D = r[b < 0 ? b + s : b],
                      F = D._point,
                      j = T[w] - F._x,
                      q = L[w] - F._y;
                    (u || w < B) && D.setHandleOut(j, q),
                      (u || w > m) && D.setHandleIn(-j, -q);
                  }
                } else
                  for (w = c; w <= l; w++)
                    r[w < 0 ? w + s : w].smooth(
                      i,
                      !u && w === c,
                      !u && w === l
                    );
              },
              toShape: function(t) {
                if (!this._closed) return null;
                var e,
                  i,
                  n,
                  r,
                  s = this._segments;
                function a(t, e) {
                  var i = s[t],
                    n = i.getNext(),
                    r = s[e],
                    a = r.getNext();
                  return (
                    i._handleOut.isZero() &&
                    n._handleIn.isZero() &&
                    r._handleOut.isZero() &&
                    a._handleIn.isZero() &&
                    n._point
                      .subtract(i._point)
                      .isCollinear(a._point.subtract(r._point))
                  );
                }
                function o(t) {
                  var e = s[t],
                    i = e.getNext(),
                    n = e._handleOut,
                    r = i._handleIn;
                  if (n.isOrthogonal(r)) {
                    var a = e._point,
                      o = i._point,
                      h = new k(a, n, !0).intersect(new k(o, r, !0), !0);
                    return (
                      h &&
                      _.isZero(
                        n.getLength() / h.subtract(a).getLength() -
                          0.5522847498307936
                      ) &&
                      _.isZero(
                        r.getLength() / h.subtract(o).getLength() -
                          0.5522847498307936
                      )
                    );
                  }
                  return !1;
                }
                function u(t, e) {
                  return s[t]._point.getDistance(s[e]._point);
                }
                if (
                  (!this.hasHandles() &&
                  4 === s.length &&
                  a(0, 2) &&
                  a(1, 3) &&
                  (function(t) {
                    var e = s[t],
                      i = e.getPrevious(),
                      n = e.getNext();
                    return (
                      i._handleOut.isZero() &&
                      e._handleIn.isZero() &&
                      e._handleOut.isZero() &&
                      n._handleIn.isZero() &&
                      e._point
                        .subtract(i._point)
                        .isOrthogonal(n._point.subtract(e._point))
                    );
                  })(1)
                    ? ((e = T.Rectangle),
                      (i = new x(u(0, 3), u(0, 1))),
                      (r = s[1]._point.add(s[2]._point).divide(2)))
                    : 8 === s.length &&
                      o(0) &&
                      o(2) &&
                      o(4) &&
                      o(6) &&
                      a(1, 5) &&
                      a(3, 7)
                      ? ((e = T.Rectangle),
                        (n = (i = new x(u(1, 6), u(0, 3)))
                          .subtract(new x(u(0, 7), u(1, 2)))
                          .divide(2)),
                        (r = s[3]._point.add(s[4]._point).divide(2)))
                      : 4 === s.length &&
                        o(0) &&
                        o(1) &&
                        o(2) &&
                        o(3) &&
                        (_.isZero(u(0, 2) - u(1, 3))
                          ? ((e = T.Circle), (n = u(0, 2) / 2))
                          : ((e = T.Ellipse),
                            (n = new x(u(2, 0) / 2, u(3, 1) / 2))),
                        (r = s[1]._point)),
                  e)
                ) {
                  var c = this.getPosition(!0),
                    l = new e({ center: c, size: i, radius: n, insert: !1 });
                  return (
                    l.copyAttributes(this, !0),
                    l._matrix.prepend(this._matrix),
                    l.rotate(r.subtract(c).getAngle() + 90),
                    (t === h || t) && l.insertAbove(this),
                    l
                  );
                }
                return null;
              },
              toPath: '#clone',
              compare: function t(e) {
                if (!e || e instanceof j) return t.base.call(this, e);
                var i = this.getCurves(),
                  n = e.getCurves(),
                  r = i.length,
                  s = n.length;
                if (!r || !s) return r == s;
                for (
                  var a, o, h = i[0].getValues(), u = [], c = 0, l = 0, f = 0;
                  f < s;
                  f++
                ) {
                  var d = n[f].getValues();
                  if ((u.push(d), (_ = R.getOverlaps(h, d)))) {
                    (a = !f && _[0][0] > 0 ? s - 1 : f), (o = _[0][1]);
                    break;
                  }
                }
                var p,
                  g = Math.abs;
                for (d = u[a]; h && d; ) {
                  var _;
                  if ((_ = R.getOverlaps(h, d)))
                    if (g(_[0][0] - l) < 1e-8) {
                      1 === (l = _[1][0]) &&
                        ((h = ++c < r ? i[c].getValues() : null), (l = 0));
                      var v = _[0][1];
                      if (g(v - o) < 1e-8) {
                        if (
                          (p || (p = [a, v]),
                          1 === (o = _[1][1]) &&
                            (++a >= s && (a = 0),
                            (d = u[a] || n[a].getValues()),
                            (o = 0)),
                          !h)
                        )
                          return p[0] === a && p[1] === o;
                        continue;
                      }
                    }
                  break;
                }
                return !1;
              },
              _hitTestSelf: function(t, e, i, n) {
                var r,
                  s,
                  a,
                  o,
                  h,
                  u,
                  c = this,
                  l = this.getStyle(),
                  f = this._segments,
                  d = f.length,
                  p = this._closed,
                  g = e._tolerancePadding,
                  _ = g,
                  v = e.stroke && l.hasStroke(),
                  m = e.fill && l.hasFill(),
                  y = e.curves,
                  x = v
                    ? l.getStrokeWidth() / 2
                    : (m && e.tolerance > 0) || y
                      ? 0
                      : null;
                function w(e, i) {
                  return t.subtract(e).divide(i).length <= 1;
                }
                function b(t, i, n) {
                  if (!e.selected || i.isSelected()) {
                    var r = t._point;
                    if ((i !== r && (i = i.add(r)), w(i, _)))
                      return new O(n, c, { segment: t, point: i });
                  }
                }
                function C(t, i) {
                  return (
                    ((i || e.segments) && b(t, t._point, 'segment')) ||
                    (!i &&
                      e.handles &&
                      (b(t, t._handleIn, 'handle-in') ||
                        b(t, t._handleOut, 'handle-out')))
                  );
                }
                function S(t) {
                  o.add(t);
                }
                function k(e) {
                  var i,
                    h = p || (e._index > 0 && e._index < d - 1);
                  return 'round' === (h ? r : s)
                    ? w(e._point, _)
                    : ((o = new F({ internal: !0, closed: !0 })),
                      h
                        ? e.isSmooth() ||
                          F._addBevelJoin(e, r, x, a, null, n, S, !0)
                        : 'square' === s &&
                          F._addSquareCap(e, s, x, null, n, S, !0),
                      o.isEmpty()
                        ? void 0
                        : o.contains(t) ||
                          ((i = o.getNearestLocation(t)) &&
                            w(i.getPoint(), g)));
                }
                if (
                  (null !== x &&
                    (x > 0
                      ? ((r = l.getStrokeJoin()),
                        (s = l.getStrokeCap()),
                        (a = l.getMiterLimit()),
                        (_ = _.add(F._getStrokePadding(x, n))))
                      : (r = s = 'round')),
                  !e.ends || e.segments || p)
                ) {
                  if (e.segments || e.handles)
                    for (var A = 0; A < d; A++) if ((u = C(f[A]))) return u;
                } else if ((u = C(f[0], !0) || C(f[d - 1], !0))) return u;
                if (null !== x) {
                  if ((h = this.getNearestLocation(t))) {
                    var P = h.getTime();
                    0 === P || (1 === P && d > 1)
                      ? k(h.getSegment()) || (h = null)
                      : w(h.getPoint(), _) || (h = null);
                  }
                  if (!h && 'miter' === r && d > 1)
                    for (A = 0; A < d; A++) {
                      var I = f[A];
                      if (t.getDistance(I._point) <= a * x && k(I)) {
                        h = I.getLocation();
                        break;
                      }
                    }
                }
                return (!h && m && this._contains(t)) || (h && !v && !y)
                  ? new O('fill', this)
                  : h
                    ? new O(v ? 'stroke' : 'curve', this, {
                        location: h,
                        point: h.getPoint(),
                      })
                    : null;
              },
            },
            l.each(
              R._evaluateMethods,
              function(t) {
                this[t + 'At'] = function(e) {
                  var i = this.getLocationAt(e);
                  return i && i[t]();
                };
              },
              {
                beans: !1,
                getLocationOf: function() {
                  for (
                    var t = m.read(arguments),
                      e = this.getCurves(),
                      i = 0,
                      n = e.length;
                    i < n;
                    i++
                  ) {
                    var r = e[i].getLocationOf(t);
                    if (r) return r;
                  }
                  return null;
                },
                getOffsetOf: function() {
                  var t = this.getLocationOf.apply(this, arguments);
                  return t ? t.getOffset() : null;
                },
                getLocationAt: function(t) {
                  if ('number' == typeof t) {
                    for (
                      var e = this.getCurves(), i = 0, n = 0, r = e.length;
                      n < r;
                      n++
                    ) {
                      var s = i,
                        a = e[n];
                      if ((i += a.getLength()) > t)
                        return a.getLocationAt(t - s);
                    }
                    if (e.length > 0 && t <= this.getLength())
                      return new B(e[e.length - 1], 1);
                  } else if (t && t.getPath && t.getPath() === this) return t;
                  return null;
                },
              }
            ),
            new function() {
              function t(t, e, i) {
                var n,
                  r,
                  s,
                  a,
                  o,
                  h,
                  u,
                  c,
                  l = e._segments,
                  f = l.length,
                  d = new Array(6),
                  p = !0;
                function g(e) {
                  if (i) e._transformCoordinates(i, d), (n = d[0]), (r = d[1]);
                  else {
                    var l = e._point;
                    (n = l._x), (r = l._y);
                  }
                  if (p) t.moveTo(n, r), (p = !1);
                  else {
                    if (i) (o = d[2]), (h = d[3]);
                    else {
                      var f = e._handleIn;
                      (o = n + f._x), (h = r + f._y);
                    }
                    o === n && h === r && u === s && c === a
                      ? t.lineTo(n, r)
                      : t.bezierCurveTo(u, c, o, h, n, r);
                  }
                  if (((s = n), (a = r), i)) (u = d[4]), (c = d[5]);
                  else {
                    f = e._handleOut;
                    (u = s + f._x), (c = a + f._y);
                  }
                }
                for (var _ = 0; _ < f; _++) g(l[_]);
                e._closed && f > 0 && g(l[0]);
              }
              return {
                _draw: function(e, i, n, r) {
                  var s = i.dontStart,
                    o = i.dontFinish || i.clip,
                    h = this.getStyle(),
                    u = h.hasFill(),
                    c = h.hasStroke(),
                    l = h.getDashArray(),
                    f = !a.support.nativeDash && c && l && l.length;
                  function d(t) {
                    return l[(t % f + f) % f];
                  }
                  if (
                    (s || e.beginPath(),
                    (u || (c && !f) || o) &&
                      (t(e, this, r), this._closed && e.closePath()),
                    !o &&
                      (u || c) &&
                      (this._setStyles(e, i, n),
                      u &&
                        (e.fill(h.getFillRule()),
                        (e.shadowColor = 'rgba(0,0,0,0)')),
                      c))
                  ) {
                    if (f) {
                      s || e.beginPath();
                      var p,
                        g = new q(this, 0.25, 32, !1, r),
                        _ = g.length,
                        v = -h.getDashOffset(),
                        m = 0;
                      for (v %= _; v > 0; ) v -= d(m--) + d(m--);
                      for (; v < _; )
                        (p = v + d(m++)),
                          (v > 0 || p > 0) &&
                            g.drawPart(e, Math.max(v, 0), Math.max(p, 0)),
                          (v = p + d(m++));
                    }
                    e.stroke();
                  }
                },
                _drawSelected: function(e, i) {
                  e.beginPath(),
                    t(e, this, i),
                    e.stroke(),
                    (function(t, e, i, n) {
                      var r,
                        s,
                        a = n / 2,
                        o = new Array(6);
                      function h(e) {
                        var i = o[e],
                          n = o[e + 1];
                        (r == i && s == n) ||
                          (t.beginPath(),
                          t.moveTo(r, s),
                          t.lineTo(i, n),
                          t.stroke(),
                          t.beginPath(),
                          t.arc(i, n, a, 0, 2 * Math.PI, !0),
                          t.fill());
                      }
                      for (var u = 0, c = e.length; u < c; u++) {
                        var l = e[u],
                          f = l._selection;
                        if (
                          (l._transformCoordinates(i, o),
                          (r = o[0]),
                          (s = o[1]),
                          2 & f && h(2),
                          4 & f && h(4),
                          t.fillRect(r - a, s - a, n, n),
                          !(1 & f))
                        ) {
                          var d = t.fillStyle;
                          (t.fillStyle = '#ffffff'),
                            t.fillRect(r - a + 1, s - a + 1, n - 2, n - 2),
                            (t.fillStyle = d);
                        }
                      }
                    })(e, this._segments, i, a.settings.handleSize);
                },
              };
            }(),
            new function() {
              function t(t) {
                var e = t._segments;
                if (!e.length) throw new Error('Use a moveTo() command first');
                return e[e.length - 1];
              }
              return {
                moveTo: function() {
                  var t = this._segments;
                  1 === t.length && this.removeSegment(0),
                    t.length || this._add([new V(m.read(arguments))]);
                },
                moveBy: function() {
                  throw new Error('moveBy() is unsupported on Path items.');
                },
                lineTo: function() {
                  this._add([new V(m.read(arguments))]);
                },
                cubicCurveTo: function() {
                  var e = m.read(arguments),
                    i = m.read(arguments),
                    n = m.read(arguments),
                    r = t(this);
                  r.setHandleOut(e.subtract(r._point)),
                    this._add([new V(n, i.subtract(n))]);
                },
                quadraticCurveTo: function() {
                  var e = m.read(arguments),
                    i = m.read(arguments),
                    n = t(this)._point;
                  this.cubicCurveTo(
                    e.add(n.subtract(e).multiply(1 / 3)),
                    e.add(i.subtract(e).multiply(1 / 3)),
                    i
                  );
                },
                curveTo: function() {
                  var e = m.read(arguments),
                    i = m.read(arguments),
                    n = l.pick(l.read(arguments), 0.5),
                    r = 1 - n,
                    s = t(this)._point,
                    a = e
                      .subtract(s.multiply(r * r))
                      .subtract(i.multiply(n * n))
                      .divide(2 * n * r);
                  if (a.isNaN())
                    throw new Error(
                      'Cannot put a curve through points with parameter = ' + n
                    );
                  this.quadraticCurveTo(a, i);
                },
                arcTo: function() {
                  var e,
                    i,
                    n,
                    r,
                    s = Math.abs,
                    a = Math.sqrt,
                    o = t(this),
                    h = o._point,
                    u = m.read(arguments),
                    c = l.peek(arguments);
                  if ('boolean' == typeof (v = l.pick(c, !0)))
                    var f = (w = h.add(u).divide(2)).add(
                      w.subtract(h).rotate(v ? -90 : 90)
                    );
                  else if (l.remain(arguments) <= 2)
                    (f = u), (u = m.read(arguments));
                  else {
                    var d = x.read(arguments),
                      p = _.isZero;
                    if (p(d.width) || p(d.height)) return this.lineTo(u);
                    var g = l.read(arguments),
                      v = !!l.read(arguments),
                      y = !!l.read(arguments),
                      w = h.add(u).divide(2),
                      b = (W = h.subtract(w).rotate(-g)).x,
                      C = W.y,
                      A = s(d.width),
                      P = s(d.height),
                      I = A * A,
                      E = P * P,
                      T = b * b,
                      L = C * C,
                      M = a(T / I + L / E);
                    if (
                      (M > 1 && ((I = (A *= M) * A), (E = (P *= M) * P)),
                      s((M = (I * E - I * L - E * T) / (I * L + E * T))) <
                        1e-12 && (M = 0),
                      M < 0)
                    )
                      throw new Error(
                        'Cannot create an arc with the given arguments'
                      );
                    (e = new m(A * C / P, -P * b / A)
                      .multiply((y === v ? -1 : 1) * a(M))
                      .rotate(g)
                      .add(w)),
                      (i = (n = (r = new S()
                        .translate(e)
                        .rotate(g)
                        .scale(A, P))._inverseTransform(h)).getDirectedAngle(
                        r._inverseTransform(u)
                      )),
                      !v && i > 0 ? (i -= 360) : v && i < 0 && (i += 360);
                  }
                  if (f) {
                    var N = new k(
                        h.add(f).divide(2),
                        f.subtract(h).rotate(90),
                        !0
                      ),
                      O = new k(
                        f.add(u).divide(2),
                        u.subtract(f).rotate(90),
                        !0
                      ),
                      z = new k(h, u),
                      R = z.getSide(f);
                    if (!(e = N.intersect(O, !0))) {
                      if (!R) return this.lineTo(u);
                      throw new Error(
                        'Cannot create an arc with the given arguments'
                      );
                    }
                    i = (n = h.subtract(e)).getDirectedAngle(u.subtract(e));
                    var B = z.getSide(e);
                    0 === B
                      ? (i = R * s(i))
                      : R === B && (i += i < 0 ? 360 : -360);
                  }
                  for (
                    var D = s(i),
                      F = D >= 360 ? 4 : Math.ceil((D - 1e-7) / 90),
                      j = i / F,
                      q = j * Math.PI / 360,
                      U = 4 / 3 * Math.sin(q) / (1 + Math.cos(q)),
                      H = [],
                      G = 0;
                    G <= F;
                    G++
                  ) {
                    var W = u,
                      Z = null;
                    if (
                      (G < F &&
                        ((Z = n.rotate(90).multiply(U)),
                        r
                          ? ((W = r._transformPoint(n)),
                            (Z = r._transformPoint(n.add(Z)).subtract(W)))
                          : (W = e.add(n))),
                      G)
                    ) {
                      var $ = n.rotate(-90).multiply(U);
                      r && ($ = r._transformPoint(n.add($)).subtract(W)),
                        H.push(new V(W, $, Z));
                    } else o.setHandleOut(Z);
                    n = n.rotate(j);
                  }
                  this._add(H);
                },
                lineBy: function() {
                  var e = m.read(arguments),
                    i = t(this)._point;
                  this.lineTo(i.add(e));
                },
                curveBy: function() {
                  var e = m.read(arguments),
                    i = m.read(arguments),
                    n = l.read(arguments),
                    r = t(this)._point;
                  this.curveTo(r.add(e), r.add(i), n);
                },
                cubicCurveBy: function() {
                  var e = m.read(arguments),
                    i = m.read(arguments),
                    n = m.read(arguments),
                    r = t(this)._point;
                  this.cubicCurveTo(r.add(e), r.add(i), r.add(n));
                },
                quadraticCurveBy: function() {
                  var e = m.read(arguments),
                    i = m.read(arguments),
                    n = t(this)._point;
                  this.quadraticCurveTo(n.add(e), n.add(i));
                },
                arcBy: function() {
                  var e = t(this)._point,
                    i = e.add(m.read(arguments)),
                    n = l.pick(l.peek(arguments), !0);
                  'boolean' == typeof n
                    ? this.arcTo(i, n)
                    : this.arcTo(i, e.add(m.read(arguments)));
                },
                closePath: function(t) {
                  this.setClosed(!0), this.join(this, t);
                },
              };
            }(),
            {
              _getBounds: function(t, e) {
                var i = e.handle
                  ? 'getHandleBounds'
                  : e.stroke
                    ? 'getStrokeBounds'
                    : 'getBounds';
                return F[i](this._segments, this._closed, this, t, e);
              },
              statics: {
                getBounds: function(t, e, i, n, r, s) {
                  var a = t[0];
                  if (!a) return new b();
                  var o = new Array(6),
                    h = a._transformCoordinates(n, new Array(6)),
                    u = h.slice(0, 2),
                    c = u.slice(),
                    l = new Array(2);
                  function f(t) {
                    t._transformCoordinates(n, o);
                    for (var e = 0; e < 2; e++)
                      R._addBounds(
                        h[e],
                        h[e + 4],
                        o[e + 2],
                        o[e],
                        e,
                        s ? s[e] : 0,
                        u,
                        c,
                        l
                      );
                    var i = h;
                    (h = o), (o = i);
                  }
                  for (var d = 1, p = t.length; d < p; d++) f(t[d]);
                  return e && f(a), new b(u[0], u[1], c[0] - u[0], c[1] - u[1]);
                },
                getStrokeBounds: function(t, e, i, n, r) {
                  var s = i.getStyle(),
                    a = s.hasStroke(),
                    o = s.getStrokeWidth(),
                    h = a && i._getStrokeMatrix(n, r),
                    u = a && F._getStrokePadding(o, h),
                    c = F.getBounds(t, e, i, n, r, u);
                  if (!a) return c;
                  var l = o / 2,
                    f = s.getStrokeJoin(),
                    d = s.getStrokeCap(),
                    p = s.getMiterLimit(),
                    g = new b(new x(u));
                  function _(t) {
                    c = c.include(t);
                  }
                  function v(t) {
                    c = c.unite(g.setCenter(t._point.transform(n)));
                  }
                  function m(t, e) {
                    'round' === e || t.isSmooth()
                      ? v(t)
                      : F._addBevelJoin(t, e, l, p, n, h, _);
                  }
                  function y(t, e) {
                    'round' === e ? v(t) : F._addSquareCap(t, e, l, n, h, _);
                  }
                  for (var w = t.length - (e ? 0 : 1), C = 1; C < w; C++)
                    m(t[C], f);
                  return (
                    e
                      ? m(t[0], f)
                      : w > 0 && (y(t[0], d), y(t[t.length - 1], d)),
                    c
                  );
                },
                _getStrokePadding: function(t, e) {
                  if (!e) return [t, t];
                  var i = new m(t, 0).transform(e),
                    n = new m(0, t).transform(e),
                    r = i.getAngleInRadians(),
                    s = i.getLength(),
                    a = n.getLength(),
                    o = Math.sin(r),
                    h = Math.cos(r),
                    u = Math.tan(r),
                    c = Math.atan2(a * u, s),
                    l = Math.atan2(a, u * s);
                  return [
                    Math.abs(s * Math.cos(c) * h + a * Math.sin(c) * o),
                    Math.abs(a * Math.sin(l) * h + s * Math.cos(l) * o),
                  ];
                },
                _addBevelJoin: function(t, e, i, n, r, s, a, o) {
                  var h = t.getCurve(),
                    u = h.getPrevious(),
                    c = h.getPoint1().transform(r),
                    l = u
                      .getNormalAtTime(1)
                      .multiply(i)
                      .transform(s),
                    f = h
                      .getNormalAtTime(0)
                      .multiply(i)
                      .transform(s);
                  if (
                    (l.getDirectedAngle(f) < 0 &&
                      ((l = l.negate()), (f = f.negate())),
                    o && a(c),
                    a(c.add(l)),
                    'miter' === e)
                  ) {
                    var d = new k(c.add(l), new m(-l.y, l.x), !0).intersect(
                      new k(c.add(f), new m(-f.y, f.x), !0),
                      !0
                    );
                    d && c.getDistance(d) <= n * i && a(d);
                  }
                  a(c.add(f));
                },
                _addSquareCap: function(t, e, i, n, r, s, a) {
                  var o = t._point.transform(n),
                    h = t.getLocation(),
                    u = h
                      .getNormal()
                      .multiply(0 === h.getTime() ? i : -i)
                      .transform(r);
                  'square' === e &&
                    (a && (s(o.subtract(u)), s(o.add(u))),
                    (o = o.add(u.rotate(-90)))),
                    s(o.add(u)),
                    s(o.subtract(u));
                },
                getHandleBounds: function(t, e, i, n, r) {
                  var s,
                    a,
                    o = i.getStyle();
                  if (r.stroke && o.hasStroke()) {
                    var h = i._getStrokeMatrix(n, r),
                      u = o.getStrokeWidth() / 2,
                      c = u;
                    'miter' === o.getStrokeJoin() &&
                      (c = u * o.getMiterLimit()),
                      'square' === o.getStrokeCap() &&
                        (c = Math.max(c, u * Math.SQRT2)),
                      (s = F._getStrokePadding(u, h)),
                      (a = F._getStrokePadding(c, h));
                  }
                  for (
                    var l = new Array(6),
                      f = 1 / 0,
                      d = -f,
                      p = f,
                      g = d,
                      _ = 0,
                      v = t.length;
                    _ < v;
                    _++
                  ) {
                    t[_]._transformCoordinates(n, l);
                    for (var m = 0; m < 6; m += 2) {
                      var y = m ? s : a,
                        x = y ? y[0] : 0,
                        w = y ? y[1] : 0,
                        C = l[m],
                        S = l[m + 1],
                        k = C - x,
                        A = C + x,
                        P = S - w,
                        I = S + w;
                      k < f && (f = k),
                        A > d && (d = A),
                        P < p && (p = P),
                        I > g && (g = I);
                    }
                  }
                  return new b(f, p, d - f, g - p);
                },
              },
            }
          );
        F.inject({
          statics: new function() {
            var t = 0.5522847498307936,
              e = [
                new V([-1, 0], [0, t], [0, -t]),
                new V([0, -1], [-t, 0], [t, 0]),
                new V([1, 0], [0, -t], [0, t]),
                new V([0, 1], [t, 0], [-t, 0]),
              ];
            function i(t, e, i) {
              var n = l.getNamed(i),
                r = new F(n && 0 == n.insert && P.NO_INSERT);
              return r._add(t), (r._closed = e), r.set(n, { insert: !0 });
            }
            function n(t, n, r) {
              for (var s = new Array(4), a = 0; a < 4; a++) {
                var o = e[a];
                s[a] = new V(
                  o._point.multiply(n).add(t),
                  o._handleIn.multiply(n),
                  o._handleOut.multiply(n)
                );
              }
              return i(s, !0, r);
            }
            return {
              Line: function() {
                return i(
                  [
                    new V(m.readNamed(arguments, 'from')),
                    new V(m.readNamed(arguments, 'to')),
                  ],
                  !1,
                  arguments
                );
              },
              Circle: function() {
                var t = m.readNamed(arguments, 'center'),
                  e = l.readNamed(arguments, 'radius');
                return n(t, new x(e), arguments);
              },
              Rectangle: function() {
                var e,
                  n = b.readNamed(arguments, 'rectangle'),
                  r = x.readNamed(arguments, 'radius', 0, { readNull: !0 }),
                  s = n.getBottomLeft(!0),
                  a = n.getTopLeft(!0),
                  o = n.getTopRight(!0),
                  h = n.getBottomRight(!0);
                if (!r || r.isZero())
                  e = [new V(s), new V(a), new V(o), new V(h)];
                else {
                  var u = (r = x.min(r, n.getSize(!0).divide(2))).width,
                    c = r.height,
                    l = u * t,
                    f = c * t;
                  e = [
                    new V(s.add(u, 0), null, [-l, 0]),
                    new V(s.subtract(0, c), [0, f]),
                    new V(a.add(0, c), null, [0, -f]),
                    new V(a.add(u, 0), [-l, 0], null),
                    new V(o.subtract(u, 0), null, [l, 0]),
                    new V(o.add(0, c), [0, -f], null),
                    new V(h.subtract(0, c), null, [0, f]),
                    new V(h.subtract(u, 0), [l, 0]),
                  ];
                }
                return i(e, !0, arguments);
              },
              RoundRectangle: '#Rectangle',
              Ellipse: function() {
                var t = T._readEllipse(arguments);
                return n(t.center, t.radius, arguments);
              },
              Oval: '#Ellipse',
              Arc: function() {
                var t = m.readNamed(arguments, 'from'),
                  e = m.readNamed(arguments, 'through'),
                  i = m.readNamed(arguments, 'to'),
                  n = l.getNamed(arguments),
                  r = new F(n && 0 == n.insert && P.NO_INSERT);
                return r.moveTo(t), r.arcTo(e, i), r.set(n);
              },
              RegularPolygon: function() {
                for (
                  var t = m.readNamed(arguments, 'center'),
                    e = l.readNamed(arguments, 'sides'),
                    n = l.readNamed(arguments, 'radius'),
                    r = 360 / e,
                    s = e % 3 == 0,
                    a = new m(0, s ? -n : n),
                    o = s ? -1 : 0.5,
                    h = new Array(e),
                    u = 0;
                  u < e;
                  u++
                )
                  h[u] = new V(t.add(a.rotate((u + o) * r)));
                return i(h, !0, arguments);
              },
              Star: function() {
                for (
                  var t = m.readNamed(arguments, 'center'),
                    e = 2 * l.readNamed(arguments, 'points'),
                    n = l.readNamed(arguments, 'radius1'),
                    r = l.readNamed(arguments, 'radius2'),
                    s = 360 / e,
                    a = new m(0, -1),
                    o = new Array(e),
                    h = 0;
                  h < e;
                  h++
                )
                  o[h] = new V(t.add(a.rotate(s * h).multiply(h % 2 ? r : n)));
                return i(o, !0, arguments);
              },
            };
          }(),
        });
        var j = D.extend(
          {
            _class: 'CompoundPath',
            _serializeFields: { children: [] },
            beans: !0,
            initialize: function(t) {
              (this._children = []),
                (this._namedChildren = {}),
                this._initialize(t) ||
                  ('string' == typeof t
                    ? this.setPathData(t)
                    : this.addChildren(Array.isArray(t) ? t : arguments));
            },
            insertChildren: function t(e, i) {
              var n = i,
                r = n[0];
              r && 'number' == typeof r[0] && (n = [n]);
              for (var s = i.length - 1; s >= 0; s--) {
                var a = n[s];
                n !== i || a instanceof F || (n = l.slice(n)),
                  Array.isArray(a)
                    ? (n[s] = new F({ segments: a, insert: !1 }))
                    : a instanceof j &&
                      (n.splice.apply(n, [s, 1].concat(a.removeChildren())),
                      a.remove());
              }
              return t.base.call(this, e, n);
            },
            reduce: function t(e) {
              for (var i = this._children, n = i.length - 1; n >= 0; n--) {
                var r;
                (r = i[n].reduce(e)).isEmpty() && r.remove();
              }
              return i.length
                ? t.base.call(this)
                : ((r = new F(P.NO_INSERT)).copyAttributes(this),
                  r.insertAbove(this),
                  this.remove(),
                  r);
            },
            isClosed: function() {
              for (var t = this._children, e = 0, i = t.length; e < i; e++)
                if (!t[e]._closed) return !1;
              return !0;
            },
            setClosed: function(t) {
              for (var e = this._children, i = 0, n = e.length; i < n; i++)
                e[i].setClosed(t);
            },
            getFirstSegment: function() {
              var t = this.getFirstChild();
              return t && t.getFirstSegment();
            },
            getLastSegment: function() {
              var t = this.getLastChild();
              return t && t.getLastSegment();
            },
            getCurves: function() {
              for (
                var t = this._children, e = [], i = 0, n = t.length;
                i < n;
                i++
              )
                e.push.apply(e, t[i].getCurves());
              return e;
            },
            getFirstCurve: function() {
              var t = this.getFirstChild();
              return t && t.getFirstCurve();
            },
            getLastCurve: function() {
              var t = this.getLastChild();
              return t && t.getLastCurve();
            },
            getArea: function() {
              for (
                var t = this._children, e = 0, i = 0, n = t.length;
                i < n;
                i++
              )
                e += t[i].getArea();
              return e;
            },
            getLength: function() {
              for (
                var t = this._children, e = 0, i = 0, n = t.length;
                i < n;
                i++
              )
                e += t[i].getLength();
              return e;
            },
            getPathData: function(t, e) {
              for (
                var i = this._children, n = [], r = 0, s = i.length;
                r < s;
                r++
              ) {
                var a = i[r],
                  o = a._matrix;
                n.push(
                  a.getPathData(t && !o.isIdentity() ? t.appended(o) : t, e)
                );
              }
              return n.join('');
            },
            _hitTestChildren: function t(e, i, n) {
              return t.base.call(
                this,
                e,
                i.class === F || 'path' === i.type
                  ? i
                  : l.set({}, i, { fill: !1 }),
                n
              );
            },
            _draw: function(t, e, i, n) {
              var r = this._children;
              if (r.length) {
                (e = e.extend({ dontStart: !0, dontFinish: !0 })),
                  t.beginPath();
                for (var s = 0, a = r.length; s < a; s++) r[s].draw(t, e, n);
                if (!e.clip) {
                  this._setStyles(t, e, i);
                  var o = this._style;
                  o.hasFill() &&
                    (t.fill(o.getFillRule()),
                    (t.shadowColor = 'rgba(0,0,0,0)')),
                    o.hasStroke() && t.stroke();
                }
              }
            },
            _drawSelected: function(t, e, i) {
              for (var n = this._children, r = 0, s = n.length; r < s; r++) {
                var a = n[r],
                  o = a._matrix;
                i[a._id] ||
                  a._drawSelected(t, o.isIdentity() ? e : e.appended(o));
              }
            },
          },
          new function() {
            function t(t, e) {
              var i = t._children;
              if (e && !i.length)
                throw new Error('Use a moveTo() command first');
              return i[i.length - 1];
            }
            return l.each(
              [
                'lineTo',
                'cubicCurveTo',
                'quadraticCurveTo',
                'curveTo',
                'arcTo',
                'lineBy',
                'cubicCurveBy',
                'quadraticCurveBy',
                'curveBy',
                'arcBy',
              ],
              function(e) {
                this[e] = function() {
                  var i = t(this, !0);
                  i[e].apply(i, arguments);
                };
              },
              {
                moveTo: function() {
                  var e = t(this),
                    i = e && e.isEmpty() ? e : new F(P.NO_INSERT);
                  i !== e && this.addChild(i), i.moveTo.apply(i, arguments);
                },
                moveBy: function() {
                  var e = t(this, !0),
                    i = e && e.getLastSegment(),
                    n = m.read(arguments);
                  this.moveTo(i ? n.add(i._point) : n);
                },
                closePath: function(e) {
                  t(this, !0).closePath(e);
                },
              }
            );
          }(),
          l.each(
            ['reverse', 'flatten', 'simplify', 'smooth'],
            function(t) {
              this[t] = function(e) {
                for (var i, n = this._children, r = 0, s = n.length; r < s; r++)
                  i = n[r][t](e) || i;
                return i;
              };
            },
            {}
          )
        );
        D.inject(
          new function() {
            var t = Math.min,
              e = Math.max,
              i = Math.abs,
              n = {
                unite: { 1: !0, 2: !0 },
                intersect: { 2: !0 },
                subtract: { 1: !0 },
                exclude: { 1: !0, '-1': !0 },
              };
            function r(t, e) {
              var i = t
                .clone(!1)
                .reduce({ simplify: !0 })
                .transform(null, !0, !0);
              return e
                ? i
                    .resolveCrossings()
                    .reorient('nonzero' === i.getFillRule(), !0)
                : i;
            }
            function s(t, e, i, n, r) {
              var s = new j(P.NO_INSERT);
              return (
                s.addChildren(t, !0),
                (s = s.reduce({ simplify: e })),
                (r && 0 == r.insert) ||
                  s.insertAbove(
                    n && i.isSibling(n) && i.getIndex() < n.getIndex() ? n : i
                  ),
                s.copyAttributes(i, !0),
                s
              );
            }
            function a(t, e, i, a) {
              if (
                a &&
                (0 == a.trace || a.stroke) &&
                /^(subtract|intersect)$/.test(i)
              )
                return o(t, e, i);
              var h = r(t, !0),
                u = e && t !== e && r(e, !0),
                c = n[i];
              (c[i] = !0),
                u &&
                  (c.subtract || c.exclude) ^
                    u.isClockwise() ^
                    h.isClockwise() &&
                  u.reverse();
              var l,
                p = d(B.expand(h.getCrossings(u))),
                _ = h._children || [h],
                m = u && (u._children || [u]),
                y = [],
                x = [];
              function w(t) {
                for (var e = 0, i = t.length; e < i; e++) {
                  var n = t[e];
                  y.push.apply(y, n._segments),
                    x.push.apply(x, n.getCurves()),
                    (n._overlapsOnly = !0);
                }
              }
              if (p.length) {
                w(_), m && w(m);
                for (var b = 0, C = p.length; b < C; b++)
                  g(p[b]._segment, h, u, x, c);
                for (b = 0, C = y.length; b < C; b++) {
                  var S = y[b],
                    k = S._intersection;
                  S._winding || g(S, h, u, x, c),
                    (k && k._overlap) || (S._path._overlapsOnly = !1);
                }
                l = v(y, c);
              } else
                l = f(m ? _.concat(m) : _.slice(), function(t) {
                  return !!c[t];
                });
              return s(l, !0, t, e, a);
            }
            function o(t, e, i) {
              var n = r(t),
                a = r(e),
                o = n.getCrossings(a),
                h = 'subtract' === i,
                u = 'divide' === i,
                c = {},
                l = [];
              function f(t) {
                if (
                  !c[t._id] &&
                  (u || a.contains(t.getPointAt(t.getLength() / 2)) ^ h)
                )
                  return l.unshift(t), (c[t._id] = !0);
              }
              for (var d = o.length - 1; d >= 0; d--) {
                var p = o[d].split();
                p &&
                  (f(p) && p.getFirstSegment().setHandleIn(0, 0),
                  n.getLastSegment().setHandleOut(0, 0));
              }
              return f(n), s(l, !1, t, e);
            }
            function u(t, e) {
              for (var i = t; i; ) {
                if (i === e) return;
                i = i._previous;
              }
              for (; t._next && t._next !== e; ) t = t._next;
              if (!t._next) {
                for (; e._previous; ) e = e._previous;
                (t._next = e), (e._previous = t);
              }
            }
            function c(t) {
              for (var e = t.length - 1; e >= 0; e--) t[e].clearHandles();
            }
            function f(t, e, n) {
              var r = t && t.length;
              if (r) {
                var s = l.each(
                    t,
                    function(t, e) {
                      this[t._id] = {
                        container: null,
                        winding: t.isClockwise() ? 1 : -1,
                        index: e,
                      };
                    },
                    {}
                  ),
                  a = t.slice().sort(function(t, e) {
                    return i(e.getArea()) - i(t.getArea());
                  }),
                  o = a[0];
                null == n && (n = o.isClockwise());
                for (var h = 0; h < r; h++) {
                  for (
                    var u = a[h],
                      c = s[u._id],
                      f = u.getInteriorPoint(),
                      d = 0,
                      p = h - 1;
                    p >= 0;
                    p--
                  ) {
                    var g = a[p];
                    if (g.contains(f)) {
                      var _ = s[g._id];
                      (d = _.winding),
                        (c.winding += d),
                        (c.container = _.exclude ? _.container : g);
                      break;
                    }
                  }
                  if (e(c.winding) === e(d))
                    (c.exclude = !0), (t[c.index] = null);
                  else {
                    var v = c.container;
                    u.setClockwise(v ? !v.isClockwise() : n);
                  }
                }
              }
              return t;
            }
            function d(t, e, i) {
              var n,
                r,
                s,
                a = e && [],
                o = !1,
                h = i || [],
                l = i && {};
              function f(t) {
                return t._path._id + '.' + t._segment1._index;
              }
              for (var d = (i && i.length) - 1; d >= 0; d--) {
                (p = i[d])._path && (l[f(p)] = !0);
              }
              for (d = t.length - 1; d >= 0; d--) {
                var p,
                  g,
                  _ = t[d],
                  v = _._time,
                  m = v,
                  y = e && !e(_);
                if (
                  ((p = _._curve) &&
                    (p !== r
                      ? ((o = !p.hasHandles() || (l && l[f(p)])),
                        (n = []),
                        (s = null),
                        (r = p))
                      : s >= 1e-8 && (v /= s)),
                  y)
                )
                  n && n.push(_);
                else {
                  if ((e && a.unshift(_), (s = m), v < 1e-8)) g = p._segment1;
                  else if (v > 1 - 1e-8) g = p._segment2;
                  else {
                    var x = p.divideAtTime(v, !0);
                    o && h.push(p, x), (g = x._segment1);
                    for (var w = n.length - 1; w >= 0; w--) {
                      var b = n[w];
                      b._time = (b._time - v) / (1 - v);
                    }
                  }
                  _._setSegment(g);
                  var C = g._intersection,
                    S = _._intersection;
                  if (C) {
                    u(C, S);
                    for (var k = C; k; ) u(k._intersection, C), (k = k._next);
                  } else g._intersection = S;
                }
              }
              return i || c(h), a || t;
            }
            function p(n, r, s, a, o) {
              var h,
                u,
                c = s ? 1 : 0,
                l = 1 ^ c,
                f = [n.x, n.y],
                d = f[c],
                g = f[l],
                _ = 1e-6,
                v = d - 1e-9,
                m = d + 1e-9,
                y = 0,
                x = 0,
                w = 0,
                b = 0,
                C = !1,
                S = !1,
                k = 1,
                A = [];
              function P(i) {
                var u = i[l + 0],
                  f = i[l + 6];
                if (!(g < t(u, f) || g > e(u, f))) {
                  var y = i[c + 0],
                    x = i[c + 2],
                    S = i[c + 4],
                    P = i[c + 6];
                  if (u !== f) {
                    var I =
                        g === u
                          ? 0
                          : g === f
                            ? 1
                            : v > e(y, x, S, P) || m < t(y, x, S, P)
                              ? 1
                              : R.solveCubic(i, l, g, A, 0, 1) > 0
                                ? A[0]
                                : 1,
                      E =
                        0 === I
                          ? y
                          : 1 === I
                            ? P
                            : R.getPoint(i, I)[s ? 'y' : 'x'],
                      T = u > f ? 1 : -1,
                      L = h[l] > h[l + 6] ? 1 : -1,
                      M = h[c + 6];
                    return (
                      g !== u
                        ? (E < v ? (w += T) : E > m ? (b += T) : (C = !0),
                          E > d - _ && E < d + _ && (k /= 2))
                        : (T !== L
                            ? y < v
                              ? (w += T)
                              : y > m && (b += T)
                            : y != M &&
                              (M < m && E > m
                                ? ((b += T), (C = !0))
                                : M > v && E < v && ((w += T), (C = !0))),
                          (k = 0)),
                      (h = i),
                      !o &&
                        E > v &&
                        E < m &&
                        0 === R.getTangent(i, I)[s ? 'x' : 'y'] &&
                        p(n, r, !s, a, !0)
                    );
                  }
                  ((y < m && P > v) || (P < m && y > v)) && (C = !0);
                }
              }
              function I(i) {
                var n = i[l + 0],
                  r = i[l + 2],
                  a = i[l + 4],
                  o = i[l + 6];
                if (g <= e(n, r, a, o) && g >= t(n, r, a, o))
                  for (
                    var h,
                      u = i[c + 0],
                      f = i[c + 2],
                      d = i[c + 4],
                      p = i[c + 6],
                      _ =
                        v > e(u, f, d, p) || m < t(u, f, d, p)
                          ? [i]
                          : R.getMonoCurves(i, s),
                      y = 0,
                      x = _.length;
                    y < x;
                    y++
                  )
                    if ((h = P(_[y]))) return h;
              }
              for (var E = 0, T = r.length; E < T; E++) {
                var L,
                  M = r[E],
                  N = M._path,
                  O = M.getValues();
                if (
                  !(
                    (E && r[E - 1]._path === N) ||
                    ((h = null),
                    N._closed ||
                      ((u = R.getValues(
                        N.getLastCurve().getSegment2(),
                        M.getSegment1(),
                        null,
                        !a
                      ))[l] !== u[l + 6] &&
                        (h = u)),
                    h)
                  )
                ) {
                  h = O;
                  for (var V = N.getLastCurve(); V && V !== M; ) {
                    var z = V.getValues();
                    if (z[l] !== z[l + 6]) {
                      h = z;
                      break;
                    }
                    V = V.getPrevious();
                  }
                }
                if ((L = I(O))) return L;
                if (E + 1 === T || r[E + 1]._path !== N) {
                  if (u && (L = I(u))) return L;
                  !C || w || b || (w = b = N.isClockwise(a) ^ s ? 1 : -1),
                    (y += w),
                    (x += b),
                    (w = b = 0),
                    C && ((S = !0), (C = !1)),
                    (u = null);
                }
              }
              return (
                (y = i(y)),
                (x = i(x)),
                {
                  winding: e(y, x),
                  windingL: y,
                  windingR: x,
                  quality: k,
                  onPath: S,
                }
              );
            }
            function g(t, e, n, r, s) {
              var a = [],
                o = t,
                h = 0;
              do {
                var u = (y = t.getCurve()).getLength();
                a.push({ segment: t, curve: y, length: u }),
                  (h += u),
                  (t = t.getNext());
              } while (t && !t._intersection && t !== o);
              for (
                var c = [0.5, 0.25, 0.75],
                  l = { winding: 0, quality: -1 },
                  f = 0;
                f < c.length && l.quality < 0.5;
                f++
              ) {
                u = h * c[f];
                for (var d = 0, g = a.length; d < g; d++) {
                  var v = a[d],
                    m = v.length;
                  if (u <= m) {
                    var y,
                      x = (y = v.curve)._path,
                      w = x._parent,
                      b = w instanceof j ? w : x,
                      C = _.clamp(y.getTimeAt(u), 1e-8, 1 - 1e-8),
                      S = y.getPointAtTime(C),
                      k = i(y.getTangentAtTime(C).y) < Math.SQRT1_2,
                      A =
                        s.subtract &&
                        n &&
                        ((b === e && n._getWinding(S, k, !0).winding) ||
                          (b === n && !e._getWinding(S, k, !0).winding))
                          ? { winding: 0, quality: 1 }
                          : p(S, r, k, !0);
                    A.quality > l.quality && (l = A);
                    break;
                  }
                  u -= m;
                }
              }
              for (d = a.length - 1; d >= 0; d--) a[d].segment._winding = l;
            }
            function v(t, e) {
              var i,
                n = [];
              function r(t) {
                var i;
                return !(
                  !t ||
                  t._visited ||
                  (e &&
                    (!e[(i = t._winding || {}).winding] ||
                      (e.unite && 2 === i.winding && i.windingL && i.windingR)))
                );
              }
              function s(t) {
                if (t)
                  for (var e = 0, n = i.length; e < n; e++)
                    if (t === i[e]) return !0;
                return !1;
              }
              function a(t) {
                for (var e = t._segments, i = 0, n = e.length; i < n; i++)
                  e[i]._visited = !0;
              }
              function o(t, e) {
                var n = t._intersection,
                  a = n,
                  o = [];
                function h(n, a) {
                  for (; n && n !== a; ) {
                    var h = n._segment,
                      u = h && h._path;
                    if (u) {
                      var c = h.getNext() || u.getFirstSegment(),
                        l = c._intersection;
                      h !== t &&
                        (s(h) ||
                          s(c) ||
                          (c && r(h) && (r(c) || (l && r(l._segment))))) &&
                        o.push(h),
                        e && i.push(h);
                    }
                    n = n._next;
                  }
                }
                if ((e && (i = [t]), n)) {
                  for (h(n); n && n._prev; ) n = n._prev;
                  h(n, a);
                }
                return o;
              }
              t.sort(function(t, e) {
                var i = t._intersection,
                  n = e._intersection,
                  r = !(!i || !i._overlap),
                  s = !(!n || !n._overlap),
                  a = t._path,
                  o = e._path;
                return r ^ s
                  ? r
                    ? 1
                    : -1
                  : !i ^ !n
                    ? i
                      ? 1
                      : -1
                    : a !== o
                      ? a._id - o._id
                      : t._index - e._index;
              });
              for (var h = 0, u = t.length; h < u; h++) {
                var c,
                  l,
                  f,
                  d = t[h],
                  p = r(d),
                  g = null,
                  _ = !1,
                  v = !0,
                  m = [];
                if (p && d._path._overlapsOnly) {
                  var y = d._path,
                    x = d._intersection._segment._path;
                  y.compare(x) &&
                    (y.getArea() && n.push(y.clone(!1)), a(y), a(x), (p = !1));
                }
                for (; p; ) {
                  var w = !g,
                    b = o(d, w),
                    C = b.shift(),
                    S = !(_ = !w && (s(d) || s(C))) && C;
                  if ((w && ((g = new F(P.NO_INSERT)), (c = null)), _)) {
                    (d.isFirst() || d.isLast()) && (v = d._path._closed),
                      (d._visited = !0);
                    break;
                  }
                  if (
                    (S && c && (m.push(c), (c = null)),
                    c ||
                      (S && b.push(d),
                      (c = {
                        start: g._segments.length,
                        crossings: b,
                        visited: (l = []),
                        handleIn: f,
                      })),
                    S && (d = C),
                    !r(d))
                  ) {
                    g.removeSegments(c.start);
                    for (var k = 0, A = l.length; k < A; k++)
                      l[k]._visited = !1;
                    l.length = 0;
                    do {
                      ((d = c && c.crossings.shift()) && d._path) ||
                        ((d = null),
                        (c = m.pop()) && ((l = c.visited), (f = c.handleIn)));
                    } while (c && !r(d));
                    if (!d) break;
                  }
                  var I = d.getNext();
                  g.add(new V(d._point, f, I && d._handleOut)),
                    (d._visited = !0),
                    l.push(d),
                    (d = I || d._path.getFirstSegment()),
                    (f = I && I._handleIn);
                }
                _ &&
                  (v && (g.getFirstSegment().setHandleIn(f), g.setClosed(v)),
                  0 !== g.getArea() && n.push(g));
              }
              return n;
            }
            return {
              _getWinding: function(t, e, i) {
                return p(t, this.getCurves(), e, i);
              },
              unite: function(t, e) {
                return a(this, t, 'unite', e);
              },
              intersect: function(t, e) {
                return a(this, t, 'intersect', e);
              },
              subtract: function(t, e) {
                return a(this, t, 'subtract', e);
              },
              exclude: function(t, e) {
                return a(this, t, 'exclude', e);
              },
              divide: function(t, e) {
                return e && (0 == e.trace || e.stroke)
                  ? o(this, t, 'divide')
                  : s(
                      [this.subtract(t, e), this.intersect(t, e)],
                      !0,
                      this,
                      t,
                      e
                    );
              },
              resolveCrossings: function() {
                var t = this._children,
                  e = t || [this];
                function i(t, e) {
                  var i = t && t._intersection;
                  return i && i._overlap && i._path === e;
                }
                var n = !1,
                  r = !1,
                  s = this.getIntersections(null, function(t) {
                    return (
                      (t.hasOverlap() && (n = !0)) ||
                      (t.isCrossing() && (r = !0))
                    );
                  }),
                  a = n && r && [];
                if (((s = B.expand(s)), n))
                  for (
                    var o = d(
                        s,
                        function(t) {
                          return t.hasOverlap();
                        },
                        a
                      ),
                      h = o.length - 1;
                    h >= 0;
                    h--
                  ) {
                    var u = o[h],
                      f = u._path,
                      p = u._segment,
                      g = p.getPrevious(),
                      _ = p.getNext();
                    i(g, f) &&
                      i(_, f) &&
                      (p.remove(),
                      g._handleOut._set(0, 0),
                      _._handleIn._set(0, 0),
                      g === p ||
                        g.getCurve().hasLength() ||
                        (_._handleIn.set(g._handleIn), g.remove()));
                  }
                r &&
                  (d(
                    s,
                    n &&
                      function(t) {
                        var e = t.getCurve(),
                          i = t.getSegment(),
                          n = t._intersection,
                          r = n._curve,
                          s = n._segment;
                        if (e && r && e._path && r._path) return !0;
                        i && (i._intersection = null),
                          s && (s._intersection = null);
                      },
                    a
                  ),
                  a && c(a),
                  (e = v(
                    l.each(
                      e,
                      function(t) {
                        this.push.apply(this, t._segments);
                      },
                      []
                    )
                  )));
                var m,
                  y = e.length;
                return (
                  y > 1 && t
                    ? (e !== t && this.setChildren(e), (m = this))
                    : 1 !== y ||
                      t ||
                      (e[0] !== this && this.setSegments(e[0].removeSegments()),
                      (m = this)),
                  m ||
                    ((m = new j(P.NO_INSERT)).addChildren(e),
                    (m = m.reduce()).copyAttributes(this),
                    this.replaceWith(m)),
                  m
                );
              },
              reorient: function(t, e) {
                var i = this._children;
                return (
                  i && i.length
                    ? this.setChildren(
                        f(
                          this.removeChildren(),
                          function(e) {
                            return !!(t ? e : 1 & e);
                          },
                          e
                        )
                      )
                    : e !== h && this.setClockwise(e),
                  this
                );
              },
              getInteriorPoint: function() {
                var i = this.getBounds().getCenter(!0);
                if (!this.contains(i)) {
                  for (
                    var n = this.getCurves(),
                      r = i.y,
                      s = [],
                      a = [],
                      o = 0,
                      h = n.length;
                    o < h;
                    o++
                  ) {
                    var u = n[o].getValues(),
                      c = u[1],
                      l = u[3],
                      f = u[5],
                      d = u[7];
                    if (r >= t(c, l, f, d) && r <= e(c, l, f, d))
                      for (
                        var p = R.getMonoCurves(u), g = 0, _ = p.length;
                        g < _;
                        g++
                      ) {
                        var v = p[g],
                          m = v[1],
                          y = v[7];
                        if (
                          m !== y &&
                          ((r >= m && r <= y) || (r >= y && r <= m))
                        ) {
                          var x =
                            r === m
                              ? v[0]
                              : r === y
                                ? v[6]
                                : 1 === R.solveCubic(v, 1, r, a, 0, 1)
                                  ? R.getPoint(v, a[0]).x
                                  : (v[0] + v[6]) / 2;
                          s.push(x);
                        }
                      }
                  }
                  s.length > 1 &&
                    (s.sort(function(t, e) {
                      return t - e;
                    }),
                    (i.x = (s[0] + s[1]) / 2));
                }
                return i;
              },
            };
          }()
        );
        var q = l.extend(
            {
              _class: 'PathFlattener',
              initialize: function(t, e, i, n, r) {
                var s,
                  a = [],
                  o = [],
                  h = 0,
                  u = 1 / (i || 32),
                  c = t._segments,
                  l = c[0];
                function f(t, i) {
                  var s = R.getValues(t, i, r);
                  a.push(s),
                    (function t(i, r, s, a) {
                      if (
                        !(a - s > u) ||
                        (n && R.isStraight(i)) ||
                        R.isFlatEnough(i, e || 0.25)
                      ) {
                        var c = i[6] - i[0],
                          l = i[7] - i[1],
                          f = Math.sqrt(c * c + l * l);
                        f > 0 &&
                          ((h += f),
                          o.push({ offset: h, curve: i, index: r, time: a }));
                      } else {
                        var d = R.subdivide(i, 0.5),
                          p = (s + a) / 2;
                        t(d[0], r, s, p), t(d[1], r, p, a);
                      }
                    })(s, t._index, 0, 1);
                }
                for (var d = 1, p = c.length; d < p; d++)
                  f(l, (s = c[d])), (l = s);
                t._closed && f(s, c[0]),
                  (this.curves = a),
                  (this.parts = o),
                  (this.length = h),
                  (this.index = 0);
              },
              _get: function(t) {
                for (
                  var e, i = this.parts, n = i.length, r = this.index;
                  (e = r), r && !(i[--r].offset < t);

                );
                for (; e < n; e++) {
                  var s = i[e];
                  if (s.offset >= t) {
                    this.index = e;
                    var a = i[e - 1],
                      o = a && a.index === s.index ? a.time : 0,
                      h = a ? a.offset : 0;
                    return {
                      index: s.index,
                      time: o + (s.time - o) * (t - h) / (s.offset - h),
                    };
                  }
                }
                return { index: i[n - 1].index, time: 1 };
              },
              drawPart: function(t, e, i) {
                for (
                  var n = this._get(e),
                    r = this._get(i),
                    s = n.index,
                    a = r.index;
                  s <= a;
                  s++
                ) {
                  var o = R.getPart(
                    this.curves[s],
                    s === n.index ? n.time : 0,
                    s === r.index ? r.time : 1
                  );
                  s === n.index && t.moveTo(o[0], o[1]),
                    t.bezierCurveTo.apply(t, o.slice(2));
                }
              },
            },
            l.each(
              R._evaluateMethods,
              function(t) {
                this[t + 'At'] = function(e) {
                  var i = this._get(e);
                  return R[t](this.curves[i.index], i.time);
                };
              },
              {}
            )
          ),
          U = l.extend({
            initialize: function(t) {
              for (
                var e,
                  i = (this.points = []),
                  n = t._segments,
                  r = t._closed,
                  s = 0,
                  a = n.length;
                s < a;
                s++
              ) {
                var o = n[s].point;
                (e && e.equals(o)) || i.push((e = o.clone()));
              }
              r && (i.unshift(i[i.length - 1]), i.push(i[1])),
                (this.closed = r);
            },
            fit: function(t) {
              var e = this.points,
                i = e.length,
                n = null;
              return (
                i > 0 &&
                  ((n = [new V(e[0])]),
                  i > 1 &&
                    (this.fitCubic(
                      n,
                      t,
                      0,
                      i - 1,
                      e[1].subtract(e[0]),
                      e[i - 2].subtract(e[i - 1])
                    ),
                    this.closed && (n.shift(), n.pop()))),
                n
              );
            },
            fitCubic: function(t, e, i, n, r, s) {
              var a = this.points;
              if (n - i != 1) {
                for (
                  var o,
                    h = this.chordLengthParameterize(i, n),
                    u = Math.max(e, e * e),
                    c = !0,
                    l = 0;
                  l <= 4;
                  l++
                ) {
                  var f = this.generateBezier(i, n, h, r, s),
                    d = this.findMaxError(i, n, f, h);
                  if (d.error < e && c) return void this.addCurve(t, f);
                  if (((o = d.index), d.error >= u)) break;
                  (c = this.reparameterize(i, n, h, f)), (u = d.error);
                }
                var p = a[o - 1].subtract(a[o + 1]);
                this.fitCubic(t, e, i, o, r, p),
                  this.fitCubic(t, e, o, n, p.negate(), s);
              } else {
                var g = a[i],
                  _ = a[n],
                  v = g.getDistance(_) / 3;
                this.addCurve(t, [
                  g,
                  g.add(r.normalize(v)),
                  _.add(s.normalize(v)),
                  _,
                ]);
              }
            },
            addCurve: function(t, e) {
              t[t.length - 1].setHandleOut(e[1].subtract(e[0])),
                t.push(new V(e[3], e[2].subtract(e[3])));
            },
            generateBezier: function(t, e, i, n, r) {
              for (
                var s = Math.abs,
                  a = this.points,
                  o = a[t],
                  h = a[e],
                  u = [[0, 0], [0, 0]],
                  c = [0, 0],
                  l = 0,
                  f = e - t + 1;
                l < f;
                l++
              ) {
                var d = i[l],
                  p = 1 - d,
                  g = 3 * d * p,
                  _ = p * p * p,
                  v = g * p,
                  m = g * d,
                  y = d * d * d,
                  x = n.normalize(v),
                  w = r.normalize(m),
                  b = a[t + l]
                    .subtract(o.multiply(_ + v))
                    .subtract(h.multiply(m + y));
                (u[0][0] += x.dot(x)),
                  (u[0][1] += x.dot(w)),
                  (u[1][0] = u[0][1]),
                  (u[1][1] += w.dot(w)),
                  (c[0] += x.dot(b)),
                  (c[1] += w.dot(b));
              }
              var C,
                S,
                k = u[0][0] * u[1][1] - u[1][0] * u[0][1];
              if (s(k) > 1e-12) {
                var A = u[0][0] * c[1] - u[1][0] * c[0];
                (C = (c[0] * u[1][1] - c[1] * u[0][1]) / k), (S = A / k);
              } else {
                var P = u[0][0] + u[0][1],
                  I = u[1][0] + u[1][1];
                C = S = s(P) > 1e-12 ? c[0] / P : s(I) > 1e-12 ? c[1] / I : 0;
              }
              var E,
                T,
                L = h.getDistance(o),
                M = 1e-12 * L;
              if (C < M || S < M) C = S = L / 3;
              else {
                var N = h.subtract(o);
                (E = n.normalize(C)),
                  (T = r.normalize(S)),
                  E.dot(N) - T.dot(N) > L * L &&
                    ((C = S = L / 3), (E = T = null));
              }
              return [
                o,
                o.add(E || n.normalize(C)),
                h.add(T || r.normalize(S)),
                h,
              ];
            },
            reparameterize: function(t, e, i, n) {
              for (var r = t; r <= e; r++)
                i[r - t] = this.findRoot(n, this.points[r], i[r - t]);
              r = 1;
              for (var s = i.length; r < s; r++)
                if (i[r] <= i[r - 1]) return !1;
              return !0;
            },
            findRoot: function(t, e, i) {
              for (var n = [], r = [], s = 0; s <= 2; s++)
                n[s] = t[s + 1].subtract(t[s]).multiply(3);
              for (s = 0; s <= 1; s++)
                r[s] = n[s + 1].subtract(n[s]).multiply(2);
              var a = this.evaluate(3, t, i),
                o = this.evaluate(2, n, i),
                h = this.evaluate(1, r, i),
                u = a.subtract(e),
                c = o.dot(o) + u.dot(h);
              return _.isZero(c) ? i : i - u.dot(o) / c;
            },
            evaluate: function(t, e, i) {
              for (var n = e.slice(), r = 1; r <= t; r++)
                for (var s = 0; s <= t - r; s++)
                  n[s] = n[s].multiply(1 - i).add(n[s + 1].multiply(i));
              return n[0];
            },
            chordLengthParameterize: function(t, e) {
              for (var i = [0], n = t + 1; n <= e; n++)
                i[n - t] =
                  i[n - t - 1] + this.points[n].getDistance(this.points[n - 1]);
              n = 1;
              for (var r = e - t; n <= r; n++) i[n] /= i[r];
              return i;
            },
            findMaxError: function(t, e, i, n) {
              for (
                var r = Math.floor((e - t + 1) / 2), s = 0, a = t + 1;
                a < e;
                a++
              ) {
                var o = this.evaluate(3, i, n[a - t]).subtract(this.points[a]),
                  h = o.x * o.x + o.y * o.y;
                h >= s && ((s = h), (r = a));
              }
              return { error: s, index: r };
            },
          }),
          H = P.extend({
            _class: 'TextItem',
            _applyMatrix: !1,
            _canApplyMatrix: !1,
            _serializeFields: { content: null },
            _boundsOptions: { stroke: !1, handle: !1 },
            initialize: function(t) {
              (this._content = ''), (this._lines = []);
              var e = t && l.isPlainObject(t) && t.x === h && t.y === h;
              this._initialize(e && t, !e && m.read(arguments));
            },
            _equals: function(t) {
              return this._content === t._content;
            },
            copyContent: function(t) {
              this.setContent(t._content);
            },
            getContent: function() {
              return this._content;
            },
            setContent: function(t) {
              (this._content = '' + t),
                (this._lines = this._content.split(/\r\n|\n|\r/gm)),
                this._changed(265);
            },
            isEmpty: function() {
              return !this._content;
            },
            getCharacterStyle: '#getStyle',
            setCharacterStyle: '#setStyle',
            getParagraphStyle: '#getStyle',
            setParagraphStyle: '#setStyle',
          }),
          G = H.extend({
            _class: 'PointText',
            initialize: function() {
              H.apply(this, arguments);
            },
            getPoint: function() {
              var t = this._matrix.getTranslation();
              return new y(t.x, t.y, this, 'setPoint');
            },
            setPoint: function() {
              var t = m.read(arguments);
              this.translate(t.subtract(this._matrix.getTranslation()));
            },
            _draw: function(t, e, i) {
              if (this._content) {
                this._setStyles(t, e, i);
                var n = this._lines,
                  r = this._style,
                  s = r.hasFill(),
                  a = r.hasStroke(),
                  o = r.getLeading(),
                  h = t.shadowColor;
                (t.font = r.getFontStyle()),
                  (t.textAlign = r.getJustification());
                for (var u = 0, c = n.length; u < c; u++) {
                  t.shadowColor = h;
                  var l = n[u];
                  s && (t.fillText(l, 0, 0), (t.shadowColor = 'rgba(0,0,0,0)')),
                    a && t.strokeText(l, 0, 0),
                    t.translate(0, o);
                }
              }
            },
            _getBounds: function(t, e) {
              var i = this._style,
                n = this._lines,
                r = n.length,
                s = i.getJustification(),
                a = i.getLeading(),
                o = this.getView().getTextWidth(i.getFontStyle(), n),
                h = 0;
              'left' !== s && (h -= o / ('center' === s ? 2 : 1));
              var u = new b(h, r ? -0.75 * a : 0, o, r * a);
              return t ? t._transformBounds(u, u) : u;
            },
          }),
          W = l.extend(
            new function() {
              var t,
                e = {
                  gray: ['gray'],
                  rgb: ['red', 'green', 'blue'],
                  hsb: ['hue', 'saturation', 'brightness'],
                  hsl: ['hue', 'saturation', 'lightness'],
                  gradient: ['gradient', 'origin', 'destination', 'highlight'],
                },
                i = {},
                n = {};
              var r = [
                  [0, 3, 1],
                  [2, 0, 1],
                  [1, 0, 3],
                  [1, 2, 0],
                  [3, 1, 0],
                  [0, 1, 2],
                ],
                s = {
                  'rgb-hsb': function(t, e, i) {
                    var n = Math.max(t, e, i),
                      r = n - Math.min(t, e, i);
                    return [
                      0 === r
                        ? 0
                        : 60 *
                          (n == t
                            ? (e - i) / r + (e < i ? 6 : 0)
                            : n == e
                              ? (i - t) / r + 2
                              : (t - e) / r + 4),
                      0 === n ? 0 : r / n,
                      n,
                    ];
                  },
                  'hsb-rgb': function(t, e, i) {
                    var n,
                      s = (t = ((t / 60) % 6 + 6) % 6) - (n = Math.floor(t)),
                      a = [
                        i,
                        i * (1 - e),
                        i * (1 - e * s),
                        i * (1 - e * (1 - s)),
                      ];
                    return [a[(n = r[n])[0]], a[n[1]], a[n[2]]];
                  },
                  'rgb-hsl': function(t, e, i) {
                    var n = Math.max(t, e, i),
                      r = Math.min(t, e, i),
                      s = n - r,
                      a = 0 === s,
                      o = (n + r) / 2;
                    return [
                      a
                        ? 0
                        : 60 *
                          (n == t
                            ? (e - i) / s + (e < i ? 6 : 0)
                            : n == e
                              ? (i - t) / s + 2
                              : (t - e) / s + 4),
                      a ? 0 : o < 0.5 ? s / (n + r) : s / (2 - n - r),
                      o,
                    ];
                  },
                  'hsl-rgb': function(t, e, i) {
                    if (((t = ((t / 360) % 1 + 1) % 1), 0 === e))
                      return [i, i, i];
                    for (
                      var n = [t + 1 / 3, t, t - 1 / 3],
                        r = i < 0.5 ? i * (1 + e) : i + e - i * e,
                        s = 2 * i - r,
                        a = [],
                        o = 0;
                      o < 3;
                      o++
                    ) {
                      var h = n[o];
                      h < 0 && (h += 1),
                        h > 1 && (h -= 1),
                        (a[o] =
                          6 * h < 1
                            ? s + 6 * (r - s) * h
                            : 2 * h < 1
                              ? r
                              : 3 * h < 2
                                ? s + (r - s) * (2 / 3 - h) * 6
                                : s);
                    }
                    return a;
                  },
                  'rgb-gray': function(t, e, i) {
                    return [0.2989 * t + 0.587 * e + 0.114 * i];
                  },
                  'gray-rgb': function(t) {
                    return [t, t, t];
                  },
                  'gray-hsb': function(t) {
                    return [0, 0, t];
                  },
                  'gray-hsl': function(t) {
                    return [0, 0, t];
                  },
                  'gradient-rgb': function() {
                    return [];
                  },
                  'rgb-gradient': function() {
                    return [];
                  },
                };
              return l.each(
                e,
                function(t, n) {
                  (i[n] = []),
                    l.each(
                      t,
                      function(t, r) {
                        var s = l.capitalize(t),
                          a = /^(hue|saturation)$/.test(t),
                          o = (i[n][r] =
                            'gradient' === t
                              ? function(t) {
                                  var e = this._components[0];
                                  return (
                                    e !==
                                      (t = Z.read(
                                        Array.isArray(t) ? t : arguments,
                                        0,
                                        { readNull: !0 }
                                      )) &&
                                      (e && e._removeOwner(this),
                                      t && t._addOwner(this)),
                                    t
                                  );
                                }
                              : 'gradient' === n
                                ? function() {
                                    return m.read(arguments, 0, {
                                      readNull: 'highlight' === t,
                                      clone: !0,
                                    });
                                  }
                                : function(t) {
                                    return null == t || isNaN(t) ? 0 : t;
                                  });
                        (this['get' + s] = function() {
                          return this._type === n ||
                            (a && /^hs[bl]$/.test(this._type))
                            ? this._components[r]
                            : this._convert(n)[r];
                        }),
                          (this['set' + s] = function(t) {
                            this._type === n ||
                              (a && /^hs[bl]$/.test(this._type)) ||
                              ((this._components = this._convert(n)),
                              (this._properties = e[n]),
                              (this._type = n)),
                              (this._components[r] = o.call(this, t)),
                              this._changed();
                          });
                      },
                      this
                    );
                },
                {
                  _class: 'Color',
                  _readIndex: !0,
                  initialize: function r(s) {
                    var a,
                      o,
                      h,
                      c,
                      f = arguments,
                      d = this.__read,
                      p = 0;
                    Array.isArray(s) && (s = (f = s)[0]);
                    var g = null != s && typeof s;
                    if (
                      ('string' === g &&
                        s in e &&
                        ((a = s),
                        (s = f[1]),
                        Array.isArray(s)
                          ? ((o = s), (h = f[2]))
                          : (d && (p = 1),
                            (f = l.slice(f, 1)),
                            (g = typeof s))),
                      !o)
                    ) {
                      if (
                        (c =
                          'number' === g
                            ? f
                            : 'object' === g && null != s.length
                              ? s
                              : null)
                      ) {
                        a || (a = c.length >= 3 ? 'rgb' : 'gray');
                        var _ = e[a].length;
                        (h = c[_]),
                          d &&
                            (p +=
                              c === arguments ? _ + (null != h ? 1 : 0) : 1),
                          c.length > _ && (c = l.slice(c, 0, _));
                      } else if ('string' === g)
                        (a = 'rgb'),
                          4 ===
                            (o = (function(e) {
                              var i,
                                r = e.match(/^#(\w{1,2})(\w{1,2})(\w{1,2})$/);
                              if (r) {
                                i = [0, 0, 0];
                                for (var s = 0; s < 3; s++) {
                                  var a = r[s + 1];
                                  i[s] =
                                    parseInt(1 == a.length ? a + a : a, 16) /
                                    255;
                                }
                              } else if ((r = e.match(/^rgba?\((.*)\)$/))) {
                                s = 0;
                                for (
                                  var o = (i = r[1].split(',')).length;
                                  s < o;
                                  s++
                                )
                                  (a = +i[s]), (i[s] = s < 3 ? a / 255 : a);
                              } else if (u) {
                                var h = n[e];
                                if (!h) {
                                  t ||
                                    ((t = ot.getContext(
                                      1,
                                      1
                                    )).globalCompositeOperation =
                                      'copy'),
                                    (t.fillStyle = 'rgba(0,0,0,0)'),
                                    (t.fillStyle = e),
                                    t.fillRect(0, 0, 1, 1);
                                  var c = t.getImageData(0, 0, 1, 1).data;
                                  h = n[e] = [
                                    c[0] / 255,
                                    c[1] / 255,
                                    c[2] / 255,
                                  ];
                                }
                                i = h.slice();
                              } else i = [0, 0, 0];
                              return i;
                            })(s)).length && ((h = o[3]), o.length--);
                      else if ('object' === g)
                        if (s.constructor === r) {
                          if (
                            ((a = s._type),
                            (o = s._components.slice()),
                            (h = s._alpha),
                            'gradient' === a)
                          )
                            for (var v = 1, m = o.length; v < m; v++) {
                              var y = o[v];
                              y && (o[v] = y.clone());
                            }
                        } else if (s.constructor === Z)
                          (a = 'gradient'), (c = f);
                        else {
                          var x =
                              e[
                                (a =
                                  'hue' in s
                                    ? 'lightness' in s
                                      ? 'hsl'
                                      : 'hsb'
                                    : 'gradient' in s ||
                                      'stops' in s ||
                                      'radial' in s
                                      ? 'gradient'
                                      : 'gray' in s
                                        ? 'gray'
                                        : 'rgb')
                              ],
                            w = i[a];
                          this._components = o = [];
                          for (v = 0, m = x.length; v < m; v++) {
                            null == (b = s[x[v]]) &&
                              !v &&
                              'gradient' === a &&
                              'stops' in s &&
                              (b = { stops: s.stops, radial: s.radial }),
                              null != (b = w[v].call(this, b)) && (o[v] = b);
                          }
                          h = s.alpha;
                        }
                      d && a && (p = 1);
                    }
                    if (((this._type = a || 'rgb'), !o)) {
                      this._components = o = [];
                      for (v = 0, m = (w = i[this._type]).length; v < m; v++) {
                        var b;
                        null != (b = w[v].call(this, c && c[v])) && (o[v] = b);
                      }
                    }
                    return (
                      (this._components = o),
                      (this._properties = e[this._type]),
                      (this._alpha = h),
                      d && (this.__read = p),
                      this
                    );
                  },
                  set: '#initialize',
                  _serialize: function(t, e) {
                    var i = this.getComponents();
                    return l.serialize(
                      /^(gray|rgb)$/.test(this._type)
                        ? i
                        : [this._type].concat(i),
                      t,
                      !0,
                      e
                    );
                  },
                  _changed: function() {
                    (this._canvasStyle = null),
                      this._owner && this._owner._changed(65);
                  },
                  _convert: function(t) {
                    var e;
                    return this._type === t
                      ? this._components.slice()
                      : (e = s[this._type + '-' + t])
                        ? e.apply(this, this._components)
                        : s['rgb-' + t].apply(
                            this,
                            s[this._type + '-rgb'].apply(this, this._components)
                          );
                  },
                  convert: function(t) {
                    return new W(t, this._convert(t), this._alpha);
                  },
                  getType: function() {
                    return this._type;
                  },
                  setType: function(t) {
                    (this._components = this._convert(t)),
                      (this._properties = e[t]),
                      (this._type = t);
                  },
                  getComponents: function() {
                    var t = this._components.slice();
                    return null != this._alpha && t.push(this._alpha), t;
                  },
                  getAlpha: function() {
                    return null != this._alpha ? this._alpha : 1;
                  },
                  setAlpha: function(t) {
                    (this._alpha =
                      null == t ? null : Math.min(Math.max(t, 0), 1)),
                      this._changed();
                  },
                  hasAlpha: function() {
                    return null != this._alpha;
                  },
                  equals: function(t) {
                    var e = l.isPlainValue(t, !0) ? W.read(arguments) : t;
                    return (
                      e === this ||
                      (e &&
                        this._class === e._class &&
                        this._type === e._type &&
                        this.getAlpha() === e.getAlpha() &&
                        l.equals(this._components, e._components)) ||
                      !1
                    );
                  },
                  toString: function() {
                    for (
                      var t = this._properties,
                        e = [],
                        i = 'gradient' === this._type,
                        n = g.instance,
                        r = 0,
                        s = t.length;
                      r < s;
                      r++
                    ) {
                      var a = this._components[r];
                      null != a && e.push(t[r] + ': ' + (i ? a : n.number(a)));
                    }
                    return (
                      null != this._alpha &&
                        e.push('alpha: ' + n.number(this._alpha)),
                      '{ ' + e.join(', ') + ' }'
                    );
                  },
                  toCSS: function(t) {
                    var e = this._convert('rgb'),
                      i = t || null == this._alpha ? 1 : this._alpha;
                    function n(t) {
                      return Math.round(255 * (t < 0 ? 0 : t > 1 ? 1 : t));
                    }
                    return (
                      (e = [n(e[0]), n(e[1]), n(e[2])]),
                      i < 1 && e.push(i < 0 ? 0 : i),
                      t
                        ? '#' +
                          ((1 << 24) + (e[0] << 16) + (e[1] << 8) + e[2])
                            .toString(16)
                            .slice(1)
                        : (4 == e.length ? 'rgba(' : 'rgb(') + e.join(',') + ')'
                    );
                  },
                  toCanvasStyle: function(t, e) {
                    if (this._canvasStyle) return this._canvasStyle;
                    if ('gradient' !== this._type)
                      return (this._canvasStyle = this.toCSS());
                    var i,
                      n = this._components,
                      r = n[0],
                      s = r._stops,
                      a = n[1],
                      o = n[2],
                      h = n[3],
                      u = e && e.inverted();
                    if (
                      (u &&
                        ((a = u._transformPoint(a)),
                        (o = u._transformPoint(o)),
                        h && (h = u._transformPoint(h))),
                      r._radial)
                    ) {
                      var c = o.getDistance(a);
                      if (h) {
                        var l = h.subtract(a);
                        l.getLength() > c && (h = a.add(l.normalize(c - 0.1)));
                      }
                      var f = h || a;
                      i = t.createRadialGradient(f.x, f.y, 0, a.x, a.y, c);
                    } else i = t.createLinearGradient(a.x, a.y, o.x, o.y);
                    for (var d = 0, p = s.length; d < p; d++) {
                      var g = s[d],
                        _ = g._offset;
                      i.addColorStop(
                        null == _ ? d / (p - 1) : _,
                        g._color.toCanvasStyle()
                      );
                    }
                    return (this._canvasStyle = i);
                  },
                  transform: function(t) {
                    if ('gradient' === this._type) {
                      for (
                        var e = this._components, i = 1, n = e.length;
                        i < n;
                        i++
                      ) {
                        var r = e[i];
                        t._transformPoint(r, r, !0);
                      }
                      this._changed();
                    }
                  },
                  statics: {
                    _types: e,
                    random: function() {
                      var t = Math.random;
                      return new W(t(), t(), t());
                    },
                  },
                }
              );
            }(),
            new function() {
              return l.each(
                {
                  add: function(t, e) {
                    return t + e;
                  },
                  subtract: function(t, e) {
                    return t - e;
                  },
                  multiply: function(t, e) {
                    return t * e;
                  },
                  divide: function(t, e) {
                    return t / e;
                  },
                },
                function(t, e) {
                  this[e] = function(e) {
                    e = W.read(arguments);
                    for (
                      var i = this._type,
                        n = this._components,
                        r = e._convert(i),
                        s = 0,
                        a = n.length;
                      s < a;
                      s++
                    )
                      r[s] = t(n[s], r[s]);
                    return new W(
                      i,
                      r,
                      null != this._alpha ? t(this._alpha, e.getAlpha()) : null
                    );
                  };
                },
                {}
              );
            }()
          ),
          Z = l.extend({
            _class: 'Gradient',
            initialize: function(t, e) {
              (this._id = v.get()),
                t && l.isPlainObject(t) && (this.set(t), (t = e = null)),
                null == this._stops && this.setStops(t || ['white', 'black']),
                null == this._radial &&
                  this.setRadial(
                    ('string' == typeof e && 'radial' === e) || e || !1
                  );
            },
            _serialize: function(t, e) {
              return e.add(this, function() {
                return l.serialize([this._stops, this._radial], t, !0, e);
              });
            },
            _changed: function() {
              for (
                var t = 0, e = this._owners && this._owners.length;
                t < e;
                t++
              )
                this._owners[t]._changed();
            },
            _addOwner: function(t) {
              this._owners || (this._owners = []), this._owners.push(t);
            },
            _removeOwner: function(t) {
              var e = this._owners ? this._owners.indexOf(t) : -1;
              -1 != e &&
                (this._owners.splice(e, 1),
                this._owners.length || (this._owners = h));
            },
            clone: function() {
              for (var t = [], e = 0, i = this._stops.length; e < i; e++)
                t[e] = this._stops[e].clone();
              return new Z(t, this._radial);
            },
            getStops: function() {
              return this._stops;
            },
            setStops: function(t) {
              if (t.length < 2)
                throw new Error(
                  'Gradient stop list needs to contain at least two stops.'
                );
              var e = this._stops;
              if (e) for (var i = 0, n = e.length; i < n; i++) e[i]._owner = h;
              for (
                i = 0,
                  n = (e = this._stops = $.readList(t, 0, { clone: !0 }))
                    .length;
                i < n;
                i++
              )
                e[i]._owner = this;
              this._changed();
            },
            getRadial: function() {
              return this._radial;
            },
            setRadial: function(t) {
              (this._radial = t), this._changed();
            },
            equals: function(t) {
              if (t === this) return !0;
              if (t && this._class === t._class) {
                var e = this._stops,
                  i = t._stops,
                  n = e.length;
                if (n === i.length) {
                  for (var r = 0; r < n; r++) if (!e[r].equals(i[r])) return !1;
                  return !0;
                }
              }
              return !1;
            },
          }),
          $ = l.extend({
            _class: 'GradientStop',
            initialize: function(t, e) {
              var i = t,
                n = e;
              'object' == typeof t &&
                e === h &&
                (Array.isArray(t) && 'number' != typeof t[0]
                  ? ((i = t[0]), (n = t[1]))
                  : ('color' in t || 'offset' in t || 'rampPoint' in t) &&
                    ((i = t.color), (n = t.offset || t.rampPoint || 0))),
                this.setColor(i),
                this.setOffset(n);
            },
            clone: function() {
              return new $(this._color.clone(), this._offset);
            },
            _serialize: function(t, e) {
              var i = this._color,
                n = this._offset;
              return l.serialize(null == n ? [i] : [i, n], t, !0, e);
            },
            _changed: function() {
              this._owner && this._owner._changed(65);
            },
            getOffset: function() {
              return this._offset;
            },
            setOffset: function(t) {
              (this._offset = t), this._changed();
            },
            getRampPoint: '#getOffset',
            setRampPoint: '#setOffset',
            getColor: function() {
              return this._color;
            },
            setColor: function() {
              var t = W.read(arguments, 0, { clone: !0 });
              t && (t._owner = this), (this._color = t), this._changed();
            },
            equals: function(t) {
              return (
                t === this ||
                (t &&
                  this._class === t._class &&
                  this._color.equals(t._color) &&
                  this._offset == t._offset) ||
                !1
              );
            },
          }),
          K = l.extend(
            new function() {
              var t = {
                  fillColor: null,
                  fillRule: 'nonzero',
                  strokeColor: null,
                  strokeWidth: 1,
                  strokeCap: 'butt',
                  strokeJoin: 'miter',
                  strokeScaling: !0,
                  miterLimit: 10,
                  dashOffset: 0,
                  dashArray: [],
                  shadowColor: null,
                  shadowBlur: 0,
                  shadowOffset: new m(),
                  selectedColor: null,
                },
                e = l.set({}, t, {
                  fontFamily: 'sans-serif',
                  fontWeight: 'normal',
                  fontSize: 12,
                  leading: null,
                  justification: 'left',
                }),
                i = l.set({}, e, { fillColor: new W() }),
                n = {
                  strokeWidth: 97,
                  strokeCap: 97,
                  strokeJoin: 97,
                  strokeScaling: 105,
                  miterLimit: 97,
                  fontFamily: 9,
                  fontWeight: 9,
                  fontSize: 9,
                  font: 9,
                  leading: 9,
                  justification: 9,
                },
                r = { beans: !0 },
                s = {
                  _class: 'Style',
                  beans: !0,
                  initialize: function(n, r, s) {
                    (this._values = {}),
                      (this._owner = r),
                      (this._project = (r && r._project) || s || a.project),
                      (this._defaults =
                        !r || r instanceof I ? e : r instanceof H ? i : t),
                      n && this.set(n);
                  },
                };
              return (
                l.each(e, function(t, e) {
                  var i = /Color$/.test(e),
                    a = 'shadowOffset' === e,
                    o = l.capitalize(e),
                    u = n[e],
                    c = 'set' + o,
                    f = 'get' + o;
                  (s[c] = function(t) {
                    var n = this._owner,
                      r = n && n._children;
                    if (r && r.length > 0 && !(n instanceof j))
                      for (var s = 0, a = r.length; s < a; s++)
                        r[s]._style[c](t);
                    else if (e in this._defaults) {
                      var o = this._values[e];
                      o !== t &&
                        (i &&
                          (o && o._owner !== h && (o._owner = h),
                          t &&
                            t.constructor === W &&
                            (t._owner && (t = t.clone()), (t._owner = n))),
                        (this._values[e] = t),
                        n && n._changed(u || 65));
                    }
                  }),
                    (s[f] = function(t) {
                      var n,
                        r = this._owner,
                        s = r && r._children;
                      if (
                        e in this._defaults &&
                        (!s || !s.length || t || r instanceof j)
                      )
                        if ((n = this._values[e]) === h)
                          (n = this._defaults[e]) && n.clone && (n = n.clone());
                        else {
                          var o = i ? W : a ? m : null;
                          !o ||
                            (n && n.constructor === o) ||
                            ((this._values[e] = n = o.read([n], 0, {
                              readNull: !0,
                              clone: !0,
                            })),
                            n && i && (n._owner = r));
                        }
                      else if (s)
                        for (var u = 0, c = s.length; u < c; u++) {
                          var d = s[u]._style[f]();
                          if (u) {
                            if (!l.equals(n, d)) return h;
                          } else n = d;
                        }
                      return n;
                    }),
                    (r[f] = function(t) {
                      return this._style[f](t);
                    }),
                    (r[c] = function(t) {
                      this._style[c](t);
                    });
                }),
                l.each(
                  { Font: 'FontFamily', WindingRule: 'FillRule' },
                  function(t, e) {
                    var i = 'get' + e,
                      n = 'set' + e;
                    (s[i] = r[i] = '#get' + t), (s[n] = r[n] = '#set' + t);
                  }
                ),
                P.inject(r),
                s
              );
            }(),
            {
              set: function(t) {
                var e = t instanceof K,
                  i = e ? t._values : t;
                if (i)
                  for (var n in i)
                    if (n in this._defaults) {
                      var r = i[n];
                      this[n] = r && e && r.clone ? r.clone() : r;
                    }
              },
              equals: function(t) {
                function e(t, e, i) {
                  var n = t._values,
                    r = e._values,
                    s = e._defaults;
                  for (var a in n) {
                    var o = n[a],
                      u = r[a];
                    if (!((i && a in r) || l.equals(o, u === h ? s[a] : u)))
                      return !1;
                  }
                  return !0;
                }
                return (
                  t === this ||
                  (t &&
                    this._class === t._class &&
                    e(this, t) &&
                    e(t, this, !0)) ||
                  !1
                );
              },
              hasFill: function() {
                var t = this.getFillColor();
                return !!t && t.alpha > 0;
              },
              hasStroke: function() {
                var t = this.getStrokeColor();
                return !!t && t.alpha > 0 && this.getStrokeWidth() > 0;
              },
              hasShadow: function() {
                var t = this.getShadowColor();
                return (
                  !!t &&
                  t.alpha > 0 &&
                  (this.getShadowBlur() > 0 || !this.getShadowOffset().isZero())
                );
              },
              getView: function() {
                return this._project._view;
              },
              getFontStyle: function() {
                var t = this.getFontSize();
                return (
                  this.getFontWeight() +
                  ' ' +
                  t +
                  (/[a-z]/i.test(t + '') ? ' ' : 'px ') +
                  this.getFontFamily()
                );
              },
              getFont: '#getFontFamily',
              setFont: '#setFontFamily',
              getLeading: function t() {
                var e = t.base.call(this),
                  i = this.getFontSize();
                return (
                  /pt|em|%|px/.test(i) && (i = this.getView().getPixelSize(i)),
                  null != e ? e : 1.2 * i
                );
              },
            }
          ),
          Q = new function() {
            function t(t, e, i, n) {
              for (
                var r = ['', 'webkit', 'moz', 'Moz', 'ms', 'o'],
                  s = e[0].toUpperCase() + e.substring(1),
                  a = 0;
                a < 6;
                a++
              ) {
                var o = r[a],
                  h = o ? o + s : e;
                if (h in t) {
                  if (!i) return t[h];
                  t[h] = n;
                  break;
                }
              }
            }
            return {
              getStyles: function(t) {
                var e = t && 9 !== t.nodeType ? t.ownerDocument : t,
                  i = e && e.defaultView;
                return i && i.getComputedStyle(t, '');
              },
              getBounds: function(t, e) {
                var i,
                  n = t.ownerDocument,
                  r = n.body,
                  s = n.documentElement;
                try {
                  i = t.getBoundingClientRect();
                } catch (t) {
                  i = { left: 0, top: 0, width: 0, height: 0 };
                }
                var a = i.left - (s.clientLeft || r.clientLeft || 0),
                  o = i.top - (s.clientTop || r.clientTop || 0);
                if (!e) {
                  var h = n.defaultView;
                  (a += h.pageXOffset || s.scrollLeft || r.scrollLeft),
                    (o += h.pageYOffset || s.scrollTop || r.scrollTop);
                }
                return new b(a, o, i.width, i.height);
              },
              getViewportBounds: function(t) {
                var e = t.ownerDocument,
                  i = e.defaultView,
                  n = e.documentElement;
                return new b(
                  0,
                  0,
                  i.innerWidth || n.clientWidth,
                  i.innerHeight || n.clientHeight
                );
              },
              getOffset: function(t, e) {
                return Q.getBounds(t, e).getPoint();
              },
              getSize: function(t) {
                return Q.getBounds(t, !0).getSize();
              },
              isInvisible: function(t) {
                return Q.getSize(t).equals(new x(0, 0));
              },
              isInView: function(t) {
                return (
                  !Q.isInvisible(t) &&
                  Q.getViewportBounds(t).intersects(Q.getBounds(t, !0))
                );
              },
              isInserted: function(t) {
                return c.body.contains(t);
              },
              getPrefixed: function(e, i) {
                return e && t(e, i);
              },
              setPrefixed: function(e, i, n) {
                if ('object' == typeof i) for (var r in i) t(e, r, !0, i[r]);
                else t(e, i, !0, n);
              },
            };
          }(),
          J = {
            add: function(t, e) {
              if (t)
                for (var i in e)
                  for (
                    var n = e[i], r = i.split(/[\s,]+/g), s = 0, a = r.length;
                    s < a;
                    s++
                  )
                    t.addEventListener(r[s], n, !1);
            },
            remove: function(t, e) {
              if (t)
                for (var i in e)
                  for (
                    var n = e[i], r = i.split(/[\s,]+/g), s = 0, a = r.length;
                    s < a;
                    s++
                  )
                    t.removeEventListener(r[s], n, !1);
            },
            getPoint: function(t) {
              var e = t.targetTouches
                ? t.targetTouches.length
                  ? t.targetTouches[0]
                  : t.changedTouches[0]
                : t;
              return new m(
                e.pageX || e.clientX + c.documentElement.scrollLeft,
                e.pageY || e.clientY + c.documentElement.scrollTop
              );
            },
            getTarget: function(t) {
              return t.target || t.srcElement;
            },
            getRelatedTarget: function(t) {
              return t.relatedTarget || t.toElement;
            },
            getOffset: function(t, e) {
              return J.getPoint(t).subtract(Q.getOffset(e || J.getTarget(t)));
            },
          };
        J.requestAnimationFrame = new function() {
          var t,
            e = Q.getPrefixed(u, 'requestAnimationFrame'),
            i = !1,
            n = [];
          function r() {
            var t = n;
            n = [];
            for (var s = 0, a = t.length; s < a; s++) t[s]();
            (i = e && n.length) && e(r);
          }
          return function(s) {
            n.push(s),
              e ? i || (e(r), (i = !0)) : t || (t = setInterval(r, 1e3 / 60));
          };
        }();
        var X = l.extend(
            f,
            {
              _class: 'View',
              initialize: function t(e, i) {
                function n(t) {
                  return i[t] || parseInt(i.getAttribute(t), 10);
                }
                function r() {
                  var t = Q.getSize(i);
                  return t.isNaN() || t.isZero()
                    ? new x(n('width'), n('height'))
                    : t;
                }
                var s;
                if (u && i) {
                  (this._id = i.getAttribute('id')),
                    null == this._id &&
                      i.setAttribute('id', (this._id = 'view-' + t._id++)),
                    J.add(i, this._viewEvents);
                  if (
                    (Q.setPrefixed(i.style, {
                      userDrag: 'none',
                      userSelect: 'none',
                      touchCallout: 'none',
                      contentZooming: 'none',
                      tapHighlightColor: 'rgba(0,0,0,0)',
                    }),
                    d.hasAttribute(i, 'resize'))
                  ) {
                    var o = this;
                    J.add(
                      u,
                      (this._windowEvents = {
                        resize: function() {
                          o.setViewSize(r());
                        },
                      })
                    );
                  }
                  if (
                    ((s = r()),
                    d.hasAttribute(i, 'stats') && 'undefined' != typeof Stats)
                  ) {
                    this._stats = new Stats();
                    var h = this._stats.domElement,
                      l = h.style,
                      f = Q.getOffset(i);
                    (l.position = 'absolute'),
                      (l.left = f.x + 'px'),
                      (l.top = f.y + 'px'),
                      c.body.appendChild(h);
                  }
                } else (s = new x(i)), (i = null);
                (this._project = e),
                  (this._scope = e._scope),
                  (this._element = i),
                  this._pixelRatio ||
                    (this._pixelRatio = (u && u.devicePixelRatio) || 1),
                  this._setElementSize(s.width, s.height),
                  (this._viewSize = s),
                  t._views.push(this),
                  (t._viewsById[this._id] = this),
                  ((this._matrix = new S())._owner = this),
                  t._focused || (t._focused = this),
                  (this._frameItems = {}),
                  (this._frameItemCount = 0),
                  (this._itemEvents = { native: {}, virtual: {} }),
                  (this._autoUpdate = !a.agent.node),
                  (this._needsUpdate = !1);
              },
              remove: function() {
                if (!this._project) return !1;
                X._focused === this && (X._focused = null),
                  X._views.splice(X._views.indexOf(this), 1),
                  delete X._viewsById[this._id];
                var t = this._project;
                return (
                  t._view === this && (t._view = null),
                  J.remove(this._element, this._viewEvents),
                  J.remove(u, this._windowEvents),
                  (this._element = this._project = null),
                  this.off('frame'),
                  (this._animate = !1),
                  (this._frameItems = {}),
                  !0
                );
              },
              _events: l.each(
                P._itemHandlers.concat(['onResize', 'onKeyDown', 'onKeyUp']),
                function(t) {
                  this[t] = {};
                },
                {
                  onFrame: {
                    install: function() {
                      this.play();
                    },
                    uninstall: function() {
                      this.pause();
                    },
                  },
                }
              ),
              _animate: !1,
              _time: 0,
              _count: 0,
              getAutoUpdate: function() {
                return this._autoUpdate;
              },
              setAutoUpdate: function(t) {
                (this._autoUpdate = t), t && this.requestUpdate();
              },
              update: function() {},
              draw: function() {
                this.update();
              },
              requestUpdate: function() {
                if (!this._requested) {
                  var t = this;
                  J.requestAnimationFrame(function() {
                    if (((t._requested = !1), t._animate)) {
                      t.requestUpdate();
                      var e = t._element;
                      (Q.getPrefixed(c, 'hidden') &&
                        'true' !== d.getAttribute(e, 'keepalive')) ||
                        !Q.isInView(e) ||
                        t._handleFrame();
                    }
                    t._autoUpdate && t.update();
                  }),
                    (this._requested = !0);
                }
              },
              play: function() {
                (this._animate = !0), this.requestUpdate();
              },
              pause: function() {
                this._animate = !1;
              },
              _handleFrame: function() {
                a = this._scope;
                var t = Date.now() / 1e3,
                  e = this._last ? t - this._last : 0;
                (this._last = t),
                  this.emit(
                    'frame',
                    new l({
                      delta: e,
                      time: (this._time += e),
                      count: this._count++,
                    })
                  ),
                  this._stats && this._stats.update();
              },
              _animateItem: function(t, e) {
                var i = this._frameItems;
                e
                  ? ((i[t._id] = { item: t, time: 0, count: 0 }),
                    1 == ++this._frameItemCount &&
                      this.on('frame', this._handleFrameItems))
                  : (delete i[t._id],
                    0 == --this._frameItemCount &&
                      this.off('frame', this._handleFrameItems));
              },
              _handleFrameItems: function(t) {
                for (var e in this._frameItems) {
                  var i = this._frameItems[e];
                  i.item.emit(
                    'frame',
                    new l(t, { time: (i.time += t.delta), count: i.count++ })
                  );
                }
              },
              _changed: function() {
                this._project._changed(2049),
                  (this._bounds = this._decomposed = h);
              },
              getElement: function() {
                return this._element;
              },
              getPixelRatio: function() {
                return this._pixelRatio;
              },
              getResolution: function() {
                return 72 * this._pixelRatio;
              },
              getViewSize: function() {
                var t = this._viewSize;
                return new w(t.width, t.height, this, 'setViewSize');
              },
              setViewSize: function() {
                var t = x.read(arguments),
                  e = t.subtract(this._viewSize);
                e.isZero() ||
                  (this._setElementSize(t.width, t.height),
                  this._viewSize.set(t),
                  this._changed(),
                  this.emit('resize', { size: t, delta: e }),
                  this._autoUpdate && this.update());
              },
              _setElementSize: function(t, e) {
                var i = this._element;
                i &&
                  (i.width !== t && (i.width = t),
                  i.height !== e && (i.height = e));
              },
              getBounds: function() {
                return (
                  this._bounds ||
                    (this._bounds = this._matrix
                      .inverted()
                      ._transformBounds(new b(new m(), this._viewSize))),
                  this._bounds
                );
              },
              getSize: function() {
                return this.getBounds().getSize();
              },
              isVisible: function() {
                return Q.isInView(this._element);
              },
              isInserted: function() {
                return Q.isInserted(this._element);
              },
              getPixelSize: function(t) {
                var e,
                  i = this._element;
                if (i) {
                  var n = i.parentNode,
                    r = c.createElement('div');
                  (r.style.fontSize = t),
                    n.appendChild(r),
                    (e = parseFloat(Q.getStyles(r).fontSize)),
                    n.removeChild(r);
                } else e = parseFloat(e);
                return e;
              },
              getTextWidth: function(t, e) {
                return 0;
              },
            },
            l.each(
              ['rotate', 'scale', 'shear', 'skew'],
              function(t) {
                var e = 'rotate' === t;
                this[t] = function() {
                  var i = (e ? l : m).read(arguments),
                    n = m.read(arguments, 0, { readNull: !0 });
                  return this.transform(new S()[t](i, n || this.getCenter(!0)));
                };
              },
              {
                _decompose: function() {
                  return (
                    this._decomposed ||
                    (this._decomposed = this._matrix.decompose())
                  );
                },
                translate: function() {
                  var t = new S();
                  return this.transform(t.translate.apply(t, arguments));
                },
                getCenter: function() {
                  return this.getBounds().getCenter();
                },
                setCenter: function() {
                  var t = m.read(arguments);
                  this.translate(this.getCenter().subtract(t));
                },
                getZoom: function() {
                  var t = this._decompose(),
                    e = t && t.scaling;
                  return e ? (e.x + e.y) / 2 : 0;
                },
                setZoom: function(t) {
                  this.transform(
                    new S().scale(t / this.getZoom(), this.getCenter())
                  );
                },
                getRotation: function() {
                  var t = this._decompose();
                  return t && t.rotation;
                },
                setRotation: function(t) {
                  var e = this.getRotation();
                  null != e && null != t && this.rotate(t - e);
                },
                getScaling: function() {
                  var t = this._decompose(),
                    e = t && t.scaling;
                  return e ? new y(e.x, e.y, this, 'setScaling') : h;
                },
                setScaling: function() {
                  var t = this.getScaling(),
                    e = m.read(arguments, 0, { clone: !0, readNull: !0 });
                  t && e && this.scale(e.x / t.x, e.y / t.y);
                },
                getMatrix: function() {
                  return this._matrix;
                },
                setMatrix: function() {
                  var t = this._matrix;
                  t.initialize.apply(t, arguments);
                },
                transform: function(t) {
                  this._matrix.append(t);
                },
                scrollBy: function() {
                  this.translate(m.read(arguments).negate());
                },
              }
            ),
            {
              projectToView: function() {
                return this._matrix._transformPoint(m.read(arguments));
              },
              viewToProject: function() {
                return this._matrix._inverseTransform(m.read(arguments));
              },
              getEventPoint: function(t) {
                return this.viewToProject(J.getOffset(t, this._element));
              },
            },
            {
              statics: {
                _views: [],
                _viewsById: {},
                _id: 0,
                create: function(t, e) {
                  return (
                    c && 'string' == typeof e && (e = c.getElementById(e)),
                    new (u ? Y : X)(t, e)
                  );
                },
              },
            },
            new function() {
              if (u) {
                var t,
                  e,
                  i,
                  n,
                  r,
                  s = !1,
                  o = !1,
                  h = u.navigator;
                h.pointerEnabled || h.msPointerEnabled
                  ? ((i = 'pointerdown MSPointerDown'),
                    (n = 'pointermove MSPointerMove'),
                    (r = 'pointerup pointercancel MSPointerUp MSPointerCancel'))
                  : ((i = 'touchstart'),
                    (n = 'touchmove'),
                    (r = 'touchend touchcancel'),
                    ('ontouchstart' in u &&
                      h.userAgent.match(
                        /mobile|tablet|ip(ad|hone|od)|android|silk/i
                      )) ||
                      ((i += ' mousedown'),
                      (n += ' mousemove'),
                      (r += ' mouseup')));
                var l = {},
                  f = {
                    mouseout: function(t) {
                      var e = X._focused,
                        i = J.getRelatedTarget(t);
                      if (e && (!i || 'HTML' === i.nodeName)) {
                        var n = J.getOffset(t, e._element),
                          r = n.x,
                          s = Math.abs,
                          a = s(r),
                          o = a - (1 << 25);
                        (n.x = s(o) < a ? o * (r < 0 ? -1 : 1) : r),
                          I(e, t, e.viewToProject(n));
                      }
                    },
                    scroll: P,
                  };
                (l[i] = function(t) {
                  var e = (X._focused = A(t));
                  s || ((s = !0), e._handleMouseEvent('mousedown', t));
                }),
                  (f[n] = function(i) {
                    var n = X._focused;
                    if (!o) {
                      var r = A(i);
                      r
                        ? n !== r &&
                          (n && I(n, i), t || (t = n), (n = X._focused = e = r))
                        : e &&
                          e === n &&
                          (t && !t.isInserted() && (t = null),
                          (n = X._focused = t),
                          (t = null),
                          P());
                    }
                    n && I(n, i);
                  }),
                  (f[i] = function() {
                    o = !0;
                  }),
                  (f[r] = function(t) {
                    var e = X._focused;
                    e && s && e._handleMouseEvent('mouseup', t), (o = s = !1);
                  }),
                  J.add(c, f),
                  J.add(u, { load: P });
                var d,
                  p,
                  g,
                  _,
                  v,
                  m,
                  y,
                  x,
                  w = !1,
                  b = !1,
                  C = { doubleclick: 'click', mousedrag: 'mousemove' },
                  S = !1,
                  k = {
                    mousedown: {
                      mousedown: 1,
                      mousedrag: 1,
                      click: 1,
                      doubleclick: 1,
                    },
                    mouseup: {
                      mouseup: 1,
                      mousedrag: 1,
                      click: 1,
                      doubleclick: 1,
                    },
                    mousemove: {
                      mousedrag: 1,
                      mousemove: 1,
                      mouseenter: 1,
                      mouseleave: 1,
                    },
                  };
                return {
                  _viewEvents: l,
                  _handleMouseEvent: function(t, e, i) {
                    var n = this._itemEvents,
                      r = n.native[t],
                      a = 'mousemove' === t,
                      o = this._scope.tool,
                      h = this;
                    function u(t) {
                      return (
                        n.virtual[t] || h.responds(t) || (o && o.responds(t))
                      );
                    }
                    a && s && u('mousedrag') && (t = 'mousedrag'),
                      i || (i = this.getEventPoint(e));
                    var c = this.getBounds().contains(i),
                      l =
                        r &&
                        c &&
                        h._project.hitTest(i, {
                          tolerance: 0,
                          fill: !0,
                          stroke: !0,
                        }),
                      f = (l && l.item) || null,
                      C = !1,
                      k = {};
                    if (
                      ((k[t.substr(5)] = !0),
                      r &&
                        f !== _ &&
                        (_ && E(_, null, 'mouseleave', e, i),
                        f && E(f, null, 'mouseenter', e, i),
                        (_ = f)),
                      S ^ c &&
                        (E(this, null, c ? 'mouseenter' : 'mouseleave', e, i),
                        c ? this : null,
                        (C = !0)),
                      (!c && !k.drag) ||
                        i.equals(p) ||
                        (T(this, f, a ? t : 'mousemove', e, i, p), (C = !0)),
                      (S = c),
                      (k.down && c) || (k.up && d))
                    ) {
                      if ((T(this, f, t, e, i, d), k.down)) {
                        if (
                          ((x = f === m && Date.now() - y < 300),
                          (g = m = f),
                          !b && f)
                        ) {
                          for (var A = f; A && !A.responds('mousedrag'); )
                            A = A._parent;
                          A && (v = f);
                        }
                        d = i;
                      } else
                        k.up &&
                          (b ||
                            f !== g ||
                            ((y = Date.now()),
                            T(this, f, x ? 'doubleclick' : 'click', e, i, d),
                            (x = !1)),
                          (g = v = null));
                      (S = !1), (C = !0);
                    }
                    (p = i),
                      C && o && (w = o._handleMouseEvent(t, e, i, k) || w),
                      ((w && !k.move) || (k.down && u('mouseup'))) &&
                        e.preventDefault();
                  },
                  _handleKeyEvent: function(t, e, i, n) {
                    var r,
                      s = this._scope,
                      o = s.tool;
                    function h(o) {
                      o.responds(t) &&
                        ((a = s), o.emit(t, (r = r || new et(t, e, i, n))));
                    }
                    this.isVisible() && (h(this), o && o.responds(t) && h(o));
                  },
                  _countItemEvent: function(t, e) {
                    var i = this._itemEvents,
                      n = i.native,
                      r = i.virtual;
                    for (var s in k) n[s] = (n[s] || 0) + (k[s][t] || 0) * e;
                    r[t] = (r[t] || 0) + e;
                  },
                  statics: { updateFocus: P },
                };
              }
              function A(t) {
                var e = J.getTarget(t);
                return e.getAttribute && X._viewsById[e.getAttribute('id')];
              }
              function P() {
                var t = X._focused;
                if (!t || !t.isVisible())
                  for (var i = 0, n = X._views.length; i < n; i++)
                    if ((t = X._views[i]).isVisible()) {
                      X._focused = e = t;
                      break;
                    }
              }
              function I(t, e, i) {
                t._handleMouseEvent('mousemove', e, i);
              }
              function E(t, e, i, n, r, s, a) {
                var o,
                  h = !1;
                function u(t, i) {
                  if (t.responds(i)) {
                    if (
                      (o ||
                        (o = new nt(i, n, r, e || t, s ? r.subtract(s) : null)),
                      t.emit(i, o) &&
                        ((w = !0), o.prevented && (b = !0), o.stopped))
                    )
                      return (h = !0);
                  } else {
                    var a = C[i];
                    if (a) return u(t, a);
                  }
                }
                for (; t && t !== a && !u(t, i); ) t = t._parent;
                return h;
              }
              function T(t, e, i, n, r, s) {
                return (
                  t._project.removeOn(i),
                  (b = w = !1),
                  (v && E(v, null, i, n, r, s)) ||
                    (e &&
                      e !== v &&
                      !e.isDescendant(v) &&
                      E(e, null, i, n, r, s, v)) ||
                    E(t, v || e || t, i, n, r, s)
                );
              }
            }()
          ),
          Y = X.extend({
            _class: 'CanvasView',
            initialize: function(t, e) {
              if (!(e instanceof u.HTMLCanvasElement)) {
                var i = x.read(arguments, 1);
                if (i.isZero())
                  throw new Error(
                    'Cannot create CanvasView with the provided argument: ' +
                      l.slice(arguments, 1)
                  );
                e = ot.getCanvas(i);
              }
              var n = (this._context = e.getContext('2d'));
              if (
                (n.save(),
                (this._pixelRatio = 1),
                !/^off|false$/.test(d.getAttribute(e, 'hidpi')))
              ) {
                var r = u.devicePixelRatio || 1,
                  s = Q.getPrefixed(n, 'backingStorePixelRatio') || 1;
                this._pixelRatio = r / s;
              }
              X.call(this, t, e), (this._needsUpdate = !0);
            },
            remove: function t() {
              return this._context.restore(), t.base.call(this);
            },
            _setElementSize: function t(e, i) {
              var n = this._pixelRatio;
              if ((t.base.call(this, e * n, i * n), 1 !== n)) {
                var r = this._element,
                  s = this._context;
                if (!d.hasAttribute(r, 'resize')) {
                  var a = r.style;
                  (a.width = e + 'px'), (a.height = i + 'px');
                }
                s.restore(), s.save(), s.scale(n, n);
              }
            },
            getPixelSize: function t(e) {
              var i,
                n = a.agent;
              if (n && n.firefox) i = t.base.call(this, e);
              else {
                var r = this._context,
                  s = r.font;
                (r.font = e + ' serif'), (i = parseFloat(r.font)), (r.font = s);
              }
              return i;
            },
            getTextWidth: function(t, e) {
              var i = this._context,
                n = i.font,
                r = 0;
              i.font = t;
              for (var s = 0, a = e.length; s < a; s++)
                r = Math.max(r, i.measureText(e[s]).width);
              return (i.font = n), r;
            },
            update: function() {
              if (!this._needsUpdate) return !1;
              var t = this._project,
                e = this._context,
                i = this._viewSize;
              return (
                e.clearRect(0, 0, i.width + 1, i.height + 1),
                t && t.draw(e, this._matrix, this._pixelRatio),
                (this._needsUpdate = !1),
                !0
              );
            },
          }),
          tt = l.extend({
            _class: 'Event',
            initialize: function(t) {
              (this.event = t), (this.type = t && t.type);
            },
            prevented: !1,
            stopped: !1,
            preventDefault: function() {
              (this.prevented = !0), this.event.preventDefault();
            },
            stopPropagation: function() {
              (this.stopped = !0), this.event.stopPropagation();
            },
            stop: function() {
              this.stopPropagation(), this.preventDefault();
            },
            getTimeStamp: function() {
              return this.event.timeStamp;
            },
            getModifiers: function() {
              return it.modifiers;
            },
          }),
          et = tt.extend({
            _class: 'KeyEvent',
            initialize: function(t, e, i, n) {
              (this.type = t),
                (this.event = e),
                (this.key = i),
                (this.character = n);
            },
            toString: function() {
              return (
                "{ type: '" +
                this.type +
                "', key: '" +
                this.key +
                "', character: '" +
                this.character +
                "', modifiers: " +
                this.getModifiers() +
                ' }'
              );
            },
          }),
          it = new function() {
            var t,
              e,
              i = {
                '\t': 'tab',
                ' ': 'space',
                '\b': 'backspace',
                '': 'delete',
                Spacebar: 'space',
                Del: 'delete',
                Win: 'meta',
                Esc: 'escape',
              },
              n = { tab: '\t', space: ' ', enter: '\r' },
              r = {},
              s = {},
              o = new l({
                shift: !1,
                control: !1,
                alt: !1,
                meta: !1,
                capsLock: !1,
                space: !1,
              }).inject({
                option: {
                  get: function() {
                    return this.alt;
                  },
                },
                command: {
                  get: function() {
                    var t = a && a.agent;
                    return t && t.mac ? this.meta : this.control;
                  },
                },
              });
            function f(t) {
              var e = t.key || t.keyIdentifier;
              return (
                (e = /^U\+/.test(e)
                  ? String.fromCharCode(parseInt(e.substr(2), 16))
                  : /^Arrow[A-Z]/.test(e)
                    ? e.substr(5)
                    : 'Unidentified' === e || e === h
                      ? String.fromCharCode(t.keyCode)
                      : e),
                i[e] || (e.length > 1 ? l.hyphenate(e) : e.toLowerCase())
              );
            }
            function d(e, i, n, h) {
              var u,
                c = X._focused;
              if (
                ((r[i] = e),
                e ? (s[i] = n) : delete s[i],
                i.length > 1 && (u = l.camelize(i)) in o)
              ) {
                o[u] = e;
                var f = a && a.agent;
                if ('meta' === u && f && f.mac)
                  if (e) t = {};
                  else {
                    for (var p in t) p in s && d(!1, p, t[p], h);
                    t = null;
                  }
              } else e && t && (t[i] = n);
              c && c._handleKeyEvent(e ? 'keydown' : 'keyup', h, i, n);
            }
            return (
              J.add(c, {
                keydown: function(t) {
                  var i = f(t),
                    r = a && a.agent;
                  i.length > 1 ||
                  (r &&
                    r.chrome &&
                    (t.altKey || (r.mac && t.metaKey) || (!r.mac && t.ctrlKey)))
                    ? d(!0, i, n[i] || (i.length > 1 ? '' : i), t)
                    : (e = i);
                },
                keypress: function(t) {
                  if (e) {
                    var i = f(t),
                      n = t.charCode,
                      r =
                        n >= 32
                          ? String.fromCharCode(n)
                          : i.length > 1
                            ? ''
                            : i;
                    i !== e && (i = r.toLowerCase()),
                      d(!0, i, r, t),
                      (e = null);
                  }
                },
                keyup: function(t) {
                  var e = f(t);
                  e in s && d(!1, e, s[e], t);
                },
              }),
              J.add(u, {
                blur: function(t) {
                  for (var e in s) d(!1, e, s[e], t);
                },
              }),
              {
                modifiers: o,
                isDown: function(t) {
                  return !!r[t];
                },
              }
            );
          }(),
          nt = tt.extend({
            _class: 'MouseEvent',
            initialize: function(t, e, i, n, r) {
              (this.type = t),
                (this.event = e),
                (this.point = i),
                (this.target = n),
                (this.delta = r);
            },
            toString: function() {
              return (
                "{ type: '" +
                this.type +
                "', point: " +
                this.point +
                ', target: ' +
                this.target +
                (this.delta ? ', delta: ' + this.delta : '') +
                ', modifiers: ' +
                this.getModifiers() +
                ' }'
              );
            },
          }),
          rt = tt.extend({
            _class: 'ToolEvent',
            _item: null,
            initialize: function(t, e, i) {
              (this.tool = t), (this.type = e), (this.event = i);
            },
            _choosePoint: function(t, e) {
              return t || (e ? e.clone() : null);
            },
            getPoint: function() {
              return this._choosePoint(this._point, this.tool._point);
            },
            setPoint: function(t) {
              this._point = t;
            },
            getLastPoint: function() {
              return this._choosePoint(this._lastPoint, this.tool._lastPoint);
            },
            setLastPoint: function(t) {
              this._lastPoint = t;
            },
            getDownPoint: function() {
              return this._choosePoint(this._downPoint, this.tool._downPoint);
            },
            setDownPoint: function(t) {
              this._downPoint = t;
            },
            getMiddlePoint: function() {
              return !this._middlePoint && this.tool._lastPoint
                ? this.tool._point.add(this.tool._lastPoint).divide(2)
                : this._middlePoint;
            },
            setMiddlePoint: function(t) {
              this._middlePoint = t;
            },
            getDelta: function() {
              return !this._delta && this.tool._lastPoint
                ? this.tool._point.subtract(this.tool._lastPoint)
                : this._delta;
            },
            setDelta: function(t) {
              this._delta = t;
            },
            getCount: function() {
              return this.tool[
                /^mouse(down|up)$/.test(this.type) ? '_downCount' : '_moveCount'
              ];
            },
            setCount: function(t) {
              this.tool[
                /^mouse(down|up)$/.test(this.type) ? 'downCount' : 'count'
              ] = t;
            },
            getItem: function() {
              if (!this._item) {
                var t = this.tool._scope.project.hitTest(this.getPoint());
                if (t) {
                  for (
                    var e = t.item, i = e._parent;
                    /^(Group|CompoundPath)$/.test(i._class);

                  )
                    (e = i), (i = i._parent);
                  this._item = e;
                }
              }
              return this._item;
            },
            setItem: function(t) {
              this._item = t;
            },
            toString: function() {
              return (
                '{ type: ' +
                this.type +
                ', point: ' +
                this.getPoint() +
                ', count: ' +
                this.getCount() +
                ', modifiers: ' +
                this.getModifiers() +
                ' }'
              );
            },
          }),
          st = p.extend({
            _class: 'Tool',
            _list: 'tools',
            _reference: 'tool',
            _events: [
              'onMouseDown',
              'onMouseUp',
              'onMouseDrag',
              'onMouseMove',
              'onActivate',
              'onDeactivate',
              'onEditOptions',
              'onKeyDown',
              'onKeyUp',
            ],
            initialize: function(t) {
              p.call(this),
                (this._moveCount = -1),
                (this._downCount = -1),
                this.set(t);
            },
            getMinDistance: function() {
              return this._minDistance;
            },
            setMinDistance: function(t) {
              (this._minDistance = t),
                null != t &&
                  null != this._maxDistance &&
                  t > this._maxDistance &&
                  (this._maxDistance = t);
            },
            getMaxDistance: function() {
              return this._maxDistance;
            },
            setMaxDistance: function(t) {
              (this._maxDistance = t),
                null != this._minDistance &&
                  null != t &&
                  t < this._minDistance &&
                  (this._minDistance = t);
            },
            getFixedDistance: function() {
              return this._minDistance == this._maxDistance
                ? this._minDistance
                : null;
            },
            setFixedDistance: function(t) {
              this._minDistance = this._maxDistance = t;
            },
            _handleMouseEvent: function(t, e, i, n) {
              (a = this._scope),
                n.drag && !this.responds(t) && (t = 'mousemove');
              var r = n.move || n.drag,
                s = this.responds(t),
                o = this.minDistance,
                h = this.maxDistance,
                u = !1,
                c = this;
              function l(t, e) {
                var s = i,
                  a = r ? c._point : c._downPoint || s;
                if (r) {
                  if (c._moveCount && s.equals(a)) return !1;
                  if (a && (null != t || null != e)) {
                    var o = s.subtract(a),
                      h = o.getLength();
                    if (h < (t || 0)) return !1;
                    e && (s = a.add(o.normalize(Math.min(h, e))));
                  }
                  c._moveCount++;
                }
                return (
                  (c._point = s),
                  (c._lastPoint = a || s),
                  n.down &&
                    ((c._moveCount = -1), (c._downPoint = s), c._downCount++),
                  !0
                );
              }
              function f() {
                s && (u = c.emit(t, new rt(c, t, e)) || u);
              }
              if (n.down) l(), f();
              else if (n.up) l(null, h), f();
              else if (s) for (; l(o, h); ) f();
              return u;
            },
          }),
          at = {
            request: function(t) {
              var e = new o.XMLHttpRequest();
              return (
                e.open(
                  (t.method || 'get').toUpperCase(),
                  t.url,
                  l.pick(t.async, !0)
                ),
                t.mimeType && e.overrideMimeType(t.mimeType),
                (e.onload = function() {
                  var i = e.status;
                  0 === i || 200 === i
                    ? t.onLoad && t.onLoad.call(e, e.responseText)
                    : e.onerror();
                }),
                (e.onerror = function() {
                  var i = e.status,
                    n = 'Could not load "' + t.url + '" (Status: ' + i + ')';
                  if (!t.onError) throw new Error(n);
                  t.onError(n, i);
                }),
                e.send(null)
              );
            },
          },
          ot = {
            canvases: [],
            getCanvas: function(t, e) {
              if (!u) return null;
              var i,
                n = !0;
              'object' == typeof t && ((e = t.height), (t = t.width)),
                this.canvases.length
                  ? (i = this.canvases.pop())
                  : ((i = c.createElement('canvas')), (n = !1));
              var r = i.getContext('2d');
              if (!r)
                throw new Error(
                  'Canvas ' + i + ' is unable to provide a 2D context.'
                );
              return (
                i.width === t && i.height === e
                  ? n && r.clearRect(0, 0, t + 1, e + 1)
                  : ((i.width = t), (i.height = e)),
                r.save(),
                i
              );
            },
            getContext: function(t, e) {
              var i = this.getCanvas(t, e);
              return i ? i.getContext('2d') : null;
            },
            release: function(t) {
              var e = t && t.canvas ? t.canvas : t;
              e &&
                e.getContext &&
                (e.getContext('2d').restore(), this.canvases.push(e));
            },
          },
          ht = new function() {
            var t,
              e,
              i,
              n,
              r,
              s,
              a,
              o,
              h,
              u,
              c,
              f = Math.min,
              d = Math.max,
              p = Math.abs;
            function g(t, e, i) {
              return 0.2989 * t + 0.587 * e + 0.114 * i;
            }
            function _(t, e, i, n) {
              var r = n - g(t, e, i),
                s = ((n = g((h = t + r), (u = e + r), (c = i + r))),
                f(h, u, c)),
                a = d(h, u, c);
              if (s < 0) {
                var o = n - s;
                (h = n + (h - n) * n / o),
                  (u = n + (u - n) * n / o),
                  (c = n + (c - n) * n / o);
              }
              if (a > 255) {
                var l = 255 - n,
                  p = a - n;
                (h = n + (h - n) * l / p),
                  (u = n + (u - n) * l / p),
                  (c = n + (c - n) * l / p);
              }
            }
            function v(t, e, i) {
              return d(t, e, i) - f(t, e, i);
            }
            function m(t, e, i, n) {
              var r,
                s = [t, e, i],
                a = d(t, e, i),
                o = f(t, e, i);
              (r =
                0 ===
                f(
                  (o = o === t ? 0 : o === e ? 1 : 2),
                  (a = a === t ? 0 : a === e ? 1 : 2)
                )
                  ? 1 === d(o, a)
                    ? 2
                    : 1
                  : 0),
                s[a] > s[o]
                  ? ((s[r] = (s[r] - s[o]) * n / (s[a] - s[o])), (s[a] = n))
                  : (s[r] = s[a] = 0),
                (s[o] = 0),
                (h = s[0]),
                (u = s[1]),
                (c = s[2]);
            }
            var y = {
                multiply: function() {
                  (h = r * t / 255), (u = s * e / 255), (c = a * i / 255);
                },
                screen: function() {
                  (h = r + t - r * t / 255),
                    (u = s + e - s * e / 255),
                    (c = a + i - a * i / 255);
                },
                overlay: function() {
                  (h =
                    r < 128
                      ? 2 * r * t / 255
                      : 255 - 2 * (255 - r) * (255 - t) / 255),
                    (u =
                      s < 128
                        ? 2 * s * e / 255
                        : 255 - 2 * (255 - s) * (255 - e) / 255),
                    (c =
                      a < 128
                        ? 2 * a * i / 255
                        : 255 - 2 * (255 - a) * (255 - i) / 255);
                },
                'soft-light': function() {
                  var n = t * r / 255;
                  (h = n + r * (255 - (255 - r) * (255 - t) / 255 - n) / 255),
                    (u =
                      (n = e * s / 255) +
                      s * (255 - (255 - s) * (255 - e) / 255 - n) / 255),
                    (c =
                      (n = i * a / 255) +
                      a * (255 - (255 - a) * (255 - i) / 255 - n) / 255);
                },
                'hard-light': function() {
                  (h =
                    t < 128
                      ? 2 * t * r / 255
                      : 255 - 2 * (255 - t) * (255 - r) / 255),
                    (u =
                      e < 128
                        ? 2 * e * s / 255
                        : 255 - 2 * (255 - e) * (255 - s) / 255),
                    (c =
                      i < 128
                        ? 2 * i * a / 255
                        : 255 - 2 * (255 - i) * (255 - a) / 255);
                },
                'color-dodge': function() {
                  (h =
                    0 === r
                      ? 0
                      : 255 === t
                        ? 255
                        : f(255, 255 * r / (255 - t))),
                    (u =
                      0 === s
                        ? 0
                        : 255 === e
                          ? 255
                          : f(255, 255 * s / (255 - e))),
                    (c =
                      0 === a
                        ? 0
                        : 255 === i
                          ? 255
                          : f(255, 255 * a / (255 - i)));
                },
                'color-burn': function() {
                  (h =
                    255 === r
                      ? 255
                      : 0 === t
                        ? 0
                        : d(0, 255 - 255 * (255 - r) / t)),
                    (u =
                      255 === s
                        ? 255
                        : 0 === e
                          ? 0
                          : d(0, 255 - 255 * (255 - s) / e)),
                    (c =
                      255 === a
                        ? 255
                        : 0 === i
                          ? 0
                          : d(0, 255 - 255 * (255 - a) / i));
                },
                darken: function() {
                  (h = r < t ? r : t), (u = s < e ? s : e), (c = a < i ? a : i);
                },
                lighten: function() {
                  (h = r > t ? r : t), (u = s > e ? s : e), (c = a > i ? a : i);
                },
                difference: function() {
                  (h = r - t) < 0 && (h = -h),
                    (u = s - e) < 0 && (u = -u),
                    (c = a - i) < 0 && (c = -c);
                },
                exclusion: function() {
                  (h = r + t * (255 - r - r) / 255),
                    (u = s + e * (255 - s - s) / 255),
                    (c = a + i * (255 - a - a) / 255);
                },
                hue: function() {
                  m(t, e, i, v(r, s, a)), _(h, u, c, g(r, s, a));
                },
                saturation: function() {
                  m(r, s, a, v(t, e, i)), _(h, u, c, g(r, s, a));
                },
                luminosity: function() {
                  _(r, s, a, g(t, e, i));
                },
                color: function() {
                  _(t, e, i, g(r, s, a));
                },
                add: function() {
                  (h = f(r + t, 255)), (u = f(s + e, 255)), (c = f(a + i, 255));
                },
                subtract: function() {
                  (h = d(r - t, 0)), (u = d(s - e, 0)), (c = d(a - i, 0));
                },
                average: function() {
                  (h = (r + t) / 2), (u = (s + e) / 2), (c = (a + i) / 2);
                },
                negation: function() {
                  (h = 255 - p(255 - t - r)),
                    (u = 255 - p(255 - e - s)),
                    (c = 255 - p(255 - i - a));
                },
              },
              x = (this.nativeModes = l.each(
                [
                  'source-over',
                  'source-in',
                  'source-out',
                  'source-atop',
                  'destination-over',
                  'destination-in',
                  'destination-out',
                  'destination-atop',
                  'lighter',
                  'darker',
                  'copy',
                  'xor',
                ],
                function(t) {
                  this[t] = !0;
                },
                {}
              )),
              w = ot.getContext(1, 1);
            w &&
              (l.each(y, function(t, e) {
                var i = 'darken' === e,
                  n = !1;
                w.save();
                try {
                  (w.fillStyle = i ? '#300' : '#a00'),
                    w.fillRect(0, 0, 1, 1),
                    (w.globalCompositeOperation = e),
                    w.globalCompositeOperation === e &&
                      ((w.fillStyle = i ? '#a00' : '#300'),
                      w.fillRect(0, 0, 1, 1),
                      (n =
                        w.getImageData(0, 0, 1, 1).data[0] !== i ? 170 : 51));
                } catch (t) {}
                w.restore(), (x[e] = n);
              }),
              ot.release(w)),
              (this.process = function(l, f, d, p, g) {
                var _ = f.canvas,
                  v = 'normal' === l;
                if (v || x[l])
                  d.save(),
                    d.setTransform(1, 0, 0, 1, 0, 0),
                    (d.globalAlpha = p),
                    v || (d.globalCompositeOperation = l),
                    d.drawImage(_, g.x, g.y),
                    d.restore();
                else {
                  var m = y[l];
                  if (!m) return;
                  for (
                    var w = d.getImageData(g.x, g.y, _.width, _.height),
                      b = w.data,
                      C = f.getImageData(0, 0, _.width, _.height).data,
                      S = 0,
                      k = b.length;
                    S < k;
                    S += 4
                  ) {
                    (t = C[S]),
                      (r = b[S]),
                      (e = C[S + 1]),
                      (s = b[S + 1]),
                      (i = C[S + 2]),
                      (a = b[S + 2]),
                      (n = C[S + 3]),
                      (o = b[S + 3]),
                      m();
                    var A = n * p / 255,
                      P = 1 - A;
                    (b[S] = A * h + P * r),
                      (b[S + 1] = A * u + P * s),
                      (b[S + 2] = A * c + P * a),
                      (b[S + 3] = n * p + P * o);
                  }
                  d.putImageData(w, g.x, g.y);
                }
              });
          }(),
          ut = new function() {
            var t = 'http://www.w3.org/2000/svg',
              e = 'http://www.w3.org/2000/xmlns',
              i = 'http://www.w3.org/1999/xlink',
              n = { href: i, xlink: e, xmlns: e + '/', 'xmlns:xlink': e + '/' };
            function r(t, e, i) {
              for (var r in e) {
                var s = e[r],
                  a = n[r];
                'number' == typeof s && i && (s = i.number(s)),
                  a ? t.setAttributeNS(a, r, s) : t.setAttribute(r, s);
              }
              return t;
            }
            return {
              svg: t,
              xmlns: e,
              xlink: i,
              create: function(e, i, n) {
                return r(c.createElementNS(t, e), i, n);
              },
              get: function(t, e) {
                var i = n[e],
                  r = i ? t.getAttributeNS(i, e) : t.getAttribute(e);
                return 'null' === r ? null : r;
              },
              set: r,
            };
          }(),
          ct = l.each(
            {
              fillColor: ['fill', 'color'],
              fillRule: ['fill-rule', 'string'],
              strokeColor: ['stroke', 'color'],
              strokeWidth: ['stroke-width', 'number'],
              strokeCap: ['stroke-linecap', 'string'],
              strokeJoin: ['stroke-linejoin', 'string'],
              strokeScaling: [
                'vector-effect',
                'lookup',
                { true: 'none', false: 'non-scaling-stroke' },
                function(t, e) {
                  return (
                    !e && (t instanceof D || t instanceof T || t instanceof H)
                  );
                },
              ],
              miterLimit: ['stroke-miterlimit', 'number'],
              dashArray: ['stroke-dasharray', 'array'],
              dashOffset: ['stroke-dashoffset', 'number'],
              fontFamily: ['font-family', 'string'],
              fontWeight: ['font-weight', 'string'],
              fontSize: ['font-size', 'number'],
              justification: [
                'text-anchor',
                'lookup',
                { left: 'start', center: 'middle', right: 'end' },
              ],
              opacity: ['opacity', 'number'],
              blendMode: ['mix-blend-mode', 'style'],
            },
            function(t, e) {
              var i = l.capitalize(e),
                n = t[2];
              this[e] = {
                type: t[1],
                property: e,
                attribute: t[0],
                toSVG: n,
                fromSVG:
                  n &&
                  l.each(
                    n,
                    function(t, e) {
                      this[t] = e;
                    },
                    {}
                  ),
                exportFilter: t[3],
                get: 'get' + i,
                set: 'set' + i,
              };
            },
            {}
          );
        return (
          new function() {
            var t;
            function e(e, i, n) {
              var r = new l(),
                s = e.getTranslation();
              if (i) {
                var a = (e = e._shiftless())._inverseTransform(s);
                (r[n ? 'cx' : 'x'] = a.x),
                  (r[n ? 'cy' : 'y'] = a.y),
                  (s = null);
              }
              if (!e.isIdentity()) {
                var o = e.decompose();
                if (o) {
                  var h = [],
                    u = o.rotation,
                    c = o.scaling,
                    f = o.skewing;
                  s && !s.isZero() && h.push('translate(' + t.point(s) + ')'),
                    u && h.push('rotate(' + t.number(u) + ')'),
                    (_.isZero(c.x - 1) && _.isZero(c.y - 1)) ||
                      h.push('scale(' + t.point(c) + ')'),
                    f.x && h.push('skewX(' + t.number(f.x) + ')'),
                    f.y && h.push('skewY(' + t.number(f.y) + ')'),
                    (r.transform = h.join(' '));
                } else r.transform = 'matrix(' + e.getValues().join(',') + ')';
              }
              return r;
            }
            function i(i, n) {
              for (
                var r = e(i._matrix),
                  s = i._children,
                  a = ut.create('g', r, t),
                  o = 0,
                  h = s.length;
                o < h;
                o++
              ) {
                var c = s[o],
                  l = f(c, n);
                if (l)
                  if (c.isClipMask()) {
                    var d = ut.create('clipPath');
                    d.appendChild(l),
                      u(c, d, 'clip'),
                      ut.set(a, { 'clip-path': 'url(#' + d.id + ')' });
                  } else a.appendChild(l);
              }
              return a;
            }
            function n(i) {
              var n = i._type,
                r = i._radius,
                s = e(i._matrix, !0, 'rectangle' !== n);
              if ('rectangle' === n) {
                n = 'rect';
                var a = i._size,
                  o = a.width,
                  h = a.height;
                (s.x -= o / 2),
                  (s.y -= h / 2),
                  (s.width = o),
                  (s.height = h),
                  r.isZero() && (r = null);
              }
              return (
                r &&
                  ('circle' === n
                    ? (s.r = r)
                    : ((s.rx = r.width), (s.ry = r.height))),
                ut.create(n, s, t)
              );
            }
            var r,
              s = {
                Group: i,
                Layer: i,
                Raster: function(i, n) {
                  var r = e(i._matrix, !0),
                    s = i.getSize(),
                    a = i.getImage();
                  return (
                    (r.x -= s.width / 2),
                    (r.y -= s.height / 2),
                    (r.width = s.width),
                    (r.height = s.height),
                    (r.href =
                      (0 == n.embedImages && a && a.src) || i.toDataURL()),
                    ut.create('image', r, t)
                  );
                },
                Path: function(i, r) {
                  var s = r.matchShapes;
                  if (s) {
                    var a = i.toShape(!1);
                    if (a) return n(a);
                  }
                  var o,
                    h = i._segments,
                    u = h.length,
                    c = e(i._matrix);
                  if (s && u >= 2 && !i.hasHandles())
                    if (u > 2) {
                      o = i._closed ? 'polygon' : 'polyline';
                      for (var l = [], f = 0; f < u; f++)
                        l.push(t.point(h[f]._point));
                      c.points = l.join(' ');
                    } else {
                      o = 'line';
                      var d = h[0]._point,
                        p = h[1]._point;
                      c.set({ x1: d.x, y1: d.y, x2: p.x, y2: p.y });
                    }
                  else (o = 'path'), (c.d = i.getPathData(null, r.precision));
                  return ut.create(o, c, t);
                },
                Shape: n,
                CompoundPath: function(i, n) {
                  var r = e(i._matrix),
                    s = i.getPathData(null, n.precision);
                  return s && (r.d = s), ut.create('path', r, t);
                },
                SymbolItem: function(i, n) {
                  var r = e(i._matrix, !0),
                    s = i._definition,
                    a = h(s, 'symbol'),
                    o = s._item,
                    c = o.getBounds();
                  return (
                    a ||
                      ((a = ut.create('symbol', {
                        viewBox: t.rectangle(c),
                      })).appendChild(f(o, n)),
                      u(s, a, 'symbol')),
                    (r.href = '#' + a.id),
                    (r.x += c.x),
                    (r.y += c.y),
                    (r.width = c.width),
                    (r.height = c.height),
                    (r.overflow = 'visible'),
                    ut.create('use', r, t)
                  );
                },
                PointText: function(i) {
                  var n = ut.create('text', e(i._matrix, !0), t);
                  return (n.textContent = i._content), n;
                },
              };
            function a(e, i, n) {
              var r = {},
                s = !n && e.getParent(),
                a = [];
              return (
                null != e._name && (r.id = e._name),
                l.each(ct, function(i) {
                  var n = i.get,
                    o = i.type,
                    c = e[n]();
                  if (
                    i.exportFilter
                      ? i.exportFilter(e, c)
                      : !s || !l.equals(s[n](), c)
                  ) {
                    if ('color' === o && null != c) {
                      var f = c.getAlpha();
                      f < 1 && (r[i.attribute + '-opacity'] = f);
                    }
                    'style' === o
                      ? a.push(i.attribute + ': ' + c)
                      : (r[i.attribute] =
                          null == c
                            ? 'none'
                            : 'color' === o
                              ? c.gradient
                                ? (function(e) {
                                    var i = h(e, 'color');
                                    if (!i) {
                                      var n,
                                        r = e.getGradient(),
                                        s = r._radial,
                                        a = e.getOrigin(),
                                        o = e.getDestination();
                                      if (s) {
                                        n = {
                                          cx: a.x,
                                          cy: a.y,
                                          r: a.getDistance(o),
                                        };
                                        var c = e.getHighlight();
                                        c && ((n.fx = c.x), (n.fy = c.y));
                                      } else
                                        n = {
                                          x1: a.x,
                                          y1: a.y,
                                          x2: o.x,
                                          y2: o.y,
                                        };
                                      (n.gradientUnits = 'userSpaceOnUse'),
                                        (i = ut.create(
                                          (s ? 'radial' : 'linear') +
                                            'Gradient',
                                          n,
                                          t
                                        ));
                                      for (
                                        var l = r._stops, f = 0, d = l.length;
                                        f < d;
                                        f++
                                      ) {
                                        var p = l[f],
                                          g = p._color,
                                          _ = g.getAlpha(),
                                          v = p._offset;
                                        (n = {
                                          offset: null == v ? f / (d - 1) : v,
                                        }),
                                          g && (n['stop-color'] = g.toCSS(!0)),
                                          _ < 1 && (n['stop-opacity'] = _),
                                          i.appendChild(
                                            ut.create('stop', n, t)
                                          );
                                      }
                                      u(e, i, 'color');
                                    }
                                    return 'url(#' + i.id + ')';
                                  })(c)
                                : c.toCSS(!0)
                              : 'array' === o
                                ? c.join(',')
                                : 'lookup' === o
                                  ? i.toSVG[c]
                                  : c);
                  }
                }),
                a.length && (r.style = a.join(';')),
                1 === r.opacity && delete r.opacity,
                e._visible || (r.visibility = 'hidden'),
                ut.set(i, r, t)
              );
            }
            function h(t, e) {
              return (
                r || (r = { ids: {}, svgs: {} }),
                t &&
                  r.svgs[e + '-' + (t._id || t.__id || (t.__id = v.get('svg')))]
              );
            }
            function u(t, e, i) {
              r || h();
              var n = (r.ids[i] = (r.ids[i] || 0) + 1);
              (e.id = i + '-' + n), (r.svgs[i + '-' + (t._id || t.__id)] = e);
            }
            function c(t, e) {
              var i = t,
                n = null;
              if (r) {
                for (var s in ((i = 'svg' === t.nodeName.toLowerCase() && t),
                r.svgs))
                  n ||
                    (i || (i = ut.create('svg')).appendChild(t),
                    (n = i.insertBefore(ut.create('defs'), i.firstChild))),
                    n.appendChild(r.svgs[s]);
                r = null;
              }
              return e.asString
                ? new o.XMLSerializer().serializeToString(i)
                : i;
            }
            function f(t, e, i) {
              var n = s[t._class],
                r = n && n(t, e);
              if (r) {
                var o = e.onExport;
                o && (r = o(t, r, e) || r);
                var h = JSON.stringify(t._data);
                h &&
                  '{}' !== h &&
                  'null' !== h &&
                  r.setAttribute('data-paper-data', h);
              }
              return r && a(t, r, i);
            }
            function d(e) {
              return e || (e = {}), (t = new g(e.precision)), e;
            }
            P.inject({
              exportSVG: function(t) {
                return c(f(this, (t = d(t)), !0), t);
              },
            }),
              A.inject({
                exportSVG: function(i) {
                  i = d(i);
                  var n = this._children,
                    r = this.getView(),
                    s = l.pick(i.bounds, 'view'),
                    a = i.matrix || ('view' === s && r._matrix),
                    o = a && S.read([a]),
                    h =
                      'view' === s
                        ? new b([0, 0], r.getViewSize())
                        : 'content' === s
                          ? P._getBounds(n, o, { stroke: !0 }).rect
                          : b.read([s], 0, { readNull: !0 }),
                    u = {
                      version: '1.1',
                      xmlns: ut.svg,
                      'xmlns:xlink': ut.xlink,
                    };
                  h &&
                    ((u.width = h.width),
                    (u.height = h.height),
                    (h.x || h.y) && (u.viewBox = t.rectangle(h)));
                  var p = ut.create('svg', u, t),
                    g = p;
                  o &&
                    !o.isIdentity() &&
                    (g = p.appendChild(ut.create('g', e(o), t)));
                  for (var _ = 0, v = n.length; _ < v; _++)
                    g.appendChild(f(n[_], i, !0));
                  return c(p, i);
                },
              });
          }(),
          new function() {
            var t,
              e = {};
            function i(e, i, n, r, s) {
              var a = ut.get(e, i),
                o = null == a ? (r ? null : n ? '' : 0) : n ? a : parseFloat(a);
              return /%\s*$/.test(a)
                ? o / 100 * (s ? 1 : t[/x|^width/.test(i) ? 'width' : 'height'])
                : o;
            }
            function n(t, e, n, r, s) {
              return (
                (e = i(t, e || 'x', !1, r, s)),
                (n = i(t, n || 'y', !1, r, s)),
                !r || (null != e && null != n) ? new m(e, n) : null
              );
            }
            function r(t, e, n, r, s) {
              return (
                (e = i(t, e || 'width', !1, r, s)),
                (n = i(t, n || 'height', !1, r, s)),
                !r || (null != e && null != n) ? new x(e, n) : null
              );
            }
            function s(t, e, i) {
              return 'none' === t
                ? null
                : 'number' === e
                  ? parseFloat(t)
                  : 'array' === e
                    ? t
                      ? t.split(/[\s,]+/g).map(parseFloat)
                      : []
                    : 'color' === e
                      ? k(t) || t
                      : 'lookup' === e
                        ? i[t]
                        : t;
            }
            function f(t, e, i, n) {
              var r = t.childNodes,
                s = 'clippath' === e,
                a = 'defs' === e,
                o = new I(),
                h = o._project,
                u = h._currentStyle,
                c = [];
              if (
                (s ||
                  a ||
                  ((o = C(o, t, n)), (h._currentStyle = o._style.clone())),
                n)
              )
                for (
                  var l = t.querySelectorAll('defs'), f = 0, d = l.length;
                  f < d;
                  f++
                )
                  E(l[f], i, !1);
              for (f = 0, d = r.length; f < d; f++) {
                var p,
                  g = r[f];
                1 !== g.nodeType ||
                  /^defs$/i.test(g.nodeName) ||
                  !(p = E(g, i, !1)) ||
                  p instanceof N ||
                  c.push(p);
              }
              return (
                o.addChildren(c),
                s && (o = C(o.reduce(), t, n)),
                (h._currentStyle = u),
                (s || a) && (o.remove(), (o = null)),
                o
              );
            }
            function d(t, e) {
              for (
                var i = t
                    .getAttribute('points')
                    .match(/[+-]?(?:\d*\.\d+|\d+\.?)(?:[eE][+-]?\d+)?/g),
                  n = [],
                  r = 0,
                  s = i.length;
                r < s;
                r += 2
              )
                n.push(new m(parseFloat(i[r]), parseFloat(i[r + 1])));
              var a = new F(n);
              return 'polygon' === e && a.closePath(), a;
            }
            function p(t, r) {
              var s,
                a = (i(t, 'href', !0) || '').substring(1),
                o = 'radialgradient' === r;
              if (a)
                (s = e[a].getGradient())._radial ^ o &&
                  ((s = s.clone())._radial = o);
              else {
                for (
                  var h = t.childNodes, u = [], c = 0, l = h.length;
                  c < l;
                  c++
                ) {
                  var f = h[c];
                  1 === f.nodeType && u.push(C(new $(), f));
                }
                s = new Z(u, o);
              }
              var d,
                p,
                g,
                _ = 'userSpaceOnUse' !== i(t, 'gradientUnits', !0);
              return (
                o
                  ? ((p = (d = n(t, 'cx', 'cy', !1, _)).add(
                      i(t, 'r', !1, !1, _),
                      0
                    )),
                    (g = n(t, 'fx', 'fy', !0, _)))
                  : ((d = n(t, 'x1', 'y1', !1, _)),
                    (p = n(t, 'x2', 'y2', !1, _))),
                (C(new W(s, d, p, g), t)._scaleToBounds = _),
                null
              );
            }
            var g = {
              '#document': function(t, e, i, n) {
                for (var r = t.childNodes, s = 0, a = r.length; s < a; s++) {
                  var o = r[s];
                  if (1 === o.nodeType) return E(o, i, n);
                }
              },
              g: f,
              svg: f,
              clippath: f,
              polygon: d,
              polyline: d,
              path: function(t) {
                return D.create(t.getAttribute('d'));
              },
              lineargradient: p,
              radialgradient: p,
              image: function(t) {
                var e = new L(i(t, 'href', !0));
                return (
                  e.on('load', function() {
                    var e = r(t);
                    this.setSize(e);
                    var i = this._matrix._transformPoint(n(t).add(e.divide(2)));
                    this.translate(i);
                  }),
                  e
                );
              },
              symbol: function(t, e, i, n) {
                return new N(f(t, e, i, n), !0);
              },
              defs: f,
              use: function(t) {
                var r = (i(t, 'href', !0) || '').substring(1),
                  s = e[r],
                  a = n(t);
                return s
                  ? s instanceof N
                    ? s.place(a)
                    : s.clone().translate(a)
                  : null;
              },
              circle: function(t) {
                return new T.Circle(n(t, 'cx', 'cy'), i(t, 'r'));
              },
              ellipse: function(t) {
                return new T.Ellipse({
                  center: n(t, 'cx', 'cy'),
                  radius: r(t, 'rx', 'ry'),
                });
              },
              rect: function(t) {
                return new T.Rectangle(new b(n(t), r(t)), r(t, 'rx', 'ry'));
              },
              line: function(t) {
                return new F.Line(n(t, 'x1', 'y1'), n(t, 'x2', 'y2'));
              },
              text: function(t) {
                var e = new G(n(t).add(n(t, 'dx', 'dy')));
                return e.setContent(t.textContent.trim() || ''), e;
              },
            };
            function _(t, e, i, n) {
              if (t.transform) {
                for (
                  var r = (n.getAttribute(i) || '').split(/\)\s*/g),
                    s = new S(),
                    a = 0,
                    o = r.length;
                  a < o;
                  a++
                ) {
                  var h = r[a];
                  if (!h) break;
                  for (
                    var u = h.split(/\(\s*/),
                      c = u[0],
                      l = u[1].split(/[\s,]+/g),
                      f = 0,
                      d = l.length;
                    f < d;
                    f++
                  )
                    l[f] = parseFloat(l[f]);
                  switch (c) {
                    case 'matrix':
                      s.append(new S(l[0], l[1], l[2], l[3], l[4], l[5]));
                      break;
                    case 'rotate':
                      s.rotate(l[0], l[1], l[2]);
                      break;
                    case 'translate':
                      s.translate(l[0], l[1]);
                      break;
                    case 'scale':
                      s.scale(l);
                      break;
                    case 'skewX':
                      s.skew(l[0], 0);
                      break;
                    case 'skewY':
                      s.skew(0, l[0]);
                  }
                }
                t.transform(s);
              }
            }
            function v(t, e, i) {
              var n = 'fill-opacity' === i ? 'getFillColor' : 'getStrokeColor',
                r = t[n] && t[n]();
              r && r.setAlpha(parseFloat(e));
            }
            var y = l.set(
              l.each(
                ct,
                function(t) {
                  this[t.attribute] = function(e, i) {
                    if (
                      e[t.set] &&
                      (e[t.set](s(i, t.type, t.fromSVG)), 'color' === t.type)
                    ) {
                      var n = e[t.get]();
                      if (n && n._scaleToBounds) {
                        var r = e.getBounds();
                        n.transform(
                          new S().translate(r.getPoint()).scale(r.getSize())
                        );
                      }
                    }
                  };
                },
                {}
              ),
              {
                id: function(t, i) {
                  (e[i] = t), t.setName && t.setName(i);
                },
                'clip-path': function(t, e) {
                  var i = k(e);
                  if (i) {
                    if (((i = i.clone()).setClipMask(!0), !(t instanceof I)))
                      return new I(i, t);
                    t.insertChild(0, i);
                  }
                },
                gradientTransform: _,
                transform: _,
                'fill-opacity': v,
                'stroke-opacity': v,
                visibility: function(t, e) {
                  t.setVisible && t.setVisible('visible' === e);
                },
                display: function(t, e) {
                  t.setVisible && t.setVisible(null !== e);
                },
                'stop-color': function(t, e) {
                  t.setColor && t.setColor(e);
                },
                'stop-opacity': function(t, e) {
                  t._color && t._color.setAlpha(parseFloat(e));
                },
                offset: function(t, e) {
                  if (t.setOffset) {
                    var i = e.match(/(.*)%$/);
                    t.setOffset(i ? i[1] / 100 : parseFloat(e));
                  }
                },
                viewBox: function(t, e, i, n, a) {
                  var o,
                    h = new b(s(e, 'array')),
                    u = r(n, null, null, !0);
                  if (t instanceof I) {
                    var c = u ? u.divide(h.getSize()) : 1,
                      l = new S().scale(c).translate(h.getPoint().negate());
                    o = t;
                  } else t instanceof N && (u && h.setSize(u), (o = t._item));
                  if (o) {
                    if ('visible' !== w(n, 'overflow', a)) {
                      var f = new T.Rectangle(h);
                      f.setClipMask(!0), o.addChild(f);
                    }
                    l && o.transform(l);
                  }
                },
              }
            );
            function w(t, e, i) {
              var n = t.attributes[e],
                r = n && n.value;
              if (!r) {
                var s = l.camelize(e);
                (r = t.style[s]) ||
                  i.node[s] === i.parent[s] ||
                  (r = i.node[s]);
              }
              return r ? ('none' === r ? null : r) : h;
            }
            function C(t, e, i) {
              if (e.style) {
                var n = e.parentNode,
                  r = {
                    node: Q.getStyles(e) || {},
                    parent:
                      (!i && !/^defs$/i.test(n.tagName) && Q.getStyles(n)) ||
                      {},
                  };
                l.each(y, function(i, n) {
                  var s = w(e, n, r);
                  t = (s !== h && i(t, s, n, e, r)) || t;
                });
              }
              return t;
            }
            function k(t) {
              var i = t && t.match(/\((?:["'#]*)([^"')]+)/),
                n = i && i[1],
                r =
                  n &&
                  e[u ? n.replace(u.location.href.split('#')[0] + '#', '') : n];
              return (
                r && r._scaleToBounds && ((r = r.clone())._scaleToBounds = !0),
                r
              );
            }
            function E(i, n, s) {
              var o,
                h,
                u,
                f = i.nodeName.toLowerCase(),
                d = '#document' !== f,
                p = c.body;
              s &&
                d &&
                ((t = a.getView().getSize()),
                (t = r(i, null, null, !0) || t),
                (o = ut.create('svg', {
                  style: 'stroke-width: 1px; stroke-miterlimit: 10',
                })),
                (h = i.parentNode),
                (u = i.nextSibling),
                o.appendChild(i),
                p.appendChild(o));
              var _ = a.settings,
                v = _.applyMatrix,
                m = _.insertItems;
              (_.applyMatrix = !1), (_.insertItems = !1);
              var y = g[f],
                x = (y && y(i, f, n, s)) || null;
              if (((_.insertItems = m), (_.applyMatrix = v), x)) {
                !d || x instanceof I || (x = C(x, i, s));
                var w = n.onImport,
                  b = d && i.getAttribute('data-paper-data');
                w && (x = w(i, x, n) || x),
                  n.expandShapes &&
                    x instanceof T &&
                    (x.remove(), (x = x.toPath())),
                  b && (x._data = JSON.parse(b));
              }
              return (
                o &&
                  (p.removeChild(o),
                  h && (u ? h.insertBefore(i, u) : h.appendChild(i))),
                s &&
                  ((e = {}),
                  x && l.pick(n.applyMatrix, v) && x.matrix.apply(!0, !0)),
                x
              );
            }
            function M(t, e, i) {
              if (!t) return null;
              e = 'function' == typeof e ? { onLoad: e } : e || {};
              var n = a,
                r = null;
              function s(s) {
                try {
                  var c =
                    'object' == typeof s
                      ? s
                      : new o.DOMParser().parseFromString(s, 'image/svg+xml');
                  if (!c.nodeName)
                    throw ((c = null),
                    new Error('Unsupported SVG source: ' + t));
                  (a = n),
                    (r = E(c, e, !0)),
                    (e && !1 === e.insert) || i._insertItem(h, r);
                  var l = e.onLoad;
                  l && l(r, s);
                } catch (t) {
                  u(t);
                }
              }
              function u(t, i) {
                var n = e.onError;
                if (!n) throw new Error(t);
                n(t, i);
              }
              if ('string' != typeof t || /^.*</.test(t)) {
                if ('undefined' != typeof File && t instanceof File) {
                  var l = new FileReader();
                  return (
                    (l.onload = function() {
                      s(l.result);
                    }),
                    (l.onerror = function() {
                      u(l.error);
                    }),
                    l.readAsText(t)
                  );
                }
                s(t);
              } else {
                var f = c.getElementById(t);
                f
                  ? s(f)
                  : at.request({ url: t, async: !0, onLoad: s, onError: u });
              }
              return r;
            }
            P.inject({
              importSVG: function(t, e) {
                return M(t, e, this);
              },
            }),
              A.inject({
                importSVG: function(t, e) {
                  return this.activate(), M(t, e, this);
                },
              });
          }(),
          (l.exports.PaperScript = function() {
            var t,
              e,
              f = this,
              p = f.acorn;
            if (!p)
              try {
                p = i(2);
              } catch (t) {}
            p ||
              ((p = t = e = {}),
              (function(i, a) {
                'object' == typeof t && 'object' == typeof e
                  ? a(t)
                  : ((n = [t]),
                    (s = 'function' == typeof (r = a) ? r.apply(t, n) : r) !==
                      h && (e.exports = s));
              })(0, function(t) {
                'use strict';
                var e, i, n, r;
                (t.version = '0.5.0'),
                  (t.parse = function(t, r) {
                    return (
                      (i = String(t)),
                      (n = i.length),
                      a(r),
                      Wt(),
                      (function(t) {
                        (v = m = o), e.locations && (y = new Gt());
                        (x = b = null), (w = []), Xt();
                        var i = t || ce(),
                          n = !0;
                        t || (i.body = []);
                        for (; f !== T; ) {
                          var r = be();
                          i.body.push(r), n && de(r) && oe(!0), (n = !1);
                        }
                        return fe(i, 'Program');
                      })(e.program)
                    );
                  });
                var s = (t.defaultOptions = {
                  ecmaVersion: 5,
                  strictSemicolons: !1,
                  allowTrailingCommas: !0,
                  forbidReserved: !1,
                  allowReturnOutsideFunction: !1,
                  locations: !1,
                  onComment: null,
                  ranges: !1,
                  program: null,
                  sourceFile: null,
                  directSourceFile: null,
                });
                function a(t) {
                  for (var i in ((e = t || {}), s))
                    Object.prototype.hasOwnProperty.call(e, i) || (e[i] = s[i]);
                  r = e.sourceFile || null;
                }
                var o,
                  h,
                  u,
                  c,
                  l,
                  f,
                  d,
                  p,
                  g,
                  _,
                  v,
                  m,
                  y,
                  x,
                  w,
                  b,
                  C = (t.getLineInfo = function(t, e) {
                    for (var i = 1, n = 0; ; ) {
                      qt.lastIndex = n;
                      var r = qt.exec(t);
                      if (!(r && r.index < e)) break;
                      ++i, (n = r.index + r[0].length);
                    }
                    return { line: i, column: e - n };
                  });
                function S(t, e) {
                  var n = C(i, t);
                  e += ' (' + n.line + ':' + n.column + ')';
                  var r = new SyntaxError(e);
                  throw ((r.pos = t), (r.loc = n), (r.raisedAt = o), r);
                }
                t.tokenize = function(t, r) {
                  (i = String(t)), (n = i.length), a(r), Wt();
                  var s = {};
                  function v(t) {
                    return (
                      (m = u),
                      Xt(t),
                      (s.start = h),
                      (s.end = u),
                      (s.startLoc = c),
                      (s.endLoc = l),
                      (s.type = f),
                      (s.value = d),
                      s
                    );
                  }
                  return (
                    (v.jumpTo = function(t, n) {
                      var r;
                      if (((o = t), e.locations))
                        for (
                          g = 1, _ = qt.lastIndex = 0;
                          (r = qt.exec(i)) && r.index < t;

                        )
                          ++g, (_ = r.index + r[0].length);
                      (p = n), Qt();
                    }),
                    v
                  );
                };
                var k = [],
                  A = { type: 'num' },
                  P = { type: 'regexp' },
                  I = { type: 'string' },
                  E = { type: 'name' },
                  T = { type: 'eof' },
                  L = { keyword: 'break' },
                  M = { keyword: 'case', beforeExpr: !0 },
                  N = { keyword: 'catch' },
                  O = { keyword: 'continue' },
                  V = { keyword: 'debugger' },
                  z = { keyword: 'default' },
                  R = { keyword: 'do', isLoop: !0 },
                  B = { keyword: 'else', beforeExpr: !0 },
                  D = { keyword: 'finally' },
                  F = { keyword: 'for', isLoop: !0 },
                  j = { keyword: 'function' },
                  q = { keyword: 'if' },
                  U = { keyword: 'return', beforeExpr: !0 },
                  H = { keyword: 'switch' },
                  G = { keyword: 'throw', beforeExpr: !0 },
                  W = { keyword: 'try' },
                  Z = { keyword: 'var' },
                  $ = { keyword: 'while', isLoop: !0 },
                  K = { keyword: 'with' },
                  Q = { keyword: 'new', beforeExpr: !0 },
                  J = { keyword: 'this' },
                  X = { keyword: 'null', atomValue: null },
                  Y = { keyword: 'true', atomValue: !0 },
                  tt = { keyword: 'false', atomValue: !1 },
                  et = { keyword: 'in', binop: 7, beforeExpr: !0 },
                  it = {
                    break: L,
                    case: M,
                    catch: N,
                    continue: O,
                    debugger: V,
                    default: z,
                    do: R,
                    else: B,
                    finally: D,
                    for: F,
                    function: j,
                    if: q,
                    return: U,
                    switch: H,
                    throw: G,
                    try: W,
                    var: Z,
                    while: $,
                    with: K,
                    null: X,
                    true: Y,
                    false: tt,
                    new: Q,
                    in: et,
                    instanceof: {
                      keyword: 'instanceof',
                      binop: 7,
                      beforeExpr: !0,
                    },
                    this: J,
                    typeof: { keyword: 'typeof', prefix: !0, beforeExpr: !0 },
                    void: { keyword: 'void', prefix: !0, beforeExpr: !0 },
                    delete: { keyword: 'delete', prefix: !0, beforeExpr: !0 },
                  },
                  nt = { type: '[', beforeExpr: !0 },
                  rt = { type: ']' },
                  st = { type: '{', beforeExpr: !0 },
                  at = { type: '}' },
                  ot = { type: '(', beforeExpr: !0 },
                  ht = { type: ')' },
                  ut = { type: ',', beforeExpr: !0 },
                  ct = { type: ';', beforeExpr: !0 },
                  lt = { type: ':', beforeExpr: !0 },
                  ft = { type: '.' },
                  dt = { type: '?', beforeExpr: !0 },
                  pt = { binop: 10, beforeExpr: !0 },
                  gt = { isAssign: !0, beforeExpr: !0 },
                  _t = { isAssign: !0, beforeExpr: !0 },
                  vt = { postfix: !0, prefix: !0, isUpdate: !0 },
                  mt = { prefix: !0, beforeExpr: !0 },
                  yt = { binop: 1, beforeExpr: !0 },
                  xt = { binop: 2, beforeExpr: !0 },
                  wt = { binop: 3, beforeExpr: !0 },
                  bt = { binop: 4, beforeExpr: !0 },
                  Ct = { binop: 5, beforeExpr: !0 },
                  St = { binop: 6, beforeExpr: !0 },
                  kt = { binop: 7, beforeExpr: !0 },
                  At = { binop: 8, beforeExpr: !0 },
                  Pt = { binop: 9, prefix: !0, beforeExpr: !0 },
                  It = { binop: 10, beforeExpr: !0 };
                for (var Et in ((t.tokTypes = {
                  bracketL: nt,
                  bracketR: rt,
                  braceL: st,
                  braceR: at,
                  parenL: ot,
                  parenR: ht,
                  comma: ut,
                  semi: ct,
                  colon: lt,
                  dot: ft,
                  question: dt,
                  slash: pt,
                  eq: gt,
                  name: E,
                  eof: T,
                  num: A,
                  regexp: P,
                  string: I,
                }),
                it))
                  t.tokTypes['_' + Et] = it[Et];
                function Tt(t) {
                  t = t.split(' ');
                  var e = '',
                    i = [];
                  t: for (var n = 0; n < t.length; ++n) {
                    for (var r = 0; r < i.length; ++r)
                      if (i[r][0].length == t[n].length) {
                        i[r].push(t[n]);
                        continue t;
                      }
                    i.push([t[n]]);
                  }
                  function s(t) {
                    if (1 == t.length)
                      return (e +=
                        'return str === ' + JSON.stringify(t[0]) + ';');
                    e += 'switch(str){';
                    for (var i = 0; i < t.length; ++i)
                      e += 'case ' + JSON.stringify(t[i]) + ':';
                    e += 'return true}return false;';
                  }
                  if (i.length > 3) {
                    i.sort(function(t, e) {
                      return e.length - t.length;
                    }),
                      (e += 'switch(str.length){');
                    for (n = 0; n < i.length; ++n) {
                      var a = i[n];
                      (e += 'case ' + a[0].length + ':'), s(a);
                    }
                    e += '}';
                  } else s(t);
                  return new Function('str', e);
                }
                var Lt,
                  Mt = Tt(
                    'abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile'
                  ),
                  Nt = Tt('class enum extends super const export import'),
                  Ot = Tt(
                    'implements interface let package private protected public static yield'
                  ),
                  Vt = Tt('eval arguments'),
                  zt = Tt(
                    'break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this'
                  ),
                  Rt = /[\u1680\u180e\u2000-\u200a\u202f\u205f\u3000\ufeff]/,
                  Bt =
                    'ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԧԱ-Ֆՙա-ևא-תװ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࢠࢢ-ࢬऄ-हऽॐक़-ॡॱ-ॷॹ-ॿঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-ళవ-హఽౘౙౠౡಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഅ-ഌഎ-ഐഒ-ഺഽൎൠൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏼᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛰᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡷᢀ-ᢨᢪᢰ-ᣵᤀ-ᤜᥐ-ᥭᥰ-ᥴᦀ-ᦫᧁ-ᧇᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᳩ-ᳬᳮ-ᳱᳵᳶᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⸯ々-〇〡-〩〱-〵〸-〼ぁ-ゖゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿌ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚗꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꞎꞐ-ꞓꞠ-Ɦꟸ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꪀ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꯀ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ',
                  Dt = new RegExp('[' + Bt + ']'),
                  Ft = new RegExp(
                    '[' +
                      Bt +
                      '̀-ͯ҃-֑҇-ׇֽֿׁׂׅׄؐ-ؚؠ-ىٲ-ۓۧ-ۨۻ-ۼܰ-݊ࠀ-ࠔࠛ-ࠣࠥ-ࠧࠩ-࠭ࡀ-ࡗࣤ-ࣾऀ-ःऺ-़ा-ॏ॑-ॗॢ-ॣ०-९ঁ-ঃ়া-ৄেৈৗয়-ৠਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑ੦-ੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢ-ૣ૦-૯ଁ-ଃ଼ା-ୄେୈୋ-୍ୖୗୟ-ୠ୦-୯ஂா-ூெ-ைொ-்ௗ௦-௯ఁ-ఃె-ైొ-్ౕౖౢ-ౣ౦-౯ಂಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢ-ೣ೦-೯ംഃെ-ൈൗൢ-ൣ൦-൯ංඃ්ා-ුූෘ-ෟෲෳิ-ฺเ-ๅ๐-๙ິ-ູ່-ໍ໐-໙༘༙༠-༩༹༵༷ཁ-ཇཱ-྄྆-྇ྍ-ྗྙ-ྼ࿆က-ဩ၀-၉ၧ-ၭၱ-ၴႂ-ႍႏ-ႝ፝-፟ᜎ-ᜐᜠ-ᜰᝀ-ᝐᝲᝳក-ឲ៝០-៩᠋-᠍᠐-᠙ᤠ-ᤫᤰ-᤻ᥑ-ᥭᦰ-ᧀᧈ-ᧉ᧐-᧙ᨀ-ᨕᨠ-ᩓ᩠-᩿᩼-᪉᪐-᪙ᭆ-ᭋ᭐-᭙᭫-᭳᮰-᮹᯦-᯳ᰀ-ᰢ᱀-᱉ᱛ-ᱽ᳐-᳒ᴀ-ᶾḁ-ἕ‌‍‿⁀⁔⃐-⃥⃜⃡-⃰ⶁ-ⶖⷠ-ⷿ〡-〨゙゚Ꙁ-ꙭꙴ-꙽ꚟ꛰-꛱ꟸ-ꠀ꠆ꠋꠣ-ꠧꢀ-ꢁꢴ-꣄꣐-꣙ꣳ-ꣷ꤀-꤉ꤦ-꤭ꤰ-ꥅꦀ-ꦃ꦳-꧀ꨀ-ꨧꩀ-ꩁꩌ-ꩍ꩐-꩙ꩻꫠ-ꫩꫲ-ꫳꯀ-ꯡ꯬꯭꯰-꯹ﬠ-ﬨ︀-️︠-︦︳︴﹍-﹏０-９＿]'
                  ),
                  jt = /[\n\r\u2028\u2029]/,
                  qt = /\r\n|[\n\r\u2028\u2029]/g,
                  Ut = (t.isIdentifierStart = function(t) {
                    return t < 65
                      ? 36 === t
                      : t < 91 ||
                          (t < 97
                            ? 95 === t
                            : t < 123 ||
                              (t >= 170 && Dt.test(String.fromCharCode(t))));
                  }),
                  Ht = (t.isIdentifierChar = function(t) {
                    return t < 48
                      ? 36 === t
                      : t < 58 ||
                          (!(t < 65) &&
                            (t < 91 ||
                              (t < 97
                                ? 95 === t
                                : t < 123 ||
                                  (t >= 170 &&
                                    Ft.test(String.fromCharCode(t))))));
                  });
                function Gt() {
                  (this.line = g), (this.column = o - _);
                }
                function Wt() {
                  (g = 1), (o = _ = 0), (p = !0), Qt();
                }
                function Zt(t, i) {
                  (u = o),
                    e.locations && (l = new Gt()),
                    (f = t),
                    Qt(),
                    (d = i),
                    (p = t.beforeExpr);
                }
                function $t() {
                  var t,
                    n = e.onComment && e.locations && new Gt(),
                    r = o,
                    s = i.indexOf('*/', (o += 2));
                  if (
                    (-1 === s && S(o - 2, 'Unterminated comment'),
                    (o = s + 2),
                    e.locations)
                  )
                    for (qt.lastIndex = r; (t = qt.exec(i)) && t.index < o; )
                      ++g, (_ = t.index + t[0].length);
                  e.onComment &&
                    e.onComment(
                      !0,
                      i.slice(r + 2, s),
                      r,
                      o,
                      n,
                      e.locations && new Gt()
                    );
                }
                function Kt() {
                  for (
                    var t = o,
                      r = e.onComment && e.locations && new Gt(),
                      s = i.charCodeAt((o += 2));
                    o < n && 10 !== s && 13 !== s && 8232 !== s && 8233 !== s;

                  )
                    ++o, (s = i.charCodeAt(o));
                  e.onComment &&
                    e.onComment(
                      !1,
                      i.slice(t + 2, o),
                      t,
                      o,
                      r,
                      e.locations && new Gt()
                    );
                }
                function Qt() {
                  for (; o < n; ) {
                    var t = i.charCodeAt(o);
                    if (32 === t) ++o;
                    else if (13 === t) {
                      ++o,
                        10 === (r = i.charCodeAt(o)) && ++o,
                        e.locations && (++g, (_ = o));
                    } else if (10 === t || 8232 === t || 8233 === t)
                      ++o, e.locations && (++g, (_ = o));
                    else if (t > 8 && t < 14) ++o;
                    else if (47 === t) {
                      var r;
                      if (42 === (r = i.charCodeAt(o + 1))) $t();
                      else {
                        if (47 !== r) break;
                        Kt();
                      }
                    } else if (160 === t) ++o;
                    else {
                      if (!(t >= 5760 && Rt.test(String.fromCharCode(t))))
                        break;
                      ++o;
                    }
                  }
                }
                function Jt(t) {
                  switch (t) {
                    case 46:
                      return (function() {
                        var t = i.charCodeAt(o + 1);
                        return t >= 48 && t <= 57 ? ie(!0) : (++o, Zt(ft));
                      })();
                    case 40:
                      return ++o, Zt(ot);
                    case 41:
                      return ++o, Zt(ht);
                    case 59:
                      return ++o, Zt(ct);
                    case 44:
                      return ++o, Zt(ut);
                    case 91:
                      return ++o, Zt(nt);
                    case 93:
                      return ++o, Zt(rt);
                    case 123:
                      return ++o, Zt(st);
                    case 125:
                      return ++o, Zt(at);
                    case 58:
                      return ++o, Zt(lt);
                    case 63:
                      return ++o, Zt(dt);
                    case 48:
                      var r = i.charCodeAt(o + 1);
                      if (120 === r || 88 === r)
                        return (function() {
                          o += 2;
                          var t = ee(16);
                          null == t && S(h + 2, 'Expected hexadecimal number');
                          Ut(i.charCodeAt(o)) &&
                            S(o, 'Identifier directly after number');
                          return Zt(A, t);
                        })();
                    case 49:
                    case 50:
                    case 51:
                    case 52:
                    case 53:
                    case 54:
                    case 55:
                    case 56:
                    case 57:
                      return ie(!1);
                    case 34:
                    case 39:
                      return (function(t) {
                        o++;
                        for (var r = ''; ; ) {
                          o >= n && S(h, 'Unterminated string constant');
                          var s = i.charCodeAt(o);
                          if (s === t) return ++o, Zt(I, r);
                          if (92 === s) {
                            s = i.charCodeAt(++o);
                            var a = /^[0-7]+/.exec(i.slice(o, o + 3));
                            for (a && (a = a[0]); a && parseInt(a, 8) > 255; )
                              a = a.slice(0, -1);
                            if (('0' === a && (a = null), ++o, a))
                              b && S(o - 2, 'Octal literal in strict mode'),
                                (r += String.fromCharCode(parseInt(a, 8))),
                                (o += a.length - 1);
                            else
                              switch (s) {
                                case 110:
                                  r += '\n';
                                  break;
                                case 114:
                                  r += '\r';
                                  break;
                                case 120:
                                  r += String.fromCharCode(ne(2));
                                  break;
                                case 117:
                                  r += String.fromCharCode(ne(4));
                                  break;
                                case 85:
                                  r += String.fromCharCode(ne(8));
                                  break;
                                case 116:
                                  r += '\t';
                                  break;
                                case 98:
                                  r += '\b';
                                  break;
                                case 118:
                                  r += '\v';
                                  break;
                                case 102:
                                  r += '\f';
                                  break;
                                case 48:
                                  r += '\0';
                                  break;
                                case 13:
                                  10 === i.charCodeAt(o) && ++o;
                                case 10:
                                  e.locations && ((_ = o), ++g);
                                  break;
                                default:
                                  r += String.fromCharCode(s);
                              }
                          } else
                            (13 !== s &&
                              10 !== s &&
                              8232 !== s &&
                              8233 !== s) ||
                              S(h, 'Unterminated string constant'),
                              (r += String.fromCharCode(s)),
                              ++o;
                        }
                      })(t);
                    case 47:
                      return (function() {
                        var t = i.charCodeAt(o + 1);
                        return p
                          ? (++o, te())
                          : 61 === t
                            ? Yt(_t, 2)
                            : Yt(pt, 1);
                      })();
                    case 37:
                    case 42:
                      return 61 === i.charCodeAt(o + 1) ? Yt(_t, 2) : Yt(It, 1);
                    case 124:
                    case 38:
                      return (function(t) {
                        var e = i.charCodeAt(o + 1);
                        return e === t
                          ? Yt(124 === t ? yt : xt, 2)
                          : 61 === e
                            ? Yt(_t, 2)
                            : Yt(124 === t ? wt : Ct, 1);
                      })(t);
                    case 94:
                      return 61 === i.charCodeAt(o + 1) ? Yt(_t, 2) : Yt(bt, 1);
                    case 43:
                    case 45:
                      return (function(t) {
                        var e = i.charCodeAt(o + 1);
                        return e === t
                          ? 45 == e &&
                            62 == i.charCodeAt(o + 2) &&
                            jt.test(i.slice(m, o))
                            ? ((o += 3), Kt(), Qt(), Xt())
                            : Yt(vt, 2)
                          : 61 === e
                            ? Yt(_t, 2)
                            : Yt(Pt, 1);
                      })(t);
                    case 60:
                    case 62:
                      return (function(t) {
                        var e = i.charCodeAt(o + 1),
                          n = 1;
                        return e === t
                          ? ((n =
                              62 === t && 62 === i.charCodeAt(o + 2) ? 3 : 2),
                            61 === i.charCodeAt(o + n)
                              ? Yt(_t, n + 1)
                              : Yt(At, n))
                          : 33 == e &&
                            60 == t &&
                            45 == i.charCodeAt(o + 2) &&
                            45 == i.charCodeAt(o + 3)
                            ? ((o += 4), Kt(), Qt(), Xt())
                            : (61 === e &&
                                (n = 61 === i.charCodeAt(o + 2) ? 3 : 2),
                              Yt(kt, n));
                      })(t);
                    case 61:
                    case 33:
                      return (function(t) {
                        return 61 === i.charCodeAt(o + 1)
                          ? Yt(St, 61 === i.charCodeAt(o + 2) ? 3 : 2)
                          : Yt(61 === t ? gt : mt, 1);
                      })(t);
                    case 126:
                      return Yt(mt, 1);
                  }
                  return !1;
                }
                function Xt(t) {
                  if (
                    (t ? (o = h + 1) : (h = o),
                    e.locations && (c = new Gt()),
                    t)
                  )
                    return te();
                  if (o >= n) return Zt(T);
                  var r = i.charCodeAt(o);
                  if (Ut(r) || 92 === r) return se();
                  var s = Jt(r);
                  if (!1 === s) {
                    var a = String.fromCharCode(r);
                    if ('\\' === a || Dt.test(a)) return se();
                    S(o, "Unexpected character '" + a + "'");
                  }
                  return s;
                }
                function Yt(t, e) {
                  var n = i.slice(o, o + e);
                  (o += e), Zt(t, n);
                }
                function te() {
                  for (var t, e, r = o; ; ) {
                    o >= n && S(r, 'Unterminated regular expression');
                    var s = i.charAt(o);
                    if (
                      (jt.test(s) && S(r, 'Unterminated regular expression'), t)
                    )
                      t = !1;
                    else {
                      if ('[' === s) e = !0;
                      else if (']' === s && e) e = !1;
                      else if ('/' === s && !e) break;
                      t = '\\' === s;
                    }
                    ++o;
                  }
                  var a = i.slice(r, o);
                  ++o;
                  var h = re();
                  h && !/^[gmsiy]*$/.test(h) && S(r, 'Invalid regexp flag');
                  try {
                    var u = new RegExp(a, h);
                  } catch (t) {
                    t instanceof SyntaxError && S(r, t.message), S(t);
                  }
                  return Zt(P, u);
                }
                function ee(t, e) {
                  for (
                    var n = o, r = 0, s = 0, a = null == e ? 1 / 0 : e;
                    s < a;
                    ++s
                  ) {
                    var h,
                      u = i.charCodeAt(o);
                    if (
                      (h =
                        u >= 97
                          ? u - 97 + 10
                          : u >= 65
                            ? u - 65 + 10
                            : u >= 48 && u <= 57
                              ? u - 48
                              : 1 / 0) >= t
                    )
                      break;
                    ++o, (r = r * t + h);
                  }
                  return o === n || (null != e && o - n !== e) ? null : r;
                }
                function ie(t) {
                  var e = o,
                    n = !1,
                    r = 48 === i.charCodeAt(o);
                  t || null !== ee(10) || S(e, 'Invalid number'),
                    46 === i.charCodeAt(o) && (++o, ee(10), (n = !0));
                  var s = i.charCodeAt(o);
                  (69 !== s && 101 !== s) ||
                    ((43 !== (s = i.charCodeAt(++o)) && 45 !== s) || ++o,
                    null === ee(10) && S(e, 'Invalid number'),
                    (n = !0)),
                    Ut(i.charCodeAt(o)) &&
                      S(o, 'Identifier directly after number');
                  var a,
                    h = i.slice(e, o);
                  return (
                    n
                      ? (a = parseFloat(h))
                      : r && 1 !== h.length
                        ? /[89]/.test(h) || b
                          ? S(e, 'Invalid number')
                          : (a = parseInt(h, 8))
                        : (a = parseInt(h, 10)),
                    Zt(A, a)
                  );
                }
                function ne(t) {
                  var e = ee(16, t);
                  return null === e && S(h, 'Bad character escape sequence'), e;
                }
                function re() {
                  Lt = !1;
                  for (var t, e = !0, n = o; ; ) {
                    var r = i.charCodeAt(o);
                    if (Ht(r)) Lt && (t += i.charAt(o)), ++o;
                    else {
                      if (92 !== r) break;
                      Lt || (t = i.slice(n, o)),
                        (Lt = !0),
                        117 != i.charCodeAt(++o) &&
                          S(o, 'Expecting Unicode escape sequence \\uXXXX'),
                        ++o;
                      var s = ne(4),
                        a = String.fromCharCode(s);
                      a || S(o - 1, 'Invalid Unicode escape'),
                        (e ? Ut(s) : Ht(s)) ||
                          S(o - 4, 'Invalid Unicode escape'),
                        (t += a);
                    }
                    e = !1;
                  }
                  return Lt ? t : i.slice(n, o);
                }
                function se() {
                  var t = re(),
                    e = E;
                  return !Lt && zt(t) && (e = it[t]), Zt(e, t);
                }
                function ae() {
                  (v = h), (m = u), (y = l), Xt();
                }
                function oe(t) {
                  if (((b = t), (o = h), e.locations))
                    for (; o < _; ) (_ = i.lastIndexOf('\n', _ - 2) + 1), --g;
                  Qt(), Xt();
                }
                function he() {
                  (this.type = null), (this.start = h), (this.end = null);
                }
                function ue() {
                  (this.start = c),
                    (this.end = null),
                    null !== r && (this.source = r);
                }
                function ce() {
                  var t = new he();
                  return (
                    e.locations && (t.loc = new ue()),
                    e.directSourceFile && (t.sourceFile = e.directSourceFile),
                    e.ranges && (t.range = [h, 0]),
                    t
                  );
                }
                function le(t) {
                  var i = new he();
                  return (
                    (i.start = t.start),
                    e.locations &&
                      ((i.loc = new ue()), (i.loc.start = t.loc.start)),
                    e.ranges && (i.range = [t.range[0], 0]),
                    i
                  );
                }
                function fe(t, i) {
                  return (
                    (t.type = i),
                    (t.end = m),
                    e.locations && (t.loc.end = y),
                    e.ranges && (t.range[1] = m),
                    t
                  );
                }
                function de(t) {
                  return (
                    e.ecmaVersion >= 5 &&
                    'ExpressionStatement' === t.type &&
                    'Literal' === t.expression.type &&
                    'use strict' === t.expression.value
                  );
                }
                function pe(t) {
                  if (f === t) return ae(), !0;
                }
                function ge() {
                  return (
                    !e.strictSemicolons &&
                    (f === T || f === at || jt.test(i.slice(m, h)))
                  );
                }
                function _e() {
                  pe(ct) || ge() || me();
                }
                function ve(t) {
                  f === t ? ae() : me();
                }
                function me() {
                  S(h, 'Unexpected token');
                }
                function ye(t) {
                  'Identifier' !== t.type &&
                    'MemberExpression' !== t.type &&
                    S(t.start, 'Assigning to rvalue'),
                    b &&
                      'Identifier' === t.type &&
                      Vt(t.name) &&
                      S(t.start, 'Assigning to ' + t.name + ' in strict mode');
                }
                var xe = { kind: 'loop' },
                  we = { kind: 'switch' };
                function be() {
                  (f === pt || (f === _t && '/=' == d)) && Xt(!0);
                  var t = f,
                    n = ce();
                  switch (t) {
                    case L:
                    case O:
                      ae();
                      var r = t === L;
                      pe(ct) || ge()
                        ? (n.label = null)
                        : f !== E
                          ? me()
                          : ((n.label = ze()), _e());
                      for (var s = 0; s < w.length; ++s) {
                        var a = w[s];
                        if (null == n.label || a.name === n.label.name) {
                          if (null != a.kind && (r || 'loop' === a.kind)) break;
                          if (n.label && r) break;
                        }
                      }
                      return (
                        s === w.length &&
                          S(n.start, 'Unsyntactic ' + t.keyword),
                        fe(n, r ? 'BreakStatement' : 'ContinueStatement')
                      );
                    case V:
                      return ae(), _e(), fe(n, 'DebuggerStatement');
                    case R:
                      return (
                        ae(),
                        w.push(xe),
                        (n.body = be()),
                        w.pop(),
                        ve($),
                        (n.test = Ce()),
                        _e(),
                        fe(n, 'DoWhileStatement')
                      );
                    case F:
                      if ((ae(), w.push(xe), ve(ot), f === ct))
                        return ke(n, null);
                      if (f === Z) {
                        var o = ce();
                        return (
                          ae(),
                          Pe(o, !0),
                          fe(o, 'VariableDeclaration'),
                          1 === o.declarations.length && pe(et)
                            ? Ae(n, o)
                            : ke(n, o)
                        );
                      }
                      o = Ie(!1, !0);
                      return pe(et) ? (ye(o), Ae(n, o)) : ke(n, o);
                    case j:
                      return ae(), Oe(n, !0);
                    case q:
                      return (
                        ae(),
                        (n.test = Ce()),
                        (n.consequent = be()),
                        (n.alternate = pe(B) ? be() : null),
                        fe(n, 'IfStatement')
                      );
                    case U:
                      return (
                        x ||
                          e.allowReturnOutsideFunction ||
                          S(h, "'return' outside of function"),
                        ae(),
                        pe(ct) || ge()
                          ? (n.argument = null)
                          : ((n.argument = Ie()), _e()),
                        fe(n, 'ReturnStatement')
                      );
                    case H:
                      ae(),
                        (n.discriminant = Ce()),
                        (n.cases = []),
                        ve(st),
                        w.push(we);
                      for (var u, c; f != at; )
                        if (f === M || f === z) {
                          var l = f === M;
                          u && fe(u, 'SwitchCase'),
                            n.cases.push((u = ce())),
                            (u.consequent = []),
                            ae(),
                            l
                              ? (u.test = Ie())
                              : (c && S(v, 'Multiple default clauses'),
                                (c = !0),
                                (u.test = null)),
                            ve(lt);
                        } else u || me(), u.consequent.push(be());
                      return (
                        u && fe(u, 'SwitchCase'),
                        ae(),
                        w.pop(),
                        fe(n, 'SwitchStatement')
                      );
                    case G:
                      return (
                        ae(),
                        jt.test(i.slice(m, h)) &&
                          S(m, 'Illegal newline after throw'),
                        (n.argument = Ie()),
                        _e(),
                        fe(n, 'ThrowStatement')
                      );
                    case W:
                      if (
                        (ae(), (n.block = Se()), (n.handler = null), f === N)
                      ) {
                        var p = ce();
                        ae(),
                          ve(ot),
                          (p.param = ze()),
                          b &&
                            Vt(p.param.name) &&
                            S(
                              p.param.start,
                              'Binding ' + p.param.name + ' in strict mode'
                            ),
                          ve(ht),
                          (p.guard = null),
                          (p.body = Se()),
                          (n.handler = fe(p, 'CatchClause'));
                      }
                      return (
                        (n.guardedHandlers = k),
                        (n.finalizer = pe(D) ? Se() : null),
                        n.handler ||
                          n.finalizer ||
                          S(n.start, 'Missing catch or finally clause'),
                        fe(n, 'TryStatement')
                      );
                    case Z:
                      return ae(), Pe(n), _e(), fe(n, 'VariableDeclaration');
                    case $:
                      return (
                        ae(),
                        (n.test = Ce()),
                        w.push(xe),
                        (n.body = be()),
                        w.pop(),
                        fe(n, 'WhileStatement')
                      );
                    case K:
                      return (
                        b && S(h, "'with' in strict mode"),
                        ae(),
                        (n.object = Ce()),
                        (n.body = be()),
                        fe(n, 'WithStatement')
                      );
                    case st:
                      return Se();
                    case ct:
                      return ae(), fe(n, 'EmptyStatement');
                    default:
                      var g = d,
                        _ = Ie();
                      if (t === E && 'Identifier' === _.type && pe(lt)) {
                        for (s = 0; s < w.length; ++s)
                          w[s].name === g &&
                            S(_.start, "Label '" + g + "' is already declared");
                        var y = f.isLoop ? 'loop' : f === H ? 'switch' : null;
                        return (
                          w.push({ name: g, kind: y }),
                          (n.body = be()),
                          w.pop(),
                          (n.label = _),
                          fe(n, 'LabeledStatement')
                        );
                      }
                      return (
                        (n.expression = _), _e(), fe(n, 'ExpressionStatement')
                      );
                  }
                }
                function Ce() {
                  ve(ot);
                  var t = Ie();
                  return ve(ht), t;
                }
                function Se(t) {
                  var e,
                    i = ce(),
                    n = !0,
                    r = !1;
                  for (i.body = [], ve(st); !pe(at); ) {
                    var s = be();
                    i.body.push(s),
                      n && t && de(s) && ((e = r), oe((r = !0))),
                      (n = !1);
                  }
                  return r && !e && oe(!1), fe(i, 'BlockStatement');
                }
                function ke(t, e) {
                  return (
                    (t.init = e),
                    ve(ct),
                    (t.test = f === ct ? null : Ie()),
                    ve(ct),
                    (t.update = f === ht ? null : Ie()),
                    ve(ht),
                    (t.body = be()),
                    w.pop(),
                    fe(t, 'ForStatement')
                  );
                }
                function Ae(t, e) {
                  return (
                    (t.left = e),
                    (t.right = Ie()),
                    ve(ht),
                    (t.body = be()),
                    w.pop(),
                    fe(t, 'ForInStatement')
                  );
                }
                function Pe(t, e) {
                  for (t.declarations = [], t.kind = 'var'; ; ) {
                    var i = ce();
                    if (
                      ((i.id = ze()),
                      b &&
                        Vt(i.id.name) &&
                        S(
                          i.id.start,
                          'Binding ' + i.id.name + ' in strict mode'
                        ),
                      (i.init = pe(gt) ? Ie(!0, e) : null),
                      t.declarations.push(fe(i, 'VariableDeclarator')),
                      !pe(ut))
                    )
                      break;
                  }
                  return t;
                }
                function Ie(t, e) {
                  var i = Ee(e);
                  if (!t && f === ut) {
                    var n = le(i);
                    for (n.expressions = [i]; pe(ut); )
                      n.expressions.push(Ee(e));
                    return fe(n, 'SequenceExpression');
                  }
                  return i;
                }
                function Ee(t) {
                  var e = (function(t) {
                    var e = (function(t) {
                      return (function t(e, i, n) {
                        var r = f.binop;
                        if (null != r && (!n || f !== et) && r > i) {
                          var s = le(e);
                          (s.left = e), (s.operator = d);
                          var a = f;
                          ae(), (s.right = t(Te(), r, n));
                          var o = fe(
                            s,
                            a === yt || a === xt
                              ? 'LogicalExpression'
                              : 'BinaryExpression'
                          );
                          return t(o, i, n);
                        }
                        return e;
                      })(Te(), -1, t);
                    })(t);
                    if (pe(dt)) {
                      var i = le(e);
                      return (
                        (i.test = e),
                        (i.consequent = Ie(!0)),
                        ve(lt),
                        (i.alternate = Ie(!0, t)),
                        fe(i, 'ConditionalExpression')
                      );
                    }
                    return e;
                  })(t);
                  if (f.isAssign) {
                    var i = le(e);
                    return (
                      (i.operator = d),
                      (i.left = e),
                      ae(),
                      (i.right = Ee(t)),
                      ye(e),
                      fe(i, 'AssignmentExpression')
                    );
                  }
                  return e;
                }
                function Te() {
                  if (f.prefix) {
                    var t = ce(),
                      e = f.isUpdate;
                    return (
                      (t.operator = d),
                      (t.prefix = !0),
                      (p = !0),
                      ae(),
                      (t.argument = Te()),
                      e
                        ? ye(t.argument)
                        : b &&
                          'delete' === t.operator &&
                          'Identifier' === t.argument.type &&
                          S(t.start, 'Deleting local variable in strict mode'),
                      fe(t, e ? 'UpdateExpression' : 'UnaryExpression')
                    );
                  }
                  for (var i = Le(Me()); f.postfix && !ge(); ) {
                    ((t = le(i)).operator = d),
                      (t.prefix = !1),
                      (t.argument = i),
                      ye(i),
                      ae(),
                      (i = fe(t, 'UpdateExpression'));
                  }
                  return i;
                }
                function Le(t, e) {
                  var i;
                  return pe(ft)
                    ? (((i = le(t)).object = t),
                      (i.property = ze(!0)),
                      (i.computed = !1),
                      Le(fe(i, 'MemberExpression'), e))
                    : pe(nt)
                      ? (((i = le(t)).object = t),
                        (i.property = Ie()),
                        (i.computed = !0),
                        ve(rt),
                        Le(fe(i, 'MemberExpression'), e))
                      : !e && pe(ot)
                        ? (((i = le(t)).callee = t),
                          (i.arguments = Ve(ht, !1)),
                          Le(fe(i, 'CallExpression'), e))
                        : t;
                }
                function Me() {
                  switch (f) {
                    case J:
                      var t = ce();
                      return ae(), fe(t, 'ThisExpression');
                    case E:
                      return ze();
                    case A:
                    case I:
                    case P:
                      return (
                        ((t = ce()).value = d),
                        (t.raw = i.slice(h, u)),
                        ae(),
                        fe(t, 'Literal')
                      );
                    case X:
                    case Y:
                    case tt:
                      return (
                        ((t = ce()).value = f.atomValue),
                        (t.raw = f.keyword),
                        ae(),
                        fe(t, 'Literal')
                      );
                    case ot:
                      var n = c,
                        r = h;
                      ae();
                      var s = Ie();
                      return (
                        (s.start = r),
                        (s.end = u),
                        e.locations && ((s.loc.start = n), (s.loc.end = l)),
                        e.ranges && (s.range = [r, u]),
                        ve(ht),
                        s
                      );
                    case nt:
                      t = ce();
                      return (
                        ae(),
                        (t.elements = Ve(rt, !0, !0)),
                        fe(t, 'ArrayExpression')
                      );
                    case st:
                      return (function() {
                        var t = ce(),
                          i = !0,
                          n = !1;
                        (t.properties = []), ae();
                        for (; !pe(at); ) {
                          if (i) i = !1;
                          else if ((ve(ut), e.allowTrailingCommas && pe(at)))
                            break;
                          var r,
                            s = { key: Ne() },
                            a = !1;
                          if (
                            (pe(lt)
                              ? ((s.value = Ie(!0)), (r = s.kind = 'init'))
                              : e.ecmaVersion >= 5 &&
                                'Identifier' === s.key.type &&
                                ('get' === s.key.name || 'set' === s.key.name)
                                ? ((a = n = !0),
                                  (r = s.kind = s.key.name),
                                  (s.key = Ne()),
                                  f !== ot && me(),
                                  (s.value = Oe(ce(), !1)))
                                : me(),
                            'Identifier' === s.key.type && (b || n))
                          )
                            for (var o = 0; o < t.properties.length; ++o) {
                              var h = t.properties[o];
                              if (h.key.name === s.key.name) {
                                var u =
                                  r == h.kind ||
                                  (a && 'init' === h.kind) ||
                                  ('init' === r &&
                                    ('get' === h.kind || 'set' === h.kind));
                                u &&
                                  !b &&
                                  'init' === r &&
                                  'init' === h.kind &&
                                  (u = !1),
                                  u &&
                                    S(s.key.start, 'Redefinition of property');
                              }
                            }
                          t.properties.push(s);
                        }
                        return fe(t, 'ObjectExpression');
                      })();
                    case j:
                      t = ce();
                      return ae(), Oe(t, !1);
                    case Q:
                      return (function() {
                        var t = ce();
                        ae(),
                          (t.callee = Le(Me(), !0)),
                          pe(ot)
                            ? (t.arguments = Ve(ht, !1))
                            : (t.arguments = k);
                        return fe(t, 'NewExpression');
                      })();
                    default:
                      me();
                  }
                }
                function Ne() {
                  return f === A || f === I ? Me() : ze(!0);
                }
                function Oe(t, e) {
                  f === E ? (t.id = ze()) : e ? me() : (t.id = null),
                    (t.params = []);
                  var i = !0;
                  for (ve(ot); !pe(ht); )
                    i ? (i = !1) : ve(ut), t.params.push(ze());
                  var n = x,
                    r = w;
                  if (
                    ((x = !0),
                    (w = []),
                    (t.body = Se(!0)),
                    (x = n),
                    (w = r),
                    b || (t.body.body.length && de(t.body.body[0])))
                  )
                    for (var s = t.id ? -1 : 0; s < t.params.length; ++s) {
                      var a = s < 0 ? t.id : t.params[s];
                      if (
                        ((Ot(a.name) || Vt(a.name)) &&
                          S(
                            a.start,
                            "Defining '" + a.name + "' in strict mode"
                          ),
                        s >= 0)
                      )
                        for (var o = 0; o < s; ++o)
                          a.name === t.params[o].name &&
                            S(a.start, 'Argument name clash in strict mode');
                    }
                  return fe(
                    t,
                    e ? 'FunctionDeclaration' : 'FunctionExpression'
                  );
                }
                function Ve(t, i, n) {
                  for (var r = [], s = !0; !pe(t); ) {
                    if (s) s = !1;
                    else if ((ve(ut), i && e.allowTrailingCommas && pe(t)))
                      break;
                    n && f === ut ? r.push(null) : r.push(Ie(!0));
                  }
                  return r;
                }
                function ze(t) {
                  var n = ce();
                  return (
                    t && 'everywhere' == e.forbidReserved && (t = !1),
                    f === E
                      ? (!t &&
                          ((e.forbidReserved &&
                            (3 === e.ecmaVersion ? Mt : Nt)(d)) ||
                            (b && Ot(d))) &&
                          -1 == i.slice(h, u).indexOf('\\') &&
                          S(h, "The keyword '" + d + "' is reserved"),
                        (n.name = d))
                      : t && f.keyword
                        ? (n.name = f.keyword)
                        : me(),
                    (p = !1),
                    ae(),
                    fe(n, 'Identifier')
                  );
                }
              }),
              p.version || (p = null));
            function g(t, e) {
              return (f.acorn || p).parse(t, e);
            }
            var _ = {
                '+': '__add',
                '-': '__subtract',
                '*': '__multiply',
                '/': '__divide',
                '%': '__modulo',
                '==': '__equals',
                '!=': '__equals',
              },
              v = { '-': '__negate', '+': '__self' },
              y = l.each(
                [
                  'add',
                  'subtract',
                  'multiply',
                  'divide',
                  'modulo',
                  'equals',
                  'negate',
                ],
                function(t) {
                  this['__' + t] = '#' + t;
                },
                {
                  __self: function() {
                    return this;
                  },
                }
              );
            function w(t, e, i) {
              var n = _[e];
              if (t && t[n]) {
                var r = t[n](i);
                return '!=' === e ? !r : r;
              }
              switch (e) {
                case '+':
                  return t + i;
                case '-':
                  return t - i;
                case '*':
                  return t * i;
                case '/':
                  return t / i;
                case '%':
                  return t % i;
                case '==':
                  return t == i;
                case '!=':
                  return t != i;
              }
            }
            function b(t, e) {
              var i = v[t];
              if (e && e[i]) return e[i]();
              switch (t) {
                case '+':
                  return +e;
                case '-':
                  return -e;
              }
            }
            function C(t, e) {
              if (!t) return '';
              var i = [];
              function n(t) {
                for (var e = 0, n = i.length; e < n; e++) {
                  var r = i[e];
                  if (r[0] >= t) break;
                  t += r[1];
                }
                return t;
              }
              function r(e) {
                return t.substring(n(e.range[0]), n(e.range[1]));
              }
              function s(e, r) {
                for (
                  var s = n(e.range[0]),
                    a = n(e.range[1]),
                    o = 0,
                    h = i.length - 1;
                  h >= 0;
                  h--
                )
                  if (s > i[h][0]) {
                    o = h + 1;
                    break;
                  }
                i.splice(o, 0, [s, r.length - a + s]),
                  (t = t.substring(0, s) + r + t.substring(a));
              }
              var h,
                l = (e = e || {}).url || '',
                f = a.agent,
                d = f.versionNumber,
                p = !1,
                m = e.sourceMaps,
                y = e.source || t,
                x = /\r\n|\n|\r/gm,
                w = e.offset || 0;
              if (
                m &&
                ((f.chrome && d >= 30) ||
                  (f.webkit && d >= 537.76) ||
                  (f.firefox && d >= 23) ||
                  f.node)
              ) {
                if (f.node) w -= 2;
                else if (u && l && !u.location.href.indexOf(l)) {
                  var b = c.getElementsByTagName('html')[0].innerHTML;
                  w = b.substr(0, b.indexOf(t) + 1).match(x).length + 1;
                }
                var C = [
                  'AA' +
                    (function(t) {
                      var e = '';
                      for (
                        t = (Math.abs(t) << 1) + (t < 0 ? 1 : 0);
                        t || !e;

                      ) {
                        var i = 31 & t;
                        (t >>= 5) && (i |= 32),
                          (e += 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'[
                            i
                          ]);
                      }
                      return e;
                    })(
                      (p =
                        w > 0 &&
                        !(
                          (f.chrome && d >= 36) ||
                          (f.safari && d >= 600) ||
                          (f.firefox && d >= 40) ||
                          f.node
                        ))
                        ? 0
                        : w
                    ) +
                    'A',
                ];
                (C.length = (t.match(x) || []).length + 1 + (p ? w : 0)),
                  (h = {
                    version: 3,
                    file: l,
                    names: [],
                    mappings: C.join(';AACA'),
                    sourceRoot: '',
                    sources: [l],
                    sourcesContent: [y],
                  });
              }
              return (
                (function e(i, a) {
                  if (i) {
                    for (var o in i)
                      if ('range' !== o && 'loc' !== o) {
                        var h = i[o];
                        if (Array.isArray(h))
                          for (var u = 0, c = h.length; u < c; u++) e(h[u], i);
                        else h && 'object' == typeof h && e(h, i);
                      }
                    switch (i.type) {
                      case 'UnaryExpression':
                        if (i.operator in v && 'Literal' !== i.argument.type) {
                          var l = r(i.argument);
                          s(i, '$__("' + i.operator + '", ' + l + ')');
                        }
                        break;
                      case 'BinaryExpression':
                        if (i.operator in _ && 'Literal' !== i.left.type) {
                          var f = r(i.left),
                            d = r(i.right),
                            p = (function(e, i) {
                              return t.substring(n(e.range[1]), n(i.range[0]));
                            })(i.left, i.right),
                            g = i.operator;
                          s(
                            i,
                            '__$__(' +
                              f +
                              ',' +
                              p.replace(new RegExp('\\' + g), '"' + g + '"') +
                              ', ' +
                              d +
                              ')'
                          );
                        }
                        break;
                      case 'UpdateExpression':
                      case 'AssignmentExpression':
                        var m = a && a.type;
                        if (
                          !(
                            'ForStatement' === m ||
                            ('BinaryExpression' === m &&
                              /^[=!<>]/.test(a.operator)) ||
                            ('MemberExpression' === m && a.computed)
                          )
                        )
                          if ('UpdateExpression' === i.type) {
                            var y =
                              (l = r(i.argument)) +
                              ' = ' +
                              (x =
                                '__$__(' + l + ', "' + i.operator[0] + '", 1)');
                            i.prefix ||
                              ('AssignmentExpression' !== m &&
                                'VariableDeclarator' !== m) ||
                              (r(a.left || a.id) === l && (y = x),
                              (y = l + '; ' + y)),
                              s(i, y);
                          } else if (
                            /^.=$/.test(i.operator) &&
                            'Literal' !== i.left.type
                          ) {
                            (f = r(i.left)), (d = r(i.right));
                            var x =
                              f +
                              ' = __$__(' +
                              f +
                              ', "' +
                              i.operator[0] +
                              '", ' +
                              d +
                              ')';
                            s(i, /^\(.*\)$/.test(r(i)) ? '(' + x + ')' : x);
                          }
                    }
                  }
                })(g(t, { ranges: !0, preserveParens: !0 })),
                h &&
                  (p && (t = new Array(w + 1).join('\n') + t),
                  /^(inline|both)$/.test(m) &&
                    (t +=
                      '\n//# sourceMappingURL=data:application/json;base64,' +
                      o.btoa(unescape(encodeURIComponent(JSON.stringify(h))))),
                  (t += '\n//# sourceURL=' + (l || 'paperscript'))),
                { url: l, source: y, code: t, map: h }
              );
            }
            function S(t, e, i) {
              a = e;
              var n,
                r = e.getView(),
                s =
                  /\btool\.\w+|\s+on(?:Key|Mouse)(?:Up|Down|Move|Drag)\b/.test(
                    t
                  ) && !/\bnew\s+Tool\b/.test(t)
                    ? new st()
                    : null,
                o = s ? s._events : [],
                h = ['onFrame', 'onResize'].concat(o),
                u = [],
                f = [],
                d = 'object' == typeof t ? t : C(t, i);
              function p(e, i) {
                for (var n in e)
                  (!i && /^_/.test(n)) ||
                    !new RegExp(
                      '([\\b\\s\\W]|^)' + n.replace(/\$/g, '\\$') + '\\b'
                    ).test(t) ||
                    (u.push(n), f.push(e[n]));
              }
              (t = d.code),
                p({ __$__: w, $__: b, paper: e, view: r, tool: s }, !0),
                p(e),
                (h = l
                  .each(
                    h,
                    function(e) {
                      new RegExp('\\s+' + e + '\\b').test(t) &&
                        (u.push(e), this.push(e + ': ' + e));
                    },
                    []
                  )
                  .join(', ')) && (t += '\nreturn { ' + h + ' };');
              var g = a.agent;
              if (c && (g.chrome || (g.firefox && g.versionNumber < 40))) {
                var _ = c.createElement('script'),
                  v = c.head || c.getElementsByTagName('head')[0];
                g.firefox && (t = '\n' + t),
                  _.appendChild(
                    c.createTextNode(
                      'paper._execute = function(' + u + ') {' + t + '\n}'
                    )
                  ),
                  v.appendChild(_),
                  (n = a._execute),
                  delete a._execute,
                  v.removeChild(_);
              } else n = Function(u, t);
              var y = n.apply(e, f) || {};
              return (
                l.each(o, function(t) {
                  var e = y[t];
                  e && (s[t] = e);
                }),
                r &&
                  (y.onResize && r.setOnResize(y.onResize),
                  r.emit('resize', { size: r.size, delta: new m() }),
                  y.onFrame && r.setOnFrame(y.onFrame),
                  r.requestUpdate()),
                d
              );
            }
            function k(t) {
              if (
                /^text\/(?:x-|)paperscript$/.test(t.type) &&
                'true' !== d.getAttribute(t, 'ignore')
              ) {
                var e = d.getAttribute(t, 'canvas'),
                  i = c.getElementById(e),
                  n = t.src || t.getAttribute('data-src'),
                  r = d.hasAttribute(t, 'async');
                if (!i)
                  throw new Error('Unable to find canvas with id "' + e + '"');
                var s =
                  d.get(i.getAttribute('data-paper-scope')) || new d().setup(i);
                return (
                  i.setAttribute('data-paper-scope', s._id),
                  n
                    ? at.request({
                        url: n,
                        async: r,
                        mimeType: 'text/plain',
                        onLoad: function(t) {
                          S(t, s, n);
                        },
                      })
                    : S(t.innerHTML, s, t.baseURI),
                  t.setAttribute('data-paper-ignore', 'true'),
                  s
                );
              }
            }
            function A() {
              l.each(c && c.getElementsByTagName('script'), k);
            }
            return (
              m.inject(y),
              x.inject(y),
              W.inject(y),
              u &&
                ('complete' === c.readyState
                  ? setTimeout(A)
                  : J.add(u, { load: A })),
              {
                compile: C,
                execute: S,
                load: function(t) {
                  return t ? k(t) : A();
                },
                parse: g,
              }
            );
          }.call(this)),
          (a = new (d.inject(l.exports, {
            Base: l,
            Numerical: _,
            Key: it,
            DomEvent: J,
            DomElement: Q,
            document: c,
            window: u,
            Symbol: N,
            PlacedSymbol: M,
          }))()).agent.node && i(1)(a),
          (s = 'function' == typeof (r = a) ? r.call(e, i, e, t) : r) === h ||
            (t.exports = s),
          a
        );
      }.call(this, 'object' == typeof self ? self : null);
  },
  function(t, e) {},
  function(t, e, i) {
    'use strict';
    i.r(e),
      i.d(e, 'version', function() {
        return kt;
      }),
      i.d(e, 'parse', function() {
        return At;
      }),
      i.d(e, 'parseExpressionAt', function() {
        return Pt;
      }),
      i.d(e, 'tokenizer', function() {
        return It;
      }),
      i.d(e, 'parse_dammit', function() {
        return bt;
      }),
      i.d(e, 'LooseParser', function() {
        return Ct;
      }),
      i.d(e, 'pluginsLoose', function() {
        return St;
      }),
      i.d(e, 'addLooseExports', function() {
        return Et;
      }),
      i.d(e, 'Parser', function() {
        return F;
      }),
      i.d(e, 'plugins', function() {
        return B;
      }),
      i.d(e, 'defaultOptions', function() {
        return z;
      }),
      i.d(e, 'Position', function() {
        return N;
      }),
      i.d(e, 'SourceLocation', function() {
        return O;
      }),
      i.d(e, 'getLineInfo', function() {
        return V;
      }),
      i.d(e, 'Node', function() {
        return tt;
      }),
      i.d(e, 'TokenType', function() {
        return _;
      }),
      i.d(e, 'tokTypes', function() {
        return b;
      }),
      i.d(e, 'keywordTypes', function() {
        return x;
      }),
      i.d(e, 'TokContext', function() {
        return nt;
      }),
      i.d(e, 'tokContexts', function() {
        return rt;
      }),
      i.d(e, 'isIdentifierChar', function() {
        return g;
      }),
      i.d(e, 'isIdentifierStart', function() {
        return p;
      }),
      i.d(e, 'Token', function() {
        return mt;
      }),
      i.d(e, 'isNewLine', function() {
        return k;
      }),
      i.d(e, 'lineBreak', function() {
        return C;
      }),
      i.d(e, 'lineBreakG', function() {
        return S;
      }),
      i.d(e, 'nonASCIIwhitespace', function() {
        return A;
      });
    var n = {
        3: 'abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile',
        5: 'class enum extends super const export import',
        6: 'enum',
        strict:
          'implements interface let package private protected public static yield',
        strictBind: 'eval arguments',
      },
      r =
        'break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this',
      s = { 5: r, 6: r + ' const class extends export import super' },
      a = /^in(stanceof)?$/,
      o =
        'ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙՠ-ֈא-תׯ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࡠ-ࡪࢠ-ࢴࢶ-ࢽऄ-हऽॐक़-ॡॱ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱৼਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഅ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛸᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡸᢀ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᲀ-ᲈᲐ-ᲺᲽ-Ჿᳩ-ᳬᳮ-ᳱᳵᳶᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕ℘-ℝℤΩℨK-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ々-〇〡-〩〱-〵〸-〼ぁ-ゖ゛-ゟァ-ヺー-ヿㄅ-ㄯㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿯ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚝꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꞹꟷ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꣾꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭥꭰ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ',
      h =
        '‌‍·̀-ͯ·҃-֑҇-ׇֽֿׁׂׅׄؐ-ًؚ-٩ٰۖ-ۜ۟-۪ۤۧۨ-ۭ۰-۹ܑܰ-݊ަ-ް߀-߉߫-߽߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛࣓-ࣣ࣡-ःऺ-़ा-ॏ॑-ॗॢॣ०-९ঁ-ঃ়া-ৄেৈো-্ৗৢৣ০-৯৾ਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑ੦-ੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢૣ૦-૯ૺ-૿ଁ-ଃ଼ା-ୄେୈୋ-୍ୖୗୢୣ୦-୯ஂா-ூெ-ைொ-்ௗ௦-௯ఀ-ఄా-ౄె-ైొ-్ౕౖౢౣ౦-౯ಁ-ಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢೣ೦-೯ഀ-ഃ഻഼ാ-ൄെ-ൈൊ-്ൗൢൣ൦-൯ංඃ්ා-ුූෘ-ෟ෦-෯ෲෳัิ-ฺ็-๎๐-๙ັິ-ູົຼ່-ໍ໐-໙༘༙༠-༩༹༵༷༾༿ཱ-྄྆྇ྍ-ྗྙ-ྼ࿆ါ-ှ၀-၉ၖ-ၙၞ-ၠၢ-ၤၧ-ၭၱ-ၴႂ-ႍႏ-ႝ፝-፟፩-፱ᜒ-᜔ᜲ-᜴ᝒᝓᝲᝳ឴-៓៝០-៩᠋-᠍᠐-᠙ᢩᤠ-ᤫᤰ-᤻᥆-᥏᧐-᧚ᨗ-ᨛᩕ-ᩞ᩠-᩿᩼-᪉᪐-᪙᪰-᪽ᬀ-ᬄ᬴-᭄᭐-᭙᭫-᭳ᮀ-ᮂᮡ-ᮭ᮰-᮹᯦-᯳ᰤ-᰷᱀-᱉᱐-᱙᳐-᳔᳒-᳨᳭ᳲ-᳴᳷-᳹᷀-᷹᷻-᷿‿⁀⁔⃐-⃥⃜⃡-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〯꘠-꘩꙯ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠣ-ꠧꢀꢁꢴ-ꣅ꣐-꣙꣠-꣱ꣿ-꤉ꤦ-꤭ꥇ-꥓ꦀ-ꦃ꦳-꧀꧐-꧙ꧥ꧰-꧹ꨩ-ꨶꩃꩌꩍ꩐-꩙ꩻ-ꩽꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫫ-ꫯꫵ꫶ꯣ-ꯪ꯬꯭꯰-꯹ﬞ︀-️︠-︯︳︴﹍-﹏０-９＿',
      u = new RegExp('[' + o + ']'),
      c = new RegExp('[' + o + h + ']');
    o = h = null;
    var l = [
        0,
        11,
        2,
        25,
        2,
        18,
        2,
        1,
        2,
        14,
        3,
        13,
        35,
        122,
        70,
        52,
        268,
        28,
        4,
        48,
        48,
        31,
        14,
        29,
        6,
        37,
        11,
        29,
        3,
        35,
        5,
        7,
        2,
        4,
        43,
        157,
        19,
        35,
        5,
        35,
        5,
        39,
        9,
        51,
        157,
        310,
        10,
        21,
        11,
        7,
        153,
        5,
        3,
        0,
        2,
        43,
        2,
        1,
        4,
        0,
        3,
        22,
        11,
        22,
        10,
        30,
        66,
        18,
        2,
        1,
        11,
        21,
        11,
        25,
        71,
        55,
        7,
        1,
        65,
        0,
        16,
        3,
        2,
        2,
        2,
        28,
        43,
        28,
        4,
        28,
        36,
        7,
        2,
        27,
        28,
        53,
        11,
        21,
        11,
        18,
        14,
        17,
        111,
        72,
        56,
        50,
        14,
        50,
        14,
        35,
        477,
        28,
        11,
        0,
        9,
        21,
        190,
        52,
        76,
        44,
        33,
        24,
        27,
        35,
        30,
        0,
        12,
        34,
        4,
        0,
        13,
        47,
        15,
        3,
        22,
        0,
        2,
        0,
        36,
        17,
        2,
        24,
        85,
        6,
        2,
        0,
        2,
        3,
        2,
        14,
        2,
        9,
        8,
        46,
        39,
        7,
        3,
        1,
        3,
        21,
        2,
        6,
        2,
        1,
        2,
        4,
        4,
        0,
        19,
        0,
        13,
        4,
        159,
        52,
        19,
        3,
        54,
        47,
        21,
        1,
        2,
        0,
        185,
        46,
        42,
        3,
        37,
        47,
        21,
        0,
        60,
        42,
        86,
        26,
        230,
        43,
        117,
        63,
        32,
        0,
        257,
        0,
        11,
        39,
        8,
        0,
        22,
        0,
        12,
        39,
        3,
        3,
        20,
        0,
        35,
        56,
        264,
        8,
        2,
        36,
        18,
        0,
        50,
        29,
        113,
        6,
        2,
        1,
        2,
        37,
        22,
        0,
        26,
        5,
        2,
        1,
        2,
        31,
        15,
        0,
        328,
        18,
        270,
        921,
        103,
        110,
        18,
        195,
        2749,
        1070,
        4050,
        582,
        8634,
        568,
        8,
        30,
        114,
        29,
        19,
        47,
        17,
        3,
        32,
        20,
        6,
        18,
        689,
        63,
        129,
        68,
        12,
        0,
        67,
        12,
        65,
        1,
        31,
        6129,
        15,
        754,
        9486,
        286,
        82,
        395,
        2309,
        106,
        6,
        12,
        4,
        8,
        8,
        9,
        5991,
        84,
        2,
        70,
        2,
        1,
        3,
        0,
        3,
        1,
        3,
        3,
        2,
        11,
        2,
        0,
        2,
        6,
        2,
        64,
        2,
        3,
        3,
        7,
        2,
        6,
        2,
        27,
        2,
        3,
        2,
        4,
        2,
        0,
        4,
        6,
        2,
        339,
        3,
        24,
        2,
        24,
        2,
        30,
        2,
        24,
        2,
        30,
        2,
        24,
        2,
        30,
        2,
        24,
        2,
        30,
        2,
        24,
        2,
        7,
        4149,
        196,
        60,
        67,
        1213,
        3,
        2,
        26,
        2,
        1,
        2,
        0,
        3,
        0,
        2,
        9,
        2,
        3,
        2,
        0,
        2,
        0,
        7,
        0,
        5,
        0,
        2,
        0,
        2,
        0,
        2,
        2,
        2,
        1,
        2,
        0,
        3,
        0,
        2,
        0,
        2,
        0,
        2,
        0,
        2,
        0,
        2,
        1,
        2,
        0,
        3,
        3,
        2,
        6,
        2,
        3,
        2,
        3,
        2,
        0,
        2,
        9,
        2,
        16,
        6,
        2,
        2,
        4,
        2,
        16,
        4421,
        42710,
        42,
        4148,
        12,
        221,
        3,
        5761,
        15,
        7472,
        3104,
        541,
      ],
      f = [
        509,
        0,
        227,
        0,
        150,
        4,
        294,
        9,
        1368,
        2,
        2,
        1,
        6,
        3,
        41,
        2,
        5,
        0,
        166,
        1,
        574,
        3,
        9,
        9,
        525,
        10,
        176,
        2,
        54,
        14,
        32,
        9,
        16,
        3,
        46,
        10,
        54,
        9,
        7,
        2,
        37,
        13,
        2,
        9,
        6,
        1,
        45,
        0,
        13,
        2,
        49,
        13,
        9,
        3,
        4,
        9,
        83,
        11,
        7,
        0,
        161,
        11,
        6,
        9,
        7,
        3,
        56,
        1,
        2,
        6,
        3,
        1,
        3,
        2,
        10,
        0,
        11,
        1,
        3,
        6,
        4,
        4,
        193,
        17,
        10,
        9,
        5,
        0,
        82,
        19,
        13,
        9,
        214,
        6,
        3,
        8,
        28,
        1,
        83,
        16,
        16,
        9,
        82,
        12,
        9,
        9,
        84,
        14,
        5,
        9,
        243,
        14,
        166,
        9,
        280,
        9,
        41,
        6,
        2,
        3,
        9,
        0,
        10,
        10,
        47,
        15,
        406,
        7,
        2,
        7,
        17,
        9,
        57,
        21,
        2,
        13,
        123,
        5,
        4,
        0,
        2,
        1,
        2,
        6,
        2,
        0,
        9,
        9,
        49,
        4,
        2,
        1,
        2,
        4,
        9,
        9,
        330,
        3,
        19306,
        9,
        135,
        4,
        60,
        6,
        26,
        9,
        1016,
        45,
        17,
        3,
        19723,
        1,
        5319,
        4,
        4,
        5,
        9,
        7,
        3,
        6,
        31,
        3,
        149,
        2,
        1418,
        49,
        513,
        54,
        5,
        49,
        9,
        0,
        15,
        0,
        23,
        4,
        2,
        14,
        1361,
        6,
        2,
        16,
        3,
        6,
        2,
        1,
        2,
        4,
        2214,
        6,
        110,
        6,
        6,
        9,
        792487,
        239,
      ];
    function d(t, e) {
      for (var i = 65536, n = 0; n < e.length; n += 2) {
        if ((i += e[n]) > t) return !1;
        if ((i += e[n + 1]) >= t) return !0;
      }
    }
    function p(t, e) {
      return t < 65
        ? 36 === t
        : t < 91 ||
            (t < 97
              ? 95 === t
              : t < 123 ||
                (t <= 65535
                  ? t >= 170 && u.test(String.fromCharCode(t))
                  : !1 !== e && d(t, l)));
    }
    function g(t, e) {
      return t < 48
        ? 36 === t
        : t < 58 ||
            (!(t < 65) &&
              (t < 91 ||
                (t < 97
                  ? 95 === t
                  : t < 123 ||
                    (t <= 65535
                      ? t >= 170 && c.test(String.fromCharCode(t))
                      : !1 !== e && (d(t, l) || d(t, f))))));
    }
    var _ = function(t, e) {
      void 0 === e && (e = {}),
        (this.label = t),
        (this.keyword = e.keyword),
        (this.beforeExpr = !!e.beforeExpr),
        (this.startsExpr = !!e.startsExpr),
        (this.isLoop = !!e.isLoop),
        (this.isAssign = !!e.isAssign),
        (this.prefix = !!e.prefix),
        (this.postfix = !!e.postfix),
        (this.binop = e.binop || null),
        (this.updateContext = null);
    };
    function v(t, e) {
      return new _(t, { beforeExpr: !0, binop: e });
    }
    var m = { beforeExpr: !0 },
      y = { startsExpr: !0 },
      x = {};
    function w(t, e) {
      return void 0 === e && (e = {}), (e.keyword = t), (x[t] = new _(t, e));
    }
    var b = {
        num: new _('num', y),
        regexp: new _('regexp', y),
        string: new _('string', y),
        name: new _('name', y),
        eof: new _('eof'),
        bracketL: new _('[', { beforeExpr: !0, startsExpr: !0 }),
        bracketR: new _(']'),
        braceL: new _('{', { beforeExpr: !0, startsExpr: !0 }),
        braceR: new _('}'),
        parenL: new _('(', { beforeExpr: !0, startsExpr: !0 }),
        parenR: new _(')'),
        comma: new _(',', m),
        semi: new _(';', m),
        colon: new _(':', m),
        dot: new _('.'),
        question: new _('?', m),
        arrow: new _('=>', m),
        template: new _('template'),
        invalidTemplate: new _('invalidTemplate'),
        ellipsis: new _('...', m),
        backQuote: new _('`', y),
        dollarBraceL: new _('${', { beforeExpr: !0, startsExpr: !0 }),
        eq: new _('=', { beforeExpr: !0, isAssign: !0 }),
        assign: new _('_=', { beforeExpr: !0, isAssign: !0 }),
        incDec: new _('++/--', { prefix: !0, postfix: !0, startsExpr: !0 }),
        prefix: new _('!/~', { beforeExpr: !0, prefix: !0, startsExpr: !0 }),
        logicalOR: v('||', 1),
        logicalAND: v('&&', 2),
        bitwiseOR: v('|', 3),
        bitwiseXOR: v('^', 4),
        bitwiseAND: v('&', 5),
        equality: v('==/!=/===/!==', 6),
        relational: v('</>/<=/>=', 7),
        bitShift: v('<</>>/>>>', 8),
        plusMin: new _('+/-', {
          beforeExpr: !0,
          binop: 9,
          prefix: !0,
          startsExpr: !0,
        }),
        modulo: v('%', 10),
        star: v('*', 10),
        slash: v('/', 10),
        starstar: new _('**', { beforeExpr: !0 }),
        _break: w('break'),
        _case: w('case', m),
        _catch: w('catch'),
        _continue: w('continue'),
        _debugger: w('debugger'),
        _default: w('default', m),
        _do: w('do', { isLoop: !0, beforeExpr: !0 }),
        _else: w('else', m),
        _finally: w('finally'),
        _for: w('for', { isLoop: !0 }),
        _function: w('function', y),
        _if: w('if'),
        _return: w('return', m),
        _switch: w('switch'),
        _throw: w('throw', m),
        _try: w('try'),
        _var: w('var'),
        _const: w('const'),
        _while: w('while', { isLoop: !0 }),
        _with: w('with'),
        _new: w('new', { beforeExpr: !0, startsExpr: !0 }),
        _this: w('this', y),
        _super: w('super', y),
        _class: w('class', y),
        _extends: w('extends', m),
        _export: w('export'),
        _import: w('import'),
        _null: w('null', y),
        _true: w('true', y),
        _false: w('false', y),
        _in: w('in', { beforeExpr: !0, binop: 7 }),
        _instanceof: w('instanceof', { beforeExpr: !0, binop: 7 }),
        _typeof: w('typeof', { beforeExpr: !0, prefix: !0, startsExpr: !0 }),
        _void: w('void', { beforeExpr: !0, prefix: !0, startsExpr: !0 }),
        _delete: w('delete', { beforeExpr: !0, prefix: !0, startsExpr: !0 }),
      },
      C = /\r\n?|\n|\u2028|\u2029/,
      S = new RegExp(C.source, 'g');
    function k(t, e) {
      return 10 === t || 13 === t || (!e && (8232 === t || 8233 === t));
    }
    var A = /[\u1680\u180e\u2000-\u200a\u202f\u205f\u3000\ufeff]/,
      P = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g,
      I = Object.prototype,
      E = I.hasOwnProperty,
      T = I.toString;
    function L(t, e) {
      return E.call(t, e);
    }
    var M =
        Array.isArray ||
        function(t) {
          return '[object Array]' === T.call(t);
        },
      N = function(t, e) {
        (this.line = t), (this.column = e);
      };
    N.prototype.offset = function(t) {
      return new N(this.line, this.column + t);
    };
    var O = function(t, e, i) {
      (this.start = e),
        (this.end = i),
        null !== t.sourceFile && (this.source = t.sourceFile);
    };
    function V(t, e) {
      for (var i = 1, n = 0; ; ) {
        S.lastIndex = n;
        var r = S.exec(t);
        if (!(r && r.index < e)) return new N(i, e - n);
        ++i, (n = r.index + r[0].length);
      }
    }
    var z = {
      ecmaVersion: 7,
      sourceType: 'script',
      onInsertedSemicolon: null,
      onTrailingComma: null,
      allowReserved: null,
      allowReturnOutsideFunction: !1,
      allowImportExportEverywhere: !1,
      allowAwaitOutsideFunction: !1,
      allowHashBang: !1,
      locations: !1,
      onToken: null,
      onComment: null,
      ranges: !1,
      program: null,
      sourceFile: null,
      directSourceFile: null,
      preserveParens: !1,
      plugins: {},
    };
    function R(t) {
      var e = {};
      for (var i in z) e[i] = t && L(t, i) ? t[i] : z[i];
      if (
        (e.ecmaVersion >= 2015 && (e.ecmaVersion -= 2009),
        null == e.allowReserved && (e.allowReserved = e.ecmaVersion < 5),
        M(e.onToken))
      ) {
        var n = e.onToken;
        e.onToken = function(t) {
          return n.push(t);
        };
      }
      return (
        M(e.onComment) &&
          (e.onComment = (function(t, e) {
            return function(i, n, r, s, a, o) {
              var h = {
                type: i ? 'Block' : 'Line',
                value: n,
                start: r,
                end: s,
              };
              t.locations && (h.loc = new O(this, a, o)),
                t.ranges && (h.range = [r, s]),
                e.push(h);
            };
          })(e, e.onComment)),
        e
      );
    }
    var B = {};
    function D(t) {
      return new RegExp('^(?:' + t.replace(/ /g, '|') + ')$');
    }
    var F = function(t, e, i) {
      (this.options = t = R(t)),
        (this.sourceFile = t.sourceFile),
        (this.keywords = D(s[t.ecmaVersion >= 6 ? 6 : 5]));
      var r = '';
      if (!t.allowReserved) {
        for (var a = t.ecmaVersion; !(r = n[a]); a--);
        'module' === t.sourceType && (r += ' await');
      }
      this.reservedWords = D(r);
      var o = (r ? r + ' ' : '') + n.strict;
      (this.reservedWordsStrict = D(o)),
        (this.reservedWordsStrictBind = D(o + ' ' + n.strictBind)),
        (this.input = String(e)),
        (this.containsEsc = !1),
        this.loadPlugins(t.plugins),
        i
          ? ((this.pos = i),
            (this.lineStart = this.input.lastIndexOf('\n', i - 1) + 1),
            (this.curLine = this.input
              .slice(0, this.lineStart)
              .split(C).length))
          : ((this.pos = this.lineStart = 0), (this.curLine = 1)),
        (this.type = b.eof),
        (this.value = null),
        (this.start = this.end = this.pos),
        (this.startLoc = this.endLoc = this.curPosition()),
        (this.lastTokEndLoc = this.lastTokStartLoc = null),
        (this.lastTokStart = this.lastTokEnd = this.pos),
        (this.context = this.initialContext()),
        (this.exprAllowed = !0),
        (this.inModule = 'module' === t.sourceType),
        (this.strict = this.inModule || this.strictDirective(this.pos)),
        (this.potentialArrowAt = -1),
        (this.inFunction = this.inGenerator = this.inAsync = !1),
        (this.yieldPos = this.awaitPos = 0),
        (this.labels = []),
        0 === this.pos &&
          t.allowHashBang &&
          '#!' === this.input.slice(0, 2) &&
          this.skipLineComment(2),
        (this.scopeStack = []),
        this.enterFunctionScope(),
        (this.regexpState = null);
    };
    (F.prototype.isKeyword = function(t) {
      return this.keywords.test(t);
    }),
      (F.prototype.isReservedWord = function(t) {
        return this.reservedWords.test(t);
      }),
      (F.prototype.extend = function(t, e) {
        this[t] = e(this[t]);
      }),
      (F.prototype.loadPlugins = function(t) {
        for (var e in t) {
          var i = B[e];
          if (!i) throw new Error("Plugin '" + e + "' not found");
          i(this, t[e]);
        }
      }),
      (F.prototype.parse = function() {
        var t = this.options.program || this.startNode();
        return this.nextToken(), this.parseTopLevel(t);
      });
    var j = F.prototype,
      q = /^(?:'((?:\\.|[^'])*?)'|"((?:\\.|[^"])*?)"|;)/;
    function U() {
      this.shorthandAssign = this.trailingComma = this.parenthesizedAssign = this.parenthesizedBind = this.doubleProto = -1;
    }
    (j.strictDirective = function(t) {
      for (;;) {
        (P.lastIndex = t), (t += P.exec(this.input)[0].length);
        var e = q.exec(this.input.slice(t));
        if (!e) return !1;
        if ('use strict' === (e[1] || e[2])) return !0;
        t += e[0].length;
      }
    }),
      (j.eat = function(t) {
        return this.type === t && (this.next(), !0);
      }),
      (j.isContextual = function(t) {
        return this.type === b.name && this.value === t && !this.containsEsc;
      }),
      (j.eatContextual = function(t) {
        return !!this.isContextual(t) && (this.next(), !0);
      }),
      (j.expectContextual = function(t) {
        this.eatContextual(t) || this.unexpected();
      }),
      (j.canInsertSemicolon = function() {
        return (
          this.type === b.eof ||
          this.type === b.braceR ||
          C.test(this.input.slice(this.lastTokEnd, this.start))
        );
      }),
      (j.insertSemicolon = function() {
        if (this.canInsertSemicolon())
          return (
            this.options.onInsertedSemicolon &&
              this.options.onInsertedSemicolon(
                this.lastTokEnd,
                this.lastTokEndLoc
              ),
            !0
          );
      }),
      (j.semicolon = function() {
        this.eat(b.semi) || this.insertSemicolon() || this.unexpected();
      }),
      (j.afterTrailingComma = function(t, e) {
        if (this.type === t)
          return (
            this.options.onTrailingComma &&
              this.options.onTrailingComma(
                this.lastTokStart,
                this.lastTokStartLoc
              ),
            e || this.next(),
            !0
          );
      }),
      (j.expect = function(t) {
        this.eat(t) || this.unexpected();
      }),
      (j.unexpected = function(t) {
        this.raise(null != t ? t : this.start, 'Unexpected token');
      }),
      (j.checkPatternErrors = function(t, e) {
        if (t) {
          t.trailingComma > -1 &&
            this.raiseRecoverable(
              t.trailingComma,
              'Comma is not permitted after the rest element'
            );
          var i = e ? t.parenthesizedAssign : t.parenthesizedBind;
          i > -1 && this.raiseRecoverable(i, 'Parenthesized pattern');
        }
      }),
      (j.checkExpressionErrors = function(t, e) {
        if (!t) return !1;
        var i = t.shorthandAssign,
          n = t.doubleProto;
        if (!e) return i >= 0 || n >= 0;
        i >= 0 &&
          this.raise(
            i,
            'Shorthand property assignments are valid only in destructuring patterns'
          ),
          n >= 0 &&
            this.raiseRecoverable(n, 'Redefinition of __proto__ property');
      }),
      (j.checkYieldAwaitInDefaultParams = function() {
        this.yieldPos &&
          (!this.awaitPos || this.yieldPos < this.awaitPos) &&
          this.raise(
            this.yieldPos,
            'Yield expression cannot be a default value'
          ),
          this.awaitPos &&
            this.raise(
              this.awaitPos,
              'Await expression cannot be a default value'
            );
      }),
      (j.isSimpleAssignTarget = function(t) {
        return 'ParenthesizedExpression' === t.type
          ? this.isSimpleAssignTarget(t.expression)
          : 'Identifier' === t.type || 'MemberExpression' === t.type;
      });
    var H = F.prototype;
    H.parseTopLevel = function(t) {
      var e = {};
      for (t.body || (t.body = []); this.type !== b.eof; ) {
        var i = this.parseStatement(!0, !0, e);
        t.body.push(i);
      }
      return (
        this.adaptDirectivePrologue(t.body),
        this.next(),
        this.options.ecmaVersion >= 6 &&
          (t.sourceType = this.options.sourceType),
        this.finishNode(t, 'Program')
      );
    };
    var G = { kind: 'loop' },
      W = { kind: 'switch' };
    (H.isLet = function() {
      if (this.options.ecmaVersion < 6 || !this.isContextual('let')) return !1;
      P.lastIndex = this.pos;
      var t = P.exec(this.input),
        e = this.pos + t[0].length,
        i = this.input.charCodeAt(e);
      if (91 === i || 123 === i) return !0;
      if (p(i, !0)) {
        for (var n = e + 1; g(this.input.charCodeAt(n), !0); ) ++n;
        var r = this.input.slice(e, n);
        if (!a.test(r)) return !0;
      }
      return !1;
    }),
      (H.isAsyncFunction = function() {
        if (this.options.ecmaVersion < 8 || !this.isContextual('async'))
          return !1;
        P.lastIndex = this.pos;
        var t = P.exec(this.input),
          e = this.pos + t[0].length;
        return !(
          C.test(this.input.slice(this.pos, e)) ||
          'function' !== this.input.slice(e, e + 8) ||
          (e + 8 !== this.input.length && g(this.input.charAt(e + 8)))
        );
      }),
      (H.parseStatement = function(t, e, i) {
        var n,
          r = this.type,
          s = this.startNode();
        switch ((this.isLet() && ((r = b._var), (n = 'let')), r)) {
          case b._break:
          case b._continue:
            return this.parseBreakContinueStatement(s, r.keyword);
          case b._debugger:
            return this.parseDebuggerStatement(s);
          case b._do:
            return this.parseDoStatement(s);
          case b._for:
            return this.parseForStatement(s);
          case b._function:
            return (
              !t && this.options.ecmaVersion >= 6 && this.unexpected(),
              this.parseFunctionStatement(s, !1)
            );
          case b._class:
            return t || this.unexpected(), this.parseClass(s, !0);
          case b._if:
            return this.parseIfStatement(s);
          case b._return:
            return this.parseReturnStatement(s);
          case b._switch:
            return this.parseSwitchStatement(s);
          case b._throw:
            return this.parseThrowStatement(s);
          case b._try:
            return this.parseTryStatement(s);
          case b._const:
          case b._var:
            return (
              (n = n || this.value),
              t || 'var' === n || this.unexpected(),
              this.parseVarStatement(s, n)
            );
          case b._while:
            return this.parseWhileStatement(s);
          case b._with:
            return this.parseWithStatement(s);
          case b.braceL:
            return this.parseBlock();
          case b.semi:
            return this.parseEmptyStatement(s);
          case b._export:
          case b._import:
            return (
              this.options.allowImportExportEverywhere ||
                (e ||
                  this.raise(
                    this.start,
                    "'import' and 'export' may only appear at the top level"
                  ),
                this.inModule ||
                  this.raise(
                    this.start,
                    "'import' and 'export' may appear only with 'sourceType: module'"
                  )),
              r === b._import ? this.parseImport(s) : this.parseExport(s, i)
            );
          default:
            if (this.isAsyncFunction())
              return (
                t || this.unexpected(),
                this.next(),
                this.parseFunctionStatement(s, !0)
              );
            var a = this.value,
              o = this.parseExpression();
            return r === b.name && 'Identifier' === o.type && this.eat(b.colon)
              ? this.parseLabeledStatement(s, a, o)
              : this.parseExpressionStatement(s, o);
        }
      }),
      (H.parseBreakContinueStatement = function(t, e) {
        var i = 'break' === e;
        this.next(),
          this.eat(b.semi) || this.insertSemicolon()
            ? (t.label = null)
            : this.type !== b.name
              ? this.unexpected()
              : ((t.label = this.parseIdent()), this.semicolon());
        for (var n = 0; n < this.labels.length; ++n) {
          var r = this.labels[n];
          if (null == t.label || r.name === t.label.name) {
            if (null != r.kind && (i || 'loop' === r.kind)) break;
            if (t.label && i) break;
          }
        }
        return (
          n === this.labels.length && this.raise(t.start, 'Unsyntactic ' + e),
          this.finishNode(t, i ? 'BreakStatement' : 'ContinueStatement')
        );
      }),
      (H.parseDebuggerStatement = function(t) {
        return (
          this.next(), this.semicolon(), this.finishNode(t, 'DebuggerStatement')
        );
      }),
      (H.parseDoStatement = function(t) {
        return (
          this.next(),
          this.labels.push(G),
          (t.body = this.parseStatement(!1)),
          this.labels.pop(),
          this.expect(b._while),
          (t.test = this.parseParenExpression()),
          this.options.ecmaVersion >= 6 ? this.eat(b.semi) : this.semicolon(),
          this.finishNode(t, 'DoWhileStatement')
        );
      }),
      (H.parseForStatement = function(t) {
        this.next();
        var e =
          this.options.ecmaVersion >= 9 &&
          this.inAsync &&
          this.eatContextual('await')
            ? this.lastTokStart
            : -1;
        if (
          (this.labels.push(G),
          this.enterLexicalScope(),
          this.expect(b.parenL),
          this.type === b.semi)
        )
          return e > -1 && this.unexpected(e), this.parseFor(t, null);
        var i = this.isLet();
        if (this.type === b._var || this.type === b._const || i) {
          var n = this.startNode(),
            r = i ? 'let' : this.value;
          return (
            this.next(),
            this.parseVar(n, !0, r),
            this.finishNode(n, 'VariableDeclaration'),
            !(
              this.type === b._in ||
              (this.options.ecmaVersion >= 6 && this.isContextual('of'))
            ) ||
            1 !== n.declarations.length ||
            ('var' !== r && n.declarations[0].init)
              ? (e > -1 && this.unexpected(e), this.parseFor(t, n))
              : (this.options.ecmaVersion >= 9 &&
                  (this.type === b._in
                    ? e > -1 && this.unexpected(e)
                    : (t.await = e > -1)),
                this.parseForIn(t, n))
          );
        }
        var s = new U(),
          a = this.parseExpression(!0, s);
        return this.type === b._in ||
          (this.options.ecmaVersion >= 6 && this.isContextual('of'))
          ? (this.options.ecmaVersion >= 9 &&
              (this.type === b._in
                ? e > -1 && this.unexpected(e)
                : (t.await = e > -1)),
            this.toAssignable(a, !1, s),
            this.checkLVal(a),
            this.parseForIn(t, a))
          : (this.checkExpressionErrors(s, !0),
            e > -1 && this.unexpected(e),
            this.parseFor(t, a));
      }),
      (H.parseFunctionStatement = function(t, e) {
        return this.next(), this.parseFunction(t, !0, !1, e);
      }),
      (H.parseIfStatement = function(t) {
        return (
          this.next(),
          (t.test = this.parseParenExpression()),
          (t.consequent = this.parseStatement(
            !this.strict && this.type === b._function
          )),
          (t.alternate = this.eat(b._else)
            ? this.parseStatement(!this.strict && this.type === b._function)
            : null),
          this.finishNode(t, 'IfStatement')
        );
      }),
      (H.parseReturnStatement = function(t) {
        return (
          this.inFunction ||
            this.options.allowReturnOutsideFunction ||
            this.raise(this.start, "'return' outside of function"),
          this.next(),
          this.eat(b.semi) || this.insertSemicolon()
            ? (t.argument = null)
            : ((t.argument = this.parseExpression()), this.semicolon()),
          this.finishNode(t, 'ReturnStatement')
        );
      }),
      (H.parseSwitchStatement = function(t) {
        var e;
        this.next(),
          (t.discriminant = this.parseParenExpression()),
          (t.cases = []),
          this.expect(b.braceL),
          this.labels.push(W),
          this.enterLexicalScope();
        for (var i = !1; this.type !== b.braceR; )
          if (this.type === b._case || this.type === b._default) {
            var n = this.type === b._case;
            e && this.finishNode(e, 'SwitchCase'),
              t.cases.push((e = this.startNode())),
              (e.consequent = []),
              this.next(),
              n
                ? (e.test = this.parseExpression())
                : (i &&
                    this.raiseRecoverable(
                      this.lastTokStart,
                      'Multiple default clauses'
                    ),
                  (i = !0),
                  (e.test = null)),
              this.expect(b.colon);
          } else
            e || this.unexpected(), e.consequent.push(this.parseStatement(!0));
        return (
          this.exitLexicalScope(),
          e && this.finishNode(e, 'SwitchCase'),
          this.next(),
          this.labels.pop(),
          this.finishNode(t, 'SwitchStatement')
        );
      }),
      (H.parseThrowStatement = function(t) {
        return (
          this.next(),
          C.test(this.input.slice(this.lastTokEnd, this.start)) &&
            this.raise(this.lastTokEnd, 'Illegal newline after throw'),
          (t.argument = this.parseExpression()),
          this.semicolon(),
          this.finishNode(t, 'ThrowStatement')
        );
      });
    var Z = [];
    (H.parseTryStatement = function(t) {
      if (
        (this.next(),
        (t.block = this.parseBlock()),
        (t.handler = null),
        this.type === b._catch)
      ) {
        var e = this.startNode();
        this.next(),
          this.eat(b.parenL)
            ? ((e.param = this.parseBindingAtom()),
              this.enterLexicalScope(),
              this.checkLVal(e.param, 'let'),
              this.expect(b.parenR))
            : (this.options.ecmaVersion < 10 && this.unexpected(),
              (e.param = null),
              this.enterLexicalScope()),
          (e.body = this.parseBlock(!1)),
          this.exitLexicalScope(),
          (t.handler = this.finishNode(e, 'CatchClause'));
      }
      return (
        (t.finalizer = this.eat(b._finally) ? this.parseBlock() : null),
        t.handler ||
          t.finalizer ||
          this.raise(t.start, 'Missing catch or finally clause'),
        this.finishNode(t, 'TryStatement')
      );
    }),
      (H.parseVarStatement = function(t, e) {
        return (
          this.next(),
          this.parseVar(t, !1, e),
          this.semicolon(),
          this.finishNode(t, 'VariableDeclaration')
        );
      }),
      (H.parseWhileStatement = function(t) {
        return (
          this.next(),
          (t.test = this.parseParenExpression()),
          this.labels.push(G),
          (t.body = this.parseStatement(!1)),
          this.labels.pop(),
          this.finishNode(t, 'WhileStatement')
        );
      }),
      (H.parseWithStatement = function(t) {
        return (
          this.strict && this.raise(this.start, "'with' in strict mode"),
          this.next(),
          (t.object = this.parseParenExpression()),
          (t.body = this.parseStatement(!1)),
          this.finishNode(t, 'WithStatement')
        );
      }),
      (H.parseEmptyStatement = function(t) {
        return this.next(), this.finishNode(t, 'EmptyStatement');
      }),
      (H.parseLabeledStatement = function(t, e, i) {
        for (var n = 0, r = this.labels; n < r.length; n += 1) {
          r[n].name === e &&
            this.raise(i.start, "Label '" + e + "' is already declared");
        }
        for (
          var s = this.type.isLoop
              ? 'loop'
              : this.type === b._switch
                ? 'switch'
                : null,
            a = this.labels.length - 1;
          a >= 0;
          a--
        ) {
          var o = this.labels[a];
          if (o.statementStart !== t.start) break;
          (o.statementStart = this.start), (o.kind = s);
        }
        return (
          this.labels.push({ name: e, kind: s, statementStart: this.start }),
          (t.body = this.parseStatement(!0)),
          ('ClassDeclaration' === t.body.type ||
            ('VariableDeclaration' === t.body.type && 'var' !== t.body.kind) ||
            ('FunctionDeclaration' === t.body.type &&
              (this.strict || t.body.generator))) &&
            this.raiseRecoverable(t.body.start, 'Invalid labeled declaration'),
          this.labels.pop(),
          (t.label = i),
          this.finishNode(t, 'LabeledStatement')
        );
      }),
      (H.parseExpressionStatement = function(t, e) {
        return (
          (t.expression = e),
          this.semicolon(),
          this.finishNode(t, 'ExpressionStatement')
        );
      }),
      (H.parseBlock = function(t) {
        void 0 === t && (t = !0);
        var e = this.startNode();
        for (
          e.body = [], this.expect(b.braceL), t && this.enterLexicalScope();
          !this.eat(b.braceR);

        ) {
          var i = this.parseStatement(!0);
          e.body.push(i);
        }
        return (
          t && this.exitLexicalScope(), this.finishNode(e, 'BlockStatement')
        );
      }),
      (H.parseFor = function(t, e) {
        return (
          (t.init = e),
          this.expect(b.semi),
          (t.test = this.type === b.semi ? null : this.parseExpression()),
          this.expect(b.semi),
          (t.update = this.type === b.parenR ? null : this.parseExpression()),
          this.expect(b.parenR),
          this.exitLexicalScope(),
          (t.body = this.parseStatement(!1)),
          this.labels.pop(),
          this.finishNode(t, 'ForStatement')
        );
      }),
      (H.parseForIn = function(t, e) {
        var i = this.type === b._in ? 'ForInStatement' : 'ForOfStatement';
        return (
          this.next(),
          'ForInStatement' === i &&
            ('AssignmentPattern' === e.type ||
              ('VariableDeclaration' === e.type &&
                null != e.declarations[0].init &&
                (this.strict || 'Identifier' !== e.declarations[0].id.type))) &&
            this.raise(e.start, 'Invalid assignment in for-in loop head'),
          (t.left = e),
          (t.right =
            'ForInStatement' === i
              ? this.parseExpression()
              : this.parseMaybeAssign()),
          this.expect(b.parenR),
          this.exitLexicalScope(),
          (t.body = this.parseStatement(!1)),
          this.labels.pop(),
          this.finishNode(t, i)
        );
      }),
      (H.parseVar = function(t, e, i) {
        for (t.declarations = [], t.kind = i; ; ) {
          var n = this.startNode();
          if (
            (this.parseVarId(n, i),
            this.eat(b.eq)
              ? (n.init = this.parseMaybeAssign(e))
              : 'const' !== i ||
                this.type === b._in ||
                (this.options.ecmaVersion >= 6 && this.isContextual('of'))
                ? 'Identifier' === n.id.type ||
                  (e && (this.type === b._in || this.isContextual('of')))
                  ? (n.init = null)
                  : this.raise(
                      this.lastTokEnd,
                      'Complex binding patterns require an initialization value'
                    )
                : this.unexpected(),
            t.declarations.push(this.finishNode(n, 'VariableDeclarator')),
            !this.eat(b.comma))
          )
            break;
        }
        return t;
      }),
      (H.parseVarId = function(t, e) {
        (t.id = this.parseBindingAtom(e)), this.checkLVal(t.id, e, !1);
      }),
      (H.parseFunction = function(t, e, i, n) {
        this.initFunction(t),
          (this.options.ecmaVersion >= 9 ||
            (this.options.ecmaVersion >= 6 && !n)) &&
            (t.generator = this.eat(b.star)),
          this.options.ecmaVersion >= 8 && (t.async = !!n),
          e &&
            ((t.id =
              'nullableID' === e && this.type !== b.name
                ? null
                : this.parseIdent()),
            t.id && this.checkLVal(t.id, 'var'));
        var r = this.inGenerator,
          s = this.inAsync,
          a = this.yieldPos,
          o = this.awaitPos,
          h = this.inFunction;
        return (
          (this.inGenerator = t.generator),
          (this.inAsync = t.async),
          (this.yieldPos = 0),
          (this.awaitPos = 0),
          (this.inFunction = !0),
          this.enterFunctionScope(),
          e || (t.id = this.type === b.name ? this.parseIdent() : null),
          this.parseFunctionParams(t),
          this.parseFunctionBody(t, i),
          (this.inGenerator = r),
          (this.inAsync = s),
          (this.yieldPos = a),
          (this.awaitPos = o),
          (this.inFunction = h),
          this.finishNode(t, e ? 'FunctionDeclaration' : 'FunctionExpression')
        );
      }),
      (H.parseFunctionParams = function(t) {
        this.expect(b.parenL),
          (t.params = this.parseBindingList(
            b.parenR,
            !1,
            this.options.ecmaVersion >= 8
          )),
          this.checkYieldAwaitInDefaultParams();
      }),
      (H.parseClass = function(t, e) {
        this.next(), this.parseClassId(t, e), this.parseClassSuper(t);
        var i = this.startNode(),
          n = !1;
        for (i.body = [], this.expect(b.braceL); !this.eat(b.braceR); ) {
          var r = this.parseClassMember(i);
          r &&
            'MethodDefinition' === r.type &&
            'constructor' === r.kind &&
            (n &&
              this.raise(r.start, 'Duplicate constructor in the same class'),
            (n = !0));
        }
        return (
          (t.body = this.finishNode(i, 'ClassBody')),
          this.finishNode(t, e ? 'ClassDeclaration' : 'ClassExpression')
        );
      }),
      (H.parseClassMember = function(t) {
        var e = this;
        if (this.eat(b.semi)) return null;
        var i = this.startNode(),
          n = function(t, n) {
            void 0 === n && (n = !1);
            var r = e.start,
              s = e.startLoc;
            return (
              !!e.eatContextual(t) &&
              (!(e.type === b.parenL || (n && e.canInsertSemicolon())) ||
                (i.key && e.unexpected(),
                (i.computed = !1),
                (i.key = e.startNodeAt(r, s)),
                (i.key.name = t),
                e.finishNode(i.key, 'Identifier'),
                !1))
            );
          };
        (i.kind = 'method'), (i.static = n('static'));
        var r = this.eat(b.star),
          s = !1;
        r ||
          (this.options.ecmaVersion >= 8 && n('async', !0)
            ? ((s = !0),
              (r = this.options.ecmaVersion >= 9 && this.eat(b.star)))
            : n('get')
              ? (i.kind = 'get')
              : n('set') && (i.kind = 'set')),
          i.key || this.parsePropertyName(i);
        var a = i.key;
        return (
          i.computed ||
          i.static ||
          !(
            ('Identifier' === a.type && 'constructor' === a.name) ||
            ('Literal' === a.type && 'constructor' === a.value)
          )
            ? i.static &&
              'Identifier' === a.type &&
              'prototype' === a.name &&
              this.raise(
                a.start,
                'Classes may not have a static property named prototype'
              )
            : ('method' !== i.kind &&
                this.raise(a.start, "Constructor can't have get/set modifier"),
              r && this.raise(a.start, "Constructor can't be a generator"),
              s && this.raise(a.start, "Constructor can't be an async method"),
              (i.kind = 'constructor')),
          this.parseClassMethod(t, i, r, s),
          'get' === i.kind &&
            0 !== i.value.params.length &&
            this.raiseRecoverable(
              i.value.start,
              'getter should have no params'
            ),
          'set' === i.kind &&
            1 !== i.value.params.length &&
            this.raiseRecoverable(
              i.value.start,
              'setter should have exactly one param'
            ),
          'set' === i.kind &&
            'RestElement' === i.value.params[0].type &&
            this.raiseRecoverable(
              i.value.params[0].start,
              'Setter cannot use rest params'
            ),
          i
        );
      }),
      (H.parseClassMethod = function(t, e, i, n) {
        (e.value = this.parseMethod(i, n)),
          t.body.push(this.finishNode(e, 'MethodDefinition'));
      }),
      (H.parseClassId = function(t, e) {
        t.id =
          this.type === b.name
            ? this.parseIdent()
            : !0 === e
              ? this.unexpected()
              : null;
      }),
      (H.parseClassSuper = function(t) {
        t.superClass = this.eat(b._extends) ? this.parseExprSubscripts() : null;
      }),
      (H.parseExport = function(t, e) {
        if ((this.next(), this.eat(b.star)))
          return (
            this.expectContextual('from'),
            this.type !== b.string && this.unexpected(),
            (t.source = this.parseExprAtom()),
            this.semicolon(),
            this.finishNode(t, 'ExportAllDeclaration')
          );
        if (this.eat(b._default)) {
          var i;
          if (
            (this.checkExport(e, 'default', this.lastTokStart),
            this.type === b._function || (i = this.isAsyncFunction()))
          ) {
            var n = this.startNode();
            this.next(),
              i && this.next(),
              (t.declaration = this.parseFunction(n, 'nullableID', !1, i));
          } else if (this.type === b._class) {
            var r = this.startNode();
            t.declaration = this.parseClass(r, 'nullableID');
          } else (t.declaration = this.parseMaybeAssign()), this.semicolon();
          return this.finishNode(t, 'ExportDefaultDeclaration');
        }
        if (this.shouldParseExportStatement())
          (t.declaration = this.parseStatement(!0)),
            'VariableDeclaration' === t.declaration.type
              ? this.checkVariableExport(e, t.declaration.declarations)
              : this.checkExport(
                  e,
                  t.declaration.id.name,
                  t.declaration.id.start
                ),
            (t.specifiers = []),
            (t.source = null);
        else {
          if (
            ((t.declaration = null),
            (t.specifiers = this.parseExportSpecifiers(e)),
            this.eatContextual('from'))
          )
            this.type !== b.string && this.unexpected(),
              (t.source = this.parseExprAtom());
          else {
            for (var s = 0, a = t.specifiers; s < a.length; s += 1) {
              var o = a[s];
              this.checkUnreserved(o.local);
            }
            t.source = null;
          }
          this.semicolon();
        }
        return this.finishNode(t, 'ExportNamedDeclaration');
      }),
      (H.checkExport = function(t, e, i) {
        t &&
          (L(t, e) && this.raiseRecoverable(i, "Duplicate export '" + e + "'"),
          (t[e] = !0));
      }),
      (H.checkPatternExport = function(t, e) {
        var i = e.type;
        if ('Identifier' === i) this.checkExport(t, e.name, e.start);
        else if ('ObjectPattern' === i)
          for (var n = 0, r = e.properties; n < r.length; n += 1) {
            var s = r[n];
            this.checkPatternExport(t, s);
          }
        else if ('ArrayPattern' === i)
          for (var a = 0, o = e.elements; a < o.length; a += 1) {
            var h = o[a];
            h && this.checkPatternExport(t, h);
          }
        else
          'Property' === i
            ? this.checkPatternExport(t, e.value)
            : 'AssignmentPattern' === i
              ? this.checkPatternExport(t, e.left)
              : 'RestElement' === i
                ? this.checkPatternExport(t, e.argument)
                : 'ParenthesizedExpression' === i &&
                  this.checkPatternExport(t, e.expression);
      }),
      (H.checkVariableExport = function(t, e) {
        if (t)
          for (var i = 0, n = e; i < n.length; i += 1) {
            var r = n[i];
            this.checkPatternExport(t, r.id);
          }
      }),
      (H.shouldParseExportStatement = function() {
        return (
          'var' === this.type.keyword ||
          'const' === this.type.keyword ||
          'class' === this.type.keyword ||
          'function' === this.type.keyword ||
          this.isLet() ||
          this.isAsyncFunction()
        );
      }),
      (H.parseExportSpecifiers = function(t) {
        var e = [],
          i = !0;
        for (this.expect(b.braceL); !this.eat(b.braceR); ) {
          if (i) i = !1;
          else if ((this.expect(b.comma), this.afterTrailingComma(b.braceR)))
            break;
          var n = this.startNode();
          (n.local = this.parseIdent(!0)),
            (n.exported = this.eatContextual('as')
              ? this.parseIdent(!0)
              : n.local),
            this.checkExport(t, n.exported.name, n.exported.start),
            e.push(this.finishNode(n, 'ExportSpecifier'));
        }
        return e;
      }),
      (H.parseImport = function(t) {
        return (
          this.next(),
          this.type === b.string
            ? ((t.specifiers = Z), (t.source = this.parseExprAtom()))
            : ((t.specifiers = this.parseImportSpecifiers()),
              this.expectContextual('from'),
              (t.source =
                this.type === b.string
                  ? this.parseExprAtom()
                  : this.unexpected())),
          this.semicolon(),
          this.finishNode(t, 'ImportDeclaration')
        );
      }),
      (H.parseImportSpecifiers = function() {
        var t = [],
          e = !0;
        if (this.type === b.name) {
          var i = this.startNode();
          if (
            ((i.local = this.parseIdent()),
            this.checkLVal(i.local, 'let'),
            t.push(this.finishNode(i, 'ImportDefaultSpecifier')),
            !this.eat(b.comma))
          )
            return t;
        }
        if (this.type === b.star) {
          var n = this.startNode();
          return (
            this.next(),
            this.expectContextual('as'),
            (n.local = this.parseIdent()),
            this.checkLVal(n.local, 'let'),
            t.push(this.finishNode(n, 'ImportNamespaceSpecifier')),
            t
          );
        }
        for (this.expect(b.braceL); !this.eat(b.braceR); ) {
          if (e) e = !1;
          else if ((this.expect(b.comma), this.afterTrailingComma(b.braceR)))
            break;
          var r = this.startNode();
          (r.imported = this.parseIdent(!0)),
            this.eatContextual('as')
              ? (r.local = this.parseIdent())
              : (this.checkUnreserved(r.imported), (r.local = r.imported)),
            this.checkLVal(r.local, 'let'),
            t.push(this.finishNode(r, 'ImportSpecifier'));
        }
        return t;
      }),
      (H.adaptDirectivePrologue = function(t) {
        for (var e = 0; e < t.length && this.isDirectiveCandidate(t[e]); ++e)
          t[e].directive = t[e].expression.raw.slice(1, -1);
      }),
      (H.isDirectiveCandidate = function(t) {
        return (
          'ExpressionStatement' === t.type &&
          'Literal' === t.expression.type &&
          'string' == typeof t.expression.value &&
          ('"' === this.input[t.start] || "'" === this.input[t.start])
        );
      });
    var $ = F.prototype;
    ($.toAssignable = function(t, e, i) {
      if (this.options.ecmaVersion >= 6 && t)
        switch (t.type) {
          case 'Identifier':
            this.inAsync &&
              'await' === t.name &&
              this.raise(
                t.start,
                "Can not use 'await' as identifier inside an async function"
              );
            break;
          case 'ObjectPattern':
          case 'ArrayPattern':
          case 'RestElement':
            break;
          case 'ObjectExpression':
            (t.type = 'ObjectPattern'), i && this.checkPatternErrors(i, !0);
            for (var n = 0, r = t.properties; n < r.length; n += 1) {
              var s = r[n];
              this.toAssignable(s, e),
                'RestElement' !== s.type ||
                  ('ArrayPattern' !== s.argument.type &&
                    'ObjectPattern' !== s.argument.type) ||
                  this.raise(s.argument.start, 'Unexpected token');
            }
            break;
          case 'Property':
            'init' !== t.kind &&
              this.raise(
                t.key.start,
                "Object pattern can't contain getter or setter"
              ),
              this.toAssignable(t.value, e);
            break;
          case 'ArrayExpression':
            (t.type = 'ArrayPattern'),
              i && this.checkPatternErrors(i, !0),
              this.toAssignableList(t.elements, e);
            break;
          case 'SpreadElement':
            (t.type = 'RestElement'),
              this.toAssignable(t.argument, e),
              'AssignmentPattern' === t.argument.type &&
                this.raise(
                  t.argument.start,
                  'Rest elements cannot have a default value'
                );
            break;
          case 'AssignmentExpression':
            '=' !== t.operator &&
              this.raise(
                t.left.end,
                "Only '=' operator can be used for specifying default value."
              ),
              (t.type = 'AssignmentPattern'),
              delete t.operator,
              this.toAssignable(t.left, e);
          case 'AssignmentPattern':
            break;
          case 'ParenthesizedExpression':
            this.toAssignable(t.expression, e);
            break;
          case 'MemberExpression':
            if (!e) break;
          default:
            this.raise(t.start, 'Assigning to rvalue');
        }
      else i && this.checkPatternErrors(i, !0);
      return t;
    }),
      ($.toAssignableList = function(t, e) {
        for (var i = t.length, n = 0; n < i; n++) {
          var r = t[n];
          r && this.toAssignable(r, e);
        }
        if (i) {
          var s = t[i - 1];
          6 === this.options.ecmaVersion &&
            e &&
            s &&
            'RestElement' === s.type &&
            'Identifier' !== s.argument.type &&
            this.unexpected(s.argument.start);
        }
        return t;
      }),
      ($.parseSpread = function(t) {
        var e = this.startNode();
        return (
          this.next(),
          (e.argument = this.parseMaybeAssign(!1, t)),
          this.finishNode(e, 'SpreadElement')
        );
      }),
      ($.parseRestBinding = function() {
        var t = this.startNode();
        return (
          this.next(),
          6 === this.options.ecmaVersion &&
            this.type !== b.name &&
            this.unexpected(),
          (t.argument = this.parseBindingAtom()),
          this.finishNode(t, 'RestElement')
        );
      }),
      ($.parseBindingAtom = function() {
        if (this.options.ecmaVersion >= 6)
          switch (this.type) {
            case b.bracketL:
              var t = this.startNode();
              return (
                this.next(),
                (t.elements = this.parseBindingList(b.bracketR, !0, !0)),
                this.finishNode(t, 'ArrayPattern')
              );
            case b.braceL:
              return this.parseObj(!0);
          }
        return this.parseIdent();
      }),
      ($.parseBindingList = function(t, e, i) {
        for (var n = [], r = !0; !this.eat(t); )
          if ((r ? (r = !1) : this.expect(b.comma), e && this.type === b.comma))
            n.push(null);
          else {
            if (i && this.afterTrailingComma(t)) break;
            if (this.type === b.ellipsis) {
              var s = this.parseRestBinding();
              this.parseBindingListItem(s),
                n.push(s),
                this.type === b.comma &&
                  this.raise(
                    this.start,
                    'Comma is not permitted after the rest element'
                  ),
                this.expect(t);
              break;
            }
            var a = this.parseMaybeDefault(this.start, this.startLoc);
            this.parseBindingListItem(a), n.push(a);
          }
        return n;
      }),
      ($.parseBindingListItem = function(t) {
        return t;
      }),
      ($.parseMaybeDefault = function(t, e, i) {
        if (
          ((i = i || this.parseBindingAtom()),
          this.options.ecmaVersion < 6 || !this.eat(b.eq))
        )
          return i;
        var n = this.startNodeAt(t, e);
        return (
          (n.left = i),
          (n.right = this.parseMaybeAssign()),
          this.finishNode(n, 'AssignmentPattern')
        );
      }),
      ($.checkLVal = function(t, e, i) {
        switch (t.type) {
          case 'Identifier':
            this.strict &&
              this.reservedWordsStrictBind.test(t.name) &&
              this.raiseRecoverable(
                t.start,
                (e ? 'Binding ' : 'Assigning to ') + t.name + ' in strict mode'
              ),
              i &&
                (L(i, t.name) &&
                  this.raiseRecoverable(t.start, 'Argument name clash'),
                (i[t.name] = !0)),
              e &&
                'none' !== e &&
                ((('var' === e && !this.canDeclareVarName(t.name)) ||
                  ('var' !== e && !this.canDeclareLexicalName(t.name))) &&
                  this.raiseRecoverable(
                    t.start,
                    "Identifier '" + t.name + "' has already been declared"
                  ),
                'var' === e
                  ? this.declareVarName(t.name)
                  : this.declareLexicalName(t.name));
            break;
          case 'MemberExpression':
            e && this.raiseRecoverable(t.start, 'Binding member expression');
            break;
          case 'ObjectPattern':
            for (var n = 0, r = t.properties; n < r.length; n += 1) {
              var s = r[n];
              this.checkLVal(s, e, i);
            }
            break;
          case 'Property':
            this.checkLVal(t.value, e, i);
            break;
          case 'ArrayPattern':
            for (var a = 0, o = t.elements; a < o.length; a += 1) {
              var h = o[a];
              h && this.checkLVal(h, e, i);
            }
            break;
          case 'AssignmentPattern':
            this.checkLVal(t.left, e, i);
            break;
          case 'RestElement':
            this.checkLVal(t.argument, e, i);
            break;
          case 'ParenthesizedExpression':
            this.checkLVal(t.expression, e, i);
            break;
          default:
            this.raise(t.start, (e ? 'Binding' : 'Assigning to') + ' rvalue');
        }
      });
    var K = F.prototype;
    (K.checkPropClash = function(t, e, i) {
      if (
        !(
          (this.options.ecmaVersion >= 9 && 'SpreadElement' === t.type) ||
          (this.options.ecmaVersion >= 6 &&
            (t.computed || t.method || t.shorthand))
        )
      ) {
        var n,
          r = t.key;
        switch (r.type) {
          case 'Identifier':
            n = r.name;
            break;
          case 'Literal':
            n = String(r.value);
            break;
          default:
            return;
        }
        var s = t.kind;
        if (this.options.ecmaVersion >= 6)
          '__proto__' === n &&
            'init' === s &&
            (e.proto &&
              (i && i.doubleProto < 0
                ? (i.doubleProto = r.start)
                : this.raiseRecoverable(
                    r.start,
                    'Redefinition of __proto__ property'
                  )),
            (e.proto = !0));
        else {
          var a = e[(n = '$' + n)];
          if (a)
            ('init' === s
              ? (this.strict && a.init) || a.get || a.set
              : a.init || a[s]) &&
              this.raiseRecoverable(r.start, 'Redefinition of property');
          else a = e[n] = { init: !1, get: !1, set: !1 };
          a[s] = !0;
        }
      }
    }),
      (K.parseExpression = function(t, e) {
        var i = this.start,
          n = this.startLoc,
          r = this.parseMaybeAssign(t, e);
        if (this.type === b.comma) {
          var s = this.startNodeAt(i, n);
          for (s.expressions = [r]; this.eat(b.comma); )
            s.expressions.push(this.parseMaybeAssign(t, e));
          return this.finishNode(s, 'SequenceExpression');
        }
        return r;
      }),
      (K.parseMaybeAssign = function(t, e, i) {
        if (this.inGenerator && this.isContextual('yield'))
          return this.parseYield();
        var n = !1,
          r = -1,
          s = -1;
        e
          ? ((r = e.parenthesizedAssign),
            (s = e.trailingComma),
            (e.parenthesizedAssign = e.trailingComma = -1))
          : ((e = new U()), (n = !0));
        var a = this.start,
          o = this.startLoc;
        (this.type !== b.parenL && this.type !== b.name) ||
          (this.potentialArrowAt = this.start);
        var h = this.parseMaybeConditional(t, e);
        if ((i && (h = i.call(this, h, a, o)), this.type.isAssign)) {
          var u = this.startNodeAt(a, o);
          return (
            (u.operator = this.value),
            (u.left = this.type === b.eq ? this.toAssignable(h, !1, e) : h),
            n || U.call(e),
            (e.shorthandAssign = -1),
            this.checkLVal(h),
            this.next(),
            (u.right = this.parseMaybeAssign(t)),
            this.finishNode(u, 'AssignmentExpression')
          );
        }
        return (
          n && this.checkExpressionErrors(e, !0),
          r > -1 && (e.parenthesizedAssign = r),
          s > -1 && (e.trailingComma = s),
          h
        );
      }),
      (K.parseMaybeConditional = function(t, e) {
        var i = this.start,
          n = this.startLoc,
          r = this.parseExprOps(t, e);
        if (this.checkExpressionErrors(e)) return r;
        if (this.eat(b.question)) {
          var s = this.startNodeAt(i, n);
          return (
            (s.test = r),
            (s.consequent = this.parseMaybeAssign()),
            this.expect(b.colon),
            (s.alternate = this.parseMaybeAssign(t)),
            this.finishNode(s, 'ConditionalExpression')
          );
        }
        return r;
      }),
      (K.parseExprOps = function(t, e) {
        var i = this.start,
          n = this.startLoc,
          r = this.parseMaybeUnary(e, !1);
        return this.checkExpressionErrors(e)
          ? r
          : r.start === i && 'ArrowFunctionExpression' === r.type
            ? r
            : this.parseExprOp(r, i, n, -1, t);
      }),
      (K.parseExprOp = function(t, e, i, n, r) {
        var s = this.type.binop;
        if (null != s && (!r || this.type !== b._in) && s > n) {
          var a = this.type === b.logicalOR || this.type === b.logicalAND,
            o = this.value;
          this.next();
          var h = this.start,
            u = this.startLoc,
            c = this.parseExprOp(this.parseMaybeUnary(null, !1), h, u, s, r),
            l = this.buildBinary(e, i, t, c, o, a);
          return this.parseExprOp(l, e, i, n, r);
        }
        return t;
      }),
      (K.buildBinary = function(t, e, i, n, r, s) {
        var a = this.startNodeAt(t, e);
        return (
          (a.left = i),
          (a.operator = r),
          (a.right = n),
          this.finishNode(a, s ? 'LogicalExpression' : 'BinaryExpression')
        );
      }),
      (K.parseMaybeUnary = function(t, e) {
        var i,
          n = this.start,
          r = this.startLoc;
        if (
          this.isContextual('await') &&
          (this.inAsync ||
            (!this.inFunction && this.options.allowAwaitOutsideFunction))
        )
          (i = this.parseAwait()), (e = !0);
        else if (this.type.prefix) {
          var s = this.startNode(),
            a = this.type === b.incDec;
          (s.operator = this.value),
            (s.prefix = !0),
            this.next(),
            (s.argument = this.parseMaybeUnary(null, !0)),
            this.checkExpressionErrors(t, !0),
            a
              ? this.checkLVal(s.argument)
              : this.strict &&
                'delete' === s.operator &&
                'Identifier' === s.argument.type
                ? this.raiseRecoverable(
                    s.start,
                    'Deleting local variable in strict mode'
                  )
                : (e = !0),
            (i = this.finishNode(
              s,
              a ? 'UpdateExpression' : 'UnaryExpression'
            ));
        } else {
          if (
            ((i = this.parseExprSubscripts(t)), this.checkExpressionErrors(t))
          )
            return i;
          for (; this.type.postfix && !this.canInsertSemicolon(); ) {
            var o = this.startNodeAt(n, r);
            (o.operator = this.value),
              (o.prefix = !1),
              (o.argument = i),
              this.checkLVal(i),
              this.next(),
              (i = this.finishNode(o, 'UpdateExpression'));
          }
        }
        return !e && this.eat(b.starstar)
          ? this.buildBinary(n, r, i, this.parseMaybeUnary(null, !1), '**', !1)
          : i;
      }),
      (K.parseExprSubscripts = function(t) {
        var e = this.start,
          i = this.startLoc,
          n = this.parseExprAtom(t),
          r =
            'ArrowFunctionExpression' === n.type &&
            ')' !== this.input.slice(this.lastTokStart, this.lastTokEnd);
        if (this.checkExpressionErrors(t) || r) return n;
        var s = this.parseSubscripts(n, e, i);
        return (
          t &&
            'MemberExpression' === s.type &&
            (t.parenthesizedAssign >= s.start && (t.parenthesizedAssign = -1),
            t.parenthesizedBind >= s.start && (t.parenthesizedBind = -1)),
          s
        );
      }),
      (K.parseSubscripts = function(t, e, i, n) {
        for (
          var r =
              this.options.ecmaVersion >= 8 &&
              'Identifier' === t.type &&
              'async' === t.name &&
              this.lastTokEnd === t.end &&
              !this.canInsertSemicolon() &&
              'async' === this.input.slice(t.start, t.end),
            s = void 0;
          ;

        )
          if ((s = this.eat(b.bracketL)) || this.eat(b.dot)) {
            var a = this.startNodeAt(e, i);
            (a.object = t),
              (a.property = s ? this.parseExpression() : this.parseIdent(!0)),
              (a.computed = !!s),
              s && this.expect(b.bracketR),
              (t = this.finishNode(a, 'MemberExpression'));
          } else if (!n && this.eat(b.parenL)) {
            var o = new U(),
              h = this.yieldPos,
              u = this.awaitPos;
            (this.yieldPos = 0), (this.awaitPos = 0);
            var c = this.parseExprList(
              b.parenR,
              this.options.ecmaVersion >= 8,
              !1,
              o
            );
            if (r && !this.canInsertSemicolon() && this.eat(b.arrow))
              return (
                this.checkPatternErrors(o, !1),
                this.checkYieldAwaitInDefaultParams(),
                (this.yieldPos = h),
                (this.awaitPos = u),
                this.parseArrowExpression(this.startNodeAt(e, i), c, !0)
              );
            this.checkExpressionErrors(o, !0),
              (this.yieldPos = h || this.yieldPos),
              (this.awaitPos = u || this.awaitPos);
            var l = this.startNodeAt(e, i);
            (l.callee = t),
              (l.arguments = c),
              (t = this.finishNode(l, 'CallExpression'));
          } else {
            if (this.type !== b.backQuote) return t;
            var f = this.startNodeAt(e, i);
            (f.tag = t),
              (f.quasi = this.parseTemplate({ isTagged: !0 })),
              (t = this.finishNode(f, 'TaggedTemplateExpression'));
          }
      }),
      (K.parseExprAtom = function(t) {
        var e,
          i = this.potentialArrowAt === this.start;
        switch (this.type) {
          case b._super:
            return (
              this.inFunction ||
                this.raise(this.start, "'super' outside of function or class"),
              (e = this.startNode()),
              this.next(),
              this.type !== b.dot &&
                this.type !== b.bracketL &&
                this.type !== b.parenL &&
                this.unexpected(),
              this.finishNode(e, 'Super')
            );
          case b._this:
            return (
              (e = this.startNode()),
              this.next(),
              this.finishNode(e, 'ThisExpression')
            );
          case b.name:
            var n = this.start,
              r = this.startLoc,
              s = this.containsEsc,
              a = this.parseIdent(this.type !== b.name);
            if (
              this.options.ecmaVersion >= 8 &&
              !s &&
              'async' === a.name &&
              !this.canInsertSemicolon() &&
              this.eat(b._function)
            )
              return this.parseFunction(this.startNodeAt(n, r), !1, !1, !0);
            if (i && !this.canInsertSemicolon()) {
              if (this.eat(b.arrow))
                return this.parseArrowExpression(
                  this.startNodeAt(n, r),
                  [a],
                  !1
                );
              if (
                this.options.ecmaVersion >= 8 &&
                'async' === a.name &&
                this.type === b.name &&
                !s
              )
                return (
                  (a = this.parseIdent()),
                  (!this.canInsertSemicolon() && this.eat(b.arrow)) ||
                    this.unexpected(),
                  this.parseArrowExpression(this.startNodeAt(n, r), [a], !0)
                );
            }
            return a;
          case b.regexp:
            var o = this.value;
            return (
              ((e = this.parseLiteral(o.value)).regex = {
                pattern: o.pattern,
                flags: o.flags,
              }),
              e
            );
          case b.num:
          case b.string:
            return this.parseLiteral(this.value);
          case b._null:
          case b._true:
          case b._false:
            return (
              ((e = this.startNode()).value =
                this.type === b._null ? null : this.type === b._true),
              (e.raw = this.type.keyword),
              this.next(),
              this.finishNode(e, 'Literal')
            );
          case b.parenL:
            var h = this.start,
              u = this.parseParenAndDistinguishExpression(i);
            return (
              t &&
                (t.parenthesizedAssign < 0 &&
                  !this.isSimpleAssignTarget(u) &&
                  (t.parenthesizedAssign = h),
                t.parenthesizedBind < 0 && (t.parenthesizedBind = h)),
              u
            );
          case b.bracketL:
            return (
              (e = this.startNode()),
              this.next(),
              (e.elements = this.parseExprList(b.bracketR, !0, !0, t)),
              this.finishNode(e, 'ArrayExpression')
            );
          case b.braceL:
            return this.parseObj(!1, t);
          case b._function:
            return (
              (e = this.startNode()), this.next(), this.parseFunction(e, !1)
            );
          case b._class:
            return this.parseClass(this.startNode(), !1);
          case b._new:
            return this.parseNew();
          case b.backQuote:
            return this.parseTemplate();
          default:
            this.unexpected();
        }
      }),
      (K.parseLiteral = function(t) {
        var e = this.startNode();
        return (
          (e.value = t),
          (e.raw = this.input.slice(this.start, this.end)),
          this.next(),
          this.finishNode(e, 'Literal')
        );
      }),
      (K.parseParenExpression = function() {
        this.expect(b.parenL);
        var t = this.parseExpression();
        return this.expect(b.parenR), t;
      }),
      (K.parseParenAndDistinguishExpression = function(t) {
        var e,
          i = this.start,
          n = this.startLoc,
          r = this.options.ecmaVersion >= 8;
        if (this.options.ecmaVersion >= 6) {
          this.next();
          var s,
            a = this.start,
            o = this.startLoc,
            h = [],
            u = !0,
            c = !1,
            l = new U(),
            f = this.yieldPos,
            d = this.awaitPos;
          for (this.yieldPos = 0, this.awaitPos = 0; this.type !== b.parenR; ) {
            if (
              (u ? (u = !1) : this.expect(b.comma),
              r && this.afterTrailingComma(b.parenR, !0))
            ) {
              c = !0;
              break;
            }
            if (this.type === b.ellipsis) {
              (s = this.start),
                h.push(this.parseParenItem(this.parseRestBinding())),
                this.type === b.comma &&
                  this.raise(
                    this.start,
                    'Comma is not permitted after the rest element'
                  );
              break;
            }
            h.push(this.parseMaybeAssign(!1, l, this.parseParenItem));
          }
          var p = this.start,
            g = this.startLoc;
          if (
            (this.expect(b.parenR),
            t && !this.canInsertSemicolon() && this.eat(b.arrow))
          )
            return (
              this.checkPatternErrors(l, !1),
              this.checkYieldAwaitInDefaultParams(),
              (this.yieldPos = f),
              (this.awaitPos = d),
              this.parseParenArrowList(i, n, h)
            );
          (h.length && !c) || this.unexpected(this.lastTokStart),
            s && this.unexpected(s),
            this.checkExpressionErrors(l, !0),
            (this.yieldPos = f || this.yieldPos),
            (this.awaitPos = d || this.awaitPos),
            h.length > 1
              ? (((e = this.startNodeAt(a, o)).expressions = h),
                this.finishNodeAt(e, 'SequenceExpression', p, g))
              : (e = h[0]);
        } else e = this.parseParenExpression();
        if (this.options.preserveParens) {
          var _ = this.startNodeAt(i, n);
          return (
            (_.expression = e), this.finishNode(_, 'ParenthesizedExpression')
          );
        }
        return e;
      }),
      (K.parseParenItem = function(t) {
        return t;
      }),
      (K.parseParenArrowList = function(t, e, i) {
        return this.parseArrowExpression(this.startNodeAt(t, e), i);
      });
    var Q = [];
    (K.parseNew = function() {
      var t = this.startNode(),
        e = this.parseIdent(!0);
      if (this.options.ecmaVersion >= 6 && this.eat(b.dot)) {
        t.meta = e;
        var i = this.containsEsc;
        return (
          (t.property = this.parseIdent(!0)),
          ('target' !== t.property.name || i) &&
            this.raiseRecoverable(
              t.property.start,
              'The only valid meta property for new is new.target'
            ),
          this.inFunction ||
            this.raiseRecoverable(
              t.start,
              'new.target can only be used in functions'
            ),
          this.finishNode(t, 'MetaProperty')
        );
      }
      var n = this.start,
        r = this.startLoc;
      return (
        (t.callee = this.parseSubscripts(this.parseExprAtom(), n, r, !0)),
        this.eat(b.parenL)
          ? (t.arguments = this.parseExprList(
              b.parenR,
              this.options.ecmaVersion >= 8,
              !1
            ))
          : (t.arguments = Q),
        this.finishNode(t, 'NewExpression')
      );
    }),
      (K.parseTemplateElement = function(t) {
        var e = t.isTagged,
          i = this.startNode();
        return (
          this.type === b.invalidTemplate
            ? (e ||
                this.raiseRecoverable(
                  this.start,
                  'Bad escape sequence in untagged template literal'
                ),
              (i.value = { raw: this.value, cooked: null }))
            : (i.value = {
                raw: this.input
                  .slice(this.start, this.end)
                  .replace(/\r\n?/g, '\n'),
                cooked: this.value,
              }),
          this.next(),
          (i.tail = this.type === b.backQuote),
          this.finishNode(i, 'TemplateElement')
        );
      }),
      (K.parseTemplate = function(t) {
        void 0 === t && (t = {});
        var e = t.isTagged;
        void 0 === e && (e = !1);
        var i = this.startNode();
        this.next(), (i.expressions = []);
        var n = this.parseTemplateElement({ isTagged: e });
        for (i.quasis = [n]; !n.tail; )
          this.expect(b.dollarBraceL),
            i.expressions.push(this.parseExpression()),
            this.expect(b.braceR),
            i.quasis.push((n = this.parseTemplateElement({ isTagged: e })));
        return this.next(), this.finishNode(i, 'TemplateLiteral');
      }),
      (K.isAsyncProp = function(t) {
        return (
          !t.computed &&
          'Identifier' === t.key.type &&
          'async' === t.key.name &&
          (this.type === b.name ||
            this.type === b.num ||
            this.type === b.string ||
            this.type === b.bracketL ||
            this.type.keyword ||
            (this.options.ecmaVersion >= 9 && this.type === b.star)) &&
          !C.test(this.input.slice(this.lastTokEnd, this.start))
        );
      }),
      (K.parseObj = function(t, e) {
        var i = this.startNode(),
          n = !0,
          r = {};
        for (i.properties = [], this.next(); !this.eat(b.braceR); ) {
          if (n) n = !1;
          else if ((this.expect(b.comma), this.afterTrailingComma(b.braceR)))
            break;
          var s = this.parseProperty(t, e);
          t || this.checkPropClash(s, r, e), i.properties.push(s);
        }
        return this.finishNode(i, t ? 'ObjectPattern' : 'ObjectExpression');
      }),
      (K.parseProperty = function(t, e) {
        var i,
          n,
          r,
          s,
          a = this.startNode();
        if (this.options.ecmaVersion >= 9 && this.eat(b.ellipsis))
          return t
            ? ((a.argument = this.parseIdent(!1)),
              this.type === b.comma &&
                this.raise(
                  this.start,
                  'Comma is not permitted after the rest element'
                ),
              this.finishNode(a, 'RestElement'))
            : (this.type === b.parenL &&
                e &&
                (e.parenthesizedAssign < 0 &&
                  (e.parenthesizedAssign = this.start),
                e.parenthesizedBind < 0 && (e.parenthesizedBind = this.start)),
              (a.argument = this.parseMaybeAssign(!1, e)),
              this.type === b.comma &&
                e &&
                e.trailingComma < 0 &&
                (e.trailingComma = this.start),
              this.finishNode(a, 'SpreadElement'));
        this.options.ecmaVersion >= 6 &&
          ((a.method = !1),
          (a.shorthand = !1),
          (t || e) && ((r = this.start), (s = this.startLoc)),
          t || (i = this.eat(b.star)));
        var o = this.containsEsc;
        return (
          this.parsePropertyName(a),
          !t && !o && this.options.ecmaVersion >= 8 && !i && this.isAsyncProp(a)
            ? ((n = !0),
              (i = this.options.ecmaVersion >= 9 && this.eat(b.star)),
              this.parsePropertyName(a, e))
            : (n = !1),
          this.parsePropertyValue(a, t, i, n, r, s, e, o),
          this.finishNode(a, 'Property')
        );
      }),
      (K.parsePropertyValue = function(t, e, i, n, r, s, a, o) {
        if (
          ((i || n) && this.type === b.colon && this.unexpected(),
          this.eat(b.colon))
        )
          (t.value = e
            ? this.parseMaybeDefault(this.start, this.startLoc)
            : this.parseMaybeAssign(!1, a)),
            (t.kind = 'init');
        else if (this.options.ecmaVersion >= 6 && this.type === b.parenL)
          e && this.unexpected(),
            (t.kind = 'init'),
            (t.method = !0),
            (t.value = this.parseMethod(i, n));
        else if (
          e ||
          o ||
          !(this.options.ecmaVersion >= 5) ||
          t.computed ||
          'Identifier' !== t.key.type ||
          ('get' !== t.key.name && 'set' !== t.key.name) ||
          this.type === b.comma ||
          this.type === b.braceR
        )
          this.options.ecmaVersion >= 6 &&
          !t.computed &&
          'Identifier' === t.key.type
            ? (this.checkUnreserved(t.key),
              (t.kind = 'init'),
              e
                ? (t.value = this.parseMaybeDefault(r, s, t.key))
                : this.type === b.eq && a
                  ? (a.shorthandAssign < 0 && (a.shorthandAssign = this.start),
                    (t.value = this.parseMaybeDefault(r, s, t.key)))
                  : (t.value = t.key),
              (t.shorthand = !0))
            : this.unexpected();
        else {
          (i || n) && this.unexpected(),
            (t.kind = t.key.name),
            this.parsePropertyName(t),
            (t.value = this.parseMethod(!1));
          var h = 'get' === t.kind ? 0 : 1;
          if (t.value.params.length !== h) {
            var u = t.value.start;
            'get' === t.kind
              ? this.raiseRecoverable(u, 'getter should have no params')
              : this.raiseRecoverable(
                  u,
                  'setter should have exactly one param'
                );
          } else
            'set' === t.kind &&
              'RestElement' === t.value.params[0].type &&
              this.raiseRecoverable(
                t.value.params[0].start,
                'Setter cannot use rest params'
              );
        }
      }),
      (K.parsePropertyName = function(t) {
        if (this.options.ecmaVersion >= 6) {
          if (this.eat(b.bracketL))
            return (
              (t.computed = !0),
              (t.key = this.parseMaybeAssign()),
              this.expect(b.bracketR),
              t.key
            );
          t.computed = !1;
        }
        return (t.key =
          this.type === b.num || this.type === b.string
            ? this.parseExprAtom()
            : this.parseIdent(!0));
      }),
      (K.initFunction = function(t) {
        (t.id = null),
          this.options.ecmaVersion >= 6 &&
            ((t.generator = !1), (t.expression = !1)),
          this.options.ecmaVersion >= 8 && (t.async = !1);
      }),
      (K.parseMethod = function(t, e) {
        var i = this.startNode(),
          n = this.inGenerator,
          r = this.inAsync,
          s = this.yieldPos,
          a = this.awaitPos,
          o = this.inFunction;
        return (
          this.initFunction(i),
          this.options.ecmaVersion >= 6 && (i.generator = t),
          this.options.ecmaVersion >= 8 && (i.async = !!e),
          (this.inGenerator = i.generator),
          (this.inAsync = i.async),
          (this.yieldPos = 0),
          (this.awaitPos = 0),
          (this.inFunction = !0),
          this.enterFunctionScope(),
          this.expect(b.parenL),
          (i.params = this.parseBindingList(
            b.parenR,
            !1,
            this.options.ecmaVersion >= 8
          )),
          this.checkYieldAwaitInDefaultParams(),
          this.parseFunctionBody(i, !1),
          (this.inGenerator = n),
          (this.inAsync = r),
          (this.yieldPos = s),
          (this.awaitPos = a),
          (this.inFunction = o),
          this.finishNode(i, 'FunctionExpression')
        );
      }),
      (K.parseArrowExpression = function(t, e, i) {
        var n = this.inGenerator,
          r = this.inAsync,
          s = this.yieldPos,
          a = this.awaitPos,
          o = this.inFunction;
        return (
          this.enterFunctionScope(),
          this.initFunction(t),
          this.options.ecmaVersion >= 8 && (t.async = !!i),
          (this.inGenerator = !1),
          (this.inAsync = t.async),
          (this.yieldPos = 0),
          (this.awaitPos = 0),
          (this.inFunction = !0),
          (t.params = this.toAssignableList(e, !0)),
          this.parseFunctionBody(t, !0),
          (this.inGenerator = n),
          (this.inAsync = r),
          (this.yieldPos = s),
          (this.awaitPos = a),
          (this.inFunction = o),
          this.finishNode(t, 'ArrowFunctionExpression')
        );
      }),
      (K.parseFunctionBody = function(t, e) {
        var i = e && this.type !== b.braceL,
          n = this.strict,
          r = !1;
        if (i)
          (t.body = this.parseMaybeAssign()),
            (t.expression = !0),
            this.checkParams(t, !1);
        else {
          var s =
            this.options.ecmaVersion >= 7 && !this.isSimpleParamList(t.params);
          (n && !s) ||
            ((r = this.strictDirective(this.end)) &&
              s &&
              this.raiseRecoverable(
                t.start,
                "Illegal 'use strict' directive in function with non-simple parameter list"
              ));
          var a = this.labels;
          (this.labels = []),
            r && (this.strict = !0),
            this.checkParams(
              t,
              !n && !r && !e && this.isSimpleParamList(t.params)
            ),
            (t.body = this.parseBlock(!1)),
            (t.expression = !1),
            this.adaptDirectivePrologue(t.body.body),
            (this.labels = a);
        }
        this.exitFunctionScope(),
          this.strict && t.id && this.checkLVal(t.id, 'none'),
          (this.strict = n);
      }),
      (K.isSimpleParamList = function(t) {
        for (var e = 0, i = t; e < i.length; e += 1) {
          if ('Identifier' !== i[e].type) return !1;
        }
        return !0;
      }),
      (K.checkParams = function(t, e) {
        for (var i = {}, n = 0, r = t.params; n < r.length; n += 1) {
          var s = r[n];
          this.checkLVal(s, 'var', e ? null : i);
        }
      }),
      (K.parseExprList = function(t, e, i, n) {
        for (var r = [], s = !0; !this.eat(t); ) {
          if (s) s = !1;
          else if ((this.expect(b.comma), e && this.afterTrailingComma(t)))
            break;
          var a = void 0;
          i && this.type === b.comma
            ? (a = null)
            : this.type === b.ellipsis
              ? ((a = this.parseSpread(n)),
                n &&
                  this.type === b.comma &&
                  n.trailingComma < 0 &&
                  (n.trailingComma = this.start))
              : (a = this.parseMaybeAssign(!1, n)),
            r.push(a);
        }
        return r;
      }),
      (K.checkUnreserved = function(t) {
        var e = t.start,
          i = t.end,
          n = t.name;
        (this.inGenerator &&
          'yield' === n &&
          this.raiseRecoverable(
            e,
            "Can not use 'yield' as identifier inside a generator"
          ),
        this.inAsync &&
          'await' === n &&
          this.raiseRecoverable(
            e,
            "Can not use 'await' as identifier inside an async function"
          ),
        this.isKeyword(n) && this.raise(e, "Unexpected keyword '" + n + "'"),
        this.options.ecmaVersion < 6 &&
          -1 !== this.input.slice(e, i).indexOf('\\')) ||
          ((this.strict ? this.reservedWordsStrict : this.reservedWords).test(
            n
          ) &&
            (this.inAsync ||
              'await' !== n ||
              this.raiseRecoverable(
                e,
                "Can not use keyword 'await' outside an async function"
              ),
            this.raiseRecoverable(e, "The keyword '" + n + "' is reserved")));
      }),
      (K.parseIdent = function(t, e) {
        var i = this.startNode();
        return (
          t && 'never' === this.options.allowReserved && (t = !1),
          this.type === b.name
            ? (i.name = this.value)
            : this.type.keyword
              ? ((i.name = this.type.keyword),
                ('class' !== i.name && 'function' !== i.name) ||
                  (this.lastTokEnd === this.lastTokStart + 1 &&
                    46 === this.input.charCodeAt(this.lastTokStart)) ||
                  this.context.pop())
              : this.unexpected(),
          this.next(),
          this.finishNode(i, 'Identifier'),
          t || this.checkUnreserved(i),
          i
        );
      }),
      (K.parseYield = function() {
        this.yieldPos || (this.yieldPos = this.start);
        var t = this.startNode();
        return (
          this.next(),
          this.type === b.semi ||
          this.canInsertSemicolon() ||
          (this.type !== b.star && !this.type.startsExpr)
            ? ((t.delegate = !1), (t.argument = null))
            : ((t.delegate = this.eat(b.star)),
              (t.argument = this.parseMaybeAssign())),
          this.finishNode(t, 'YieldExpression')
        );
      }),
      (K.parseAwait = function() {
        this.awaitPos || (this.awaitPos = this.start);
        var t = this.startNode();
        return (
          this.next(),
          (t.argument = this.parseMaybeUnary(null, !0)),
          this.finishNode(t, 'AwaitExpression')
        );
      });
    var J = F.prototype;
    (J.raise = function(t, e) {
      var i = V(this.input, t);
      e += ' (' + i.line + ':' + i.column + ')';
      var n = new SyntaxError(e);
      throw ((n.pos = t), (n.loc = i), (n.raisedAt = this.pos), n);
    }),
      (J.raiseRecoverable = J.raise),
      (J.curPosition = function() {
        if (this.options.locations)
          return new N(this.curLine, this.pos - this.lineStart);
      });
    var X = F.prototype,
      Y =
        Object.assign ||
        function(t) {
          for (var e = [], i = arguments.length - 1; i-- > 0; )
            e[i] = arguments[i + 1];
          for (var n = 0, r = e; n < r.length; n += 1) {
            var s = r[n];
            for (var a in s) L(s, a) && (t[a] = s[a]);
          }
          return t;
        };
    (X.enterFunctionScope = function() {
      this.scopeStack.push({
        var: {},
        lexical: {},
        childVar: {},
        parentLexical: {},
      });
    }),
      (X.exitFunctionScope = function() {
        this.scopeStack.pop();
      }),
      (X.enterLexicalScope = function() {
        var t = this.scopeStack[this.scopeStack.length - 1],
          e = { var: {}, lexical: {}, childVar: {}, parentLexical: {} };
        this.scopeStack.push(e), Y(e.parentLexical, t.lexical, t.parentLexical);
      }),
      (X.exitLexicalScope = function() {
        var t = this.scopeStack.pop(),
          e = this.scopeStack[this.scopeStack.length - 1];
        Y(e.childVar, t.var, t.childVar);
      }),
      (X.canDeclareVarName = function(t) {
        var e = this.scopeStack[this.scopeStack.length - 1];
        return !L(e.lexical, t) && !L(e.parentLexical, t);
      }),
      (X.canDeclareLexicalName = function(t) {
        var e = this.scopeStack[this.scopeStack.length - 1];
        return !L(e.lexical, t) && !L(e.var, t) && !L(e.childVar, t);
      }),
      (X.declareVarName = function(t) {
        this.scopeStack[this.scopeStack.length - 1].var[t] = !0;
      }),
      (X.declareLexicalName = function(t) {
        this.scopeStack[this.scopeStack.length - 1].lexical[t] = !0;
      });
    var tt = function(t, e, i) {
        (this.type = ''),
          (this.start = e),
          (this.end = 0),
          t.options.locations && (this.loc = new O(t, i)),
          t.options.directSourceFile &&
            (this.sourceFile = t.options.directSourceFile),
          t.options.ranges && (this.range = [e, 0]);
      },
      et = F.prototype;
    function it(t, e, i, n) {
      return (
        (t.type = e),
        (t.end = i),
        this.options.locations && (t.loc.end = n),
        this.options.ranges && (t.range[1] = i),
        t
      );
    }
    (et.startNode = function() {
      return new tt(this, this.start, this.startLoc);
    }),
      (et.startNodeAt = function(t, e) {
        return new tt(this, t, e);
      }),
      (et.finishNode = function(t, e) {
        return it.call(this, t, e, this.lastTokEnd, this.lastTokEndLoc);
      }),
      (et.finishNodeAt = function(t, e, i, n) {
        return it.call(this, t, e, i, n);
      });
    var nt = function(t, e, i, n, r) {
        (this.token = t),
          (this.isExpr = !!e),
          (this.preserveSpace = !!i),
          (this.override = n),
          (this.generator = !!r);
      },
      rt = {
        b_stat: new nt('{', !1),
        b_expr: new nt('{', !0),
        b_tmpl: new nt('${', !1),
        p_stat: new nt('(', !1),
        p_expr: new nt('(', !0),
        q_tmpl: new nt('`', !0, !0, function(t) {
          return t.tryReadTemplateToken();
        }),
        f_stat: new nt('function', !1),
        f_expr: new nt('function', !0),
        f_expr_gen: new nt('function', !0, !1, null, !0),
        f_gen: new nt('function', !1, !1, null, !0),
      },
      st = F.prototype;
    (st.initialContext = function() {
      return [rt.b_stat];
    }),
      (st.braceIsBlock = function(t) {
        var e = this.curContext();
        return (
          e === rt.f_expr ||
          e === rt.f_stat ||
          (t !== b.colon || (e !== rt.b_stat && e !== rt.b_expr)
            ? t === b._return || (t === b.name && this.exprAllowed)
              ? C.test(this.input.slice(this.lastTokEnd, this.start))
              : t === b._else ||
                t === b.semi ||
                t === b.eof ||
                t === b.parenR ||
                t === b.arrow ||
                (t === b.braceL
                  ? e === rt.b_stat
                  : t !== b._var && t !== b.name && !this.exprAllowed)
            : !e.isExpr)
        );
      }),
      (st.inGeneratorContext = function() {
        for (var t = this.context.length - 1; t >= 1; t--) {
          var e = this.context[t];
          if ('function' === e.token) return e.generator;
        }
        return !1;
      }),
      (st.updateContext = function(t) {
        var e,
          i = this.type;
        i.keyword && t === b.dot
          ? (this.exprAllowed = !1)
          : (e = i.updateContext)
            ? e.call(this, t)
            : (this.exprAllowed = i.beforeExpr);
      }),
      (b.parenR.updateContext = b.braceR.updateContext = function() {
        if (1 !== this.context.length) {
          var t = this.context.pop();
          t === rt.b_stat &&
            'function' === this.curContext().token &&
            (t = this.context.pop()),
            (this.exprAllowed = !t.isExpr);
        } else this.exprAllowed = !0;
      }),
      (b.braceL.updateContext = function(t) {
        this.context.push(this.braceIsBlock(t) ? rt.b_stat : rt.b_expr),
          (this.exprAllowed = !0);
      }),
      (b.dollarBraceL.updateContext = function() {
        this.context.push(rt.b_tmpl), (this.exprAllowed = !0);
      }),
      (b.parenL.updateContext = function(t) {
        var e = t === b._if || t === b._for || t === b._with || t === b._while;
        this.context.push(e ? rt.p_stat : rt.p_expr), (this.exprAllowed = !0);
      }),
      (b.incDec.updateContext = function() {}),
      (b._function.updateContext = b._class.updateContext = function(t) {
        t.beforeExpr &&
        t !== b.semi &&
        t !== b._else &&
        ((t !== b.colon && t !== b.braceL) || this.curContext() !== rt.b_stat)
          ? this.context.push(rt.f_expr)
          : this.context.push(rt.f_stat),
          (this.exprAllowed = !1);
      }),
      (b.backQuote.updateContext = function() {
        this.curContext() === rt.q_tmpl
          ? this.context.pop()
          : this.context.push(rt.q_tmpl),
          (this.exprAllowed = !1);
      }),
      (b.star.updateContext = function(t) {
        if (t === b._function) {
          var e = this.context.length - 1;
          this.context[e] === rt.f_expr
            ? (this.context[e] = rt.f_expr_gen)
            : (this.context[e] = rt.f_gen);
        }
        this.exprAllowed = !0;
      }),
      (b.name.updateContext = function(t) {
        var e = !1;
        this.options.ecmaVersion >= 6 &&
          (('of' === this.value && !this.exprAllowed) ||
            ('yield' === this.value && this.inGeneratorContext())) &&
          (e = !0),
          (this.exprAllowed = e);
      });
    var at = {
      $LONE: [
        'ASCII',
        'ASCII_Hex_Digit',
        'AHex',
        'Alphabetic',
        'Alpha',
        'Any',
        'Assigned',
        'Bidi_Control',
        'Bidi_C',
        'Bidi_Mirrored',
        'Bidi_M',
        'Case_Ignorable',
        'CI',
        'Cased',
        'Changes_When_Casefolded',
        'CWCF',
        'Changes_When_Casemapped',
        'CWCM',
        'Changes_When_Lowercased',
        'CWL',
        'Changes_When_NFKC_Casefolded',
        'CWKCF',
        'Changes_When_Titlecased',
        'CWT',
        'Changes_When_Uppercased',
        'CWU',
        'Dash',
        'Default_Ignorable_Code_Point',
        'DI',
        'Deprecated',
        'Dep',
        'Diacritic',
        'Dia',
        'Emoji',
        'Emoji_Component',
        'Emoji_Modifier',
        'Emoji_Modifier_Base',
        'Emoji_Presentation',
        'Extender',
        'Ext',
        'Grapheme_Base',
        'Gr_Base',
        'Grapheme_Extend',
        'Gr_Ext',
        'Hex_Digit',
        'Hex',
        'IDS_Binary_Operator',
        'IDSB',
        'IDS_Trinary_Operator',
        'IDST',
        'ID_Continue',
        'IDC',
        'ID_Start',
        'IDS',
        'Ideographic',
        'Ideo',
        'Join_Control',
        'Join_C',
        'Logical_Order_Exception',
        'LOE',
        'Lowercase',
        'Lower',
        'Math',
        'Noncharacter_Code_Point',
        'NChar',
        'Pattern_Syntax',
        'Pat_Syn',
        'Pattern_White_Space',
        'Pat_WS',
        'Quotation_Mark',
        'QMark',
        'Radical',
        'Regional_Indicator',
        'RI',
        'Sentence_Terminal',
        'STerm',
        'Soft_Dotted',
        'SD',
        'Terminal_Punctuation',
        'Term',
        'Unified_Ideograph',
        'UIdeo',
        'Uppercase',
        'Upper',
        'Variation_Selector',
        'VS',
        'White_Space',
        'space',
        'XID_Continue',
        'XIDC',
        'XID_Start',
        'XIDS',
      ],
      General_Category: [
        'Cased_Letter',
        'LC',
        'Close_Punctuation',
        'Pe',
        'Connector_Punctuation',
        'Pc',
        'Control',
        'Cc',
        'cntrl',
        'Currency_Symbol',
        'Sc',
        'Dash_Punctuation',
        'Pd',
        'Decimal_Number',
        'Nd',
        'digit',
        'Enclosing_Mark',
        'Me',
        'Final_Punctuation',
        'Pf',
        'Format',
        'Cf',
        'Initial_Punctuation',
        'Pi',
        'Letter',
        'L',
        'Letter_Number',
        'Nl',
        'Line_Separator',
        'Zl',
        'Lowercase_Letter',
        'Ll',
        'Mark',
        'M',
        'Combining_Mark',
        'Math_Symbol',
        'Sm',
        'Modifier_Letter',
        'Lm',
        'Modifier_Symbol',
        'Sk',
        'Nonspacing_Mark',
        'Mn',
        'Number',
        'N',
        'Open_Punctuation',
        'Ps',
        'Other',
        'C',
        'Other_Letter',
        'Lo',
        'Other_Number',
        'No',
        'Other_Punctuation',
        'Po',
        'Other_Symbol',
        'So',
        'Paragraph_Separator',
        'Zp',
        'Private_Use',
        'Co',
        'Punctuation',
        'P',
        'punct',
        'Separator',
        'Z',
        'Space_Separator',
        'Zs',
        'Spacing_Mark',
        'Mc',
        'Surrogate',
        'Cs',
        'Symbol',
        'S',
        'Titlecase_Letter',
        'Lt',
        'Unassigned',
        'Cn',
        'Uppercase_Letter',
        'Lu',
      ],
      Script: [
        'Adlam',
        'Adlm',
        'Ahom',
        'Anatolian_Hieroglyphs',
        'Hluw',
        'Arabic',
        'Arab',
        'Armenian',
        'Armn',
        'Avestan',
        'Avst',
        'Balinese',
        'Bali',
        'Bamum',
        'Bamu',
        'Bassa_Vah',
        'Bass',
        'Batak',
        'Batk',
        'Bengali',
        'Beng',
        'Bhaiksuki',
        'Bhks',
        'Bopomofo',
        'Bopo',
        'Brahmi',
        'Brah',
        'Braille',
        'Brai',
        'Buginese',
        'Bugi',
        'Buhid',
        'Buhd',
        'Canadian_Aboriginal',
        'Cans',
        'Carian',
        'Cari',
        'Caucasian_Albanian',
        'Aghb',
        'Chakma',
        'Cakm',
        'Cham',
        'Cherokee',
        'Cher',
        'Common',
        'Zyyy',
        'Coptic',
        'Copt',
        'Qaac',
        'Cuneiform',
        'Xsux',
        'Cypriot',
        'Cprt',
        'Cyrillic',
        'Cyrl',
        'Deseret',
        'Dsrt',
        'Devanagari',
        'Deva',
        'Duployan',
        'Dupl',
        'Egyptian_Hieroglyphs',
        'Egyp',
        'Elbasan',
        'Elba',
        'Ethiopic',
        'Ethi',
        'Georgian',
        'Geor',
        'Glagolitic',
        'Glag',
        'Gothic',
        'Goth',
        'Grantha',
        'Gran',
        'Greek',
        'Grek',
        'Gujarati',
        'Gujr',
        'Gurmukhi',
        'Guru',
        'Han',
        'Hani',
        'Hangul',
        'Hang',
        'Hanunoo',
        'Hano',
        'Hatran',
        'Hatr',
        'Hebrew',
        'Hebr',
        'Hiragana',
        'Hira',
        'Imperial_Aramaic',
        'Armi',
        'Inherited',
        'Zinh',
        'Qaai',
        'Inscriptional_Pahlavi',
        'Phli',
        'Inscriptional_Parthian',
        'Prti',
        'Javanese',
        'Java',
        'Kaithi',
        'Kthi',
        'Kannada',
        'Knda',
        'Katakana',
        'Kana',
        'Kayah_Li',
        'Kali',
        'Kharoshthi',
        'Khar',
        'Khmer',
        'Khmr',
        'Khojki',
        'Khoj',
        'Khudawadi',
        'Sind',
        'Lao',
        'Laoo',
        'Latin',
        'Latn',
        'Lepcha',
        'Lepc',
        'Limbu',
        'Limb',
        'Linear_A',
        'Lina',
        'Linear_B',
        'Linb',
        'Lisu',
        'Lycian',
        'Lyci',
        'Lydian',
        'Lydi',
        'Mahajani',
        'Mahj',
        'Malayalam',
        'Mlym',
        'Mandaic',
        'Mand',
        'Manichaean',
        'Mani',
        'Marchen',
        'Marc',
        'Masaram_Gondi',
        'Gonm',
        'Meetei_Mayek',
        'Mtei',
        'Mende_Kikakui',
        'Mend',
        'Meroitic_Cursive',
        'Merc',
        'Meroitic_Hieroglyphs',
        'Mero',
        'Miao',
        'Plrd',
        'Modi',
        'Mongolian',
        'Mong',
        'Mro',
        'Mroo',
        'Multani',
        'Mult',
        'Myanmar',
        'Mymr',
        'Nabataean',
        'Nbat',
        'New_Tai_Lue',
        'Talu',
        'Newa',
        'Nko',
        'Nkoo',
        'Nushu',
        'Nshu',
        'Ogham',
        'Ogam',
        'Ol_Chiki',
        'Olck',
        'Old_Hungarian',
        'Hung',
        'Old_Italic',
        'Ital',
        'Old_North_Arabian',
        'Narb',
        'Old_Permic',
        'Perm',
        'Old_Persian',
        'Xpeo',
        'Old_South_Arabian',
        'Sarb',
        'Old_Turkic',
        'Orkh',
        'Oriya',
        'Orya',
        'Osage',
        'Osge',
        'Osmanya',
        'Osma',
        'Pahawh_Hmong',
        'Hmng',
        'Palmyrene',
        'Palm',
        'Pau_Cin_Hau',
        'Pauc',
        'Phags_Pa',
        'Phag',
        'Phoenician',
        'Phnx',
        'Psalter_Pahlavi',
        'Phlp',
        'Rejang',
        'Rjng',
        'Runic',
        'Runr',
        'Samaritan',
        'Samr',
        'Saurashtra',
        'Saur',
        'Sharada',
        'Shrd',
        'Shavian',
        'Shaw',
        'Siddham',
        'Sidd',
        'SignWriting',
        'Sgnw',
        'Sinhala',
        'Sinh',
        'Sora_Sompeng',
        'Sora',
        'Soyombo',
        'Soyo',
        'Sundanese',
        'Sund',
        'Syloti_Nagri',
        'Sylo',
        'Syriac',
        'Syrc',
        'Tagalog',
        'Tglg',
        'Tagbanwa',
        'Tagb',
        'Tai_Le',
        'Tale',
        'Tai_Tham',
        'Lana',
        'Tai_Viet',
        'Tavt',
        'Takri',
        'Takr',
        'Tamil',
        'Taml',
        'Tangut',
        'Tang',
        'Telugu',
        'Telu',
        'Thaana',
        'Thaa',
        'Thai',
        'Tibetan',
        'Tibt',
        'Tifinagh',
        'Tfng',
        'Tirhuta',
        'Tirh',
        'Ugaritic',
        'Ugar',
        'Vai',
        'Vaii',
        'Warang_Citi',
        'Wara',
        'Yi',
        'Yiii',
        'Zanabazar_Square',
        'Zanb',
      ],
    };
    Array.prototype.push.apply(at.$LONE, at.General_Category),
      (at.gc = at.General_Category),
      (at.sc = at.Script_Extensions = at.scx = at.Script);
    var ot = F.prototype,
      ht = function(t) {
        (this.parser = t),
          (this.validFlags =
            'gim' +
            (t.options.ecmaVersion >= 6 ? 'uy' : '') +
            (t.options.ecmaVersion >= 9 ? 's' : '')),
          (this.source = ''),
          (this.flags = ''),
          (this.start = 0),
          (this.switchU = !1),
          (this.switchN = !1),
          (this.pos = 0),
          (this.lastIntValue = 0),
          (this.lastStringValue = ''),
          (this.lastAssertionIsQuantifiable = !1),
          (this.numCapturingParens = 0),
          (this.maxBackReference = 0),
          (this.groupNames = []),
          (this.backReferenceNames = []);
      };
    function ut(t) {
      return t <= 65535
        ? String.fromCharCode(t)
        : ((t -= 65536),
          String.fromCharCode(55296 + (t >> 10), 56320 + (1023 & t)));
    }
    function ct(t) {
      return (
        36 === t ||
        (t >= 40 && t <= 43) ||
        46 === t ||
        63 === t ||
        (t >= 91 && t <= 94) ||
        (t >= 123 && t <= 125)
      );
    }
    function lt(t) {
      return (t >= 65 && t <= 90) || (t >= 97 && t <= 122);
    }
    function ft(t) {
      return lt(t) || 95 === t;
    }
    function dt(t) {
      return ft(t) || pt(t);
    }
    function pt(t) {
      return t >= 48 && t <= 57;
    }
    function gt(t) {
      return (
        (t >= 48 && t <= 57) || (t >= 65 && t <= 70) || (t >= 97 && t <= 102)
      );
    }
    function _t(t) {
      return t >= 65 && t <= 70
        ? t - 65 + 10
        : t >= 97 && t <= 102
          ? t - 97 + 10
          : t - 48;
    }
    function vt(t) {
      return t >= 48 && t <= 55;
    }
    (ht.prototype.reset = function(t, e, i) {
      var n = -1 !== i.indexOf('u');
      (this.start = 0 | t),
        (this.source = e + ''),
        (this.flags = i),
        (this.switchU = n && this.parser.options.ecmaVersion >= 6),
        (this.switchN = n && this.parser.options.ecmaVersion >= 9);
    }),
      (ht.prototype.raise = function(t) {
        this.parser.raiseRecoverable(
          this.start,
          'Invalid regular expression: /' + this.source + '/: ' + t
        );
      }),
      (ht.prototype.at = function(t) {
        var e = this.source,
          i = e.length;
        if (t >= i) return -1;
        var n = e.charCodeAt(t);
        return !this.switchU || n <= 55295 || n >= 57344 || t + 1 >= i
          ? n
          : (n << 10) + e.charCodeAt(t + 1) - 56613888;
      }),
      (ht.prototype.nextIndex = function(t) {
        var e = this.source,
          i = e.length;
        if (t >= i) return i;
        var n = e.charCodeAt(t);
        return !this.switchU || n <= 55295 || n >= 57344 || t + 1 >= i
          ? t + 1
          : t + 2;
      }),
      (ht.prototype.current = function() {
        return this.at(this.pos);
      }),
      (ht.prototype.lookahead = function() {
        return this.at(this.nextIndex(this.pos));
      }),
      (ht.prototype.advance = function() {
        this.pos = this.nextIndex(this.pos);
      }),
      (ht.prototype.eat = function(t) {
        return this.current() === t && (this.advance(), !0);
      }),
      (ot.validateRegExpFlags = function(t) {
        for (var e = t.validFlags, i = t.flags, n = 0; n < i.length; n++) {
          var r = i.charAt(n);
          -1 === e.indexOf(r) &&
            this.raise(t.start, 'Invalid regular expression flag'),
            i.indexOf(r, n + 1) > -1 &&
              this.raise(t.start, 'Duplicate regular expression flag');
        }
      }),
      (ot.validateRegExpPattern = function(t) {
        this.regexp_pattern(t),
          !t.switchN &&
            this.options.ecmaVersion >= 9 &&
            t.groupNames.length > 0 &&
            ((t.switchN = !0), this.regexp_pattern(t));
      }),
      (ot.regexp_pattern = function(t) {
        (t.pos = 0),
          (t.lastIntValue = 0),
          (t.lastStringValue = ''),
          (t.lastAssertionIsQuantifiable = !1),
          (t.numCapturingParens = 0),
          (t.maxBackReference = 0),
          (t.groupNames.length = 0),
          (t.backReferenceNames.length = 0),
          this.regexp_disjunction(t),
          t.pos !== t.source.length &&
            (t.eat(41) && t.raise("Unmatched ')'"),
            (t.eat(93) || t.eat(125)) && t.raise('Lone quantifier brackets')),
          t.maxBackReference > t.numCapturingParens &&
            t.raise('Invalid escape');
        for (var e = 0, i = t.backReferenceNames; e < i.length; e += 1) {
          var n = i[e];
          -1 === t.groupNames.indexOf(n) &&
            t.raise('Invalid named capture referenced');
        }
      }),
      (ot.regexp_disjunction = function(t) {
        for (this.regexp_alternative(t); t.eat(124); )
          this.regexp_alternative(t);
        this.regexp_eatQuantifier(t, !0) && t.raise('Nothing to repeat'),
          t.eat(123) && t.raise('Lone quantifier brackets');
      }),
      (ot.regexp_alternative = function(t) {
        for (; t.pos < t.source.length && this.regexp_eatTerm(t); );
      }),
      (ot.regexp_eatTerm = function(t) {
        return this.regexp_eatAssertion(t)
          ? (t.lastAssertionIsQuantifiable &&
              this.regexp_eatQuantifier(t) &&
              t.switchU &&
              t.raise('Invalid quantifier'),
            !0)
          : !(t.switchU
              ? !this.regexp_eatAtom(t)
              : !this.regexp_eatExtendedAtom(t)) &&
              (this.regexp_eatQuantifier(t), !0);
      }),
      (ot.regexp_eatAssertion = function(t) {
        var e = t.pos;
        if (((t.lastAssertionIsQuantifiable = !1), t.eat(94) || t.eat(36)))
          return !0;
        if (t.eat(92)) {
          if (t.eat(66) || t.eat(98)) return !0;
          t.pos = e;
        }
        if (t.eat(40) && t.eat(63)) {
          var i = !1;
          if (
            (this.options.ecmaVersion >= 9 && (i = t.eat(60)),
            t.eat(61) || t.eat(33))
          )
            return (
              this.regexp_disjunction(t),
              t.eat(41) || t.raise('Unterminated group'),
              (t.lastAssertionIsQuantifiable = !i),
              !0
            );
        }
        return (t.pos = e), !1;
      }),
      (ot.regexp_eatQuantifier = function(t, e) {
        return (
          void 0 === e && (e = !1),
          !!this.regexp_eatQuantifierPrefix(t, e) && (t.eat(63), !0)
        );
      }),
      (ot.regexp_eatQuantifierPrefix = function(t, e) {
        return (
          t.eat(42) ||
          t.eat(43) ||
          t.eat(63) ||
          this.regexp_eatBracedQuantifier(t, e)
        );
      }),
      (ot.regexp_eatBracedQuantifier = function(t, e) {
        var i = t.pos;
        if (t.eat(123)) {
          var n = 0,
            r = -1;
          if (
            this.regexp_eatDecimalDigits(t) &&
            ((n = t.lastIntValue),
            t.eat(44) &&
              this.regexp_eatDecimalDigits(t) &&
              (r = t.lastIntValue),
            t.eat(125))
          )
            return (
              -1 !== r &&
                r < n &&
                !e &&
                t.raise('numbers out of order in {} quantifier'),
              !0
            );
          t.switchU && !e && t.raise('Incomplete quantifier'), (t.pos = i);
        }
        return !1;
      }),
      (ot.regexp_eatAtom = function(t) {
        return (
          this.regexp_eatPatternCharacters(t) ||
          t.eat(46) ||
          this.regexp_eatReverseSolidusAtomEscape(t) ||
          this.regexp_eatCharacterClass(t) ||
          this.regexp_eatUncapturingGroup(t) ||
          this.regexp_eatCapturingGroup(t)
        );
      }),
      (ot.regexp_eatReverseSolidusAtomEscape = function(t) {
        var e = t.pos;
        if (t.eat(92)) {
          if (this.regexp_eatAtomEscape(t)) return !0;
          t.pos = e;
        }
        return !1;
      }),
      (ot.regexp_eatUncapturingGroup = function(t) {
        var e = t.pos;
        if (t.eat(40)) {
          if (t.eat(63) && t.eat(58)) {
            if ((this.regexp_disjunction(t), t.eat(41))) return !0;
            t.raise('Unterminated group');
          }
          t.pos = e;
        }
        return !1;
      }),
      (ot.regexp_eatCapturingGroup = function(t) {
        if (t.eat(40)) {
          if (
            (this.options.ecmaVersion >= 9
              ? this.regexp_groupSpecifier(t)
              : 63 === t.current() && t.raise('Invalid group'),
            this.regexp_disjunction(t),
            t.eat(41))
          )
            return (t.numCapturingParens += 1), !0;
          t.raise('Unterminated group');
        }
        return !1;
      }),
      (ot.regexp_eatExtendedAtom = function(t) {
        return (
          t.eat(46) ||
          this.regexp_eatReverseSolidusAtomEscape(t) ||
          this.regexp_eatCharacterClass(t) ||
          this.regexp_eatUncapturingGroup(t) ||
          this.regexp_eatCapturingGroup(t) ||
          this.regexp_eatInvalidBracedQuantifier(t) ||
          this.regexp_eatExtendedPatternCharacter(t)
        );
      }),
      (ot.regexp_eatInvalidBracedQuantifier = function(t) {
        return (
          this.regexp_eatBracedQuantifier(t, !0) &&
            t.raise('Nothing to repeat'),
          !1
        );
      }),
      (ot.regexp_eatSyntaxCharacter = function(t) {
        var e = t.current();
        return !!ct(e) && ((t.lastIntValue = e), t.advance(), !0);
      }),
      (ot.regexp_eatPatternCharacters = function(t) {
        for (var e = t.pos, i = 0; -1 !== (i = t.current()) && !ct(i); )
          t.advance();
        return t.pos !== e;
      }),
      (ot.regexp_eatExtendedPatternCharacter = function(t) {
        var e = t.current();
        return (
          !(
            -1 === e ||
            36 === e ||
            (e >= 40 && e <= 43) ||
            46 === e ||
            63 === e ||
            91 === e ||
            94 === e ||
            124 === e
          ) && (t.advance(), !0)
        );
      }),
      (ot.regexp_groupSpecifier = function(t) {
        if (t.eat(63)) {
          if (this.regexp_eatGroupName(t))
            return (
              -1 !== t.groupNames.indexOf(t.lastStringValue) &&
                t.raise('Duplicate capture group name'),
              void t.groupNames.push(t.lastStringValue)
            );
          t.raise('Invalid group');
        }
      }),
      (ot.regexp_eatGroupName = function(t) {
        if (((t.lastStringValue = ''), t.eat(60))) {
          if (this.regexp_eatRegExpIdentifierName(t) && t.eat(62)) return !0;
          t.raise('Invalid capture group name');
        }
        return !1;
      }),
      (ot.regexp_eatRegExpIdentifierName = function(t) {
        if (
          ((t.lastStringValue = ''), this.regexp_eatRegExpIdentifierStart(t))
        ) {
          for (
            t.lastStringValue += ut(t.lastIntValue);
            this.regexp_eatRegExpIdentifierPart(t);

          )
            t.lastStringValue += ut(t.lastIntValue);
          return !0;
        }
        return !1;
      }),
      (ot.regexp_eatRegExpIdentifierStart = function(t) {
        var e = t.pos,
          i = t.current();
        return (
          t.advance(),
          92 === i &&
            this.regexp_eatRegExpUnicodeEscapeSequence(t) &&
            (i = t.lastIntValue),
          (function(t) {
            return p(t, !0) || 36 === t || 95 === t;
          })(i)
            ? ((t.lastIntValue = i), !0)
            : ((t.pos = e), !1)
        );
      }),
      (ot.regexp_eatRegExpIdentifierPart = function(t) {
        var e = t.pos,
          i = t.current();
        return (
          t.advance(),
          92 === i &&
            this.regexp_eatRegExpUnicodeEscapeSequence(t) &&
            (i = t.lastIntValue),
          (function(t) {
            return g(t, !0) || 36 === t || 95 === t || 8204 === t || 8205 === t;
          })(i)
            ? ((t.lastIntValue = i), !0)
            : ((t.pos = e), !1)
        );
      }),
      (ot.regexp_eatAtomEscape = function(t) {
        return (
          !!(
            this.regexp_eatBackReference(t) ||
            this.regexp_eatCharacterClassEscape(t) ||
            this.regexp_eatCharacterEscape(t) ||
            (t.switchN && this.regexp_eatKGroupName(t))
          ) ||
          (t.switchU &&
            (99 === t.current() && t.raise('Invalid unicode escape'),
            t.raise('Invalid escape')),
          !1)
        );
      }),
      (ot.regexp_eatBackReference = function(t) {
        var e = t.pos;
        if (this.regexp_eatDecimalEscape(t)) {
          var i = t.lastIntValue;
          if (t.switchU)
            return i > t.maxBackReference && (t.maxBackReference = i), !0;
          if (i <= t.numCapturingParens) return !0;
          t.pos = e;
        }
        return !1;
      }),
      (ot.regexp_eatKGroupName = function(t) {
        if (t.eat(107)) {
          if (this.regexp_eatGroupName(t))
            return t.backReferenceNames.push(t.lastStringValue), !0;
          t.raise('Invalid named reference');
        }
        return !1;
      }),
      (ot.regexp_eatCharacterEscape = function(t) {
        return (
          this.regexp_eatControlEscape(t) ||
          this.regexp_eatCControlLetter(t) ||
          this.regexp_eatZero(t) ||
          this.regexp_eatHexEscapeSequence(t) ||
          this.regexp_eatRegExpUnicodeEscapeSequence(t) ||
          (!t.switchU && this.regexp_eatLegacyOctalEscapeSequence(t)) ||
          this.regexp_eatIdentityEscape(t)
        );
      }),
      (ot.regexp_eatCControlLetter = function(t) {
        var e = t.pos;
        if (t.eat(99)) {
          if (this.regexp_eatControlLetter(t)) return !0;
          t.pos = e;
        }
        return !1;
      }),
      (ot.regexp_eatZero = function(t) {
        return (
          48 === t.current() &&
          !pt(t.lookahead()) &&
          ((t.lastIntValue = 0), t.advance(), !0)
        );
      }),
      (ot.regexp_eatControlEscape = function(t) {
        var e = t.current();
        return 116 === e
          ? ((t.lastIntValue = 9), t.advance(), !0)
          : 110 === e
            ? ((t.lastIntValue = 10), t.advance(), !0)
            : 118 === e
              ? ((t.lastIntValue = 11), t.advance(), !0)
              : 102 === e
                ? ((t.lastIntValue = 12), t.advance(), !0)
                : 114 === e && ((t.lastIntValue = 13), t.advance(), !0);
      }),
      (ot.regexp_eatControlLetter = function(t) {
        var e = t.current();
        return !!lt(e) && ((t.lastIntValue = e % 32), t.advance(), !0);
      }),
      (ot.regexp_eatRegExpUnicodeEscapeSequence = function(t) {
        var e = t.pos;
        if (t.eat(117)) {
          if (this.regexp_eatFixedHexDigits(t, 4)) {
            var i = t.lastIntValue;
            if (t.switchU && i >= 55296 && i <= 56319) {
              var n = t.pos;
              if (
                t.eat(92) &&
                t.eat(117) &&
                this.regexp_eatFixedHexDigits(t, 4)
              ) {
                var r = t.lastIntValue;
                if (r >= 56320 && r <= 57343)
                  return (
                    (t.lastIntValue = 1024 * (i - 55296) + (r - 56320) + 65536),
                    !0
                  );
              }
              (t.pos = n), (t.lastIntValue = i);
            }
            return !0;
          }
          if (
            t.switchU &&
            t.eat(123) &&
            this.regexp_eatHexDigits(t) &&
            t.eat(125) &&
            (function(t) {
              return t >= 0 && t <= 1114111;
            })(t.lastIntValue)
          )
            return !0;
          t.switchU && t.raise('Invalid unicode escape'), (t.pos = e);
        }
        return !1;
      }),
      (ot.regexp_eatIdentityEscape = function(t) {
        if (t.switchU)
          return (
            !!this.regexp_eatSyntaxCharacter(t) ||
            (!!t.eat(47) && ((t.lastIntValue = 47), !0))
          );
        var e = t.current();
        return (
          !(99 === e || (t.switchN && 107 === e)) &&
          ((t.lastIntValue = e), t.advance(), !0)
        );
      }),
      (ot.regexp_eatDecimalEscape = function(t) {
        t.lastIntValue = 0;
        var e = t.current();
        if (e >= 49 && e <= 57) {
          do {
            (t.lastIntValue = 10 * t.lastIntValue + (e - 48)), t.advance();
          } while ((e = t.current()) >= 48 && e <= 57);
          return !0;
        }
        return !1;
      }),
      (ot.regexp_eatCharacterClassEscape = function(t) {
        var e = t.current();
        if (
          (function(t) {
            return (
              100 === t ||
              68 === t ||
              115 === t ||
              83 === t ||
              119 === t ||
              87 === t
            );
          })(e)
        )
          return (t.lastIntValue = -1), t.advance(), !0;
        if (
          t.switchU &&
          this.options.ecmaVersion >= 9 &&
          (80 === e || 112 === e)
        ) {
          if (
            ((t.lastIntValue = -1),
            t.advance(),
            t.eat(123) &&
              this.regexp_eatUnicodePropertyValueExpression(t) &&
              t.eat(125))
          )
            return !0;
          t.raise('Invalid property name');
        }
        return !1;
      }),
      (ot.regexp_eatUnicodePropertyValueExpression = function(t) {
        var e = t.pos;
        if (this.regexp_eatUnicodePropertyName(t) && t.eat(61)) {
          var i = t.lastStringValue;
          if (this.regexp_eatUnicodePropertyValue(t)) {
            var n = t.lastStringValue;
            return this.regexp_validateUnicodePropertyNameAndValue(t, i, n), !0;
          }
        }
        if (((t.pos = e), this.regexp_eatLoneUnicodePropertyNameOrValue(t))) {
          var r = t.lastStringValue;
          return this.regexp_validateUnicodePropertyNameOrValue(t, r), !0;
        }
        return !1;
      }),
      (ot.regexp_validateUnicodePropertyNameAndValue = function(t, e, i) {
        (at.hasOwnProperty(e) && -1 !== at[e].indexOf(i)) ||
          t.raise('Invalid property name');
      }),
      (ot.regexp_validateUnicodePropertyNameOrValue = function(t, e) {
        -1 === at.$LONE.indexOf(e) && t.raise('Invalid property name');
      }),
      (ot.regexp_eatUnicodePropertyName = function(t) {
        var e = 0;
        for (t.lastStringValue = ''; ft((e = t.current())); )
          (t.lastStringValue += ut(e)), t.advance();
        return '' !== t.lastStringValue;
      }),
      (ot.regexp_eatUnicodePropertyValue = function(t) {
        var e = 0;
        for (t.lastStringValue = ''; dt((e = t.current())); )
          (t.lastStringValue += ut(e)), t.advance();
        return '' !== t.lastStringValue;
      }),
      (ot.regexp_eatLoneUnicodePropertyNameOrValue = function(t) {
        return this.regexp_eatUnicodePropertyValue(t);
      }),
      (ot.regexp_eatCharacterClass = function(t) {
        if (t.eat(91)) {
          if ((t.eat(94), this.regexp_classRanges(t), t.eat(93))) return !0;
          t.raise('Unterminated character class');
        }
        return !1;
      }),
      (ot.regexp_classRanges = function(t) {
        for (; this.regexp_eatClassAtom(t); ) {
          var e = t.lastIntValue;
          if (t.eat(45) && this.regexp_eatClassAtom(t)) {
            var i = t.lastIntValue;
            !t.switchU ||
              (-1 !== e && -1 !== i) ||
              t.raise('Invalid character class'),
              -1 !== e &&
                -1 !== i &&
                e > i &&
                t.raise('Range out of order in character class');
          }
        }
      }),
      (ot.regexp_eatClassAtom = function(t) {
        var e = t.pos;
        if (t.eat(92)) {
          if (this.regexp_eatClassEscape(t)) return !0;
          if (t.switchU) {
            var i = t.current();
            (99 === i || vt(i)) && t.raise('Invalid class escape'),
              t.raise('Invalid escape');
          }
          t.pos = e;
        }
        var n = t.current();
        return 93 !== n && ((t.lastIntValue = n), t.advance(), !0);
      }),
      (ot.regexp_eatClassEscape = function(t) {
        var e = t.pos;
        if (t.eat(98)) return (t.lastIntValue = 8), !0;
        if (t.switchU && t.eat(45)) return (t.lastIntValue = 45), !0;
        if (!t.switchU && t.eat(99)) {
          if (this.regexp_eatClassControlLetter(t)) return !0;
          t.pos = e;
        }
        return (
          this.regexp_eatCharacterClassEscape(t) ||
          this.regexp_eatCharacterEscape(t)
        );
      }),
      (ot.regexp_eatClassControlLetter = function(t) {
        var e = t.current();
        return (
          !(!pt(e) && 95 !== e) && ((t.lastIntValue = e % 32), t.advance(), !0)
        );
      }),
      (ot.regexp_eatHexEscapeSequence = function(t) {
        var e = t.pos;
        if (t.eat(120)) {
          if (this.regexp_eatFixedHexDigits(t, 2)) return !0;
          t.switchU && t.raise('Invalid escape'), (t.pos = e);
        }
        return !1;
      }),
      (ot.regexp_eatDecimalDigits = function(t) {
        var e = t.pos,
          i = 0;
        for (t.lastIntValue = 0; pt((i = t.current())); )
          (t.lastIntValue = 10 * t.lastIntValue + (i - 48)), t.advance();
        return t.pos !== e;
      }),
      (ot.regexp_eatHexDigits = function(t) {
        var e = t.pos,
          i = 0;
        for (t.lastIntValue = 0; gt((i = t.current())); )
          (t.lastIntValue = 16 * t.lastIntValue + _t(i)), t.advance();
        return t.pos !== e;
      }),
      (ot.regexp_eatLegacyOctalEscapeSequence = function(t) {
        if (this.regexp_eatOctalDigit(t)) {
          var e = t.lastIntValue;
          if (this.regexp_eatOctalDigit(t)) {
            var i = t.lastIntValue;
            e <= 3 && this.regexp_eatOctalDigit(t)
              ? (t.lastIntValue = 64 * e + 8 * i + t.lastIntValue)
              : (t.lastIntValue = 8 * e + i);
          } else t.lastIntValue = e;
          return !0;
        }
        return !1;
      }),
      (ot.regexp_eatOctalDigit = function(t) {
        var e = t.current();
        return vt(e)
          ? ((t.lastIntValue = e - 48), t.advance(), !0)
          : ((t.lastIntValue = 0), !1);
      }),
      (ot.regexp_eatFixedHexDigits = function(t, e) {
        var i = t.pos;
        t.lastIntValue = 0;
        for (var n = 0; n < e; ++n) {
          var r = t.current();
          if (!gt(r)) return (t.pos = i), !1;
          (t.lastIntValue = 16 * t.lastIntValue + _t(r)), t.advance();
        }
        return !0;
      });
    var mt = function(t) {
        (this.type = t.type),
          (this.value = t.value),
          (this.start = t.start),
          (this.end = t.end),
          t.options.locations && (this.loc = new O(t, t.startLoc, t.endLoc)),
          t.options.ranges && (this.range = [t.start, t.end]);
      },
      yt = F.prototype;
    function xt(t) {
      return t <= 65535
        ? String.fromCharCode(t)
        : ((t -= 65536),
          String.fromCharCode(55296 + (t >> 10), 56320 + (1023 & t)));
    }
    (yt.next = function() {
      this.options.onToken && this.options.onToken(new mt(this)),
        (this.lastTokEnd = this.end),
        (this.lastTokStart = this.start),
        (this.lastTokEndLoc = this.endLoc),
        (this.lastTokStartLoc = this.startLoc),
        this.nextToken();
    }),
      (yt.getToken = function() {
        return this.next(), new mt(this);
      }),
      'undefined' != typeof Symbol &&
        (yt[Symbol.iterator] = function() {
          var t = this;
          return {
            next: function() {
              var e = t.getToken();
              return { done: e.type === b.eof, value: e };
            },
          };
        }),
      (yt.curContext = function() {
        return this.context[this.context.length - 1];
      }),
      (yt.nextToken = function() {
        var t = this.curContext();
        return (
          (t && t.preserveSpace) || this.skipSpace(),
          (this.start = this.pos),
          this.options.locations && (this.startLoc = this.curPosition()),
          this.pos >= this.input.length
            ? this.finishToken(b.eof)
            : t.override
              ? t.override(this)
              : void this.readToken(this.fullCharCodeAtPos())
        );
      }),
      (yt.readToken = function(t) {
        return p(t, this.options.ecmaVersion >= 6) || 92 === t
          ? this.readWord()
          : this.getTokenFromCode(t);
      }),
      (yt.fullCharCodeAtPos = function() {
        var t = this.input.charCodeAt(this.pos);
        return t <= 55295 || t >= 57344
          ? t
          : (t << 10) + this.input.charCodeAt(this.pos + 1) - 56613888;
      }),
      (yt.skipBlockComment = function() {
        var t,
          e = this.options.onComment && this.curPosition(),
          i = this.pos,
          n = this.input.indexOf('*/', (this.pos += 2));
        if (
          (-1 === n && this.raise(this.pos - 2, 'Unterminated comment'),
          (this.pos = n + 2),
          this.options.locations)
        )
          for (
            S.lastIndex = i;
            (t = S.exec(this.input)) && t.index < this.pos;

          )
            ++this.curLine, (this.lineStart = t.index + t[0].length);
        this.options.onComment &&
          this.options.onComment(
            !0,
            this.input.slice(i + 2, n),
            i,
            this.pos,
            e,
            this.curPosition()
          );
      }),
      (yt.skipLineComment = function(t) {
        for (
          var e = this.pos,
            i = this.options.onComment && this.curPosition(),
            n = this.input.charCodeAt((this.pos += t));
          this.pos < this.input.length && !k(n);

        )
          n = this.input.charCodeAt(++this.pos);
        this.options.onComment &&
          this.options.onComment(
            !1,
            this.input.slice(e + t, this.pos),
            e,
            this.pos,
            i,
            this.curPosition()
          );
      }),
      (yt.skipSpace = function() {
        t: for (; this.pos < this.input.length; ) {
          var t = this.input.charCodeAt(this.pos);
          switch (t) {
            case 32:
            case 160:
              ++this.pos;
              break;
            case 13:
              10 === this.input.charCodeAt(this.pos + 1) && ++this.pos;
            case 10:
            case 8232:
            case 8233:
              ++this.pos,
                this.options.locations &&
                  (++this.curLine, (this.lineStart = this.pos));
              break;
            case 47:
              switch (this.input.charCodeAt(this.pos + 1)) {
                case 42:
                  this.skipBlockComment();
                  break;
                case 47:
                  this.skipLineComment(2);
                  break;
                default:
                  break t;
              }
              break;
            default:
              if (
                !(
                  (t > 8 && t < 14) ||
                  (t >= 5760 && A.test(String.fromCharCode(t)))
                )
              )
                break t;
              ++this.pos;
          }
        }
      }),
      (yt.finishToken = function(t, e) {
        (this.end = this.pos),
          this.options.locations && (this.endLoc = this.curPosition());
        var i = this.type;
        (this.type = t), (this.value = e), this.updateContext(i);
      }),
      (yt.readToken_dot = function() {
        var t = this.input.charCodeAt(this.pos + 1);
        if (t >= 48 && t <= 57) return this.readNumber(!0);
        var e = this.input.charCodeAt(this.pos + 2);
        return this.options.ecmaVersion >= 6 && 46 === t && 46 === e
          ? ((this.pos += 3), this.finishToken(b.ellipsis))
          : (++this.pos, this.finishToken(b.dot));
      }),
      (yt.readToken_slash = function() {
        var t = this.input.charCodeAt(this.pos + 1);
        return this.exprAllowed
          ? (++this.pos, this.readRegexp())
          : 61 === t
            ? this.finishOp(b.assign, 2)
            : this.finishOp(b.slash, 1);
      }),
      (yt.readToken_mult_modulo_exp = function(t) {
        var e = this.input.charCodeAt(this.pos + 1),
          i = 1,
          n = 42 === t ? b.star : b.modulo;
        return (
          this.options.ecmaVersion >= 7 &&
            42 === t &&
            42 === e &&
            (++i, (n = b.starstar), (e = this.input.charCodeAt(this.pos + 2))),
          61 === e ? this.finishOp(b.assign, i + 1) : this.finishOp(n, i)
        );
      }),
      (yt.readToken_pipe_amp = function(t) {
        var e = this.input.charCodeAt(this.pos + 1);
        return e === t
          ? this.finishOp(124 === t ? b.logicalOR : b.logicalAND, 2)
          : 61 === e
            ? this.finishOp(b.assign, 2)
            : this.finishOp(124 === t ? b.bitwiseOR : b.bitwiseAND, 1);
      }),
      (yt.readToken_caret = function() {
        return 61 === this.input.charCodeAt(this.pos + 1)
          ? this.finishOp(b.assign, 2)
          : this.finishOp(b.bitwiseXOR, 1);
      }),
      (yt.readToken_plus_min = function(t) {
        var e = this.input.charCodeAt(this.pos + 1);
        return e === t
          ? 45 !== e ||
            this.inModule ||
            62 !== this.input.charCodeAt(this.pos + 2) ||
            (0 !== this.lastTokEnd &&
              !C.test(this.input.slice(this.lastTokEnd, this.pos)))
            ? this.finishOp(b.incDec, 2)
            : (this.skipLineComment(3), this.skipSpace(), this.nextToken())
          : 61 === e
            ? this.finishOp(b.assign, 2)
            : this.finishOp(b.plusMin, 1);
      }),
      (yt.readToken_lt_gt = function(t) {
        var e = this.input.charCodeAt(this.pos + 1),
          i = 1;
        return e === t
          ? ((i =
              62 === t && 62 === this.input.charCodeAt(this.pos + 2) ? 3 : 2),
            61 === this.input.charCodeAt(this.pos + i)
              ? this.finishOp(b.assign, i + 1)
              : this.finishOp(b.bitShift, i))
          : 33 !== e ||
            60 !== t ||
            this.inModule ||
            45 !== this.input.charCodeAt(this.pos + 2) ||
            45 !== this.input.charCodeAt(this.pos + 3)
            ? (61 === e && (i = 2), this.finishOp(b.relational, i))
            : (this.skipLineComment(4), this.skipSpace(), this.nextToken());
      }),
      (yt.readToken_eq_excl = function(t) {
        var e = this.input.charCodeAt(this.pos + 1);
        return 61 === e
          ? this.finishOp(
              b.equality,
              61 === this.input.charCodeAt(this.pos + 2) ? 3 : 2
            )
          : 61 === t && 62 === e && this.options.ecmaVersion >= 6
            ? ((this.pos += 2), this.finishToken(b.arrow))
            : this.finishOp(61 === t ? b.eq : b.prefix, 1);
      }),
      (yt.getTokenFromCode = function(t) {
        switch (t) {
          case 46:
            return this.readToken_dot();
          case 40:
            return ++this.pos, this.finishToken(b.parenL);
          case 41:
            return ++this.pos, this.finishToken(b.parenR);
          case 59:
            return ++this.pos, this.finishToken(b.semi);
          case 44:
            return ++this.pos, this.finishToken(b.comma);
          case 91:
            return ++this.pos, this.finishToken(b.bracketL);
          case 93:
            return ++this.pos, this.finishToken(b.bracketR);
          case 123:
            return ++this.pos, this.finishToken(b.braceL);
          case 125:
            return ++this.pos, this.finishToken(b.braceR);
          case 58:
            return ++this.pos, this.finishToken(b.colon);
          case 63:
            return ++this.pos, this.finishToken(b.question);
          case 96:
            if (this.options.ecmaVersion < 6) break;
            return ++this.pos, this.finishToken(b.backQuote);
          case 48:
            var e = this.input.charCodeAt(this.pos + 1);
            if (120 === e || 88 === e) return this.readRadixNumber(16);
            if (this.options.ecmaVersion >= 6) {
              if (111 === e || 79 === e) return this.readRadixNumber(8);
              if (98 === e || 66 === e) return this.readRadixNumber(2);
            }
          case 49:
          case 50:
          case 51:
          case 52:
          case 53:
          case 54:
          case 55:
          case 56:
          case 57:
            return this.readNumber(!1);
          case 34:
          case 39:
            return this.readString(t);
          case 47:
            return this.readToken_slash();
          case 37:
          case 42:
            return this.readToken_mult_modulo_exp(t);
          case 124:
          case 38:
            return this.readToken_pipe_amp(t);
          case 94:
            return this.readToken_caret();
          case 43:
          case 45:
            return this.readToken_plus_min(t);
          case 60:
          case 62:
            return this.readToken_lt_gt(t);
          case 61:
          case 33:
            return this.readToken_eq_excl(t);
          case 126:
            return this.finishOp(b.prefix, 1);
        }
        this.raise(this.pos, "Unexpected character '" + xt(t) + "'");
      }),
      (yt.finishOp = function(t, e) {
        var i = this.input.slice(this.pos, this.pos + e);
        return (this.pos += e), this.finishToken(t, i);
      }),
      (yt.readRegexp = function() {
        for (var t, e, i = this.pos; ; ) {
          this.pos >= this.input.length &&
            this.raise(i, 'Unterminated regular expression');
          var n = this.input.charAt(this.pos);
          if (
            (C.test(n) && this.raise(i, 'Unterminated regular expression'), t)
          )
            t = !1;
          else {
            if ('[' === n) e = !0;
            else if (']' === n && e) e = !1;
            else if ('/' === n && !e) break;
            t = '\\' === n;
          }
          ++this.pos;
        }
        var r = this.input.slice(i, this.pos);
        ++this.pos;
        var s = this.pos,
          a = this.readWord1();
        this.containsEsc && this.unexpected(s);
        var o = this.regexpState || (this.regexpState = new ht(this));
        o.reset(i, r, a),
          this.validateRegExpFlags(o),
          this.validateRegExpPattern(o);
        var h = null;
        try {
          h = new RegExp(r, a);
        } catch (t) {}
        return this.finishToken(b.regexp, { pattern: r, flags: a, value: h });
      }),
      (yt.readInt = function(t, e) {
        for (
          var i = this.pos, n = 0, r = 0, s = null == e ? 1 / 0 : e;
          r < s;
          ++r
        ) {
          var a = this.input.charCodeAt(this.pos),
            o = void 0;
          if (
            (o =
              a >= 97
                ? a - 97 + 10
                : a >= 65
                  ? a - 65 + 10
                  : a >= 48 && a <= 57
                    ? a - 48
                    : 1 / 0) >= t
          )
            break;
          ++this.pos, (n = n * t + o);
        }
        return this.pos === i || (null != e && this.pos - i !== e) ? null : n;
      }),
      (yt.readRadixNumber = function(t) {
        this.pos += 2;
        var e = this.readInt(t);
        return (
          null == e &&
            this.raise(this.start + 2, 'Expected number in radix ' + t),
          p(this.fullCharCodeAtPos()) &&
            this.raise(this.pos, 'Identifier directly after number'),
          this.finishToken(b.num, e)
        );
      }),
      (yt.readNumber = function(t) {
        var e = this.pos;
        t || null !== this.readInt(10) || this.raise(e, 'Invalid number');
        var i = this.pos - e >= 2 && 48 === this.input.charCodeAt(e);
        i && this.strict && this.raise(e, 'Invalid number'),
          i && /[89]/.test(this.input.slice(e, this.pos)) && (i = !1);
        var n = this.input.charCodeAt(this.pos);
        46 !== n ||
          i ||
          (++this.pos, this.readInt(10), (n = this.input.charCodeAt(this.pos))),
          (69 !== n && 101 !== n) ||
            i ||
            ((43 !== (n = this.input.charCodeAt(++this.pos)) && 45 !== n) ||
              ++this.pos,
            null === this.readInt(10) && this.raise(e, 'Invalid number')),
          p(this.fullCharCodeAtPos()) &&
            this.raise(this.pos, 'Identifier directly after number');
        var r = this.input.slice(e, this.pos),
          s = i ? parseInt(r, 8) : parseFloat(r);
        return this.finishToken(b.num, s);
      }),
      (yt.readCodePoint = function() {
        var t;
        if (123 === this.input.charCodeAt(this.pos)) {
          this.options.ecmaVersion < 6 && this.unexpected();
          var e = ++this.pos;
          (t = this.readHexChar(this.input.indexOf('}', this.pos) - this.pos)),
            ++this.pos,
            t > 1114111 &&
              this.invalidStringToken(e, 'Code point out of bounds');
        } else t = this.readHexChar(4);
        return t;
      }),
      (yt.readString = function(t) {
        for (var e = '', i = ++this.pos; ; ) {
          this.pos >= this.input.length &&
            this.raise(this.start, 'Unterminated string constant');
          var n = this.input.charCodeAt(this.pos);
          if (n === t) break;
          92 === n
            ? ((e += this.input.slice(i, this.pos)),
              (e += this.readEscapedChar(!1)),
              (i = this.pos))
            : (k(n, this.options.ecmaVersion >= 10) &&
                this.raise(this.start, 'Unterminated string constant'),
              ++this.pos);
        }
        return (
          (e += this.input.slice(i, this.pos++)), this.finishToken(b.string, e)
        );
      });
    var wt = {};
    (yt.tryReadTemplateToken = function() {
      this.inTemplateElement = !0;
      try {
        this.readTmplToken();
      } catch (t) {
        if (t !== wt) throw t;
        this.readInvalidTemplateToken();
      }
      this.inTemplateElement = !1;
    }),
      (yt.invalidStringToken = function(t, e) {
        if (this.inTemplateElement && this.options.ecmaVersion >= 9) throw wt;
        this.raise(t, e);
      }),
      (yt.readTmplToken = function() {
        for (var t = '', e = this.pos; ; ) {
          this.pos >= this.input.length &&
            this.raise(this.start, 'Unterminated template');
          var i = this.input.charCodeAt(this.pos);
          if (
            96 === i ||
            (36 === i && 123 === this.input.charCodeAt(this.pos + 1))
          )
            return this.pos !== this.start ||
              (this.type !== b.template && this.type !== b.invalidTemplate)
              ? ((t += this.input.slice(e, this.pos)),
                this.finishToken(b.template, t))
              : 36 === i
                ? ((this.pos += 2), this.finishToken(b.dollarBraceL))
                : (++this.pos, this.finishToken(b.backQuote));
          if (92 === i)
            (t += this.input.slice(e, this.pos)),
              (t += this.readEscapedChar(!0)),
              (e = this.pos);
          else if (k(i)) {
            switch (((t += this.input.slice(e, this.pos)), ++this.pos, i)) {
              case 13:
                10 === this.input.charCodeAt(this.pos) && ++this.pos;
              case 10:
                t += '\n';
                break;
              default:
                t += String.fromCharCode(i);
            }
            this.options.locations &&
              (++this.curLine, (this.lineStart = this.pos)),
              (e = this.pos);
          } else ++this.pos;
        }
      }),
      (yt.readInvalidTemplateToken = function() {
        for (; this.pos < this.input.length; this.pos++)
          switch (this.input[this.pos]) {
            case '\\':
              ++this.pos;
              break;
            case '$':
              if ('{' !== this.input[this.pos + 1]) break;
            case '`':
              return this.finishToken(
                b.invalidTemplate,
                this.input.slice(this.start, this.pos)
              );
          }
        this.raise(this.start, 'Unterminated template');
      }),
      (yt.readEscapedChar = function(t) {
        var e = this.input.charCodeAt(++this.pos);
        switch ((++this.pos, e)) {
          case 110:
            return '\n';
          case 114:
            return '\r';
          case 120:
            return String.fromCharCode(this.readHexChar(2));
          case 117:
            return xt(this.readCodePoint());
          case 116:
            return '\t';
          case 98:
            return '\b';
          case 118:
            return '\v';
          case 102:
            return '\f';
          case 13:
            10 === this.input.charCodeAt(this.pos) && ++this.pos;
          case 10:
            return (
              this.options.locations &&
                ((this.lineStart = this.pos), ++this.curLine),
              ''
            );
          default:
            if (e >= 48 && e <= 55) {
              var i = this.input.substr(this.pos - 1, 3).match(/^[0-7]+/)[0],
                n = parseInt(i, 8);
              return (
                n > 255 && ((i = i.slice(0, -1)), (n = parseInt(i, 8))),
                (this.pos += i.length - 1),
                (e = this.input.charCodeAt(this.pos)),
                ('0' === i && 56 !== e && 57 !== e) ||
                  (!this.strict && !t) ||
                  this.invalidStringToken(
                    this.pos - 1 - i.length,
                    t
                      ? 'Octal literal in template string'
                      : 'Octal literal in strict mode'
                  ),
                String.fromCharCode(n)
              );
            }
            return String.fromCharCode(e);
        }
      }),
      (yt.readHexChar = function(t) {
        var e = this.pos,
          i = this.readInt(16, t);
        return (
          null === i &&
            this.invalidStringToken(e, 'Bad character escape sequence'),
          i
        );
      }),
      (yt.readWord1 = function() {
        this.containsEsc = !1;
        for (
          var t = '', e = !0, i = this.pos, n = this.options.ecmaVersion >= 6;
          this.pos < this.input.length;

        ) {
          var r = this.fullCharCodeAtPos();
          if (g(r, n)) this.pos += r <= 65535 ? 1 : 2;
          else {
            if (92 !== r) break;
            (this.containsEsc = !0), (t += this.input.slice(i, this.pos));
            var s = this.pos;
            117 !== this.input.charCodeAt(++this.pos) &&
              this.invalidStringToken(
                this.pos,
                'Expecting Unicode escape sequence \\uXXXX'
              ),
              ++this.pos;
            var a = this.readCodePoint();
            (e ? p : g)(a, n) ||
              this.invalidStringToken(s, 'Invalid Unicode escape'),
              (t += xt(a)),
              (i = this.pos);
          }
          e = !1;
        }
        return t + this.input.slice(i, this.pos);
      }),
      (yt.readWord = function() {
        var t = this.readWord1(),
          e = b.name;
        return (
          this.keywords.test(t) &&
            (this.containsEsc &&
              this.raiseRecoverable(
                this.start,
                'Escape sequence in keyword ' + t
              ),
            (e = x[t])),
          this.finishToken(e, t)
        );
      });
    var bt,
      Ct,
      St,
      kt = '5.7.1';
    function At(t, e) {
      return new F(e, t).parse();
    }
    function Pt(t, e, i) {
      var n = new F(i, t, e);
      return n.nextToken(), n.parseExpression();
    }
    function It(t, e) {
      return new F(e, t);
    }
    function Et(t, e, i) {
      (bt = t), (Ct = e), (St = i);
    }
  },
  function(t, e) {},
  function(t, e, i) {
    window,
      (t.exports = (function(t) {
        return (function(t) {
          var e = {};
          function i(n) {
            if (e[n]) return e[n].exports;
            var r = (e[n] = { i: n, l: !1, exports: {} });
            return t[n].call(r.exports, r, r.exports, i), (r.l = !0), r.exports;
          }
          return (
            (i.m = t),
            (i.c = e),
            (i.d = function(t, e, n) {
              i.o(t, e) ||
                Object.defineProperty(t, e, {
                  configurable: !1,
                  enumerable: !0,
                  get: n,
                });
            }),
            (i.r = function(t) {
              Object.defineProperty(t, '__esModule', { value: !0 });
            }),
            (i.n = function(t) {
              var e =
                t && t.__esModule
                  ? function() {
                      return t.default;
                    }
                  : function() {
                      return t;
                    };
              return i.d(e, 'a', e), e;
            }),
            (i.o = function(t, e) {
              return Object.prototype.hasOwnProperty.call(t, e);
            }),
            (i.p = ''),
            i((i.s = 4))
          );
        })([
          function(e, i) {
            e.exports = t;
          },
          function(t, e, i) {
            'use strict';
            Object.defineProperty(e, '__esModule', { value: !0 }),
              (e.default = function(t, e) {
                e || (e = document.createElement('canvas'));
                var i = new n.PaperScope();
                i.setup(e), (t.scope = i);
                var r,
                  s,
                  a,
                  o = new i.Tool(),
                  h = t.alpha,
                  u = t.lightness,
                  c = t.hue,
                  l = t.saturation,
                  f = t.strokeColor,
                  d = { segments: !0, stroke: !0, fill: !0, tolerance: 5 };
                function p(t) {
                  (t.fillColor = {
                    hue: c,
                    saturation: l,
                    lightness: u,
                    alpha: h,
                  }),
                    (t.strokeColor = f),
                    (t.closed = !0);
                }
                return (
                  (o.onMouseDown = function(t) {
                    a = null;
                    var e = i.project.hitTest(t.point, d);
                    if (e) {
                      if (t.modifiers.shift)
                        return void ('segment' == e.type && e.segment.remove());
                      e && (a = e.item),
                        'fill' == e.type &&
                          i.project.activeLayer.addChild(e.item);
                    } else
                      r &&
                        ((r.selected = !1),
                        i.project.activeLayer.removeChildren()),
                        (s = t.point),
                        p((r = new i.Path.Circle({ center: s, radius: 0 }))),
                        (r.fullySelected = !0);
                  }),
                  (o.onMouseMove = function(t) {
                    (i.project.activeLayer.selected = !1),
                      t.item && (t.item.selected = !0);
                  }),
                  (o.onMouseDrag = function(t) {
                    if (a)
                      (a.position.x += t.delta.x), (a.position.y += t.delta.y);
                    else if (r) {
                      var e = t.point.getDistance(s);
                      i.project.activeLayer.removeChildren(),
                        p((r = new i.Path.Circle({ center: s, radius: e })));
                    }
                  }),
                  (o.onMouseUp = function(t) {
                    r.fullySelected = !0;
                  }),
                  console.debug('Select Circle Added!'),
                  i.project.view.draw(),
                  i
                );
              });
            var n = (function(t) {
              if (t && t.__esModule) return t;
              var e = {};
              if (null != t)
                for (var i in t)
                  Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
              return (e.default = t), e;
            })(i(0));
          },
          function(t, e, i) {
            'use strict';
            Object.defineProperty(e, '__esModule', { value: !0 }),
              (e.default = function(t, e) {
                e || (e = document.createElement('canvas'));
                var i = new n.PaperScope();
                i.setup(e), (t.scope = i);
                var r,
                  s,
                  a,
                  o = new i.Tool(),
                  h = t.alpha,
                  u = t.lightness,
                  c = t.hue,
                  l = t.saturation,
                  f = t.strokeColor,
                  d = { segments: !0, stroke: !0, fill: !0, tolerance: 5 };
                function p(t) {
                  (t.fillColor = {
                    hue: c,
                    saturation: l,
                    lightness: u,
                    alpha: h,
                  }),
                    (t.strokeColor = f),
                    (t.closed = !0);
                }
                return (
                  (o.onMouseDown = function(t) {
                    a = null;
                    var e = i.project.hitTest(t.point, d);
                    if (e) {
                      if (t.modifiers.shift)
                        return void ('segment' == e.type && e.segment.remove());
                      e && (a = e.item),
                        'fill' == e.type &&
                          i.project.activeLayer.addChild(e.item);
                    } else {
                      r &&
                        ((r.selected = !1),
                        i.project.activeLayer.removeChildren()),
                        (s = t.point);
                      var n = new i.Size(0, 0),
                        o = new i.Rectangle({ point: s, size: n });
                      p((r = new i.Path(o))), (r.fullySelected = !0);
                    }
                  }),
                  (o.onMouseMove = function(t) {
                    (i.project.activeLayer.selected = !1),
                      t.item && (t.item.selected = !0);
                  }),
                  (o.onMouseDrag = function(t) {
                    if (a)
                      (a.position.x += t.delta.x), (a.position.y += t.delta.y);
                    else if (r) {
                      new i.Point(t.x, t.y);
                      var e = new i.Rectangle({ from: s, to: t.point });
                      i.project.activeLayer.removeChildren(),
                        p((r = new i.Path.Rectangle(e)));
                    }
                  }),
                  (o.onMouseUp = function(t) {
                    r.fullySelected = !0;
                  }),
                  console.debug('Select Rectangle Added!'),
                  i.project.view.draw(),
                  i
                );
              });
            var n = (function(t) {
              if (t && t.__esModule) return t;
              var e = {};
              if (null != t)
                for (var i in t)
                  Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
              return (e.default = t), e;
            })(i(0));
          },
          function(t, e, i) {
            'use strict';
            Object.defineProperty(e, '__esModule', { value: !0 }),
              (e.default = function(t, e) {
                e || (e = document.createElement('canvas'));
                var i = new n.default.PaperScope();
                i.setup(e), (t.scope = i);
                var r,
                  s,
                  a,
                  o = new i.Tool(),
                  h = t.alpha,
                  u = t.lightness,
                  c = t.hue,
                  l = t.saturation,
                  f = t.strokeColor,
                  d = { segments: !0, stroke: !0, fill: !0, tolerance: 5 };
                return (
                  (o.onMouseDown = function(t) {
                    a = s = null;
                    var e,
                      n = i.project.hitTest(t.point, d);
                    if (n) {
                      if (t.modifiers.shift)
                        return void ('segment' == n.type && n.segment.remove());
                      if (n)
                        if (((s = n.item), 'segment' == n.type)) a = n.segment;
                        else if ('stroke' == n.type) {
                          var o = n.location;
                          (a = s.insert(o.index + 1, t.point)), s.smooth();
                        }
                      'fill' == n.type &&
                        i.project.activeLayer.addChild(n.item);
                    } else
                      r &&
                        ((r.selected = !1),
                        i.project.activeLayer.removeChildren()),
                        (r = new i.Path()),
                        ((e = r).fillColor = {
                          hue: c,
                          saturation: l,
                          lightness: u,
                          alpha: h,
                        }),
                        (e.strokeColor = f),
                        (e.closed = !0),
                        (r.fullySelected = !0);
                  }),
                  (o.onMouseMove = function(t) {
                    (i.project.activeLayer.selected = !1),
                      t.item && (t.item.selected = !0);
                  }),
                  (o.onMouseDrag = function(t) {
                    a
                      ? ((a.point.x += t.delta.x),
                        (a.point.y += t.delta.y),
                        s.smooth())
                      : s
                        ? ((s.position.x += t.delta.x),
                          (s.position.y += t.delta.y))
                        : r && r.add(t.point);
                  }),
                  (o.onMouseUp = function(t) {
                    r.segments.length,
                      r.smooth(),
                      r.simplify(),
                      (r.fullySelected = !0);
                  }),
                  console.debug('Select Lasso Added!'),
                  i.project.view.draw(),
                  i
                );
              });
            var n = (function(t) {
              if (t && t.__esModule) return t;
              var e = {};
              if (null != t)
                for (var i in t)
                  Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
              return (e.default = t), e;
            })(i(0));
          },
          function(t, e, i) {
            'use strict';
            Object.defineProperty(e, '__esModule', { value: !0 }),
              (e.Settings = e.circle = e.rectangle = e.lasso = void 0);
            var n = (function() {
              function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                  var n = e[i];
                  (n.enumerable = n.enumerable || !1),
                    (n.configurable = !0),
                    'value' in n && (n.writable = !0),
                    Object.defineProperty(t, n.key, n);
                }
              }
              return function(e, i, n) {
                return i && t(e.prototype, i), n && t(e, n), e;
              };
            })();
            e.pointsFilter = function(t, e) {
              var i = [];
              return (
                e.forEach(function(e) {
                  t.scope.project.hitTest(e.point) && i.push(e);
                }),
                i
              );
            };
            var r = o(i(3)),
              s = o(i(2)),
              a = o(i(1));
            function o(t) {
              return t && t.__esModule ? t : { default: t };
            }
            (e.lasso = r.default),
              (e.rectangle = s.default),
              (e.circle = a.default),
              (e.Settings = (function() {
                function t() {
                  !(function(t, e) {
                    if (!(t instanceof e))
                      throw new TypeError('Cannot call a class as a function');
                  })(this, t),
                    (this.alpha = 0.2),
                    (this.lightness = 0.28),
                    (this.hue = 180),
                    (this.saturation = 0.93),
                    (this.strokeColor = '#BEE7F5');
                }
                return (
                  n(t, [
                    {
                      key: 'scope',
                      get: function() {
                        return this._scope;
                      },
                      set: function(t) {
                        this._scope = t;
                      },
                    },
                    {
                      key: 'alpha',
                      get: function() {
                        return this._alpha;
                      },
                      set: function(t) {
                        this._alpha = t;
                      },
                    },
                    {
                      key: 'lightness',
                      get: function() {
                        return this._lightness;
                      },
                      set: function(t) {
                        this._lightness = t;
                      },
                    },
                    {
                      key: 'hue',
                      get: function() {
                        return this._hue;
                      },
                      set: function(t) {
                        this._hue = t;
                      },
                    },
                    {
                      key: 'saturation',
                      get: function() {
                        return this._saturation;
                      },
                      set: function(t) {
                        this._saturation = t;
                      },
                    },
                    {
                      key: 'strokeColor',
                      get: function() {
                        return this._strokeColor;
                      },
                      set: function(t) {
                        this._strokeColor = t;
                      },
                    },
                  ]),
                  t
                );
              })());
          },
        ]);
      })(i(0)));
  },
  function(t, e, i) {
    'use strict';
    var n = s(i(4)),
      r = s(i(0));
    function s(t) {
      if (t && t.__esModule) return t;
      var e = {};
      if (null != t)
        for (var i in t)
          Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
      return (e.default = t), e;
    }
    var a = document.getElementById('core'),
      o = document.getElementById('core2');
    window.onload = function() {
      (a.style.background = '#eeeeee'),
        (a.style.height = '50%'),
        (a.style.width = '100vw'),
        (a.height = document.body.height),
        (a.width = document.body.width),
        (o.style.background = '#dedede'),
        (o.style.height = '50%'),
        (o.style.width = '100vw'),
        (o.height = document.body.height),
        (o.width = document.body.width),
        (window.paper = r);
      var t = new n.Settings();
      (t.strokeColor = '#08BCBC'), n.lasso(t, a);
      var e = new n.Settings();
      (e.strokeColor = '#08BCBC'), n.lasso(e, o);
    };
  },
]);
