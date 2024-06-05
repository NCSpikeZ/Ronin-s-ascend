/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/canvas.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}
module.exports = _asyncToGenerator, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
module.exports = _classCallCheck, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toPropertyKey = __webpack_require__(/*! ./toPropertyKey.js */ "./node_modules/@babel/runtime/helpers/toPropertyKey.js");
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
module.exports = _createClass, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/regeneratorRuntime.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/regeneratorRuntime.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/typeof.js")["default"];
function _regeneratorRuntime() {
  "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  module.exports = _regeneratorRuntime = function _regeneratorRuntime() {
    return e;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  var t,
    e = {},
    r = Object.prototype,
    n = r.hasOwnProperty,
    o = Object.defineProperty || function (t, e, r) {
      t[e] = r.value;
    },
    i = "function" == typeof Symbol ? Symbol : {},
    a = i.iterator || "@@iterator",
    c = i.asyncIterator || "@@asyncIterator",
    u = i.toStringTag || "@@toStringTag";
  function define(t, e, r) {
    return Object.defineProperty(t, e, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), t[e];
  }
  try {
    define({}, "");
  } catch (t) {
    define = function define(t, e, r) {
      return t[e] = r;
    };
  }
  function wrap(t, e, r, n) {
    var i = e && e.prototype instanceof Generator ? e : Generator,
      a = Object.create(i.prototype),
      c = new Context(n || []);
    return o(a, "_invoke", {
      value: makeInvokeMethod(t, r, c)
    }), a;
  }
  function tryCatch(t, e, r) {
    try {
      return {
        type: "normal",
        arg: t.call(e, r)
      };
    } catch (t) {
      return {
        type: "throw",
        arg: t
      };
    }
  }
  e.wrap = wrap;
  var h = "suspendedStart",
    l = "suspendedYield",
    f = "executing",
    s = "completed",
    y = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var p = {};
  define(p, a, function () {
    return this;
  });
  var d = Object.getPrototypeOf,
    v = d && d(d(values([])));
  v && v !== r && n.call(v, a) && (p = v);
  var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
  function defineIteratorMethods(t) {
    ["next", "throw", "return"].forEach(function (e) {
      define(t, e, function (t) {
        return this._invoke(e, t);
      });
    });
  }
  function AsyncIterator(t, e) {
    function invoke(r, o, i, a) {
      var c = tryCatch(t[r], t, o);
      if ("throw" !== c.type) {
        var u = c.arg,
          h = u.value;
        return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
          invoke("next", t, i, a);
        }, function (t) {
          invoke("throw", t, i, a);
        }) : e.resolve(h).then(function (t) {
          u.value = t, i(u);
        }, function (t) {
          return invoke("throw", t, i, a);
        });
      }
      a(c.arg);
    }
    var r;
    o(this, "_invoke", {
      value: function value(t, n) {
        function callInvokeWithMethodAndArg() {
          return new e(function (e, r) {
            invoke(t, n, e, r);
          });
        }
        return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(e, r, n) {
    var o = h;
    return function (i, a) {
      if (o === f) throw Error("Generator is already running");
      if (o === s) {
        if ("throw" === i) throw a;
        return {
          value: t,
          done: !0
        };
      }
      for (n.method = i, n.arg = a;;) {
        var c = n.delegate;
        if (c) {
          var u = maybeInvokeDelegate(c, n);
          if (u) {
            if (u === y) continue;
            return u;
          }
        }
        if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
          if (o === h) throw o = s, n.arg;
          n.dispatchException(n.arg);
        } else "return" === n.method && n.abrupt("return", n.arg);
        o = f;
        var p = tryCatch(e, r, n);
        if ("normal" === p.type) {
          if (o = n.done ? s : l, p.arg === y) continue;
          return {
            value: p.arg,
            done: n.done
          };
        }
        "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
      }
    };
  }
  function maybeInvokeDelegate(e, r) {
    var n = r.method,
      o = e.iterator[n];
    if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
    var i = tryCatch(o, e.iterator, r.arg);
    if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
    var a = i.arg;
    return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
  }
  function pushTryEntry(t) {
    var e = {
      tryLoc: t[0]
    };
    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
  }
  function resetTryEntry(t) {
    var e = t.completion || {};
    e.type = "normal", delete e.arg, t.completion = e;
  }
  function Context(t) {
    this.tryEntries = [{
      tryLoc: "root"
    }], t.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(e) {
    if (e || "" === e) {
      var r = e[a];
      if (r) return r.call(e);
      if ("function" == typeof e.next) return e;
      if (!isNaN(e.length)) {
        var o = -1,
          i = function next() {
            for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
            return next.value = t, next.done = !0, next;
          };
        return i.next = i;
      }
    }
    throw new TypeError(_typeof(e) + " is not iterable");
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), o(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
    var e = "function" == typeof t && t.constructor;
    return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
  }, e.mark = function (t) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
  }, e.awrap = function (t) {
    return {
      __await: t
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {
    return this;
  }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {
    void 0 === i && (i = Promise);
    var a = new AsyncIterator(wrap(t, r, n, o), i);
    return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
      return t.done ? t.value : a.next();
    });
  }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () {
    return this;
  }), define(g, "toString", function () {
    return "[object Generator]";
  }), e.keys = function (t) {
    var e = Object(t),
      r = [];
    for (var n in e) r.push(n);
    return r.reverse(), function next() {
      for (; r.length;) {
        var t = r.pop();
        if (t in e) return next.value = t, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, e.values = values, Context.prototype = {
    constructor: Context,
    reset: function reset(e) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
    },
    stop: function stop() {
      this.done = !0;
      var t = this.tryEntries[0].completion;
      if ("throw" === t.type) throw t.arg;
      return this.rval;
    },
    dispatchException: function dispatchException(e) {
      if (this.done) throw e;
      var r = this;
      function handle(n, o) {
        return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
      }
      for (var o = this.tryEntries.length - 1; o >= 0; --o) {
        var i = this.tryEntries[o],
          a = i.completion;
        if ("root" === i.tryLoc) return handle("end");
        if (i.tryLoc <= this.prev) {
          var c = n.call(i, "catchLoc"),
            u = n.call(i, "finallyLoc");
          if (c && u) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          } else if (c) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
          } else {
            if (!u) throw Error("try statement without catch or finally");
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          }
        }
      }
    },
    abrupt: function abrupt(t, e) {
      for (var r = this.tryEntries.length - 1; r >= 0; --r) {
        var o = this.tryEntries[r];
        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
          var i = o;
          break;
        }
      }
      i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
      var a = i ? i.completion : {};
      return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
    },
    complete: function complete(t, e) {
      if ("throw" === t.type) throw t.arg;
      return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
    },
    finish: function finish(t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
      }
    },
    "catch": function _catch(t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.tryLoc === t) {
          var n = r.completion;
          if ("throw" === n.type) {
            var o = n.arg;
            resetTryEntry(r);
          }
          return o;
        }
      }
      throw Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(e, r, n) {
      return this.delegate = {
        iterator: values(e),
        resultName: r,
        nextLoc: n
      }, "next" === this.method && (this.arg = t), y;
    }
  }, e;
}
module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toPrimitive.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toPrimitive.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/typeof.js")["default"];
function toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
module.exports = toPrimitive, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toPropertyKey.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toPropertyKey.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/typeof.js")["default"];
var toPrimitive = __webpack_require__(/*! ./toPrimitive.js */ "./node_modules/@babel/runtime/helpers/toPrimitive.js");
function toPropertyKey(t) {
  var i = toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}
