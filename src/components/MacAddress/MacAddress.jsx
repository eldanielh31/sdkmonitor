import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import Divider from '@mui/material/Divider';
import MonitorWeight from '@mui/icons-material/MonitorWeight';
import { orange,pink, white } from '@mui/material/colors';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#ef6c00' : '#fff',
    ...theme.typography.body1,
    padding: theme.spacing(0),
    textAlign: 'center',
    color: theme.palette.text.primary,
  }));

export default function MacAddress() {
  return (
    <>
        <Paper
            sx={{
                p: 2,
                margin: 'auto',
                maxWidth:1000,
                flexGrow: 1,
                backgroundColor: (theme) =>
                theme.palette.mode === 'dark'? '#ef6c00' : orange[600],
        }}
        >
            <Grid container spacing={2}>
                <Grid item>
                    <ButtonBase sx={{ width: 50, height: 90 }}>
                        <MonitorWeight fontSize="large" sx={{color:'#FFFFFF'}}/>
                    </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={6}>
                        <Grid item xs>
                            <Typography gutterBottom variant="subtitle1" component="div">
                                Multicast:
                            </Typography>
                            <Item>
                                 False
                            </Item>
                        </Grid>
                    </Grid>
                </Grid>

                <Divider orientation="vertical" flexItem>
                </Divider>

                <Grid item>
                    <ButtonBase sx={{ width: 50, height: 90}}>
                        <MonitorWeight fontSize="large"/>
                    </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                            <Typography gutterBottom variant="subtitle1" component="div">
                                Static:
                            </Typography>
                            <Item>
                                True
                            </Item>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            <Divider></Divider>
            
            <Grid container spacing={2}>
                <Grid item>
                    <ButtonBase sx={{ width: 50, height: 90 }}>
                        <MonitorWeight fontSize="large"/>
                    </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                            <Typography gutterBottom variant="subtitle1" component="div">
                                SA Data:
                            </Typography>
                            <Item>
                                SA CPU Priority:
                            </Item>
                            <Item>
                                 Mac Sa Group:
                            </Item>
                            <Grid>
                                <Typography gutterBottom variant="subtitle1" component="div">
                                    SA Groups:
                                </Typography>
                                <Item>
                                    Mac Sa Group 1:
                                </Item>
                                <Item>
                                    Mac Sa Group 2:
                                </Item>
                                <Item>
                                    Mac Sa Group 3:
                                </Item>
                                <Item>
                                    Mac Sa Group 4:
                                </Item>
                                <Item>
                                    Mac Sa Group 5:
                                </Item>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                <Divider orientation="vertical" flexItem>
                </Divider>

                <Grid item>
                    <ButtonBase sx={{ width: 50, height: 90 }}>
                        <MonitorWeight fontSize="large"/>
                    </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                            <Typography gutterBottom variant="subtitle1" component="div">
                                DA Data:
                            </Typography>
                            <Item>
                                 DA CPU Priority :
                            </Item>
                            <Item>
                                 Mac Da Group:
                            </Item>
                            <Grid>
                                <Typography gutterBottom variant="subtitle1" component="div">
                                    DA Groups:
                                </Typography>
                                <Item>
                                    Mac Da Group 1:
                                </Item>
                                <Item>
                                    Mac Da Group 2:
                                </Item>
                                <Item>
                                    Mac Da Group 3:
                                </Item>
                                <Item>
                                    Mac Da Group 4:
                                </Item>
                                <Item>
                                    Mac Da Group 5:
                                </Item>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            <Divider></Divider>

            <Grid container spacing={2}>
                <Grid item>
                    <ButtonBase sx={{ width: 50, height: 90 }}>
                        <MonitorWeight fontSize="large"/>
                    </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={6}>
                        <Grid item xs>
                            <Typography gutterBottom variant="subtitle1" component="div">
                                Mac Group ID
                            </Typography>
                            <Item>
                                 65464
                            </Item>
                        </Grid>
                    </Grid>
                </Grid>

                <Divider orientation="vertical" flexItem>
                </Divider>

                <Grid item>
                    <ButtonBase sx={{ width: 50, height: 90}}>
                        <MonitorWeight fontSize="large"/>
                    </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                            <Typography gutterBottom variant="subtitle1" component="div">
                                MAC SA only:
                            </Typography>
                            <Item>
                                True
                            </Item>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

        </Paper>      
    </>
  );
}
