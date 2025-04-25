
import "../components/List.css"

function List(props) {

    return (
        <section>
            {props.recipesList.map((recipeObj) => {
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

                        <button onClick={() => props.deleteCallBack(recipeObj.id)}>Delete recipe</button>
                    </div>
                );
            })}

        </section>
    )


}

export default List