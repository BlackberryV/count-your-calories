import "./RecipeItem.css"

const RecipeItem = ({recipe}) => {
    return (
        <div className={"RecipeItem"}>
            <img src={recipe.recipe.image} alt={recipe.recipe.label}/>
            <div>
                <div className={"label"}>{recipe.recipe.label}</div>
                <div>Calories: {Math.round(recipe.recipe.calories)}</div>
            </div>
        </div>
    )
}

export default RecipeItem;