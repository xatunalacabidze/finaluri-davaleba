let apiUrl = "https://restaurant.webwide.ge/api/Categories/GetAll";
let categoriesList = [];

let categoriesListContainer = document.getElementById("categories-list");
fetch(apiUrl, {
  method: "GET",
})
  .then((response) => response.json()) 
  .then((categories) => {
    categories.forEach((category) => {
      categoriesList.push(category);
    });

    categoriesList.forEach((category) => {
      categoriesListContainer.innerHTML += `
        <li> (${category.id}) ${category.name} </li>
        `;
    });
  });

function searchDish() {
let dishId = document.getElementById("dish-id").value;
  let CategoryApiUrl =
   
  
   "https://www.themealdb.com/api/json/v1/1/filter.php?i=";
  let formedUrl = CategoryApiUrl + dishId;
  console.log(formedUrl);
  let productsList = [];
  let productContainer = document.getElementById("product-container");
  

  fetch(formedUrl, {
    method: "GET",
  })
    .then((response) => response.json()) 
    .then((meals) => {
        
        productsList = [];
        productContainer.innerHTML = "";
        console.log(meals) 
       // producstListCategory.innerHTML  = products.name
      
       meals.meals.forEach((meal) => {
        productsList.push(meal);
        console.log(meal);
      });

      productsList.forEach((meal) => {
        productContainer.innerHTML += `
      <div cl   ass="card" style="width: 18rem;">
      <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
      <div class="card-body">
          <p class="card-text">${meal.strMeal}</p>
        </div>
        </div>
        `;
      });
    });
}
