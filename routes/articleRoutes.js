const router = require("express").Router();
const articlesController = require("../controllers/articlesController");

// Matches with "/api/article"
router
  .route("/")
  .get(articlesController.findAll);

module.exports = router;
