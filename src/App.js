import React from "react";
import Background from "./Background/Background";
import './App.css';
import Cursor from "./Elements/Cursor/Cursor";
import FpsCounter from "./Common/FpsCounter/FpsCounter";

export default function App() {
  return (
    <>
      <Background/>
      <Cursor/>
      <FpsCounter/>
    </>
  );
}
