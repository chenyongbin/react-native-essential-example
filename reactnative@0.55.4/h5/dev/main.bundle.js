(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../app.json":
/*!*******************!*\
  !*** ../app.json ***!
  \*******************/
/*! exports provided: name, appKey, h5SubPath, h5PageTitle, h5ServerPort, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"ReactNativeEssentialExample\",\"appKey\":\"RNApp\",\"h5SubPath\":\"example\",\"h5PageTitle\":\"React Native 示例\",\"h5ServerPort\":\"3000\"}");

/***/ }),

/***/ "../index.web.js":
/*!***********************!*\
  !*** ../index.web.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_native__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-native */ "../node_modules/react-native-web/dist/cjs/index.js");
/* harmony import */ var react_native__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_native__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.json */ "../app.json");
var _app_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./app.json */ "../app.json", 1);
/* harmony import */ var _src_App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/App */ "./App/index.web.tsx");
/* harmony import */ var _src_App__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_src_App__WEBPACK_IMPORTED_MODULE_2__);




/** 非开发环境，禁用控制台打印 */
if (window.__DEV__ === false) {
  window.console = {
    info: () => {},
    log: () => {},
    warn: () => {},
    debug: () => {},
    error: () => {},
  };
}

/**
 * 将页面参数转换为属性对象
 */
const convertParamsToProps = () => {
  const props = {};

  if (react_native__WEBPACK_IMPORTED_MODULE_0__["Platform"].OS != "web") {
    return props;
  }

  const searchStr = location.search;
  if (searchStr && searchStr.indexOf("?") == 0) {
    try {
      const segmentList = searchStr.substr(1).split("&");
      segmentList.forEach((seg) => {
        const [key, value] = seg.split("=");
        props[key] = value;
      });
    } catch (error) {
      console.error("将页面参数转换为属性对象时出错", error);
    }
  }

  return props;
};

react_native__WEBPACK_IMPORTED_MODULE_0__["AppRegistry"].registerComponent(_app_json__WEBPACK_IMPORTED_MODULE_1__["appKey"], () => _src_App__WEBPACK_IMPORTED_MODULE_2___default.a);
react_native__WEBPACK_IMPORTED_MODULE_0__["AppRegistry"].runApplication(_app_json__WEBPACK_IMPORTED_MODULE_1__["appKey"], {
  initialProps: convertParamsToProps(),
  rootTag: document.getElementById("root"),
});


/***/ }),

/***/ "./App/AppErrorBoundary.tsx":
/*!**********************************!*\
  !*** ./App/AppErrorBoundary.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(__webpack_require__(/*! react */ "../node_modules/react/index.js"));
const react_native_1 = __webpack_require__(/*! react-native */ "../node_modules/react-native-web/dist/cjs/index.js");
/**
 * App错误边界，用于捕获渲染异常并记录到日志
 */
class AppErrorBoundary extends react_1.Component {
    componentDidCatch(error, errorInfo) {
        console.error(`组件渲染发生错误，错误消息=${error.message}，出错的组件栈=${errorInfo.componentStack}`);
    }
    render() {
        return (react_1.default.createElement(react_native_1.View, { style: { flex: 1, backgroundColor: "#fff" } }, this.props.children));
    }
}
exports.default = AppErrorBoundary;


/***/ }),

/***/ "./App/index.web.tsx":
/*!***************************!*\
  !*** ./App/index.web.tsx ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(__webpack_require__(/*! react */ "../node_modules/react/index.js"));
const app_json_1 = __webpack_require__(/*! ../../app.json */ "../app.json");
const services_1 = __webpack_require__(/*! ../services */ "./services/index.ts");
const utils_1 = __webpack_require__(/*! ../utils */ "./utils/index.ts");
const pages_1 = __importDefault(__webpack_require__(/*! ../pages */ "./pages/index.ts"));
const AppErrorBoundary_1 = __importDefault(__webpack_require__(/*! ./AppErrorBoundary */ "./App/AppErrorBoundary.tsx"));
/**
 * 页面根组件
 */
class App extends react_1.Component {
    constructor() {
        super(...arguments);
        this.hasEnteredCacheKey = "has_entered";
        this.firstEntry = utils_1.SessionCache.get(this.hasEnteredCacheKey) != "1";
        this.setTitle = (title) => { };
        this.exitApp = () => {
            utils_1.SessionCache.clear();
        };
        this.setBackHandler = (goBack) => {
            window.goBack = goBack;
        };
        this.onPageChange = (action, page, params) => { };
    }
    componentDidMount() {
        this.firstEntry && utils_1.SessionCache.set(this.hasEnteredCacheKey, "1");
    }
    render() {
        return (react_1.default.createElement(AppErrorBoundary_1.default, null,
            react_1.default.createElement(services_1.EmitterService, null),
            react_1.default.createElement(services_1.NavigatorService, Object.assign({ appName: app_json_1.name, exitApp: this.exitApp, onPageChange: this.onPageChange, web: {
                    firstEntry: this.firstEntry,
                    subPath: app_json_1.h5SubPath,
                    setTitle: this.setTitle,
                    setBackHandler: this.setBackHandler,
                } }, pages_1.default(this.props)))));
    }
}
exports.default = App;


/***/ }),

/***/ "./components/essential.ts":
/*!*********************************!*\
  !*** ./components/essential.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _1_0_1 = __webpack_require__(/*! react-native-essential/components/Text/@1.0 */ "../node_modules/react-native-essential/components/Text/@1.0/index.tsx");
