import { makeStyles } from "@material-ui/core/styles"

export const useStyles = makeStyles({
    item: {
        width: '22rem',
        height: '16rem',
        margin: '0rem 0.9rem 2rem 0.8rem',
        borderRadius: '4px',
        background: '#fffaf1',
        boxShadow: '0px 4px 5px 0px rgb(34 60 80 / 20%)',
        boxSizing: 'border-box',
    },
    cold: {
        background: '#f1f2ff',
    },
    itemClose: {
        width: '100%',
        boxSizing: "border-box",
        display: 'flex',
        justifyContent: 'flex-end',
    },
    itemIconClose: {
        width: '0.4rem',
        margin: '0.2rem 0.5rem 0rem 0rem',
        opacity: '0.5',
        cursor: 'pointer',
    },
    itemInfo: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '0 2rem 0 1rem',
    },
    itemCityCountry: {
        fontSize: '15px',
    },
    itemCityData: {
        fontSize: '17px',
        marginTop: '0.3rem'
    },
    itemTempInfo: {
        display: 'flex',
        alignItems: 'flex-start',
    },
    itemIconSun: {
        height: '1.5rem',
    },
    itemTempType: {
        maxWidth: '3.3rem',
        fontSize: '12px',
        margin: '0 0 0 0.5rem',
        textTransform: 'capitalize',
        textAlign: 'right',
    },
})