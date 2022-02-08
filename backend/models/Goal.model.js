const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const GoalSchema = new Schema(
  {
    text: {
      type: String,
      required: [true, 'Please add a text value'],
    },
  },
  {
    timestamps: true,
  }
);

const Goal = model('Goal', GoalSchema);

module.exports = Goal;
