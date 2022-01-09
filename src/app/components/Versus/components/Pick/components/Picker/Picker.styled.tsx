import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const DEFAULTS = {
   radius: 205,
   slotSizeMobile: 128,
   slotSizeDesktop: 200,
};

type PickerSlotProps = {
   rotation: number;
};

const Picker = styled(Box)`
   position: relative;
   display: flex;
   height: inherit;
   justify-content: center;
   align-items: end;
   margin-top: 70px;
`;

const PickerSlot = styled(Box)<PickerSlotProps>`
   position: absolute;
   transition: 1s all;
   width: ${DEFAULTS.slotSizeMobile}px;
   height: ${DEFAULTS.slotSizeMobile}px;
   transform: rotate(${({ rotation }) => rotation * 1}deg)
      translate(${DEFAULTS.radius / 2}px)
      rotate(${({ rotation }) => rotation * -1}deg);
`;

export const S = {
   Picker,
   PickerSlot,
};
