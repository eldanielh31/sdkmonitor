import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import DesktopWindowsIcon from '@mui/icons-material/DesktopWindows';
import MemoryIcon from '@mui/icons-material/Memory';
import SsidChartIcon from '@mui/icons-material/SsidChart';

export const SidebarData = [
    {
        title:"Home",
        icon:<HomeIcon />,
        link:"/"
    },
    {
        title:"Cpu",
        icon:<SsidChartIcon />,
        link:"/cpu"
    },
    {
        title:"Memory",
        icon:<MemoryIcon />,
        link:"/memory"
    },
    {
        title:"Mac",
        icon:<DesktopWindowsIcon />,
        link:"/mac"
    }
]