Object.defineProperty(exports, "Text", { enumerable: true, get: function () { return _1_0_1.default; } });
var _1_0_2 = __webpack_require__(/*! react-native-essential/components/Image/@1.0 */ "../node_modules/react-native-essential/components/Image/@1.0/index.web.tsx");
Object.defineProperty(exports, "Image", { enumerable: true, get: function () { return _1_0_2.default; } });
var _1_0_3 = __webpack_require__(/*! react-native-essential/components/Arrow/@1.0 */ "../node_modules/react-native-essential/components/Arrow/@1.0/index.tsx");
Object.defineProperty(exports, "Arrow", { enumerable: true, get: function () { return _1_0_3.default; } });
var _1_0_4 = __webpack_require__(/*! react-native-essential/components/SectionGap/@1.0 */ "../node_modules/react-native-essential/components/SectionGap/@1.0/index.tsx");
Object.defineProperty(exports, "SectionGap", { enumerable: true, get: function () { return _1_0_4.default; } });
var _1_0_5 = __webpack_require__(/*! react-native-essential/components/GradientView/@1.0 */ "../node_modules/react-native-essential/components/GradientView/@1.0/index.web.tsx");
Object.defineProperty(exports, "GradientView", { enumerable: true, get: function () { return _1_0_5.default; } });
var _1_0_6 = __webpack_require__(/*! react-native-essential/components/IPhoneXShimView/@1.0 */ "../node_modules/react-native-essential/components/IPhoneXShimView/@1.0/index.tsx");
Object.defineProperty(exports, "IPhoneXShimView", { enumerable: true, get: function () { return _1_0_6.default; } });
var _1_0_7 = __webpack_require__(/*! react-native-essential/components/RootSibling/@1.0 */ "../node_modules/react-native-essential/components/RootSibling/@1.0/index.tsx");
Object.defineProperty(exports, "RootSibling", { enumerable: true, get: function () { return _1_0_7.default; } });
var _1_0_8 = __webpack_require__(/*! react-native-essential/components/Popup/@1.0 */ "../node_modules/react-native-essential/components/Popup/@1.0/index.ts");
Object.defineProperty(exports, "Popup", { enumerable: true, get: function () { return _1_0_8.Popup; } });
var _1_0_9 = __webpack_require__(/*! react-native-essential/components/Loading/@1.0 */ "../node_modules/react-native-essential/components/Loading/@1.0/index.ts");
Object.defineProperty(exports, "showLoading", { enumerable: true, get: function () { return _1_0_9.showLoading; } });
Object.defineProperty(exports, "hideLoading", { enumerable: true, get: function () { return _1_0_9.hideLoading; } });
Object.defineProperty(exports, "beginLoading", { enumerable: true, get: function () { return _1_0_9.beginLoading; } });
Object.defineProperty(exports, "endLoading", { enumerable: true, get: function () { return _1_0_9.endLoading; } });
Object.defineProperty(exports, "disableLoading", { enumerable: true, get: function () { return _1_0_9.disableLoading; } });
Object.defineProperty(exports, "enableLoading", { enumerable: true, get: function () { return _1_0_9.enableLoading; } });
var Dialog_1 = __webpack_require__(/*! react-native-essential/components/Dialog/@1.0/Dialog */ "../node_modules/react-native-essential/components/Dialog/@1.0/Dialog/index.ts");
Object.defineProperty(exports, "Dialog", { enumerable: true, get: function () { return Dialog_1.Dialog; } });
var MultiDialog_1 = __webpack_require__(/*! react-native-essential/components/Dialog/@1.0/MultiDialog */ "../node_modules/react-native-essential/components/Dialog/@1.0/MultiDialog/index.ts");
Object.defineProperty(exports, "MultiDialog", { enumerable: true, get: function () { return MultiDialog_1.MultiDialog; } });
var _1_0_10 = __webpack_require__(/*! react-native-essential/components/Toast/@1.0 */ "../node_modules/react-native-essential/components/Toast/@1.0/index.ts");
Object.defineProperty(exports, "Toast", { enumerable: true, get: function () { return _1_0_10.default; } });
var _1_0_11 = __webpack_require__(/*! react-native-essential/components/MeasureSize/@1.0 */ "../node_modules/react-native-essential/components/MeasureSize/@1.0/index.ts");
Object.defineProperty(exports, "beginMeasureSize", { enumerable: true, get: function () { return _1_0_11.beginMeasureSize; } });


/***/ }),

/***/ "./components/index.ts":
/*!*****************************!*\
  !*** ./components/index.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(/*! ./essential */ "./components/essential.ts"), exports);


/***/ }),

/***/ "./pages/demo/components/Button.tsx":
/*!******************************************!*\
  !*** ./pages/demo/components/Button.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(__webpack_require__(/*! react */ "../node_modules/react/index.js"));
const react_native_1 = __webpack_require__(/*! react-native */ "../node_modules/react-native-web/dist/cjs/index.js");
const components_1 = __webpack_require__(/*! ../../../components */ "./components/index.ts");
/**
 * 按钮
 */
class Button extends react_1.PureComponent {
    render() {
        const layoutStyles = [styles.container], { style, type, onPress } = this.props;
        if (type == "danger") {
            layoutStyles.push({ backgroundColor: "#ea5504" });
        }
        style && layoutStyles.push(style);
        return (react_1.default.createElement(react_native_1.TouchableOpacity, { style: layoutStyles, onPress: onPress },
            react_1.default.createElement(components_1.Text, { style: styles.text }, this.props.title)));
    }
}
exports.default = Button;
const styles = react_native_1.StyleSheet.create({
    container: {
        minWidth: 50,
        height: 40,
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#3381E3",
        borderRadius: 4,
    },
    text: {
        color: "#fff",
        fontSize: 14,
    },
});


/***/ }),

/***/ "./pages/demo/components/CheckButton.tsx":
/*!***********************************************!*\
  !*** ./pages/demo/components/CheckButton.tsx ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(__webpack_require__(/*! react */ "../node_modules/react/index.js"));
const react_native_1 = __webpack_require__(/*! react-native */ "../node_modules/react-native-web/dist/cjs/index.js");
const components_1 = __webpack_require__(/*! ../../../components */ "./components/index.ts");
/**
 * 勾选按钮
 */
class CheckButton extends react_1.PureComponent {
    render() {
        const layoutStyles = [styles.container], textStyles = [styles.text], { width, title, checked, onPress } = this.props;
        if (checked) {
            layoutStyles.push(styles.container_checked);
            textStyles.push(styles.text_checked);
        }
        if (width) {
            layoutStyles.push({ width });
        }
        return (react_1.default.createElement(react_native_1.TouchableOpacity, { style: layoutStyles, onPress: onPress },
            react_1.default.createElement(components_1.Text, { style: textStyles }, title)));
    }
}
exports.default = CheckButton;
const styles = react_native_1.StyleSheet.create({
    container: {
        minWidth: 50,
        padding: 10,
        marginTop: 15,
        marginRight: 10,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        borderRadius: 6,
        borderStyle: "solid",
        borderColor: "#999",
        borderWidth: 1,
    },
    container_checked: {
        backgroundColor: "#ea5504",
        borderColor: "#fff",
    },
    text: {
        color: "#333",
        fontSize: 14,
    },
    text_checked: {
        color: "#fff",
    },
});


/***/ }),

/***/ "./pages/demo/components/SectionTitle.tsx":
/*!************************************************!*\
  !*** ./pages/demo/components/SectionTitle.tsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(__webpack_require__(/*! react */ "../node_modules/react/index.js"));
const react_native_1 = __webpack_require__(/*! react-native */ "../node_modules/react-native-web/dist/cjs/index.js");
const components_1 = __webpack_require__(/*! ../../../components */ "./components/index.ts");
const utils_1 = __webpack_require__(/*! ../../../utils */ "./utils/index.ts");
class SectionTitle extends react_1.PureComponent {
    render() {
        return (react_1.default.createElement(react_native_1.View, { style: [styles.container, this.props.style] },
            react_1.default.createElement(react_native_1.View, { style: styles.icon }),
            react_1.default.createElement(components_1.Text, { style: styles.title }, this.props.title),
            react_1.default.createElement(react_native_1.View, { style: styles.sibling })));
    }
}
exports.default = SectionTitle;
const styles = react_native_1.StyleSheet.create({
    container: {
        width: "100%",
        height: 50,
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: 12,
        paddingRight: 21,
        borderBottomWidth: utils_1.PX.ratio(1),
        borderStyle: "solid",
        borderColor: "#eee",
    },
    borderBottom: {
        borderBottomWidth: 1,
        borderStyle: "solid",
        borderColor: "#eee",
    },
    icon: {
        width: 3,
        height: 15,
        backgroundColor: "#EA5504",
    },
    title: {
        color: "#333",
        fontSize: 16,
        marginLeft: 7.5,
    },
    sibling: {
        flex: 1,
    },
});


/***/ }),

/***/ "./pages/demo/index.ts":
/*!*****************************!*\
  !*** ./pages/demo/index.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Demo_1 = __importDefault(__webpack_require__(/*! ./pages/Demo */ "./pages/demo/pages/Demo.tsx"));
