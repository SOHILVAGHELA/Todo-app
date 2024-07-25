const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  todo: {
    type: String,
    required: true,
  },
});

const ToDoModel = mongoose.model("Todo", todoSchema);

module.exports = ToDoModel;
