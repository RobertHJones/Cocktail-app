import React from "react";
import { useState, useEffect } from "react";
import "./index.css";

function DrinkList({ name, image, id, onClick }) {
  const [selectedDrinkProperties, setSelectedDrinkProperties] = useState("");

  async function handleClick(e) {
    // take the id from the drink image and use it to search the api for the ingredients
    let newId = e.target.id;
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${newId}`
    );
    const data = await response.json();
    setSelectedDrinkProperties(data.drinks[0]);
  }
  useEffect(() => {
    setSelectedDrinkProperties("");
    console.log("id has changed");
  }, [id]);

  return (
    <div tabindex="0" onBlur={(evt) => setSelectedDrinkProperties("")}>
      <ul>
        <li id="drink">
          {name}
          <br></br>
          <div>
            <img onClick={handleClick} id={id} src={image} alt="" />{" "}
            {/* put the id into the image as id having got it from the API in the app}*/}
            <ul id="ingredient-list">
              <li>
                {selectedDrinkProperties.strMeasure1}
                {selectedDrinkProperties.strIngredient1}
              </li>
              <li>
                {selectedDrinkProperties.strMeasure2}
                {selectedDrinkProperties.strIngredient2}
              </li>
              <li>
                {selectedDrinkProperties.strMeasure3}
                {selectedDrinkProperties.strIngredient3}
              </li>
              <li>
                {selectedDrinkProperties.strMeasure4}
                {selectedDrinkProperties.strIngredient4}
              </li>
              <li>
                {selectedDrinkProperties.strMeasure5}
                {selectedDrinkProperties.strIngredient5}
              </li>
              <li>
                {selectedDrinkProperties.strMeasure6}
                {selectedDrinkProperties.strIngredient6}
              </li>
              <li>
                {selectedDrinkProperties.strMeasure7}
                {selectedDrinkProperties.strIngredient7}
              </li>
            </ul>
            <br></br>
            {selectedDrinkProperties.strInstructions}
          </div>
        </li>
      </ul>
    </div>
  );
}

export default DrinkList;
