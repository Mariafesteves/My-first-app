
import { Link, useParams } from "react-router-dom";
import "../App.css"

function ItemDetails({recipesList}) {

    const { itemsId } = useParams();

    const recipe = recipesList.find((recipe) => {
        return recipe.id === itemsId;
    });

    if (!recipe) {
        return (
            <div> Page not found </div>
        );
    }

    return (
        <div className="details">
            <div>
                <h2>{recipe.name}</h2>
                <img src={recipe.image} alt={recipe.name} className="details-image"/>
                <p> <strong>Calories: </strong>{recipe.calories}</p>
                <p> <strong>Servings: </strong>{recipe.servings}</p>
            </div>
            <div>
                <Link to="/"> <button>Back</button></Link>
            </div>
        </div>
    );
}

export default ItemDetails;
