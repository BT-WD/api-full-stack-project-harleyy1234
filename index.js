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

