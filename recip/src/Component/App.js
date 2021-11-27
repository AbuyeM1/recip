import React, { useEffect, useState } from "react";
import "./styles.css";
import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";
import Recipe from "./Recipe";
function App() {
  const [search, setSearch] = useState("");
  const [recipes, setRecipes] = useState([]);

  const App_Id = "65b23a85";
  const App_Key = "a313f8f06482a0f0b0543b61461e089a";

  useEffect(() => {
    recipesGet();
  }, []);

  const recipesGet = async () => {
    const respons = await axios.get(
      `https://api.edamam.com/search?q=${search}&app_id=${App_Id}&app_key=${App_Key}`
    );
    console.log(respons);
    setRecipes(respons.data.hits);
  };

  const onInputChange = (event) => {
    setSearch(event.target.value);
    console.log(event.target.value);
  };

  const onSearchClick = () => {
    recipesGet();
  };

  return (
    <div className="App">
      <Header
        search={search}
        onInputChange={onInputChange}
        onSearchClick={onSearchClick}
      />
      <Recipe recipes={recipes} />
      <Footer />
    </div>
  );
}

export default App;
