import {  makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  //app bar styles
  appbar: {
    display: "flex",
    top: 0,
    height: "10vh",
    justifyContent: "space-between",
    alignItems: "center",
    //background: "linear-gradient(0.25turn, rgb(0, 14, 59), rgb(89, 89, 89), rgb(107, 0, 0))",
    backgroundColor: "rgba(112, 24,150, 0.79)",
    width: "100%",
  },

  linkLogo: {
    textDecoration: "none",
  },

  title: {
    color: "rgba(110, 255, 255)",
    fontFamily: "Lora, serif",
    fontWeight: 900,
    fontSize: "45px",
    cursor: "pointer",
    letterSpacing: theme.spacing(0.5),
    marginLeft: theme.spacing(1),
    "&:hover": {
      animation: "$pulse  3s",
      color: "orange", 
    },    
  },

  "@keyframes pulse": {
    "0%": {
    transform: "scale3d(1, 1, 1)",
    },

    "50%": {
    transform: "scale3d(0, 0, 0)",
    },

    "100%": {
      transform: "scale3d(1, 1, 1)",
      },
  },

  linkbar: {
    display: "flex",
    width: "50%",
    justifyContent: "space-around",
    [theme.breakpoints.down("sm")]:{
      position: "absolute",
      display: (props) => (props.open ? "flex" : "none"),
      animation: "$bounceInDown 1s",
      //background: "linear-gradient(to bottom, rgb(0, 14, 59), rgb(91, 125, 138))",
      backgroundColor: "black",
      backgroundOpacity: "79%",
      width: "100%",
      justifyContent: "space-around",
      alignItems: "center",
      zIndex: 1,
      height: "10vh",
    }
  },

  logoutBtn:{
    background: "transparent",
    border: "none",
    cursor: "pointer",
    color: "white",
    backgroundBlendMode: "100%",
    "&:hover": {
      color: "orange",
    }
  },

  "@keyframes bounceInDown": {
    "0%, 60%, 75%, 90%, 100%": {
        transition: "cubic-bezier(0.215, 0.610, 0.355, 1.000)",
    },
    
    "0%": {
    opacity: 0,
    transform: "translate3d(0, -3000px, 0)",
    },
    
    "60%": {
    opacity: 1,
    transform: "translate3d(0, 25px, 0)",
    },
    
    "75%": {
    transform: "translate3d(0, -10px, 0)",
    },
    
    "90%": {
    transform: "translate3d(0, 5px, 0)",
    },
    
    "100%": {
    transform: "none",
    }
  },

  link: {
    color: "white",
    textDecoration: "none",
    "&:hover": {
      color: "orange",
      
    },
    fontSize: "20px"
  },

    //SEARCHBAR SETTINGS
    search: {
      display: "flex",
      alignItems: "center",
      cursor: "pointer",
      borderRadius: theme.shape.borderRadius,
      color: "white", 
      height: "10px",
      "&:hover": {
        color: "rgba(255, 255, 255, 0.5)",
      }, 
    [theme.breakpoints.down("sm")]:{
      display: "none",
    }
    },
  
    Inputbase: {
      borderRadius: "5px",
      color: "white",
      backgroundColor: "rgba(255, 102, 0, 0.39)",
      paddingLeft: theme.spacing(1),
    },

  img: {
    width: "25px",
    height: "25px",
    borderRadius: "50%",
    objectFit: "cover",
    cursor: "pointer",
    marginRight: "20px",
  },

  burger: {
    cursor: "pointer",
    display: "none",
    transition: "2s linear 0s",
    marginRight: "5px",
    [theme.breakpoints.down("sm")]: {
      display: (props) => (props.open ? "none" : "block"),
      marginRight: "20px",
      marginLeft: "20px"
    },
    "&:hover": {
      animation: "$tada 1s",
    },
  },

  line: {
    backgroundColor: "white",//"#0dff00",
    width: "20px",
    height: "3px",
    margin: "3px",
    "&:hover": {
      animation: "$tada 1s",
    },
  },

  cancel: {
    display: (props) => (props.open ? "flex" : "none"),
    color: "#0dff00",
    cursor: "pointer",
    "&:hover": {
      animation: "$tada 1s"
    },
    fontSize: "25px",    
  },

  right: {
    display: "flex",
    alignItems: "center",
  },

  "@keyframes tada": {
    "0%": {
    transform: "scale3d(1, 1, 1)",
    },

    "10%, 20%": {
    transform: "scale3d(.7, .7, .7) rotate3d(0, 0, 1, -3deg)",
    },

    "30%, 50%, 70%, 90%": {
    transform: "scale3d(1.2, 1.2, 1.2) rotate3d(0, 0, 1, 3deg)",
    },

    "40%, 60%, 80%": {
    transform: "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)",
    },

    "100%": {
    transform: "scale3d(1, 1, 1)",
    },
  },
}));
export default useStyles;
