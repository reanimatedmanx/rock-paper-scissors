import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const DEFAULTS = {
   radius: 400,
};

type PickerSlotProps = {
   rotation: number;
};

const Picker = styled(Box)`
   position: relative;
   display: flex;
`;

const PickerSlot = styled(Box)<PickerSlotProps>`
   position: absolute;
   top: 50%;
   left: 50%;
   transition: 1s all;
   width: 205px;
   height: 205px;
   margin: -103px;
   transform: rotate(${({ rotation }) => rotation * 1}deg)
      translate(${DEFAULTS.radius / 2}px)
      rotate(${({ rotation }) => rotation * -1}deg);
`;

export const S = {
   Picker,
   PickerSlot,
};
