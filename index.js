const results = document.getElementById("results");
const areaDropdown = document.getElementById("areaFilter");

async function loadCountries() {

const response =
await fetch(
"https://www.themealdb.com/api/json/v1/1/list.php?a=list"
);

const data = await response.json();
data.meals.forEach(country => {


const option =
document.createElement("option");


option.value = country.strArea;
option.textContent = country.strArea;
areaDropdown.appendChild(option);
});

}


async function searchMeals() {

const query =
document
.getElementById("mealSearch")
.value;

const area =
areaDropdown.value;

results.innerHTML =
"<p>Loading recipes...</p>";


let url =
"https://www.themealdb.com/api/json/v1/1/search.php?s=" + query;

if(area){

url =
"https://www.themealdb.com/api/json/v1/1/filter.php?a=" + area;
}


const response =
await fetch(url);

const data =
await response.json();

results.innerHTML = "";

if(!data.meals){

results.innerHTML =
"<p>No meals found</p>";

return;
}

data.meals.forEach(meal => {

displayMeal(meal.idMeal);

});

}

