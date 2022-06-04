import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import NotificationsIcon from '@mui/icons-material/Notifications';
import DownloadIcon from '@mui/icons-material/Download';
import PublishIcon from '@mui/icons-material/Publish';
import VisibilityIcon from '@mui/icons-material/Visibility';
import BeenhereIcon from '@mui/icons-material/Beenhere';

export const sidebardata= [
    {
        title:"Property",
        icon:<HomeIcon/>
    },
    {
        title:"PPD Assistance",
        icon:<NotificationsIcon/>
    },
    {
        title:"Recieved Interest",
        icon:<DownloadIcon/>
    },
    {
        title:"Sent Intrest",
        icon:<PublishIcon/>
    },
    {
        title:"Property Views",
        icon:<VisibilityIcon/>
    },
    {
        title:"Tariff Plan",
        icon:<BeenhereIcon/>
    }
]

export default sidebardata