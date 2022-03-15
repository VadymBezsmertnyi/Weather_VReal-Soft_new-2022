import { makeStyles } from "@material-ui/core/styles"

export const useStyles = makeStyles({
    itemFullInfo: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '1.7rem 1rem 0rem',
    },
    itemTemp: {
        width: '10rem',
        display: 'flex',
    },
    itemLeftTemp: {
        fontSize: '42.5px',
    },
    itemLeftTypeTemp: {
        display: 'flex',
        fontSize: '42.5px',
    },
    borderTypeTemp: {
        width: '2px',
        background: 'black',
        height: '1.5rem',
        margin: '0 0.5rem',
    },
    itemTextTypeTemp: {
        fontSize: '1.5rem',
        lineHeight: '1.2',
        cursor: 'default',
    },
    offTexttypeTemp: {
        opacity: '0.5',
        cursor: 'pointer',
    },
    itemTextLikeTemp: {
        display: 'flex',
        fontSize: '13px',
        lineHeight: '0.5',
        opacity: 0.5,
    },
    itemTextLikeTempMarker: {
        fontWeight: 1000,
    },
    itemRightInfo: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        margin: '0.7rem 0.4rem 0 0',
    },
    itemRightTextInfo: {
        display: 'flex',
        fontSize: '11.5px',
        lineHeight: 2,
    }
})