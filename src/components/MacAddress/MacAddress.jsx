import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { orange,cyan } from '@mui/material/colors';
import { useSelector } from 'react-redux/es/exports';

const Item = styled(Paper)(({ theme }) => ({
    maxWidth:300,
    margin:'auto',
    flexGrow: 1,
    backgroundColor: theme.palette.mode === 'dark' ? '#ef6c00' : cyan[50],
    ...theme.typography.body1,
    padding: theme.spacing(0),
    textAlign: 'center',
    color: theme.palette.text.primary,
  }));


export default function MacAddress(props) {

    const data = useSelector(state => state.mac.macs);

    const macList = props.mac.split(',').map(item => {return parseInt(item, 10)})
    const filteredMac = data.filter(i => JSON.stringify(i.mac) === JSON.stringify(macList))[0]
    console.log (filteredMac)
    console.log (macList)

  return (
    <div className='containerMacAddress'>
        <Paper
            sx={{
                p: 2,
                margin: 'auto',
                maxWidth:800,
                flexGrow: 1,
                backgroundColor: (theme) =>
                theme.palette.mode === 'dark'? '#ef6c00' : orange[600],
        }}
        >
            <Grid container spacing={2} columns={24}>

                <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                            <Typography gutterBottom variant="subtitle1" component="div" align='center' fontWeight={'bold'}>
                                Multicast: 
                            </Typography>
                            <Item align='center'>
                                  {(filteredMac.is_multicast) ? "True" : "False"}
                            </Item>
                            <Typography gutterBottom variant="subtitle1" component="div" align='center'>
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>

                <Divider orientation="vertical" flexItem>
                </Divider>
                <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                            <Typography gutterBottom variant="subtitle1" component="div" align='center' fontWeight={'bold'}>
                                Static:
                            </Typography>
                            <Item>
                                {(filteredMac.is_static) ? "True" : "False"}
                            </Item>
                            <Item align='center'>
                            
                            </Item>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            <Divider></Divider>
            
            <Grid container spacing={2}>
                <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                            <Typography gutterBottom variant="subtitle1" component="div" align='center' fontWeight={'bold'}>
                                SA Data:
                            </Typography>
                            <Item>
                                SA CPU Priority: {String(filteredMac.cpu_priority_sa)}
                            </Item>
                            <Item>
                                 Mac Sa Group:  {(filteredMac.mac_sa_group_enable) ? "True" : "False"}
                            </Item>
                            <Grid>
                                <Typography gutterBottom variant="subtitle1" component="div" align='center' fontWeight={'bold'}>
                                    SA Groups:
                                </Typography>
                                <Item>
                                    Mac Sa Group 0: {String(filteredMac.mac_sa_groups.mac_sa_group_0)}
                                </Item>
                                <Item>
                                    Mac Sa Group 1: {String(filteredMac.mac_sa_groups.mac_sa_group_1)}
                                </Item>
                                <Item>
                                    Mac Sa Group 2: {String(filteredMac.mac_sa_groups.mac_sa_group_2)}
                                </Item>
                                <Item>
                                    Mac Sa Group 3: {String(filteredMac.mac_sa_groups.mac_sa_group_3)}
                                </Item>
                                <Item>
                                    Mac Sa Group 4: {String(filteredMac.mac_sa_groups.mac_sa_group_4)}
                                </Item>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                <Divider orientation="vertical" flexItem>
                </Divider>


                <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                            <Typography gutterBottom variant="subtitle1" component="div" align='center' fontWeight={'bold'}>
                                DA Data:
                            </Typography>
                            <Item>
                                 DA CPU Priority : {String(filteredMac.cpu_priority_da)}
                            </Item>
                            <Item>
                                 Mac Da Group: {String(filteredMac.mac_da_groups) ? 'True': 'False'}
                            </Item>
                            <Grid>
                                <Typography gutterBottom variant="subtitle1" component="div" align='center' fontWeight={'bold'}>
                                    DA Groups:
                                </Typography>
                                <Item>
                                    Mac Da Group 0: {String(filteredMac.mac_da_groups.mac_da_group_0)}
                                </Item>
                                <Item>
                                    Mac Da Group 1: {String(filteredMac.mac_da_groups.mac_da_group_1)}
                                </Item>
                                <Item>
                                    Mac Da Group 2: {String(filteredMac.mac_da_groups.mac_da_group_2)}
                                </Item>
                                <Item>
                                    Mac Da Group 3: {String(filteredMac.mac_da_groups.mac_da_group_3)}
                                </Item>
                                <Item>
                                    Mac Da Group 4: {String(filteredMac.mac_da_groups.mac_da_group_4)}
                                </Item>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            <Divider></Divider>

            <Grid container spacing={2}>

                <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                            <Typography gutterBottom variant="subtitle1" component="div" align='center' fontWeight={'bold'}>
                                Mac Group ID
                            </Typography>
                            <Item>
                                {String(filteredMac.mac_group_id)}
                            </Item>
                        </Grid>
                    </Grid>
                </Grid>

                <Divider orientation="vertical" flexItem>
                </Divider>

                <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                            <Typography gutterBottom variant="subtitle1" component="div" align='center' fontWeight={'bold'}>
                                MAC SA only:
                            </Typography>
                            <Item>
                                {String(filteredMac.is_mac_sa_only) ? 'True' : 'False'}
                            </Item>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

        </Paper>      
    </div>
  );
}
