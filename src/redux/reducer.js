const cityDefault = JSON.parse(localStorage.getItem('List cities')) || [];
const languageDefault = localStorage.getItem('language') || "EN"
const defaultState = {
    cities: cityDefault,
    language: languageDefault,
}

const reducer = (state = defaultState, action) => {
    const { type, city, cities, language } = action;
    const verificationCities = state?.cities.filter(({ place_id }) => place_id === city?.place_id).length <= 0;
    const newListCity = verificationCities ? [...state.cities, city] : state.cities;
    const newLiastCityJson = JSON.stringify(newListCity);
    const citiesJson = JSON.stringify(cities);

    switch (type) {
        case "ADD_USER_CITY_DEFAULT":
            localStorage.setItem('List cities', newLiastCityJson);

            return { ...state, cities: newListCity };
        case "ADD_CITY":
            localStorage.setItem('List cities', newLiastCityJson);

            return { ...state, cities: newListCity };
        case "DELETE_CITY":
            localStorage.setItem('List cities', citiesJson);

            return { ...state, cities };
        case "EDIT_TYPE_TEMP_CITY":
            localStorage.setItem('List cities', citiesJson);

            return { ...state, cities };
        case "EDIT_LANG":
            localStorage.setItem("language", language);
            localStorage.setItem('List cities', citiesJson);

            return { ...state, language, cities };
        default:
            return state;
    }
}

export default reducer;