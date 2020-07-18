import React, { Component } from "react";
import { StyleSheet, ScrollView, View } from "react-native";

import { Text, SectionGap } from "../../../components";
import { Navigator } from "../../../services";

import PageProps from "../../PageProps";
import SectionTitle from "../components/SectionTitle";
import Button from "../components/Button";

export default class Demo extends Component<PageProps> {
  render() {
    return (
      <ScrollView style={styles.container}>
        <SectionGap />
        <Text style={styles.title}>示例首页</Text>
        <SectionGap />
        <SectionTitle title="常用组件" />
        <View style={styles.menu}>
          <Button
            title="各种弹窗"
            style={styles.menu_button}
            onPress={() => Navigator.navigateTo("DemoPopup")}
          />
          <Button title="箭头图标" style={styles.menu_button} />
          <Button title="IPhonexShimView" style={styles.menu_button} />
          <Button title="测量组件尺寸" style={styles.menu_button} />
          <Button
            title="渐变背景View"
            style={styles.menu_button}
            onPress={() => Navigator.navigateTo("Gradient")}
          />
        </View>
        <SectionTitle title="页面导航" />
        <View style={styles.menu}>
          <Button
            title="选择电视剧和角色"
            style={styles.menu_button}
            onPress={() => Navigator.navigateTo("Select")}
          />
        </View>
        <SectionGap />
        <SectionTitle title="Http" />
        <View style={styles.menu}>
          <Button
            title="http请求测试"
            style={styles.menu_button}
            onPress={() => Navigator.navigateTo("Http")}
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
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
