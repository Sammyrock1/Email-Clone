import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import Stars from '@mui/icons-material/StarOutline';

import ArchiveIcon from '@mui/icons-material/Archive';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import DraftsIcon from '@mui/icons-material/Drafts';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';


const messages = [
        {
            
            CheckBox: <Checkbox fontSize="small"/>,
            Stars: <Stars fontSize="small"/>,
            Text: "MicroSoft Bing!",
            Title: "You're in!we're done testing!",
            MessagesText: "We're excited to give you access to an early preview of the new Bing – Your AI-powered copilot for the web. You're in! Welcome to the new Bing! We are excited to give you access to an early",
            Date: "April 22",
            MoreVertIcon:<DragIndicatorIcon fontSize="small"/>,
            Archive: <ArchiveIcon fontSize="small"/>,
            Delete: <DeleteOutlineIcon fontSize="small"/>,
            Draft: <DraftsIcon fontSize="small"/>,
            Time: <AccessTimeIcon fontSize="small"/>
        },]
 
export default messages;