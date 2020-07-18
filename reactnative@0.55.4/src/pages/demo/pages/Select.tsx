import React, { ReactElement, Component } from "react";
import { Platform, StyleSheet, ScrollView, View } from "react-native";
import { NavigationEventSubscription } from "react-navigation";

import { Text, SectionGap, Dialog } from "../../../components";
import { Navigator } from "../../../services";

import PageProps from "../../PageProps";
import SectionTitle from "../components/SectionTitle";
import Button from "../components/Button";
import CheckButton from "../components/CheckButton";

interface SelectState {
  storyIndex?: string;
  storyName?: string;
  roleName?: string;
}

export default class Select extends Component<PageProps, SelectState> {
  state = {
    storyIndex: this.props.navigation.getParam("storyIndex", ""),
    storyName: decodeURIComponent(
      this.props.navigation.getParam("storyName", "")
    ),
    roleName: decodeURIComponent(
      this.props.navigation.getParam("roleName", "")
    ),
  };

  private willBlurSubscription: NavigationEventSubscription | undefined;
  private willFocusSubscription: NavigationEventSubscription | undefined;

  onPressStory = () => Navigator.navigateTo("SelectStory");

  onPressRole = () =>
    Navigator.navigateTo("SelectRole", { storyIndex: this.state.storyIndex });

  onPressNext = () => {
    const { storyName, roleName } = this.state;
    if (!storyName) {
      Dialog("请先选择一个电视剧！");
      return;
    }

    if (!roleName) {
      Dialog("请先选择一个角色！");
      return;
    }

    Navigator.navigateTo(
      "SelectResult",
      {
        storyName: encodeURIComponent(storyName),
        roleName: encodeURIComponent(roleName),
      },
      "Demo"
    );
  };

  componentDidMount() {
    this.checkShouldSetWillBack();

    if (Platform.OS != "web") {
      const navigation = this.props.navigation;
      this.willBlurSubscription = navigation.addListener("willBlur", () => {
        if (this.willFocusSubscription) {
          return;
        }
        this.willFocusSubscription = navigation.addListener("willFocus", () => {
          const nav = this.props.navigation,
            storyIndex = nav.getParam("storyIndex", ""),
            storyName = decodeURIComponent(nav.getParam("storyName", "")),
            roleName = decodeURIComponent(nav.getParam("roleName", "")),
            storyChanged = storyIndex != this.state.storyIndex;

          this.setState(
            {
              storyIndex,
              storyName,
              roleName: storyChanged ? undefined : roleName,
            },
            this.checkShouldSetWillBack
          );
        });
      });
    }
  }

  componentWillUnmount() {
    if (this.willBlurSubscription) {
      this.willBlurSubscription.remove();
      this.willBlurSubscription = undefined;
    }
    if (this.willFocusSubscription) {
      this.willFocusSubscription.remove();
      this.willFocusSubscription = undefined;
    }
  }

  checkShouldSetWillBack = () => {
    !!this.state.storyName && Navigator.setWillBack(this.onBack);
  };

  onBack = (): Promise<boolean> => {
    return new Promise((resolve) => {
      Dialog("您确定不玩了吗？", {
        okText: "不玩了",
        cancelText: "呃，我再想想",
        onOk: () => resolve(true),
        onCancel: () => resolve(false),
      });
    });
  };

  render() {
    const { storyName, roleName } = this.state;
    let selectRoleComponent: ReactElement | undefined,
      backTipsComponent: ReactElement | undefined;

    if (storyName) {
      selectRoleComponent = (
        <>
          <SectionGap height={45} />
          <SectionTitle title="选择角色" />
          <CheckButton
            checked={!!roleName}
            title={roleName || "点我去选择一个自己喜欢的角色哦"}
            onPress={this.onPressRole}
          />
        </>
      );

      backTipsComponent = (
        <>
          <SectionGap height={45} />
          <Text style={styles.tips}>
            现在直接点返回按钮，有意外收获哦！！！
          </Text>
        </>
      );
    }

    return (
      <ScrollView style={styles.container}>
        <SectionGap />
        <Text style={styles.title}>请选择一个你喜欢的电视剧和里面的角色</Text>
        <SectionGap height={20} />
        <SectionTitle title="选择电视剧" />
        <CheckButton
          checked={!!storyName}
          title={storyName || "点我去选择一个自己最爱的电视剧"}
          onPress={this.onPressStory}
        />
        {selectRoleComponent}
        {backTipsComponent}
        <SectionGap />
        <View style={styles.next}>
          <Button
            title="去查查自己的选择结果吧"
            style={styles.next_button}
            onPress={this.onPressNext}
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
    paddingHorizontal: 15,
  },
  title: {
    color: "#333",
    fontSize: 18,
    textAlign: "center",
  },
  text: {
    color: "#999",
    fontSize: 13,
    marginTop: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    flexWrap: "wrap",
  },
  next: {
    width: "100%",
    alignItems: "center",
  },
  next_button: {
    width: "80%",
    marginTop: 10,
    marginRight: 15,
  },
  tips: {
    color: "#999",
    fontSize: 13,
    textAlign: "center",
  },
});
