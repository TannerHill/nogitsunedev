import { Avatar, Card, CardContent, CardHeader, CardMedia, Container, Divider, Grid, List, ListItem, ListItemAvatar, ListItemText, Paper, Typography, useTheme } from "@mui/material";
import { Apps, GetAsset } from "../../lib/assetHelper.ts";
import { useNavigate } from "react-router";

export const Home: React.FC = () => {
    const navigate = useNavigate();
    const theme = useTheme();

    const gd4xboxIconPath: string = GetAsset(Apps.gd4xbox, 'appIconPath');

    const onAppClick = (app: Apps) => {
        navigate(`/apps/${app}`);
    }

    return(
        <Container fixed>
            <Typography sx={ { width: '100%', textAlign: 'center', mb: 8 } } variant="h3">Apps</Typography>
            <Typography variant='h6' sx={ { width: '100%', textAlign: 'justify', mb: 8 } }>
                This is a collection of all the applications officially associated with NogitsuneDev as a development entity. Application details such as platform, version, usage, privacy policy, and terms of service are available by clicking on a given application. 
            </Typography>
            <List component={Paper} elevation={2} variant='outlined'>
                <ListItem onClick={() => onAppClick(Apps.gd4xbox)} sx={ { ':hover': { filter: 'brightness(1.5)' }, transition: 'filter 0.1s ease', cursor: 'pointer' } }>
                    <ListItemAvatar>
                        <Avatar variant='square' src={gd4xboxIconPath} />
                    </ListItemAvatar>
                    <ListItemText primary={GetAsset(Apps.gd4xbox, 'name')} secondary={GetAsset(Apps.gd4xbox, 'description')} />
                </ListItem>
            </List>
        </Container>
    );
}