import React from "react";
import { Box } from "@material-ui/core";
import { useSelector } from "react-redux";
import { setData } from "../helpers";
import { Skeleton } from "@material-ui/lab";
import BasicTable from "./BasicTable";

interface TabPanelProps {
    children?: React.ReactNode;
    index: any;
    value: any;
}

export const TabPanelComponent = (props: TabPanelProps) => {
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
        ))
}
export default TabPanelComponent