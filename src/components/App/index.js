import { useEffect, useState } from "react";
import "./App.css";
import Input from "../Input";
import DrinkList from "../DrinkList";
import Header from "../Header";

function App() {
  // set the state
  const [drink, setDrink] = useState([]);
  const [refresh, setRefresh] = useState(false);

  // write an async function to get data from cocktails
  async function fetchData(drink) {
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${drink}` // use string interpolation to insert the searched drink into the API url
    );
    const data = await response.json();
    const fetchedArray = data.drinks;
    setDrink(fetchedArray.splice(0, 10));
    console.log(fetchedArray);
  }

  // useEffect to run the function every time a new search is made
  useEffect(() => {
    fetchData();
  }, [drink]);

  return (
    <div className="App">
      <Header />
      <Input onSubmit={fetchData} />
      <div className="drink-display">
        {drink.map((item, index) => {
          return (
            <DrinkList
              onClick={(evt) => {
                setRefresh(true);
                console.log("refresh", evt);
              }}
              refresh={refresh}
              name={item.strDrink}
              image={item.strDrinkThumb}
              id={item.idDrink}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
