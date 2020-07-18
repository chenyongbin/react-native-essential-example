#!/usr/bin/env node

/**
 * Module dependencies.
 */

const app = require("./app");
const http = require("http");
const qrcode = require("qrcode-terminal");
const ip = require("ip");
const { h5ServerPort } = require("../../app.json");

/**
 * Get port from app.json
 */
const port = h5ServerPort || 3000;
app.set("port", port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port, "0.0.0.0");
server.on("error", (err) => {
  console.log(`something err!`, err);
});
server.on("listening", () => {
  let addr = server.address();
  let displayUrl = `http://${ip.address()}:${addr.port}/`;
  console.log(`server start at: ${displayUrl}`);
  qrcode.generate(displayUrl, { small: true });
});