const Popup_1 = __importDefault(__webpack_require__(/*! ./pages/Popup */ "./pages/demo/pages/Popup.tsx"));
const Select_1 = __importDefault(__webpack_require__(/*! ./pages/Select */ "./pages/demo/pages/Select.tsx"));
const SelectStory_1 = __importDefault(__webpack_require__(/*! ./pages/SelectStory */ "./pages/demo/pages/SelectStory.tsx"));
const SelectRole_1 = __importDefault(__webpack_require__(/*! ./pages/SelectRole */ "./pages/demo/pages/SelectRole.tsx"));
const SelectResult_1 = __importDefault(__webpack_require__(/*! ./pages/SelectResult */ "./pages/demo/pages/SelectResult.tsx"));
const Gradient_1 = __importDefault(__webpack_require__(/*! ./pages/Gradient */ "./pages/demo/pages/Gradient.tsx"));
const Http_1 = __importDefault(__webpack_require__(/*! ./pages/Http */ "./pages/demo/pages/Http.tsx"));
exports.default = () => {
    const demoPages = [
        { name: "Demo", title: "示例首页", screen: Demo_1.default },
        { name: "DemoPopup", title: "弹窗", screen: Popup_1.default },
        { name: "Select", title: "开始选择", screen: Select_1.default },
        { name: "SelectStory", title: "选择一个电视剧", screen: SelectStory_1.default },
        { name: "SelectRole", title: "选择一个角色", screen: SelectRole_1.default },
        { name: "SelectResult", title: "选择结果", screen: SelectResult_1.default },
        { name: "Gradient", title: "渐变背景", screen: Gradient_1.default },
        { name: "Http", title: "Http请求", screen: Http_1.default },
    ];
    return { demoPages, demoInitialPage: "Demo" };
};


/***/ }),

/***/ "./pages/demo/pages/DB.ts":
/*!********************************!*\
  !*** ./pages/demo/pages/DB.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getRoleList = exports.getStoryList = void 0;
const StoryList = ["武林外传", "Friends", "请回答1988"];
const WulinWaiZhuan = [
    "佟掌柜",
    "白展堂",
    "郭芙蓉",
    "吕轻侯",
    "李秀莲",
    "莫小贝",
    "邢育森",
    "燕小六",
    "祝无双",
], Friends = [
    "Monica Geller",
    "Ross Geller",
    "Rachel Green",
    "Phoebe Buffay",
    "Joey Tribbiani",
    "Chandler Bing",
], PleaseAnswer1988 = [
    "成德善",
    "金正焕",
    "成善宇",
    "成宝拉",
    "金正峰",
    "刘东龙",
    "崔泽",
];
const getStoryList = () => StoryList;
exports.getStoryList = getStoryList;
const getRoleList = (storyIndex) => {
    switch (storyIndex) {
        case 0:
            return WulinWaiZhuan;
        case 1:
            return Friends;
        case 2:
            return PleaseAnswer1988;
        default:
            return [];
    }
};
exports.getRoleList = getRoleList;


/***/ }),

/***/ "./pages/demo/pages/Demo.tsx":
/*!***********************************!*\
  !*** ./pages/demo/pages/Demo.tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(__webpack_require__(/*! react */ "../node_modules/react/index.js"));
const react_native_1 = __webpack_require__(/*! react-native */ "../node_modules/react-native-web/dist/cjs/index.js");
const components_1 = __webpack_require__(/*! ../../../components */ "./components/index.ts");
const services_1 = __webpack_require__(/*! ../../../services */ "./services/index.ts");
const SectionTitle_1 = __importDefault(__webpack_require__(/*! ../components/SectionTitle */ "./pages/demo/components/SectionTitle.tsx"));
const Button_1 = __importDefault(__webpack_require__(/*! ../components/Button */ "./pages/demo/components/Button.tsx"));
class Demo extends react_1.Component {
    render() {
        return (react_1.default.createElement(react_native_1.ScrollView, { style: styles.container },
            react_1.default.createElement(components_1.SectionGap, null),
            react_1.default.createElement(components_1.Text, { style: styles.title }, "\u793A\u4F8B\u9996\u9875"),
            react_1.default.createElement(components_1.SectionGap, null),
            react_1.default.createElement(SectionTitle_1.default, { title: "\u5E38\u7528\u7EC4\u4EF6" }),
            react_1.default.createElement(react_native_1.View, { style: styles.menu },
                react_1.default.createElement(Button_1.default, { title: "\u5404\u79CD\u5F39\u7A97", style: styles.menu_button, onPress: () => services_1.Navigator.navigateTo("DemoPopup") }),
                react_1.default.createElement(Button_1.default, { title: "\u7BAD\u5934\u56FE\u6807", style: styles.menu_button }),
                react_1.default.createElement(Button_1.default, { title: "IPhonexShimView", style: styles.menu_button }),
                react_1.default.createElement(Button_1.default, { title: "\u6D4B\u91CF\u7EC4\u4EF6\u5C3A\u5BF8", style: styles.menu_button }),
                react_1.default.createElement(Button_1.default, { title: "\u6E10\u53D8\u80CC\u666FView", style: styles.menu_button, onPress: () => services_1.Navigator.navigateTo("Gradient") })),
            react_1.default.createElement(SectionTitle_1.default, { title: "\u9875\u9762\u5BFC\u822A" }),
            react_1.default.createElement(react_native_1.View, { style: styles.menu },
                react_1.default.createElement(Button_1.default, { title: "\u9009\u62E9\u7535\u89C6\u5267\u548C\u89D2\u8272", style: styles.menu_button, onPress: () => services_1.Navigator.navigateTo("Select") })),
            react_1.default.createElement(components_1.SectionGap, null),
            react_1.default.createElement(SectionTitle_1.default, { title: "Http" }),
            react_1.default.createElement(react_native_1.View, { style: styles.menu },
                react_1.default.createElement(Button_1.default, { title: "http\u8BF7\u6C42\u6D4B\u8BD5", style: styles.menu_button, onPress: () => services_1.Navigator.navigateTo("Http") }))));
    }
}
exports.default = Demo;
const styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    title: {
        color: "#333",
        fontSize: 22,
        textAlign: "center",
    },
    text: {
        color: "#999",
        fontSize: 13,
        marginTop: 10,
    },
    menu: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 15,
        flexWrap: "wrap",
    },
    menu_button: {
        marginTop: 10,
        marginRight: 15,
    },
});


/***/ }),

/***/ "./pages/demo/pages/Gradient.tsx":
/*!***************************************!*\
  !*** ./pages/demo/pages/Gradient.tsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(__webpack_require__(/*! react */ "../node_modules/react/index.js"));
