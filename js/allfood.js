let Truckdata = [];

const searchBar = document.querySelector('.allfood__searchbar');
const foodCategoryFilter = document.getElementById('allfood__filter');
const resetAll = document.getElementById('reset__button');

let searchResult = '';
let searchFilter = '';

const handleSearchResult = () => {
  searchResult = searchBar.value;
  setData();
};

const handleFilterChange = () => {
  searchFilter = foodCategoryFilter.value;
  setData();
};

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

const fetchData = async () => {
  try {
    const promise = await fetch('../assets/trucks.json');
    const data = await promise.json();
    Truckdata = [...data];
    setData();
  } catch (error) {
    alert(error.message);
  }
};

const setData = () => {
  const allFoodHTML = document.getElementById('all-food__container');
  const foodArray = Truckdata.filter(
    (elem) =>
      elem.name.toLowerCase().includes(searchResult) ||
      elem.bio.toLowerCase().includes(searchResult)
  )
    .filter((elem) => elem.category.toLowerCase().includes(searchFilter))
    .map((elem) => allFoodDetailInnerHTML(elem))
    .join('');
  allFoodHTML.innerHTML =
    foodArray.length > 0
      ? foodArray
      : `<div class="no-result--error">No results found</div>`;
};

fetchData();

const handleClick = (event) => {
  const truckID = event.target.getAttribute('truck-id');
  localStorage.setItem('id', truckID);
};

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

toTop.addEventListener('click', () => window.scrollTo(0, 0));
