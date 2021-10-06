import useStyles from "./styles";
import FPCard from "../../components/cards/FPCards";
import FPTabBar from "../../components/tabbar/FPTabBar";
import ImgCarousel from "../../components/images/ImgCarousel";
import VideoComponent from "../../components/video/VideoComponent";
import Header from "../../components/header/Header";
import SideBar from "../../components/sidebar/SideBar";

const FrontPage = () => {
  const classes = useStyles();
  const fpTab = (
    <FPTabBar
      panel1={<FPCard media={<ImgCarousel></ImgCarousel>} videoCard={<VideoComponent></VideoComponent>} sidebar={<SideBar></SideBar>}/>}
      panel3={<h1>Coming Soon</h1>}
    />
  );
  
  return (
    <>
      <div className={classes.frontPage}>
        <Header>HIII</Header>
        <div className={classes.fpsection1}>{fpTab}</div>
        {/*<div className={classes.fpsection2}>
          <FPLoginForm></FPLoginForm>
        </div>*/}
      </div>
    </>
  );
};

export default FrontPage;
