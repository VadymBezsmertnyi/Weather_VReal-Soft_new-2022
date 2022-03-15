import { makeStyles } from "@material-ui/core/styles"

export const useStyles = makeStyles({
    header: {
        width: '100%',
        height: '20px',
        display: 'flex',
        alignItems: 'flex-end',
        flexDirection: 'column',
    },
    selectLang: {
        width: '3.7rem',
        margin: '8px 12px 0 0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        cursor: 'pointer',
    },
    hideSelectLang: {
        opacity: '50%',
    },
    iconSelectLang: {
        width: '0.7rem',
    },
    iconHideSelectLang: {
        transform: "rotate(180deg)",
    },
    textSelectLang: {
        fontSize: '1rem',
        textAlign: 'center',
    },
    modalSelectName: {
        width: '100%',
        height: '100%',
        position: 'absolute',
    },
    menuSelectValues: {
        width: '4.5rem',
        margin: '0.7rem 0.6rem 0 0',
        boxShadow: '0px 4px 5px 0px rgb(34 60 80 / 20%)',
        zIndex: 2,
    },
    menuSelectValue: {
        width: '100%',
        height: '1.4rem',
        fontSize: '0.8rem',
        padding: '0 0 0 0.2rem',
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: '#f2f2f2',
        },
        '&:focus-visible': {
            backgroundColor: '#000000',
        }
    },
})