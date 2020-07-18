import React, { Component } from "react";
import { StyleSheet, ScrollView, View } from "react-native";

import { Text, SectionGap, GradientView } from "../../../components";

import PageProps from "../../PageProps";

export default class Gradient extends Component<PageProps> {
  render() {
    return (
      <ScrollView style={styles.container}>
        <SectionGap />
        <Text style={styles.title}>渐变背景View</Text>
        <SectionGap />
        <GradientView
          width={280}
          height={200}
          border="8px"
          background="linear-gradient(90deg, #f15b02 0%, #fb8818 100%)"
        >
          <View style={styles.box}>
            <Text style={styles.box_text}>这是子组件</Text>
            <Text style={styles.box_text}>width=280</Text>
            <Text style={styles.box_text}>height=200</Text>
          </View>
        </GradientView>
        <SectionGap />
        <View style={styles.wrap}>
          <GradientView
            width="70%"
            height={200}
            border="8px"
            background="linear-gradient(90deg, #f15b02 0%, #fb8818 100%)"
          >
            <View style={styles.box}>
              <Text style={styles.box_text}>包裹在一个组件内</Text>
              <Text style={styles.box_text}>width=70%</Text>
              <Text style={styles.box_text}>height=200</Text>
            </View>
          </GradientView>
        </View>
        <SectionGap height={50} />
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
  box: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  box_text: {
    color: "#fff",
    fontSize: 17,
  },
  wrap: {
    width: "100%",
    height: 300,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  mutable: {
    width: "100%",
    paddingVertical: 20,
  },
});
