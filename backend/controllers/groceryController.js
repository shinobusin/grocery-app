const Grocery = require("../models/Grocery");

// GET all items
exports.getItems = async (req, res) => {
  const items = await Grocery.find().sort({ createdAt: -1 });
  res.json(items);
};

// POST add item
exports.addItem = async (req, res) => {
  const { itemName, quantity, category } = req.body;

  if (!itemName) {
    return res.status(400).json({ message: "Item name required" });
  }

  const item = await Grocery.create({
    itemName,
    quantity,
    category
  });

  res.json(item);
};

// PATCH update item
exports.updateItem = async (req, res) => {
  const item = await Grocery.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(item);
};

// DELETE item
exports.deleteItem = async (req, res) => {
  await Grocery.findByIdAndDelete(req.params.id);
  res.json({ message: "Item deleted" });
};