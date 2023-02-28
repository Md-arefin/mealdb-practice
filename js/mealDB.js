const loadMeals = (searchText) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    fetch(url)
        .then(Response => Response.json())
        .then(data => displayMeals(data.meals));
}

const displayMeals = meals => {
    // console.log(meals);
    const mealsContainer = document.getElementById('meal-container');
    mealsContainer.innerText = '';
    meals.forEach( meal => {
        console.log(meal);
        const mealDiv = document.createElement('div')
        mealDiv.classList.add('card', 'mb-3')
        mealDiv.innerHTML = `
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
        mealsContainer.appendChild(mealDiv);
    })
}

const searchMeal = () => {
    const searchText = document.getElementById('search-field').value;
    // console.log(searchText);
    loadMeals(searchText);
}

loadMeals("chicken");