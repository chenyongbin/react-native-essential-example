import React, { PureComponent } from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "../../../components";
import { PX } from "../../../utils";

interface SectionTitleProps {
  style?: {};
  title: string;
}

export default class SectionTitle extends PureComponent<SectionTitleProps> {
  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        <View style={styles.icon} />
        <Text style={styles.title}>{this.props.title}</Text>
        <View style={styles.sibling} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 12,
    paddingRight: 21,
    borderBottomWidth: PX.ratio(1),
    borderStyle: "solid",
    borderColor: "#eee",
  },
  borderBottom: {
    borderBottomWidth: 1,
    borderStyle: "solid",
    borderColor: "#eee",
  },
  icon: {
    width: 3,
    height: 15,
    backgroundColor: "#EA5504",
  },
  title: {
    color: "#333",
    fontSize: 16,
    marginLeft: 7.5,
  },
  sibling: {
    flex: 1,
  },
});
