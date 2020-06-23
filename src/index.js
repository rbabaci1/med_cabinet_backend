const app = require("./api/server");
const { PORT } = require("./config");

app.listen(PORT, () => {
  console.log(`\n*** Listening on port ${PORT} ***\n`);
});