module.exports = toPropertyKey, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(o) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(o);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// TODO(Babel 8): Remove this file.

var runtime = __webpack_require__(/*! ../helpers/regeneratorRuntime */ "./node_modules/@babel/runtime/helpers/regeneratorRuntime.js")();
module.exports = runtime;

// Copied from https://github.com/facebook/regenerator/blob/main/packages/runtime/runtime.js#L736=
try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ }),

/***/ "./src/font/Genjiro.otf":
/*!******************************!*\
  !*** ./src/font/Genjiro.otf ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "fonts/Genjiro.ab664676c3514216fec7bdb5b39a43d7.otf");

/***/ }),

/***/ "./src/img/SpriteEnemyDeath.png":
/*!**************************************!*\
  !*** ./src/img/SpriteEnemyDeath.png ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "images/SpriteEnemyDeath.388d7325a5b7ddffbf93c1861daec6c2.png");

/***/ }),

/***/ "./src/img/arrow.png":
/*!***************************!*\
  !*** ./src/img/arrow.png ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "images/arrow.38cdf0209bf5c2f5039989333034e2c0.png");

/***/ }),

/***/ "./src/img/background.png":
/*!********************************!*\
  !*** ./src/img/background.png ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "images/background.0357d163e2edd7add0fe1b819168bd73.png");

/***/ }),

/***/ "./src/img/block.png":
/*!***************************!*\
  !*** ./src/img/block.png ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "images/block.fac88169424b827f4bbca82bd7a01a9f.png");

/***/ }),

/***/ "./src/img/blockTri.png":
/*!******************************!*\
  !*** ./src/img/blockTri.png ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "images/blockTri.0f732b622c2a2a256940ec159c5a7941.png");

/***/ }),

/***/ "./src/img/bowIcn.png":
/*!****************************!*\
  !*** ./src/img/bowIcn.png ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "images/bowIcn.0ed577e2ad8f6087a35ef95db05e4787.png");

/***/ }),

/***/ "./src/img/hills.png":
/*!***************************!*\
  !*** ./src/img/hills.png ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "images/hills.1a64aadc495fff3144ab2a0eb793eb37.png");

/***/ }),

/***/ "./src/img/logo.svg":
/*!**************************!*\
  !*** ./src/img/logo.svg ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "images/logo.2e68f38db6d11486202b1ca945d17c1e.svg");

/***/ }),

/***/ "./src/img/platform.png":
/*!******************************!*\
  !*** ./src/img/platform.png ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "images/platform.b9a187515e4332f3e49a3fdc571afeae.png");

/***/ }),

/***/ "./src/img/platformSmallTall.png":
/*!***************************************!*\
  !*** ./src/img/platformSmallTall.png ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "images/platformSmallTall.7ad1c50ad7a771a4f5dd5c019d4cb8b2.png");

/***/ }),

/***/ "./src/img/spriteAttaque.png":
/*!***********************************!*\
  !*** ./src/img/spriteAttaque.png ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "images/spriteAttaque.1b48fd381bbf8f7214ceb213cbeb7381.png");

/***/ }),

/***/ "./src/img/spriteAttaqueLeft.png":
/*!***************************************!*\
  !*** ./src/img/spriteAttaqueLeft.png ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "images/spriteAttaqueLeft.57b0ee7d71d6baf7c9772857388041a6.png");

/***/ }),

/***/ "./src/img/spriteBow.png":
/*!*******************************!*\
  !*** ./src/img/spriteBow.png ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "images/spriteBow.f9e94b676540256a7307297f856aebb2.png");

/***/ }),

