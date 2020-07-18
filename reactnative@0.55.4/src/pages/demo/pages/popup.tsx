import React, { Component } from "react";
import { StyleSheet, ScrollView, View, TouchableOpacity } from "react-native";
import {
  Text,
  SectionGap,
  Dialog,
  Toast,
  MultiDialog,
  showLoading,
  hideLoading,
  Popup,
  PopupClass,
} from "../../../components";

import PageProps from "../../PageProps";
import Button from "../components/Button";

export default class Demo extends Component<PageProps> {
  onPressDialog = () => Dialog("Welcome to use react-native-essential!");

  onPressDialogWithTwoButtons = () =>
    Dialog("哦豁！我有两个按钮！！！", {
      title: "这里是标题",
      okText: "我是按钮1",
      cancelText: "我是按钮2",
      onOk: () => Dialog("【按钮1】Speaking：你点我干嘛？"),
      onCancel: () => Toast("轻轻地我走了..."),
    });

  onPressMultipleDialog = () => {
    MultiDialog({
      data: [
        {
          message: "我是弹窗1",
          okText: "选我",
          cancelText: "关闭",
          onOk: () => Toast("选我弹窗【1】了"),
        },
        {
          message: "我是弹窗2",
          okText: "就这样吧",
          onOk: () => Toast("选我弹窗【2】了"),
        },
        {
          message: "我是弹窗3",
          okText: "闪开，让我来",
          cancelText: "拜拜了您内",
          onOk: () => Toast("选我弹窗【3】了"),
        },
      ],
    });
  };

  onPressToast1 = () =>
    Toast("正常Toast是酱婶滴，从中间向上缓缓移动一点", {
      hideDuration: 3000,
    });

  onPressToast2 = () =>
    Toast("介是pull-down模式，会从顶部缓慢下来", {
      mode: "pull-down",
      hideDuration: 3000,
    });

  showLoading = () => {
    showLoading("loading提示语，2秒后关闭", false);
    setTimeout(hideLoading, 2000);
  };

  onPressPopup = (align: "center" | "bottom") => {
    let popup: PopupClass | undefined;
    const onPress = () => popup && popup.destroy();

    popup = Popup(this.renderPopup(align, onPress), { align, animated: true });
  };

  renderPopup = (align: "center" | "bottom", onPress: () => void) => {
    const descGap = align == "center" ? 5 : 0;

    return (
      <View
        style={[
          styles.popup,
          align == "bottom" ? { width: "100%", height: 300 } : null,
        ]}
      >
        <SectionGap height={10} />
        <Text style={styles.popup_title}>这是自定义弹窗，您可以做这些哦</Text>
        <SectionGap height={10} />
        <View style={styles.popup_body}>
          <Text style={styles.popup_desc}>
            1.
            设置弹窗内容、弹窗背景颜色和zIndex值，甚至可以完全自定义背景样式。
          </Text>
          <SectionGap height={descGap} />
          <Text style={styles.popup_desc}>
            2. 弹窗内容必须是个组件，组件宽高都支持数值和比例。
          </Text>
          <SectionGap height={descGap} />
          <Text style={styles.popup_desc}>
            3.
            Popup函数创建了一个弹窗后，会返回该弹窗的对象，通过调用该对象的destroy方法可以销毁创建的弹窗。所以，自己的事情自己要负责哦。
          </Text>
          <SectionGap height={descGap} />
          <Text style={styles.popup_desc}>
            4. 自定义弹窗目前只支持两种对齐方式：居中对齐和底部对齐。
          </Text>
          <SectionGap height={descGap} />
          <Text style={styles.popup_desc}>
            5. 自定义弹窗还支持动画，但默认没有开启，有需要的小伙伴可以开启哦！
          </Text>
        </View>
        <View style={styles.popup_space} />
        <TouchableOpacity style={styles.popup_button} onPress={onPress}>
          <Text style={styles.popup_button_text}>我知道了</Text>
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    return (
      <ScrollView style={styles.container} contentContainerStyle={styles.box}>
        <SectionGap />
        <Button
          title="普通Dialog"
          style={styles.button}
          onPress={this.onPressDialog}
        />
        <Button
          title="有两个按钮的Dialog"
          style={styles.button}
          onPress={this.onPressDialogWithTwoButtons}
        />
        <Button
          title="MultiDialog"
          style={styles.button}
          onPress={this.onPressMultipleDialog}
        />
        <View style={styles.row}>
          <Button
            title="Toast(正常模式)"
            style={styles.col}
            onPress={this.onPressToast1}
          />
          <Button
            title="Toast(pull-down模式)"
            style={styles.col}
            onPress={this.onPressToast2}
          />
        </View>
        <Button
          title="显示Loading"
          style={styles.button}
          onPress={this.showLoading}
        />
        <Button
          title="自定义弹窗（居中对齐）"
          style={styles.button}
          onPress={() => this.onPressPopup("center")}
        />
        <Button
          title="自定义弹窗（底部对齐）"
          style={styles.button}
          onPress={() => this.onPressPopup("bottom")}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
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
