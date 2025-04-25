
import { Link, useParams } from "react-router-dom";


function ItemDetails(props){

    const {itemsId} = useParams ();

    const recipe = props.recipesList.find((recipeObj)=>{
        return recipeObj.id == itemsId
    })

    return(
        <>
        <h1>{recipe.name}</h1>
        

        <p>
            <Link to="/">Back</Link>
        </p>
        </>
    )

}

export default ItemDetails;