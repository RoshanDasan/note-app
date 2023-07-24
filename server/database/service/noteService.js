import Note from "../modal/noteSchema.js";

export const setNote = async (req, res) => {
  const { header, note } = req.body;
  const { userId } = req.params;
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

export const getNotes = async (req, res) => {
  const { userId } = req.params;
  try {
    const data = await Note.find({ userId });
    res.json({
      status: "success",
      data,
    });
  } catch (error) {
    throw new Error("failed to fetch data");
  }
};

export const getNote = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await Note.findOne({ _id: id });
    res.json({
      status: "success",
      data,
    });
  } catch (error) {
    throw new Error("failed to fetch data");
  }
};
