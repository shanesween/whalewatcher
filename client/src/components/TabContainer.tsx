import React from 'react';
import { makeStyles, withStyles, Theme, createStyles, Tabs, Tab, Box } from '@material-ui/core';
import theme from '../theme';
import BasicTable from './BasicTable';
import { useSelector } from 'react-redux';
import { getMonthSightings, getWeekSightings, getYesterdaySightings } from '../helpers';

interface StyledTabsProps {
  value: number;
  onChange: (event: React.ChangeEvent<{}>, newValue: number) => void;
}

const StyledTabs = withStyles({
  indicator: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    '& > span': {
      maxWidth: 40,
      width: '100%',
      backgroundColor: theme.palette.primary.main
    },
  },
})((props: StyledTabsProps) => <Tabs {...props} centered TabIndicatorProps={{ children: <span /> }} />);

interface StyledTabProps {
  label: string;
}

const StyledTab = withStyles((theme: Theme) =>
  createStyles({
    root: {
      // textTransform: 'none',
      // fontWeight: theme.typography.fontWeightRegular,
      // fontSize: theme.typography.pxToRem(15),
      // marginRight: theme.spacing(1),

      '&:focus': {
        opacity: 1,
      },
    },
  }),
)((props: StyledTabProps) => <Tab disableRipple {...props} />);

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    padding: '20px 0 0 0',

  },
}));

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

const setData = (value: number, sightings: ISighting[]) => {
  let data: Record<string, number> = {}

  const yesterdayData = getYesterdaySightings(sightings)

  const weekData = getWeekSightings(sightings)

  const monthData = getMonthSightings(sightings)

  switch (value) {
    case 0:
      data = yesterdayData
      break;
    case 1:
      data = weekData
      break;
    case 2:
      data = monthData
      break
    default:
      break
  }
  return data
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  const sightings: ISighting[] = useSelector((state: SightingState) => state.sightings)

  const data = setData(value, sightings)

  return (
    (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={1}>
            <BasicTable data={data} />
          </Box>
        )}
      </div>
    ))
}

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
      <div>
        <StyledTabs value={value} onChange={handleChange} aria-label="styled tabs example">
          <StyledTab label="Yesterday" {...a11yProps(0)} />
          <StyledTab label="This Week" {...a11yProps(1)} />
          <StyledTab label="This Month" {...a11yProps(2)} />
        </StyledTabs>
      </div>
      <TabPanel value={value} index={0} />
      <TabPanel value={value} index={1} />
      <TabPanel value={value} index={2} />
    </div>
  );
}


export default TabContainer