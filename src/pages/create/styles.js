import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  write: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    width: "100%",
    justifyContent: "center",
  },

  writeImg: {
    margin: "0 auto",
    width: "80vh",
    height: "80vh",
    borderRadius: "10px",
    objectFit: "cover",
    [theme.breakpoints.down("xs")]: {
      margin: 0,
      width: "100%",
    },
  },

  writeForm: {
    position: "relative",
  },

  writeFormGroup: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: theme.spacing(1)
  },

  writeIcon: {
    width: "25px",
    height: "25px",
    fontSize: "20px",
    border: "1px solid",
    marginTop: theme.spacing(1),
    borderRadius: "50%",
    color: "rgb(129, 125, 125)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  },

  writeInput: {
    fontSize: "30px",
    border: "none",
    padding: theme.spacing(1),
    width: "70%",
    margin: "0 auto",
    fontWeight: 400,
    borderBottom: "1px solid lightgray",
    color: "rgb(189, 185, 185)",
    [theme.breakpoints.down("xs")]: {
      width: "90%",
    },
    "&:focus": {
      outlineStyle: "none",
    },
  },

  writeText: {
    width: "90%",
    height: "70%",
    fontFamily: "inherit",
    fontSize: "20px",
    border: "none",
  },

  writeSubmit: {
    color: "white",
    width: "50%",
    margin: "0 auto",
    marginTop: theme.spacing(1),
    backgroundColor: "teal",
    padding: theme.spacing(1),
    border: "none",
    borderRadius: "10px",
    fontSize: "16px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

export default useStyles;
