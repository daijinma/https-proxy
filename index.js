#!/usr/bin/env node
const argv = require('yargs').argv
const httpProxy = require('http-proxy');
const fs = require('fs');
const path = require('path');

let listenPort = argv.port || 80

var proxy = httpProxy.createServer({
  target: {
    host: 'localhost',
    port: listenPort,
  },
  ssl: {
    cert: fs.readFileSync(path.resolve(__dirname, './xingyan.panda.tv.crt'), 'utf8'),
    key: fs.readFileSync(path.resolve(__dirname, './xingyan.panda.tv.key'), 'utf8')
  },
  ws: true,
  secure: true
}).listen(443, ()=>{
  console.log("Proxy https in 443 ,listen "+listenPort)
});

// const tls = require("tls"),
//     net = require("net"),
//     fs = require("fs");

// let server = tls.createServer({
//     key: fs.readFileSync("test.key"),
//     cert: fs.readFileSync("test.cert"),
// }, (s1) => {
//     let s2 = net.createConnection(7678, "127.0.0.1", () => {
//         s1.pipe(s2);
//         s2.pipe(s1);
//     });
// });

// server.listen(443);
