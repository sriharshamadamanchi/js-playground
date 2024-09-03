import React from 'react';
import { TextField } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
    codeEditor: {
        width: '100%',
        height: "100%",
        backgroundColor: '#2b2d42',
        overflowY: 'auto'
    }
}))

const Editor = ({ code, handleInputChange }: any) => {
    const classes = useStyles();

    return (
        <TextField
            id="codeEditor"
            variant="standard"
            multiline
            autoFocus
            placeholder="Type your JavaScript code here..."
            value={code}
            onChange={handleInputChange}
            className={classes.codeEditor}
            slotProps={{
                input: {
                    disableUnderline: true,
                    style: { color: 'white', fontFamily: "Rubik", fontSize: 18, padding: 20, height: "100%", alignItems: 'flex-start' }
                }
            }}
        />
    );
};

export default Editor;
