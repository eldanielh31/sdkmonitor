import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import DesktopWindowsIcon from '@mui/icons-material/DesktopWindows';
import MemoryIcon from '@mui/icons-material/Memory';
import SsidChartIcon from '@mui/icons-material/SsidChart';

export const SidebarData = [
    {
        title:"Home",
        icon:<HomeIcon />,
        link:"/Home"
    },
    {
        title:"Login",
        icon:<PersonIcon />,
        link:"/Login"
    },
    {
        title:"Cpu",
        icon:<SsidChartIcon />,
        link:"/Cpu"
    },
    {
        title:"Memory",
        icon:<MemoryIcon />,
        link:"/Memory"
    },
    {
        title:"Mac",
        icon:<DesktopWindowsIcon />,
        link:"/Mac"
    }

]