/***/ "./src/img/spriteEnemy.png":
/*!*********************************!*\
  !*** ./src/img/spriteEnemy.png ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "images/spriteEnemy.25fb69c6c5d90c6205471c32fb088c20.png");

/***/ }),

/***/ "./src/img/spriteEnemyReverse.png":
/*!****************************************!*\
  !*** ./src/img/spriteEnemyReverse.png ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "images/spriteEnemyReverse.a3949a5d1e66b4d2b523683487fb1c01.png");

/***/ }),

/***/ "./src/img/spriteRunLeft.png":
/*!***********************************!*\
  !*** ./src/img/spriteRunLeft.png ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "images/spriteRunLeft.137c0756a50f7240c4998e9a3134a031.png");

/***/ }),

/***/ "./src/img/spriteRunRight.png":
/*!************************************!*\
  !*** ./src/img/spriteRunRight.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "images/spriteRunRight.6746b0abc95f152904874aac3bb02972.png");

/***/ }),

/***/ "./src/img/spriteShotLeft.png":
/*!************************************!*\
  !*** ./src/img/spriteShotLeft.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "images/spriteShotLeft.e86fd783489a6581660416dba8cd70ee.png");

/***/ }),

/***/ "./src/img/spriteShotRight.png":
/*!*************************************!*\
  !*** ./src/img/spriteShotRight.png ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "images/spriteShotRight.9a5c03b1913845655de37c6e0d00af83.png");

/***/ }),

/***/ "./src/img/spriteStandLeft.png":
/*!*************************************!*\
  !*** ./src/img/spriteStandLeft.png ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "images/spriteStandLeft.08374e69796b6b8c044b484595fb3880.png");

/***/ }),

/***/ "./src/img/spriteStandRight.png":
/*!**************************************!*\
  !*** ./src/img/spriteStandRight.png ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "images/spriteStandRight.e8d0bdb91063afaddef07897c15452e6.png");

/***/ }),

/***/ "./src/js/canvas.js":
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils.js */ "./src/js/utils.js");
/* harmony import */ var _img_platform_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/platform.png */ "./src/img/platform.png");
/* harmony import */ var _img_hills_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../img/hills.png */ "./src/img/hills.png");
/* harmony import */ var _img_background_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../img/background.png */ "./src/img/background.png");
/* harmony import */ var _img_platformSmallTall_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../img/platformSmallTall.png */ "./src/img/platformSmallTall.png");
/* harmony import */ var _img_block_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../img/block.png */ "./src/img/block.png");
/* harmony import */ var _img_blockTri_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../img/blockTri.png */ "./src/img/blockTri.png");
/* harmony import */ var _img_bowIcn_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../img/bowIcn.png */ "./src/img/bowIcn.png");
/* harmony import */ var _img_arrow_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../img/arrow.png */ "./src/img/arrow.png");
/* harmony import */ var _img_spriteShotRight_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../img/spriteShotRight.png */ "./src/img/spriteShotRight.png");
/* harmony import */ var _img_spriteShotLeft_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../img/spriteShotLeft.png */ "./src/img/spriteShotLeft.png");
/* harmony import */ var _img_spriteRunLeft_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../img/spriteRunLeft.png */ "./src/img/spriteRunLeft.png");
/* harmony import */ var _img_spriteRunRight_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../img/spriteRunRight.png */ "./src/img/spriteRunRight.png");
/* harmony import */ var _img_spriteStandLeft_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../img/spriteStandLeft.png */ "./src/img/spriteStandLeft.png");
/* harmony import */ var _img_spriteStandRight_png__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../img/spriteStandRight.png */ "./src/img/spriteStandRight.png");
/* harmony import */ var _img_spriteEnemy_png__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../img/spriteEnemy.png */ "./src/img/spriteEnemy.png");
/* harmony import */ var _img_spriteEnemyReverse_png__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../img/spriteEnemyReverse.png */ "./src/img/spriteEnemyReverse.png");
/* harmony import */ var _img_SpriteEnemyDeath_png__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../img/SpriteEnemyDeath.png */ "./src/img/SpriteEnemyDeath.png");
/* harmony import */ var _img_spriteAttaque_png__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../img/spriteAttaque.png */ "./src/img/spriteAttaque.png");
/* harmony import */ var _img_spriteAttaqueLeft_png__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../img/spriteAttaqueLeft.png */ "./src/img/spriteAttaqueLeft.png");
/* harmony import */ var _img_spriteBow_png__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../img/spriteBow.png */ "./src/img/spriteBow.png");
/* harmony import */ var _img_logo_svg__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../img/logo.svg */ "./src/img/logo.svg");
/* harmony import */ var _font_Genjiro_otf__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../font/Genjiro.otf */ "./src/font/Genjiro.otf");



























