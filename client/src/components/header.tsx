import { AppBar, Container, Toolbar, Typography, Divider, Box, Button, useTheme, ButtonGroup } from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router";

export const Header: React.FC = () => {
    const theme = useTheme();
    const location = useLocation();

    const imageSrc = theme.palette.mode === 'dark' ? '/assets/images/icon_dark.png' : '/assets/images/icon_light.png';

    const navigate = useNavigate();

    const navigationButtonClick = (path: string) => {
        if(path === location.pathname) return;
        navigate(path);
    }

    return(
        <AppBar position="static" sx={ { p: 2 } }>
            <Container maxWidth="xl">
                <Toolbar disableGutters sx={{ justifyContent: 'center' }}>
                    <Typography variant="h3" noWrap>
                        <img src={imageSrc} alt="Icon" style={{ marginRight: theme.spacing(2), verticalAlign: 'bottom', height: '1em' }} />
                        NogitsuneDev
                    </Typography>
                    <Divider orientation="vertical" variant='middle' flexItem sx={{ mx: 2 }} />
                    <Box>
                        <ButtonGroup variant="text" aria-label="Basic button group">
                            <Button disabled={location?.pathname === '/'} onClick={() => navigationButtonClick('/')}>
                                Home
                            </Button>
                            <Button disabled={location?.pathname === '/about'} onClick={() => navigationButtonClick('/about')}>
                                About
                            </Button>
                            <Button disabled={location?.pathname === '/contact'} onClick={() => navigationButtonClick('/contact')}>
                                Contact
                            </Button>
                        </ButtonGroup>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}