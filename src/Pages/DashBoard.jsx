import List from "../components/List";

function DashBoard (props){

    return(
        <section>
            {props.recipesList.map((recipeObj)=>{
                return(
                    <List key={recipeObj.id}
                    itemsDetails={recipeObj}
                    deleteCallBack={props.deleteCallBack} 
                    />

                )
            })}
        </section>
    )


}

export default DashBoard;