import React from 'react';
import { withStyles, Theme, createStyles, Tab } from '@material-ui/core';

interface StyledTabProps {
  label: string;
}

export const StyledTab = withStyles((theme: Theme) => createStyles({
  root: {
    '&:focus': {
      opacity: 1,
    },
  },
}))((props: StyledTabProps) => <Tab disableRipple {...props} />);

export default StyledTab;
