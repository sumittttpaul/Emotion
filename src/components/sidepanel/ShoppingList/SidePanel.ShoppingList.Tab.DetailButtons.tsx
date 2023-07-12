import { Button } from '@mui/material';

export interface SidePanelShoppingListTabDetailButtonsProps {
  Label: string;
  onClick: () => void;
}

function SidePanelShoppingListTabDetailButtons(
  props: SidePanelShoppingListTabDetailButtonsProps
) {
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
}

export default SidePanelShoppingListTabDetailButtons;