const react_native_1 = __webpack_require__(/*! react-native */ "../node_modules/react-native-web/dist/cjs/index.js");
const components_1 = __webpack_require__(/*! ../../../components */ "./components/index.ts");
class Gradient extends react_1.Component {
    render() {
        return (react_1.default.createElement(react_native_1.ScrollView, { style: styles.container },
            react_1.default.createElement(components_1.SectionGap, null),
            react_1.default.createElement(components_1.Text, { style: styles.title }, "\u6E10\u53D8\u80CC\u666FView"),
            react_1.default.createElement(components_1.SectionGap, null),
            react_1.default.createElement(components_1.GradientView, { width: 280, height: 200, border: "8px", background: "linear-gradient(90deg, #f15b02 0%, #fb8818 100%)" },
                react_1.default.createElement(react_native_1.View, { style: styles.box },
                    react_1.default.createElement(components_1.Text, { style: styles.box_text }, "\u8FD9\u662F\u5B50\u7EC4\u4EF6"),
                    react_1.default.createElement(components_1.Text, { style: styles.box_text }, "width=280"),
                    react_1.default.createElement(components_1.Text, { style: styles.box_text }, "height=200"))),
            react_1.default.createElement(components_1.SectionGap, null),
            react_1.default.createElement(react_native_1.View, { style: styles.wrap },
                react_1.default.createElement(components_1.GradientView, { width: "70%", height: 200, border: "8px", background: "linear-gradient(90deg, #f15b02 0%, #fb8818 100%)" },
                    react_1.default.createElement(react_native_1.View, { style: styles.box },
                        react_1.default.createElement(components_1.Text, { style: styles.box_text }, "\u5305\u88F9\u5728\u4E00\u4E2A\u7EC4\u4EF6\u5185"),
                        react_1.default.createElement(components_1.Text, { style: styles.box_text }, "width=70%"),
                        react_1.default.createElement(components_1.Text, { style: styles.box_text }, "height=200")))),
            react_1.default.createElement(components_1.SectionGap, { height: 50 })));
    }
}
exports.default = Gradient;
const styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingHorizontal: 15,
    },
    title: {
        color: "#333",
        fontSize: 18,
        textAlign: "center",
    },
    box: {
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    box_text: {
        color: "#fff",
        fontSize: 17,
    },
    wrap: {
        width: "100%",
        height: 300,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.3)",
    },
    mutable: {
        width: "100%",
        paddingVertical: 20,
    },
});


/***/ }),

/***/ "./pages/demo/pages/Http.tsx":
/*!***********************************!*\
  !*** ./pages/demo/pages/Http.tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(__webpack_require__(/*! react */ "../node_modules/react/index.js"));
const react_native_1 = __webpack_require__(/*! react-native */ "../node_modules/react-native-web/dist/cjs/index.js");
const components_1 = __webpack_require__(/*! ../../../components */ "./components/index.ts");
const utils_1 = __webpack_require__(/*! ../../../utils */ "./utils/index.ts");
const Button_1 = __importDefault(__webpack_require__(/*! ../components/Button */ "./pages/demo/components/Button.tsx"));
/**
 * Http测试
 */
class Http extends react_1.Component {
    constructor() {
        super(...arguments);
        this.httpUrl = "http://api.github.com";
        this.jsonpUrl = "";
        this.state = { getResult: undefined, jsonpResult: undefined };
        this.onPressHttp = () => {
            // showLoading("开始get请求", false);
            this.setState({ getResult: "" });
            this.httpRequest = utils_1.createHttpRequest(10000);
            this.httpRequest
                .fetch(this.httpUrl, { method: "GET" })
                .then((r) => __awaiter(this, void 0, void 0, function* () {
                this.setState({ getResult: JSON.stringify(r) });
                if (r.response) {
                    const responseText = yield r.response.text(), { getResult } = this.state;
                    this.setState({
                        getResult: getResult + `responseText=${responseText}`,
                    });
                }
                else {
                    //   alert("response is null");
                }
            }))
                .catch((e) => this.setState({ getResult: JSON.stringify(e) }))
                .finally(() => {
                this.httpRequest = undefined;
                // hideLoading();
            });
        };
        this.onPressJsonp = () => {
            // showLoading("开始jsonp请求", false);
            this.setState({ jsonpResult: "" });
            this.jsonpRequest = utils_1.createJsonpRequest(12 * 1000);
            console.log(this.jsonpRequest.cancel);
            this.jsonpRequest
                .jsonp(this.jsonpUrl)
                .then((r) => this.setState({ jsonpResult: JSON.stringify(r) }))
                .catch((e) => this.setState({ jsonpResult: JSON.stringify(e) }))
                .finally(() => {
                this.jsonpRequest = undefined;
                // hideLoading();
            });
        };
        this.renderJsonp = () => {
            if (react_native_1.Platform.OS != "web") {
                return null;
            }
            return (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(components_1.SectionGap, null),
                react_1.default.createElement(components_1.Text, { style: styles.title },
                    "\u6D4B\u8BD5JSONP\u8BF7\u6C42",
                    this.jsonpUrl),
                react_1.default.createElement(components_1.Text, { style: styles.text }, this.state.jsonpResult || ""),
                react_1.default.createElement(components_1.SectionGap, { height: 10 }),
                react_1.default.createElement(react_native_1.View, { style: styles.next },
                    react_1.default.createElement(Button_1.default, { title: "\u53D1\u8D77\u8BF7\u6C42", style: styles.next_button, onPress: this.onPressJsonp }),
                    react_1.default.createElement(Button_1.default, { title: "\u53D6\u6D88\u8BF7\u6C42", style: styles.next_button, onPress: () => this.jsonpRequest && this.jsonpRequest.cancel() }))));
        };
    }
    render() {
        return (react_1.default.createElement(react_native_1.ScrollView, { style: styles.container },
            react_1.default.createElement(components_1.SectionGap, null),
            react_1.default.createElement(components_1.Text, { style: styles.title },
                "\u6D4B\u8BD5GET\u8BF7\u6C42",
                this.httpUrl),
            react_1.default.createElement(components_1.Text, { style: styles.text }, this.state.getResult || ""),
            react_1.default.createElement(components_1.SectionGap, { height: 10 }),
            react_1.default.createElement(react_native_1.View, { style: styles.next },
                react_1.default.createElement(Button_1.default, { title: "\u53D1\u8D77\u8BF7\u6C42", style: styles.next_button, onPress: this.onPressHttp }),
                react_1.default.createElement(Button_1.default, { title: "\u53D6\u6D88\u8BF7\u6C42", style: styles.next_button, onPress: () => this.httpRequest && this.httpRequest.cancel() })),
            this.renderJsonp()));
    }
}
exports.default = Http;
const styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    title: {
        color: "#333",
        fontSize: 18,
        textAlign: "center",
    },
    text: {
        color: "#999",
        fontSize: 13,
        marginTop: 10,
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 15,
        flexWrap: "wrap",
    },
    next: {
        width: "100%",
        alignItems: "center",
    },
    next_button: {
        width: "80%",
        marginTop: 10,
        marginRight: 15,
    },
    tips: {
        color: "#999",
        fontSize: 13,
        textAlign: "center",
    },
});


/***/ }),

/***/ "./pages/demo/pages/Popup.tsx":
/*!************************************!*\
  !*** ./pages/demo/pages/Popup.tsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(__webpack_require__(/*! react */ "../node_modules/react/index.js"));
