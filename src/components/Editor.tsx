import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import CodeEditor from '@monaco-editor/react';
import { SUPPORTED_LANGUAGES } from '../constants';

const useStyles = makeStyles(() => ({
    container: {
        width: '70%',
        height: "100%"
    }
}))

const Editor = ({ editorRef, code, handleInputChange, language, theme }: any) => {
    const classes = useStyles();

    const onMount = (editor: any) => {
        editorRef.current = editor
        editor.focus()
    }

    const lan = SUPPORTED_LANGUAGES.find((lan) => lan.id === language)?.name ?? "javascript"

    return (
        <Box className={classes.container}>
            <CodeEditor
                height="100%"
                theme={theme}
                value={code}
                onChange={handleInputChange}
                onMount={onMount}
                path={lan}
                defaultLanguage={"javascript"}
                options={{ fontSize: 16 }} />
        </Box>
    );
};

export default Editor;
