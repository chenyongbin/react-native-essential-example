import React, { Component, ErrorInfo } from "react";
import { View } from "react-native";

/**
 * App错误边界，用于捕获渲染异常并记录到日志
 */
export default class AppErrorBoundary extends Component {
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error(
      `组件渲染发生错误，错误消息=${error.message}，出错的组件栈=${errorInfo.componentStack}`
    );
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#fff" }}>
        {this.props.children}
      </View>
    );
  }
}
