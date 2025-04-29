
import { Link, useParams } from "react-router-dom";


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
        <div>
            <div>
                <h2>{recipe.name}</h2>
                <img src={recipe.image} alt={recipe.name} />
                <p> Calories: {recipe.calories}</p>
                <p> Servings: {recipe.servings}</p>
            </div>
            <div>
                <Link to="/">Back</Link>
            </div>
        </div>
    );
}

export default ItemDetails;
