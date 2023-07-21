import { Schema, model } from "mongoose";

const noteSchema = new Schema({
  userId: {
    type: String,
  },
  header: {
    type: String,
  },
  note: {
    type: String,
  },
});

const Note = model("Note", noteSchema);
export default Note;
