const express = require("express");
const app = express();
const port = 3001;
const path = require("path");
app.use(express.static("build"));
const router = require("./server/routes");
router(app);
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + `/build/index.html`));
});
app.listen(port, () =>
  console.log(`Example app listening oappn port ${port}!`)
);