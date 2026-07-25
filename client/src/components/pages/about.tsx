import { Container, Typography, Grid, Card, CardMedia, CardContent, Divider, useTheme } from "@mui/material";
import { useNavigate } from "react-router";
import { GetAsset, Apps } from "../../lib/assetHelper.ts";

export const About: React.FC = () => {
    const theme = useTheme();

    const imageSrc = theme.palette.mode === 'dark' ? '/assets/images/icon_dark.png' : '/assets/images/icon_light.png';

    return(
        <Container fixed>
            <Grid container>
                <Grid size={ { xs: 12, lg: 6 } } p={4}>
                    <img src={imageSrc} style={ { width: '100%', aspectRatio: '1 / 1' } } />
                </Grid>
                <Grid size={ { xs: 12, lg: 6 } } borderLeft={ { xs: 'none', lg: `1px solid ${theme.palette.text.primary}` } } p={4}>
                    <Typography variant='h3' sx={ { width: '100%', textAlign: 'center' } }>What is NogitsuneDev?</Typography>
                    <Divider sx={ { my: 4 } } />
                    <Typography variant='body1' sx={ { width: '100%', textAlign: 'justify', mb: 2 } }>
                        NogitsuneDev is a non-incorporated software development entity currently consisting of one developer (me). With over 5 years of industry experience with varying languages, frameworks, and platforms, my goal is to create applications that uphold a high standard of functionality and usability. 
                    </Typography>
                    <Typography variant='h3' sx={ { width: '100%', textAlign: 'center', mb: 2 } }>AI Disclaimer</Typography>
                    <Divider sx={ { my: 4 } } />
                    <Typography variant='body1' sx={ { width: '100%', textAlign: 'justify', mb: 2 } }>
                        Please note: I do NOT use generative AI for any of my assets, nor do I generate any considerable portion of my code using AI assistants.
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    );
}