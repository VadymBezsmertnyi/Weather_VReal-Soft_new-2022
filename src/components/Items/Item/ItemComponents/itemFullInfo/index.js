import React from "react";
import { Typography } from "@material-ui/core";
import classNames from "classnames";
import { useSelector, useDispatch } from "react-redux";
import { editTypeTempCity } from "../../../../../redux/actions";
import { funcEditTypeTemp } from "../../../../../customFunctions/customFuncOther"
import CustomOtherInfo from "./customOtherInfo";
import { useStyles } from './styles';

const ItemFullInfo = ({ infoItem }) => {
    const { temp, feels, wind, humidity, pressure, typeTemperature, place_id, colorDiagram } = infoItem;
    const typeTemperatureLike = typeTemperature === 'metric' ? '°C' : '°F'
    const typeTemperatureButtons = typeTemperature !== 'metric';
    const showWindText = typeTemperature === 'metric' ? 'm/s' : 'm/h';
    const cities = useSelector(state => state.cities);
    const language = useSelector(state => state.language);
    const dispatch = useDispatch();
    const styles = useStyles();

    const editTypeTemp = async (type) => {
        if (typeTemperature !== type) {
            const newListCities = await funcEditTypeTemp(place_id, cities, type, language)
            dispatch(editTypeTempCity(newListCities))
        }
    }

    return (
        <div className={styles.itemFullInfo}>
            <div className={styles.itemLeftInfo}>
                <div className={styles.itemTemp}>
                    <Typography className={styles.itemLeftTemp}>{temp}</Typography>
                    <div className={styles.itemLeftTypeTemp}>
                        <Typography
                            className={classNames(styles.itemTextTypeTemp, typeTemperatureButtons && styles.offTexttypeTemp)}
                            onClick={() => editTypeTemp('metric')}
                        >°C</Typography>
                        <div className={styles.borderTypeTemp} />
                        <Typography
                            className={classNames(styles.itemTextTypeTemp, !typeTemperatureButtons && styles.offTexttypeTemp)}
                            onClick={() => editTypeTemp('imperial')}
                        >°F</Typography>
                    </div>
                </div>
                <CustomOtherInfo
                    key={'FeelsLike'}
                    nameTypeInfo={`Feels like: `}
                    valueTypeInfo={feels}
                    space={true}
                    symbolNameTypeInfo={typeTemperatureLike}
                    stateStyle={styles.itemTextLikeTemp}
                    styleMarker={styles.itemTextLikeTempMarker}
                />
            </div>
            <div className={styles.itemRightInfo}>
                <CustomOtherInfo
                    key={'Wind'}
                    nameTypeInfo={`Wind:`}
                    valueTypeInfo={wind}
                    space={true}
                    colorValueTypeInfo={colorDiagram}
                    symbolNameTypeInfo={showWindText}
                    stateStyle={styles.itemRightTextInfo}
                />
                <CustomOtherInfo
                    key={'Humidity'}
                    nameTypeInfo={`Humidity:`}
                    valueTypeInfo={humidity}
                    colorValueTypeInfo={colorDiagram}
                    symbolNameTypeInfo={"%"}
                    stateStyle={styles.itemRightTextInfo}
                />
                <CustomOtherInfo
                    key={'Pressure'}
                    nameTypeInfo={`Pressure:`}
                    valueTypeInfo={pressure}
                    colorValueTypeInfo={colorDiagram}
                    symbolNameTypeInfo={"Pa"}
                    stateStyle={styles.itemRightTextInfo}
                />
            </div>
        </div>
    )
}

export default ItemFullInfo;