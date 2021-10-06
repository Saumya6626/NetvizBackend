import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
    sidebar: {
        height: "fit-content",
        width: "100%",
        objectFit: "contain",
        padding: theme.spacing(1),
        backgroundColor: "#fdfbfb",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
      
      sidebarItem: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      },
      
      sidebarTitle: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(2),
        padding: "5px",
        width: "90%",
        borderTop: "solid 1px #a7a4a4",
        borderBottom: "solid 1px #a7a4a4",
        textAlign: "center",
        fontFamily: "Varela Round, sans-serif",
        fontSize: "15px",
        lineHeight: "19px",
        color: "#222222",
        fontWeight: 700,
      },
      
       videoPlayer: {
        width: "100%",
        height: "fit-content",
        boxShadow: "rgba(99, 99, 99, 0.7) 0px 5px 10px 0px",
      },

       paragraph: {
        padding: theme.spacing(1),
        justifyContent: "center",
        color: "black"
      },
      
      sidebarList: {
        listStyleType: "none",
        marginBottom: "30px",
      },
      
      sidebarListItem: {
        display: "inline-block",
        width: "50%",
        marginTop: "15px",
        cursor: "pointer",
      },

      link: {
        color: "#0022ff",
      },
      
      sidebarSocial: {
        marginTop: "15px",
        width: "250px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      },
      
      sidebarIcon: {
        fontSize: "40px",
        color: "#d67e67",
        marginLeft: "10px",
      }
}))

export default useStyles
