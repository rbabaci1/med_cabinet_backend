const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const route = require("./routes");
const errorHandler = require("./middleware/errorHandler");

const server = express();

server.use(express.json());
server.use(helmet());
server.use(cors());

server.use("/api/users", route.users);
server.use("/api/auth", route.usersAuth);
server.use("/api/products", route.products);
server.use("/api/dispensaries", route.dispensaries);

server.get("/", (req, res) => {
  res.status(200).json({ message: "*** API is up! ***" });
});

server.use(errorHandler);

module.exports = server;
