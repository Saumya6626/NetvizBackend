import React, { useState } from "react";
import { InputBase } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import { useContext } from "react";
import { Context } from "../../context/Context";
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import useStyles from "./styles";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [anchorel, setanchorel] = useState(null);
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/"
  const classes = useStyles({ open });
  
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    window.location.replace("/");
  };
  
  const handleClick = (event) => {
    setanchorel(event.currentTarget);
    setOpen(true);
  };

  const handleClose = () => {
    setanchorel(null);
  };

  return (
    <>
      <div className={classes.appbar}>
        {/* 
        Designing the logo  
      */}
        <a href="/home" className={classes.linkLogo}>
        <h4 className={classes.title}>NETVIZ.</h4>
        </a>
        {/* 
        Designing the links and icons in the 
        toolbar 
      */}
        <div
          className={classes.linkbar}
          id="simple-menu"
          anchorel={anchorel}
          keepMounted
          open={Boolean(anchorel)}
          onClose={handleClose}
        >
          <a className={classes.link} href="/home" >
            HOME
          </a>
          <a className={classes.link} href="/create">
            POST
          </a>
          <button className={classes.logoutBtn} onClick={handleLogout}>
            LOGOUT
          </button>
          <KeyboardArrowUpIcon
            className={classes.cancel}
            onClick={() => setOpen(false)}
          ></KeyboardArrowUpIcon>
        </div>
        {/* 
        Designing search Icon and bar 
      */}
        <div className={classes.search}>
          <Search className={classes.searchIcon} />
          <InputBase placeholder="search..." className={classes.Inputbase} />
        </div>
        {/* 
        Designing the right side, user settings
      */}
        <div className={classes.right}>
          <a href="/settings">
            <img
              className={classes.img}
              src={PF+user.profilePic}
              alt=""
            />
          </a>
          <div
            className={classes.burger}
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <div className={classes.line}></div>
            <div className={classes.line}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
