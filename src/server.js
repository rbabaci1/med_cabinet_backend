const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const userRouter = require("./api/routers/user");

const server = express();

server.use(express.json());
server.use(helmet());
server.use(cors());

server.use("/api/users", userRouter);
// server.use("/api/products", productsRouter);
// server.use("/api/dispensaries", dispensariesRouter);

server.get("/", (req, res) => {
  res.status(200).json({ message: "*** API is up! ***" });
});

module.exports = server;
