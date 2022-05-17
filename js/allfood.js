const fetchData = async () => {
  const promise = await fetch('../assets/trucks.json');
  const data = await promise.json();
  console.log(data);

  const allFoodHTML = document.getElementById('all-food__container');
  allFoodHTML.innerHTML = data.map(elem => allFoodDetailInnerHTML(elem)).join('')
};

fetchData();

const handleClick = (event) => {
  const truckID = event.target.getAttribute('truck-id')
  localStorage.setItem('id', truckID)
}

const allFoodDetailInnerHTML = (elem) => {
  return `<div class="foodcart__card foodcart__card--allfoods">
  <img
    class="foodcart__image"
    src=${elem.cover_photo.src}
    alt="Socal tacos food cart image"
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



