import { recipes } from "../data";
import RecipeCard from "./RecipeCard";

function Chef()
{
    let found;
    if(Chef)
    {
         found=true;
    }
    else{found=false;}
     return(
     <div className="RecipeSection" id="Chef">

    <h2>Chef’s Choice 👨‍🍳</h2>

    <div className="RecipeCards" id="ChefCard">
        {recipes.map(recipe=> (
            (recipe.Chef && (
            <RecipeCard
                key={recipe.id}
                name={recipe.name}
                category={recipe.category}
                time={recipe.time}
                image={recipe.image}
                description={recipe.description}
                isPopular={recipe.isPopular}
            />
        ))))}
    </div>

</div>
    );

}
export default Chef