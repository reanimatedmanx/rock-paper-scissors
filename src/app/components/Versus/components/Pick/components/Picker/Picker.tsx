import React, { Children, Component } from 'react';
import { S } from './Picker.styled';

export type PickerProps = {
   children: React.ReactNode;
};

export type PickerSlotProps = {
   children: React.ReactNode;
   rotation: number;
};

export const PickerSlot = ({
   children,
   rotation,
}: PickerSlotProps): JSX.Element => {
   return <S.PickerSlot rotation={rotation}>{children}</S.PickerSlot>;
};

export class Picker extends Component<PickerProps> {
   static Slot = PickerSlot;

   angle!: number;

   render() {
      const count = Children.count(this.props.children);
      this.angle = 360 / count;

      const childrenArray = Children.toArray(this.props.children);

      let rot = 210;

      return (
         <S.Picker>
            {childrenArray.map(C => {
               const component = <PickerSlot rotation={rot}>{C}</PickerSlot>;

               rot = rot + this.angle;

               return component;
            })}
         </S.Picker>
      );
   }
}
