const fetchData = async () => {
  const promise = await fetch('../assets/trucks.json')
  const data = await promise.json()
  const specificData = data.find(elem => elem.truck_id === localStorage.getItem('id'))

  const detailHTML = document.getElementById('food__detail')
  detailHTML.innerHTML = detailInnerHTML(specificData)
}

fetchData()

const detailInnerHTML = (elem) => {
  const website = elem.website ? `${elem.website}` : "No website available"
  const description = elem.bio ? `${elem.bio}` : "No description available"
  const facebook = elem.facebook_url ? `${elem.facebook_url}` : "No facebook link available"
  const instagram = elem.instagram_handle ? `${elem.instagram_handle}` : "No instagram handle available"

  return (`<h1 class="detailed__title">${elem.name}</h1>
  <img
    class="detailed__image" 
    src="${elem.cover_photo.src}"
    alt="">
  <p></p>
  <p>Type of food: ${description}</p>
  <p>Facebook Link: <a class="social__link" href=${facebook}>${facebook}</a></p>
  <p>Instagram: <a class="social__link" href='https://www.instagram.com/${instagram}/'>@${instagram}</a></p>
  <p>Website: <a class="social__link" href=${website}>${website}</a></p>`)
}

