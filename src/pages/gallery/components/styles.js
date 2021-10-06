import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  singlePost: {
    display: "flex"
  },

  singlePostWrapper: {
    padding: theme.spacing(2),
    display: "flex",
    flexDirection: "column"
  },

  singlePostImg: {
    width: "100%",
    height: "70vh",
    borderRadius: "4px",
    objectFit: "cover",
  },

  singlePostTitle: {
    textAlign: "center",
    margin: "10px",
    fontSize: "25px",
    fontFamily: "Lora, sans-serif",
  },

  singlePostEdit: {
    float: "right",
    fontSize: "16px",
  },

  singlePostEditIcon: {
    marginLeft: "10px",
    cursor: "pointer",
    color: "teal",
  },

  singlePostDeleteIcon: {
    marginLeft: "10px",
    cursor: "pointer",
    color: "tomato",
  },

  singlePostInfo: {
    marginBottom: "20px",
    display: "flex",
    justifyContent: "space-between",
    fontSize: "16px",
    color: "#be9656",
    fontFamily: "Varela Round, Arial, Helvetica, sans-serif",
  },

  singlePostAuthor: {
    marginLeft: "5px",
  },

  singlePostDesc: {
    color: "#666",
    fontSize: "18px",
    lineHeight: "25px",
    "&:first-letter": {
      marginLeft: "20px",
      fontSize: "30px",
      fontWeight: 600,
    },
  },

  singlePostTitleInput: {
    margin: "10px",
    fontFamily: "Lora, serif",
    fontSize: "28px",
    textAlign: "center",
    border: "none",
    color: "gray",
    borderBottom: "1px solid lightgray",
    "&:focus": {
      outline: "none",
    },
  },

  singlePostDescInput: {
    border: "none",
    color: "#666",
    fontSize: "18px",
    lineHeight: "25px",
    "&:focus": {
      outline: "none",
    },
  },

  singlePostButton: {
    width: "100px",
    border: "none",
    backgroundColor: "teal",
    padding: "5px",
    color: "white",
    borderRadius: "5px",
    cursor: "pointer",
    alignSelf: "flex-end",
    marginTop: "20px",
  },
}));

export default useStyles;
