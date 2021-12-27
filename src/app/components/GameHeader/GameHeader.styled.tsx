import { Paper } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';

const GameHeader = styled(Paper)(({ theme }) => ({
   display: 'flex',
   flexDirection: 'column',
   width: 704,
   paddingTop: theme.spacing(2),
   paddingBottom: theme.spacing(2),
   paddingRight: theme.spacing(3),
   paddingLeft: theme.spacing(3),
   background: 'transparent',
   borderWidth: 4,
   borderRadius: 12,
   borderColor: alpha(theme.palette.primary.main, 0.5),
}));

export const S = {
   GameHeader,
};
