import React from "react";
import Inbox from "@mui/icons-material/Inbox";
import Time from '@mui/icons-material/AccessTime';
import Star from '@mui/icons-material/StarPurple500';
import Send from '@mui/icons-material/Send';
import Draft from '@mui/icons-material/Description';
import ExpandMore from  '@mui/icons-material/ExpandMore'

const SideIconsBarButton =
    [
        
        {
            Icons: <Inbox fontSize="small"/>,
            Text: "Inbox",
            isactive: false,
        },
    
        {
            Icons:<Star fontSize="small"/>,
            Text: "Starred",
            isactive: false,
        },
        {
            Icons:<Time fontSize="small"/>,
            Text: "Snoozed",
            isactive: false,
        },
        {
            Icons:<Send fontSize="small"/>,
            Text: "Sent",
            isactive: false,
        },
        {
            Icons:<Draft fontSize="small"/>,
            Text: "Draft",
            isactive: false,
        },
        {
            Icons: <ExpandMore fontSize="small"/>,
            Text: "More",
            isactive: false,
        }
    ]

export default SideIconsBarButton;