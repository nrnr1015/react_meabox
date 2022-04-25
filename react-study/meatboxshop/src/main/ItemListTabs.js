import React, { useState, useEffect, useRef } from 'react'
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom"

import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import ProductDataList from './ProductDataList.js';

//import styled from 'styled-components';


  
function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`scrollable-auto-tabpanel-${index}`}
        aria-labelledby={`scrollable-auto-tab-${index}`}
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
    value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `scrollable-auto-tab-${index}`,
      'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
  }
  
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      width: '100%',
      backgroundColor: theme.palette.background.paper,
      height: "36px",
      padding: "0 16px",
      marginBottom: "8px",
      borderBottom: "1px solid #eee",
        '& div.MuiTabs-root': {
            minHeight: "28px",
            height: "28px",
        },
        '& div.MuiTabs-flexContainer': {
            minHeight: "28px",
            height: "28px",
        },
        '& button.MuiButtonBase-root': {
            minWidth: "auto",
            minHeight: "28px",
            padding: "6px 10px",
            color: "#666",
            zIndex: "1",
            fontSize: "14px",
            '&.Mui-selected': {
                color: '#fff',
                transition: "all 500ms cubic-bezier(0.4, 0, 0.2, 1) 0ms"
              }
        },
        '& span.PrivateTabIndicator-colorPrimary-3': {
            background: "#333",
            height: "100%",
            borderRadius: "30px",
        },
    },
}));


const ItemListTabs = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div className={classes.root}>
            <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="#fff"
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
                >
                    <Tab label="#한우/육우/육우" {...a11yProps(0)} />
                    <Tab label="#돼지" {...a11yProps(1)} />
                    <Tab label="#닭/돼지" {...a11yProps(2)} />
                    <Tab label="#삼겹살" {...a11yProps(3)} />
                    <Tab label="#갈비" {...a11yProps(4)} />
                    <Tab label="#한우암소" {...a11yProps(5)} />
                    <Tab label="#양" {...a11yProps(6)} />
            </Tabs>
            <TabPanel value={value} index={0}>
               <ProductDataList></ProductDataList>
            </TabPanel>
            <TabPanel value={value} index={1}>
                Item Two
            </TabPanel>
            <TabPanel value={value} index={2}>
                Item Three
            </TabPanel>
            <TabPanel value={value} index={3}>
                Item Four
            </TabPanel>
            <TabPanel value={value} index={4}>
                Item Five
            </TabPanel>
            <TabPanel value={value} index={5}>
                Item Six
            </TabPanel>
            <TabPanel value={value} index={6}>
                Item Seven
            </TabPanel>

        </div>
    );
};

export default ItemListTabs;