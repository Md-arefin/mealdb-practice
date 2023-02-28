const loadMeals = () =>{
    const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=chicken';
    fetch(url)
    .then(Response => Response.json())
    .then(data => displayMeals(data.meals));
}

const displayMeals = meals =>{
    // console.log(meals);
    meals.forEach( meal =>{
        // console.log(meal);
        const mealContainer = document.getElementById('meal-container');
        const mealDiv = document.createElement('div')
        mealDiv.classList.add('card', 'col-md-5', 'mb-3')
        mealDiv.innerHTML =`
        <div class="row g-0">
            <div class="col-md-4">
                <img src="${meal.strMealThumb}" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                    <p class="card-text">Category: ${meal.strCategory}</p>
                    <p class="card-text"><small class="text-muted">Area: ${meal.strArea}</small></p>
                </div>
            </div>
        </div>
        `;
        mealContainer.appendChild(mealDiv);
    })
}

loadMeals();