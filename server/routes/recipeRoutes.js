const express = require("express");
const { route } = require("express/lib/router");
const router = express.Router();
const recipeController = require("../controllers/recipeController");

/**
 * App Routes
 */
router.get("/", recipeController.homepage);

module.exports = router;
