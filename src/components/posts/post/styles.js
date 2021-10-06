import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  post: {
    width: "70%",
    margin: "0 auto",
    padding: theme.spacing(1),
  // backgroundColor: "#fff",
   // opacity:"0.5",
    //rgba(0, 187, 255, 0.6)
    [theme.breakpoints.down("sm")]:{
      width: "99%",
    },
    marginBottom: "2em",
  },

  imgwrapper: {
    objectFit: "fill",
    width: "100%",
    height: "70vh",
  },

  postImg: {
    display: "block",
  width: "90%%",
  margin: "auto",
  height: "90%",
  borderRadius: "7px",

},

postInfo: {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
},

postCat: {
  fontFamily: "Varela Round, sans-serif",
  fontSize: "11px",
  color: "#be9656",
  lineHeight: "20px",
  marginTop: "15px",
  marginRight: "10px",
  cursor: "pointer",
},

postTitle: {
  fontFamily: "Josefin Sans, sans-serif",
  fontSize: "34px",
  fontWeight: 700,
  color: "rgb(7, 73, 117)",
  marginTop: theme.spacing(1.5),
  cursor: "pointer",
  "&:hover": {
    color: "rgba(7, 73, 117, 0.6)",
  },
},

postDate: {
  fontFamily: "Lora, serif",
  fontStyle: "italic",
  fontSize: "15px",
  color: "#fc035e",
  marginTop: "15px",
},

postDesc: {
  fontFamily: "Varela Round, sans-serif",
  fontSize: "100%",
  color: "white",
  fontWeight: 200,
  lineHeight: "24px",
  marginTop: "15px",
  overflow: "hidden",
  textOverflow: "ellipsis",
  display: "-webkit-box",
  WebkitlineClamp: 4,
  webkitBoxOrient: "vertical",
},
 
}));

export default useStyles;
