import React, { PureComponent } from "react";
import { StyleSheet, TouchableOpacity, ViewStyle } from "react-native";

import { Text } from "../../../components";

interface ButtonProps {
  title: string;
  type?: "primary" | "danger";
  onPress?: () => void;
  style?: ViewStyle;
}

/**
 * 按钮
 */
export default class Button extends PureComponent<ButtonProps> {
  render() {
    const layoutStyles: ViewStyle[] = [styles.container],
      { style, type, onPress } = this.props;

    if (type == "danger") {
      layoutStyles.push({ backgroundColor: "#ea5504" });
    }
    style && layoutStyles.push(style);

    return (
      <TouchableOpacity style={layoutStyles} onPress={onPress}>
        <Text style={styles.text}>{this.props.title}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    minWidth: 50,
    height: 40,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3381E3",
    borderRadius: 4,
  },
  text: {
    color: "#fff",
    fontSize: 14,
  },
});
