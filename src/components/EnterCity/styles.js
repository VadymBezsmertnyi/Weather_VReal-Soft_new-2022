import { makeStyles } from "@material-ui/core/styles"

export const useStyles = makeStyles({
    contInputCity: {
        display: 'flex',
        justifyContent: 'center',
        margin: '5rem 0 7.7rem 0 ',
        boxSizing: 'border-box',
    },
    inputCity: {
        width: '34.6rem',
        height: '2.3rem',
        border: 0,
        borderRadius: '4px',
        boxShadow: '0px 2px 4px 1px rgb(34 60 80 / 20%)',
        margin: '0rem 1rem 0rem 8.5rem',
        paddingLeft: '0.5rem',
        '&focus-visible': {
            border: 0,
            outline: 0,
        },
    },
    buttonInputCity: {
        width: '7rem',
        height: '2.5rem',
        border: 0,
        borderRadius: '4px',
        boxShadow: '0px 2px 4px 1px rgb(34 60 80 / 20%)',
        fontSize: '12px',
        color: '#fff',
        background: '#459de9',
        textTransform: 'initial',
    },
})