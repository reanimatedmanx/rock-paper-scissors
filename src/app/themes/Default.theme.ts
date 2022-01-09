import { createTheme } from '@mui/material/styles';

export const DefaultTheme = createTheme({
   spacing: 10,
   typography: {
      fontFamily: 'Barlow Semi Condensed',
      h2: {
         fontSize: '4rem',
         fontWeight: 700,
      },
      h3: {
         fontSize: '2.5rem',
         fontWeight: 700,
      },
      body2: {
         letterSpacing: 3,
         fontWeight: 700,
      },
      button: {
         fontSize: '1rem',
         letterSpacing: 2,
         marginTop: 4,
      },
   },
   palette: {
      primary: {
         main: '#fff',
      },
   },
});
