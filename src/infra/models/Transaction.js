const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
  
  title: String,
  type: String,
  category: String,
  amount: Number,

});

module.exports = mongoose.model('Transaction', TransactionSchema);
