import * as React from 'react';
import { Box, Switch, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20
    },
    textStyle: {
        "&.MuiTypography-h6": {
            fontFamily: "Rubik",
            fontWeight: "600",
            color: '#00064a'
        }
    },
    switch: {
        '& .MuiSwitch-switchBase.Mui-checked': {
            color: "#00064a"
        },
        '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
            backgroundColor: "#00064a",
        },
    }
}))

export const LiveSwitch = ({ liveOutput, setLiveOutput }: { liveOutput: boolean, setLiveOutput: (_: boolean) => void }) => {

    const classes = useStyles()

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLiveOutput(event.target.checked);
    };

    return (
        <Box className={classes.container} >
            <Typography className={classes.textStyle} variant="h6">Enable Live Output</Typography>

            <Switch
                className={classes.switch}
                checked={liveOutput}
                onChange={handleChange}
                inputProps={{ 'aria-label': 'controlled' }}
            />
        </Box>
    );
}