var menu = document.createElement('div');
menu.id = 'menu';
var menuImage = document.createElement('img');
menuImage.src = _img_logo_svg__WEBPACK_IMPORTED_MODULE_25__["default"];
var startButton = document.createElement('button');
startButton.id = 'startButton';
startButton.textContent = 'Start';
menu.appendChild(menuImage);
menu.appendChild(startButton);
document.body.appendChild(menu);
var style = document.createElement('style');
style.innerHTML = "\n    #menu {\n        position: absolute;\n        width: 100%;\n        height: 100%;\n        background: rgba(0, 0, 0, 0.7);\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        justify-content: center;\n        z-index: 1;\n    }\n\n    #menu img {\n        max-width: 15%;\n        height: auto;\n        margin-bottom: 50px;\n    }\n\n    #menu button {\n        padding: 15px 30px;\n        font-size: 28px;\n        cursor: pointer;\n        border-radius: 5px;\n        background-color: #74a6ff;\n        color: black;\n        font-family: 'Genjiro', sans-serif;\n        letter-spacing: 5px;\n    }\n\n    canvas {\n        display: block;\n    }\n";
document.head.appendChild(style);
var gameMusic = document.getElementById('gameMusic');
gameMusic.volume = 0.5;
startButton.addEventListener('click', function () {
  gameMusic.play();
});
var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');
var gameStarted = false;
startButton.addEventListener('click', function () {
  menu.style.display = 'none';
  gameStarted = true;
});
canvas.width = 1024;
canvas.height = 576;
var gravity = 1;

var Player = /*#__PURE__*/function () {
  function Player() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Player);

    this.speed = 5;
    this.lastJumpTime = 0;
    this.position = {
      x: 100,
      y: 100
    };
    this.velocity = {
      x: 0,
      y: 0
    };
    this.width = 200; // taille player

    this.height = 200;
    this.direction = 'right';
    this.isJumping = false; // jump?

    this.iconImage = Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["createImage"])(_img_bowIcn_png__WEBPACK_IMPORTED_MODULE_11__["default"]);
    this.image = Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["createImage"])(_img_spriteStandRight_png__WEBPACK_IMPORTED_MODULE_18__["default"]);
    this.frames = 0;
    this.sprites = {
      stand: {
        right: Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["createImage"])(_img_spriteStandRight_png__WEBPACK_IMPORTED_MODULE_18__["default"]),
        left: Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["createImage"])(_img_spriteStandLeft_png__WEBPACK_IMPORTED_MODULE_17__["default"])
      },
      run: {
        right: Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["createImage"])(_img_spriteRunRight_png__WEBPACK_IMPORTED_MODULE_16__["default"]),
        left: Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["createImage"])(_img_spriteRunLeft_png__WEBPACK_IMPORTED_MODULE_15__["default"])
      },
      attaque: {
        right: Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["createImage"])(_img_spriteAttaque_png__WEBPACK_IMPORTED_MODULE_22__["default"]),
        left: Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["createImage"])(_img_spriteAttaqueLeft_png__WEBPACK_IMPORTED_MODULE_23__["default"])
      },
      shoot: {
        right: Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["createImage"])(_img_spriteShotRight_png__WEBPACK_IMPORTED_MODULE_13__["default"]),
        left: Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["createImage"])(_img_spriteShotLeft_png__WEBPACK_IMPORTED_MODULE_14__["default"])
      }
    };
    this.currentSprite = this.sprites.stand.right;
    this.frameTimer = 0;
    this.frameInterval = 20;
    this.attacking = false;
    this.invincible = false;
    this.powerUps = {
      Bow: false
    };
    this.opacity = 1;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Player, [{
    key: "draw",
    value: function draw() {
      c.save();
      c.globalAlpha = this.opacity;
      c.fillStyle = 'rgba(255, 0, 0, .2)';
      c.fillRect(this.position.x, this.position.y, this.width, this.height);
      c.drawImage(this.currentSprite, 128 * this.frames, 0, 128, 128, this.position.x, this.position.y, this.width, this.height);
      c.restore();
    }
  }, {
    key: "updateDirection",
    value: function updateDirection() {
      if (keys.left.pressed) {
        this.direction = 'left';
      } else if (keys.right.pressed) {
        this.direction = 'right';
      }
    }
  }, {
    key: "drawIcon",
    value: function drawIcon() {
      if (this.powerUps.Bow) {
        c.drawImage(this.iconImage, 10, 10, 50, 50);
      }
    }
  }, {
    key: "attack",
    value: function attack() {
      var _this = this;

      if (!this.attacking) {
        this.attacking = true;
        var currentDirection = this.currentSprite === this.sprites.stand.left || this.currentSprite === this.sprites.run.left ? 'left' : 'right';

        if (this.powerUps.Bow) {
          this.currentSprite = this.sprites.shoot[currentDirection];
        } else {
          this.currentSprite = this.sprites.attaque[currentDirection];
        }

        this.frames = 0;
        ennemies.forEach(function (ennemy) {
          if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["isColliding"])(_this, ennemy) && Math.abs(_this.position.x - ennemy.position.x) < 120) {
            ennemy.die();
          }
        });
        setTimeout(function () {
          _this.attacking = false;

          if (keys.left.pressed) {
            _this.currentSprite = _this.sprites.run.left;
          } else if (keys.right.pressed) {
            _this.currentSprite = _this.sprites.run.right;
          } else {
            _this.currentSprite = _this.sprites.stand[currentDirection];
          }
        }, 900);
      }
    }
  }, {
    key: "shootArrow",
    value: function shootArrow() {
      if (this.powerUps.Bow) {
        var arrowDirection = this.direction === 'right' ? 1 : -1;
        var arrowStartPositionX = this.position.x + this.width / 2 + (arrowDirection === 1 ? 30 : -110);
        var arrowStartPositionY = this.position.y + this.height / 2 - 5;
        arrows.push(new Arrow({
          position: {
            x: arrowStartPositionX,
            y: arrowStartPositionY
          },
          velocity: {
            x: 8 * arrowDirection,
            y: 0
          }
        }));
      }
    }
  }, {
    key: "update",
    value: function update() {
      this.updateDirection();

      if (this.attacking) {
        if (this.frameTimer >= this.frameInterval) {
          this.frameTimer = 0;
          this.frames = (this.frames + 1) % 5;
        }

        this.frameTimer++;
      } else {
        this.frameTimer++;

        if (this.frameTimer >= this.frameInterval) {
          this.frameTimer = 0;
          this.frames = (this.frames + 1) % 5;
        }
      }

      this.draw(); // gestion jump

      if (this.isJumping && this.position.y + this.height >= canvas.height - 500) {
        this.velocity.y = -25;
        this.isJumping = false;
      }

      this.position.y += this.velocity.y;
      this.position.x += this.velocity.x; // gravité

      if (this.position.y + this.height + this.velocity.y <= canvas.height) this.velocity.y += gravity;

      if (this.invincible) {
        if (this.opacity === 1) this.opacity = 0;else this.opacity = 1;
      } else this.opacity = 1;
    }
  }]);

  return Player;
}();

