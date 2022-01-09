import { Paper } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';

const GameHeader = styled(Paper)(({ theme }) => ({
   display: 'flex',
   flexDirection: 'column',
   width: '100%',
   maxWidth: 704,
   background: 'transparent',
   padding: theme.spacing(1),
   borderWidth: 4,
   borderRadius: 12,
   borderColor: alpha(theme.palette.primary.main, 0.3),
}));

export const S = {
   GameHeader,
};
