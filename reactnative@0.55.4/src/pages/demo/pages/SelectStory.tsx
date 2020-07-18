import React, { Component } from "react";
import { StyleSheet, ScrollView, View } from "react-native";

import { Text, SectionGap, Dialog } from "../../../components";
import { Navigator } from "../../../services";

import PageProps from "../../PageProps";
import SectionTitle from "../components/SectionTitle";
import Button from "../components/Button";
import CheckButton from "../components/CheckButton";
import { getStoryList } from "./DB";

interface SelectStoryState {
  index?: number;
  name: string;
}

export default class SelectStory extends Component<
  PageProps,
  SelectStoryState
> {
  state = { index: undefined, name: "" };

  onPress = (index: number, name: string) => {
    this.setState({ index, name });
  };

  onPressNext = () => {
    const { index, name } = this.state;
    if (index == undefined) {
      Dialog("请先选择一个电视剧！");
      return;
    }

    Navigator.replace("Select", {
      storyIndex: index,
      storyName: encodeURIComponent(name),
    });
  };

  render() {
    const { index } = this.state;
    return (
      <ScrollView style={styles.container}>
        <SectionGap />
        <Text style={styles.title}>请选择一个你喜欢的连续剧</Text>
        <SectionGap height={20} />
        <View style={styles.row}>
          {getStoryList().map((name, i) => (
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
