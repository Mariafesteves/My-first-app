import './App.css';
import { useState } from 'react';
import { Routes, Route } from "react-router-dom"; // Removed BrowserRouter alias
import RecipeBook from "./assets/RecipeBook.json";
import { Footer } from './components/Footer';
import SideBar from './components/Sidebar';
import List from './components/List';

import About from './Pages/About';
import ItemDetails from './Pages/ItemDetails';
import AddItems from './Pages/AddItems';
import SearchBar from './components/SearchBar';

function App() {
  console.log("app is rendering")

  const [recipes, setRecipes] = useState(RecipeBook);
  const [filteredRecipes, setFilteredRecipes]= useState(RecipeBook)

  const createItem = (newItemDetails) => {
    const itemsIds = recipes.map((recipeObj) => recipeObj.id);
    const maxId = Math.max(...itemsIds);
    const nextId = maxId + 1;

    const newItem = {
      ...newItemDetails,
      id: nextId,
    };
    setRecipes([...recipes, newItem])
    setFilteredRecipes([...recipes, newItem])
  }


  const deleteItem = (itemsDelete) => {
    const newRecipes = recipes.filter((recipe) => recipe.id !== itemsDelete);
    setRecipes(newRecipes);
    setFilteredRecipes(newRecipes);
  };

  const handleSearch= (input)=>{
  const filtered= recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(input.toLowerCase())
  );

  setFilteredRecipes(filtered)

}


  return (
    <>

      <SideBar />
      <SearchBar onSearch={handleSearch}/>

      <div>
        <Routes>
          <Route path="/" element={<List recipesList={filteredRecipes} deleteCallBack={deleteItem}/>} />
          <Route path="/items/:itemsId" element={<ItemDetails recipesList={recipes} />} />
          <Route path="*" element={<h1>Page not found</h1>} />
          <Route path="/about" element={<About></About>} />
          <Route path="/addItems" element={<AddItems callbackToCreate={createItem} />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}


export default App;