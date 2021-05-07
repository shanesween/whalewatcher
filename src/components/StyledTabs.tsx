import React from 'react';
import { Tabs, withStyles } from '@material-ui/core';
import theme from '../theme';

interface StyledTabsProps {
  value: number;
  onChange: (event: React.ChangeEvent<Record<string, unknown>>, newValue: number) => void;
}

export const StyledTabs = withStyles({
  indicator: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    '& > span': {
      maxWidth: 40,
      width: '100%',
      backgroundColor: theme.palette.primary.main,
    },
  },
})((props: StyledTabsProps) => <Tabs
  {...props}
  centered
  TabIndicatorProps={{ children: <span /> }}
/>);

export default StyledTabs;
