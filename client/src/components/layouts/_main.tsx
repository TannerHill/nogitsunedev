import { Outlet } from "react-router";
import { Header } from "../header.tsx";
import { Box, Container, useTheme } from "@mui/material";
import { getSurfaceVariant } from '../../lib/themeHelper.ts';

export const MainLayout: React.FC = () => {
    const theme = useTheme();

    return(
        <Box sx={ { display: 'flex', flexDirection: 'column', minHeight: '100vh' } }>
            <Header />
            <Box px={ { lg: 16, xs: 0 } } sx={ { width: '100%', flex: 1, display: 'flex', backgroundColor: getSurfaceVariant(theme) } }>
                <Box sx={ { backgroundColor: theme.palette.background.default, minHeight: '100%', py: 8, width: '100%', flex: 1 } }>
                    <Outlet />
                </Box>
            </Box>
        </Box>
    );
}