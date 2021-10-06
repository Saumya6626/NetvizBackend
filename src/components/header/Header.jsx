import useStyles from "./styles";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { useState } from "react";
import { Link } from "react-router-dom";
import React from "react";
import { IconButton } from "@material-ui/core";
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

const Header = (props) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
     <CssBaseline />
      <HideOnScroll {...props}>
        <div className={classes.header}>
          <div className={classes.headitem}>
            <h1 className={classes.title}>NETVIZ</h1>
          </div>
          <div className={classes.headitem2}>
            <div className={classes.settings}>
              <IconButton
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
                edge="start"
                color="inherit"
                aria-label="menu"
              >
                <MenuIcon className={classes.menuButton} />
              </IconButton>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>
                  <Link className={classes.link} to="/login">
                    Login
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link className={classes.link} to="/register">
                    Register
                  </Link>
                </MenuItem>
              </Menu>
            </div>
          </div>
        </div>
        </HideOnScroll>
        </>
  );
};

export default Header;
