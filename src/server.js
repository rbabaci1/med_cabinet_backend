const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const usersRouter = require("./api/routers/users");

const server = express();

server.use(express.json());
server.use(helmet());
server.use(cors());

// server.use("/api/users", usersRouter);
// server.use("/api/products", productsRouter);
// server.use("/api/dispensaries", dispensariesRouter);

server.get("/", (req, res) => {
  res.status(200).json({ message: "*** API is up! ***" });
});

module.exports = server;
