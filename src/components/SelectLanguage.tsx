import { Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { SUPPORTED_LANGUAGES } from '../constants';

const useStyles = makeStyles(() => ({
    container: {
        padding: 10
    }
}))

export const SelectLanguage = ({ language, setLanguage }: { language: string, setLanguage: (_: string) => void }) => {

    const classes = useStyles()

    const handleChange = (event: SelectChangeEvent) => {
        setLanguage(event.target.value as string);
    };

    return (
        <Box className={classes.container}>
            <FormControl fullWidth>
                <InputLabel>Language</InputLabel>
                <Select
                    value={language}
                    label="Language"
                    onChange={handleChange}
                >
                    {SUPPORTED_LANGUAGES.map((language: any) => (
                        <MenuItem key={language.id} value={language.id}>
                            {language.name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    );
}