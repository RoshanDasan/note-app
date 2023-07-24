import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import "./App.css";
import Home from "./pages/Home";
import { useSelector, useDispatch } from "react-redux";
import { setUser, setToken } from "./state/Slice";

function App() {
  const stateToken = useSelector((state) => state.user.token);
  const [token, settoken] = useState(stateToken);
  const dispatch = useDispatch();

  useEffect(() => {
    settoken(stateToken);
  }, [stateToken]);

  useEffect(() => {
    dispatch(setUser({ user: JSON.parse(localStorage.getItem("user")) }));
    dispatch(setToken({ token: localStorage.getItem("token") }));
  }, [stateToken]);
  return (
    <Router>
      <Routes>
        <Route path="/" element={token ? <Home /> : <Login />} />
        <Route path="/register" element={token ? <Home /> : <Register />} />
        <Route path="/login" element={token ? <Home /> : <Login />} />
      </Routes>
    </Router>
  );
}

export default App;
