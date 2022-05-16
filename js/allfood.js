const fetchData = async () => {
  const promise = await fetch('../trucks.json')
  const data = await promise.json()
  console.log(data)
}

fetchData()