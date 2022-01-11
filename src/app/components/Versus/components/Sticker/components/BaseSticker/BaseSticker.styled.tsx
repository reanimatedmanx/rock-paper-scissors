import { Box, Paper } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';
import { common } from '@mui/material/colors';

const DEFAULTS = {
   borderSize: 15,
   shadowCoverageRatio: 4,
};
const stickerShadowOffset =
   DEFAULTS.borderSize / 2 / DEFAULTS.shadowCoverageRatio;

const BaseSticker = styled(Paper)`
   display: flex;
   justify-content: center;
   align-items: center;
   border-radius: 100%;
   width: inherit;
   height: inherit;
   padding: ${DEFAULTS.borderSize}px;
   background: ${({ color }) => color};
   box-shadow: ${alpha(common.black, 0.3)} 0px -${stickerShadowOffset}px 0px 1px
      inset;
`;

const BaseStickerInner = styled(Box)`
   display: flex;
   justify-content: center;
   align-items: center;
   border-radius: 100%;
   width: 100%;
   height: 100%;
   background: ${({ theme }) => theme.palette.primary.main};
   box-shadow: ${alpha(common.black, 0.2)} 0px ${stickerShadowOffset}px 0px 1px
      inset;
`;

export const S = {
   BaseSticker,
   BaseStickerInner,
};
