import React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import WorkContent from "./WorkContent";
import PersonalContent from "./PersonalContent";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500
  },
  secondaryBar: {
    zIndex: 0,
  },
  selected: {
    background: "#9AB39A",
    color: "black",
    textTransform: 'bold'
  }
}));

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const classes = useStyles();

  return (
    <div>
      <AppBar component="div"
        className={useStyles.secondaryBar}
        position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          aria-label="full width tabs example"
          classes={{
            flexContainer: classes.flexContainer,
            indicator: classes.indicator
          }}>
          <Tab classes={{selected: classes.selected}} label="Personal" {...a11yProps(0)} />
          <Tab classes={{selected: classes.selected}} label="Work" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}>
        <TabPanel position="relative" value={value} index={0} dir={theme.direction}>
        <PersonalContent />
        </TabPanel>
        <TabPanel position="relative" value={value} index={1} dir={theme.direction}>
        <WorkContent />
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}
