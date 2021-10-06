import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  header: {
    display: "flex",
    top: 0,
    position: "sticky",
    alignItems: "center",
    background: "rgba(0, 0, 0, 0.79)", // "linear-gradient(0.25turn, rgb(0, 14, 59), rgb(89, 89, 89), rgb(107, 0, 0))"
    maxHeight: "fit-content",
    width: "100%",
    animation: "$fadeOut",
  },

  headitem: {
    flex: "90%",
  },
  
  headitem2: {
    flex: "10%"
  },

  "@keyframes fadeOut": {
    "0%": {
      opacity: 1,
    },
    "100%": {
      opacity: 0,
    },
  },

  title: {
    color: "rgba(255, 255, 255)",
    fontFamily: "Lora, serif",
    fontWeight: 900,
    fontSize: "50px",
    cursor: "pointer",
    width: "50%",
    textAlign: "center",
    marginLeft: "auto",
    marginRight: "auto", 
    letterSpacing: theme.spacing(0.5),
    "&:hover": {
      animation: "$fadeOut  3s",
    },
    [theme.breakpoints.down("xs")]: {
      marginLeft: theme.spacing(1),
      fontSize: "20px",
    },
  },

  link: {
    textDecoration: "none",
    color: "black",
    fontWeight: 900,
    fontFamily: "lora serif",
  },

  menuButton: {
    color: "white",
    fontSize: "20px"
  },

  /**      
      headerTitleSm: {
        fontSize: "20px",
      },
      
      headerTitleLg: {
        fontSize: "100px",
      },
       */
}));

export default useStyles;
