import useStyles from "./styles";
import { withStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import PropTypes from "prop-types";
import { useState } from "react";


const FPTabBar = ({ ...props }) => {
  const classes = useStyles();

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        className={classes.tabss}
        display="flex"
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && <>{children}</>}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }
  
  const StyledTabs = withStyles({
    root: {
      marginBottom: "2em",
    },
  
    indicator: {
      display: "flex",
      justifyContent: "center",
      backgroundColor: "transparent",
          "& > span": {
            width: "50%",
        backgroundColor: "#DD4124",
      },
    },
  })((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);
  
  const StyledTab = withStyles((theme) => ({
    root: {
      color: "rgb(255, 255, 255)",
      backgroundColor: "transparent",
      margin: "auto",
      fontWeight: theme.typography.fontWeightBold,
      width: "50%",
      "&:focus": {
        opacity: 2,
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "8px",
        margin: 0,
        padding: 0,
      },
    },
  }))((props) => <Tab disableRipple {...props} />);
  
  return (
    <>
      <div className={classes.demo2}>
        <StyledTabs
          value={value}
          className={classes.styledTabs}
          onChange={handleChange}
          aria-label="styled tabs example"
        >
          <StyledTab
            className={classes.styledTab}
            label="Gallery"
            {...a11yProps(0)}
          ></StyledTab>

          <StyledTab
            className={classes.styledTab}
            label="Events/Tours"
            {...a11yProps(1)}
          ></StyledTab>
        </StyledTabs>
        <div className={classes.tabpanels}>
        <TabPanel className={classes.tabPanel} value={value} index={0}>
          {props.panel1}
        </TabPanel>
        <TabPanel className={classes.tabPanel} value={value} index={1}>
          {props.panel3}
        </TabPanel>
        </div>
      </div>
    </>
  );
};

export default FPTabBar;
