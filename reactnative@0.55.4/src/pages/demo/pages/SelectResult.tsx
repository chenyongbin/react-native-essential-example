import React, { Component } from "react";
import { StyleSheet, ScrollView, View } from "react-native";

import { Text, SectionGap } from "../../../components";
import { Navigator } from "../../../services";

import PageProps from "../../PageProps";
import Button from "../components/Button";

export default class SelectResult extends Component<PageProps> {
  render() {
    const navigation = this.props.navigation;
    return (
      <ScrollView style={styles.container}>
        <SectionGap />
        <Text style={styles.title}>
          {decodeURIComponent(navigation.getParam("storyName"))}
        </Text>
        <SectionGap height={20} />
        <Text style={styles.title}>
          {decodeURIComponent(navigation.getParam("roleName"))}
        </Text>
        <SectionGap height={20} />
        <View style={styles.next}>
          <Button
            title="返回"
            style={styles.next_button}
            onPress={Navigator.goBack}
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
