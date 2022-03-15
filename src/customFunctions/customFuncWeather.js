import axios from "axios";
const KEY_WEATHER = process.env.REACT_APP_WEATHER_API_KEY
const URL_WEATHER_API = `https://api.openweathermap.org/data/2.5/weather`;
const URL_WEATHER_DIAGRAM_API = `https://api.openweathermap.org/data/2.5/onecall`;
const URL_WEATHER_ICONS = `https://openweathermap.org/img/wn`;

const createInfoFullCity = (city, main, wind, weather, lang) => {
    const tempRound = Math.round(main.temp);
    const showTextTemperatura = tempRound === 0 ? 0 : (tempRound > 0) ? `+${tempRound}` : tempRound;
    const feelsLikeRound = Math.round(main.feels_like);
    const showTextFeelsLike = feelsLikeRound === 0 ? 0 : (feelsLikeRound > 0) ? `+${feelsLikeRound}` : feelsLikeRound;

    const today = new Date();
    const optionsData = { weekday: 'short', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };

    const test = (type, temperature) => {
        const styleCDiagram = temperature < 0 ? "#5B8CFF" : "#FFA25B";
        const styleFDiagram = temperature < 32 ? "#5B8CFF" : "#FFA25B";
        return type === 'metric' ? styleCDiagram : styleFDiagram;
    }

    const styleDiagram = test(city.typeTemperature, Number(showTextTemperatura));

    return {
        ...city,
        temp: showTextTemperatura,
        wind: Math.round(wind.speed),
        humidity: main.humidity,
        pressure: main.pressure,
        feels: showTextFeelsLike,
        icon: `${URL_WEATHER_ICONS}/${weather[0].icon}.png`,
        InHeaven: weather[0].description,
        date: today.toLocaleDateString(lang, optionsData),
        colorDiagram: styleDiagram,
    };
};

export const diagramWeatherCity = async (city) => {
    const { location, typeTemperature } = city;
    const urlDiagramWeather = `${URL_WEATHER_DIAGRAM_API}?lat=${location.lat}&lon=${location.lng}&appid=${KEY_WEATHER}&units=${typeTemperature}`

    try {
        const { data: { daily } } = await axios.get(urlDiagramWeather);

        const diagramTempDays = daily.map(({ dt, temp }) => {
            const dayDiagramcity = new Date(dt * 1000).toLocaleDateString().slice(0, 5);

            return {
                day: dayDiagramcity,
                temp: Math.round(temp.day),
            }
        })

        return ({ ...city, diagram: [{ day: '', temp: '' }, ...diagramTempDays, { day: '', temp: '' }] });

    } catch (error) {
        return error;
    }
}

export const infoWeatherCity = async (city, lang) => {
    const { location, typeTemperature } = city;
    const urlWeather = `${URL_WEATHER_API}?lat=${location.lat}&lon=${location.lng}&appid=${KEY_WEATHER}&units=${typeTemperature}`;

    try {
        const { data: { main, wind, weather } } = await axios.get(urlWeather);

        return await createInfoFullCity(city, main, wind, weather, lang)
    } catch (error) {
        return (error);
    }
}

export const infoWeatherCities = async (listCities, lang) => {
    try {
        const addWeatherInfo = listCities.map(city => {
            const { location, typeTemperature } = city;
            const urlWeather = `${URL_WEATHER_API}?lat=${location.lat}&lon=${location.lng}&appid=${KEY_WEATHER}&units=${typeTemperature}`;

            return axios.get(urlWeather);
        })
        const fullInfoWeatherCities = await Promise.all(addWeatherInfo);

        const mainInfoWeatherCities = fullInfoWeatherCities.map((city, i) => {
            const { data: { main, wind, weather } } = city;


            return createInfoFullCity(listCities[i], main, wind, weather, lang)
        })

        const addDiagram = mainInfoWeatherCities.map(city => {
            return diagramWeatherCity(city);
        })

        return await Promise.all(addDiagram);
    } catch (error) {
        return (error);
    }
}