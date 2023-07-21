import React from "react";
import { Button } from "@mui/material";
import {useNavigate} from 'react-router-dom'
import { useDispatch } from "react-redux";
import { removeState } from "../state/Slice";
const Home = () => {
 const navigate = useNavigate()
  const dispatch = useDispatch()
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    dispatch(removeState())
    navigate('/login')
  };
  return (
    <Button variant="outlined" onClick={logout}>
      Logout
    </Button>
  );
};

export default Home;
