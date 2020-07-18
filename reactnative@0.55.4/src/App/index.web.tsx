import React, { Component } from "react";
import { NavigationParams } from "react-navigation";

import { name, h5SubPath } from "../../app.json";

import {
  EmitterService,
  NavigatorService,
  NavigatorActions,
} from "../services";
import { SessionCache } from "../utils";
import getPagesConfig from "../pages";

import AppProps from "./AppProps";
import AppErrorBoundary from "./AppErrorBoundary";

/**
 * 页面根组件
 */
export default class App extends Component<AppProps> {
  private hasEnteredCacheKey = "has_entered";
  private firstEntry = SessionCache.get(this.hasEnteredCacheKey) != "1";

  componentDidMount() {
    this.firstEntry && SessionCache.set(this.hasEnteredCacheKey, "1");
  }

  setTitle = (title: string) => {};

  exitApp = () => {
    SessionCache.clear();
  };

  setBackHandler = (goBack: () => void) => {
    (window as any).goBack = goBack;
  };

  onPageChange = (
    action: NavigatorActions,
    page: string,
    params?: NavigationParams
  ) => {};

  render() {
    return (
      <AppErrorBoundary>
        <EmitterService />
        <NavigatorService
          appName={name}
          exitApp={this.exitApp}
          onPageChange={this.onPageChange}
          web={{
            firstEntry: this.firstEntry,
            subPath: h5SubPath,
            setTitle: this.setTitle,
            setBackHandler: this.setBackHandler,
          }}
          {...getPagesConfig(this.props)}
        />
      </AppErrorBoundary>
    );
  }
}
