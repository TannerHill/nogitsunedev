import { lighten, Theme, darken } from '@mui/material/styles';

export const getSurfaceVariant = (theme: Theme, coefficient: number = 0.04) => {
    const modifyMethod = theme.palette.mode === 'dark' ? lighten : darken;
    return modifyMethod(theme.palette.background.default, coefficient);
}