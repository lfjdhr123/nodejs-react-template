let express = require("express");
let router = express.Router();
let appRoot = require("app-root-path")
router.get("/", async (req, res, next) => {
  try {
    res.sendFile(`${appRoot}/dist/index.html`)
  } catch (err) {
    next(err);
  }
});
module.exports = router;
