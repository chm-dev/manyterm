(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('react-dom')) :
	typeof define === 'function' && define.amd ? define(['exports', 'react', 'react-dom'], factory) :
	(global = global || self, factory(global.CommandPalette = {}, global.React, global.ReactDOM));
}(this, (function (exports, React, reactDom) { 

	React = React && Object.prototype.hasOwnProperty.call(React, 'default') ? React['default'] : React;
	reactDom = reactDom && Object.prototype.hasOwnProperty.call(reactDom, 'default') ? reactDom['default'] : reactDom;

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function commonjsRequire () {
		throw new Error('Dynamic requires are not currently supported by rollup-plugin-commonjs');
	}

	function unwrapExports (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	var _extends_1 = createCommonjsModule(function (module) {
	function _extends() {
	  module.exports = _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	      var source = arguments[i];

	      for (var key in source) {
	        if (Object.prototype.hasOwnProperty.call(source, key)) {
	          target[key] = source[key];
	        }
	      }
	    }

	    return target;
	  };

	  return _extends.apply(this, arguments);
	}

	module.exports = _extends;
	});

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	var classCallCheck = _classCallCheck;

	function _defineProperties(target, props) {
	  for (var i = 0; i < props.length; i++) {
	    var descriptor = props[i];
	    descriptor.enumerable = descriptor.enumerable || false;
	    descriptor.configurable = true;
	    if ("value" in descriptor) descriptor.writable = true;
	    Object.defineProperty(target, descriptor.key, descriptor);
	  }
	}

	function _createClass(Constructor, protoProps, staticProps) {
	  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
	  if (staticProps) _defineProperties(Constructor, staticProps);
	  return Constructor;
	}

	var createClass = _createClass;

	function _assertThisInitialized(self) {
	  if (self === void 0) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }

	  return self;
	}

	var assertThisInitialized = _assertThisInitialized;

	var setPrototypeOf = createCommonjsModule(function (module) {
	function _setPrototypeOf(o, p) {
	  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
	    o.__proto__ = p;
	    return o;
	  };

	  return _setPrototypeOf(o, p);
	}

	module.exports = _setPrototypeOf;
	});

	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function");
	  }

	  subClass.prototype = Object.create(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) setPrototypeOf(subClass, superClass);
	}

	var inherits = _inherits;

	var _typeof_1 = createCommonjsModule(function (module) {
	function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

	function _typeof(obj) {
	  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
	    module.exports = _typeof = function _typeof(obj) {
	      return _typeof2(obj);
	    };
	  } else {
	    module.exports = _typeof = function _typeof(obj) {
	      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
	    };
	  }

	  return _typeof(obj);
	}

	module.exports = _typeof;
	});

	function _possibleConstructorReturn(self, call) {
	  if (call && (_typeof_1(call) === "object" || typeof call === "function")) {
	    return call;
	  }

	  return assertThisInitialized(self);
	}

	var possibleConstructorReturn = _possibleConstructorReturn;

	var getPrototypeOf = createCommonjsModule(function (module) {
	function _getPrototypeOf(o) {
	  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
	    return o.__proto__ || Object.getPrototypeOf(o);
	  };
	  return _getPrototypeOf(o);
	}

	module.exports = _getPrototypeOf;
	});

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

	var ReactPropTypesSecret_1 = ReactPropTypesSecret;

	function emptyFunction() {}
	function emptyFunctionWithReset() {}
	emptyFunctionWithReset.resetWarningCache = emptyFunction;

	var factoryWithThrowingShims = function() {
	  function shim(props, propName, componentName, location, propFullName, secret) {
	    if (secret === ReactPropTypesSecret_1) {
	      // It is still safe when called from React.
	      return;
	    }
	    var err = new Error(
	      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	      'Use PropTypes.checkPropTypes() to call them. ' +
	      'Read more at http://fb.me/use-check-prop-types'
	    );
	    err.name = 'Invariant Violation';
	    throw err;
	  }  shim.isRequired = shim;
	  function getShim() {
	    return shim;
	  }  // Important!
	  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
	  var ReactPropTypes = {
	    array: shim,
	    bool: shim,
	    func: shim,
	    number: shim,
	    object: shim,
	    string: shim,
	    symbol: shim,

	    any: shim,
	    arrayOf: getShim,
	    element: shim,
	    elementType: shim,
	    instanceOf: getShim,
	    node: shim,
	    objectOf: getShim,
	    oneOf: getShim,
	    oneOfType: getShim,
	    shape: getShim,
	    exact: getShim,

	    checkPropTypes: emptyFunctionWithReset,
	    resetWarningCache: emptyFunction
	  };

	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};

	var propTypes = createCommonjsModule(function (module) {
	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	{
	  // By explicitly using `prop-types` you are opting into new production behavior.
	  // http://fb.me/prop-types-in-prod
	  module.exports = factoryWithThrowingShims();
	}
	});

	var tabbable_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = findTabbableDescendants;
	/*!
	 * Adapted from jQuery UI core
	 *
	 * http://jqueryui.com
	 *
	 * Copyright 2014 jQuery Foundation and other contributors
	 * Released under the MIT license.
	 * http://jquery.org/license
	 *
	 * http://api.jqueryui.com/category/ui-core/
	 */

	var tabbableNode = /input|select|textarea|button|object/;

	function hidesContents(element) {
	  var zeroSize = element.offsetWidth <= 0 && element.offsetHeight <= 0;

	  // If the node is empty, this is good enough
	  if (zeroSize && !element.innerHTML) return true;

	  // Otherwise we need to check some styles
	  var style = window.getComputedStyle(element);
	  return zeroSize ? style.getPropertyValue("overflow") !== "visible" ||
	  // if 'overflow: visible' set, check if there is actually any overflow
	  element.scrollWidth <= 0 && element.scrollHeight <= 0 : style.getPropertyValue("display") == "none";
	}

	function visible(element) {
	  var parentElement = element;
	  while (parentElement) {
	    if (parentElement === document.body) break;
	    if (hidesContents(parentElement)) return false;
	    parentElement = parentElement.parentNode;
	  }
	  return true;
	}

	function focusable(element, isTabIndexNotNaN) {
	  var nodeName = element.nodeName.toLowerCase();
	  var res = tabbableNode.test(nodeName) && !element.disabled || (nodeName === "a" ? element.href || isTabIndexNotNaN : isTabIndexNotNaN);
	  return res && visible(element);
	}

	function tabbable(element) {
	  var tabIndex = element.getAttribute("tabindex");
	  if (tabIndex === null) tabIndex = undefined;
	  var isTabIndexNaN = isNaN(tabIndex);
	  return (isTabIndexNaN || tabIndex >= 0) && focusable(element, !isTabIndexNaN);
	}

	function findTabbableDescendants(element) {
	  return [].slice.call(element.querySelectorAll("*"), 0).filter(tabbable);
	}
	module.exports = exports["default"];
	});

	unwrapExports(tabbable_1);

	var focusManager = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.handleBlur = handleBlur;
	exports.handleFocus = handleFocus;
	exports.markForFocusLater = markForFocusLater;
	exports.returnFocus = returnFocus;
	exports.popWithoutFocus = popWithoutFocus;
	exports.setupScopedFocus = setupScopedFocus;
	exports.teardownScopedFocus = teardownScopedFocus;



	var _tabbable2 = _interopRequireDefault(tabbable_1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var focusLaterElements = [];
	window.focusLaterElements = focusLaterElements;
	var modalElement = null;
	var needToFocus = false;

	function handleBlur() {
	  needToFocus = true;
	}

	function handleFocus() {
	  if (needToFocus) {
	    needToFocus = false;
	    if (!modalElement) {
	      return;
	    }
	    // need to see how jQuery shims document.on('focusin') so we don't need the
	    // setTimeout, firefox doesn't support focusin, if it did, we could focus
	    // the element outside of a setTimeout. Side-effect of this implementation
	    // is that the document.body gets focus, and then we focus our element right
	    // after, seems fine.
	    setTimeout(function () {
	      if (modalElement.contains(document.activeElement)) {
	        return;
	      }
	      var el = (0, _tabbable2.default)(modalElement)[0] || modalElement;
	      el.focus();
	    }, 0);
	  }
	}

	function markForFocusLater() {
	  focusLaterElements.push(document.activeElement);
	}

	/* eslint-disable no-console */
	function returnFocus() {
	  var toFocus = null;
	  try {
	    if (focusLaterElements.length !== 0) {
	      toFocus = focusLaterElements.pop();
	      toFocus.focus();
	    }
	    return;
	  } catch (e) {
	    console.warn(["You tried to return focus to", toFocus, "but it is not in the DOM anymore"].join(" "));
	  }
	}
	/* eslint-enable no-console */

	function popWithoutFocus() {
	  focusLaterElements.length > 0 && focusLaterElements.pop();
	}

	function setupScopedFocus(element) {
	  modalElement = element;

	  if (window.addEventListener) {
	    window.addEventListener("blur", handleBlur, false);
	    document.addEventListener("focus", handleFocus, true);
	  } else {
	    window.attachEvent("onBlur", handleBlur);
	    document.attachEvent("onFocus", handleFocus);
	  }
	}

	function teardownScopedFocus() {
	  modalElement = null;

	  if (window.addEventListener) {
	    window.removeEventListener("blur", handleBlur);
	    document.removeEventListener("focus", handleFocus);
	  } else {
	    window.detachEvent("onBlur", handleBlur);
	    document.detachEvent("onFocus", handleFocus);
	  }
	}
	});

	unwrapExports(focusManager);
	var focusManager_1 = focusManager.handleBlur;
	var focusManager_2 = focusManager.handleFocus;
	var focusManager_3 = focusManager.markForFocusLater;
	var focusManager_4 = focusManager.returnFocus;
	var focusManager_5 = focusManager.popWithoutFocus;
	var focusManager_6 = focusManager.setupScopedFocus;
	var focusManager_7 = focusManager.teardownScopedFocus;

	var scopeTab_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = scopeTab;



	var _tabbable2 = _interopRequireDefault(tabbable_1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function scopeTab(node, event) {
	  var tabbable = (0, _tabbable2.default)(node);

	  if (!tabbable.length) {
	    // Do nothing, since there are no elements that can receive focus.
	    event.preventDefault();
	    return;
	  }

	  var target = void 0;

	  var shiftKey = event.shiftKey;
	  var head = tabbable[0];
	  var tail = tabbable[tabbable.length - 1];

	  // proceed with default browser behavior on tab.
	  // Focus on last element on shift + tab.
	  if (node === document.activeElement) {
	    if (!shiftKey) return;
	    target = tail;
	  }

	  if (tail === document.activeElement && !shiftKey) {
	    target = head;
	  }

	  if (head === document.activeElement && shiftKey) {
	    target = tail;
	  }

	  if (target) {
	    event.preventDefault();
	    target.focus();
	    return;
	  }

	  // Safari radio issue.
	  //
	  // Safari does not move the focus to the radio button,
	  // so we need to force it to really walk through all elements.
	  //
	  // This is very error prone, since we are trying to guess
	  // if it is a safari browser from the first occurence between
	  // chrome or safari.
	  //
	  // The chrome user agent contains the first ocurrence
	  // as the 'chrome/version' and later the 'safari/version'.
	  var checkSafari = /(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent);
	  var isSafariDesktop = checkSafari != null && checkSafari[1] != "Chrome" && /\biPod\b|\biPad\b/g.exec(navigator.userAgent) == null;

	  // If we are not in safari desktop, let the browser control
	  // the focus
	  if (!isSafariDesktop) return;

	  var x = tabbable.indexOf(document.activeElement);

	  if (x > -1) {
	    x += shiftKey ? -1 : 1;
	  }

	  target = tabbable[x];

	  // If the tabbable element does not exist,
	  // focus head/tail based on shiftKey
	  if (typeof target === "undefined") {
	    event.preventDefault();
	    target = shiftKey ? tail : head;
	    target.focus();
	    return;
	  }

	  event.preventDefault();

	  target.focus();
	}
	module.exports = exports["default"];
	});

	unwrapExports(scopeTab_1);

	/**
	 * Copyright (c) 2014-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	var warning = function() {};

	var warning_1 = warning;

	var exenv = createCommonjsModule(function (module) {
	/*!
	  Copyright (c) 2015 Jed Watson.
	  Based on code that is Copyright 2013-2015, Facebook, Inc.
	  All rights reserved.
	*/
	/* global define */

	(function () {

		var canUseDOM = !!(
			typeof window !== 'undefined' &&
			window.document &&
			window.document.createElement
		);

		var ExecutionEnvironment = {

			canUseDOM: canUseDOM,

			canUseWorkers: typeof Worker !== 'undefined',

			canUseEventListeners:
				canUseDOM && !!(window.addEventListener || window.attachEvent),

			canUseViewport: canUseDOM && !!window.screen

		};

		if ( module.exports) {
			module.exports = ExecutionEnvironment;
		} else {
			window.ExecutionEnvironment = ExecutionEnvironment;
		}

	}());
	});

	var safeHTMLElement = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.canUseDOM = undefined;



	var _exenv2 = _interopRequireDefault(exenv);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var EE = _exenv2.default;

	var SafeHTMLElement = EE.canUseDOM ? window.HTMLElement : {};

	var canUseDOM = exports.canUseDOM = EE.canUseDOM;

	exports.default = SafeHTMLElement;
	});

	unwrapExports(safeHTMLElement);
	var safeHTMLElement_1 = safeHTMLElement.canUseDOM;

	var ariaAppHider = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.assertNodeList = assertNodeList;
	exports.setElement = setElement;
	exports.validateElement = validateElement;
	exports.hide = hide;
	exports.show = show;
	exports.documentNotReadyOrSSRTesting = documentNotReadyOrSSRTesting;
	exports.resetForTesting = resetForTesting;



	var _warning2 = _interopRequireDefault(warning_1);



	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var globalElement = null;

	function assertNodeList(nodeList, selector) {
	  if (!nodeList || !nodeList.length) {
	    throw new Error("react-modal: No elements were found for selector " + selector + ".");
	  }
	}

	function setElement(element) {
	  var useElement = element;
	  if (typeof useElement === "string" && safeHTMLElement.canUseDOM) {
	    var el = document.querySelectorAll(useElement);
	    assertNodeList(el, useElement);
	    useElement = "length" in el ? el[0] : el;
	  }
	  globalElement = useElement || globalElement;
	  return globalElement;
	}

	function validateElement(appElement) {
	  if (!appElement && !globalElement) {
	    (0, _warning2.default)(false, ["react-modal: App element is not defined.", "Please use `Modal.setAppElement(el)` or set `appElement={el}`.", "This is needed so screen readers don't see main content", "when modal is opened. It is not recommended, but you can opt-out", "by setting `ariaHideApp={false}`."].join(" "));

	    return false;
	  }

	  return true;
	}

	function hide(appElement) {
	  if (validateElement(appElement)) {
	    (appElement || globalElement).setAttribute("aria-hidden", "true");
	  }
	}

	function show(appElement) {
	  if (validateElement(appElement)) {
	    (appElement || globalElement).removeAttribute("aria-hidden");
	  }
	}

	function documentNotReadyOrSSRTesting() {
	  globalElement = null;
	}

	function resetForTesting() {
	  globalElement = null;
	}
	});

	unwrapExports(ariaAppHider);
	var ariaAppHider_1 = ariaAppHider.assertNodeList;
	var ariaAppHider_2 = ariaAppHider.setElement;
	var ariaAppHider_3 = ariaAppHider.validateElement;
	var ariaAppHider_4 = ariaAppHider.hide;
	var ariaAppHider_5 = ariaAppHider.show;
	var ariaAppHider_6 = ariaAppHider.documentNotReadyOrSSRTesting;
	var ariaAppHider_7 = ariaAppHider.resetForTesting;

	var classList = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.dumpClassLists = dumpClassLists;
	var htmlClassList = {};
	var docBodyClassList = {};

	function dumpClassLists() {
	}

	/**
	 * Track the number of reference of a class.
	 * @param {object} poll The poll to receive the reference.
	 * @param {string} className The class name.
	 * @return {string}
	 */
	var incrementReference = function incrementReference(poll, className) {
	  if (!poll[className]) {
	    poll[className] = 0;
	  }
	  poll[className] += 1;
	  return className;
	};

	/**
	 * Drop the reference of a class.
	 * @param {object} poll The poll to receive the reference.
	 * @param {string} className The class name.
	 * @return {string}
	 */
	var decrementReference = function decrementReference(poll, className) {
	  if (poll[className]) {
	    poll[className] -= 1;
	  }
	  return className;
	};

	/**
	 * Track a class and add to the given class list.
	 * @param {Object} classListRef A class list of an element.
	 * @param {Object} poll         The poll to be used.
	 * @param {Array}  classes      The list of classes to be tracked.
	 */
	var trackClass = function trackClass(classListRef, poll, classes) {
	  classes.forEach(function (className) {
	    incrementReference(poll, className);
	    classListRef.add(className);
	  });
	};

	/**
	 * Untrack a class and remove from the given class list if the reference
	 * reaches 0.
	 * @param {Object} classListRef A class list of an element.
	 * @param {Object} poll         The poll to be used.
	 * @param {Array}  classes      The list of classes to be untracked.
	 */
	var untrackClass = function untrackClass(classListRef, poll, classes) {
	  classes.forEach(function (className) {
	    decrementReference(poll, className);
	    poll[className] === 0 && classListRef.remove(className);
	  });
	};

	/**
	 * Public inferface to add classes to the document.body.
	 * @param {string} bodyClass The class string to be added.
	 *                           It may contain more then one class
	 *                           with ' ' as separator.
	 */
	var add = exports.add = function add(element, classString) {
	  return trackClass(element.classList, element.nodeName.toLowerCase() == "html" ? htmlClassList : docBodyClassList, classString.split(" "));
	};

	/**
	 * Public inferface to remove classes from the document.body.
	 * @param {string} bodyClass The class string to be added.
	 *                           It may contain more then one class
	 *                           with ' ' as separator.
	 */
	var remove = exports.remove = function remove(element, classString) {
	  return untrackClass(element.classList, element.nodeName.toLowerCase() == "html" ? htmlClassList : docBodyClassList, classString.split(" "));
	};
	});

	unwrapExports(classList);
	var classList_1 = classList.dumpClassLists;
	var classList_2 = classList.add;
	var classList_3 = classList.remove;

	var portalOpenInstances_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	// Tracks portals that are open and emits events to subscribers

	var PortalOpenInstances = function PortalOpenInstances() {
	  var _this = this;

	  _classCallCheck(this, PortalOpenInstances);

	  this.register = function (openInstance) {
	    if (_this.openInstances.indexOf(openInstance) !== -1) {
	      return;
	    }
	    _this.openInstances.push(openInstance);
	    _this.emit("register");
	  };

	  this.deregister = function (openInstance) {
	    var index = _this.openInstances.indexOf(openInstance);
	    if (index === -1) {
	      return;
	    }
	    _this.openInstances.splice(index, 1);
	    _this.emit("deregister");
	  };

	  this.subscribe = function (callback) {
	    _this.subscribers.push(callback);
	  };

	  this.emit = function (eventType) {
	    _this.subscribers.forEach(function (subscriber) {
	      return subscriber(eventType,
	      // shallow copy to avoid accidental mutation
	      _this.openInstances.slice());
	    });
	  };

	  this.openInstances = [];
	  this.subscribers = [];
	};

	var portalOpenInstances = new PortalOpenInstances();

	exports.default = portalOpenInstances;
	module.exports = exports["default"];
	});

	unwrapExports(portalOpenInstances_1);

	var bodyTrap_1 = createCommonjsModule(function (module) {



	var _portalOpenInstances2 = _interopRequireDefault(portalOpenInstances_1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// Body focus trap see Issue #742

	var before = void 0,
	    after = void 0,
	    instances = [];

	function focusContent() {
	  if (instances.length === 0) {
	    return;
	  }
	  instances[instances.length - 1].focusContent();
	}

	function bodyTrap(eventType, openInstances) {
	  if (!before || !after) {
	    before = document.createElement("div");
	    before.setAttribute("data-react-modal-body-trap", "");
	    before.style.position = "absolute";
	    before.style.opacity = "0";
	    before.setAttribute("tabindex", "0");
	    before.addEventListener("focus", focusContent);
	    after = before.cloneNode();
	    after.addEventListener("focus", focusContent);
	  }

	  instances = openInstances;

	  if (instances.length > 0) {
	    // Add focus trap
	    if (document.body.firstChild !== before) {
	      document.body.insertBefore(before, document.body.firstChild);
	    }
	    if (document.body.lastChild !== after) {
	      document.body.appendChild(after);
	    }
	  } else {
	    // Remove focus trap
	    if (before.parentElement) {
	      before.parentElement.removeChild(before);
	    }
	    if (after.parentElement) {
	      after.parentElement.removeChild(after);
	    }
	  }
	}

	_portalOpenInstances2.default.subscribe(bodyTrap);
	});

	unwrapExports(bodyTrap_1);

	var ModalPortal_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



	var _react2 = _interopRequireDefault(React);



	var _propTypes2 = _interopRequireDefault(propTypes);



	var focusManager$1 = _interopRequireWildcard(focusManager);



	var _scopeTab2 = _interopRequireDefault(scopeTab_1);



	var ariaAppHider$1 = _interopRequireWildcard(ariaAppHider);



	var classList$1 = _interopRequireWildcard(classList);



	var _safeHTMLElement2 = _interopRequireDefault(safeHTMLElement);



	var _portalOpenInstances2 = _interopRequireDefault(portalOpenInstances_1);



	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	// so that our CSS is statically analyzable
	var CLASS_NAMES = {
	  overlay: "ReactModal__Overlay",
	  content: "ReactModal__Content"
	};

	var TAB_KEY = 9;
	var ESC_KEY = 27;

	var ariaHiddenInstances = 0;

	var ModalPortal = function (_Component) {
	  _inherits(ModalPortal, _Component);

	  function ModalPortal(props) {
	    _classCallCheck(this, ModalPortal);

	    var _this = _possibleConstructorReturn(this, (ModalPortal.__proto__ || Object.getPrototypeOf(ModalPortal)).call(this, props));

	    _this.setOverlayRef = function (overlay) {
	      _this.overlay = overlay;
	      _this.props.overlayRef && _this.props.overlayRef(overlay);
	    };

	    _this.setContentRef = function (content) {
	      _this.content = content;
	      _this.props.contentRef && _this.props.contentRef(content);
	    };

	    _this.afterClose = function () {
	      var _this$props = _this.props,
	          appElement = _this$props.appElement,
	          ariaHideApp = _this$props.ariaHideApp,
	          htmlOpenClassName = _this$props.htmlOpenClassName,
	          bodyOpenClassName = _this$props.bodyOpenClassName;

	      // Remove classes.

	      bodyOpenClassName && classList$1.remove(document.body, bodyOpenClassName);

	      htmlOpenClassName && classList$1.remove(document.getElementsByTagName("html")[0], htmlOpenClassName);

	      // Reset aria-hidden attribute if all modals have been removed
	      if (ariaHideApp && ariaHiddenInstances > 0) {
	        ariaHiddenInstances -= 1;

	        if (ariaHiddenInstances === 0) {
	          ariaAppHider$1.show(appElement);
	        }
	      }

	      if (_this.props.shouldFocusAfterRender) {
	        if (_this.props.shouldReturnFocusAfterClose) {
	          focusManager$1.returnFocus();
	          focusManager$1.teardownScopedFocus();
	        } else {
	          focusManager$1.popWithoutFocus();
	        }
	      }

	      if (_this.props.onAfterClose) {
	        _this.props.onAfterClose();
	      }

	      _portalOpenInstances2.default.deregister(_this);
	    };

	    _this.open = function () {
	      _this.beforeOpen();
	      if (_this.state.afterOpen && _this.state.beforeClose) {
	        clearTimeout(_this.closeTimer);
	        _this.setState({ beforeClose: false });
	      } else {
	        if (_this.props.shouldFocusAfterRender) {
	          focusManager$1.setupScopedFocus(_this.node);
	          focusManager$1.markForFocusLater();
	        }

	        _this.setState({ isOpen: true }, function () {
	          _this.setState({ afterOpen: true });

	          if (_this.props.isOpen && _this.props.onAfterOpen) {
	            _this.props.onAfterOpen({
	              overlayEl: _this.overlay,
	              contentEl: _this.content
	            });
	          }
	        });
	      }
	    };

	    _this.close = function () {
	      if (_this.props.closeTimeoutMS > 0) {
	        _this.closeWithTimeout();
	      } else {
	        _this.closeWithoutTimeout();
	      }
	    };

	    _this.focusContent = function () {
	      return _this.content && !_this.contentHasFocus() && _this.content.focus();
	    };

	    _this.closeWithTimeout = function () {
	      var closesAt = Date.now() + _this.props.closeTimeoutMS;
	      _this.setState({ beforeClose: true, closesAt: closesAt }, function () {
	        _this.closeTimer = setTimeout(_this.closeWithoutTimeout, _this.state.closesAt - Date.now());
	      });
	    };

	    _this.closeWithoutTimeout = function () {
	      _this.setState({
	        beforeClose: false,
	        isOpen: false,
	        afterOpen: false,
	        closesAt: null
	      }, _this.afterClose);
	    };

	    _this.handleKeyDown = function (event) {
	      if (event.keyCode === TAB_KEY) {
	        (0, _scopeTab2.default)(_this.content, event);
	      }

	      if (_this.props.shouldCloseOnEsc && event.keyCode === ESC_KEY) {
	        event.stopPropagation();
	        _this.requestClose(event);
	      }
	    };

	    _this.handleOverlayOnClick = function (event) {
	      if (_this.shouldClose === null) {
	        _this.shouldClose = true;
	      }

	      if (_this.shouldClose && _this.props.shouldCloseOnOverlayClick) {
	        if (_this.ownerHandlesClose()) {
	          _this.requestClose(event);
	        } else {
	          _this.focusContent();
	        }
	      }
	      _this.shouldClose = null;
	    };

	    _this.handleContentOnMouseUp = function () {
	      _this.shouldClose = false;
	    };

	    _this.handleOverlayOnMouseDown = function (event) {
	      if (!_this.props.shouldCloseOnOverlayClick && event.target == _this.overlay) {
	        event.preventDefault();
	      }
	    };

	    _this.handleContentOnClick = function () {
	      _this.shouldClose = false;
	    };

	    _this.handleContentOnMouseDown = function () {
	      _this.shouldClose = false;
	    };

	    _this.requestClose = function (event) {
	      return _this.ownerHandlesClose() && _this.props.onRequestClose(event);
	    };

	    _this.ownerHandlesClose = function () {
	      return _this.props.onRequestClose;
	    };

	    _this.shouldBeClosed = function () {
	      return !_this.state.isOpen && !_this.state.beforeClose;
	    };

	    _this.contentHasFocus = function () {
	      return document.activeElement === _this.content || _this.content.contains(document.activeElement);
	    };

	    _this.buildClassName = function (which, additional) {
	      var classNames = (typeof additional === "undefined" ? "undefined" : _typeof(additional)) === "object" ? additional : {
	        base: CLASS_NAMES[which],
	        afterOpen: CLASS_NAMES[which] + "--after-open",
	        beforeClose: CLASS_NAMES[which] + "--before-close"
	      };
	      var className = classNames.base;
	      if (_this.state.afterOpen) {
	        className = className + " " + classNames.afterOpen;
	      }
	      if (_this.state.beforeClose) {
	        className = className + " " + classNames.beforeClose;
	      }
	      return typeof additional === "string" && additional ? className + " " + additional : className;
	    };

	    _this.attributesFromObject = function (prefix, items) {
	      return Object.keys(items).reduce(function (acc, name) {
	        acc[prefix + "-" + name] = items[name];
	        return acc;
	      }, {});
	    };

	    _this.state = {
	      afterOpen: false,
	      beforeClose: false
	    };

	    _this.shouldClose = null;
	    _this.moveFromContentToOverlay = null;
	    return _this;
	  }

	  _createClass(ModalPortal, [{
	    key: "componentDidMount",
	    value: function componentDidMount() {
	      if (this.props.isOpen) {
	        this.open();
	      }
	    }
	  }, {
	    key: "componentDidUpdate",
	    value: function componentDidUpdate(prevProps, prevState) {

	      if (this.props.isOpen && !prevProps.isOpen) {
	        this.open();
	      } else if (!this.props.isOpen && prevProps.isOpen) {
	        this.close();
	      }

	      // Focus only needs to be set once when the modal is being opened
	      if (this.props.shouldFocusAfterRender && this.state.isOpen && !prevState.isOpen) {
	        this.focusContent();
	      }
	    }
	  }, {
	    key: "componentWillUnmount",
	    value: function componentWillUnmount() {
	      if (this.state.isOpen) {
	        this.afterClose();
	      }
	      clearTimeout(this.closeTimer);
	    }
	  }, {
	    key: "beforeOpen",
	    value: function beforeOpen() {
	      var _props = this.props,
	          appElement = _props.appElement,
	          ariaHideApp = _props.ariaHideApp,
	          htmlOpenClassName = _props.htmlOpenClassName,
	          bodyOpenClassName = _props.bodyOpenClassName;

	      // Add classes.

	      bodyOpenClassName && classList$1.add(document.body, bodyOpenClassName);

	      htmlOpenClassName && classList$1.add(document.getElementsByTagName("html")[0], htmlOpenClassName);

	      if (ariaHideApp) {
	        ariaHiddenInstances += 1;
	        ariaAppHider$1.hide(appElement);
	      }

	      _portalOpenInstances2.default.register(this);
	    }

	    // Don't steal focus from inner elements

	  }, {
	    key: "render",
	    value: function render() {
	      var _props2 = this.props,
	          id = _props2.id,
	          className = _props2.className,
	          overlayClassName = _props2.overlayClassName,
	          defaultStyles = _props2.defaultStyles;

	      var contentStyles = className ? {} : defaultStyles.content;
	      var overlayStyles = overlayClassName ? {} : defaultStyles.overlay;

	      return this.shouldBeClosed() ? null : _react2.default.createElement(
	        "div",
	        {
	          ref: this.setOverlayRef,
	          className: this.buildClassName("overlay", overlayClassName),
	          style: _extends({}, overlayStyles, this.props.style.overlay),
	          onClick: this.handleOverlayOnClick,
	          onMouseDown: this.handleOverlayOnMouseDown
	        },
	        _react2.default.createElement(
	          "div",
	          _extends({
	            id: id,
	            ref: this.setContentRef,
	            style: _extends({}, contentStyles, this.props.style.content),
	            className: this.buildClassName("content", className),
	            tabIndex: "-1",
	            onKeyDown: this.handleKeyDown,
	            onMouseDown: this.handleContentOnMouseDown,
	            onMouseUp: this.handleContentOnMouseUp,
	            onClick: this.handleContentOnClick,
	            role: this.props.role,
	            "aria-label": this.props.contentLabel
	          }, this.attributesFromObject("aria", this.props.aria || {}), this.attributesFromObject("data", this.props.data || {}), {
	            "data-testid": this.props.testId
	          }),
	          this.props.children
	        )
	      );
	    }
	  }]);

	  return ModalPortal;
	}(React.Component);

	ModalPortal.defaultProps = {
	  style: {
	    overlay: {},
	    content: {}
	  },
	  defaultStyles: {}
	};
	ModalPortal.propTypes = {
	  isOpen: _propTypes2.default.bool.isRequired,
	  defaultStyles: _propTypes2.default.shape({
	    content: _propTypes2.default.object,
	    overlay: _propTypes2.default.object
	  }),
	  style: _propTypes2.default.shape({
	    content: _propTypes2.default.object,
	    overlay: _propTypes2.default.object
	  }),
	  className: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]),
	  overlayClassName: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]),
	  bodyOpenClassName: _propTypes2.default.string,
	  htmlOpenClassName: _propTypes2.default.string,
	  ariaHideApp: _propTypes2.default.bool,
	  appElement: _propTypes2.default.instanceOf(_safeHTMLElement2.default),
	  onAfterOpen: _propTypes2.default.func,
	  onAfterClose: _propTypes2.default.func,
	  onRequestClose: _propTypes2.default.func,
	  closeTimeoutMS: _propTypes2.default.number,
	  shouldFocusAfterRender: _propTypes2.default.bool,
	  shouldCloseOnOverlayClick: _propTypes2.default.bool,
	  shouldReturnFocusAfterClose: _propTypes2.default.bool,
	  role: _propTypes2.default.string,
	  contentLabel: _propTypes2.default.string,
	  aria: _propTypes2.default.object,
	  data: _propTypes2.default.object,
	  children: _propTypes2.default.node,
	  shouldCloseOnEsc: _propTypes2.default.bool,
	  overlayRef: _propTypes2.default.func,
	  contentRef: _propTypes2.default.func,
	  id: _propTypes2.default.string,
	  testId: _propTypes2.default.string
	};
	exports.default = ModalPortal;
	module.exports = exports["default"];
	});

	unwrapExports(ModalPortal_1);

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	function componentWillMount() {
	  // Call this.constructor.gDSFP to support sub-classes.
	  var state = this.constructor.getDerivedStateFromProps(this.props, this.state);
	  if (state !== null && state !== undefined) {
	    this.setState(state);
	  }
	}

	function componentWillReceiveProps(nextProps) {
	  // Call this.constructor.gDSFP to support sub-classes.
	  // Use the setState() updater to ensure state isn't stale in certain edge cases.
	  function updater(prevState) {
	    var state = this.constructor.getDerivedStateFromProps(nextProps, prevState);
	    return state !== null && state !== undefined ? state : null;
	  }
	  // Binding "this" is important for shallow renderer support.
	  this.setState(updater.bind(this));
	}

	function componentWillUpdate(nextProps, nextState) {
	  try {
	    var prevProps = this.props;
	    var prevState = this.state;
	    this.props = nextProps;
	    this.state = nextState;
	    this.__reactInternalSnapshotFlag = true;
	    this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(
	      prevProps,
	      prevState
	    );
	  } finally {
	    this.props = prevProps;
	    this.state = prevState;
	  }
	}

	// React may warn about cWM/cWRP/cWU methods being deprecated.
	// Add a flag to suppress these warnings for this special case.
	componentWillMount.__suppressDeprecationWarning = true;
	componentWillReceiveProps.__suppressDeprecationWarning = true;
	componentWillUpdate.__suppressDeprecationWarning = true;

	function polyfill(Component) {
	  var prototype = Component.prototype;

	  if (!prototype || !prototype.isReactComponent) {
	    throw new Error('Can only polyfill class components');
	  }

	  if (
	    typeof Component.getDerivedStateFromProps !== 'function' &&
	    typeof prototype.getSnapshotBeforeUpdate !== 'function'
	  ) {
	    return Component;
	  }

	  // If new component APIs are defined, "unsafe" lifecycles won't be called.
	  // Error if any of these lifecycles are present,
	  // Because they would work differently between older and newer (16.3+) versions of React.
	  var foundWillMountName = null;
	  var foundWillReceivePropsName = null;
	  var foundWillUpdateName = null;
	  if (typeof prototype.componentWillMount === 'function') {
	    foundWillMountName = 'componentWillMount';
	  } else if (typeof prototype.UNSAFE_componentWillMount === 'function') {
	    foundWillMountName = 'UNSAFE_componentWillMount';
	  }
	  if (typeof prototype.componentWillReceiveProps === 'function') {
	    foundWillReceivePropsName = 'componentWillReceiveProps';
	  } else if (typeof prototype.UNSAFE_componentWillReceiveProps === 'function') {
	    foundWillReceivePropsName = 'UNSAFE_componentWillReceiveProps';
	  }
	  if (typeof prototype.componentWillUpdate === 'function') {
	    foundWillUpdateName = 'componentWillUpdate';
	  } else if (typeof prototype.UNSAFE_componentWillUpdate === 'function') {
	    foundWillUpdateName = 'UNSAFE_componentWillUpdate';
	  }
	  if (
	    foundWillMountName !== null ||
	    foundWillReceivePropsName !== null ||
	    foundWillUpdateName !== null
	  ) {
	    var componentName = Component.displayName || Component.name;
	    var newApiName =
	      typeof Component.getDerivedStateFromProps === 'function'
	        ? 'getDerivedStateFromProps()'
	        : 'getSnapshotBeforeUpdate()';

	    throw Error(
	      'Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n' +
	        componentName +
	        ' uses ' +
	        newApiName +
	        ' but also contains the following legacy lifecycles:' +
	        (foundWillMountName !== null ? '\n  ' + foundWillMountName : '') +
	        (foundWillReceivePropsName !== null
	          ? '\n  ' + foundWillReceivePropsName
	          : '') +
	        (foundWillUpdateName !== null ? '\n  ' + foundWillUpdateName : '') +
	        '\n\nThe above lifecycles should be removed. Learn more about this warning here:\n' +
	        'https://fb.me/react-async-component-lifecycle-hooks'
	    );
	  }

	  // React <= 16.2 does not support static getDerivedStateFromProps.
	  // As a workaround, use cWM and cWRP to invoke the new static lifecycle.
	  // Newer versions of React will ignore these lifecycles if gDSFP exists.
	  if (typeof Component.getDerivedStateFromProps === 'function') {
	    prototype.componentWillMount = componentWillMount;
	    prototype.componentWillReceiveProps = componentWillReceiveProps;
	  }

	  // React <= 16.2 does not support getSnapshotBeforeUpdate.
	  // As a workaround, use cWU to invoke the new lifecycle.
	  // Newer versions of React will ignore that lifecycle if gSBU exists.
	  if (typeof prototype.getSnapshotBeforeUpdate === 'function') {
	    if (typeof prototype.componentDidUpdate !== 'function') {
	      throw new Error(
	        'Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype'
	      );
	    }

	    prototype.componentWillUpdate = componentWillUpdate;

	    var componentDidUpdate = prototype.componentDidUpdate;

	    prototype.componentDidUpdate = function componentDidUpdatePolyfill(
	      prevProps,
	      prevState,
	      maybeSnapshot
	    ) {
	      // 16.3+ will not execute our will-update method;
	      // It will pass a snapshot value to did-update though.
	      // Older versions will require our polyfilled will-update value.
	      // We need to handle both cases, but can't just check for the presence of "maybeSnapshot",
	      // Because for <= 15.x versions this might be a "prevContext" object.
	      // We also can't just check "__reactInternalSnapshot",
	      // Because get-snapshot might return a falsy value.
	      // So check for the explicit __reactInternalSnapshotFlag flag to determine behavior.
	      var snapshot = this.__reactInternalSnapshotFlag
	        ? this.__reactInternalSnapshot
	        : maybeSnapshot;

	      componentDidUpdate.call(this, prevProps, prevState, snapshot);
	    };
	  }

	  return Component;
	}

	var reactLifecyclesCompat_es = /*#__PURE__*/Object.freeze({
		__proto__: null,
		polyfill: polyfill
	});

	var Modal_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.bodyOpenClassName = exports.portalClassName = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



	var _react2 = _interopRequireDefault(React);



	var _reactDom2 = _interopRequireDefault(reactDom);



	var _propTypes2 = _interopRequireDefault(propTypes);



	var _ModalPortal2 = _interopRequireDefault(ModalPortal_1);



	var ariaAppHider$1 = _interopRequireWildcard(ariaAppHider);



	var _safeHTMLElement2 = _interopRequireDefault(safeHTMLElement);



	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var portalClassName = exports.portalClassName = "ReactModalPortal";
	var bodyOpenClassName = exports.bodyOpenClassName = "ReactModal__Body--open";

	var isReact16 = _reactDom2.default.createPortal !== undefined;

	var getCreatePortal = function getCreatePortal() {
	  return isReact16 ? _reactDom2.default.createPortal : _reactDom2.default.unstable_renderSubtreeIntoContainer;
	};

	function getParentElement(parentSelector) {
	  return parentSelector();
	}

	var Modal = function (_Component) {
	  _inherits(Modal, _Component);

	  function Modal() {
	    var _ref;

	    var _temp, _this, _ret;

	    _classCallCheck(this, Modal);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Modal.__proto__ || Object.getPrototypeOf(Modal)).call.apply(_ref, [this].concat(args))), _this), _this.removePortal = function () {
	      !isReact16 && _reactDom2.default.unmountComponentAtNode(_this.node);
	      var parent = getParentElement(_this.props.parentSelector);
	      if (parent) {
	        parent.removeChild(_this.node);
	      } else {
	        // eslint-disable-next-line no-console
	        console.warn('React-Modal: "parentSelector" prop did not returned any DOM ' + "element. Make sure that the parent element is unmounted to " + "avoid any memory leaks.");
	      }
	    }, _this.portalRef = function (ref) {
	      _this.portal = ref;
	    }, _this.renderPortal = function (props) {
	      var createPortal = getCreatePortal();
	      var portal = createPortal(_this, _react2.default.createElement(_ModalPortal2.default, _extends({ defaultStyles: Modal.defaultStyles }, props)), _this.node);
	      _this.portalRef(portal);
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(Modal, [{
	    key: "componentDidMount",
	    value: function componentDidMount() {
	      if (!safeHTMLElement.canUseDOM) return;

	      if (!isReact16) {
	        this.node = document.createElement("div");
	      }
	      this.node.className = this.props.portalClassName;

	      var parent = getParentElement(this.props.parentSelector);
	      parent.appendChild(this.node);

	      !isReact16 && this.renderPortal(this.props);
	    }
	  }, {
	    key: "getSnapshotBeforeUpdate",
	    value: function getSnapshotBeforeUpdate(prevProps) {
	      var prevParent = getParentElement(prevProps.parentSelector);
	      var nextParent = getParentElement(this.props.parentSelector);
	      return { prevParent: prevParent, nextParent: nextParent };
	    }
	  }, {
	    key: "componentDidUpdate",
	    value: function componentDidUpdate(prevProps, _, snapshot) {
	      if (!safeHTMLElement.canUseDOM) return;
	      var _props = this.props,
	          isOpen = _props.isOpen,
	          portalClassName = _props.portalClassName;


	      if (prevProps.portalClassName !== portalClassName) {
	        this.node.className = portalClassName;
	      }

	      var prevParent = snapshot.prevParent,
	          nextParent = snapshot.nextParent;

	      if (nextParent !== prevParent) {
	        prevParent.removeChild(this.node);
	        nextParent.appendChild(this.node);
	      }

	      // Stop unnecessary renders if modal is remaining closed
	      if (!prevProps.isOpen && !isOpen) return;

	      !isReact16 && this.renderPortal(this.props);
	    }
	  }, {
	    key: "componentWillUnmount",
	    value: function componentWillUnmount() {
	      if (!safeHTMLElement.canUseDOM || !this.node || !this.portal) return;

	      var state = this.portal.state;
	      var now = Date.now();
	      var closesAt = state.isOpen && this.props.closeTimeoutMS && (state.closesAt || now + this.props.closeTimeoutMS);

	      if (closesAt) {
	        if (!state.beforeClose) {
	          this.portal.closeWithTimeout();
	        }

	        setTimeout(this.removePortal, closesAt - now);
	      } else {
	        this.removePortal();
	      }
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      if (!safeHTMLElement.canUseDOM || !isReact16) {
	        return null;
	      }

	      if (!this.node && isReact16) {
	        this.node = document.createElement("div");
	      }

	      var createPortal = getCreatePortal();
	      return createPortal(_react2.default.createElement(_ModalPortal2.default, _extends({
	        ref: this.portalRef,
	        defaultStyles: Modal.defaultStyles
	      }, this.props)), this.node);
	    }
	  }], [{
	    key: "setAppElement",
	    value: function setAppElement(element) {
	      ariaAppHider$1.setElement(element);
	    }

	    /* eslint-disable react/no-unused-prop-types */

	    /* eslint-enable react/no-unused-prop-types */

	  }]);

	  return Modal;
	}(React.Component);

	Modal.propTypes = {
	  isOpen: _propTypes2.default.bool.isRequired,
	  style: _propTypes2.default.shape({
	    content: _propTypes2.default.object,
	    overlay: _propTypes2.default.object
	  }),
	  portalClassName: _propTypes2.default.string,
	  bodyOpenClassName: _propTypes2.default.string,
	  htmlOpenClassName: _propTypes2.default.string,
	  className: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.shape({
	    base: _propTypes2.default.string.isRequired,
	    afterOpen: _propTypes2.default.string.isRequired,
	    beforeClose: _propTypes2.default.string.isRequired
	  })]),
	  overlayClassName: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.shape({
	    base: _propTypes2.default.string.isRequired,
	    afterOpen: _propTypes2.default.string.isRequired,
	    beforeClose: _propTypes2.default.string.isRequired
	  })]),
	  appElement: _propTypes2.default.instanceOf(_safeHTMLElement2.default),
	  onAfterOpen: _propTypes2.default.func,
	  onRequestClose: _propTypes2.default.func,
	  closeTimeoutMS: _propTypes2.default.number,
	  ariaHideApp: _propTypes2.default.bool,
	  shouldFocusAfterRender: _propTypes2.default.bool,
	  shouldCloseOnOverlayClick: _propTypes2.default.bool,
	  shouldReturnFocusAfterClose: _propTypes2.default.bool,
	  parentSelector: _propTypes2.default.func,
	  aria: _propTypes2.default.object,
	  data: _propTypes2.default.object,
	  role: _propTypes2.default.string,
	  contentLabel: _propTypes2.default.string,
	  shouldCloseOnEsc: _propTypes2.default.bool,
	  overlayRef: _propTypes2.default.func,
	  contentRef: _propTypes2.default.func
	};
	Modal.defaultProps = {
	  isOpen: false,
	  portalClassName: portalClassName,
	  bodyOpenClassName: bodyOpenClassName,
	  role: "dialog",
	  ariaHideApp: true,
	  closeTimeoutMS: 0,
	  shouldFocusAfterRender: true,
	  shouldCloseOnEsc: true,
	  shouldCloseOnOverlayClick: true,
	  shouldReturnFocusAfterClose: true,
	  parentSelector: function parentSelector() {
	    return document.body;
	  }
	};
	Modal.defaultStyles = {
	  overlay: {
	    position: "fixed",
	    top: 0,
	    left: 0,
	    right: 0,
	    bottom: 0,
	    backgroundColor: "rgba(255, 255, 255, 0.75)"
	  },
	  content: {
	    position: "absolute",
	    top: "40px",
	    left: "40px",
	    right: "40px",
	    bottom: "40px",
	    border: "1px solid #ccc",
	    background: "#fff",
	    overflow: "auto",
	    WebkitOverflowScrolling: "touch",
	    borderRadius: "4px",
	    outline: "none",
	    padding: "20px"
	  }
	};


	(0, reactLifecyclesCompat_es.polyfill)(Modal);

	exports.default = Modal;
	});

	unwrapExports(Modal_1);
	var Modal_2 = Modal_1.bodyOpenClassName;
	var Modal_3 = Modal_1.portalClassName;

	var lib = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});



	var _Modal2 = _interopRequireDefault(Modal_1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Modal2.default;
	module.exports = exports["default"];
	});

	var ReactModal = unwrapExports(lib);

	// do not edit .js files directly - edit src/index.jst



	var fastDeepEqual = function equal(a, b) {
	  if (a === b) return true;

	  if (a && b && typeof a == 'object' && typeof b == 'object') {
	    if (a.constructor !== b.constructor) return false;

	    var length, i, keys;
	    if (Array.isArray(a)) {
	      length = a.length;
	      if (length != b.length) return false;
	      for (i = length; i-- !== 0;)
	        if (!equal(a[i], b[i])) return false;
	      return true;
	    }



	    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
	    if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
	    if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();

	    keys = Object.keys(a);
	    length = keys.length;
	    if (length !== Object.keys(b).length) return false;

	    for (i = length; i-- !== 0;)
	      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;

	    for (i = length; i-- !== 0;) {
	      var key = keys[i];

	      if (!equal(a[key], b[key])) return false;
	    }

	    return true;
	  }

	  // true if both NaN, false otherwise
	  return a!==a && b!==b;
	};

	function shallowEqualArrays(arrA, arrB) {
	  if (arrA === arrB) {
	    return true;
	  }

	  if (!arrA || !arrB) {
	    return false;
	  }

	  var len = arrA.length;

	  if (arrB.length !== len) {
	    return false;
	  }

	  for (var i = 0; i < len; i++) {
	    if (arrA[i] !== arrB[i]) {
	      return false;
	    }
	  }

	  return true;
	}

	var arrays = shallowEqualArrays;

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	var dist = function (_ref) {
	  var data = _ref.data;
	  var multiSection = _ref.multiSection;

	  function nextNonEmptySectionIndex(sectionIndex) {
	    if (sectionIndex === null) {
	      sectionIndex = 0;
	    } else {
	      sectionIndex++;
	    }

	    while (sectionIndex < data.length && data[sectionIndex] === 0) {
	      sectionIndex++;
	    }

	    return sectionIndex === data.length ? null : sectionIndex;
	  }

	  function prevNonEmptySectionIndex(sectionIndex) {
	    if (sectionIndex === null) {
	      sectionIndex = data.length - 1;
	    } else {
	      sectionIndex--;
	    }

	    while (sectionIndex >= 0 && data[sectionIndex] === 0) {
	      sectionIndex--;
	    }

	    return sectionIndex === -1 ? null : sectionIndex;
	  }

	  function next(position) {
	    var _position = _slicedToArray(position, 2);

	    var sectionIndex = _position[0];
	    var itemIndex = _position[1];


	    if (multiSection) {
	      if (itemIndex === null || itemIndex === data[sectionIndex] - 1) {
	        sectionIndex = nextNonEmptySectionIndex(sectionIndex);

	        if (sectionIndex === null) {
	          return [null, null];
	        }

	        return [sectionIndex, 0];
	      }

	      return [sectionIndex, itemIndex + 1];
	    }

	    if (data === 0 || itemIndex === data - 1) {
	      return [null, null];
	    }

	    if (itemIndex === null) {
	      return [null, 0];
	    }

	    return [null, itemIndex + 1];
	  }

	  function prev(position) {
	    var _position2 = _slicedToArray(position, 2);

	    var sectionIndex = _position2[0];
	    var itemIndex = _position2[1];


	    if (multiSection) {
	      if (itemIndex === null || itemIndex === 0) {
	        sectionIndex = prevNonEmptySectionIndex(sectionIndex);

	        if (sectionIndex === null) {
	          return [null, null];
	        }

	        return [sectionIndex, data[sectionIndex] - 1];
	      }

	      return [sectionIndex, itemIndex - 1];
	    }

	    if (data === 0 || itemIndex === 0) {
	      return [null, null];
	    }

	    if (itemIndex === null) {
	      return [null, data - 1];
	    }

	    return [null, itemIndex - 1];
	  }

	  function isLast(position) {
	    return next(position)[1] === null;
	  }

	  return {
	    next: next,
	    prev: prev,
	    isLast: isLast
	  };
	};

	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function ToObject(val) {
		if (val == null) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function ownEnumerableKeys(obj) {
		var keys = Object.getOwnPropertyNames(obj);

		if (Object.getOwnPropertySymbols) {
			keys = keys.concat(Object.getOwnPropertySymbols(obj));
		}

		return keys.filter(function (key) {
			return propIsEnumerable.call(obj, key);
		});
	}

	var objectAssign = Object.assign || function (target, source) {
		var from;
		var keys;
		var to = ToObject(target);

		for (var s = 1; s < arguments.length; s++) {
			from = arguments[s];
			keys = ownEnumerableKeys(Object(from));

			for (var i = 0; i < keys.length; i++) {
				to[keys[i]] = from[keys[i]];
			}
		}

		return to;
	};

	var dist$1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }



	var _objectAssign2 = _interopRequireDefault(objectAssign);

	var truthy = function truthy(x) {
	  return x;
	};

	exports['default'] = function (input) {
	  var _ref = Array.isArray(input) && input.length === 2 ? input : [input, null];

	  var _ref2 = _slicedToArray(_ref, 2);

	  var theme = _ref2[0];
	  var classNameDecorator = _ref2[1];

	  return function (key) {
	    for (var _len = arguments.length, names = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      names[_key - 1] = arguments[_key];
	    }

	    var styles = names.map(function (name) {
	      return theme[name];
	    }).filter(truthy);

	    return typeof styles[0] === 'string' || typeof classNameDecorator === 'function' ? { key: key, className: classNameDecorator ? classNameDecorator.apply(undefined, _toConsumableArray(styles)) : styles.join(' ') } : { key: key, style: _objectAssign2['default'].apply(undefined, [{}].concat(_toConsumableArray(styles))) };
	  };
	};

	module.exports = exports['default'];
	});

	unwrapExports(dist$1);

	var compareObjects_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = compareObjects;

	function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

	function compareObjects(objA, objB) {
	  var keys = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

	  if (objA === objB) {
	    return false;
	  }

	  var aKeys = Object.keys(objA);
	  var bKeys = Object.keys(objB);

	  if (aKeys.length !== bKeys.length) {
	    return true;
	  }

	  var keysMap = {};
	  var i, len;

	  for (i = 0, len = keys.length; i < len; i++) {
	    keysMap[keys[i]] = true;
	  }

	  for (i = 0, len = aKeys.length; i < len; i++) {
	    var key = aKeys[i];
	    var aValue = objA[key];
	    var bValue = objB[key];

	    if (aValue === bValue) {
	      continue;
	    }

	    if (!keysMap[key] || aValue === null || bValue === null || _typeof(aValue) !== 'object' || _typeof(bValue) !== 'object') {
	      return true;
	    }

	    var aValueKeys = Object.keys(aValue);
	    var bValueKeys = Object.keys(bValue);

	    if (aValueKeys.length !== bValueKeys.length) {
	      return true;
	    }

	    for (var n = 0, length = aValueKeys.length; n < length; n++) {
	      var aValueKey = aValueKeys[n];

	      if (aValue[aValueKey] !== bValue[aValueKey]) {
	        return true;
	      }
	    }
	  }

	  return false;
	}
	});

	unwrapExports(compareObjects_1);

	var SectionTitle_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = void 0;

	var _react = _interopRequireWildcard(React);

	var _propTypes = _interopRequireDefault(propTypes);

	var _compareObjects = _interopRequireDefault(compareObjects_1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

	function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

	function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

	function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

	function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

	function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

	function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

	function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

	function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var SectionTitle = /*#__PURE__*/function (_Component) {
	  _inherits(SectionTitle, _Component);

	  var _super = _createSuper(SectionTitle);

	  function SectionTitle() {
	    _classCallCheck(this, SectionTitle);

	    return _super.apply(this, arguments);
	  }

	  _createClass(SectionTitle, [{
	    key: "shouldComponentUpdate",
	    value: function shouldComponentUpdate(nextProps) {
	      return (0, _compareObjects["default"])(nextProps, this.props);
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var _this$props = this.props,
	          section = _this$props.section,
	          renderSectionTitle = _this$props.renderSectionTitle,
	          theme = _this$props.theme,
	          sectionKeyPrefix = _this$props.sectionKeyPrefix;
	      var sectionTitle = renderSectionTitle(section);

	      if (!sectionTitle) {
	        return null;
	      }

	      return /*#__PURE__*/_react["default"].createElement("div", theme("".concat(sectionKeyPrefix, "title"), 'sectionTitle'), sectionTitle);
	    }
	  }]);

	  return SectionTitle;
	}(_react.Component);

	exports["default"] = SectionTitle;

	_defineProperty(SectionTitle, "propTypes", {
	  section: _propTypes["default"].any.isRequired,
	  renderSectionTitle: _propTypes["default"].func.isRequired,
	  theme: _propTypes["default"].func.isRequired,
	  sectionKeyPrefix: _propTypes["default"].string.isRequired
	});
	});

	unwrapExports(SectionTitle_1);

	var Item_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = void 0;

	var _react = _interopRequireWildcard(React);

	var _propTypes = _interopRequireDefault(propTypes);

	var _compareObjects = _interopRequireDefault(compareObjects_1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

	function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

	function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

	function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

	function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

	function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

	function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

	function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

	function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

	function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

	function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

	function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

	function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

	function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var Item = /*#__PURE__*/function (_Component) {
	  _inherits(Item, _Component);

	  var _super = _createSuper(Item);

	  function Item() {
	    var _this;

	    _classCallCheck(this, Item);

	    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    _this = _super.call.apply(_super, [this].concat(args));

	    _defineProperty(_assertThisInitialized(_this), "storeItemReference", function (item) {
	      if (item !== null) {
	        _this.item = item;
	      }
	    });

	    _defineProperty(_assertThisInitialized(_this), "onMouseEnter", function (event) {
	      var _this$props = _this.props,
	          sectionIndex = _this$props.sectionIndex,
	          itemIndex = _this$props.itemIndex;

	      _this.props.onMouseEnter(event, {
	        sectionIndex: sectionIndex,
	        itemIndex: itemIndex
	      });
	    });

	    _defineProperty(_assertThisInitialized(_this), "onMouseLeave", function (event) {
	      var _this$props2 = _this.props,
	          sectionIndex = _this$props2.sectionIndex,
	          itemIndex = _this$props2.itemIndex;

	      _this.props.onMouseLeave(event, {
	        sectionIndex: sectionIndex,
	        itemIndex: itemIndex
	      });
	    });

	    _defineProperty(_assertThisInitialized(_this), "onMouseDown", function (event) {
	      var _this$props3 = _this.props,
	          sectionIndex = _this$props3.sectionIndex,
	          itemIndex = _this$props3.itemIndex;

	      _this.props.onMouseDown(event, {
	        sectionIndex: sectionIndex,
	        itemIndex: itemIndex
	      });
	    });

	    _defineProperty(_assertThisInitialized(_this), "onClick", function (event) {
	      var _this$props4 = _this.props,
	          sectionIndex = _this$props4.sectionIndex,
	          itemIndex = _this$props4.itemIndex;

	      _this.props.onClick(event, {
	        sectionIndex: sectionIndex,
	        itemIndex: itemIndex
	      });
	    });

	    return _this;
	  }

	  _createClass(Item, [{
	    key: "shouldComponentUpdate",
	    value: function shouldComponentUpdate(nextProps) {
	      return (0, _compareObjects["default"])(nextProps, this.props, ['renderItemData']);
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var _this$props5 = this.props,
	          isHighlighted = _this$props5.isHighlighted,
	          item = _this$props5.item,
	          renderItem = _this$props5.renderItem,
	          renderItemData = _this$props5.renderItemData,
	          restProps = _objectWithoutProperties(_this$props5, ["isHighlighted", "item", "renderItem", "renderItemData"]);

	      delete restProps.sectionIndex;
	      delete restProps.itemIndex;

	      if (typeof restProps.onMouseEnter === 'function') {
	        restProps.onMouseEnter = this.onMouseEnter;
	      }

	      if (typeof restProps.onMouseLeave === 'function') {
	        restProps.onMouseLeave = this.onMouseLeave;
	      }

	      if (typeof restProps.onMouseDown === 'function') {
	        restProps.onMouseDown = this.onMouseDown;
	      }

	      if (typeof restProps.onClick === 'function') {
	        restProps.onClick = this.onClick;
	      }

	      return /*#__PURE__*/_react["default"].createElement("li", _extends({
	        role: "option"
	      }, restProps, {
	        ref: this.storeItemReference
	      }), renderItem(item, _objectSpread({
	        isHighlighted: isHighlighted
	      }, renderItemData)));
	    }
	  }]);

	  return Item;
	}(_react.Component);

	exports["default"] = Item;

	_defineProperty(Item, "propTypes", {
	  sectionIndex: _propTypes["default"].number,
	  isHighlighted: _propTypes["default"].bool.isRequired,
	  itemIndex: _propTypes["default"].number.isRequired,
	  item: _propTypes["default"].any.isRequired,
	  renderItem: _propTypes["default"].func.isRequired,
	  renderItemData: _propTypes["default"].object.isRequired,
	  onMouseEnter: _propTypes["default"].func,
	  onMouseLeave: _propTypes["default"].func,
	  onMouseDown: _propTypes["default"].func,
	  onClick: _propTypes["default"].func
	});
	});

	unwrapExports(Item_1);

	var ItemList = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = void 0;

	var _react = _interopRequireWildcard(React);

	var _propTypes = _interopRequireDefault(propTypes);

	var _Item = _interopRequireDefault(Item_1);

	var _compareObjects = _interopRequireDefault(compareObjects_1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

	function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

	function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

	function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

	function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

	function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

	function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

	function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

	function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

	function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

	function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

	function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var ItemsList = /*#__PURE__*/function (_Component) {
	  _inherits(ItemsList, _Component);

	  var _super = _createSuper(ItemsList);

	  function ItemsList() {
	    var _this;

	    _classCallCheck(this, ItemsList);

	    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    _this = _super.call.apply(_super, [this].concat(args));

	    _defineProperty(_assertThisInitialized(_this), "storeHighlightedItemReference", function (highlightedItem) {
	      _this.props.onHighlightedItemChange(highlightedItem === null ? null : highlightedItem.item);
	    });

	    return _this;
	  }

	  _createClass(ItemsList, [{
	    key: "shouldComponentUpdate",
	    value: function shouldComponentUpdate(nextProps) {
	      return (0, _compareObjects["default"])(nextProps, this.props, ['itemProps']);
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var _this2 = this;

	      var _this$props = this.props,
	          items = _this$props.items,
	          itemProps = _this$props.itemProps,
	          renderItem = _this$props.renderItem,
	          renderItemData = _this$props.renderItemData,
	          sectionIndex = _this$props.sectionIndex,
	          highlightedItemIndex = _this$props.highlightedItemIndex,
	          getItemId = _this$props.getItemId,
	          theme = _this$props.theme,
	          keyPrefix = _this$props.keyPrefix;
	      var sectionPrefix = sectionIndex === null ? keyPrefix : "".concat(keyPrefix, "section-").concat(sectionIndex, "-");
	      var isItemPropsFunction = typeof itemProps === 'function';
	      return /*#__PURE__*/_react["default"].createElement("ul", _extends({
	        role: "listbox"
	      }, theme("".concat(sectionPrefix, "items-list"), 'itemsList')), items.map(function (item, itemIndex) {
	        var isFirst = itemIndex === 0;
	        var isHighlighted = itemIndex === highlightedItemIndex;
	        var itemKey = "".concat(sectionPrefix, "item-").concat(itemIndex);
	        var itemPropsObj = isItemPropsFunction ? itemProps({
	          sectionIndex: sectionIndex,
	          itemIndex: itemIndex
	        }) : itemProps;

	        var allItemProps = _objectSpread({
	          id: getItemId(sectionIndex, itemIndex),
	          'aria-selected': isHighlighted
	        }, theme(itemKey, 'item', isFirst && 'itemFirst', isHighlighted && 'itemHighlighted'), {}, itemPropsObj);

	        if (isHighlighted) {
	          allItemProps.ref = _this2.storeHighlightedItemReference;
	        } // `key` is provided by theme()

	        /* eslint-disable react/jsx-key */


	        return /*#__PURE__*/_react["default"].createElement(_Item["default"], _extends({}, allItemProps, {
	          sectionIndex: sectionIndex,
	          isHighlighted: isHighlighted,
	          itemIndex: itemIndex,
	          item: item,
	          renderItem: renderItem,
	          renderItemData: renderItemData
	        }));
	        /* eslint-enable react/jsx-key */
	      }));
	    }
	  }]);

	  return ItemsList;
	}(_react.Component);

	exports["default"] = ItemsList;

	_defineProperty(ItemsList, "propTypes", {
	  items: _propTypes["default"].array.isRequired,
	  itemProps: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].func]),
	  renderItem: _propTypes["default"].func.isRequired,
	  renderItemData: _propTypes["default"].object.isRequired,
	  sectionIndex: _propTypes["default"].number,
	  highlightedItemIndex: _propTypes["default"].number,
	  onHighlightedItemChange: _propTypes["default"].func.isRequired,
	  getItemId: _propTypes["default"].func.isRequired,
	  theme: _propTypes["default"].func.isRequired,
	  keyPrefix: _propTypes["default"].string.isRequired
	});

	_defineProperty(ItemsList, "defaultProps", {
	  sectionIndex: null
	});
	});

	unwrapExports(ItemList);

	var Autowhatever_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = void 0;

	var _react = _interopRequireWildcard(React);

	var _propTypes = _interopRequireDefault(propTypes);

	var _sectionIterator = _interopRequireDefault(dist);

	var _reactThemeable = _interopRequireDefault(dist$1);

	var _SectionTitle = _interopRequireDefault(SectionTitle_1);

	var _ItemList = _interopRequireDefault(ItemList);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

	function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

	function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

	function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

	function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

	function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

	function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

	function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

	function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

	function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

	function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

	function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

	function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

	function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

	function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

	function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

	function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var emptyObject = {};

	var defaultRenderInputComponent = function defaultRenderInputComponent(props) {
	  return /*#__PURE__*/_react["default"].createElement("input", props);
	};

	var defaultRenderItemsContainer = function defaultRenderItemsContainer(_ref) {
	  var containerProps = _ref.containerProps,
	      children = _ref.children;
	  return /*#__PURE__*/_react["default"].createElement("div", containerProps, children);
	};

	var defaultTheme = {
	  container: 'react-autowhatever__container',
	  containerOpen: 'react-autowhatever__container--open',
	  input: 'react-autowhatever__input',
	  inputOpen: 'react-autowhatever__input--open',
	  inputFocused: 'react-autowhatever__input--focused',
	  itemsContainer: 'react-autowhatever__items-container',
	  itemsContainerOpen: 'react-autowhatever__items-container--open',
	  itemsList: 'react-autowhatever__items-list',
	  item: 'react-autowhatever__item',
	  itemFirst: 'react-autowhatever__item--first',
	  itemHighlighted: 'react-autowhatever__item--highlighted',
	  sectionContainer: 'react-autowhatever__section-container',
	  sectionContainerFirst: 'react-autowhatever__section-container--first',
	  sectionTitle: 'react-autowhatever__section-title'
	};

	var Autowhatever = /*#__PURE__*/function (_Component) {
	  _inherits(Autowhatever, _Component);

	  var _super = _createSuper(Autowhatever);

	  function Autowhatever(props) {
	    var _this;

	    _classCallCheck(this, Autowhatever);

	    _this = _super.call(this, props);

	    _defineProperty(_assertThisInitialized(_this), "storeInputReference", function (input) {
	      if (input !== null) {
	        _this.input = input;
	      }

	      var userRef = _this.props.inputProps.ref;

	      if (userRef) {
	        if (typeof userRef === 'function') {
	          userRef(input);
	        } else if (_typeof(userRef) === 'object' && Object.prototype.hasOwnProperty.call(userRef, 'current')) {
	          userRef.current = input;
	        }
	      }
	    });

	    _defineProperty(_assertThisInitialized(_this), "storeItemsContainerReference", function (itemsContainer) {
	      if (itemsContainer !== null) {
	        _this.itemsContainer = itemsContainer;
	      }
	    });

	    _defineProperty(_assertThisInitialized(_this), "onHighlightedItemChange", function (highlightedItem) {
	      _this.highlightedItem = highlightedItem;
	    });

	    _defineProperty(_assertThisInitialized(_this), "getItemId", function (sectionIndex, itemIndex) {
	      if (itemIndex === null) {
	        return null;
	      }

	      var id = _this.props.id;
	      var section = sectionIndex === null ? '' : "section-".concat(sectionIndex);
	      return "react-autowhatever-".concat(id, "-").concat(section, "-item-").concat(itemIndex);
	    });

	    _defineProperty(_assertThisInitialized(_this), "onFocus", function (event) {
	      var inputProps = _this.props.inputProps;

	      _this.setState({
	        isInputFocused: true
	      });

	      inputProps.onFocus && inputProps.onFocus(event);
	    });

	    _defineProperty(_assertThisInitialized(_this), "onBlur", function (event) {
	      var inputProps = _this.props.inputProps;

	      _this.setState({
	        isInputFocused: false
	      });

	      inputProps.onBlur && inputProps.onBlur(event);
	    });

	    _defineProperty(_assertThisInitialized(_this), "onKeyDown", function (event) {
	      var _this$props = _this.props,
	          inputProps = _this$props.inputProps,
	          highlightedSectionIndex = _this$props.highlightedSectionIndex,
	          highlightedItemIndex = _this$props.highlightedItemIndex;

	      switch (event.key) {
	        case 'ArrowDown':
	        case 'ArrowUp':
	          {
	            var nextPrev = event.key === 'ArrowDown' ? 'next' : 'prev';

	            var _this$sectionIterator = _this.sectionIterator[nextPrev]([highlightedSectionIndex, highlightedItemIndex]),
	                _this$sectionIterator2 = _slicedToArray(_this$sectionIterator, 2),
	                newHighlightedSectionIndex = _this$sectionIterator2[0],
	                newHighlightedItemIndex = _this$sectionIterator2[1];

	            inputProps.onKeyDown(event, {
	              newHighlightedSectionIndex: newHighlightedSectionIndex,
	              newHighlightedItemIndex: newHighlightedItemIndex
	            });
	            break;
	          }

	        default:
	          inputProps.onKeyDown(event, {
	            highlightedSectionIndex: highlightedSectionIndex,
	            highlightedItemIndex: highlightedItemIndex
	          });
	      }
	    });

	    _this.highlightedItem = null;
	    _this.state = {
	      isInputFocused: false
	    };

	    _this.setSectionsItems(props);

	    _this.setSectionIterator(props);

	    _this.setTheme(props);

	    return _this;
	  }

	  _createClass(Autowhatever, [{
	    key: "componentDidMount",
	    value: function componentDidMount() {
	      this.ensureHighlightedItemIsVisible();
	    } // eslint-disable-next-line camelcase, react/sort-comp

	  }, {
	    key: "UNSAFE_componentWillReceiveProps",
	    value: function UNSAFE_componentWillReceiveProps(nextProps) {
	      if (nextProps.items !== this.props.items) {
	        this.setSectionsItems(nextProps);
	      }

	      if (nextProps.items !== this.props.items || nextProps.multiSection !== this.props.multiSection) {
	        this.setSectionIterator(nextProps);
	      }

	      if (nextProps.theme !== this.props.theme) {
	        this.setTheme(nextProps);
	      }
	    }
	  }, {
	    key: "componentDidUpdate",
	    value: function componentDidUpdate() {
	      this.ensureHighlightedItemIsVisible();
	    }
	  }, {
	    key: "setSectionsItems",
	    value: function setSectionsItems(props) {
	      if (props.multiSection) {
	        this.sectionsItems = props.items.map(function (section) {
	          return props.getSectionItems(section);
	        });
	        this.sectionsLengths = this.sectionsItems.map(function (items) {
	          return items.length;
	        });
	        this.allSectionsAreEmpty = this.sectionsLengths.every(function (itemsCount) {
	          return itemsCount === 0;
	        });
	      }
	    }
	  }, {
	    key: "setSectionIterator",
	    value: function setSectionIterator(props) {
	      this.sectionIterator = (0, _sectionIterator["default"])({
	        multiSection: props.multiSection,
	        data: props.multiSection ? this.sectionsLengths : props.items.length
	      });
	    }
	  }, {
	    key: "setTheme",
	    value: function setTheme(props) {
	      this.theme = (0, _reactThemeable["default"])(props.theme);
	    }
	  }, {
	    key: "renderSections",
	    value: function renderSections() {
	      var _this2 = this;

	      if (this.allSectionsAreEmpty) {
	        return null;
	      }

	      var theme = this.theme;
	      var _this$props2 = this.props,
	          id = _this$props2.id,
	          items = _this$props2.items,
	          renderItem = _this$props2.renderItem,
	          renderItemData = _this$props2.renderItemData,
	          renderSectionTitle = _this$props2.renderSectionTitle,
	          highlightedSectionIndex = _this$props2.highlightedSectionIndex,
	          highlightedItemIndex = _this$props2.highlightedItemIndex,
	          itemProps = _this$props2.itemProps;
	      return items.map(function (section, sectionIndex) {
	        var keyPrefix = "react-autowhatever-".concat(id, "-");
	        var sectionKeyPrefix = "".concat(keyPrefix, "section-").concat(sectionIndex, "-");
	        var isFirstSection = sectionIndex === 0; // `key` is provided by theme()

	        /* eslint-disable react/jsx-key */

	        return /*#__PURE__*/_react["default"].createElement("div", theme("".concat(sectionKeyPrefix, "container"), 'sectionContainer', isFirstSection && 'sectionContainerFirst'), /*#__PURE__*/_react["default"].createElement(_SectionTitle["default"], {
	          section: section,
	          renderSectionTitle: renderSectionTitle,
	          theme: theme,
	          sectionKeyPrefix: sectionKeyPrefix
	        }), /*#__PURE__*/_react["default"].createElement(_ItemList["default"], {
	          items: _this2.sectionsItems[sectionIndex],
	          itemProps: itemProps,
	          renderItem: renderItem,
	          renderItemData: renderItemData,
	          sectionIndex: sectionIndex,
	          highlightedItemIndex: highlightedSectionIndex === sectionIndex ? highlightedItemIndex : null,
	          onHighlightedItemChange: _this2.onHighlightedItemChange,
	          getItemId: _this2.getItemId,
	          theme: theme,
	          keyPrefix: keyPrefix,
	          ref: _this2.storeItemsListReference
	        }));
	        /* eslint-enable react/jsx-key */
	      });
	    }
	  }, {
	    key: "renderItems",
	    value: function renderItems() {
	      var items = this.props.items;

	      if (items.length === 0) {
	        return null;
	      }

	      var theme = this.theme;
	      var _this$props3 = this.props,
	          id = _this$props3.id,
	          renderItem = _this$props3.renderItem,
	          renderItemData = _this$props3.renderItemData,
	          highlightedSectionIndex = _this$props3.highlightedSectionIndex,
	          highlightedItemIndex = _this$props3.highlightedItemIndex,
	          itemProps = _this$props3.itemProps;
	      return /*#__PURE__*/_react["default"].createElement(_ItemList["default"], {
	        items: items,
	        itemProps: itemProps,
	        renderItem: renderItem,
	        renderItemData: renderItemData,
	        highlightedItemIndex: highlightedSectionIndex === null ? highlightedItemIndex : null,
	        onHighlightedItemChange: this.onHighlightedItemChange,
	        getItemId: this.getItemId,
	        theme: theme,
	        keyPrefix: "react-autowhatever-".concat(id, "-")
	      });
	    }
	  }, {
	    key: "ensureHighlightedItemIsVisible",
	    value: function ensureHighlightedItemIsVisible() {
	      var highlightedItem = this.highlightedItem;

	      if (!highlightedItem) {
	        return;
	      }

	      var itemsContainer = this.itemsContainer;
	      var itemOffsetRelativeToContainer = highlightedItem.offsetParent === itemsContainer ? highlightedItem.offsetTop : highlightedItem.offsetTop - itemsContainer.offsetTop;
	      var scrollTop = itemsContainer.scrollTop; // Top of the visible area

	      if (itemOffsetRelativeToContainer < scrollTop) {
	        // Item is off the top of the visible area
	        scrollTop = itemOffsetRelativeToContainer;
	      } else if (itemOffsetRelativeToContainer + highlightedItem.offsetHeight > scrollTop + itemsContainer.offsetHeight) {
	        // Item is off the bottom of the visible area
	        scrollTop = itemOffsetRelativeToContainer + highlightedItem.offsetHeight - itemsContainer.offsetHeight;
	      }

	      if (scrollTop !== itemsContainer.scrollTop) {
	        itemsContainer.scrollTop = scrollTop;
	      }
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var theme = this.theme;
	      var _this$props4 = this.props,
	          id = _this$props4.id,
	          multiSection = _this$props4.multiSection,
	          renderInputComponent = _this$props4.renderInputComponent,
	          renderItemsContainer = _this$props4.renderItemsContainer,
	          highlightedSectionIndex = _this$props4.highlightedSectionIndex,
	          highlightedItemIndex = _this$props4.highlightedItemIndex;
	      var isInputFocused = this.state.isInputFocused;
	      var renderedItems = multiSection ? this.renderSections() : this.renderItems();
	      var isOpen = renderedItems !== null;
	      var ariaActivedescendant = this.getItemId(highlightedSectionIndex, highlightedItemIndex);
	      var itemsContainerId = "react-autowhatever-".concat(id);

	      var containerProps = _objectSpread({
	        role: 'combobox',
	        'aria-haspopup': 'listbox',
	        'aria-owns': itemsContainerId,
	        'aria-expanded': isOpen
	      }, theme("react-autowhatever-".concat(id, "-container"), 'container', isOpen && 'containerOpen'), {}, this.props.containerProps);

	      var inputComponent = renderInputComponent(_objectSpread({
	        type: 'text',
	        value: '',
	        autoComplete: 'off',
	        'aria-autocomplete': 'list',
	        'aria-controls': itemsContainerId,
	        'aria-activedescendant': ariaActivedescendant
	      }, theme("react-autowhatever-".concat(id, "-input"), 'input', isOpen && 'inputOpen', isInputFocused && 'inputFocused'), {}, this.props.inputProps, {
	        onFocus: this.onFocus,
	        onBlur: this.onBlur,
	        onKeyDown: this.props.inputProps.onKeyDown && this.onKeyDown,
	        ref: this.storeInputReference
	      }));
	      var itemsContainer = renderItemsContainer({
	        containerProps: _objectSpread({
	          id: itemsContainerId,
	          role: 'listbox'
	        }, theme("react-autowhatever-".concat(id, "-items-container"), 'itemsContainer', isOpen && 'itemsContainerOpen'), {
	          ref: this.storeItemsContainerReference
	        }),
	        children: renderedItems
	      });
	      return /*#__PURE__*/_react["default"].createElement("div", containerProps, inputComponent, itemsContainer);
	    }
	  }]);

	  return Autowhatever;
	}(_react.Component);

	exports["default"] = Autowhatever;

	_defineProperty(Autowhatever, "propTypes", {
	  id: _propTypes["default"].string,
	  // Used in aria-* attributes. If multiple Autowhatever's are rendered on a page, they must have unique ids.
	  multiSection: _propTypes["default"].bool,
	  // Indicates whether a multi section layout should be rendered.
	  renderInputComponent: _propTypes["default"].func,
	  // When specified, it is used to render the input element.
	  renderItemsContainer: _propTypes["default"].func,
	  // Renders the items container.
	  items: _propTypes["default"].array.isRequired,
	  // Array of items or sections to render.
	  renderItem: _propTypes["default"].func,
	  // This function renders a single item.
	  renderItemData: _propTypes["default"].object,
	  // Arbitrary data that will be passed to renderItem()
	  renderSectionTitle: _propTypes["default"].func,
	  // This function gets a section and renders its title.
	  getSectionItems: _propTypes["default"].func,
	  // This function gets a section and returns its items, which will be passed into `renderItem` for rendering.
	  containerProps: _propTypes["default"].object,
	  // Arbitrary container props
	  inputProps: _propTypes["default"].object,
	  // Arbitrary input props
	  itemProps: _propTypes["default"].oneOfType([// Arbitrary item props
	  _propTypes["default"].object, _propTypes["default"].func]),
	  highlightedSectionIndex: _propTypes["default"].number,
	  // Section index of the highlighted item
	  highlightedItemIndex: _propTypes["default"].number,
	  // Highlighted item index (within a section)
	  theme: _propTypes["default"].oneOfType([// Styles. See: https://github.com/markdalgleish/react-themeable
	  _propTypes["default"].object, _propTypes["default"].array])
	});

	_defineProperty(Autowhatever, "defaultProps", {
	  id: '1',
	  multiSection: false,
	  renderInputComponent: defaultRenderInputComponent,
	  renderItemsContainer: defaultRenderItemsContainer,
	  renderItem: function renderItem() {
	    throw new Error('`renderItem` must be provided');
	  },
	  renderItemData: emptyObject,
	  renderSectionTitle: function renderSectionTitle() {
	    throw new Error('`renderSectionTitle` must be provided');
	  },
	  getSectionItems: function getSectionItems() {
	    throw new Error('`getSectionItems` must be provided');
	  },
	  containerProps: emptyObject,
	  inputProps: emptyObject,
	  itemProps: emptyObject,
	  highlightedSectionIndex: null,
	  highlightedItemIndex: null,
	  theme: defaultTheme
	});
	});

	unwrapExports(Autowhatever_1);

	var theme = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.mapToAutowhateverTheme = exports.defaultTheme = void 0;
	var defaultTheme = {
	  container: 'react-autosuggest__container',
	  containerOpen: 'react-autosuggest__container--open',
	  input: 'react-autosuggest__input',
	  inputOpen: 'react-autosuggest__input--open',
	  inputFocused: 'react-autosuggest__input--focused',
	  suggestionsContainer: 'react-autosuggest__suggestions-container',
	  suggestionsContainerOpen: 'react-autosuggest__suggestions-container--open',
	  suggestionsList: 'react-autosuggest__suggestions-list',
	  suggestion: 'react-autosuggest__suggestion',
	  suggestionFirst: 'react-autosuggest__suggestion--first',
	  suggestionHighlighted: 'react-autosuggest__suggestion--highlighted',
	  sectionContainer: 'react-autosuggest__section-container',
	  sectionContainerFirst: 'react-autosuggest__section-container--first',
	  sectionTitle: 'react-autosuggest__section-title'
	};
	exports.defaultTheme = defaultTheme;

	var mapToAutowhateverTheme = function mapToAutowhateverTheme(theme) {
	  var result = {};

	  for (var key in theme) {
	    switch (key) {
	      case 'suggestionsContainer':
	        result['itemsContainer'] = theme[key];
	        break;

	      case 'suggestionsContainerOpen':
	        result['itemsContainerOpen'] = theme[key];
	        break;

	      case 'suggestion':
	        result['item'] = theme[key];
	        break;

	      case 'suggestionFirst':
	        result['itemFirst'] = theme[key];
	        break;

	      case 'suggestionHighlighted':
	        result['itemHighlighted'] = theme[key];
	        break;

	      case 'suggestionsList':
	        result['itemsList'] = theme[key];
	        break;

	      default:
	        result[key] = theme[key];
	    }
	  }

	  return result;
	};

	exports.mapToAutowhateverTheme = mapToAutowhateverTheme;
	});

	unwrapExports(theme);
	var theme_1 = theme.mapToAutowhateverTheme;
	var theme_2 = theme.defaultTheme;

	var Autosuggest_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = void 0;

	var _react = _interopRequireWildcard(React);

	var _propTypes = _interopRequireDefault(propTypes);

	var _arrays = _interopRequireDefault(arrays);

	var _Autowhatever = _interopRequireDefault(Autowhatever_1);



	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

	function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

	function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

	function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

	function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

	function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

	function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

	function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

	function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

	function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

	function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var alwaysTrue = function alwaysTrue() {
	  return true;
	};

	var defaultShouldRenderSuggestions = function defaultShouldRenderSuggestions(value) {
	  return value.trim().length > 0;
	};

	var defaultRenderSuggestionsContainer = function defaultRenderSuggestionsContainer(_ref) {
	  var containerProps = _ref.containerProps,
	      children = _ref.children;
	  return /*#__PURE__*/_react["default"].createElement("div", containerProps, children);
	};

	var Autosuggest = /*#__PURE__*/function (_Component) {
	  _inherits(Autosuggest, _Component);

	  var _super = _createSuper(Autosuggest);

	  function Autosuggest(_ref2) {
	    var _this;

	    var _alwaysRenderSuggestions = _ref2.alwaysRenderSuggestions;

	    _classCallCheck(this, Autosuggest);

	    _this = _super.call(this);

	    _defineProperty(_assertThisInitialized(_this), "onDocumentMouseDown", function (event) {
	      _this.justClickedOnSuggestionsContainer = false;
	      var node = event.detail && event.detail.target || // This is for testing only. Please show me a better way to emulate this.
	      event.target;

	      while (node !== null && node !== document) {
	        if (node.getAttribute && node.getAttribute('data-suggestion-index') !== null) {
	          // Suggestion was clicked
	          return;
	        }

	        if (node === _this.suggestionsContainer) {
	          // Something else inside suggestions container was clicked
	          _this.justClickedOnSuggestionsContainer = true;
	          return;
	        }

	        node = node.parentNode;
	      }
	    });

	    _defineProperty(_assertThisInitialized(_this), "storeAutowhateverRef", function (autowhatever) {
	      if (autowhatever !== null) {
	        _this.autowhatever = autowhatever;
	      }
	    });

	    _defineProperty(_assertThisInitialized(_this), "onSuggestionMouseEnter", function (event, _ref3) {
	      var sectionIndex = _ref3.sectionIndex,
	          itemIndex = _ref3.itemIndex;

	      _this.updateHighlightedSuggestion(sectionIndex, itemIndex);

	      if (event.target === _this.pressedSuggestion) {
	        _this.justSelectedSuggestion = true;
	      }

	      _this.justMouseEntered = true;
	      setTimeout(function () {
	        _this.justMouseEntered = false;
	      });
	    });

	    _defineProperty(_assertThisInitialized(_this), "highlightFirstSuggestion", function () {
	      _this.updateHighlightedSuggestion(_this.props.multiSection ? 0 : null, 0);
	    });

	    _defineProperty(_assertThisInitialized(_this), "onDocumentMouseUp", function () {
	      if (_this.pressedSuggestion && !_this.justSelectedSuggestion) {
	        _this.input.focus();
	      }

	      _this.pressedSuggestion = null;
	    });

	    _defineProperty(_assertThisInitialized(_this), "onSuggestionMouseDown", function (event) {
	      // Checking if this.justSelectedSuggestion is already true to not duplicate touch events in chrome
	      // See: https://github.com/facebook/react/issues/9809#issuecomment-413978405
	      if (!_this.justSelectedSuggestion) {
	        _this.justSelectedSuggestion = true;
	        _this.pressedSuggestion = event.target;
	      }
	    });

	    _defineProperty(_assertThisInitialized(_this), "onSuggestionsClearRequested", function () {
	      var onSuggestionsClearRequested = _this.props.onSuggestionsClearRequested;
	      onSuggestionsClearRequested && onSuggestionsClearRequested();
	    });

	    _defineProperty(_assertThisInitialized(_this), "onSuggestionSelected", function (event, data) {
	      var _this$props = _this.props,
	          alwaysRenderSuggestions = _this$props.alwaysRenderSuggestions,
	          onSuggestionSelected = _this$props.onSuggestionSelected,
	          onSuggestionsFetchRequested = _this$props.onSuggestionsFetchRequested;
	      onSuggestionSelected && onSuggestionSelected(event, data);

	      if (alwaysRenderSuggestions) {
	        onSuggestionsFetchRequested({
	          value: data.suggestionValue,
	          reason: 'suggestion-selected'
	        });
	      } else {
	        _this.onSuggestionsClearRequested();
	      }

	      _this.resetHighlightedSuggestion();
	    });

	    _defineProperty(_assertThisInitialized(_this), "onSuggestionClick", function (event) {
	      var _this$props2 = _this.props,
	          alwaysRenderSuggestions = _this$props2.alwaysRenderSuggestions,
	          focusInputOnSuggestionClick = _this$props2.focusInputOnSuggestionClick;

	      var _this$getSuggestionIn = _this.getSuggestionIndices(_this.findSuggestionElement(event.target)),
	          sectionIndex = _this$getSuggestionIn.sectionIndex,
	          suggestionIndex = _this$getSuggestionIn.suggestionIndex;

	      var clickedSuggestion = _this.getSuggestion(sectionIndex, suggestionIndex);

	      var clickedSuggestionValue = _this.props.getSuggestionValue(clickedSuggestion);

	      _this.maybeCallOnChange(event, clickedSuggestionValue, 'click');

	      _this.onSuggestionSelected(event, {
	        suggestion: clickedSuggestion,
	        suggestionValue: clickedSuggestionValue,
	        suggestionIndex: suggestionIndex,
	        sectionIndex: sectionIndex,
	        method: 'click'
	      });

	      if (!alwaysRenderSuggestions) {
	        _this.closeSuggestions();
	      }

	      if (focusInputOnSuggestionClick === true) {
	        _this.input.focus();
	      } else {
	        _this.onBlur();
	      }

	      setTimeout(function () {
	        _this.justSelectedSuggestion = false;
	      });
	    });

	    _defineProperty(_assertThisInitialized(_this), "onBlur", function () {
	      var _this$props3 = _this.props,
	          inputProps = _this$props3.inputProps,
	          shouldRenderSuggestions = _this$props3.shouldRenderSuggestions;
	      var value = inputProps.value,
	          onBlur = inputProps.onBlur;

	      var highlightedSuggestion = _this.getHighlightedSuggestion();

	      var shouldRender = shouldRenderSuggestions(value);

	      _this.setState({
	        isFocused: false,
	        highlightedSectionIndex: null,
	        highlightedSuggestionIndex: null,
	        highlightedSuggestion: null,
	        valueBeforeUpDown: null,
	        isCollapsed: !shouldRender
	      });

	      onBlur && onBlur(_this.blurEvent, {
	        highlightedSuggestion: highlightedSuggestion
	      });
	    });

	    _defineProperty(_assertThisInitialized(_this), "onSuggestionMouseLeave", function (event) {
	      _this.resetHighlightedSuggestion(false); // shouldResetValueBeforeUpDown


	      if (_this.justSelectedSuggestion && event.target === _this.pressedSuggestion) {
	        _this.justSelectedSuggestion = false;
	      }
	    });

	    _defineProperty(_assertThisInitialized(_this), "onSuggestionTouchStart", function () {
	      _this.justSelectedSuggestion = true; // todo: event.preventDefault when https://github.com/facebook/react/issues/2043
	      // todo: gets released so onSuggestionMouseDown won't fire in chrome
	    });

	    _defineProperty(_assertThisInitialized(_this), "onSuggestionTouchMove", function () {
	      _this.justSelectedSuggestion = false;
	      _this.pressedSuggestion = null;

	      _this.input.focus();
	    });

	    _defineProperty(_assertThisInitialized(_this), "itemProps", function (_ref4) {
	      var sectionIndex = _ref4.sectionIndex,
	          itemIndex = _ref4.itemIndex;
	      return {
	        'data-section-index': sectionIndex,
	        'data-suggestion-index': itemIndex,
	        onMouseEnter: _this.onSuggestionMouseEnter,
	        onMouseLeave: _this.onSuggestionMouseLeave,
	        onMouseDown: _this.onSuggestionMouseDown,
	        onTouchStart: _this.onSuggestionTouchStart,
	        onTouchMove: _this.onSuggestionTouchMove,
	        onClick: _this.onSuggestionClick
	      };
	    });

	    _defineProperty(_assertThisInitialized(_this), "renderSuggestionsContainer", function (_ref5) {
	      var containerProps = _ref5.containerProps,
	          children = _ref5.children;
	      var renderSuggestionsContainer = _this.props.renderSuggestionsContainer;
	      return renderSuggestionsContainer({
	        containerProps: containerProps,
	        children: children,
	        query: _this.getQuery()
	      });
	    });

	    _this.state = {
	      isFocused: false,
	      isCollapsed: !_alwaysRenderSuggestions,
	      highlightedSectionIndex: null,
	      highlightedSuggestionIndex: null,
	      highlightedSuggestion: null,
	      valueBeforeUpDown: null
	    };
	    _this.justPressedUpDown = false;
	    _this.justMouseEntered = false;
	    _this.pressedSuggestion = null;
	    return _this;
	  }

	  _createClass(Autosuggest, [{
	    key: "componentDidMount",
	    value: function componentDidMount() {
	      document.addEventListener('mousedown', this.onDocumentMouseDown);
	      document.addEventListener('mouseup', this.onDocumentMouseUp);
	      this.input = this.autowhatever.input;
	      this.suggestionsContainer = this.autowhatever.itemsContainer;
	    } // eslint-disable-next-line camelcase, react/sort-comp

	  }, {
	    key: "UNSAFE_componentWillReceiveProps",
	    value: function UNSAFE_componentWillReceiveProps(nextProps) {
	      if ((0, _arrays["default"])(nextProps.suggestions, this.props.suggestions)) {
	        if (nextProps.highlightFirstSuggestion && nextProps.suggestions.length > 0 && this.justPressedUpDown === false && this.justMouseEntered === false) {
	          this.highlightFirstSuggestion();
	        }
	      } else {
	        if (this.willRenderSuggestions(nextProps)) {
	          if (this.state.isCollapsed && !this.justSelectedSuggestion) {
	            this.revealSuggestions();
	          }
	        } else {
	          this.resetHighlightedSuggestion();
	        }
	      }
	    }
	  }, {
	    key: "componentDidUpdate",
	    value: function componentDidUpdate(prevProps, prevState) {
	      var _this$props4 = this.props,
	          suggestions = _this$props4.suggestions,
	          onSuggestionHighlighted = _this$props4.onSuggestionHighlighted,
	          highlightFirstSuggestion = _this$props4.highlightFirstSuggestion;

	      if (!(0, _arrays["default"])(suggestions, prevProps.suggestions) && suggestions.length > 0 && highlightFirstSuggestion) {
	        this.highlightFirstSuggestion();
	        return;
	      }

	      if (onSuggestionHighlighted) {
	        var highlightedSuggestion = this.getHighlightedSuggestion();
	        var prevHighlightedSuggestion = prevState.highlightedSuggestion;

	        if (highlightedSuggestion != prevHighlightedSuggestion) {
	          onSuggestionHighlighted({
	            suggestion: highlightedSuggestion
	          });
	        }
	      }
	    }
	  }, {
	    key: "componentWillUnmount",
	    value: function componentWillUnmount() {
	      document.removeEventListener('mousedown', this.onDocumentMouseDown);
	      document.removeEventListener('mouseup', this.onDocumentMouseUp);
	    }
	  }, {
	    key: "updateHighlightedSuggestion",
	    value: function updateHighlightedSuggestion(sectionIndex, suggestionIndex, prevValue) {
	      var _this2 = this;

	      this.setState(function (state) {
	        var valueBeforeUpDown = state.valueBeforeUpDown;

	        if (suggestionIndex === null) {
	          valueBeforeUpDown = null;
	        } else if (valueBeforeUpDown === null && typeof prevValue !== 'undefined') {
	          valueBeforeUpDown = prevValue;
	        }

	        return {
	          highlightedSectionIndex: sectionIndex,
	          highlightedSuggestionIndex: suggestionIndex,
	          highlightedSuggestion: suggestionIndex === null ? null : _this2.getSuggestion(sectionIndex, suggestionIndex),
	          valueBeforeUpDown: valueBeforeUpDown
	        };
	      });
	    }
	  }, {
	    key: "resetHighlightedSuggestion",
	    value: function resetHighlightedSuggestion() {
	      var shouldResetValueBeforeUpDown = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
	      this.setState(function (state) {
	        var valueBeforeUpDown = state.valueBeforeUpDown;
	        return {
	          highlightedSectionIndex: null,
	          highlightedSuggestionIndex: null,
	          highlightedSuggestion: null,
	          valueBeforeUpDown: shouldResetValueBeforeUpDown ? null : valueBeforeUpDown
	        };
	      });
	    }
	  }, {
	    key: "revealSuggestions",
	    value: function revealSuggestions() {
	      this.setState({
	        isCollapsed: false
	      });
	    }
	  }, {
	    key: "closeSuggestions",
	    value: function closeSuggestions() {
	      this.setState({
	        highlightedSectionIndex: null,
	        highlightedSuggestionIndex: null,
	        highlightedSuggestion: null,
	        valueBeforeUpDown: null,
	        isCollapsed: true
	      });
	    }
	  }, {
	    key: "getSuggestion",
	    value: function getSuggestion(sectionIndex, suggestionIndex) {
	      var _this$props5 = this.props,
	          suggestions = _this$props5.suggestions,
	          multiSection = _this$props5.multiSection,
	          getSectionSuggestions = _this$props5.getSectionSuggestions;

	      if (multiSection) {
	        return getSectionSuggestions(suggestions[sectionIndex])[suggestionIndex];
	      }

	      return suggestions[suggestionIndex];
	    }
	  }, {
	    key: "getHighlightedSuggestion",
	    value: function getHighlightedSuggestion() {
	      var _this$state = this.state,
	          highlightedSectionIndex = _this$state.highlightedSectionIndex,
	          highlightedSuggestionIndex = _this$state.highlightedSuggestionIndex;

	      if (highlightedSuggestionIndex === null) {
	        return null;
	      }

	      return this.getSuggestion(highlightedSectionIndex, highlightedSuggestionIndex);
	    }
	  }, {
	    key: "getSuggestionValueByIndex",
	    value: function getSuggestionValueByIndex(sectionIndex, suggestionIndex) {
	      var getSuggestionValue = this.props.getSuggestionValue;
	      return getSuggestionValue(this.getSuggestion(sectionIndex, suggestionIndex));
	    }
	  }, {
	    key: "getSuggestionIndices",
	    value: function getSuggestionIndices(suggestionElement) {
	      var sectionIndex = suggestionElement.getAttribute('data-section-index');
	      var suggestionIndex = suggestionElement.getAttribute('data-suggestion-index');
	      return {
	        sectionIndex: typeof sectionIndex === 'string' ? parseInt(sectionIndex, 10) : null,
	        suggestionIndex: parseInt(suggestionIndex, 10)
	      };
	    }
	  }, {
	    key: "findSuggestionElement",
	    value: function findSuggestionElement(startNode) {
	      var node = startNode;

	      do {
	        if (node.getAttribute && node.getAttribute('data-suggestion-index') !== null) {
	          return node;
	        }

	        node = node.parentNode;
	      } while (node !== null);

	      console.error('Clicked element:', startNode); // eslint-disable-line no-console

	      throw new Error("Couldn't find suggestion element");
	    }
	  }, {
	    key: "maybeCallOnChange",
	    value: function maybeCallOnChange(event, newValue, method) {
	      var _this$props$inputProp = this.props.inputProps,
	          value = _this$props$inputProp.value,
	          onChange = _this$props$inputProp.onChange;

	      if (newValue !== value) {
	        onChange(event, {
	          newValue: newValue,
	          method: method
	        });
	      }
	    }
	  }, {
	    key: "willRenderSuggestions",
	    value: function willRenderSuggestions(props) {
	      var suggestions = props.suggestions,
	          inputProps = props.inputProps,
	          shouldRenderSuggestions = props.shouldRenderSuggestions;
	      var value = inputProps.value;
	      return suggestions.length > 0 && shouldRenderSuggestions(value);
	    }
	  }, {
	    key: "getQuery",
	    value: function getQuery() {
	      var inputProps = this.props.inputProps;
	      var value = inputProps.value;
	      var valueBeforeUpDown = this.state.valueBeforeUpDown;
	      return (valueBeforeUpDown === null ? value : valueBeforeUpDown).trim();
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var _this3 = this;

	      var _this$props6 = this.props,
	          suggestions = _this$props6.suggestions,
	          renderInputComponent = _this$props6.renderInputComponent,
	          onSuggestionsFetchRequested = _this$props6.onSuggestionsFetchRequested,
	          renderSuggestion = _this$props6.renderSuggestion,
	          inputProps = _this$props6.inputProps,
	          multiSection = _this$props6.multiSection,
	          renderSectionTitle = _this$props6.renderSectionTitle,
	          id = _this$props6.id,
	          getSectionSuggestions = _this$props6.getSectionSuggestions,
	          theme$1 = _this$props6.theme,
	          getSuggestionValue = _this$props6.getSuggestionValue,
	          alwaysRenderSuggestions = _this$props6.alwaysRenderSuggestions,
	          highlightFirstSuggestion = _this$props6.highlightFirstSuggestion;
	      var _this$state2 = this.state,
	          isFocused = _this$state2.isFocused,
	          isCollapsed = _this$state2.isCollapsed,
	          highlightedSectionIndex = _this$state2.highlightedSectionIndex,
	          highlightedSuggestionIndex = _this$state2.highlightedSuggestionIndex,
	          valueBeforeUpDown = _this$state2.valueBeforeUpDown;
	      var shouldRenderSuggestions = alwaysRenderSuggestions ? alwaysTrue : this.props.shouldRenderSuggestions;
	      var value = inputProps.value,
	          _onFocus = inputProps.onFocus,
	          _onKeyDown = inputProps.onKeyDown;
	      var willRenderSuggestions = this.willRenderSuggestions(this.props);
	      var isOpen = alwaysRenderSuggestions || isFocused && !isCollapsed && willRenderSuggestions;
	      var items = isOpen ? suggestions : [];

	      var autowhateverInputProps = _objectSpread({}, inputProps, {
	        onFocus: function onFocus(event) {
	          if (!_this3.justSelectedSuggestion && !_this3.justClickedOnSuggestionsContainer) {
	            var shouldRender = shouldRenderSuggestions(value);

	            _this3.setState({
	              isFocused: true,
	              isCollapsed: !shouldRender
	            });

	            _onFocus && _onFocus(event);

	            if (shouldRender) {
	              onSuggestionsFetchRequested({
	                value: value,
	                reason: 'input-focused'
	              });
	            }
	          }
	        },
	        onBlur: function onBlur(event) {
	          if (_this3.justClickedOnSuggestionsContainer) {
	            _this3.input.focus();

	            return;
	          }

	          _this3.blurEvent = event;

	          if (!_this3.justSelectedSuggestion) {
	            _this3.onBlur();

	            _this3.onSuggestionsClearRequested();
	          }
	        },
	        onChange: function onChange(event) {
	          var value = event.target.value;
	          var shouldRender = shouldRenderSuggestions(value);

	          _this3.maybeCallOnChange(event, value, 'type');

	          if (_this3.suggestionsContainer) {
	            _this3.suggestionsContainer.scrollTop = 0;
	          }

	          _this3.setState(_objectSpread({}, highlightFirstSuggestion ? {} : {
	            highlightedSectionIndex: null,
	            highlightedSuggestionIndex: null,
	            highlightedSuggestion: null
	          }, {
	            valueBeforeUpDown: null,
	            isCollapsed: !shouldRender
	          }));

	          if (shouldRender) {
	            onSuggestionsFetchRequested({
	              value: value,
	              reason: 'input-changed'
	            });
	          } else {
	            _this3.onSuggestionsClearRequested();
	          }
	        },
	        onKeyDown: function onKeyDown(event, data) {
	          var keyCode = event.keyCode;

	          switch (keyCode) {
	            case 40: // ArrowDown

	            case 38:
	              // ArrowUp
	              if (isCollapsed) {
	                if (shouldRenderSuggestions(value)) {
	                  onSuggestionsFetchRequested({
	                    value: value,
	                    reason: 'suggestions-revealed'
	                  });

	                  _this3.revealSuggestions();
	                }
	              } else if (suggestions.length > 0) {
	                var newHighlightedSectionIndex = data.newHighlightedSectionIndex,
	                    newHighlightedItemIndex = data.newHighlightedItemIndex;
	                var newValue;

	                if (newHighlightedItemIndex === null) {
	                  // valueBeforeUpDown can be null if, for example, user
	                  // hovers on the first suggestion and then pressed Up.
	                  // If that happens, use the original input value.
	                  newValue = valueBeforeUpDown === null ? value : valueBeforeUpDown;
	                } else {
	                  newValue = _this3.getSuggestionValueByIndex(newHighlightedSectionIndex, newHighlightedItemIndex);
	                }

	                _this3.updateHighlightedSuggestion(newHighlightedSectionIndex, newHighlightedItemIndex, value);

	                _this3.maybeCallOnChange(event, newValue, keyCode === 40 ? 'down' : 'up');
	              }

	              event.preventDefault(); // Prevents the cursor from moving

	              _this3.justPressedUpDown = true;
	              setTimeout(function () {
	                _this3.justPressedUpDown = false;
	              });
	              break;
	            // Enter

	            case 13:
	              {
	                // See #388
	                if (event.keyCode === 229) {
	                  break;
	                }

	                var highlightedSuggestion = _this3.getHighlightedSuggestion();

	                if (isOpen && !alwaysRenderSuggestions) {
	                  _this3.closeSuggestions();
	                }

	                if (highlightedSuggestion != null) {
	                  var _newValue = getSuggestionValue(highlightedSuggestion);

	                  _this3.maybeCallOnChange(event, _newValue, 'enter');

	                  _this3.onSuggestionSelected(event, {
	                    suggestion: highlightedSuggestion,
	                    suggestionValue: _newValue,
	                    suggestionIndex: highlightedSuggestionIndex,
	                    sectionIndex: highlightedSectionIndex,
	                    method: 'enter'
	                  });

	                  _this3.justSelectedSuggestion = true;
	                  setTimeout(function () {
	                    _this3.justSelectedSuggestion = false;
	                  });
	                }

	                break;
	              }
	            // Escape

	            case 27:
	              {
	                if (isOpen) {
	                  // If input.type === 'search', the browser clears the input
	                  // when Escape is pressed. We want to disable this default
	                  // behaviour so that, when suggestions are shown, we just hide
	                  // them, without clearing the input.
	                  event.preventDefault();
	                }

	                var willCloseSuggestions = isOpen && !alwaysRenderSuggestions;

	                if (valueBeforeUpDown === null) {
	                  // Didn't interact with Up/Down
	                  if (!willCloseSuggestions) {
	                    var _newValue2 = '';

	                    _this3.maybeCallOnChange(event, _newValue2, 'escape');

	                    if (shouldRenderSuggestions(_newValue2)) {
	                      onSuggestionsFetchRequested({
	                        value: _newValue2,
	                        reason: 'escape-pressed'
	                      });
	                    } else {
	                      _this3.onSuggestionsClearRequested();
	                    }
	                  }
	                } else {
	                  // Interacted with Up/Down
	                  _this3.maybeCallOnChange(event, valueBeforeUpDown, 'escape');
	                }

	                if (willCloseSuggestions) {
	                  _this3.onSuggestionsClearRequested();

	                  _this3.closeSuggestions();
	                } else {
	                  _this3.resetHighlightedSuggestion();
	                }

	                break;
	              }
	          }

	          _onKeyDown && _onKeyDown(event);
	        }
	      });

	      var renderSuggestionData = {
	        query: this.getQuery()
	      };
	      return /*#__PURE__*/_react["default"].createElement(_Autowhatever["default"], {
	        multiSection: multiSection,
	        items: items,
	        renderInputComponent: renderInputComponent,
	        renderItemsContainer: this.renderSuggestionsContainer,
	        renderItem: renderSuggestion,
	        renderItemData: renderSuggestionData,
	        renderSectionTitle: renderSectionTitle,
	        getSectionItems: getSectionSuggestions,
	        highlightedSectionIndex: highlightedSectionIndex,
	        highlightedItemIndex: highlightedSuggestionIndex,
	        inputProps: autowhateverInputProps,
	        itemProps: this.itemProps,
	        theme: (0, theme.mapToAutowhateverTheme)(theme$1),
	        id: id,
	        ref: this.storeAutowhateverRef
	      });
	    }
	  }]);

	  return Autosuggest;
	}(_react.Component);

	exports["default"] = Autosuggest;

	_defineProperty(Autosuggest, "propTypes", {
	  suggestions: _propTypes["default"].array.isRequired,
	  onSuggestionsFetchRequested: function onSuggestionsFetchRequested(props, propName) {
	    var onSuggestionsFetchRequested = props[propName];

	    if (typeof onSuggestionsFetchRequested !== 'function') {
	      throw new Error("'onSuggestionsFetchRequested' must be implemented. See: https://github.com/moroshko/react-autosuggest#onSuggestionsFetchRequestedProp");
	    }
	  },
	  onSuggestionsClearRequested: function onSuggestionsClearRequested(props, propName) {
	    var onSuggestionsClearRequested = props[propName];

	    if (props.alwaysRenderSuggestions === false && typeof onSuggestionsClearRequested !== 'function') {
	      throw new Error("'onSuggestionsClearRequested' must be implemented. See: https://github.com/moroshko/react-autosuggest#onSuggestionsClearRequestedProp");
	    }
	  },
	  onSuggestionSelected: _propTypes["default"].func,
	  onSuggestionHighlighted: _propTypes["default"].func,
	  renderInputComponent: _propTypes["default"].func,
	  renderSuggestionsContainer: _propTypes["default"].func,
	  getSuggestionValue: _propTypes["default"].func.isRequired,
	  renderSuggestion: _propTypes["default"].func.isRequired,
	  inputProps: function inputProps(props, propName) {
	    var inputProps = props[propName];

	    if (!Object.prototype.hasOwnProperty.call(inputProps, 'value')) {
	      throw new Error("'inputProps' must have 'value'.");
	    }

	    if (!Object.prototype.hasOwnProperty.call(inputProps, 'onChange')) {
	      throw new Error("'inputProps' must have 'onChange'.");
	    }
	  },
	  shouldRenderSuggestions: _propTypes["default"].func,
	  alwaysRenderSuggestions: _propTypes["default"].bool,
	  multiSection: _propTypes["default"].bool,
	  renderSectionTitle: function renderSectionTitle(props, propName) {
	    var renderSectionTitle = props[propName];

	    if (props.multiSection === true && typeof renderSectionTitle !== 'function') {
	      throw new Error("'renderSectionTitle' must be implemented. See: https://github.com/moroshko/react-autosuggest#renderSectionTitleProp");
	    }
	  },
	  getSectionSuggestions: function getSectionSuggestions(props, propName) {
	    var getSectionSuggestions = props[propName];

	    if (props.multiSection === true && typeof getSectionSuggestions !== 'function') {
	      throw new Error("'getSectionSuggestions' must be implemented. See: https://github.com/moroshko/react-autosuggest#getSectionSuggestionsProp");
	    }
	  },
	  focusInputOnSuggestionClick: _propTypes["default"].bool,
	  highlightFirstSuggestion: _propTypes["default"].bool,
	  theme: _propTypes["default"].object,
	  id: _propTypes["default"].string
	});

	_defineProperty(Autosuggest, "defaultProps", {
	  renderSuggestionsContainer: defaultRenderSuggestionsContainer,
	  shouldRenderSuggestions: defaultShouldRenderSuggestions,
	  alwaysRenderSuggestions: false,
	  multiSection: false,
	  focusInputOnSuggestionClick: true,
	  highlightFirstSuggestion: false,
	  theme: theme.defaultTheme,
	  id: '1'
	});
	});

	unwrapExports(Autosuggest_1);

	var dist$2 = Autosuggest_1["default"];

	var mousetrap = createCommonjsModule(function (module) {
	/*global define:false */
	/**
	 * Copyright 2012-2017 Craig Campbell
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 *
	 * Mousetrap is a simple keyboard shortcut library for Javascript with
	 * no external dependencies
	 *
	 * @version 1.6.5
	 * @url craig.is/killing/mice
	 */
	(function(window, document, undefined$1) {

	    // Check if mousetrap is used inside browser, if not, return
	    if (!window) {
	        return;
	    }

	    /**
	     * mapping of special keycodes to their corresponding keys
	     *
	     * everything in this dictionary cannot use keypress events
	     * so it has to be here to map to the correct keycodes for
	     * keyup/keydown events
	     *
	     * @type {Object}
	     */
	    var _MAP = {
	        8: 'backspace',
	        9: 'tab',
	        13: 'enter',
	        16: 'shift',
	        17: 'ctrl',
	        18: 'alt',
	        20: 'capslock',
	        27: 'esc',
	        32: 'space',
	        33: 'pageup',
	        34: 'pagedown',
	        35: 'end',
	        36: 'home',
	        37: 'left',
	        38: 'up',
	        39: 'right',
	        40: 'down',
	        45: 'ins',
	        46: 'del',
	        91: 'meta',
	        93: 'meta',
	        224: 'meta'
	    };

	    /**
	     * mapping for special characters so they can support
	     *
	     * this dictionary is only used incase you want to bind a
	     * keyup or keydown event to one of these keys
	     *
	     * @type {Object}
	     */
	    var _KEYCODE_MAP = {
	        106: '*',
	        107: '+',
	        109: '-',
	        110: '.',
	        111 : '/',
	        186: ';',
	        187: '=',
	        188: ',',
	        189: '-',
	        190: '.',
	        191: '/',
	        192: '`',
	        219: '[',
	        220: '\\',
	        221: ']',
	        222: '\''
	    };

	    /**
	     * this is a mapping of keys that require shift on a US keypad
	     * back to the non shift equivelents
	     *
	     * this is so you can use keyup events with these keys
	     *
	     * note that this will only work reliably on US keyboards
	     *
	     * @type {Object}
	     */
	    var _SHIFT_MAP = {
	        '~': '`',
	        '!': '1',
	        '@': '2',
	        '#': '3',
	        '$': '4',
	        '%': '5',
	        '^': '6',
	        '&': '7',
	        '*': '8',
	        '(': '9',
	        ')': '0',
	        '_': '-',
	        '+': '=',
	        ':': ';',
	        '\"': '\'',
	        '<': ',',
	        '>': '.',
	        '?': '/',
	        '|': '\\'
	    };

	    /**
	     * this is a list of special strings you can use to map
	     * to modifier keys when you specify your keyboard shortcuts
	     *
	     * @type {Object}
	     */
	    var _SPECIAL_ALIASES = {
	        'option': 'alt',
	        'command': 'meta',
	        'return': 'enter',
	        'escape': 'esc',
	        'plus': '+',
	        'mod': /Mac|iPod|iPhone|iPad/.test(navigator.platform) ? 'meta' : 'ctrl'
	    };

	    /**
	     * variable to store the flipped version of _MAP from above
	     * needed to check if we should use keypress or not when no action
	     * is specified
	     *
	     * @type {Object|undefined}
	     */
	    var _REVERSE_MAP;

	    /**
	     * loop through the f keys, f1 to f19 and add them to the map
	     * programatically
	     */
	    for (var i = 1; i < 20; ++i) {
	        _MAP[111 + i] = 'f' + i;
	    }

	    /**
	     * loop through to map numbers on the numeric keypad
	     */
	    for (i = 0; i <= 9; ++i) {

	        // This needs to use a string cause otherwise since 0 is falsey
	        // mousetrap will never fire for numpad 0 pressed as part of a keydown
	        // event.
	        //
	        // @see https://github.com/ccampbell/mousetrap/pull/258
	        _MAP[i + 96] = i.toString();
	    }

	    /**
	     * cross browser add event method
	     *
	     * @param {Element|HTMLDocument} object
	     * @param {string} type
	     * @param {Function} callback
	     * @returns void
	     */
	    function _addEvent(object, type, callback) {
	        if (object.addEventListener) {
	            object.addEventListener(type, callback, false);
	            return;
	        }

	        object.attachEvent('on' + type, callback);
	    }

	    /**
	     * takes the event and returns the key character
	     *
	     * @param {Event} e
	     * @return {string}
	     */
	    function _characterFromEvent(e) {

	        // for keypress events we should return the character as is
	        if (e.type == 'keypress') {
	            var character = String.fromCharCode(e.which);

	            // if the shift key is not pressed then it is safe to assume
	            // that we want the character to be lowercase.  this means if
	            // you accidentally have caps lock on then your key bindings
	            // will continue to work
	            //
	            // the only side effect that might not be desired is if you
	            // bind something like 'A' cause you want to trigger an
	            // event when capital A is pressed caps lock will no longer
	            // trigger the event.  shift+a will though.
	            if (!e.shiftKey) {
	                character = character.toLowerCase();
	            }

	            return character;
	        }

	        // for non keypress events the special maps are needed
	        if (_MAP[e.which]) {
	            return _MAP[e.which];
	        }

	        if (_KEYCODE_MAP[e.which]) {
	            return _KEYCODE_MAP[e.which];
	        }

	        // if it is not in the special map

	        // with keydown and keyup events the character seems to always
	        // come in as an uppercase character whether you are pressing shift
	        // or not.  we should make sure it is always lowercase for comparisons
	        return String.fromCharCode(e.which).toLowerCase();
	    }

	    /**
	     * checks if two arrays are equal
	     *
	     * @param {Array} modifiers1
	     * @param {Array} modifiers2
	     * @returns {boolean}
	     */
	    function _modifiersMatch(modifiers1, modifiers2) {
	        return modifiers1.sort().join(',') === modifiers2.sort().join(',');
	    }

	    /**
	     * takes a key event and figures out what the modifiers are
	     *
	     * @param {Event} e
	     * @returns {Array}
	     */
	    function _eventModifiers(e) {
	        var modifiers = [];

	        if (e.shiftKey) {
	            modifiers.push('shift');
	        }

	        if (e.altKey) {
	            modifiers.push('alt');
	        }

	        if (e.ctrlKey) {
	            modifiers.push('ctrl');
	        }

	        if (e.metaKey) {
	            modifiers.push('meta');
	        }

	        return modifiers;
	    }

	    /**
	     * prevents default for this event
	     *
	     * @param {Event} e
	     * @returns void
	     */
	    function _preventDefault(e) {
	        if (e.preventDefault) {
	            e.preventDefault();
	            return;
	        }

	        e.returnValue = false;
	    }

	    /**
	     * stops propogation for this event
	     *
	     * @param {Event} e
	     * @returns void
	     */
	    function _stopPropagation(e) {
	        if (e.stopPropagation) {
	            e.stopPropagation();
	            return;
	        }

	        e.cancelBubble = true;
	    }

	    /**
	     * determines if the keycode specified is a modifier key or not
	     *
	     * @param {string} key
	     * @returns {boolean}
	     */
	    function _isModifier(key) {
	        return key == 'shift' || key == 'ctrl' || key == 'alt' || key == 'meta';
	    }

	    /**
	     * reverses the map lookup so that we can look for specific keys
	     * to see what can and can't use keypress
	     *
	     * @return {Object}
	     */
	    function _getReverseMap() {
	        if (!_REVERSE_MAP) {
	            _REVERSE_MAP = {};
	            for (var key in _MAP) {

	                // pull out the numeric keypad from here cause keypress should
	                // be able to detect the keys from the character
	                if (key > 95 && key < 112) {
	                    continue;
	                }

	                if (_MAP.hasOwnProperty(key)) {
	                    _REVERSE_MAP[_MAP[key]] = key;
	                }
	            }
	        }
	        return _REVERSE_MAP;
	    }

	    /**
	     * picks the best action based on the key combination
	     *
	     * @param {string} key - character for key
	     * @param {Array} modifiers
	     * @param {string=} action passed in
	     */
	    function _pickBestAction(key, modifiers, action) {

	        // if no action was picked in we should try to pick the one
	        // that we think would work best for this key
	        if (!action) {
	            action = _getReverseMap()[key] ? 'keydown' : 'keypress';
	        }

	        // modifier keys don't work as expected with keypress,
	        // switch to keydown
	        if (action == 'keypress' && modifiers.length) {
	            action = 'keydown';
	        }

	        return action;
	    }

	    /**
	     * Converts from a string key combination to an array
	     *
	     * @param  {string} combination like "command+shift+l"
	     * @return {Array}
	     */
	    function _keysFromString(combination) {
	        if (combination === '+') {
	            return ['+'];
	        }

	        combination = combination.replace(/\+{2}/g, '+plus');
	        return combination.split('+');
	    }

	    /**
	     * Gets info for a specific key combination
	     *
	     * @param  {string} combination key combination ("command+s" or "a" or "*")
	     * @param  {string=} action
	     * @returns {Object}
	     */
	    function _getKeyInfo(combination, action) {
	        var keys;
	        var key;
	        var i;
	        var modifiers = [];

	        // take the keys from this pattern and figure out what the actual
	        // pattern is all about
	        keys = _keysFromString(combination);

	        for (i = 0; i < keys.length; ++i) {
	            key = keys[i];

	            // normalize key names
	            if (_SPECIAL_ALIASES[key]) {
	                key = _SPECIAL_ALIASES[key];
	            }

	            // if this is not a keypress event then we should
	            // be smart about using shift keys
	            // this will only work for US keyboards however
	            if (action && action != 'keypress' && _SHIFT_MAP[key]) {
	                key = _SHIFT_MAP[key];
	                modifiers.push('shift');
	            }

	            // if this key is a modifier then add it to the list of modifiers
	            if (_isModifier(key)) {
	                modifiers.push(key);
	            }
	        }

	        // depending on what the key combination is
	        // we will try to pick the best event for it
	        action = _pickBestAction(key, modifiers, action);

	        return {
	            key: key,
	            modifiers: modifiers,
	            action: action
	        };
	    }

	    function _belongsTo(element, ancestor) {
	        if (element === null || element === document) {
	            return false;
	        }

	        if (element === ancestor) {
	            return true;
	        }

	        return _belongsTo(element.parentNode, ancestor);
	    }

	    function Mousetrap(targetElement) {
	        var self = this;

	        targetElement = targetElement || document;

	        if (!(self instanceof Mousetrap)) {
	            return new Mousetrap(targetElement);
	        }

	        /**
	         * element to attach key events to
	         *
	         * @type {Element}
	         */
	        self.target = targetElement;

	        /**
	         * a list of all the callbacks setup via Mousetrap.bind()
	         *
	         * @type {Object}
	         */
	        self._callbacks = {};

	        /**
	         * direct map of string combinations to callbacks used for trigger()
	         *
	         * @type {Object}
	         */
	        self._directMap = {};

	        /**
	         * keeps track of what level each sequence is at since multiple
	         * sequences can start out with the same sequence
	         *
	         * @type {Object}
	         */
	        var _sequenceLevels = {};

	        /**
	         * variable to store the setTimeout call
	         *
	         * @type {null|number}
	         */
	        var _resetTimer;

	        /**
	         * temporary state where we will ignore the next keyup
	         *
	         * @type {boolean|string}
	         */
	        var _ignoreNextKeyup = false;

	        /**
	         * temporary state where we will ignore the next keypress
	         *
	         * @type {boolean}
	         */
	        var _ignoreNextKeypress = false;

	        /**
	         * are we currently inside of a sequence?
	         * type of action ("keyup" or "keydown" or "keypress") or false
	         *
	         * @type {boolean|string}
	         */
	        var _nextExpectedAction = false;

	        /**
	         * resets all sequence counters except for the ones passed in
	         *
	         * @param {Object} doNotReset
	         * @returns void
	         */
	        function _resetSequences(doNotReset) {
	            doNotReset = doNotReset || {};

	            var activeSequences = false,
	                key;

	            for (key in _sequenceLevels) {
	                if (doNotReset[key]) {
	                    activeSequences = true;
	                    continue;
	                }
	                _sequenceLevels[key] = 0;
	            }

	            if (!activeSequences) {
	                _nextExpectedAction = false;
	            }
	        }

	        /**
	         * finds all callbacks that match based on the keycode, modifiers,
	         * and action
	         *
	         * @param {string} character
	         * @param {Array} modifiers
	         * @param {Event|Object} e
	         * @param {string=} sequenceName - name of the sequence we are looking for
	         * @param {string=} combination
	         * @param {number=} level
	         * @returns {Array}
	         */
	        function _getMatches(character, modifiers, e, sequenceName, combination, level) {
	            var i;
	            var callback;
	            var matches = [];
	            var action = e.type;

	            // if there are no events related to this keycode
	            if (!self._callbacks[character]) {
	                return [];
	            }

	            // if a modifier key is coming up on its own we should allow it
	            if (action == 'keyup' && _isModifier(character)) {
	                modifiers = [character];
	            }

	            // loop through all callbacks for the key that was pressed
	            // and see if any of them match
	            for (i = 0; i < self._callbacks[character].length; ++i) {
	                callback = self._callbacks[character][i];

	                // if a sequence name is not specified, but this is a sequence at
	                // the wrong level then move onto the next match
	                if (!sequenceName && callback.seq && _sequenceLevels[callback.seq] != callback.level) {
	                    continue;
	                }

	                // if the action we are looking for doesn't match the action we got
	                // then we should keep going
	                if (action != callback.action) {
	                    continue;
	                }

	                // if this is a keypress event and the meta key and control key
	                // are not pressed that means that we need to only look at the
	                // character, otherwise check the modifiers as well
	                //
	                // chrome will not fire a keypress if meta or control is down
	                // safari will fire a keypress if meta or meta+shift is down
	                // firefox will fire a keypress if meta or control is down
	                if ((action == 'keypress' && !e.metaKey && !e.ctrlKey) || _modifiersMatch(modifiers, callback.modifiers)) {

	                    // when you bind a combination or sequence a second time it
	                    // should overwrite the first one.  if a sequenceName or
	                    // combination is specified in this call it does just that
	                    //
	                    // @todo make deleting its own method?
	                    var deleteCombo = !sequenceName && callback.combo == combination;
	                    var deleteSequence = sequenceName && callback.seq == sequenceName && callback.level == level;
	                    if (deleteCombo || deleteSequence) {
	                        self._callbacks[character].splice(i, 1);
	                    }

	                    matches.push(callback);
	                }
	            }

	            return matches;
	        }

	        /**
	         * actually calls the callback function
	         *
	         * if your callback function returns false this will use the jquery
	         * convention - prevent default and stop propogation on the event
	         *
	         * @param {Function} callback
	         * @param {Event} e
	         * @returns void
	         */
	        function _fireCallback(callback, e, combo, sequence) {

	            // if this event should not happen stop here
	            if (self.stopCallback(e, e.target || e.srcElement, combo, sequence)) {
	                return;
	            }

	            if (callback(e, combo) === false) {
	                _preventDefault(e);
	                _stopPropagation(e);
	            }
	        }

	        /**
	         * handles a character key event
	         *
	         * @param {string} character
	         * @param {Array} modifiers
	         * @param {Event} e
	         * @returns void
	         */
	        self._handleKey = function(character, modifiers, e) {
	            var callbacks = _getMatches(character, modifiers, e);
	            var i;
	            var doNotReset = {};
	            var maxLevel = 0;
	            var processedSequenceCallback = false;

	            // Calculate the maxLevel for sequences so we can only execute the longest callback sequence
	            for (i = 0; i < callbacks.length; ++i) {
	                if (callbacks[i].seq) {
	                    maxLevel = Math.max(maxLevel, callbacks[i].level);
	                }
	            }

	            // loop through matching callbacks for this key event
	            for (i = 0; i < callbacks.length; ++i) {

	                // fire for all sequence callbacks
	                // this is because if for example you have multiple sequences
	                // bound such as "g i" and "g t" they both need to fire the
	                // callback for matching g cause otherwise you can only ever
	                // match the first one
	                if (callbacks[i].seq) {

	                    // only fire callbacks for the maxLevel to prevent
	                    // subsequences from also firing
	                    //
	                    // for example 'a option b' should not cause 'option b' to fire
	                    // even though 'option b' is part of the other sequence
	                    //
	                    // any sequences that do not match here will be discarded
	                    // below by the _resetSequences call
	                    if (callbacks[i].level != maxLevel) {
	                        continue;
	                    }

	                    processedSequenceCallback = true;

	                    // keep a list of which sequences were matches for later
	                    doNotReset[callbacks[i].seq] = 1;
	                    _fireCallback(callbacks[i].callback, e, callbacks[i].combo, callbacks[i].seq);
	                    continue;
	                }

	                // if there were no sequence matches but we are still here
	                // that means this is a regular match so we should fire that
	                if (!processedSequenceCallback) {
	                    _fireCallback(callbacks[i].callback, e, callbacks[i].combo);
	                }
	            }

	            // if the key you pressed matches the type of sequence without
	            // being a modifier (ie "keyup" or "keypress") then we should
	            // reset all sequences that were not matched by this event
	            //
	            // this is so, for example, if you have the sequence "h a t" and you
	            // type "h e a r t" it does not match.  in this case the "e" will
	            // cause the sequence to reset
	            //
	            // modifier keys are ignored because you can have a sequence
	            // that contains modifiers such as "enter ctrl+space" and in most
	            // cases the modifier key will be pressed before the next key
	            //
	            // also if you have a sequence such as "ctrl+b a" then pressing the
	            // "b" key will trigger a "keypress" and a "keydown"
	            //
	            // the "keydown" is expected when there is a modifier, but the
	            // "keypress" ends up matching the _nextExpectedAction since it occurs
	            // after and that causes the sequence to reset
	            //
	            // we ignore keypresses in a sequence that directly follow a keydown
	            // for the same character
	            var ignoreThisKeypress = e.type == 'keypress' && _ignoreNextKeypress;
	            if (e.type == _nextExpectedAction && !_isModifier(character) && !ignoreThisKeypress) {
	                _resetSequences(doNotReset);
	            }

	            _ignoreNextKeypress = processedSequenceCallback && e.type == 'keydown';
	        };

	        /**
	         * handles a keydown event
	         *
	         * @param {Event} e
	         * @returns void
	         */
	        function _handleKeyEvent(e) {

	            // normalize e.which for key events
	            // @see http://stackoverflow.com/questions/4285627/javascript-keycode-vs-charcode-utter-confusion
	            if (typeof e.which !== 'number') {
	                e.which = e.keyCode;
	            }

	            var character = _characterFromEvent(e);

	            // no character found then stop
	            if (!character) {
	                return;
	            }

	            // need to use === for the character check because the character can be 0
	            if (e.type == 'keyup' && _ignoreNextKeyup === character) {
	                _ignoreNextKeyup = false;
	                return;
	            }

	            self.handleKey(character, _eventModifiers(e), e);
	        }

	        /**
	         * called to set a 1 second timeout on the specified sequence
	         *
	         * this is so after each key press in the sequence you have 1 second
	         * to press the next key before you have to start over
	         *
	         * @returns void
	         */
	        function _resetSequenceTimer() {
	            clearTimeout(_resetTimer);
	            _resetTimer = setTimeout(_resetSequences, 1000);
	        }

	        /**
	         * binds a key sequence to an event
	         *
	         * @param {string} combo - combo specified in bind call
	         * @param {Array} keys
	         * @param {Function} callback
	         * @param {string=} action
	         * @returns void
	         */
	        function _bindSequence(combo, keys, callback, action) {

	            // start off by adding a sequence level record for this combination
	            // and setting the level to 0
	            _sequenceLevels[combo] = 0;

	            /**
	             * callback to increase the sequence level for this sequence and reset
	             * all other sequences that were active
	             *
	             * @param {string} nextAction
	             * @returns {Function}
	             */
	            function _increaseSequence(nextAction) {
	                return function() {
	                    _nextExpectedAction = nextAction;
	                    ++_sequenceLevels[combo];
	                    _resetSequenceTimer();
	                };
	            }

	            /**
	             * wraps the specified callback inside of another function in order
	             * to reset all sequence counters as soon as this sequence is done
	             *
	             * @param {Event} e
	             * @returns void
	             */
	            function _callbackAndReset(e) {
	                _fireCallback(callback, e, combo);

	                // we should ignore the next key up if the action is key down
	                // or keypress.  this is so if you finish a sequence and
	                // release the key the final key will not trigger a keyup
	                if (action !== 'keyup') {
	                    _ignoreNextKeyup = _characterFromEvent(e);
	                }

	                // weird race condition if a sequence ends with the key
	                // another sequence begins with
	                setTimeout(_resetSequences, 10);
	            }

	            // loop through keys one at a time and bind the appropriate callback
	            // function.  for any key leading up to the final one it should
	            // increase the sequence. after the final, it should reset all sequences
	            //
	            // if an action is specified in the original bind call then that will
	            // be used throughout.  otherwise we will pass the action that the
	            // next key in the sequence should match.  this allows a sequence
	            // to mix and match keypress and keydown events depending on which
	            // ones are better suited to the key provided
	            for (var i = 0; i < keys.length; ++i) {
	                var isFinal = i + 1 === keys.length;
	                var wrappedCallback = isFinal ? _callbackAndReset : _increaseSequence(action || _getKeyInfo(keys[i + 1]).action);
	                _bindSingle(keys[i], wrappedCallback, action, combo, i);
	            }
	        }

	        /**
	         * binds a single keyboard combination
	         *
	         * @param {string} combination
	         * @param {Function} callback
	         * @param {string=} action
	         * @param {string=} sequenceName - name of sequence if part of sequence
	         * @param {number=} level - what part of the sequence the command is
	         * @returns void
	         */
	        function _bindSingle(combination, callback, action, sequenceName, level) {

	            // store a direct mapped reference for use with Mousetrap.trigger
	            self._directMap[combination + ':' + action] = callback;

	            // make sure multiple spaces in a row become a single space
	            combination = combination.replace(/\s+/g, ' ');

	            var sequence = combination.split(' ');
	            var info;

	            // if this pattern is a sequence of keys then run through this method
	            // to reprocess each pattern one key at a time
	            if (sequence.length > 1) {
	                _bindSequence(combination, sequence, callback, action);
	                return;
	            }

	            info = _getKeyInfo(combination, action);

	            // make sure to initialize array if this is the first time
	            // a callback is added for this key
	            self._callbacks[info.key] = self._callbacks[info.key] || [];

	            // remove an existing match if there is one
	            _getMatches(info.key, info.modifiers, {type: info.action}, sequenceName, combination, level);

	            // add this call back to the array
	            // if it is a sequence put it at the beginning
	            // if not put it at the end
	            //
	            // this is important because the way these are processed expects
	            // the sequence ones to come first
	            self._callbacks[info.key][sequenceName ? 'unshift' : 'push']({
	                callback: callback,
	                modifiers: info.modifiers,
	                action: info.action,
	                seq: sequenceName,
	                level: level,
	                combo: combination
	            });
	        }

	        /**
	         * binds multiple combinations to the same callback
	         *
	         * @param {Array} combinations
	         * @param {Function} callback
	         * @param {string|undefined} action
	         * @returns void
	         */
	        self._bindMultiple = function(combinations, callback, action) {
	            for (var i = 0; i < combinations.length; ++i) {
	                _bindSingle(combinations[i], callback, action);
	            }
	        };

	        // start!
	        _addEvent(targetElement, 'keypress', _handleKeyEvent);
	        _addEvent(targetElement, 'keydown', _handleKeyEvent);
	        _addEvent(targetElement, 'keyup', _handleKeyEvent);
	    }

	    /**
	     * binds an event to mousetrap
	     *
	     * can be a single key, a combination of keys separated with +,
	     * an array of keys, or a sequence of keys separated by spaces
	     *
	     * be sure to list the modifier keys first to make sure that the
	     * correct key ends up getting bound (the last key in the pattern)
	     *
	     * @param {string|Array} keys
	     * @param {Function} callback
	     * @param {string=} action - 'keypress', 'keydown', or 'keyup'
	     * @returns void
	     */
	    Mousetrap.prototype.bind = function(keys, callback, action) {
	        var self = this;
	        keys = keys instanceof Array ? keys : [keys];
	        self._bindMultiple.call(self, keys, callback, action);
	        return self;
	    };

	    /**
	     * unbinds an event to mousetrap
	     *
	     * the unbinding sets the callback function of the specified key combo
	     * to an empty function and deletes the corresponding key in the
	     * _directMap dict.
	     *
	     * TODO: actually remove this from the _callbacks dictionary instead
	     * of binding an empty function
	     *
	     * the keycombo+action has to be exactly the same as
	     * it was defined in the bind method
	     *
	     * @param {string|Array} keys
	     * @param {string} action
	     * @returns void
	     */
	    Mousetrap.prototype.unbind = function(keys, action) {
	        var self = this;
	        return self.bind.call(self, keys, function() {}, action);
	    };

	    /**
	     * triggers an event that has already been bound
	     *
	     * @param {string} keys
	     * @param {string=} action
	     * @returns void
	     */
	    Mousetrap.prototype.trigger = function(keys, action) {
	        var self = this;
	        if (self._directMap[keys + ':' + action]) {
	            self._directMap[keys + ':' + action]({}, keys);
	        }
	        return self;
	    };

	    /**
	     * resets the library back to its initial state.  this is useful
	     * if you want to clear out the current keyboard shortcuts and bind
	     * new ones - for example if you switch to another page
	     *
	     * @returns void
	     */
	    Mousetrap.prototype.reset = function() {
	        var self = this;
	        self._callbacks = {};
	        self._directMap = {};
	        return self;
	    };

	    /**
	     * should we stop this event before firing off callbacks
	     *
	     * @param {Event} e
	     * @param {Element} element
	     * @return {boolean}
	     */
	    Mousetrap.prototype.stopCallback = function(e, element) {
	        var self = this;

	        // if the element has the class "mousetrap" then no need to stop
	        if ((element.className).indexOf('xterm-helper-textarea') > -1) {
	            return false;
	        }

	        if (_belongsTo(element, self.target)) {
	            return false;
	        }

	        // Events originating from a shadow DOM are re-targetted and `e.target` is the shadow host,
	        // not the initial event target in the shadow tree. Note that not all events cross the
	        // shadow boundary.
	        // For shadow trees with `mode: 'open'`, the initial event target is the first element in
	        // the event’s composed path. For shadow trees with `mode: 'closed'`, the initial event
	        // target cannot be obtained.
	        if ('composedPath' in e && typeof e.composedPath === 'function') {
	            // For open shadow trees, update `element` so that the following check works.
	            var initialEventTarget = e.composedPath()[0];
	            if (initialEventTarget !== e.target) {
	                element = initialEventTarget;
	            }
	        }

	        // stop for input, select, and textarea
	        return element.tagName == 'INPUT' || element.tagName == 'SELECT' || element.tagName == 'TEXTAREA' || element.isContentEditable;
	    };

	    /**
	     * exposes _handleKey publicly so it can be overwritten by extensions
	     */
	    Mousetrap.prototype.handleKey = function() {
	        var self = this;
	        return self._handleKey.apply(self, arguments);
	    };

	    /**
	     * allow custom key mappings
	     */
	    Mousetrap.addKeycodes = function(object) {
	        for (var key in object) {
	            if (object.hasOwnProperty(key)) {
	                _MAP[key] = object[key];
	            }
	        }
	        _REVERSE_MAP = null;
	    };

	    /**
	     * Init the global mousetrap functions
	     *
	     * This method is needed to allow the global mousetrap functions to work
	     * now that mousetrap is a constructor function.
	     */
	    Mousetrap.init = function() {
	        var documentMousetrap = Mousetrap(document);
	        for (var method in documentMousetrap) {
	            if (method.charAt(0) !== '_') {
	                Mousetrap[method] = (function(method) {
	                    return function() {
	                        return documentMousetrap[method].apply(documentMousetrap, arguments);
	                    };
	                } (method));
	            }
	        }
	    };


			var _globalCallbacks = {};
			var _originalStopCallback = Mousetrap.prototype.stopCallback;
	
			Mousetrap.prototype.stopCallback = function(e, element, combo, sequence) {
					var self = this;
	
					if (self.paused) {
							return true;
					}
	
					if (_globalCallbacks[combo] || _globalCallbacks[sequence]) {
							return false;
					}
	
					return _originalStopCallback.call(self, e, element, combo);
			};
	
			Mousetrap.prototype.bindGlobal = function(keys, callback, action) {
					var self = this;
					self.bind(keys, callback, action);
	
					if (keys instanceof Array) {
							for (var i = 0; i < keys.length; i++) {
									_globalCallbacks[keys[i]] = true;
							}
							return;
					}
	
					_globalCallbacks[keys] = true;
			};

	    Mousetrap.init();

	    // expose mousetrap to the global object
	    window.Mousetrap = Mousetrap;

	    // expose as a common js module
	    if ( module.exports) {
	        module.exports = Mousetrap;
	    }

	    // expose mousetrap as an AMD module
	    if (typeof undefined$1 === 'function' && undefined$1.amd) {
	        undefined$1(function() {
	            return Mousetrap;
	        });
	    }
	}) (typeof window !== 'undefined' ? window : null, typeof  window !== 'undefined' ? document : null);
	});

	// options are defined in fuzzysort docss, see:
	// https://github.com/farzher/fuzzysort
	var fuzzysortOptions = {
	  threshold: -Infinity,
	  // Don't return matches worse than this (higher is faster)
	  limit: 7,
	  // Don't return more results than this (lower is faster)
	  allowTypo: true,
	  // Allwos a snigle transpoes (false is faster)
	  key: "name",
	  // For when targets are objects (see its example usage)
	  keys: ["name"],
	  // For when targets are objects (see its example usage)
	  scoreFn: null // For use with `keys` (see its example usage)

	};

	function styleInject(css, ref) {
	  if ( ref === void 0 ) ref = {};
	  var insertAt = ref.insertAt;

	  if (!css || typeof document === 'undefined') { return; }

	  var head = document.head || document.getElementsByTagName('head')[0];
	  var style = document.createElement('style');
	  style.type = 'text/css';

	  if (insertAt === 'top') {
	    if (head.firstChild) {
	      head.insertBefore(style, head.firstChild);
	    } else {
	      head.appendChild(style);
	    }
	  } else {
	    head.appendChild(style);
	  }

	  if (style.styleSheet) {
	    style.styleSheet.cssText = css;
	  } else {
	    style.appendChild(document.createTextNode(css));
	  }
	}

	var css_248z = ".sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border: 0;\n}\n.default-spinner {\n  color: #FFFFFF;\n  margin: 60px auto;\n  font-size: 10px;\n  position: relative;\n  -webkit-transform: translateZ(0);\n  -ms-transform: translateZ(0);\n  transform: translateZ(0);\n  -webkit-animation: load8 1.1s infinite linear;\n  animation: load8 1.1s infinite linear;\n}\n\n.default-spinner.spinner-inline {\n  border-top: 0.4em solid rgba(0, 0, 0, 0.2);\n  border-right: 0.4em solid rgba(0, 0, 0, 0.2);\n  border-bottom: 0.4em solid rgba(0, 0, 0, 0.2);\n  border-left: 0.4em solid #000000;\n}\n.default-spinner,\n.default-spinner:after {\n  border-radius: 50%;\n  width: 3em;\n  height: 3em;\n}\n@-webkit-keyframes load8 {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n@keyframes load8 {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n";
	styleInject(css_248z);

	var DefaultSpinnerComponent = function DefaultSpinnerComponent(props) {
	  var display = props.display,
	      theme = props.theme;
	  var cssClass;

	  if (display === "inline") {
	    cssClass = "default-spinner ".concat(theme, " inline");
	  } else {
	    cssClass = "default-spinner ".concat(theme, " modal");
	  }

	  return /*#__PURE__*/React.createElement("div", {
	    className: cssClass,
	    role: "status"
	  }, /*#__PURE__*/React.createElement("span", {
	    className: "sr-only"
	  }, "Loading..."));
	}; // When a developer adds custom spinner wrap it so that if its a string
	// then assume the text is accessible. If it's a component then instert
	// a "Loading..." string that visible only to screen readers


	var CustomSpinnerComponent = function CustomSpinnerComponent(props) {
	  var spinner = props.spinner,
	      display = props.display,
	      _props$theme = props.theme,
	      theme = _props$theme === void 0 ? "atom-spinner" : _props$theme;
	  var cssClass;

	  if (display === "inline") {
	    cssClass = "spinner ".concat(theme, " inline");
	  } else {
	    cssClass = "spinner ".concat(theme, " modal");
	  }

	  return /*#__PURE__*/React.createElement("div", {
	    className: cssClass,
	    role: "status"
	  }, typeof spinner !== "string" ? /*#__PURE__*/React.createElement("span", {
	    className: "sr-only"
	  }, "Loading...") : null, spinner);
	};

	function PaletteSpinner(props) {
	  var spinner = props.spinner,
	      display = props.display,
	      theme = props.theme;

	  if (spinner) {
	    return /*#__PURE__*/React.createElement(CustomSpinnerComponent, props);
	  }

	  return /*#__PURE__*/React.createElement(DefaultSpinnerComponent, {
	    display: display,
	    theme: theme
	  });
	}
	DefaultSpinnerComponent.propTypes = {
	  display: propTypes.oneOf(["modal", "inline"]),
	  theme: propTypes.string
	};
	CustomSpinnerComponent.propTypes = {
	  display: propTypes.oneOf(["modal", "inline"]),
	  theme: propTypes.string,
	  spinner: propTypes.oneOfType([propTypes.string, propTypes.element])
	};
	PaletteSpinner.propTypes = CustomSpinnerComponent.propTypes;

	// should be safe because the raw markup originates from fuzzsort
	// and is derived from the default, see:
	// https://github.com/farzher/fuzzysort#fuzzysorthighlightresult-openb-closeb

	var DefaultCommand = function DefaultCommand(props) {
	  var suggestion = props.suggestion;
	  return /*#__PURE__*/React.createElement("div", {
	    className: "item"
	  }, suggestion.highlight ? /*#__PURE__*/React.createElement("span", {
	    dangerouslySetInnerHTML: {
	      __html: suggestion.highlight
	    }
	  }) : /*#__PURE__*/React.createElement("span", null, suggestion.name));
	};

	DefaultCommand.defaultProps = {
	  suggestion: {
	    highlight: null
	  }
	};
	DefaultCommand.propTypes = {
	  /** a single suggestion that appears in the command palette. It must have a _name_ and
	   * a _command_. The _name_ is a user friendly string that will be display to the user.
	   * The command is a function that will be executed when the user clicks or presses the
	   * enter key. */
	  suggestion: propTypes.shape({
	    name: propTypes.string.isRequired,
	    highlight: propTypes.string,
	    command: propTypes.func.isRequired
	  })
	};

	var RenderCommand = function RenderCommand(props) {
	  var suggestion = props.suggestion,
	      renderCommand = props.renderCommand;

	  if (renderCommand) {
	    return /*#__PURE__*/React.createElement("div", null, renderCommand(suggestion));
	  }

	  return /*#__PURE__*/React.createElement(DefaultCommand, {
	    suggestion: suggestion
	  });
	};

	RenderCommand.defaultProps = {
	  suggestion: {
	    highlight: null
	  }
	};
	RenderCommand.propTypes = {
	  /** a single suggestion that appears in the command palette. It must have a _name_ and
	   * a _command_. The _name_ is a user friendly string that will be display to the user.
	   * The command is a function that will be executed when the user clicks or presses the
	   * enter key. For single match a _highlight_ string will be passed, for mutliple mathes
	   * the _highlight_ should be an array */
	  suggestion: propTypes.shape({
	    name: propTypes.string.isRequired,
	    highlight: propTypes.oneOfType([propTypes.string, propTypes.array]),
	    command: propTypes.func.isRequired
	  }),

	  /** trigger a string or a React.ComponentType that customises the layout and content of
	   * the commands in the command list. For complete documentation see the storybook
	   * notes. */
	  renderCommand: propTypes.oneOfType([propTypes.string, propTypes.func, propTypes.element])
	};

	/* eslint-disable react/jsx-one-expression-per-line */
	/* https://snook.ca/archives/html_and_css/hiding-content-for-accessibility */

	var visualyHidden = {
	  position: "absolute !important",
	  height: "1px",
	  width: "1px",
	  overflow: "hidden",
	  clip: "rect(1px, 1px, 1px, 1px)",
	  display: "inline-block"
	};

	var DefaultTriggerComponent = function DefaultTriggerComponent(props) {
	  var onClick = props.onClick,
	      theme = props.theme;
	  return /*#__PURE__*/React.createElement("button", {
	    className: theme,
	    onClick: onClick,
	    type: "button"
	  }, "Command Palette \xA0", /*#__PURE__*/React.createElement("kbd", {
	    className: "ui mini horizontal grey label"
	  }, /*#__PURE__*/React.createElement("span", {
	    style: visualyHidden
	  }, " Keyboard Shortcut "), "\u21E7\u2318P"));
	};

	var CustomTriggerComponent = function CustomTriggerComponent(props) {
	  var onClick = props.onClick,
	      trigger = props.trigger,
	      theme = props.theme;
	  return /*#__PURE__*/React.createElement("div", {
	    onClick: onClick,
	    className: theme,
	    onKeyPress: onClick,
	    role: "button",
	    tabIndex: 0
	  }, trigger);
	};

	function PaletteTrigger(props) {
	  var onClick = props.onClick,
	      trigger = props.trigger,
	      theme = props.theme;

	  if (trigger) {
	    return /*#__PURE__*/React.createElement(CustomTriggerComponent, {
	      onClick: onClick,
	      trigger: trigger,
	      theme: theme
	    });
	  }

	  return /*#__PURE__*/React.createElement(DefaultTriggerComponent, {
	    onClick: onClick,
	    theme: theme
	  });
	}

	PaletteTrigger.defaultProps = {
	  theme: "ui button"
	};
	DefaultTriggerComponent.propTypes = {
	  onClick: propTypes.func,
	  theme: propTypes.string
	};
	CustomTriggerComponent.propTypes = {
	  onClick: propTypes.func,
	  theme: propTypes.string,
	  trigger: propTypes.oneOfType([propTypes.string, propTypes.element])
	};
	PaletteTrigger.propTypes = CustomTriggerComponent.propTypes;

	function _defineProperty(obj, key, value) {
	  if (key in obj) {
	    Object.defineProperty(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }

	  return obj;
	}

	var defineProperty = _defineProperty;

	var fuzzysort = createCommonjsModule(function (module) {
	(function(root, UMD) {
	  if( module.exports) module.exports = UMD();
	  else root.fuzzysort = UMD();
	})(commonjsGlobal, function UMD() { function fuzzysortNew(instanceOptions) {

	  var fuzzysort = {

	    single: function(search, target, options) {
	      if(!search) return null
	      if(!isObj(search)) search = fuzzysort.getPreparedSearch(search);

	      if(!target) return null
	      if(!isObj(target)) target = fuzzysort.getPrepared(target);

	      var allowTypo = options && options.allowTypo!==undefined ? options.allowTypo
	        : instanceOptions && instanceOptions.allowTypo!==undefined ? instanceOptions.allowTypo
	        : true;
	      var algorithm = allowTypo ? fuzzysort.algorithm : fuzzysort.algorithmNoTypo;
	      return algorithm(search, target, search[0])
	      // var threshold = options && options.threshold || instanceOptions && instanceOptions.threshold || -9007199254740991
	      // var result = algorithm(search, target, search[0])
	      // if(result === null) return null
	      // if(result.score < threshold) return null
	      // return result
	    },

	    go: function(search, targets, options) {
	      if(!search) return noResults
	      search = fuzzysort.prepareSearch(search);
	      var searchLowerCode = search[0];

	      var threshold = options && options.threshold || instanceOptions && instanceOptions.threshold || -9007199254740991;
	      var limit = options && options.limit || instanceOptions && instanceOptions.limit || 9007199254740991;
	      var allowTypo = options && options.allowTypo!==undefined ? options.allowTypo
	        : instanceOptions && instanceOptions.allowTypo!==undefined ? instanceOptions.allowTypo
	        : true;
	      var algorithm = allowTypo ? fuzzysort.algorithm : fuzzysort.algorithmNoTypo;
	      var resultsLen = 0; var limitedCount = 0;
	      var targetsLen = targets.length;

	      // This code is copy/pasted 3 times for performance reasons [options.keys, options.key, no keys]

	      // options.keys
	      if(options && options.keys) {
	        var scoreFn = options.scoreFn || defaultScoreFn;
	        var keys = options.keys;
	        var keysLen = keys.length;
	        for(var i = targetsLen - 1; i >= 0; --i) { var obj = targets[i];
	          var objResults = new Array(keysLen);
	          for (var keyI = keysLen - 1; keyI >= 0; --keyI) {
	            var key = keys[keyI];
	            var target = getValue(obj, key);
	            if(!target) { objResults[keyI] = null; continue }
	            if(!isObj(target)) target = fuzzysort.getPrepared(target);

	            objResults[keyI] = algorithm(search, target, searchLowerCode);
	          }
	          objResults.obj = obj; // before scoreFn so scoreFn can use it
	          var score = scoreFn(objResults);
	          if(score === null) continue
	          if(score < threshold) continue
	          objResults.score = score;
	          if(resultsLen < limit) { q.add(objResults); ++resultsLen; }
	          else {
	            ++limitedCount;
	            if(score > q.peek().score) q.replaceTop(objResults);
	          }
	        }

	      // options.key
	      } else if(options && options.key) {
	        var key = options.key;
	        for(var i = targetsLen - 1; i >= 0; --i) { var obj = targets[i];
	          var target = getValue(obj, key);
	          if(!target) continue
	          if(!isObj(target)) target = fuzzysort.getPrepared(target);

	          var result = algorithm(search, target, searchLowerCode);
	          if(result === null) continue
	          if(result.score < threshold) continue

	          // have to clone result so duplicate targets from different obj can each reference the correct obj
	          result = {target:result.target, _targetLowerCodes:null, _nextBeginningIndexes:null, score:result.score, indexes:result.indexes, obj:obj}; // hidden

	          if(resultsLen < limit) { q.add(result); ++resultsLen; }
	          else {
	            ++limitedCount;
	            if(result.score > q.peek().score) q.replaceTop(result);
	          }
	        }

	      // no keys
	      } else {
	        for(var i = targetsLen - 1; i >= 0; --i) { var target = targets[i];
	          if(!target) continue
	          if(!isObj(target)) target = fuzzysort.getPrepared(target);

	          var result = algorithm(search, target, searchLowerCode);
	          if(result === null) continue
	          if(result.score < threshold) continue
	          if(resultsLen < limit) { q.add(result); ++resultsLen; }
	          else {
	            ++limitedCount;
	            if(result.score > q.peek().score) q.replaceTop(result);
	          }
	        }
	      }

	      if(resultsLen === 0) return noResults
	      var results = new Array(resultsLen);
	      for(var i = resultsLen - 1; i >= 0; --i) results[i] = q.poll();
	      results.total = resultsLen + limitedCount;
	      return results
	    },

	    goAsync: function(search, targets, options) {
	      var canceled = false;
	      var p = new Promise(function(resolve, reject) {
	        if(!search) return resolve(noResults)
	        search = fuzzysort.prepareSearch(search);
	        var searchLowerCode = search[0];

	        var q = fastpriorityqueue();
	        var iCurrent = targets.length - 1;
	        var threshold = options && options.threshold || instanceOptions && instanceOptions.threshold || -9007199254740991;
	        var limit = options && options.limit || instanceOptions && instanceOptions.limit || 9007199254740991;
	        var allowTypo = options && options.allowTypo!==undefined ? options.allowTypo
	          : instanceOptions && instanceOptions.allowTypo!==undefined ? instanceOptions.allowTypo
	          : true;
	        var algorithm = allowTypo ? fuzzysort.algorithm : fuzzysort.algorithmNoTypo;
	        var resultsLen = 0; var limitedCount = 0;
	        function step() {
	          if(canceled) return reject('canceled')

	          var startMs = Date.now();

	          // This code is copy/pasted 3 times for performance reasons [options.keys, options.key, no keys]

	          // options.keys
	          if(options && options.keys) {
	            var scoreFn = options.scoreFn || defaultScoreFn;
	            var keys = options.keys;
	            var keysLen = keys.length;
	            for(; iCurrent >= 0; --iCurrent) { var obj = targets[iCurrent];
	              var objResults = new Array(keysLen);
	              for (var keyI = keysLen - 1; keyI >= 0; --keyI) {
	                var key = keys[keyI];
	                var target = getValue(obj, key);
	                if(!target) { objResults[keyI] = null; continue }
	                if(!isObj(target)) target = fuzzysort.getPrepared(target);

	                objResults[keyI] = algorithm(search, target, searchLowerCode);
	              }
	              objResults.obj = obj; // before scoreFn so scoreFn can use it
	              var score = scoreFn(objResults);
	              if(score === null) continue
	              if(score < threshold) continue
	              objResults.score = score;
	              if(resultsLen < limit) { q.add(objResults); ++resultsLen; }
	              else {
	                ++limitedCount;
	                if(score > q.peek().score) q.replaceTop(objResults);
	              }

	              if(iCurrent%1000/*itemsPerCheck*/ === 0) {
	                if(Date.now() - startMs >= 10/*asyncInterval*/) {
	                  isNode?setImmediate(step):setTimeout(step);
	                  return
	                }
	              }
	            }

	          // options.key
	          } else if(options && options.key) {
	            var key = options.key;
	            for(; iCurrent >= 0; --iCurrent) { var obj = targets[iCurrent];
	              var target = getValue(obj, key);
	              if(!target) continue
	              if(!isObj(target)) target = fuzzysort.getPrepared(target);

	              var result = algorithm(search, target, searchLowerCode);
	              if(result === null) continue
	              if(result.score < threshold) continue

	              // have to clone result so duplicate targets from different obj can each reference the correct obj
	              result = {target:result.target, _targetLowerCodes:null, _nextBeginningIndexes:null, score:result.score, indexes:result.indexes, obj:obj}; // hidden

	              if(resultsLen < limit) { q.add(result); ++resultsLen; }
	              else {
	                ++limitedCount;
	                if(result.score > q.peek().score) q.replaceTop(result);
	              }

	              if(iCurrent%1000/*itemsPerCheck*/ === 0) {
	                if(Date.now() - startMs >= 10/*asyncInterval*/) {
	                  isNode?setImmediate(step):setTimeout(step);
	                  return
	                }
	              }
	            }

	          // no keys
	          } else {
	            for(; iCurrent >= 0; --iCurrent) { var target = targets[iCurrent];
	              if(!target) continue
	              if(!isObj(target)) target = fuzzysort.getPrepared(target);

	              var result = algorithm(search, target, searchLowerCode);
	              if(result === null) continue
	              if(result.score < threshold) continue
	              if(resultsLen < limit) { q.add(result); ++resultsLen; }
	              else {
	                ++limitedCount;
	                if(result.score > q.peek().score) q.replaceTop(result);
	              }

	              if(iCurrent%1000/*itemsPerCheck*/ === 0) {
	                if(Date.now() - startMs >= 10/*asyncInterval*/) {
	                  isNode?setImmediate(step):setTimeout(step);
	                  return
	                }
	              }
	            }
	          }

	          if(resultsLen === 0) return resolve(noResults)
	          var results = new Array(resultsLen);
	          for(var i = resultsLen - 1; i >= 0; --i) results[i] = q.poll();
	          results.total = resultsLen + limitedCount;
	          resolve(results);
	        }

	        isNode?setImmediate(step):step();
	      });
	      p.cancel = function() { canceled = true; };
	      return p
	    },

	    highlight: function(result, hOpen, hClose) {
	      if(result === null) return null
	      if(hOpen === undefined) hOpen = '<b>';
	      if(hClose === undefined) hClose = '</b>';
	      var highlighted = '';
	      var matchesIndex = 0;
	      var opened = false;
	      var target = result.target;
	      var targetLen = target.length;
	      var matchesBest = result.indexes;
	      for(var i = 0; i < targetLen; ++i) { var char = target[i];
	        if(matchesBest[matchesIndex] === i) {
	          ++matchesIndex;
	          if(!opened) { opened = true;
	            highlighted += hOpen;
	          }

	          if(matchesIndex === matchesBest.length) {
	            highlighted += char + hClose + target.substr(i+1);
	            break
	          }
	        } else {
	          if(opened) { opened = false;
	            highlighted += hClose;
	          }
	        }
	        highlighted += char;
	      }

	      return highlighted
	    },

	    prepare: function(target) {
	      if(!target) return
	      return {target:target, _targetLowerCodes:fuzzysort.prepareLowerCodes(target), _nextBeginningIndexes:null, score:null, indexes:null, obj:null} // hidden
	    },
	    prepareSlow: function(target) {
	      if(!target) return
	      return {target:target, _targetLowerCodes:fuzzysort.prepareLowerCodes(target), _nextBeginningIndexes:fuzzysort.prepareNextBeginningIndexes(target), score:null, indexes:null, obj:null} // hidden
	    },
	    prepareSearch: function(search) {
	      if(!search) return
	      return fuzzysort.prepareLowerCodes(search)
	    },



	    // Below this point is only internal code
	    // Below this point is only internal code
	    // Below this point is only internal code
	    // Below this point is only internal code



	    getPrepared: function(target) {
	      if(target.length > 999) return fuzzysort.prepare(target) // don't cache huge targets
	      var targetPrepared = preparedCache.get(target);
	      if(targetPrepared !== undefined) return targetPrepared
	      targetPrepared = fuzzysort.prepare(target);
	      preparedCache.set(target, targetPrepared);
	      return targetPrepared
	    },
	    getPreparedSearch: function(search) {
	      if(search.length > 999) return fuzzysort.prepareSearch(search) // don't cache huge searches
	      var searchPrepared = preparedSearchCache.get(search);
	      if(searchPrepared !== undefined) return searchPrepared
	      searchPrepared = fuzzysort.prepareSearch(search);
	      preparedSearchCache.set(search, searchPrepared);
	      return searchPrepared
	    },

	    algorithm: function(searchLowerCodes, prepared, searchLowerCode) {
	      var targetLowerCodes = prepared._targetLowerCodes;
	      var searchLen = searchLowerCodes.length;
	      var targetLen = targetLowerCodes.length;
	      var searchI = 0; // where we at
	      var targetI = 0; // where you at
	      var typoSimpleI = 0;
	      var matchesSimpleLen = 0;

	      // very basic fuzzy match; to remove non-matching targets ASAP!
	      // walk through target. find sequential matches.
	      // if all chars aren't found then exit
	      for(;;) {
	        var isMatch = searchLowerCode === targetLowerCodes[targetI];
	        if(isMatch) {
	          matchesSimple[matchesSimpleLen++] = targetI;
	          ++searchI; if(searchI === searchLen) break
	          searchLowerCode = searchLowerCodes[typoSimpleI===0?searchI : (typoSimpleI===searchI?searchI+1 : (typoSimpleI===searchI-1?searchI-1 : searchI))];
	        }

	        ++targetI; if(targetI >= targetLen) { // Failed to find searchI
	          // Check for typo or exit
	          // we go as far as possible before trying to transpose
	          // then we transpose backwards until we reach the beginning
	          for(;;) {
	            if(searchI <= 1) return null // not allowed to transpose first char
	            if(typoSimpleI === 0) { // we haven't tried to transpose yet
	              --searchI;
	              var searchLowerCodeNew = searchLowerCodes[searchI];
	              if(searchLowerCode === searchLowerCodeNew) continue // doesn't make sense to transpose a repeat char
	              typoSimpleI = searchI;
	            } else {
	              if(typoSimpleI === 1) return null // reached the end of the line for transposing
	              --typoSimpleI;
	              searchI = typoSimpleI;
	              searchLowerCode = searchLowerCodes[searchI + 1];
	              var searchLowerCodeNew = searchLowerCodes[searchI];
	              if(searchLowerCode === searchLowerCodeNew) continue // doesn't make sense to transpose a repeat char
	            }
	            matchesSimpleLen = searchI;
	            targetI = matchesSimple[matchesSimpleLen - 1] + 1;
	            break
	          }
	        }
	      }

	      var searchI = 0;
	      var typoStrictI = 0;
	      var successStrict = false;
	      var matchesStrictLen = 0;

	      var nextBeginningIndexes = prepared._nextBeginningIndexes;
	      if(nextBeginningIndexes === null) nextBeginningIndexes = prepared._nextBeginningIndexes = fuzzysort.prepareNextBeginningIndexes(prepared.target);
	      var firstPossibleI = targetI = matchesSimple[0]===0 ? 0 : nextBeginningIndexes[matchesSimple[0]-1];

	      // Our target string successfully matched all characters in sequence!
	      // Let's try a more advanced and strict test to improve the score
	      // only count it as a match if it's consecutive or a beginning character!
	      if(targetI !== targetLen) for(;;) {
	        if(targetI >= targetLen) {
	          // We failed to find a good spot for this search char, go back to the previous search char and force it forward
	          if(searchI <= 0) { // We failed to push chars forward for a better match
	            // transpose, starting from the beginning
	            ++typoStrictI; if(typoStrictI > searchLen-2) break
	            if(searchLowerCodes[typoStrictI] === searchLowerCodes[typoStrictI+1]) continue // doesn't make sense to transpose a repeat char
	            targetI = firstPossibleI;
	            continue
	          }

	          --searchI;
	          var lastMatch = matchesStrict[--matchesStrictLen];
	          targetI = nextBeginningIndexes[lastMatch];

	        } else {
	          var isMatch = searchLowerCodes[typoStrictI===0?searchI : (typoStrictI===searchI?searchI+1 : (typoStrictI===searchI-1?searchI-1 : searchI))] === targetLowerCodes[targetI];
	          if(isMatch) {
	            matchesStrict[matchesStrictLen++] = targetI;
	            ++searchI; if(searchI === searchLen) { successStrict = true; break }
	            ++targetI;
	          } else {
	            targetI = nextBeginningIndexes[targetI];
	          }
	        }
	      }

	      { // tally up the score & keep track of matches for highlighting later
	        if(successStrict) { var matchesBest = matchesStrict; var matchesBestLen = matchesStrictLen; }
	        else { var matchesBest = matchesSimple; var matchesBestLen = matchesSimpleLen; }
	        var score = 0;
	        var lastTargetI = -1;
	        for(var i = 0; i < searchLen; ++i) { var targetI = matchesBest[i];
	          // score only goes down if they're not consecutive
	          if(lastTargetI !== targetI - 1) score -= targetI;
	          lastTargetI = targetI;
	        }
	        if(!successStrict) {
	          score *= 1000;
	          if(typoSimpleI !== 0) score += -20;/*typoPenalty*/
	        } else {
	          if(typoStrictI !== 0) score += -20;/*typoPenalty*/
	        }
	        score -= targetLen - searchLen;
	        prepared.score = score;
	        prepared.indexes = new Array(matchesBestLen); for(var i = matchesBestLen - 1; i >= 0; --i) prepared.indexes[i] = matchesBest[i];

	        return prepared
	      }
	    },

	    algorithmNoTypo: function(searchLowerCodes, prepared, searchLowerCode) {
	      var targetLowerCodes = prepared._targetLowerCodes;
	      var searchLen = searchLowerCodes.length;
	      var targetLen = targetLowerCodes.length;
	      var searchI = 0; // where we at
	      var targetI = 0; // where you at
	      var matchesSimpleLen = 0;

	      // very basic fuzzy match; to remove non-matching targets ASAP!
	      // walk through target. find sequential matches.
	      // if all chars aren't found then exit
	      for(;;) {
	        var isMatch = searchLowerCode === targetLowerCodes[targetI];
	        if(isMatch) {
	          matchesSimple[matchesSimpleLen++] = targetI;
	          ++searchI; if(searchI === searchLen) break
	          searchLowerCode = searchLowerCodes[searchI];
	        }
	        ++targetI; if(targetI >= targetLen) return null // Failed to find searchI
	      }

	      var searchI = 0;
	      var successStrict = false;
	      var matchesStrictLen = 0;

	      var nextBeginningIndexes = prepared._nextBeginningIndexes;
	      if(nextBeginningIndexes === null) nextBeginningIndexes = prepared._nextBeginningIndexes = fuzzysort.prepareNextBeginningIndexes(prepared.target);
	      var firstPossibleI = targetI = matchesSimple[0]===0 ? 0 : nextBeginningIndexes[matchesSimple[0]-1];

	      // Our target string successfully matched all characters in sequence!
	      // Let's try a more advanced and strict test to improve the score
	      // only count it as a match if it's consecutive or a beginning character!
	      if(targetI !== targetLen) for(;;) {
	        if(targetI >= targetLen) {
	          // We failed to find a good spot for this search char, go back to the previous search char and force it forward
	          if(searchI <= 0) break // We failed to push chars forward for a better match

	          --searchI;
	          var lastMatch = matchesStrict[--matchesStrictLen];
	          targetI = nextBeginningIndexes[lastMatch];

	        } else {
	          var isMatch = searchLowerCodes[searchI] === targetLowerCodes[targetI];
	          if(isMatch) {
	            matchesStrict[matchesStrictLen++] = targetI;
	            ++searchI; if(searchI === searchLen) { successStrict = true; break }
	            ++targetI;
	          } else {
	            targetI = nextBeginningIndexes[targetI];
	          }
	        }
	      }

	      { // tally up the score & keep track of matches for highlighting later
	        if(successStrict) { var matchesBest = matchesStrict; var matchesBestLen = matchesStrictLen; }
	        else { var matchesBest = matchesSimple; var matchesBestLen = matchesSimpleLen; }
	        var score = 0;
	        var lastTargetI = -1;
	        for(var i = 0; i < searchLen; ++i) { var targetI = matchesBest[i];
	          // score only goes down if they're not consecutive
	          if(lastTargetI !== targetI - 1) score -= targetI;
	          lastTargetI = targetI;
	        }
	        if(!successStrict) score *= 1000;
	        score -= targetLen - searchLen;
	        prepared.score = score;
	        prepared.indexes = new Array(matchesBestLen); for(var i = matchesBestLen - 1; i >= 0; --i) prepared.indexes[i] = matchesBest[i];

	        return prepared
	      }
	    },

	    prepareLowerCodes: function(str) {
	      var strLen = str.length;
	      var lowerCodes = []; // new Array(strLen)    sparse array is too slow
	      var lower = str.toLowerCase();
	      for(var i = 0; i < strLen; ++i) lowerCodes[i] = lower.charCodeAt(i);
	      return lowerCodes
	    },
	    prepareBeginningIndexes: function(target) {
	      var targetLen = target.length;
	      var beginningIndexes = []; var beginningIndexesLen = 0;
	      var wasUpper = false;
	      var wasAlphanum = false;
	      for(var i = 0; i < targetLen; ++i) {
	        var targetCode = target.charCodeAt(i);
	        var isUpper = targetCode>=65&&targetCode<=90;
	        var isAlphanum = isUpper || targetCode>=97&&targetCode<=122 || targetCode>=48&&targetCode<=57;
	        var isBeginning = isUpper && !wasUpper || !wasAlphanum || !isAlphanum;
	        wasUpper = isUpper;
	        wasAlphanum = isAlphanum;
	        if(isBeginning) beginningIndexes[beginningIndexesLen++] = i;
	      }
	      return beginningIndexes
	    },
	    prepareNextBeginningIndexes: function(target) {
	      var targetLen = target.length;
	      var beginningIndexes = fuzzysort.prepareBeginningIndexes(target);
	      var nextBeginningIndexes = []; // new Array(targetLen)     sparse array is too slow
	      var lastIsBeginning = beginningIndexes[0];
	      var lastIsBeginningI = 0;
	      for(var i = 0; i < targetLen; ++i) {
	        if(lastIsBeginning > i) {
	          nextBeginningIndexes[i] = lastIsBeginning;
	        } else {
	          lastIsBeginning = beginningIndexes[++lastIsBeginningI];
	          nextBeginningIndexes[i] = lastIsBeginning===undefined ? targetLen : lastIsBeginning;
	        }
	      }
	      return nextBeginningIndexes
	    },

	    cleanup: cleanup,
	    new: fuzzysortNew,
	  };
	  return fuzzysort
	} // fuzzysortNew

	// This stuff is outside fuzzysortNew, because it's shared with instances of fuzzysort.new()
	var isNode = typeof commonjsRequire !== 'undefined' && typeof window === 'undefined';
	// var MAX_INT = Number.MAX_SAFE_INTEGER
	// var MIN_INT = Number.MIN_VALUE
	var preparedCache = new Map();
	var preparedSearchCache = new Map();
	var noResults = []; noResults.total = 0;
	var matchesSimple = []; var matchesStrict = [];
	function cleanup() { preparedCache.clear(); preparedSearchCache.clear(); matchesSimple = []; matchesStrict = []; }
	function defaultScoreFn(a) {
	  var max = -9007199254740991;
	  for (var i = a.length - 1; i >= 0; --i) {
	    var result = a[i]; if(result === null) continue
	    var score = result.score;
	    if(score > max) max = score;
	  }
	  if(max === -9007199254740991) return null
	  return max
	}

	// prop = 'key'              2.5ms optimized for this case, seems to be about as fast as direct obj[prop]
	// prop = 'key1.key2'        10ms
	// prop = ['key1', 'key2']   27ms
	function getValue(obj, prop) {
	  var tmp = obj[prop]; if(tmp !== undefined) return tmp
	  var segs = prop;
	  if(!Array.isArray(prop)) segs = prop.split('.');
	  var len = segs.length;
	  var i = -1;
	  while (obj && (++i < len)) obj = obj[segs[i]];
	  return obj
	}

	function isObj(x) { return typeof x === 'object' } // faster as a function

	// Hacked version of https://github.com/lemire/FastPriorityQueue.js
	var fastpriorityqueue=function(){var r=[],o=0,e={};function n(){for(var e=0,n=r[e],c=1;c<o;){var f=c+1;e=c,f<o&&r[f].score<r[c].score&&(e=f),r[e-1>>1]=r[e],c=1+(e<<1);}for(var a=e-1>>1;e>0&&n.score<r[a].score;a=(e=a)-1>>1)r[e]=r[a];r[e]=n;}return e.add=function(e){var n=o;r[o++]=e;for(var c=n-1>>1;n>0&&e.score<r[c].score;c=(n=c)-1>>1)r[n]=r[c];r[n]=e;},e.poll=function(){if(0!==o){var e=r[0];return r[0]=r[--o],n(),e}},e.peek=function(e){if(0!==o)return r[0]},e.replaceTop=function(o){r[0]=o,n();},e};
	var q = fastpriorityqueue(); // reuse this, except for async, it needs to make its own

	return fuzzysortNew()
	}); // UMD

	// TODO: (performance) wasm version!?

	// TODO: (performance) layout memory in an optimal way to go fast by avoiding cache misses

	// TODO: (performance) preparedCache is a memory leak

	// TODO: (like sublime) backslash === forwardslash

	// TODO: (performance) i have no idea how well optizmied the allowing typos algorithm is
	});

	function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

	function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

	function getSuggestionHighlights(suggestion) {
	  // if there's more than one suggestion, retun an array of
	  // highlighted results. ex: ["first *result*", "second *result*"]
	  if (Array.isArray(suggestion) && suggestion.length >= 2) {
	    return suggestion.map(function (result) {
	      return fuzzysort.highlight(result);
	    });
	  } // otherwise return the single suggestion as a string. ex:
	  // "only *result*"


	  return fuzzysort.highlight(suggestion[0]);
	} // format the output to include a code higlight for innerHTML
	// and the command to invoke


	function formatSuggestions(filteredSuggestions) {
	  return filteredSuggestions.map(function (suggestion) {
	    var opts = {
	      name: suggestion.obj.name,
	      command: suggestion.obj.command,
	      highlight: getSuggestionHighlights(suggestion)
	    };
	    return _objectSpread(_objectSpread({}, opts), suggestion.obj);
	  });
	} // Teach Autosuggest how to calculate suggestions for any given input value.


	var getSuggestions = function getSuggestions(value, allCommands, options) {
	  // TODO: preparing fuzzysort results make them much faster
	  // however prepare is expensiveand should only be run when
	  // the commands change lodash.once get close to this
	  // but the implementation needs to work within the react lifecyle
	  // lets come back to this later, ex:
	  // once(() => {
	  //   allCommands.forEach(s => (s.namePrepared = fuzzysort.prepare(s.name)));
	  // });
	  // If the user specified an autosuggest term
	  // search for close matches
	  var suggestionResults = fuzzysort.go(value, allCommands, options); // if the user didnt suggest a specific term or there's a search term
	  // but no matches were found return all the commands

	  if (!value || !suggestionResults.length) {
	    return allCommands;
	  } // Otherwise return the search results


	  return formatSuggestions(suggestionResults);
	};

	var atomTheme = {
	  modal: "atom-modal",
	  overlay: "atom-overlay",
	  header: "atom-header",
	  container: "atom-container",
	  content: "atom-content",
	  containerOpen: "atom-containerOpen",
	  input: "atom-input",
	  inputOpen: "atom-inputOpen",
	  inputFocused: "atom-inputFocused",
	  spinner: "atom-spinner",
	  suggestionsContainer: "atom-suggestionsContainer",
	  suggestionsContainerOpen: "atom-suggestionsContainerOpen",
	  suggestionsList: "atom-suggestionsList",
	  suggestion: "atom-suggestion",
	  suggestionFirst: "atom-suggestionFirst",
	  suggestionHighlighted: "atom-suggestionHighlighted",
	  trigger: "atom-trigger"
	};

	// Mostly because function props shouldn't throw errors by default
	var noop = function noop() {
	  return undefined;
	}; // Apply a functions that'll run after the command's function runs
	// Monkey patching for the commands
	// http://me.dt.in.th/page/JavaScript-override/

	function override(object, methodName, callback) {
	  var dupe = object;
	  dupe[methodName] = callback(object[methodName]);
	}
	function after(extraBehavior) {
	  return function (original) {
	    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      args[_key - 1] = arguments[_key];
	    }

	    return function () {
	      var returnValue = original.apply(this, args);
	      extraBehavior.apply(this, args);
	      return returnValue;
	    };
	  };
	}

	var css_248z$1 = ".atom-modal {\n  width: 605px;\n  position: absolute;\n  top: 80px;\n  left: 50%;\n  right: auto;\n  bottom: auto;\n  border: 0px none;\n  background: rgb(48, 51, 56);\n  overflow: hidden;\n  border-radius: 4px;\n  outline: none;\n  padding: 10px;\n  box-shadow: rgb(0, 0, 0) 0px 2px 4px 0px;\n  margin-right: -50%;\n  transform: translate(-50%, 0px);\n}\n\n.atom-overlay {\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  right: 0px;\n  bottom: 0px;\n  background-color: rgba(0, 0, 0, 0.75);\n}\n\n.atom-header {\n  color: #d7dae0;\n}\n\n.atom-content {\n  box-shadow: rgb(0, 0, 0) 0px 2px 4px 0px;\n  position: absolute;\n  top: 80px;\n  left: 50%;\n  right: auto;\n  bottom: auto;\n  margin-right: -50%;\n  transform: translate(-50%, 0);\n  border: 0px none;\n  background: rgb(48, 51, 56);\n  overflow: hidden;\n  -webkit-overflow-scrolling: touch;\n  border-radius: 4px;\n  outline: none;\n  padding: 10px;\n  min-width: 600px;\n}\n\n.atom-container {\n  font-family: -apple-system,system-ui,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif;\n  font-weight: lighter;\n  font-size: 12px;\n}\n\n.atom-containerOpen {}\n\n.atom-input {\n  font-size: 14px;\n  border-radius: 4px;\n  border: 2px solid #181a1f;\n  width: 590px;\n  padding: 6px;\n  outline: none;\n  background-color: #202634;\n  color: #d7dae0;\n  caret-color: #568af2;\n}\n\n.atom-inputOpen {}\n\n.atom-inputFocused {\n  border: 2px solid #568af2;\n  background-color: #1b1d23;\n}\n\n.atom-suggestionsContainer {}\n\n.atom-suggestionsContainerOpen {\n  overflow: hidden;\n  border-top: 1px solid #111;\n  border-bottom: 1px solid #111;\n  max-height: 315px;\n  margin-top: 10px\n}\n\n.atom-suggestionsList {\n  list-style: none;\n  padding: 0;\n  margin-bottom: 0;\n  margin-top: 0\n}\n\n.atom-suggestion {\n  color: #9da5b4;\n  border: 1px solid #181a1f;\n  border-top: 0px none;\n  background-color: #2c313a;\n  padding: 14px 12px;\n  cursor: pointer;\n}\n\n.atom-suggestion b {\n  color: #598cef;\n  font-weight: bold;\n}\n.atom-suggestionFirst {\n}\n\n.atom-suggestionHighlighted {\n  color: #ffffff;\n  background-color: #3a3f4b\n}\n\n.atom-spinner {\n  border-top: 0.4em solid rgba(255, 255, 255, 0.2);\n  border-right: 0.4em solid rgba(255, 255, 255, 0.2);\n  border-bottom: 0.4em solid rgba(255, 255, 255, 0.2);\n  border-left: 0.4em solid rgb(255, 255, 255);\n}\n";
	styleInject(css_248z$1);

	function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn(this, result); }; }

	function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
	var allSuggestions = []; // When suggestion is clicked, Autosuggest needs to populate the input element
	// based on the clicked suggestion. Teach Autosuggest how to calculate the
	// input value for every given suggestion.

	var getSuggestionValue = function getSuggestionValue(suggestion) {
	  return suggestion.name;
	};

	var Header = function Header(props) {
	  var theme = props.theme,
	      children = props.children;
	  return /*#__PURE__*/React.createElement("div", {
	    className: theme.header
	  }, children);
	};

	Header.propTypes = {
	  theme: propTypes.object,
	  children: propTypes.oneOfType([propTypes.arrayOf(propTypes.node), propTypes.node])
	};

	var CommandPalette = /*#__PURE__*/function (_React$Component) {
	  inherits(CommandPalette, _React$Component);

	  var _super = _createSuper(CommandPalette);

	  function CommandPalette(props) {
	    var _this;

	    classCallCheck(this, CommandPalette);

	    _this = _super.call(this, props);
	    var defaultInputValue = _this.props.defaultInputValue; // Autosuggest is a controlled component.
	    // This means that you need to provide an input value
	    // and an onChange handler that updates this value (see below).
	    // Suggestions also need to be provided to the Autosuggest,
	    // and they are initially empty because the Autosuggest is closed.

	    _this.state = {
	      isLoading: false,
	      showModal: false,
	      value: defaultInputValue,
	      suggestions: allSuggestions
	    };
	    _this.onChange = _this.onChange.bind(assertThisInitialized(_this));
	    _this.onSelect = _this.onSelect.bind(assertThisInitialized(_this)); // eslint-disable-next-line prettier/prettier

	    _this.onSuggestionsFetchRequested = _this.onSuggestionsFetchRequested.bind(assertThisInitialized(_this));
	    _this.onSuggestionsClearRequested = _this.onSuggestionsClearRequested.bind(assertThisInitialized(_this));
	    _this.onSuggestionHighlighted = _this.onSuggestionHighlighted.bind(assertThisInitialized(_this));
	    _this.onSuggestionSelected = _this.onSuggestionSelected.bind(assertThisInitialized(_this));
	    _this.afterOpenModal = _this.afterOpenModal.bind(assertThisInitialized(_this));
	    _this.handleOpenModal = _this.handleOpenModal.bind(assertThisInitialized(_this));
	    _this.handleCloseModal = _this.handleCloseModal.bind(assertThisInitialized(_this));
	    _this.commandTemplate = _this.commandTemplate.bind(assertThisInitialized(_this));
	    _this.renderModalCommandPalette = _this.renderModalCommandPalette.bind(assertThisInitialized(_this));
	    _this.renderInlineCommandPalette = _this.renderInlineCommandPalette.bind(assertThisInitialized(_this));
	    _this.fetchData = _this.fetchData.bind(assertThisInitialized(_this));
	    _this.commandPaletteInput = React.createRef();
	    _this.focusInput = _this.focusInput.bind(assertThisInitialized(_this));
	    return _this;
	  }

	  createClass(CommandPalette, [{
	    key: "componentDidMount",
	    value: function componentDidMount() {
	      var _this2 = this;

	      var _this$props = this.props,
	          hotKeys = _this$props.hotKeys,
	          open = _this$props.open,
	          display = _this$props.display;
	      this.setState({
	        suggestions: this.fetchData()
	      }); // Use hot key to open command palette

	      mousetrap.bindGlobal(hotKeys, function () {
	        _this2.handleOpenModal(); // prevent default which opens Chrome dev tools command palatte


	        return false;
	      });
	      if (open) return this.handleOpenModal(); // because there's no modal when using inline the input should be focused

	      if (display === "inline") return this.focusInput();
	      return true;
	    }
	  }, {
	    key: "componentDidUpdate",
	    value: function componentDidUpdate(prevProps) {
	      var commands = this.props.commands;

	      if (!fastDeepEqual(prevProps.commands, commands)) {
	        // eslint-disable-next-line react/no-did-update-set-state
	        this.setState({
	          suggestions: this.fetchData()
	        });
	      }
	    }
	  }, {
	    key: "onChange",
	    value: function onChange(event, _ref) {
	      var newValue = _ref.newValue;
	      var onChange = this.props.onChange;
	      this.setState({
	        value: newValue
	      });
	      return onChange(newValue, this.getInputOnTextTyped(event, newValue));
	    }
	  }, {
	    key: "onSelect",
	    value: function onSelect() {
	      var suggestion = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
	      var onSelect = this.props.onSelect;
	      return onSelect(suggestion);
	    }
	  }, {
	    key: "onSuggestionHighlighted",
	    value: function onSuggestionHighlighted(_ref2) {
	      var suggestion = _ref2.suggestion;
	      var onHighlight = this.props.onHighlight;
	      onHighlight(suggestion);
	    }
	  }, {
	    key: "onSuggestionSelected",
	    value: function onSuggestionSelected(event, _ref3) {
	      var _this3 = this;

	      var suggestion = _ref3.suggestion;

	      if (typeof suggestion.command === "function") {
	        // after the command executes display a spinner
	        override(suggestion, "command", after(function () {
	          // fire onSelect event
	          _this3.onSelect(suggestion); // close the command palette if prop is set


	          var _this3$props = _this3.props,
	              closeOnSelect = _this3$props.closeOnSelect,
	              display = _this3$props.display;

	          if (closeOnSelect && display === "modal") {
	            _this3.handleCloseModal();
	          } else {
	            // otherwise show the loading spinner
	            _this3.setState({
	              isLoading: true
	            });
	          }
	        }));
	        return suggestion.command();
	      }

	      throw new Error("command must be a function");
	    } // Autosuggest will call this function every time you need to update suggestions.
	    // You already implemented this logic above, so just use it.

	  }, {
	    key: "onSuggestionsFetchRequested",
	    value: function onSuggestionsFetchRequested(_ref4) {
	      var value = _ref4.value;
	      var options = this.props.options;
	      this.setState({
	        suggestions: getSuggestions(value, this.allCommands, options)
	      });
	    }
	  }, {
	    key: "onSuggestionsClearRequested",
	    value: function onSuggestionsClearRequested() {
	      // when using the onSuggestionsClearRequested property, it overrides
	      // alwaysRenderSuggestions which I think is counter intuitive, as always should mean
	      // always, see: https://github.com/moroshko/react-autosuggest/issues/521
	      // once this issue is resolved the suggestions should return an empty array, ex:
	      // this.setState({
	      //   suggestions: []
	      // });
	      return true;
	    } // returns user typed queries only
	    // wont return selections or keyboard navigation
	    // just input

	  }, {
	    key: "getInputOnTextTyped",
	    value: function getInputOnTextTyped(event, newValue) {
	      var key = event.key,
	          type = event.type;

	      if (key !== "ArrowUp" && key !== "ArrowDown" && key !== "Enter" && type !== "click") {
	        return newValue;
	      }

	      return null;
	    }
	  }, {
	    key: "afterOpenModal",
	    value: function afterOpenModal() {
	      var onAfterOpen = this.props.onAfterOpen;
	      this.focusInput();
	      return onAfterOpen();
	    }
	  }, {
	    key: "fetchData",
	    value: function fetchData() {
	      var _this$props2 = this.props,
	          commands = _this$props2.commands,
	          maxDisplayed = _this$props2.maxDisplayed;

	      if (maxDisplayed > 500) {
	        throw new Error("Display is limited to a maximum of 500 items to prevent performance issues");
	      }

	      this.allCommands = commands;
	      return this.allCommands;
	    }
	  }, {
	    key: "focusInput",
	    value: function focusInput() {
	      var _this4 = this;

	      this.commandPaletteInput.input.focus(); 
	      // so that pressing esc on loading spinner works too

	      var hotKeys = this.props.hotKeys;
	      mousetrap(this.commandPaletteInput.input).bindGlobal(["esc"].concat(hotKeys), function () {
	        _this4.handleCloseModal();

	        return false;
	      });
	    }
	  }, {
	    key: "handleCloseModal",
	    value: function handleCloseModal() {
	      var _this$props3 = this.props,
	          resetInputOnClose = _this$props3.resetInputOnClose,
	          defaultInputValue = _this$props3.defaultInputValue,
	          onRequestClose = _this$props3.onRequestClose;
	      var value = this.state.value;
	      this.setState({
	        showModal: false,
	        isLoading: false,
	        value: resetInputOnClose ? defaultInputValue : value
	      });
	      return onRequestClose();
	    }
	  }, {
	    key: "handleOpenModal",
	    value: function handleOpenModal() {
	      this.setState({
	        showModal: true,
	        suggestions: allSuggestions
	      });
	    } // Autosuggest will pass through all these props to the input element.

	  }, {
	    key: "defaultInputProps",
	    value: function defaultInputProps(value) {
	      var placeholder = this.props.placeholder;
	      return {
	        placeholder: placeholder,
	        value: value,
	        onChange: this.onChange,
	        onKeyDown: this.onKeyDown
	      };
	    }
	  }, {
	    key: "commandTemplate",
	    value: function commandTemplate(suggestion) {
	      return /*#__PURE__*/React.createElement(RenderCommand, _extends_1({}, this.props, {
	        suggestion: suggestion
	      }));
	    } // eslint-disable-next-line react/sort-comp

	  }, {
	    key: "renderAutoSuggest",
	    value: function renderAutoSuggest() {
	      var _this5 = this;

	      var _this$state = this.state,
	          suggestions = _this$state.suggestions,
	          value = _this$state.value,
	          isLoading = _this$state.isLoading;
	      var theme = this.props.theme;
	      var _this$props4 = this.props,
	          maxDisplayed = _this$props4.maxDisplayed,
	          spinner = _this$props4.spinner,
	          showSpinnerOnSelect = _this$props4.showSpinnerOnSelect,
	          display = _this$props4.display,
	          header = _this$props4.header,
	          highlightFirstSuggestion = _this$props4.highlightFirstSuggestion,
	          alwaysRenderCommands = _this$props4.alwaysRenderCommands;

	      if (isLoading && showSpinnerOnSelect) {
	        return /*#__PURE__*/React.createElement(PaletteSpinner, {
	          spinner: spinner,
	          display: display,
	          theme: theme.spinner
	        });
	      }

	      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Header, {
	        theme: theme
	      }, header), /*#__PURE__*/React.createElement(dist$2, {
	        ref: function ref(input) {
	          _this5.commandPaletteInput = input;
	        },
	        alwaysRenderSuggestions: alwaysRenderCommands,
	        suggestions: suggestions.slice(0, maxDisplayed),
	        highlightFirstSuggestion: highlightFirstSuggestion,
	        onSuggestionHighlighted: this.onSuggestionHighlighted,
	        onSuggestionSelected: this.onSuggestionSelected,
	        onSuggestionsFetchRequested: this.onSuggestionsFetchRequested,
	        onSuggestionsClearRequested: this.onSuggestionsClearRequested,
	        getSuggestionValue: getSuggestionValue,
	        renderSuggestion: this.commandTemplate,
	        inputProps: this.defaultInputProps(value),
	        theme: theme
	      }));
	    }
	  }, {
	    key: "renderModalCommandPalette",
	    value: function renderModalCommandPalette() {
	      var showModal = this.state.showModal;
	      var _this$props5 = this.props,
	          trigger = _this$props5.trigger,
	          theme = _this$props5.theme,
	          reactModalParentSelector = _this$props5.reactModalParentSelector,
	          shouldReturnFocusAfterClose = _this$props5.shouldReturnFocusAfterClose;
	      return /*#__PURE__*/React.createElement("div", {
	        className: "react-command-palette"
	      }, /*#__PURE__*/React.createElement(PaletteTrigger, {
	        onClick: this.handleOpenModal,
	        trigger: trigger,
	        theme: theme.trigger
	      }), /*#__PURE__*/React.createElement(ReactModal, {
	        appElement: document.body,
	        isOpen: showModal,
	        parentSelector: function parentSelector() {
	          return document.querySelector(reactModalParentSelector);
	        },
	        onAfterOpen: this.afterOpenModal,
	        onRequestClose: this.handleCloseModal,
	        shouldReturnFocusAfterClose: shouldReturnFocusAfterClose,
	        className: theme.modal,
	        overlayClassName: theme.overlay,
	        contentLabel: "Command Palette",
	        closeTimeoutMS: 1
	        /* otherwise the modal is not closed when
	        suggestion is selected by pressing Enter */

	      }, this.renderAutoSuggest()));
	    }
	  }, {
	    key: "renderInlineCommandPalette",
	    value: function renderInlineCommandPalette() {
	      return /*#__PURE__*/React.createElement("div", {
	        className: "react-command-palette"
	      }, this.renderAutoSuggest());
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var display = this.props.display;
	      var commandPalette;

	      if (display === "inline") {
	        commandPalette = this.renderInlineCommandPalette();
	      } else {
	        commandPalette = this.renderModalCommandPalette();
	      }

	      return commandPalette;
	    }
	  }]);

	  return CommandPalette;
	}(React.Component);

	CommandPalette.defaultProps = {
	  alwaysRenderCommands: true,
	  placeholder: "Type a command",
	  hotKeys: "command+shift+p",
	  defaultInputValue: "",
	  header: null,
	  highlightFirstSuggestion: true,
	  maxDisplayed: 7,
	  options: fuzzysortOptions,
	  onChange: noop,
	  onHighlight: noop,
	  onSelect: noop,
	  onAfterOpen: noop,
	  onRequestClose: noop,
	  closeOnSelect: false,
	  resetInputOnClose: false,
	  display: "modal",
	  reactModalParentSelector: "body",
	  renderCommand: null,
	  shouldReturnFocusAfterClose: true,
	  showSpinnerOnSelect: true,
	  theme: atomTheme
	};
	CommandPalette.propTypes = {
	  /** alwaysRenderCommands a boolean, Set it to true if you'd like to render suggestions
	   * even when the input is not focused. */
	  alwaysRenderCommands: propTypes.bool,

	  /** commands appears in the command palette. For each command in the array the object
	   * must have a _name_ and a _command_. The _name_ is a user friendly string that will
	   * be display to the user. The command is a function that will be executed when the
	   * user clicks or presses the enter key. Commands may also include custom properties
	   * this" will be bound to the command */
	  commands: propTypes.arrayOf(propTypes.shape({
	    name: propTypes.string.isRequired,
	    command: propTypes.func.isRequired
	  })).isRequired,

	  /** maxDisplayed a number between 1 and 500 that determines the maximum number of
	   * commands that will be rendered on screen. Defaults to 7 */
	  maxDisplayed: function maxDisplayed(props, propName, componentName) {
	    var maxDisplayed = props.maxDisplayed;

	    if (maxDisplayed > 500) {
	      return new Error("Invalid prop ".concat(propName, " supplied to ").concat(componentName, " Cannot be greater than\n         500."));
	    }

	    return null;
	  },

	  /** placeholder a string that contains a short text description which is displayed
	   * inside the the input field until the user provides input. Defaults to "Type a
	   * command" */
	  placeholder: propTypes.string,

	  /** hotKeys a string or array of strings that contain a keyboard shortcut for
	   * opening/closing the palette.
	   * Defaults to "command+shift+p" */
	  hotKeys: propTypes.oneOfType([propTypes.arrayOf(propTypes.string), propTypes.string]),

	  /** defaultInputValue a string that determines the value of the text in the input field.
	   * By default the defaultInputValue is an empty string. */
	  defaultInputValue: propTypes.string,

	  /** When highlightFirstSuggestion={true}, Autosuggest will automatically highlight the
	   *  first suggestion. Defaults to false. */
	  highlightFirstSuggestion: propTypes.bool,

	  /** options controls how fuzzy search is configured see [fuzzysort options]
	   * (https://github.com/farzher/fuzzysort#options) */
	  options: propTypes.object,

	  /** open a boolean, when set to true it forces the command palette to be displayed.
	   * Defaults to "false". */
	  open: propTypes.bool,

	  /** onHighlight a function that's called when the highlighted suggestion changes. */
	  onHighlight: propTypes.func,

	  /** onSelect a function that's called when the selected suggestion changes, given the
	   * user selects an item or the user clears the selection. It's called with the item that
	   * was selected or null */
	  onSelect: propTypes.func,

	  /** onChange a function that's called when the input value changes. */
	  onChange: propTypes.func,

	  /** onAfterOpen a function that fires after the command palette modal is opened */
	  onAfterOpen: propTypes.func,

	  /** onRequestClose a function that fires after the command palette modal is closed */
	  onRequestClose: propTypes.func,

	  /** display one of "modal" or "inline", when set to "modal" the command palette is
	   * rendered centered inside a modal. When set to "inline", it is render inline with
	   * other page content. Defaults to "modal". */
	  display: propTypes.oneOf(["modal", "inline"]),

	  /** header a string or a React.ComponentType which provides a helpful description for
	   * the usage of the command palette. The component is displayed at the top of the
	   * command palette. header are not displayed by default. see: examples
	   * sampleInstruction.js for reference */
	  header: propTypes.oneOfType([propTypes.string, propTypes.element]),

	  /** trigger a string or a React.ComponentType that opens the command palette when
	   * clicked. If a custom trigger is not set, then by default a button will be used. If a
	   * custom component or string is provided then it will automatically be wrapped inside
	   * an accessible div which will allow it be keyboard accessible, clickable and focusable
	   * for assistive technologies. */
	  trigger: propTypes.oneOfType([propTypes.string, propTypes.element]),

	  /** spinner a string or a React.ComponentType that is displayed when the user selects
	   * an item. If a custom spinner is not set then the default spinner will be used. If
	   * custom component or string is provided then it will automatically be wrapped inside
	   * a div with a role="status" attribute. If a component is provided then it will be be
	   * wrapped in a div that also contains a sibling node with a div contain "Loading..."
	   * visible only to screen readers. */
	  spinner: propTypes.oneOfType([propTypes.string, propTypes.element]),

	  /** showSpinnerOnSelect a boolean which displays a loading indicator immediately after
	   * a command has been selected. When true the spinner is enabled when false the spinner
	   * is disabled. */
	  showSpinnerOnSelect: propTypes.bool,

	  /**
	   * shouldReturnFocusAfterClose a boolean indicate if the modal should restore focus to
	   * the element that had focus prior to its display. */
	  shouldReturnFocusAfterClose: propTypes.bool,

	  /** closeOnSelect a boolean, when true selecting an item will immediately close the
	   * command-palette  */
	  closeOnSelect: propTypes.bool,

	  /** resetInputOnClose a boolean which indicates whether to reset the user's query
	   * to `defaultInputValue` when the command palette closes. */
	  resetInputOnClose: propTypes.bool,

	  /** a selector compatible with querySelector. By default, the modal portal will be
	   * appended to the document's body. You can choose a different parent element by
	   * selector. If you do this, please ensure that your app element is set correctly. The
	   * app element should not be a parent of the modal, to prevent modal content from being
	   * hidden to screenreaders while it is open. */
	  reactModalParentSelector: propTypes.string,

	  /** a React.func that defines the layout and contents of the commands in the
	   * command list. For complete documentation see the storybook notes. */
	  renderCommand: propTypes.func,

	  /** Styles and object that contains a list of key value pairs where the keys map the
	   * command palette components to their CSS class names. */
	  theme: propTypes.object
	};

	exports.default = CommandPalette;

	Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=main.js.map
