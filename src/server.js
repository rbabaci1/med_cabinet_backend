const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const routes = require("./api/routes");

const server = express();

server.use(express.json());
server.use(helmet());
server.use(cors());

server.use("/api/users", routes.user);
server.use("/api/products", routes.product);
server.use("/api/flavors", routes.flavor);
// server.use("/api/dispensaries", dispensariesRouter);

server.get("/", (req, res) => {
  res.status(200).json({ message: "*** API is up! ***" });
});

module.exports = server;
