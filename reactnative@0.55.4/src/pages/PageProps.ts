import { NavigationState, NavigationScreenProp } from "react-navigation";

/**
 * 页面属性
 */
export default interface PageProps {
  /**
   * 导航对象
   */
  navigation: NavigationScreenProp<NavigationState>;
}
