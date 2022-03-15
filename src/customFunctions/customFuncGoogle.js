import axios from "axios";
import { infoWeatherCities, infoWeatherCity, diagramWeatherCity } from "./customFuncWeather";
const KEY_GOOGLE = process.env.REACT_APP_GOOGLE_MAPS_API_KEY
const URL_GOOGLE_API = 'https://maps.googleapis.com/maps/api/place/';
const lang = localStorage.getItem('language') || "EN";

const createInfoCity = (result, placeId, contry) => {
    return {
        name: result.address_components[0].long_name,
        place_id: placeId,
        location: result.geometry.location,
        nameCoutry: contry.long_name,
        isoCountry: contry.short_name,
        typeTemperature: 'metric',
    };
}

export const addCityPlaceId = async (placeId, language) => {
    try {
        const url = `${URL_GOOGLE_API}details/json?place_id=${placeId}&key=${KEY_GOOGLE}&language=${language}`;
        const { data: { result } } = await axios.get(url);
        const contry = result.address_components.find(({ types }) => types.includes("country"));
        const cityInfoGoogle = createInfoCity(result, placeId, contry);
        const cityAddDiagram = await diagramWeatherCity(cityInfoGoogle);

        return await infoWeatherCity(cityAddDiagram, language);
    } catch (error) {
        return (error);
    }
}

export const defaultUserCity = async () => {
    try {
        const coordinates = await new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(
                position => {
                    resolve({ longitude: position.coords.longitude, latitude: position.coords.latitude });
                },
                error => reject(error),
                { enableHighAccuracy: false, timeout: 20000, maximumAge: 1000 }
            )
        })
        const { latitude, longitude } = coordinates;
        const getPlaceIdCity = `${URL_GOOGLE_API}nearbysearch/json?location=${latitude},${longitude}&radius=1&key=${KEY_GOOGLE}&language=${lang}`;

        const mainInfoUser = await axios.get(getPlaceIdCity).then(async ({ data: { results } }) => {
            const placeId = results[0].place_id;
            return addCityPlaceId(placeId, lang);
        })

        return mainInfoUser
    } catch (error) {
        return error;
    }
}

export const editLanguage = async (listCity, lang) => {
    try {
        const editLangCities = listCity.map(city => {
            const placeId = city.place_id;
            const url = `${URL_GOOGLE_API}details/json?place_id=${placeId}&key=${KEY_GOOGLE}&language=${lang}`;
            const result = axios.get(url);

            return result;
        })
        const resultClear = await Promise.all(editLangCities)
        const newListCity = resultClear.map(city => {
            const { data: { result } } = city;
            const contry = result.address_components.find(({ types }) => types.includes("country"));

            return createInfoCity(result, result.place_id, contry, lang)
        })

        return await infoWeatherCities(newListCity, lang);
    } catch (error) {
        return error
    }
}
