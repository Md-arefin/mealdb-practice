const loadMeals = (searchText) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    fetch(url)
        .then(Response => Response.json())
        .then(data => displayMeals(data.meals))
        .catch(error =>{
            console.log(error);
        })
}

const displayMeals = meals => {
    // console.log(meals);
    const mealsContainer = document.getElementById('meal-container');
    mealsContainer.innerText = '';
    meals.forEach( meal => {
        // console.log(meal);
        const mealDiv = document.createElement('div')
        mealDiv.classList.add('card')
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
                    <button onclick="LoadMealDetails(${meal.idMeal})" type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#mealDetails">
                    Learn more </button>
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

const LoadMealDetails = (idMeal) => {
    // console.log(idMeal);
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayMealDetails(data.meals[0]))
    .catch(error =>{
        console.log(error);
    })
}

const displayMealDetails = meal =>{
    // console.log(meal);
    document.getElementById('mealDetailsLabel').innerText = meal.strMeal;
    document.getElementById('mealDetailsBody').innerHTML=`
    <img class ="img-fluid rounded" src="${meal.strMealThumb}">
    <p class="my-2"><span class="fw-bold">Category :</span> ${meal.strCategory}</p>
    <p class="my-2"><span class="fw-bold">Area :</span> ${meal.strArea}</p>
    <p class="my-2"><span class="fw-bold">Instructions :</span> ${meal.strInstructions}</p>
    <a href="${meal.strYoutube}" class="my-2"><span class="fw-bold">Youtube</span> </a>
    `
}

loadMeals("chicken");