const react_native_1 = __webpack_require__(/*! react-native */ "../node_modules/react-native-web/dist/cjs/index.js");
const components_1 = __webpack_require__(/*! ../../../components */ "./components/index.ts");
const Button_1 = __importDefault(__webpack_require__(/*! ../components/Button */ "./pages/demo/components/Button.tsx"));
class Demo extends react_1.Component {
    constructor() {
        super(...arguments);
        this.onPressDialog = () => components_1.Dialog("Welcome to use react-native-essential!");
        this.onPressDialogWithTwoButtons = () => components_1.Dialog("哦豁！我有两个按钮！！！", {
            title: "这里是标题",
            okText: "我是按钮1",
            cancelText: "我是按钮2",
            onOk: () => components_1.Dialog("【按钮1】Speaking：你点我干嘛？"),
            onCancel: () => components_1.Toast("轻轻地我走了..."),
        });
        this.onPressMultipleDialog = () => {
            components_1.MultiDialog({
                data: [
                    {
                        message: "我是弹窗1",
                        okText: "选我",
                        cancelText: "关闭",
                        onOk: () => components_1.Toast("选我弹窗【1】了"),
                    },
                    {
                        message: "我是弹窗2",
                        okText: "就这样吧",
                        onOk: () => components_1.Toast("选我弹窗【2】了"),
                    },
                    {
                        message: "我是弹窗3",
                        okText: "闪开，让我来",
                        cancelText: "拜拜了您内",
                        onOk: () => components_1.Toast("选我弹窗【3】了"),
                    },
                ],
            });
        };
        this.onPressToast1 = () => components_1.Toast("正常Toast是酱婶滴，从中间向上缓缓移动一点", {
            hideDuration: 3000,
        });
        this.onPressToast2 = () => components_1.Toast("介是pull-down模式，会从顶部缓慢下来", {
            mode: "pull-down",
            hideDuration: 3000,
        });
        this.showLoading = () => {
            components_1.showLoading("loading提示语，2秒后关闭", false);
            setTimeout(components_1.hideLoading, 2000);
        };
        this.onPressPopup = (align) => {
            let popup;
            const onPress = () => popup && popup.destroy();
            popup = components_1.Popup(this.renderPopup(align, onPress), { align, animated: true });
        };
        this.renderPopup = (align, onPress) => {
            const descGap = align == "center" ? 5 : 0;
            return (react_1.default.createElement(react_native_1.View, { style: [
                    styles.popup,
                    align == "bottom" ? { width: "100%", height: 300 } : null,
                ] },
                react_1.default.createElement(components_1.SectionGap, { height: 10 }),
                react_1.default.createElement(components_1.Text, { style: styles.popup_title }, "\u8FD9\u662F\u81EA\u5B9A\u4E49\u5F39\u7A97\uFF0C\u60A8\u53EF\u4EE5\u505A\u8FD9\u4E9B\u54E6"),
                react_1.default.createElement(components_1.SectionGap, { height: 10 }),
                react_1.default.createElement(react_native_1.View, { style: styles.popup_body },
                    react_1.default.createElement(components_1.Text, { style: styles.popup_desc }, "1. \u8BBE\u7F6E\u5F39\u7A97\u5185\u5BB9\u3001\u5F39\u7A97\u80CC\u666F\u989C\u8272\u548CzIndex\u503C\uFF0C\u751A\u81F3\u53EF\u4EE5\u5B8C\u5168\u81EA\u5B9A\u4E49\u80CC\u666F\u6837\u5F0F\u3002"),
                    react_1.default.createElement(components_1.SectionGap, { height: descGap }),
                    react_1.default.createElement(components_1.Text, { style: styles.popup_desc }, "2. \u5F39\u7A97\u5185\u5BB9\u5FC5\u987B\u662F\u4E2A\u7EC4\u4EF6\uFF0C\u7EC4\u4EF6\u5BBD\u9AD8\u90FD\u652F\u6301\u6570\u503C\u548C\u6BD4\u4F8B\u3002"),
                    react_1.default.createElement(components_1.SectionGap, { height: descGap }),
                    react_1.default.createElement(components_1.Text, { style: styles.popup_desc }, "3. Popup\u51FD\u6570\u521B\u5EFA\u4E86\u4E00\u4E2A\u5F39\u7A97\u540E\uFF0C\u4F1A\u8FD4\u56DE\u8BE5\u5F39\u7A97\u7684\u5BF9\u8C61\uFF0C\u901A\u8FC7\u8C03\u7528\u8BE5\u5BF9\u8C61\u7684destroy\u65B9\u6CD5\u53EF\u4EE5\u9500\u6BC1\u521B\u5EFA\u7684\u5F39\u7A97\u3002\u6240\u4EE5\uFF0C\u81EA\u5DF1\u7684\u4E8B\u60C5\u81EA\u5DF1\u8981\u8D1F\u8D23\u54E6\u3002"),
                    react_1.default.createElement(components_1.SectionGap, { height: descGap }),
                    react_1.default.createElement(components_1.Text, { style: styles.popup_desc }, "4. \u81EA\u5B9A\u4E49\u5F39\u7A97\u76EE\u524D\u53EA\u652F\u6301\u4E24\u79CD\u5BF9\u9F50\u65B9\u5F0F\uFF1A\u5C45\u4E2D\u5BF9\u9F50\u548C\u5E95\u90E8\u5BF9\u9F50\u3002"),
                    react_1.default.createElement(components_1.SectionGap, { height: descGap }),
                    react_1.default.createElement(components_1.Text, { style: styles.popup_desc }, "5. \u81EA\u5B9A\u4E49\u5F39\u7A97\u8FD8\u652F\u6301\u52A8\u753B\uFF0C\u4F46\u9ED8\u8BA4\u6CA1\u6709\u5F00\u542F\uFF0C\u6709\u9700\u8981\u7684\u5C0F\u4F19\u4F34\u53EF\u4EE5\u5F00\u542F\u54E6\uFF01")),
                react_1.default.createElement(react_native_1.View, { style: styles.popup_space }),
                react_1.default.createElement(react_native_1.TouchableOpacity, { style: styles.popup_button, onPress: onPress },
                    react_1.default.createElement(components_1.Text, { style: styles.popup_button_text }, "\u6211\u77E5\u9053\u4E86"))));
        };
    }
    render() {
        return (react_1.default.createElement(react_native_1.ScrollView, { style: styles.container, contentContainerStyle: styles.box },
            react_1.default.createElement(components_1.SectionGap, null),
            react_1.default.createElement(Button_1.default, { title: "\u666E\u901ADialog", style: styles.button, onPress: this.onPressDialog }),
            react_1.default.createElement(Button_1.default, { title: "\u6709\u4E24\u4E2A\u6309\u94AE\u7684Dialog", style: styles.button, onPress: this.onPressDialogWithTwoButtons }),
            react_1.default.createElement(Button_1.default, { title: "MultiDialog", style: styles.button, onPress: this.onPressMultipleDialog }),
            react_1.default.createElement(react_native_1.View, { style: styles.row },
                react_1.default.createElement(Button_1.default, { title: "Toast(\u6B63\u5E38\u6A21\u5F0F)", style: styles.col, onPress: this.onPressToast1 }),
                react_1.default.createElement(Button_1.default, { title: "Toast(pull-down\u6A21\u5F0F)", style: styles.col, onPress: this.onPressToast2 })),
            react_1.default.createElement(Button_1.default, { title: "\u663E\u793ALoading", style: styles.button, onPress: this.showLoading }),
            react_1.default.createElement(Button_1.default, { title: "\u81EA\u5B9A\u4E49\u5F39\u7A97\uFF08\u5C45\u4E2D\u5BF9\u9F50\uFF09", style: styles.button, onPress: () => this.onPressPopup("center") }),
            react_1.default.createElement(Button_1.default, { title: "\u81EA\u5B9A\u4E49\u5F39\u7A97\uFF08\u5E95\u90E8\u5BF9\u9F50\uFF09", style: styles.button, onPress: () => this.onPressPopup("bottom") })));
    }
}
exports.default = Demo;
const styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    box: {
        alignItems: "center",
    },
    button: {
        marginTop: 15,
        paddingHorizontal: 50,
    },
    row: {
        width: "100%",
        flexDirection: "row",
        paddingHorizontal: 10,
        justifyContent: "space-evenly",
    },
    col: {
        marginTop: 15,
        paddingHorizontal: 20,
    },
    popup: {
        width: "80%",
        height: 360,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
    },
    popup_title: {
        color: "#333",
        fontSize: 18,
    },
    popup_body: {
        width: "100%",
        paddingHorizontal: 15,
        paddingTop: 10,
    },
    popup_desc: {
        color: "#666",
        fontSize: 13,
        lineHeight: 18,
    },
    popup_space: {
        flex: 1,
    },
    popup_button: {
        width: "100%",
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderTopWidth: 1,
        borderStyle: "solid",
        borderColor: "#eee",
    },
    popup_button_text: {
        color: "#333",
        fontSize: 15,
    },
});


