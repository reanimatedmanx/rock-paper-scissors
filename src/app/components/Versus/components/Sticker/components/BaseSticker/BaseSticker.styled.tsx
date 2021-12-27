import { Paper } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';
import { common } from '@mui/material/colors';
import { always } from 'ramda';

const DEFAULTS = {
   radius: 205,
   borderSize: 48,
   padding: 42,
   shadowCoverageRatio: 2.5,
};

const getStickerInnerSize = always({
   width: DEFAULTS.radius - DEFAULTS.borderSize,
   height: DEFAULTS.radius - DEFAULTS.borderSize,
});

const stickerShadowOffset =
   DEFAULTS.borderSize / 2 / DEFAULTS.shadowCoverageRatio;

const getStickerShadow = (isInverted: boolean, shadowStrength: number) => ({
   boxShadow: `${alpha(common.black, shadowStrength)} 0px ${
      isInverted ? '-' : ''
   }${stickerShadowOffset}px 0px 1px inset`,
});

const BaseSticker = styled(Paper)(({ theme, color }) => ({
   ...getStickerInnerSize(),
   ...getStickerShadow(false, 0.1),
   padding: DEFAULTS.padding,
   position: 'relative',
   display: 'inline-flex',
   justifyContent: 'center',
   margin: DEFAULTS.borderSize / 2,
   borderRadius: '100%',
   background: theme.palette.primary.main,
   '&::before': {
      ...getStickerShadow(true, 0.2),
      content: '""',
      position: 'absolute',
      borderRadius: '100%',
      width: DEFAULTS.radius,
      height: DEFAULTS.radius,
      top: `calc(50% - ${DEFAULTS.radius / 2}px)`,
      left: `calc(50% - ${DEFAULTS.radius / 2}px)`,
      background: color,
      zIndex: -1,
   },
}));

export const S = {
   BaseSticker,
};
