import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    settings: {
        display: "flex",
      },
      
      settingsWrapper: {
        height: "fit-content",
        padding: "20px",
        width: "100%"
      },
      
      settingsTitle: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: theme.spacing(2),
      },
      
      settingsTitleUpdate: {
        fontSize: "30px",
        color: "lightcoral",
        [theme.breakpoints.down("xs")]:{
          display: "none",
        }
      },
      
      settingsTitleDelete: {
        color: "red",
        fontSize: "20px",
        cursor: "pointer",
        [theme.breakpoints.down("xs")]:{
          display: "flex",
          width: "100%",
        }
      },

      image:{
        height: "50vh",
        width: "50vh",
        borderRadius: "20px",
        objectFit: "cover",
      },
      
      settingsForm: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      },
      
      settingsPP: {
        display: "flex",
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      },

  
      settingsPPIcon: {
        width: "25px",
        height: "25px",
        padding: "5px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: "5px",
        border: "none",
        borderRadius: "50%",
        color: "white",
        backgroundColor: "lightcoral",
        cursor: "pointer",
      },

      label: {
        fontSize: "20px",
        margin: theme.spacing(1),
      },

      settingsInput: {
        width: "50%",
        margin: "0 auto",
        padding: theme.spacing(0.5),
        border: "none",
        borderBottom: "1px solid lightgray",
        height: "30px",
        color: "gray",
        [theme.breakpoints.down("xs")]:{
          width: "90%",
        }
      },

      settingsSubmitButton: {
        alignSelf: "center",
        width: "30%",
        border: "none",
        borderRadius: "10px",
        color: "white",
        backgroundColor: "teal",
        padding: theme.spacing(1),
        marginTop: theme.spacing(2),
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "&:hover": {
        backgroundColor: "rgb(1, 114, 114)",
      },
    }
      
    /*  
      settingsPPButton:{
          "&:focus": {
            outlineStyle: "none",
      },
    },

      
     */
}))

export default useStyles
