const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const route = require("./api/routes");

const server = express();

server.use(express.json());
server.use(helmet());
server.use(cors());

server.use("/api/users", route.users);
server.use("/api/products", route.products);
server.use("/api/flavors", route.flavors);
// server.use("/api/dispensaries", dispensariesRouter);

server.get("/", (req, res) => {
  res.status(200).json({ message: "*** API is up! ***" });
});

module.exports = server;
