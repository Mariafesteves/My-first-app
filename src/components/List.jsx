import RecipeBook from "../assets/RecipeBook.json"
import { useState } from "react";
import "../components/List.css"

function List(){
    const [recipes, setRecipes]= useState(RecipeBook)

    const deleteItem= (itemsDelete)=> {
        const newRecipes = recipes.filter((recipe)=>{
            if(recipe.id !== itemsDelete){
                return true
            }
            else{
                return false
            }
        })
        setRecipes(newRecipes)
    }


    return(
        <section>
            {recipes.map((recipeObj) => {
                return (
                <div key={recipeObj.id} className="card">
                    <img src={recipeObj.image} alt={recipeObj.name} className="card-image"></img>
                    <h3 className="card-info"><strong>{recipeObj.name}</strong></h3>
                    <p className="card-info"> Calories: {recipeObj.calories}</p>
                    <p className="card-info"> Servings: {recipeObj.servings}</p>
                    
                        <div className="label">
                            {recipeObj.calories <= 300 && (
                            <span className="healthy"> Healthy </span>
                        )}
                        </div>

                        <button onClick={()=> deleteItem(recipeObj.id)}>Delete recipe</button>
                </div>
                );
            })}

        </section>
    )


}

export default List