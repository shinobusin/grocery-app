const mongoose = require("mongoose");

const grocerySchema = new mongoose.Schema({
  itemName: {
    type: String,
    required: true
  },
  quantity: {
    type: String,
    default: "1"
  },
  category: {
    type: String,
    enum: ["Dairy", "Veggies", "Pantry", "Snacks", "Others"],
    default: "Others"
  },
  isPurchased: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Grocery", grocerySchema);