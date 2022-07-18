import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import Divider from '@mui/material/Divider';
import MonitorWeight from '@mui/icons-material/MonitorWeight';
import { orange,cyan } from '@mui/material/colors';
import MacAddressLocation from '../../pages/showMac/showMac';

var data = require('../../data.json');

var MacActual;
var i=0;
var estatico;
var multicast;
var Sa_Cpu_priority;
var Mac_Sa_Group;
var Mac_Sa_Group_1;
var Mac_Sa_Group_2;
var Mac_Sa_Group_3;
var Mac_Sa_Group_4;
var Mac_Sa_Group_0;
var Mac_Group_ID;
var Da_Cpu_priority;
var Mac_Da_Group;
var Mac_Da_Group_0;
var Mac_Da_Group_1;
var Mac_Da_Group_2;
var Mac_Da_Group_3;
var Mac_Da_Group_4;
var Mac_SA_Only;

function DatosMacAddress (){
    while (MacAddressLocation!== MacActual){
        MacActual = String(data[i].mac);
        i+=1;
    }
    estatico = data[(i-1)].is_static;
    multicast = data[(i-1)].is_multicast;
    Sa_Cpu_priority = data[(i-1)].cpu_priority_sa;
    Mac_Sa_Group = data[(i-1)].mac_sa_group_enable;
    Mac_Sa_Group_0 = data[(i-1)].mac_sa_groups.mac_sa_group_0;
    Mac_Sa_Group_1 = data[(i-1)].mac_sa_groups.mac_sa_group_1;
    Mac_Sa_Group_2 = data[(i-1)].mac_sa_groups.mac_sa_group_2;
    Mac_Sa_Group_3 = data[(i-1)].mac_sa_groups.mac_sa_group_3;
    Mac_Sa_Group_4 = data[(i-1)].mac_sa_groups.mac_sa_group_4;
    Mac_Group_ID = data[(i-1)].mac_group_id;
    Da_Cpu_priority = data[(i-1)].cpu_priority_da;
    Mac_Da_Group = data[(i-1)].mac_da_group_enable;
    Mac_Da_Group_0 = data[(i-1)].mac_da_groups.mac_sa_group_0;
    Mac_Da_Group_1 = data[(i-1)].mac_da_groups.mac_sa_group_1;
    Mac_Da_Group_2 = data[(i-1)].mac_da_groups.mac_sa_group_2;
    Mac_Da_Group_3 = data[(i-1)].mac_da_groups.mac_sa_group_3;
    Mac_Da_Group_4 = data[(i-1)].mac_da_groups.mac_sa_group_4;
    Mac_SA_Only = data[(i-1)].is_mac_sa_only;
} 



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


export default function MacAddress() {
  return (
    {/*DatosMacAddress()*/},
    {/*La expresion anterior se comenta para que funcione,
    en teoria el error esta en el ciclo while que no se puede hacer esa comparacion, no se si se le ocurre otra forma
    para comparar esos datos y obtener los valores especificos de la direccion MAC*/},
    <>
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
                <Grid item>
                    <ButtonBase sx={{ width: 50, height: 90 }}>
                        <MonitorWeight fontSize="large"/>
                    </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={6}>
                        <Grid item xs>
                            <Typography gutterBottom variant="subtitle1" component="div" align='center'>
                                Multicast: 
                            </Typography>
                            <Item>
                                {multicast}
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
                            <Typography gutterBottom variant="subtitle1" component="div" align='center'>
                                Static:
                            </Typography>
                            <Item>
                                {estatico}
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
                                SA CPU Priority:{Sa_Cpu_priority}
                            </Item>
                            <Item>
                                 Mac Sa Group:{Mac_Sa_Group}
                            </Item>
                            <Grid>
                                <Typography gutterBottom variant="subtitle1" component="div">
                                    SA Groups:
                                </Typography>
                                <Item>
                                    Mac Sa Group 0:{Mac_Sa_Group_0}
                                </Item>
                                <Item>
                                    Mac Sa Group 1:{Mac_Sa_Group_1}
                                </Item>
                                <Item>
                                    Mac Sa Group 2:{Mac_Sa_Group_2}
                                </Item>
                                <Item>
                                    Mac Sa Group 3:{Mac_Sa_Group_3}
                                </Item>
                                <Item>
                                    Mac Sa Group 4:{Mac_Sa_Group_4}
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
                                 DA CPU Priority :{Da_Cpu_priority}
                            </Item>
                            <Item>
                                 Mac Da Group:{Mac_Da_Group}
                            </Item>
                            <Grid>
                                <Typography gutterBottom variant="subtitle1" component="div">
                                    DA Groups:
                                </Typography>
                                <Item>
                                    Mac Da Group 0:{Mac_Da_Group_0}
                                </Item>
                                <Item>
                                    Mac Da Group 1:{Mac_Da_Group_1}
                                </Item>
                                <Item>
                                    Mac Da Group 2:{Mac_Da_Group_2}
                                </Item>
                                <Item>
                                    Mac Da Group 3:{Mac_Da_Group_3}
                                </Item>
                                <Item>
                                    Mac Da Group 4:{Mac_Da_Group_4}
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
                                 {Mac_Group_ID}
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
                                {Mac_SA_Only}
                            </Item>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

        </Paper>      
    </>
  );
}
