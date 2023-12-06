// models/Question.js

import mongoose from 'mongoose';


const questionSchema = new mongoose.Schema({
  category: {
    type: mongoose.ObjectId,
    ref: 'Category',
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  type: {
    type: String, // e.g., 'aptitude', 'reasoning', 'verbal', 'reactionTime'
    required: true,
  },
  options: {
    type: [String], // Array of options for multiple-choice questions
    default: null,
  },
  correctAnswer: {
    type: String, // The correct answer for multiple-choice questions
    default: null,
  },
});

const Question = mongoose.model('Question', questionSchema);

export default Question;