/***/ }),

/***/ "./pages/demo/pages/Select.tsx":
/*!*************************************!*\
  !*** ./pages/demo/pages/Select.tsx ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(__webpack_require__(/*! react */ "../node_modules/react/index.js"));
const react_native_1 = __webpack_require__(/*! react-native */ "../node_modules/react-native-web/dist/cjs/index.js");
const components_1 = __webpack_require__(/*! ../../../components */ "./components/index.ts");
const services_1 = __webpack_require__(/*! ../../../services */ "./services/index.ts");
const SectionTitle_1 = __importDefault(__webpack_require__(/*! ../components/SectionTitle */ "./pages/demo/components/SectionTitle.tsx"));
const Button_1 = __importDefault(__webpack_require__(/*! ../components/Button */ "./pages/demo/components/Button.tsx"));
const CheckButton_1 = __importDefault(__webpack_require__(/*! ../components/CheckButton */ "./pages/demo/components/CheckButton.tsx"));
class Select extends react_1.Component {
    constructor() {
        super(...arguments);
        this.state = {
            storyIndex: this.props.navigation.getParam("storyIndex", ""),
            storyName: decodeURIComponent(this.props.navigation.getParam("storyName", "")),
            roleName: decodeURIComponent(this.props.navigation.getParam("roleName", "")),
        };
        this.onPressStory = () => services_1.Navigator.navigateTo("SelectStory");
        this.onPressRole = () => services_1.Navigator.navigateTo("SelectRole", { storyIndex: this.state.storyIndex });
        this.onPressNext = () => {
            const { storyName, roleName } = this.state;
            if (!storyName) {
                components_1.Dialog("请先选择一个电视剧！");
                return;
            }
            if (!roleName) {
                components_1.Dialog("请先选择一个角色！");
                return;
            }
            services_1.Navigator.navigateTo("SelectResult", {
                storyName: encodeURIComponent(storyName),
                roleName: encodeURIComponent(roleName),
            }, "Demo");
        };
        this.checkShouldSetWillBack = () => {
            !!this.state.storyName && services_1.Navigator.setWillBack(this.onBack);
        };
        this.onBack = () => {
            return new Promise((resolve) => {
                components_1.Dialog("您确定不玩了吗？", {
                    okText: "不玩了",
                    cancelText: "呃，我再想想",
                    onOk: () => resolve(true),
                    onCancel: () => resolve(false),
                });
            });
        };
    }
    componentDidMount() {
        this.checkShouldSetWillBack();
        if (react_native_1.Platform.OS != "web") {
            const navigation = this.props.navigation;
            this.willBlurSubscription = navigation.addListener("willBlur", () => {
                if (this.willFocusSubscription) {
                    return;
                }
                this.willFocusSubscription = navigation.addListener("willFocus", () => {
                    const nav = this.props.navigation, storyIndex = nav.getParam("storyIndex", ""), storyName = decodeURIComponent(nav.getParam("storyName", "")), roleName = decodeURIComponent(nav.getParam("roleName", "")), storyChanged = storyIndex != this.state.storyIndex;
                    this.setState({
                        storyIndex,
                        storyName,
                        roleName: storyChanged ? undefined : roleName,
                    }, this.checkShouldSetWillBack);
                });
            });
        }
    }
    componentWillUnmount() {
        if (this.willBlurSubscription) {
            this.willBlurSubscription.remove();
            this.willBlurSubscription = undefined;
        }
        if (this.willFocusSubscription) {
            this.willFocusSubscription.remove();
            this.willFocusSubscription = undefined;
        }
    }
    render() {
        const { storyName, roleName } = this.state;
        let selectRoleComponent, backTipsComponent;
        if (storyName) {
            selectRoleComponent = (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(components_1.SectionGap, { height: 45 }),
                react_1.default.createElement(SectionTitle_1.default, { title: "\u9009\u62E9\u89D2\u8272" }),
                react_1.default.createElement(CheckButton_1.default, { checked: !!roleName, title: roleName || "点我去选择一个自己喜欢的角色哦", onPress: this.onPressRole })));
            backTipsComponent = (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(components_1.SectionGap, { height: 45 }),
                react_1.default.createElement(components_1.Text, { style: styles.tips }, "\u73B0\u5728\u76F4\u63A5\u70B9\u8FD4\u56DE\u6309\u94AE\uFF0C\u6709\u610F\u5916\u6536\u83B7\u54E6\uFF01\uFF01\uFF01")));
        }
        return (react_1.default.createElement(react_native_1.ScrollView, { style: styles.container },
            react_1.default.createElement(components_1.SectionGap, null),
            react_1.default.createElement(components_1.Text, { style: styles.title }, "\u8BF7\u9009\u62E9\u4E00\u4E2A\u4F60\u559C\u6B22\u7684\u7535\u89C6\u5267\u548C\u91CC\u9762\u7684\u89D2\u8272"),
            react_1.default.createElement(components_1.SectionGap, { height: 20 }),
            react_1.default.createElement(SectionTitle_1.default, { title: "\u9009\u62E9\u7535\u89C6\u5267" }),
            react_1.default.createElement(CheckButton_1.default, { checked: !!storyName, title: storyName || "点我去选择一个自己最爱的电视剧", onPress: this.onPressStory }),
            selectRoleComponent,
            backTipsComponent,
            react_1.default.createElement(components_1.SectionGap, null),
            react_1.default.createElement(react_native_1.View, { style: styles.next },
                react_1.default.createElement(Button_1.default, { title: "\u53BB\u67E5\u67E5\u81EA\u5DF1\u7684\u9009\u62E9\u7ED3\u679C\u5427", style: styles.next_button, onPress: this.onPressNext }))));
    }
}
exports.default = Select;
const styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingHorizontal: 15,
    },
    title: {
        color: "#333",
        fontSize: 18,
        textAlign: "center",
    },
    text: {
        color: "#999",
        fontSize: 13,
        marginTop: 10,
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 15,
        flexWrap: "wrap",
    },
    next: {
        width: "100%",
        alignItems: "center",
    },
    next_button: {
        width: "80%",
        marginTop: 10,
        marginRight: 15,
    },
    tips: {
        color: "#999",
        fontSize: 13,
        textAlign: "center",
    },
});


/***/ }),

/***/ "./pages/demo/pages/SelectResult.tsx":
/*!*******************************************!*\
  !*** ./pages/demo/pages/SelectResult.tsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(__webpack_require__(/*! react */ "../node_modules/react/index.js"));
