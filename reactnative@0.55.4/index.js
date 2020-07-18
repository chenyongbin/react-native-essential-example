import { AppRegistry } from "react-native";
import { appKey } from "./app.json";
import App from "./src/App";

/** 非开发环境，禁用控制台打印 */
if (__DEV__ === false) {
  global.console = {
    info: () => {},
    log: () => {},
    warn: () => {},
    debug: () => {},
    error: () => {},
  };
}

console.disableYellowBox = true;
AppRegistry.registerComponent(appKey, () => App);
