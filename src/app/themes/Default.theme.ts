import { createTheme } from '@mui/material/styles';

export const DefaultTheme = createTheme({
   spacing: 8,
   typography: {
      fontFamily: 'Barlow Semi Condensed',
      h2: {
         fontSize: 64,
         fontWeight: 700,
      },
      body2: {
         letterSpacing: 3,
         fontWeight: 700,
      },
   },
   palette: {
      primary: {
         main: '#fff',
      },
   },
});
