import mongoose, { Schema, model } from "mongoose";

const noteSchema = new Schema({
  header: {
    type: String,
  },
  note: {
    type: String,
  },
});

const Note = model("Note", noteSchema);
export default Note;
