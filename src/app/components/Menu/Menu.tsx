import { Box, Button } from '@mui/material';

const buttonStyled = {
   width: 130,
   borderWidth: 2,
   borderRadius: 2,
   textTransform: 'uppercase',
   ':hover': {
      borderWidth: 2,
      borderRadius: 2,
   },
};

export const Menu = (): JSX.Element => (
   <Box
      sx={{
         display: 'flex',
         gap: 3,
         flexDirection: 'row',
         justifyContent: 'center',
      }}
   >
      <Button variant="outlined" sx={buttonStyled}>
         Mode
      </Button>
      <Button variant="outlined" sx={buttonStyled}>
         Rules
      </Button>
   </Box>
);
