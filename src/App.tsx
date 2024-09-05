import React from 'react';
import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Editor from './components/Editor';
import Output from './components/Output';
import { SelectTheme } from './components/SelectTheme';
import { LiveSwitch } from './components/LiveSwitch';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    width: '100vw',
    height: "100vh",
    flexDirection: "row"
  },
  columnContainer: {
    display: "flex",
    flexDirection: "column",
    width: "30%",
    margin: 20,
    height: "100%"
  },
  headingText: {
    "&.MuiTypography-h5": {
      fontFamily: "Rubik",
      fontWeight: "bold",
      color: '#00064a'
    }
  }
});

function App() {
  const classes = useStyles();
  const editorRef: any = React.useRef()
  const [theme, setTheme] = React.useState('vs-dark');

  const [code, setCode] = React.useState('');
  const [output, setOutput] = React.useState('');
  const [error, setError] = React.useState("");
  const [liveOutput, setLiveOutput] = React.useState(false);

  const worker = React.useRef(new Worker(new URL("./network/worker.ts", import.meta.url)))

  React.useEffect(() => {
    worker.current.onmessage = (e: MessageEvent) => {
      const response = JSON.parse(e.data ?? "{}");
      setOutput(response.output);
      setError(response.error);
    };

  }, []);

  React.useEffect(() => {
    if (liveOutput) {
      worker.current.postMessage(code);
    }
  }, [code, liveOutput]);

  const handleInputChange = (value: string) => {
    setCode(value);
  };

  return (
    <Box className={classes.container}>
      <Editor
        theme={theme}
        code={code}
        handleInputChange={handleInputChange}
        editorRef={editorRef} />
      <Box className={classes.columnContainer}>
        <Typography className={classes.headingText} variant="h5">JavaScript Playground</Typography>
        <SelectTheme theme={theme} setTheme={setTheme} />
        <LiveSwitch liveOutput={liveOutput} setLiveOutput={setLiveOutput} />
        <Output output={output} error={error} liveOutput={liveOutput} onRun={() => {
          worker.current.postMessage(code)
        }} />
      </Box>
    </Box>
  );
}

export default App;
