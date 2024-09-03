import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Editor from './components/Editor';
import Output from './components/Output';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    backgroundColor: '#2b2d42',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100vw',
    height: "100vh"
  },
  root: {
    width: '90%',
    height: '90%'
  },
  header: {
    backgroundColor: '#8d99ae',
    padding: '15px 50px',
    display: 'flex',
    justifyContent: 'space-between',
    color: '#edf2f4',
    borderRadius: "20px 20px 0px 0px"
  },
  headingText: {
    "&.MuiTypography-h5": {
      fontFamily: "Rubik",
      fontWeight: "bold"
    },
    "&.MuiTypography-body2": {
      fontFamily: "Rubik",
      fontWeight: "bold"
    }
  },
  editorContainer: {
    display: 'flex',
    borderTop: '1px solid #8d99ae',
    height: 'calc(90% - 50px)'
  },
  footer: {
    backgroundColor: '#2b2d42',
    padding: '15px 30px',
    color: '#edf2f4',
    textAlign: 'center',
    fontFamily: 'Rubik',
    borderTop: '1px solid #8d99ae',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
});

function App() {
  const classes = useStyles();
  const [code, setCode] = React.useState('');
  const [output, setOutput] = React.useState('');
  const [error, setError] = React.useState(false);

  const handleInputChange = (event: any) => {
    const newCode = event.target.value;
    setCode(newCode);

    try {
      setOutput('');
      // eslint-disable-next-line no-eval
      const result = eval(newCode);
      if (result !== undefined) {
        setError(false)
        setOutput(result.toString());
      }
    } catch (error: any) {
      setError(true)
      setOutput(`Error: ${error.message}`);
    }
  };

  console.log = function (message) {
    setOutput((prevOutput) => prevOutput + message + '\n');
  };

  return (
    <Box className={classes.container}>
      <Paper elevation={3} className={classes.root} sx={{ borderRadius: "20px", backgroundColor: '#2b2d42' }}>
        <Box className={classes.header}>
          <Typography className={classes.headingText} variant="h5">JavaScript Playground</Typography>
          <Typography className={classes.headingText} variant="h5">Output</Typography>
        </Box>
        <Box className={classes.editorContainer}>
          <Editor code={code} handleInputChange={handleInputChange} />
          <Output output={output} error={error} />
        </Box>
        <Box className={classes.footer}>
          <Typography className={classes.headingText} variant="body2">&copy; 2024 - @Harsha - All Rights Reserved</Typography>
        </Box>
      </Paper>
    </Box>
  );
}

export default App;
