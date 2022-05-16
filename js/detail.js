const fetchData = async () => {
  const promise = await fetch('../trucks.json')
  const data = await promise.json()
  const specificData = data.find(elem => elem.truck_id === localStorage.getItem('id'))
  console.log(specificData)

  const detailHTML = document.getElementById('food__detail')
  detailHTML.innerHTML = detailInnerHTML(specificData)

}

fetchData()

const detailInnerHTML = (elem) => {
  const website = elem.website ? `Website: ${elem.website}` : ""

  return (`<h1 class="detailed__title">${elem.name}</h1>
  <img
    class="detailed__image" 
    src="${elem.cover_photo.src}"
    alt="">
  <p>${elem.bio}</p>
  <p>Type of food: ${elem.category}</p>
  <p>Facebook Link: ${elem.facebook_url}</p>
  <p>Instagram @${elem.instagram_handle}</p>
  <p>${website}</p>`)
}