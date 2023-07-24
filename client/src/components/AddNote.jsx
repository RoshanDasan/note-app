import React, { useState } from "react";
import "./components.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useSelector } from "react-redux";

const AddNote = () => {
  const { _id } = useSelector((state) => state.user.user);
  const token = useSelector((state) => state.user.token);
  const [formData, setFormData] = useState({
    header: "",
    note: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
       await fetch(
        `http://localhost:5000/api/set_note/${_id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(formData),
        }
      );
      setFormData({
        header:"",
        note:""
      })
    } catch (error) {
      throw new Error("failed");
    }
  };
  return (
    <div className="add-note-main">
      <div className="input-field-main">
        <form onSubmit={handleSubmit}>
          <div className="input-field">
            <TextField
              id="outlined-textarea"
              label="Header"
              name="header"
              value={formData.header}
              onChange={handleChange}
              multiline
              autoFocus
            />
          </div>

          <div className="input-field">
            <TextField
              id="outlined-multiline-static"
              label=" Your Note"
              name="note"
              value={formData.note}
              onChange={handleChange}
              multiline
              rows={4}
              size="medium"
            />
          </div>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Add
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AddNote;
