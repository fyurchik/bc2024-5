const express = require("express");
const { Command } = require("commander");
const http = require("http");

const program = new Command();
program
  .requiredOption("-h, --host <host>", "адреса сервера")
  .requiredOption("-p, --port <port>", "порт")
  .requiredOption("-c, --cache <cache>", "шлях до кешу")
  .parse(process.argv);

const options = program.opts();
const app = express();

const server = http.createServer(app);
server.listen(options.port, options.host, () => {
  console.log("запущено");
});
