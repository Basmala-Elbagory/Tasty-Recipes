import { recipes } from "../data";
import RecipeCard from "./RecipeCard";

function RecipeList()
{
    return(
     <div className="RecipeSection" id="R">

    <h2>Popular Recipes 🤎</h2>

    <div className="RecipeCards">
        {recipes.map(recipe => (
            <RecipeCard
                key={recipe.id}
                name={recipe.name}
                category={recipe.category}
                time={recipe.time}
                image={recipe.image}
                description={recipe.description}
                isPopular={recipe.isPopular}
            />
        ))}
    </div>

</div>
    );

}
export default RecipeList