var Platform = /*#__PURE__*/function () {
  function Platform(_ref) {
    var x = _ref.x,
        y = _ref.y,
        image = _ref.image,
        block = _ref.block,
        text = _ref.text;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Platform);

    this.position = {
      x: x,
      y: y
    };
    this.velocity = {
      x: 0
    };
    this.image = image;
    this.width = image.width; // taille platforms

    this.height = image.height;
    this.block = block;
    this.text = text;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Platform, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.position.x, this.position.y);

      if (this.text) {
        c.fillStyle = 'red';
        c.fillText(this.text, this.position.x, this.position.y);
      }
    }
  }, {
    key: "update",
    value: function update() {
      this.draw();
      this.position.x += this.velocity.x;
    }
  }]);

  return Platform;
}(); // décoration


var GenericObject = /*#__PURE__*/function () {
  function GenericObject(_ref2) {
    var x = _ref2.x,
        y = _ref2.y,
        image = _ref2.image;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, GenericObject);

    this.position = {
      x: x,
      y: y
    };
    this.velocity = {
      x: 0
    };
    this.image = image;
    this.width = image.width;
    this.height = image.height;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(GenericObject, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.position.x, this.position.y);
    }
  }, {
    key: "update",
    value: function update() {
      this.draw();
      this.position.x += this.velocity.x;
    }
  }]);

  return GenericObject;
}();

var Ennemy = /*#__PURE__*/function () {
  function Ennemy(_ref3) {
    var position = _ref3.position,
        velocity = _ref3.velocity,
        _ref3$distance = _ref3.distance,
        distance = _ref3$distance === void 0 ? {
      limit: 200,
      traveled: 0
    } : _ref3$distance;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Ennemy);

    this.position = {
      x: position.x,
      y: position.y
    };
    this.velocity = {
      x: velocity.x,
      y: velocity.y
    };
    this.width = 200;
    this.height = 200;
    this.image = Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["createImage"])(_img_spriteEnemy_png__WEBPACK_IMPORTED_MODULE_19__["default"]);
    this.frames = 0;
    this.direction = 'left';
    this.distance = distance;
    this.frameTimer = 0;
    this.frameInterval = 20;
    this.dying = false;
    this.collidable = true;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Ennemy, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, 128 * this.frames, 0, 128, 128, this.position.x, this.position.y, this.width, this.height);
    }
  }, {
    key: "update",
    value: function update() {
      if (this.dying) {
        this.velocity.x = 0;
        this.velocity.y = 0;
        this.frameTimer++;

        if (this.frameTimer >= this.frameInterval) {
          this.frameTimer = 0;
          this.frames = (this.frames + 1) % 12;
        }
      } else {
        this.frameTimer++;

        if (this.frameTimer >= this.frameInterval) {
          this.frameTimer = 0;
          this.frames = (this.frames + 1) % 5;
        }

        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
        if (this.position.y + this.height + this.velocity.y <= canvas.height) this.velocity.y += gravity; // marche avant-arrière

        this.distance.traveled += Math.abs(this.velocity.x);

        if (this.distance.traveled > this.distance.limit) {
          this.distance.traveled = 0;
          this.velocity.x = -this.velocity.x;
          this.direction = this.direction === 'left' ? 'right' : 'left';
          this.image = this.direction === 'left' ? Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["createImage"])(_img_spriteEnemy_png__WEBPACK_IMPORTED_MODULE_19__["default"]) : Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["createImage"])(_img_spriteEnemyReverse_png__WEBPACK_IMPORTED_MODULE_20__["default"]);
        }
      }

      this.draw();
    }
  }, {
    key: "die",
    value: function die() {
      var _this2 = this;

      this.dying = true;
      this.collidable = false;
      this.image = Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["createImage"])(_img_SpriteEnemyDeath_png__WEBPACK_IMPORTED_MODULE_21__["default"]);
      setTimeout(function () {
        var index = ennemies.indexOf(_this2);

        if (index !== -1) {
          ennemies.splice(index, 1);
        }
      }, 1000);
    }
  }]);

  return Ennemy;
}();

var Bow = /*#__PURE__*/function () {
  function Bow(_ref4) {
    var position = _ref4.position,
        velocity = _ref4.velocity;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Bow);

    this.position = {
      x: position.x,
      y: position.y
    };
    this.velocity = {
      x: velocity.x,
      y: velocity.y
    };
    this.width = 64;
    this.height = 64;
    this.image = Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["createImage"])(_img_spriteBow_png__WEBPACK_IMPORTED_MODULE_24__["default"]);
    this.frames = 0;
    this.frameTimer = 0;
    this.frameInterval = 30;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Bow, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, 32 * this.frames, 0, 32, 32, this.position.x, this.position.y, this.width, this.height);
    }
  }, {
    key: "update",
    value: function update() {
      if (this.dying) {
        this.velocity.x = 0;
        this.velocity.y = 0;
        this.frameTimer++;

        if (this.frameTimer >= this.frameInterval) {
          this.frameTimer = 0;
          this.frames = (this.frames + 1) % 12;
        }
      } else {
        this.frameTimer++;

        if (this.frameTimer >= this.frameInterval) {
          this.frameTimer = 0;
          this.frames = (this.frames + 1) % 5;
        }

        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
        if (this.position.y + this.height + this.velocity.y <= canvas.height) this.velocity.y += gravity;
      }

      this.draw();
    }
  }]);

  return Bow;
}();

