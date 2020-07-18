import { Platform, AppRegistry } from "react-native";
import { appKey } from "./app.json";
import App from "./src/App";

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

  if (Platform.OS != "web") {
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

AppRegistry.registerComponent(appKey, () => App);
AppRegistry.runApplication(appKey, {
  initialProps: convertParamsToProps(),
  rootTag: document.getElementById("root"),
});
