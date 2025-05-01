import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css"

function AddItems(props) {
    const [name, setName] = useState("");
    const [calories, setCalories] = useState("");
    const [servings, setServings] = useState("");
    const [image, setImage]= useState("")

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const newItem = {
            name: name,
            calories: Number(calories), 
            servings: Number(servings),
            image:image,
        };

        props.callbackToCreate(newItem);

        
        setName("");
        setCalories("");
        setServings("");
        setImage("")

        
        navigate("/");
    };

    return (
        <section>
            <h2>Create New Recipe</h2>

            <form onSubmit={handleSubmit}>
                <label className="create">
                    Recipe's name:
                    <input
                        type="text"
                        required
                        name="name"
                        placeholder="Add name"
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
                        placeholder="Add calories"
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
                        placeholder="Add servings"
                        value={servings}
                        onChange={(e) => setServings(e.target.value)}
                    />
                </label>
                <label className="create">
                    Image:
                    <input
                        type="number"
                        min={1}
                        required
                        name="image"
                        placeholder="Add image"
                        value={image}
                        onChange={(e) => setServings(e.target.value)}
                    />
                </label>

                <button type="submit">Create</button>
            </form>
        </section>
    );
}

export default AddItems;
