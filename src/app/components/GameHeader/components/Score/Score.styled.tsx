import { Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

const Score = styled(Paper)(({ theme }) => ({
   [theme.breakpoints.up('xs')]: {
      padding: theme.spacing(1),
      minWidth: 80,
   },
   [theme.breakpoints.up('md')]: {
      minWidth: 150,
   },
}));
export const S = {
   Score,
};
