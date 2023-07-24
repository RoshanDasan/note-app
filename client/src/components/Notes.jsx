import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./components.css";
import { Delete } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { format } from "timeago.js";

const Notes = (props) => {
  const { _id } = useSelector((state) => state.user.user);
  const token = useSelector((state) => state.user.token);
  const [data, setData] = useState([]);
  const [note, setNote] = useState({}); // Initialize note as an object
  const [click, setClick] = useState(false);

  useEffect(() => {
    fetchData();
  }, [props.click, click]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/get_notes/${_id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
          },
        }
      );
      const { data } = await response.json();
      setData(data);
      console.log(data, "data");
    } catch (error) {
      throw new Error("fetching failed");
    }
  };

  const filterNote = (id) => {
    setNote({}); // Reset note to an empty object
    const filtered = data.filter((item) => item._id === id);
    if (filtered.length > 0) {
      setNote(filtered[0]); // Set the first item (if any) as the note
    }
    console.log(note);
  };

  const deleteNote = async (id) => {
    console.log(token);
    try {
      const response = await fetch(
        `http://localhost:5000/api/remove_note/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response, "res");
      setClick(() => !click);
      setNote({});
    } catch (error) {
      throw new Error("failed to delete");
    }
  };

  return (
    <div className="main">
      <div className="left">
        {data?.map((note) => (
          <div className="box-list" key={note._id}>
            <div style={{ display: "flex" }}>
              <h3
                onClick={() => filterNote(note._id)}
                style={{ cursor: "pointer" }}
              >
                {note.header}
              </h3>

              <IconButton onClick={() => deleteNote(note._id)}>
                <Delete />
              </IconButton>
            </div>
            <p>{format(note.createAt)}</p>
          </div>
        ))}
      </div>
      <div className="right">
        <h4>{note?.note}</h4>
      </div>
    </div>
  );
};

export default Notes;