var Arrow = /*#__PURE__*/function () {
  function Arrow(_ref5) {
    var position = _ref5.position,
        velocity = _ref5.velocity;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Arrow);

    this.position = {
      x: position.x,
      y: position.y
    };
    this.velocity = {
      x: velocity.x,
      y: velocity.y
    };
    this.width = 64;
    this.height = 64;
    this.image = Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["createImage"])(_img_arrow_png__WEBPACK_IMPORTED_MODULE_12__["default"]);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Arrow, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
    }
  }, {
    key: "update",
    value: function update() {
      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y;
      this.draw();
    }
  }]);

  return Arrow;
}();

var platformImage;
var platformSmallTallImage;
var blockTriImage;
var player = new Player();
var platforms = [];
var genericObjects = [];
var ennemies = [];
var bows = [];
var arrows = [];
var lastKey;
var keys = {
  right: {
    pressed: false
  },
  left: {
    pressed: false
  },
  up: {
    pressed: false
  }
};
var scrollOffset = 0;

function init() {
  return _init.apply(this, arguments);
}

function _init() {
  _init = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            timer = 0;
            _context.next = 3;
            return Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["createImageAsync"])(_img_platform_png__WEBPACK_IMPORTED_MODULE_5__["default"]);

          case 3:
            platformImage = _context.sent;
            _context.next = 6;
            return Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["createImageAsync"])(_img_platformSmallTall_png__WEBPACK_IMPORTED_MODULE_8__["default"]);

          case 6:
            platformSmallTallImage = _context.sent;
            _context.next = 9;
            return Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["createImageAsync"])(_img_blockTri_png__WEBPACK_IMPORTED_MODULE_10__["default"]);

          case 9:
            blockTriImage = _context.sent;
            bows = [new Bow({
              position: {
                x: 400,
                y: 200
              },
              velocity: {
                x: 0,
                y: 0
              }
            })];
            player = new Player();
            ennemies = [new Ennemy({
              position: {
                x: 800,
                y: 100
              },
              velocity: {
                x: -0.3,
                y: 0
              },
              distance: {
                limit: 300,
                traveled: 0
              }
            }), new Ennemy({
              position: {
                x: 1400,
                y: 100
              },
              velocity: {
                x: -0.3,
                y: 0
              }
            })]; // array platforms + positions

            platforms = [new Platform({
              x: platformImage.width * 4 + 300 - 2 + platformImage.width - platformSmallTallImage.width,
              y: 270,
              image: platformSmallTallImage
            }), new Platform({
              x: -1,
              y: 470,
              image: platformImage
            }), new Platform({
              x: platformImage.width - 3,
              y: 470,
              image: platformImage
            }), new Platform({
              x: platformImage.width * 2 + 100,
              y: 470,
              image: platformImage,
              block: true
            }), new Platform({
              x: platformImage.width * 3 + 300,
              y: 470,
              image: platformImage,
              block: true
            }), new Platform({
              x: platformImage.width * 4 + 300 - 2,
              y: 470,
              image: platformImage
            }), new Platform({
              x: platformImage.width * 5 + 640 - 2,
              y: 470,
              image: platformImage,
              block: true
            }), new Platform({
              x: 600,
              y: 100,
              image: blockTriImage,
              block: true
            })];
            genericObjects = [new GenericObject({
              x: -1,
              y: -1,
              image: Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["createImage"])(_img_background_png__WEBPACK_IMPORTED_MODULE_7__["default"])
            }), new GenericObject({
              x: -1,
              y: -1,
              image: Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["createImage"])(_img_hills_png__WEBPACK_IMPORTED_MODULE_6__["default"])
            })];
            scrollOffset = 0;

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _init.apply(this, arguments);
}

var timerDisplay = document.createElement('div');
timerDisplay.id = 'timerDisplay';
timerDisplay.style.position = 'absolute';
timerDisplay.style.fontFamily = 'Genjiro';
timerDisplay.style.top = '25%';
timerDisplay.style.left = '70%';
timerDisplay.style.transform = 'translateX(-50%)';
timerDisplay.style.fontSize = '24px';
document.body.appendChild(timerDisplay);
var timer = 0;

function updateTimer() {
  var seconds = Math.floor(timer / 144);
  timerDisplay.textContent = "Timer: ".concat(seconds);
}

