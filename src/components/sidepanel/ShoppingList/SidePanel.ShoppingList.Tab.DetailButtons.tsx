import { Button } from '@mui/material';

export interface SidePanelShoppingListTabDetailButtonsProps {
  Label: string;
  onClick: () => void;
}

function SidePanelShoppingListTabDetailButtons(
  props: SidePanelShoppingListTabDetailButtonsProps,
) {
  return (
    <Button
      onClick={props.onClick}
      className="button-text-lower w-full bg-[#ffffff10] py-1 text-[12px] font-[300] text-white hover:bg-[#ffffff20]"
      sx={{
        '.MuiTouchRipple-child': {
          backgroundColor: '#ffffff40 !important',
        },
      }}
    >
      {props.Label}
    </Button>
  );
}

export default SidePanelShoppingListTabDetailButtons;
