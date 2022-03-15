import React from "react";
import { Typography } from "@material-ui/core";
import classNames from "classnames";

const CustomOtherInfo = ({ nameTypeInfo, valueTypeInfo, colorValueTypeInfo = 'black', space = false, symbolNameTypeInfo, stateStyle, styleMarker = '' }) => {
    const addSpace = space && ` `;
    
    return (
        <Typography component={'span'} className={classNames(stateStyle)}>
            {nameTypeInfo} &nbsp;
            <Typography style={{ color: colorValueTypeInfo }} className={classNames(stateStyle, styleMarker)}>
                {valueTypeInfo}{addSpace}{symbolNameTypeInfo}
            </Typography>
        </Typography>
    )
}

export default CustomOtherInfo;