function animate() {
  requestAnimationFrame(animate);

  if (gameStarted) {
    timer++;
    updateTimer();
  }

  c.fillStyle = 'white';
  c.fillRect(0, 0, canvas.width, canvas.height);
  genericObjects.forEach(function (genericObject) {
    genericObject.update();
    genericObject.velocity.x = 0;
  });
  platforms.forEach(function (platform) {
    platform.update();
    platform.velocity.x = 0;
  });
  bows.forEach(function (Bow, i) {
    if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["objectsTouch"])({
      object1: player,
      object2: Bow
    })) {
      setTimeout(function () {
        bows.splice(i, 1);
        player.powerUps.Bow = true;
      }, 0);
    } else Bow.update();
  });
  ennemies.forEach(function (ennemy, index) {
    ennemy.update();

    if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["collisionTop"])({
      object1: player,
      object2: ennemy
    })) {
      if (!ennemy.dying) {
        player.velocity.y -= 40;
        ennemy.die();
      }
    } else if (ennemy.collidable && player.position.x + player.width - 140 >= ennemy.position.x && player.position.y + player.height - 128 >= ennemy.position.y && player.position.x <= ennemy.position.x + ennemy.width - 140) {
      if (player.powerUps.Bow) {
        player.invincible = true;
        player.powerUps.Bow = false;
        setTimeout(function () {
          player.invincible = false;
        }, 1000);
      } else if (!player.invincible) init();
    }
  });
  player.updateDirection();
  player.update();
  player.drawIcon();
  var hitSide = false;

  if (keys.right.pressed && player.position.x < 400) {
    player.velocity.x = player.speed;
  } else if (keys.left.pressed && player.position.x > 50 || keys.left.pressed && scrollOffset === 0 && player.position.x > 0) {
    player.velocity.x = -player.speed;
  } else {
    player.velocity.x = 0; // code de scroll

    if (keys.right.pressed) {
      for (var i = 0; i < platforms.length; i++) {
        var _platform = platforms[i];
        _platform.velocity.x = -player.speed;

        if (_platform.block && Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["hitSideOfPlatform"])({
          object: player,
          platform: _platform
        })) {
          platforms.forEach(function (platform) {
            platform.velocity.x = 0;
          });
          hitSide = true;
          break;
        }
      }

      if (!hitSide) {
        scrollOffset += player.speed;
        genericObjects.forEach(function (genericObject) {
          genericObject.velocity.x = -player.speed * 0.66;
        });
        ennemies.forEach(function (ennemy) {
          ennemy.position.x -= player.speed;
        });
        bows.forEach(function (Bow) {
          Bow.position.x -= player.speed;
        });
      }
    } else if (keys.left.pressed && scrollOffset > 0) {
      for (var _i = 0; _i < platforms.length; _i++) {
        var _platform2 = platforms[_i];
        _platform2.velocity.x = player.speed;

        if (_platform2.block && Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["hitSideOfPlatform"])({
          object: player,
          platform: _platform2
        })) {
          platforms.forEach(function (platform) {
            platform.velocity.x = 0;
          });
          hitSide = true;
          break;
        }
      }

      if (!hitSide) {
        scrollOffset -= player.speed;
        genericObjects.forEach(function (genericObject) {
          genericObject.velocity.x = player.speed * .66;
        });
        ennemies.forEach(function (ennemy) {
          ennemy.position.x += player.speed;
        });
        bows.forEach(function (Bow) {
          Bow.position.x += player.speed;
        });
      }
    }
  }

  arrows.forEach(function (arrow, index) {
    arrow.update();

    if (arrow.position.x > canvas.width || arrow.position.y > canvas.height) {
      arrows.splice(index, 1);
    } else {
      ennemies.forEach(function (ennemy) {
        if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["isColliding"])(arrow, ennemy)) {
          ennemy.die();
          arrows.splice(index, 1);
        }
      });
    }
  }); // collision platform

  platforms.forEach(function (platform) {
    if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["isOnTopOfPlatform"])({
      object: player,
      platform: platform
    })) {
      player.velocity.y = 0;
      player.position.y = platform.position.y - player.height;
    }

    if (platform.block && Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["hitBottomOfPlatform"])({
      object: player,
      platform: platform
    })) {
      player.velocity.y = -player.velocity.y;
    }

    if (platform.block && Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["hitSideOfPlatform"])({
      object: player,
      platform: platform
    })) {
      player.velocity.x = 0;
    }

    ennemies.forEach(function (ennemy) {
      if (ennemy.collidable && Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["isOnTopOfPlatform"])({
        object: ennemy,
        platform: platform
      })) {
        ennemy.velocity.y = 0;
      }
    });
    bows.forEach(function (Bow) {
      if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["isOnTopOfPlatform"])({
        object: Bow,
        platform: platform
      })) {
        Bow.velocity.y = 0;
      }
    });
  });

  if (keys.right.pressed && lastKey === 'right' && !player.attacking && player.currentSprite !== player.sprites.run.right) {
    player.frames = 1;
    player.currentSprite = player.sprites.run.right;
  } else if (keys.left.pressed && lastKey === 'left' && !player.attacking && player.currentSprite !== player.sprites.run.left) {
    player.currentSprite = player.sprites.run.left;
  } else if (!keys.left.pressed && lastKey === 'left' && !player.attacking && player.currentSprite !== player.sprites.stand.left) {
    player.currentSprite = player.sprites.stand.left;
  } else if (!keys.right.pressed && lastKey === 'right' && !player.attacking && player.currentSprite !== player.sprites.stand.right) {
    player.currentSprite = player.sprites.stand.right;
  }

  if (platformImage && scrollOffset > platformImage.width * 5 + 300 - 2) {
    console.log('you win');
  }

  if (player.position.y > canvas.height) {
    console.log('you lose');
    init();
  }
}

init();
animate(); // Fonction keydown

