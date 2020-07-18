import React, { PureComponent } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  TextStyle,
  ViewStyle,
} from "react-native";

import { Text } from "../../../components";

interface CheckButtonProps {
  title: string;
  checked?: boolean;
  width?: number | string;
  onPress?: () => void;
}

/**
 * 勾选按钮
 */
export default class CheckButton extends PureComponent<CheckButtonProps> {
  render() {
    const layoutStyles: ViewStyle[] = [styles.container],
      textStyles: TextStyle[] = [styles.text],
      { width, title, checked, onPress } = this.props;

    if (checked) {
      layoutStyles.push(styles.container_checked);
      textStyles.push(styles.text_checked);
    }

    if (width) {
      layoutStyles.push({ width });
    }

    return (
      <TouchableOpacity style={layoutStyles} onPress={onPress}>
        <Text style={textStyles}>{title}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    minWidth: 50,
    padding: 10,
    marginTop: 15,
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 6,
    borderStyle: "solid",
    borderColor: "#999",
    borderWidth: 1,
  },
  container_checked: {
    backgroundColor: "#ea5504",
    borderColor: "#fff",
  },
  text: {
    color: "#333",
    fontSize: 14,
  },
  text_checked: {
    color: "#fff",
  },
});
