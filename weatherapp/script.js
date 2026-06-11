/* ==========================
   OPEN WEATHER API KEY
========================== */

const API_KEY = "9d8f94ccc10e6afa8be270f67c00935f";

/* ==========================
   ELEMENTS
========================== */

const cityInput = document.getElementById("cityInput");
const weatherCard = document.querySelector(".weather-card");
const loader = document.querySelector(".loader");

const city = document.getElementById("city");
const condition = document.getElementById("condition");
const temp = document.getElementById("temp");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const feels = document.getElementById("feels");
const pressure = document.getElementById("pressure");
const icon = document.getElementById("icon");
const dateTime = document.getElementById("dateTime");

/* ==========================
   DATE & TIME
========================== */

function updateTime() {

    const now = new Date();

    dateTime.innerHTML =
        now.toLocaleString("en-IN", {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric",
            hour: "numeric",
            minute: "2-digit"
        });
}

setInterval(updateTime, 1000);
updateTime();

/* ==========================
   GET WEATHER
========================== */

async function getWeather() {

    const searchValue = cityInput.value.trim();

    if (searchValue === "") {
        alert("Please enter a city, state or country.");
        return;
    }

    loader.classList.remove("hidden");
    weatherCard.classList.add("hidden");

    try {

        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=${API_KEY}`
        );

        const data = await response.json();

        loader.classList.add("hidden");

        if (data.cod != 200) {
            alert("Location not found.");
            return;
        }

        updateWeatherUI(data);

    } catch (error) {

        loader.classList.add("hidden");

        console.error(error);

        alert("Something went wrong. Check your internet or API key.");
    }
}

/* ==========================
   UPDATE UI
========================== */

function updateWeatherUI(data) {

    city.innerHTML =
        `${data.name}, ${data.sys.country}`;

    condition.innerHTML =
        data.weather[0].description;

    temp.innerHTML =
        `${Math.round(data.main.temp)}°C`;

    humidity.innerHTML =
        `${data.main.humidity}%`;

    wind.innerHTML =
        `${Math.round(data.wind.speed * 3.6)} km/h`;

    feels.innerHTML =
        `${Math.round(data.main.feels_like)}°C`;

    pressure.innerHTML =
        `${data.main.pressure} hPa`;

    icon.src =
        `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;

    icon.alt =
        data.weather[0].description;

    setWeatherTheme(
        data.weather[0].main.toLowerCase()
    );

    weatherCard.classList.remove("hidden");

    weatherCard.animate(
        [
            {
                opacity: 0,
                transform: "translateY(40px)"
            },
            {
                opacity: 1,
                transform: "translateY(0)"
            }
        ],
        {
            duration: 800,
            easing: "ease"
        }
    );
}

/* ==========================
   WEATHER THEMES
========================== */

function setWeatherTheme(weatherType) {

    document.body.classList.remove(
        "sunny",
        "cloudy",
        "rainy"
    );

    if (
        weatherType.includes("rain") ||
        weatherType.includes("drizzle") ||
        weatherType.includes("thunderstorm")
    ) {

        document.body.classList.add("rainy");

    }
    else if (
        weatherType.includes("cloud")
    ) {

        document.body.classList.add("cloudy");

    }
    else {

        document.body.classList.add("sunny");

    }
}

/* ==========================
   ENTER KEY SEARCH
========================== */

cityInput.addEventListener(
    "keypress",
    function (e) {

        if (e.key === "Enter") {
            getWeather();
        }

    }
);

/* ==========================
   OPTIONAL:
   LOAD DEFAULT CITY
========================== */

// Uncomment if you want a default city on startup

/*
window.addEventListener("load", () => {

    cityInput.value = "Delhi";

    getWeather();

});
*/

/* ==========================
   FLOATING ICON MOVEMENT
========================== */

const floatingIcons =
    document.querySelectorAll(
        ".floating-icons span"
    );

floatingIcons.forEach((icon, index) => {

    icon.style.animationDuration =
        `${6 + index * 2}s`;

});

/* ==========================
   SEARCH INPUT EFFECT
========================== */

cityInput.addEventListener(
    "focus",
    () => {

        cityInput.parentElement.style.boxShadow =
            "0 15px 35px rgba(59,130,246,.4)";
    }
);

cityInput.addEventListener(
    "blur",
    () => {

        cityInput.parentElement.style.boxShadow =
            "none";
    }
);

/* ==========================
   CONSOLE MESSAGE
========================== */

console.log(
    "%cWeather Pro Loaded ☀️",
    "color:#60a5fa;font-size:18px;font-weight:bold;"
);