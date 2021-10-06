import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  frontPage: {
    height: "100%",
    display: "flex",
    width: "100%",
    backgroundImage: "url(https://ak.picdn.net/shutterstock/videos/9047872/thumb/3.jpg)",
    flexDirection: "column",
  },

  fpsection1: {
    [theme.breakpoints.up("md")]: {
      flex: "70%",
    }
  },

  fpsection2: {
    [theme.breakpoints.up("md")]: {
      flex: "30%",
    }
  },
}));

export default useStyles;
