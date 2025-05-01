const express = require("express");
const {
  createBook,
  getBooks,
  updateBook,
  deleteBook
} = require("../controllers/bookController");
const auth = require("../middleware/authMiddleware");
const router = express.Router();

router.use(auth);

router.post("/", createBook);
router.get("/", getBooks);
router.put("/:id", updateBook);
router.delete("/:id", deleteBook);

module.exports = router;
