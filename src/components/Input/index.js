import React from "react";
import { useState } from "react";
import "./index.css";

// create function to take in an input submitted by the user
function Input({ onSubmit }) {
  const [drink, setDrink] = useState(""); // set the initial state
  // create a function to take in the value from the input
  function getValue(e) {
    setDrink(e.target.value);
    console.log(drink);
  }

  // function to prevent the page from automatically refreshing and to search the API
  function SearchApI(e) {
    e.preventDefault();

    onSubmit(drink);
  }

  return (
    <form>
      <input onChange={getValue} placeholder="Enter ingredient here 🥃" />
      <button onClick={SearchApI}>Search 🔍</button>
    </form>
  );
}

export default Input;
