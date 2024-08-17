const mongoose = require("mongoose");

const TransactionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  type: {
    type: String,
    required: true,
    enum: ["deposit", "withdraw"],
    default: "withdraw",
  },
  category: {
    type: String,
    required: true,
    trim: true,
  },
  amount: {
    type: Number,
    required: true,
    min: 0,
  },
});

module.exports = mongoose.model("Transaction", TransactionSchema);
