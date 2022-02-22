// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"prototype.js":[function(require,module,exports) {
var _this = this;

//////////////////////////////////////////
// 생성자함수 (prototype)
var bmworld = {
  firstname: 'bm',
  lastname: 'kim',
  getFullname: function getFullname() {
    return "".concat(this.firstname, " ").concat(this.lastname); // return `${bmworld.firstname} ${bmworld.lastname}`; // this = 변수의 이름인거다.
  }
}; // console.log(bmworld.getFullname());

var sarah = {
  firstname: 'sarah',
  lastname: 'seo',
  getFullname: function getFullname() {
    return "".concat(this.firstname, " ").concat(this.lastname); // return `${bmworld.firstname} ${bmworld.lastname}`; // this = 변수의 이름인거다.
  }
}; // console.log(sarah.getFullname());

var neo = {
  firstname: 'Neo',
  lastname: 'smith',
  getFullname: function getFullname() {
    return "".concat(this.firstname, " ").concat(this.lastname); // return `${bmworld.firstname} ${bmworld.lastname}`; // this = 변수의 이름인거다.
  }
}; // console.log(neo.getFullname());
////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 생성자 함수

function User(first, last) {
  // 생성자 함수일경우 pascal Case로 사용해주는 것이 JS개발자들의 관행이다.
  this.firstname = first;
  this.lastname = last;
}

User.prototype.getFullName = function () {
  return "".concat(this.firstname, " ").concat(this.lastname);
};

User.prototype.hello = 'Hello~~~';
var instance_bmworld = new User('bm', 'kim'); // 생성자함수 new를 사영하여 인스턴스를 생성한다.

var instance_sarah = new User('sarah', 'seo'); // 생성자함수 new를 사영하여 인스턴스를 생성한다.

var instance_neo = new User('neo', 'smith'); // 생성자함수 new를 사영하여 인스턴스를 생성한다.
// console.log(instance_bmworld);
// console.log(instance_bmworld.getFullName());
// console.log(instance_sarah);
// console.log(instance_neo);
// console.log(instance_neo.hello);
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////  this 활용  ////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
//////////////////////// 일반함수와 화살표함수가 가리키는 THIS는 서로 다르기 때문에, 상황에 맞게 사용하는 방법을 익히시라.
// 일반(Normal)함수는 호출 위치에 따라 this정의!
// 화살표(Arrow)함수는 자신이 선언(만들어진) 된 함수 범위 내에서 this 정의!

window.name = 'window`s this';

function StudyThis(name) {
  this.name = name;
}

StudyThis.prototype.normal = function () {
  console.log(this.name);
};

StudyThis.prototype.arrow = function () {
  _this.name = '이게 함수영역에서 선언한 this';
  console.log(_this.name);
  console.log(_this);
};

var study_this = new StudyThis('bmworld'); // study_this.normal();
// study_this.arrow();

var timer = {
  name: 'bmworld!',
  timeout: function timeout() {
    setTimeout(function () {
      console.log(this.name); // 1. 일반함수의 this는 '호출위치'에서 정의된다!
    }, 1000);
  }
}; // timer.timeout(); // 2. 즉 일반함수는 seTimeout가 실행되는 로직 어딘가에서 실행된다. 즉, 전역에서 호출되었다. 그래서 this는 전역 window를 가르킨다.

