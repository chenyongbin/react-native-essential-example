import { Page } from "../../services";
import Demo from "./pages/Demo";
import DemoPopup from "./pages/Popup";
import Select from "./pages/Select";
import SelectStory from "./pages/SelectStory";
import SelectRole from "./pages/SelectRole";
import SelectResult from "./pages/SelectResult";
import Gradient from "./pages/Gradient";
import Http from "./pages/Http";

export default () => {
  const demoPages: Page[] = [
    { name: "Demo", title: "示例首页", screen: Demo },
    { name: "DemoPopup", title: "弹窗", screen: DemoPopup },
    { name: "Select", title: "开始选择", screen: Select },
    { name: "SelectStory", title: "选择一个电视剧", screen: SelectStory },
    { name: "SelectRole", title: "选择一个角色", screen: SelectRole },
    { name: "SelectResult", title: "选择结果", screen: SelectResult },
    { name: "Gradient", title: "渐变背景", screen: Gradient },
    { name: "Http", title: "Http请求", screen: Http },
  ];

  return { demoPages, demoInitialPage: "Demo" };
};
