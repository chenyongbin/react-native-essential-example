/**
 * web server entry
 */

const express = require("express");
const compression = require("compression");
const path = require("path");
// const favicon = require("serve-favicon");
const ejs = require("ejs");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const { h5SubPath, h5PageTitle } = require("../../app.json");
const app = express();

const IS_DEVELOPMENT = process.env.NODE_ENV !== "production";
const AssetsPath = path.join(
  process.cwd(),
  "h5",
  IS_DEVELOPMENT ? "dev" : "release"
);

app.set("views", path.resolve(__dirname, AssetsPath));
app.engine("html", ejs.__express);
app.set("view engine", "html");
// app.use(favicon(path.resolve(__dirname, "../favicon.ico")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(compression());
app.use("*", (req, res, next) => {
  res.header({
    "Content-Type": "text/html;charset=utf-8",
    "X-Powered-By": "EM-sdk dev server",
  });
  next();
});
app.use("/static", express.static(AssetsPath));

function routeHandler(req, res, next) {
  const {
    query,
    query: { page },
  } = req;

  let data = Object.assign(
    { params: !!query ? JSON.stringify(query) : {} },
    { page },
    { title: h5PageTitle }
  );

  res.render(`index`, data);
}

if (h5SubPath) {
  app.get("/", (req, res, next) => {
    return res.redirect(`/` + h5SubPath);
  });
  app.get(`/${h5SubPath}`, routeHandler);
  app.get(`/${h5SubPath}/:path`, routeHandler);
} else {
  app.get("/", routeHandler);
  app.get("/:path", routeHandler);
}

app.use((req, res, next) => {
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  err.status = err.status || 500;
  res.status(err.status);
  res.end(err.stack);
});

module.exports = app;
