const API_KEY = "YOUR_API_KEY_HERE";

async function getWeather() {
    const city = document.getElementById("city").value;

    if (city === "") {
        alert("Please enter city name");
        return;
    }

    const url =
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        document.getElementById("cityName").innerText = data.name;
        document.getElementById("temp").innerText =
            `Temperature: ${data.main.temp} °C`;
        document.getElementById("humidity").innerText =
            `Humidity: ${data.main.humidity}%`;

        const icon = data.weather[0].icon;
        document.getElementById("icon").src =
            `https://openweathermap.org/img/wn/${icon}@2x.png`;

    } catch (error) {
        alert("City not found!");
    }
}
