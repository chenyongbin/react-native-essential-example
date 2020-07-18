import { Page } from "../services";
import AppProps from "../App/AppProps";

import getDemoPagesConfig from "./demo";

export default (props: AppProps) => {
  const { demoPages, demoInitialPage } = getDemoPagesConfig();

  const pages: Page[] = [...demoPages];
  let initialPage = demoInitialPage;

  // 当有page参数时，查找其指定的页面是否存在
  if (!!props.page) {
    const findPage = props.page;
    const targetPage = pages.filter(
      (p) => p.name.toLowerCase() == findPage.toLowerCase()
    )[0];
    if (targetPage) {
      initialPage = targetPage.name;
    }
  }

  return { pages, initialPage };
};
