import Note from "../modal/noteSchema.js";

export const setNote = async (req, res) => {
  const { userId, header, note } = req.body;
  try {
    const noteData = new Note({ userId, header, note });
    Note.create(noteData);
  } catch (error) {
    throw new Error("error found: ", error);
  }
  res.json({
    status: "success",
  });
};

export const removeNote = async (req, res) => {
  const { id } = req.params;
  try {
    await Note.deleteOne({ _id: id });
    res.json({
      status: "success",
    });
  } catch (error) {
    throw new Error("error: ", error);
  }
};
