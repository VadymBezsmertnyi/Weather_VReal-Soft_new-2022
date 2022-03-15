import { infoWeatherCities } from "./customFuncWeather";

export const funcDeleteCity = (placeId, cities) => {
    const newListCities = cities.filter(({ place_id }) => place_id !== placeId);
    return newListCities;
}

export const funcEditTypeTemp = async (placeId, cities, typeTemperature, language) => {
    const editTypeCityList = cities.map(city => {
        if (city.place_id === placeId) {
            return { ...city, typeTemperature }
        }
        return city;
    });

    return await infoWeatherCities(editTypeCityList, language)
}