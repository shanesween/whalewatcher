import React from 'react';
import { Box } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { Skeleton } from '@material-ui/lab';
import { setData } from '../helpers';
import BasicTable from './BasicTable';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

export const TabPanelComponent: (props: TabPanelProps) => JSX.Element = (
  props: TabPanelProps,
) => {
  const { children, value, index, ...other } = props;
  const sightings: ISighting[] = useSelector((state: SightingState) => state.sightings);

  const data = setData(value, sightings);

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
                        {
                            sightings.length ? (

                                <BasicTable data={data} />
                            ) : (
                                <>
                                    <Skeleton animation="wave" variant="text" />
                                    <Skeleton animation="wave" variant="text" />
                                    <Skeleton animation="wave" variant="text" />
                                    <Skeleton animation="wave" variant="text" />
                                </>
                            )
                        }
                    </Box>
                )}
            </div>
    ));
};
export default TabPanelComponent;
