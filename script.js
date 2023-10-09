const searchBox = document.querySelector("input[type = text]")
const searchBtn = document.querySelector(".search button")

searchBtn.addEventListener("click", (e) => {
    const urlLocation = searchBox.value
    const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${urlLocation}`;
    getWeatherStatus(url)
})

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2a443a0653msh8420ee8834b21efp1577aejsn91c39b7d86f7',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};

const resultBox = document.querySelector(".text")

const getWeatherStatus = async (url) => {
    try {
        const response = await fetch(url, options)
        const result = await response.json()
        // resultBox.textContent = result.
        console.log(result)
        resultBox.textContent =
        `
        ${result.current.cloud} 
        ${result.current.condition.icon} 
        ${result.current.condition.text}
        ${result.current.feelslike_c}
        ${result.current.feelslike_f}
        `
        // resultBox.textContent = 
        // resultBox.textContent = 
        // resultBox.textContent = result.current.condition.icon
        // resultBox.textContent = result.current.condition.icon
        // resultBox.textContent = result.current.condition.icon
    } catch (error) {
        // resultBox.textContent = error
        console.error(error)
    }
}
