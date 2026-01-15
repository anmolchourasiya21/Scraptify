const express = require("express");
const { generateNotes } = require("../controllers/notes.controller.js");

const router = express.Router();


router.post("/generate", generateNotes);

module.exports = router;
