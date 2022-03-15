import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";
import { Typography } from "@material-ui/core";
import { editLang } from "../../redux/actions";
import { editLanguage } from '../../customFunctions/customFuncGoogle'
import globeIcon from "../../assets/images/Globe_icon.svg";
import arrowIcon from "../../assets/images/arrow.png";
import { useStyles } from './styles';

const SelectLanguage = () => {
    const [clickSelectLang, setClickSelectLang] = useState(false);
    const cities = useSelector(state => state.cities);
    const language = useSelector(state => state.language);
    const dispatch = useDispatch();
    const styles = useStyles();

    const optionsValues = [
        { value: 'EN', label: 'EN' },
        { value: 'UK', label: 'UK' },
        { value: 'HE', label: 'HE' },
    ]

    const enterValueLang = async ({ target: { innerText } }) => {
        const completedCityLang = await editLanguage(cities, innerText);

        setClickSelectLang(!clickSelectLang);
        dispatch(editLang(await completedCityLang, innerText));
    }

    return (
        <div className={styles.header}>
            <div
                className={classNames(styles.selectLang, clickSelectLang && styles.hideSelectLang)}
                onClick={() => setClickSelectLang(!clickSelectLang)}
            >
                <img className={classNames(styles.iconSelectLang)} src={globeIcon} alt="globe_icon" />
                <Typography className={styles.textSelectLang}>{language}</Typography>
                <img className={classNames(styles.iconSelectLang, clickSelectLang && styles.iconHideSelectLang)} src={arrowIcon} alt="arrow_icon" />
            </div>
            {clickSelectLang && (
                <div className={classNames(styles.modalSelectName)} onClick={() => setClickSelectLang(!clickSelectLang)}></div>
            )}
            {clickSelectLang && (
                <div className={styles.menuSelectValues}>
                    {optionsValues.map(({ value, label }) =>
                        <Typography
                            key={`valueKey_${label}`}
                            className={styles.menuSelectValue}
                            onClick={e => enterValueLang(e)}
                        >
                            {value}
                        </Typography>
                    )}
                </div>
            )}
        </div>
    )
}

export default SelectLanguage; 