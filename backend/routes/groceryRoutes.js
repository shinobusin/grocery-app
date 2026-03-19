const express = require("express");
const router = express.Router();
const {
  getItems,
  addItem,
  updateItem,
  deleteItem
} = require("../controllers/groceryController");

router.get("/items", getItems);
router.post("/items", addItem);
router.patch("/items/:id", updateItem);
router.delete("/items/:id", deleteItem);

module.exports = router;