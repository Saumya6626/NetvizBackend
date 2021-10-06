import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  register: {
    height: "100vh",
    width: "100%",
    display: "flex",
    backgroundImage: `url(https://free4kwallpapers.com/uploads/originals/2019/04/15/city-vector-panorama-wallpaper.jpg)`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    [theme.breakpoints.down("xs")]: {
      height: "100%",
    },       
  },

  regForm: {
    display: "flex",
    flexDirection: "column",
    background: "rgba(0, 0, 0, 0.1)",
    backgroundSize: "cover",
    color: "white",
    height: "100%",
    width: "100%",
  },

  regTitles: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    borderBottom: "1px solid #444",
    padding: theme.spacing(1),
  },

  regTitle1: {
    fontFamily: "Rampart One, cursive",
    fontWeight: 900,
    fontSize: "40px",
    display: "flex",
    color: "white",
    alignItems: "center",
    flexDirection: "column",
    [theme.breakpoints.down("xs")]: {
      fontSize: "150%",
    },
  },

  regTitle2: {
    fontSize: "30px",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    color: "#EE1D51",
    [theme.breakpoints.down("xs")]: {
      fontSize: "120%",
    },
  },

  formArea: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: theme.spacing(2),
  },

  formItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: theme.spacing(2),
  },

  labels: {
    color: "#fff",
    marginBottom: theme.spacing(1),
  },

  registerInput: {
    color: "black",
    width: "100%",
    padding: theme.spacing(1),
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    border: "none",
    "&:Focus": {
      outline: "none",
    },
    [theme.breakpoints.down("xs")]: {
      width: "70%",  
      margin: "0 auto"
    },
  },

  regBtns: {
    display: "flex",
    justifyContent: "center",
    marginBottom: theme.spacing(1),
  },

  regBtn: { 
    textDecoration: "none",
    width: "40%",
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    backgroundColor: "rgba(255, 242, 0)",
    padding: theme.spacing(1),
    color: "black",
    fontWeight: 900,
    borderRadius: theme.shape.borderRadius,
    "&: hover" : {
      backgroundColor: "rgba(255, 242, 0, 0.5)",
    }
  },

  formBtns: {
    display: "flex",
    justifyContent: "center",
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",  
      gap: "10px",
      margin: "auto"
    },
  },

  formBtn1: {
    backgroundColor: "rgba(17, 82, 147)",
    marginRight: theme.spacing(1),
    color: "white",
    fontWeight: 700,
  },

  formBtn2: {
    marginRight: theme.spacing(1),
    backgroundColor: "rgba(220, 0, 78)",
    color: "white",
    fontWeight: 700,
  },
}));

export default useStyles;
