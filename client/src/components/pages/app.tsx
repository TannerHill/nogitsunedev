import { Badge, Box, Button, Container, Divider, Grid, List, ListItem, Paper, Table, TableCell, TableContainer, TableHead, TableRow, Typography, useTheme } from "@mui/material";
import { Link, useNavigate, useParams } from "react-router";
import { AppAssets, Apps, GetAssetConfigFor } from '../../lib/assetHelper.ts';
import { useEffect, useState } from "react";
import { Games } from '@mui/icons-material';

export const App: React.FC = () => {
    const params = useParams<{ appName: Apps }>();
    const [config,setConfig] = useState<AppAssets|null>(null);
    const name = params.appName;

    const theme = useTheme();

    useEffect(() => {
        if(name) {
            setConfig(GetAssetConfigFor(name));
        }
    }, [name]);

    if(!config) return null;

    return(
        <Container fixed>
            <Container maxWidth='sm'>
                <Paper variant='outlined' sx={ { width: '100%', height: 'auto', aspectRatio: '1 / 1', margin: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center', background: `url('${config.appIconPath}') no-repeat center/contain`, mb: 8 } }>
                    <Box p={4} sx={ { backdropFilter: 'blur(16px)', width: '100%', display: 'inline-flex', justifyContent: 'center' } }>
                        <Typography variant="h4">{config.name}</Typography><Badge>{config.appVersion}</Badge>
                    </Box>
                </Paper>
            </Container>
            <Box sx={ { width: '100%', alignItems: 'stretch', mb: 8 } }>
                <Typography variant='body1' sx={ { textAlign: 'justify' } }>{config.descriptionExt}</Typography>
            </Box>
            <List sx={ { width: '100%' } } component={Paper}>
                <ListItem>
                    <Typography fontWeight='bold' variant='subtitle1' flex='1 1'>Platform</Typography>
                    <Box alignItems='center' display='inline-flex' flex='1 1'>
                        Xbox <Games />
                    </Box>
                </ListItem>
                <Divider />
                <ListItem>
                    <Typography fontWeight='bold' variant='subtitle1' flex='1 1'>Version</Typography>
                    <Box alignItems='center' display='inline-flex' flex='1 1'>
                        {config.appVersion}
                    </Box>
                </ListItem>
                <Divider />
                <ListItem>
                    <Typography fontWeight='bold' variant='subtitle1' flex='1 1'>Stack</Typography>
                    <Box alignItems='center' display='inline-flex' flex='1 1'>
                        Universal Windows Platform, Win UI 2 (2.8.7), no dedicated backend
                    </Box>
                </ListItem>
                <Divider />
                <ListItem>
                    <Typography fontWeight='bold' variant='subtitle1' flex='1 1'>Privacy Policy</Typography>
                    <Box alignItems='center' display='inline-flex' flex='1 1'>
                        <Button variant='text'>
                            <a style={ { color: theme.palette.text.primary } } href={config.appPrivacyPolicyPath}>View</a>
                        </Button>
                    </Box>
                </ListItem>
                <Divider />
                <ListItem>
                    <Typography fontWeight='bold' variant='subtitle1' flex='1 1'>Terms of Use</Typography>
                    <Box alignItems='center' display='inline-flex' flex='1 1'>
                        <Button variant='text'>
                            <a style={ { color: theme.palette.text.primary } } href={config.appTermsOfUsePath}>View</a>
                        </Button>
                    </Box>
                </ListItem>
            </List>
        </ Container>
    );
}