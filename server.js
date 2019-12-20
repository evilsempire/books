const app = require("./index");
const PORT = process.env.PORT || 3000; // port

app.listen(PORT, () => {
  console.log("listening...");
});