const react_native_1 = __webpack_require__(/*! react-native */ "../node_modules/react-native-web/dist/cjs/index.js");
const components_1 = __webpack_require__(/*! ../../../components */ "./components/index.ts");
const services_1 = __webpack_require__(/*! ../../../services */ "./services/index.ts");
const Button_1 = __importDefault(__webpack_require__(/*! ../components/Button */ "./pages/demo/components/Button.tsx"));
class SelectResult extends react_1.Component {
    render() {
        const navigation = this.props.navigation;
        return (react_1.default.createElement(react_native_1.ScrollView, { style: styles.container },
            react_1.default.createElement(components_1.SectionGap, null),
            react_1.default.createElement(components_1.Text, { style: styles.title }, decodeURIComponent(navigation.getParam("storyName"))),
            react_1.default.createElement(components_1.SectionGap, { height: 20 }),
            react_1.default.createElement(components_1.Text, { style: styles.title }, decodeURIComponent(navigation.getParam("roleName"))),
            react_1.default.createElement(components_1.SectionGap, { height: 20 }),
            react_1.default.createElement(react_native_1.View, { style: styles.next },
                react_1.default.createElement(Button_1.default, { title: "\u8FD4\u56DE", style: styles.next_button, onPress: services_1.Navigator.goBack }))));
    }
}
exports.default = SelectResult;
const styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    title: {
        color: "#333",
        fontSize: 18,
        textAlign: "center",
    },
    text: {
        color: "#999",
        fontSize: 13,
        marginTop: 10,
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 15,
        flexWrap: "wrap",
    },
    next: {
        width: "100%",
        alignItems: "center",
    },
    next_button: {
        width: "80%",
        marginTop: 10,
        marginRight: 15,
    },
    tips: {
        color: "#999",
        fontSize: 13,
        textAlign: "center",
    },
});


/***/ }),

/***/ "./pages/demo/pages/SelectRole.tsx":
/*!*****************************************!*\
  !*** ./pages/demo/pages/SelectRole.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(__webpack_require__(/*! react */ "../node_modules/react/index.js"));
const react_native_1 = __webpack_require__(/*! react-native */ "../node_modules/react-native-web/dist/cjs/index.js");
const components_1 = __webpack_require__(/*! ../../../components */ "./components/index.ts");
const services_1 = __webpack_require__(/*! ../../../services */ "./services/index.ts");
const Button_1 = __importDefault(__webpack_require__(/*! ../components/Button */ "./pages/demo/components/Button.tsx"));
const CheckButton_1 = __importDefault(__webpack_require__(/*! ../components/CheckButton */ "./pages/demo/components/CheckButton.tsx"));
const DB_1 = __webpack_require__(/*! ./DB */ "./pages/demo/pages/DB.ts");
class SelectRole extends react_1.Component {
    constructor() {
        super(...arguments);
        this.state = { index: undefined, name: "" };
        this.storyIndex = this.props.navigation.getParam("storyIndex");
        this.roleList = DB_1.getRoleList(Number(this.storyIndex));
        this.onPress = (index, name) => {
            this.setState({ index, name });
        };
        this.onPressNext = () => {
            const { index, name } = this.state;
            if (index == undefined) {
                components_1.Dialog("请先选择一个角色！");
                return;
            }
            services_1.Navigator.replace("Select", {
                roleIndex: index,
                roleName: encodeURIComponent(name),
            });
        };
    }
    render() {
        const { index } = this.state;
        return (react_1.default.createElement(react_native_1.ScrollView, { style: styles.container },
            react_1.default.createElement(components_1.SectionGap, null),
            react_1.default.createElement(components_1.Text, { style: styles.title }, "\u8BF7\u9009\u62E9\u4E00\u4E2A\u4F60\u559C\u6B22\u7684\u89D2\u8272"),
            react_1.default.createElement(components_1.SectionGap, { height: 20 }),
            react_1.default.createElement(react_native_1.View, { style: styles.row }, this.roleList.map((name, i) => (react_1.default.createElement(CheckButton_1.default, { key: i, title: name, checked: i == index, onPress: () => this.onPress(i, name) })))),
            react_1.default.createElement(components_1.SectionGap, { height: 15 }),
            react_1.default.createElement(react_native_1.View, { style: styles.next },
                react_1.default.createElement(Button_1.default, { title: "\u9009\u597D\u4E86", style: styles.next_button, onPress: this.onPressNext }))));
    }
}
exports.default = SelectRole;
const styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    title: {
        color: "#333",
        fontSize: 18,
        textAlign: "center",
    },
    text: {
        color: "#999",
        fontSize: 13,
        marginTop: 10,
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 15,
        flexWrap: "wrap",
    },
    next: {
        width: "100%",
        alignItems: "center",
    },
    next_button: {
        width: "80%",
        marginTop: 10,
        marginRight: 15,
    },
    tips: {
        color: "#999",
        fontSize: 13,
        textAlign: "center",
    },
});


/***/ }),

/***/ "./pages/demo/pages/SelectStory.tsx":
/*!******************************************!*\
  !*** ./pages/demo/pages/SelectStory.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(__webpack_require__(/*! react */ "../node_modules/react/index.js"));
const react_native_1 = __webpack_require__(/*! react-native */ "../node_modules/react-native-web/dist/cjs/index.js");
const components_1 = __webpack_require__(/*! ../../../components */ "./components/index.ts");
const services_1 = __webpack_require__(/*! ../../../services */ "./services/index.ts");
const Button_1 = __importDefault(__webpack_require__(/*! ../components/Button */ "./pages/demo/components/Button.tsx"));
const CheckButton_1 = __importDefault(__webpack_require__(/*! ../components/CheckButton */ "./pages/demo/components/CheckButton.tsx"));
const DB_1 = __webpack_require__(/*! ./DB */ "./pages/demo/pages/DB.ts");
class SelectStory extends react_1.Component {
    constructor() {
        super(...arguments);
        this.state = { index: undefined, name: "" };
        this.onPress = (index, name) => {
            this.setState({ index, name });
        };
        this.onPressNext = () => {
            const { index, name } = this.state;
            if (index == undefined) {
                components_1.Dialog("请先选择一个电视剧！");
                return;
            }
            services_1.Navigator.replace("Select", {
                storyIndex: index,
                storyName: encodeURIComponent(name),
            });
        };
    }
    render() {
        const { index } = this.state;
        return (react_1.default.createElement(react_native_1.ScrollView, { style: styles.container },
            react_1.default.createElement(components_1.SectionGap, null),
            react_1.default.createElement(components_1.Text, { style: styles.title }, "\u8BF7\u9009\u62E9\u4E00\u4E2A\u4F60\u559C\u6B22\u7684\u8FDE\u7EED\u5267"),
            react_1.default.createElement(components_1.SectionGap, { height: 20 }),
            react_1.default.createElement(react_native_1.View, { style: styles.row }, DB_1.getStoryList().map((name, i) => (react_1.default.createElement(CheckButton_1.default, { key: i, title: name, checked: i == index, onPress: () => this.onPress(i, name) })))),
            react_1.default.createElement(components_1.SectionGap, { height: 15 }),
            react_1.default.createElement(react_native_1.View, { style: styles.next },
                react_1.default.createElement(Button_1.default, { title: "\u9009\u597D\u4E86", style: styles.next_button, onPress: this.onPressNext }))));
    }
}
exports.default = SelectStory;
const styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    title: {
        color: "#333",
        fontSize: 18,
        textAlign: "center",
    },
    text: {
        color: "#999",
        fontSize: 13,
        marginTop: 10,
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 15,
        flexWrap: "wrap",
    },
    next: {
        width: "100%",
        alignItems: "center",
    },
    next_button: {
        width: "80%",
        marginTop: 10,
        marginRight: 15,
    },
    tips: {
        color: "#999",
        fontSize: 13,
        textAlign: "center",
    },
});


