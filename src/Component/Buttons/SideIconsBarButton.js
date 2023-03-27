import React from "react";
import Inbox from "@mui/icons-material/Inbox";
import Time from '@mui/icons-material/AccessTime';
import Star from '@mui/icons-material/StarPurple500';
import Send from '@mui/icons-material/Send';
import Draft from '@mui/icons-material/Description';
import ExpandMore from  '@mui/icons-material/ExpandMore'

export const SideIconsBarButton = [
    {
        Icons: <Inbox fontSize="small"/>,
        Text: "Inbox"
    },

    {
        Icons:<Star fontSize="small"/>,
        Text: "Starred"
    },
    {
        Icons:<Time fontSize="small"/>,
        Text: "Snoozed"
    },
    {
        Icons:<Send fontSize="small"/>,
        Text: "Sent"
    },
    {
        Icons:<Draft fontSize="small"/>,
        Text: "Draft"
    },
    {
        Icons: <ExpandMore fontSize="small"/>,
        Text: "More"
    }
]