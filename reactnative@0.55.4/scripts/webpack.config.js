const path = require("path");
const HtmlPlugin = require("html-webpack-plugin");
const { h5SubPath } = require("../app.json");

const env = process.env.NODE_ENV || "development",
  cwd = process.cwd(),
  IS_DEVELOPMENT = env == "development",
  AppSrcPath = path.resolve(cwd, "src"),
  OutputPath = path.resolve(cwd, "h5", IS_DEVELOPMENT ? "dev" : "release"),
  PublicPath = IS_DEVELOPMENT ? "/static/" : `/${h5SubPath}`;

const webpackConfig = {
  mode: env,
  context: AppSrcPath,
  entry: path.join(process.cwd(), "index.web.js"),
  output: {
    path: OutputPath,
    publicPath: PublicPath,
    chunkFilename: "[name].bundle.js",
  },
  devtool: IS_DEVELOPMENT ? "source-map" : false,
  module: {
    rules: [
      {
        test: /\.(gif|jpe?g|png|svg)$/,
        use: {
          loader: "file-loader",
          options: { publicPath: PublicPath },
        },
      },
      {
        test: /\.js$/,
        include: AppSrcPath,
        use: {
          loader: "babel-loader",
          options: {
            cacheDirectory: false,
            presets: ["react-native"],
            plugins: ["transform-runtime"],
          },
        },
      },
      {
        test: /\.ts(x?)$/,
        include: [
          AppSrcPath,
          path.resolve(process.cwd(), "node_modules/react-native-essential"),
        ],
        loader: "ts-loader",
        options: { allowTsInNodeModules: true },
      },
    ],
  },
  optimization: {
    runtimeChunk: { name: "manifest" },
    splitChunks: {
      cacheGroups: {
        lib: {
          test: /node_modules/,
          chunks: "initial",
          name: "lib",
          priority: 10,
          enforce: true,
        },
      },
    },
  },
  resolve: {
    extensions: [
      ".web.tsx",
      ".tsx",
      ".web.ts",
      ".ts",
      ".web.js",
      ".js",
      ".json",
    ],
  },
};

// 指定别名
webpackConfig.resolve.alias = [
  "ActivityIndicator",
  "Alert",
  "AsyncStorage",
  "Button",
  "DeviceInfo",
  "Modal",
  "NativeModules",
  "Platform",
  "SafeAreaView",
  "SectionList",
  "StyleSheet",
  "Switch",
  "Text",
  "TextInput",
  "TouchableHighlight",
  "TouchableWithoutFeedback",
  "View",
  "ViewPropTypes",
].reduce(
  (acc, curr) => {
    acc[curr] = `react-native-web/dist/cjs/exports/${curr}`;
    return acc;
  },
  {
    "react-native$": "react-native-web/dist/cjs",
    "react-navigation": path.resolve(
      process.cwd(),
      "./node_modules/@react-navigation/core"
    ),
    JSEventLoopWatchdog:
      "react-native-web/dist/cjs/vendor/react-native/JSEventLoopWatchdog",
    React$: "react",
    ReactNative$: "react-native-web/dist/cjs",
    infoLog$: "react-native-web/dist/cjs/vendor/react-native/infoLog",
  }
);

// 根据模板生成html，并注入js文件
webpackConfig.plugins = webpackConfig.plugins || [];
webpackConfig.plugins.push(
  new HtmlPlugin({
    hash: false,
    template: path.join(process.cwd(), "scripts", "template.html"),
    templateParameters: {
      __DEV__: IS_DEVELOPMENT,
    },
    filename: path.join(OutputPath, "index.html"),
    chunks: ["manifest", "lib", "main"],
  })
);

module.exports = webpackConfig;
