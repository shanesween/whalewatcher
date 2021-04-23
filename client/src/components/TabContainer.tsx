import React from 'react';
import { makeStyles, Theme } from '@material-ui/core';
import TabPanel from './TabPanel';
import StyledTab from './StyledTab';
import StyledTabs from './StyledTabs';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    padding: '20px 0 0 0',

  },
}));

function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const TabContainer = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };


  return (
    <div className={classes.root}>
      <StyledTabs value={value} onChange={handleChange} aria-label="styled tabs example">
        <StyledTab label="Yesterday" {...a11yProps(0)} />
        <StyledTab label="This Week" {...a11yProps(1)} />
        <StyledTab label="This Month" {...a11yProps(2)} />
      </StyledTabs>
      <TabPanel value={value} index={0} />
      <TabPanel value={value} index={1} />
      <TabPanel value={value} index={2} />
    </div>
  );
}

export default TabContainer