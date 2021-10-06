import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useStyles from "./styles";
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import PinterestIcon from '@material-ui/icons/Pinterest';

const SideBar = () => {
  const classes = useStyles();

  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("http://localhost:5000/api/categories");
      setCats(res.data);
    };
    getCats();
  }, []);


  return (
    <div className={classes.sidebar}>
      <div className={classes.sidebarItem}>
        <span className={classes.sidebarTitle}>ABOUT ME</span>
        {/*<img
          src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg"
          alt=""
        />*/}
        <video
          className={classes.videoPlayer}
          autoPlay
          loop
          src="https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/rUmbMsjIiqc48zz4/videoblocks-sakura-blossom-garden-background-3d-render_rqfttvfuo__28bc62bc7af2a1c7cb204e7fe646caca__P360.mp4"
        ></video>
        <div className={classes.paragraph}>
        <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          
        </p>
        </div>
      </div>
      <div className={classes.sidebarItem}>
        <span className={classes.sidebarTitle}>CATEGORIES</span>
        <ul className={classes.sidebarList}>
        {cats.map((c) => (
            <a href={`/?cat=${c.name}`} className={classes.link}>
            <li className={classes.sidebarListItem}>{c.name}</li>
            </a>
          ))}
        </ul>
      </div>
      <div className={classes.sidebarItem}>
        <span className={classes.sidebarTitle}>FOLLOW US</span>
        <div className={classes.sidebarSocial}>
        <a href="https://www.facebook.com/saumya.sinha.73550/">
          <FacebookIcon className={classes.sidebarIcon}></FacebookIcon></a>
          <TwitterIcon className={classes.sidebarIcon}></TwitterIcon>
          <InstagramIcon className={classes.sidebarIcon}></InstagramIcon>
          <PinterestIcon className={classes.sidebarIcon}></PinterestIcon>
          <WhatsAppIcon className={classes.sidebarIcon}></WhatsAppIcon>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
