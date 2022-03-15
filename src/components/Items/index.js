import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUser } from "../../redux/actions";
import Item from "./Item";
import { defaultUserCity } from "../../customFunctions/customFuncGoogle";
import { useStyles } from './styles';

const Items = () => {
    const items = useSelector(state => state.cities);
    const dispatch = useDispatch();
    const styles = useStyles();

    useEffect(async () => {
        const defaultCityUser = await defaultUserCity();

        !defaultCityUser.message && dispatch(addUser(defaultCityUser));
    }, []);

    return (
        <div className={styles.listItems}>
            {items.map((infoItem) => <Item key={infoItem.place_id} infoItem={infoItem} />)}
        </div>
    )
}

export default Items;