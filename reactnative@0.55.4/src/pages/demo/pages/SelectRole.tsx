import React, { Component } from "react";
import { StyleSheet, ScrollView, View } from "react-native";

import { Text, SectionGap, Dialog } from "../../../components";
import { Navigator } from "../../../services";

import PageProps from "../../PageProps";
import Button from "../components/Button";
import CheckButton from "../components/CheckButton";
import { getRoleList } from "./DB";

interface SelectRoleState {
  index?: number;
  name: string;
}

export default class SelectRole extends Component<PageProps, SelectRoleState> {
  state = { index: undefined, name: "" };
  private storyIndex = this.props.navigation.getParam("storyIndex");
  private roleList = getRoleList(Number(this.storyIndex));

  onPress = (index: number, name: string) => {
    this.setState({ index, name });
  };

  onPressNext = () => {
    const { index, name } = this.state;
    if (index == undefined) {
      Dialog("请先选择一个角色！");
      return;
    }

    Navigator.replace("Select", {
      roleIndex: index,
      roleName: encodeURIComponent(name),
    });
  };

  render() {
    const { index } = this.state;
    return (
      <ScrollView style={styles.container}>
        <SectionGap />
        <Text style={styles.title}>请选择一个你喜欢的角色</Text>
        <SectionGap height={20} />
        <View style={styles.row}>
          {this.roleList.map((name, i) => (
            <CheckButton
              key={i}
              title={name}
              checked={i == index}
              onPress={() => this.onPress(i, name)}
            />
          ))}
        </View>
        <SectionGap height={15} />
        <View style={styles.next}>
          <Button
            title="选好了"
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
