require("dotenv").config();

const app = require("./api/server");

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`\n*** Listening on port ${PORT} ***\n`);
});
