const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: String,
  description: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "assignmentuser"
  }
});

module.exports = mongoose.model("AssignmentTask", taskSchema);