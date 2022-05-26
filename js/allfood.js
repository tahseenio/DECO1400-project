let Truckdata = [];

// fetch Data of all trucks and use spread operator to place objects in an array
const fetchData = async () => {
  try {
    const promise = await fetch('../files/trucks.json');
    const data = await promise.json();
    Truckdata = [...data];
    setData();
  } catch (error) {
    alert(error.message);
  }
};
fetchData();

const searchBar = document.querySelector('.allfood__searchbar');
const foodCategoryFilter = document.getElementById('allfood__filter');
const resetAll = document.getElementById('reset__button');

let searchResult = '';
let searchFilter = '';

// handles the search bar input
const handleSearchResult = () => {
  searchResult = searchBar.value;
  setData();
};

// handles the filter input
const handleFilterChange = () => {
  searchFilter = foodCategoryFilter.value;
  setData();
};

// reset button resets filter and search inputs
const resetFilterAndSearch = () => {
  foodCategoryFilter.value = '';
  searchResult = '';
  searchBar.value = '';
  searchFilter = '';
  setData();
};

searchBar.addEventListener('keyup', handleSearchResult);
foodCategoryFilter.addEventListener('change', handleFilterChange);
resetAll.addEventListener('click', resetFilterAndSearch);

const setData = () => {
  const allFoodHTML = document.getElementById('all-food__container');
  const foodArray = Truckdata.filter(
    (elem) =>
      elem.name.toLowerCase().includes(searchResult) ||
      elem.bio.toLowerCase().includes(searchResult)
  ) //search form input
    .filter((elem) => elem.category.toLowerCase().includes(searchFilter)) //filters based on user select option
    .map((elem) => allFoodDetailInnerHTML(elem))
    .join('');
  // if search result doesnt match and foodcart names return No results found
  allFoodHTML.innerHTML =
    foodArray.length > 0
      ? foodArray
      : `<div class="no-result--error">No results found</div>`;
};

// get truck id from localstorage
const handleClick = (event) => {
  const truckID = event.target.getAttribute('truck-id');
  localStorage.setItem('id', truckID);
};

// InnerHTML that is dynamically created using map and truck id
const allFoodDetailInnerHTML = (elem) => {
  return `<div class="foodcart__card foodcart__card--allfoods">
  
  <img
    class="foodcart__image"
    src=${elem.cover_photo.src}
    alt="${elem.name} image"
    loading="lazy"
  /> 
  <div class="foodcart__lower">
    <div class="foodcart__info--wrapper">
      <p>Cart Name: ${elem.name}</p>
      <p>Type of food: ${elem.category}</p>
    </div>
    <a href="./detail.html" truck-id=${elem.truck_id} onclick="handleClick(event)">
      <button truck-id=${elem.truck_id} class="foodcart__button">
        Click here for more details
      </button>
    </a>
  </div>
</div>`;
};

const toTop = document.querySelector('.to-top__button');

// scroll back to top button click event listener
toTop.addEventListener('click', () => window.scrollTo(0, 0));
