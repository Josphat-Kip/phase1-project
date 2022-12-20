const appId="76373897";
const appKey="df1f360db504337e63b125276c33e88f";
constbaseUrl =`https://api.edamam.com/api/recipes/v2?type=public&app_id=${appId}$app_key=${appKey}`;

function loadRecipes(type="paneer"){
    const url =baseUrl + `$q=${type}`;
    fetch (url)
    .then(res=>res.json())
    .then(data=>console.log(data.hits))
    .catch(error=> console.log(error))
}
loadRecipies();
constrenderRecipies= (recipeList=[])=>{
    recipeList.forEach(recipeObj =>{
        const {label}=recipeObj.recipe;
const htmlStr=`<div class="recipe">
<div class="recipe-title">Recipe Title</div>
<div class="recipe-image">
  <img src="recipe.jpg" alt="Recipe" />
</div>
<div class="recipe-text">
  <ul>
    <li>step1</li>
    <li>step2</li>
    <li>step3</li>
    <li>step4</li>
    <li>step5</li>
  </ul>
</div>
</div>`
   });
};