addEventListener('keydown', function (_ref6) {
  var keyCode = _ref6.keyCode;
  if (!gameStarted) return;

  if (!player.attacking) {
    switch (keyCode) {
      case 81:
        // Q - Gauche
        keys.left.pressed = true;
        lastKey = 'left';
        player.currentSprite = player.sprites.run.left;
        break;

      case 83:
        // S - Bas
        break;

      case 68:
        // D - Droite
        keys.right.pressed = true;
        lastKey = 'right';
        player.currentSprite = player.sprites.run.right;
        break;

      case 90:
        // Z - Haut
        keys.up.pressed = true;

        if (!player.isJumping && Date.now() - player.lastJumpTime > 600) {
          player.isJumping = true;
          player.lastJumpTime = Date.now();
        }

        lastKey = 'up';
        break;

      case 32:
        // Espace - Attaque
        player.attack();
        player.shootArrow(); // Empêcher le mouvement pendant l'attaque

        keys.left.pressed = false;
        keys.right.pressed = false;
        break;
    }
  }
}); // Fonction keyup

addEventListener('keyup', function (_ref7) {
  var keyCode = _ref7.keyCode;

  if (!player.attacking) {
    switch (keyCode) {
      case 81:
        // Q - Gauche
        keys.left.pressed = false;

        if (keys.right.pressed) {
          player.currentSprite = player.sprites.run.right;
          lastKey = 'right';
        } else {
          player.currentSprite = player.sprites.stand.left;
          lastKey = 'left';
        }

        break;

      case 83:
        // S - Bas
        break;

      case 68:
        // D - Droite
        keys.right.pressed = false;

        if (keys.left.pressed) {
          player.currentSprite = player.sprites.run.left;
          lastKey = 'left';
        } else {
          player.currentSprite = player.sprites.stand.right;
          lastKey = 'right';
        }

        break;

      case 90:
        // Z - Haut
        keys.up.pressed = false;
        break;
    }
  }
});

/***/ }),

/***/ "./src/js/utils.js":
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
/*! exports provided: isOnTopOfPlatform, collisionTop, isColliding, createImage, createImageAsync, hitBottomOfPlatform, hitSideOfPlatform, objectsTouch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isOnTopOfPlatform", function() { return isOnTopOfPlatform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "collisionTop", function() { return collisionTop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isColliding", function() { return isColliding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createImage", function() { return createImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createImageAsync", function() { return createImageAsync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hitBottomOfPlatform", function() { return hitBottomOfPlatform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hitSideOfPlatform", function() { return hitSideOfPlatform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "objectsTouch", function() { return objectsTouch; });
function randomIntFromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomColor(colors) {
  return colors[Math.floor(Math.random() * colors.length)];
}

function distance(x1, y1, x2, y2) {
  var xDist = x2 - x1;
  var yDist = y2 - y1;
  return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
}

function isOnTopOfPlatform(_ref) {
  var object = _ref.object,
      platform = _ref.platform;
  return object.position.x + 75 < platform.position.x + platform.width && object.position.x + object.width - 75 > platform.position.x && object.position.y < platform.position.y + platform.height && object.position.y + object.height > platform.position.y && object.position.y < platform.position.y && object.velocity.y >= 0;
}
function collisionTop(_ref2) {
  var object1 = _ref2.object1,
      object2 = _ref2.object2;
  return object2.collidable && // Check if the enemy is collidable
  object1.position.x + 75 < object2.position.x + object2.width && object1.position.x + object1.width - 75 > object2.position.x && object1.position.y + object1.height <= object2.position.y && object1.position.y + object1.height + object1.velocity.y >= object2.position.y;
}
function isColliding(rect1, rect2) {
  return rect1.position.x < rect2.position.x + rect2.width && rect1.position.x + rect1.width > rect2.position.x && rect1.position.y < rect2.position.y + rect2.height && rect1.position.y + rect1.height > rect2.position.y;
}
function createImage(imageSrc) {
  var image = new Image();
  image.src = imageSrc;
  return image;
}
function createImageAsync(imageSrc) {
  return new Promise(function (resolve) {
    var image = new Image();

    image.onload = function () {
      resolve(image);
    };

    image.src = imageSrc;
  });
}
function hitBottomOfPlatform(_ref3) {
  var object = _ref3.object,
      platform = _ref3.platform;
  var verticalAdjustment = -50;
  var horizontalAdjustment = 90;
  return object.position.y <= platform.position.y + platform.height + verticalAdjustment && object.position.y - object.velocity.y >= platform.position.y + platform.height + verticalAdjustment && object.position.x + object.width >= platform.position.x + horizontalAdjustment && object.position.x <= platform.position.x + platform.width - horizontalAdjustment;
}
function hitSideOfPlatform(_ref4) {
  var object = _ref4.object,
      platform = _ref4.platform;
  var verticalAdjustment = -50;
  var horizontalAdjustment = -90;
  return object.position.x + object.width + object.velocity.x - platform.velocity.x >= platform.position.x - horizontalAdjustment && object.position.x + object.velocity.x <= platform.position.x + platform.width + horizontalAdjustment && object.position.y <= platform.position.y + platform.height + verticalAdjustment && object.position.y + object.height >= platform.position.y - verticalAdjustment;
}
function objectsTouch(_ref5) {
  var object1 = _ref5.object1,
      object2 = _ref5.object2;
  var verticalAdjustment = -50;
  var horizontalAdjustment = -90;
  return object1.position.x + object1.width >= object2.position.x - horizontalAdjustment && object1.position.x <= object2.position.x + object2.width + horizontalAdjustment && object1.position.y + object1.height > +object2.position.x + verticalAdjustment && object1.position.y <= object2.position.x + object2.height - verticalAdjustment;
}

/***/ })

/******/ });
//# sourceMappingURL=canvas.bundle.js.map