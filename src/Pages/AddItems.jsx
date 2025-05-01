import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css"

function AddItems(props) {
    const [name, setName] = useState("");
    const [calories, setCalories] = useState("");
    const [servings, setServings] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const newItem = {
            name: name,
            calories: Number(calories), 
            servings: Number(servings), 
        };

        props.callbackToCreate(newItem);

        
        setName("");
        setCalories("");
        setServings("");

        
        navigate("/");
    };

    return (
        <section>
            <h2>Create New Recipe</h2>

            <form onSubmit={handleSubmit}>
                <label className="create">
                    Name:
                    <input
                        type="text"
                        required
                        name="name"
                        placeholder="Recipe name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>

                <label className="create">
                    Calories:
                    <input
                        type="number"
                        min={1}
                        max={3000}
                        required
                        name="calories"
                        placeholder="Recipe calories"
                        value={calories}
                        onChange={(e) => setCalories(e.target.value)}
                    />
                </label>

                <label className="create">
                    Servings:
                    <input
                        type="number"
                        min={1}
                        required
                        name="servings"
                        placeholder="Recipe servings"
                        value={servings}
                        onChange={(e) => setServings(e.target.value)}
                    />
                </label>

                <button type="submit">Create</button>
            </form>
        </section>
    );
}

export default AddItems;
