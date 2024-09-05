import * as React from 'react';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
    container: {
        width: 200,
        '&.MuiButton-contained': {
            backgroundColor: '#00064a',
        },
    }
}))

export const RunButton = ({ disabled, onClick }: { disabled: boolean, onClick: () => void }) => {

    const classes = useStyles()

    return (
        <Button
            disabled={disabled}
            className={classes.container}
            onClick={onClick}
            variant="contained"
            startIcon={<SendIcon />}
        >
            RUN
        </Button>
    );
}
