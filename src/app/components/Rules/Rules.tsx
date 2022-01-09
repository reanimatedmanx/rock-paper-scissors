import { Box, Button } from '@mui/material';

export const Rules = (): JSX.Element => (
   <Box
      sx={{
         display: 'flex',
         flexDirection: 'row',
         justifyContent: 'center',
      }}
   >
      <Button
         variant="outlined"
         sx={{
            width: 130,
            borderWidth: 2,
            borderRadius: 2,
            textTransform: 'uppercase',
            ':hover': {
               borderWidth: 2,
               borderRadius: 2,
            },
         }}
      >
         Rules
      </Button>
   </Box>
);
