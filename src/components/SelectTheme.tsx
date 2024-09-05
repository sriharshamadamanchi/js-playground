import { Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import monacoThemes from 'monaco-themes/themes/themelist.json';
import { DEFAULT_THEMES } from '../constants';
import { makeStyles } from '@mui/styles';
import { defineTheme } from './Theme';

const useStyles = makeStyles(() => ({
    container: {
        marginTop: 20,
        marginBottom: 20
    }
}))

export const SelectTheme = ({ theme, setTheme }: { theme: string, setTheme: (_: string) => void }) => {

    const classes = useStyles()

    const handleChange = (event: SelectChangeEvent) => {
        if (DEFAULT_THEMES.includes(event.target.value)) {
            setTheme(event.target.value);
        } else {
            defineTheme(event.target.value).then(() => setTheme(event.target.value))
        }
    };

    return (
        <Box className={classes.container}>
            <FormControl fullWidth>
                <InputLabel>Theme</InputLabel>
                <Select
                    value={theme}
                    label="Theme"
                    onChange={handleChange}
                >
                    {DEFAULT_THEMES.map((theme: any) => (
                        <MenuItem key={theme} value={theme}>
                            {theme}
                        </MenuItem>
                    ))}
                    {Object.entries(monacoThemes).map(([themeId, themeName]: any) => (
                        <MenuItem key={themeId} value={themeId}>
                            {themeName}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    );
}