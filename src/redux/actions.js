export const addUser = (cityUser) => ({ type: 'ADD_USER_CITY_DEFAULT', city: cityUser });
export const addCity = (addCity) => ({ type: 'ADD_CITY', city: addCity });
export const deleteCity = (newListCities) => ({ type: 'DELETE_CITY', cities: newListCities });
export const editTypeTempCity = (newListCities) => ({ type: 'EDIT_TYPE_TEMP_CITY', cities: newListCities });
export const editLang = (cities, lang) => ({ type: 'EDIT_LANG', cities, language: lang });

