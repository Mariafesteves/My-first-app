import './App.css'
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RecipeBook from "./assets/RecipeBook.json"
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { Sidebar } from './components/Sidebar'
import List from './components/List'

import About from './Pages/About';
import DashBoard from './Pages/DashBoard';
import ItemDetails from './Pages/ItemDetailsPage';

function App() {

  const [recipes, setRecipes] = useState(RecipeBook);

  const deleteItem = (itemsDelete) => {
    const newRecipes = recipes.filter((recipe) => recipe.id !== itemsDelete);
    setRecipes(newRecipes);
  };

  return (
    <Router>
      <Navbar />
      <Sidebar />
      <div>
        <Routes>
          <Route 
            path="/" 
            element={<List recipesList={recipes} deleteCallBack={deleteItem} />} 
          />
          <Route path="/dashBoard" element={<DashBoard />} />
          <Route path="/items/: itemsId" element={<ItemDetails recipesList={recipes} />} />
          <Route path="*" element={<h1>Page not found</h1>} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;