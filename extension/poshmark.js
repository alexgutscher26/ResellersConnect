/*! For license information please see poshmark.js.LICENSE.txt */
(() => {
  var e = {
      6419: (e, t, r) => {
        e.exports = r(7698);
      },
      1511: (e, t, r) => {
        e.exports = r(3363);
      },
      7766: (e, t, r) => {
        e.exports = r(8065);
      },
      2119: (e, t, r) => {
        e.exports = r(7448);
      },
      4473: (e, t, r) => {
        e.exports = r(1577);
      },
      8914: (e, t, r) => {
        e.exports = r(6279);
      },
      9301: (e, t, r) => {
        e.exports = r(3819);
      },
      3649: (e, t, r) => {
        e.exports = r(2073);
      },
      9340: (e, t, r) => {
        e.exports = r(8933);
      },
      9392: (e, t, r) => {
        e.exports = r(5868);
      },
      1942: (e, t, r) => {
        e.exports = r(3383);
      },
      3978: (e, t, r) => {
        e.exports = r(1910);
      },
      6902: (e, t, r) => {
        e.exports = r(3059);
      },
      6384: (e, t, r) => {
        e.exports = r(5519);
      },
      5420: (e, t, r) => {
        e.exports = r(2547);
      },
      3592: (e, t, r) => {
        e.exports = r(7385);
      },
      8363: (e, t, r) => {
        e.exports = r(1522);
      },
      9996: (e, t, r) => {
        e.exports = r(9574);
      },
      6976: (e, t, r) => {
        e.exports = r(1258);
      },
      5238: (e, t, r) => {
        e.exports = r(1493);
      },
      4341: (e, t, r) => {
        e.exports = r(3685);
      },
      1446: (e, t, r) => {
        e.exports = r(6600);
      },
      4243: (e) => {
        (e.exports = function (e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
          return n;
        }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      },
      7726: (e, t, r) => {
        var n = r(8363);
        (e.exports = function (e) {
          if (n(e)) return e;
        }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      },
      6868: (e, t, r) => {
        var n = r(8363),
          a = r(4243);
        (e.exports = function (e) {
          if (n(e)) return a(e);
        }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      },
      7672: (e, t, r) => {
        var n = r(4341);
        (e.exports = function (e, t, r) {
          return (
            t in e
              ? n(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = r),
            e
          );
        }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      },
      530: (e) => {
        (e.exports = function (e) {
          return e && e.__esModule ? e : { default: e };
        }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      },
      5400: (e, t, r) => {
        var n = r(1446),
          a = r(9996),
          o = r(3592);
        (e.exports = function (e) {
          if ((void 0 !== n && null != a(e)) || null != e["@@iterator"])
            return o(e);
        }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      },
      5056: (e, t, r) => {
        var n = r(1446),
          a = r(9996);
        (e.exports = function (e, t) {
          var r = null == e ? null : (void 0 !== n && a(e)) || e["@@iterator"];
          if (null != r) {
            var o,
              i,
              l = [],
              u = !0,
              s = !1;
            try {
              for (
                r = r.call(e);
                !(u = (o = r.next()).done) &&
                (l.push(o.value), !t || l.length !== t);
                u = !0
              );
            } catch (e) {
              (s = !0), (i = e);
            } finally {
              try {
                u || null == r.return || r.return();
              } finally {
                if (s) throw i;
              }
            }
            return l;
          }
        }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      },
      9736: (e) => {
        (e.exports = function () {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      },
      6670: (e) => {
        (e.exports = function () {
          throw new TypeError(
            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      },
      8777: (e, t, r) => {
        var n = r(7726),
          a = r(5056),
          o = r(9299),
          i = r(9736);
        (e.exports = function (e, t) {
          return n(e) || a(e, t) || o(e, t) || i();
        }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      },
      9036: (e, t, r) => {
        var n = r(6868),
          a = r(5400),
          o = r(9299),
          i = r(6670);
        (e.exports = function (e) {
          return n(e) || a(e) || o(e) || i();
        }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      },
      9299: (e, t, r) => {
        var n = r(5238),
          a = r(3592),
          o = r(4243);
        (e.exports = function (e, t) {
          var r;
          if (e) {
            if ("string" == typeof e) return o(e, t);
            var i = n((r = Object.prototype.toString.call(e))).call(r, 8, -1);
            return (
              "Object" === i && e.constructor && (i = e.constructor.name),
              "Map" === i || "Set" === i
                ? a(e)
                : "Arguments" === i ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)
                ? o(e, t)
                : void 0
            );
          }
        }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      },
      7757: (e, t, r) => {
        e.exports = r(5666);
      },
      2991: (e, t, r) => {
        "use strict";
        r.d(t, { R: () => o, Y: () => i });
        var n = r(2176),
          a = {};
        function o() {
          return (0, n.KV)()
            ? r.g
            : "undefined" != typeof window
            ? window
            : "undefined" != typeof self
            ? self
            : a;
        }
        function i(e, t, r) {
          var n = r || o(),
            a = (n.__SENTRY__ = n.__SENTRY__ || {});
          return a[e] || (a[e] = t());
        }
      },
      2176: (e, t, r) => {
        "use strict";
        function n() {
          return (
            !(
              "undefined" != typeof __SENTRY_BROWSER_BUNDLE__ &&
              __SENTRY_BROWSER_BUNDLE__
            ) &&
            "[object process]" ===
              Object.prototype.toString.call(
                "undefined" != typeof process ? process : 0
              )
          );
        }
        function a(e, t) {
          return e.require(t);
        }
        r.d(t, { l$: () => a, KV: () => n }), (e = r.hmd(e));
      },
      1170: (e, t, r) => {
        "use strict";
        r.d(t, { ph: () => s, yW: () => u });
        var n = r(2991),
          a = r(2176);
        e = r.hmd(e);
        var o = { nowSeconds: () => Date.now() / 1e3 },
          i = (0, a.KV)()
            ? (function () {
                try {
                  return (0, a.l$)(e, "perf_hooks").performance;
                } catch (e) {
                  return;
                }
              })()
            : (function () {
                const { performance: e } = (0, n.R)();
                if (e && e.now)
                  return {
                    now: () => e.now(),
                    timeOrigin: Date.now() - e.now(),
                  };
              })(),
          l =
            void 0 === i
              ? o
              : { nowSeconds: () => (i.timeOrigin + i.now()) / 1e3 },
          u = o.nowSeconds.bind(o),
          s = l.nowSeconds.bind(l);
        let c;
        (() => {
          const { performance: e } = (0, n.R)();
          if (e && e.now) {
            var t = 36e5,
              r = e.now(),
              a = Date.now(),
              o = e.timeOrigin ? Math.abs(e.timeOrigin + r - a) : t,
              i = o < t,
              l = e.timing && e.timing.navigationStart,
              u = "number" == typeof l ? Math.abs(l + r - a) : t;
            return i || u < t
              ? o <= u
                ? ((c = "timeOrigin"), e.timeOrigin)
                : ((c = "navigationStart"), l)
              : ((c = "dateNow"), a);
          }
          c = "none";
        })();
      },
      1309: (e, t, r) => {
        "use strict";
        function n() {
          return (
            (n =
              Object.assign ||
              function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
            n.apply(this, arguments)
          );
        }
        r.d(t, { jQ: () => qe, BX: () => Rr });
        var a = r(69),
          o = r.n(a),
          i = Object.prototype.toString;
        function l(e) {
          return "function" == typeof e || "[object Function]" === i.call(e);
        }
        var u = Math.pow(2, 53) - 1;
        function s(e, t) {
          var r = Array,
            n = Object(e);
          if (null == e)
            throw new TypeError(
              "Array.from requires an array-like object - not null or undefined"
            );
          if (void 0 !== t && !l(t))
            throw new TypeError(
              "Array.from: when provided, the second argument must be a function"
            );
          for (
            var a,
              o = (function (e) {
                var t = (function (e) {
                  var t = Number(e);
                  return isNaN(t)
                    ? 0
                    : 0 !== t && isFinite(t)
                    ? (t > 0 ? 1 : -1) * Math.floor(Math.abs(t))
                    : t;
                })(e);
                return Math.min(Math.max(t, 0), u);
              })(n.length),
              i = l(r) ? Object(new r(o)) : new Array(o),
              s = 0;
            s < o;

          )
            (a = n[s]), (i[s] = t ? t(a, s) : a), (s += 1);
          return (i.length = o), i;
        }
        function c(e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        }
        function d(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n);
          }
        }
        function p(e, t, r) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = r),
            e
          );
        }
        const f =
          "undefined" == typeof Set
            ? Set
            : (function () {
                function e() {
                  var t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : [];
                  c(this, e), p(this, "items", void 0), (this.items = t);
                }
                var t, r;
                return (
                  (t = e),
                  (r = [
                    {
                      key: "add",
                      value: function (e) {
                        return !1 === this.has(e) && this.items.push(e), this;
                      },
                    },
                    {
                      key: "clear",
                      value: function () {
                        this.items = [];
                      },
                    },
                    {
                      key: "delete",
                      value: function (e) {
                        var t = this.items.length;
                        return (
                          (this.items = this.items.filter(function (t) {
                            return t !== e;
                          })),
                          t !== this.items.length
                        );
                      },
                    },
                    {
                      key: "forEach",
                      value: function (e) {
                        var t = this;
                        this.items.forEach(function (r) {
                          e(r, r, t);
                        });
                      },
                    },
                    {
                      key: "has",
                      value: function (e) {
                        return -1 !== this.items.indexOf(e);
                      },
                    },
                    {
                      key: "size",
                      get: function () {
                        return this.items.length;
                      },
                    },
                  ]) && d(t.prototype, r),
                  Object.defineProperty(t, "prototype", { writable: !1 }),
                  e
                );
              })();
        function m(e) {
          var t;
          return null !== (t = e.localName) && void 0 !== t
            ? t
            : e.tagName.toLowerCase();
        }
        var h = {
            article: "article",
            aside: "complementary",
            button: "button",
            datalist: "listbox",
            dd: "definition",
            details: "group",
            dialog: "dialog",
            dt: "term",
            fieldset: "group",
            figure: "figure",
            form: "form",
            footer: "contentinfo",
            h1: "heading",
            h2: "heading",
            h3: "heading",
            h4: "heading",
            h5: "heading",
            h6: "heading",
            header: "banner",
            hr: "separator",
            html: "document",
            legend: "legend",
            li: "listitem",
            math: "math",
            main: "main",
            menu: "list",
            nav: "navigation",
            ol: "list",
            optgroup: "group",
            option: "option",
            output: "status",
            progress: "progressbar",
            section: "region",
            summary: "button",
            table: "table",
            tbody: "rowgroup",
            textarea: "textbox",
            tfoot: "rowgroup",
            td: "cell",
            th: "columnheader",
            thead: "rowgroup",
            tr: "row",
            ul: "list",
          },
          v = {
            caption: new Set(["aria-label", "aria-labelledby"]),
            code: new Set(["aria-label", "aria-labelledby"]),
            deletion: new Set(["aria-label", "aria-labelledby"]),
            emphasis: new Set(["aria-label", "aria-labelledby"]),
            generic: new Set([
              "aria-label",
              "aria-labelledby",
              "aria-roledescription",
            ]),
            insertion: new Set(["aria-label", "aria-labelledby"]),
            paragraph: new Set(["aria-label", "aria-labelledby"]),
            presentation: new Set(["aria-label", "aria-labelledby"]),
            strong: new Set(["aria-label", "aria-labelledby"]),
            subscript: new Set(["aria-label", "aria-labelledby"]),
            superscript: new Set(["aria-label", "aria-labelledby"]),
          };
        function b(e, t) {
          return (function (e, t) {
            return [
              "aria-atomic",
              "aria-busy",
              "aria-controls",
              "aria-current",
              "aria-describedby",
              "aria-details",
              "aria-dropeffect",
              "aria-flowto",
              "aria-grabbed",
              "aria-hidden",
              "aria-keyshortcuts",
              "aria-label",
              "aria-labelledby",
              "aria-live",
              "aria-owns",
              "aria-relevant",
              "aria-roledescription",
            ].some(function (r) {
              var n;
              return (
                e.hasAttribute(r) &&
                !(null !== (n = v[t]) && void 0 !== n && n.has(r))
              );
            });
          })(e, t);
        }
        function y(e) {
          return null !== e && e.nodeType === e.ELEMENT_NODE;
        }
        function g(e) {
          return y(e) && "caption" === m(e);
        }
        function w(e) {
          return y(e) && "input" === m(e);
        }
        function x(e) {
          return y(e) && "optgroup" === m(e);
        }
        function E(e) {
          return y(e) && "table" === m(e);
        }
        function _(e) {
          var t = (null === e.ownerDocument ? e : e.ownerDocument).defaultView;
          if (null === t) throw new TypeError("no window available");
          return t;
        }
        function C(e) {
          return y(e) && "fieldset" === m(e);
        }
        function k(e) {
          return y(e) && "legend" === m(e);
        }
        function P(e) {
          return y(e) && "slot" === m(e);
        }
        function S(e) {
          return y(e) && "svg" === m(e);
        }
        function q(e) {
          return (
            (function (e) {
              return y(e) && void 0 !== e.ownerSVGElement;
            })(e) && "title" === m(e)
          );
        }
        function R(e, t) {
          if (y(e) && e.hasAttribute(t)) {
            var r = e.getAttribute(t).split(" "),
              n = e.getRootNode ? e.getRootNode() : e.ownerDocument;
            return r
              .map(function (e) {
                return n.getElementById(e);
              })
              .filter(function (e) {
                return null !== e;
              });
          }
          return [];
        }
        function T(e, t) {
          return (
            !!y(e) &&
            -1 !==
              t.indexOf(
                (function (e) {
                  var t = (function (e) {
                    var t = e.getAttribute("role");
                    if (null !== t) {
                      var r = t.trim().split(" ")[0];
                      if (r.length > 0) return r;
                    }
                    return null;
                  })(e);
                  if (null === t || "presentation" === t) {
                    var r = (function (e) {
                      var t = h[m(e)];
                      if (void 0 !== t) return t;
                      switch (m(e)) {
                        case "a":
                        case "area":
                        case "link":
                          if (e.hasAttribute("href")) return "link";
                          break;
                        case "img":
                          return "" !== e.getAttribute("alt") || b(e, "img")
                            ? "img"
                            : "presentation";
                        case "input":
                          var r = e.type;
                          switch (r) {
                            case "button":
                            case "image":
                            case "reset":
                            case "submit":
                              return "button";
                            case "checkbox":
                            case "radio":
                              return r;
                            case "range":
                              return "slider";
                            case "email":
                            case "tel":
                            case "text":
                            case "url":
                              return e.hasAttribute("list")
                                ? "combobox"
                                : "textbox";
                            case "search":
                              return e.hasAttribute("list")
                                ? "combobox"
                                : "searchbox";
                            case "number":
                              return "spinbutton";
                            default:
                              return null;
                          }
                        case "select":
                          return e.hasAttribute("multiple") || e.size > 1
                            ? "listbox"
                            : "combobox";
                      }
                      return null;
                    })(e);
                    if ("presentation" !== t || b(e, r || "")) return r;
                  }
                  return t;
                })(e)
              )
          );
        }
        function O(e) {
          return e.trim().replace(/\s\s+/g, " ");
        }
        function M(e, t) {
          if (!y(e)) return !1;
          if (
            e.hasAttribute("hidden") ||
            "true" === e.getAttribute("aria-hidden")
          )
            return !0;
          var r = t(e);
          return (
            "none" === r.getPropertyValue("display") ||
            "hidden" === r.getPropertyValue("visibility")
          );
        }
        function N(e) {
          return (
            T(e, ["button", "combobox", "listbox", "textbox"]) || I(e, "range")
          );
        }
        function I(e, t) {
          if (!y(e)) return !1;
          if ("range" === t)
            return T(e, [
              "meter",
              "progressbar",
              "scrollbar",
              "slider",
              "spinbutton",
            ]);
          throw new TypeError(
            "No knowledge about abstract role '".concat(
              t,
              "'. This is likely a bug :("
            )
          );
        }
        function L(e, t) {
          var r = s(e.querySelectorAll(t));
          return (
            R(e, "aria-owns").forEach(function (e) {
              r.push.apply(r, s(e.querySelectorAll(t)));
            }),
            r
          );
        }
        function A(e) {
          return y((t = e)) && "select" === m(t)
            ? e.selectedOptions || L(e, "[selected]")
            : L(e, '[aria-selected="true"]');
          var t;
        }
        function F(e) {
          return T(e, ["none", "presentation"]);
        }
        function j(e) {
          return g(e);
        }
        function D(e) {
          return T(e, [
            "button",
            "cell",
            "checkbox",
            "columnheader",
            "gridcell",
            "heading",
            "label",
            "legend",
            "link",
            "menuitem",
            "menuitemcheckbox",
            "menuitemradio",
            "option",
            "radio",
            "row",
            "rowheader",
            "switch",
            "tab",
            "tooltip",
            "treeitem",
          ]);
        }
        function U(e) {
          return w(e) || (y((t = e)) && "textarea" === m(t))
            ? e.value
            : e.textContent || "";
          var t;
        }
        function B(e) {
          var t = e.getPropertyValue("content");
          return /^["'].*["']$/.test(t) ? t.slice(1, -1) : "";
        }
        function z(e) {
          var t = m(e);
          return (
            "button" === t ||
            ("input" === t && "hidden" !== e.getAttribute("type")) ||
            "meter" === t ||
            "output" === t ||
            "progress" === t ||
            "select" === t ||
            "textarea" === t
          );
        }
        function H(e) {
          if (z(e)) return e;
          var t = null;
          return (
            e.childNodes.forEach(function (e) {
              if (null === t && y(e)) {
                var r = H(e);
                null !== r && (t = r);
              }
            }),
            t
          );
        }
        function V(e) {
          if (void 0 !== e.control) return e.control;
          var t = e.getAttribute("for");
          return null !== t ? e.ownerDocument.getElementById(t) : H(e);
        }
        function $(e) {
          var t = e.labels;
          return null === t
            ? t
            : void 0 !== t
            ? s(t)
            : z(e)
            ? s(e.ownerDocument.querySelectorAll("label")).filter(function (t) {
                return V(t) === e;
              })
            : null;
        }
        function W(e) {
          var t = e.assignedNodes();
          return 0 === t.length ? s(e.childNodes) : t;
        }
        function Y(e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            r = new f(),
            n = _(e),
            a = t.compute,
            o = void 0 === a ? "name" : a,
            i = t.computedStyleSupportsPseudoElements,
            l = void 0 === i ? void 0 !== t.getComputedStyle : i,
            u = t.getComputedStyle,
            c = void 0 === u ? n.getComputedStyle.bind(n) : u,
            d = t.hidden,
            p = void 0 !== d && d;
          function h(e, t) {
            var r = "";
            if (y(e) && l) {
              var n = B(c(e, "::before"));
              r = "".concat(n, " ").concat(r);
            }
            if (
              ((P(e)
                ? W(e)
                : s(e.childNodes).concat(R(e, "aria-owns"))
              ).forEach(function (e) {
                var n = b(e, {
                    isEmbeddedInLabel: t.isEmbeddedInLabel,
                    isReferenced: !1,
                    recursion: !0,
                  }),
                  a =
                    "inline" !==
                    (y(e) ? c(e).getPropertyValue("display") : "inline")
                      ? " "
                      : "";
                r += "".concat(a).concat(n).concat(a);
              }),
              y(e) && l)
            ) {
              var a = B(c(e, "::after"));
              r = "".concat(r, " ").concat(a);
            }
            return r.trim();
          }
          function v(e) {
            if (!y(e)) return null;
            function t(e, t) {
              var n = e.getAttributeNode(t);
              return null === n || r.has(n) || "" === n.value.trim()
                ? null
                : (r.add(n), n.value);
            }
            if (C(e)) {
              r.add(e);
              for (var n = s(e.childNodes), a = 0; a < n.length; a += 1) {
                var o = n[a];
                if (k(o))
                  return b(o, {
                    isEmbeddedInLabel: !1,
                    isReferenced: !1,
                    recursion: !1,
                  });
              }
            } else if (E(e)) {
              r.add(e);
              for (var i = s(e.childNodes), l = 0; l < i.length; l += 1) {
                var u = i[l];
                if (g(u))
                  return b(u, {
                    isEmbeddedInLabel: !1,
                    isReferenced: !1,
                    recursion: !1,
                  });
              }
            } else {
              if (S(e)) {
                r.add(e);
                for (var c = s(e.childNodes), d = 0; d < c.length; d += 1) {
                  var p = c[d];
                  if (q(p)) return p.textContent;
                }
                return null;
              }
              if ("img" === m(e) || "area" === m(e)) {
                var f = t(e, "alt");
                if (null !== f) return f;
              } else if (x(e)) {
                var v = t(e, "label");
                if (null !== v) return v;
              }
            }
            if (
              w(e) &&
              ("button" === e.type || "submit" === e.type || "reset" === e.type)
            ) {
              var _ = t(e, "value");
              if (null !== _) return _;
              if ("submit" === e.type) return "Submit";
              if ("reset" === e.type) return "Reset";
            }
            var P = $(e);
            if (null !== P && 0 !== P.length)
              return (
                r.add(e),
                s(P)
                  .map(function (e) {
                    return b(e, {
                      isEmbeddedInLabel: !0,
                      isReferenced: !1,
                      recursion: !0,
                    });
                  })
                  .filter(function (e) {
                    return e.length > 0;
                  })
                  .join(" ")
              );
            if (w(e) && "image" === e.type) {
              var R = t(e, "alt");
              if (null !== R) return R;
              var O = t(e, "title");
              return null !== O ? O : "Submit Query";
            }
            if (T(e, ["button"])) {
              var M = h(e, { isEmbeddedInLabel: !1, isReferenced: !1 });
              return "" !== M ? M : t(e, "title");
            }
            return t(e, "title");
          }
          function b(e, t) {
            if (r.has(e)) return "";
            if (!p && M(e, c) && !t.isReferenced) return r.add(e), "";
            var n = R(e, "aria-labelledby");
            if ("name" === o && !t.isReferenced && n.length > 0)
              return n
                .map(function (e) {
                  return b(e, {
                    isEmbeddedInLabel: t.isEmbeddedInLabel,
                    isReferenced: !0,
                    recursion: !1,
                  });
                })
                .join(" ");
            var a = t.recursion && N(e) && "name" === o;
            if (!a) {
              var i = ((y(e) && e.getAttribute("aria-label")) || "").trim();
              if ("" !== i && "name" === o) return r.add(e), i;
              if (!F(e)) {
                var l = v(e);
                if (null !== l) return r.add(e), l;
              }
            }
            if (T(e, ["menu"])) return r.add(e), "";
            if (a || t.isEmbeddedInLabel || t.isReferenced) {
              if (T(e, ["combobox", "listbox"])) {
                r.add(e);
                var u = A(e);
                return 0 === u.length
                  ? w(e)
                    ? e.value
                    : ""
                  : s(u)
                      .map(function (e) {
                        return b(e, {
                          isEmbeddedInLabel: t.isEmbeddedInLabel,
                          isReferenced: !1,
                          recursion: !0,
                        });
                      })
                      .join(" ");
              }
              if (I(e, "range"))
                return (
                  r.add(e),
                  e.hasAttribute("aria-valuetext")
                    ? e.getAttribute("aria-valuetext")
                    : e.hasAttribute("aria-valuenow")
                    ? e.getAttribute("aria-valuenow")
                    : e.getAttribute("value") || ""
                );
              if (T(e, ["textbox"])) return r.add(e), U(e);
            }
            return D(e) || (y(e) && t.isReferenced) || j(e)
              ? (r.add(e),
                h(e, {
                  isEmbeddedInLabel: t.isEmbeddedInLabel,
                  isReferenced: !1,
                }))
              : e.nodeType === e.TEXT_NODE
              ? (r.add(e), e.textContent || "")
              : t.recursion
              ? (r.add(e),
                h(e, {
                  isEmbeddedInLabel: t.isEmbeddedInLabel,
                  isReferenced: !1,
                }))
              : (r.add(e), "");
          }
          return O(
            b(e, {
              isEmbeddedInLabel: !1,
              isReferenced: "description" === o,
              recursion: !1,
            })
          );
        }
        function G(e) {
          return T(e, [
            "caption",
            "code",
            "deletion",
            "emphasis",
            "generic",
            "insertion",
            "paragraph",
            "presentation",
            "strong",
            "subscript",
            "superscript",
          ]);
        }
        function Q(e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return G(e) ? "" : Y(e, t);
        }
        var K = r(2461),
          X = r(5861),
          J = r(7757),
          Z = r.n(J);
        function ee(e, t) {
          if (null == e) return {};
          var r,
            n,
            a = {},
            o = Object.keys(e);
          for (n = 0; n < o.length; n++)
            (r = o[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
          return a;
        }
        var te = r(6961);
        e = r.hmd(e);
        var re = null,
          ne = null,
          ae = null;
        try {
          var oe = e && e.require;
          (ne = oe.call(e, "fs").readFileSync),
            (ae = oe.call(e, "@babel/code-frame").codeFrameColumns),
            (re = oe.call(e, "chalk"));
        } catch (e) {}
        function ie() {
          return ne && ae
            ? (function (e) {
                var t = e.indexOf("(") + 1,
                  r = e.indexOf(")"),
                  n = e.slice(t, r),
                  a = n.split(":"),
                  o = [a[0], parseInt(a[1], 10), parseInt(a[2], 10)],
                  i = o[0],
                  l = o[1],
                  u = o[2],
                  s = "";
                try {
                  s = ne(i, "utf-8");
                } catch (e) {
                  return "";
                }
                var c = ae(
                  s,
                  { start: { line: l, column: u } },
                  { highlightCode: !0, linesBelow: 0 }
                );
                return re.dim(n) + "\n" + c + "\n";
              })(
                new Error().stack
                  .split("\n")
                  .slice(1)
                  .find(function (e) {
                    return !e.includes("node_modules/");
                  })
              )
            : "";
        }
        var le = "undefined" == typeof window ? r.g : window;
        function ue() {
          return (
            "undefined" != typeof jest &&
            null !== jest &&
            "function" == typeof jest.useRealTimers
          );
        }
        function se(e) {
          var t = { clearInterval, clearTimeout, setInterval, setTimeout };
          "function" == typeof setImmediate && (t.setImmediate = setImmediate),
            "function" == typeof clearImmediate &&
              (t.clearImmediate = clearImmediate),
            jest.useRealTimers();
          var r,
            n = e(),
            a = Object.entries(t).some(function (e) {
              var t = e[0];
              return e[1] !== le[t];
            });
          return (
            a &&
              jest.useFakeTimers(
                null != (r = t.setTimeout) && r.clock ? "modern" : "legacy"
              ),
            { callbackReturnValue: n, usedFakeTimers: a }
          );
        }
        function ce() {
          return !!ue() && se(function () {}).usedFakeTimers;
        }
        function de(e) {
          return le.setTimeout(e, 0);
        }
        var pe,
          fe =
            ((pe = function () {
              return {
                clearTimeoutFn: le.clearTimeout,
                setImmediateFn: le.setImmediate || de,
                setTimeoutFn: le.setTimeout,
              };
            }),
            ue() ? se(pe).callbackReturnValue : pe()),
          me = fe.clearTimeoutFn,
          he = fe.setImmediateFn,
          ve = fe.setTimeoutFn;
        function be() {
          if ("undefined" == typeof window)
            throw new Error("Could not find default container");
          return window.document;
        }
        function ye(e) {
          if (e.defaultView) return e.defaultView;
          if (e.ownerDocument && e.ownerDocument.defaultView)
            return e.ownerDocument.defaultView;
          if (e.window) return e.window;
          throw e.then instanceof Function
            ? new Error(
                "It looks like you passed a Promise object instead of a DOM node. Did you do something like `fireEvent.click(screen.findBy...` when you meant to use a `getBy` query `fireEvent.click(screen.getBy...`, or await the findBy query `fireEvent.click(await screen.findBy...`?"
              )
            : Array.isArray(e)
            ? new Error(
                "It looks like you passed an Array instead of a DOM node. Did you do something like `fireEvent.click(screen.getAllBy...` when you meant to use a `getBy` query `fireEvent.click(screen.getBy...`?"
              )
            : "function" == typeof e.debug &&
              "function" == typeof e.logTestingPlaygroundURL
            ? new Error(
                "It looks like you passed a `screen` object. Did you do something like `fireEvent.click(screen, ...` when you meant to use a query, e.g. `fireEvent.click(screen.getBy..., `?"
              )
            : new Error(
                'Unable to find the "window" object for the given node. Please file an issue with the code that\'s causing you to see this error: https://github.com/testing-library/dom-testing-library/issues/new'
              );
        }
        function ge(e) {
          if (
            !e ||
            "function" != typeof e.querySelector ||
            "function" != typeof e.querySelectorAll
          )
            throw new TypeError(
              "Expected container to be an Element, a Document or a DocumentFragment but got " +
                (("object" == typeof (t = e)
                  ? null === t
                    ? "null"
                    : t.constructor.name
                  : typeof t) +
                  ".")
            );
          var t;
        }
        var we = o().plugins,
          xe = we.DOMElement,
          Ee = we.DOMCollection;
        function _e(e, t, a) {
          if (
            (e || (e = be().body),
            "number" != typeof t &&
              (t = (function (e) {
                return (function (e) {
                  var t =
                    (e.ownerDocument && e.ownerDocument.defaultView) || void 0;
                  return (
                    (void 0 !== r.g && r.g.Cypress) ||
                    (void 0 !== t && t.Cypress)
                  );
                })(e)
                  ? 0
                  : ("undefined" != typeof process &&
                      process.env.DEBUG_PRINT_LIMIT) ||
                      7e3;
              })(e)),
            0 === t)
          )
            return "";
          e.documentElement && (e = e.documentElement);
          var i = typeof e;
          if (
            ("object" === i ? (i = e.constructor.name) : (e = {}),
            !("outerHTML" in e))
          )
            throw new TypeError("Expected an element or document but got " + i);
          var l = o()(
            e,
            n(
              {
                plugins: [xe, Ee],
                printFunctionName: !1,
                highlight:
                  "undefined" != typeof process &&
                  void 0 !== process.versions &&
                  void 0 !== process.versions.node,
              },
              a
            )
          );
          return void 0 !== t && e.outerHTML.length > t
            ? l.slice(0, t) + "..."
            : l;
        }
        var Ce = function () {
            var e = ie();
            e
              ? console.log(_e.apply(void 0, arguments) + "\n\n" + e)
              : console.log(_e.apply(void 0, arguments));
          },
          ke = {
            testIdAttribute: "data-testid",
            asyncUtilTimeout: 1e3,
            asyncWrapper: function (e) {
              return e();
            },
            eventWrapper: function (e) {
              return e();
            },
            defaultHidden: !1,
            showOriginalStackTrace: !1,
            throwSuggestions: !1,
            getElementError: function (e, t) {
              var r = new Error([e, _e(t)].filter(Boolean).join("\n\n"));
              return (r.name = "TestingLibraryElementError"), r;
            },
            _disableExpensiveErrorDiagnostics: !1,
            computedStyleSupportsPseudoElements: !1,
          },
          Pe = "script, style";
        function Se(e) {
          try {
            return (ke._disableExpensiveErrorDiagnostics = !0), e();
          } finally {
            ke._disableExpensiveErrorDiagnostics = !1;
          }
        }
        function qe(e) {
          "function" == typeof e && (e = e(ke)), (ke = n({}, ke, e));
        }
        function Re() {
          return ke;
        }
        var Te = [
          "button",
          "meter",
          "output",
          "progress",
          "select",
          "textarea",
          "input",
        ];
        function Oe(e) {
          return Te.includes(e.nodeName.toLowerCase())
            ? ""
            : 3 === e.nodeType
            ? e.textContent
            : Array.from(e.childNodes)
                .map(function (e) {
                  return Oe(e);
                })
                .join("");
        }
        function Me(e) {
          return "label" === e.tagName.toLowerCase()
            ? Oe(e)
            : e.value || e.textContent;
        }
        function Ne(e) {
          var t;
          if (void 0 !== e.labels) return null != (t = e.labels) ? t : [];
          if (
            !(function (e) {
              return (
                /BUTTON|METER|OUTPUT|PROGRESS|SELECT|TEXTAREA/.test(
                  e.tagName
                ) ||
                ("INPUT" === e.tagName && "hidden" !== e.getAttribute("type"))
              );
            })(e)
          )
            return [];
          var r = e.ownerDocument.querySelectorAll("label");
          return Array.from(r).filter(function (t) {
            return t.control === e;
          });
        }
        function Ie(e, t, r) {
          var n = (void 0 === r ? {} : r).selector,
            a = void 0 === n ? "*" : n,
            o = t.getAttribute("aria-labelledby"),
            i = o ? o.split(" ") : [];
          return i.length
            ? i.map(function (t) {
                var r = e.querySelector('[id="' + t + '"]');
                return r
                  ? { content: Me(r), formControl: null }
                  : { content: "", formControl: null };
              })
            : Array.from(Ne(t)).map(function (e) {
                return {
                  content: Me(e),
                  formControl: Array.from(
                    e.querySelectorAll(
                      "button, input, meter, output, progress, select, textarea"
                    )
                  ).filter(function (e) {
                    return e.matches(a);
                  })[0],
                };
              });
        }
        function Le(e) {
          if (null == e)
            throw new Error(
              "It looks like " +
                e +
                " was passed instead of a matcher. Did you do something like getByText(" +
                e +
                ")?"
            );
        }
        function Ae(e, t, r, n) {
          if ("string" != typeof e) return !1;
          Le(r);
          var a = n(e);
          return "string" == typeof r || "number" == typeof r
            ? a.toLowerCase().includes(r.toString().toLowerCase())
            : "function" == typeof r
            ? r(a, t)
            : r.test(a);
        }
        function Fe(e, t, r, n) {
          if ("string" != typeof e) return !1;
          Le(r);
          var a = n(e);
          return r instanceof Function
            ? r(a, t)
            : r instanceof RegExp
            ? r.test(a)
            : a === String(r);
        }
        function je(e) {
          var t = void 0 === e ? {} : e,
            r = t.trim,
            n = void 0 === r || r,
            a = t.collapseWhitespace,
            o = void 0 === a || a;
          return function (e) {
            var t = e;
            return (t = n ? t.trim() : t), o ? t.replace(/\s+/g, " ") : t;
          };
        }
        function De(e) {
          var t = e.trim,
            r = e.collapseWhitespace,
            n = e.normalizer;
          if (n) {
            if (void 0 !== t || void 0 !== r)
              throw new Error(
                'trim and collapseWhitespace are not supported with a normalizer. If you want to use the default trim and collapseWhitespace logic in your normalizer, use "getDefaultNormalizer({trim, collapseWhitespace})" and compose that into your normalizer'
              );
            return n;
          }
          return je({ trim: t, collapseWhitespace: r });
        }
        function Ue(e) {
          return e.matches("input[type=submit], input[type=button]")
            ? e.value
            : Array.from(e.childNodes)
                .filter(function (e) {
                  return 3 === e.nodeType && Boolean(e.textContent);
                })
                .map(function (e) {
                  return e.textContent;
                })
                .join("");
        }
        function Be(e, t) {
          var r =
            ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
            e["@@iterator"];
          if (r) return (r = r.call(e)).next.bind(r);
          if (
            Array.isArray(e) ||
            (r = (function (e, t) {
              if (e) {
                if ("string" == typeof e) return ze(e, t);
                var r = Object.prototype.toString.call(e).slice(8, -1);
                return (
                  "Object" === r && e.constructor && (r = e.constructor.name),
                  "Map" === r || "Set" === r
                    ? Array.from(e)
                    : "Arguments" === r ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                    ? ze(e, t)
                    : void 0
                );
              }
            })(e)) ||
            (t && e && "number" == typeof e.length)
          ) {
            r && (e = r);
            var n = 0;
            return function () {
              return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        function ze(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
          return n;
        }
        var He = (function (e) {
          function t(e) {
            return function (t) {
              var r,
                a = e.attributes,
                o = void 0 === a ? [] : a,
                i = o.findIndex(function (e) {
                  return e.value && "type" === e.name && "text" === e.value;
                });
              return (
                !(
                  i >= 0 &&
                  ((o = [].concat(o.slice(0, i), o.slice(i + 1))),
                  "text" !== t.type)
                ) &&
                t.matches(
                  "" +
                    (r = n({}, e, { attributes: o })).name +
                    r.attributes
                      .map(function (e) {
                        var t = e.name,
                          r = e.value,
                          n = e.constraints;
                        return -1 !==
                          (void 0 === n ? [] : n).indexOf("undefined")
                          ? ":not([" + t + "])"
                          : r
                          ? "[" + t + '="' + r + '"]'
                          : "[" + t + "]";
                      })
                      .join("")
                )
              );
            };
          }
          for (var r, a = [], o = Be(e.entries()); !(r = o()).done; ) {
            var i = r.value,
              l = i[0],
              u = i[1];
            a = [].concat(a, [
              {
                match: t(l),
                roles: Array.from(u),
                specificity:
                  ((s = l),
                  void 0,
                  (c = s.attributes),
                  (void 0 === c ? [] : c).length),
              },
            ]);
          }
          var s, c;
          return a.sort(function (e, t) {
            var r = e.specificity;
            return t.specificity - r;
          });
        })(K.elementRoles);
        function Ve(e) {
          return (
            !0 === e.hidden ||
            "true" === e.getAttribute("aria-hidden") ||
            "none" === e.ownerDocument.defaultView.getComputedStyle(e).display
          );
        }
        function $e(e, t) {
          void 0 === t && (t = {});
          var r = t.isSubtreeInaccessible,
            n = void 0 === r ? Ve : r;
          if (
            "hidden" ===
            e.ownerDocument.defaultView.getComputedStyle(e).visibility
          )
            return !0;
          for (var a = e; a; ) {
            if (n(a)) return !0;
            a = a.parentElement;
          }
          return !1;
        }
        function We(e) {
          for (var t, r = Be(He); !(t = r()).done; ) {
            var n = t.value,
              a = n.match,
              o = n.roles;
            if (a(e)) return [].concat(o);
          }
          return [];
        }
        function Ye(e, t) {
          var r = e.getAttribute(t);
          return "true" === r || ("false" !== r && void 0);
        }
        var Ge = je();
        function Qe(e) {
          return new RegExp(
            (function (e) {
              return e.replace(/[.*+\-?^${}()|[\]\\]/g, "\\$&");
            })(e.toLowerCase()),
            "i"
          );
        }
        function Ke(e, t, r, n) {
          var a = n.variant,
            o = n.name,
            i = "",
            l = {},
            u = [["Role", "TestId"].includes(e) ? r : Qe(r)];
          o && (l.name = Qe(o)),
            "Role" === e &&
              $e(t) &&
              ((l.hidden = !0),
              (i =
                "Element is inaccessible. This means that the element and all its children are invisible to screen readers.\n    If you are using the aria-hidden prop, make sure this is the right choice for your case.\n    ")),
            Object.keys(l).length > 0 && u.push(l);
          var s = a + "By" + e;
          return {
            queryName: e,
            queryMethod: s,
            queryArgs: u,
            variant: a,
            warning: i,
            toString: function () {
              i && console.warn(i);
              var e = u[0],
                t = u[1];
              return (
                (e = "string" == typeof e ? "'" + e + "'" : e),
                (t = t
                  ? ", { " +
                    Object.entries(t)
                      .map(function (e) {
                        return e[0] + ": " + e[1];
                      })
                      .join(", ") +
                    " }"
                  : ""),
                s + "(" + e + t + ")"
              );
            },
          };
        }
        function Xe(e, t, r) {
          return r && (!t || t.toLowerCase() === e.toLowerCase());
        }
        function Je(e, t, r) {
          var n, a;
          if ((void 0 === t && (t = "get"), !e.matches(Pe))) {
            var o =
              null != (n = e.getAttribute("role"))
                ? n
                : null == (a = We(e))
                ? void 0
                : a[0];
            if ("generic" !== o && Xe("Role", r, o))
              return Ke("Role", e, o, {
                variant: t,
                name: Q(e, {
                  computedStyleSupportsPseudoElements:
                    Re().computedStyleSupportsPseudoElements,
                }),
              });
            var i = Ie(document, e)
              .map(function (e) {
                return e.content;
              })
              .join(" ");
            if (Xe("LabelText", r, i))
              return Ke("LabelText", e, i, { variant: t });
            var l = e.getAttribute("placeholder");
            if (Xe("PlaceholderText", r, l))
              return Ke("PlaceholderText", e, l, { variant: t });
            var u = Ge(Ue(e));
            if (Xe("Text", r, u)) return Ke("Text", e, u, { variant: t });
            if (Xe("DisplayValue", r, e.value))
              return Ke("DisplayValue", e, Ge(e.value), { variant: t });
            var s = e.getAttribute("alt");
            if (Xe("AltText", r, s)) return Ke("AltText", e, s, { variant: t });
            var c = e.getAttribute("title");
            if (Xe("Title", r, c)) return Ke("Title", e, c, { variant: t });
            var d = e.getAttribute(Re().testIdAttribute);
            return Xe("TestId", r, d)
              ? Ke("TestId", e, d, { variant: t })
              : void 0;
          }
        }
        function Ze(e, t) {
          e.stack = t.stack.replace(t.message, e.message);
        }
        function et(e, t) {
          return Re().getElementError(e, t);
        }
        function tt(e, t) {
          return et(
            e +
              "\n\n(If this is intentional, then use the `*AllBy*` variant of the query (like `queryAllByText`, `getAllByText`, or `findAllByText`)).",
            t
          );
        }
        function rt(e, t, r, n) {
          var a = void 0 === n ? {} : n,
            o = a.exact,
            i = void 0 === o || o,
            l = a.collapseWhitespace,
            u = a.trim,
            s = a.normalizer,
            c = i ? Fe : Ae,
            d = De({ collapseWhitespace: l, trim: u, normalizer: s });
          return Array.from(t.querySelectorAll("[" + e + "]")).filter(function (
            t
          ) {
            return c(t.getAttribute(e), t, r, d);
          });
        }
        function nt(e, t) {
          return function (r) {
            for (
              var n = arguments.length, a = new Array(n > 1 ? n - 1 : 0), o = 1;
              o < n;
              o++
            )
              a[o - 1] = arguments[o];
            var i = e.apply(void 0, [r].concat(a));
            if (i.length > 1) {
              var l = i
                .map(function (e) {
                  return et(null, e).message;
                })
                .join("\n\n");
              throw tt(
                t.apply(void 0, [r].concat(a)) +
                  "\n\nHere are the matching elements:\n\n" +
                  l,
                r
              );
            }
            return i[0] || null;
          };
        }
        function at(e, t) {
          return Re().getElementError(
            "A better query is available, try this:\n" + e.toString() + "\n",
            t
          );
        }
        function ot(e) {
          return function (t, r, a, o) {
            return (function (e, t) {
              var r = new Error("STACK_TRACE_MESSAGE");
              return Re().asyncWrapper(function () {
                return (function (e, t) {
                  var r = t.container,
                    n = void 0 === r ? be() : r,
                    a = t.timeout,
                    o = void 0 === a ? Re().asyncUtilTimeout : a,
                    i = t.showOriginalStackTrace,
                    l = void 0 === i ? Re().showOriginalStackTrace : i,
                    u = t.stackTraceError,
                    s = t.interval,
                    c = void 0 === s ? 50 : s,
                    d = t.onTimeout,
                    p =
                      void 0 === d
                        ? function (e) {
                            return (
                              (e.message = Re().getElementError(
                                e.message,
                                n
                              ).message),
                              e
                            );
                          }
                        : d,
                    f = t.mutationObserverOptions,
                    m =
                      void 0 === f
                        ? {
                            subtree: !0,
                            childList: !0,
                            attributes: !0,
                            characterData: !0,
                          }
                        : f;
                  if ("function" != typeof e)
                    throw new TypeError(
                      "Received `callback` arg must be a function"
                    );
                  return new Promise(
                    (function () {
                      var t = (0, X.Z)(
                        Z().mark(function t(r, a) {
                          var i, s, d, f, h, v, b, y, g, w, x, E, _, C;
                          return Z().wrap(
                            function (t) {
                              for (;;)
                                switch ((t.prev = t.next)) {
                                  case 0:
                                    if (
                                      ((C = function () {
                                        var e;
                                        i
                                          ? ((e = i),
                                            l ||
                                              "TestingLibraryElementError" !==
                                                e.name ||
                                              Ze(e, u))
                                          : ((e = new Error(
                                              "Timed out in waitFor."
                                            )),
                                            l || Ze(e, u)),
                                          x(p(e), null);
                                      }),
                                      (_ = function () {
                                        if ("pending" !== h)
                                          try {
                                            var t = Se(e);
                                            "function" ==
                                            typeof (null == t ? void 0 : t.then)
                                              ? ((h = "pending"),
                                                t.then(
                                                  function (e) {
                                                    (h = "resolved"),
                                                      x(null, e);
                                                  },
                                                  function (e) {
                                                    (h = "rejected"), (i = e);
                                                  }
                                                ))
                                              : x(null, t);
                                          } catch (e) {
                                            i = e;
                                          }
                                      }),
                                      (E = function () {
                                        if (ce()) {
                                          var e = new Error(
                                            "Changed from using real timers to fake timers while using waitFor. This is not allowed and will result in very strange behavior. Please ensure you're awaiting all async things your test is doing before changing to fake timers. For more info, please go to https://github.com/testing-library/dom-testing-library/issues/830"
                                          );
                                          return l || Ze(e, u), a(e);
                                        }
                                        return _();
                                      }),
                                      (x = function (e, t) {
                                        (f = !0),
                                          me(v),
                                          b ||
                                            (clearInterval(s), d.disconnect()),
                                          e ? a(e) : r(t);
                                      }),
                                      (f = !1),
                                      (h = "idle"),
                                      (v = ve(C, o)),
                                      !(b = ce()))
                                    ) {
                                      t.next = 24;
                                      break;
                                    }
                                    _();
                                  case 10:
                                    if (f) {
                                      t.next = 22;
                                      break;
                                    }
                                    if (ce()) {
                                      t.next = 16;
                                      break;
                                    }
                                    return (
                                      (y = new Error(
                                        "Changed from using fake timers to real timers while using waitFor. This is not allowed and will result in very strange behavior. Please ensure you're awaiting all async things your test is doing before changing to real timers. For more info, please go to https://github.com/testing-library/dom-testing-library/issues/830"
                                      )),
                                      l || Ze(y, u),
                                      a(y),
                                      t.abrupt("return")
                                    );
                                  case 16:
                                    return (
                                      jest.advanceTimersByTime(c),
                                      _(),
                                      (t.next = 20),
                                      new Promise(function (e) {
                                        return he(e);
                                      })
                                    );
                                  case 20:
                                    t.next = 10;
                                    break;
                                  case 22:
                                    t.next = 37;
                                    break;
                                  case 24:
                                    (t.prev = 24), ge(n), (t.next = 32);
                                    break;
                                  case 28:
                                    return (
                                      (t.prev = 28),
                                      (t.t0 = t.catch(24)),
                                      a(t.t0),
                                      t.abrupt("return")
                                    );
                                  case 32:
                                    (s = setInterval(E, c)),
                                      (g = ye(n)),
                                      (w = g.MutationObserver),
                                      (d = new w(E)).observe(n, m),
                                      _();
                                  case 37:
                                  case "end":
                                    return t.stop();
                                }
                            },
                            t,
                            null,
                            [[24, 28]]
                          );
                        })
                      );
                      return function (e, r) {
                        return t.apply(this, arguments);
                      };
                    })()
                  );
                })(e, n({ stackTraceError: r }, t));
              });
            })(function () {
              return e(t, r, a);
            }, n({ container: t }, o));
          };
        }
        var it = function (e, t, r) {
            return function (n) {
              for (
                var a = arguments.length,
                  o = new Array(a > 1 ? a - 1 : 0),
                  i = 1;
                i < a;
                i++
              )
                o[i - 1] = arguments[i];
              var l = e.apply(void 0, [n].concat(o)),
                u = o.slice(-1),
                s = u[0],
                c = (s = void 0 === s ? {} : s).suggest,
                d = void 0 === c ? Re().throwSuggestions : c;
              if (l && d) {
                var p = Je(l, r);
                if (p && !t.endsWith(p.queryName)) throw at(p.toString(), n);
              }
              return l;
            };
          },
          lt = function (e, t, r) {
            return function (n) {
              for (
                var a = arguments.length,
                  o = new Array(a > 1 ? a - 1 : 0),
                  i = 1;
                i < a;
                i++
              )
                o[i - 1] = arguments[i];
              var l = e.apply(void 0, [n].concat(o)),
                u = o.slice(-1),
                s = u[0],
                c = (s = void 0 === s ? {} : s).suggest,
                d = void 0 === c ? Re().throwSuggestions : c;
              if (l.length && d) {
                var p = [].concat(
                  new Set(
                    l.map(function (e) {
                      var t;
                      return null == (t = Je(e, r)) ? void 0 : t.toString();
                    })
                  )
                );
                if (1 === p.length && !t.endsWith(Je(l[0], r).queryName))
                  throw at(p[0], n);
              }
              return l;
            };
          };
        function ut(e, t, r) {
          var n = it(nt(e, t), e.name, "query"),
            a = (function (e, t) {
              return function (r) {
                for (
                  var n = arguments.length,
                    a = new Array(n > 1 ? n - 1 : 0),
                    o = 1;
                  o < n;
                  o++
                )
                  a[o - 1] = arguments[o];
                var i = e.apply(void 0, [r].concat(a));
                if (!i.length)
                  throw Re().getElementError(t.apply(void 0, [r].concat(a)), r);
                return i;
              };
            })(e, r),
            o = nt(a, t),
            i = it(o, e.name, "get");
          return [
            n,
            lt(a, e.name.replace("query", "get"), "getAll"),
            i,
            ot(lt(a, e.name, "findAll")),
            ot(it(o, e.name, "find")),
          ];
        }
        var st = function (e, t, r) {
            var n = void 0 === r ? {} : r,
              a = n.exact,
              o = void 0 === a || a,
              i = n.trim,
              l = n.collapseWhitespace,
              u = n.normalizer,
              s = o ? Fe : Ae,
              c = De({ collapseWhitespace: l, trim: i, normalizer: u }),
              d = (function (e) {
                return Array.from(e.querySelectorAll("label,input"))
                  .map(function (e) {
                    return { node: e, textToMatch: Me(e) };
                  })
                  .filter(function (e) {
                    return null !== e.textToMatch;
                  });
              })(e);
            return d
              .filter(function (e) {
                var r = e.node,
                  n = e.textToMatch;
                return s(n, r, t, c);
              })
              .map(function (e) {
                return e.node;
              });
          },
          ct = function (e, t, r) {
            var n = void 0 === r ? {} : r,
              a = n.selector,
              o = void 0 === a ? "*" : a,
              i = n.exact,
              l = void 0 === i || i,
              u = n.collapseWhitespace,
              s = n.trim,
              c = n.normalizer;
            ge(e);
            var d = l ? Fe : Ae,
              p = De({ collapseWhitespace: u, trim: s, normalizer: c }),
              f = Array.from(e.querySelectorAll("*"))
                .filter(function (e) {
                  return Ne(e).length || e.hasAttribute("aria-labelledby");
                })
                .reduce(function (r, n) {
                  var a = Ie(e, n, { selector: o });
                  a.filter(function (e) {
                    return Boolean(e.formControl);
                  }).forEach(function (e) {
                    d(e.content, e.formControl, t, p) &&
                      e.formControl &&
                      r.push(e.formControl);
                  });
                  var i = a
                    .filter(function (e) {
                      return Boolean(e.content);
                    })
                    .map(function (e) {
                      return e.content;
                    });
                  return (
                    d(i.join(" "), n, t, p) && r.push(n),
                    i.length > 1 &&
                      i.forEach(function (e, a) {
                        d(e, n, t, p) && r.push(n);
                        var o = [].concat(i);
                        o.splice(a, 1),
                          o.length > 1 && d(o.join(" "), n, t, p) && r.push(n);
                      }),
                    r
                  );
                }, [])
                .concat(rt("aria-label", e, t, { exact: l, normalizer: p }));
            return Array.from(new Set(f)).filter(function (e) {
              return e.matches(o);
            });
          },
          dt = function (e, t) {
            for (
              var r = arguments.length, n = new Array(r > 2 ? r - 2 : 0), a = 2;
              a < r;
              a++
            )
              n[a - 2] = arguments[a];
            var o = ct.apply(void 0, [e, t].concat(n));
            if (!o.length) {
              var i = st.apply(void 0, [e, t].concat(n));
              if (i.length) {
                var l = i
                  .map(function (t) {
                    return pt(e, t);
                  })
                  .filter(function (e) {
                    return !!e;
                  });
                throw l.length
                  ? Re().getElementError(
                      l
                        .map(function (e) {
                          return (
                            "Found a label with the text of: " +
                            t +
                            ", however the element associated with this label (<" +
                            e +
                            " />) is non-labellable [https://html.spec.whatwg.org/multipage/forms.html#category-label]. If you really need to label a <" +
                            e +
                            " />, you can use aria-label or aria-labelledby instead."
                          );
                        })
                        .join("\n\n"),
                      e
                    )
                  : Re().getElementError(
                      "Found a label with the text of: " +
                        t +
                        ', however no form control was found associated to that label. Make sure you\'re using the "for" attribute or "aria-labelledby" attribute correctly.',
                      e
                    );
              }
              throw Re().getElementError(
                "Unable to find a label with the text of: " + t,
                e
              );
            }
            return o;
          };
        function pt(e, t) {
          var r = t.getAttribute("for");
          if (!r) return null;
          var n = e.querySelector('[id="' + r + '"]');
          return n ? n.tagName.toLowerCase() : null;
        }
        var ft = function (e, t) {
            return "Found multiple elements with the text of: " + t;
          },
          mt = it(nt(ct, ft), ct.name, "query"),
          ht = nt(dt, ft),
          vt = ot(lt(dt, dt.name, "findAll")),
          bt = ot(it(ht, dt.name, "find")),
          yt = lt(dt, dt.name, "getAll"),
          gt = it(ht, dt.name, "get"),
          wt = lt(ct, ct.name, "queryAll"),
          xt = function () {
            for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
              t[r] = arguments[r];
            return ge(t[0]), rt.apply(void 0, ["placeholder"].concat(t));
          },
          Et = lt(xt, xt.name, "queryAll"),
          _t = ut(
            xt,
            function (e, t) {
              return (
                "Found multiple elements with the placeholder text of: " + t
              );
            },
            function (e, t) {
              return (
                "Unable to find an element with the placeholder text of: " + t
              );
            }
          ),
          Ct = _t[0],
          kt = _t[1],
          Pt = _t[2],
          St = _t[3],
          qt = _t[4],
          Rt = function (e, t, r) {
            var n = void 0 === r ? {} : r,
              a = n.selector,
              o = void 0 === a ? "*" : a,
              i = n.exact,
              l = void 0 === i || i,
              u = n.collapseWhitespace,
              s = n.trim,
              c = n.ignore,
              d = void 0 === c ? Pe : c,
              p = n.normalizer;
            ge(e);
            var f = l ? Fe : Ae,
              m = De({ collapseWhitespace: u, trim: s, normalizer: p }),
              h = [];
            return (
              "function" == typeof e.matches && e.matches(o) && (h = [e]),
              []
                .concat(h, Array.from(e.querySelectorAll(o)))
                .filter(function (e) {
                  return !d || !e.matches(d);
                })
                .filter(function (e) {
                  return f(Ue(e), e, t, m);
                })
            );
          },
          Tt = lt(Rt, Rt.name, "queryAll"),
          Ot = ut(
            Rt,
            function (e, t) {
              return "Found multiple elements with the text: " + t;
            },
            function (e, t) {
              return (
                "Unable to find an element with the text: " +
                t +
                ". This could be because the text is broken up by multiple elements. In this case, you can provide a function for your text matcher to make your matcher more flexible."
              );
            }
          ),
          Mt = Ot[0],
          Nt = Ot[1],
          It = Ot[2],
          Lt = Ot[3],
          At = Ot[4],
          Ft = function (e, t, r) {
            var n = void 0 === r ? {} : r,
              a = n.exact,
              o = void 0 === a || a,
              i = n.collapseWhitespace,
              l = n.trim,
              u = n.normalizer;
            ge(e);
            var s = o ? Fe : Ae,
              c = De({ collapseWhitespace: i, trim: l, normalizer: u });
            return Array.from(
              e.querySelectorAll("input,textarea,select")
            ).filter(function (e) {
              return "SELECT" === e.tagName
                ? Array.from(e.options)
                    .filter(function (e) {
                      return e.selected;
                    })
                    .some(function (e) {
                      return s(Ue(e), e, t, c);
                    })
                : s(e.value, e, t, c);
            });
          },
          jt = lt(Ft, Ft.name, "queryAll"),
          Dt = ut(
            Ft,
            function (e, t) {
              return (
                "Found multiple elements with the display value: " + t + "."
              );
            },
            function (e, t) {
              return (
                "Unable to find an element with the display value: " + t + "."
              );
            }
          ),
          Ut = Dt[0],
          Bt = Dt[1],
          zt = Dt[2],
          Ht = Dt[3],
          Vt = Dt[4],
          $t = function (e, t, r) {
            var n = void 0 === r ? {} : r,
              a = n.exact,
              o = void 0 === a || a,
              i = n.collapseWhitespace,
              l = n.trim,
              u = n.normalizer;
            ge(e);
            var s = o ? Fe : Ae,
              c = De({ collapseWhitespace: i, trim: l, normalizer: u });
            return Array.from(e.querySelectorAll("img,input,area")).filter(
              function (e) {
                return s(e.getAttribute("alt"), e, t, c);
              }
            );
          },
          Wt = lt($t, $t.name, "queryAll"),
          Yt = ut(
            $t,
            function (e, t) {
              return "Found multiple elements with the alt text: " + t;
            },
            function (e, t) {
              return "Unable to find an element with the alt text: " + t;
            }
          ),
          Gt = Yt[0],
          Qt = Yt[1],
          Kt = Yt[2],
          Xt = Yt[3],
          Jt = Yt[4],
          Zt = function (e, t, r) {
            var n = void 0 === r ? {} : r,
              a = n.exact,
              o = void 0 === a || a,
              i = n.collapseWhitespace,
              l = n.trim,
              u = n.normalizer;
            ge(e);
            var s = o ? Fe : Ae,
              c = De({ collapseWhitespace: i, trim: l, normalizer: u });
            return Array.from(
              e.querySelectorAll("[title], svg > title")
            ).filter(function (e) {
              return (
                s(e.getAttribute("title"), e, t, c) ||
                ((function (e) {
                  var t;
                  return (
                    "title" === e.tagName.toLowerCase() &&
                    "svg" ===
                      (null == (t = e.parentElement)
                        ? void 0
                        : t.tagName.toLowerCase())
                  );
                })(e) &&
                  s(Ue(e), e, t, c))
              );
            });
          },
          er = lt(Zt, Zt.name, "queryAll"),
          tr = ut(
            Zt,
            function (e, t) {
              return "Found multiple elements with the title: " + t + ".";
            },
            function (e, t) {
              return "Unable to find an element with the title: " + t + ".";
            }
          ),
          rr = tr[0],
          nr = tr[1],
          ar = tr[2],
          or = tr[3],
          ir = tr[4];
        function lr(e, t, r) {
          var n = void 0 === r ? {} : r,
            a = n.exact,
            o = void 0 === a || a,
            i = n.collapseWhitespace,
            l = n.hidden,
            u = void 0 === l ? Re().defaultHidden : l,
            s = n.name,
            c = n.trim,
            d = n.normalizer,
            p = n.queryFallbacks,
            f = void 0 !== p && p,
            m = n.selected,
            h = n.checked,
            v = n.pressed,
            b = n.level,
            y = n.expanded;
          ge(e);
          var g,
            w,
            x,
            E,
            _ = o ? Fe : Ae,
            C = De({ collapseWhitespace: i, trim: c, normalizer: d });
          if (
            void 0 !== m &&
            void 0 ===
              (null == (g = K.roles.get(t)) ? void 0 : g.props["aria-selected"])
          )
            throw new Error(
              '"aria-selected" is not supported on role "' + t + '".'
            );
          if (
            void 0 !== h &&
            void 0 ===
              (null == (w = K.roles.get(t)) ? void 0 : w.props["aria-checked"])
          )
            throw new Error(
              '"aria-checked" is not supported on role "' + t + '".'
            );
          if (
            void 0 !== v &&
            void 0 ===
              (null == (x = K.roles.get(t)) ? void 0 : x.props["aria-pressed"])
          )
            throw new Error(
              '"aria-pressed" is not supported on role "' + t + '".'
            );
          if (void 0 !== b && "heading" !== t)
            throw new Error('Role "' + t + '" cannot have "level" property.');
          if (
            void 0 !== y &&
            void 0 ===
              (null == (E = K.roles.get(t)) ? void 0 : E.props["aria-expanded"])
          )
            throw new Error(
              '"aria-expanded" is not supported on role "' + t + '".'
            );
          var k = new WeakMap();
          function P(e) {
            return k.has(e) || k.set(e, Ve(e)), k.get(e);
          }
          return Array.from(e.querySelectorAll("*"))
            .filter(function (e) {
              if (e.hasAttribute("role")) {
                var r = e.getAttribute("role");
                if (f)
                  return r
                    .split(" ")
                    .filter(Boolean)
                    .some(function (r) {
                      return _(r, e, t, C);
                    });
                if (d) return _(r, e, t, C);
                var n = r.split(" ")[0];
                return _(n, e, t, C);
              }
              return We(e).some(function (r) {
                return _(r, e, t, C);
              });
            })
            .filter(function (e) {
              return void 0 !== m
                ? m ===
                    (function (e) {
                      return "OPTION" === e.tagName
                        ? e.selected
                        : Ye(e, "aria-selected");
                    })(e)
                : void 0 !== h
                ? h ===
                  (function (e) {
                    if (!("indeterminate" in e) || !e.indeterminate)
                      return "checked" in e ? e.checked : Ye(e, "aria-checked");
                  })(e)
                : void 0 !== v
                ? v ===
                  (function (e) {
                    return Ye(e, "aria-pressed");
                  })(e)
                : void 0 !== y
                ? y ===
                  (function (e) {
                    return Ye(e, "aria-expanded");
                  })(e)
                : void 0 === b ||
                  b ===
                    (function (e) {
                      return (
                        (e.getAttribute("aria-level") &&
                          Number(e.getAttribute("aria-level"))) ||
                        { H1: 1, H2: 2, H3: 3, H4: 4, H5: 5, H6: 6 }[e.tagName]
                      );
                    })(e);
            })
            .filter(function (e) {
              return !1 !== u || !1 === $e(e, { isSubtreeInaccessible: P });
            })
            .filter(function (e) {
              return (
                void 0 === s ||
                Fe(
                  Q(e, {
                    computedStyleSupportsPseudoElements:
                      Re().computedStyleSupportsPseudoElements,
                  }),
                  e,
                  s,
                  function (e) {
                    return e;
                  }
                )
              );
            });
        }
        var ur = lt(lr, lr.name, "queryAll"),
          sr = ut(
            lr,
            function (e, t, r) {
              var n = (void 0 === r ? {} : r).name;
              return (
                'Found multiple elements with the role "' +
                t +
                '"' +
                (void 0 === n
                  ? ""
                  : "string" == typeof n
                  ? ' and name "' + n + '"'
                  : " and name `" + n + "`")
              );
            },
            function (e, t, r) {
              var a = void 0 === r ? {} : r,
                o = a.hidden,
                i = void 0 === o ? Re().defaultHidden : o,
                l = a.name;
              if (Re()._disableExpensiveErrorDiagnostics)
                return 'Unable to find role="' + t + '"';
              var u,
                s = "";
              return (
                Array.from(e.children).forEach(function (e) {
                  s += (function (e, t) {
                    var r,
                      a,
                      o,
                      i,
                      l =
                        ((r = e),
                        (a = { hidden: t.hidden }),
                        (i =
                          void 0 !== (o = (void 0 === a ? {} : a).hidden) && o),
                        (function e(t) {
                          return [t].concat(
                            Array.from(t.children).reduce(function (t, r) {
                              return [].concat(t, e(r));
                            }, [])
                          );
                        })(r)
                          .filter(function (e) {
                            return !1 !== i || !1 === $e(e);
                          })
                          .reduce(function (e, t) {
                            return (
                              t.hasAttribute("role")
                                ? t.getAttribute("role").split(" ").slice(0, 1)
                                : We(t)
                            ).reduce(function (e, r) {
                              var a, o;
                              return Array.isArray(e[r])
                                ? n(
                                    {},
                                    e,
                                    (((a = {})[r] = [].concat(e[r], [t])), a)
                                  )
                                : n({}, e, (((o = {})[r] = [t]), o));
                            }, e);
                          }, {}));
                    return Object.entries(l)
                      .filter(function (e) {
                        return "generic" !== e[0];
                      })
                      .map(function (e) {
                        var t = e[0],
                          r = e[1],
                          n = "-".repeat(50);
                        return (
                          t +
                          ":\n\n" +
                          r
                            .map(function (e) {
                              return (
                                'Name "' +
                                Q(e, {
                                  computedStyleSupportsPseudoElements:
                                    Re().computedStyleSupportsPseudoElements,
                                }) +
                                '":\n' +
                                _e(e.cloneNode(!1))
                              );
                            })
                            .join("\n\n") +
                          "\n\n" +
                          n
                        );
                      })
                      .join("\n");
                  })(e, { hidden: i, includeName: void 0 !== l });
                }),
                (u =
                  0 === s.length
                    ? !1 === i
                      ? "There are no accessible roles. But there might be some inaccessible roles. If you wish to access them, then set the `hidden` option to `true`. Learn more about this here: https://testing-library.com/docs/dom-testing-library/api-queries#byrole"
                      : "There are no available roles."
                    : (
                        "\nHere are the " +
                        (!1 === i ? "accessible" : "available") +
                        " roles:\n\n  " +
                        s.replace(/\n/g, "\n  ").replace(/\n\s\s\n/g, "\n\n") +
                        "\n"
                      ).trim()),
                (
                  "\nUnable to find an " +
                  (!1 === i ? "accessible " : "") +
                  'element with the role "' +
                  t +
                  '"' +
                  (void 0 === l
                    ? ""
                    : "string" == typeof l
                    ? ' and name "' + l + '"'
                    : " and name `" + l + "`") +
                  "\n\n" +
                  u
                ).trim()
              );
            }
          ),
          cr = sr[0],
          dr = sr[1],
          pr = sr[2],
          fr = sr[3],
          mr = sr[4],
          hr = function () {
            return Re().testIdAttribute;
          },
          vr = function () {
            for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
              t[r] = arguments[r];
            return ge(t[0]), rt.apply(void 0, [hr()].concat(t));
          },
          br = lt(vr, vr.name, "queryAll"),
          yr = ut(
            vr,
            function (e, t) {
              return "Found multiple elements by: [" + hr() + '="' + t + '"]';
            },
            function (e, t) {
              return "Unable to find an element by: [" + hr() + '="' + t + '"]';
            }
          ),
          gr = yr[0],
          wr = yr[1],
          xr = yr[2],
          Er = yr[3],
          _r = yr[4],
          Cr = Object.freeze({
            __proto__: null,
            queryAllByLabelText: wt,
            queryByLabelText: mt,
            getAllByLabelText: yt,
            getByLabelText: gt,
            findAllByLabelText: vt,
            findByLabelText: bt,
            queryByPlaceholderText: Ct,
            queryAllByPlaceholderText: Et,
            getByPlaceholderText: Pt,
            getAllByPlaceholderText: kt,
            findAllByPlaceholderText: St,
            findByPlaceholderText: qt,
            queryByText: Mt,
            queryAllByText: Tt,
            getByText: It,
            getAllByText: Nt,
            findAllByText: Lt,
            findByText: At,
            queryByDisplayValue: Ut,
            queryAllByDisplayValue: jt,
            getByDisplayValue: zt,
            getAllByDisplayValue: Bt,
            findAllByDisplayValue: Ht,
            findByDisplayValue: Vt,
            queryByAltText: Gt,
            queryAllByAltText: Wt,
            getByAltText: Kt,
            getAllByAltText: Qt,
            findAllByAltText: Xt,
            findByAltText: Jt,
            queryByTitle: rr,
            queryAllByTitle: er,
            getByTitle: ar,
            getAllByTitle: nr,
            findAllByTitle: or,
            findByTitle: ir,
            queryByRole: cr,
            queryAllByRole: ur,
            getAllByRole: dr,
            getByRole: pr,
            findAllByRole: fr,
            findByRole: mr,
            queryByTestId: gr,
            queryAllByTestId: br,
            getByTestId: xr,
            getAllByTestId: wr,
            findAllByTestId: Er,
            findByTestId: _r,
          }),
          kr = {
            copy: {
              EventType: "ClipboardEvent",
              defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
            },
            cut: {
              EventType: "ClipboardEvent",
              defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
            },
            paste: {
              EventType: "ClipboardEvent",
              defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
            },
            compositionEnd: {
              EventType: "CompositionEvent",
              defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
            },
            compositionStart: {
              EventType: "CompositionEvent",
              defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
            },
            compositionUpdate: {
              EventType: "CompositionEvent",
              defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
            },
            keyDown: {
              EventType: "KeyboardEvent",
              defaultInit: {
                bubbles: !0,
                cancelable: !0,
                charCode: 0,
                composed: !0,
              },
            },
            keyPress: {
              EventType: "KeyboardEvent",
              defaultInit: {
                bubbles: !0,
                cancelable: !0,
                charCode: 0,
                composed: !0,
              },
            },
            keyUp: {
              EventType: "KeyboardEvent",
              defaultInit: {
                bubbles: !0,
                cancelable: !0,
                charCode: 0,
                composed: !0,
              },
            },
            focus: {
              EventType: "FocusEvent",
              defaultInit: { bubbles: !1, cancelable: !1, composed: !0 },
            },
            blur: {
              EventType: "FocusEvent",
              defaultInit: { bubbles: !1, cancelable: !1, composed: !0 },
            },
            focusIn: {
              EventType: "FocusEvent",
              defaultInit: { bubbles: !0, cancelable: !1, composed: !0 },
            },
            focusOut: {
              EventType: "FocusEvent",
              defaultInit: { bubbles: !0, cancelable: !1, composed: !0 },
            },
            change: {
              EventType: "Event",
              defaultInit: { bubbles: !0, cancelable: !1 },
            },
            input: {
              EventType: "InputEvent",
              defaultInit: { bubbles: !0, cancelable: !1, composed: !0 },
            },
            invalid: {
              EventType: "Event",
              defaultInit: { bubbles: !1, cancelable: !0 },
            },
            submit: {
              EventType: "Event",
              defaultInit: { bubbles: !0, cancelable: !0 },
            },
            reset: {
              EventType: "Event",
              defaultInit: { bubbles: !0, cancelable: !0 },
            },
            click: {
              EventType: "MouseEvent",
              defaultInit: {
                bubbles: !0,
                cancelable: !0,
                button: 0,
                composed: !0,
              },
            },
            contextMenu: {
              EventType: "MouseEvent",
              defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
            },
            dblClick: {
              EventType: "MouseEvent",
              defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
            },
            drag: {
              EventType: "DragEvent",
              defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
            },
            dragEnd: {
              EventType: "DragEvent",
              defaultInit: { bubbles: !0, cancelable: !1, composed: !0 },
            },
            dragEnter: {
              EventType: "DragEvent",
              defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
            },
            dragExit: {
              EventType: "DragEvent",
              defaultInit: { bubbles: !0, cancelable: !1, composed: !0 },
            },
            dragLeave: {
              EventType: "DragEvent",
              defaultInit: { bubbles: !0, cancelable: !1, composed: !0 },
            },
            dragOver: {
              EventType: "DragEvent",
              defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
            },
            dragStart: {
              EventType: "DragEvent",
              defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
            },
            drop: {
              EventType: "DragEvent",
              defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
            },
            mouseDown: {
              EventType: "MouseEvent",
              defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
            },
            mouseEnter: {
              EventType: "MouseEvent",
              defaultInit: { bubbles: !1, cancelable: !1, composed: !0 },
            },
            mouseLeave: {
              EventType: "MouseEvent",
              defaultInit: { bubbles: !1, cancelable: !1, composed: !0 },
            },
            mouseMove: {
              EventType: "MouseEvent",
              defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
            },
            mouseOut: {
              EventType: "MouseEvent",
              defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
            },
            mouseOver: {
              EventType: "MouseEvent",
              defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
            },
            mouseUp: {
              EventType: "MouseEvent",
              defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
            },
            select: {
              EventType: "Event",
              defaultInit: { bubbles: !0, cancelable: !1 },
            },
            touchCancel: {
              EventType: "TouchEvent",
              defaultInit: { bubbles: !0, cancelable: !1, composed: !0 },
            },
            touchEnd: {
              EventType: "TouchEvent",
              defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
            },
            touchMove: {
              EventType: "TouchEvent",
              defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
            },
            touchStart: {
              EventType: "TouchEvent",
              defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
            },
            scroll: {
              EventType: "UIEvent",
              defaultInit: { bubbles: !1, cancelable: !1 },
            },
            wheel: {
              EventType: "WheelEvent",
              defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
            },
            abort: {
              EventType: "Event",
              defaultInit: { bubbles: !1, cancelable: !1 },
            },
            canPlay: {
              EventType: "Event",
              defaultInit: { bubbles: !1, cancelable: !1 },
            },
            canPlayThrough: {
              EventType: "Event",
              defaultInit: { bubbles: !1, cancelable: !1 },
            },
            durationChange: {
              EventType: "Event",
              defaultInit: { bubbles: !1, cancelable: !1 },
            },
            emptied: {
              EventType: "Event",
              defaultInit: { bubbles: !1, cancelable: !1 },
            },
            encrypted: {
              EventType: "Event",
              defaultInit: { bubbles: !1, cancelable: !1 },
            },
            ended: {
              EventType: "Event",
              defaultInit: { bubbles: !1, cancelable: !1 },
            },
            loadedData: {
              EventType: "Event",
              defaultInit: { bubbles: !1, cancelable: !1 },
            },
            loadedMetadata: {
              EventType: "Event",
              defaultInit: { bubbles: !1, cancelable: !1 },
            },
            loadStart: {
              EventType: "ProgressEvent",
              defaultInit: { bubbles: !1, cancelable: !1 },
            },
            pause: {
              EventType: "Event",
              defaultInit: { bubbles: !1, cancelable: !1 },
            },
            play: {
              EventType: "Event",
              defaultInit: { bubbles: !1, cancelable: !1 },
            },
            playing: {
              EventType: "Event",
              defaultInit: { bubbles: !1, cancelable: !1 },
            },
            progress: {
              EventType: "ProgressEvent",
              defaultInit: { bubbles: !1, cancelable: !1 },
            },
            rateChange: {
              EventType: "Event",
              defaultInit: { bubbles: !1, cancelable: !1 },
            },
            seeked: {
              EventType: "Event",
              defaultInit: { bubbles: !1, cancelable: !1 },
            },
            seeking: {
              EventType: "Event",
              defaultInit: { bubbles: !1, cancelable: !1 },
            },
            stalled: {
              EventType: "Event",
              defaultInit: { bubbles: !1, cancelable: !1 },
            },
            suspend: {
              EventType: "Event",
              defaultInit: { bubbles: !1, cancelable: !1 },
            },
            timeUpdate: {
              EventType: "Event",
              defaultInit: { bubbles: !1, cancelable: !1 },
            },
            volumeChange: {
              EventType: "Event",
              defaultInit: { bubbles: !1, cancelable: !1 },
            },
            waiting: {
              EventType: "Event",
              defaultInit: { bubbles: !1, cancelable: !1 },
            },
            load: {
              EventType: "UIEvent",
              defaultInit: { bubbles: !1, cancelable: !1 },
            },
            error: {
              EventType: "Event",
              defaultInit: { bubbles: !1, cancelable: !1 },
            },
            animationStart: {
              EventType: "AnimationEvent",
              defaultInit: { bubbles: !0, cancelable: !1 },
            },
            animationEnd: {
              EventType: "AnimationEvent",
              defaultInit: { bubbles: !0, cancelable: !1 },
            },
            animationIteration: {
              EventType: "AnimationEvent",
              defaultInit: { bubbles: !0, cancelable: !1 },
            },
            transitionEnd: {
              EventType: "TransitionEvent",
              defaultInit: { bubbles: !0, cancelable: !0 },
            },
            pointerOver: {
              EventType: "PointerEvent",
              defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
            },
            pointerEnter: {
              EventType: "PointerEvent",
              defaultInit: { bubbles: !1, cancelable: !1 },
            },
            pointerDown: {
              EventType: "PointerEvent",
              defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
            },
            pointerMove: {
              EventType: "PointerEvent",
              defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
            },
            pointerUp: {
              EventType: "PointerEvent",
              defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
            },
            pointerCancel: {
              EventType: "PointerEvent",
              defaultInit: { bubbles: !0, cancelable: !1, composed: !0 },
            },
            pointerOut: {
              EventType: "PointerEvent",
              defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
            },
            pointerLeave: {
              EventType: "PointerEvent",
              defaultInit: { bubbles: !1, cancelable: !1 },
            },
            gotPointerCapture: {
              EventType: "PointerEvent",
              defaultInit: { bubbles: !0, cancelable: !1, composed: !0 },
            },
            lostPointerCapture: {
              EventType: "PointerEvent",
              defaultInit: { bubbles: !0, cancelable: !1, composed: !0 },
            },
            popState: {
              EventType: "PopStateEvent",
              defaultInit: { bubbles: !0, cancelable: !1 },
            },
          },
          Pr = { doubleClick: "dblClick" },
          Sr = ["value", "files"],
          qr = ["bubbles", "cancelable", "detail"];
        function Rr(e, t) {
          return Re().eventWrapper(function () {
            if (!t)
              throw new Error(
                "Unable to fire an event - please provide an event object."
              );
            if (!e)
              throw new Error(
                'Unable to fire a "' +
                  t.type +
                  '" event - please provide a DOM element.'
              );
            return e.dispatchEvent(t);
          });
        }
        function Tr(e, t, r, a) {
          var o = void 0 === a ? {} : a,
            i = o.EventType,
            l = void 0 === i ? "Event" : i,
            u = o.defaultInit,
            s = void 0 === u ? {} : u;
          if (!t)
            throw new Error(
              'Unable to fire a "' +
                e +
                '" event - please provide a DOM element.'
            );
          var c = n({}, s, r),
            d = c.target,
            p = (d = void 0 === d ? {} : d).value,
            f = d.files,
            m = ee(d, Sr);
          void 0 !== p &&
            (function (e, t) {
              var r = (Object.getOwnPropertyDescriptor(e, "value") || {}).set,
                n = Object.getPrototypeOf(e),
                a = (Object.getOwnPropertyDescriptor(n, "value") || {}).set;
              if (a && r !== a) a.call(e, t);
              else {
                if (!r)
                  throw new Error(
                    "The given element does not have a value setter"
                  );
                r.call(e, t);
              }
            })(t, p),
            void 0 !== f &&
              Object.defineProperty(t, "files", {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                value: f,
              }),
            Object.assign(t, m);
          var h,
            v = ye(t),
            b = v[l] || v.Event;
          if ("function" == typeof b) h = new b(e, c);
          else {
            h = v.document.createEvent(l);
            var y = c.bubbles,
              g = c.cancelable,
              w = c.detail,
              x = ee(c, qr);
            h.initEvent(e, y, g, w),
              Object.keys(x).forEach(function (e) {
                h[e] = x[e];
              });
          }
          return (
            ["dataTransfer", "clipboardData"].forEach(function (e) {
              var t = c[e];
              "object" == typeof t &&
                ("function" == typeof v.DataTransfer
                  ? Object.defineProperty(h, e, {
                      value: Object.getOwnPropertyNames(t).reduce(function (
                        e,
                        r
                      ) {
                        return Object.defineProperty(e, r, { value: t[r] }), e;
                      },
                      new v.DataTransfer()),
                    })
                  : Object.defineProperty(h, e, { value: t }));
            }),
            h
          );
        }
        Object.keys(kr).forEach(function (e) {
          var t = kr[e],
            r = t.EventType,
            n = t.defaultInit,
            a = e.toLowerCase();
          (Tr[e] = function (e, t) {
            return Tr(a, e, t, { EventType: r, defaultInit: n });
          }),
            (Rr[e] = function (t, r) {
              return Rr(t, Tr[e](t, r));
            });
        }),
          Object.keys(Pr).forEach(function (e) {
            var t = Pr[e];
            Rr[e] = function () {
              return Rr[t].apply(Rr, arguments);
            };
          });
        var Or = {
          debug: function (e, t, r) {
            return Array.isArray(e)
              ? e.forEach(function (e) {
                  return Ce(e, t, r);
                })
              : Ce(e, t, r);
          },
          logTestingPlaygroundURL: function (e) {
            var t, r;
            void 0 === e && (e = be().body),
              e && "innerHTML" in e
                ? e.innerHTML
                  ? console.log(
                      "Open this URL in your browser\n\n" +
                        ((t = e.innerHTML),
                        "https://testing-playground.com/#markup=" +
                          ((r = t),
                          (0, te.compressToEncodedURIComponent)(
                            r.replace(/[ \t]*[\n][ \t]*/g, "\n")
                          )))
                    )
                  : console.log(
                      "The provided element doesn't have any children."
                    )
                : console.log(
                    "The element you're providing isn't a valid DOM element."
                  );
          },
        };
        "undefined" != typeof document && document.body
          ? (function (e, t, r) {
              void 0 === t && (t = Cr),
                void 0 === r && (r = {}),
                Object.keys(t).reduce(function (r, n) {
                  var a = t[n];
                  return (r[n] = a.bind(null, e)), r;
                }, r);
            })(document.body, Cr, Or)
          : Object.keys(Cr).reduce(function (e, t) {
              return (
                (e[t] = function () {
                  throw new TypeError(
                    "For queries bound to document.body a global document has to be available... Learn more: https://testing-library.com/s/screen-global-error"
                  );
                }),
                e
              );
            }, Or);
      },
      7871: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.printIteratorEntries = function (e, t, r, n, a, o, i = ": ") {
            let l = "",
              u = e.next();
            if (!u.done) {
              l += t.spacingOuter;
              const s = r + t.indent;
              for (; !u.done; ) {
                (l +=
                  s +
                  o(u.value[0], t, s, n, a) +
                  i +
                  o(u.value[1], t, s, n, a)),
                  (u = e.next()),
                  u.done ? t.min || (l += ",") : (l += "," + t.spacingInner);
              }
              l += t.spacingOuter + r;
            }
            return l;
          }),
          (t.printIteratorValues = function (e, t, r, n, a, o) {
            let i = "",
              l = e.next();
            if (!l.done) {
              i += t.spacingOuter;
              const u = r + t.indent;
              for (; !l.done; )
                (i += u + o(l.value, t, u, n, a)),
                  (l = e.next()),
                  l.done ? t.min || (i += ",") : (i += "," + t.spacingInner);
              i += t.spacingOuter + r;
            }
            return i;
          }),
          (t.printListItems = function (e, t, r, n, a, o) {
            let i = "";
            if (e.length) {
              i += t.spacingOuter;
              const l = r + t.indent;
              for (let r = 0; r < e.length; r++)
                (i += l + o(e[r], t, l, n, a)),
                  r < e.length - 1
                    ? (i += "," + t.spacingInner)
                    : t.min || (i += ",");
              i += t.spacingOuter + r;
            }
            return i;
          }),
          (t.printObjectProperties = function (e, t, r, n, a, o) {
            let i = "";
            const l = ((e) => {
              const t = Object.keys(e).sort();
              return (
                Object.getOwnPropertySymbols &&
                  Object.getOwnPropertySymbols(e).forEach((r) => {
                    Object.getOwnPropertyDescriptor(e, r).enumerable &&
                      t.push(r);
                  }),
                t
              );
            })(e);
            if (l.length) {
              i += t.spacingOuter;
              const u = r + t.indent;
              for (let r = 0; r < l.length; r++) {
                const s = l[r];
                (i += u + o(s, t, u, n, a) + ": " + o(e[s], t, u, n, a)),
                  r < l.length - 1
                    ? (i += "," + t.spacingInner)
                    : t.min || (i += ",");
              }
              i += t.spacingOuter + r;
            }
            return i;
          });
      },
      69: (e, t, r) => {
        "use strict";
        var n = p(r(6434)),
          a = r(7871),
          o = p(r(9481)),
          i = p(r(7243)),
          l = p(r(7173)),
          u = p(r(7916)),
          s = p(r(7704)),
          c = p(r(9067)),
          d = p(r(6347));
        function p(e) {
          return e && e.__esModule ? e : { default: e };
        }
        const f = Object.prototype.toString,
          m = Date.prototype.toISOString,
          h = Error.prototype.toString,
          v = RegExp.prototype.toString,
          b = (e) =>
            ("function" == typeof e.constructor && e.constructor.name) ||
            "Object",
          y = /^Symbol\((.*)\)(.*)$/,
          g = /\n/gi;
        class w extends Error {
          constructor(e, t) {
            super(e), (this.stack = t), (this.name = this.constructor.name);
          }
        }
        function x(e, t) {
          return t
            ? "[Function " + (e.name || "anonymous") + "]"
            : "[Function]";
        }
        function E(e) {
          return String(e).replace(y, "Symbol($1)");
        }
        function _(e) {
          return "[" + h.call(e) + "]";
        }
        function C(e, t, r, n) {
          if (!0 === e || !1 === e) return "" + e;
          if (void 0 === e) return "undefined";
          if (null === e) return "null";
          const a = typeof e;
          if ("number" === a)
            return (function (e) {
              return Object.is(e, -0) ? "-0" : String(e);
            })(e);
          if ("bigint" === a)
            return (function (e) {
              return String(`${e}n`);
            })(e);
          if ("string" === a)
            return n ? '"' + e.replace(/"|\\/g, "\\$&") + '"' : '"' + e + '"';
          if ("function" === a) return x(e, t);
          if ("symbol" === a) return E(e);
          const o = f.call(e);
          return "[object WeakMap]" === o
            ? "WeakMap {}"
            : "[object WeakSet]" === o
            ? "WeakSet {}"
            : "[object Function]" === o || "[object GeneratorFunction]" === o
            ? x(e, t)
            : "[object Symbol]" === o
            ? E(e)
            : "[object Date]" === o
            ? isNaN(+e)
              ? "Date { NaN }"
              : m.call(e)
            : "[object Error]" === o
            ? _(e)
            : "[object RegExp]" === o
            ? r
              ? v.call(e).replace(/[\\^$*+?.()|[\]{}]/g, "\\$&")
              : v.call(e)
            : e instanceof Error
            ? _(e)
            : null;
        }
        function k(e, t, r, n, o, i) {
          if (-1 !== o.indexOf(e)) return "[Circular]";
          (o = o.slice()).push(e);
          const l = ++n > t.maxDepth,
            u = t.min;
          if (
            t.callToJSON &&
            !l &&
            e.toJSON &&
            "function" == typeof e.toJSON &&
            !i
          )
            return q(e.toJSON(), t, r, n, o, !0);
          const s = f.call(e);
          return "[object Arguments]" === s
            ? l
              ? "[Arguments]"
              : (u ? "" : "Arguments ") +
                "[" +
                (0, a.printListItems)(e, t, r, n, o, q) +
                "]"
            : (function (e) {
                return (
                  "[object Array]" === e ||
                  "[object ArrayBuffer]" === e ||
                  "[object DataView]" === e ||
                  "[object Float32Array]" === e ||
                  "[object Float64Array]" === e ||
                  "[object Int8Array]" === e ||
                  "[object Int16Array]" === e ||
                  "[object Int32Array]" === e ||
                  "[object Uint8Array]" === e ||
                  "[object Uint8ClampedArray]" === e ||
                  "[object Uint16Array]" === e ||
                  "[object Uint32Array]" === e
                );
              })(s)
            ? l
              ? "[" + e.constructor.name + "]"
              : (u ? "" : e.constructor.name + " ") +
                "[" +
                (0, a.printListItems)(e, t, r, n, o, q) +
                "]"
            : "[object Map]" === s
            ? l
              ? "[Map]"
              : "Map {" +
                (0, a.printIteratorEntries)(
                  e.entries(),
                  t,
                  r,
                  n,
                  o,
                  q,
                  " => "
                ) +
                "}"
            : "[object Set]" === s
            ? l
              ? "[Set]"
              : "Set {" +
                (0, a.printIteratorValues)(e.values(), t, r, n, o, q) +
                "}"
            : l || ((e) => "undefined" != typeof window && e === window)(e)
            ? "[" + b(e) + "]"
            : (u ? "" : b(e) + " ") +
              "{" +
              (0, a.printObjectProperties)(e, t, r, n, o, q) +
              "}";
        }
        function P(e, t, r, n, a, o) {
          let i;
          try {
            i = (function (e) {
              return null != e.serialize;
            })(e)
              ? e.serialize(t, r, n, a, o, q)
              : e.print(
                  t,
                  (e) => q(e, r, n, a, o),
                  (e) => {
                    const t = n + r.indent;
                    return t + e.replace(g, "\n" + t);
                  },
                  {
                    edgeSpacing: r.spacingOuter,
                    min: r.min,
                    spacing: r.spacingInner,
                  },
                  r.colors
                );
          } catch (e) {
            throw new w(e.message, e.stack);
          }
          if ("string" != typeof i)
            throw new Error(
              `pretty-format: Plugin must return type "string" but instead returned "${typeof i}".`
            );
          return i;
        }
        function S(e, t) {
          for (let r = 0; r < e.length; r++)
            try {
              if (e[r].test(t)) return e[r];
            } catch (e) {
              throw new w(e.message, e.stack);
            }
          return null;
        }
        function q(e, t, r, n, a, o) {
          const i = S(t.plugins, e);
          if (null !== i) return P(i, e, t, r, n, a);
          const l = C(e, t.printFunctionName, t.escapeRegex, t.escapeString);
          return null !== l ? l : k(e, t, r, n, a, o);
        }
        const R = {
            comment: "gray",
            content: "reset",
            prop: "yellow",
            tag: "cyan",
            value: "green",
          },
          T = Object.keys(R),
          O = {
            callToJSON: !0,
            escapeRegex: !1,
            escapeString: !0,
            highlight: !1,
            indent: 2,
            maxDepth: 1 / 0,
            min: !1,
            plugins: [],
            printFunctionName: !0,
            theme: R,
          },
          M = (e) =>
            T.reduce((t, r) => {
              const a = e.theme && void 0 !== e.theme[r] ? e.theme[r] : R[r],
                o = a && n.default[a];
              if (!o || "string" != typeof o.close || "string" != typeof o.open)
                throw new Error(
                  `pretty-format: Option "theme" has a key "${r}" whose value "${a}" is undefined in ansi-styles.`
                );
              return (t[r] = o), t;
            }, Object.create(null)),
          N = (e) =>
            e && void 0 !== e.printFunctionName
              ? e.printFunctionName
              : O.printFunctionName,
          I = (e) =>
            e && void 0 !== e.escapeRegex ? e.escapeRegex : O.escapeRegex,
          L = (e) =>
            e && void 0 !== e.escapeString ? e.escapeString : O.escapeString,
          A = (e) => {
            return {
              callToJSON:
                e && void 0 !== e.callToJSON ? e.callToJSON : O.callToJSON,
              colors:
                e && e.highlight
                  ? M(e)
                  : T.reduce(
                      (e, t) => ((e[t] = { close: "", open: "" }), e),
                      Object.create(null)
                    ),
              escapeRegex: I(e),
              escapeString: L(e),
              indent:
                e && e.min
                  ? ""
                  : ((t = e && void 0 !== e.indent ? e.indent : O.indent),
                    new Array(t + 1).join(" ")),
              maxDepth: e && void 0 !== e.maxDepth ? e.maxDepth : O.maxDepth,
              min: e && void 0 !== e.min ? e.min : O.min,
              plugins: e && void 0 !== e.plugins ? e.plugins : O.plugins,
              printFunctionName: N(e),
              spacingInner: e && e.min ? " " : "\n",
              spacingOuter: e && e.min ? "" : "\n",
            };
            var t;
          };
        function F(e, t) {
          if (
            t &&
            ((function (e) {
              if (
                (Object.keys(e).forEach((e) => {
                  if (!O.hasOwnProperty(e))
                    throw new Error(`pretty-format: Unknown option "${e}".`);
                }),
                e.min && void 0 !== e.indent && 0 !== e.indent)
              )
                throw new Error(
                  'pretty-format: Options "min" and "indent" cannot be used together.'
                );
              if (void 0 !== e.theme) {
                if (null === e.theme)
                  throw new Error(
                    'pretty-format: Option "theme" must not be null.'
                  );
                if ("object" != typeof e.theme)
                  throw new Error(
                    `pretty-format: Option "theme" must be of type "object" but instead received "${typeof e.theme}".`
                  );
              }
            })(t),
            t.plugins)
          ) {
            const r = S(t.plugins, e);
            if (null !== r) return P(r, e, A(t), "", 0, []);
          }
          const r = C(e, N(t), I(t), L(t));
          return null !== r ? r : k(e, A(t), "", 0, []);
        }
        (F.plugins = {
          AsymmetricMatcher: o.default,
          ConvertAnsi: i.default,
          DOMCollection: l.default,
          DOMElement: u.default,
          Immutable: s.default,
          ReactElement: c.default,
          ReactTestComponent: d.default,
        }),
          (e.exports = F);
      },
      9481: (e, t, r) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = t.test = t.serialize = void 0);
        var n = r(7871),
          a = r.g["jest-symbol-do-not-touch"] || r.g.Symbol;
        const o =
            "function" == typeof a && a.for
              ? a.for("jest.asymmetricMatcher")
              : 1267621,
          i = (e, t, r, a, o, i) => {
            const l = e.toString();
            return "ArrayContaining" === l || "ArrayNotContaining" === l
              ? ++a > t.maxDepth
                ? "[" + l + "]"
                : l +
                  " [" +
                  (0, n.printListItems)(e.sample, t, r, a, o, i) +
                  "]"
              : "ObjectContaining" === l || "ObjectNotContaining" === l
              ? ++a > t.maxDepth
                ? "[" + l + "]"
                : l +
                  " {" +
                  (0, n.printObjectProperties)(e.sample, t, r, a, o, i) +
                  "}"
              : "StringMatching" === l ||
                "StringNotMatching" === l ||
                "StringContaining" === l ||
                "StringNotContaining" === l
              ? l + " " + i(e.sample, t, r, a, o)
              : e.toAsymmetricMatcher();
          };
        t.serialize = i;
        const l = (e) => e && e.$$typeof === o;
        t.test = l;
        var u = { serialize: i, test: l };
        t.default = u;
      },
      7243: (e, t, r) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = t.serialize = t.test = void 0);
        var n = o(r(4277)),
          a = o(r(6434));
        function o(e) {
          return e && e.__esModule ? e : { default: e };
        }
        const i = (e) => "string" == typeof e && !!e.match((0, n.default)());
        t.test = i;
        const l = (e, t, r, o, i, l) =>
          l(
            e.replace((0, n.default)(), (e) => {
              switch (e) {
                case a.default.red.close:
                case a.default.green.close:
                case a.default.cyan.close:
                case a.default.gray.close:
                case a.default.white.close:
                case a.default.yellow.close:
                case a.default.bgRed.close:
                case a.default.bgGreen.close:
                case a.default.bgYellow.close:
                case a.default.inverse.close:
                case a.default.dim.close:
                case a.default.bold.close:
                case a.default.reset.open:
                case a.default.reset.close:
                  return "</>";
                case a.default.red.open:
                  return "<red>";
                case a.default.green.open:
                  return "<green>";
                case a.default.cyan.open:
                  return "<cyan>";
                case a.default.gray.open:
                  return "<gray>";
                case a.default.white.open:
                  return "<white>";
                case a.default.yellow.open:
                  return "<yellow>";
                case a.default.bgRed.open:
                  return "<bgRed>";
                case a.default.bgGreen.open:
                  return "<bgGreen>";
                case a.default.bgYellow.open:
                  return "<bgYellow>";
                case a.default.inverse.open:
                  return "<inverse>";
                case a.default.dim.open:
                  return "<dim>";
                case a.default.bold.open:
                  return "<bold>";
                default:
                  return "";
              }
            }),
            t,
            r,
            o,
            i
          );
        t.serialize = l;
        var u = { serialize: l, test: i };
        t.default = u;
      },
      7173: (e, t, r) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = t.serialize = t.test = void 0);
        var n = r(7871);
        const a = ["DOMStringMap", "NamedNodeMap"],
          o = /^(HTML\w*Collection|NodeList)$/,
          i = (e) => {
            return (
              e &&
              e.constructor &&
              !!e.constructor.name &&
              ((t = e.constructor.name), -1 !== a.indexOf(t) || o.test(t))
            );
            var t;
          };
        t.test = i;
        const l = (e, t, r, o, i, l) => {
          const u = e.constructor.name;
          return ++o > t.maxDepth
            ? "[" + u + "]"
            : (t.min ? "" : u + " ") +
                (-1 !== a.indexOf(u)
                  ? "{" +
                    (0, n.printObjectProperties)(
                      ((e) => "NamedNodeMap" === e.constructor.name)(e)
                        ? Array.from(e).reduce(
                            (e, t) => ((e[t.name] = t.value), e),
                            {}
                          )
                        : { ...e },
                      t,
                      r,
                      o,
                      i,
                      l
                    ) +
                    "}"
                  : "[" +
                    (0, n.printListItems)(Array.from(e), t, r, o, i, l) +
                    "]");
        };
        t.serialize = l;
        var u = { serialize: l, test: i };
        t.default = u;
      },
      7916: (e, t, r) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = t.serialize = t.test = void 0);
        var n = r(7366);
        const a = /^((HTML|SVG)\w*)?Element$/,
          o = (e) => {
            var t;
            return (
              (null == e || null === (t = e.constructor) || void 0 === t
                ? void 0
                : t.name) &&
              ((e) => {
                var t;
                const r = e.constructor.name,
                  { nodeType: n, tagName: o } = e,
                  i =
                    ("string" == typeof o && o.includes("-")) ||
                    (null === (t = e.hasAttribute) || void 0 === t
                      ? void 0
                      : t.call(e, "is"));
                return (
                  (1 === n && (a.test(r) || i)) ||
                  (3 === n && "Text" === r) ||
                  (8 === n && "Comment" === r) ||
                  (11 === n && "DocumentFragment" === r)
                );
              })(e)
            );
          };
        function i(e) {
          return 11 === e.nodeType;
        }
        t.test = o;
        const l = (e, t, r, a, o, l) => {
          if (
            (function (e) {
              return 3 === e.nodeType;
            })(e)
          )
            return (0, n.printText)(e.data, t);
          if (
            (function (e) {
              return 8 === e.nodeType;
            })(e)
          )
            return (0, n.printComment)(e.data, t);
          const u = i(e) ? "DocumentFragment" : e.tagName.toLowerCase();
          return ++a > t.maxDepth
            ? (0, n.printElementAsLeaf)(u, t)
            : (0, n.printElement)(
                u,
                (0, n.printProps)(
                  i(e)
                    ? []
                    : Array.from(e.attributes)
                        .map((e) => e.name)
                        .sort(),
                  i(e)
                    ? {}
                    : Array.from(e.attributes).reduce(
                        (e, t) => ((e[t.name] = t.value), e),
                        {}
                      ),
                  t,
                  r + t.indent,
                  a,
                  o,
                  l
                ),
                (0, n.printChildren)(
                  Array.prototype.slice.call(e.childNodes || e.children),
                  t,
                  r + t.indent,
                  a,
                  o,
                  l
                ),
                t,
                r
              );
        };
        t.serialize = l;
        var u = { serialize: l, test: o };
        t.default = u;
      },
      7704: (e, t, r) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = t.test = t.serialize = void 0);
        var n = r(7871);
        const a = "@@__IMMUTABLE_ORDERED__@@",
          o = (e) => "Immutable." + e,
          i = (e) => "[" + e + "]",
          l = " ",
          u = (e, t, r, a, u, s, c) =>
            ++a > t.maxDepth
              ? i(o(c))
              : o(c) +
                l +
                "[" +
                (0, n.printIteratorValues)(e.values(), t, r, a, u, s) +
                "]",
          s = (e, t, r, s, c, d) =>
            e["@@__IMMUTABLE_MAP__@@"]
              ? ((e, t, r, a, u, s, c) =>
                  ++a > t.maxDepth
                    ? i(o(c))
                    : o(c) +
                      l +
                      "{" +
                      (0, n.printIteratorEntries)(e.entries(), t, r, a, u, s) +
                      "}")(e, t, r, s, c, d, e[a] ? "OrderedMap" : "Map")
              : e["@@__IMMUTABLE_LIST__@@"]
              ? u(e, t, r, s, c, d, "List")
              : e["@@__IMMUTABLE_SET__@@"]
              ? u(e, t, r, s, c, d, e[a] ? "OrderedSet" : "Set")
              : e["@@__IMMUTABLE_STACK__@@"]
              ? u(e, t, r, s, c, d, "Stack")
              : e["@@__IMMUTABLE_SEQ__@@"]
              ? ((e, t, r, a, u, s) => {
                  const c = o("Seq");
                  return ++a > t.maxDepth
                    ? i(c)
                    : e["@@__IMMUTABLE_KEYED__@@"]
                    ? c +
                      l +
                      "{" +
                      (e._iter || e._object
                        ? (0, n.printIteratorEntries)(
                            e.entries(),
                            t,
                            r,
                            a,
                            u,
                            s
                          )
                        : "…") +
                      "}"
                    : c +
                      l +
                      "[" +
                      (e._iter || e._array || e._collection || e._iterable
                        ? (0, n.printIteratorValues)(e.values(), t, r, a, u, s)
                        : "…") +
                      "]";
                })(e, t, r, s, c, d)
              : ((e, t, r, a, u, s) => {
                  const c = o(e._name || "Record");
                  return ++a > t.maxDepth
                    ? i(c)
                    : c +
                        l +
                        "{" +
                        (0, n.printIteratorEntries)(
                          (function (e) {
                            let t = 0;
                            return {
                              next() {
                                if (t < e._keys.length) {
                                  const r = e._keys[t++];
                                  return { done: !1, value: [r, e.get(r)] };
                                }
                                return { done: !0, value: void 0 };
                              },
                            };
                          })(e),
                          t,
                          r,
                          a,
                          u,
                          s
                        ) +
                        "}";
                })(e, t, r, s, c, d);
        t.serialize = s;
        const c = (e) =>
          e &&
          (!0 === e["@@__IMMUTABLE_ITERABLE__@@"] ||
            !0 === e["@@__IMMUTABLE_RECORD__@@"]);
        t.test = c;
        var d = { serialize: s, test: c };
        t.default = d;
      },
      9067: (e, t, r) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = t.test = t.serialize = void 0);
        var n = (function (e) {
            if (e && e.__esModule) return e;
            if (null === e || ("object" != typeof e && "function" != typeof e))
              return { default: e };
            var t = o();
            if (t && t.has(e)) return t.get(e);
            var r = {},
              n = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var a in e)
              if (Object.prototype.hasOwnProperty.call(e, a)) {
                var i = n ? Object.getOwnPropertyDescriptor(e, a) : null;
                i && (i.get || i.set)
                  ? Object.defineProperty(r, a, i)
                  : (r[a] = e[a]);
              }
            return (r.default = e), t && t.set(e, r), r;
          })(r(9864)),
          a = r(7366);
        function o() {
          if ("function" != typeof WeakMap) return null;
          var e = new WeakMap();
          return (
            (o = function () {
              return e;
            }),
            e
          );
        }
        const i = (e, t = []) => (
            Array.isArray(e)
              ? e.forEach((e) => {
                  i(e, t);
                })
              : null != e && !1 !== e && t.push(e),
            t
          ),
          l = (e) => {
            const t = e.type;
            if ("string" == typeof t) return t;
            if ("function" == typeof t)
              return t.displayName || t.name || "Unknown";
            if (n.isFragment(e)) return "React.Fragment";
            if (n.isSuspense(e)) return "React.Suspense";
            if ("object" == typeof t && null !== t) {
              if (n.isContextProvider(e)) return "Context.Provider";
              if (n.isContextConsumer(e)) return "Context.Consumer";
              if (n.isForwardRef(e)) {
                if (t.displayName) return t.displayName;
                const e = t.render.displayName || t.render.name || "";
                return "" !== e ? "ForwardRef(" + e + ")" : "ForwardRef";
              }
              if (n.isMemo(e)) {
                const e =
                  t.displayName || t.type.displayName || t.type.name || "";
                return "" !== e ? "Memo(" + e + ")" : "Memo";
              }
            }
            return "UNDEFINED";
          },
          u = (e, t, r, n, o, u) =>
            ++n > t.maxDepth
              ? (0, a.printElementAsLeaf)(l(e), t)
              : (0, a.printElement)(
                  l(e),
                  (0, a.printProps)(
                    ((e) => {
                      const { props: t } = e;
                      return Object.keys(t)
                        .filter((e) => "children" !== e && void 0 !== t[e])
                        .sort();
                    })(e),
                    e.props,
                    t,
                    r + t.indent,
                    n,
                    o,
                    u
                  ),
                  (0, a.printChildren)(
                    i(e.props.children),
                    t,
                    r + t.indent,
                    n,
                    o,
                    u
                  ),
                  t,
                  r
                );
        t.serialize = u;
        const s = (e) => e && n.isElement(e);
        t.test = s;
        var c = { serialize: u, test: s };
        t.default = c;
      },
      6347: (e, t, r) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = t.test = t.serialize = void 0);
        var n = r(7366),
          a = r.g["jest-symbol-do-not-touch"] || r.g.Symbol;
        const o =
            "function" == typeof a && a.for
              ? a.for("react.test.json")
              : 245830487,
          i = (e, t, r, a, o, i) =>
            ++a > t.maxDepth
              ? (0, n.printElementAsLeaf)(e.type, t)
              : (0, n.printElement)(
                  e.type,
                  e.props
                    ? (0, n.printProps)(
                        ((e) => {
                          const { props: t } = e;
                          return t
                            ? Object.keys(t)
                                .filter((e) => void 0 !== t[e])
                                .sort()
                            : [];
                        })(e),
                        e.props,
                        t,
                        r + t.indent,
                        a,
                        o,
                        i
                      )
                    : "",
                  e.children
                    ? (0, n.printChildren)(e.children, t, r + t.indent, a, o, i)
                    : "",
                  t,
                  r
                );
        t.serialize = i;
        const l = (e) => e && e.$$typeof === o;
        t.test = l;
        var u = { serialize: i, test: l };
        t.default = u;
      },
      2209: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = function (e) {
            return e.replace(/</g, "&lt;").replace(/>/g, "&gt;");
          });
      },
      7366: (e, t, r) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.printElementAsLeaf =
            t.printElement =
            t.printComment =
            t.printText =
            t.printChildren =
            t.printProps =
              void 0);
        var n,
          a = (n = r(2209)) && n.__esModule ? n : { default: n };
        (t.printProps = (e, t, r, n, a, o, i) => {
          const l = n + r.indent,
            u = r.colors;
          return e
            .map((e) => {
              const s = t[e];
              let c = i(s, r, l, a, o);
              return (
                "string" != typeof s &&
                  (-1 !== c.indexOf("\n") &&
                    (c = r.spacingOuter + l + c + r.spacingOuter + n),
                  (c = "{" + c + "}")),
                r.spacingInner +
                  n +
                  u.prop.open +
                  e +
                  u.prop.close +
                  "=" +
                  u.value.open +
                  c +
                  u.value.close
              );
            })
            .join("");
        }),
          (t.printChildren = (e, t, r, n, a, i) =>
            e
              .map(
                (e) =>
                  t.spacingOuter +
                  r +
                  ("string" == typeof e ? o(e, t) : i(e, t, r, n, a))
              )
              .join(""));
        const o = (e, t) => {
          const r = t.colors.content;
          return r.open + (0, a.default)(e) + r.close;
        };
        (t.printText = o),
          (t.printComment = (e, t) => {
            const r = t.colors.comment;
            return r.open + "\x3c!--" + (0, a.default)(e) + "--\x3e" + r.close;
          }),
          (t.printElement = (e, t, r, n, a) => {
            const o = n.colors.tag;
            return (
              o.open +
              "<" +
              e +
              (t && o.close + t + n.spacingOuter + a + o.open) +
              (r
                ? ">" + o.close + r + n.spacingOuter + a + o.open + "</" + e
                : (t && !n.min ? "" : " ") + "/") +
              ">" +
              o.close
            );
          }),
          (t.printElementAsLeaf = (e, t) => {
            const r = t.colors.tag;
            return r.open + "<" + e + r.close + " …" + r.open + " />" + r.close;
          });
      },
      4277: (e) => {
        "use strict";
        e.exports = ({ onlyFirst: e = !1 } = {}) => {
          const t = [
            "[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)",
            "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))",
          ].join("|");
          return new RegExp(t, e ? void 0 : "g");
        };
      },
      6434: (e, t, r) => {
        "use strict";
        e = r.nmd(e);
        const n =
            (e, t) =>
            (...r) =>
              `[${e(...r) + t}m`,
          a =
            (e, t) =>
            (...r) => {
              const n = e(...r);
              return `[${38 + t};5;${n}m`;
            },
          o =
            (e, t) =>
            (...r) => {
              const n = e(...r);
              return `[${38 + t};2;${n[0]};${n[1]};${n[2]}m`;
            },
          i = (e) => e,
          l = (e, t, r) => [e, t, r],
          u = (e, t, r) => {
            Object.defineProperty(e, t, {
              get: () => {
                const n = r();
                return (
                  Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                  }),
                  n
                );
              },
              enumerable: !0,
              configurable: !0,
            });
          };
        let s;
        const c = (e, t, n, a) => {
          void 0 === s && (s = r(2085));
          const o = a ? 10 : 0,
            i = {};
          for (const [r, a] of Object.entries(s)) {
            const l = "ansi16" === r ? "ansi" : r;
            r === t
              ? (i[l] = e(n, o))
              : "object" == typeof a && (i[l] = e(a[t], o));
          }
          return i;
        };
        Object.defineProperty(e, "exports", {
          enumerable: !0,
          get: function () {
            const e = new Map(),
              t = {
                modifier: {
                  reset: [0, 0],
                  bold: [1, 22],
                  dim: [2, 22],
                  italic: [3, 23],
                  underline: [4, 24],
                  inverse: [7, 27],
                  hidden: [8, 28],
                  strikethrough: [9, 29],
                },
                color: {
                  black: [30, 39],
                  red: [31, 39],
                  green: [32, 39],
                  yellow: [33, 39],
                  blue: [34, 39],
                  magenta: [35, 39],
                  cyan: [36, 39],
                  white: [37, 39],
                  blackBright: [90, 39],
                  redBright: [91, 39],
                  greenBright: [92, 39],
                  yellowBright: [93, 39],
                  blueBright: [94, 39],
                  magentaBright: [95, 39],
                  cyanBright: [96, 39],
                  whiteBright: [97, 39],
                },
                bgColor: {
                  bgBlack: [40, 49],
                  bgRed: [41, 49],
                  bgGreen: [42, 49],
                  bgYellow: [43, 49],
                  bgBlue: [44, 49],
                  bgMagenta: [45, 49],
                  bgCyan: [46, 49],
                  bgWhite: [47, 49],
                  bgBlackBright: [100, 49],
                  bgRedBright: [101, 49],
                  bgGreenBright: [102, 49],
                  bgYellowBright: [103, 49],
                  bgBlueBright: [104, 49],
                  bgMagentaBright: [105, 49],
                  bgCyanBright: [106, 49],
                  bgWhiteBright: [107, 49],
                },
              };
            (t.color.gray = t.color.blackBright),
              (t.bgColor.bgGray = t.bgColor.bgBlackBright),
              (t.color.grey = t.color.blackBright),
              (t.bgColor.bgGrey = t.bgColor.bgBlackBright);
            for (const [r, n] of Object.entries(t)) {
              for (const [r, a] of Object.entries(n))
                (t[r] = { open: `[${a[0]}m`, close: `[${a[1]}m` }),
                  (n[r] = t[r]),
                  e.set(a[0], a[1]);
              Object.defineProperty(t, r, { value: n, enumerable: !1 });
            }
            return (
              Object.defineProperty(t, "codes", { value: e, enumerable: !1 }),
              (t.color.close = "[39m"),
              (t.bgColor.close = "[49m"),
              u(t.color, "ansi", () => c(n, "ansi16", i, !1)),
              u(t.color, "ansi256", () => c(a, "ansi256", i, !1)),
              u(t.color, "ansi16m", () => c(o, "rgb", l, !1)),
              u(t.bgColor, "ansi", () => c(n, "ansi16", i, !0)),
              u(t.bgColor, "ansi256", () => c(a, "ansi256", i, !0)),
              u(t.bgColor, "ansi16m", () => c(o, "rgb", l, !0)),
              t
            );
          },
        });
      },
      7457: (e, t, r) => {
        "use strict";
        var n = r(530);
        r(3978)(t, "__esModule", { value: !0 }), (t.default = void 0);
        var a = new (n(r(9392)).default)([
          ["aria-activedescendant", { type: "id" }],
          ["aria-atomic", { type: "boolean" }],
          [
            "aria-autocomplete",
            { type: "token", values: ["inline", "list", "both", "none"] },
          ],
          ["aria-busy", { type: "boolean" }],
          ["aria-checked", { type: "tristate" }],
          ["aria-colcount", { type: "integer" }],
          ["aria-colindex", { type: "integer" }],
          ["aria-colspan", { type: "integer" }],
          ["aria-controls", { type: "idlist" }],
          [
            "aria-current",
            {
              type: "token",
              values: ["page", "step", "location", "date", "time", !0, !1],
            },
          ],
          ["aria-describedby", { type: "idlist" }],
          ["aria-details", { type: "id" }],
          ["aria-disabled", { type: "boolean" }],
          [
            "aria-dropeffect",
            {
              type: "tokenlist",
              values: ["copy", "execute", "link", "move", "none", "popup"],
            },
          ],
          ["aria-errormessage", { type: "id" }],
          ["aria-expanded", { type: "boolean", allowundefined: !0 }],
          ["aria-flowto", { type: "idlist" }],
          ["aria-grabbed", { type: "boolean", allowundefined: !0 }],
          [
            "aria-haspopup",
            {
              type: "token",
              values: [!1, !0, "menu", "listbox", "tree", "grid", "dialog"],
            },
          ],
          ["aria-hidden", { type: "boolean", allowundefined: !0 }],
          [
            "aria-invalid",
            { type: "token", values: ["grammar", !1, "spelling", !0] },
          ],
          ["aria-keyshortcuts", { type: "string" }],
          ["aria-label", { type: "string" }],
          ["aria-labelledby", { type: "idlist" }],
          ["aria-level", { type: "integer" }],
          [
            "aria-live",
            { type: "token", values: ["assertive", "off", "polite"] },
          ],
          ["aria-modal", { type: "boolean" }],
          ["aria-multiline", { type: "boolean" }],
          ["aria-multiselectable", { type: "boolean" }],
          [
            "aria-orientation",
            { type: "token", values: ["vertical", "undefined", "horizontal"] },
          ],
          ["aria-owns", { type: "idlist" }],
          ["aria-placeholder", { type: "string" }],
          ["aria-posinset", { type: "integer" }],
          ["aria-pressed", { type: "tristate" }],
          ["aria-readonly", { type: "boolean" }],
          [
            "aria-relevant",
            {
              type: "tokenlist",
              values: ["additions", "all", "removals", "text"],
            },
          ],
          ["aria-required", { type: "boolean" }],
          ["aria-roledescription", { type: "string" }],
          ["aria-rowcount", { type: "integer" }],
          ["aria-rowindex", { type: "integer" }],
          ["aria-rowspan", { type: "integer" }],
          ["aria-selected", { type: "boolean", allowundefined: !0 }],
          ["aria-setsize", { type: "integer" }],
          [
            "aria-sort",
            {
              type: "token",
              values: ["ascending", "descending", "none", "other"],
            },
          ],
          ["aria-valuemax", { type: "number" }],
          ["aria-valuemin", { type: "number" }],
          ["aria-valuenow", { type: "number" }],
          ["aria-valuetext", { type: "string" }],
        ]);
        t.default = a;
      },
      7549: (e, t, r) => {
        "use strict";
        var n = r(530);
        r(3978)(t, "__esModule", { value: !0 }), (t.default = void 0);
        var a = new (n(r(9392)).default)([
          ["a", { reserved: !1 }],
          ["abbr", { reserved: !1 }],
          ["acronym", { reserved: !1 }],
          ["address", { reserved: !1 }],
          ["applet", { reserved: !1 }],
          ["area", { reserved: !1 }],
          ["article", { reserved: !1 }],
          ["aside", { reserved: !1 }],
          ["audio", { reserved: !1 }],
          ["b", { reserved: !1 }],
          ["base", { reserved: !0 }],
          ["bdi", { reserved: !1 }],
          ["bdo", { reserved: !1 }],
          ["big", { reserved: !1 }],
          ["blink", { reserved: !1 }],
          ["blockquote", { reserved: !1 }],
          ["body", { reserved: !1 }],
          ["br", { reserved: !1 }],
          ["button", { reserved: !1 }],
          ["canvas", { reserved: !1 }],
          ["caption", { reserved: !1 }],
          ["center", { reserved: !1 }],
          ["cite", { reserved: !1 }],
          ["code", { reserved: !1 }],
          ["col", { reserved: !0 }],
          ["colgroup", { reserved: !0 }],
          ["content", { reserved: !1 }],
          ["data", { reserved: !1 }],
          ["datalist", { reserved: !1 }],
          ["dd", { reserved: !1 }],
          ["del", { reserved: !1 }],
          ["details", { reserved: !1 }],
          ["dfn", { reserved: !1 }],
          ["dialog", { reserved: !1 }],
          ["dir", { reserved: !1 }],
          ["div", { reserved: !1 }],
          ["dl", { reserved: !1 }],
          ["dt", { reserved: !1 }],
          ["em", { reserved: !1 }],
          ["embed", { reserved: !1 }],
          ["fieldset", { reserved: !1 }],
          ["figcaption", { reserved: !1 }],
          ["figure", { reserved: !1 }],
          ["font", { reserved: !1 }],
          ["footer", { reserved: !1 }],
          ["form", { reserved: !1 }],
          ["frame", { reserved: !1 }],
          ["frameset", { reserved: !1 }],
          ["h1", { reserved: !1 }],
          ["h2", { reserved: !1 }],
          ["h3", { reserved: !1 }],
          ["h4", { reserved: !1 }],
          ["h5", { reserved: !1 }],
          ["h6", { reserved: !1 }],
          ["head", { reserved: !0 }],
          ["header", { reserved: !1 }],
          ["hgroup", { reserved: !1 }],
          ["hr", { reserved: !1 }],
          ["html", { reserved: !0 }],
          ["i", { reserved: !1 }],
          ["iframe", { reserved: !1 }],
          ["img", { reserved: !1 }],
          ["input", { reserved: !1 }],
          ["ins", { reserved: !1 }],
          ["kbd", { reserved: !1 }],
          ["keygen", { reserved: !1 }],
          ["label", { reserved: !1 }],
          ["legend", { reserved: !1 }],
          ["li", { reserved: !1 }],
          ["link", { reserved: !0 }],
          ["main", { reserved: !1 }],
          ["map", { reserved: !1 }],
          ["mark", { reserved: !1 }],
          ["marquee", { reserved: !1 }],
          ["menu", { reserved: !1 }],
          ["menuitem", { reserved: !1 }],
          ["meta", { reserved: !0 }],
          ["meter", { reserved: !1 }],
          ["nav", { reserved: !1 }],
          ["noembed", { reserved: !0 }],
          ["noscript", { reserved: !0 }],
          ["object", { reserved: !1 }],
          ["ol", { reserved: !1 }],
          ["optgroup", { reserved: !1 }],
          ["option", { reserved: !1 }],
          ["output", { reserved: !1 }],
          ["p", { reserved: !1 }],
          ["param", { reserved: !0 }],
          ["picture", { reserved: !0 }],
          ["pre", { reserved: !1 }],
          ["progress", { reserved: !1 }],
          ["q", { reserved: !1 }],
          ["rp", { reserved: !1 }],
          ["rt", { reserved: !1 }],
          ["rtc", { reserved: !1 }],
          ["ruby", { reserved: !1 }],
          ["s", { reserved: !1 }],
          ["samp", { reserved: !1 }],
          ["script", { reserved: !0 }],
          ["section", { reserved: !1 }],
          ["select", { reserved: !1 }],
          ["small", { reserved: !1 }],
          ["source", { reserved: !0 }],
          ["spacer", { reserved: !1 }],
          ["span", { reserved: !1 }],
          ["strike", { reserved: !1 }],
          ["strong", { reserved: !1 }],
          ["style", { reserved: !0 }],
          ["sub", { reserved: !1 }],
          ["summary", { reserved: !1 }],
          ["sup", { reserved: !1 }],
          ["table", { reserved: !1 }],
          ["tbody", { reserved: !1 }],
          ["td", { reserved: !1 }],
          ["textarea", { reserved: !1 }],
          ["tfoot", { reserved: !1 }],
          ["th", { reserved: !1 }],
          ["thead", { reserved: !1 }],
          ["time", { reserved: !1 }],
          ["title", { reserved: !0 }],
          ["tr", { reserved: !1 }],
          ["track", { reserved: !0 }],
          ["tt", { reserved: !1 }],
          ["u", { reserved: !1 }],
          ["ul", { reserved: !1 }],
          ["var", { reserved: !1 }],
          ["video", { reserved: !1 }],
          ["wbr", { reserved: !1 }],
          ["xmp", { reserved: !1 }],
        ]);
        t.default = a;
      },
      3217: (e, t, r) => {
        "use strict";
        var n = r(530);
        r(3978)(t, "__esModule", { value: !0 }), (t.default = void 0);
        var a,
          o = n(r(6384)),
          i = n(r(8777)),
          l = n(r(2119)),
          u = n(r(4473)),
          s = n(r(9340)),
          c = n(r(7766)),
          d = n(r(9301)),
          p = n(r(9036)),
          f = n(r(8914)),
          m = n(r(9392)),
          h = n(r(3913)),
          v = new m.default([]);
        (0, f.default)(
          (a = (0, p.default)((0, d.default)(h.default).call(h.default)))
        ).call(a, function (e) {
          var t,
            r,
            n = h.default.get(e);
          n &&
            (0, f.default)(
              (t = (0, c.default)((r = [])).call(
                r,
                (0, p.default)(n.baseConcepts),
                (0, p.default)(n.relatedConcepts)
              ))
            ).call(t, function (t) {
              if ("HTML" === t.module) {
                var r = t.concept;
                if (r) {
                  var n,
                    a = (0, s.default)(r),
                    c = ((0, u.default)(
                      (n = (0, p.default)((0, l.default)(v).call(v)))
                    ).call(n, function (e) {
                      var t = (0, i.default)(e, 2),
                        r = t[0];
                      return t[1], (0, s.default)(r) === a;
                    }) || [])[1];
                  c || (c = new o.default([])), c.add(e), v.set(r, c);
                }
              }
            });
        });
        var b = v;
        t.default = b;
      },
      4329: (e, t, r) => {
        "use strict";
        r(3978)(t, "__esModule", { value: !0 }), (t.default = void 0);
        t.default = {
          abstract: !0,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [{ concept: { name: "menuitem" }, module: "HTML" }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "widget"]],
        };
      },
      1185: (e, t, r) => {
        "use strict";
        r(3978)(t, "__esModule", { value: !0 }), (t.default = void 0);
        t.default = {
          abstract: !0,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: { "aria-activedescendant": null, "aria-disabled": null },
          relatedConcepts: [],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "widget"]],
        };
      },
      8173: (e, t, r) => {
        "use strict";
        r(3978)(t, "__esModule", { value: !0 }), (t.default = void 0);
        t.default = {
          abstract: !0,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: { "aria-disabled": null },
          relatedConcepts: [{ concept: { name: "input" }, module: "XForms" }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "widget"]],
        };
      },
      2328: (e, t, r) => {
        "use strict";
        r(3978)(t, "__esModule", { value: !0 }), (t.default = void 0);
        t.default = {
          abstract: !0,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "structure", "section"]],
        };
      },
      6238: (e, t, r) => {
        "use strict";
        r(3978)(t, "__esModule", { value: !0 }), (t.default = void 0);
        t.default = {
          abstract: !0,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: {
            "aria-valuemax": null,
            "aria-valuemin": null,
            "aria-valuenow": null,
            "aria-valuetext": null,
          },
          relatedConcepts: [],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "structure"]],
        };
      },
      6678: (e, t, r) => {
        "use strict";
        r(3978)(t, "__esModule", { value: !0 }), (t.default = void 0);
        t.default = {
          abstract: !0,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: [],
          prohibitedProps: [],
          props: {
            "aria-atomic": null,
            "aria-busy": null,
            "aria-controls": null,
            "aria-current": null,
            "aria-describedby": null,
            "aria-details": null,
            "aria-dropeffect": null,
            "aria-flowto": null,
            "aria-grabbed": null,
            "aria-hidden": null,
            "aria-keyshortcuts": null,
            "aria-label": null,
            "aria-labelledby": null,
            "aria-live": null,
            "aria-owns": null,
            "aria-relevant": null,
            "aria-roledescription": null,
          },
          relatedConcepts: [
            { concept: { name: "rel" }, module: "HTML" },
            { concept: { name: "role" }, module: "XHTML" },
            { concept: { name: "type" }, module: "Dublin Core" },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [],
        };
      },
      4799: (e, t, r) => {
        "use strict";
        r(3978)(t, "__esModule", { value: !0 }), (t.default = void 0);
        t.default = {
          abstract: !0,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: [],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [
            { concept: { name: "frontmatter" }, module: "DTB" },
            { concept: { name: "level" }, module: "DTB" },
            { concept: { name: "level" }, module: "SMIL" },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "structure"]],
        };
      },
      1656: (e, t, r) => {
        "use strict";
        r(3978)(t, "__esModule", { value: !0 }), (t.default = void 0);
        t.default = {
          abstract: !0,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author", "contents"],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "structure"]],
        };
      },
      1804: (e, t, r) => {
        "use strict";
        r(3978)(t, "__esModule", { value: !0 }), (t.default = void 0);
        t.default = {
          abstract: !0,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: { "aria-orientation": null },
          relatedConcepts: [],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [
            ["roletype", "widget", "composite"],
            ["roletype", "structure", "section", "group"],
          ],
        };
      },
      520: (e, t, r) => {
        "use strict";
        r(3978)(t, "__esModule", { value: !0 }), (t.default = void 0);
        t.default = {
          abstract: !0,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: [],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype"]],
        };
      },
      8733: (e, t, r) => {
        "use strict";
        r(3978)(t, "__esModule", { value: !0 }), (t.default = void 0);
        t.default = {
          abstract: !0,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: [],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype"]],
        };
      },
      47: (e, t, r) => {
        "use strict";
        r(3978)(t, "__esModule", { value: !0 }), (t.default = void 0);
        t.default = {
          abstract: !0,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: { "aria-modal": null },
          relatedConcepts: [],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype"]],
        };
      },
      6138: (e, t, r) => {
        "use strict";
        var n = r(530);
        r(3978)(t, "__esModule", { value: !0 }), (t.default = void 0);
        var a = n(r(9392)),
          o = n(r(4329)),
          i = n(r(1185)),
          l = n(r(8173)),
          u = n(r(2328)),
          s = n(r(6238)),
          c = n(r(6678)),
          d = n(r(4799)),
          p = n(r(1656)),
          f = n(r(1804)),
          m = n(r(520)),
          h = n(r(8733)),
          v = n(r(47)),
          b = new a.default([
            ["command", o.default],
            ["composite", i.default],
            ["input", l.default],
            ["landmark", u.default],
            ["range", s.default],
            ["roletype", c.default],
            ["section", d.default],
            ["sectionhead", p.default],
            ["select", f.default],
            ["structure", m.default],
            ["widget", h.default],
            ["window", v.default],
          ]);
        t.default = b;
      },
      5302: (e, t, r) => {
        "use strict";
        var n = r(530);
        r(3978)(t, "__esModule", { value: !0 }), (t.default = void 0);
        var a = n(r(9392)),
          o = n(r(481)),
          i = n(r(5410)),
          l = n(r(3821)),
          u = n(r(2222)),
          s = n(r(5493)),
          c = n(r(7507)),
          d = n(r(1410)),
          p = n(r(3456)),
          f = n(r(3881)),
          m = n(r(8642)),
          h = n(r(8556)),
          v = n(r(945)),
          b = n(r(4658)),
          y = n(r(244)),
          g = n(r(212)),
          w = n(r(1111)),
          x = n(r(7171)),
          E = n(r(4552)),
          _ = n(r(8373)),
          C = n(r(711)),
          k = n(r(3612)),
          P = n(r(6909)),
          S = n(r(6361)),
          q = n(r(745)),
          R = n(r(6871)),
          T = n(r(3035)),
          O = n(r(6498)),
          M = n(r(7364)),
          N = n(r(6589)),
          I = n(r(4216)),
          L = n(r(386)),
          A = n(r(2554)),
          F = n(r(5885)),
          j = n(r(2186)),
          D = n(r(805)),
          U = n(r(3135)),
          B = n(r(4174)),
          z = n(r(5436)),
          H = n(r(3535)),
          V = new a.default([
            ["doc-abstract", o.default],
            ["doc-acknowledgments", i.default],
            ["doc-afterword", l.default],
            ["doc-appendix", u.default],
            ["doc-backlink", s.default],
            ["doc-biblioentry", c.default],
            ["doc-bibliography", d.default],
            ["doc-biblioref", p.default],
            ["doc-chapter", f.default],
            ["doc-colophon", m.default],
            ["doc-conclusion", h.default],
            ["doc-cover", v.default],
            ["doc-credit", b.default],
            ["doc-credits", y.default],
            ["doc-dedication", g.default],
            ["doc-endnote", w.default],
            ["doc-endnotes", x.default],
            ["doc-epigraph", E.default],
            ["doc-epilogue", _.default],
            ["doc-errata", C.default],
            ["doc-example", k.default],
            ["doc-footnote", P.default],
            ["doc-foreword", S.default],
            ["doc-glossary", q.default],
            ["doc-glossref", R.default],
            ["doc-index", T.default],
            ["doc-introduction", O.default],
            ["doc-noteref", M.default],
            ["doc-notice", N.default],
            ["doc-pagebreak", I.default],
            ["doc-pagelist", L.default],
            ["doc-part", A.default],
            ["doc-preface", F.default],
            ["doc-prologue", j.default],
            ["doc-pullquote", D.default],
            ["doc-qna", U.default],
            ["doc-subtitle", B.default],
            ["doc-tip", z.default],
            ["doc-toc", H.default],
          ]);
        t.default = V;
      },
      9081: (e, t, r) => {
        "use strict";
        var n = r(530);
        r(3978)(t, "__esModule", { value: !0 }), (t.default = void 0);
        var a = n(r(9392)),
          o = n(r(3737)),
          i = n(r(1412)),
          l = n(r(968)),
          u = n(r(8466)),
          s = n(r(8496)),
          c = n(r(2540)),
          d = n(r(34)),
          p = n(r(589)),
          f = n(r(981)),
          m = n(r(7064)),
          h = n(r(9882)),
          v = n(r(948)),
          b = n(r(4978)),
          y = n(r(6246)),
          g = n(r(8844)),
          w = n(r(1463)),
          x = n(r(9174)),
          E = n(r(8422)),
          _ = n(r(2686)),
          C = n(r(3477)),
          k = n(r(7089)),
          P = n(r(949)),
          S = n(r(5e3)),
          q = n(r(3204)),
          R = n(r(6481)),
          T = n(r(9782)),
          O = n(r(6974)),
          M = n(r(8458)),
          N = n(r(2589)),
          I = n(r(4046)),
          L = n(r(8186)),
          A = n(r(2339)),
          F = n(r(5448)),
          j = n(r(7297)),
          D = n(r(2573)),
          U = n(r(397)),
          B = n(r(7116)),
          z = n(r(6718)),
          H = n(r(8581)),
          V = n(r(3874)),
          $ = n(r(5880)),
          W = n(r(1549)),
          Y = n(r(4092)),
          G = n(r(7305)),
          Q = n(r(1216)),
          K = n(r(5344)),
          X = n(r(6541)),
          J = n(r(9845)),
          Z = n(r(4955)),
          ee = n(r(3289)),
          te = n(r(3721)),
          re = n(r(6669)),
          ne = n(r(3855)),
          ae = n(r(5715)),
          oe = n(r(7397)),
          ie = n(r(3046)),
          le = n(r(8666)),
          ue = n(r(2544)),
          se = n(r(4064)),
          ce = n(r(5722)),
          de = n(r(9983)),
          pe = n(r(2646)),
          fe = n(r(4208)),
          me = n(r(6368)),
          he = n(r(8706)),
          ve = n(r(7575)),
          be = n(r(4357)),
          ye = n(r(5957)),
          ge = n(r(8917)),
          we = n(r(8743)),
          xe = n(r(1053)),
          Ee = n(r(1599)),
          _e = n(r(3193)),
          Ce = n(r(4665)),
          ke = n(r(221)),
          Pe = n(r(5313)),
          Se = n(r(1777)),
          qe = n(r(3316)),
          Re = n(r(9304)),
          Te = n(r(3538)),
          Oe = n(r(5627)),
          Me = n(r(8425)),
          Ne = new a.default([
            ["alert", o.default],
            ["alertdialog", i.default],
            ["application", l.default],
            ["article", u.default],
            ["banner", s.default],
            ["blockquote", c.default],
            ["button", d.default],
            ["caption", p.default],
            ["cell", f.default],
            ["checkbox", m.default],
            ["code", h.default],
            ["columnheader", v.default],
            ["combobox", b.default],
            ["complementary", y.default],
            ["contentinfo", g.default],
            ["definition", w.default],
            ["deletion", x.default],
            ["dialog", E.default],
            ["directory", _.default],
            ["document", C.default],
            ["emphasis", k.default],
            ["feed", P.default],
            ["figure", S.default],
            ["form", q.default],
            ["generic", R.default],
            ["grid", T.default],
            ["gridcell", O.default],
            ["group", M.default],
            ["heading", N.default],
            ["img", I.default],
            ["insertion", L.default],
            ["link", A.default],
            ["list", F.default],
            ["listbox", j.default],
            ["listitem", D.default],
            ["log", U.default],
            ["main", B.default],
            ["marquee", z.default],
            ["math", H.default],
            ["menu", V.default],
            ["menubar", $.default],
            ["menuitem", W.default],
            ["menuitemcheckbox", Y.default],
            ["menuitemradio", G.default],
            ["meter", Q.default],
            ["navigation", K.default],
            ["none", X.default],
            ["note", J.default],
            ["option", Z.default],
            ["paragraph", ee.default],
            ["presentation", te.default],
            ["progressbar", re.default],
            ["radio", ne.default],
            ["radiogroup", ae.default],
            ["region", oe.default],
            ["row", ie.default],
            ["rowgroup", le.default],
            ["rowheader", ue.default],
            ["scrollbar", se.default],
            ["search", ce.default],
            ["searchbox", de.default],
            ["separator", pe.default],
            ["slider", fe.default],
            ["spinbutton", me.default],
            ["status", he.default],
            ["strong", ve.default],
            ["subscript", be.default],
            ["superscript", ye.default],
            ["switch", ge.default],
            ["tab", we.default],
            ["table", xe.default],
            ["tablist", Ee.default],
            ["tabpanel", _e.default],
            ["term", Ce.default],
            ["textbox", ke.default],
            ["time", Pe.default],
            ["timer", Se.default],
            ["toolbar", qe.default],
            ["tooltip", Re.default],
            ["tree", Te.default],
            ["treegrid", Oe.default],
            ["treeitem", Me.default],
          ]);
        t.default = Ne;
      },
      481: (e, t, r) => {
        "use strict";
        r(3978)(t, "__esModule", { value: !0 }), (t.default = void 0);
        t.default = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: {
            "aria-disabled": null,
            "aria-errormessage": null,
            "aria-expanded": null,
            "aria-haspopup": null,
            "aria-invalid": null,
          },
          relatedConcepts: [
            { concept: { name: "abstract [EPUB-SSV]" }, module: "EPUB" },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "structure", "section"]],
        };
      },
      5410: (e, t, r) => {
        "use strict";
        r(3978)(t, "__esModule", { value: !0 }), (t.default = void 0);
        t.default = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: {
            "aria-disabled": null,
            "aria-errormessage": null,
            "aria-expanded": null,
            "aria-haspopup": null,
            "aria-invalid": null,
          },
          relatedConcepts: [
            { concept: { name: "acknowledgments [EPUB-SSV]" }, module: "EPUB" },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "structure", "section", "landmark"]],
        };
      },
      3821: (e, t, r) => {
        "use strict";
        r(3978)(t, "__esModule", { value: !0 }), (t.default = void 0);
        t.default = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: {
            "aria-disabled": null,
            "aria-errormessage": null,
            "aria-expanded": null,
            "aria-haspopup": null,
            "aria-invalid": null,
          },
          relatedConcepts: [
            { concept: { name: "afterword [EPUB-SSV]" }, module: "EPUB" },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "structure", "section", "landmark"]],
        };
      },
      2222: (e, t, r) => {
        "use strict";
        r(3978)(t, "__esModule", { value: !0 }), (t.default = void 0);
        t.default = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: {
            "aria-disabled": null,
            "aria-errormessage": null,
            "aria-expanded": null,
            "aria-haspopup": null,
            "aria-invalid": null,
          },
          relatedConcepts: [
            { concept: { name: "appendix [EPUB-SSV]" }, module: "EPUB" },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "structure", "section", "landmark"]],
        };
      },
      5493: (e, t, r) => {
        "use strict";
        r(3978)(t, "__esModule", { value: !0 }), (t.default = void 0);
        t.default = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author", "content"],
          prohibitedProps: [],
          props: {
            "aria-errormessage": null,
            "aria-haspopup": null,
            "aria-invalid": null,
          },
          relatedConcepts: [
            { concept: { name: "referrer [EPUB-SSV]" }, module: "EPUB" },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "widget", "command", "link"]],
        };
      },
      7507: (e, t, r) => {
        "use strict";
        r(3978)(t, "__esModule", { value: !0 }), (t.default = void 0);
        t.default = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: {
            "aria-disabled": null,
            "aria-errormessage": null,
            "aria-expanded": null,
            "aria-haspopup": null,
            "aria-invalid": null,
          },
          relatedConcepts: [
            {
              concept: { name: "EPUB biblioentry [EPUB-SSV]" },
              module: "EPUB",
            },
          ],
          requireContextRole: ["doc-bibliography"],
          requiredContextRole: ["doc-bibliography"],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "structure", "section", "listitem"]],
        };
      },
      1410: (e, t, r) => {
        "use strict";
        r(3978)(t, "__esModule", { value: !0 }), (t.default = void 0);
        t.default = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: {
            "aria-disabled": null,
            "aria-errormessage": null,
            "aria-expanded": null,
            "aria-haspopup": null,
            "aria-invalid": null,
          },
          relatedConcepts: [
            { concept: { name: "bibliography [EPUB-SSV]" }, module: "EPUB" },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [["doc-biblioentry"]],
          requiredProps: {},
          superClass: [["roletype", "structure", "section", "landmark"]],
        };
      },
      3456: (e, t, r) => {
        "use strict";
        r(3978)(t, "__esModule", { value: !0 }), (t.default = void 0);
        t.default = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author", "contents"],
          prohibitedProps: [],
          props: {
            "aria-errormessage": null,
            "aria-haspopup": null,
            "aria-invalid": null,
          },
          relatedConcepts: [
            { concept: { name: "biblioref [EPUB-SSV]" }, module: "EPUB" },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "widget", "command", "link"]],
        };
      },
      3881: (e, t, r) => {
        "use strict";
        r(3978)(t, "__esModule", { value: !0 }), (t.default = void 0);
        t.default = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: {
            "aria-disabled": null,
            "aria-errormessage": null,
            "aria-expanded": null,
            "aria-haspopup": null,
            "aria-invalid": null,
          },
          relatedConcepts: [
            { concept: { name: "chapter [EPUB-SSV]" }, module: "EPUB" },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "structure", "section", "landmark"]],
        };
      },
      8642: (e, t, r) => {
        "use strict";
        r(3978)(t, "__esModule", { value: !0 }), (t.default = void 0);
        t.default = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: {
            "aria-disabled": null,
            "aria-errormessage": null,
            "aria-expanded": null,
            "aria-haspopup": null,
            "aria-invalid": null,
          },
          relatedConcepts: [
            { concept: { name: "colophon [EPUB-SSV]" }, module: "EPUB" },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "structure", "section"]],
        };
      },
      8556: (e, t, r) => {
        "use strict";
        r(3978)(t, "__esModule", { value: !0 }), (t.default = void 0);
        t.default = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: {
            "aria-disabled": null,
            "aria-errormessage": null,
            "aria-expanded": null,
            "aria-haspopup": null,
            "aria-invalid": null,
          },
          relatedConcepts: [
            { concept: { name: "conclusion [EPUB-SSV]" }, module: "EPUB" },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "structure", "section", "landmark"]],
        };
      },
      945: (e, t, r) => {
        "use strict";
        r(3978)(t, "__esModule", { value: !0 }), (t.default = void 0);
        t.default = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: {
            "aria-disabled": null,
            "aria-errormessage": null,
            "aria-expanded": null,
            "aria-haspopup": null,
            "aria-invalid": null,
          },
          relatedConcepts: [
            { concept: { name: "cover [EPUB-SSV]" }, module: "EPUB" },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "structure", "section", "img"]],
        };
      },
      4658: (e, t, r) => {
        "use strict";
        r(3978)(t, "__esModule", { value: !0 }), (t.default = void 0);
        t.default = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: {
            "aria-disabled": null,
            "aria-errormessage": null,
            "aria-expanded": null,
            "aria-haspopup": null,
            "aria-invalid": null,
          },
          relatedConcepts: [
            { concept: { name: "credit [EPUB-SSV]" }, module: "EPUB" },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "structure", "section"]],
        };
      },
      244: (e, t, r) => {
        "use strict";
        r(3978)(t, "__esModule", { value: !0 }), (t.default = void 0);
        t.default = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: {
            "aria-disabled": null,
            "aria-errormessage": null,
            "aria-expanded": null,
            "aria-haspopup": null,
            "aria-invalid": null,
          },
          relatedConcepts: [
            { concept: { name: "credits [EPUB-SSV]" }, module: "EPUB" },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "structure", "section", "landmark"]],
        };
      },
      212: (e, t, r) => {
        "use strict";
        r(3978)(t, "__esModule", { value: !0 }), (t.default = void 0);
        t.default = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: {
            "aria-disabled": null,
            "aria-errormessage": null,
            "aria-expanded": null,
            "aria-haspopup": null,
            "aria-invalid": null,
          },
          relatedConcepts: [
            { concept: { name: "dedication [EPUB-SSV]" }, module: "EPUB" },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "structure", "section"]],
        };
      },
      1111: (e, t, r) => {
        "use strict";
        r(3978)(t, "__esModule", { value: !0 }), (t.default = void 0);
        t.default = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: {
            "aria-disabled": null,
            "aria-errormessage": null,
            "aria-expanded": null,
            "aria-haspopup": null,
            "aria-invalid": null,
          },
          relatedConcepts: [
            { concept: { name: "rearnote [EPUB-SSV]" }, module: "EPUB" },
          ],
          requireContextRole: ["doc-endnotes"],
          requiredContextRole: ["doc-endnotes"],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "structure", "section", "listitem"]],
        };
      },
      7171: (e, t, r) => {
        "use strict";
        r(3978)(t, "__esModule", { value: !0 }), (t.default = void 0);
        t.default = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: {
            "aria-disabled": null,
            "aria-errormessage": null,
            "aria-expanded": null,
            "aria-haspopup": null,
            "aria-invalid": null,
          },
          relatedConcepts: [
            { concept: { name: "rearnotes [EPUB-SSV]" }, module: "EPUB" },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [["doc-endnote"]],
          requiredProps: {},
          superClass: [["roletype", "structure", "section", "landmark"]],
        };
      },
      4552: (e, t, r) => {
        "use strict";
        r(3978)(t, "__esModule", { value: !0 }), (t.default = void 0);
        t.default = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: {
            "aria-disabled": null,
            "aria-errormessage": null,
            "aria-expanded": null,
            "aria-haspopup": null,
            "aria-invalid": null,
          },
          relatedConcepts: [
            { concept: { name: "epigraph [EPUB-SSV]" }, module: "EPUB" },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "structure", "section"]],
        };
      },
      8373: (e, t, r) => {
        "use strict";
        r(3978)(t, "__esModule", { value: !0 }), (t.default = void 0);
        t.default = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: {
            "aria-disabled": null,
            "aria-errormessage": null,
            "aria-expanded": null,
            "aria-haspopup": null,
            "aria-invalid": null,
          },
          relatedConcepts: [
            { concept: { name: "epilogue [EPUB-SSV]" }, module: "EPUB" },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "structure", "section", "landmark"]],
        };
      },
      711: (e, t, r) => {
        "use strict";
        r(3978)(t, "__esModule", { value: !0 }), (t.default = void 0);
        t.default = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: {
            "aria-disabled": null,
            "aria-errormessage": null,
            "aria-expanded": null,
            "aria-haspopup": null,
            "aria-invalid": null,
          },
          relatedConcepts: [
            { concept: { name: "errata [EPUB-SSV]" }, module: "EPUB" },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "structure", "section", "landmark"]],
        };
      },
      3612: (e, t, r) => {
        "use strict";
        r(3978)(t, "__esModule", { value: !0 }), (t.default = void 0);
        t.default = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: {
            "aria-disabled": null,
            "aria-errormessage": null,
            "aria-expanded": null,
            "aria-haspopup": null,
            "aria-invalid": null,
          },
          relatedConcepts: [],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "structure", "section"]],
        };
      },
      6909: (e, t, r) => {
        "use strict";
        r(3978)(t, "__esModule", { value: !0 }), (t.default = void 0);
        t.default = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: {
            "aria-disabled": null,
            "aria-errormessage": null,
            "aria-expanded": null,
            "aria-haspopup": null,
            "aria-invalid": null,
          },
          relatedConcepts: [
            { concept: { name: "footnote [EPUB-SSV]" }, module: "EPUB" },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "structure", "section"]],
        };
      },
      6361: (e, t, r) => {
        "use strict";
        r(3978)(t, "__esModule", { value: !0 }), (t.default = void 0);
        t.default = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: {
            "aria-disabled": null,
            "aria-errormessage": null,
            "aria-expanded": null,
            "aria-haspopup": null,
            "aria-invalid": null,
          },
          relatedConcepts: [
            { concept: { name: "foreword [EPUB-SSV]" }, module: "EPUB" },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "structure", "section", "landmark"]],
        };
      },
      745: (e, t, r) => {
        "use strict";
        r(3978)(t, "__esModule", { value: !0 }), (t.default = void 0);
        t.default = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: {
            "aria-disabled": null,
            "aria-errormessage": null,
            "aria-expanded": null,
            "aria-haspopup": null,
            "aria-invalid": null,
          },
          relatedConcepts: [
            { concept: { name: "glossary [EPUB-SSV]" }, module: "EPUB" },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [["definition"], ["term"]],
          requiredProps: {},
          superClass: [["roletype", "structure", "section", "landmark"]],
        };
      },
      6871: (e, t, r) => {
        "use strict";
        r(3978)(t, "__esModule", { value: !0 }), (t.default = void 0);
        t.default = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author", "contents"],
          prohibitedProps: [],
          props: {
            "aria-errormessage": null,
            "aria-haspopup": null,
            "aria-invalid": null,
          },
          relatedConcepts: [
            { concept: { name: "glossref [EPUB-SSV]" }, module: "EPUB" },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "widget", "command", "link"]],
        };
      },
      3035: (e, t, r) => {
        "use strict";
        r(3978)(t, "__esModule", { value: !0 }), (t.default = void 0);
        t.default = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: {
            "aria-disabled": null,
            "aria-errormessage": null,
            "aria-expanded": null,
            "aria-haspopup": null,
            "aria-invalid": null,
          },
          relatedConcepts: [
            { concept: { name: "index [EPUB-SSV]" }, module: "EPUB" },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [
            ["roletype", "structure", "section", "landmark", "navigation"],
          ],
        };
      },
      6498: (e, t, r) => {
        "use strict";
        r(3978)(t, "__esModule", { value: !0 }), (t.default = void 0);
        t.default = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: {
            "aria-disabled": null,
            "aria-errormessage": null,
            "aria-expanded": null,
            "aria-haspopup": null,
            "aria-invalid": null,
          },
          relatedConcepts: [
            { concept: { name: "introduction [EPUB-SSV]" }, module: "EPUB" },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "structure", "section", "landmark"]],
        };
      },
      7364: (e, t, r) => {
        "use strict";
        r(3978)(t, "__esModule", { value: !0 }), (t.default = void 0);
        t.default = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author", "contents"],
          prohibitedProps: [],
          props: {
            "aria-errormessage": null,
            "aria-haspopup": null,
            "aria-invalid": null,
          },
          relatedConcepts: [
            { concept: { name: "noteref [EPUB-SSV]" }, module: "EPUB" },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "widget", "command", "link"]],
        };
      },
      6589: (e, t, r) => {
        "use strict";
        r(3978)(t, "__esModule", { value: !0 }), (t.default = void 0);
        t.default = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: {
            "aria-disabled": null,
            "aria-errormessage": null,
            "aria-expanded": null,
            "aria-haspopup": null,
            "aria-invalid": null,
          },
          relatedConcepts: [
            { concept: { name: "notice [EPUB-SSV]" }, module: "EPUB" },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "structure", "section", "note"]],
        };
      },
      4216: (e, t, r) => {
        "use strict";
        r(3978)(t, "__esModule", { value: !0 }), (t.default = void 0);
        t.default = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !0,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: {
            "aria-errormessage": null,
            "aria-expanded": null,
            "aria-haspopup": null,
            "aria-invalid": null,
          },
          relatedConcepts: [
            { concept: { name: "pagebreak [EPUB-SSV]" }, module: "EPUB" },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "structure", "separator"]],
        };
      },
      386: (e, t, r) => {
        "use strict";
        r(3978)(t, "__esModule", { value: !0 }), (t.default = void 0);
        t.default = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: {
            "aria-disabled": null,
            "aria-errormessage": null,
            "aria-expanded": null,
            "aria-haspopup": null,
            "aria-invalid": null,
          },
          relatedConcepts: [
            { concept: { name: "page-list [EPUB-SSV]" }, module: "EPUB" },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [
            ["roletype", "structure", "section", "landmark", "navigation"],
          ],
        };
      },
      2554: (e, t, r) => {
        "use strict";
        r(3978)(t, "__esModule", { value: !0 }), (t.default = void 0);
        t.default = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: {
            "aria-disabled": null,
            "aria-errormessage": null,
            "aria-expanded": null,
            "aria-haspopup": null,
            "aria-invalid": null,
          },
          relatedConcepts: [
            { concept: { name: "part [EPUB-SSV]" }, module: "EPUB" },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "structure", "section", "landmark"]],
        };
      },
      5885: (e, t, r) => {
        "use strict";
        r(3978)(t, "__esModule", { value: !0 }), (t.default = void 0);
        t.default = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: {
            "aria-disabled": null,
            "aria-errormessage": null,
            "aria-expanded": null,
            "aria-haspopup": null,
            "aria-invalid": null,
          },
          relatedConcepts: [
            { concept: { name: "preface [EPUB-SSV]" }, module: "EPUB" },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "structure", "section", "landmark"]],
        };
      },
      2186: (e, t, r) => {
        "use strict";
        r(3978)(t, "__esModule", { value: !0 }), (t.default = void 0);
        t.default = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: {
            "aria-disabled": null,
            "aria-errormessage": null,
            "aria-expanded": null,
            "aria-haspopup": null,
            "aria-invalid": null,
          },
          relatedConcepts: [
            { concept: { name: "prologue [EPUB-SSV]" }, module: "EPUB" },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "structure", "section", "landmark"]],
        };
      },
      805: (e, t, r) => {
        "use strict";
        r(3978)(t, "__esModule", { value: !0 }), (t.default = void 0);
        t.default = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [
            { concept: { name: "pullquote [EPUB-SSV]" }, module: "EPUB" },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["none"]],
        };
      },
      3135: (e, t, r) => {
        "use strict";
        r(3978)(t, "__esModule", { value: !0 }), (t.default = void 0);
        t.default = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: {
            "aria-disabled": null,
            "aria-errormessage": null,
            "aria-expanded": null,
            "aria-haspopup": null,
            "aria-invalid": null,
          },
          relatedConcepts: [
            { concept: { name: "qna [EPUB-SSV]" }, module: "EPUB" },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "structure", "section"]],
        };
      },
      4174: (e, t, r) => {
        "use strict";
        r(3978)(t, "__esModule", { value: !0 }), (t.default = void 0);
        t.default = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: {
            "aria-disabled": null,
            "aria-errormessage": null,
            "aria-expanded": null,
            "aria-haspopup": null,
            "aria-invalid": null,
          },
          relatedConcepts: [
            { concept: { name: "subtitle [EPUB-SSV]" }, module: "EPUB" },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "structure", "sectionhead"]],
        };
      },
      5436: (e, t, r) => {
        "use strict";
        r(3978)(t, "__esModule", { value: !0 }), (t.default = void 0);
        t.default = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: {
            "aria-disabled": null,
            "aria-errormessage": null,
            "aria-expanded": null,
            "aria-haspopup": null,
            "aria-invalid": null,
          },
          relatedConcepts: [
            { concept: { name: "help [EPUB-SSV]" }, module: "EPUB" },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "structure", "section", "note"]],
        };
      },
      3535: (e, t, r) => {
        "use strict";
        r(3978)(t, "__esModule", { value: !0 }), (t.default = void 0);
        t.default = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: {
            "aria-disabled": null,
            "aria-errormessage": null,
            "aria-expanded": null,
            "aria-haspopup": null,
            "aria-invalid": null,
          },
          relatedConcepts: [
            { concept: { name: "toc [EPUB-SSV]" }, module: "EPUB" },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [
            ["roletype", "structure", "section", "landmark", "navigation"],
          ],
        };
      },
      3737: (e, t, r) => {
        "use strict";
        r(3978)(t, "__esModule", { value: !0 }), (t.default = void 0);
        t.default = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: { "aria-atomic": "true", "aria-live": "assertive" },
          relatedConcepts: [{ concept: { name: "alert" }, module: "XForms" }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "structure", "section"]],
        };
      },
      1412: (e, t, r) => {
        "use strict";
        r(3978)(t, "__esModule", { value: !0 }), (t.default = void 0);
        t.default = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [{ concept: { name: "alert" }, module: "XForms" }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [
            ["roletype", "structure", "section", "alert"],
            ["roletype", "window", "dialog"],
          ],
        };
      },
      968: (e, t, r) => {
        "use strict";
        r(3978)(t, "__esModule", { value: !0 }), (t.default = void 0);
        t.default = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: {
            "aria-activedescendant": null,
            "aria-disabled": null,
            "aria-errormessage": null,
            "aria-expanded": null,
            "aria-haspopup": null,
            "aria-invalid": null,
          },
          relatedConcepts: [
            { concept: { name: "Device Independence Delivery Unit" } },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "structure"]],
        };
      },
      8466: (e, t, r) => {
        "use strict";
        r(3978)(t, "__esModule", { value: !0 }), (t.default = void 0);
        t.default = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: { "aria-posinset": null, "aria-setsize": null },
          relatedConcepts: [{ concept: { name: "article" }, module: "HTML" }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "structure", "document"]],
        };
      },
      8496: (e, t, r) => {
        "use strict";
        r(3978)(t, "__esModule", { value: !0 }), (t.default = void 0);
        t.default = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [
            {
              concept: {
                constraints: ["direct descendant of document"],
                name: "header",
              },
              module: "HTML",
            },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "structure", "section", "landmark"]],
        };
      },
      2540: (e, t, r) => {
        "use strict";
        r(3978)(t, "__esModule", { value: !0 }), (t.default = void 0);
        t.default = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "structure", "section"]],
        };
      },
      34: (e, t, r) => {
        "use strict";
        r(3978)(t, "__esModule", { value: !0 }), (t.default = void 0);
        t.default = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !0,
          nameFrom: ["author", "contents"],
          prohibitedProps: [],
          props: {
            "aria-disabled": null,
            "aria-expanded": null,
            "aria-haspopup": null,
            "aria-pressed": null,
          },
          relatedConcepts: [
            {
              concept: {
                attributes: [
                  { constraints: ["set"], name: "aria-pressed" },
                  { name: "type", value: "checkbox" },
                ],
                name: "input",
              },
              module: "HTML",
            },
            {
              concept: {
                attributes: [{ name: "aria-expanded", value: "false" }],
                name: "summary",
              },
              module: "HTML",
            },
            {
              concept: {
                attributes: [{ name: "aria-expanded", value: "true" }],
                constraints: [
                  "direct descendant of details element with the open attribute defined",
                ],
                name: "summary",
              },
              module: "HTML",
            },
            {
              concept: {
                attributes: [{ name: "type", value: "button" }],
                name: "input",
              },
              module: "HTML",
            },
            {
              concept: {
                attributes: [{ name: "type", value: "image" }],
                name: "input",
              },
              module: "HTML",
            },
            {
              concept: {
                attributes: [{ name: "type", value: "reset" }],
                name: "input",
              },
              module: "HTML",
            },
            {
              concept: {
                attributes: [{ name: "type", value: "submit" }],
                name: "input",
              },
              module: "HTML",
            },
            { concept: { name: "button" }, module: "HTML" },
            { concept: { name: "trigger" }, module: "XForms" },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "widget", "command"]],
        };
      },
      589: (e, t, r) => {
        "use strict";
        r(3978)(t, "__esModule", { value: !0 }), (t.default = void 0);
        t.default = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["prohibited"],
          prohibitedProps: ["aria-label", "aria-labelledby"],
          props: {},
          relatedConcepts: [],
          requireContextRole: ["figure", "grid", "table"],
          requiredContextRole: ["figure", "grid", "table"],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "structure", "section"]],
        };
      },
      981: (e, t, r) => {
        "use strict";
        r(3978)(t, "__esModule", { value: !0 }), (t.default = void 0);
        t.default = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author", "contents"],
          prohibitedProps: [],
          props: {
            "aria-colindex": null,
            "aria-colspan": null,
            "aria-rowindex": null,
            "aria-rowspan": null,
          },
          relatedConcepts: [
            {
              concept: { constraints: ["descendant of table"], name: "td" },
              module: "HTML",
            },
          ],
          requireContextRole: ["row"],
          requiredContextRole: ["row"],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "structure", "section"]],
        };
      },
      7064: (e, t, r) => {
        "use strict";
        r(3978)(t, "__esModule", { value: !0 }), (t.default = void 0);
        t.default = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !0,
          nameFrom: ["author", "contents"],
          prohibitedProps: [],
          props: {
            "aria-checked": null,
            "aria-errormessage": null,
            "aria-expanded": null,
            "aria-invalid": null,
            "aria-readonly": null,
            "aria-required": null,
          },
          relatedConcepts: [
            {
              concept: {
                attributes: [{ name: "type", value: "checkbox" }],
                name: "input",
              },
              module: "HTML",
            },
            { concept: { name: "option" }, module: "ARIA" },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: { "aria-checked": null },
          superClass: [["roletype", "widget", "input"]],
        };
      },
      9882: (e, t, r) => {
        "use strict";
        r(3978)(t, "__esModule", { value: !0 }), (t.default = void 0);
        t.default = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["prohibited"],
          prohibitedProps: ["aria-label", "aria-labelledby"],
          props: {},
          relatedConcepts: [],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "structure", "section"]],
        };
      },
      948: (e, t, r) => {
        "use strict";
        r(3978)(t, "__esModule", { value: !0 }), (t.default = void 0);
        t.default = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author", "contents"],
          prohibitedProps: [],
          props: { "aria-sort": null },
          relatedConcepts: [
            {
              attributes: [{ name: "scope", value: "col" }],
              concept: { name: "th" },
              module: "HTML",
            },
          ],
          requireContextRole: ["row"],
          requiredContextRole: ["row"],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [
            ["roletype", "structure", "section", "cell"],
            ["roletype", "structure", "section", "cell", "gridcell"],
            ["roletype", "widget", "gridcell"],
            ["roletype", "structure", "sectionhead"],
          ],
        };
      },
      4978: (e, t, r) => {
        "use strict";
        r(3978)(t, "__esModule", { value: !0 }), (t.default = void 0);
        t.default = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: {
            "aria-activedescendant": null,
            "aria-autocomplete": null,
            "aria-errormessage": null,
            "aria-invalid": null,
            "aria-readonly": null,
            "aria-required": null,
            "aria-expanded": "false",
            "aria-haspopup": "listbox",
          },
          relatedConcepts: [
            {
              concept: {
                attributes: [
                  { constraints: ["set"], name: "list" },
                  { name: "type", value: "email" },
                ],
                name: "input",
              },
              module: "HTML",
            },
            {
              concept: {
                attributes: [
                  { constraints: ["set"], name: "list" },
                  { name: "type", value: "search" },
                ],
                name: "input",
              },
              module: "HTML",
            },
            {
              concept: {
                attributes: [
                  { constraints: ["set"], name: "list" },
                  { name: "type", value: "tel" },
                ],
                name: "input",
              },
              module: "HTML",
            },
            {
              concept: {
                attributes: [
                  { constraints: ["set"], name: "list" },
                  { name: "type", value: "text" },
                ],
                name: "input",
              },
              module: "HTML",
            },
            {
              concept: {
                attributes: [
                  { constraints: ["set"], name: "list" },
                  { name: "type", value: "url" },
                ],
                name: "input",
              },
              module: "HTML",
            },
            {
              concept: {
                attributes: [
                  { constraints: ["set"], name: "list" },
                  { name: "type", value: "url" },
                ],
                name: "input",
              },
              module: "HTML",
            },
            {
              concept: {
                attributes: [
                  { constraints: ["undefined"], name: "multiple" },
                  { constraints: ["undefined"], name: "size" },
                ],
                name: "select",
              },
              module: "HTML",
            },
            {
              concept: {
                attributes: [
                  { constraints: ["undefined"], name: "multiple" },
                  { name: "size", value: 1 },
                ],
                name: "select",
              },
              module: "HTML",
            },
            { concept: { name: "select" }, module: "XForms" },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: { "aria-controls": null, "aria-expanded": "false" },
          superClass: [["roletype", "widget", "input"]],
        };
      },
      6246: (e, t, r) => {
        "use strict";
        r(3978)(t, "__esModule", { value: !0 }), (t.default = void 0);
        t.default = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [{ concept: { name: "aside" }, module: "HTML" }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "structure", "section", "landmark"]],
        };
      },
      8844: (e, t, r) => {
        "use strict";
        r(3978)(t, "__esModule", { value: !0 }), (t.default = void 0);
        t.default = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [
            {
              concept: {
                constraints: ["direct descendant of document"],
                name: "footer",
              },
              module: "HTML",
            },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "structure", "section", "landmark"]],
        };
      },
      1463: (e, t, r) => {
        "use strict";
        r(3978)(t, "__esModule", { value: !0 }), (t.default = void 0);
        t.default = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [{ concept: { name: "dd" }, module: "HTML" }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "structure", "section"]],
        };
      },
      9174: (e, t, r) => {
        "use strict";
        r(3978)(t, "__esModule", { value: !0 }), (t.default = void 0);
        t.default = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["prohibited"],
          prohibitedProps: ["aria-label", "aria-labelledby"],
          props: {},
          relatedConcepts: [],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "structure", "section"]],
        };
      },
      8422: (e, t, r) => {
        "use strict";
        r(3978)(t, "__esModule", { value: !0 }), (t.default = void 0);
        t.default = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [{ concept: { name: "dialog" }, module: "HTML" }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "window"]],
        };
      },
      2686: (e, t, r) => {
        "use strict";
        r(3978)(t, "__esModule", { value: !0 }), (t.default = void 0);
        t.default = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [{ module: "DAISY Guide" }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "structure", "section", "list"]],
        };
      },
      3477: (e, t, r) => {
        "use strict";
        r(3978)(t, "__esModule", { value: !0 }), (t.default = void 0);
        t.default = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [
            { concept: { name: "Device Independence Delivery Unit" } },
            { concept: { name: "body" }, module: "HTML" },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "structure"]],
        };
      },
      7089: (e, t, r) => {
        "use strict";
        r(3978)(t, "__esModule", { value: !0 }), (t.default = void 0);
        t.default = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["prohibited"],
          prohibitedProps: ["aria-label", "aria-labelledby"],
          props: {},
          relatedConcepts: [],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "structure", "section"]],
        };
      },
      949: (e, t, r) => {
        "use strict";
        r(3978)(t, "__esModule", { value: !0 }), (t.default = void 0);
        t.default = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [["article"]],
          requiredProps: {},
          superClass: [["roletype", "structure", "section", "list"]],
        };
      },
      5e3: (e, t, r) => {
        "use strict";
        r(3978)(t, "__esModule", { value: !0 }), (t.default = void 0);
        t.default = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [{ concept: { name: "figure" }, module: "HTML" }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "structure", "section"]],
        };
      },
      3204: (e, t, r) => {
        "use strict";
        r(3978)(t, "__esModule", { value: !0 }), (t.default = void 0);
        t.default = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [
            {
              concept: {
                attributes: [{ constraints: ["set"], name: "aria-label" }],
                name: "form",
              },
              module: "HTML",
            },
            {
              concept: {
                attributes: [{ constraints: ["set"], name: "aria-labelledby" }],
                name: "form",
              },
              module: "HTML",
            },
            {
              concept: {
                attributes: [{ constraints: ["set"], name: "name" }],
                name: "form",
              },
              module: "HTML",
            },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "structure", "section", "landmark"]],
        };
      },
      6481: (e, t, r) => {
        "use strict";
        r(3978)(t, "__esModule", { value: !0 }), (t.default = void 0);
        t.default = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["prohibited"],
          prohibitedProps: ["aria-label", "aria-labelledby"],
          props: {},
          relatedConcepts: [
            { concept: { name: "span" }, module: "HTML" },
            { concept: { name: "div" }, module: "HTML" },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "structure"]],
        };
      },
      9782: (e, t, r) => {
        "use strict";
        r(3978)(t, "__esModule", { value: !0 }), (t.default = void 0);
        t.default = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: { "aria-multiselectable": null, "aria-readonly": null },
          relatedConcepts: [
            {
              concept: {
                attributes: [{ name: "role", value: "grid" }],
                name: "table",
              },
              module: "HTML",
            },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [["row"], ["row", "rowgroup"]],
          requiredProps: {},
          superClass: [
            ["roletype", "widget", "composite"],
            ["roletype", "structure", "section", "table"],
          ],
        };
      },
      6974: (e, t, r) => {
        "use strict";
        r(3978)(t, "__esModule", { value: !0 }), (t.default = void 0);
        t.default = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author", "contents"],
          prohibitedProps: [],
          props: {
            "aria-disabled": null,
            "aria-errormessage": null,
            "aria-expanded": null,
            "aria-haspopup": null,
            "aria-invalid": null,
            "aria-readonly": null,
            "aria-required": null,
            "aria-selected": null,
          },
          relatedConcepts: [
            {
              concept: {
                attributes: [{ name: "role", value: "gridcell" }],
                name: "td",
              },
              module: "HTML",
            },
          ],
          requireContextRole: ["row"],
          requiredContextRole: ["row"],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [
            ["roletype", "structure", "section", "cell"],
            ["roletype", "widget"],
          ],
        };
      },
      8458: (e, t, r) => {
        "use strict";
        r(3978)(t, "__esModule", { value: !0 }), (t.default = void 0);
        t.default = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: { "aria-activedescendant": null, "aria-disabled": null },
          relatedConcepts: [
            { concept: { name: "details" }, module: "HTML" },
            { concept: { name: "fieldset" }, module: "HTML" },
            { concept: { name: "optgroup" }, module: "HTML" },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "structure", "section"]],
        };
      },
      2589: (e, t, r) => {
        "use strict";
        r(3978)(t, "__esModule", { value: !0 }), (t.default = void 0);
        t.default = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author", "contents"],
          prohibitedProps: [],
          props: { "aria-level": null },
          relatedConcepts: [
            { concept: { name: "h1" }, module: "HTML" },
            { concept: { name: "h2" }, module: "HTML" },
            { concept: { name: "h3" }, module: "HTML" },
            { concept: { name: "h4" }, module: "HTML" },
            { concept: { name: "h5" }, module: "HTML" },
            { concept: { name: "h6" }, module: "HTML" },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: { "aria-level": 2 },
          superClass: [["roletype", "structure", "sectionhead"]],
        };
      },
      4046: (e, t, r) => {
        "use strict";
        r(3978)(t, "__esModule", { value: !0 }), (t.default = void 0);
        t.default = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !0,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [
            {
              concept: {
                attributes: [{ constraints: ["set"], name: "alt" }],
                name: "img",
              },
              module: "HTML",
            },
            {
              concept: {
                attributes: [{ constraints: ["undefined"], name: "alt" }],
                name: "img",
              },
              module: "HTML",
            },
            { concept: { name: "imggroup" }, module: "DTB" },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "structure", "section"]],
        };
      },
      8186: (e, t, r) => {
        "use strict";
        r(3978)(t, "__esModule", { value: !0 }), (t.default = void 0);
        t.default = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["prohibited"],
          prohibitedProps: ["aria-label", "aria-labelledby"],
          props: {},
          relatedConcepts: [],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "structure", "section"]],
        };
      },
      2339: (e, t, r) => {
        "use strict";
        r(3978)(t, "__esModule", { value: !0 }), (t.default = void 0);
        t.default = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author", "contents"],
          prohibitedProps: [],
          props: { "aria-disabled": null, "aria-expanded": null },
          relatedConcepts: [
            {
              concept: { attributes: [{ name: "href" }], name: "a" },
              module: "HTML",
            },
            {
              concept: { attributes: [{ name: "href" }], name: "area" },
              module: "HTML",
            },
            {
              concept: { attributes: [{ name: "href" }], name: "link" },
              module: "HTML",
            },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "widget", "command"]],
        };
      },
      5448: (e, t, r) => {
        "use strict";
        r(3978)(t, "__esModule", { value: !0 }), (t.default = void 0);
        t.default = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [
            { concept: { name: "menu" }, module: "HTML" },
            { concept: { name: "ol" }, module: "HTML" },
            { concept: { name: "ul" }, module: "HTML" },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [["listitem"]],
          requiredProps: {},
          superClass: [["roletype", "structure", "section"]],
        };
      },
      7297: (e, t, r) => {
        "use strict";
        r(3978)(t, "__esModule", { value: !0 }), (t.default = void 0);
        t.default = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: {
            "aria-errormessage": null,
            "aria-expanded": null,
            "aria-invalid": null,
            "aria-multiselectable": null,
            "aria-readonly": null,
            "aria-required": null,
            "aria-orientation": "vertical",
          },
          relatedConcepts: [
            {
              concept: {
                attributes: [
                  { constraints: [">1"], name: "size" },
                  { name: "multiple" },
                ],
                name: "select",
              },
              module: "HTML",
            },
            {
              concept: {
                attributes: [{ constraints: [">1"], name: "size" }],
                name: "select",
              },
              module: "HTML",
            },
            {
              concept: { attributes: [{ name: "multiple" }], name: "select" },
              module: "HTML",
            },
            { concept: { name: "datalist" }, module: "HTML" },
            { concept: { name: "list" }, module: "ARIA" },
            { concept: { name: "select" }, module: "XForms" },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [["option", "group"], ["option"]],
          requiredProps: {},
          superClass: [
            ["roletype", "widget", "composite", "select"],
            ["roletype", "structure", "section", "group", "select"],
          ],
        };
      },
      2573: (e, t, r) => {
        "use strict";
        r(3978)(t, "__esModule", { value: !0 }), (t.default = void 0);
        t.default = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: {
            "aria-level": null,
            "aria-posinset": null,
            "aria-setsize": null,
          },
          relatedConcepts: [
            {
              concept: {
                constraints: ["direct descendant of ol, ul or menu"],
                name: "li",
              },
              module: "HTML",
            },
            { concept: { name: "item" }, module: "XForms" },
          ],
          requireContextRole: ["directory", "list"],
          requiredContextRole: ["directory", "list"],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "structure", "section"]],
        };
      },
      397: (e, t, r) => {
        "use strict";
        r(3978)(t, "__esModule", { value: !0 }), (t.default = void 0);
        t.default = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: { "aria-live": "polite" },
          relatedConcepts: [],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "structure", "section"]],
        };
      },
      7116: (e, t, r) => {
        "use strict";
        r(3978)(t, "__esModule", { value: !0 }), (t.default = void 0);
        t.default = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [{ concept: { name: "main" }, module: "HTML" }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "structure", "section", "landmark"]],
        };
      },
      6718: (e, t, r) => {
        "use strict";
        r(3978)(t, "__esModule", { value: !0 }), (t.default = void 0);
        t.default = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "structure", "section"]],
        };
      },
      8581: (e, t, r) => {
        "use strict";
        r(3978)(t, "__esModule", { value: !0 }), (t.default = void 0);
        t.default = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [{ concept: { name: "math" }, module: "HTML" }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "structure", "section"]],
        };
      },
      3874: (e, t, r) => {
        "use strict";
        r(3978)(t, "__esModule", { value: !0 }), (t.default = void 0);
        t.default = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: { "aria-orientation": "vertical" },
          relatedConcepts: [
            { concept: { name: "MENU" }, module: "JAPI" },
            { concept: { name: "list" }, module: "ARIA" },
            { concept: { name: "select" }, module: "XForms" },
            { concept: { name: "sidebar" }, module: "DTB" },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [
            ["menuitem", "group"],
            ["menuitemradio", "group"],
            ["menuitemcheckbox", "group"],
            ["menuitem"],
            ["menuitemcheckbox"],
            ["menuitemradio"],
          ],
          requiredProps: {},
          superClass: [
            ["roletype", "widget", "composite", "select"],
            ["roletype", "structure", "section", "group", "select"],
          ],
        };
      },
      5880: (e, t, r) => {
        "use strict";
        r(3978)(t, "__esModule", { value: !0 }), (t.default = void 0);
        t.default = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: { "aria-orientation": "horizontal" },
          relatedConcepts: [{ concept: { name: "toolbar" }, module: "ARIA" }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [
            ["menuitem", "group"],
            ["menuitemradio", "group"],
            ["menuitemcheckbox", "group"],
            ["menuitem"],
            ["menuitemcheckbox"],
            ["menuitemradio"],
          ],
          requiredProps: {},
          superClass: [
            ["roletype", "widget", "composite", "select", "menu"],
            ["roletype", "structure", "section", "group", "select", "menu"],
          ],
        };
      },
      1549: (e, t, r) => {
        "use strict";
        r(3978)(t, "__esModule", { value: !0 }), (t.default = void 0);
        t.default = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author", "contents"],
          prohibitedProps: [],
          props: {
            "aria-disabled": null,
            "aria-expanded": null,
            "aria-haspopup": null,
            "aria-posinset": null,
            "aria-setsize": null,
          },
          relatedConcepts: [
            { concept: { name: "MENU_ITEM" }, module: "JAPI" },
            { concept: { name: "listitem" }, module: "ARIA" },
            { concept: { name: "menuitem" }, module: "HTML" },
            { concept: { name: "option" }, module: "ARIA" },
          ],
          requireContextRole: ["group", "menu", "menubar"],
          requiredContextRole: ["group", "menu", "menubar"],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "widget", "command"]],
        };
      },
      4092: (e, t, r) => {
        "use strict";
        r(3978)(t, "__esModule", { value: !0 }), (t.default = void 0);
        t.default = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !0,
          nameFrom: ["author", "contents"],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [{ concept: { name: "menuitem" }, module: "ARIA" }],
          requireContextRole: ["group", "menu", "menubar"],
          requiredContextRole: ["group", "menu", "menubar"],
          requiredOwnedElements: [],
          requiredProps: { "aria-checked": null },
          superClass: [
            ["roletype", "widget", "input", "checkbox"],
            ["roletype", "widget", "command", "menuitem"],
          ],
        };
      },
      7305: (e, t, r) => {
        "use strict";
        r(3978)(t, "__esModule", { value: !0 }), (t.default = void 0);
        t.default = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !0,
          nameFrom: ["author", "contents"],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [{ concept: { name: "menuitem" }, module: "ARIA" }],
          requireContextRole: ["group", "menu", "menubar"],
          requiredContextRole: ["group", "menu", "menubar"],
          requiredOwnedElements: [],
          requiredProps: { "aria-checked": null },
          superClass: [
            ["roletype", "widget", "input", "checkbox", "menuitemcheckbox"],
            ["roletype", "widget", "command", "menuitem", "menuitemcheckbox"],
            ["roletype", "widget", "input", "radio"],
          ],
        };
      },
      1216: (e, t, r) => {
        "use strict";
        r(3978)(t, "__esModule", { value: !0 }), (t.default = void 0);
        t.default = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !0,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {
            "aria-valuemax": null,
            "aria-valuemin": null,
            "aria-valuenow": null,
          },
          superClass: [["roletype", "structure", "range"]],
        };
      },
      5344: (e, t, r) => {
        "use strict";
        r(3978)(t, "__esModule", { value: !0 }), (t.default = void 0);
        t.default = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [{ concept: { name: "nav" }, module: "HTML" }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "structure", "section", "landmark"]],
        };
      },
      6541: (e, t, r) => {
        "use strict";
        r(3978)(t, "__esModule", { value: !0 }), (t.default = void 0);
        t.default = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: [],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [],
        };
      },
      9845: (e, t, r) => {
        "use strict";
        r(3978)(t, "__esModule", { value: !0 }), (t.default = void 0);
        t.default = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "structure", "section"]],
        };
      },
      4955: (e, t, r) => {
        "use strict";
        r(3978)(t, "__esModule", { value: !0 }), (t.default = void 0);
        t.default = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !0,
          nameFrom: ["author", "contents"],
          prohibitedProps: [],
          props: {
            "aria-checked": null,
            "aria-posinset": null,
            "aria-setsize": null,
            "aria-selected": "false",
          },
          relatedConcepts: [
            { concept: { name: "item" }, module: "XForms" },
            { concept: { name: "listitem" }, module: "ARIA" },
            { concept: { name: "option" }, module: "HTML" },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: { "aria-selected": "false" },
          superClass: [["roletype", "widget", "input"]],
        };
      },
      3289: (e, t, r) => {
        "use strict";
        r(3978)(t, "__esModule", { value: !0 }), (t.default = void 0);
        t.default = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["prohibited"],
          prohibitedProps: ["aria-label", "aria-labelledby"],
          props: {},
          relatedConcepts: [],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "structure", "section"]],
        };
      },
      3721: (e, t, r) => {
        "use strict";
        r(3978)(t, "__esModule", { value: !0 }), (t.default = void 0);
        t.default = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["prohibited"],
          prohibitedProps: ["aria-label", "aria-labelledby"],
          props: {},
          relatedConcepts: [],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "structure"]],
        };
      },
      6669: (e, t, r) => {
        "use strict";
        r(3978)(t, "__esModule", { value: !0 }), (t.default = void 0);
        t.default = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !0,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [
            { concept: { name: "progress" }, module: "HTML" },
            { concept: { name: "status" }, module: "ARIA" },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [
            ["roletype", "structure", "range"],
            ["roletype", "widget"],
          ],
        };
      },
      3855: (e, t, r) => {
        "use strict";
        r(3978)(t, "__esModule", { value: !0 }), (t.default = void 0);
        t.default = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !0,
          nameFrom: ["author", "contents"],
          prohibitedProps: [],
          props: {
            "aria-checked": null,
            "aria-posinset": null,
            "aria-setsize": null,
          },
          relatedConcepts: [
            {
              concept: {
                attributes: [{ name: "type", value: "radio" }],
                name: "input",
              },
              module: "HTML",
            },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: { "aria-checked": null },
          superClass: [["roletype", "widget", "input"]],
        };
      },
      5715: (e, t, r) => {
        "use strict";
        r(3978)(t, "__esModule", { value: !0 }), (t.default = void 0);
        t.default = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: {
            "aria-errormessage": null,
            "aria-invalid": null,
            "aria-readonly": null,
            "aria-required": null,
          },
          relatedConcepts: [{ concept: { name: "list" }, module: "ARIA" }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [["radio"]],
          requiredProps: {},
          superClass: [
            ["roletype", "widget", "composite", "select"],
            ["roletype", "structure", "section", "group", "select"],
          ],
        };
      },
      7397: (e, t, r) => {
        "use strict";
        r(3978)(t, "__esModule", { value: !0 }), (t.default = void 0);
        t.default = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [
            {
              concept: {
                attributes: [{ constraints: ["set"], name: "aria-label" }],
                name: "section",
              },
              module: "HTML",
            },
            {
              concept: {
                attributes: [{ constraints: ["set"], name: "aria-labelledby" }],
                name: "section",
              },
              module: "HTML",
            },
            {
              concept: {
                name: "Device Independence Glossart perceivable unit",
              },
            },
            { concept: { name: "frame" }, module: "HTML" },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "structure", "section", "landmark"]],
        };
      },
      3046: (e, t, r) => {
        "use strict";
        r(3978)(t, "__esModule", { value: !0 }), (t.default = void 0);
        t.default = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author", "contents"],
          prohibitedProps: [],
          props: {
            "aria-colindex": null,
            "aria-expanded": null,
            "aria-level": null,
            "aria-posinset": null,
            "aria-rowindex": null,
            "aria-selected": null,
            "aria-setsize": null,
          },
          relatedConcepts: [{ concept: { name: "tr" }, module: "HTML" }],
          requireContextRole: ["grid", "rowgroup", "table", "treegrid"],
          requiredContextRole: ["grid", "rowgroup", "table", "treegrid"],
          requiredOwnedElements: [
            ["cell"],
            ["columnheader"],
            ["gridcell"],
            ["rowheader"],
          ],
          requiredProps: {},
          superClass: [
            ["roletype", "structure", "section", "group"],
            ["roletype", "widget"],
          ],
        };
      },
      8666: (e, t, r) => {
        "use strict";
        r(3978)(t, "__esModule", { value: !0 }), (t.default = void 0);
        t.default = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author", "contents"],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [
            { concept: { name: "tbody" }, module: "HTML" },
            { concept: { name: "tfoot" }, module: "HTML" },
            { concept: { name: "thead" }, module: "HTML" },
          ],
          requireContextRole: ["grid", "table", "treegrid"],
          requiredContextRole: ["grid", "table", "treegrid"],
          requiredOwnedElements: [["row"]],
          requiredProps: {},
          superClass: [["roletype", "structure"]],
        };
      },
      2544: (e, t, r) => {
        "use strict";
        r(3978)(t, "__esModule", { value: !0 }), (t.default = void 0);
        t.default = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author", "contents"],
          prohibitedProps: [],
          props: { "aria-sort": null },
          relatedConcepts: [
            {
              concept: {
                attributes: [{ name: "scope", value: "row" }],
                name: "th",
              },
              module: "HTML",
            },
          ],
          requireContextRole: ["row"],
          requiredContextRole: ["row"],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [
            ["roletype", "structure", "section", "cell"],
            ["roletype", "structure", "section", "cell", "gridcell"],
            ["roletype", "widget", "gridcell"],
            ["roletype", "structure", "sectionhead"],
          ],
        };
      },
      4064: (e, t, r) => {
        "use strict";
        r(3978)(t, "__esModule", { value: !0 }), (t.default = void 0);
        t.default = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !0,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: {
            "aria-disabled": null,
            "aria-orientation": "vertical",
            "aria-valuemax": "100",
            "aria-valuemin": "0",
          },
          relatedConcepts: [],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: { "aria-controls": null, "aria-valuenow": null },
          superClass: [
            ["roletype", "structure", "range"],
            ["roletype", "widget"],
          ],
        };
      },
      5722: (e, t, r) => {
        "use strict";
        r(3978)(t, "__esModule", { value: !0 }), (t.default = void 0);
        t.default = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "structure", "section", "landmark"]],
        };
      },
      9983: (e, t, r) => {
        "use strict";
        r(3978)(t, "__esModule", { value: !0 }), (t.default = void 0);
        t.default = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [
            {
              concept: {
                attributes: [
                  { constraints: ["undefined"], name: "list" },
                  { name: "type", value: "search" },
                ],
                name: "input",
              },
              module: "HTML",
            },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "widget", "input", "textbox"]],
        };
      },
      2646: (e, t, r) => {
        "use strict";
        r(3978)(t, "__esModule", { value: !0 }), (t.default = void 0);
        t.default = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !0,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: {
            "aria-disabled": null,
            "aria-valuetext": null,
            "aria-orientation": "horizontal",
            "aria-valuemax": "100",
            "aria-valuemin": "0",
          },
          relatedConcepts: [{ concept: { name: "hr" }, module: "HTML" }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "structure"]],
        };
      },
      4208: (e, t, r) => {
        "use strict";
        r(3978)(t, "__esModule", { value: !0 }), (t.default = void 0);
        t.default = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !0,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: {
            "aria-errormessage": null,
            "aria-haspopup": null,
            "aria-invalid": null,
            "aria-readonly": null,
            "aria-orientation": "horizontal",
            "aria-valuemax": "100",
            "aria-valuemin": "0",
          },
          relatedConcepts: [
            {
              concept: {
                attributes: [{ name: "type", value: "range" }],
                name: "input",
              },
              module: "HTML",
            },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: { "aria-valuenow": null },
          superClass: [
            ["roletype", "widget", "input"],
            ["roletype", "structure", "range"],
          ],
        };
      },
      6368: (e, t, r) => {
        "use strict";
        r(3978)(t, "__esModule", { value: !0 }), (t.default = void 0);
        t.default = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: {
            "aria-errormessage": null,
            "aria-invalid": null,
            "aria-readonly": null,
            "aria-required": null,
            "aria-valuenow": "0",
          },
          relatedConcepts: [
            {
              concept: {
                attributes: [{ name: "type", value: "number" }],
                name: "input",
              },
              module: "HTML",
            },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [
            ["roletype", "widget", "composite"],
            ["roletype", "widget", "input"],
            ["roletype", "structure", "range"],
          ],
        };
      },
      8706: (e, t, r) => {
        "use strict";
        r(3978)(t, "__esModule", { value: !0 }), (t.default = void 0);
        t.default = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: { "aria-atomic": "true", "aria-live": "polite" },
          relatedConcepts: [{ concept: { name: "output" }, module: "HTML" }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "structure", "section"]],
        };
      },
      7575: (e, t, r) => {
        "use strict";
        r(3978)(t, "__esModule", { value: !0 }), (t.default = void 0);
        t.default = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["prohibited"],
          prohibitedProps: ["aria-label", "aria-labelledby"],
          props: {},
          relatedConcepts: [],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "structure", "section"]],
        };
      },
      4357: (e, t, r) => {
        "use strict";
        r(3978)(t, "__esModule", { value: !0 }), (t.default = void 0);
        t.default = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["prohibited"],
          prohibitedProps: ["aria-label", "aria-labelledby"],
          props: {},
          relatedConcepts: [],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "structure", "section"]],
        };
      },
      5957: (e, t, r) => {
        "use strict";
        r(3978)(t, "__esModule", { value: !0 }), (t.default = void 0);
        t.default = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["prohibited"],
          prohibitedProps: ["aria-label", "aria-labelledby"],
          props: {},
          relatedConcepts: [],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "structure", "section"]],
        };
      },
      8917: (e, t, r) => {
        "use strict";
        r(3978)(t, "__esModule", { value: !0 }), (t.default = void 0);
        t.default = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !0,
          nameFrom: ["author", "contents"],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [{ concept: { name: "button" }, module: "ARIA" }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: { "aria-checked": null },
          superClass: [["roletype", "widget", "input", "checkbox"]],
        };
      },
      8743: (e, t, r) => {
        "use strict";
        r(3978)(t, "__esModule", { value: !0 }), (t.default = void 0);
        t.default = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !0,
          nameFrom: ["author", "contents"],
          prohibitedProps: [],
          props: {
            "aria-disabled": null,
            "aria-expanded": null,
            "aria-haspopup": null,
            "aria-posinset": null,
            "aria-setsize": null,
            "aria-selected": "false",
          },
          relatedConcepts: [],
          requireContextRole: ["tablist"],
          requiredContextRole: ["tablist"],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [
            ["roletype", "structure", "sectionhead"],
            ["roletype", "widget"],
          ],
        };
      },
      1053: (e, t, r) => {
        "use strict";
        r(3978)(t, "__esModule", { value: !0 }), (t.default = void 0);
        t.default = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: { "aria-colcount": null, "aria-rowcount": null },
          relatedConcepts: [{ concept: { name: "table" }, module: "HTML" }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [["row"], ["row", "rowgroup"]],
          requiredProps: {},
          superClass: [["roletype", "structure", "section"]],
        };
      },
      1599: (e, t, r) => {
        "use strict";
        r(3978)(t, "__esModule", { value: !0 }), (t.default = void 0);
        t.default = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: {
            "aria-level": null,
            "aria-multiselectable": null,
            "aria-orientation": "horizontal",
          },
          relatedConcepts: [{ module: "DAISY", concept: { name: "guide" } }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [["tab"]],
          requiredProps: {},
          superClass: [["roletype", "widget", "composite"]],
        };
      },
      3193: (e, t, r) => {
        "use strict";
        r(3978)(t, "__esModule", { value: !0 }), (t.default = void 0);
        t.default = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "structure", "section"]],
        };
      },
      4665: (e, t, r) => {
        "use strict";
        r(3978)(t, "__esModule", { value: !0 }), (t.default = void 0);
        t.default = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [{ concept: { name: "dfn" }, module: "HTML" }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "structure", "section"]],
        };
      },
      221: (e, t, r) => {
        "use strict";
        r(3978)(t, "__esModule", { value: !0 }), (t.default = void 0);
        t.default = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: {
            "aria-activedescendant": null,
            "aria-autocomplete": null,
            "aria-errormessage": null,
            "aria-haspopup": null,
            "aria-invalid": null,
            "aria-multiline": null,
            "aria-placeholder": null,
            "aria-readonly": null,
            "aria-required": null,
          },
          relatedConcepts: [
            {
              concept: {
                attributes: [
                  { constraints: ["undefined"], name: "type" },
                  { constraints: ["undefined"], name: "list" },
                ],
                name: "input",
              },
              module: "HTML",
            },
            {
              concept: {
                attributes: [
                  { constraints: ["undefined"], name: "list" },
                  { name: "type", value: "email" },
                ],
                name: "input",
              },
              module: "HTML",
            },
            {
              concept: {
                attributes: [
                  { constraints: ["undefined"], name: "list" },
                  { name: "type", value: "tel" },
                ],
                name: "input",
              },
              module: "HTML",
            },
            {
              concept: {
                attributes: [
                  { constraints: ["undefined"], name: "list" },
                  { name: "type", value: "text" },
                ],
                name: "input",
              },
              module: "HTML",
            },
            {
              concept: {
                attributes: [
                  { constraints: ["undefined"], name: "list" },
                  { name: "type", value: "url" },
                ],
                name: "input",
              },
              module: "HTML",
            },
            { concept: { name: "input" }, module: "XForms" },
            { concept: { name: "textarea" }, module: "HTML" },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "widget", "input"]],
        };
      },
      5313: (e, t, r) => {
        "use strict";
        r(3978)(t, "__esModule", { value: !0 }), (t.default = void 0);
        t.default = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "structure", "section"]],
        };
      },
      1777: (e, t, r) => {
        "use strict";
        r(3978)(t, "__esModule", { value: !0 }), (t.default = void 0);
        t.default = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "structure", "section", "status"]],
        };
      },
      3316: (e, t, r) => {
        "use strict";
        r(3978)(t, "__esModule", { value: !0 }), (t.default = void 0);
        t.default = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: { "aria-orientation": "horizontal" },
          relatedConcepts: [{ concept: { name: "menubar" }, module: "ARIA" }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "structure", "section", "group"]],
        };
      },
      9304: (e, t, r) => {
        "use strict";
        r(3978)(t, "__esModule", { value: !0 }), (t.default = void 0);
        t.default = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author", "contents"],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "structure", "section"]],
        };
      },
      3538: (e, t, r) => {
        "use strict";
        r(3978)(t, "__esModule", { value: !0 }), (t.default = void 0);
        t.default = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: {
            "aria-errormessage": null,
            "aria-invalid": null,
            "aria-multiselectable": null,
            "aria-required": null,
            "aria-orientation": "vertical",
          },
          relatedConcepts: [],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [["treeitem", "group"], ["treeitem"]],
          requiredProps: {},
          superClass: [
            ["roletype", "widget", "composite", "select"],
            ["roletype", "structure", "section", "group", "select"],
          ],
        };
      },
      5627: (e, t, r) => {
        "use strict";
        r(3978)(t, "__esModule", { value: !0 }), (t.default = void 0);
        t.default = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [["row"], ["row", "rowgroup"]],
          requiredProps: {},
          superClass: [
            ["roletype", "widget", "composite", "grid"],
            ["roletype", "structure", "section", "table", "grid"],
            ["roletype", "widget", "composite", "select", "tree"],
            ["roletype", "structure", "section", "group", "select", "tree"],
          ],
        };
      },
      8425: (e, t, r) => {
        "use strict";
        r(3978)(t, "__esModule", { value: !0 }), (t.default = void 0);
        t.default = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author", "contents"],
          prohibitedProps: [],
          props: { "aria-expanded": null, "aria-haspopup": null },
          relatedConcepts: [],
          requireContextRole: ["group", "tree"],
          requiredContextRole: ["group", "tree"],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [
            ["roletype", "structure", "section", "listitem"],
            ["roletype", "widget", "input", "option"],
          ],
        };
      },
      2461: (e, t, r) => {
        "use strict";
        var n = r(530);
        r(3978)(t, "__esModule", { value: !0 }),
          (t.roleElements = t.elementRoles = t.roles = t.dom = t.aria = void 0);
        var a = n(r(7457)),
          o = n(r(7549)),
          i = n(r(3913)),
          l = n(r(3217)),
          u = n(r(6433)),
          s = a.default;
        t.aria = s;
        var c = o.default;
        t.dom = c;
        var d = i.default;
        t.roles = d;
        var p = l.default;
        t.elementRoles = p;
        var f = u.default;
        t.roleElements = f;
      },
      6433: (e, t, r) => {
        "use strict";
        var n = r(530);
        r(3978)(t, "__esModule", { value: !0 }), (t.default = void 0);
        var a,
          o = n(r(6384)),
          i = n(r(7766)),
          l = n(r(9301)),
          u = n(r(9036)),
          s = n(r(8914)),
          c = n(r(9392)),
          d = n(r(3913)),
          p = new c.default([]);
        (0, s.default)(
          (a = (0, u.default)((0, l.default)(d.default).call(d.default)))
        ).call(a, function (e) {
          var t,
            r,
            n = d.default.get(e);
          n &&
            (0, s.default)(
              (t = (0, i.default)((r = [])).call(
                r,
                (0, u.default)(n.baseConcepts),
                (0, u.default)(n.relatedConcepts)
              ))
            ).call(t, function (t) {
              if ("HTML" === t.module) {
                var r = t.concept;
                if (r) {
                  var n = p.get(e) || new o.default([]);
                  n.add(r), p.set(e, n);
                }
              }
            });
        });
        var f = p;
        t.default = f;
      },
      3913: (e, t, r) => {
        "use strict";
        var n = r(530);
        r(3978)(t, "__esModule", { value: !0 }), (t.default = void 0);
        var a,
          o = n(r(6976)),
          i = n(r(1511)),
          l = n(r(9996)),
          u = n(r(5420)),
          s = n(r(6419)),
          c = n(r(3649)),
          d = n(r(7672)),
          p = n(r(1942)),
          f = n(r(6902)),
          m = n(r(8914)),
          h = n(r(9392)),
          v = n(r(6138)),
          b = n(r(9081)),
          y = n(r(5302));
        function g(e, t) {
          var r;
          if (void 0 === u.default || null == (0, l.default)(e)) {
            if (
              (0, i.default)(e) ||
              (r = (function (e, t) {
                var r;
                if (e) {
                  if ("string" == typeof e) return w(e, t);
                  var n = (0, c.default)(
                    (r = Object.prototype.toString.call(e))
                  ).call(r, 8, -1);
                  return (
                    "Object" === n && e.constructor && (n = e.constructor.name),
                    "Map" === n || "Set" === n
                      ? (0, s.default)(e)
                      : "Arguments" === n ||
                        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                      ? w(e, t)
                      : void 0
                  );
                }
              })(e)) ||
              (t && e && "number" == typeof e.length)
            ) {
              r && (e = r);
              var n = 0,
                a = function () {};
              return {
                s: a,
                n: function () {
                  return n >= e.length
                    ? { done: !0 }
                    : { done: !1, value: e[n++] };
                },
                e: function (e) {
                  throw e;
                },
                f: a,
              };
            }
            throw new TypeError(
              "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          }
          var d,
            p = !0,
            f = !1;
          return {
            s: function () {
              r = (0, o.default)(e);
            },
            n: function () {
              var e = r.next();
              return (p = e.done), e;
            },
            e: function (e) {
              (f = !0), (d = e);
            },
            f: function () {
              try {
                p || null == r.return || r.return();
              } finally {
                if (f) throw d;
              }
            },
          };
        }
        function w(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
          return n;
        }
        var x = new h.default([]);
        (0, m.default)((a = [v.default, b.default, y.default])).call(
          a,
          function (e) {
            (0, m.default)(e).call(e, function (e, t) {
              return x.set(t, e);
            });
          }
        ),
          (0, m.default)(x).call(x, function (e, t) {
            var r,
              n = g(e.superClass);
            try {
              for (n.s(); !(r = n.n()).done; ) {
                var a,
                  o = g(r.value);
                try {
                  for (o.s(); !(a = o.n()).done; ) {
                    var i = a.value,
                      l = x.get(i);
                    if (l)
                      for (
                        var u = 0, s = (0, f.default)(l.props);
                        u < s.length;
                        u++
                      ) {
                        var c = s[u];
                        Object.prototype.hasOwnProperty.call(e.props, c) ||
                          (0, p.default)(
                            e.props,
                            (0, d.default)({}, c, l.props[c])
                          );
                      }
                  }
                } catch (e) {
                  o.e(e);
                } finally {
                  o.f();
                }
              }
            } catch (e) {
              n.e(e);
            } finally {
              n.f();
            }
          });
        var E = x;
        t.default = E;
      },
      8168: (e, t, r) => {
        const n = r(8874),
          a = {};
        for (const e of Object.keys(n)) a[n[e]] = e;
        const o = {
          rgb: { channels: 3, labels: "rgb" },
          hsl: { channels: 3, labels: "hsl" },
          hsv: { channels: 3, labels: "hsv" },
          hwb: { channels: 3, labels: "hwb" },
          cmyk: { channels: 4, labels: "cmyk" },
          xyz: { channels: 3, labels: "xyz" },
          lab: { channels: 3, labels: "lab" },
          lch: { channels: 3, labels: "lch" },
          hex: { channels: 1, labels: ["hex"] },
          keyword: { channels: 1, labels: ["keyword"] },
          ansi16: { channels: 1, labels: ["ansi16"] },
          ansi256: { channels: 1, labels: ["ansi256"] },
          hcg: { channels: 3, labels: ["h", "c", "g"] },
          apple: { channels: 3, labels: ["r16", "g16", "b16"] },
          gray: { channels: 1, labels: ["gray"] },
        };
        e.exports = o;
        for (const e of Object.keys(o)) {
          if (!("channels" in o[e]))
            throw new Error("missing channels property: " + e);
          if (!("labels" in o[e]))
            throw new Error("missing channel labels property: " + e);
          if (o[e].labels.length !== o[e].channels)
            throw new Error("channel and label counts mismatch: " + e);
          const { channels: t, labels: r } = o[e];
          delete o[e].channels,
            delete o[e].labels,
            Object.defineProperty(o[e], "channels", { value: t }),
            Object.defineProperty(o[e], "labels", { value: r });
        }
        (o.rgb.hsl = function (e) {
          const t = e[0] / 255,
            r = e[1] / 255,
            n = e[2] / 255,
            a = Math.min(t, r, n),
            o = Math.max(t, r, n),
            i = o - a;
          let l, u;
          o === a
            ? (l = 0)
            : t === o
            ? (l = (r - n) / i)
            : r === o
            ? (l = 2 + (n - t) / i)
            : n === o && (l = 4 + (t - r) / i),
            (l = Math.min(60 * l, 360)),
            l < 0 && (l += 360);
          const s = (a + o) / 2;
          return (
            (u = o === a ? 0 : s <= 0.5 ? i / (o + a) : i / (2 - o - a)),
            [l, 100 * u, 100 * s]
          );
        }),
          (o.rgb.hsv = function (e) {
            let t, r, n, a, o;
            const i = e[0] / 255,
              l = e[1] / 255,
              u = e[2] / 255,
              s = Math.max(i, l, u),
              c = s - Math.min(i, l, u),
              d = function (e) {
                return (s - e) / 6 / c + 0.5;
              };
            return (
              0 === c
                ? ((a = 0), (o = 0))
                : ((o = c / s),
                  (t = d(i)),
                  (r = d(l)),
                  (n = d(u)),
                  i === s
                    ? (a = n - r)
                    : l === s
                    ? (a = 1 / 3 + t - n)
                    : u === s && (a = 2 / 3 + r - t),
                  a < 0 ? (a += 1) : a > 1 && (a -= 1)),
              [360 * a, 100 * o, 100 * s]
            );
          }),
          (o.rgb.hwb = function (e) {
            const t = e[0],
              r = e[1];
            let n = e[2];
            const a = o.rgb.hsl(e)[0],
              i = (1 / 255) * Math.min(t, Math.min(r, n));
            return (
              (n = 1 - (1 / 255) * Math.max(t, Math.max(r, n))),
              [a, 100 * i, 100 * n]
            );
          }),
          (o.rgb.cmyk = function (e) {
            const t = e[0] / 255,
              r = e[1] / 255,
              n = e[2] / 255,
              a = Math.min(1 - t, 1 - r, 1 - n);
            return [
              100 * ((1 - t - a) / (1 - a) || 0),
              100 * ((1 - r - a) / (1 - a) || 0),
              100 * ((1 - n - a) / (1 - a) || 0),
              100 * a,
            ];
          }),
          (o.rgb.keyword = function (e) {
            const t = a[e];
            if (t) return t;
            let r,
              o = 1 / 0;
            for (const t of Object.keys(n)) {
              const a =
                ((l = n[t]),
                ((i = e)[0] - l[0]) ** 2 +
                  (i[1] - l[1]) ** 2 +
                  (i[2] - l[2]) ** 2);
              a < o && ((o = a), (r = t));
            }
            var i, l;
            return r;
          }),
          (o.keyword.rgb = function (e) {
            return n[e];
          }),
          (o.rgb.xyz = function (e) {
            let t = e[0] / 255,
              r = e[1] / 255,
              n = e[2] / 255;
            return (
              (t = t > 0.04045 ? ((t + 0.055) / 1.055) ** 2.4 : t / 12.92),
              (r = r > 0.04045 ? ((r + 0.055) / 1.055) ** 2.4 : r / 12.92),
              (n = n > 0.04045 ? ((n + 0.055) / 1.055) ** 2.4 : n / 12.92),
              [
                100 * (0.4124 * t + 0.3576 * r + 0.1805 * n),
                100 * (0.2126 * t + 0.7152 * r + 0.0722 * n),
                100 * (0.0193 * t + 0.1192 * r + 0.9505 * n),
              ]
            );
          }),
          (o.rgb.lab = function (e) {
            const t = o.rgb.xyz(e);
            let r = t[0],
              n = t[1],
              a = t[2];
            return (
              (r /= 95.047),
              (n /= 100),
              (a /= 108.883),
              (r = r > 0.008856 ? r ** (1 / 3) : 7.787 * r + 16 / 116),
              (n = n > 0.008856 ? n ** (1 / 3) : 7.787 * n + 16 / 116),
              (a = a > 0.008856 ? a ** (1 / 3) : 7.787 * a + 16 / 116),
              [116 * n - 16, 500 * (r - n), 200 * (n - a)]
            );
          }),
          (o.hsl.rgb = function (e) {
            const t = e[0] / 360,
              r = e[1] / 100,
              n = e[2] / 100;
            let a, o, i;
            if (0 === r) return (i = 255 * n), [i, i, i];
            a = n < 0.5 ? n * (1 + r) : n + r - n * r;
            const l = 2 * n - a,
              u = [0, 0, 0];
            for (let e = 0; e < 3; e++)
              (o = t + (1 / 3) * -(e - 1)),
                o < 0 && o++,
                o > 1 && o--,
                (i =
                  6 * o < 1
                    ? l + 6 * (a - l) * o
                    : 2 * o < 1
                    ? a
                    : 3 * o < 2
                    ? l + (a - l) * (2 / 3 - o) * 6
                    : l),
                (u[e] = 255 * i);
            return u;
          }),
          (o.hsl.hsv = function (e) {
            const t = e[0];
            let r = e[1] / 100,
              n = e[2] / 100,
              a = r;
            const o = Math.max(n, 0.01);
            return (
              (n *= 2),
              (r *= n <= 1 ? n : 2 - n),
              (a *= o <= 1 ? o : 2 - o),
              [
                t,
                100 * (0 === n ? (2 * a) / (o + a) : (2 * r) / (n + r)),
                ((n + r) / 2) * 100,
              ]
            );
          }),
          (o.hsv.rgb = function (e) {
            const t = e[0] / 60,
              r = e[1] / 100;
            let n = e[2] / 100;
            const a = Math.floor(t) % 6,
              o = t - Math.floor(t),
              i = 255 * n * (1 - r),
              l = 255 * n * (1 - r * o),
              u = 255 * n * (1 - r * (1 - o));
            switch (((n *= 255), a)) {
              case 0:
                return [n, u, i];
              case 1:
                return [l, n, i];
              case 2:
                return [i, n, u];
              case 3:
                return [i, l, n];
              case 4:
                return [u, i, n];
              case 5:
                return [n, i, l];
            }
          }),
          (o.hsv.hsl = function (e) {
            const t = e[0],
              r = e[1] / 100,
              n = e[2] / 100,
              a = Math.max(n, 0.01);
            let o, i;
            i = (2 - r) * n;
            const l = (2 - r) * a;
            return (
              (o = r * a),
              (o /= l <= 1 ? l : 2 - l),
              (o = o || 0),
              (i /= 2),
              [t, 100 * o, 100 * i]
            );
          }),
          (o.hwb.rgb = function (e) {
            const t = e[0] / 360;
            let r = e[1] / 100,
              n = e[2] / 100;
            const a = r + n;
            let o;
            a > 1 && ((r /= a), (n /= a));
            const i = Math.floor(6 * t),
              l = 1 - n;
            (o = 6 * t - i), 0 != (1 & i) && (o = 1 - o);
            const u = r + o * (l - r);
            let s, c, d;
            switch (i) {
              default:
              case 6:
              case 0:
                (s = l), (c = u), (d = r);
                break;
              case 1:
                (s = u), (c = l), (d = r);
                break;
              case 2:
                (s = r), (c = l), (d = u);
                break;
              case 3:
                (s = r), (c = u), (d = l);
                break;
              case 4:
                (s = u), (c = r), (d = l);
                break;
              case 5:
                (s = l), (c = r), (d = u);
            }
            return [255 * s, 255 * c, 255 * d];
          }),
          (o.cmyk.rgb = function (e) {
            const t = e[0] / 100,
              r = e[1] / 100,
              n = e[2] / 100,
              a = e[3] / 100;
            return [
              255 * (1 - Math.min(1, t * (1 - a) + a)),
              255 * (1 - Math.min(1, r * (1 - a) + a)),
              255 * (1 - Math.min(1, n * (1 - a) + a)),
            ];
          }),
          (o.xyz.rgb = function (e) {
            const t = e[0] / 100,
              r = e[1] / 100,
              n = e[2] / 100;
            let a, o, i;
            return (
              (a = 3.2406 * t + -1.5372 * r + -0.4986 * n),
              (o = -0.9689 * t + 1.8758 * r + 0.0415 * n),
              (i = 0.0557 * t + -0.204 * r + 1.057 * n),
              (a = a > 0.0031308 ? 1.055 * a ** (1 / 2.4) - 0.055 : 12.92 * a),
              (o = o > 0.0031308 ? 1.055 * o ** (1 / 2.4) - 0.055 : 12.92 * o),
              (i = i > 0.0031308 ? 1.055 * i ** (1 / 2.4) - 0.055 : 12.92 * i),
              (a = Math.min(Math.max(0, a), 1)),
              (o = Math.min(Math.max(0, o), 1)),
              (i = Math.min(Math.max(0, i), 1)),
              [255 * a, 255 * o, 255 * i]
            );
          }),
          (o.xyz.lab = function (e) {
            let t = e[0],
              r = e[1],
              n = e[2];
            return (
              (t /= 95.047),
              (r /= 100),
              (n /= 108.883),
              (t = t > 0.008856 ? t ** (1 / 3) : 7.787 * t + 16 / 116),
              (r = r > 0.008856 ? r ** (1 / 3) : 7.787 * r + 16 / 116),
              (n = n > 0.008856 ? n ** (1 / 3) : 7.787 * n + 16 / 116),
              [116 * r - 16, 500 * (t - r), 200 * (r - n)]
            );
          }),
          (o.lab.xyz = function (e) {
            let t, r, n;
            (r = (e[0] + 16) / 116), (t = e[1] / 500 + r), (n = r - e[2] / 200);
            const a = r ** 3,
              o = t ** 3,
              i = n ** 3;
            return (
              (r = a > 0.008856 ? a : (r - 16 / 116) / 7.787),
              (t = o > 0.008856 ? o : (t - 16 / 116) / 7.787),
              (n = i > 0.008856 ? i : (n - 16 / 116) / 7.787),
              (t *= 95.047),
              (r *= 100),
              (n *= 108.883),
              [t, r, n]
            );
          }),
          (o.lab.lch = function (e) {
            const t = e[0],
              r = e[1],
              n = e[2];
            let a;
            return (
              (a = (360 * Math.atan2(n, r)) / 2 / Math.PI),
              a < 0 && (a += 360),
              [t, Math.sqrt(r * r + n * n), a]
            );
          }),
          (o.lch.lab = function (e) {
            const t = e[0],
              r = e[1],
              n = (e[2] / 360) * 2 * Math.PI;
            return [t, r * Math.cos(n), r * Math.sin(n)];
          }),
          (o.rgb.ansi16 = function (e, t = null) {
            const [r, n, a] = e;
            let i = null === t ? o.rgb.hsv(e)[2] : t;
            if (((i = Math.round(i / 50)), 0 === i)) return 30;
            let l =
              30 +
              ((Math.round(a / 255) << 2) |
                (Math.round(n / 255) << 1) |
                Math.round(r / 255));
            return 2 === i && (l += 60), l;
          }),
          (o.hsv.ansi16 = function (e) {
            return o.rgb.ansi16(o.hsv.rgb(e), e[2]);
          }),
          (o.rgb.ansi256 = function (e) {
            const t = e[0],
              r = e[1],
              n = e[2];
            return t === r && r === n
              ? t < 8
                ? 16
                : t > 248
                ? 231
                : Math.round(((t - 8) / 247) * 24) + 232
              : 16 +
                  36 * Math.round((t / 255) * 5) +
                  6 * Math.round((r / 255) * 5) +
                  Math.round((n / 255) * 5);
          }),
          (o.ansi16.rgb = function (e) {
            let t = e % 10;
            if (0 === t || 7 === t)
              return e > 50 && (t += 3.5), (t = (t / 10.5) * 255), [t, t, t];
            const r = 0.5 * (1 + ~~(e > 50));
            return [
              (1 & t) * r * 255,
              ((t >> 1) & 1) * r * 255,
              ((t >> 2) & 1) * r * 255,
            ];
          }),
          (o.ansi256.rgb = function (e) {
            if (e >= 232) {
              const t = 10 * (e - 232) + 8;
              return [t, t, t];
            }
            let t;
            return (
              (e -= 16),
              [
                (Math.floor(e / 36) / 5) * 255,
                (Math.floor((t = e % 36) / 6) / 5) * 255,
                ((t % 6) / 5) * 255,
              ]
            );
          }),
          (o.rgb.hex = function (e) {
            const t = (
              ((255 & Math.round(e[0])) << 16) +
              ((255 & Math.round(e[1])) << 8) +
              (255 & Math.round(e[2]))
            )
              .toString(16)
              .toUpperCase();
            return "000000".substring(t.length) + t;
          }),
          (o.hex.rgb = function (e) {
            const t = e.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
            if (!t) return [0, 0, 0];
            let r = t[0];
            3 === t[0].length &&
              (r = r
                .split("")
                .map((e) => e + e)
                .join(""));
            const n = parseInt(r, 16);
            return [(n >> 16) & 255, (n >> 8) & 255, 255 & n];
          }),
          (o.rgb.hcg = function (e) {
            const t = e[0] / 255,
              r = e[1] / 255,
              n = e[2] / 255,
              a = Math.max(Math.max(t, r), n),
              o = Math.min(Math.min(t, r), n),
              i = a - o;
            let l, u;
            return (
              (l = i < 1 ? o / (1 - i) : 0),
              (u =
                i <= 0
                  ? 0
                  : a === t
                  ? ((r - n) / i) % 6
                  : a === r
                  ? 2 + (n - t) / i
                  : 4 + (t - r) / i),
              (u /= 6),
              (u %= 1),
              [360 * u, 100 * i, 100 * l]
            );
          }),
          (o.hsl.hcg = function (e) {
            const t = e[1] / 100,
              r = e[2] / 100,
              n = r < 0.5 ? 2 * t * r : 2 * t * (1 - r);
            let a = 0;
            return (
              n < 1 && (a = (r - 0.5 * n) / (1 - n)), [e[0], 100 * n, 100 * a]
            );
          }),
          (o.hsv.hcg = function (e) {
            const t = e[1] / 100,
              r = e[2] / 100,
              n = t * r;
            let a = 0;
            return n < 1 && (a = (r - n) / (1 - n)), [e[0], 100 * n, 100 * a];
          }),
          (o.hcg.rgb = function (e) {
            const t = e[0] / 360,
              r = e[1] / 100,
              n = e[2] / 100;
            if (0 === r) return [255 * n, 255 * n, 255 * n];
            const a = [0, 0, 0],
              o = (t % 1) * 6,
              i = o % 1,
              l = 1 - i;
            let u = 0;
            switch (Math.floor(o)) {
              case 0:
                (a[0] = 1), (a[1] = i), (a[2] = 0);
                break;
              case 1:
                (a[0] = l), (a[1] = 1), (a[2] = 0);
                break;
              case 2:
                (a[0] = 0), (a[1] = 1), (a[2] = i);
                break;
              case 3:
                (a[0] = 0), (a[1] = l), (a[2] = 1);
                break;
              case 4:
                (a[0] = i), (a[1] = 0), (a[2] = 1);
                break;
              default:
                (a[0] = 1), (a[1] = 0), (a[2] = l);
            }
            return (
              (u = (1 - r) * n),
              [255 * (r * a[0] + u), 255 * (r * a[1] + u), 255 * (r * a[2] + u)]
            );
          }),
          (o.hcg.hsv = function (e) {
            const t = e[1] / 100,
              r = t + (e[2] / 100) * (1 - t);
            let n = 0;
            return r > 0 && (n = t / r), [e[0], 100 * n, 100 * r];
          }),
          (o.hcg.hsl = function (e) {
            const t = e[1] / 100,
              r = (e[2] / 100) * (1 - t) + 0.5 * t;
            let n = 0;
            return (
              r > 0 && r < 0.5
                ? (n = t / (2 * r))
                : r >= 0.5 && r < 1 && (n = t / (2 * (1 - r))),
              [e[0], 100 * n, 100 * r]
            );
          }),
          (o.hcg.hwb = function (e) {
            const t = e[1] / 100,
              r = t + (e[2] / 100) * (1 - t);
            return [e[0], 100 * (r - t), 100 * (1 - r)];
          }),
          (o.hwb.hcg = function (e) {
            const t = e[1] / 100,
              r = 1 - e[2] / 100,
              n = r - t;
            let a = 0;
            return n < 1 && (a = (r - n) / (1 - n)), [e[0], 100 * n, 100 * a];
          }),
          (o.apple.rgb = function (e) {
            return [
              (e[0] / 65535) * 255,
              (e[1] / 65535) * 255,
              (e[2] / 65535) * 255,
            ];
          }),
          (o.rgb.apple = function (e) {
            return [
              (e[0] / 255) * 65535,
              (e[1] / 255) * 65535,
              (e[2] / 255) * 65535,
            ];
          }),
          (o.gray.rgb = function (e) {
            return [(e[0] / 100) * 255, (e[0] / 100) * 255, (e[0] / 100) * 255];
          }),
          (o.gray.hsl = function (e) {
            return [0, 0, e[0]];
          }),
          (o.gray.hsv = o.gray.hsl),
          (o.gray.hwb = function (e) {
            return [0, 100, e[0]];
          }),
          (o.gray.cmyk = function (e) {
            return [0, 0, 0, e[0]];
          }),
          (o.gray.lab = function (e) {
            return [e[0], 0, 0];
          }),
          (o.gray.hex = function (e) {
            const t = 255 & Math.round((e[0] / 100) * 255),
              r = ((t << 16) + (t << 8) + t).toString(16).toUpperCase();
            return "000000".substring(r.length) + r;
          }),
          (o.rgb.gray = function (e) {
            return [((e[0] + e[1] + e[2]) / 3 / 255) * 100];
          });
      },
      2085: (e, t, r) => {
        const n = r(8168),
          a = r(4111),
          o = {};
        Object.keys(n).forEach((e) => {
          (o[e] = {}),
            Object.defineProperty(o[e], "channels", { value: n[e].channels }),
            Object.defineProperty(o[e], "labels", { value: n[e].labels });
          const t = a(e);
          Object.keys(t).forEach((r) => {
            const n = t[r];
            (o[e][r] = (function (e) {
              const t = function (...t) {
                const r = t[0];
                if (null == r) return r;
                r.length > 1 && (t = r);
                const n = e(t);
                if ("object" == typeof n)
                  for (let e = n.length, t = 0; t < e; t++)
                    n[t] = Math.round(n[t]);
                return n;
              };
              return "conversion" in e && (t.conversion = e.conversion), t;
            })(n)),
              (o[e][r].raw = (function (e) {
                const t = function (...t) {
                  const r = t[0];
                  return null == r ? r : (r.length > 1 && (t = r), e(t));
                };
                return "conversion" in e && (t.conversion = e.conversion), t;
              })(n));
          });
        }),
          (e.exports = o);
      },
      4111: (e, t, r) => {
        const n = r(8168);
        function a(e, t) {
          return function (r) {
            return t(e(r));
          };
        }
        function o(e, t) {
          const r = [t[e].parent, e];
          let o = n[t[e].parent][e],
            i = t[e].parent;
          for (; t[i].parent; )
            r.unshift(t[i].parent),
              (o = a(n[t[i].parent][i], o)),
              (i = t[i].parent);
          return (o.conversion = r), o;
        }
        e.exports = function (e) {
          const t = (function (e) {
              const t = (function () {
                  const e = {},
                    t = Object.keys(n);
                  for (let r = t.length, n = 0; n < r; n++)
                    e[t[n]] = { distance: -1, parent: null };
                  return e;
                })(),
                r = [e];
              for (t[e].distance = 0; r.length; ) {
                const e = r.pop(),
                  a = Object.keys(n[e]);
                for (let n = a.length, o = 0; o < n; o++) {
                  const n = a[o],
                    i = t[n];
                  -1 === i.distance &&
                    ((i.distance = t[e].distance + 1),
                    (i.parent = e),
                    r.unshift(n));
                }
              }
              return t;
            })(e),
            r = {},
            a = Object.keys(t);
          for (let e = a.length, n = 0; n < e; n++) {
            const e = a[n];
            null !== t[e].parent && (r[e] = o(e, t));
          }
          return r;
        };
      },
      8874: (e) => {
        "use strict";
        e.exports = {
          aliceblue: [240, 248, 255],
          antiquewhite: [250, 235, 215],
          aqua: [0, 255, 255],
          aquamarine: [127, 255, 212],
          azure: [240, 255, 255],
          beige: [245, 245, 220],
          bisque: [255, 228, 196],
          black: [0, 0, 0],
          blanchedalmond: [255, 235, 205],
          blue: [0, 0, 255],
          blueviolet: [138, 43, 226],
          brown: [165, 42, 42],
          burlywood: [222, 184, 135],
          cadetblue: [95, 158, 160],
          chartreuse: [127, 255, 0],
          chocolate: [210, 105, 30],
          coral: [255, 127, 80],
          cornflowerblue: [100, 149, 237],
          cornsilk: [255, 248, 220],
          crimson: [220, 20, 60],
          cyan: [0, 255, 255],
          darkblue: [0, 0, 139],
          darkcyan: [0, 139, 139],
          darkgoldenrod: [184, 134, 11],
          darkgray: [169, 169, 169],
          darkgreen: [0, 100, 0],
          darkgrey: [169, 169, 169],
          darkkhaki: [189, 183, 107],
          darkmagenta: [139, 0, 139],
          darkolivegreen: [85, 107, 47],
          darkorange: [255, 140, 0],
          darkorchid: [153, 50, 204],
          darkred: [139, 0, 0],
          darksalmon: [233, 150, 122],
          darkseagreen: [143, 188, 143],
          darkslateblue: [72, 61, 139],
          darkslategray: [47, 79, 79],
          darkslategrey: [47, 79, 79],
          darkturquoise: [0, 206, 209],
          darkviolet: [148, 0, 211],
          deeppink: [255, 20, 147],
          deepskyblue: [0, 191, 255],
          dimgray: [105, 105, 105],
          dimgrey: [105, 105, 105],
          dodgerblue: [30, 144, 255],
          firebrick: [178, 34, 34],
          floralwhite: [255, 250, 240],
          forestgreen: [34, 139, 34],
          fuchsia: [255, 0, 255],
          gainsboro: [220, 220, 220],
          ghostwhite: [248, 248, 255],
          gold: [255, 215, 0],
          goldenrod: [218, 165, 32],
          gray: [128, 128, 128],
          green: [0, 128, 0],
          greenyellow: [173, 255, 47],
          grey: [128, 128, 128],
          honeydew: [240, 255, 240],
          hotpink: [255, 105, 180],
          indianred: [205, 92, 92],
          indigo: [75, 0, 130],
          ivory: [255, 255, 240],
          khaki: [240, 230, 140],
          lavender: [230, 230, 250],
          lavenderblush: [255, 240, 245],
          lawngreen: [124, 252, 0],
          lemonchiffon: [255, 250, 205],
          lightblue: [173, 216, 230],
          lightcoral: [240, 128, 128],
          lightcyan: [224, 255, 255],
          lightgoldenrodyellow: [250, 250, 210],
          lightgray: [211, 211, 211],
          lightgreen: [144, 238, 144],
          lightgrey: [211, 211, 211],
          lightpink: [255, 182, 193],
          lightsalmon: [255, 160, 122],
          lightseagreen: [32, 178, 170],
          lightskyblue: [135, 206, 250],
          lightslategray: [119, 136, 153],
          lightslategrey: [119, 136, 153],
          lightsteelblue: [176, 196, 222],
          lightyellow: [255, 255, 224],
          lime: [0, 255, 0],
          limegreen: [50, 205, 50],
          linen: [250, 240, 230],
          magenta: [255, 0, 255],
          maroon: [128, 0, 0],
          mediumaquamarine: [102, 205, 170],
          mediumblue: [0, 0, 205],
          mediumorchid: [186, 85, 211],
          mediumpurple: [147, 112, 219],
          mediumseagreen: [60, 179, 113],
          mediumslateblue: [123, 104, 238],
          mediumspringgreen: [0, 250, 154],
          mediumturquoise: [72, 209, 204],
          mediumvioletred: [199, 21, 133],
          midnightblue: [25, 25, 112],
          mintcream: [245, 255, 250],
          mistyrose: [255, 228, 225],
          moccasin: [255, 228, 181],
          navajowhite: [255, 222, 173],
          navy: [0, 0, 128],
          oldlace: [253, 245, 230],
          olive: [128, 128, 0],
          olivedrab: [107, 142, 35],
          orange: [255, 165, 0],
          orangered: [255, 69, 0],
          orchid: [218, 112, 214],
          palegoldenrod: [238, 232, 170],
          palegreen: [152, 251, 152],
          paleturquoise: [175, 238, 238],
          palevioletred: [219, 112, 147],
          papayawhip: [255, 239, 213],
          peachpuff: [255, 218, 185],
          peru: [205, 133, 63],
          pink: [255, 192, 203],
          plum: [221, 160, 221],
          powderblue: [176, 224, 230],
          purple: [128, 0, 128],
          rebeccapurple: [102, 51, 153],
          red: [255, 0, 0],
          rosybrown: [188, 143, 143],
          royalblue: [65, 105, 225],
          saddlebrown: [139, 69, 19],
          salmon: [250, 128, 114],
          sandybrown: [244, 164, 96],
          seagreen: [46, 139, 87],
          seashell: [255, 245, 238],
          sienna: [160, 82, 45],
          silver: [192, 192, 192],
          skyblue: [135, 206, 235],
          slateblue: [106, 90, 205],
          slategray: [112, 128, 144],
          slategrey: [112, 128, 144],
          snow: [255, 250, 250],
          springgreen: [0, 255, 127],
          steelblue: [70, 130, 180],
          tan: [210, 180, 140],
          teal: [0, 128, 128],
          thistle: [216, 191, 216],
          tomato: [255, 99, 71],
          turquoise: [64, 224, 208],
          violet: [238, 130, 238],
          wheat: [245, 222, 179],
          white: [255, 255, 255],
          whitesmoke: [245, 245, 245],
          yellow: [255, 255, 0],
          yellowgreen: [154, 205, 50],
        };
      },
      5299: (e, t, r) => {
        var n = r(7698);
        e.exports = n;
      },
      3450: (e, t, r) => {
        var n = r(3363);
        e.exports = n;
      },
      6820: (e, t, r) => {
        var n = r(6243);
        e.exports = n;
      },
      4671: (e, t, r) => {
        var n = r(3698);
        e.exports = n;
      },
      4234: (e, t, r) => {
        var n = r(2073);
        e.exports = n;
      },
      3536: (e, t, r) => {
        var n = r(1910);
        e.exports = n;
      },
      281: (e, t, r) => {
        var n = r(2547);
        e.exports = n;
      },
      4493: (e, t, r) => {
        r(7971), r(3242);
        var n = r(4058);
        e.exports = n.Array.from;
      },
      4034: (e, t, r) => {
        r(2737);
        var n = r(4058);
        e.exports = n.Array.isArray;
      },
      5367: (e, t, r) => {
        r(5906);
        var n = r(5703);
        e.exports = n("Array").concat;
      },
      2710: (e, t, r) => {
        r(6274), r(5967);
        var n = r(5703);
        e.exports = n("Array").entries;
      },
      7671: (e, t, r) => {
        r(833);
        var n = r(5703);
        e.exports = n("Array").find;
      },
      9324: (e, t, r) => {
        r(2437);
        var n = r(5703);
        e.exports = n("Array").forEach;
      },
      5909: (e, t, r) => {
        r(6274), r(5967);
        var n = r(5703);
        e.exports = n("Array").keys;
      },
      4900: (e, t, r) => {
        r(186);
        var n = r(5703);
        e.exports = n("Array").slice;
      },
      3830: (e, t, r) => {
        r(6274), r(7971);
        var n = r(2902);
        e.exports = n;
      },
      5581: (e, t, r) => {
        r(6274), r(7971);
        var n = r(3476);
        e.exports = n;
      },
      6043: (e, t, r) => {
        var n = r(7046),
          a = r(5367),
          o = Array.prototype;
        e.exports = function (e) {
          var t = e.concat;
          return e === o || (n(o, e) && t === o.concat) ? a : t;
        };
      },
      2236: (e, t, r) => {
        var n = r(7046),
          a = r(7671),
          o = Array.prototype;
        e.exports = function (e) {
          var t = e.find;
          return e === o || (n(o, e) && t === o.find) ? a : t;
        };
      },
      9601: (e, t, r) => {
        var n = r(7046),
          a = r(4900),
          o = Array.prototype;
        e.exports = function (e) {
          var t = e.slice;
          return e === o || (n(o, e) && t === o.slice) ? a : t;
        };
      },
      4426: (e, t, r) => {
        r(2619);
        var n = r(4058),
          a = r(9730);
        n.JSON || (n.JSON = { stringify: JSON.stringify }),
          (e.exports = function (e, t, r) {
            return a(n.JSON.stringify, null, arguments);
          });
      },
      1018: (e, t, r) => {
        r(6274), r(7501), r(5967), r(7971);
        var n = r(4058);
        e.exports = n.Map;
      },
      5999: (e, t, r) => {
        r(9221);
        var n = r(4058);
        e.exports = n.Object.assign;
      },
      8171: (e, t, r) => {
        r(6450);
        var n = r(4058).Object,
          a = (e.exports = function (e, t, r) {
            return n.defineProperty(e, t, r);
          });
        n.defineProperty.sham && (a.sham = !0);
      },
      8494: (e, t, r) => {
        r(1724);
        var n = r(4058);
        e.exports = n.Object.keys;
      },
      6998: (e, t, r) => {
        r(6274), r(5967), r(9008), r(7971);
        var n = r(4058);
        e.exports = n.Set;
      },
      7473: (e, t, r) => {
        r(5906),
          r(5967),
          r(5824),
          r(8555),
          r(2615),
          r(1732),
          r(5903),
          r(1825),
          r(8394),
          r(5915),
          r(1766),
          r(9791),
          r(9911),
          r(4315),
          r(3131),
          r(4714),
          r(659),
          r(9120),
          r(5327),
          r(1502);
        var n = r(4058);
        e.exports = n.Symbol;
      },
      7385: (e, t, r) => {
        e.exports = r(4225);
      },
      1522: (e, t, r) => {
        e.exports = r(382);
      },
      9574: (e, t, r) => {
        e.exports = r(478);
      },
      1258: (e, t, r) => {
        e.exports = r(9134);
      },
      1493: (e, t, r) => {
        e.exports = r(7088);
      },
      3685: (e, t, r) => {
        e.exports = r(621);
      },
      6600: (e, t, r) => {
        e.exports = r(2201);
      },
      4225: (e, t, r) => {
        var n = r(5299);
        e.exports = n;
      },
      382: (e, t, r) => {
        var n = r(3450);
        e.exports = n;
      },
      478: (e, t, r) => {
        var n = r(6820);
        e.exports = n;
      },
      9134: (e, t, r) => {
        var n = r(4671);
        e.exports = n;
      },
      7088: (e, t, r) => {
        var n = r(4234);
        e.exports = n;
      },
      621: (e, t, r) => {
        var n = r(3536);
        e.exports = n;
      },
      2201: (e, t, r) => {
        var n = r(281);
        r(8783),
          r(3975),
          r(5799),
          r(5414),
          r(6774),
          r(620),
          r(6172),
          (e.exports = n);
      },
      4883: (e, t, r) => {
        var n = r(1899),
          a = r(7475),
          o = r(9826),
          i = n.TypeError;
        e.exports = function (e) {
          if (a(e)) return e;
          throw i(o(e) + " is not a function");
        };
      },
      1851: (e, t, r) => {
        var n = r(1899),
          a = r(7475),
          o = n.String,
          i = n.TypeError;
        e.exports = function (e) {
          if ("object" == typeof e || a(e)) return e;
          throw i("Can't set " + o(e) + " as a prototype");
        };
      },
      8479: (e) => {
        e.exports = function () {};
      },
      5743: (e, t, r) => {
        var n = r(1899),
          a = r(7046),
          o = n.TypeError;
        e.exports = function (e, t) {
          if (a(t, e)) return e;
          throw o("Incorrect invocation");
        };
      },
      6059: (e, t, r) => {
        var n = r(1899),
          a = r(941),
          o = n.String,
          i = n.TypeError;
        e.exports = function (e) {
          if (a(e)) return e;
          throw i(o(e) + " is not an object");
        };
      },
      7135: (e, t, r) => {
        var n = r(5981);
        e.exports = n(function () {
          if ("function" == typeof ArrayBuffer) {
            var e = new ArrayBuffer(8);
            Object.isExtensible(e) &&
              Object.defineProperty(e, "a", { value: 8 });
          }
        });
      },
      6837: (e, t, r) => {
        "use strict";
        var n = r(3610).forEach,
          a = r(4194)("forEach");
        e.exports = a
          ? [].forEach
          : function (e) {
              return n(this, e, arguments.length > 1 ? arguments[1] : void 0);
            };
      },
      1354: (e, t, r) => {
        "use strict";
        var n = r(1899),
          a = r(6843),
          o = r(8834),
          i = r(9678),
          l = r(5196),
          u = r(6782),
          s = r(4284),
          c = r(623),
          d = r(5449),
          p = r(3476),
          f = r(2902),
          m = n.Array;
        e.exports = function (e) {
          var t = i(e),
            r = s(this),
            n = arguments.length,
            h = n > 1 ? arguments[1] : void 0,
            v = void 0 !== h;
          v && (h = a(h, n > 2 ? arguments[2] : void 0));
          var b,
            y,
            g,
            w,
            x,
            E,
            _ = f(t),
            C = 0;
          if (!_ || (this == m && u(_)))
            for (b = c(t), y = r ? new this(b) : m(b); b > C; C++)
              (E = v ? h(t[C], C) : t[C]), d(y, C, E);
          else
            for (
              x = (w = p(t, _)).next, y = r ? new this() : [];
              !(g = o(x, w)).done;
              C++
            )
              (E = v ? l(w, h, [g.value, C], !0) : g.value), d(y, C, E);
          return (y.length = C), y;
        };
      },
      1692: (e, t, r) => {
        var n = r(4529),
          a = r(9413),
          o = r(623),
          i = function (e) {
            return function (t, r, i) {
              var l,
                u = n(t),
                s = o(u),
                c = a(i, s);
              if (e && r != r) {
                for (; s > c; ) if ((l = u[c++]) != l) return !0;
              } else
                for (; s > c; c++)
                  if ((e || c in u) && u[c] === r) return e || c || 0;
              return !e && -1;
            };
          };
        e.exports = { includes: i(!0), indexOf: i(!1) };
      },
      3610: (e, t, r) => {
        var n = r(6843),
          a = r(5329),
          o = r(7026),
          i = r(9678),
          l = r(623),
          u = r(4692),
          s = a([].push),
          c = function (e) {
            var t = 1 == e,
              r = 2 == e,
              a = 3 == e,
              c = 4 == e,
              d = 6 == e,
              p = 7 == e,
              f = 5 == e || d;
            return function (m, h, v, b) {
              for (
                var y,
                  g,
                  w = i(m),
                  x = o(w),
                  E = n(h, v),
                  _ = l(x),
                  C = 0,
                  k = b || u,
                  P = t ? k(m, _) : r || p ? k(m, 0) : void 0;
                _ > C;
                C++
              )
                if ((f || C in x) && ((g = E((y = x[C]), C, w)), e))
                  if (t) P[C] = g;
                  else if (g)
                    switch (e) {
                      case 3:
                        return !0;
                      case 5:
                        return y;
                      case 6:
                        return C;
                      case 2:
                        s(P, y);
                    }
                  else
                    switch (e) {
                      case 4:
                        return !1;
                      case 7:
                        s(P, y);
                    }
              return d ? -1 : a || c ? c : P;
            };
          };
        e.exports = {
          forEach: c(0),
          map: c(1),
          filter: c(2),
          some: c(3),
          every: c(4),
          find: c(5),
          findIndex: c(6),
          filterReject: c(7),
        };
      },
      568: (e, t, r) => {
        var n = r(5981),
          a = r(9813),
          o = r(3385),
          i = a("species");
        e.exports = function (e) {
          return (
            o >= 51 ||
            !n(function () {
              var t = [];
              return (
                ((t.constructor = {})[i] = function () {
                  return { foo: 1 };
                }),
                1 !== t[e](Boolean).foo
              );
            })
          );
        };
      },
      4194: (e, t, r) => {
        "use strict";
        var n = r(5981);
        e.exports = function (e, t) {
          var r = [][e];
          return (
            !!r &&
            n(function () {
              r.call(
                null,
                t ||
                  function () {
                    return 1;
                  },
                1
              );
            })
          );
        };
      },
      5790: (e, t, r) => {
        var n = r(1899),
          a = r(9413),
          o = r(623),
          i = r(5449),
          l = n.Array,
          u = Math.max;
        e.exports = function (e, t, r) {
          for (
            var n = o(e),
              s = a(t, n),
              c = a(void 0 === r ? n : r, n),
              d = l(u(c - s, 0)),
              p = 0;
            s < c;
            s++, p++
          )
            i(d, p, e[s]);
          return (d.length = p), d;
        };
      },
      3765: (e, t, r) => {
        var n = r(5329);
        e.exports = n([].slice);
      },
      5693: (e, t, r) => {
        var n = r(1899),
          a = r(1052),
          o = r(4284),
          i = r(941),
          l = r(9813)("species"),
          u = n.Array;
        e.exports = function (e) {
          var t;
          return (
            a(e) &&
              ((t = e.constructor),
              ((o(t) && (t === u || a(t.prototype))) ||
                (i(t) && null === (t = t[l]))) &&
                (t = void 0)),
            void 0 === t ? u : t
          );
        };
      },
      4692: (e, t, r) => {
        var n = r(5693);
        e.exports = function (e, t) {
          return new (n(e))(0 === t ? 0 : t);
        };
      },
      5196: (e, t, r) => {
        var n = r(6059),
          a = r(7609);
        e.exports = function (e, t, r, o) {
          try {
            return o ? t(n(r)[0], r[1]) : t(r);
          } catch (t) {
            a(e, "throw", t);
          }
        };
      },
      1385: (e, t, r) => {
        var n = r(9813)("iterator"),
          a = !1;
        try {
          var o = 0,
            i = {
              next: function () {
                return { done: !!o++ };
              },
              return: function () {
                a = !0;
              },
            };
          (i[n] = function () {
            return this;
          }),
            Array.from(i, function () {
              throw 2;
            });
        } catch (e) {}
        e.exports = function (e, t) {
          if (!t && !a) return !1;
          var r = !1;
          try {
            var o = {};
            (o[n] = function () {
              return {
                next: function () {
                  return { done: (r = !0) };
                },
              };
            }),
              e(o);
          } catch (e) {}
          return r;
        };
      },
      2532: (e, t, r) => {
        var n = r(5329),
          a = n({}.toString),
          o = n("".slice);
        e.exports = function (e) {
          return o(a(e), 8, -1);
        };
      },
      9697: (e, t, r) => {
        var n = r(1899),
          a = r(2885),
          o = r(7475),
          i = r(2532),
          l = r(9813)("toStringTag"),
          u = n.Object,
          s =
            "Arguments" ==
            i(
              (function () {
                return arguments;
              })()
            );
        e.exports = a
          ? i
          : function (e) {
              var t, r, n;
              return void 0 === e
                ? "Undefined"
                : null === e
                ? "Null"
                : "string" ==
                  typeof (r = (function (e, t) {
                    try {
                      return e[t];
                    } catch (e) {}
                  })((t = u(e)), l))
                ? r
                : s
                ? i(t)
                : "Object" == (n = i(t)) && o(t.callee)
                ? "Arguments"
                : n;
            };
      },
      5616: (e, t, r) => {
        "use strict";
        var n = r(5988).f,
          a = r(9290),
          o = r(7524),
          i = r(6843),
          l = r(5743),
          u = r(3091),
          s = r(7771),
          c = r(4431),
          d = r(5746),
          p = r(1647).fastKey,
          f = r(5402),
          m = f.set,
          h = f.getterFor;
        e.exports = {
          getConstructor: function (e, t, r, s) {
            var c = e(function (e, n) {
                l(e, f),
                  m(e, {
                    type: t,
                    index: a(null),
                    first: void 0,
                    last: void 0,
                    size: 0,
                  }),
                  d || (e.size = 0),
                  null != n && u(n, e[s], { that: e, AS_ENTRIES: r });
              }),
              f = c.prototype,
              v = h(t),
              b = function (e, t, r) {
                var n,
                  a,
                  o = v(e),
                  i = y(e, t);
                return (
                  i
                    ? (i.value = r)
                    : ((o.last = i =
                        {
                          index: (a = p(t, !0)),
                          key: t,
                          value: r,
                          previous: (n = o.last),
                          next: void 0,
                          removed: !1,
                        }),
                      o.first || (o.first = i),
                      n && (n.next = i),
                      d ? o.size++ : e.size++,
                      "F" !== a && (o.index[a] = i)),
                  e
                );
              },
              y = function (e, t) {
                var r,
                  n = v(e),
                  a = p(t);
                if ("F" !== a) return n.index[a];
                for (r = n.first; r; r = r.next) if (r.key == t) return r;
              };
            return (
              o(f, {
                clear: function () {
                  for (var e = v(this), t = e.index, r = e.first; r; )
                    (r.removed = !0),
                      r.previous && (r.previous = r.previous.next = void 0),
                      delete t[r.index],
                      (r = r.next);
                  (e.first = e.last = void 0),
                    d ? (e.size = 0) : (this.size = 0);
                },
                delete: function (e) {
                  var t = this,
                    r = v(t),
                    n = y(t, e);
                  if (n) {
                    var a = n.next,
                      o = n.previous;
                    delete r.index[n.index],
                      (n.removed = !0),
                      o && (o.next = a),
                      a && (a.previous = o),
                      r.first == n && (r.first = a),
                      r.last == n && (r.last = o),
                      d ? r.size-- : t.size--;
                  }
                  return !!n;
                },
                forEach: function (e) {
                  for (
                    var t,
                      r = v(this),
                      n = i(e, arguments.length > 1 ? arguments[1] : void 0);
                    (t = t ? t.next : r.first);

                  )
                    for (n(t.value, t.key, this); t && t.removed; )
                      t = t.previous;
                },
                has: function (e) {
                  return !!y(this, e);
                },
              }),
              o(
                f,
                r
                  ? {
                      get: function (e) {
                        var t = y(this, e);
                        return t && t.value;
                      },
                      set: function (e, t) {
                        return b(this, 0 === e ? 0 : e, t);
                      },
                    }
                  : {
                      add: function (e) {
                        return b(this, (e = 0 === e ? 0 : e), e);
                      },
                    }
              ),
              d &&
                n(f, "size", {
                  get: function () {
                    return v(this).size;
                  },
                }),
              c
            );
          },
          setStrong: function (e, t, r) {
            var n = t + " Iterator",
              a = h(t),
              o = h(n);
            s(
              e,
              t,
              function (e, t) {
                m(this, {
                  type: n,
                  target: e,
                  state: a(e),
                  kind: t,
                  last: void 0,
                });
              },
              function () {
                for (var e = o(this), t = e.kind, r = e.last; r && r.removed; )
                  r = r.previous;
                return e.target && (e.last = r = r ? r.next : e.state.first)
                  ? "keys" == t
                    ? { value: r.key, done: !1 }
                    : "values" == t
                    ? { value: r.value, done: !1 }
                    : { value: [r.key, r.value], done: !1 }
                  : ((e.target = void 0), { value: void 0, done: !0 });
              },
              r ? "entries" : "values",
              !r,
              !0
            ),
              c(t);
          },
        };
      },
      4683: (e, t, r) => {
        "use strict";
        var n = r(6887),
          a = r(1899),
          o = r(1647),
          i = r(5981),
          l = r(2029),
          u = r(3091),
          s = r(5743),
          c = r(7475),
          d = r(941),
          p = r(904),
          f = r(5988).f,
          m = r(3610).forEach,
          h = r(5746),
          v = r(5402),
          b = v.set,
          y = v.getterFor;
        e.exports = function (e, t, r) {
          var v,
            g = -1 !== e.indexOf("Map"),
            w = -1 !== e.indexOf("Weak"),
            x = g ? "set" : "add",
            E = a[e],
            _ = E && E.prototype,
            C = {};
          if (
            h &&
            c(E) &&
            (w ||
              (_.forEach &&
                !i(function () {
                  new E().entries().next();
                })))
          ) {
            var k = (v = t(function (t, r) {
                b(s(t, k), { type: e, collection: new E() }),
                  null != r && u(r, t[x], { that: t, AS_ENTRIES: g });
              })).prototype,
              P = y(e);
            m(
              [
                "add",
                "clear",
                "delete",
                "forEach",
                "get",
                "has",
                "set",
                "keys",
                "values",
                "entries",
              ],
              function (e) {
                var t = "add" == e || "set" == e;
                !(e in _) ||
                  (w && "clear" == e) ||
                  l(k, e, function (r, n) {
                    var a = P(this).collection;
                    if (!t && w && !d(r)) return "get" == e && void 0;
                    var o = a[e](0 === r ? 0 : r, n);
                    return t ? this : o;
                  });
              }
            ),
              w ||
                f(k, "size", {
                  configurable: !0,
                  get: function () {
                    return P(this).collection.size;
                  },
                });
          } else (v = r.getConstructor(t, e, g, x)), o.enable();
          return (
            p(v, e, !1, !0),
            (C[e] = v),
            n({ global: !0, forced: !0 }, C),
            w || r.setStrong(v, e, g),
            v
          );
        };
      },
      4160: (e, t, r) => {
        var n = r(5981);
        e.exports = !n(function () {
          function e() {}
          return (
            (e.prototype.constructor = null),
            Object.getPrototypeOf(new e()) !== e.prototype
          );
        });
      },
      1046: (e, t, r) => {
        "use strict";
        var n = r(5143).IteratorPrototype,
          a = r(9290),
          o = r(1887),
          i = r(904),
          l = r(2077),
          u = function () {
            return this;
          };
        e.exports = function (e, t, r, s) {
          var c = t + " Iterator";
          return (
            (e.prototype = a(n, { next: o(+!s, r) })),
            i(e, c, !1, !0),
            (l[c] = u),
            e
          );
        };
      },
      2029: (e, t, r) => {
        var n = r(5746),
          a = r(5988),
          o = r(1887);
        e.exports = n
          ? function (e, t, r) {
              return a.f(e, t, o(1, r));
            }
          : function (e, t, r) {
              return (e[t] = r), e;
            };
      },
      1887: (e) => {
        e.exports = function (e, t) {
          return {
            enumerable: !(1 & e),
            configurable: !(2 & e),
            writable: !(4 & e),
            value: t,
          };
        };
      },
      5449: (e, t, r) => {
        "use strict";
        var n = r(3894),
          a = r(5988),
          o = r(1887);
        e.exports = function (e, t, r) {
          var i = n(t);
          i in e ? a.f(e, i, o(0, r)) : (e[i] = r);
        };
      },
      7771: (e, t, r) => {
        "use strict";
        var n = r(6887),
          a = r(8834),
          o = r(2529),
          i = r(9417),
          l = r(7475),
          u = r(1046),
          s = r(249),
          c = r(8929),
          d = r(904),
          p = r(2029),
          f = r(9754),
          m = r(9813),
          h = r(2077),
          v = r(5143),
          b = i.PROPER,
          y = i.CONFIGURABLE,
          g = v.IteratorPrototype,
          w = v.BUGGY_SAFARI_ITERATORS,
          x = m("iterator"),
          E = "keys",
          _ = "values",
          C = "entries",
          k = function () {
            return this;
          };
        e.exports = function (e, t, r, i, m, v, P) {
          u(r, t, i);
          var S,
            q,
            R,
            T = function (e) {
              if (e === m && L) return L;
              if (!w && e in N) return N[e];
              switch (e) {
                case E:
                case _:
                case C:
                  return function () {
                    return new r(this, e);
                  };
              }
              return function () {
                return new r(this);
              };
            },
            O = t + " Iterator",
            M = !1,
            N = e.prototype,
            I = N[x] || N["@@iterator"] || (m && N[m]),
            L = (!w && I) || T(m),
            A = ("Array" == t && N.entries) || I;
          if (
            (A &&
              (S = s(A.call(new e()))) !== Object.prototype &&
              S.next &&
              (o || s(S) === g || (c ? c(S, g) : l(S[x]) || f(S, x, k)),
              d(S, O, !0, !0),
              o && (h[O] = k)),
            b &&
              m == _ &&
              I &&
              I.name !== _ &&
              (!o && y
                ? p(N, "name", _)
                : ((M = !0),
                  (L = function () {
                    return a(I, this);
                  }))),
            m)
          )
            if (((q = { values: T(_), keys: v ? L : T(E), entries: T(C) }), P))
              for (R in q) (w || M || !(R in N)) && f(N, R, q[R]);
            else n({ target: t, proto: !0, forced: w || M }, q);
          return (
            (o && !P) || N[x] === L || f(N, x, L, { name: m }), (h[t] = L), q
          );
        };
      },
      6349: (e, t, r) => {
        var n = r(4058),
          a = r(953),
          o = r(1477),
          i = r(5988).f;
        e.exports = function (e) {
          var t = n.Symbol || (n.Symbol = {});
          a(t, e) || i(t, e, { value: o.f(e) });
        };
      },
      5746: (e, t, r) => {
        var n = r(5981);
        e.exports = !n(function () {
          return (
            7 !=
            Object.defineProperty({}, 1, {
              get: function () {
                return 7;
              },
            })[1]
          );
        });
      },
      1333: (e, t, r) => {
        var n = r(1899),
          a = r(941),
          o = n.document,
          i = a(o) && a(o.createElement);
        e.exports = function (e) {
          return i ? o.createElement(e) : {};
        };
      },
      3281: (e) => {
        e.exports = {
          CSSRuleList: 0,
          CSSStyleDeclaration: 0,
          CSSValueList: 0,
          ClientRectList: 0,
          DOMRectList: 0,
          DOMStringList: 0,
          DOMTokenList: 1,
          DataTransferItemList: 0,
          FileList: 0,
          HTMLAllCollection: 0,
          HTMLCollection: 0,
          HTMLFormElement: 0,
          HTMLSelectElement: 0,
          MediaList: 0,
          MimeTypeArray: 0,
          NamedNodeMap: 0,
          NodeList: 1,
          PaintRequestList: 0,
          Plugin: 0,
          PluginArray: 0,
          SVGLengthList: 0,
          SVGNumberList: 0,
          SVGPathSegList: 0,
          SVGPointList: 0,
          SVGStringList: 0,
          SVGTransformList: 0,
          SourceBufferList: 0,
          StyleSheetList: 0,
          TextTrackCueList: 0,
          TextTrackList: 0,
          TouchList: 0,
        };
      },
      2861: (e, t, r) => {
        var n = r(626);
        e.exports = n("navigator", "userAgent") || "";
      },
      3385: (e, t, r) => {
        var n,
          a,
          o = r(1899),
          i = r(2861),
          l = o.process,
          u = o.Deno,
          s = (l && l.versions) || (u && u.version),
          c = s && s.v8;
        c && (a = (n = c.split("."))[0] > 0 && n[0] < 4 ? 1 : +(n[0] + n[1])),
          !a &&
            i &&
            (!(n = i.match(/Edge\/(\d+)/)) || n[1] >= 74) &&
            (n = i.match(/Chrome\/(\d+)/)) &&
            (a = +n[1]),
          (e.exports = a);
      },
      5703: (e, t, r) => {
        var n = r(4058);
        e.exports = function (e) {
          return n[e + "Prototype"];
        };
      },
      6759: (e) => {
        e.exports = [
          "constructor",
          "hasOwnProperty",
          "isPrototypeOf",
          "propertyIsEnumerable",
          "toLocaleString",
          "toString",
          "valueOf",
        ];
      },
      6887: (e, t, r) => {
        "use strict";
        var n = r(1899),
          a = r(9730),
          o = r(5329),
          i = r(7475),
          l = r(9677).f,
          u = r(7252),
          s = r(4058),
          c = r(6843),
          d = r(2029),
          p = r(953),
          f = function (e) {
            var t = function (r, n, o) {
              if (this instanceof t) {
                switch (arguments.length) {
                  case 0:
                    return new e();
                  case 1:
                    return new e(r);
                  case 2:
                    return new e(r, n);
                }
                return new e(r, n, o);
              }
              return a(e, this, arguments);
            };
            return (t.prototype = e.prototype), t;
          };
        e.exports = function (e, t) {
          var r,
            a,
            m,
            h,
            v,
            b,
            y,
            g,
            w = e.target,
            x = e.global,
            E = e.stat,
            _ = e.proto,
            C = x ? n : E ? n[w] : (n[w] || {}).prototype,
            k = x ? s : s[w] || d(s, w, {})[w],
            P = k.prototype;
          for (m in t)
            (r = !u(x ? m : w + (E ? "." : "#") + m, e.forced) && C && p(C, m)),
              (v = k[m]),
              r && (b = e.noTargetGet ? (g = l(C, m)) && g.value : C[m]),
              (h = r && b ? b : t[m]),
              (r && typeof v == typeof h) ||
                ((y =
                  e.bind && r
                    ? c(h, n)
                    : e.wrap && r
                    ? f(h)
                    : _ && i(h)
                    ? o(h)
                    : h),
                (e.sham || (h && h.sham) || (v && v.sham)) && d(y, "sham", !0),
                d(k, m, y),
                _ &&
                  (p(s, (a = w + "Prototype")) || d(s, a, {}),
                  d(s[a], m, h),
                  e.real && P && !P[m] && d(P, m, h)));
        };
      },
      5981: (e) => {
        e.exports = function (e) {
          try {
            return !!e();
          } catch (e) {
            return !0;
          }
        };
      },
      5602: (e, t, r) => {
        var n = r(5981);
        e.exports = !n(function () {
          return Object.isExtensible(Object.preventExtensions({}));
        });
      },
      9730: (e, t, r) => {
        var n = r(8285),
          a = Function.prototype,
          o = a.apply,
          i = a.call;
        e.exports =
          ("object" == typeof Reflect && Reflect.apply) ||
          (n
            ? i.bind(o)
            : function () {
                return i.apply(o, arguments);
              });
      },
      6843: (e, t, r) => {
        var n = r(5329),
          a = r(4883),
          o = r(8285),
          i = n(n.bind);
        e.exports = function (e, t) {
          return (
            a(e),
            void 0 === t
              ? e
              : o
              ? i(e, t)
              : function () {
                  return e.apply(t, arguments);
                }
          );
        };
      },
      8285: (e, t, r) => {
        var n = r(5981);
        e.exports = !n(function () {
          var e = function () {}.bind();
          return "function" != typeof e || e.hasOwnProperty("prototype");
        });
      },
      8834: (e, t, r) => {
        var n = r(8285),
          a = Function.prototype.call;
        e.exports = n
          ? a.bind(a)
          : function () {
              return a.apply(a, arguments);
            };
      },
      9417: (e, t, r) => {
        var n = r(5746),
          a = r(953),
          o = Function.prototype,
          i = n && Object.getOwnPropertyDescriptor,
          l = a(o, "name"),
          u = l && "something" === function () {}.name,
          s = l && (!n || (n && i(o, "name").configurable));
        e.exports = { EXISTS: l, PROPER: u, CONFIGURABLE: s };
      },
      5329: (e, t, r) => {
        var n = r(8285),
          a = Function.prototype,
          o = a.bind,
          i = a.call,
          l = n && o.bind(i, i);
        e.exports = n
          ? function (e) {
              return e && l(e);
            }
          : function (e) {
              return (
                e &&
                function () {
                  return i.apply(e, arguments);
                }
              );
            };
      },
      626: (e, t, r) => {
        var n = r(4058),
          a = r(1899),
          o = r(7475),
          i = function (e) {
            return o(e) ? e : void 0;
          };
        e.exports = function (e, t) {
          return arguments.length < 2
            ? i(n[e]) || i(a[e])
            : (n[e] && n[e][t]) || (a[e] && a[e][t]);
        };
      },
      2902: (e, t, r) => {
        var n = r(9697),
          a = r(4229),
          o = r(2077),
          i = r(9813)("iterator");
        e.exports = function (e) {
          if (null != e) return a(e, i) || a(e, "@@iterator") || o[n(e)];
        };
      },
      3476: (e, t, r) => {
        var n = r(1899),
          a = r(8834),
          o = r(4883),
          i = r(6059),
          l = r(9826),
          u = r(2902),
          s = n.TypeError;
        e.exports = function (e, t) {
          var r = arguments.length < 2 ? u(e) : t;
          if (o(r)) return i(a(r, e));
          throw s(l(e) + " is not iterable");
        };
      },
      4229: (e, t, r) => {
        var n = r(4883);
        e.exports = function (e, t) {
          var r = e[t];
          return null == r ? void 0 : n(r);
        };
      },
      1899: (e, t, r) => {
        var n = function (e) {
          return e && e.Math == Math && e;
        };
        e.exports =
          n("object" == typeof globalThis && globalThis) ||
          n("object" == typeof window && window) ||
          n("object" == typeof self && self) ||
          n("object" == typeof r.g && r.g) ||
          (function () {
            return this;
          })() ||
          Function("return this")();
      },
      953: (e, t, r) => {
        var n = r(5329),
          a = r(9678),
          o = n({}.hasOwnProperty);
        e.exports =
          Object.hasOwn ||
          function (e, t) {
            return o(a(e), t);
          };
      },
      7748: (e) => {
        e.exports = {};
      },
      5463: (e, t, r) => {
        var n = r(626);
        e.exports = n("document", "documentElement");
      },
      2840: (e, t, r) => {
        var n = r(5746),
          a = r(5981),
          o = r(1333);
        e.exports =
          !n &&
          !a(function () {
            return (
              7 !=
              Object.defineProperty(o("div"), "a", {
                get: function () {
                  return 7;
                },
              }).a
            );
          });
      },
      7026: (e, t, r) => {
        var n = r(1899),
          a = r(5329),
          o = r(5981),
          i = r(2532),
          l = n.Object,
          u = a("".split);
        e.exports = o(function () {
          return !l("z").propertyIsEnumerable(0);
        })
          ? function (e) {
              return "String" == i(e) ? u(e, "") : l(e);
            }
          : l;
      },
      1302: (e, t, r) => {
        var n = r(5329),
          a = r(7475),
          o = r(3030),
          i = n(Function.toString);
        a(o.inspectSource) ||
          (o.inspectSource = function (e) {
            return i(e);
          }),
          (e.exports = o.inspectSource);
      },
      1647: (e, t, r) => {
        var n = r(6887),
          a = r(5329),
          o = r(7748),
          i = r(941),
          l = r(953),
          u = r(5988).f,
          s = r(946),
          c = r(684),
          d = r(1584),
          p = r(9418),
          f = r(5602),
          m = !1,
          h = p("meta"),
          v = 0,
          b = function (e) {
            u(e, h, { value: { objectID: "O" + v++, weakData: {} } });
          },
          y = (e.exports = {
            enable: function () {
              (y.enable = function () {}), (m = !0);
              var e = s.f,
                t = a([].splice),
                r = {};
              (r[h] = 1),
                e(r).length &&
                  ((s.f = function (r) {
                    for (var n = e(r), a = 0, o = n.length; a < o; a++)
                      if (n[a] === h) {
                        t(n, a, 1);
                        break;
                      }
                    return n;
                  }),
                  n(
                    { target: "Object", stat: !0, forced: !0 },
                    { getOwnPropertyNames: c.f }
                  ));
            },
            fastKey: function (e, t) {
              if (!i(e))
                return "symbol" == typeof e
                  ? e
                  : ("string" == typeof e ? "S" : "P") + e;
              if (!l(e, h)) {
                if (!d(e)) return "F";
                if (!t) return "E";
                b(e);
              }
              return e[h].objectID;
            },
            getWeakData: function (e, t) {
              if (!l(e, h)) {
                if (!d(e)) return !0;
                if (!t) return !1;
                b(e);
              }
              return e[h].weakData;
            },
            onFreeze: function (e) {
              return f && m && d(e) && !l(e, h) && b(e), e;
            },
          });
        o[h] = !0;
      },
      5402: (e, t, r) => {
        var n,
          a,
          o,
          i = r(8019),
          l = r(1899),
          u = r(5329),
          s = r(941),
          c = r(2029),
          d = r(953),
          p = r(3030),
          f = r(4262),
          m = r(7748),
          h = "Object already initialized",
          v = l.TypeError,
          b = l.WeakMap;
        if (i || p.state) {
          var y = p.state || (p.state = new b()),
            g = u(y.get),
            w = u(y.has),
            x = u(y.set);
          (n = function (e, t) {
            if (w(y, e)) throw new v(h);
            return (t.facade = e), x(y, e, t), t;
          }),
            (a = function (e) {
              return g(y, e) || {};
            }),
            (o = function (e) {
              return w(y, e);
            });
        } else {
          var E = f("state");
          (m[E] = !0),
            (n = function (e, t) {
              if (d(e, E)) throw new v(h);
              return (t.facade = e), c(e, E, t), t;
            }),
            (a = function (e) {
              return d(e, E) ? e[E] : {};
            }),
            (o = function (e) {
              return d(e, E);
            });
        }
        e.exports = {
          set: n,
          get: a,
          has: o,
          enforce: function (e) {
            return o(e) ? a(e) : n(e, {});
          },
          getterFor: function (e) {
            return function (t) {
              var r;
              if (!s(t) || (r = a(t)).type !== e)
                throw v("Incompatible receiver, " + e + " required");
              return r;
            };
          },
        };
      },
      6782: (e, t, r) => {
        var n = r(9813),
          a = r(2077),
          o = n("iterator"),
          i = Array.prototype;
        e.exports = function (e) {
          return void 0 !== e && (a.Array === e || i[o] === e);
        };
      },
      1052: (e, t, r) => {
        var n = r(2532);
        e.exports =
          Array.isArray ||
          function (e) {
            return "Array" == n(e);
          };
      },
      7475: (e) => {
        e.exports = function (e) {
          return "function" == typeof e;
        };
      },
      4284: (e, t, r) => {
        var n = r(5329),
          a = r(5981),
          o = r(7475),
          i = r(9697),
          l = r(626),
          u = r(1302),
          s = function () {},
          c = [],
          d = l("Reflect", "construct"),
          p = /^\s*(?:class|function)\b/,
          f = n(p.exec),
          m = !p.exec(s),
          h = function (e) {
            if (!o(e)) return !1;
            try {
              return d(s, c, e), !0;
            } catch (e) {
              return !1;
            }
          },
          v = function (e) {
            if (!o(e)) return !1;
            switch (i(e)) {
              case "AsyncFunction":
              case "GeneratorFunction":
              case "AsyncGeneratorFunction":
                return !1;
            }
            try {
              return m || !!f(p, u(e));
            } catch (e) {
              return !0;
            }
          };
        (v.sham = !0),
          (e.exports =
            !d ||
            a(function () {
              var e;
              return (
                h(h.call) ||
                !h(Object) ||
                !h(function () {
                  e = !0;
                }) ||
                e
              );
            })
              ? v
              : h);
      },
      7252: (e, t, r) => {
        var n = r(5981),
          a = r(7475),
          o = /#|\.prototype\./,
          i = function (e, t) {
            var r = u[l(e)];
            return r == c || (r != s && (a(t) ? n(t) : !!t));
          },
          l = (i.normalize = function (e) {
            return String(e).replace(o, ".").toLowerCase();
          }),
          u = (i.data = {}),
          s = (i.NATIVE = "N"),
          c = (i.POLYFILL = "P");
        e.exports = i;
      },
      941: (e, t, r) => {
        var n = r(7475);
        e.exports = function (e) {
          return "object" == typeof e ? null !== e : n(e);
        };
      },
      2529: (e) => {
        e.exports = !0;
      },
      6664: (e, t, r) => {
        var n = r(1899),
          a = r(626),
          o = r(7475),
          i = r(7046),
          l = r(2302),
          u = n.Object;
        e.exports = l
          ? function (e) {
              return "symbol" == typeof e;
            }
          : function (e) {
              var t = a("Symbol");
              return o(t) && i(t.prototype, u(e));
            };
      },
      3091: (e, t, r) => {
        var n = r(1899),
          a = r(6843),
          o = r(8834),
          i = r(6059),
          l = r(9826),
          u = r(6782),
          s = r(623),
          c = r(7046),
          d = r(3476),
          p = r(2902),
          f = r(7609),
          m = n.TypeError,
          h = function (e, t) {
            (this.stopped = e), (this.result = t);
          },
          v = h.prototype;
        e.exports = function (e, t, r) {
          var n,
            b,
            y,
            g,
            w,
            x,
            E,
            _ = r && r.that,
            C = !(!r || !r.AS_ENTRIES),
            k = !(!r || !r.IS_ITERATOR),
            P = !(!r || !r.INTERRUPTED),
            S = a(t, _),
            q = function (e) {
              return n && f(n, "normal", e), new h(!0, e);
            },
            R = function (e) {
              return C
                ? (i(e), P ? S(e[0], e[1], q) : S(e[0], e[1]))
                : P
                ? S(e, q)
                : S(e);
            };
          if (k) n = e;
          else {
            if (!(b = p(e))) throw m(l(e) + " is not iterable");
            if (u(b)) {
              for (y = 0, g = s(e); g > y; y++)
                if ((w = R(e[y])) && c(v, w)) return w;
              return new h(!1);
            }
            n = d(e, b);
          }
          for (x = n.next; !(E = o(x, n)).done; ) {
            try {
              w = R(E.value);
            } catch (e) {
              f(n, "throw", e);
            }
            if ("object" == typeof w && w && c(v, w)) return w;
          }
          return new h(!1);
        };
      },
      7609: (e, t, r) => {
        var n = r(8834),
          a = r(6059),
          o = r(4229);
        e.exports = function (e, t, r) {
          var i, l;
          a(e);
          try {
            if (!(i = o(e, "return"))) {
              if ("throw" === t) throw r;
              return r;
            }
            i = n(i, e);
          } catch (e) {
            (l = !0), (i = e);
          }
          if ("throw" === t) throw r;
          if (l) throw i;
          return a(i), r;
        };
      },
      5143: (e, t, r) => {
        "use strict";
        var n,
          a,
          o,
          i = r(5981),
          l = r(7475),
          u = r(9290),
          s = r(249),
          c = r(9754),
          d = r(9813),
          p = r(2529),
          f = d("iterator"),
          m = !1;
        [].keys &&
          ("next" in (o = [].keys())
            ? (a = s(s(o))) !== Object.prototype && (n = a)
            : (m = !0)),
          null == n ||
          i(function () {
            var e = {};
            return n[f].call(e) !== e;
          })
            ? (n = {})
            : p && (n = u(n)),
          l(n[f]) ||
            c(n, f, function () {
              return this;
            }),
          (e.exports = { IteratorPrototype: n, BUGGY_SAFARI_ITERATORS: m });
      },
      2077: (e) => {
        e.exports = {};
      },
      623: (e, t, r) => {
        var n = r(3057);
        e.exports = function (e) {
          return n(e.length);
        };
      },
      5366: (e, t, r) => {
        var n = r(2497);
        e.exports = n && !!Symbol.for && !!Symbol.keyFor;
      },
      2497: (e, t, r) => {
        var n = r(3385),
          a = r(5981);
        e.exports =
          !!Object.getOwnPropertySymbols &&
          !a(function () {
            var e = Symbol();
            return (
              !String(e) ||
              !(Object(e) instanceof Symbol) ||
              (!Symbol.sham && n && n < 41)
            );
          });
      },
      8019: (e, t, r) => {
        var n = r(1899),
          a = r(7475),
          o = r(1302),
          i = n.WeakMap;
        e.exports = a(i) && /native code/.test(o(i));
      },
      4420: (e, t, r) => {
        "use strict";
        var n = r(5746),
          a = r(5329),
          o = r(8834),
          i = r(5981),
          l = r(4771),
          u = r(7857),
          s = r(6760),
          c = r(9678),
          d = r(7026),
          p = Object.assign,
          f = Object.defineProperty,
          m = a([].concat);
        e.exports =
          !p ||
          i(function () {
            if (
              n &&
              1 !==
                p(
                  { b: 1 },
                  p(
                    f({}, "a", {
                      enumerable: !0,
                      get: function () {
                        f(this, "b", { value: 3, enumerable: !1 });
                      },
                    }),
                    { b: 2 }
                  )
                ).b
            )
              return !0;
            var e = {},
              t = {},
              r = Symbol(),
              a = "abcdefghijklmnopqrst";
            return (
              (e[r] = 7),
              a.split("").forEach(function (e) {
                t[e] = e;
              }),
              7 != p({}, e)[r] || l(p({}, t)).join("") != a
            );
          })
            ? function (e, t) {
                for (
                  var r = c(e), a = arguments.length, i = 1, p = u.f, f = s.f;
                  a > i;

                )
                  for (
                    var h,
                      v = d(arguments[i++]),
                      b = p ? m(l(v), p(v)) : l(v),
                      y = b.length,
                      g = 0;
                    y > g;

                  )
                    (h = b[g++]), (n && !o(f, v, h)) || (r[h] = v[h]);
                return r;
              }
            : p;
      },
      9290: (e, t, r) => {
        var n,
          a = r(6059),
          o = r(9938),
          i = r(6759),
          l = r(7748),
          u = r(5463),
          s = r(1333),
          c = r(4262)("IE_PROTO"),
          d = function () {},
          p = function (e) {
            return "<script>" + e + "</script>";
          },
          f = function (e) {
            e.write(p("")), e.close();
            var t = e.parentWindow.Object;
            return (e = null), t;
          },
          m = function () {
            try {
              n = new ActiveXObject("htmlfile");
            } catch (e) {}
            var e, t;
            m =
              "undefined" != typeof document
                ? document.domain && n
                  ? f(n)
                  : (((t = s("iframe")).style.display = "none"),
                    u.appendChild(t),
                    (t.src = String("javascript:")),
                    (e = t.contentWindow.document).open(),
                    e.write(p("document.F=Object")),
                    e.close(),
                    e.F)
                : f(n);
            for (var r = i.length; r--; ) delete m.prototype[i[r]];
            return m();
          };
        (l[c] = !0),
          (e.exports =
            Object.create ||
            function (e, t) {
              var r;
              return (
                null !== e
                  ? ((d.prototype = a(e)),
                    (r = new d()),
                    (d.prototype = null),
                    (r[c] = e))
                  : (r = m()),
                void 0 === t ? r : o.f(r, t)
              );
            });
      },
      9938: (e, t, r) => {
        var n = r(5746),
          a = r(3937),
          o = r(5988),
          i = r(6059),
          l = r(4529),
          u = r(4771);
        t.f =
          n && !a
            ? Object.defineProperties
            : function (e, t) {
                i(e);
                for (var r, n = l(t), a = u(t), s = a.length, c = 0; s > c; )
                  o.f(e, (r = a[c++]), n[r]);
                return e;
              };
      },
      5988: (e, t, r) => {
        var n = r(1899),
          a = r(5746),
          o = r(2840),
          i = r(3937),
          l = r(6059),
          u = r(3894),
          s = n.TypeError,
          c = Object.defineProperty,
          d = Object.getOwnPropertyDescriptor;
        t.f = a
          ? i
            ? function (e, t, r) {
                if (
                  (l(e),
                  (t = u(t)),
                  l(r),
                  "function" == typeof e &&
                    "prototype" === t &&
                    "value" in r &&
                    "writable" in r &&
                    !r.writable)
                ) {
                  var n = d(e, t);
                  n &&
                    n.writable &&
                    ((e[t] = r.value),
                    (r = {
                      configurable:
                        "configurable" in r ? r.configurable : n.configurable,
                      enumerable:
                        "enumerable" in r ? r.enumerable : n.enumerable,
                      writable: !1,
                    }));
                }
                return c(e, t, r);
              }
            : c
          : function (e, t, r) {
              if ((l(e), (t = u(t)), l(r), o))
                try {
                  return c(e, t, r);
                } catch (e) {}
              if ("get" in r || "set" in r) throw s("Accessors not supported");
              return "value" in r && (e[t] = r.value), e;
            };
      },
      9677: (e, t, r) => {
        var n = r(5746),
          a = r(8834),
          o = r(6760),
          i = r(1887),
          l = r(4529),
          u = r(3894),
          s = r(953),
          c = r(2840),
          d = Object.getOwnPropertyDescriptor;
        t.f = n
          ? d
          : function (e, t) {
              if (((e = l(e)), (t = u(t)), c))
                try {
                  return d(e, t);
                } catch (e) {}
              if (s(e, t)) return i(!a(o.f, e, t), e[t]);
            };
      },
      684: (e, t, r) => {
        var n = r(2532),
          a = r(4529),
          o = r(946).f,
          i = r(5790),
          l =
            "object" == typeof window && window && Object.getOwnPropertyNames
              ? Object.getOwnPropertyNames(window)
              : [];
        e.exports.f = function (e) {
          return l && "Window" == n(e)
            ? (function (e) {
                try {
                  return o(e);
                } catch (e) {
                  return i(l);
                }
              })(e)
            : o(a(e));
        };
      },
      946: (e, t, r) => {
        var n = r(5629),
          a = r(6759).concat("length", "prototype");
        t.f =
          Object.getOwnPropertyNames ||
          function (e) {
            return n(e, a);
          };
      },
      7857: (e, t) => {
        t.f = Object.getOwnPropertySymbols;
      },
      249: (e, t, r) => {
        var n = r(1899),
          a = r(953),
          o = r(7475),
          i = r(9678),
          l = r(4262),
          u = r(4160),
          s = l("IE_PROTO"),
          c = n.Object,
          d = c.prototype;
        e.exports = u
          ? c.getPrototypeOf
          : function (e) {
              var t = i(e);
              if (a(t, s)) return t[s];
              var r = t.constructor;
              return o(r) && t instanceof r
                ? r.prototype
                : t instanceof c
                ? d
                : null;
            };
      },
      1584: (e, t, r) => {
        var n = r(5981),
          a = r(941),
          o = r(2532),
          i = r(7135),
          l = Object.isExtensible,
          u = n(function () {
            l(1);
          });
        e.exports =
          u || i
            ? function (e) {
                return !!a(e) && (!i || "ArrayBuffer" != o(e)) && (!l || l(e));
              }
            : l;
      },
      7046: (e, t, r) => {
        var n = r(5329);
        e.exports = n({}.isPrototypeOf);
      },
      5629: (e, t, r) => {
        var n = r(5329),
          a = r(953),
          o = r(4529),
          i = r(1692).indexOf,
          l = r(7748),
          u = n([].push);
        e.exports = function (e, t) {
          var r,
            n = o(e),
            s = 0,
            c = [];
          for (r in n) !a(l, r) && a(n, r) && u(c, r);
          for (; t.length > s; ) a(n, (r = t[s++])) && (~i(c, r) || u(c, r));
          return c;
        };
      },
      4771: (e, t, r) => {
        var n = r(5629),
          a = r(6759);
        e.exports =
          Object.keys ||
          function (e) {
            return n(e, a);
          };
      },
      6760: (e, t) => {
        "use strict";
        var r = {}.propertyIsEnumerable,
          n = Object.getOwnPropertyDescriptor,
          a = n && !r.call({ 1: 2 }, 1);
        t.f = a
          ? function (e) {
              var t = n(this, e);
              return !!t && t.enumerable;
            }
          : r;
      },
      8929: (e, t, r) => {
        var n = r(5329),
          a = r(6059),
          o = r(1851);
        e.exports =
          Object.setPrototypeOf ||
          ("__proto__" in {}
            ? (function () {
                var e,
                  t = !1,
                  r = {};
                try {
                  (e = n(
                    Object.getOwnPropertyDescriptor(
                      Object.prototype,
                      "__proto__"
                    ).set
                  ))(r, []),
                    (t = r instanceof Array);
                } catch (e) {}
                return function (r, n) {
                  return a(r), o(n), t ? e(r, n) : (r.__proto__ = n), r;
                };
              })()
            : void 0);
      },
      5623: (e, t, r) => {
        "use strict";
        var n = r(2885),
          a = r(9697);
        e.exports = n
          ? {}.toString
          : function () {
              return "[object " + a(this) + "]";
            };
      },
      9811: (e, t, r) => {
        var n = r(1899),
          a = r(8834),
          o = r(7475),
          i = r(941),
          l = n.TypeError;
        e.exports = function (e, t) {
          var r, n;
          if ("string" === t && o((r = e.toString)) && !i((n = a(r, e))))
            return n;
          if (o((r = e.valueOf)) && !i((n = a(r, e)))) return n;
          if ("string" !== t && o((r = e.toString)) && !i((n = a(r, e))))
            return n;
          throw l("Can't convert object to primitive value");
        };
      },
      4058: (e) => {
        e.exports = {};
      },
      7524: (e, t, r) => {
        var n = r(9754);
        e.exports = function (e, t, r) {
          for (var a in t)
            r && r.unsafe && e[a] ? (e[a] = t[a]) : n(e, a, t[a], r);
          return e;
        };
      },
      9754: (e, t, r) => {
        var n = r(2029);
        e.exports = function (e, t, r, a) {
          a && a.enumerable ? (e[t] = r) : n(e, t, r);
        };
      },
      8219: (e, t, r) => {
        var n = r(1899).TypeError;
        e.exports = function (e) {
          if (null == e) throw n("Can't call method on " + e);
          return e;
        };
      },
      4911: (e, t, r) => {
        var n = r(1899),
          a = Object.defineProperty;
        e.exports = function (e, t) {
          try {
            a(n, e, { value: t, configurable: !0, writable: !0 });
          } catch (r) {
            n[e] = t;
          }
          return t;
        };
      },
      4431: (e, t, r) => {
        "use strict";
        var n = r(626),
          a = r(5988),
          o = r(9813),
          i = r(5746),
          l = o("species");
        e.exports = function (e) {
          var t = n(e),
            r = a.f;
          i &&
            t &&
            !t[l] &&
            r(t, l, {
              configurable: !0,
              get: function () {
                return this;
              },
            });
        };
      },
      904: (e, t, r) => {
        var n = r(2885),
          a = r(5988).f,
          o = r(2029),
          i = r(953),
          l = r(5623),
          u = r(9813)("toStringTag");
        e.exports = function (e, t, r, s) {
          if (e) {
            var c = r ? e : e.prototype;
            i(c, u) || a(c, u, { configurable: !0, value: t }),
              s && !n && o(c, "toString", l);
          }
        };
      },
      4262: (e, t, r) => {
        var n = r(8726),
          a = r(9418),
          o = n("keys");
        e.exports = function (e) {
          return o[e] || (o[e] = a(e));
        };
      },
      3030: (e, t, r) => {
        var n = r(1899),
          a = r(4911),
          o = "__core-js_shared__",
          i = n[o] || a(o, {});
        e.exports = i;
      },
      8726: (e, t, r) => {
        var n = r(2529),
          a = r(3030);
        (e.exports = function (e, t) {
          return a[e] || (a[e] = void 0 !== t ? t : {});
        })("versions", []).push({
          version: "3.22.1",
          mode: n ? "pure" : "global",
          copyright: "© 2014-2022 Denis Pushkarev (zloirock.ru)",
          license: "https://github.com/zloirock/core-js/blob/v3.22.1/LICENSE",
          source: "https://github.com/zloirock/core-js",
        });
      },
      4620: (e, t, r) => {
        var n = r(5329),
          a = r(2435),
          o = r(5803),
          i = r(8219),
          l = n("".charAt),
          u = n("".charCodeAt),
          s = n("".slice),
          c = function (e) {
            return function (t, r) {
              var n,
                c,
                d = o(i(t)),
                p = a(r),
                f = d.length;
              return p < 0 || p >= f
                ? e
                  ? ""
                  : void 0
                : (n = u(d, p)) < 55296 ||
                  n > 56319 ||
                  p + 1 === f ||
                  (c = u(d, p + 1)) < 56320 ||
                  c > 57343
                ? e
                  ? l(d, p)
                  : n
                : e
                ? s(d, p, p + 2)
                : c - 56320 + ((n - 55296) << 10) + 65536;
            };
          };
        e.exports = { codeAt: c(!1), charAt: c(!0) };
      },
      9630: (e, t, r) => {
        var n = r(8834),
          a = r(626),
          o = r(9813),
          i = r(9754);
        e.exports = function () {
          var e = a("Symbol"),
            t = e && e.prototype,
            r = t && t.valueOf,
            l = o("toPrimitive");
          t &&
            !t[l] &&
            i(t, l, function (e) {
              return n(r, this);
            });
        };
      },
      9413: (e, t, r) => {
        var n = r(2435),
          a = Math.max,
          o = Math.min;
        e.exports = function (e, t) {
          var r = n(e);
          return r < 0 ? a(r + t, 0) : o(r, t);
        };
      },
      4529: (e, t, r) => {
        var n = r(7026),
          a = r(8219);
        e.exports = function (e) {
          return n(a(e));
        };
      },
      2435: (e) => {
        var t = Math.ceil,
          r = Math.floor;
        e.exports = function (e) {
          var n = +e;
          return n != n || 0 === n ? 0 : (n > 0 ? r : t)(n);
        };
      },
      3057: (e, t, r) => {
        var n = r(2435),
          a = Math.min;
        e.exports = function (e) {
          return e > 0 ? a(n(e), 9007199254740991) : 0;
        };
      },
      9678: (e, t, r) => {
        var n = r(1899),
          a = r(8219),
          o = n.Object;
        e.exports = function (e) {
          return o(a(e));
        };
      },
      6935: (e, t, r) => {
        var n = r(1899),
          a = r(8834),
          o = r(941),
          i = r(6664),
          l = r(4229),
          u = r(9811),
          s = r(9813),
          c = n.TypeError,
          d = s("toPrimitive");
        e.exports = function (e, t) {
          if (!o(e) || i(e)) return e;
          var r,
            n = l(e, d);
          if (n) {
            if (
              (void 0 === t && (t = "default"), (r = a(n, e, t)), !o(r) || i(r))
            )
              return r;
            throw c("Can't convert object to primitive value");
          }
          return void 0 === t && (t = "number"), u(e, t);
        };
      },
      3894: (e, t, r) => {
        var n = r(6935),
          a = r(6664);
        e.exports = function (e) {
          var t = n(e, "string");
          return a(t) ? t : t + "";
        };
      },
      2885: (e, t, r) => {
        var n = {};
        (n[r(9813)("toStringTag")] = "z"),
          (e.exports = "[object z]" === String(n));
      },
      5803: (e, t, r) => {
        var n = r(1899),
          a = r(9697),
          o = n.String;
        e.exports = function (e) {
          if ("Symbol" === a(e))
            throw TypeError("Cannot convert a Symbol value to a string");
          return o(e);
        };
      },
      9826: (e, t, r) => {
        var n = r(1899).String;
        e.exports = function (e) {
          try {
            return n(e);
          } catch (e) {
            return "Object";
          }
        };
      },
      9418: (e, t, r) => {
        var n = r(5329),
          a = 0,
          o = Math.random(),
          i = n((1).toString);
        e.exports = function (e) {
          return "Symbol(" + (void 0 === e ? "" : e) + ")_" + i(++a + o, 36);
        };
      },
      2302: (e, t, r) => {
        var n = r(2497);
        e.exports = n && !Symbol.sham && "symbol" == typeof Symbol.iterator;
      },
      3937: (e, t, r) => {
        var n = r(5746),
          a = r(5981);
        e.exports =
          n &&
          a(function () {
            return (
              42 !=
              Object.defineProperty(function () {}, "prototype", {
                value: 42,
                writable: !1,
              }).prototype
            );
          });
      },
      1477: (e, t, r) => {
        var n = r(9813);
        t.f = n;
      },
      9813: (e, t, r) => {
        var n = r(1899),
          a = r(8726),
          o = r(953),
          i = r(9418),
          l = r(2497),
          u = r(2302),
          s = a("wks"),
          c = n.Symbol,
          d = c && c.for,
          p = u ? c : (c && c.withoutSetter) || i;
        e.exports = function (e) {
          if (!o(s, e) || (!l && "string" != typeof s[e])) {
            var t = "Symbol." + e;
            l && o(c, e) ? (s[e] = c[e]) : (s[e] = u && d ? d(t) : p(t));
          }
          return s[e];
        };
      },
      5906: (e, t, r) => {
        "use strict";
        var n = r(6887),
          a = r(1899),
          o = r(5981),
          i = r(1052),
          l = r(941),
          u = r(9678),
          s = r(623),
          c = r(5449),
          d = r(4692),
          p = r(568),
          f = r(9813),
          m = r(3385),
          h = f("isConcatSpreadable"),
          v = 9007199254740991,
          b = "Maximum allowed index exceeded",
          y = a.TypeError,
          g =
            m >= 51 ||
            !o(function () {
              var e = [];
              return (e[h] = !1), e.concat()[0] !== e;
            }),
          w = p("concat"),
          x = function (e) {
            if (!l(e)) return !1;
            var t = e[h];
            return void 0 !== t ? !!t : i(e);
          };
        n(
          { target: "Array", proto: !0, forced: !g || !w },
          {
            concat: function (e) {
              var t,
                r,
                n,
                a,
                o,
                i = u(this),
                l = d(i, 0),
                p = 0;
              for (t = -1, n = arguments.length; t < n; t++)
                if (x((o = -1 === t ? i : arguments[t]))) {
                  if (p + (a = s(o)) > v) throw y(b);
                  for (r = 0; r < a; r++, p++) r in o && c(l, p, o[r]);
                } else {
                  if (p >= v) throw y(b);
                  c(l, p++, o);
                }
              return (l.length = p), l;
            },
          }
        );
      },
      833: (e, t, r) => {
        "use strict";
        var n = r(6887),
          a = r(3610).find,
          o = r(8479),
          i = "find",
          l = !0;
        i in [] &&
          Array(1).find(function () {
            l = !1;
          }),
          n(
            { target: "Array", proto: !0, forced: l },
            {
              find: function (e) {
                return a(this, e, arguments.length > 1 ? arguments[1] : void 0);
              },
            }
          ),
          o(i);
      },
      2437: (e, t, r) => {
        "use strict";
        var n = r(6887),
          a = r(6837);
        n(
          { target: "Array", proto: !0, forced: [].forEach != a },
          { forEach: a }
        );
      },
      3242: (e, t, r) => {
        var n = r(6887),
          a = r(1354);
        n(
          {
            target: "Array",
            stat: !0,
            forced: !r(1385)(function (e) {
              Array.from(e);
            }),
          },
          { from: a }
        );
      },
      2737: (e, t, r) => {
        r(6887)({ target: "Array", stat: !0 }, { isArray: r(1052) });
      },
      6274: (e, t, r) => {
        "use strict";
        var n = r(4529),
          a = r(8479),
          o = r(2077),
          i = r(5402),
          l = r(5988).f,
          u = r(7771),
          s = r(2529),
          c = r(5746),
          d = "Array Iterator",
          p = i.set,
          f = i.getterFor(d);
        e.exports = u(
          Array,
          "Array",
          function (e, t) {
            p(this, { type: d, target: n(e), index: 0, kind: t });
          },
          function () {
            var e = f(this),
              t = e.target,
              r = e.kind,
              n = e.index++;
            return !t || n >= t.length
              ? ((e.target = void 0), { value: void 0, done: !0 })
              : "keys" == r
              ? { value: n, done: !1 }
              : "values" == r
              ? { value: t[n], done: !1 }
              : { value: [n, t[n]], done: !1 };
          },
          "values"
        );
        var m = (o.Arguments = o.Array);
        if (
          (a("keys"), a("values"), a("entries"), !s && c && "values" !== m.name)
        )
          try {
            l(m, "name", { value: "values" });
          } catch (e) {}
      },
      186: (e, t, r) => {
        "use strict";
        var n = r(6887),
          a = r(1899),
          o = r(1052),
          i = r(4284),
          l = r(941),
          u = r(9413),
          s = r(623),
          c = r(4529),
          d = r(5449),
          p = r(9813),
          f = r(568),
          m = r(3765),
          h = f("slice"),
          v = p("species"),
          b = a.Array,
          y = Math.max;
        n(
          { target: "Array", proto: !0, forced: !h },
          {
            slice: function (e, t) {
              var r,
                n,
                a,
                p = c(this),
                f = s(p),
                h = u(e, f),
                g = u(void 0 === t ? f : t, f);
              if (
                o(p) &&
                ((r = p.constructor),
                ((i(r) && (r === b || o(r.prototype))) ||
                  (l(r) && null === (r = r[v]))) &&
                  (r = void 0),
                r === b || void 0 === r)
              )
                return m(p, h, g);
              for (
                n = new (void 0 === r ? b : r)(y(g - h, 0)), a = 0;
                h < g;
                h++, a++
              )
                h in p && d(n, a, p[h]);
              return (n.length = a), n;
            },
          }
        );
      },
      2619: (e, t, r) => {
        var n = r(6887),
          a = r(626),
          o = r(9730),
          i = r(8834),
          l = r(5329),
          u = r(5981),
          s = r(1052),
          c = r(7475),
          d = r(941),
          p = r(6664),
          f = r(3765),
          m = r(2497),
          h = a("JSON", "stringify"),
          v = l(/./.exec),
          b = l("".charAt),
          y = l("".charCodeAt),
          g = l("".replace),
          w = l((1).toString),
          x = /[\uD800-\uDFFF]/g,
          E = /^[\uD800-\uDBFF]$/,
          _ = /^[\uDC00-\uDFFF]$/,
          C =
            !m ||
            u(function () {
              var e = a("Symbol")();
              return (
                "[null]" != h([e]) ||
                "{}" != h({ a: e }) ||
                "{}" != h(Object(e))
              );
            }),
          k = u(function () {
            return (
              '"\\udf06\\ud834"' !== h("\udf06\ud834") ||
              '"\\udead"' !== h("\udead")
            );
          }),
          P = function (e, t) {
            var r = f(arguments),
              n = t;
            if ((d(t) || void 0 !== e) && !p(e))
              return (
                s(t) ||
                  (t = function (e, t) {
                    if ((c(n) && (t = i(n, this, e, t)), !p(t))) return t;
                  }),
                (r[1] = t),
                o(h, null, r)
              );
          },
          S = function (e, t, r) {
            var n = b(r, t - 1),
              a = b(r, t + 1);
            return (v(E, e) && !v(_, a)) || (v(_, e) && !v(E, n))
              ? "\\u" + w(y(e, 0), 16)
              : e;
          };
        h &&
          n(
            { target: "JSON", stat: !0, forced: C || k },
            {
              stringify: function (e, t, r) {
                var n = f(arguments),
                  a = o(C ? P : h, null, n);
                return k && "string" == typeof a ? g(a, x, S) : a;
              },
            }
          );
      },
      9120: (e, t, r) => {
        var n = r(1899);
        r(904)(n.JSON, "JSON", !0);
      },
      3112: (e, t, r) => {
        "use strict";
        r(4683)(
          "Map",
          function (e) {
            return function () {
              return e(this, arguments.length ? arguments[0] : void 0);
            };
          },
          r(5616)
        );
      },
      7501: (e, t, r) => {
        r(3112);
      },
      5327: () => {},
      9221: (e, t, r) => {
        var n = r(6887),
          a = r(4420);
        n(
          { target: "Object", stat: !0, forced: Object.assign !== a },
          { assign: a }
        );
      },
      6450: (e, t, r) => {
        var n = r(6887),
          a = r(5746),
          o = r(5988).f;
        n(
          {
            target: "Object",
            stat: !0,
            forced: Object.defineProperty !== o,
            sham: !a,
          },
          { defineProperty: o }
        );
      },
      7144: (e, t, r) => {
        var n = r(6887),
          a = r(2497),
          o = r(5981),
          i = r(7857),
          l = r(9678);
        n(
          {
            target: "Object",
            stat: !0,
            forced:
              !a ||
              o(function () {
                i.f(1);
              }),
          },
          {
            getOwnPropertySymbols: function (e) {
              var t = i.f;
              return t ? t(l(e)) : [];
            },
          }
        );
      },
      1724: (e, t, r) => {
        var n = r(6887),
          a = r(9678),
          o = r(4771);
        n(
          {
            target: "Object",
            stat: !0,
            forced: r(5981)(function () {
              o(1);
            }),
          },
          {
            keys: function (e) {
              return o(a(e));
            },
          }
        );
      },
      5967: () => {},
      1502: () => {},
      2266: (e, t, r) => {
        "use strict";
        r(4683)(
          "Set",
          function (e) {
            return function () {
              return e(this, arguments.length ? arguments[0] : void 0);
            };
          },
          r(5616)
        );
      },
      9008: (e, t, r) => {
        r(2266);
      },
      7971: (e, t, r) => {
        "use strict";
        var n = r(4620).charAt,
          a = r(5803),
          o = r(5402),
          i = r(7771),
          l = "String Iterator",
          u = o.set,
          s = o.getterFor(l);
        i(
          String,
          "String",
          function (e) {
            u(this, { type: l, string: a(e), index: 0 });
          },
          function () {
            var e,
              t = s(this),
              r = t.string,
              a = t.index;
            return a >= r.length
              ? { value: void 0, done: !0 }
              : ((e = n(r, a)), (t.index += e.length), { value: e, done: !1 });
          }
        );
      },
      8555: (e, t, r) => {
        r(6349)("asyncIterator");
      },
      8616: (e, t, r) => {
        "use strict";
        var n = r(6887),
          a = r(1899),
          o = r(8834),
          i = r(5329),
          l = r(2529),
          u = r(5746),
          s = r(2497),
          c = r(5981),
          d = r(953),
          p = r(7046),
          f = r(6059),
          m = r(4529),
          h = r(3894),
          v = r(5803),
          b = r(1887),
          y = r(9290),
          g = r(4771),
          w = r(946),
          x = r(684),
          E = r(7857),
          _ = r(9677),
          C = r(5988),
          k = r(9938),
          P = r(6760),
          S = r(9754),
          q = r(8726),
          R = r(4262),
          T = r(7748),
          O = r(9418),
          M = r(9813),
          N = r(1477),
          I = r(6349),
          L = r(9630),
          A = r(904),
          F = r(5402),
          j = r(3610).forEach,
          D = R("hidden"),
          U = "Symbol",
          B = F.set,
          z = F.getterFor(U),
          H = Object.prototype,
          V = a.Symbol,
          $ = V && V.prototype,
          W = a.TypeError,
          Y = a.QObject,
          G = _.f,
          Q = C.f,
          K = x.f,
          X = P.f,
          J = i([].push),
          Z = q("symbols"),
          ee = q("op-symbols"),
          te = q("wks"),
          re = !Y || !Y.prototype || !Y.prototype.findChild,
          ne =
            u &&
            c(function () {
              return (
                7 !=
                y(
                  Q({}, "a", {
                    get: function () {
                      return Q(this, "a", { value: 7 }).a;
                    },
                  })
                ).a
              );
            })
              ? function (e, t, r) {
                  var n = G(H, t);
                  n && delete H[t], Q(e, t, r), n && e !== H && Q(H, t, n);
                }
              : Q,
          ae = function (e, t) {
            var r = (Z[e] = y($));
            return (
              B(r, { type: U, tag: e, description: t }),
              u || (r.description = t),
              r
            );
          },
          oe = function (e, t, r) {
            e === H && oe(ee, t, r), f(e);
            var n = h(t);
            return (
              f(r),
              d(Z, n)
                ? (r.enumerable
                    ? (d(e, D) && e[D][n] && (e[D][n] = !1),
                      (r = y(r, { enumerable: b(0, !1) })))
                    : (d(e, D) || Q(e, D, b(1, {})), (e[D][n] = !0)),
                  ne(e, n, r))
                : Q(e, n, r)
            );
          },
          ie = function (e, t) {
            f(e);
            var r = m(t),
              n = g(r).concat(ce(r));
            return (
              j(n, function (t) {
                (u && !o(le, r, t)) || oe(e, t, r[t]);
              }),
              e
            );
          },
          le = function (e) {
            var t = h(e),
              r = o(X, this, t);
            return (
              !(this === H && d(Z, t) && !d(ee, t)) &&
              (!(r || !d(this, t) || !d(Z, t) || (d(this, D) && this[D][t])) ||
                r)
            );
          },
          ue = function (e, t) {
            var r = m(e),
              n = h(t);
            if (r !== H || !d(Z, n) || d(ee, n)) {
              var a = G(r, n);
              return (
                !a || !d(Z, n) || (d(r, D) && r[D][n]) || (a.enumerable = !0), a
              );
            }
          },
          se = function (e) {
            var t = K(m(e)),
              r = [];
            return (
              j(t, function (e) {
                d(Z, e) || d(T, e) || J(r, e);
              }),
              r
            );
          },
          ce = function (e) {
            var t = e === H,
              r = K(t ? ee : m(e)),
              n = [];
            return (
              j(r, function (e) {
                !d(Z, e) || (t && !d(H, e)) || J(n, Z[e]);
              }),
              n
            );
          };
        s ||
          (S(
            ($ = (V = function () {
              if (p($, this)) throw W("Symbol is not a constructor");
              var e =
                  arguments.length && void 0 !== arguments[0]
                    ? v(arguments[0])
                    : void 0,
                t = O(e),
                r = function (e) {
                  this === H && o(r, ee, e),
                    d(this, D) && d(this[D], t) && (this[D][t] = !1),
                    ne(this, t, b(1, e));
                };
              return (
                u && re && ne(H, t, { configurable: !0, set: r }), ae(t, e)
              );
            }).prototype),
            "toString",
            function () {
              return z(this).tag;
            }
          ),
          S(V, "withoutSetter", function (e) {
            return ae(O(e), e);
          }),
          (P.f = le),
          (C.f = oe),
          (k.f = ie),
          (_.f = ue),
          (w.f = x.f = se),
          (E.f = ce),
          (N.f = function (e) {
            return ae(M(e), e);
          }),
          u &&
            (Q($, "description", {
              configurable: !0,
              get: function () {
                return z(this).description;
              },
            }),
            l || S(H, "propertyIsEnumerable", le, { unsafe: !0 }))),
          n({ global: !0, wrap: !0, forced: !s, sham: !s }, { Symbol: V }),
          j(g(te), function (e) {
            I(e);
          }),
          n(
            { target: U, stat: !0, forced: !s },
            {
              useSetter: function () {
                re = !0;
              },
              useSimple: function () {
                re = !1;
              },
            }
          ),
          n(
            { target: "Object", stat: !0, forced: !s, sham: !u },
            {
              create: function (e, t) {
                return void 0 === t ? y(e) : ie(y(e), t);
              },
              defineProperty: oe,
              defineProperties: ie,
              getOwnPropertyDescriptor: ue,
            }
          ),
          n(
            { target: "Object", stat: !0, forced: !s },
            { getOwnPropertyNames: se }
          ),
          L(),
          A(V, U),
          (T[D] = !0);
      },
      2615: () => {},
      4523: (e, t, r) => {
        var n = r(6887),
          a = r(626),
          o = r(953),
          i = r(5803),
          l = r(8726),
          u = r(5366),
          s = l("string-to-symbol-registry"),
          c = l("symbol-to-string-registry");
        n(
          { target: "Symbol", stat: !0, forced: !u },
          {
            for: function (e) {
              var t = i(e);
              if (o(s, t)) return s[t];
              var r = a("Symbol")(t);
              return (s[t] = r), (c[r] = t), r;
            },
          }
        );
      },
      1732: (e, t, r) => {
        r(6349)("hasInstance");
      },
      5903: (e, t, r) => {
        r(6349)("isConcatSpreadable");
      },
      1825: (e, t, r) => {
        r(6349)("iterator");
      },
      5824: (e, t, r) => {
        r(8616), r(4523), r(8608), r(2619), r(7144);
      },
      8608: (e, t, r) => {
        var n = r(6887),
          a = r(953),
          o = r(6664),
          i = r(9826),
          l = r(8726),
          u = r(5366),
          s = l("symbol-to-string-registry");
        n(
          { target: "Symbol", stat: !0, forced: !u },
          {
            keyFor: function (e) {
              if (!o(e)) throw TypeError(i(e) + " is not a symbol");
              if (a(s, e)) return s[e];
            },
          }
        );
      },
      5915: (e, t, r) => {
        r(6349)("matchAll");
      },
      8394: (e, t, r) => {
        r(6349)("match");
      },
      1766: (e, t, r) => {
        r(6349)("replace");
      },
      9791: (e, t, r) => {
        r(6349)("search");
      },
      9911: (e, t, r) => {
        r(6349)("species");
      },
      4315: (e, t, r) => {
        r(6349)("split");
      },
      3131: (e, t, r) => {
        var n = r(6349),
          a = r(9630);
        n("toPrimitive"), a();
      },
      4714: (e, t, r) => {
        var n = r(626),
          a = r(6349),
          o = r(904);
        a("toStringTag"), o(n("Symbol"), "Symbol");
      },
      659: (e, t, r) => {
        r(6349)("unscopables");
      },
      8783: (e, t, r) => {
        r(6349)("asyncDispose");
      },
      3975: (e, t, r) => {
        r(6349)("dispose");
      },
      5799: (e, t, r) => {
        r(6349)("matcher");
      },
      5414: (e, t, r) => {
        r(6349)("metadata");
      },
      6774: (e, t, r) => {
        r(6349)("observable");
      },
      620: (e, t, r) => {
        r(6349)("patternMatch");
      },
      6172: (e, t, r) => {
        r(6349)("replaceAll");
      },
      7634: (e, t, r) => {
        r(6274);
        var n = r(3281),
          a = r(1899),
          o = r(9697),
          i = r(2029),
          l = r(2077),
          u = r(9813)("toStringTag");
        for (var s in n) {
          var c = a[s],
            d = c && c.prototype;
          d && o(d) !== u && i(d, u, s), (l[s] = l.Array);
        }
      },
      7698: (e, t, r) => {
        var n = r(4493);
        e.exports = n;
      },
      3363: (e, t, r) => {
        var n = r(4034);
        e.exports = n;
      },
      2908: (e, t, r) => {
        var n = r(2710);
        e.exports = n;
      },
      9216: (e, t, r) => {
        var n = r(9324);
        e.exports = n;
      },
      6668: (e, t, r) => {
        var n = r(5909);
        e.exports = n;
      },
      6243: (e, t, r) => {
        var n = r(3830);
        r(7634), (e.exports = n);
      },
      3698: (e, t, r) => {
        var n = r(5581);
        r(7634), (e.exports = n);
      },
      8065: (e, t, r) => {
        var n = r(6043);
        e.exports = n;
      },
      7448: (e, t, r) => {
        r(7634);
        var n = r(9697),
          a = r(953),
          o = r(7046),
          i = r(2908),
          l = Array.prototype,
          u = { DOMTokenList: !0, NodeList: !0 };
        e.exports = function (e) {
          var t = e.entries;
          return e === l || (o(l, e) && t === l.entries) || a(u, n(e)) ? i : t;
        };
      },
      1577: (e, t, r) => {
        var n = r(2236);
        e.exports = n;
      },
      6279: (e, t, r) => {
        r(7634);
        var n = r(9697),
          a = r(953),
          o = r(7046),
          i = r(9216),
          l = Array.prototype,
          u = { DOMTokenList: !0, NodeList: !0 };
        e.exports = function (e) {
          var t = e.forEach;
          return e === l || (o(l, e) && t === l.forEach) || a(u, n(e)) ? i : t;
        };
      },
      3819: (e, t, r) => {
        r(7634);
        var n = r(9697),
          a = r(953),
          o = r(7046),
          i = r(6668),
          l = Array.prototype,
          u = { DOMTokenList: !0, NodeList: !0 };
        e.exports = function (e) {
          var t = e.keys;
          return e === l || (o(l, e) && t === l.keys) || a(u, n(e)) ? i : t;
        };
      },
      2073: (e, t, r) => {
        var n = r(9601);
        e.exports = n;
      },
      8933: (e, t, r) => {
        var n = r(4426);
        e.exports = n;
      },
      5868: (e, t, r) => {
        var n = r(1018);
        r(7634), (e.exports = n);
      },
      3383: (e, t, r) => {
        var n = r(5999);
        e.exports = n;
      },
      1910: (e, t, r) => {
        var n = r(8171);
        e.exports = n;
      },
      3059: (e, t, r) => {
        var n = r(8494);
        e.exports = n;
      },
      5519: (e, t, r) => {
        var n = r(6998);
        r(7634), (e.exports = n);
      },
      2547: (e, t, r) => {
        var n = r(7473);
        r(7634), (e.exports = n);
      },
      6961: (e, t, r) => {
        var n,
          a = (function () {
            var e = String.fromCharCode,
              t =
                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
              r =
                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",
              n = {};
            function a(e, t) {
              if (!n[e]) {
                n[e] = {};
                for (var r = 0; r < e.length; r++) n[e][e.charAt(r)] = r;
              }
              return n[e][t];
            }
            var o = {
              compressToBase64: function (e) {
                if (null == e) return "";
                var r = o._compress(e, 6, function (e) {
                  return t.charAt(e);
                });
                switch (r.length % 4) {
                  default:
                  case 0:
                    return r;
                  case 1:
                    return r + "===";
                  case 2:
                    return r + "==";
                  case 3:
                    return r + "=";
                }
              },
              decompressFromBase64: function (e) {
                return null == e
                  ? ""
                  : "" == e
                  ? null
                  : o._decompress(e.length, 32, function (r) {
                      return a(t, e.charAt(r));
                    });
              },
              compressToUTF16: function (t) {
                return null == t
                  ? ""
                  : o._compress(t, 15, function (t) {
                      return e(t + 32);
                    }) + " ";
              },
              decompressFromUTF16: function (e) {
                return null == e
                  ? ""
                  : "" == e
                  ? null
                  : o._decompress(e.length, 16384, function (t) {
                      return e.charCodeAt(t) - 32;
                    });
              },
              compressToUint8Array: function (e) {
                for (
                  var t = o.compress(e),
                    r = new Uint8Array(2 * t.length),
                    n = 0,
                    a = t.length;
                  n < a;
                  n++
                ) {
                  var i = t.charCodeAt(n);
                  (r[2 * n] = i >>> 8), (r[2 * n + 1] = i % 256);
                }
                return r;
              },
              decompressFromUint8Array: function (t) {
                if (null == t) return o.decompress(t);
                for (
                  var r = new Array(t.length / 2), n = 0, a = r.length;
                  n < a;
                  n++
                )
                  r[n] = 256 * t[2 * n] + t[2 * n + 1];
                var i = [];
                return (
                  r.forEach(function (t) {
                    i.push(e(t));
                  }),
                  o.decompress(i.join(""))
                );
              },
              compressToEncodedURIComponent: function (e) {
                return null == e
                  ? ""
                  : o._compress(e, 6, function (e) {
                      return r.charAt(e);
                    });
              },
              decompressFromEncodedURIComponent: function (e) {
                return null == e
                  ? ""
                  : "" == e
                  ? null
                  : ((e = e.replace(/ /g, "+")),
                    o._decompress(e.length, 32, function (t) {
                      return a(r, e.charAt(t));
                    }));
              },
              compress: function (t) {
                return o._compress(t, 16, function (t) {
                  return e(t);
                });
              },
              _compress: function (e, t, r) {
                if (null == e) return "";
                var n,
                  a,
                  o,
                  i = {},
                  l = {},
                  u = "",
                  s = "",
                  c = "",
                  d = 2,
                  p = 3,
                  f = 2,
                  m = [],
                  h = 0,
                  v = 0;
                for (o = 0; o < e.length; o += 1)
                  if (
                    ((u = e.charAt(o)),
                    Object.prototype.hasOwnProperty.call(i, u) ||
                      ((i[u] = p++), (l[u] = !0)),
                    (s = c + u),
                    Object.prototype.hasOwnProperty.call(i, s))
                  )
                    c = s;
                  else {
                    if (Object.prototype.hasOwnProperty.call(l, c)) {
                      if (c.charCodeAt(0) < 256) {
                        for (n = 0; n < f; n++)
                          (h <<= 1),
                            v == t - 1 ? ((v = 0), m.push(r(h)), (h = 0)) : v++;
                        for (a = c.charCodeAt(0), n = 0; n < 8; n++)
                          (h = (h << 1) | (1 & a)),
                            v == t - 1 ? ((v = 0), m.push(r(h)), (h = 0)) : v++,
                            (a >>= 1);
                      } else {
                        for (a = 1, n = 0; n < f; n++)
                          (h = (h << 1) | a),
                            v == t - 1 ? ((v = 0), m.push(r(h)), (h = 0)) : v++,
                            (a = 0);
                        for (a = c.charCodeAt(0), n = 0; n < 16; n++)
                          (h = (h << 1) | (1 & a)),
                            v == t - 1 ? ((v = 0), m.push(r(h)), (h = 0)) : v++,
                            (a >>= 1);
                      }
                      0 == --d && ((d = Math.pow(2, f)), f++), delete l[c];
                    } else
                      for (a = i[c], n = 0; n < f; n++)
                        (h = (h << 1) | (1 & a)),
                          v == t - 1 ? ((v = 0), m.push(r(h)), (h = 0)) : v++,
                          (a >>= 1);
                    0 == --d && ((d = Math.pow(2, f)), f++),
                      (i[s] = p++),
                      (c = String(u));
                  }
                if ("" !== c) {
                  if (Object.prototype.hasOwnProperty.call(l, c)) {
                    if (c.charCodeAt(0) < 256) {
                      for (n = 0; n < f; n++)
                        (h <<= 1),
                          v == t - 1 ? ((v = 0), m.push(r(h)), (h = 0)) : v++;
                      for (a = c.charCodeAt(0), n = 0; n < 8; n++)
                        (h = (h << 1) | (1 & a)),
                          v == t - 1 ? ((v = 0), m.push(r(h)), (h = 0)) : v++,
                          (a >>= 1);
                    } else {
                      for (a = 1, n = 0; n < f; n++)
                        (h = (h << 1) | a),
                          v == t - 1 ? ((v = 0), m.push(r(h)), (h = 0)) : v++,
                          (a = 0);
                      for (a = c.charCodeAt(0), n = 0; n < 16; n++)
                        (h = (h << 1) | (1 & a)),
                          v == t - 1 ? ((v = 0), m.push(r(h)), (h = 0)) : v++,
                          (a >>= 1);
                    }
                    0 == --d && ((d = Math.pow(2, f)), f++), delete l[c];
                  } else
                    for (a = i[c], n = 0; n < f; n++)
                      (h = (h << 1) | (1 & a)),
                        v == t - 1 ? ((v = 0), m.push(r(h)), (h = 0)) : v++,
                        (a >>= 1);
                  0 == --d && ((d = Math.pow(2, f)), f++);
                }
                for (a = 2, n = 0; n < f; n++)
                  (h = (h << 1) | (1 & a)),
                    v == t - 1 ? ((v = 0), m.push(r(h)), (h = 0)) : v++,
                    (a >>= 1);
                for (;;) {
                  if (((h <<= 1), v == t - 1)) {
                    m.push(r(h));
                    break;
                  }
                  v++;
                }
                return m.join("");
              },
              decompress: function (e) {
                return null == e
                  ? ""
                  : "" == e
                  ? null
                  : o._decompress(e.length, 32768, function (t) {
                      return e.charCodeAt(t);
                    });
              },
              _decompress: function (t, r, n) {
                var a,
                  o,
                  i,
                  l,
                  u,
                  s,
                  c,
                  d = [],
                  p = 4,
                  f = 4,
                  m = 3,
                  h = "",
                  v = [],
                  b = { val: n(0), position: r, index: 1 };
                for (a = 0; a < 3; a += 1) d[a] = a;
                for (i = 0, u = Math.pow(2, 2), s = 1; s != u; )
                  (l = b.val & b.position),
                    (b.position >>= 1),
                    0 == b.position &&
                      ((b.position = r), (b.val = n(b.index++))),
                    (i |= (l > 0 ? 1 : 0) * s),
                    (s <<= 1);
                switch (i) {
                  case 0:
                    for (i = 0, u = Math.pow(2, 8), s = 1; s != u; )
                      (l = b.val & b.position),
                        (b.position >>= 1),
                        0 == b.position &&
                          ((b.position = r), (b.val = n(b.index++))),
                        (i |= (l > 0 ? 1 : 0) * s),
                        (s <<= 1);
                    c = e(i);
                    break;
                  case 1:
                    for (i = 0, u = Math.pow(2, 16), s = 1; s != u; )
                      (l = b.val & b.position),
                        (b.position >>= 1),
                        0 == b.position &&
                          ((b.position = r), (b.val = n(b.index++))),
                        (i |= (l > 0 ? 1 : 0) * s),
                        (s <<= 1);
                    c = e(i);
                    break;
                  case 2:
                    return "";
                }
                for (d[3] = c, o = c, v.push(c); ; ) {
                  if (b.index > t) return "";
                  for (i = 0, u = Math.pow(2, m), s = 1; s != u; )
                    (l = b.val & b.position),
                      (b.position >>= 1),
                      0 == b.position &&
                        ((b.position = r), (b.val = n(b.index++))),
                      (i |= (l > 0 ? 1 : 0) * s),
                      (s <<= 1);
                  switch ((c = i)) {
                    case 0:
                      for (i = 0, u = Math.pow(2, 8), s = 1; s != u; )
                        (l = b.val & b.position),
                          (b.position >>= 1),
                          0 == b.position &&
                            ((b.position = r), (b.val = n(b.index++))),
                          (i |= (l > 0 ? 1 : 0) * s),
                          (s <<= 1);
                      (d[f++] = e(i)), (c = f - 1), p--;
                      break;
                    case 1:
                      for (i = 0, u = Math.pow(2, 16), s = 1; s != u; )
                        (l = b.val & b.position),
                          (b.position >>= 1),
                          0 == b.position &&
                            ((b.position = r), (b.val = n(b.index++))),
                          (i |= (l > 0 ? 1 : 0) * s),
                          (s <<= 1);
                      (d[f++] = e(i)), (c = f - 1), p--;
                      break;
                    case 2:
                      return v.join("");
                  }
                  if ((0 == p && ((p = Math.pow(2, m)), m++), d[c])) h = d[c];
                  else {
                    if (c !== f) return null;
                    h = o + o.charAt(0);
                  }
                  v.push(h),
                    (d[f++] = o + h.charAt(0)),
                    (o = h),
                    0 == --p && ((p = Math.pow(2, m)), m++);
                }
              },
            };
            return o;
          })();
        void 0 ===
          (n = function () {
            return a;
          }.call(t, r, t, e)) || (e.exports = n);
      },
      7418: (e) => {
        "use strict";
        var t = Object.getOwnPropertySymbols,
          r = Object.prototype.hasOwnProperty,
          n = Object.prototype.propertyIsEnumerable;
        function a(e) {
          if (null == e)
            throw new TypeError(
              "Object.assign cannot be called with null or undefined"
            );
          return Object(e);
        }
        e.exports = (function () {
          try {
            if (!Object.assign) return !1;
            var e = new String("abc");
            if (((e[5] = "de"), "5" === Object.getOwnPropertyNames(e)[0]))
              return !1;
            for (var t = {}, r = 0; r < 10; r++)
              t["_" + String.fromCharCode(r)] = r;
            if (
              "0123456789" !==
              Object.getOwnPropertyNames(t)
                .map(function (e) {
                  return t[e];
                })
                .join("")
            )
              return !1;
            var n = {};
            return (
              "abcdefghijklmnopqrst".split("").forEach(function (e) {
                n[e] = e;
              }),
              "abcdefghijklmnopqrst" ===
                Object.keys(Object.assign({}, n)).join("")
            );
          } catch (e) {
            return !1;
          }
        })()
          ? Object.assign
          : function (e, o) {
              for (var i, l, u = a(e), s = 1; s < arguments.length; s++) {
                for (var c in (i = Object(arguments[s])))
                  r.call(i, c) && (u[c] = i[c]);
                if (t) {
                  l = t(i);
                  for (var d = 0; d < l.length; d++)
                    n.call(i, l[d]) && (u[l[d]] = i[l[d]]);
                }
              }
              return u;
            };
      },
      8531: (e, t, r) => {
        "use strict";
        e = r.nmd(e);
        var n = r(7418),
          a = r(7294),
          o = r(3935),
          i = r(3840);
        function l(e) {
          for (
            var t =
                "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
              r = 1;
            r < arguments.length;
            r++
          )
            t += "&args[]=" + encodeURIComponent(arguments[r]);
          return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        var u = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
        function s(e) {
          var t = e,
            r = e;
          if (e.alternate) for (; t.return; ) t = t.return;
          else {
            e = t;
            do {
              0 != (1026 & (t = e).flags) && (r = t.return), (e = t.return);
            } while (e);
          }
          return 3 === t.tag ? r : null;
        }
        function c(e) {
          if (s(e) !== e) throw Error(l(188));
        }
        function d(e) {
          var t = e.keyCode;
          return (
            "charCode" in e
              ? 0 === (e = e.charCode) && 13 === t && (e = 13)
              : (e = t),
            10 === e && (e = 13),
            32 <= e || 13 === e ? e : 0
          );
        }
        function p() {
          return !0;
        }
        function f() {
          return !1;
        }
        function m(e) {
          function t(t, r, n, a, o) {
            for (var i in ((this._reactName = t),
            (this._targetInst = n),
            (this.type = r),
            (this.nativeEvent = a),
            (this.target = o),
            (this.currentTarget = null),
            e))
              e.hasOwnProperty(i) && ((t = e[i]), (this[i] = t ? t(a) : a[i]));
            return (
              (this.isDefaultPrevented = (
                null != a.defaultPrevented
                  ? a.defaultPrevented
                  : !1 === a.returnValue
              )
                ? p
                : f),
              (this.isPropagationStopped = f),
              this
            );
          }
          return (
            n(t.prototype, {
              preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                  (e.preventDefault
                    ? e.preventDefault()
                    : "unknown" != typeof e.returnValue && (e.returnValue = !1),
                  (this.isDefaultPrevented = p));
              },
              stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                  (e.stopPropagation
                    ? e.stopPropagation()
                    : "unknown" != typeof e.cancelBubble &&
                      (e.cancelBubble = !0),
                  (this.isPropagationStopped = p));
              },
              persist: function () {},
              isPersistent: p,
            }),
            t
          );
        }
        var h = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
              return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
          },
          v = m(h),
          b = n({}, h, { view: 0, detail: 0 });
        m(b);
        var y,
          g,
          w,
          x = n({}, b, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: P,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
              return void 0 === e.relatedTarget
                ? e.fromElement === e.srcElement
                  ? e.toElement
                  : e.fromElement
                : e.relatedTarget;
            },
            movementX: function (e) {
              return "movementX" in e
                ? e.movementX
                : (e !== w &&
                    (w && "mousemove" === e.type
                      ? ((y = e.screenX - w.screenX),
                        (g = e.screenY - w.screenY))
                      : (g = y = 0),
                    (w = e)),
                  y);
            },
            movementY: function (e) {
              return "movementY" in e ? e.movementY : g;
            },
          });
        m(x),
          m(n({}, x, { dataTransfer: 0 })),
          m(n({}, b, { relatedTarget: 0 })),
          m(n({}, h, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })),
          m(
            n({}, h, {
              clipboardData: function (e) {
                return "clipboardData" in e
                  ? e.clipboardData
                  : window.clipboardData;
              },
            })
          ),
          m(n({}, h, { data: 0 }));
        var E = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified",
          },
          _ = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta",
          },
          C = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey",
          };
        function k(e) {
          var t = this.nativeEvent;
          return t.getModifierState
            ? t.getModifierState(e)
            : !!(e = C[e]) && !!t[e];
        }
        function P() {
          return k;
        }
        m(
          n({}, b, {
            key: function (e) {
              if (e.key) {
                var t = E[e.key] || e.key;
                if ("Unidentified" !== t) return t;
              }
              return "keypress" === e.type
                ? 13 === (e = d(e))
                  ? "Enter"
                  : String.fromCharCode(e)
                : "keydown" === e.type || "keyup" === e.type
                ? _[e.keyCode] || "Unidentified"
                : "";
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: P,
            charCode: function (e) {
              return "keypress" === e.type ? d(e) : 0;
            },
            keyCode: function (e) {
              return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
            },
            which: function (e) {
              return "keypress" === e.type
                ? d(e)
                : "keydown" === e.type || "keyup" === e.type
                ? e.keyCode
                : 0;
            },
          })
        ),
          m(
            n({}, x, {
              pointerId: 0,
              width: 0,
              height: 0,
              pressure: 0,
              tangentialPressure: 0,
              tiltX: 0,
              tiltY: 0,
              twist: 0,
              pointerType: 0,
              isPrimary: 0,
            })
          ),
          m(
            n({}, b, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: P,
            })
          ),
          m(n({}, h, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })),
          m(
            n({}, x, {
              deltaX: function (e) {
                return "deltaX" in e
                  ? e.deltaX
                  : "wheelDeltaX" in e
                  ? -e.wheelDeltaX
                  : 0;
              },
              deltaY: function (e) {
                return "deltaY" in e
                  ? e.deltaY
                  : "wheelDeltaY" in e
                  ? -e.wheelDeltaY
                  : "wheelDelta" in e
                  ? -e.wheelDelta
                  : 0;
              },
              deltaZ: 0,
              deltaMode: 0,
            })
          );
        var S = null;
        function q(t) {
          if (null === S)
            try {
              var r = ("require" + Math.random()).slice(0, 7);
              S = (e && e[r]).call(e, "timers").setImmediate;
            } catch (e) {
              S = function (e) {
                var t = new MessageChannel();
                (t.port1.onmessage = e), t.port2.postMessage(void 0);
              };
            }
          return S(t);
        }
        var R = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Events,
          T = R[5],
          O = R[6],
          M = o.unstable_batchedUpdates,
          N = u.IsSomeRendererActing,
          I = "function" == typeof i.unstable_flushAllWithoutAsserting,
          L =
            i.unstable_flushAllWithoutAsserting ||
            function () {
              for (var e = !1; T(); ) e = !0;
              return e;
            };
        function A(e) {
          try {
            L(),
              q(function () {
                L() ? A(e) : e();
              });
          } catch (t) {
            e(t);
          }
        }
        var F = 0,
          j = !1,
          D = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Events[6],
          U = o.unstable_batchedUpdates,
          B = u.IsSomeRendererActing;
        function z(e, t) {
          jest.runOnlyPendingTimers(),
            q(function () {
              try {
                i.unstable_flushAllWithoutAsserting() ? z(e, t) : e();
              } catch (e) {
                t(e);
              }
            });
        }
        function H(e, t, r, n, a, o, i, l, u) {
          var s = Array.prototype.slice.call(arguments, 3);
          try {
            t.apply(r, s);
          } catch (e) {
            this.onError(e);
          }
        }
        var V = !1,
          $ = null,
          W = !1,
          Y = null,
          G = {
            onError: function (e) {
              (V = !0), ($ = e);
            },
          };
        function Q(e, t, r, n, a, o, i, l, u) {
          (V = !1), ($ = null), H.apply(G, arguments);
        }
        var K = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Events,
          X = K[0],
          J = K[1],
          Z = K[2],
          ee = K[3],
          te = K[4];
        function re() {}
        function ne(e, t) {
          if (e && !e._reactInternals) {
            var r = "" + e;
            throw (
              ((e = Array.isArray(e)
                ? "an array"
                : e && 1 === e.nodeType && e.tagName
                ? "a DOM node"
                : "[object Object]" === r
                ? "object with keys {" + Object.keys(e).join(", ") + "}"
                : r),
              Error(l(286, t, e)))
            );
          }
        }
        function ae(e) {
          return !(!e || 1 !== e.nodeType || !e.tagName);
        }
        function oe(e) {
          return (
            !ae(e) &&
            null != e &&
            "function" == typeof e.render &&
            "function" == typeof e.setState
          );
        }
        function ie(e, t) {
          return !!oe(e) && e._reactInternals.type === t;
        }
        function le(e, t) {
          return (
            ne(e, "findAllInRenderedTree"),
            e
              ? (function (e, t) {
                  if (!e) return [];
                  if (
                    ((e = (function (e) {
                      var t = e.alternate;
                      if (!t) {
                        if (null === (t = s(e))) throw Error(l(188));
                        return t !== e ? null : e;
                      }
                      for (var r = e, n = t; ; ) {
                        var a = r.return;
                        if (null === a) break;
                        var o = a.alternate;
                        if (null === o) {
                          if (null !== (n = a.return)) {
                            r = n;
                            continue;
                          }
                          break;
                        }
                        if (a.child === o.child) {
                          for (o = a.child; o; ) {
                            if (o === r) return c(a), e;
                            if (o === n) return c(a), t;
                            o = o.sibling;
                          }
                          throw Error(l(188));
                        }
                        if (r.return !== n.return) (r = a), (n = o);
                        else {
                          for (var i = !1, u = a.child; u; ) {
                            if (u === r) {
                              (i = !0), (r = a), (n = o);
                              break;
                            }
                            if (u === n) {
                              (i = !0), (n = a), (r = o);
                              break;
                            }
                            u = u.sibling;
                          }
                          if (!i) {
                            for (u = o.child; u; ) {
                              if (u === r) {
                                (i = !0), (r = o), (n = a);
                                break;
                              }
                              if (u === n) {
                                (i = !0), (n = o), (r = a);
                                break;
                              }
                              u = u.sibling;
                            }
                            if (!i) throw Error(l(189));
                          }
                        }
                        if (r.alternate !== n) throw Error(l(190));
                      }
                      if (3 !== r.tag) throw Error(l(188));
                      return r.stateNode.current === r ? e : t;
                    })(e)),
                    !e)
                  )
                    return [];
                  for (var r = e, n = []; ; ) {
                    if (
                      5 === r.tag ||
                      6 === r.tag ||
                      1 === r.tag ||
                      0 === r.tag
                    ) {
                      var a = r.stateNode;
                      t(a) && n.push(a);
                    }
                    if (r.child) (r.child.return = r), (r = r.child);
                    else {
                      if (r === e) return n;
                      for (; !r.sibling; ) {
                        if (!r.return || r.return === e) return n;
                        r = r.return;
                      }
                      (r.sibling.return = r.return), (r = r.sibling);
                    }
                  }
                })(e._reactInternals, t)
              : []
          );
        }
        function ue(e, t) {
          return (
            ne(e, "scryRenderedDOMComponentsWithClass"),
            le(e, function (e) {
              if (ae(e)) {
                var r = e.className;
                "string" != typeof r && (r = e.getAttribute("class") || "");
                var n = r.split(/\s+/);
                if (!Array.isArray(t)) {
                  if (void 0 === t) throw Error(l(11));
                  t = t.split(/\s+/);
                }
                return t.every(function (e) {
                  return -1 !== n.indexOf(e);
                });
              }
              return !1;
            })
          );
        }
        function se(e, t) {
          return (
            ne(e, "scryRenderedDOMComponentsWithTag"),
            le(e, function (e) {
              return ae(e) && e.tagName.toUpperCase() === t.toUpperCase();
            })
          );
        }
        function ce(e, t) {
          return (
            ne(e, "scryRenderedComponentsWithType"),
            le(e, function (e) {
              return ie(e, t);
            })
          );
        }
        function de(e, t, r) {
          var n = e.type || "unknown-event";
          (e.currentTarget = J(r)),
            (function (e, t, r, n, a, o, i, u, s) {
              if ((Q.apply(this, arguments), V)) {
                if (!V) throw Error(l(198));
                var c = $;
                (V = !1), ($ = null), W || ((W = !0), (Y = c));
              }
            })(n, t, void 0, e),
            (e.currentTarget = null);
        }
        function pe(e, t, r) {
          for (var n = []; e; ) {
            n.push(e);
            do {
              e = e.return;
            } while (e && 5 !== e.tag);
            e = e || null;
          }
          for (e = n.length; 0 < e--; ) t(n[e], "captured", r);
          for (e = 0; e < n.length; e++) t(n[e], "bubbled", r);
        }
        function fe(e, t) {
          var r = e.stateNode;
          if (!r) return null;
          var n = Z(r);
          if (!n) return null;
          r = n[t];
          e: switch (t) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
              (n = !n.disabled) ||
                (n = !(
                  "button" === (e = e.type) ||
                  "input" === e ||
                  "select" === e ||
                  "textarea" === e
                )),
                (e = !n);
              break e;
            default:
              e = !1;
          }
          if (e) return null;
          if (r && "function" != typeof r) throw Error(l(231, t, typeof r));
          return r;
        }
        function me(e, t, r) {
          var n = r._reactName;
          "captured" === t && (n += "Capture"),
            (t = fe(e, n)) &&
              (null == r._dispatchListeners && (r._dispatchListeners = []),
              null == r._dispatchInstances && (r._dispatchInstances = []),
              r._dispatchListeners.push(t),
              r._dispatchInstances.push(e));
        }
        var he = {},
          ve = new Set([
            "mouseEnter",
            "mouseLeave",
            "pointerEnter",
            "pointerLeave",
          ]);
        "blur cancel click close contextMenu copy cut auxClick doubleClick dragEnd dragStart drop focus input invalid keyDown keyPress keyUp mouseDown mouseUp paste pause play pointerCancel pointerDown pointerUp rateChange reset seeked submit touchCancel touchEnd touchStart volumeChange drag dragEnter dragExit dragLeave dragOver mouseMove mouseOut mouseOver pointerMove pointerOut pointerOver scroll toggle touchMove wheel abort animationEnd animationIteration animationStart canPlay canPlayThrough durationChange emptied encrypted ended error gotPointerCapture load loadedData loadedMetadata loadStart lostPointerCapture playing progress seeking stalled suspend timeUpdate transitionEnd waiting mouseEnter mouseLeave pointerEnter pointerLeave change select beforeInput compositionEnd compositionStart compositionUpdate"
          .split(" ")
          .forEach(function (e) {
            he[e] = (function (e) {
              return function (t, r) {
                if (a.isValidElement(t)) throw Error(l(228));
                if (oe(t)) throw Error(l(229));
                var i = "on" + e[0].toUpperCase() + e.slice(1),
                  u = new re();
                (u.target = t), (u.type = e.toLowerCase());
                var s = X(t),
                  c = new v(i, u.type, s, u, t);
                c.persist(),
                  n(c, r),
                  ve.has(e)
                    ? c &&
                      c._reactName &&
                      (function (e, t, r) {
                        e &&
                          r &&
                          r._reactName &&
                          (t = fe(e, r._reactName)) &&
                          (null == r._dispatchListeners &&
                            (r._dispatchListeners = []),
                          null == r._dispatchInstances &&
                            (r._dispatchInstances = []),
                          r._dispatchListeners.push(t),
                          r._dispatchInstances.push(e));
                      })(c._targetInst, null, c)
                    : c && c._reactName && pe(c._targetInst, me, c),
                  o.unstable_batchedUpdates(function () {
                    if ((ee(t), c)) {
                      var e = c._dispatchListeners,
                        r = c._dispatchInstances;
                      if (Array.isArray(e))
                        for (
                          var n = 0;
                          n < e.length && !c.isPropagationStopped();
                          n++
                        )
                          de(c, e[n], r[n]);
                      else e && de(c, e, r);
                      (c._dispatchListeners = null),
                        (c._dispatchInstances = null),
                        c.isPersistent() || c.constructor.release(c);
                    }
                    if (W) throw ((e = Y), (W = !1), (Y = null), e);
                  }),
                  te();
              };
            })(e);
          }),
          (t.Simulate = he),
          (t.act = function (e) {
            function t() {
              F--, (N.current = r), (O.current = n);
            }
            !1 === j &&
              ((j = !0),
              console.error(
                "act(...) is not supported in production builds of React, and might not behave as expected."
              )),
              F++;
            var r = N.current,
              n = O.current;
            (N.current = !0), (O.current = !0);
            try {
              var a = M(e);
            } catch (e) {
              throw (t(), e);
            }
            if (
              null !== a &&
              "object" == typeof a &&
              "function" == typeof a.then
            )
              return {
                then: function (e, n) {
                  a.then(
                    function () {
                      1 < F || (!0 === I && !0 === r)
                        ? (t(), e())
                        : A(function (r) {
                            t(), r ? n(r) : e();
                          });
                    },
                    function (e) {
                      t(), n(e);
                    }
                  );
                },
              };
            try {
              1 !== F || (!1 !== I && !1 !== r) || L(), t();
            } catch (e) {
              throw (t(), e);
            }
            return {
              then: function (e) {
                e();
              },
            };
          }),
          (t.findAllInRenderedTree = le),
          (t.findRenderedComponentWithType = function (e, t) {
            if (
              (ne(e, "findRenderedComponentWithType"),
              1 !== (e = ce(e, t)).length)
            )
              throw Error(
                "Did not find exactly one match (found: " +
                  e.length +
                  ") for componentType:" +
                  t
              );
            return e[0];
          }),
          (t.findRenderedDOMComponentWithClass = function (e, t) {
            if (
              (ne(e, "findRenderedDOMComponentWithClass"),
              1 !== (e = ue(e, t)).length)
            )
              throw Error(
                "Did not find exactly one match (found: " +
                  e.length +
                  ") for class:" +
                  t
              );
            return e[0];
          }),
          (t.findRenderedDOMComponentWithTag = function (e, t) {
            if (
              (ne(e, "findRenderedDOMComponentWithTag"),
              1 !== (e = se(e, t)).length)
            )
              throw Error(
                "Did not find exactly one match (found: " +
                  e.length +
                  ") for tag:" +
                  t
              );
            return e[0];
          }),
          (t.isCompositeComponent = oe),
          (t.isCompositeComponentWithType = ie),
          (t.isDOMComponent = ae),
          (t.isDOMComponentElement = function (e) {
            return !!(e && a.isValidElement(e) && e.tagName);
          }),
          (t.isElement = function (e) {
            return a.isValidElement(e);
          }),
          (t.isElementOfType = function (e, t) {
            return a.isValidElement(e) && e.type === t;
          }),
          (t.mockComponent = function (e, t) {
            return (
              (t = t || e.mockTagName || "div"),
              e.prototype.render.mockImplementation(function () {
                return a.createElement(t, null, this.props.children);
              }),
              this
            );
          }),
          (t.nativeTouchData = function (e, t) {
            return { touches: [{ pageX: e, pageY: t }] };
          }),
          (t.renderIntoDocument = function (e) {
            var t = document.createElement("div");
            return o.render(e, t);
          }),
          (t.scryRenderedComponentsWithType = ce),
          (t.scryRenderedDOMComponentsWithClass = ue),
          (t.scryRenderedDOMComponentsWithTag = se),
          (t.traverseTwoPhase = pe),
          (t.unstable_concurrentAct = function (e) {
            function t() {
              (B.current = r), (D.current = n);
            }
            if (void 0 === i.unstable_flushAllWithoutAsserting)
              throw Error(
                "This version of `act` requires a special mock build of Scheduler."
              );
            if (!0 !== setTimeout._isMockFunction)
              throw Error(
                "This version of `act` requires Jest's timer mocks (i.e. jest.useFakeTimers)."
              );
            var r = B.current,
              n = D.current;
            (B.current = !0), (D.current = !0);
            try {
              var a = U(e);
              if (
                "object" == typeof a &&
                null !== a &&
                "function" == typeof a.then
              )
                return {
                  then: function (e, r) {
                    a.then(
                      function () {
                        z(
                          function () {
                            t(), e();
                          },
                          function (e) {
                            t(), r(e);
                          }
                        );
                      },
                      function (e) {
                        t(), r(e);
                      }
                    );
                  },
                };
              try {
                do {
                  var o = i.unstable_flushAllWithoutAsserting();
                } while (o);
              } finally {
                t();
              }
            } catch (e) {
              throw (t(), e);
            }
          });
      },
      4448: (e, t, r) => {
        "use strict";
        var n = r(7294),
          a = r(7418),
          o = r(3840);
        function i(e) {
          for (
            var t =
                "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
              r = 1;
            r < arguments.length;
            r++
          )
            t += "&args[]=" + encodeURIComponent(arguments[r]);
          return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        if (!n) throw Error(i(227));
        var l = new Set(),
          u = {};
        function s(e, t) {
          c(e, t), c(e + "Capture", t);
        }
        function c(e, t) {
          for (u[e] = t, e = 0; e < t.length; e++) l.add(t[e]);
        }
        var d = !(
            "undefined" == typeof window ||
            void 0 === window.document ||
            void 0 === window.document.createElement
          ),
          p =
            /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
          f = Object.prototype.hasOwnProperty,
          m = {},
          h = {};
        function v(e, t, r, n, a, o, i) {
          (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
            (this.attributeName = n),
            (this.attributeNamespace = a),
            (this.mustUseProperty = r),
            (this.propertyName = e),
            (this.type = t),
            (this.sanitizeURL = o),
            (this.removeEmptyString = i);
        }
        var b = {};
        "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
          .split(" ")
          .forEach(function (e) {
            b[e] = new v(e, 0, !1, e, null, !1, !1);
          }),
          [
            ["acceptCharset", "accept-charset"],
            ["className", "class"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
          ].forEach(function (e) {
            var t = e[0];
            b[t] = new v(t, 1, !1, e[1], null, !1, !1);
          }),
          ["contentEditable", "draggable", "spellCheck", "value"].forEach(
            function (e) {
              b[e] = new v(e, 2, !1, e.toLowerCase(), null, !1, !1);
            }
          ),
          [
            "autoReverse",
            "externalResourcesRequired",
            "focusable",
            "preserveAlpha",
          ].forEach(function (e) {
            b[e] = new v(e, 2, !1, e, null, !1, !1);
          }),
          "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
            .split(" ")
            .forEach(function (e) {
              b[e] = new v(e, 3, !1, e.toLowerCase(), null, !1, !1);
            }),
          ["checked", "multiple", "muted", "selected"].forEach(function (e) {
            b[e] = new v(e, 3, !0, e, null, !1, !1);
          }),
          ["capture", "download"].forEach(function (e) {
            b[e] = new v(e, 4, !1, e, null, !1, !1);
          }),
          ["cols", "rows", "size", "span"].forEach(function (e) {
            b[e] = new v(e, 6, !1, e, null, !1, !1);
          }),
          ["rowSpan", "start"].forEach(function (e) {
            b[e] = new v(e, 5, !1, e.toLowerCase(), null, !1, !1);
          });
        var y = /[\-:]([a-z])/g;
        function g(e) {
          return e[1].toUpperCase();
        }
        function w(e, t, r, n) {
          var a = b.hasOwnProperty(t) ? b[t] : null;
          (null !== a
            ? 0 === a.type
            : !n &&
              2 < t.length &&
              ("o" === t[0] || "O" === t[0]) &&
              ("n" === t[1] || "N" === t[1])) ||
            ((function (e, t, r, n) {
              if (
                null == t ||
                (function (e, t, r, n) {
                  if (null !== r && 0 === r.type) return !1;
                  switch (typeof t) {
                    case "function":
                    case "symbol":
                      return !0;
                    case "boolean":
                      return (
                        !n &&
                        (null !== r
                          ? !r.acceptsBooleans
                          : "data-" !== (e = e.toLowerCase().slice(0, 5)) &&
                            "aria-" !== e)
                      );
                    default:
                      return !1;
                  }
                })(e, t, r, n)
              )
                return !0;
              if (n) return !1;
              if (null !== r)
                switch (r.type) {
                  case 3:
                    return !t;
                  case 4:
                    return !1 === t;
                  case 5:
                    return isNaN(t);
                  case 6:
                    return isNaN(t) || 1 > t;
                }
              return !1;
            })(t, r, a, n) && (r = null),
            n || null === a
              ? (function (e) {
                  return (
                    !!f.call(h, e) ||
                    (!f.call(m, e) &&
                      (p.test(e) ? (h[e] = !0) : ((m[e] = !0), !1)))
                  );
                })(t) &&
                (null === r ? e.removeAttribute(t) : e.setAttribute(t, "" + r))
              : a.mustUseProperty
              ? (e[a.propertyName] = null === r ? 3 !== a.type && "" : r)
              : ((t = a.attributeName),
                (n = a.attributeNamespace),
                null === r
                  ? e.removeAttribute(t)
                  : ((r =
                      3 === (a = a.type) || (4 === a && !0 === r)
                        ? ""
                        : "" + r),
                    n ? e.setAttributeNS(n, t, r) : e.setAttribute(t, r))));
        }
        "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
          .split(" ")
          .forEach(function (e) {
            var t = e.replace(y, g);
            b[t] = new v(t, 1, !1, e, null, !1, !1);
          }),
          "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
            .split(" ")
            .forEach(function (e) {
              var t = e.replace(y, g);
              b[t] = new v(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
            }),
          ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
            var t = e.replace(y, g);
            b[t] = new v(
              t,
              1,
              !1,
              e,
              "http://www.w3.org/XML/1998/namespace",
              !1,
              !1
            );
          }),
          ["tabIndex", "crossOrigin"].forEach(function (e) {
            b[e] = new v(e, 1, !1, e.toLowerCase(), null, !1, !1);
          }),
          (b.xlinkHref = new v(
            "xlinkHref",
            1,
            !1,
            "xlink:href",
            "http://www.w3.org/1999/xlink",
            !0,
            !1
          )),
          ["src", "href", "action", "formAction"].forEach(function (e) {
            b[e] = new v(e, 1, !1, e.toLowerCase(), null, !0, !0);
          });
        var x = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
          E = 60103,
          _ = 60106,
          C = 60107,
          k = 60108,
          P = 60114,
          S = 60109,
          q = 60110,
          R = 60112,
          T = 60113,
          O = 60120,
          M = 60115,
          N = 60116,
          I = 60121,
          L = 60128,
          A = 60129,
          F = 60130,
          j = 60131;
        if ("function" == typeof Symbol && Symbol.for) {
          var D = Symbol.for;
          (E = D("react.element")),
            (_ = D("react.portal")),
            (C = D("react.fragment")),
            (k = D("react.strict_mode")),
            (P = D("react.profiler")),
            (S = D("react.provider")),
            (q = D("react.context")),
            (R = D("react.forward_ref")),
            (T = D("react.suspense")),
            (O = D("react.suspense_list")),
            (M = D("react.memo")),
            (N = D("react.lazy")),
            (I = D("react.block")),
            D("react.scope"),
            (L = D("react.opaque.id")),
            (A = D("react.debug_trace_mode")),
            (F = D("react.offscreen")),
            (j = D("react.legacy_hidden"));
        }
        var U,
          B = "function" == typeof Symbol && Symbol.iterator;
        function z(e) {
          return null === e || "object" != typeof e
            ? null
            : "function" == typeof (e = (B && e[B]) || e["@@iterator"])
            ? e
            : null;
        }
        function H(e) {
          if (void 0 === U)
            try {
              throw Error();
            } catch (e) {
              var t = e.stack.trim().match(/\n( *(at )?)/);
              U = (t && t[1]) || "";
            }
          return "\n" + U + e;
        }
        var V = !1;
        function $(e, t) {
          if (!e || V) return "";
          V = !0;
          var r = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            if (t)
              if (
                ((t = function () {
                  throw Error();
                }),
                Object.defineProperty(t.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                "object" == typeof Reflect && Reflect.construct)
              ) {
                try {
                  Reflect.construct(t, []);
                } catch (e) {
                  var n = e;
                }
                Reflect.construct(e, [], t);
              } else {
                try {
                  t.call();
                } catch (e) {
                  n = e;
                }
                e.call(t.prototype);
              }
            else {
              try {
                throw Error();
              } catch (e) {
                n = e;
              }
              e();
            }
          } catch (e) {
            if (e && n && "string" == typeof e.stack) {
              for (
                var a = e.stack.split("\n"),
                  o = n.stack.split("\n"),
                  i = a.length - 1,
                  l = o.length - 1;
                1 <= i && 0 <= l && a[i] !== o[l];

              )
                l--;
              for (; 1 <= i && 0 <= l; i--, l--)
                if (a[i] !== o[l]) {
                  if (1 !== i || 1 !== l)
                    do {
                      if ((i--, 0 > --l || a[i] !== o[l]))
                        return "\n" + a[i].replace(" at new ", " at ");
                    } while (1 <= i && 0 <= l);
                  break;
                }
            }
          } finally {
            (V = !1), (Error.prepareStackTrace = r);
          }
          return (e = e ? e.displayName || e.name : "") ? H(e) : "";
        }
        function W(e) {
          switch (e.tag) {
            case 5:
              return H(e.type);
            case 16:
              return H("Lazy");
            case 13:
              return H("Suspense");
            case 19:
              return H("SuspenseList");
            case 0:
            case 2:
            case 15:
              return $(e.type, !1);
            case 11:
              return $(e.type.render, !1);
            case 22:
              return $(e.type._render, !1);
            case 1:
              return $(e.type, !0);
            default:
              return "";
          }
        }
        function Y(e) {
          if (null == e) return null;
          if ("function" == typeof e) return e.displayName || e.name || null;
          if ("string" == typeof e) return e;
          switch (e) {
            case C:
              return "Fragment";
            case _:
              return "Portal";
            case P:
              return "Profiler";
            case k:
              return "StrictMode";
            case T:
              return "Suspense";
            case O:
              return "SuspenseList";
          }
          if ("object" == typeof e)
            switch (e.$$typeof) {
              case q:
                return (e.displayName || "Context") + ".Consumer";
              case S:
                return (e._context.displayName || "Context") + ".Provider";
              case R:
                var t = e.render;
                return (
                  (t = t.displayName || t.name || ""),
                  e.displayName ||
                    ("" !== t ? "ForwardRef(" + t + ")" : "ForwardRef")
                );
              case M:
                return Y(e.type);
              case I:
                return Y(e._render);
              case N:
                (t = e._payload), (e = e._init);
                try {
                  return Y(e(t));
                } catch (e) {}
            }
          return null;
        }
        function G(e) {
          switch (typeof e) {
            case "boolean":
            case "number":
            case "object":
            case "string":
            case "undefined":
              return e;
            default:
              return "";
          }
        }
        function Q(e) {
          var t = e.type;
          return (
            (e = e.nodeName) &&
            "input" === e.toLowerCase() &&
            ("checkbox" === t || "radio" === t)
          );
        }
        function K(e) {
          e._valueTracker ||
            (e._valueTracker = (function (e) {
              var t = Q(e) ? "checked" : "value",
                r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                n = "" + e[t];
              if (
                !e.hasOwnProperty(t) &&
                void 0 !== r &&
                "function" == typeof r.get &&
                "function" == typeof r.set
              ) {
                var a = r.get,
                  o = r.set;
                return (
                  Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                      return a.call(this);
                    },
                    set: function (e) {
                      (n = "" + e), o.call(this, e);
                    },
                  }),
                  Object.defineProperty(e, t, { enumerable: r.enumerable }),
                  {
                    getValue: function () {
                      return n;
                    },
                    setValue: function (e) {
                      n = "" + e;
                    },
                    stopTracking: function () {
                      (e._valueTracker = null), delete e[t];
                    },
                  }
                );
              }
            })(e));
        }
        function X(e) {
          if (!e) return !1;
          var t = e._valueTracker;
          if (!t) return !0;
          var r = t.getValue(),
            n = "";
          return (
            e && (n = Q(e) ? (e.checked ? "true" : "false") : e.value),
            (e = n) !== r && (t.setValue(e), !0)
          );
        }
        function J(e) {
          if (
            void 0 ===
            (e = e || ("undefined" != typeof document ? document : void 0))
          )
            return null;
          try {
            return e.activeElement || e.body;
          } catch (t) {
            return e.body;
          }
        }
        function Z(e, t) {
          var r = t.checked;
          return a({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != r ? r : e._wrapperState.initialChecked,
          });
        }
        function ee(e, t) {
          var r = null == t.defaultValue ? "" : t.defaultValue,
            n = null != t.checked ? t.checked : t.defaultChecked;
          (r = G(null != t.value ? t.value : r)),
            (e._wrapperState = {
              initialChecked: n,
              initialValue: r,
              controlled:
                "checkbox" === t.type || "radio" === t.type
                  ? null != t.checked
                  : null != t.value,
            });
        }
        function te(e, t) {
          null != (t = t.checked) && w(e, "checked", t, !1);
        }
        function re(e, t) {
          te(e, t);
          var r = G(t.value),
            n = t.type;
          if (null != r)
            "number" === n
              ? ((0 === r && "" === e.value) || e.value != r) &&
                (e.value = "" + r)
              : e.value !== "" + r && (e.value = "" + r);
          else if ("submit" === n || "reset" === n)
            return void e.removeAttribute("value");
          t.hasOwnProperty("value")
            ? ae(e, t.type, r)
            : t.hasOwnProperty("defaultValue") &&
              ae(e, t.type, G(t.defaultValue)),
            null == t.checked &&
              null != t.defaultChecked &&
              (e.defaultChecked = !!t.defaultChecked);
        }
        function ne(e, t, r) {
          if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var n = t.type;
            if (
              !(
                ("submit" !== n && "reset" !== n) ||
                (void 0 !== t.value && null !== t.value)
              )
            )
              return;
            (t = "" + e._wrapperState.initialValue),
              r || t === e.value || (e.value = t),
              (e.defaultValue = t);
          }
          "" !== (r = e.name) && (e.name = ""),
            (e.defaultChecked = !!e._wrapperState.initialChecked),
            "" !== r && (e.name = r);
        }
        function ae(e, t, r) {
          ("number" === t && J(e.ownerDocument) === e) ||
            (null == r
              ? (e.defaultValue = "" + e._wrapperState.initialValue)
              : e.defaultValue !== "" + r && (e.defaultValue = "" + r));
        }
        function oe(e, t) {
          return (
            (e = a({ children: void 0 }, t)),
            (t = (function (e) {
              var t = "";
              return (
                n.Children.forEach(e, function (e) {
                  null != e && (t += e);
                }),
                t
              );
            })(t.children)) && (e.children = t),
            e
          );
        }
        function ie(e, t, r, n) {
          if (((e = e.options), t)) {
            t = {};
            for (var a = 0; a < r.length; a++) t["$" + r[a]] = !0;
            for (r = 0; r < e.length; r++)
              (a = t.hasOwnProperty("$" + e[r].value)),
                e[r].selected !== a && (e[r].selected = a),
                a && n && (e[r].defaultSelected = !0);
          } else {
            for (r = "" + G(r), t = null, a = 0; a < e.length; a++) {
              if (e[a].value === r)
                return (
                  (e[a].selected = !0), void (n && (e[a].defaultSelected = !0))
                );
              null !== t || e[a].disabled || (t = e[a]);
            }
            null !== t && (t.selected = !0);
          }
        }
        function le(e, t) {
          if (null != t.dangerouslySetInnerHTML) throw Error(i(91));
          return a({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue,
          });
        }
        function ue(e, t) {
          var r = t.value;
          if (null == r) {
            if (((r = t.children), (t = t.defaultValue), null != r)) {
              if (null != t) throw Error(i(92));
              if (Array.isArray(r)) {
                if (!(1 >= r.length)) throw Error(i(93));
                r = r[0];
              }
              t = r;
            }
            null == t && (t = ""), (r = t);
          }
          e._wrapperState = { initialValue: G(r) };
        }
        function se(e, t) {
          var r = G(t.value),
            n = G(t.defaultValue);
          null != r &&
            ((r = "" + r) !== e.value && (e.value = r),
            null == t.defaultValue &&
              e.defaultValue !== r &&
              (e.defaultValue = r)),
            null != n && (e.defaultValue = "" + n);
        }
        function ce(e) {
          var t = e.textContent;
          t === e._wrapperState.initialValue &&
            "" !== t &&
            null !== t &&
            (e.value = t);
        }
        var de = "http://www.w3.org/1999/xhtml";
        function pe(e) {
          switch (e) {
            case "svg":
              return "http://www.w3.org/2000/svg";
            case "math":
              return "http://www.w3.org/1998/Math/MathML";
            default:
              return "http://www.w3.org/1999/xhtml";
          }
        }
        function fe(e, t) {
          return null == e || "http://www.w3.org/1999/xhtml" === e
            ? pe(t)
            : "http://www.w3.org/2000/svg" === e && "foreignObject" === t
            ? "http://www.w3.org/1999/xhtml"
            : e;
        }
        var me,
          he,
          ve =
            ((he = function (e, t) {
              if (
                "http://www.w3.org/2000/svg" !== e.namespaceURI ||
                "innerHTML" in e
              )
                e.innerHTML = t;
              else {
                for (
                  (me = me || document.createElement("div")).innerHTML =
                    "<svg>" + t.valueOf().toString() + "</svg>",
                    t = me.firstChild;
                  e.firstChild;

                )
                  e.removeChild(e.firstChild);
                for (; t.firstChild; ) e.appendChild(t.firstChild);
              }
            }),
            "undefined" != typeof MSApp && MSApp.execUnsafeLocalFunction
              ? function (e, t, r, n) {
                  MSApp.execUnsafeLocalFunction(function () {
                    return he(e, t);
                  });
                }
              : he);
        function be(e, t) {
          if (t) {
            var r = e.firstChild;
            if (r && r === e.lastChild && 3 === r.nodeType)
              return void (r.nodeValue = t);
          }
          e.textContent = t;
        }
        var ye = {
            animationIterationCount: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0,
          },
          ge = ["Webkit", "ms", "Moz", "O"];
        function we(e, t, r) {
          return null == t || "boolean" == typeof t || "" === t
            ? ""
            : r ||
              "number" != typeof t ||
              0 === t ||
              (ye.hasOwnProperty(e) && ye[e])
            ? ("" + t).trim()
            : t + "px";
        }
        function xe(e, t) {
          for (var r in ((e = e.style), t))
            if (t.hasOwnProperty(r)) {
              var n = 0 === r.indexOf("--"),
                a = we(r, t[r], n);
              "float" === r && (r = "cssFloat"),
                n ? e.setProperty(r, a) : (e[r] = a);
            }
        }
        Object.keys(ye).forEach(function (e) {
          ge.forEach(function (t) {
            (t = t + e.charAt(0).toUpperCase() + e.substring(1)),
              (ye[t] = ye[e]);
          });
        });
        var Ee = a(
          { menuitem: !0 },
          {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0,
          }
        );
        function _e(e, t) {
          if (t) {
            if (
              Ee[e] &&
              (null != t.children || null != t.dangerouslySetInnerHTML)
            )
              throw Error(i(137, e));
            if (null != t.dangerouslySetInnerHTML) {
              if (null != t.children) throw Error(i(60));
              if (
                "object" != typeof t.dangerouslySetInnerHTML ||
                !("__html" in t.dangerouslySetInnerHTML)
              )
                throw Error(i(61));
            }
            if (null != t.style && "object" != typeof t.style)
              throw Error(i(62));
          }
        }
        function Ce(e, t) {
          if (-1 === e.indexOf("-")) return "string" == typeof t.is;
          switch (e) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
              return !1;
            default:
              return !0;
          }
        }
        function ke(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement &&
              (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          );
        }
        var Pe = null,
          Se = null,
          qe = null;
        function Re(e) {
          if ((e = ra(e))) {
            if ("function" != typeof Pe) throw Error(i(280));
            var t = e.stateNode;
            t && ((t = aa(t)), Pe(e.stateNode, e.type, t));
          }
        }
        function Te(e) {
          Se ? (qe ? qe.push(e) : (qe = [e])) : (Se = e);
        }
        function Oe() {
          if (Se) {
            var e = Se,
              t = qe;
            if (((qe = Se = null), Re(e), t))
              for (e = 0; e < t.length; e++) Re(t[e]);
          }
        }
        function Me(e, t) {
          return e(t);
        }
        function Ne(e, t, r, n, a) {
          return e(t, r, n, a);
        }
        function Ie() {}
        var Le = Me,
          Ae = !1,
          Fe = !1;
        function je() {
          (null === Se && null === qe) || (Ie(), Oe());
        }
        function De(e, t) {
          var r = e.stateNode;
          if (null === r) return null;
          var n = aa(r);
          if (null === n) return null;
          r = n[t];
          e: switch (t) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
              (n = !n.disabled) ||
                (n = !(
                  "button" === (e = e.type) ||
                  "input" === e ||
                  "select" === e ||
                  "textarea" === e
                )),
                (e = !n);
              break e;
            default:
              e = !1;
          }
          if (e) return null;
          if (r && "function" != typeof r) throw Error(i(231, t, typeof r));
          return r;
        }
        var Ue = !1;
        if (d)
          try {
            var Be = {};
            Object.defineProperty(Be, "passive", {
              get: function () {
                Ue = !0;
              },
            }),
              window.addEventListener("test", Be, Be),
              window.removeEventListener("test", Be, Be);
          } catch (he) {
            Ue = !1;
          }
        function ze(e, t, r, n, a, o, i, l, u) {
          var s = Array.prototype.slice.call(arguments, 3);
          try {
            t.apply(r, s);
          } catch (e) {
            this.onError(e);
          }
        }
        var He = !1,
          Ve = null,
          $e = !1,
          We = null,
          Ye = {
            onError: function (e) {
              (He = !0), (Ve = e);
            },
          };
        function Ge(e, t, r, n, a, o, i, l, u) {
          (He = !1), (Ve = null), ze.apply(Ye, arguments);
        }
        function Qe(e) {
          var t = e,
            r = e;
          if (e.alternate) for (; t.return; ) t = t.return;
          else {
            e = t;
            do {
              0 != (1026 & (t = e).flags) && (r = t.return), (e = t.return);
            } while (e);
          }
          return 3 === t.tag ? r : null;
        }
        function Ke(e) {
          if (13 === e.tag) {
            var t = e.memoizedState;
            if (
              (null === t &&
                null !== (e = e.alternate) &&
                (t = e.memoizedState),
              null !== t)
            )
              return t.dehydrated;
          }
          return null;
        }
        function Xe(e) {
          if (Qe(e) !== e) throw Error(i(188));
        }
        function Je(e) {
          if (
            ((e = (function (e) {
              var t = e.alternate;
              if (!t) {
                if (null === (t = Qe(e))) throw Error(i(188));
                return t !== e ? null : e;
              }
              for (var r = e, n = t; ; ) {
                var a = r.return;
                if (null === a) break;
                var o = a.alternate;
                if (null === o) {
                  if (null !== (n = a.return)) {
                    r = n;
                    continue;
                  }
                  break;
                }
                if (a.child === o.child) {
                  for (o = a.child; o; ) {
                    if (o === r) return Xe(a), e;
                    if (o === n) return Xe(a), t;
                    o = o.sibling;
                  }
                  throw Error(i(188));
                }
                if (r.return !== n.return) (r = a), (n = o);
                else {
                  for (var l = !1, u = a.child; u; ) {
                    if (u === r) {
                      (l = !0), (r = a), (n = o);
                      break;
                    }
                    if (u === n) {
                      (l = !0), (n = a), (r = o);
                      break;
                    }
                    u = u.sibling;
                  }
                  if (!l) {
                    for (u = o.child; u; ) {
                      if (u === r) {
                        (l = !0), (r = o), (n = a);
                        break;
                      }
                      if (u === n) {
                        (l = !0), (n = o), (r = a);
                        break;
                      }
                      u = u.sibling;
                    }
                    if (!l) throw Error(i(189));
                  }
                }
                if (r.alternate !== n) throw Error(i(190));
              }
              if (3 !== r.tag) throw Error(i(188));
              return r.stateNode.current === r ? e : t;
            })(e)),
            !e)
          )
            return null;
          for (var t = e; ; ) {
            if (5 === t.tag || 6 === t.tag) return t;
            if (t.child) (t.child.return = t), (t = t.child);
            else {
              if (t === e) break;
              for (; !t.sibling; ) {
                if (!t.return || t.return === e) return null;
                t = t.return;
              }
              (t.sibling.return = t.return), (t = t.sibling);
            }
          }
          return null;
        }
        function Ze(e, t) {
          for (var r = e.alternate; null !== t; ) {
            if (t === e || t === r) return !0;
            t = t.return;
          }
          return !1;
        }
        var et,
          tt,
          rt,
          nt,
          at = !1,
          ot = [],
          it = null,
          lt = null,
          ut = null,
          st = new Map(),
          ct = new Map(),
          dt = [],
          pt =
            "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
              " "
            );
        function ft(e, t, r, n, a) {
          return {
            blockedOn: e,
            domEventName: t,
            eventSystemFlags: 16 | r,
            nativeEvent: a,
            targetContainers: [n],
          };
        }
        function mt(e, t) {
          switch (e) {
            case "focusin":
            case "focusout":
              it = null;
              break;
            case "dragenter":
            case "dragleave":
              lt = null;
              break;
            case "mouseover":
            case "mouseout":
              ut = null;
              break;
            case "pointerover":
            case "pointerout":
              st.delete(t.pointerId);
              break;
            case "gotpointercapture":
            case "lostpointercapture":
              ct.delete(t.pointerId);
          }
        }
        function ht(e, t, r, n, a, o) {
          return null === e || e.nativeEvent !== o
            ? ((e = ft(t, r, n, a, o)),
              null !== t && null !== (t = ra(t)) && tt(t),
              e)
            : ((e.eventSystemFlags |= n),
              (t = e.targetContainers),
              null !== a && -1 === t.indexOf(a) && t.push(a),
              e);
        }
        function vt(e) {
          var t = ta(e.target);
          if (null !== t) {
            var r = Qe(t);
            if (null !== r)
              if (13 === (t = r.tag)) {
                if (null !== (t = Ke(r)))
                  return (
                    (e.blockedOn = t),
                    void nt(e.lanePriority, function () {
                      o.unstable_runWithPriority(e.priority, function () {
                        rt(r);
                      });
                    })
                  );
              } else if (3 === t && r.stateNode.hydrate)
                return void (e.blockedOn =
                  3 === r.tag ? r.stateNode.containerInfo : null);
          }
          e.blockedOn = null;
        }
        function bt(e) {
          if (null !== e.blockedOn) return !1;
          for (var t = e.targetContainers; 0 < t.length; ) {
            var r = Jt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (null !== r)
              return null !== (t = ra(r)) && tt(t), (e.blockedOn = r), !1;
            t.shift();
          }
          return !0;
        }
        function yt(e, t, r) {
          bt(e) && r.delete(t);
        }
        function gt() {
          for (at = !1; 0 < ot.length; ) {
            var e = ot[0];
            if (null !== e.blockedOn) {
              null !== (e = ra(e.blockedOn)) && et(e);
              break;
            }
            for (var t = e.targetContainers; 0 < t.length; ) {
              var r = Jt(
                e.domEventName,
                e.eventSystemFlags,
                t[0],
                e.nativeEvent
              );
              if (null !== r) {
                e.blockedOn = r;
                break;
              }
              t.shift();
            }
            null === e.blockedOn && ot.shift();
          }
          null !== it && bt(it) && (it = null),
            null !== lt && bt(lt) && (lt = null),
            null !== ut && bt(ut) && (ut = null),
            st.forEach(yt),
            ct.forEach(yt);
        }
        function wt(e, t) {
          e.blockedOn === t &&
            ((e.blockedOn = null),
            at ||
              ((at = !0),
              o.unstable_scheduleCallback(o.unstable_NormalPriority, gt)));
        }
        function xt(e) {
          function t(t) {
            return wt(t, e);
          }
          if (0 < ot.length) {
            wt(ot[0], e);
            for (var r = 1; r < ot.length; r++) {
              var n = ot[r];
              n.blockedOn === e && (n.blockedOn = null);
            }
          }
          for (
            null !== it && wt(it, e),
              null !== lt && wt(lt, e),
              null !== ut && wt(ut, e),
              st.forEach(t),
              ct.forEach(t),
              r = 0;
            r < dt.length;
            r++
          )
            (n = dt[r]).blockedOn === e && (n.blockedOn = null);
          for (; 0 < dt.length && null === (r = dt[0]).blockedOn; )
            vt(r), null === r.blockedOn && dt.shift();
        }
        function Et(e, t) {
          var r = {};
          return (
            (r[e.toLowerCase()] = t.toLowerCase()),
            (r["Webkit" + e] = "webkit" + t),
            (r["Moz" + e] = "moz" + t),
            r
          );
        }
        var _t = {
            animationend: Et("Animation", "AnimationEnd"),
            animationiteration: Et("Animation", "AnimationIteration"),
            animationstart: Et("Animation", "AnimationStart"),
            transitionend: Et("Transition", "TransitionEnd"),
          },
          Ct = {},
          kt = {};
        function Pt(e) {
          if (Ct[e]) return Ct[e];
          if (!_t[e]) return e;
          var t,
            r = _t[e];
          for (t in r)
            if (r.hasOwnProperty(t) && t in kt) return (Ct[e] = r[t]);
          return e;
        }
        d &&
          ((kt = document.createElement("div").style),
          "AnimationEvent" in window ||
            (delete _t.animationend.animation,
            delete _t.animationiteration.animation,
            delete _t.animationstart.animation),
          "TransitionEvent" in window || delete _t.transitionend.transition);
        var St = Pt("animationend"),
          qt = Pt("animationiteration"),
          Rt = Pt("animationstart"),
          Tt = Pt("transitionend"),
          Ot = new Map(),
          Mt = new Map(),
          Nt = [
            "abort",
            "abort",
            St,
            "animationEnd",
            qt,
            "animationIteration",
            Rt,
            "animationStart",
            "canplay",
            "canPlay",
            "canplaythrough",
            "canPlayThrough",
            "durationchange",
            "durationChange",
            "emptied",
            "emptied",
            "encrypted",
            "encrypted",
            "ended",
            "ended",
            "error",
            "error",
            "gotpointercapture",
            "gotPointerCapture",
            "load",
            "load",
            "loadeddata",
            "loadedData",
            "loadedmetadata",
            "loadedMetadata",
            "loadstart",
            "loadStart",
            "lostpointercapture",
            "lostPointerCapture",
            "playing",
            "playing",
            "progress",
            "progress",
            "seeking",
            "seeking",
            "stalled",
            "stalled",
            "suspend",
            "suspend",
            "timeupdate",
            "timeUpdate",
            Tt,
            "transitionEnd",
            "waiting",
            "waiting",
          ];
        function It(e, t) {
          for (var r = 0; r < e.length; r += 2) {
            var n = e[r],
              a = e[r + 1];
            (a = "on" + (a[0].toUpperCase() + a.slice(1))),
              Mt.set(n, t),
              Ot.set(n, a),
              s(a, [n]);
          }
        }
        (0, o.unstable_now)();
        var Lt = 8;
        function At(e) {
          if (0 != (1 & e)) return (Lt = 15), 1;
          if (0 != (2 & e)) return (Lt = 14), 2;
          if (0 != (4 & e)) return (Lt = 13), 4;
          var t = 24 & e;
          return 0 !== t
            ? ((Lt = 12), t)
            : 0 != (32 & e)
            ? ((Lt = 11), 32)
            : 0 != (t = 192 & e)
            ? ((Lt = 10), t)
            : 0 != (256 & e)
            ? ((Lt = 9), 256)
            : 0 != (t = 3584 & e)
            ? ((Lt = 8), t)
            : 0 != (4096 & e)
            ? ((Lt = 7), 4096)
            : 0 != (t = 4186112 & e)
            ? ((Lt = 6), t)
            : 0 != (t = 62914560 & e)
            ? ((Lt = 5), t)
            : 67108864 & e
            ? ((Lt = 4), 67108864)
            : 0 != (134217728 & e)
            ? ((Lt = 3), 134217728)
            : 0 != (t = 805306368 & e)
            ? ((Lt = 2), t)
            : 0 != (1073741824 & e)
            ? ((Lt = 1), 1073741824)
            : ((Lt = 8), e);
        }
        function Ft(e, t) {
          var r = e.pendingLanes;
          if (0 === r) return (Lt = 0);
          var n = 0,
            a = 0,
            o = e.expiredLanes,
            i = e.suspendedLanes,
            l = e.pingedLanes;
          if (0 !== o) (n = o), (a = Lt = 15);
          else if (0 != (o = 134217727 & r)) {
            var u = o & ~i;
            0 !== u
              ? ((n = At(u)), (a = Lt))
              : 0 != (l &= o) && ((n = At(l)), (a = Lt));
          } else
            0 != (o = r & ~i)
              ? ((n = At(o)), (a = Lt))
              : 0 !== l && ((n = At(l)), (a = Lt));
          if (0 === n) return 0;
          if (
            ((n = r & (((0 > (n = 31 - Ht(n)) ? 0 : 1 << n) << 1) - 1)),
            0 !== t && t !== n && 0 == (t & i))
          ) {
            if ((At(t), a <= Lt)) return t;
            Lt = a;
          }
          if (0 !== (t = e.entangledLanes))
            for (e = e.entanglements, t &= n; 0 < t; )
              (a = 1 << (r = 31 - Ht(t))), (n |= e[r]), (t &= ~a);
          return n;
        }
        function jt(e) {
          return 0 != (e = -1073741825 & e.pendingLanes)
            ? e
            : 1073741824 & e
            ? 1073741824
            : 0;
        }
        function Dt(e, t) {
          switch (e) {
            case 15:
              return 1;
            case 14:
              return 2;
            case 12:
              return 0 === (e = Ut(24 & ~t)) ? Dt(10, t) : e;
            case 10:
              return 0 === (e = Ut(192 & ~t)) ? Dt(8, t) : e;
            case 8:
              return (
                0 === (e = Ut(3584 & ~t)) &&
                  0 === (e = Ut(4186112 & ~t)) &&
                  (e = 512),
                e
              );
            case 2:
              return 0 === (t = Ut(805306368 & ~t)) && (t = 268435456), t;
          }
          throw Error(i(358, e));
        }
        function Ut(e) {
          return e & -e;
        }
        function Bt(e) {
          for (var t = [], r = 0; 31 > r; r++) t.push(e);
          return t;
        }
        function zt(e, t, r) {
          e.pendingLanes |= t;
          var n = t - 1;
          (e.suspendedLanes &= n),
            (e.pingedLanes &= n),
            ((e = e.eventTimes)[(t = 31 - Ht(t))] = r);
        }
        var Ht = Math.clz32
            ? Math.clz32
            : function (e) {
                return 0 === e ? 32 : (31 - ((Vt(e) / $t) | 0)) | 0;
              },
          Vt = Math.log,
          $t = Math.LN2,
          Wt = o.unstable_UserBlockingPriority,
          Yt = o.unstable_runWithPriority,
          Gt = !0;
        function Qt(e, t, r, n) {
          Ae || Ie();
          var a = Xt,
            o = Ae;
          Ae = !0;
          try {
            Ne(a, e, t, r, n);
          } finally {
            (Ae = o) || je();
          }
        }
        function Kt(e, t, r, n) {
          Yt(Wt, Xt.bind(null, e, t, r, n));
        }
        function Xt(e, t, r, n) {
          var a;
          if (Gt)
            if ((a = 0 == (4 & t)) && 0 < ot.length && -1 < pt.indexOf(e))
              (e = ft(null, e, t, r, n)), ot.push(e);
            else {
              var o = Jt(e, t, r, n);
              if (null === o) a && mt(e, n);
              else {
                if (a) {
                  if (-1 < pt.indexOf(e))
                    return (e = ft(o, e, t, r, n)), void ot.push(e);
                  if (
                    (function (e, t, r, n, a) {
                      switch (t) {
                        case "focusin":
                          return (it = ht(it, e, t, r, n, a)), !0;
                        case "dragenter":
                          return (lt = ht(lt, e, t, r, n, a)), !0;
                        case "mouseover":
                          return (ut = ht(ut, e, t, r, n, a)), !0;
                        case "pointerover":
                          var o = a.pointerId;
                          return (
                            st.set(o, ht(st.get(o) || null, e, t, r, n, a)), !0
                          );
                        case "gotpointercapture":
                          return (
                            (o = a.pointerId),
                            ct.set(o, ht(ct.get(o) || null, e, t, r, n, a)),
                            !0
                          );
                      }
                      return !1;
                    })(o, e, t, r, n)
                  )
                    return;
                  mt(e, n);
                }
                In(e, t, n, null, r);
              }
            }
        }
        function Jt(e, t, r, n) {
          var a = ke(n);
          if (null !== (a = ta(a))) {
            var o = Qe(a);
            if (null === o) a = null;
            else {
              var i = o.tag;
              if (13 === i) {
                if (null !== (a = Ke(o))) return a;
                a = null;
              } else if (3 === i) {
                if (o.stateNode.hydrate)
                  return 3 === o.tag ? o.stateNode.containerInfo : null;
                a = null;
              } else o !== a && (a = null);
            }
          }
          return In(e, t, n, a, r), null;
        }
        var Zt = null,
          er = null,
          tr = null;
        function rr() {
          if (tr) return tr;
          var e,
            t,
            r = er,
            n = r.length,
            a = "value" in Zt ? Zt.value : Zt.textContent,
            o = a.length;
          for (e = 0; e < n && r[e] === a[e]; e++);
          var i = n - e;
          for (t = 1; t <= i && r[n - t] === a[o - t]; t++);
          return (tr = a.slice(e, 1 < t ? 1 - t : void 0));
        }
        function nr(e) {
          var t = e.keyCode;
          return (
            "charCode" in e
              ? 0 === (e = e.charCode) && 13 === t && (e = 13)
              : (e = t),
            10 === e && (e = 13),
            32 <= e || 13 === e ? e : 0
          );
        }
        function ar() {
          return !0;
        }
        function or() {
          return !1;
        }
        function ir(e) {
          function t(t, r, n, a, o) {
            for (var i in ((this._reactName = t),
            (this._targetInst = n),
            (this.type = r),
            (this.nativeEvent = a),
            (this.target = o),
            (this.currentTarget = null),
            e))
              e.hasOwnProperty(i) && ((t = e[i]), (this[i] = t ? t(a) : a[i]));
            return (
              (this.isDefaultPrevented = (
                null != a.defaultPrevented
                  ? a.defaultPrevented
                  : !1 === a.returnValue
              )
                ? ar
                : or),
              (this.isPropagationStopped = or),
              this
            );
          }
          return (
            a(t.prototype, {
              preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                  (e.preventDefault
                    ? e.preventDefault()
                    : "unknown" != typeof e.returnValue && (e.returnValue = !1),
                  (this.isDefaultPrevented = ar));
              },
              stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                  (e.stopPropagation
                    ? e.stopPropagation()
                    : "unknown" != typeof e.cancelBubble &&
                      (e.cancelBubble = !0),
                  (this.isPropagationStopped = ar));
              },
              persist: function () {},
              isPersistent: ar,
            }),
            t
          );
        }
        var lr,
          ur,
          sr,
          cr = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
              return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
          },
          dr = ir(cr),
          pr = a({}, cr, { view: 0, detail: 0 }),
          fr = ir(pr),
          mr = a({}, pr, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: Pr,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
              return void 0 === e.relatedTarget
                ? e.fromElement === e.srcElement
                  ? e.toElement
                  : e.fromElement
                : e.relatedTarget;
            },
            movementX: function (e) {
              return "movementX" in e
                ? e.movementX
                : (e !== sr &&
                    (sr && "mousemove" === e.type
                      ? ((lr = e.screenX - sr.screenX),
                        (ur = e.screenY - sr.screenY))
                      : (ur = lr = 0),
                    (sr = e)),
                  lr);
            },
            movementY: function (e) {
              return "movementY" in e ? e.movementY : ur;
            },
          }),
          hr = ir(mr),
          vr = ir(a({}, mr, { dataTransfer: 0 })),
          br = ir(a({}, pr, { relatedTarget: 0 })),
          yr = ir(
            a({}, cr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          gr = a({}, cr, {
            clipboardData: function (e) {
              return "clipboardData" in e
                ? e.clipboardData
                : window.clipboardData;
            },
          }),
          wr = ir(gr),
          xr = ir(a({}, cr, { data: 0 })),
          Er = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified",
          },
          _r = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta",
          },
          Cr = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey",
          };
        function kr(e) {
          var t = this.nativeEvent;
          return t.getModifierState
            ? t.getModifierState(e)
            : !!(e = Cr[e]) && !!t[e];
        }
        function Pr() {
          return kr;
        }
        var Sr = a({}, pr, {
            key: function (e) {
              if (e.key) {
                var t = Er[e.key] || e.key;
                if ("Unidentified" !== t) return t;
              }
              return "keypress" === e.type
                ? 13 === (e = nr(e))
                  ? "Enter"
                  : String.fromCharCode(e)
                : "keydown" === e.type || "keyup" === e.type
                ? _r[e.keyCode] || "Unidentified"
                : "";
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: Pr,
            charCode: function (e) {
              return "keypress" === e.type ? nr(e) : 0;
            },
            keyCode: function (e) {
              return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
            },
            which: function (e) {
              return "keypress" === e.type
                ? nr(e)
                : "keydown" === e.type || "keyup" === e.type
                ? e.keyCode
                : 0;
            },
          }),
          qr = ir(Sr),
          Rr = ir(
            a({}, mr, {
              pointerId: 0,
              width: 0,
              height: 0,
              pressure: 0,
              tangentialPressure: 0,
              tiltX: 0,
              tiltY: 0,
              twist: 0,
              pointerType: 0,
              isPrimary: 0,
            })
          ),
          Tr = ir(
            a({}, pr, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: Pr,
            })
          ),
          Or = ir(
            a({}, cr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          Mr = a({}, mr, {
            deltaX: function (e) {
              return "deltaX" in e
                ? e.deltaX
                : "wheelDeltaX" in e
                ? -e.wheelDeltaX
                : 0;
            },
            deltaY: function (e) {
              return "deltaY" in e
                ? e.deltaY
                : "wheelDeltaY" in e
                ? -e.wheelDeltaY
                : "wheelDelta" in e
                ? -e.wheelDelta
                : 0;
            },
            deltaZ: 0,
            deltaMode: 0,
          }),
          Nr = ir(Mr),
          Ir = [9, 13, 27, 32],
          Lr = d && "CompositionEvent" in window,
          Ar = null;
        d && "documentMode" in document && (Ar = document.documentMode);
        var Fr = d && "TextEvent" in window && !Ar,
          jr = d && (!Lr || (Ar && 8 < Ar && 11 >= Ar)),
          Dr = String.fromCharCode(32),
          Ur = !1;
        function Br(e, t) {
          switch (e) {
            case "keyup":
              return -1 !== Ir.indexOf(t.keyCode);
            case "keydown":
              return 229 !== t.keyCode;
            case "keypress":
            case "mousedown":
            case "focusout":
              return !0;
            default:
              return !1;
          }
        }
        function zr(e) {
          return "object" == typeof (e = e.detail) && "data" in e
            ? e.data
            : null;
        }
        var Hr = !1,
          Vr = {
            color: !0,
            date: !0,
            datetime: !0,
            "datetime-local": !0,
            email: !0,
            month: !0,
            number: !0,
            password: !0,
            range: !0,
            search: !0,
            tel: !0,
            text: !0,
            time: !0,
            url: !0,
            week: !0,
          };
        function $r(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return "input" === t ? !!Vr[e.type] : "textarea" === t;
        }
        function Wr(e, t, r, n) {
          Te(n),
            0 < (t = An(t, "onChange")).length &&
              ((r = new dr("onChange", "change", null, r, n)),
              e.push({ event: r, listeners: t }));
        }
        var Yr = null,
          Gr = null;
        function Qr(e) {
          qn(e, 0);
        }
        function Kr(e) {
          if (X(na(e))) return e;
        }
        function Xr(e, t) {
          if ("change" === e) return t;
        }
        var Jr = !1;
        if (d) {
          var Zr;
          if (d) {
            var en = "oninput" in document;
            if (!en) {
              var tn = document.createElement("div");
              tn.setAttribute("oninput", "return;"),
                (en = "function" == typeof tn.oninput);
            }
            Zr = en;
          } else Zr = !1;
          Jr = Zr && (!document.documentMode || 9 < document.documentMode);
        }
        function rn() {
          Yr && (Yr.detachEvent("onpropertychange", nn), (Gr = Yr = null));
        }
        function nn(e) {
          if ("value" === e.propertyName && Kr(Gr)) {
            var t = [];
            if ((Wr(t, Gr, e, ke(e)), (e = Qr), Ae)) e(t);
            else {
              Ae = !0;
              try {
                Me(e, t);
              } finally {
                (Ae = !1), je();
              }
            }
          }
        }
        function an(e, t, r) {
          "focusin" === e
            ? (rn(), (Gr = r), (Yr = t).attachEvent("onpropertychange", nn))
            : "focusout" === e && rn();
        }
        function on(e) {
          if ("selectionchange" === e || "keyup" === e || "keydown" === e)
            return Kr(Gr);
        }
        function ln(e, t) {
          if ("click" === e) return Kr(t);
        }
        function un(e, t) {
          if ("input" === e || "change" === e) return Kr(t);
        }
        var sn =
            "function" == typeof Object.is
              ? Object.is
              : function (e, t) {
                  return (
                    (e === t && (0 !== e || 1 / e == 1 / t)) ||
                    (e != e && t != t)
                  );
                },
          cn = Object.prototype.hasOwnProperty;
        function dn(e, t) {
          if (sn(e, t)) return !0;
          if (
            "object" != typeof e ||
            null === e ||
            "object" != typeof t ||
            null === t
          )
            return !1;
          var r = Object.keys(e),
            n = Object.keys(t);
          if (r.length !== n.length) return !1;
          for (n = 0; n < r.length; n++)
            if (!cn.call(t, r[n]) || !sn(e[r[n]], t[r[n]])) return !1;
          return !0;
        }
        function pn(e) {
          for (; e && e.firstChild; ) e = e.firstChild;
          return e;
        }
        function fn(e, t) {
          var r,
            n = pn(e);
          for (e = 0; n; ) {
            if (3 === n.nodeType) {
              if (((r = e + n.textContent.length), e <= t && r >= t))
                return { node: n, offset: t - e };
              e = r;
            }
            e: {
              for (; n; ) {
                if (n.nextSibling) {
                  n = n.nextSibling;
                  break e;
                }
                n = n.parentNode;
              }
              n = void 0;
            }
            n = pn(n);
          }
        }
        function mn(e, t) {
          return (
            !(!e || !t) &&
            (e === t ||
              ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                  ? mn(e, t.parentNode)
                  : "contains" in e
                  ? e.contains(t)
                  : !!e.compareDocumentPosition &&
                    !!(16 & e.compareDocumentPosition(t)))))
          );
        }
        function hn() {
          for (var e = window, t = J(); t instanceof e.HTMLIFrameElement; ) {
            try {
              var r = "string" == typeof t.contentWindow.location.href;
            } catch (e) {
              r = !1;
            }
            if (!r) break;
            t = J((e = t.contentWindow).document);
          }
          return t;
        }
        function vn(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return (
            t &&
            (("input" === t &&
              ("text" === e.type ||
                "search" === e.type ||
                "tel" === e.type ||
                "url" === e.type ||
                "password" === e.type)) ||
              "textarea" === t ||
              "true" === e.contentEditable)
          );
        }
        var bn = d && "documentMode" in document && 11 >= document.documentMode,
          yn = null,
          gn = null,
          wn = null,
          xn = !1;
        function En(e, t, r) {
          var n =
            r.window === r
              ? r.document
              : 9 === r.nodeType
              ? r
              : r.ownerDocument;
          xn ||
            null == yn ||
            yn !== J(n) ||
            ((n =
              "selectionStart" in (n = yn) && vn(n)
                ? { start: n.selectionStart, end: n.selectionEnd }
                : {
                    anchorNode: (n = (
                      (n.ownerDocument && n.ownerDocument.defaultView) ||
                      window
                    ).getSelection()).anchorNode,
                    anchorOffset: n.anchorOffset,
                    focusNode: n.focusNode,
                    focusOffset: n.focusOffset,
                  }),
            (wn && dn(wn, n)) ||
              ((wn = n),
              0 < (n = An(gn, "onSelect")).length &&
                ((t = new dr("onSelect", "select", null, t, r)),
                e.push({ event: t, listeners: n }),
                (t.target = yn))));
        }
        It(
          "cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(
            " "
          ),
          0
        ),
          It(
            "drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(
              " "
            ),
            1
          ),
          It(Nt, 2);
        for (
          var _n =
              "change selectionchange textInput compositionstart compositionend compositionupdate".split(
                " "
              ),
            Cn = 0;
          Cn < _n.length;
          Cn++
        )
          Mt.set(_n[Cn], 0);
        c("onMouseEnter", ["mouseout", "mouseover"]),
          c("onMouseLeave", ["mouseout", "mouseover"]),
          c("onPointerEnter", ["pointerout", "pointerover"]),
          c("onPointerLeave", ["pointerout", "pointerover"]),
          s(
            "onChange",
            "change click focusin focusout input keydown keyup selectionchange".split(
              " "
            )
          ),
          s(
            "onSelect",
            "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
              " "
            )
          ),
          s("onBeforeInput", [
            "compositionend",
            "keypress",
            "textInput",
            "paste",
          ]),
          s(
            "onCompositionEnd",
            "compositionend focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          s(
            "onCompositionStart",
            "compositionstart focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          s(
            "onCompositionUpdate",
            "compositionupdate focusout keydown keypress keyup mousedown".split(
              " "
            )
          );
        var kn =
            "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(
              " "
            ),
          Pn = new Set(
            "cancel close invalid load scroll toggle".split(" ").concat(kn)
          );
        function Sn(e, t, r) {
          var n = e.type || "unknown-event";
          (e.currentTarget = r),
            (function (e, t, r, n, a, o, l, u, s) {
              if ((Ge.apply(this, arguments), He)) {
                if (!He) throw Error(i(198));
                var c = Ve;
                (He = !1), (Ve = null), $e || (($e = !0), (We = c));
              }
            })(n, t, void 0, e),
            (e.currentTarget = null);
        }
        function qn(e, t) {
          t = 0 != (4 & t);
          for (var r = 0; r < e.length; r++) {
            var n = e[r],
              a = n.event;
            n = n.listeners;
            e: {
              var o = void 0;
              if (t)
                for (var i = n.length - 1; 0 <= i; i--) {
                  var l = n[i],
                    u = l.instance,
                    s = l.currentTarget;
                  if (((l = l.listener), u !== o && a.isPropagationStopped()))
                    break e;
                  Sn(a, l, s), (o = u);
                }
              else
                for (i = 0; i < n.length; i++) {
                  if (
                    ((u = (l = n[i]).instance),
                    (s = l.currentTarget),
                    (l = l.listener),
                    u !== o && a.isPropagationStopped())
                  )
                    break e;
                  Sn(a, l, s), (o = u);
                }
            }
          }
          if ($e) throw ((e = We), ($e = !1), (We = null), e);
        }
        function Rn(e, t) {
          var r = oa(t),
            n = e + "__bubble";
          r.has(n) || (Nn(t, e, 2, !1), r.add(n));
        }
        var Tn = "_reactListening" + Math.random().toString(36).slice(2);
        function On(e) {
          e[Tn] ||
            ((e[Tn] = !0),
            l.forEach(function (t) {
              Pn.has(t) || Mn(t, !1, e, null), Mn(t, !0, e, null);
            }));
        }
        function Mn(e, t, r, n) {
          var a =
              4 < arguments.length && void 0 !== arguments[4]
                ? arguments[4]
                : 0,
            o = r;
          if (
            ("selectionchange" === e &&
              9 !== r.nodeType &&
              (o = r.ownerDocument),
            null !== n && !t && Pn.has(e))
          ) {
            if ("scroll" !== e) return;
            (a |= 2), (o = n);
          }
          var i = oa(o),
            l = e + "__" + (t ? "capture" : "bubble");
          i.has(l) || (t && (a |= 4), Nn(o, e, a, t), i.add(l));
        }
        function Nn(e, t, r, n) {
          var a = Mt.get(t);
          switch (void 0 === a ? 2 : a) {
            case 0:
              a = Qt;
              break;
            case 1:
              a = Kt;
              break;
            default:
              a = Xt;
          }
          (r = a.bind(null, t, r, e)),
            (a = void 0),
            !Ue ||
              ("touchstart" !== t && "touchmove" !== t && "wheel" !== t) ||
              (a = !0),
            n
              ? void 0 !== a
                ? e.addEventListener(t, r, { capture: !0, passive: a })
                : e.addEventListener(t, r, !0)
              : void 0 !== a
              ? e.addEventListener(t, r, { passive: a })
              : e.addEventListener(t, r, !1);
        }
        function In(e, t, r, n, a) {
          var o = n;
          if (0 == (1 & t) && 0 == (2 & t) && null !== n)
            e: for (;;) {
              if (null === n) return;
              var i = n.tag;
              if (3 === i || 4 === i) {
                var l = n.stateNode.containerInfo;
                if (l === a || (8 === l.nodeType && l.parentNode === a)) break;
                if (4 === i)
                  for (i = n.return; null !== i; ) {
                    var u = i.tag;
                    if (
                      (3 === u || 4 === u) &&
                      ((u = i.stateNode.containerInfo) === a ||
                        (8 === u.nodeType && u.parentNode === a))
                    )
                      return;
                    i = i.return;
                  }
                for (; null !== l; ) {
                  if (null === (i = ta(l))) return;
                  if (5 === (u = i.tag) || 6 === u) {
                    n = o = i;
                    continue e;
                  }
                  l = l.parentNode;
                }
              }
              n = n.return;
            }
          !(function (e, t, r) {
            if (Fe) return e();
            Fe = !0;
            try {
              Le(e, t, r);
            } finally {
              (Fe = !1), je();
            }
          })(function () {
            var n = o,
              a = ke(r),
              i = [];
            e: {
              var l = Ot.get(e);
              if (void 0 !== l) {
                var u = dr,
                  s = e;
                switch (e) {
                  case "keypress":
                    if (0 === nr(r)) break e;
                  case "keydown":
                  case "keyup":
                    u = qr;
                    break;
                  case "focusin":
                    (s = "focus"), (u = br);
                    break;
                  case "focusout":
                    (s = "blur"), (u = br);
                    break;
                  case "beforeblur":
                  case "afterblur":
                    u = br;
                    break;
                  case "click":
                    if (2 === r.button) break e;
                  case "auxclick":
                  case "dblclick":
                  case "mousedown":
                  case "mousemove":
                  case "mouseup":
                  case "mouseout":
                  case "mouseover":
                  case "contextmenu":
                    u = hr;
                    break;
                  case "drag":
                  case "dragend":
                  case "dragenter":
                  case "dragexit":
                  case "dragleave":
                  case "dragover":
                  case "dragstart":
                  case "drop":
                    u = vr;
                    break;
                  case "touchcancel":
                  case "touchend":
                  case "touchmove":
                  case "touchstart":
                    u = Tr;
                    break;
                  case St:
                  case qt:
                  case Rt:
                    u = yr;
                    break;
                  case Tt:
                    u = Or;
                    break;
                  case "scroll":
                    u = fr;
                    break;
                  case "wheel":
                    u = Nr;
                    break;
                  case "copy":
                  case "cut":
                  case "paste":
                    u = wr;
                    break;
                  case "gotpointercapture":
                  case "lostpointercapture":
                  case "pointercancel":
                  case "pointerdown":
                  case "pointermove":
                  case "pointerout":
                  case "pointerover":
                  case "pointerup":
                    u = Rr;
                }
                var c = 0 != (4 & t),
                  d = !c && "scroll" === e,
                  p = c ? (null !== l ? l + "Capture" : null) : l;
                c = [];
                for (var f, m = n; null !== m; ) {
                  var h = (f = m).stateNode;
                  if (
                    (5 === f.tag &&
                      null !== h &&
                      ((f = h),
                      null !== p &&
                        null != (h = De(m, p)) &&
                        c.push(Ln(m, h, f))),
                    d)
                  )
                    break;
                  m = m.return;
                }
                0 < c.length &&
                  ((l = new u(l, s, null, r, a)),
                  i.push({ event: l, listeners: c }));
              }
            }
            if (0 == (7 & t)) {
              if (
                ((u = "mouseout" === e || "pointerout" === e),
                (!(l = "mouseover" === e || "pointerover" === e) ||
                  0 != (16 & t) ||
                  !(s = r.relatedTarget || r.fromElement) ||
                  (!ta(s) && !s[Zn])) &&
                  (u || l) &&
                  ((l =
                    a.window === a
                      ? a
                      : (l = a.ownerDocument)
                      ? l.defaultView || l.parentWindow
                      : window),
                  u
                    ? ((u = n),
                      null !==
                        (s = (s = r.relatedTarget || r.toElement)
                          ? ta(s)
                          : null) &&
                        (s !== (d = Qe(s)) || (5 !== s.tag && 6 !== s.tag)) &&
                        (s = null))
                    : ((u = null), (s = n)),
                  u !== s))
              ) {
                if (
                  ((c = hr),
                  (h = "onMouseLeave"),
                  (p = "onMouseEnter"),
                  (m = "mouse"),
                  ("pointerout" !== e && "pointerover" !== e) ||
                    ((c = Rr),
                    (h = "onPointerLeave"),
                    (p = "onPointerEnter"),
                    (m = "pointer")),
                  (d = null == u ? l : na(u)),
                  (f = null == s ? l : na(s)),
                  ((l = new c(h, m + "leave", u, r, a)).target = d),
                  (l.relatedTarget = f),
                  (h = null),
                  ta(a) === n &&
                    (((c = new c(p, m + "enter", s, r, a)).target = f),
                    (c.relatedTarget = d),
                    (h = c)),
                  (d = h),
                  u && s)
                )
                  e: {
                    for (p = s, m = 0, f = c = u; f; f = Fn(f)) m++;
                    for (f = 0, h = p; h; h = Fn(h)) f++;
                    for (; 0 < m - f; ) (c = Fn(c)), m--;
                    for (; 0 < f - m; ) (p = Fn(p)), f--;
                    for (; m--; ) {
                      if (c === p || (null !== p && c === p.alternate)) break e;
                      (c = Fn(c)), (p = Fn(p));
                    }
                    c = null;
                  }
                else c = null;
                null !== u && jn(i, l, u, c, !1),
                  null !== s && null !== d && jn(i, d, s, c, !0);
              }
              if (
                "select" ===
                  (u =
                    (l = n ? na(n) : window).nodeName &&
                    l.nodeName.toLowerCase()) ||
                ("input" === u && "file" === l.type)
              )
                var v = Xr;
              else if ($r(l))
                if (Jr) v = un;
                else {
                  v = on;
                  var b = an;
                }
              else
                (u = l.nodeName) &&
                  "input" === u.toLowerCase() &&
                  ("checkbox" === l.type || "radio" === l.type) &&
                  (v = ln);
              switch (
                (v && (v = v(e, n))
                  ? Wr(i, v, r, a)
                  : (b && b(e, l, n),
                    "focusout" === e &&
                      (b = l._wrapperState) &&
                      b.controlled &&
                      "number" === l.type &&
                      ae(l, "number", l.value)),
                (b = n ? na(n) : window),
                e)
              ) {
                case "focusin":
                  ($r(b) || "true" === b.contentEditable) &&
                    ((yn = b), (gn = n), (wn = null));
                  break;
                case "focusout":
                  wn = gn = yn = null;
                  break;
                case "mousedown":
                  xn = !0;
                  break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                  (xn = !1), En(i, r, a);
                  break;
                case "selectionchange":
                  if (bn) break;
                case "keydown":
                case "keyup":
                  En(i, r, a);
              }
              var y;
              if (Lr)
                e: {
                  switch (e) {
                    case "compositionstart":
                      var g = "onCompositionStart";
                      break e;
                    case "compositionend":
                      g = "onCompositionEnd";
                      break e;
                    case "compositionupdate":
                      g = "onCompositionUpdate";
                      break e;
                  }
                  g = void 0;
                }
              else
                Hr
                  ? Br(e, r) && (g = "onCompositionEnd")
                  : "keydown" === e &&
                    229 === r.keyCode &&
                    (g = "onCompositionStart");
              g &&
                (jr &&
                  "ko" !== r.locale &&
                  (Hr || "onCompositionStart" !== g
                    ? "onCompositionEnd" === g && Hr && (y = rr())
                    : ((er = "value" in (Zt = a) ? Zt.value : Zt.textContent),
                      (Hr = !0))),
                0 < (b = An(n, g)).length &&
                  ((g = new xr(g, e, null, r, a)),
                  i.push({ event: g, listeners: b }),
                  (y || null !== (y = zr(r))) && (g.data = y))),
                (y = Fr
                  ? (function (e, t) {
                      switch (e) {
                        case "compositionend":
                          return zr(t);
                        case "keypress":
                          return 32 !== t.which ? null : ((Ur = !0), Dr);
                        case "textInput":
                          return (e = t.data) === Dr && Ur ? null : e;
                        default:
                          return null;
                      }
                    })(e, r)
                  : (function (e, t) {
                      if (Hr)
                        return "compositionend" === e || (!Lr && Br(e, t))
                          ? ((e = rr()), (tr = er = Zt = null), (Hr = !1), e)
                          : null;
                      switch (e) {
                        case "paste":
                        default:
                          return null;
                        case "keypress":
                          if (
                            !(t.ctrlKey || t.altKey || t.metaKey) ||
                            (t.ctrlKey && t.altKey)
                          ) {
                            if (t.char && 1 < t.char.length) return t.char;
                            if (t.which) return String.fromCharCode(t.which);
                          }
                          return null;
                        case "compositionend":
                          return jr && "ko" !== t.locale ? null : t.data;
                      }
                    })(e, r)) &&
                  0 < (n = An(n, "onBeforeInput")).length &&
                  ((a = new xr("onBeforeInput", "beforeinput", null, r, a)),
                  i.push({ event: a, listeners: n }),
                  (a.data = y));
            }
            qn(i, t);
          });
        }
        function Ln(e, t, r) {
          return { instance: e, listener: t, currentTarget: r };
        }
        function An(e, t) {
          for (var r = t + "Capture", n = []; null !== e; ) {
            var a = e,
              o = a.stateNode;
            5 === a.tag &&
              null !== o &&
              ((a = o),
              null != (o = De(e, r)) && n.unshift(Ln(e, o, a)),
              null != (o = De(e, t)) && n.push(Ln(e, o, a))),
              (e = e.return);
          }
          return n;
        }
        function Fn(e) {
          if (null === e) return null;
          do {
            e = e.return;
          } while (e && 5 !== e.tag);
          return e || null;
        }
        function jn(e, t, r, n, a) {
          for (var o = t._reactName, i = []; null !== r && r !== n; ) {
            var l = r,
              u = l.alternate,
              s = l.stateNode;
            if (null !== u && u === n) break;
            5 === l.tag &&
              null !== s &&
              ((l = s),
              a
                ? null != (u = De(r, o)) && i.unshift(Ln(r, u, l))
                : a || (null != (u = De(r, o)) && i.push(Ln(r, u, l)))),
              (r = r.return);
          }
          0 !== i.length && e.push({ event: t, listeners: i });
        }
        function Dn() {}
        var Un = null,
          Bn = null;
        function zn(e, t) {
          switch (e) {
            case "button":
            case "input":
            case "select":
            case "textarea":
              return !!t.autoFocus;
          }
          return !1;
        }
        function Hn(e, t) {
          return (
            "textarea" === e ||
            "option" === e ||
            "noscript" === e ||
            "string" == typeof t.children ||
            "number" == typeof t.children ||
            ("object" == typeof t.dangerouslySetInnerHTML &&
              null !== t.dangerouslySetInnerHTML &&
              null != t.dangerouslySetInnerHTML.__html)
          );
        }
        var Vn = "function" == typeof setTimeout ? setTimeout : void 0,
          $n = "function" == typeof clearTimeout ? clearTimeout : void 0;
        function Wn(e) {
          (1 === e.nodeType || (9 === e.nodeType && null != (e = e.body))) &&
            (e.textContent = "");
        }
        function Yn(e) {
          for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t) break;
          }
          return e;
        }
        function Gn(e) {
          e = e.previousSibling;
          for (var t = 0; e; ) {
            if (8 === e.nodeType) {
              var r = e.data;
              if ("$" === r || "$!" === r || "$?" === r) {
                if (0 === t) return e;
                t--;
              } else "/$" === r && t++;
            }
            e = e.previousSibling;
          }
          return null;
        }
        var Qn = 0,
          Kn = Math.random().toString(36).slice(2),
          Xn = "__reactFiber$" + Kn,
          Jn = "__reactProps$" + Kn,
          Zn = "__reactContainer$" + Kn,
          ea = "__reactEvents$" + Kn;
        function ta(e) {
          var t = e[Xn];
          if (t) return t;
          for (var r = e.parentNode; r; ) {
            if ((t = r[Zn] || r[Xn])) {
              if (
                ((r = t.alternate),
                null !== t.child || (null !== r && null !== r.child))
              )
                for (e = Gn(e); null !== e; ) {
                  if ((r = e[Xn])) return r;
                  e = Gn(e);
                }
              return t;
            }
            r = (e = r).parentNode;
          }
          return null;
        }
        function ra(e) {
          return !(e = e[Xn] || e[Zn]) ||
            (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
            ? null
            : e;
        }
        function na(e) {
          if (5 === e.tag || 6 === e.tag) return e.stateNode;
          throw Error(i(33));
        }
        function aa(e) {
          return e[Jn] || null;
        }
        function oa(e) {
          var t = e[ea];
          return void 0 === t && (t = e[ea] = new Set()), t;
        }
        var ia = [],
          la = -1;
        function ua(e) {
          return { current: e };
        }
        function sa(e) {
          0 > la || ((e.current = ia[la]), (ia[la] = null), la--);
        }
        function ca(e, t) {
          la++, (ia[la] = e.current), (e.current = t);
        }
        var da = {},
          pa = ua(da),
          fa = ua(!1),
          ma = da;
        function ha(e, t) {
          var r = e.type.contextTypes;
          if (!r) return da;
          var n = e.stateNode;
          if (n && n.__reactInternalMemoizedUnmaskedChildContext === t)
            return n.__reactInternalMemoizedMaskedChildContext;
          var a,
            o = {};
          for (a in r) o[a] = t[a];
          return (
            n &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                t),
              (e.__reactInternalMemoizedMaskedChildContext = o)),
            o
          );
        }
        function va(e) {
          return null != e.childContextTypes;
        }
        function ba() {
          sa(fa), sa(pa);
        }
        function ya(e, t, r) {
          if (pa.current !== da) throw Error(i(168));
          ca(pa, t), ca(fa, r);
        }
        function ga(e, t, r) {
          var n = e.stateNode;
          if (
            ((e = t.childContextTypes), "function" != typeof n.getChildContext)
          )
            return r;
          for (var o in (n = n.getChildContext()))
            if (!(o in e)) throw Error(i(108, Y(t) || "Unknown", o));
          return a({}, r, n);
        }
        function wa(e) {
          return (
            (e =
              ((e = e.stateNode) &&
                e.__reactInternalMemoizedMergedChildContext) ||
              da),
            (ma = pa.current),
            ca(pa, e),
            ca(fa, fa.current),
            !0
          );
        }
        function xa(e, t, r) {
          var n = e.stateNode;
          if (!n) throw Error(i(169));
          r
            ? ((e = ga(e, t, ma)),
              (n.__reactInternalMemoizedMergedChildContext = e),
              sa(fa),
              sa(pa),
              ca(pa, e))
            : sa(fa),
            ca(fa, r);
        }
        var Ea = null,
          _a = null,
          Ca = o.unstable_runWithPriority,
          ka = o.unstable_scheduleCallback,
          Pa = o.unstable_cancelCallback,
          Sa = o.unstable_shouldYield,
          qa = o.unstable_requestPaint,
          Ra = o.unstable_now,
          Ta = o.unstable_getCurrentPriorityLevel,
          Oa = o.unstable_ImmediatePriority,
          Ma = o.unstable_UserBlockingPriority,
          Na = o.unstable_NormalPriority,
          Ia = o.unstable_LowPriority,
          La = o.unstable_IdlePriority,
          Aa = {},
          Fa = void 0 !== qa ? qa : function () {},
          ja = null,
          Da = null,
          Ua = !1,
          Ba = Ra(),
          za =
            1e4 > Ba
              ? Ra
              : function () {
                  return Ra() - Ba;
                };
        function Ha() {
          switch (Ta()) {
            case Oa:
              return 99;
            case Ma:
              return 98;
            case Na:
              return 97;
            case Ia:
              return 96;
            case La:
              return 95;
            default:
              throw Error(i(332));
          }
        }
        function Va(e) {
          switch (e) {
            case 99:
              return Oa;
            case 98:
              return Ma;
            case 97:
              return Na;
            case 96:
              return Ia;
            case 95:
              return La;
            default:
              throw Error(i(332));
          }
        }
        function $a(e, t) {
          return (e = Va(e)), Ca(e, t);
        }
        function Wa(e, t, r) {
          return (e = Va(e)), ka(e, t, r);
        }
        function Ya() {
          if (null !== Da) {
            var e = Da;
            (Da = null), Pa(e);
          }
          Ga();
        }
        function Ga() {
          if (!Ua && null !== ja) {
            Ua = !0;
            var e = 0;
            try {
              var t = ja;
              $a(99, function () {
                for (; e < t.length; e++) {
                  var r = t[e];
                  do {
                    r = r(!0);
                  } while (null !== r);
                }
              }),
                (ja = null);
            } catch (t) {
              throw (null !== ja && (ja = ja.slice(e + 1)), ka(Oa, Ya), t);
            } finally {
              Ua = !1;
            }
          }
        }
        var Qa = x.ReactCurrentBatchConfig;
        function Ka(e, t) {
          if (e && e.defaultProps) {
            for (var r in ((t = a({}, t)), (e = e.defaultProps)))
              void 0 === t[r] && (t[r] = e[r]);
            return t;
          }
          return t;
        }
        var Xa = ua(null),
          Ja = null,
          Za = null,
          eo = null;
        function to() {
          eo = Za = Ja = null;
        }
        function ro(e) {
          var t = Xa.current;
          sa(Xa), (e.type._context._currentValue = t);
        }
        function no(e, t) {
          for (; null !== e; ) {
            var r = e.alternate;
            if ((e.childLanes & t) === t) {
              if (null === r || (r.childLanes & t) === t) break;
              r.childLanes |= t;
            } else (e.childLanes |= t), null !== r && (r.childLanes |= t);
            e = e.return;
          }
        }
        function ao(e, t) {
          (Ja = e),
            (eo = Za = null),
            null !== (e = e.dependencies) &&
              null !== e.firstContext &&
              (0 != (e.lanes & t) && (Ai = !0), (e.firstContext = null));
        }
        function oo(e, t) {
          if (eo !== e && !1 !== t && 0 !== t)
            if (
              (("number" == typeof t && 1073741823 !== t) ||
                ((eo = e), (t = 1073741823)),
              (t = { context: e, observedBits: t, next: null }),
              null === Za)
            ) {
              if (null === Ja) throw Error(i(308));
              (Za = t),
                (Ja.dependencies = {
                  lanes: 0,
                  firstContext: t,
                  responders: null,
                });
            } else Za = Za.next = t;
          return e._currentValue;
        }
        var io = !1;
        function lo(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null },
            effects: null,
          };
        }
        function uo(e, t) {
          (e = e.updateQueue),
            t.updateQueue === e &&
              (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
              });
        }
        function so(e, t) {
          return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null,
          };
        }
        function co(e, t) {
          if (null !== (e = e.updateQueue)) {
            var r = (e = e.shared).pending;
            null === r ? (t.next = t) : ((t.next = r.next), (r.next = t)),
              (e.pending = t);
          }
        }
        function po(e, t) {
          var r = e.updateQueue,
            n = e.alternate;
          if (null !== n && r === (n = n.updateQueue)) {
            var a = null,
              o = null;
            if (null !== (r = r.firstBaseUpdate)) {
              do {
                var i = {
                  eventTime: r.eventTime,
                  lane: r.lane,
                  tag: r.tag,
                  payload: r.payload,
                  callback: r.callback,
                  next: null,
                };
                null === o ? (a = o = i) : (o = o.next = i), (r = r.next);
              } while (null !== r);
              null === o ? (a = o = t) : (o = o.next = t);
            } else a = o = t;
            return (
              (r = {
                baseState: n.baseState,
                firstBaseUpdate: a,
                lastBaseUpdate: o,
                shared: n.shared,
                effects: n.effects,
              }),
              void (e.updateQueue = r)
            );
          }
          null === (e = r.lastBaseUpdate)
            ? (r.firstBaseUpdate = t)
            : (e.next = t),
            (r.lastBaseUpdate = t);
        }
        function fo(e, t, r, n) {
          var o = e.updateQueue;
          io = !1;
          var i = o.firstBaseUpdate,
            l = o.lastBaseUpdate,
            u = o.shared.pending;
          if (null !== u) {
            o.shared.pending = null;
            var s = u,
              c = s.next;
            (s.next = null), null === l ? (i = c) : (l.next = c), (l = s);
            var d = e.alternate;
            if (null !== d) {
              var p = (d = d.updateQueue).lastBaseUpdate;
              p !== l &&
                (null === p ? (d.firstBaseUpdate = c) : (p.next = c),
                (d.lastBaseUpdate = s));
            }
          }
          if (null !== i) {
            for (p = o.baseState, l = 0, d = c = s = null; ; ) {
              u = i.lane;
              var f = i.eventTime;
              if ((n & u) === u) {
                null !== d &&
                  (d = d.next =
                    {
                      eventTime: f,
                      lane: 0,
                      tag: i.tag,
                      payload: i.payload,
                      callback: i.callback,
                      next: null,
                    });
                e: {
                  var m = e,
                    h = i;
                  switch (((u = t), (f = r), h.tag)) {
                    case 1:
                      if ("function" == typeof (m = h.payload)) {
                        p = m.call(f, p, u);
                        break e;
                      }
                      p = m;
                      break e;
                    case 3:
                      m.flags = (-4097 & m.flags) | 64;
                    case 0:
                      if (
                        null ==
                        (u =
                          "function" == typeof (m = h.payload)
                            ? m.call(f, p, u)
                            : m)
                      )
                        break e;
                      p = a({}, p, u);
                      break e;
                    case 2:
                      io = !0;
                  }
                }
                null !== i.callback &&
                  ((e.flags |= 32),
                  null === (u = o.effects) ? (o.effects = [i]) : u.push(i));
              } else
                (f = {
                  eventTime: f,
                  lane: u,
                  tag: i.tag,
                  payload: i.payload,
                  callback: i.callback,
                  next: null,
                }),
                  null === d ? ((c = d = f), (s = p)) : (d = d.next = f),
                  (l |= u);
              if (null === (i = i.next)) {
                if (null === (u = o.shared.pending)) break;
                (i = u.next),
                  (u.next = null),
                  (o.lastBaseUpdate = u),
                  (o.shared.pending = null);
              }
            }
            null === d && (s = p),
              (o.baseState = s),
              (o.firstBaseUpdate = c),
              (o.lastBaseUpdate = d),
              (jl |= l),
              (e.lanes = l),
              (e.memoizedState = p);
          }
        }
        function mo(e, t, r) {
          if (((e = t.effects), (t.effects = null), null !== e))
            for (t = 0; t < e.length; t++) {
              var n = e[t],
                a = n.callback;
              if (null !== a) {
                if (((n.callback = null), (n = r), "function" != typeof a))
                  throw Error(i(191, a));
                a.call(n);
              }
            }
        }
        var ho = new n.Component().refs;
        function vo(e, t, r, n) {
          (r = null == (r = r(n, (t = e.memoizedState))) ? t : a({}, t, r)),
            (e.memoizedState = r),
            0 === e.lanes && (e.updateQueue.baseState = r);
        }
        var bo = {
          isMounted: function (e) {
            return !!(e = e._reactInternals) && Qe(e) === e;
          },
          enqueueSetState: function (e, t, r) {
            e = e._reactInternals;
            var n = su(),
              a = cu(e),
              o = so(n, a);
            (o.payload = t),
              null != r && (o.callback = r),
              co(e, o),
              du(e, a, n);
          },
          enqueueReplaceState: function (e, t, r) {
            e = e._reactInternals;
            var n = su(),
              a = cu(e),
              o = so(n, a);
            (o.tag = 1),
              (o.payload = t),
              null != r && (o.callback = r),
              co(e, o),
              du(e, a, n);
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var r = su(),
              n = cu(e),
              a = so(r, n);
            (a.tag = 2), null != t && (a.callback = t), co(e, a), du(e, n, r);
          },
        };
        function yo(e, t, r, n, a, o, i) {
          return "function" == typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(n, o, i)
            : !(
                t.prototype &&
                t.prototype.isPureReactComponent &&
                dn(r, n) &&
                dn(a, o)
              );
        }
        function go(e, t, r) {
          var n = !1,
            a = da,
            o = t.contextType;
          return (
            "object" == typeof o && null !== o
              ? (o = oo(o))
              : ((a = va(t) ? ma : pa.current),
                (o = (n = null != (n = t.contextTypes)) ? ha(e, a) : da)),
            (t = new t(r, o)),
            (e.memoizedState =
              null !== t.state && void 0 !== t.state ? t.state : null),
            (t.updater = bo),
            (e.stateNode = t),
            (t._reactInternals = e),
            n &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                a),
              (e.__reactInternalMemoizedMaskedChildContext = o)),
            t
          );
        }
        function wo(e, t, r, n) {
          (e = t.state),
            "function" == typeof t.componentWillReceiveProps &&
              t.componentWillReceiveProps(r, n),
            "function" == typeof t.UNSAFE_componentWillReceiveProps &&
              t.UNSAFE_componentWillReceiveProps(r, n),
            t.state !== e && bo.enqueueReplaceState(t, t.state, null);
        }
        function xo(e, t, r, n) {
          var a = e.stateNode;
          (a.props = r), (a.state = e.memoizedState), (a.refs = ho), lo(e);
          var o = t.contextType;
          "object" == typeof o && null !== o
            ? (a.context = oo(o))
            : ((o = va(t) ? ma : pa.current), (a.context = ha(e, o))),
            fo(e, r, a, n),
            (a.state = e.memoizedState),
            "function" == typeof (o = t.getDerivedStateFromProps) &&
              (vo(e, t, o, r), (a.state = e.memoizedState)),
            "function" == typeof t.getDerivedStateFromProps ||
              "function" == typeof a.getSnapshotBeforeUpdate ||
              ("function" != typeof a.UNSAFE_componentWillMount &&
                "function" != typeof a.componentWillMount) ||
              ((t = a.state),
              "function" == typeof a.componentWillMount &&
                a.componentWillMount(),
              "function" == typeof a.UNSAFE_componentWillMount &&
                a.UNSAFE_componentWillMount(),
              t !== a.state && bo.enqueueReplaceState(a, a.state, null),
              fo(e, r, a, n),
              (a.state = e.memoizedState)),
            "function" == typeof a.componentDidMount && (e.flags |= 4);
        }
        var Eo = Array.isArray;
        function _o(e, t, r) {
          if (
            null !== (e = r.ref) &&
            "function" != typeof e &&
            "object" != typeof e
          ) {
            if (r._owner) {
              if ((r = r._owner)) {
                if (1 !== r.tag) throw Error(i(309));
                var n = r.stateNode;
              }
              if (!n) throw Error(i(147, e));
              var a = "" + e;
              return null !== t &&
                null !== t.ref &&
                "function" == typeof t.ref &&
                t.ref._stringRef === a
                ? t.ref
                : ((t = function (e) {
                    var t = n.refs;
                    t === ho && (t = n.refs = {}),
                      null === e ? delete t[a] : (t[a] = e);
                  }),
                  (t._stringRef = a),
                  t);
            }
            if ("string" != typeof e) throw Error(i(284));
            if (!r._owner) throw Error(i(290, e));
          }
          return e;
        }
        function Co(e, t) {
          if ("textarea" !== e.type)
            throw Error(
              i(
                31,
                "[object Object]" === Object.prototype.toString.call(t)
                  ? "object with keys {" + Object.keys(t).join(", ") + "}"
                  : t
              )
            );
        }
        function ko(e) {
          function t(t, r) {
            if (e) {
              var n = t.lastEffect;
              null !== n
                ? ((n.nextEffect = r), (t.lastEffect = r))
                : (t.firstEffect = t.lastEffect = r),
                (r.nextEffect = null),
                (r.flags = 8);
            }
          }
          function r(r, n) {
            if (!e) return null;
            for (; null !== n; ) t(r, n), (n = n.sibling);
            return null;
          }
          function n(e, t) {
            for (e = new Map(); null !== t; )
              null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
                (t = t.sibling);
            return e;
          }
          function a(e, t) {
            return ((e = Hu(e, t)).index = 0), (e.sibling = null), e;
          }
          function o(t, r, n) {
            return (
              (t.index = n),
              e
                ? null !== (n = t.alternate)
                  ? (n = n.index) < r
                    ? ((t.flags = 2), r)
                    : n
                  : ((t.flags = 2), r)
                : r
            );
          }
          function l(t) {
            return e && null === t.alternate && (t.flags = 2), t;
          }
          function u(e, t, r, n) {
            return null === t || 6 !== t.tag
              ? (((t = Yu(r, e.mode, n)).return = e), t)
              : (((t = a(t, r)).return = e), t);
          }
          function s(e, t, r, n) {
            return null !== t && t.elementType === r.type
              ? (((n = a(t, r.props)).ref = _o(e, t, r)), (n.return = e), n)
              : (((n = Vu(r.type, r.key, r.props, null, e.mode, n)).ref = _o(
                  e,
                  t,
                  r
                )),
                (n.return = e),
                n);
          }
          function c(e, t, r, n) {
            return null === t ||
              4 !== t.tag ||
              t.stateNode.containerInfo !== r.containerInfo ||
              t.stateNode.implementation !== r.implementation
              ? (((t = Gu(r, e.mode, n)).return = e), t)
              : (((t = a(t, r.children || [])).return = e), t);
          }
          function d(e, t, r, n, o) {
            return null === t || 7 !== t.tag
              ? (((t = $u(r, e.mode, n, o)).return = e), t)
              : (((t = a(t, r)).return = e), t);
          }
          function p(e, t, r) {
            if ("string" == typeof t || "number" == typeof t)
              return ((t = Yu("" + t, e.mode, r)).return = e), t;
            if ("object" == typeof t && null !== t) {
              switch (t.$$typeof) {
                case E:
                  return (
                    ((r = Vu(t.type, t.key, t.props, null, e.mode, r)).ref = _o(
                      e,
                      null,
                      t
                    )),
                    (r.return = e),
                    r
                  );
                case _:
                  return ((t = Gu(t, e.mode, r)).return = e), t;
              }
              if (Eo(t) || z(t))
                return ((t = $u(t, e.mode, r, null)).return = e), t;
              Co(e, t);
            }
            return null;
          }
          function f(e, t, r, n) {
            var a = null !== t ? t.key : null;
            if ("string" == typeof r || "number" == typeof r)
              return null !== a ? null : u(e, t, "" + r, n);
            if ("object" == typeof r && null !== r) {
              switch (r.$$typeof) {
                case E:
                  return r.key === a
                    ? r.type === C
                      ? d(e, t, r.props.children, n, a)
                      : s(e, t, r, n)
                    : null;
                case _:
                  return r.key === a ? c(e, t, r, n) : null;
              }
              if (Eo(r) || z(r)) return null !== a ? null : d(e, t, r, n, null);
              Co(e, r);
            }
            return null;
          }
          function m(e, t, r, n, a) {
            if ("string" == typeof n || "number" == typeof n)
              return u(t, (e = e.get(r) || null), "" + n, a);
            if ("object" == typeof n && null !== n) {
              switch (n.$$typeof) {
                case E:
                  return (
                    (e = e.get(null === n.key ? r : n.key) || null),
                    n.type === C
                      ? d(t, e, n.props.children, a, n.key)
                      : s(t, e, n, a)
                  );
                case _:
                  return c(
                    t,
                    (e = e.get(null === n.key ? r : n.key) || null),
                    n,
                    a
                  );
              }
              if (Eo(n) || z(n))
                return d(t, (e = e.get(r) || null), n, a, null);
              Co(t, n);
            }
            return null;
          }
          function h(a, i, l, u) {
            for (
              var s = null, c = null, d = i, h = (i = 0), v = null;
              null !== d && h < l.length;
              h++
            ) {
              d.index > h ? ((v = d), (d = null)) : (v = d.sibling);
              var b = f(a, d, l[h], u);
              if (null === b) {
                null === d && (d = v);
                break;
              }
              e && d && null === b.alternate && t(a, d),
                (i = o(b, i, h)),
                null === c ? (s = b) : (c.sibling = b),
                (c = b),
                (d = v);
            }
            if (h === l.length) return r(a, d), s;
            if (null === d) {
              for (; h < l.length; h++)
                null !== (d = p(a, l[h], u)) &&
                  ((i = o(d, i, h)),
                  null === c ? (s = d) : (c.sibling = d),
                  (c = d));
              return s;
            }
            for (d = n(a, d); h < l.length; h++)
              null !== (v = m(d, a, h, l[h], u)) &&
                (e &&
                  null !== v.alternate &&
                  d.delete(null === v.key ? h : v.key),
                (i = o(v, i, h)),
                null === c ? (s = v) : (c.sibling = v),
                (c = v));
            return (
              e &&
                d.forEach(function (e) {
                  return t(a, e);
                }),
              s
            );
          }
          function v(a, l, u, s) {
            var c = z(u);
            if ("function" != typeof c) throw Error(i(150));
            if (null == (u = c.call(u))) throw Error(i(151));
            for (
              var d = (c = null), h = l, v = (l = 0), b = null, y = u.next();
              null !== h && !y.done;
              v++, y = u.next()
            ) {
              h.index > v ? ((b = h), (h = null)) : (b = h.sibling);
              var g = f(a, h, y.value, s);
              if (null === g) {
                null === h && (h = b);
                break;
              }
              e && h && null === g.alternate && t(a, h),
                (l = o(g, l, v)),
                null === d ? (c = g) : (d.sibling = g),
                (d = g),
                (h = b);
            }
            if (y.done) return r(a, h), c;
            if (null === h) {
              for (; !y.done; v++, y = u.next())
                null !== (y = p(a, y.value, s)) &&
                  ((l = o(y, l, v)),
                  null === d ? (c = y) : (d.sibling = y),
                  (d = y));
              return c;
            }
            for (h = n(a, h); !y.done; v++, y = u.next())
              null !== (y = m(h, a, v, y.value, s)) &&
                (e &&
                  null !== y.alternate &&
                  h.delete(null === y.key ? v : y.key),
                (l = o(y, l, v)),
                null === d ? (c = y) : (d.sibling = y),
                (d = y));
            return (
              e &&
                h.forEach(function (e) {
                  return t(a, e);
                }),
              c
            );
          }
          return function (e, n, o, u) {
            var s =
              "object" == typeof o &&
              null !== o &&
              o.type === C &&
              null === o.key;
            s && (o = o.props.children);
            var c = "object" == typeof o && null !== o;
            if (c)
              switch (o.$$typeof) {
                case E:
                  e: {
                    for (c = o.key, s = n; null !== s; ) {
                      if (s.key === c) {
                        if (7 === s.tag) {
                          if (o.type === C) {
                            r(e, s.sibling),
                              ((n = a(s, o.props.children)).return = e),
                              (e = n);
                            break e;
                          }
                        } else if (s.elementType === o.type) {
                          r(e, s.sibling),
                            ((n = a(s, o.props)).ref = _o(e, s, o)),
                            (n.return = e),
                            (e = n);
                          break e;
                        }
                        r(e, s);
                        break;
                      }
                      t(e, s), (s = s.sibling);
                    }
                    o.type === C
                      ? (((n = $u(o.props.children, e.mode, u, o.key)).return =
                          e),
                        (e = n))
                      : (((u = Vu(
                          o.type,
                          o.key,
                          o.props,
                          null,
                          e.mode,
                          u
                        )).ref = _o(e, n, o)),
                        (u.return = e),
                        (e = u));
                  }
                  return l(e);
                case _:
                  e: {
                    for (s = o.key; null !== n; ) {
                      if (n.key === s) {
                        if (
                          4 === n.tag &&
                          n.stateNode.containerInfo === o.containerInfo &&
                          n.stateNode.implementation === o.implementation
                        ) {
                          r(e, n.sibling),
                            ((n = a(n, o.children || [])).return = e),
                            (e = n);
                          break e;
                        }
                        r(e, n);
                        break;
                      }
                      t(e, n), (n = n.sibling);
                    }
                    ((n = Gu(o, e.mode, u)).return = e), (e = n);
                  }
                  return l(e);
              }
            if ("string" == typeof o || "number" == typeof o)
              return (
                (o = "" + o),
                null !== n && 6 === n.tag
                  ? (r(e, n.sibling), ((n = a(n, o)).return = e), (e = n))
                  : (r(e, n), ((n = Yu(o, e.mode, u)).return = e), (e = n)),
                l(e)
              );
            if (Eo(o)) return h(e, n, o, u);
            if (z(o)) return v(e, n, o, u);
            if ((c && Co(e, o), void 0 === o && !s))
              switch (e.tag) {
                case 1:
                case 22:
                case 0:
                case 11:
                case 15:
                  throw Error(i(152, Y(e.type) || "Component"));
              }
            return r(e, n);
          };
        }
        var Po = ko(!0),
          So = ko(!1),
          qo = {},
          Ro = ua(qo),
          To = ua(qo),
          Oo = ua(qo);
        function Mo(e) {
          if (e === qo) throw Error(i(174));
          return e;
        }
        function No(e, t) {
          switch ((ca(Oo, t), ca(To, e), ca(Ro, qo), (e = t.nodeType))) {
            case 9:
            case 11:
              t = (t = t.documentElement) ? t.namespaceURI : fe(null, "");
              break;
            default:
              t = fe(
                (t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
                (e = e.tagName)
              );
          }
          sa(Ro), ca(Ro, t);
        }
        function Io() {
          sa(Ro), sa(To), sa(Oo);
        }
        function Lo(e) {
          Mo(Oo.current);
          var t = Mo(Ro.current),
            r = fe(t, e.type);
          t !== r && (ca(To, e), ca(Ro, r));
        }
        function Ao(e) {
          To.current === e && (sa(Ro), sa(To));
        }
        var Fo = ua(0);
        function jo(e) {
          for (var t = e; null !== t; ) {
            if (13 === t.tag) {
              var r = t.memoizedState;
              if (
                null !== r &&
                (null === (r = r.dehydrated) ||
                  "$?" === r.data ||
                  "$!" === r.data)
              )
                return t;
            } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
              if (0 != (64 & t.flags)) return t;
            } else if (null !== t.child) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break;
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === e) return null;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
          return null;
        }
        var Do = null,
          Uo = null,
          Bo = !1;
        function zo(e, t) {
          var r = Bu(5, null, null, 0);
          (r.elementType = "DELETED"),
            (r.type = "DELETED"),
            (r.stateNode = t),
            (r.return = e),
            (r.flags = 8),
            null !== e.lastEffect
              ? ((e.lastEffect.nextEffect = r), (e.lastEffect = r))
              : (e.firstEffect = e.lastEffect = r);
        }
        function Ho(e, t) {
          switch (e.tag) {
            case 5:
              var r = e.type;
              return (
                null !==
                  (t =
                    1 !== t.nodeType ||
                    r.toLowerCase() !== t.nodeName.toLowerCase()
                      ? null
                      : t) && ((e.stateNode = t), !0)
              );
            case 6:
              return (
                null !==
                  (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) &&
                ((e.stateNode = t), !0)
              );
            default:
              return !1;
          }
        }
        function Vo(e) {
          if (Bo) {
            var t = Uo;
            if (t) {
              var r = t;
              if (!Ho(e, t)) {
                if (!(t = Yn(r.nextSibling)) || !Ho(e, t))
                  return (
                    (e.flags = (-1025 & e.flags) | 2), (Bo = !1), void (Do = e)
                  );
                zo(Do, r);
              }
              (Do = e), (Uo = Yn(t.firstChild));
            } else (e.flags = (-1025 & e.flags) | 2), (Bo = !1), (Do = e);
          }
        }
        function $o(e) {
          for (
            e = e.return;
            null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

          )
            e = e.return;
          Do = e;
        }
        function Wo(e) {
          if (e !== Do) return !1;
          if (!Bo) return $o(e), (Bo = !0), !1;
          var t = e.type;
          if (
            5 !== e.tag ||
            ("head" !== t && "body" !== t && !Hn(t, e.memoizedProps))
          )
            for (t = Uo; t; ) zo(e, t), (t = Yn(t.nextSibling));
          if (($o(e), 13 === e.tag)) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
              throw Error(i(317));
            e: {
              for (e = e.nextSibling, t = 0; e; ) {
                if (8 === e.nodeType) {
                  var r = e.data;
                  if ("/$" === r) {
                    if (0 === t) {
                      Uo = Yn(e.nextSibling);
                      break e;
                    }
                    t--;
                  } else ("$" !== r && "$!" !== r && "$?" !== r) || t++;
                }
                e = e.nextSibling;
              }
              Uo = null;
            }
          } else Uo = Do ? Yn(e.stateNode.nextSibling) : null;
          return !0;
        }
        function Yo() {
          (Uo = Do = null), (Bo = !1);
        }
        var Go = [];
        function Qo() {
          for (var e = 0; e < Go.length; e++)
            Go[e]._workInProgressVersionPrimary = null;
          Go.length = 0;
        }
        var Ko = x.ReactCurrentDispatcher,
          Xo = x.ReactCurrentBatchConfig,
          Jo = 0,
          Zo = null,
          ei = null,
          ti = null,
          ri = !1,
          ni = !1;
        function ai() {
          throw Error(i(321));
        }
        function oi(e, t) {
          if (null === t) return !1;
          for (var r = 0; r < t.length && r < e.length; r++)
            if (!sn(e[r], t[r])) return !1;
          return !0;
        }
        function ii(e, t, r, n, a, o) {
          if (
            ((Jo = o),
            (Zo = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (Ko.current = null === e || null === e.memoizedState ? Mi : Ni),
            (e = r(n, a)),
            ni)
          ) {
            o = 0;
            do {
              if (((ni = !1), !(25 > o))) throw Error(i(301));
              (o += 1),
                (ti = ei = null),
                (t.updateQueue = null),
                (Ko.current = Ii),
                (e = r(n, a));
            } while (ni);
          }
          if (
            ((Ko.current = Oi),
            (t = null !== ei && null !== ei.next),
            (Jo = 0),
            (ti = ei = Zo = null),
            (ri = !1),
            t)
          )
            throw Error(i(300));
          return e;
        }
        function li() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return (
            null === ti ? (Zo.memoizedState = ti = e) : (ti = ti.next = e), ti
          );
        }
        function ui() {
          if (null === ei) {
            var e = Zo.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = ei.next;
          var t = null === ti ? Zo.memoizedState : ti.next;
          if (null !== t) (ti = t), (ei = e);
          else {
            if (null === e) throw Error(i(310));
            (e = {
              memoizedState: (ei = e).memoizedState,
              baseState: ei.baseState,
              baseQueue: ei.baseQueue,
              queue: ei.queue,
              next: null,
            }),
              null === ti ? (Zo.memoizedState = ti = e) : (ti = ti.next = e);
          }
          return ti;
        }
        function si(e, t) {
          return "function" == typeof t ? t(e) : t;
        }
        function ci(e) {
          var t = ui(),
            r = t.queue;
          if (null === r) throw Error(i(311));
          r.lastRenderedReducer = e;
          var n = ei,
            a = n.baseQueue,
            o = r.pending;
          if (null !== o) {
            if (null !== a) {
              var l = a.next;
              (a.next = o.next), (o.next = l);
            }
            (n.baseQueue = a = o), (r.pending = null);
          }
          if (null !== a) {
            (a = a.next), (n = n.baseState);
            var u = (l = o = null),
              s = a;
            do {
              var c = s.lane;
              if ((Jo & c) === c)
                null !== u &&
                  (u = u.next =
                    {
                      lane: 0,
                      action: s.action,
                      eagerReducer: s.eagerReducer,
                      eagerState: s.eagerState,
                      next: null,
                    }),
                  (n = s.eagerReducer === e ? s.eagerState : e(n, s.action));
              else {
                var d = {
                  lane: c,
                  action: s.action,
                  eagerReducer: s.eagerReducer,
                  eagerState: s.eagerState,
                  next: null,
                };
                null === u ? ((l = u = d), (o = n)) : (u = u.next = d),
                  (Zo.lanes |= c),
                  (jl |= c);
              }
              s = s.next;
            } while (null !== s && s !== a);
            null === u ? (o = n) : (u.next = l),
              sn(n, t.memoizedState) || (Ai = !0),
              (t.memoizedState = n),
              (t.baseState = o),
              (t.baseQueue = u),
              (r.lastRenderedState = n);
          }
          return [t.memoizedState, r.dispatch];
        }
        function di(e) {
          var t = ui(),
            r = t.queue;
          if (null === r) throw Error(i(311));
          r.lastRenderedReducer = e;
          var n = r.dispatch,
            a = r.pending,
            o = t.memoizedState;
          if (null !== a) {
            r.pending = null;
            var l = (a = a.next);
            do {
              (o = e(o, l.action)), (l = l.next);
            } while (l !== a);
            sn(o, t.memoizedState) || (Ai = !0),
              (t.memoizedState = o),
              null === t.baseQueue && (t.baseState = o),
              (r.lastRenderedState = o);
          }
          return [o, n];
        }
        function pi(e, t, r) {
          var n = t._getVersion;
          n = n(t._source);
          var a = t._workInProgressVersionPrimary;
          if (
            (null !== a
              ? (e = a === n)
              : ((e = e.mutableReadLanes),
                (e = (Jo & e) === e) &&
                  ((t._workInProgressVersionPrimary = n), Go.push(t))),
            e)
          )
            return r(t._source);
          throw (Go.push(t), Error(i(350)));
        }
        function fi(e, t, r, n) {
          var a = Tl;
          if (null === a) throw Error(i(349));
          var o = t._getVersion,
            l = o(t._source),
            u = Ko.current,
            s = u.useState(function () {
              return pi(a, t, r);
            }),
            c = s[1],
            d = s[0];
          s = ti;
          var p = e.memoizedState,
            f = p.refs,
            m = f.getSnapshot,
            h = p.source;
          p = p.subscribe;
          var v = Zo;
          return (
            (e.memoizedState = { refs: f, source: t, subscribe: n }),
            u.useEffect(
              function () {
                (f.getSnapshot = r), (f.setSnapshot = c);
                var e = o(t._source);
                if (!sn(l, e)) {
                  (e = r(t._source)),
                    sn(d, e) ||
                      (c(e),
                      (e = cu(v)),
                      (a.mutableReadLanes |= e & a.pendingLanes)),
                    (e = a.mutableReadLanes),
                    (a.entangledLanes |= e);
                  for (var n = a.entanglements, i = e; 0 < i; ) {
                    var u = 31 - Ht(i),
                      s = 1 << u;
                    (n[u] |= e), (i &= ~s);
                  }
                }
              },
              [r, t, n]
            ),
            u.useEffect(
              function () {
                return n(t._source, function () {
                  var e = f.getSnapshot,
                    r = f.setSnapshot;
                  try {
                    r(e(t._source));
                    var n = cu(v);
                    a.mutableReadLanes |= n & a.pendingLanes;
                  } catch (e) {
                    r(function () {
                      throw e;
                    });
                  }
                });
              },
              [t, n]
            ),
            (sn(m, r) && sn(h, t) && sn(p, n)) ||
              (((e = {
                pending: null,
                dispatch: null,
                lastRenderedReducer: si,
                lastRenderedState: d,
              }).dispatch = c =
                Ti.bind(null, Zo, e)),
              (s.queue = e),
              (s.baseQueue = null),
              (d = pi(a, t, r)),
              (s.memoizedState = s.baseState = d)),
            d
          );
        }
        function mi(e, t, r) {
          return fi(ui(), e, t, r);
        }
        function hi(e) {
          var t = li();
          return (
            "function" == typeof e && (e = e()),
            (t.memoizedState = t.baseState = e),
            (e = (e = t.queue =
              {
                pending: null,
                dispatch: null,
                lastRenderedReducer: si,
                lastRenderedState: e,
              }).dispatch =
              Ti.bind(null, Zo, e)),
            [t.memoizedState, e]
          );
        }
        function vi(e, t, r, n) {
          return (
            (e = { tag: e, create: t, destroy: r, deps: n, next: null }),
            null === (t = Zo.updateQueue)
              ? ((t = { lastEffect: null }),
                (Zo.updateQueue = t),
                (t.lastEffect = e.next = e))
              : null === (r = t.lastEffect)
              ? (t.lastEffect = e.next = e)
              : ((n = r.next), (r.next = e), (e.next = n), (t.lastEffect = e)),
            e
          );
        }
        function bi(e) {
          return (e = { current: e }), (li().memoizedState = e);
        }
        function yi() {
          return ui().memoizedState;
        }
        function gi(e, t, r, n) {
          var a = li();
          (Zo.flags |= e),
            (a.memoizedState = vi(1 | t, r, void 0, void 0 === n ? null : n));
        }
        function wi(e, t, r, n) {
          var a = ui();
          n = void 0 === n ? null : n;
          var o = void 0;
          if (null !== ei) {
            var i = ei.memoizedState;
            if (((o = i.destroy), null !== n && oi(n, i.deps)))
              return void vi(t, r, o, n);
          }
          (Zo.flags |= e), (a.memoizedState = vi(1 | t, r, o, n));
        }
        function xi(e, t) {
          return gi(516, 4, e, t);
        }
        function Ei(e, t) {
          return wi(516, 4, e, t);
        }
        function _i(e, t) {
          return wi(4, 2, e, t);
        }
        function Ci(e, t) {
          return "function" == typeof t
            ? ((e = e()),
              t(e),
              function () {
                t(null);
              })
            : null != t
            ? ((e = e()),
              (t.current = e),
              function () {
                t.current = null;
              })
            : void 0;
        }
        function ki(e, t, r) {
          return (
            (r = null != r ? r.concat([e]) : null),
            wi(4, 2, Ci.bind(null, t, e), r)
          );
        }
        function Pi() {}
        function Si(e, t) {
          var r = ui();
          t = void 0 === t ? null : t;
          var n = r.memoizedState;
          return null !== n && null !== t && oi(t, n[1])
            ? n[0]
            : ((r.memoizedState = [e, t]), e);
        }
        function qi(e, t) {
          var r = ui();
          t = void 0 === t ? null : t;
          var n = r.memoizedState;
          return null !== n && null !== t && oi(t, n[1])
            ? n[0]
            : ((e = e()), (r.memoizedState = [e, t]), e);
        }
        function Ri(e, t) {
          var r = Ha();
          $a(98 > r ? 98 : r, function () {
            e(!0);
          }),
            $a(97 < r ? 97 : r, function () {
              var r = Xo.transition;
              Xo.transition = 1;
              try {
                e(!1), t();
              } finally {
                Xo.transition = r;
              }
            });
        }
        function Ti(e, t, r) {
          var n = su(),
            a = cu(e),
            o = {
              lane: a,
              action: r,
              eagerReducer: null,
              eagerState: null,
              next: null,
            },
            i = t.pending;
          if (
            (null === i ? (o.next = o) : ((o.next = i.next), (i.next = o)),
            (t.pending = o),
            (i = e.alternate),
            e === Zo || (null !== i && i === Zo))
          )
            ni = ri = !0;
          else {
            if (
              0 === e.lanes &&
              (null === i || 0 === i.lanes) &&
              null !== (i = t.lastRenderedReducer)
            )
              try {
                var l = t.lastRenderedState,
                  u = i(l, r);
                if (((o.eagerReducer = i), (o.eagerState = u), sn(u, l)))
                  return;
              } catch (e) {}
            du(e, a, n);
          }
        }
        var Oi = {
            readContext: oo,
            useCallback: ai,
            useContext: ai,
            useEffect: ai,
            useImperativeHandle: ai,
            useLayoutEffect: ai,
            useMemo: ai,
            useReducer: ai,
            useRef: ai,
            useState: ai,
            useDebugValue: ai,
            useDeferredValue: ai,
            useTransition: ai,
            useMutableSource: ai,
            useOpaqueIdentifier: ai,
            unstable_isNewReconciler: !1,
          },
          Mi = {
            readContext: oo,
            useCallback: function (e, t) {
              return (li().memoizedState = [e, void 0 === t ? null : t]), e;
            },
            useContext: oo,
            useEffect: xi,
            useImperativeHandle: function (e, t, r) {
              return (
                (r = null != r ? r.concat([e]) : null),
                gi(4, 2, Ci.bind(null, t, e), r)
              );
            },
            useLayoutEffect: function (e, t) {
              return gi(4, 2, e, t);
            },
            useMemo: function (e, t) {
              var r = li();
              return (
                (t = void 0 === t ? null : t),
                (e = e()),
                (r.memoizedState = [e, t]),
                e
              );
            },
            useReducer: function (e, t, r) {
              var n = li();
              return (
                (t = void 0 !== r ? r(t) : t),
                (n.memoizedState = n.baseState = t),
                (e = (e = n.queue =
                  {
                    pending: null,
                    dispatch: null,
                    lastRenderedReducer: e,
                    lastRenderedState: t,
                  }).dispatch =
                  Ti.bind(null, Zo, e)),
                [n.memoizedState, e]
              );
            },
            useRef: bi,
            useState: hi,
            useDebugValue: Pi,
            useDeferredValue: function (e) {
              var t = hi(e),
                r = t[0],
                n = t[1];
              return (
                xi(
                  function () {
                    var t = Xo.transition;
                    Xo.transition = 1;
                    try {
                      n(e);
                    } finally {
                      Xo.transition = t;
                    }
                  },
                  [e]
                ),
                r
              );
            },
            useTransition: function () {
              var e = hi(!1),
                t = e[0];
              return bi((e = Ri.bind(null, e[1]))), [e, t];
            },
            useMutableSource: function (e, t, r) {
              var n = li();
              return (
                (n.memoizedState = {
                  refs: { getSnapshot: t, setSnapshot: null },
                  source: e,
                  subscribe: r,
                }),
                fi(n, e, t, r)
              );
            },
            useOpaqueIdentifier: function () {
              if (Bo) {
                var e = !1,
                  t = (function (e) {
                    return { $$typeof: L, toString: e, valueOf: e };
                  })(function () {
                    throw (
                      (e || ((e = !0), r("r:" + (Qn++).toString(36))),
                      Error(i(355)))
                    );
                  }),
                  r = hi(t)[1];
                return (
                  0 == (2 & Zo.mode) &&
                    ((Zo.flags |= 516),
                    vi(
                      5,
                      function () {
                        r("r:" + (Qn++).toString(36));
                      },
                      void 0,
                      null
                    )),
                  t
                );
              }
              return hi((t = "r:" + (Qn++).toString(36))), t;
            },
            unstable_isNewReconciler: !1,
          },
          Ni = {
            readContext: oo,
            useCallback: Si,
            useContext: oo,
            useEffect: Ei,
            useImperativeHandle: ki,
            useLayoutEffect: _i,
            useMemo: qi,
            useReducer: ci,
            useRef: yi,
            useState: function () {
              return ci(si);
            },
            useDebugValue: Pi,
            useDeferredValue: function (e) {
              var t = ci(si),
                r = t[0],
                n = t[1];
              return (
                Ei(
                  function () {
                    var t = Xo.transition;
                    Xo.transition = 1;
                    try {
                      n(e);
                    } finally {
                      Xo.transition = t;
                    }
                  },
                  [e]
                ),
                r
              );
            },
            useTransition: function () {
              var e = ci(si)[0];
              return [yi().current, e];
            },
            useMutableSource: mi,
            useOpaqueIdentifier: function () {
              return ci(si)[0];
            },
            unstable_isNewReconciler: !1,
          },
          Ii = {
            readContext: oo,
            useCallback: Si,
            useContext: oo,
            useEffect: Ei,
            useImperativeHandle: ki,
            useLayoutEffect: _i,
            useMemo: qi,
            useReducer: di,
            useRef: yi,
            useState: function () {
              return di(si);
            },
            useDebugValue: Pi,
            useDeferredValue: function (e) {
              var t = di(si),
                r = t[0],
                n = t[1];
              return (
                Ei(
                  function () {
                    var t = Xo.transition;
                    Xo.transition = 1;
                    try {
                      n(e);
                    } finally {
                      Xo.transition = t;
                    }
                  },
                  [e]
                ),
                r
              );
            },
            useTransition: function () {
              var e = di(si)[0];
              return [yi().current, e];
            },
            useMutableSource: mi,
            useOpaqueIdentifier: function () {
              return di(si)[0];
            },
            unstable_isNewReconciler: !1,
          },
          Li = x.ReactCurrentOwner,
          Ai = !1;
        function Fi(e, t, r, n) {
          t.child = null === e ? So(t, null, r, n) : Po(t, e.child, r, n);
        }
        function ji(e, t, r, n, a) {
          r = r.render;
          var o = t.ref;
          return (
            ao(t, a),
            (n = ii(e, t, r, n, o, a)),
            null === e || Ai
              ? ((t.flags |= 1), Fi(e, t, n, a), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -517),
                (e.lanes &= ~a),
                rl(e, t, a))
          );
        }
        function Di(e, t, r, n, a, o) {
          if (null === e) {
            var i = r.type;
            return "function" != typeof i ||
              zu(i) ||
              void 0 !== i.defaultProps ||
              null !== r.compare ||
              void 0 !== r.defaultProps
              ? (((e = Vu(r.type, null, n, t, t.mode, o)).ref = t.ref),
                (e.return = t),
                (t.child = e))
              : ((t.tag = 15), (t.type = i), Ui(e, t, i, n, a, o));
          }
          return (
            (i = e.child),
            0 == (a & o) &&
            ((a = i.memoizedProps),
            (r = null !== (r = r.compare) ? r : dn)(a, n) && e.ref === t.ref)
              ? rl(e, t, o)
              : ((t.flags |= 1),
                ((e = Hu(i, n)).ref = t.ref),
                (e.return = t),
                (t.child = e))
          );
        }
        function Ui(e, t, r, n, a, o) {
          if (null !== e && dn(e.memoizedProps, n) && e.ref === t.ref) {
            if (((Ai = !1), 0 == (o & a)))
              return (t.lanes = e.lanes), rl(e, t, o);
            0 != (16384 & e.flags) && (Ai = !0);
          }
          return Hi(e, t, r, n, o);
        }
        function Bi(e, t, r) {
          var n = t.pendingProps,
            a = n.children,
            o = null !== e ? e.memoizedState : null;
          if ("hidden" === n.mode || "unstable-defer-without-hiding" === n.mode)
            if (0 == (4 & t.mode))
              (t.memoizedState = { baseLanes: 0 }), gu(0, r);
            else {
              if (0 == (1073741824 & r))
                return (
                  (e = null !== o ? o.baseLanes | r : r),
                  (t.lanes = t.childLanes = 1073741824),
                  (t.memoizedState = { baseLanes: e }),
                  gu(0, e),
                  null
                );
              (t.memoizedState = { baseLanes: 0 }),
                gu(0, null !== o ? o.baseLanes : r);
            }
          else
            null !== o
              ? ((n = o.baseLanes | r), (t.memoizedState = null))
              : (n = r),
              gu(0, n);
          return Fi(e, t, a, r), t.child;
        }
        function zi(e, t) {
          var r = t.ref;
          ((null === e && null !== r) || (null !== e && e.ref !== r)) &&
            (t.flags |= 128);
        }
        function Hi(e, t, r, n, a) {
          var o = va(r) ? ma : pa.current;
          return (
            (o = ha(t, o)),
            ao(t, a),
            (r = ii(e, t, r, n, o, a)),
            null === e || Ai
              ? ((t.flags |= 1), Fi(e, t, r, a), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -517),
                (e.lanes &= ~a),
                rl(e, t, a))
          );
        }
        function Vi(e, t, r, n, a) {
          if (va(r)) {
            var o = !0;
            wa(t);
          } else o = !1;
          if ((ao(t, a), null === t.stateNode))
            null !== e &&
              ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
              go(t, r, n),
              xo(t, r, n, a),
              (n = !0);
          else if (null === e) {
            var i = t.stateNode,
              l = t.memoizedProps;
            i.props = l;
            var u = i.context,
              s = r.contextType;
            s =
              "object" == typeof s && null !== s
                ? oo(s)
                : ha(t, (s = va(r) ? ma : pa.current));
            var c = r.getDerivedStateFromProps,
              d =
                "function" == typeof c ||
                "function" == typeof i.getSnapshotBeforeUpdate;
            d ||
              ("function" != typeof i.UNSAFE_componentWillReceiveProps &&
                "function" != typeof i.componentWillReceiveProps) ||
              ((l !== n || u !== s) && wo(t, i, n, s)),
              (io = !1);
            var p = t.memoizedState;
            (i.state = p),
              fo(t, n, i, a),
              (u = t.memoizedState),
              l !== n || p !== u || fa.current || io
                ? ("function" == typeof c &&
                    (vo(t, r, c, n), (u = t.memoizedState)),
                  (l = io || yo(t, r, l, n, p, u, s))
                    ? (d ||
                        ("function" != typeof i.UNSAFE_componentWillMount &&
                          "function" != typeof i.componentWillMount) ||
                        ("function" == typeof i.componentWillMount &&
                          i.componentWillMount(),
                        "function" == typeof i.UNSAFE_componentWillMount &&
                          i.UNSAFE_componentWillMount()),
                      "function" == typeof i.componentDidMount &&
                        (t.flags |= 4))
                    : ("function" == typeof i.componentDidMount &&
                        (t.flags |= 4),
                      (t.memoizedProps = n),
                      (t.memoizedState = u)),
                  (i.props = n),
                  (i.state = u),
                  (i.context = s),
                  (n = l))
                : ("function" == typeof i.componentDidMount && (t.flags |= 4),
                  (n = !1));
          } else {
            (i = t.stateNode),
              uo(e, t),
              (l = t.memoizedProps),
              (s = t.type === t.elementType ? l : Ka(t.type, l)),
              (i.props = s),
              (d = t.pendingProps),
              (p = i.context),
              (u =
                "object" == typeof (u = r.contextType) && null !== u
                  ? oo(u)
                  : ha(t, (u = va(r) ? ma : pa.current)));
            var f = r.getDerivedStateFromProps;
            (c =
              "function" == typeof f ||
              "function" == typeof i.getSnapshotBeforeUpdate) ||
              ("function" != typeof i.UNSAFE_componentWillReceiveProps &&
                "function" != typeof i.componentWillReceiveProps) ||
              ((l !== d || p !== u) && wo(t, i, n, u)),
              (io = !1),
              (p = t.memoizedState),
              (i.state = p),
              fo(t, n, i, a);
            var m = t.memoizedState;
            l !== d || p !== m || fa.current || io
              ? ("function" == typeof f &&
                  (vo(t, r, f, n), (m = t.memoizedState)),
                (s = io || yo(t, r, s, n, p, m, u))
                  ? (c ||
                      ("function" != typeof i.UNSAFE_componentWillUpdate &&
                        "function" != typeof i.componentWillUpdate) ||
                      ("function" == typeof i.componentWillUpdate &&
                        i.componentWillUpdate(n, m, u),
                      "function" == typeof i.UNSAFE_componentWillUpdate &&
                        i.UNSAFE_componentWillUpdate(n, m, u)),
                    "function" == typeof i.componentDidUpdate && (t.flags |= 4),
                    "function" == typeof i.getSnapshotBeforeUpdate &&
                      (t.flags |= 256))
                  : ("function" != typeof i.componentDidUpdate ||
                      (l === e.memoizedProps && p === e.memoizedState) ||
                      (t.flags |= 4),
                    "function" != typeof i.getSnapshotBeforeUpdate ||
                      (l === e.memoizedProps && p === e.memoizedState) ||
                      (t.flags |= 256),
                    (t.memoizedProps = n),
                    (t.memoizedState = m)),
                (i.props = n),
                (i.state = m),
                (i.context = u),
                (n = s))
              : ("function" != typeof i.componentDidUpdate ||
                  (l === e.memoizedProps && p === e.memoizedState) ||
                  (t.flags |= 4),
                "function" != typeof i.getSnapshotBeforeUpdate ||
                  (l === e.memoizedProps && p === e.memoizedState) ||
                  (t.flags |= 256),
                (n = !1));
          }
          return $i(e, t, r, n, o, a);
        }
        function $i(e, t, r, n, a, o) {
          zi(e, t);
          var i = 0 != (64 & t.flags);
          if (!n && !i) return a && xa(t, r, !1), rl(e, t, o);
          (n = t.stateNode), (Li.current = t);
          var l =
            i && "function" != typeof r.getDerivedStateFromError
              ? null
              : n.render();
          return (
            (t.flags |= 1),
            null !== e && i
              ? ((t.child = Po(t, e.child, null, o)),
                (t.child = Po(t, null, l, o)))
              : Fi(e, t, l, o),
            (t.memoizedState = n.state),
            a && xa(t, r, !0),
            t.child
          );
        }
        function Wi(e) {
          var t = e.stateNode;
          t.pendingContext
            ? ya(0, t.pendingContext, t.pendingContext !== t.context)
            : t.context && ya(0, t.context, !1),
            No(e, t.containerInfo);
        }
        var Yi,
          Gi,
          Qi,
          Ki = { dehydrated: null, retryLane: 0 };
        function Xi(e, t, r) {
          var n,
            a = t.pendingProps,
            o = Fo.current,
            i = !1;
          return (
            (n = 0 != (64 & t.flags)) ||
              (n = (null === e || null !== e.memoizedState) && 0 != (2 & o)),
            n
              ? ((i = !0), (t.flags &= -65))
              : (null !== e && null === e.memoizedState) ||
                void 0 === a.fallback ||
                !0 === a.unstable_avoidThisFallback ||
                (o |= 1),
            ca(Fo, 1 & o),
            null === e
              ? (void 0 !== a.fallback && Vo(t),
                (e = a.children),
                (o = a.fallback),
                i
                  ? ((e = Ji(t, e, o, r)),
                    (t.child.memoizedState = { baseLanes: r }),
                    (t.memoizedState = Ki),
                    e)
                  : "number" == typeof a.unstable_expectedLoadTime
                  ? ((e = Ji(t, e, o, r)),
                    (t.child.memoizedState = { baseLanes: r }),
                    (t.memoizedState = Ki),
                    (t.lanes = 33554432),
                    e)
                  : (((r = Wu(
                      { mode: "visible", children: e },
                      t.mode,
                      r,
                      null
                    )).return = t),
                    (t.child = r)))
              : (e.memoizedState,
                i
                  ? ((a = (function (e, t, r, n, a) {
                      var o = t.mode,
                        i = e.child;
                      e = i.sibling;
                      var l = { mode: "hidden", children: r };
                      return (
                        0 == (2 & o) && t.child !== i
                          ? (((r = t.child).childLanes = 0),
                            (r.pendingProps = l),
                            null !== (i = r.lastEffect)
                              ? ((t.firstEffect = r.firstEffect),
                                (t.lastEffect = i),
                                (i.nextEffect = null))
                              : (t.firstEffect = t.lastEffect = null))
                          : (r = Hu(i, l)),
                        null !== e
                          ? (n = Hu(e, n))
                          : ((n = $u(n, o, a, null)).flags |= 2),
                        (n.return = t),
                        (r.return = t),
                        (r.sibling = n),
                        (t.child = r),
                        n
                      );
                    })(e, t, a.children, a.fallback, r)),
                    (i = t.child),
                    (o = e.child.memoizedState),
                    (i.memoizedState =
                      null === o
                        ? { baseLanes: r }
                        : { baseLanes: o.baseLanes | r }),
                    (i.childLanes = e.childLanes & ~r),
                    (t.memoizedState = Ki),
                    a)
                  : ((r = (function (e, t, r, n) {
                      var a = e.child;
                      return (
                        (e = a.sibling),
                        (r = Hu(a, { mode: "visible", children: r })),
                        0 == (2 & t.mode) && (r.lanes = n),
                        (r.return = t),
                        (r.sibling = null),
                        null !== e &&
                          ((e.nextEffect = null),
                          (e.flags = 8),
                          (t.firstEffect = t.lastEffect = e)),
                        (t.child = r)
                      );
                    })(e, t, a.children, r)),
                    (t.memoizedState = null),
                    r))
          );
        }
        function Ji(e, t, r, n) {
          var a = e.mode,
            o = e.child;
          return (
            (t = { mode: "hidden", children: t }),
            0 == (2 & a) && null !== o
              ? ((o.childLanes = 0), (o.pendingProps = t))
              : (o = Wu(t, a, 0, null)),
            (r = $u(r, a, n, null)),
            (o.return = e),
            (r.return = e),
            (o.sibling = r),
            (e.child = o),
            r
          );
        }
        function Zi(e, t) {
          e.lanes |= t;
          var r = e.alternate;
          null !== r && (r.lanes |= t), no(e.return, t);
        }
        function el(e, t, r, n, a, o) {
          var i = e.memoizedState;
          null === i
            ? (e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: n,
                tail: r,
                tailMode: a,
                lastEffect: o,
              })
            : ((i.isBackwards = t),
              (i.rendering = null),
              (i.renderingStartTime = 0),
              (i.last = n),
              (i.tail = r),
              (i.tailMode = a),
              (i.lastEffect = o));
        }
        function tl(e, t, r) {
          var n = t.pendingProps,
            a = n.revealOrder,
            o = n.tail;
          if ((Fi(e, t, n.children, r), 0 != (2 & (n = Fo.current))))
            (n = (1 & n) | 2), (t.flags |= 64);
          else {
            if (null !== e && 0 != (64 & e.flags))
              e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && Zi(e, r);
                else if (19 === e.tag) Zi(e, r);
                else if (null !== e.child) {
                  (e.child.return = e), (e = e.child);
                  continue;
                }
                if (e === t) break e;
                for (; null === e.sibling; ) {
                  if (null === e.return || e.return === t) break e;
                  e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
              }
            n &= 1;
          }
          if ((ca(Fo, n), 0 == (2 & t.mode))) t.memoizedState = null;
          else
            switch (a) {
              case "forwards":
                for (r = t.child, a = null; null !== r; )
                  null !== (e = r.alternate) && null === jo(e) && (a = r),
                    (r = r.sibling);
                null === (r = a)
                  ? ((a = t.child), (t.child = null))
                  : ((a = r.sibling), (r.sibling = null)),
                  el(t, !1, a, r, o, t.lastEffect);
                break;
              case "backwards":
                for (r = null, a = t.child, t.child = null; null !== a; ) {
                  if (null !== (e = a.alternate) && null === jo(e)) {
                    t.child = a;
                    break;
                  }
                  (e = a.sibling), (a.sibling = r), (r = a), (a = e);
                }
                el(t, !0, r, null, o, t.lastEffect);
                break;
              case "together":
                el(t, !1, null, null, void 0, t.lastEffect);
                break;
              default:
                t.memoizedState = null;
            }
          return t.child;
        }
        function rl(e, t, r) {
          if (
            (null !== e && (t.dependencies = e.dependencies),
            (jl |= t.lanes),
            0 != (r & t.childLanes))
          ) {
            if (null !== e && t.child !== e.child) throw Error(i(153));
            if (null !== t.child) {
              for (
                r = Hu((e = t.child), e.pendingProps),
                  t.child = r,
                  r.return = t;
                null !== e.sibling;

              )
                (e = e.sibling),
                  ((r = r.sibling = Hu(e, e.pendingProps)).return = t);
              r.sibling = null;
            }
            return t.child;
          }
          return null;
        }
        function nl(e, t) {
          if (!Bo)
            switch (e.tailMode) {
              case "hidden":
                t = e.tail;
                for (var r = null; null !== t; )
                  null !== t.alternate && (r = t), (t = t.sibling);
                null === r ? (e.tail = null) : (r.sibling = null);
                break;
              case "collapsed":
                r = e.tail;
                for (var n = null; null !== r; )
                  null !== r.alternate && (n = r), (r = r.sibling);
                null === n
                  ? t || null === e.tail
                    ? (e.tail = null)
                    : (e.tail.sibling = null)
                  : (n.sibling = null);
            }
        }
        function al(e, t, r) {
          var n = t.pendingProps;
          switch (t.tag) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
              return null;
            case 1:
            case 17:
              return va(t.type) && ba(), null;
            case 3:
              return (
                Io(),
                sa(fa),
                sa(pa),
                Qo(),
                (n = t.stateNode).pendingContext &&
                  ((n.context = n.pendingContext), (n.pendingContext = null)),
                (null !== e && null !== e.child) ||
                  (Wo(t) ? (t.flags |= 4) : n.hydrate || (t.flags |= 256)),
                null
              );
            case 5:
              Ao(t);
              var o = Mo(Oo.current);
              if (((r = t.type), null !== e && null != t.stateNode))
                Gi(e, t, r, n), e.ref !== t.ref && (t.flags |= 128);
              else {
                if (!n) {
                  if (null === t.stateNode) throw Error(i(166));
                  return null;
                }
                if (((e = Mo(Ro.current)), Wo(t))) {
                  (n = t.stateNode), (r = t.type);
                  var l = t.memoizedProps;
                  switch (((n[Xn] = t), (n[Jn] = l), r)) {
                    case "dialog":
                      Rn("cancel", n), Rn("close", n);
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      Rn("load", n);
                      break;
                    case "video":
                    case "audio":
                      for (e = 0; e < kn.length; e++) Rn(kn[e], n);
                      break;
                    case "source":
                      Rn("error", n);
                      break;
                    case "img":
                    case "image":
                    case "link":
                      Rn("error", n), Rn("load", n);
                      break;
                    case "details":
                      Rn("toggle", n);
                      break;
                    case "input":
                      ee(n, l), Rn("invalid", n);
                      break;
                    case "select":
                      (n._wrapperState = { wasMultiple: !!l.multiple }),
                        Rn("invalid", n);
                      break;
                    case "textarea":
                      ue(n, l), Rn("invalid", n);
                  }
                  for (var s in (_e(r, l), (e = null), l))
                    l.hasOwnProperty(s) &&
                      ((o = l[s]),
                      "children" === s
                        ? "string" == typeof o
                          ? n.textContent !== o && (e = ["children", o])
                          : "number" == typeof o &&
                            n.textContent !== "" + o &&
                            (e = ["children", "" + o])
                        : u.hasOwnProperty(s) &&
                          null != o &&
                          "onScroll" === s &&
                          Rn("scroll", n));
                  switch (r) {
                    case "input":
                      K(n), ne(n, l, !0);
                      break;
                    case "textarea":
                      K(n), ce(n);
                      break;
                    case "select":
                    case "option":
                      break;
                    default:
                      "function" == typeof l.onClick && (n.onclick = Dn);
                  }
                  (n = e), (t.updateQueue = n), null !== n && (t.flags |= 4);
                } else {
                  switch (
                    ((s = 9 === o.nodeType ? o : o.ownerDocument),
                    e === de && (e = pe(r)),
                    e === de
                      ? "script" === r
                        ? (((e = s.createElement("div")).innerHTML =
                            "<script></script>"),
                          (e = e.removeChild(e.firstChild)))
                        : "string" == typeof n.is
                        ? (e = s.createElement(r, { is: n.is }))
                        : ((e = s.createElement(r)),
                          "select" === r &&
                            ((s = e),
                            n.multiple
                              ? (s.multiple = !0)
                              : n.size && (s.size = n.size)))
                      : (e = s.createElementNS(e, r)),
                    (e[Xn] = t),
                    (e[Jn] = n),
                    Yi(e, t),
                    (t.stateNode = e),
                    (s = Ce(r, n)),
                    r)
                  ) {
                    case "dialog":
                      Rn("cancel", e), Rn("close", e), (o = n);
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      Rn("load", e), (o = n);
                      break;
                    case "video":
                    case "audio":
                      for (o = 0; o < kn.length; o++) Rn(kn[o], e);
                      o = n;
                      break;
                    case "source":
                      Rn("error", e), (o = n);
                      break;
                    case "img":
                    case "image":
                    case "link":
                      Rn("error", e), Rn("load", e), (o = n);
                      break;
                    case "details":
                      Rn("toggle", e), (o = n);
                      break;
                    case "input":
                      ee(e, n), (o = Z(e, n)), Rn("invalid", e);
                      break;
                    case "option":
                      o = oe(e, n);
                      break;
                    case "select":
                      (e._wrapperState = { wasMultiple: !!n.multiple }),
                        (o = a({}, n, { value: void 0 })),
                        Rn("invalid", e);
                      break;
                    case "textarea":
                      ue(e, n), (o = le(e, n)), Rn("invalid", e);
                      break;
                    default:
                      o = n;
                  }
                  _e(r, o);
                  var c = o;
                  for (l in c)
                    if (c.hasOwnProperty(l)) {
                      var d = c[l];
                      "style" === l
                        ? xe(e, d)
                        : "dangerouslySetInnerHTML" === l
                        ? null != (d = d ? d.__html : void 0) && ve(e, d)
                        : "children" === l
                        ? "string" == typeof d
                          ? ("textarea" !== r || "" !== d) && be(e, d)
                          : "number" == typeof d && be(e, "" + d)
                        : "suppressContentEditableWarning" !== l &&
                          "suppressHydrationWarning" !== l &&
                          "autoFocus" !== l &&
                          (u.hasOwnProperty(l)
                            ? null != d && "onScroll" === l && Rn("scroll", e)
                            : null != d && w(e, l, d, s));
                    }
                  switch (r) {
                    case "input":
                      K(e), ne(e, n, !1);
                      break;
                    case "textarea":
                      K(e), ce(e);
                      break;
                    case "option":
                      null != n.value &&
                        e.setAttribute("value", "" + G(n.value));
                      break;
                    case "select":
                      (e.multiple = !!n.multiple),
                        null != (l = n.value)
                          ? ie(e, !!n.multiple, l, !1)
                          : null != n.defaultValue &&
                            ie(e, !!n.multiple, n.defaultValue, !0);
                      break;
                    default:
                      "function" == typeof o.onClick && (e.onclick = Dn);
                  }
                  zn(r, n) && (t.flags |= 4);
                }
                null !== t.ref && (t.flags |= 128);
              }
              return null;
            case 6:
              if (e && null != t.stateNode) Qi(0, t, e.memoizedProps, n);
              else {
                if ("string" != typeof n && null === t.stateNode)
                  throw Error(i(166));
                (r = Mo(Oo.current)),
                  Mo(Ro.current),
                  Wo(t)
                    ? ((n = t.stateNode),
                      (r = t.memoizedProps),
                      (n[Xn] = t),
                      n.nodeValue !== r && (t.flags |= 4))
                    : (((n = (
                        9 === r.nodeType ? r : r.ownerDocument
                      ).createTextNode(n))[Xn] = t),
                      (t.stateNode = n));
              }
              return null;
            case 13:
              return (
                sa(Fo),
                (n = t.memoizedState),
                0 != (64 & t.flags)
                  ? ((t.lanes = r), t)
                  : ((n = null !== n),
                    (r = !1),
                    null === e
                      ? void 0 !== t.memoizedProps.fallback && Wo(t)
                      : (r = null !== e.memoizedState),
                    n &&
                      !r &&
                      0 != (2 & t.mode) &&
                      ((null === e &&
                        !0 !== t.memoizedProps.unstable_avoidThisFallback) ||
                      0 != (1 & Fo.current)
                        ? 0 === Ll && (Ll = 3)
                        : ((0 !== Ll && 3 !== Ll) || (Ll = 4),
                          null === Tl ||
                            (0 == (134217727 & jl) && 0 == (134217727 & Dl)) ||
                            hu(Tl, Ml))),
                    (n || r) && (t.flags |= 4),
                    null)
              );
            case 4:
              return Io(), null === e && On(t.stateNode.containerInfo), null;
            case 10:
              return ro(t), null;
            case 19:
              if ((sa(Fo), null === (n = t.memoizedState))) return null;
              if (((l = 0 != (64 & t.flags)), null === (s = n.rendering)))
                if (l) nl(n, !1);
                else {
                  if (0 !== Ll || (null !== e && 0 != (64 & e.flags)))
                    for (e = t.child; null !== e; ) {
                      if (null !== (s = jo(e))) {
                        for (
                          t.flags |= 64,
                            nl(n, !1),
                            null !== (l = s.updateQueue) &&
                              ((t.updateQueue = l), (t.flags |= 4)),
                            null === n.lastEffect && (t.firstEffect = null),
                            t.lastEffect = n.lastEffect,
                            n = r,
                            r = t.child;
                          null !== r;

                        )
                          (e = n),
                            ((l = r).flags &= 2),
                            (l.nextEffect = null),
                            (l.firstEffect = null),
                            (l.lastEffect = null),
                            null === (s = l.alternate)
                              ? ((l.childLanes = 0),
                                (l.lanes = e),
                                (l.child = null),
                                (l.memoizedProps = null),
                                (l.memoizedState = null),
                                (l.updateQueue = null),
                                (l.dependencies = null),
                                (l.stateNode = null))
                              : ((l.childLanes = s.childLanes),
                                (l.lanes = s.lanes),
                                (l.child = s.child),
                                (l.memoizedProps = s.memoizedProps),
                                (l.memoizedState = s.memoizedState),
                                (l.updateQueue = s.updateQueue),
                                (l.type = s.type),
                                (e = s.dependencies),
                                (l.dependencies =
                                  null === e
                                    ? null
                                    : {
                                        lanes: e.lanes,
                                        firstContext: e.firstContext,
                                      })),
                            (r = r.sibling);
                        return ca(Fo, (1 & Fo.current) | 2), t.child;
                      }
                      e = e.sibling;
                    }
                  null !== n.tail &&
                    za() > Hl &&
                    ((t.flags |= 64),
                    (l = !0),
                    nl(n, !1),
                    (t.lanes = 33554432));
                }
              else {
                if (!l)
                  if (null !== (e = jo(s))) {
                    if (
                      ((t.flags |= 64),
                      (l = !0),
                      null !== (r = e.updateQueue) &&
                        ((t.updateQueue = r), (t.flags |= 4)),
                      nl(n, !0),
                      null === n.tail &&
                        "hidden" === n.tailMode &&
                        !s.alternate &&
                        !Bo)
                    )
                      return (
                        null !== (t = t.lastEffect = n.lastEffect) &&
                          (t.nextEffect = null),
                        null
                      );
                  } else
                    2 * za() - n.renderingStartTime > Hl &&
                      1073741824 !== r &&
                      ((t.flags |= 64),
                      (l = !0),
                      nl(n, !1),
                      (t.lanes = 33554432));
                n.isBackwards
                  ? ((s.sibling = t.child), (t.child = s))
                  : (null !== (r = n.last) ? (r.sibling = s) : (t.child = s),
                    (n.last = s));
              }
              return null !== n.tail
                ? ((r = n.tail),
                  (n.rendering = r),
                  (n.tail = r.sibling),
                  (n.lastEffect = t.lastEffect),
                  (n.renderingStartTime = za()),
                  (r.sibling = null),
                  (t = Fo.current),
                  ca(Fo, l ? (1 & t) | 2 : 1 & t),
                  r)
                : null;
            case 23:
            case 24:
              return (
                wu(),
                null !== e &&
                  (null !== e.memoizedState) != (null !== t.memoizedState) &&
                  "unstable-defer-without-hiding" !== n.mode &&
                  (t.flags |= 4),
                null
              );
          }
          throw Error(i(156, t.tag));
        }
        function ol(e) {
          switch (e.tag) {
            case 1:
              va(e.type) && ba();
              var t = e.flags;
              return 4096 & t ? ((e.flags = (-4097 & t) | 64), e) : null;
            case 3:
              if ((Io(), sa(fa), sa(pa), Qo(), 0 != (64 & (t = e.flags))))
                throw Error(i(285));
              return (e.flags = (-4097 & t) | 64), e;
            case 5:
              return Ao(e), null;
            case 13:
              return (
                sa(Fo),
                4096 & (t = e.flags) ? ((e.flags = (-4097 & t) | 64), e) : null
              );
            case 19:
              return sa(Fo), null;
            case 4:
              return Io(), null;
            case 10:
              return ro(e), null;
            case 23:
            case 24:
              return wu(), null;
            default:
              return null;
          }
        }
        function il(e, t) {
          try {
            var r = "",
              n = t;
            do {
              (r += W(n)), (n = n.return);
            } while (n);
            var a = r;
          } catch (e) {
            a = "\nError generating stack: " + e.message + "\n" + e.stack;
          }
          return { value: e, source: t, stack: a };
        }
        function ll(e, t) {
          try {
            console.error(t.value);
          } catch (e) {
            setTimeout(function () {
              throw e;
            });
          }
        }
        (Yi = function (e, t) {
          for (var r = t.child; null !== r; ) {
            if (5 === r.tag || 6 === r.tag) e.appendChild(r.stateNode);
            else if (4 !== r.tag && null !== r.child) {
              (r.child.return = r), (r = r.child);
              continue;
            }
            if (r === t) break;
            for (; null === r.sibling; ) {
              if (null === r.return || r.return === t) return;
              r = r.return;
            }
            (r.sibling.return = r.return), (r = r.sibling);
          }
        }),
          (Gi = function (e, t, r, n) {
            var o = e.memoizedProps;
            if (o !== n) {
              (e = t.stateNode), Mo(Ro.current);
              var i,
                l = null;
              switch (r) {
                case "input":
                  (o = Z(e, o)), (n = Z(e, n)), (l = []);
                  break;
                case "option":
                  (o = oe(e, o)), (n = oe(e, n)), (l = []);
                  break;
                case "select":
                  (o = a({}, o, { value: void 0 })),
                    (n = a({}, n, { value: void 0 })),
                    (l = []);
                  break;
                case "textarea":
                  (o = le(e, o)), (n = le(e, n)), (l = []);
                  break;
                default:
                  "function" != typeof o.onClick &&
                    "function" == typeof n.onClick &&
                    (e.onclick = Dn);
              }
              for (d in (_e(r, n), (r = null), o))
                if (!n.hasOwnProperty(d) && o.hasOwnProperty(d) && null != o[d])
                  if ("style" === d) {
                    var s = o[d];
                    for (i in s)
                      s.hasOwnProperty(i) && (r || (r = {}), (r[i] = ""));
                  } else
                    "dangerouslySetInnerHTML" !== d &&
                      "children" !== d &&
                      "suppressContentEditableWarning" !== d &&
                      "suppressHydrationWarning" !== d &&
                      "autoFocus" !== d &&
                      (u.hasOwnProperty(d)
                        ? l || (l = [])
                        : (l = l || []).push(d, null));
              for (d in n) {
                var c = n[d];
                if (
                  ((s = null != o ? o[d] : void 0),
                  n.hasOwnProperty(d) && c !== s && (null != c || null != s))
                )
                  if ("style" === d)
                    if (s) {
                      for (i in s)
                        !s.hasOwnProperty(i) ||
                          (c && c.hasOwnProperty(i)) ||
                          (r || (r = {}), (r[i] = ""));
                      for (i in c)
                        c.hasOwnProperty(i) &&
                          s[i] !== c[i] &&
                          (r || (r = {}), (r[i] = c[i]));
                    } else r || (l || (l = []), l.push(d, r)), (r = c);
                  else
                    "dangerouslySetInnerHTML" === d
                      ? ((c = c ? c.__html : void 0),
                        (s = s ? s.__html : void 0),
                        null != c && s !== c && (l = l || []).push(d, c))
                      : "children" === d
                      ? ("string" != typeof c && "number" != typeof c) ||
                        (l = l || []).push(d, "" + c)
                      : "suppressContentEditableWarning" !== d &&
                        "suppressHydrationWarning" !== d &&
                        (u.hasOwnProperty(d)
                          ? (null != c && "onScroll" === d && Rn("scroll", e),
                            l || s === c || (l = []))
                          : "object" == typeof c &&
                            null !== c &&
                            c.$$typeof === L
                          ? c.toString()
                          : (l = l || []).push(d, c));
              }
              r && (l = l || []).push("style", r);
              var d = l;
              (t.updateQueue = d) && (t.flags |= 4);
            }
          }),
          (Qi = function (e, t, r, n) {
            r !== n && (t.flags |= 4);
          });
        var ul = "function" == typeof WeakMap ? WeakMap : Map;
        function sl(e, t, r) {
          ((r = so(-1, r)).tag = 3), (r.payload = { element: null });
          var n = t.value;
          return (
            (r.callback = function () {
              Yl || ((Yl = !0), (Gl = n)), ll(0, t);
            }),
            r
          );
        }
        function cl(e, t, r) {
          (r = so(-1, r)).tag = 3;
          var n = e.type.getDerivedStateFromError;
          if ("function" == typeof n) {
            var a = t.value;
            r.payload = function () {
              return ll(0, t), n(a);
            };
          }
          var o = e.stateNode;
          return (
            null !== o &&
              "function" == typeof o.componentDidCatch &&
              (r.callback = function () {
                "function" != typeof n &&
                  (null === Ql ? (Ql = new Set([this])) : Ql.add(this),
                  ll(0, t));
                var e = t.stack;
                this.componentDidCatch(t.value, {
                  componentStack: null !== e ? e : "",
                });
              }),
            r
          );
        }
        var dl = "function" == typeof WeakSet ? WeakSet : Set;
        function pl(e) {
          var t = e.ref;
          if (null !== t)
            if ("function" == typeof t)
              try {
                t(null);
              } catch (t) {
                Fu(e, t);
              }
            else t.current = null;
        }
        function fl(e, t) {
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
            case 22:
            case 5:
            case 6:
            case 4:
            case 17:
              return;
            case 1:
              if (256 & t.flags && null !== e) {
                var r = e.memoizedProps,
                  n = e.memoizedState;
                (t = (e = t.stateNode).getSnapshotBeforeUpdate(
                  t.elementType === t.type ? r : Ka(t.type, r),
                  n
                )),
                  (e.__reactInternalSnapshotBeforeUpdate = t);
              }
              return;
            case 3:
              return void (256 & t.flags && Wn(t.stateNode.containerInfo));
          }
          throw Error(i(163));
        }
        function ml(e, t, r) {
          switch (r.tag) {
            case 0:
            case 11:
            case 15:
            case 22:
              if (
                null !==
                (t = null !== (t = r.updateQueue) ? t.lastEffect : null)
              ) {
                e = t = t.next;
                do {
                  if (3 == (3 & e.tag)) {
                    var n = e.create;
                    e.destroy = n();
                  }
                  e = e.next;
                } while (e !== t);
              }
              if (
                null !==
                (t = null !== (t = r.updateQueue) ? t.lastEffect : null)
              ) {
                e = t = t.next;
                do {
                  var a = e;
                  (n = a.next),
                    0 != (4 & (a = a.tag)) &&
                      0 != (1 & a) &&
                      (Iu(r, e), Nu(r, e)),
                    (e = n);
                } while (e !== t);
              }
              return;
            case 1:
              return (
                (e = r.stateNode),
                4 & r.flags &&
                  (null === t
                    ? e.componentDidMount()
                    : ((n =
                        r.elementType === r.type
                          ? t.memoizedProps
                          : Ka(r.type, t.memoizedProps)),
                      e.componentDidUpdate(
                        n,
                        t.memoizedState,
                        e.__reactInternalSnapshotBeforeUpdate
                      ))),
                void (null !== (t = r.updateQueue) && mo(r, t, e))
              );
            case 3:
              if (null !== (t = r.updateQueue)) {
                if (((e = null), null !== r.child))
                  switch (r.child.tag) {
                    case 5:
                    case 1:
                      e = r.child.stateNode;
                  }
                mo(r, t, e);
              }
              return;
            case 5:
              return (
                (e = r.stateNode),
                void (
                  null === t &&
                  4 & r.flags &&
                  zn(r.type, r.memoizedProps) &&
                  e.focus()
                )
              );
            case 6:
            case 4:
            case 12:
            case 19:
            case 17:
            case 20:
            case 21:
            case 23:
            case 24:
              return;
            case 13:
              return void (
                null === r.memoizedState &&
                ((r = r.alternate),
                null !== r &&
                  ((r = r.memoizedState),
                  null !== r && ((r = r.dehydrated), null !== r && xt(r))))
              );
          }
          throw Error(i(163));
        }
        function hl(e, t) {
          for (var r = e; ; ) {
            if (5 === r.tag) {
              var n = r.stateNode;
              if (t)
                "function" == typeof (n = n.style).setProperty
                  ? n.setProperty("display", "none", "important")
                  : (n.display = "none");
              else {
                n = r.stateNode;
                var a = r.memoizedProps.style;
                (a =
                  null != a && a.hasOwnProperty("display") ? a.display : null),
                  (n.style.display = we("display", a));
              }
            } else if (6 === r.tag)
              r.stateNode.nodeValue = t ? "" : r.memoizedProps;
            else if (
              ((23 !== r.tag && 24 !== r.tag) ||
                null === r.memoizedState ||
                r === e) &&
              null !== r.child
            ) {
              (r.child.return = r), (r = r.child);
              continue;
            }
            if (r === e) break;
            for (; null === r.sibling; ) {
              if (null === r.return || r.return === e) return;
              r = r.return;
            }
            (r.sibling.return = r.return), (r = r.sibling);
          }
        }
        function vl(e, t) {
          if (_a && "function" == typeof _a.onCommitFiberUnmount)
            try {
              _a.onCommitFiberUnmount(Ea, t);
            } catch (e) {}
          switch (t.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
            case 22:
              if (null !== (e = t.updateQueue) && null !== (e = e.lastEffect)) {
                var r = (e = e.next);
                do {
                  var n = r,
                    a = n.destroy;
                  if (((n = n.tag), void 0 !== a))
                    if (0 != (4 & n)) Iu(t, r);
                    else {
                      n = t;
                      try {
                        a();
                      } catch (e) {
                        Fu(n, e);
                      }
                    }
                  r = r.next;
                } while (r !== e);
              }
              break;
            case 1:
              if (
                (pl(t),
                "function" == typeof (e = t.stateNode).componentWillUnmount)
              )
                try {
                  (e.props = t.memoizedProps),
                    (e.state = t.memoizedState),
                    e.componentWillUnmount();
                } catch (e) {
                  Fu(t, e);
                }
              break;
            case 5:
              pl(t);
              break;
            case 4:
              El(e, t);
          }
        }
        function bl(e) {
          (e.alternate = null),
            (e.child = null),
            (e.dependencies = null),
            (e.firstEffect = null),
            (e.lastEffect = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.return = null),
            (e.updateQueue = null);
        }
        function yl(e) {
          return 5 === e.tag || 3 === e.tag || 4 === e.tag;
        }
        function gl(e) {
          e: {
            for (var t = e.return; null !== t; ) {
              if (yl(t)) break e;
              t = t.return;
            }
            throw Error(i(160));
          }
          var r = t;
          switch (((t = r.stateNode), r.tag)) {
            case 5:
              var n = !1;
              break;
            case 3:
            case 4:
              (t = t.containerInfo), (n = !0);
              break;
            default:
              throw Error(i(161));
          }
          16 & r.flags && (be(t, ""), (r.flags &= -17));
          e: t: for (r = e; ; ) {
            for (; null === r.sibling; ) {
              if (null === r.return || yl(r.return)) {
                r = null;
                break e;
              }
              r = r.return;
            }
            for (
              r.sibling.return = r.return, r = r.sibling;
              5 !== r.tag && 6 !== r.tag && 18 !== r.tag;

            ) {
              if (2 & r.flags) continue t;
              if (null === r.child || 4 === r.tag) continue t;
              (r.child.return = r), (r = r.child);
            }
            if (!(2 & r.flags)) {
              r = r.stateNode;
              break e;
            }
          }
          n ? wl(e, r, t) : xl(e, r, t);
        }
        function wl(e, t, r) {
          var n = e.tag,
            a = 5 === n || 6 === n;
          if (a)
            (e = a ? e.stateNode : e.stateNode.instance),
              t
                ? 8 === r.nodeType
                  ? r.parentNode.insertBefore(e, t)
                  : r.insertBefore(e, t)
                : (8 === r.nodeType
                    ? (t = r.parentNode).insertBefore(e, r)
                    : (t = r).appendChild(e),
                  null != (r = r._reactRootContainer) ||
                    null !== t.onclick ||
                    (t.onclick = Dn));
          else if (4 !== n && null !== (e = e.child))
            for (wl(e, t, r), e = e.sibling; null !== e; )
              wl(e, t, r), (e = e.sibling);
        }
        function xl(e, t, r) {
          var n = e.tag,
            a = 5 === n || 6 === n;
          if (a)
            (e = a ? e.stateNode : e.stateNode.instance),
              t ? r.insertBefore(e, t) : r.appendChild(e);
          else if (4 !== n && null !== (e = e.child))
            for (xl(e, t, r), e = e.sibling; null !== e; )
              xl(e, t, r), (e = e.sibling);
        }
        function El(e, t) {
          for (var r, n, a = t, o = !1; ; ) {
            if (!o) {
              o = a.return;
              e: for (;;) {
                if (null === o) throw Error(i(160));
                switch (((r = o.stateNode), o.tag)) {
                  case 5:
                    n = !1;
                    break e;
                  case 3:
                  case 4:
                    (r = r.containerInfo), (n = !0);
                    break e;
                }
                o = o.return;
              }
              o = !0;
            }
            if (5 === a.tag || 6 === a.tag) {
              e: for (var l = e, u = a, s = u; ; )
                if ((vl(l, s), null !== s.child && 4 !== s.tag))
                  (s.child.return = s), (s = s.child);
                else {
                  if (s === u) break e;
                  for (; null === s.sibling; ) {
                    if (null === s.return || s.return === u) break e;
                    s = s.return;
                  }
                  (s.sibling.return = s.return), (s = s.sibling);
                }
              n
                ? ((l = r),
                  (u = a.stateNode),
                  8 === l.nodeType
                    ? l.parentNode.removeChild(u)
                    : l.removeChild(u))
                : r.removeChild(a.stateNode);
            } else if (4 === a.tag) {
              if (null !== a.child) {
                (r = a.stateNode.containerInfo),
                  (n = !0),
                  (a.child.return = a),
                  (a = a.child);
                continue;
              }
            } else if ((vl(e, a), null !== a.child)) {
              (a.child.return = a), (a = a.child);
              continue;
            }
            if (a === t) break;
            for (; null === a.sibling; ) {
              if (null === a.return || a.return === t) return;
              4 === (a = a.return).tag && (o = !1);
            }
            (a.sibling.return = a.return), (a = a.sibling);
          }
        }
        function _l(e, t) {
          switch (t.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
            case 22:
              var r = t.updateQueue;
              if (null !== (r = null !== r ? r.lastEffect : null)) {
                var n = (r = r.next);
                do {
                  3 == (3 & n.tag) &&
                    ((e = n.destroy),
                    (n.destroy = void 0),
                    void 0 !== e && e()),
                    (n = n.next);
                } while (n !== r);
              }
              return;
            case 1:
            case 12:
            case 17:
              return;
            case 5:
              if (null != (r = t.stateNode)) {
                n = t.memoizedProps;
                var a = null !== e ? e.memoizedProps : n;
                e = t.type;
                var o = t.updateQueue;
                if (((t.updateQueue = null), null !== o)) {
                  for (
                    r[Jn] = n,
                      "input" === e &&
                        "radio" === n.type &&
                        null != n.name &&
                        te(r, n),
                      Ce(e, a),
                      t = Ce(e, n),
                      a = 0;
                    a < o.length;
                    a += 2
                  ) {
                    var l = o[a],
                      u = o[a + 1];
                    "style" === l
                      ? xe(r, u)
                      : "dangerouslySetInnerHTML" === l
                      ? ve(r, u)
                      : "children" === l
                      ? be(r, u)
                      : w(r, l, u, t);
                  }
                  switch (e) {
                    case "input":
                      re(r, n);
                      break;
                    case "textarea":
                      se(r, n);
                      break;
                    case "select":
                      (e = r._wrapperState.wasMultiple),
                        (r._wrapperState.wasMultiple = !!n.multiple),
                        null != (o = n.value)
                          ? ie(r, !!n.multiple, o, !1)
                          : e !== !!n.multiple &&
                            (null != n.defaultValue
                              ? ie(r, !!n.multiple, n.defaultValue, !0)
                              : ie(r, !!n.multiple, n.multiple ? [] : "", !1));
                  }
                }
              }
              return;
            case 6:
              if (null === t.stateNode) throw Error(i(162));
              return void (t.stateNode.nodeValue = t.memoizedProps);
            case 3:
              return void (
                (r = t.stateNode).hydrate &&
                ((r.hydrate = !1), xt(r.containerInfo))
              );
            case 13:
              return (
                null !== t.memoizedState && ((zl = za()), hl(t.child, !0)),
                void Cl(t)
              );
            case 19:
              return void Cl(t);
            case 23:
            case 24:
              return void hl(t, null !== t.memoizedState);
          }
          throw Error(i(163));
        }
        function Cl(e) {
          var t = e.updateQueue;
          if (null !== t) {
            e.updateQueue = null;
            var r = e.stateNode;
            null === r && (r = e.stateNode = new dl()),
              t.forEach(function (t) {
                var n = Du.bind(null, e, t);
                r.has(t) || (r.add(t), t.then(n, n));
              });
          }
        }
        function kl(e, t) {
          return (
            null !== e &&
            (null === (e = e.memoizedState) || null !== e.dehydrated) &&
            null !== (t = t.memoizedState) &&
            null === t.dehydrated
          );
        }
        var Pl = Math.ceil,
          Sl = x.ReactCurrentDispatcher,
          ql = x.ReactCurrentOwner,
          Rl = 0,
          Tl = null,
          Ol = null,
          Ml = 0,
          Nl = 0,
          Il = ua(0),
          Ll = 0,
          Al = null,
          Fl = 0,
          jl = 0,
          Dl = 0,
          Ul = 0,
          Bl = null,
          zl = 0,
          Hl = 1 / 0;
        function Vl() {
          Hl = za() + 500;
        }
        var $l,
          Wl = null,
          Yl = !1,
          Gl = null,
          Ql = null,
          Kl = !1,
          Xl = null,
          Jl = 90,
          Zl = [],
          eu = [],
          tu = null,
          ru = 0,
          nu = null,
          au = -1,
          ou = 0,
          iu = 0,
          lu = null,
          uu = !1;
        function su() {
          return 0 != (48 & Rl) ? za() : -1 !== au ? au : (au = za());
        }
        function cu(e) {
          if (0 == (2 & (e = e.mode))) return 1;
          if (0 == (4 & e)) return 99 === Ha() ? 1 : 2;
          if ((0 === ou && (ou = Fl), 0 !== Qa.transition)) {
            0 !== iu && (iu = null !== Bl ? Bl.pendingLanes : 0), (e = ou);
            var t = 4186112 & ~iu;
            return (
              0 == (t &= -t) &&
                0 == (t = (e = 4186112 & ~e) & -e) &&
                (t = 8192),
              t
            );
          }
          return (
            (e = Ha()),
            (e = Dt(
              0 != (4 & Rl) && 98 === e
                ? 12
                : (e = (function (e) {
                    switch (e) {
                      case 99:
                        return 15;
                      case 98:
                        return 10;
                      case 97:
                      case 96:
                        return 8;
                      case 95:
                        return 2;
                      default:
                        return 0;
                    }
                  })(e)),
              ou
            ))
          );
        }
        function du(e, t, r) {
          if (50 < ru) throw ((ru = 0), (nu = null), Error(i(185)));
          if (null === (e = pu(e, t))) return null;
          zt(e, t, r), e === Tl && ((Dl |= t), 4 === Ll && hu(e, Ml));
          var n = Ha();
          1 === t
            ? 0 != (8 & Rl) && 0 == (48 & Rl)
              ? vu(e)
              : (fu(e, r), 0 === Rl && (Vl(), Ya()))
            : (0 == (4 & Rl) ||
                (98 !== n && 99 !== n) ||
                (null === tu ? (tu = new Set([e])) : tu.add(e)),
              fu(e, r)),
            (Bl = e);
        }
        function pu(e, t) {
          e.lanes |= t;
          var r = e.alternate;
          for (null !== r && (r.lanes |= t), r = e, e = e.return; null !== e; )
            (e.childLanes |= t),
              null !== (r = e.alternate) && (r.childLanes |= t),
              (r = e),
              (e = e.return);
          return 3 === r.tag ? r.stateNode : null;
        }
        function fu(e, t) {
          for (
            var r = e.callbackNode,
              n = e.suspendedLanes,
              a = e.pingedLanes,
              o = e.expirationTimes,
              l = e.pendingLanes;
            0 < l;

          ) {
            var u = 31 - Ht(l),
              s = 1 << u,
              c = o[u];
            if (-1 === c) {
              if (0 == (s & n) || 0 != (s & a)) {
                (c = t), At(s);
                var d = Lt;
                o[u] = 10 <= d ? c + 250 : 6 <= d ? c + 5e3 : -1;
              }
            } else c <= t && (e.expiredLanes |= s);
            l &= ~s;
          }
          if (((n = Ft(e, e === Tl ? Ml : 0)), (t = Lt), 0 === n))
            null !== r &&
              (r !== Aa && Pa(r),
              (e.callbackNode = null),
              (e.callbackPriority = 0));
          else {
            if (null !== r) {
              if (e.callbackPriority === t) return;
              r !== Aa && Pa(r);
            }
            15 === t
              ? ((r = vu.bind(null, e)),
                null === ja ? ((ja = [r]), (Da = ka(Oa, Ga))) : ja.push(r),
                (r = Aa))
              : 14 === t
              ? (r = Wa(99, vu.bind(null, e)))
              : ((r = (function (e) {
                  switch (e) {
                    case 15:
                    case 14:
                      return 99;
                    case 13:
                    case 12:
                    case 11:
                    case 10:
                      return 98;
                    case 9:
                    case 8:
                    case 7:
                    case 6:
                    case 4:
                    case 5:
                      return 97;
                    case 3:
                    case 2:
                    case 1:
                      return 95;
                    case 0:
                      return 90;
                    default:
                      throw Error(i(358, e));
                  }
                })(t)),
                (r = Wa(r, mu.bind(null, e)))),
              (e.callbackPriority = t),
              (e.callbackNode = r);
          }
        }
        function mu(e) {
          if (((au = -1), (iu = ou = 0), 0 != (48 & Rl))) throw Error(i(327));
          var t = e.callbackNode;
          if (Mu() && e.callbackNode !== t) return null;
          var r = Ft(e, e === Tl ? Ml : 0);
          if (0 === r) return null;
          var n = r,
            a = Rl;
          Rl |= 16;
          var o = _u();
          for ((Tl === e && Ml === n) || (Vl(), xu(e, n)); ; )
            try {
              Pu();
              break;
            } catch (t) {
              Eu(e, t);
            }
          if (
            (to(),
            (Sl.current = o),
            (Rl = a),
            null !== Ol ? (n = 0) : ((Tl = null), (Ml = 0), (n = Ll)),
            0 != (Fl & Dl))
          )
            xu(e, 0);
          else if (0 !== n) {
            if (
              (2 === n &&
                ((Rl |= 64),
                e.hydrate && ((e.hydrate = !1), Wn(e.containerInfo)),
                0 !== (r = jt(e)) && (n = Cu(e, r))),
              1 === n)
            )
              throw ((t = Al), xu(e, 0), hu(e, r), fu(e, za()), t);
            switch (
              ((e.finishedWork = e.current.alternate), (e.finishedLanes = r), n)
            ) {
              case 0:
              case 1:
                throw Error(i(345));
              case 2:
              case 5:
                Ru(e);
                break;
              case 3:
                if (
                  (hu(e, r), (62914560 & r) === r && 10 < (n = zl + 500 - za()))
                ) {
                  if (0 !== Ft(e, 0)) break;
                  if (((a = e.suspendedLanes) & r) !== r) {
                    su(), (e.pingedLanes |= e.suspendedLanes & a);
                    break;
                  }
                  e.timeoutHandle = Vn(Ru.bind(null, e), n);
                  break;
                }
                Ru(e);
                break;
              case 4:
                if ((hu(e, r), (4186112 & r) === r)) break;
                for (n = e.eventTimes, a = -1; 0 < r; ) {
                  var l = 31 - Ht(r);
                  (o = 1 << l), (l = n[l]) > a && (a = l), (r &= ~o);
                }
                if (
                  ((r = a),
                  10 <
                    (r =
                      (120 > (r = za() - r)
                        ? 120
                        : 480 > r
                        ? 480
                        : 1080 > r
                        ? 1080
                        : 1920 > r
                        ? 1920
                        : 3e3 > r
                        ? 3e3
                        : 4320 > r
                        ? 4320
                        : 1960 * Pl(r / 1960)) - r))
                ) {
                  e.timeoutHandle = Vn(Ru.bind(null, e), r);
                  break;
                }
                Ru(e);
                break;
              default:
                throw Error(i(329));
            }
          }
          return fu(e, za()), e.callbackNode === t ? mu.bind(null, e) : null;
        }
        function hu(e, t) {
          for (
            t &= ~Ul,
              t &= ~Dl,
              e.suspendedLanes |= t,
              e.pingedLanes &= ~t,
              e = e.expirationTimes;
            0 < t;

          ) {
            var r = 31 - Ht(t),
              n = 1 << r;
            (e[r] = -1), (t &= ~n);
          }
        }
        function vu(e) {
          if (0 != (48 & Rl)) throw Error(i(327));
          if ((Mu(), e === Tl && 0 != (e.expiredLanes & Ml))) {
            var t = Ml,
              r = Cu(e, t);
            0 != (Fl & Dl) && (r = Cu(e, (t = Ft(e, t))));
          } else r = Cu(e, (t = Ft(e, 0)));
          if (
            (0 !== e.tag &&
              2 === r &&
              ((Rl |= 64),
              e.hydrate && ((e.hydrate = !1), Wn(e.containerInfo)),
              0 !== (t = jt(e)) && (r = Cu(e, t))),
            1 === r)
          )
            throw ((r = Al), xu(e, 0), hu(e, t), fu(e, za()), r);
          return (
            (e.finishedWork = e.current.alternate),
            (e.finishedLanes = t),
            Ru(e),
            fu(e, za()),
            null
          );
        }
        function bu(e, t) {
          var r = Rl;
          Rl |= 1;
          try {
            return e(t);
          } finally {
            0 === (Rl = r) && (Vl(), Ya());
          }
        }
        function yu(e, t) {
          var r = Rl;
          (Rl &= -2), (Rl |= 8);
          try {
            return e(t);
          } finally {
            0 === (Rl = r) && (Vl(), Ya());
          }
        }
        function gu(e, t) {
          ca(Il, Nl), (Nl |= t), (Fl |= t);
        }
        function wu() {
          (Nl = Il.current), sa(Il);
        }
        function xu(e, t) {
          (e.finishedWork = null), (e.finishedLanes = 0);
          var r = e.timeoutHandle;
          if ((-1 !== r && ((e.timeoutHandle = -1), $n(r)), null !== Ol))
            for (r = Ol.return; null !== r; ) {
              var n = r;
              switch (n.tag) {
                case 1:
                  null != (n = n.type.childContextTypes) && ba();
                  break;
                case 3:
                  Io(), sa(fa), sa(pa), Qo();
                  break;
                case 5:
                  Ao(n);
                  break;
                case 4:
                  Io();
                  break;
                case 13:
                case 19:
                  sa(Fo);
                  break;
                case 10:
                  ro(n);
                  break;
                case 23:
                case 24:
                  wu();
              }
              r = r.return;
            }
          (Tl = e),
            (Ol = Hu(e.current, null)),
            (Ml = Nl = Fl = t),
            (Ll = 0),
            (Al = null),
            (Ul = Dl = jl = 0);
        }
        function Eu(e, t) {
          for (;;) {
            var r = Ol;
            try {
              if ((to(), (Ko.current = Oi), ri)) {
                for (var n = Zo.memoizedState; null !== n; ) {
                  var a = n.queue;
                  null !== a && (a.pending = null), (n = n.next);
                }
                ri = !1;
              }
              if (
                ((Jo = 0),
                (ti = ei = Zo = null),
                (ni = !1),
                (ql.current = null),
                null === r || null === r.return)
              ) {
                (Ll = 1), (Al = t), (Ol = null);
                break;
              }
              e: {
                var o = e,
                  i = r.return,
                  l = r,
                  u = t;
                if (
                  ((t = Ml),
                  (l.flags |= 2048),
                  (l.firstEffect = l.lastEffect = null),
                  null !== u &&
                    "object" == typeof u &&
                    "function" == typeof u.then)
                ) {
                  var s = u;
                  if (0 == (2 & l.mode)) {
                    var c = l.alternate;
                    c
                      ? ((l.updateQueue = c.updateQueue),
                        (l.memoizedState = c.memoizedState),
                        (l.lanes = c.lanes))
                      : ((l.updateQueue = null), (l.memoizedState = null));
                  }
                  var d = 0 != (1 & Fo.current),
                    p = i;
                  do {
                    var f;
                    if ((f = 13 === p.tag)) {
                      var m = p.memoizedState;
                      if (null !== m) f = null !== m.dehydrated;
                      else {
                        var h = p.memoizedProps;
                        f =
                          void 0 !== h.fallback &&
                          (!0 !== h.unstable_avoidThisFallback || !d);
                      }
                    }
                    if (f) {
                      var v = p.updateQueue;
                      if (null === v) {
                        var b = new Set();
                        b.add(s), (p.updateQueue = b);
                      } else v.add(s);
                      if (0 == (2 & p.mode)) {
                        if (
                          ((p.flags |= 64),
                          (l.flags |= 16384),
                          (l.flags &= -2981),
                          1 === l.tag)
                        )
                          if (null === l.alternate) l.tag = 17;
                          else {
                            var y = so(-1, 1);
                            (y.tag = 2), co(l, y);
                          }
                        l.lanes |= 1;
                        break e;
                      }
                      (u = void 0), (l = t);
                      var g = o.pingCache;
                      if (
                        (null === g
                          ? ((g = o.pingCache = new ul()),
                            (u = new Set()),
                            g.set(s, u))
                          : void 0 === (u = g.get(s)) &&
                            ((u = new Set()), g.set(s, u)),
                        !u.has(l))
                      ) {
                        u.add(l);
                        var w = ju.bind(null, o, s, l);
                        s.then(w, w);
                      }
                      (p.flags |= 4096), (p.lanes = t);
                      break e;
                    }
                    p = p.return;
                  } while (null !== p);
                  u = Error(
                    (Y(l.type) || "A React component") +
                      " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display."
                  );
                }
                5 !== Ll && (Ll = 2), (u = il(u, l)), (p = i);
                do {
                  switch (p.tag) {
                    case 3:
                      (o = u),
                        (p.flags |= 4096),
                        (t &= -t),
                        (p.lanes |= t),
                        po(p, sl(0, o, t));
                      break e;
                    case 1:
                      o = u;
                      var x = p.type,
                        E = p.stateNode;
                      if (
                        0 == (64 & p.flags) &&
                        ("function" == typeof x.getDerivedStateFromError ||
                          (null !== E &&
                            "function" == typeof E.componentDidCatch &&
                            (null === Ql || !Ql.has(E))))
                      ) {
                        (p.flags |= 4096),
                          (t &= -t),
                          (p.lanes |= t),
                          po(p, cl(p, o, t));
                        break e;
                      }
                  }
                  p = p.return;
                } while (null !== p);
              }
              qu(r);
            } catch (e) {
              (t = e), Ol === r && null !== r && (Ol = r = r.return);
              continue;
            }
            break;
          }
        }
        function _u() {
          var e = Sl.current;
          return (Sl.current = Oi), null === e ? Oi : e;
        }
        function Cu(e, t) {
          var r = Rl;
          Rl |= 16;
          var n = _u();
          for ((Tl === e && Ml === t) || xu(e, t); ; )
            try {
              ku();
              break;
            } catch (t) {
              Eu(e, t);
            }
          if ((to(), (Rl = r), (Sl.current = n), null !== Ol))
            throw Error(i(261));
          return (Tl = null), (Ml = 0), Ll;
        }
        function ku() {
          for (; null !== Ol; ) Su(Ol);
        }
        function Pu() {
          for (; null !== Ol && !Sa(); ) Su(Ol);
        }
        function Su(e) {
          var t = $l(e.alternate, e, Nl);
          (e.memoizedProps = e.pendingProps),
            null === t ? qu(e) : (Ol = t),
            (ql.current = null);
        }
        function qu(e) {
          var t = e;
          do {
            var r = t.alternate;
            if (((e = t.return), 0 == (2048 & t.flags))) {
              if (null !== (r = al(r, t, Nl))) return void (Ol = r);
              if (
                (24 !== (r = t).tag && 23 !== r.tag) ||
                null === r.memoizedState ||
                0 != (1073741824 & Nl) ||
                0 == (4 & r.mode)
              ) {
                for (var n = 0, a = r.child; null !== a; )
                  (n |= a.lanes | a.childLanes), (a = a.sibling);
                r.childLanes = n;
              }
              null !== e &&
                0 == (2048 & e.flags) &&
                (null === e.firstEffect && (e.firstEffect = t.firstEffect),
                null !== t.lastEffect &&
                  (null !== e.lastEffect &&
                    (e.lastEffect.nextEffect = t.firstEffect),
                  (e.lastEffect = t.lastEffect)),
                1 < t.flags &&
                  (null !== e.lastEffect
                    ? (e.lastEffect.nextEffect = t)
                    : (e.firstEffect = t),
                  (e.lastEffect = t)));
            } else {
              if (null !== (r = ol(t))) return (r.flags &= 2047), void (Ol = r);
              null !== e &&
                ((e.firstEffect = e.lastEffect = null), (e.flags |= 2048));
            }
            if (null !== (t = t.sibling)) return void (Ol = t);
            Ol = t = e;
          } while (null !== t);
          0 === Ll && (Ll = 5);
        }
        function Ru(e) {
          var t = Ha();
          return $a(99, Tu.bind(null, e, t)), null;
        }
        function Tu(e, t) {
          do {
            Mu();
          } while (null !== Xl);
          if (0 != (48 & Rl)) throw Error(i(327));
          var r = e.finishedWork;
          if (null === r) return null;
          if (((e.finishedWork = null), (e.finishedLanes = 0), r === e.current))
            throw Error(i(177));
          e.callbackNode = null;
          var n = r.lanes | r.childLanes,
            a = n,
            o = e.pendingLanes & ~a;
          (e.pendingLanes = a),
            (e.suspendedLanes = 0),
            (e.pingedLanes = 0),
            (e.expiredLanes &= a),
            (e.mutableReadLanes &= a),
            (e.entangledLanes &= a),
            (a = e.entanglements);
          for (var l = e.eventTimes, u = e.expirationTimes; 0 < o; ) {
            var s = 31 - Ht(o),
              c = 1 << s;
            (a[s] = 0), (l[s] = -1), (u[s] = -1), (o &= ~c);
          }
          if (
            (null !== tu && 0 == (24 & n) && tu.has(e) && tu.delete(e),
            e === Tl && ((Ol = Tl = null), (Ml = 0)),
            1 < r.flags
              ? null !== r.lastEffect
                ? ((r.lastEffect.nextEffect = r), (n = r.firstEffect))
                : (n = r)
              : (n = r.firstEffect),
            null !== n)
          ) {
            if (
              ((a = Rl),
              (Rl |= 32),
              (ql.current = null),
              (Un = Gt),
              vn((l = hn())))
            ) {
              if ("selectionStart" in l)
                u = { start: l.selectionStart, end: l.selectionEnd };
              else
                e: if (
                  ((u = ((u = l.ownerDocument) && u.defaultView) || window),
                  (c = u.getSelection && u.getSelection()) &&
                    0 !== c.rangeCount)
                ) {
                  (u = c.anchorNode),
                    (o = c.anchorOffset),
                    (s = c.focusNode),
                    (c = c.focusOffset);
                  try {
                    u.nodeType, s.nodeType;
                  } catch (e) {
                    u = null;
                    break e;
                  }
                  var d = 0,
                    p = -1,
                    f = -1,
                    m = 0,
                    h = 0,
                    v = l,
                    b = null;
                  t: for (;;) {
                    for (
                      var y;
                      v !== u || (0 !== o && 3 !== v.nodeType) || (p = d + o),
                        v !== s || (0 !== c && 3 !== v.nodeType) || (f = d + c),
                        3 === v.nodeType && (d += v.nodeValue.length),
                        null !== (y = v.firstChild);

                    )
                      (b = v), (v = y);
                    for (;;) {
                      if (v === l) break t;
                      if (
                        (b === u && ++m === o && (p = d),
                        b === s && ++h === c && (f = d),
                        null !== (y = v.nextSibling))
                      )
                        break;
                      b = (v = b).parentNode;
                    }
                    v = y;
                  }
                  u = -1 === p || -1 === f ? null : { start: p, end: f };
                } else u = null;
              u = u || { start: 0, end: 0 };
            } else u = null;
            (Bn = { focusedElem: l, selectionRange: u }),
              (Gt = !1),
              (lu = null),
              (uu = !1),
              (Wl = n);
            do {
              try {
                Ou();
              } catch (e) {
                if (null === Wl) throw Error(i(330));
                Fu(Wl, e), (Wl = Wl.nextEffect);
              }
            } while (null !== Wl);
            (lu = null), (Wl = n);
            do {
              try {
                for (l = e; null !== Wl; ) {
                  var g = Wl.flags;
                  if ((16 & g && be(Wl.stateNode, ""), 128 & g)) {
                    var w = Wl.alternate;
                    if (null !== w) {
                      var x = w.ref;
                      null !== x &&
                        ("function" == typeof x ? x(null) : (x.current = null));
                    }
                  }
                  switch (1038 & g) {
                    case 2:
                      gl(Wl), (Wl.flags &= -3);
                      break;
                    case 6:
                      gl(Wl), (Wl.flags &= -3), _l(Wl.alternate, Wl);
                      break;
                    case 1024:
                      Wl.flags &= -1025;
                      break;
                    case 1028:
                      (Wl.flags &= -1025), _l(Wl.alternate, Wl);
                      break;
                    case 4:
                      _l(Wl.alternate, Wl);
                      break;
                    case 8:
                      El(l, (u = Wl));
                      var E = u.alternate;
                      bl(u), null !== E && bl(E);
                  }
                  Wl = Wl.nextEffect;
                }
              } catch (e) {
                if (null === Wl) throw Error(i(330));
                Fu(Wl, e), (Wl = Wl.nextEffect);
              }
            } while (null !== Wl);
            if (
              ((x = Bn),
              (w = hn()),
              (g = x.focusedElem),
              (l = x.selectionRange),
              w !== g &&
                g &&
                g.ownerDocument &&
                mn(g.ownerDocument.documentElement, g))
            ) {
              null !== l &&
                vn(g) &&
                ((w = l.start),
                void 0 === (x = l.end) && (x = w),
                "selectionStart" in g
                  ? ((g.selectionStart = w),
                    (g.selectionEnd = Math.min(x, g.value.length)))
                  : (x =
                      ((w = g.ownerDocument || document) && w.defaultView) ||
                      window).getSelection &&
                    ((x = x.getSelection()),
                    (u = g.textContent.length),
                    (E = Math.min(l.start, u)),
                    (l = void 0 === l.end ? E : Math.min(l.end, u)),
                    !x.extend && E > l && ((u = l), (l = E), (E = u)),
                    (u = fn(g, E)),
                    (o = fn(g, l)),
                    u &&
                      o &&
                      (1 !== x.rangeCount ||
                        x.anchorNode !== u.node ||
                        x.anchorOffset !== u.offset ||
                        x.focusNode !== o.node ||
                        x.focusOffset !== o.offset) &&
                      ((w = w.createRange()).setStart(u.node, u.offset),
                      x.removeAllRanges(),
                      E > l
                        ? (x.addRange(w), x.extend(o.node, o.offset))
                        : (w.setEnd(o.node, o.offset), x.addRange(w))))),
                (w = []);
              for (x = g; (x = x.parentNode); )
                1 === x.nodeType &&
                  w.push({ element: x, left: x.scrollLeft, top: x.scrollTop });
              for (
                "function" == typeof g.focus && g.focus(), g = 0;
                g < w.length;
                g++
              )
                ((x = w[g]).element.scrollLeft = x.left),
                  (x.element.scrollTop = x.top);
            }
            (Gt = !!Un), (Bn = Un = null), (e.current = r), (Wl = n);
            do {
              try {
                for (g = e; null !== Wl; ) {
                  var _ = Wl.flags;
                  if ((36 & _ && ml(g, Wl.alternate, Wl), 128 & _)) {
                    w = void 0;
                    var C = Wl.ref;
                    if (null !== C) {
                      var k = Wl.stateNode;
                      Wl.tag,
                        (w = k),
                        "function" == typeof C ? C(w) : (C.current = w);
                    }
                  }
                  Wl = Wl.nextEffect;
                }
              } catch (e) {
                if (null === Wl) throw Error(i(330));
                Fu(Wl, e), (Wl = Wl.nextEffect);
              }
            } while (null !== Wl);
            (Wl = null), Fa(), (Rl = a);
          } else e.current = r;
          if (Kl) (Kl = !1), (Xl = e), (Jl = t);
          else
            for (Wl = n; null !== Wl; )
              (t = Wl.nextEffect),
                (Wl.nextEffect = null),
                8 & Wl.flags &&
                  (((_ = Wl).sibling = null), (_.stateNode = null)),
                (Wl = t);
          if (
            (0 === (n = e.pendingLanes) && (Ql = null),
            1 === n ? (e === nu ? ru++ : ((ru = 0), (nu = e))) : (ru = 0),
            (r = r.stateNode),
            _a && "function" == typeof _a.onCommitFiberRoot)
          )
            try {
              _a.onCommitFiberRoot(Ea, r, void 0, 64 == (64 & r.current.flags));
            } catch (e) {}
          if ((fu(e, za()), Yl)) throw ((Yl = !1), (e = Gl), (Gl = null), e);
          return 0 != (8 & Rl) || Ya(), null;
        }
        function Ou() {
          for (; null !== Wl; ) {
            var e = Wl.alternate;
            uu ||
              null === lu ||
              (0 != (8 & Wl.flags)
                ? Ze(Wl, lu) && (uu = !0)
                : 13 === Wl.tag && kl(e, Wl) && Ze(Wl, lu) && (uu = !0));
            var t = Wl.flags;
            0 != (256 & t) && fl(e, Wl),
              0 == (512 & t) ||
                Kl ||
                ((Kl = !0),
                Wa(97, function () {
                  return Mu(), null;
                })),
              (Wl = Wl.nextEffect);
          }
        }
        function Mu() {
          if (90 !== Jl) {
            var e = 97 < Jl ? 97 : Jl;
            return (Jl = 90), $a(e, Lu);
          }
          return !1;
        }
        function Nu(e, t) {
          Zl.push(t, e),
            Kl ||
              ((Kl = !0),
              Wa(97, function () {
                return Mu(), null;
              }));
        }
        function Iu(e, t) {
          eu.push(t, e),
            Kl ||
              ((Kl = !0),
              Wa(97, function () {
                return Mu(), null;
              }));
        }
        function Lu() {
          if (null === Xl) return !1;
          var e = Xl;
          if (((Xl = null), 0 != (48 & Rl))) throw Error(i(331));
          var t = Rl;
          Rl |= 32;
          var r = eu;
          eu = [];
          for (var n = 0; n < r.length; n += 2) {
            var a = r[n],
              o = r[n + 1],
              l = a.destroy;
            if (((a.destroy = void 0), "function" == typeof l))
              try {
                l();
              } catch (e) {
                if (null === o) throw Error(i(330));
                Fu(o, e);
              }
          }
          for (r = Zl, Zl = [], n = 0; n < r.length; n += 2) {
            (a = r[n]), (o = r[n + 1]);
            try {
              var u = a.create;
              a.destroy = u();
            } catch (e) {
              if (null === o) throw Error(i(330));
              Fu(o, e);
            }
          }
          for (u = e.current.firstEffect; null !== u; )
            (e = u.nextEffect),
              (u.nextEffect = null),
              8 & u.flags && ((u.sibling = null), (u.stateNode = null)),
              (u = e);
          return (Rl = t), Ya(), !0;
        }
        function Au(e, t, r) {
          co(e, (t = sl(0, (t = il(r, t)), 1))),
            (t = su()),
            null !== (e = pu(e, 1)) && (zt(e, 1, t), fu(e, t));
        }
        function Fu(e, t) {
          if (3 === e.tag) Au(e, e, t);
          else
            for (var r = e.return; null !== r; ) {
              if (3 === r.tag) {
                Au(r, e, t);
                break;
              }
              if (1 === r.tag) {
                var n = r.stateNode;
                if (
                  "function" == typeof r.type.getDerivedStateFromError ||
                  ("function" == typeof n.componentDidCatch &&
                    (null === Ql || !Ql.has(n)))
                ) {
                  var a = cl(r, (e = il(t, e)), 1);
                  if ((co(r, a), (a = su()), null !== (r = pu(r, 1))))
                    zt(r, 1, a), fu(r, a);
                  else if (
                    "function" == typeof n.componentDidCatch &&
                    (null === Ql || !Ql.has(n))
                  )
                    try {
                      n.componentDidCatch(t, e);
                    } catch (e) {}
                  break;
                }
              }
              r = r.return;
            }
        }
        function ju(e, t, r) {
          var n = e.pingCache;
          null !== n && n.delete(t),
            (t = su()),
            (e.pingedLanes |= e.suspendedLanes & r),
            Tl === e &&
              (Ml & r) === r &&
              (4 === Ll ||
              (3 === Ll && (62914560 & Ml) === Ml && 500 > za() - zl)
                ? xu(e, 0)
                : (Ul |= r)),
            fu(e, t);
        }
        function Du(e, t) {
          var r = e.stateNode;
          null !== r && r.delete(t),
            0 == (t = 0) &&
              (0 == (2 & (t = e.mode))
                ? (t = 1)
                : 0 == (4 & t)
                ? (t = 99 === Ha() ? 1 : 2)
                : (0 === ou && (ou = Fl),
                  0 === (t = Ut(62914560 & ~ou)) && (t = 4194304))),
            (r = su()),
            null !== (e = pu(e, t)) && (zt(e, t, r), fu(e, r));
        }
        function Uu(e, t, r, n) {
          (this.tag = e),
            (this.key = r),
            (this.sibling =
              this.child =
              this.return =
              this.stateNode =
              this.type =
              this.elementType =
                null),
            (this.index = 0),
            (this.ref = null),
            (this.pendingProps = t),
            (this.dependencies =
              this.memoizedState =
              this.updateQueue =
              this.memoizedProps =
                null),
            (this.mode = n),
            (this.flags = 0),
            (this.lastEffect = this.firstEffect = this.nextEffect = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null);
        }
        function Bu(e, t, r, n) {
          return new Uu(e, t, r, n);
        }
        function zu(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function Hu(e, t) {
          var r = e.alternate;
          return (
            null === r
              ? (((r = Bu(e.tag, t, e.key, e.mode)).elementType =
                  e.elementType),
                (r.type = e.type),
                (r.stateNode = e.stateNode),
                (r.alternate = e),
                (e.alternate = r))
              : ((r.pendingProps = t),
                (r.type = e.type),
                (r.flags = 0),
                (r.nextEffect = null),
                (r.firstEffect = null),
                (r.lastEffect = null)),
            (r.childLanes = e.childLanes),
            (r.lanes = e.lanes),
            (r.child = e.child),
            (r.memoizedProps = e.memoizedProps),
            (r.memoizedState = e.memoizedState),
            (r.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (r.dependencies =
              null === t
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext }),
            (r.sibling = e.sibling),
            (r.index = e.index),
            (r.ref = e.ref),
            r
          );
        }
        function Vu(e, t, r, n, a, o) {
          var l = 2;
          if (((n = e), "function" == typeof e)) zu(e) && (l = 1);
          else if ("string" == typeof e) l = 5;
          else
            e: switch (e) {
              case C:
                return $u(r.children, a, o, t);
              case A:
                (l = 8), (a |= 16);
                break;
              case k:
                (l = 8), (a |= 1);
                break;
              case P:
                return (
                  ((e = Bu(12, r, t, 8 | a)).elementType = P),
                  (e.type = P),
                  (e.lanes = o),
                  e
                );
              case T:
                return (
                  ((e = Bu(13, r, t, a)).type = T),
                  (e.elementType = T),
                  (e.lanes = o),
                  e
                );
              case O:
                return (
                  ((e = Bu(19, r, t, a)).elementType = O), (e.lanes = o), e
                );
              case F:
                return Wu(r, a, o, t);
              case j:
                return (
                  ((e = Bu(24, r, t, a)).elementType = j), (e.lanes = o), e
                );
              default:
                if ("object" == typeof e && null !== e)
                  switch (e.$$typeof) {
                    case S:
                      l = 10;
                      break e;
                    case q:
                      l = 9;
                      break e;
                    case R:
                      l = 11;
                      break e;
                    case M:
                      l = 14;
                      break e;
                    case N:
                      (l = 16), (n = null);
                      break e;
                    case I:
                      l = 22;
                      break e;
                  }
                throw Error(i(130, null == e ? e : typeof e, ""));
            }
          return (
            ((t = Bu(l, r, t, a)).elementType = e),
            (t.type = n),
            (t.lanes = o),
            t
          );
        }
        function $u(e, t, r, n) {
          return ((e = Bu(7, e, n, t)).lanes = r), e;
        }
        function Wu(e, t, r, n) {
          return ((e = Bu(23, e, n, t)).elementType = F), (e.lanes = r), e;
        }
        function Yu(e, t, r) {
          return ((e = Bu(6, e, null, t)).lanes = r), e;
        }
        function Gu(e, t, r) {
          return (
            ((t = Bu(
              4,
              null !== e.children ? e.children : [],
              e.key,
              t
            )).lanes = r),
            (t.stateNode = {
              containerInfo: e.containerInfo,
              pendingChildren: null,
              implementation: e.implementation,
            }),
            t
          );
        }
        function Qu(e, t, r) {
          (this.tag = t),
            (this.containerInfo = e),
            (this.finishedWork =
              this.pingCache =
              this.current =
              this.pendingChildren =
                null),
            (this.timeoutHandle = -1),
            (this.pendingContext = this.context = null),
            (this.hydrate = r),
            (this.callbackNode = null),
            (this.callbackPriority = 0),
            (this.eventTimes = Bt(0)),
            (this.expirationTimes = Bt(-1)),
            (this.entangledLanes =
              this.finishedLanes =
              this.mutableReadLanes =
              this.expiredLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = Bt(0)),
            (this.mutableSourceEagerHydrationData = null);
        }
        function Ku(e, t, r) {
          var n =
            3 < arguments.length && void 0 !== arguments[3]
              ? arguments[3]
              : null;
          return {
            $$typeof: _,
            key: null == n ? null : "" + n,
            children: e,
            containerInfo: t,
            implementation: r,
          };
        }
        function Xu(e, t, r, n) {
          var a = t.current,
            o = su(),
            l = cu(a);
          e: if (r) {
            t: {
              if (Qe((r = r._reactInternals)) !== r || 1 !== r.tag)
                throw Error(i(170));
              var u = r;
              do {
                switch (u.tag) {
                  case 3:
                    u = u.stateNode.context;
                    break t;
                  case 1:
                    if (va(u.type)) {
                      u = u.stateNode.__reactInternalMemoizedMergedChildContext;
                      break t;
                    }
                }
                u = u.return;
              } while (null !== u);
              throw Error(i(171));
            }
            if (1 === r.tag) {
              var s = r.type;
              if (va(s)) {
                r = ga(r, s, u);
                break e;
              }
            }
            r = u;
          } else r = da;
          return (
            null === t.context ? (t.context = r) : (t.pendingContext = r),
            ((t = so(o, l)).payload = { element: e }),
            null !== (n = void 0 === n ? null : n) && (t.callback = n),
            co(a, t),
            du(a, l, o),
            l
          );
        }
        function Ju(e) {
          return (e = e.current).child
            ? (e.child.tag, e.child.stateNode)
            : null;
        }
        function Zu(e, t) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var r = e.retryLane;
            e.retryLane = 0 !== r && r < t ? r : t;
          }
        }
        function es(e, t) {
          Zu(e, t), (e = e.alternate) && Zu(e, t);
        }
        function ts(e, t, r) {
          var n =
            (null != r &&
              null != r.hydrationOptions &&
              r.hydrationOptions.mutableSources) ||
            null;
          if (
            ((r = new Qu(e, t, null != r && !0 === r.hydrate)),
            (t = Bu(3, null, null, 2 === t ? 7 : 1 === t ? 3 : 0)),
            (r.current = t),
            (t.stateNode = r),
            lo(t),
            (e[Zn] = r.current),
            On(8 === e.nodeType ? e.parentNode : e),
            n)
          )
            for (e = 0; e < n.length; e++) {
              var a = (t = n[e])._getVersion;
              (a = a(t._source)),
                null == r.mutableSourceEagerHydrationData
                  ? (r.mutableSourceEagerHydrationData = [t, a])
                  : r.mutableSourceEagerHydrationData.push(t, a);
            }
          this._internalRoot = r;
        }
        function rs(e) {
          return !(
            !e ||
            (1 !== e.nodeType &&
              9 !== e.nodeType &&
              11 !== e.nodeType &&
              (8 !== e.nodeType ||
                " react-mount-point-unstable " !== e.nodeValue))
          );
        }
        function ns(e, t, r, n, a) {
          var o = r._reactRootContainer;
          if (o) {
            var i = o._internalRoot;
            if ("function" == typeof a) {
              var l = a;
              a = function () {
                var e = Ju(i);
                l.call(e);
              };
            }
            Xu(t, i, e, a);
          } else {
            if (
              ((o = r._reactRootContainer =
                (function (e, t) {
                  if (
                    (t ||
                      (t = !(
                        !(t = e
                          ? 9 === e.nodeType
                            ? e.documentElement
                            : e.firstChild
                          : null) ||
                        1 !== t.nodeType ||
                        !t.hasAttribute("data-reactroot")
                      )),
                    !t)
                  )
                    for (var r; (r = e.lastChild); ) e.removeChild(r);
                  return new ts(e, 0, t ? { hydrate: !0 } : void 0);
                })(r, n)),
              (i = o._internalRoot),
              "function" == typeof a)
            ) {
              var u = a;
              a = function () {
                var e = Ju(i);
                u.call(e);
              };
            }
            yu(function () {
              Xu(t, i, e, a);
            });
          }
          return Ju(i);
        }
        function as(e, t) {
          var r =
            2 < arguments.length && void 0 !== arguments[2]
              ? arguments[2]
              : null;
          if (!rs(t)) throw Error(i(200));
          return Ku(e, t, null, r);
        }
        ($l = function (e, t, r) {
          var n = t.lanes;
          if (null !== e)
            if (e.memoizedProps !== t.pendingProps || fa.current) Ai = !0;
            else {
              if (0 == (r & n)) {
                switch (((Ai = !1), t.tag)) {
                  case 3:
                    Wi(t), Yo();
                    break;
                  case 5:
                    Lo(t);
                    break;
                  case 1:
                    va(t.type) && wa(t);
                    break;
                  case 4:
                    No(t, t.stateNode.containerInfo);
                    break;
                  case 10:
                    n = t.memoizedProps.value;
                    var a = t.type._context;
                    ca(Xa, a._currentValue), (a._currentValue = n);
                    break;
                  case 13:
                    if (null !== t.memoizedState)
                      return 0 != (r & t.child.childLanes)
                        ? Xi(e, t, r)
                        : (ca(Fo, 1 & Fo.current),
                          null !== (t = rl(e, t, r)) ? t.sibling : null);
                    ca(Fo, 1 & Fo.current);
                    break;
                  case 19:
                    if (((n = 0 != (r & t.childLanes)), 0 != (64 & e.flags))) {
                      if (n) return tl(e, t, r);
                      t.flags |= 64;
                    }
                    if (
                      (null !== (a = t.memoizedState) &&
                        ((a.rendering = null),
                        (a.tail = null),
                        (a.lastEffect = null)),
                      ca(Fo, Fo.current),
                      n)
                    )
                      break;
                    return null;
                  case 23:
                  case 24:
                    return (t.lanes = 0), Bi(e, t, r);
                }
                return rl(e, t, r);
              }
              Ai = 0 != (16384 & e.flags);
            }
          else Ai = !1;
          switch (((t.lanes = 0), t.tag)) {
            case 2:
              if (
                ((n = t.type),
                null !== e &&
                  ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
                (e = t.pendingProps),
                (a = ha(t, pa.current)),
                ao(t, r),
                (a = ii(null, t, n, e, a, r)),
                (t.flags |= 1),
                "object" == typeof a &&
                  null !== a &&
                  "function" == typeof a.render &&
                  void 0 === a.$$typeof)
              ) {
                if (
                  ((t.tag = 1),
                  (t.memoizedState = null),
                  (t.updateQueue = null),
                  va(n))
                ) {
                  var o = !0;
                  wa(t);
                } else o = !1;
                (t.memoizedState =
                  null !== a.state && void 0 !== a.state ? a.state : null),
                  lo(t);
                var l = n.getDerivedStateFromProps;
                "function" == typeof l && vo(t, n, l, e),
                  (a.updater = bo),
                  (t.stateNode = a),
                  (a._reactInternals = t),
                  xo(t, n, e, r),
                  (t = $i(null, t, n, !0, o, r));
              } else (t.tag = 0), Fi(null, t, a, r), (t = t.child);
              return t;
            case 16:
              a = t.elementType;
              e: {
                switch (
                  (null !== e &&
                    ((e.alternate = null),
                    (t.alternate = null),
                    (t.flags |= 2)),
                  (e = t.pendingProps),
                  (a = (o = a._init)(a._payload)),
                  (t.type = a),
                  (o = t.tag =
                    (function (e) {
                      if ("function" == typeof e) return zu(e) ? 1 : 0;
                      if (null != e) {
                        if ((e = e.$$typeof) === R) return 11;
                        if (e === M) return 14;
                      }
                      return 2;
                    })(a)),
                  (e = Ka(a, e)),
                  o)
                ) {
                  case 0:
                    t = Hi(null, t, a, e, r);
                    break e;
                  case 1:
                    t = Vi(null, t, a, e, r);
                    break e;
                  case 11:
                    t = ji(null, t, a, e, r);
                    break e;
                  case 14:
                    t = Di(null, t, a, Ka(a.type, e), n, r);
                    break e;
                }
                throw Error(i(306, a, ""));
              }
              return t;
            case 0:
              return (
                (n = t.type),
                (a = t.pendingProps),
                Hi(e, t, n, (a = t.elementType === n ? a : Ka(n, a)), r)
              );
            case 1:
              return (
                (n = t.type),
                (a = t.pendingProps),
                Vi(e, t, n, (a = t.elementType === n ? a : Ka(n, a)), r)
              );
            case 3:
              if ((Wi(t), (n = t.updateQueue), null === e || null === n))
                throw Error(i(282));
              if (
                ((n = t.pendingProps),
                (a = null !== (a = t.memoizedState) ? a.element : null),
                uo(e, t),
                fo(t, n, null, r),
                (n = t.memoizedState.element) === a)
              )
                Yo(), (t = rl(e, t, r));
              else {
                if (
                  ((o = (a = t.stateNode).hydrate) &&
                    ((Uo = Yn(t.stateNode.containerInfo.firstChild)),
                    (Do = t),
                    (o = Bo = !0)),
                  o)
                ) {
                  if (null != (e = a.mutableSourceEagerHydrationData))
                    for (a = 0; a < e.length; a += 2)
                      ((o = e[a])._workInProgressVersionPrimary = e[a + 1]),
                        Go.push(o);
                  for (r = So(t, null, n, r), t.child = r; r; )
                    (r.flags = (-3 & r.flags) | 1024), (r = r.sibling);
                } else Fi(e, t, n, r), Yo();
                t = t.child;
              }
              return t;
            case 5:
              return (
                Lo(t),
                null === e && Vo(t),
                (n = t.type),
                (a = t.pendingProps),
                (o = null !== e ? e.memoizedProps : null),
                (l = a.children),
                Hn(n, a)
                  ? (l = null)
                  : null !== o && Hn(n, o) && (t.flags |= 16),
                zi(e, t),
                Fi(e, t, l, r),
                t.child
              );
            case 6:
              return null === e && Vo(t), null;
            case 13:
              return Xi(e, t, r);
            case 4:
              return (
                No(t, t.stateNode.containerInfo),
                (n = t.pendingProps),
                null === e ? (t.child = Po(t, null, n, r)) : Fi(e, t, n, r),
                t.child
              );
            case 11:
              return (
                (n = t.type),
                (a = t.pendingProps),
                ji(e, t, n, (a = t.elementType === n ? a : Ka(n, a)), r)
              );
            case 7:
              return Fi(e, t, t.pendingProps, r), t.child;
            case 8:
            case 12:
              return Fi(e, t, t.pendingProps.children, r), t.child;
            case 10:
              e: {
                (n = t.type._context),
                  (a = t.pendingProps),
                  (l = t.memoizedProps),
                  (o = a.value);
                var u = t.type._context;
                if (
                  (ca(Xa, u._currentValue), (u._currentValue = o), null !== l)
                )
                  if (
                    ((u = l.value),
                    0 ==
                      (o = sn(u, o)
                        ? 0
                        : 0 |
                          ("function" == typeof n._calculateChangedBits
                            ? n._calculateChangedBits(u, o)
                            : 1073741823)))
                  ) {
                    if (l.children === a.children && !fa.current) {
                      t = rl(e, t, r);
                      break e;
                    }
                  } else
                    for (
                      null !== (u = t.child) && (u.return = t);
                      null !== u;

                    ) {
                      var s = u.dependencies;
                      if (null !== s) {
                        l = u.child;
                        for (var c = s.firstContext; null !== c; ) {
                          if (c.context === n && 0 != (c.observedBits & o)) {
                            1 === u.tag &&
                              (((c = so(-1, r & -r)).tag = 2), co(u, c)),
                              (u.lanes |= r),
                              null !== (c = u.alternate) && (c.lanes |= r),
                              no(u.return, r),
                              (s.lanes |= r);
                            break;
                          }
                          c = c.next;
                        }
                      } else
                        l = 10 === u.tag && u.type === t.type ? null : u.child;
                      if (null !== l) l.return = u;
                      else
                        for (l = u; null !== l; ) {
                          if (l === t) {
                            l = null;
                            break;
                          }
                          if (null !== (u = l.sibling)) {
                            (u.return = l.return), (l = u);
                            break;
                          }
                          l = l.return;
                        }
                      u = l;
                    }
                Fi(e, t, a.children, r), (t = t.child);
              }
              return t;
            case 9:
              return (
                (a = t.type),
                (n = (o = t.pendingProps).children),
                ao(t, r),
                (n = n((a = oo(a, o.unstable_observedBits)))),
                (t.flags |= 1),
                Fi(e, t, n, r),
                t.child
              );
            case 14:
              return (
                (o = Ka((a = t.type), t.pendingProps)),
                Di(e, t, a, (o = Ka(a.type, o)), n, r)
              );
            case 15:
              return Ui(e, t, t.type, t.pendingProps, n, r);
            case 17:
              return (
                (n = t.type),
                (a = t.pendingProps),
                (a = t.elementType === n ? a : Ka(n, a)),
                null !== e &&
                  ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
                (t.tag = 1),
                va(n) ? ((e = !0), wa(t)) : (e = !1),
                ao(t, r),
                go(t, n, a),
                xo(t, n, a, r),
                $i(null, t, n, !0, e, r)
              );
            case 19:
              return tl(e, t, r);
            case 23:
            case 24:
              return Bi(e, t, r);
          }
          throw Error(i(156, t.tag));
        }),
          (ts.prototype.render = function (e) {
            Xu(e, this._internalRoot, null, null);
          }),
          (ts.prototype.unmount = function () {
            var e = this._internalRoot,
              t = e.containerInfo;
            Xu(null, e, null, function () {
              t[Zn] = null;
            });
          }),
          (et = function (e) {
            13 === e.tag && (du(e, 4, su()), es(e, 4));
          }),
          (tt = function (e) {
            13 === e.tag && (du(e, 67108864, su()), es(e, 67108864));
          }),
          (rt = function (e) {
            if (13 === e.tag) {
              var t = su(),
                r = cu(e);
              du(e, r, t), es(e, r);
            }
          }),
          (nt = function (e, t) {
            return t();
          }),
          (Pe = function (e, t, r) {
            switch (t) {
              case "input":
                if ((re(e, r), (t = r.name), "radio" === r.type && null != t)) {
                  for (r = e; r.parentNode; ) r = r.parentNode;
                  for (
                    r = r.querySelectorAll(
                      "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
                    ),
                      t = 0;
                    t < r.length;
                    t++
                  ) {
                    var n = r[t];
                    if (n !== e && n.form === e.form) {
                      var a = aa(n);
                      if (!a) throw Error(i(90));
                      X(n), re(n, a);
                    }
                  }
                }
                break;
              case "textarea":
                se(e, r);
                break;
              case "select":
                null != (t = r.value) && ie(e, !!r.multiple, t, !1);
            }
          }),
          (Me = bu),
          (Ne = function (e, t, r, n, a) {
            var o = Rl;
            Rl |= 4;
            try {
              return $a(98, e.bind(null, t, r, n, a));
            } finally {
              0 === (Rl = o) && (Vl(), Ya());
            }
          }),
          (Ie = function () {
            0 == (49 & Rl) &&
              ((function () {
                if (null !== tu) {
                  var e = tu;
                  (tu = null),
                    e.forEach(function (e) {
                      (e.expiredLanes |= 24 & e.pendingLanes), fu(e, za());
                    });
                }
                Ya();
              })(),
              Mu());
          }),
          (Le = function (e, t) {
            var r = Rl;
            Rl |= 2;
            try {
              return e(t);
            } finally {
              0 === (Rl = r) && (Vl(), Ya());
            }
          });
        var os = { Events: [ra, na, aa, Te, Oe, Mu, { current: !1 }] },
          is = {
            findFiberByHostInstance: ta,
            bundleType: 0,
            version: "17.0.2",
            rendererPackageName: "react-dom",
          },
          ls = {
            bundleType: is.bundleType,
            version: is.version,
            rendererPackageName: is.rendererPackageName,
            rendererConfig: is.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: x.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (e) {
              return null === (e = Je(e)) ? null : e.stateNode;
            },
            findFiberByHostInstance:
              is.findFiberByHostInstance ||
              function () {
                return null;
              },
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
          };
        if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var us = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!us.isDisabled && us.supportsFiber)
            try {
              (Ea = us.inject(ls)), (_a = us);
            } catch (he) {}
        }
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = os),
          (t.createPortal = as),
          (t.findDOMNode = function (e) {
            if (null == e) return null;
            if (1 === e.nodeType) return e;
            var t = e._reactInternals;
            if (void 0 === t) {
              if ("function" == typeof e.render) throw Error(i(188));
              throw Error(i(268, Object.keys(e)));
            }
            return null === (e = Je(t)) ? null : e.stateNode;
          }),
          (t.flushSync = function (e, t) {
            var r = Rl;
            if (0 != (48 & r)) return e(t);
            Rl |= 1;
            try {
              if (e) return $a(99, e.bind(null, t));
            } finally {
              (Rl = r), Ya();
            }
          }),
          (t.hydrate = function (e, t, r) {
            if (!rs(t)) throw Error(i(200));
            return ns(null, e, t, !0, r);
          }),
          (t.render = function (e, t, r) {
            if (!rs(t)) throw Error(i(200));
            return ns(null, e, t, !1, r);
          }),
          (t.unmountComponentAtNode = function (e) {
            if (!rs(e)) throw Error(i(40));
            return (
              !!e._reactRootContainer &&
              (yu(function () {
                ns(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[Zn] = null);
                });
              }),
              !0)
            );
          }),
          (t.unstable_batchedUpdates = bu),
          (t.unstable_createPortal = function (e, t) {
            return as(
              e,
              t,
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : null
            );
          }),
          (t.unstable_renderSubtreeIntoContainer = function (e, t, r, n) {
            if (!rs(r)) throw Error(i(200));
            if (null == e || void 0 === e._reactInternals) throw Error(i(38));
            return ns(e, t, r, !1, n);
          }),
          (t.version = "17.0.2");
      },
      3935: (e, t, r) => {
        "use strict";
        !(function e() {
          if (
            "undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (e) {
              console.error(e);
            }
        })(),
          (e.exports = r(4448));
      },
      8267: (e, t, r) => {
        "use strict";
        e.exports = r(8531);
      },
      9921: (e, t) => {
        "use strict";
        var r = 60103,
          n = 60106,
          a = 60107,
          o = 60108,
          i = 60114,
          l = 60109,
          u = 60110,
          s = 60112,
          c = 60113,
          d = 60120,
          p = 60115,
          f = 60116,
          m = 60121,
          h = 60122,
          v = 60117,
          b = 60129,
          y = 60131;
        if ("function" == typeof Symbol && Symbol.for) {
          var g = Symbol.for;
          (r = g("react.element")),
            (n = g("react.portal")),
            (a = g("react.fragment")),
            (o = g("react.strict_mode")),
            (i = g("react.profiler")),
            (l = g("react.provider")),
            (u = g("react.context")),
            (s = g("react.forward_ref")),
            (c = g("react.suspense")),
            (d = g("react.suspense_list")),
            (p = g("react.memo")),
            (f = g("react.lazy")),
            (m = g("react.block")),
            (h = g("react.server.block")),
            (v = g("react.fundamental")),
            (b = g("react.debug_trace_mode")),
            (y = g("react.legacy_hidden"));
        }
        function w(e) {
          if ("object" == typeof e && null !== e) {
            var t = e.$$typeof;
            switch (t) {
              case r:
                switch ((e = e.type)) {
                  case a:
                  case i:
                  case o:
                  case c:
                  case d:
                    return e;
                  default:
                    switch ((e = e && e.$$typeof)) {
                      case u:
                      case s:
                      case f:
                      case p:
                      case l:
                        return e;
                      default:
                        return t;
                    }
                }
              case n:
                return t;
            }
          }
        }
        var x = l,
          E = r,
          _ = s,
          C = a,
          k = f,
          P = p,
          S = n,
          q = i,
          R = o,
          T = c;
        (t.ContextConsumer = u),
          (t.ContextProvider = x),
          (t.Element = E),
          (t.ForwardRef = _),
          (t.Fragment = C),
          (t.Lazy = k),
          (t.Memo = P),
          (t.Portal = S),
          (t.Profiler = q),
          (t.StrictMode = R),
          (t.Suspense = T),
          (t.isAsyncMode = function () {
            return !1;
          }),
          (t.isConcurrentMode = function () {
            return !1;
          }),
          (t.isContextConsumer = function (e) {
            return w(e) === u;
          }),
          (t.isContextProvider = function (e) {
            return w(e) === l;
          }),
          (t.isElement = function (e) {
            return "object" == typeof e && null !== e && e.$$typeof === r;
          }),
          (t.isForwardRef = function (e) {
            return w(e) === s;
          }),
          (t.isFragment = function (e) {
            return w(e) === a;
          }),
          (t.isLazy = function (e) {
            return w(e) === f;
          }),
          (t.isMemo = function (e) {
            return w(e) === p;
          }),
          (t.isPortal = function (e) {
            return w(e) === n;
          }),
          (t.isProfiler = function (e) {
            return w(e) === i;
          }),
          (t.isStrictMode = function (e) {
            return w(e) === o;
          }),
          (t.isSuspense = function (e) {
            return w(e) === c;
          }),
          (t.isValidElementType = function (e) {
            return (
              "string" == typeof e ||
              "function" == typeof e ||
              e === a ||
              e === i ||
              e === b ||
              e === o ||
              e === c ||
              e === d ||
              e === y ||
              ("object" == typeof e &&
                null !== e &&
                (e.$$typeof === f ||
                  e.$$typeof === p ||
                  e.$$typeof === l ||
                  e.$$typeof === u ||
                  e.$$typeof === s ||
                  e.$$typeof === v ||
                  e.$$typeof === m ||
                  e[0] === h))
            );
          }),
          (t.typeOf = w);
      },
      9864: (e, t, r) => {
        "use strict";
        e.exports = r(9921);
      },
      2408: (e, t, r) => {
        "use strict";
        var n = r(7418),
          a = 60103,
          o = 60106;
        (t.Fragment = 60107), (t.StrictMode = 60108), (t.Profiler = 60114);
        var i = 60109,
          l = 60110,
          u = 60112;
        t.Suspense = 60113;
        var s = 60115,
          c = 60116;
        if ("function" == typeof Symbol && Symbol.for) {
          var d = Symbol.for;
          (a = d("react.element")),
            (o = d("react.portal")),
            (t.Fragment = d("react.fragment")),
            (t.StrictMode = d("react.strict_mode")),
            (t.Profiler = d("react.profiler")),
            (i = d("react.provider")),
            (l = d("react.context")),
            (u = d("react.forward_ref")),
            (t.Suspense = d("react.suspense")),
            (s = d("react.memo")),
            (c = d("react.lazy"));
        }
        var p = "function" == typeof Symbol && Symbol.iterator;
        function f(e) {
          for (
            var t =
                "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
              r = 1;
            r < arguments.length;
            r++
          )
            t += "&args[]=" + encodeURIComponent(arguments[r]);
          return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        var m = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          h = {};
        function v(e, t, r) {
          (this.props = e),
            (this.context = t),
            (this.refs = h),
            (this.updater = r || m);
        }
        function b() {}
        function y(e, t, r) {
          (this.props = e),
            (this.context = t),
            (this.refs = h),
            (this.updater = r || m);
        }
        (v.prototype.isReactComponent = {}),
          (v.prototype.setState = function (e, t) {
            if ("object" != typeof e && "function" != typeof e && null != e)
              throw Error(f(85));
            this.updater.enqueueSetState(this, e, t, "setState");
          }),
          (v.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
          }),
          (b.prototype = v.prototype);
        var g = (y.prototype = new b());
        (g.constructor = y), n(g, v.prototype), (g.isPureReactComponent = !0);
        var w = { current: null },
          x = Object.prototype.hasOwnProperty,
          E = { key: !0, ref: !0, __self: !0, __source: !0 };
        function _(e, t, r) {
          var n,
            o = {},
            i = null,
            l = null;
          if (null != t)
            for (n in (void 0 !== t.ref && (l = t.ref),
            void 0 !== t.key && (i = "" + t.key),
            t))
              x.call(t, n) && !E.hasOwnProperty(n) && (o[n] = t[n]);
          var u = arguments.length - 2;
          if (1 === u) o.children = r;
          else if (1 < u) {
            for (var s = Array(u), c = 0; c < u; c++) s[c] = arguments[c + 2];
            o.children = s;
          }
          if (e && e.defaultProps)
            for (n in (u = e.defaultProps)) void 0 === o[n] && (o[n] = u[n]);
          return {
            $$typeof: a,
            type: e,
            key: i,
            ref: l,
            props: o,
            _owner: w.current,
          };
        }
        function C(e) {
          return "object" == typeof e && null !== e && e.$$typeof === a;
        }
        var k = /\/+/g;
        function P(e, t) {
          return "object" == typeof e && null !== e && null != e.key
            ? (function (e) {
                var t = { "=": "=0", ":": "=2" };
                return (
                  "$" +
                  e.replace(/[=:]/g, function (e) {
                    return t[e];
                  })
                );
              })("" + e.key)
            : t.toString(36);
        }
        function S(e, t, r, n, i) {
          var l = typeof e;
          ("undefined" !== l && "boolean" !== l) || (e = null);
          var u = !1;
          if (null === e) u = !0;
          else
            switch (l) {
              case "string":
              case "number":
                u = !0;
                break;
              case "object":
                switch (e.$$typeof) {
                  case a:
                  case o:
                    u = !0;
                }
            }
          if (u)
            return (
              (i = i((u = e))),
              (e = "" === n ? "." + P(u, 0) : n),
              Array.isArray(i)
                ? ((r = ""),
                  null != e && (r = e.replace(k, "$&/") + "/"),
                  S(i, t, r, "", function (e) {
                    return e;
                  }))
                : null != i &&
                  (C(i) &&
                    (i = (function (e, t) {
                      return {
                        $$typeof: a,
                        type: e.type,
                        key: t,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner,
                      };
                    })(
                      i,
                      r +
                        (!i.key || (u && u.key === i.key)
                          ? ""
                          : ("" + i.key).replace(k, "$&/") + "/") +
                        e
                    )),
                  t.push(i)),
              1
            );
          if (((u = 0), (n = "" === n ? "." : n + ":"), Array.isArray(e)))
            for (var s = 0; s < e.length; s++) {
              var c = n + P((l = e[s]), s);
              u += S(l, t, r, c, i);
            }
          else if (
            ((c = (function (e) {
              return null === e || "object" != typeof e
                ? null
                : "function" == typeof (e = (p && e[p]) || e["@@iterator"])
                ? e
                : null;
            })(e)),
            "function" == typeof c)
          )
            for (e = c.call(e), s = 0; !(l = e.next()).done; )
              u += S((l = l.value), t, r, (c = n + P(l, s++)), i);
          else if ("object" === l)
            throw (
              ((t = "" + e),
              Error(
                f(
                  31,
                  "[object Object]" === t
                    ? "object with keys {" + Object.keys(e).join(", ") + "}"
                    : t
                )
              ))
            );
          return u;
        }
        function q(e, t, r) {
          if (null == e) return e;
          var n = [],
            a = 0;
          return (
            S(e, n, "", "", function (e) {
              return t.call(r, e, a++);
            }),
            n
          );
        }
        function R(e) {
          if (-1 === e._status) {
            var t = e._result;
            (t = t()),
              (e._status = 0),
              (e._result = t),
              t.then(
                function (t) {
                  0 === e._status &&
                    ((t = t.default), (e._status = 1), (e._result = t));
                },
                function (t) {
                  0 === e._status && ((e._status = 2), (e._result = t));
                }
              );
          }
          if (1 === e._status) return e._result;
          throw e._result;
        }
        var T = { current: null };
        function O() {
          var e = T.current;
          if (null === e) throw Error(f(321));
          return e;
        }
        var M = {
          ReactCurrentDispatcher: T,
          ReactCurrentBatchConfig: { transition: 0 },
          ReactCurrentOwner: w,
          IsSomeRendererActing: { current: !1 },
          assign: n,
        };
        (t.Children = {
          map: q,
          forEach: function (e, t, r) {
            q(
              e,
              function () {
                t.apply(this, arguments);
              },
              r
            );
          },
          count: function (e) {
            var t = 0;
            return (
              q(e, function () {
                t++;
              }),
              t
            );
          },
          toArray: function (e) {
            return (
              q(e, function (e) {
                return e;
              }) || []
            );
          },
          only: function (e) {
            if (!C(e)) throw Error(f(143));
            return e;
          },
        }),
          (t.Component = v),
          (t.PureComponent = y),
          (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = M),
          (t.cloneElement = function (e, t, r) {
            if (null == e) throw Error(f(267, e));
            var o = n({}, e.props),
              i = e.key,
              l = e.ref,
              u = e._owner;
            if (null != t) {
              if (
                (void 0 !== t.ref && ((l = t.ref), (u = w.current)),
                void 0 !== t.key && (i = "" + t.key),
                e.type && e.type.defaultProps)
              )
                var s = e.type.defaultProps;
              for (c in t)
                x.call(t, c) &&
                  !E.hasOwnProperty(c) &&
                  (o[c] = void 0 === t[c] && void 0 !== s ? s[c] : t[c]);
            }
            var c = arguments.length - 2;
            if (1 === c) o.children = r;
            else if (1 < c) {
              s = Array(c);
              for (var d = 0; d < c; d++) s[d] = arguments[d + 2];
              o.children = s;
            }
            return {
              $$typeof: a,
              type: e.type,
              key: i,
              ref: l,
              props: o,
              _owner: u,
            };
          }),
          (t.createContext = function (e, t) {
            return (
              void 0 === t && (t = null),
              ((e = {
                $$typeof: l,
                _calculateChangedBits: t,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
              }).Provider = { $$typeof: i, _context: e }),
              (e.Consumer = e)
            );
          }),
          (t.createElement = _),
          (t.createFactory = function (e) {
            var t = _.bind(null, e);
            return (t.type = e), t;
          }),
          (t.createRef = function () {
            return { current: null };
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: u, render: e };
          }),
          (t.isValidElement = C),
          (t.lazy = function (e) {
            return {
              $$typeof: c,
              _payload: { _status: -1, _result: e },
              _init: R,
            };
          }),
          (t.memo = function (e, t) {
            return { $$typeof: s, type: e, compare: void 0 === t ? null : t };
          }),
          (t.useCallback = function (e, t) {
            return O().useCallback(e, t);
          }),
          (t.useContext = function (e, t) {
            return O().useContext(e, t);
          }),
          (t.useDebugValue = function () {}),
          (t.useEffect = function (e, t) {
            return O().useEffect(e, t);
          }),
          (t.useImperativeHandle = function (e, t, r) {
            return O().useImperativeHandle(e, t, r);
          }),
          (t.useLayoutEffect = function (e, t) {
            return O().useLayoutEffect(e, t);
          }),
          (t.useMemo = function (e, t) {
            return O().useMemo(e, t);
          }),
          (t.useReducer = function (e, t, r) {
            return O().useReducer(e, t, r);
          }),
          (t.useRef = function (e) {
            return O().useRef(e);
          }),
          (t.useState = function (e) {
            return O().useState(e);
          }),
          (t.version = "17.0.2");
      },
      7294: (e, t, r) => {
        "use strict";
        e.exports = r(2408);
      },
      5666: (e) => {
        var t = (function (e) {
          "use strict";
          var t,
            r = Object.prototype,
            n = r.hasOwnProperty,
            a = "function" == typeof Symbol ? Symbol : {},
            o = a.iterator || "@@iterator",
            i = a.asyncIterator || "@@asyncIterator",
            l = a.toStringTag || "@@toStringTag";
          function u(e, t, r) {
            return (
              Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              }),
              e[t]
            );
          }
          try {
            u({}, "");
          } catch (e) {
            u = function (e, t, r) {
              return (e[t] = r);
            };
          }
          function s(e, t, r, n) {
            var a = t && t.prototype instanceof v ? t : v,
              o = Object.create(a.prototype),
              i = new q(n || []);
            return (
              (o._invoke = (function (e, t, r) {
                var n = d;
                return function (a, o) {
                  if (n === f) throw new Error("Generator is already running");
                  if (n === m) {
                    if ("throw" === a) throw o;
                    return T();
                  }
                  for (r.method = a, r.arg = o; ; ) {
                    var i = r.delegate;
                    if (i) {
                      var l = k(i, r);
                      if (l) {
                        if (l === h) continue;
                        return l;
                      }
                    }
                    if ("next" === r.method) r.sent = r._sent = r.arg;
                    else if ("throw" === r.method) {
                      if (n === d) throw ((n = m), r.arg);
                      r.dispatchException(r.arg);
                    } else "return" === r.method && r.abrupt("return", r.arg);
                    n = f;
                    var u = c(e, t, r);
                    if ("normal" === u.type) {
                      if (((n = r.done ? m : p), u.arg === h)) continue;
                      return { value: u.arg, done: r.done };
                    }
                    "throw" === u.type &&
                      ((n = m), (r.method = "throw"), (r.arg = u.arg));
                  }
                };
              })(e, r, i)),
              o
            );
          }
          function c(e, t, r) {
            try {
              return { type: "normal", arg: e.call(t, r) };
            } catch (e) {
              return { type: "throw", arg: e };
            }
          }
          e.wrap = s;
          var d = "suspendedStart",
            p = "suspendedYield",
            f = "executing",
            m = "completed",
            h = {};
          function v() {}
          function b() {}
          function y() {}
          var g = {};
          u(g, o, function () {
            return this;
          });
          var w = Object.getPrototypeOf,
            x = w && w(w(R([])));
          x && x !== r && n.call(x, o) && (g = x);
          var E = (y.prototype = v.prototype = Object.create(g));
          function _(e) {
            ["next", "throw", "return"].forEach(function (t) {
              u(e, t, function (e) {
                return this._invoke(t, e);
              });
            });
          }
          function C(e, t) {
            function r(a, o, i, l) {
              var u = c(e[a], e, o);
              if ("throw" !== u.type) {
                var s = u.arg,
                  d = s.value;
                return d && "object" == typeof d && n.call(d, "__await")
                  ? t.resolve(d.__await).then(
                      function (e) {
                        r("next", e, i, l);
                      },
                      function (e) {
                        r("throw", e, i, l);
                      }
                    )
                  : t.resolve(d).then(
                      function (e) {
                        (s.value = e), i(s);
                      },
                      function (e) {
                        return r("throw", e, i, l);
                      }
                    );
              }
              l(u.arg);
            }
            var a;
            this._invoke = function (e, n) {
              function o() {
                return new t(function (t, a) {
                  r(e, n, t, a);
                });
              }
              return (a = a ? a.then(o, o) : o());
            };
          }
          function k(e, r) {
            var n = e.iterator[r.method];
            if (n === t) {
              if (((r.delegate = null), "throw" === r.method)) {
                if (
                  e.iterator.return &&
                  ((r.method = "return"),
                  (r.arg = t),
                  k(e, r),
                  "throw" === r.method)
                )
                  return h;
                (r.method = "throw"),
                  (r.arg = new TypeError(
                    "The iterator does not provide a 'throw' method"
                  ));
              }
              return h;
            }
            var a = c(n, e.iterator, r.arg);
            if ("throw" === a.type)
              return (
                (r.method = "throw"), (r.arg = a.arg), (r.delegate = null), h
              );
            var o = a.arg;
            return o
              ? o.done
                ? ((r[e.resultName] = o.value),
                  (r.next = e.nextLoc),
                  "return" !== r.method && ((r.method = "next"), (r.arg = t)),
                  (r.delegate = null),
                  h)
                : o
              : ((r.method = "throw"),
                (r.arg = new TypeError("iterator result is not an object")),
                (r.delegate = null),
                h);
          }
          function P(e) {
            var t = { tryLoc: e[0] };
            1 in e && (t.catchLoc = e[1]),
              2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
              this.tryEntries.push(t);
          }
          function S(e) {
            var t = e.completion || {};
            (t.type = "normal"), delete t.arg, (e.completion = t);
          }
          function q(e) {
            (this.tryEntries = [{ tryLoc: "root" }]),
              e.forEach(P, this),
              this.reset(!0);
          }
          function R(e) {
            if (e) {
              var r = e[o];
              if (r) return r.call(e);
              if ("function" == typeof e.next) return e;
              if (!isNaN(e.length)) {
                var a = -1,
                  i = function r() {
                    for (; ++a < e.length; )
                      if (n.call(e, a))
                        return (r.value = e[a]), (r.done = !1), r;
                    return (r.value = t), (r.done = !0), r;
                  };
                return (i.next = i);
              }
            }
            return { next: T };
          }
          function T() {
            return { value: t, done: !0 };
          }
          return (
            (b.prototype = y),
            u(E, "constructor", y),
            u(y, "constructor", b),
            (b.displayName = u(y, l, "GeneratorFunction")),
            (e.isGeneratorFunction = function (e) {
              var t = "function" == typeof e && e.constructor;
              return (
                !!t &&
                (t === b || "GeneratorFunction" === (t.displayName || t.name))
              );
            }),
            (e.mark = function (e) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, y)
                  : ((e.__proto__ = y), u(e, l, "GeneratorFunction")),
                (e.prototype = Object.create(E)),
                e
              );
            }),
            (e.awrap = function (e) {
              return { __await: e };
            }),
            _(C.prototype),
            u(C.prototype, i, function () {
              return this;
            }),
            (e.AsyncIterator = C),
            (e.async = function (t, r, n, a, o) {
              void 0 === o && (o = Promise);
              var i = new C(s(t, r, n, a), o);
              return e.isGeneratorFunction(r)
                ? i
                : i.next().then(function (e) {
                    return e.done ? e.value : i.next();
                  });
            }),
            _(E),
            u(E, l, "Generator"),
            u(E, o, function () {
              return this;
            }),
            u(E, "toString", function () {
              return "[object Generator]";
            }),
            (e.keys = function (e) {
              var t = [];
              for (var r in e) t.push(r);
              return (
                t.reverse(),
                function r() {
                  for (; t.length; ) {
                    var n = t.pop();
                    if (n in e) return (r.value = n), (r.done = !1), r;
                  }
                  return (r.done = !0), r;
                }
              );
            }),
            (e.values = R),
            (q.prototype = {
              constructor: q,
              reset: function (e) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = t),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = "next"),
                  (this.arg = t),
                  this.tryEntries.forEach(S),
                  !e)
                )
                  for (var r in this)
                    "t" === r.charAt(0) &&
                      n.call(this, r) &&
                      !isNaN(+r.slice(1)) &&
                      (this[r] = t);
              },
              stop: function () {
                this.done = !0;
                var e = this.tryEntries[0].completion;
                if ("throw" === e.type) throw e.arg;
                return this.rval;
              },
              dispatchException: function (e) {
                if (this.done) throw e;
                var r = this;
                function a(n, a) {
                  return (
                    (l.type = "throw"),
                    (l.arg = e),
                    (r.next = n),
                    a && ((r.method = "next"), (r.arg = t)),
                    !!a
                  );
                }
                for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                  var i = this.tryEntries[o],
                    l = i.completion;
                  if ("root" === i.tryLoc) return a("end");
                  if (i.tryLoc <= this.prev) {
                    var u = n.call(i, "catchLoc"),
                      s = n.call(i, "finallyLoc");
                    if (u && s) {
                      if (this.prev < i.catchLoc) return a(i.catchLoc, !0);
                      if (this.prev < i.finallyLoc) return a(i.finallyLoc);
                    } else if (u) {
                      if (this.prev < i.catchLoc) return a(i.catchLoc, !0);
                    } else {
                      if (!s)
                        throw new Error(
                          "try statement without catch or finally"
                        );
                      if (this.prev < i.finallyLoc) return a(i.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function (e, t) {
                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                  var a = this.tryEntries[r];
                  if (
                    a.tryLoc <= this.prev &&
                    n.call(a, "finallyLoc") &&
                    this.prev < a.finallyLoc
                  ) {
                    var o = a;
                    break;
                  }
                }
                o &&
                  ("break" === e || "continue" === e) &&
                  o.tryLoc <= t &&
                  t <= o.finallyLoc &&
                  (o = null);
                var i = o ? o.completion : {};
                return (
                  (i.type = e),
                  (i.arg = t),
                  o
                    ? ((this.method = "next"), (this.next = o.finallyLoc), h)
                    : this.complete(i)
                );
              },
              complete: function (e, t) {
                if ("throw" === e.type) throw e.arg;
                return (
                  "break" === e.type || "continue" === e.type
                    ? (this.next = e.arg)
                    : "return" === e.type
                    ? ((this.rval = this.arg = e.arg),
                      (this.method = "return"),
                      (this.next = "end"))
                    : "normal" === e.type && t && (this.next = t),
                  h
                );
              },
              finish: function (e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                  var r = this.tryEntries[t];
                  if (r.finallyLoc === e)
                    return this.complete(r.completion, r.afterLoc), S(r), h;
                }
              },
              catch: function (e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                  var r = this.tryEntries[t];
                  if (r.tryLoc === e) {
                    var n = r.completion;
                    if ("throw" === n.type) {
                      var a = n.arg;
                      S(r);
                    }
                    return a;
                  }
                }
                throw new Error("illegal catch attempt");
              },
              delegateYield: function (e, r, n) {
                return (
                  (this.delegate = {
                    iterator: R(e),
                    resultName: r,
                    nextLoc: n,
                  }),
                  "next" === this.method && (this.arg = t),
                  h
                );
              },
            }),
            e
          );
        })(e.exports);
        try {
          regeneratorRuntime = t;
        } catch (e) {
          "object" == typeof globalThis
            ? (globalThis.regeneratorRuntime = t)
            : Function("r", "regeneratorRuntime = r")(t);
        }
      },
      53: (e, t) => {
        "use strict";
        var r, n, a, o;
        if (
          "object" == typeof performance &&
          "function" == typeof performance.now
        ) {
          var i = performance;
          t.unstable_now = function () {
            return i.now();
          };
        } else {
          var l = Date,
            u = l.now();
          t.unstable_now = function () {
            return l.now() - u;
          };
        }
        if (
          "undefined" == typeof window ||
          "function" != typeof MessageChannel
        ) {
          var s = null,
            c = null,
            d = function () {
              if (null !== s)
                try {
                  var e = t.unstable_now();
                  s(!0, e), (s = null);
                } catch (e) {
                  throw (setTimeout(d, 0), e);
                }
            };
          (r = function (e) {
            null !== s ? setTimeout(r, 0, e) : ((s = e), setTimeout(d, 0));
          }),
            (n = function (e, t) {
              c = setTimeout(e, t);
            }),
            (a = function () {
              clearTimeout(c);
            }),
            (t.unstable_shouldYield = function () {
              return !1;
            }),
            (o = t.unstable_forceFrameRate = function () {});
        } else {
          var p = window.setTimeout,
            f = window.clearTimeout;
          if ("undefined" != typeof console) {
            var m = window.cancelAnimationFrame;
            "function" != typeof window.requestAnimationFrame &&
              console.error(
                "This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
              ),
              "function" != typeof m &&
                console.error(
                  "This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
                );
          }
          var h = !1,
            v = null,
            b = -1,
            y = 5,
            g = 0;
          (t.unstable_shouldYield = function () {
            return t.unstable_now() >= g;
          }),
            (o = function () {}),
            (t.unstable_forceFrameRate = function (e) {
              0 > e || 125 < e
                ? console.error(
                    "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                  )
                : (y = 0 < e ? Math.floor(1e3 / e) : 5);
            });
          var w = new MessageChannel(),
            x = w.port2;
          (w.port1.onmessage = function () {
            if (null !== v) {
              var e = t.unstable_now();
              g = e + y;
              try {
                v(!0, e) ? x.postMessage(null) : ((h = !1), (v = null));
              } catch (e) {
                throw (x.postMessage(null), e);
              }
            } else h = !1;
          }),
            (r = function (e) {
              (v = e), h || ((h = !0), x.postMessage(null));
            }),
            (n = function (e, r) {
              b = p(function () {
                e(t.unstable_now());
              }, r);
            }),
            (a = function () {
              f(b), (b = -1);
            });
        }
        function E(e, t) {
          var r = e.length;
          e.push(t);
          e: for (;;) {
            var n = (r - 1) >>> 1,
              a = e[n];
            if (!(void 0 !== a && 0 < k(a, t))) break e;
            (e[n] = t), (e[r] = a), (r = n);
          }
        }
        function _(e) {
          return void 0 === (e = e[0]) ? null : e;
        }
        function C(e) {
          var t = e[0];
          if (void 0 !== t) {
            var r = e.pop();
            if (r !== t) {
              e[0] = r;
              e: for (var n = 0, a = e.length; n < a; ) {
                var o = 2 * (n + 1) - 1,
                  i = e[o],
                  l = o + 1,
                  u = e[l];
                if (void 0 !== i && 0 > k(i, r))
                  void 0 !== u && 0 > k(u, i)
                    ? ((e[n] = u), (e[l] = r), (n = l))
                    : ((e[n] = i), (e[o] = r), (n = o));
                else {
                  if (!(void 0 !== u && 0 > k(u, r))) break e;
                  (e[n] = u), (e[l] = r), (n = l);
                }
              }
            }
            return t;
          }
          return null;
        }
        function k(e, t) {
          var r = e.sortIndex - t.sortIndex;
          return 0 !== r ? r : e.id - t.id;
        }
        var P = [],
          S = [],
          q = 1,
          R = null,
          T = 3,
          O = !1,
          M = !1,
          N = !1;
        function I(e) {
          for (var t = _(S); null !== t; ) {
            if (null === t.callback) C(S);
            else {
              if (!(t.startTime <= e)) break;
              C(S), (t.sortIndex = t.expirationTime), E(P, t);
            }
            t = _(S);
          }
        }
        function L(e) {
          if (((N = !1), I(e), !M))
            if (null !== _(P)) (M = !0), r(A);
            else {
              var t = _(S);
              null !== t && n(L, t.startTime - e);
            }
        }
        function A(e, r) {
          (M = !1), N && ((N = !1), a()), (O = !0);
          var o = T;
          try {
            for (
              I(r), R = _(P);
              null !== R &&
              (!(R.expirationTime > r) || (e && !t.unstable_shouldYield()));

            ) {
              var i = R.callback;
              if ("function" == typeof i) {
                (R.callback = null), (T = R.priorityLevel);
                var l = i(R.expirationTime <= r);
                (r = t.unstable_now()),
                  "function" == typeof l
                    ? (R.callback = l)
                    : R === _(P) && C(P),
                  I(r);
              } else C(P);
              R = _(P);
            }
            if (null !== R) var u = !0;
            else {
              var s = _(S);
              null !== s && n(L, s.startTime - r), (u = !1);
            }
            return u;
          } finally {
            (R = null), (T = o), (O = !1);
          }
        }
        var F = o;
        (t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (e) {
            e.callback = null;
          }),
          (t.unstable_continueExecution = function () {
            M || O || ((M = !0), r(A));
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return T;
          }),
          (t.unstable_getFirstCallbackNode = function () {
            return _(P);
          }),
          (t.unstable_next = function (e) {
            switch (T) {
              case 1:
              case 2:
              case 3:
                var t = 3;
                break;
              default:
                t = T;
            }
            var r = T;
            T = t;
            try {
              return e();
            } finally {
              T = r;
            }
          }),
          (t.unstable_pauseExecution = function () {}),
          (t.unstable_requestPaint = F),
          (t.unstable_runWithPriority = function (e, t) {
            switch (e) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                e = 3;
            }
            var r = T;
            T = e;
            try {
              return t();
            } finally {
              T = r;
            }
          }),
          (t.unstable_scheduleCallback = function (e, o, i) {
            var l = t.unstable_now();
            switch (
              ((i =
                "object" == typeof i &&
                null !== i &&
                "number" == typeof (i = i.delay) &&
                0 < i
                  ? l + i
                  : l),
              e)
            ) {
              case 1:
                var u = -1;
                break;
              case 2:
                u = 250;
                break;
              case 5:
                u = 1073741823;
                break;
              case 4:
                u = 1e4;
                break;
              default:
                u = 5e3;
            }
            return (
              (e = {
                id: q++,
                callback: o,
                priorityLevel: e,
                startTime: i,
                expirationTime: (u = i + u),
                sortIndex: -1,
              }),
              i > l
                ? ((e.sortIndex = i),
                  E(S, e),
                  null === _(P) &&
                    e === _(S) &&
                    (N ? a() : (N = !0), n(L, i - l)))
                : ((e.sortIndex = u), E(P, e), M || O || ((M = !0), r(A))),
              e
            );
          }),
          (t.unstable_wrapCallback = function (e) {
            var t = T;
            return function () {
              var r = T;
              T = t;
              try {
                return e.apply(this, arguments);
              } finally {
                T = r;
              }
            };
          });
      },
      3840: (e, t, r) => {
        "use strict";
        e.exports = r(53);
      },
      5861: (e, t, r) => {
        "use strict";
        function n(e, t, r, n, a, o, i) {
          try {
            var l = e[o](i),
              u = l.value;
          } catch (e) {
            return void r(e);
          }
          l.done ? t(u) : Promise.resolve(u).then(n, a);
        }
        function a(e) {
          return function () {
            var t = this,
              r = arguments;
            return new Promise(function (a, o) {
              var i = e.apply(t, r);
              function l(e) {
                n(i, a, o, l, u, "next", e);
              }
              function u(e) {
                n(i, a, o, l, u, "throw", e);
              }
              l(void 0);
            });
          };
        }
        r.d(t, { Z: () => a });
      },
    },
    t = {};
  function r(n) {
    var a = t[n];
    if (void 0 !== a) return a.exports;
    var o = (t[n] = { id: n, loaded: !1, exports: {} });
    return e[n](o, o.exports, r), (o.loaded = !0), o.exports;
  }
  (r.n = (e) => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return r.d(t, { a: t }), t;
  }),
    (r.d = (e, t) => {
      for (var n in t)
        r.o(t, n) &&
          !r.o(e, n) &&
          Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }),
    (r.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (r.hmd = (e) => (
      (e = Object.create(e)).children || (e.children = []),
      Object.defineProperty(e, "exports", {
        enumerable: !0,
        set: () => {
          throw new Error(
            "ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " +
              e.id
          );
        },
      }),
      e
    )),
    (r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (r.nmd = (e) => ((e.paths = []), e.children || (e.children = []), e)),
    (() => {
      "use strict";
      const e = async ({
        baseUrl: e,
        itemId: t,
        marketplaceId: r,
        endpoint: n,
        requestBody: a,
        responseBody: o,
        userId: i,
      }) => {
        try {
          const l = new Headers();
          l.append("Content-Type", "application/json"),
            await fetch(`${e}/listingErrors`, {
              method: "POST",
              headers: l,
              body: JSON.stringify({
                marketplaceId: r,
                endpoint: n,
                itemId: t,
                userId: i,
                requestBody: JSON.stringify(a),
                responseBody: JSON.stringify(o),
              }),
            });
        } catch (e) {
          console.log("error", e);
        }
      };
      var t = r(5861),
        n = r(7757),
        a = r.n(n),
        o = r(7294),
        i = r(3935),
        l = r(1309),
        u = r(8267).act,
        s = void 0 !== u,
        c =
          u ||
          function (e) {
            i.unstable_batchedUpdates(e),
              i.render(
                o.createElement("div", null),
                document.createElement("div")
              );
          },
        d = !1,
        p = null;
      function f(e) {
        var t, r;
        return !0 === s
          ? null === p
            ? new Promise(function (t, r) {
                var n,
                  a,
                  o = console.error;
                console.error = function () {
                  for (
                    var e = arguments.length, t = new Array(e), r = 0;
                    r < e;
                    r++
                  )
                    t[r] = arguments[r];
                  var n = "string" == typeof t[0];
                  n &&
                  0 ===
                    t[0].indexOf(
                      "Warning: Do not await the result of calling ReactTestUtils.act"
                    )
                    ? (p = !1)
                    : (n &&
                        0 ===
                          t[0].indexOf(
                            "Warning: The callback passed to ReactTestUtils.act(...) function must not return anything"
                          )) ||
                      o.apply(console, t);
                };
                try {
                  a = u(function () {
                    return (n = e());
                  });
                } catch (e) {
                  return (console.error = o), void r(e);
                }
                a.then(
                  function () {
                    (console.error = o), (p = !0), t();
                  },
                  function (e) {
                    (console.error = o), (p = !0), r(e);
                  }
                ),
                  !1 === p &&
                    ((console.error = o),
                    d ||
                      (console.error(
                        'It looks like you\'re using a version of react-dom that supports the "act" function, but not an awaitable version of "act" which you will need. Please upgrade to at least react-dom@16.9.0 to remove this warning.'
                      ),
                      (d = !0)),
                    n.then(function () {
                      Promise.resolve().then(function () {
                        c(function () {}), t();
                      });
                    }, r));
              })
            : !1 === p
            ? (c(function () {
                t = e();
              }),
              t.then(function () {
                return Promise.resolve().then(function () {
                  c(function () {});
                });
              }))
            : c(e)
          : (c(function () {
              r = e();
            }),
            r.then(function () {
              return Promise.resolve().then(function () {
                c(function () {});
              });
            }));
      }
      var m = function () {
        return l.BX.apply(void 0, arguments);
      };
      Object.keys(l.BX).forEach(function (e) {
        m[e] = function () {
          return l.BX[e].apply(l.BX, arguments);
        };
      });
      var h = m.mouseEnter,
        v = m.mouseLeave;
      (m.mouseEnter = function () {
        return h.apply(void 0, arguments), m.mouseOver.apply(m, arguments);
      }),
        (m.mouseLeave = function () {
          return v.apply(void 0, arguments), m.mouseOut.apply(m, arguments);
        });
      var b = m.pointerEnter,
        y = m.pointerLeave;
      (m.pointerEnter = function () {
        return b.apply(void 0, arguments), m.pointerOver.apply(m, arguments);
      }),
        (m.pointerLeave = function () {
          return y.apply(void 0, arguments), m.pointerOut.apply(m, arguments);
        });
      var g = m.select;
      m.select = function (e, t) {
        g(e, t), e.focus(), m.keyUp(e, t);
      };
      var w,
        x = m.blur,
        E = m.focus;
      (m.blur = function () {
        return m.focusOut.apply(m, arguments), x.apply(void 0, arguments);
      }),
        (m.focus = function () {
          return m.focusIn.apply(m, arguments), E.apply(void 0, arguments);
        }),
        (0, l.jQ)({
          asyncWrapper:
            ((w = (0, t.Z)(
              a().mark(function e(r) {
                var n;
                return a().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.next = 2),
                          f(
                            (0, t.Z)(
                              a().mark(function e() {
                                return a().wrap(function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (e.next = 2), r();
                                      case 2:
                                        n = e.sent;
                                      case 3:
                                      case "end":
                                        return e.stop();
                                    }
                                }, e);
                              })
                            )
                          )
                        );
                      case 2:
                        return e.abrupt("return", n);
                      case 3:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )),
            function (e) {
              return w.apply(this, arguments);
            }),
          eventWrapper: function (e) {
            var t;
            return (
              c(function () {
                t = e();
              }),
              t
            );
          },
        });
      var _,
        C = new Set();
      function k() {
        C.forEach(P);
      }
      function P(e) {
        c(function () {
          i.unmountComponentAtNode(e);
        }),
          e.parentNode === document.body && document.body.removeChild(e),
          C.delete(e);
      }
      ("undefined" != typeof process &&
        null != (_ = process.env) &&
        _.RTL_SKIP_AUTO_CLEANUP) ||
        ("function" == typeof afterEach
          ? afterEach(function () {
              k();
            })
          : "function" == typeof teardown &&
            teardown(function () {
              k();
            }));
      var S = r(2991);
      function q() {
        var e = (0, S.R)(),
          t = e.crypto || e.msCrypto;
        if (void 0 !== t && t.getRandomValues) {
          var r = new Uint16Array(8);
          t.getRandomValues(r),
            (r[3] = (4095 & r[3]) | 16384),
            (r[4] = (16383 & r[4]) | 32768);
          var n = (e) => {
            let t = e.toString(16);
            for (; t.length < 4; ) t = `0${t}`;
            return t;
          };
          return (
            n(r[0]) +
            n(r[1]) +
            n(r[2]) +
            n(r[3]) +
            n(r[4]) +
            n(r[5]) +
            n(r[6]) +
            n(r[7])
          );
        }
        return "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, (e) => {
          var t = (16 * Math.random()) | 0;
          return ("x" === e ? t : (3 & t) | 8).toString(16);
        });
      }
      var R = r(1170),
        T = (0, S.R)(),
        O = ["debug", "info", "warn", "error", "log", "assert"];
      function M(e) {
        var t = (0, S.R)();
        if (!("console" in t)) return e();
        var r = t.console,
          n = {};
        O.forEach((e) => {
          var a = r[e] && r[e].__sentry_original__;
          e in t.console && a && ((n[e] = r[e]), (r[e] = a));
        });
        try {
          return e();
        } finally {
          Object.keys(n).forEach((e) => {
            r[e] = n[e];
          });
        }
      }
      function N() {
        let e = !1;
        var t = {
          enable: () => {
            e = !0;
          },
          disable: () => {
            e = !1;
          },
        };
        return (
          "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__
            ? O.forEach((r) => {
                t[r] = (...t) => {
                  e &&
                    M(() => {
                      T.console[r](`Sentry Logger [${r}]:`, ...t);
                    });
                };
              })
            : O.forEach((e) => {
                t[e] = () => {};
              }),
          t
        );
      }
      let I;
      I =
        "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__
          ? (0, S.Y)("logger", N)
          : N();
      var L,
        A = r(2176),
        F = Object.prototype.toString;
      function j(e) {
        return (function (e, t) {
          return F.call(e) === `[object ${t}]`;
        })(e, "Object");
      }
      function D(e) {
        return Boolean(e && e.then && "function" == typeof e.then);
      }
      !(function (e) {
        (e[(e.PENDING = 0)] = "PENDING"),
          (e[(e.RESOLVED = 1)] = "RESOLVED"),
          (e[(e.REJECTED = 2)] = "REJECTED");
      })(L || (L = {}));
      class U {
        __init() {
          this._state = L.PENDING;
        }
        __init2() {
          this._handlers = [];
        }
        constructor(e) {
          U.prototype.__init.call(this),
            U.prototype.__init2.call(this),
            U.prototype.__init3.call(this),
            U.prototype.__init4.call(this),
            U.prototype.__init5.call(this),
            U.prototype.__init6.call(this);
          try {
            e(this._resolve, this._reject);
          } catch (e) {
            this._reject(e);
          }
        }
        then(e, t) {
          return new U((r, n) => {
            this._handlers.push([
              !1,
              (t) => {
                if (e)
                  try {
                    r(e(t));
                  } catch (e) {
                    n(e);
                  }
                else r(t);
              },
              (e) => {
                if (t)
                  try {
                    r(t(e));
                  } catch (e) {
                    n(e);
                  }
                else n(e);
              },
            ]),
              this._executeHandlers();
          });
        }
        catch(e) {
          return this.then((e) => e, e);
        }
        finally(e) {
          return new U((t, r) => {
            let n, a;
            return this.then(
              (t) => {
                (a = !1), (n = t), e && e();
              },
              (t) => {
                (a = !0), (n = t), e && e();
              }
            ).then(() => {
              a ? r(n) : t(n);
            });
          });
        }
        __init3() {
          this._resolve = (e) => {
            this._setResult(L.RESOLVED, e);
          };
        }
        __init4() {
          this._reject = (e) => {
            this._setResult(L.REJECTED, e);
          };
        }
        __init5() {
          this._setResult = (e, t) => {
            this._state === L.PENDING &&
              (D(t)
                ? t.then(this._resolve, this._reject)
                : ((this._state = e),
                  (this._value = t),
                  this._executeHandlers()));
          };
        }
        __init6() {
          this._executeHandlers = () => {
            if (this._state !== L.PENDING) {
              var e = this._handlers.slice();
              (this._handlers = []),
                e.forEach((e) => {
                  e[0] ||
                    (this._state === L.RESOLVED && e[1](this._value),
                    this._state === L.REJECTED && e[2](this._value),
                    (e[0] = !0));
                });
            }
          };
        }
      }
      function B(e) {
        return z(e, new Map());
      }
      function z(e, t) {
        if (j(e)) {
          if (void 0 !== (a = t.get(e))) return a;
          var r = {};
          for (var n of (t.set(e, r), Object.keys(e)))
            void 0 !== e[n] && (r[n] = z(e[n], t));
          return r;
        }
        var a;
        return Array.isArray(e)
          ? void 0 !== (a = t.get(e))
            ? a
            : ((r = []),
              t.set(e, r),
              e.forEach((e) => {
                r.push(z(e, t));
              }),
              r)
          : e;
      }
      function H(e, t = {}) {
        if (
          (t.user &&
            (!e.ipAddress &&
              t.user.ip_address &&
              (e.ipAddress = t.user.ip_address),
            e.did ||
              t.did ||
              (e.did = t.user.id || t.user.email || t.user.username)),
          (e.timestamp = t.timestamp || (0, R.ph)()),
          t.ignoreDuration && (e.ignoreDuration = t.ignoreDuration),
          t.sid && (e.sid = 32 === t.sid.length ? t.sid : q()),
          void 0 !== t.init && (e.init = t.init),
          !e.did && t.did && (e.did = `${t.did}`),
          "number" == typeof t.started && (e.started = t.started),
          e.ignoreDuration)
        )
          e.duration = void 0;
        else if ("number" == typeof t.duration) e.duration = t.duration;
        else {
          var r = e.timestamp - e.started;
          e.duration = r >= 0 ? r : 0;
        }
        t.release && (e.release = t.release),
          t.environment && (e.environment = t.environment),
          !e.ipAddress && t.ipAddress && (e.ipAddress = t.ipAddress),
          !e.userAgent && t.userAgent && (e.userAgent = t.userAgent),
          "number" == typeof t.errors && (e.errors = t.errors),
          t.status && (e.status = t.status);
      }
      class V {
        constructor() {
          V.prototype.__init.call(this),
            V.prototype.__init2.call(this),
            V.prototype.__init3.call(this),
            V.prototype.__init4.call(this),
            V.prototype.__init5.call(this),
            V.prototype.__init6.call(this),
            V.prototype.__init7.call(this),
            V.prototype.__init8.call(this),
            V.prototype.__init9.call(this),
            V.prototype.__init10.call(this);
        }
        __init() {
          this._notifyingListeners = !1;
        }
        __init2() {
          this._scopeListeners = [];
        }
        __init3() {
          this._eventProcessors = [];
        }
        __init4() {
          this._breadcrumbs = [];
        }
        __init5() {
          this._user = {};
        }
        __init6() {
          this._tags = {};
        }
        __init7() {
          this._extra = {};
        }
        __init8() {
          this._contexts = {};
        }
        __init9() {
          this._attachments = [];
        }
        __init10() {
          this._sdkProcessingMetadata = {};
        }
        static clone(e) {
          var t = new V();
          return (
            e &&
              ((t._breadcrumbs = [...e._breadcrumbs]),
              (t._tags = { ...e._tags }),
              (t._extra = { ...e._extra }),
              (t._contexts = { ...e._contexts }),
              (t._user = e._user),
              (t._level = e._level),
              (t._span = e._span),
              (t._session = e._session),
              (t._transactionName = e._transactionName),
              (t._fingerprint = e._fingerprint),
              (t._eventProcessors = [...e._eventProcessors]),
              (t._requestSession = e._requestSession),
              (t._attachments = [...e._attachments])),
            t
          );
        }
        addScopeListener(e) {
          this._scopeListeners.push(e);
        }
        addEventProcessor(e) {
          return this._eventProcessors.push(e), this;
        }
        setUser(e) {
          return (
            (this._user = e || {}),
            this._session && H(this._session, { user: e }),
            this._notifyScopeListeners(),
            this
          );
        }
        getUser() {
          return this._user;
        }
        getRequestSession() {
          return this._requestSession;
        }
        setRequestSession(e) {
          return (this._requestSession = e), this;
        }
        setTags(e) {
          return (
            (this._tags = { ...this._tags, ...e }),
            this._notifyScopeListeners(),
            this
          );
        }
        setTag(e, t) {
          return (
            (this._tags = { ...this._tags, [e]: t }),
            this._notifyScopeListeners(),
            this
          );
        }
        setExtras(e) {
          return (
            (this._extra = { ...this._extra, ...e }),
            this._notifyScopeListeners(),
            this
          );
        }
        setExtra(e, t) {
          return (
            (this._extra = { ...this._extra, [e]: t }),
            this._notifyScopeListeners(),
            this
          );
        }
        setFingerprint(e) {
          return (this._fingerprint = e), this._notifyScopeListeners(), this;
        }
        setLevel(e) {
          return (this._level = e), this._notifyScopeListeners(), this;
        }
        setTransactionName(e) {
          return (
            (this._transactionName = e), this._notifyScopeListeners(), this
          );
        }
        setContext(e, t) {
          return (
            null === t
              ? delete this._contexts[e]
              : (this._contexts = { ...this._contexts, [e]: t }),
            this._notifyScopeListeners(),
            this
          );
        }
        setSpan(e) {
          return (this._span = e), this._notifyScopeListeners(), this;
        }
        getSpan() {
          return this._span;
        }
        getTransaction() {
          var e = this.getSpan();
          return e && e.transaction;
        }
        setSession(e) {
          return (
            e ? (this._session = e) : delete this._session,
            this._notifyScopeListeners(),
            this
          );
        }
        getSession() {
          return this._session;
        }
        update(e) {
          if (!e) return this;
          if ("function" == typeof e) {
            var t = e(this);
            return t instanceof V ? t : this;
          }
          return (
            e instanceof V
              ? ((this._tags = { ...this._tags, ...e._tags }),
                (this._extra = { ...this._extra, ...e._extra }),
                (this._contexts = { ...this._contexts, ...e._contexts }),
                e._user &&
                  Object.keys(e._user).length &&
                  (this._user = e._user),
                e._level && (this._level = e._level),
                e._fingerprint && (this._fingerprint = e._fingerprint),
                e._requestSession && (this._requestSession = e._requestSession))
              : j(e) &&
                ((e = e),
                (this._tags = { ...this._tags, ...e.tags }),
                (this._extra = { ...this._extra, ...e.extra }),
                (this._contexts = { ...this._contexts, ...e.contexts }),
                e.user && (this._user = e.user),
                e.level && (this._level = e.level),
                e.fingerprint && (this._fingerprint = e.fingerprint),
                e.requestSession && (this._requestSession = e.requestSession)),
            this
          );
        }
        clear() {
          return (
            (this._breadcrumbs = []),
            (this._tags = {}),
            (this._extra = {}),
            (this._user = {}),
            (this._contexts = {}),
            (this._level = void 0),
            (this._transactionName = void 0),
            (this._fingerprint = void 0),
            (this._requestSession = void 0),
            (this._span = void 0),
            (this._session = void 0),
            this._notifyScopeListeners(),
            (this._attachments = []),
            this
          );
        }
        addBreadcrumb(e, t) {
          var r = "number" == typeof t ? Math.min(t, 100) : 100;
          if (r <= 0) return this;
          var n = { timestamp: (0, R.yW)(), ...e };
          return (
            (this._breadcrumbs = [...this._breadcrumbs, n].slice(-r)),
            this._notifyScopeListeners(),
            this
          );
        }
        clearBreadcrumbs() {
          return (this._breadcrumbs = []), this._notifyScopeListeners(), this;
        }
        addAttachment(e) {
          return this._attachments.push(e), this;
        }
        getAttachments() {
          return this._attachments;
        }
        clearAttachments() {
          return (this._attachments = []), this;
        }
        applyToEvent(e, t = {}) {
          if (
            (this._extra &&
              Object.keys(this._extra).length &&
              (e.extra = { ...this._extra, ...e.extra }),
            this._tags &&
              Object.keys(this._tags).length &&
              (e.tags = { ...this._tags, ...e.tags }),
            this._user &&
              Object.keys(this._user).length &&
              (e.user = { ...this._user, ...e.user }),
            this._contexts &&
              Object.keys(this._contexts).length &&
              (e.contexts = { ...this._contexts, ...e.contexts }),
            this._level && (e.level = this._level),
            this._transactionName && (e.transaction = this._transactionName),
            this._span)
          ) {
            e.contexts = { trace: this._span.getTraceContext(), ...e.contexts };
            var r = this._span.transaction && this._span.transaction.name;
            r && (e.tags = { transaction: r, ...e.tags });
          }
          return (
            this._applyFingerprint(e),
            (e.breadcrumbs = [...(e.breadcrumbs || []), ...this._breadcrumbs]),
            (e.breadcrumbs = e.breadcrumbs.length > 0 ? e.breadcrumbs : void 0),
            (e.sdkProcessingMetadata = this._sdkProcessingMetadata),
            this._notifyEventProcessors(
              [
                ...(0, S.Y)("globalEventProcessors", () => []),
                ...this._eventProcessors,
              ],
              e,
              t
            )
          );
        }
        setSDKProcessingMetadata(e) {
          return (
            (this._sdkProcessingMetadata = {
              ...this._sdkProcessingMetadata,
              ...e,
            }),
            this
          );
        }
        _notifyEventProcessors(e, t, r, n = 0) {
          return new U((a, o) => {
            var i = e[n];
            if (null === t || "function" != typeof i) a(t);
            else {
              var l = i({ ...t }, r);
              ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                i.id &&
                null === l &&
                I.log(`Event processor "${i.id}" dropped event`),
                D(l)
                  ? l
                      .then((t) =>
                        this._notifyEventProcessors(e, t, r, n + 1).then(a)
                      )
                      .then(null, o)
                  : this._notifyEventProcessors(e, l, r, n + 1)
                      .then(a)
                      .then(null, o);
            }
          });
        }
        _notifyScopeListeners() {
          this._notifyingListeners ||
            ((this._notifyingListeners = !0),
            this._scopeListeners.forEach((e) => {
              e(this);
            }),
            (this._notifyingListeners = !1));
        }
        _applyFingerprint(e) {
          (e.fingerprint = e.fingerprint
            ? Array.isArray(e.fingerprint)
              ? e.fingerprint
              : [e.fingerprint]
            : []),
            this._fingerprint &&
              (e.fingerprint = e.fingerprint.concat(this._fingerprint)),
            e.fingerprint && !e.fingerprint.length && delete e.fingerprint;
        }
      }
      var $ = 100;
      class W {
        __init() {
          this._stack = [{}];
        }
        constructor(e, t = new V(), r = 4) {
          (this._version = r),
            W.prototype.__init.call(this),
            (this.getStackTop().scope = t),
            e && this.bindClient(e);
        }
        isOlderThan(e) {
          return this._version < e;
        }
        bindClient(e) {
          (this.getStackTop().client = e),
            e && e.setupIntegrations && e.setupIntegrations();
        }
        pushScope() {
          var e = V.clone(this.getScope());
          return (
            this.getStack().push({ client: this.getClient(), scope: e }), e
          );
        }
        popScope() {
          return !(this.getStack().length <= 1 || !this.getStack().pop());
        }
        withScope(e) {
          var t = this.pushScope();
          try {
            e(t);
          } finally {
            this.popScope();
          }
        }
        getClient() {
          return this.getStackTop().client;
        }
        getScope() {
          return this.getStackTop().scope;
        }
        getStack() {
          return this._stack;
        }
        getStackTop() {
          return this._stack[this._stack.length - 1];
        }
        captureException(e, t) {
          var r = (this._lastEventId = t && t.event_id ? t.event_id : q()),
            n = new Error("Sentry syntheticException");
          return (
            this._withClient((a, o) => {
              a.captureException(
                e,
                {
                  originalException: e,
                  syntheticException: n,
                  ...t,
                  event_id: r,
                },
                o
              );
            }),
            r
          );
        }
        captureMessage(e, t, r) {
          var n = (this._lastEventId = r && r.event_id ? r.event_id : q()),
            a = new Error(e);
          return (
            this._withClient((o, i) => {
              o.captureMessage(
                e,
                t,
                {
                  originalException: e,
                  syntheticException: a,
                  ...r,
                  event_id: n,
                },
                i
              );
            }),
            n
          );
        }
        captureEvent(e, t) {
          var r = t && t.event_id ? t.event_id : q();
          return (
            "transaction" !== e.type && (this._lastEventId = r),
            this._withClient((n, a) => {
              n.captureEvent(e, { ...t, event_id: r }, a);
            }),
            r
          );
        }
        lastEventId() {
          return this._lastEventId;
        }
        addBreadcrumb(e, t) {
          const { scope: r, client: n } = this.getStackTop();
          if (!r || !n) return;
          const { beforeBreadcrumb: a = null, maxBreadcrumbs: o = $ } =
            (n.getOptions && n.getOptions()) || {};
          if (!(o <= 0)) {
            var i = { timestamp: (0, R.yW)(), ...e },
              l = a ? M(() => a(i, t)) : i;
            null !== l && r.addBreadcrumb(l, o);
          }
        }
        setUser(e) {
          var t = this.getScope();
          t && t.setUser(e);
        }
        setTags(e) {
          var t = this.getScope();
          t && t.setTags(e);
        }
        setExtras(e) {
          var t = this.getScope();
          t && t.setExtras(e);
        }
        setTag(e, t) {
          var r = this.getScope();
          r && r.setTag(e, t);
        }
        setExtra(e, t) {
          var r = this.getScope();
          r && r.setExtra(e, t);
        }
        setContext(e, t) {
          var r = this.getScope();
          r && r.setContext(e, t);
        }
        configureScope(e) {
          const { scope: t, client: r } = this.getStackTop();
          t && r && e(t);
        }
        run(e) {
          var t = G(this);
          try {
            e(this);
          } finally {
            G(t);
          }
        }
        getIntegration(e) {
          var t = this.getClient();
          if (!t) return null;
          try {
            return t.getIntegration(e);
          } catch (t) {
            return (
              ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                I.warn(
                  `Cannot retrieve integration ${e.id} from the current Hub`
                ),
              null
            );
          }
        }
        startTransaction(e, t) {
          return this._callExtensionMethod("startTransaction", e, t);
        }
        traceHeaders() {
          return this._callExtensionMethod("traceHeaders");
        }
        captureSession(e = !1) {
          if (e) return this.endSession();
          this._sendSessionUpdate();
        }
        endSession() {
          var e = this.getStackTop(),
            t = e && e.scope,
            r = t && t.getSession();
          r &&
            (function (e, t) {
              let r = {};
              "ok" === e.status && (r = { status: "exited" }), H(e, r);
            })(r),
            this._sendSessionUpdate(),
            t && t.setSession();
        }
        startSession(e) {
          const { scope: t, client: r } = this.getStackTop(),
            { release: n, environment: a } = (r && r.getOptions()) || {};
          var o = (0, S.R)();
          const { userAgent: i } = o.navigator || {};
          var l = (function (e) {
            var t = (0, R.ph)(),
              r = {
                sid: q(),
                init: !0,
                timestamp: t,
                started: t,
                duration: 0,
                status: "ok",
                errors: 0,
                ignoreDuration: !1,
                toJSON: () =>
                  (function (e) {
                    return B({
                      sid: `${e.sid}`,
                      init: e.init,
                      started: new Date(1e3 * e.started).toISOString(),
                      timestamp: new Date(1e3 * e.timestamp).toISOString(),
                      status: e.status,
                      errors: e.errors,
                      did:
                        "number" == typeof e.did || "string" == typeof e.did
                          ? `${e.did}`
                          : void 0,
                      duration: e.duration,
                      attrs: {
                        release: e.release,
                        environment: e.environment,
                        ip_address: e.ipAddress,
                        user_agent: e.userAgent,
                      },
                    });
                  })(r),
              };
            return e && H(r, e), r;
          })({
            release: n,
            environment: a,
            ...(t && { user: t.getUser() }),
            ...(i && { userAgent: i }),
            ...e,
          });
          if (t) {
            var u = t.getSession && t.getSession();
            u && "ok" === u.status && H(u, { status: "exited" }),
              this.endSession(),
              t.setSession(l);
          }
          return l;
        }
        _sendSessionUpdate() {
          const { scope: e, client: t } = this.getStackTop();
          if (e) {
            var r = e.getSession();
            r && t && t.captureSession && t.captureSession(r);
          }
        }
        _withClient(e) {
          const { scope: t, client: r } = this.getStackTop();
          r && e(r, t);
        }
        _callExtensionMethod(e, ...t) {
          var r = Y().__SENTRY__;
          if (r && r.extensions && "function" == typeof r.extensions[e])
            return r.extensions[e].apply(this, t);
          ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
            I.warn(`Extension method ${e} couldn't be found, doing nothing.`);
        }
      }
      function Y() {
        var e = (0, S.R)();
        return (
          (e.__SENTRY__ = e.__SENTRY__ || { extensions: {}, hub: void 0 }), e
        );
      }
      function G(e) {
        var t = Y(),
          r = X(t);
        return J(t, e), r;
      }
      function Q() {
        var e = Y();
        return (
          (K(e) && !X(e).isOlderThan(4)) || J(e, new W()),
          (0, A.KV)()
            ? (function (e) {
                try {
                  var t = Y().__SENTRY__,
                    r =
                      t &&
                      t.extensions &&
                      t.extensions.domain &&
                      t.extensions.domain.active;
                  if (!r) return X(e);
                  if (!K(r) || X(r).isOlderThan(4)) {
                    var n = X(e).getStackTop();
                    J(r, new W(n.client, V.clone(n.scope)));
                  }
                  return X(r);
                } catch (t) {
                  return X(e);
                }
              })(e)
            : X(e)
        );
      }
      function K(e) {
        return !!(e && e.__SENTRY__ && e.__SENTRY__.hub);
      }
      function X(e) {
        return (0, S.Y)("hub", () => new W(), e);
      }
      function J(e, t) {
        return !!e && (((e.__SENTRY__ = e.__SENTRY__ || {}).hub = t), !0);
      }
      const Z = document.querySelector("#csrftoken");
      let ee = Z ? Z.getAttribute("content") : null;
      async function te(e) {
        let t;
        try {
          t = await e.json();
        } catch (t) {
          throw new Error(
            `Invalid response from Poshmark: status code: ${e.status} - ${e.statusText}`
          );
        }
        if (t.error) throw new Error(re(t.error));
        return t;
      }
      function re(e) {
        return `Error code=${e.statusCode || "NA"}: ${
          e.errorType || "GENERIC"
        } ${e.userMessage || e.errorMessage || ""}`;
      }
      async function ne(e, t, r) {
        const n = await fetch(e);
        let a = await n.blob();
        const o = new FormData();
        o.append("file", a, `file_${r}.jpeg`);
        const i = await fetch(
          `https://poshmark.com/api/posts/${t}/media/scratch`,
          { method: "POST", mode: "cors", body: o }
        );
        await (async (e) => {
          const t = e.headers.get("content-type");
          if (!t || -1 === t.indexOf("application/json")) {
            const t = await e.text();
            throw Error(t);
          }
        })(i);
        const l = await i.json();
        if (l.error)
          throw new Error(`Error processing image ${r + 1}: ${re(l.error)}`);
        return { id: l.id };
      }
      chrome.runtime.onMessage.addListener(function (t, r, n) {
        const { message: a, payload: o } = t;
        if ("CREATE:CREATE_LISTING_POSHMARK" === a) {
          const t = o.post;
          return (
            console.info("data", t, o),
            (async (t, r, n) => {
              try {
                const a = await (async function (e, t) {
                  const r = await fetch("https://poshmark.com/create-listing"),
                    n = await r.text(),
                    { id: a } = ((e) => {
                      const t = /__INITIAL_STATE__=({[^<]*});/.exec(e);
                      let r;
                      try {
                        r = JSON.parse(t[1]);
                      } catch (e) {
                        throw new Error(
                          "Cannot find user info in page. Try to login again into Poshmark."
                        );
                      }
                      let n = "",
                        a = "",
                        o = "",
                        i = "";
                      return (
                        r.userCookies &&
                          r.userCookies.userInfo &&
                          ((n =
                            r.userCookies.userInfo.email ||
                            r.userCookies.email),
                          (a =
                            r.userCookies.userInfo.username ||
                            r.userCookies.username),
                          (o = r.userCookies.userInfo.id || r.userCookies.id),
                          (i =
                            r.userCookies.userInfo.uid || r.userCookies.uid)),
                        { email: n, username: a, id: o, uid: i }
                      );
                    })(n),
                    o = await fetch(
                      `https://poshmark.com/vm-rest/users/${a}/posts`,
                      { method: "POST" }
                    ),
                    i = await te(o);
                  let l = [];
                  if (t.itemImages && t.itemImages.length > 0) {
                    const e = [];
                    let r = 0;
                    for (const n of t.itemImages) {
                      if ((e.push(ne(n, i.id, r)), 5 === e.length)) {
                        const t = await Promise.all(e);
                        l.push(...t), (e.length = 0);
                      }
                      r++;
                    }
                    if (e.length) {
                      const t = await Promise.all(e);
                      l.push(...t);
                    }
                  }
                  const u = l.find((e) => e instanceof Error);
                  if (u) throw u;
                  const s = [...l];
                  (e.post.cover_shot = s[0]), s.shift(), (e.post.pictures = s);
                  const c = new Headers();
                  c.append("X-XSRF-TOKEN", ee),
                    c.append("Content-Type", "application/json");
                  const d = await fetch(
                    `https://poshmark.com/vm-rest/posts/${i.id}`,
                    { method: "POST", headers: c, body: JSON.stringify(e) }
                  );
                  await te(d);
                  const p = await fetch(
                    `https://poshmark.com/vm-rest/posts/${i.id}/status/published?app_version=5.04&user_certified=true`,
                    { method: "PUT" }
                  );
                  return { ...(await te(p)), id: i.id };
                })(t, r);
                if (a && !a.error) {
                  const e = new Headers();
                  return (
                    e.append("Content-Type", "application/json"),
                    await fetch(`${r.baseUrl}/listings`, {
                      method: "POST",
                      headers: e,
                      body: JSON.stringify({
                        marketplaceId: r.marketplaceId,
                        status: "listed",
                        listingUrl: `https://poshmark.com/listing/${a.id}`,
                        listingId: a.id,
                        itemId: r.itemId,
                      }),
                    }),
                    n({ type: "success" })
                  );
                }
                await e({
                  responseBody: a.error,
                  requestBody: t,
                  baseUrl: r.baseUrl,
                  itemId: r.itemId,
                  userId: r.userId,
                  endpoint: `https://poshmark.com/listing/${a.id}`,
                  marketplaceId: r.marketplaceId,
                }),
                  n({ type: "failed", errorObject: a.error });
              } catch (a) {
                const o = {
                  responseBody: `${JSON.stringify(a)} - ${a.toString()}`,
                  requestBody: t,
                  baseUrl: r.baseUrl,
                  itemId: r.itemId,
                  userId: r.userId,
                  endpoint: "https://poshmark.com/listing/ERRORED",
                  marketplaceId: r.marketplaceId,
                };
                await e(o),
                  n({ type: "failed", errorObject: a.message }),
                  class {
                    static capture(e, t) {
                      var r;
                      console.error(e),
                        (r = (r) => {
                          var n;
                          t && r.setExtra("data", t),
                            (n = e),
                            Q().captureException(n, { captureContext: void 0 });
                        }),
                        Q().withScope(r);
                    }
                  }.capture(a, o);
              }
            })({ post: t }, o, n).catch((e) => {
              console.log("error", e), n({ type: "failed" });
            }),
            !0
          );
        }
        if ("RETURN:DELIST_LISTING_POSHMARK" === a)
          return (
            (async (t, r, n) => {
              const a = new Headers();
              a.append("Content-Type", "application/json");
              const o = await fetch(
                  `https://poshmark.com/vm-rest/posts/${r.poshmarkItemID}?app_version=2.55&app_type=web`,
                  { method: "DELETE", headers: a }
                ),
                i = await o.json();
              if ((console.log("deleteListingResponse", i), i && !i.error))
                return (
                  await fetch(`${r.baseUrl}/listings/${t}`, {
                    method: "PUT",
                    headers: a,
                    body: JSON.stringify({ status: "delisted" }),
                  }),
                  n({ type: "success", response: i })
                );
              await e({
                responseBody: i,
                requestBody: r,
                baseUrl: r.baseUrl,
                itemId: r.itemId,
                userId: r.userId,
                endpoint: `https://poshmark.com/vm-rest/posts/${r.poshmarkItemID}?app_version=2.55&app_type=web`,
                marketplaceId: r.marketplaceId,
              }),
                n({ type: "failed", errorObject: i.error });
            })(o.listingId, o, n).catch((e) => {
              console.log("error", e), n({ type: "failed" });
            }),
            !0
          );
      });
    })();
})();
//# sourceMappingURL=poshmark.js.map