/***/ }),

/***/ "./pages/index.ts":
/*!************************!*\
  !*** ./pages/index.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const demo_1 = __importDefault(__webpack_require__(/*! ./demo */ "./pages/demo/index.ts"));
exports.default = (props) => {
    const { demoPages, demoInitialPage } = demo_1.default();
    const pages = [...demoPages];
    let initialPage = demoInitialPage;
    // 当有page参数时，查找其指定的页面是否存在
    if (!!props.page) {
        const findPage = props.page;
        const targetPage = pages.filter((p) => p.name.toLowerCase() == findPage.toLowerCase())[0];
        if (targetPage) {
            initialPage = targetPage.name;
        }
    }
    return { pages, initialPage };
};


/***/ }),

/***/ "./services/essential.ts":
/*!*******************************!*\
  !*** ./services/essential.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _1_0_1 = __webpack_require__(/*! react-native-essential/services/Emitter/@1.0 */ "../node_modules/react-native-essential/services/Emitter/@1.0/index.tsx");
Object.defineProperty(exports, "EmitterService", { enumerable: true, get: function () { return _1_0_1.EmitterService; } });
Object.defineProperty(exports, "EmitterEventSubscription", { enumerable: true, get: function () { return _1_0_1.EmitterEventSubscription; } });
Object.defineProperty(exports, "Emitter", { enumerable: true, get: function () { return _1_0_1.Emitter; } });
var _1_0_2 = __webpack_require__(/*! react-native-essential/services/NativeEvent/@1.0 */ "../node_modules/react-native-essential/services/NativeEvent/@1.0/index.tsx");
Object.defineProperty(exports, "NativeEventService", { enumerable: true, get: function () { return _1_0_2.NativeEventService; } });
Object.defineProperty(exports, "NativeEvent", { enumerable: true, get: function () { return _1_0_2.NativeEvent; } });
var _3_x_1 = __webpack_require__(/*! react-native-essential/services/ReactNavigations/@3.x */ "../node_modules/react-native-essential/services/ReactNavigations/@3.x/index.web.tsx");
Object.defineProperty(exports, "Navigator", { enumerable: true, get: function () { return _3_x_1.Navigator; } });
Object.defineProperty(exports, "NavigatorActions", { enumerable: true, get: function () { return _3_x_1.NavigatorActions; } });
Object.defineProperty(exports, "NavigatorService", { enumerable: true, get: function () { return _3_x_1.NavigatorService; } });


/***/ }),

/***/ "./services/index.ts":
/*!***************************!*\
  !*** ./services/index.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(/*! ./essential */ "./services/essential.ts"), exports);


/***/ }),

/***/ "./utils/essential.ts":
/*!****************************!*\
  !*** ./utils/essential.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionCache = exports.AppCache = void 0;
const app_json_1 = __webpack_require__(/*! ../../app.json */ "../app.json");
var _1_0_1 = __webpack_require__(/*! react-native-essential/utils/uuid/@1.0 */ "../node_modules/react-native-essential/utils/uuid/@1.0/index.ts");
Object.defineProperty(exports, "Uuid", { enumerable: true, get: function () { return _1_0_1.default; } });
var _1_0_2 = __webpack_require__(/*! react-native-essential/utils/pipeline/@1.0 */ "../node_modules/react-native-essential/utils/pipeline/@1.0/index.ts");
Object.defineProperty(exports, "pipeline", { enumerable: true, get: function () { return _1_0_2.default; } });
var _1_0_3 = __webpack_require__(/*! react-native-essential/utils/px/@1.0 */ "../node_modules/react-native-essential/utils/px/@1.0/index.ts");
Object.defineProperty(exports, "PX", { enumerable: true, get: function () { return _1_0_3.default; } });
var _1_0_4 = __webpack_require__(/*! react-native-essential/utils/isIPad/@1.0 */ "../node_modules/react-native-essential/utils/isIPad/@1.0/index.web.ts");
Object.defineProperty(exports, "iPad", { enumerable: true, get: function () { return _1_0_4.default; } });
var _1_0_5 = __webpack_require__(/*! react-native-essential/utils/isIPhoneX/@1.0 */ "../node_modules/react-native-essential/utils/isIPhoneX/@1.0/index.web.ts");
Object.defineProperty(exports, "isIPhoneX", { enumerable: true, get: function () { return _1_0_5.default; } });
var _1_0_6 = __webpack_require__(/*! react-native-essential/utils/getQueryString/@1.0 */ "../node_modules/react-native-essential/utils/getQueryString/@1.0/index.web.ts");
Object.defineProperty(exports, "getQueryString", { enumerable: true, get: function () { return _1_0_6.default; } });
var _1_0_7 = __webpack_require__(/*! react-native-essential/utils/string2/@1.0 */ "../node_modules/react-native-essential/utils/string2/@1.0/index.ts");
Object.defineProperty(exports, "String2", { enumerable: true, get: function () { return _1_0_7.default; } });
Object.defineProperty(exports, "String2Class", { enumerable: true, get: function () { return _1_0_7.String2Class; } });
var _1_0_8 = __webpack_require__(/*! react-native-essential/utils/number2/@1.0 */ "../node_modules/react-native-essential/utils/number2/@1.0/index.ts");
Object.defineProperty(exports, "Number2", { enumerable: true, get: function () { return _1_0_8.default; } });
Object.defineProperty(exports, "Number2Class", { enumerable: true, get: function () { return _1_0_8.Number2Class; } });
var _1_0_9 = __webpack_require__(/*! react-native-essential/utils/date2/@1.0 */ "../node_modules/react-native-essential/utils/date2/@1.0/index.ts");
Object.defineProperty(exports, "Date2", { enumerable: true, get: function () { return _1_0_9.default; } });
Object.defineProperty(exports, "Date2Class", { enumerable: true, get: function () { return _1_0_9.Date2Class; } });
const _1_0_10 = __importDefault(__webpack_require__(/*! react-native-essential/utils/appCache/@1.0 */ "../node_modules/react-native-essential/utils/appCache/@1.0/index.web.ts"));
exports.AppCache = _1_0_10.default(app_json_1.name);
const _1_0_11 = __importDefault(__webpack_require__(/*! react-native-essential/utils/sessionCache/@1.0 */ "../node_modules/react-native-essential/utils/sessionCache/@1.0/index.web.ts"));
exports.SessionCache = _1_0_11.default(app_json_1.name);
var createHttpRequest_1 = __webpack_require__(/*! react-native-essential/utils/http/@1.0/createHttpRequest */ "../node_modules/react-native-essential/utils/http/@1.0/createHttpRequest.ts");
Object.defineProperty(exports, "createHttpRequest", { enumerable: true, get: function () { return createHttpRequest_1.createHttpRequest; } });
var createJsonpRequest_1 = __webpack_require__(/*! react-native-essential/utils/http/@1.0/createJsonpRequest */ "../node_modules/react-native-essential/utils/http/@1.0/createJsonpRequest.ts");
Object.defineProperty(exports, "createJsonpRequest", { enumerable: true, get: function () { return createJsonpRequest_1.createJsonpRequest; } });


/***/ }),

/***/ "./utils/index.ts":
/*!************************!*\
  !*** ./utils/index.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(/*! ./essential */ "./utils/essential.ts"), exports);


/***/ })

},[["../index.web.js","manifest","lib"]]]);
//# sourceMappingURL=main.bundle.js.map