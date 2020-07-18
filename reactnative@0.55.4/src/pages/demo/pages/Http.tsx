import React, { Component } from "react";
import { Platform, StyleSheet, ScrollView, View } from "react-native";

import {
  Text,
  SectionGap,
  showLoading,
  hideLoading,
} from "../../../components";
import {
  HttpRequest,
  createHttpRequest,
  HttpJsonpRequest,
  createJsonpRequest,
} from "../../../utils";

import PageProps from "../../PageProps";
import Button from "../components/Button";

interface HttpState {
  getResult?: string;
  jsonpResult?: string;
}

/**
 * Http测试
 */
export default class Http extends Component<PageProps, HttpState> {
  private httpRequest: HttpRequest | undefined;
  private jsonpRequest: HttpJsonpRequest | undefined;
  private httpUrl = "http://api.github.com";
  private jsonpUrl = "";

  state = { getResult: undefined, jsonpResult: undefined };

  onPressHttp = () => {
    // showLoading("开始get请求", false);
    this.setState({ getResult: "" });
    this.httpRequest = createHttpRequest(10000);
    this.httpRequest
      .fetch(this.httpUrl, { method: "GET" })
      .then(async (r) => {
        this.setState({ getResult: JSON.stringify(r) });
        if (r.response) {
          const responseText = await r.response.text(),
            { getResult } = this.state;
          this.setState({
            getResult: getResult + `responseText=${responseText}`,
          });
        } else {
          //   alert("response is null");
        }
      })
      .catch((e) => this.setState({ getResult: JSON.stringify(e) }))
      .finally(() => {
        this.httpRequest = undefined;
        // hideLoading();
      });
  };

  onPressJsonp = () => {
    // showLoading("开始jsonp请求", false);
    this.setState({ jsonpResult: "" });
    this.jsonpRequest = createJsonpRequest(12 * 1000);
    console.log(this.jsonpRequest.cancel);
    this.jsonpRequest
      .jsonp(this.jsonpUrl)
      .then((r) => this.setState({ jsonpResult: JSON.stringify(r) }))
      .catch((e) => this.setState({ jsonpResult: JSON.stringify(e) }))
      .finally(() => {
        this.jsonpRequest = undefined;
        // hideLoading();
      });
  };

  renderJsonp = () => {
    if (Platform.OS != "web") {
      return null;
    }

    return (
      <>
        <SectionGap />
        <Text style={styles.title}>测试JSONP请求{this.jsonpUrl}</Text>
        <Text style={styles.text}>{this.state.jsonpResult || ""}</Text>
        <SectionGap height={10} />
        <View style={styles.next}>
          <Button
            title="发起请求"
            style={styles.next_button}
            onPress={this.onPressJsonp}
          />
          <Button
            title="取消请求"
            style={styles.next_button}
            onPress={() => this.jsonpRequest && this.jsonpRequest.cancel()}
          />
        </View>
      </>
    );
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <SectionGap />
        <Text style={styles.title}>测试GET请求{this.httpUrl}</Text>
        <Text style={styles.text}>{this.state.getResult || ""}</Text>
        <SectionGap height={10} />
        <View style={styles.next}>
          <Button
            title="发起请求"
            style={styles.next_button}
            onPress={this.onPressHttp}
          />
          <Button
            title="取消请求"
            style={styles.next_button}
            onPress={() => this.httpRequest && this.httpRequest.cancel()}
          />
        </View>
        {this.renderJsonp()}
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
