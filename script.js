const weatherForm = document.querySelector(".weatherForm")
const cityInput = document.querySelector(".cityInput")
const card = document.querySelector(".card")

const apiKey = "05fb34447adc0defdd79abf19b4b4575"


weatherForm.addEventListener("submit", async event=>{
    event.preventDefault()

    const city = cityInput.value

    if(city){
        try{
            const weatherData = await getWeatherData(city)
            displayWeatherInfo(weatherData)
        }

        catch(error){
            console.error(error)
            displayError(error)
        }
    }

    else{
        displayError("Please enter a city")
    }
})






async function getWeatherData(city){
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

    const response = await fetch(apiUrl)

    console.log(response)

}







function displayWeatherInfo(data){

}





function displayError(message){
    const errorDisplay = document.createElement("p")
    errorDisplay.textContent = message
    errorDisplay.classList.add("errorDisplay")

    card.textContent = ""
    card.style.display = "flex"
    card.appendChild(errorDisplay)
}

 