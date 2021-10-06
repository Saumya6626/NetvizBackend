import { FormHelperText } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  loginCard: {
      maxWidth: "100%",
      backgroundColor: "rgba(252, 233, 233, 0.1)",
      color: "#fff",
      fontWeight: 100,
    },

    media: {
      width: "100%",
      marginTop: theme.spacing(0), // 16:9
    },

    ccWrapper: {
      backgroundColor: "rgb(255, 255, 255)",
    },

    expand: {
      transform: 'rotate(0deg)',
      margin: '0 auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },

    cardHeader:{
      display: "block",
      width: "100%",
      fontSize: "30px",
      paddingBottom: theme.spacing(2),
      color: "#444",
      fontFamily: "Bebas Neue, cursive",
    },

    fireImg: {
      marginLeft: theme.spacing(2),
      height: "30px",
      backgroundBlendMode: "lighten",
    },

    expandIcon: {
      fontSize: "25px",
      margin: "auto",
      borderRadius: "50%",
      background: "rgb(255, 111, 97)",
    },
  }));

  export default useStyles
  