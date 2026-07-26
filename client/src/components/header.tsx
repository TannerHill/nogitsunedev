import { AppBar, Container, Toolbar, Typography, Divider, Box, Button, useTheme, ButtonGroup, Grid, useMediaQuery } from "@mui/material";
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

    const horizontal = useMediaQuery(theme => theme.breakpoints.up('lg'));

    return(
        <AppBar position="static" sx={ { p: 2 } }>
            <Container maxWidth="xl">
                <Toolbar disableGutters sx={{ justifyContent: 'center' }}>
                    <Grid container width='100%'>
                        <Grid size={ { xs: 12, lg: 6 } } display='flex' justifyContent={ { xs: 'center', lg: 'end' } }>
                            <Typography variant="h3" noWrap>
                                <img src={imageSrc} alt="Icon" style={{ marginRight: theme.spacing(2), verticalAlign: 'bottom', height: '1em' }} />
                                NogitsuneDev
                            </Typography>
                        </Grid>
                        <Grid size={ { xs: 12, lg: 6 } } display='flex' flexDirection={ { xs: 'column', lg: 'row' } } justifyContent={ { xs: 'center', lg: 'start' } } alignItems='center'>
                            <Divider orientation={horizontal ? 'vertical' : 'horizontal'} variant='middle' flexItem sx={{ mx: horizontal ? 2 : 0, my: horizontal ? 0 : 2 }} />
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
                        </Grid>
                    </Grid>
                </Toolbar>
            </Container>
        </AppBar>
    );
}