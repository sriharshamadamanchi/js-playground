import React from 'react';
import { Box, Paper, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { RunButton } from "./RunButton"

const useStyles = makeStyles({
    container: {
        height: "60%"
    },
    output: {
        height: "100%",
        fontWeight: 'bold',
        whiteSpace: 'pre-wrap',
        wordWrap: 'break-word',
        fontFamily: 'Rubik',
        borderRadius: 20,
        padding: 10,
        overflow: "scroll"
    },
    paper: {
        width: "100%",
        height: "100%"
    },
    headingText: {
        "&.MuiTypography-h5": {
            fontFamily: "Rubik",
            fontWeight: "bold",
            color: '#FFFFFF'
        }
    },
    buttonContainer: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: 20
    },
    textContainer: {
        backgroundColor: '#00064a',
        height: 50,
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center'
    }
});

const isEmpty = (val: any): boolean => {
    return val === "" || val === null || val === undefined
}

const Output = ({ liveOutput, error, output, onRun }: any) => {
    const classes = useStyles();

    const color = isEmpty(error) ? "green" : 'red'

    return (
        <Box className={classes.container}>

            <Box className={classes.buttonContainer}>
                <RunButton disabled={liveOutput} onClick={onRun} />
            </Box>

            <Paper elevation={5} className={classes.paper} sx={{ borderRadius: 5, overflow: 'clip' }}>
                <Box className={classes.textContainer}>
                    <Typography className={classes.headingText} variant="h5">Output</Typography>
                </Box>
                <Box id="output" className={classes.output} sx={{ color }}>
                    {isEmpty(error) ? output : error}
                </Box>
            </Paper>
        </Box>
    );
};

export default Output;
