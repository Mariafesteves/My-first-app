
import '../App.css';
import { Link } from "react-router-dom";

function List(props) {

    return (
        <section className="recipe-list">
            {props.recipesList.map((recipeObj) => {
                return (
                    <div key={recipeObj.id} className="recipe-card">
                        <img src={recipeObj.image} alt={recipeObj.name} className="card-image"></img>

                        <div className="recipe-content">
                            <h2><strong>{recipeObj.name}</strong></h2>
                        </div>


                        {recipeObj.calories <= 300 && (<div className="healthy-badge"> Healthy</div>
                        )}

                        <div className="recipe-buttons">

                            <Link to={`/items/${recipeObj.id}`} className="details-btn">Details</Link>
                            <button onClick={() => props.deleteCallBack(recipeObj.id)}>Delete recipe</button>
                        </div>
                    </div>
                );
            })}

        </section>
    )


}

export default List