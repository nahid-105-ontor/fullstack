const mongoose = require("mongoose");
const submissionSchema = new mongoose.Schema({
  assignment: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Assignment",
    required: true,
  },
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  submissionLink: {
    type: String,
    required: true,
  },
  submittedAt: {
    type: Date,
    default: new Date.now(),
    required: true,
  },
  marksObtained: {
    type: Number,
    min: 1,
    max: 100,
  },
  feedback: {
    type: String,
  },
  status: {
    type: String,
    default: "submitted",
    enum: ["submitted", "graded", "late"],
  },
});
submissionSchema.index(
  { student: 1, assingment: 1 }
  ,
  {
    unique: true,
  },
);
