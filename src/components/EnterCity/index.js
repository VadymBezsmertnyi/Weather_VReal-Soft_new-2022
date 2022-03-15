import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@material-ui/core";
import Autocomplete from "react-google-autocomplete";
import { addCityPlaceId } from "../../customFunctions/customFuncGoogle";
import { addCity } from "../../redux/actions";
import { useStyles } from './styles';

const KEY_GOOGLE = process.env.REACT_APP_GOOGLE_MAPS_API_KEY

const EnterCity = () => {
    const styles = useStyles();
    const language = useSelector(state => state.language);
    const dispatch = useDispatch();
    const [tempCity, setTempCity] = useState(null)
    const inputAutocomplete = useRef(null);

    const sendInfoCity = async () => {
        const { place_id } = tempCity;
        
        if (tempCity) {
            const infoCity = await addCityPlaceId(place_id, language);

            inputAutocomplete.current.value = '';
            dispatch(addCity(infoCity));
            setTempCity(null);
        }
    }

    return (
        <div className={styles.contInputCity}>
            <Autocomplete
                apiKey={KEY_GOOGLE}
                ref={inputAutocomplete}
                onPlaceSelected={(infoCityInput) => {
                    setTempCity(infoCityInput);
                }}
                className={styles.inputCity}
                language={language}
            />
            <Button onClick={sendInfoCity} className={styles.buttonInputCity}>Add</Button>
        </div>
    )
}

export default EnterCity;