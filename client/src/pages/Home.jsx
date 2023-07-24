import React, { useState } from "react";
import { Button} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeState } from "../state/Slice";
import AddNote from "../components/AddNote";
import Notes from "../components/Notes";
import "./pages.css";
const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showNote, setShowNote] = useState(true);
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    dispatch(removeState());
    navigate("/login");
  };
  return (
    <>
      <div className="header">
        <Button
          variant="text"
          sx={{ color: "black" }}
          onClick={() => setShowNote(true)}
        >
          notes
        </Button>
        <Button
          variant="text"
          sx={{ color: "black" }}
          onClick={() => setShowNote(false)}
        >
          Add notes
        </Button>
        <Button variant="text" sx={{ color: "red" }} onClick={logout}>
          Log out
        </Button>
      </div>

      {showNote ? <Notes click={setShowNote}/> : <AddNote />}
    </>
  );
};

export default Home;
