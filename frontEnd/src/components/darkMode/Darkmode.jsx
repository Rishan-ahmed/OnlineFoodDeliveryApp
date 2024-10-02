import { createTheme } from '@mui/material'
import React from 'react'

export const Darkmode = createTheme({
    palette: {
        mode: 'dark',
        primary:{
            main:"#e91e63"
        },
        secondary:{
            main: "#242B2E"
        },
        black:{
            main:"#232B2E"
        },
        background:{
            main:"#000000",
            default:"#0D0D0D",
            paper:"#0D0D0D"
        },
        textColor:{
            primary:"#ffffff"
        }
      },
    
}
)