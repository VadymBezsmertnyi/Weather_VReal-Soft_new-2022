import React from "react";
import classNames from "classnames";
import { Typography } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { deleteCity } from "../../../redux/actions";
import { funcDeleteCity } from "../../../customFunctions/customFuncOther";
import ItemDiagram from './ItemComponents/itemDiagram';
import ItemFullInfo from './ItemComponents/itemFullInfo'

import iconClose from "../../../assets/images/close.png";
import { useStyles } from './styles';

const Item = ({ infoItem }) => {
    const { name, isoCountry, icon, InHeaven, date, place_id, temp, typeTemperature, diagram, colorDiagram } = infoItem;
    const cities = useSelector(state => state.cities);
    const dispatch = useDispatch();
    const styles = useStyles();
    
    const styleC = temp < 0 && styles.cold
    const styleF = temp < 32 && styles.cold
    const showStyleTypeTemp = typeTemperature === 'metric' ? styleC : styleF;

    const clickDeleteCity = () => {
        const newListCities = funcDeleteCity(place_id, cities);
        dispatch(deleteCity(newListCities))
    }

    return (
        <div className={classNames(styles.item, showStyleTypeTemp)}>
            <div className={styles.itemClose}>
                <img onClick={clickDeleteCity} className={styles.itemIconClose} src={iconClose} alt="icon_close" />
            </div>
            <div className={styles.itemInfo}>
                <div className={styles.itemCityInfo}>
                    <Typography className={styles.itemCityCountry}>{name}, {isoCountry}</Typography>
                    <Typography className={styles.itemCityData}>{date}</Typography>
                </div>
                <div className={styles.itemTempInfo}>
                    <img className={styles.itemIconSun} src={icon} alt={InHeaven} />
                    <Typography className={styles.itemTempType}>{InHeaven}</Typography>
                </div>
            </div>
            <ItemDiagram diagram={diagram} colorDiagram={colorDiagram} place_id={place_id} />
            <ItemFullInfo infoItem={infoItem} />
        </div>
    )
}

export default Item;