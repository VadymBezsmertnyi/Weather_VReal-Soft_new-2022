import React from "react";
import { AreaChart, XAxis, Tooltip, Area, LabelList } from 'recharts';
import { useStyles } from './styles';

const ItemDiagram = ({ diagram, colorDiagram, place_id }) => {
    const styles = useStyles();

    return (
        <div className={styles.itemDiagram}>
            <AreaChart width={320} height={100} data={diagram}
                margin={{ top: 18, right: -15, left: -15, bottom: 0 }}>
                <defs>
                    <linearGradient id={`colorUv_${place_id}`} x1="0" y1="0" x2="0" y2="1">
                        <stop offset="40%" stopColor={colorDiagram} stopOpacity={0.8} />
                        <stop offset="100%" stopColor={colorDiagram} stopOpacity={0} />
                    </linearGradient>
                </defs>
                <XAxis dataKey="day"
                    tickLine={false}
                    axisLine={false}
                    minTickGap={1}
                    style={{
                        font: 'normal normal normal 8px Jost',
                        opacity: '0.5',
                    }}
                    allowDataOverflow={true}
                />
                <Area type="monotone" dataKey="temp" stroke='#fffaf100' fillOpacity={0.5} fill={`url(#colorUv_${place_id})`}>
                    <LabelList dataKey="temp"
                        position="top"
                        style={{
                            font: 'normal normal normal 10px Jost',
                            color: 'black',
                            opacity: '0.5',
                        }} />
                </Area>
            </AreaChart>
        </div>
    )
}

export default ItemDiagram;