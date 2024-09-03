import React from 'react';
import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    output: {
        width: '50vw',
        backgroundColor: '#8d99ae',
        padding: '20px',
        fontWeight: 'bold',
        overflowY: 'auto',
        whiteSpace: 'pre-wrap',
        wordWrap: 'break-word',
        fontFamily: 'Rubik, monospace',
    }
});

const Output = ({ error, output }: any) => {
    const classes = useStyles();

    const color = error ? "#7e0008" : '#00064a'

    return (
        <Box id="output" className={classes.output} sx={{ color }}>
            {output}
        </Box>
    );
};

export default Output;
