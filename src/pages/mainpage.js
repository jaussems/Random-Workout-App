import React from "react";
import ButtonComponent from "../components/ButtonComponent";
export default function mainpage() {
  return (
    <div>
      <h1>Welcome to the main page</h1>
      <div>
        <h2>Generate your workout here!</h2>
        <ButtonComponent text="GENERATE" />
      </div>
    </div>
  );
}