var timer_arrow = {
  name: 'arrow함수의 this가 가르키는것은 timer_arrow인 객체{}다.!',
  timeout: function timeout() {
    setTimeout(function () {// console.log(this.name); // 화살표함수를 감싸고 있는 함수범위는 timeout이라는 메서드를 정의할 때 사용한 무명 함수(function(){})이고,
      // 이 함수범위에서 this가 정의된 것다.
      // 함수범위의 this는 일반함수(function(){})가 정의된 timer_arrow라는 객체{}를 가리킨다.
    }, 1000);
  }
};
timer_arrow.timeout(); // 2. 즉 일반함수는 seTimeout가 실행되는 로직 어딘가에서 실행된다. 즉, 전역에서 호출되었다. 그래서 this는 전역 window를 가르킨다.
},{}],"this.js":[function(require,module,exports) {
var _this = this;

/// this
// 일반(Normal)함수는 호출 위치에 따라 this정의!
// 화살표(Arrow)함수는 자신이 선언(만들어진) 된 함수 범위 내에서 this 정의!
var bmworld = {
  name: 'bm',
  normal: function normal() {
    console.log(this.name); // 이 위치에서는, 호출위치가 어딘지 모르기 때문에, this를 특정할 수 없다.
  },
  arrow: function arrow() {
    console.log(_this.name); // 화살표함수는, 호출위치랑 전혀 상관없다 // 따라서 , 선언되는 위치에서 this가 무엇인지 바로 알 수 있다.
  }
}; // bmworld.normal(); //
// 메소드인 normal은 기본적으로 점표기법에 의해서 객체인 bmworld 내부에서 실행된다.
// 메소드 normal에 딸려있고 거기에 의해서 실해오디기 때문에, bmworld가 곧 this이다. 그래서 console에서 this가 bmworld로 설정되어서 값을 할당할 수 있는 것이다.
// bmworld.arrow(); // undefined

var amy = {
  name: 'Amy',
  normal: bmworld.normal,
  arrow: bmworld.arrow
}; // amy.normal();
// amy.arrow();
},{}],"class.js":[function(require,module,exports) {
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

//ES6 Classes
// const study_class = {
//   name: 'bmworld',
//   normal() {
//     console.log(this.name);
//   },
//   arrow: () =>{
//     console.log(this.name)
//   }
// }
// study_class.normal();
// study_class.arrow(); // 
///// --- PROTOTYPE ---
function User_prototypeVersion(first, last) {
  this.firstName = first;
  this.lastName = last;
}

User_prototypeVersion.prototype.getFullName = function () {
  return "".concat(this.firstName, " ").concat(this.lastName);
};

var user1 = new User_prototypeVersion('bm_prototypeVersion', 'kim_prototypeVersion'); // console.log(user1.getFullName());

var User = /*#__PURE__*/function () {
  function User(first, last) {
    _classCallCheck(this, User);

    // constructor: 내부 함수function임
    this.firstName = first;
    this.lastName = last;
  }

  _createClass(User, [{
    key: "getFullName",
    value: function getFullName() {
      return "".concat(this.firstName, " ").concat(this.lastName);
    }
  }]);

  return User;
}();

var study_class = new User('bm', 'kim'); // console.log(study_class);
// console.log(study_class.getFullName());
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
//////////////////// Class 상속 ////////////////////

var Vehicle = /*#__PURE__*/_createClass(function Vehicle(name, wheel) {
  _classCallCheck(this, Vehicle);

  this.name = name;
  this.wheel = wheel;
});

var myVehicle = new Vehicle('운송수단', '2'); // console.log(myVehicle);

var Bicycle = /*#__PURE__*/function (_Vehicle) {
  _inherits(Bicycle, _Vehicle);

  var _super = _createSuper(Bicycle);

  function Bicycle(name, wheel) {
    _classCallCheck(this, Bicycle);

    return _super.call(this, name, wheel); // super --> extends 키워드 뒤의 Vehicle 클래스를 의미한다.
    // super 자리에서 Vehicle 클래스가 실행된다.
  }

  return _createClass(Bicycle);
}(Vehicle);

var myBicycle = new Bicycle('삼천리', 2);
var daughterBicicle = new Bicycle('세발', 3); // console.log(myBicycle);
// console.log(daughterBicicle);

var Car = /*#__PURE__*/function (_Vehicle2) {
  _inherits(Car, _Vehicle2);

  var _super2 = _createSuper(Car);

  function Car(name, wheel, license) {
    var _this;

    _classCallCheck(this, Car);

    _this = _super2.call(this, name, wheel);
    _this.license = license;
    return _this;
  }

  return _createClass(Car);
}(Vehicle);

var myCar = new Car('Jeep', '4', true); // console.log(myCar);
},{}],"main.js":[function(require,module,exports) {
"use strict";

var _prototype = _interopRequireDefault(require("./prototype"));

var _this = _interopRequireDefault(require("./this"));

var _class = _interopRequireDefault(require("./class"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
},{"./prototype":"prototype.js","./this":"this.js","./class":"class.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "64050" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.1f19ae8e.js.map