import React, { Component } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import {
  NavigationParams,
  NavigationAction,
  NavigationState,
  NavigationScreenConfig,
  NavigationScreenOptions,
} from "react-navigation";

import { name } from "../../app.json";
import {
  EmitterService,
  NativeEventService,
  NavigatorService,
  NavigatorActions,
  Navigator,
} from "../services";
import { SessionCache } from "../utils";
import { Text } from "../components";

import getPagesConfig from "../pages";

import AppProps from "./AppProps";
import AppErrorBoundary from "./AppErrorBoundary";

class HeaderLeft extends Component {
  render() {
    return (
      <TouchableOpacity
        style={{
          width: 40,
          height: "100%",
          backgroundColor: "#ea5504",
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={Navigator.goBack}
      >
        <Text style={{ color: "#fff", fontSize: 15 }}>返回</Text>
      </TouchableOpacity>
    );
  }
}

/**
 * 页面根组件
 */
export default class App extends Component<AppProps> {
  onPageChange = (
    action: NavigatorActions,
    page: string,
    params?: NavigationParams
  ) => {};

  onNavigationStateChange = (
    prev: NavigationState,
    next: NavigationState,
    action: NavigationAction
  ) => {};

  exitApp = () => {
    SessionCache.clear();
  };

  defaultNavigationOptions: NavigationScreenConfig<NavigationScreenOptions> = ({
    navigation,
  }) => {
    return { headerLeft: <HeaderLeft /> };
  };

  render() {
    return (
      <AppErrorBoundary>
        <EmitterService />
        <NativeEventService />
        <NavigatorService
          appName={name}
          exitApp={this.exitApp}
          onPageChange={this.onPageChange}
          onNavigationStateChange={this.onNavigationStateChange}
          defaultNavigationOptions={this.defaultNavigationOptions}
          {...getPagesConfig(this.props)}
        />
      </AppErrorBoundary>
    );
  }
}
