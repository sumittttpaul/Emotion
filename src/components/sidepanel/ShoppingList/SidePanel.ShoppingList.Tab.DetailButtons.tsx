import { Button } from '@mui/material';
import React, { FC } from 'react';

export interface SidePanelShoppingListTabDetailButtonsProps {
  Label: string;
  onClick: () => void;
}

/**
 * @author
 * @function @SidePanelShoppingListTabDetailButtons
 **/

export const SidePanelShoppingListTabDetailButtons: FC<
  SidePanelShoppingListTabDetailButtonsProps
> = (props) => {
  return (
    <Button
      onClick={props.onClick}
      className="w-full py-1 text-white text-[12px] font-[300] button-text-lower bg-[#ffffff10] hover:bg-[#ffffff20]"
      sx={{
        '.MuiTouchRipple-child': {
          backgroundColor: '#ffffff40 !important',
        },
      }}
    >
      {props.Label}
    </Button>
  );
};
