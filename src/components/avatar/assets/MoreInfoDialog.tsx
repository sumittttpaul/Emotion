import { Menu, MenuItem } from '@mui/material';
import Image from 'next/image';

interface IProps {
  anchorEl: null | HTMLElement;
  open: boolean;
  handleClose: () => void;
  MenuContent: { label: string; icon: string; onClick: () => void }[];
}

export function MoreInfoDialog(props: IProps) {
  return (
    <Menu
      anchorEl={props.anchorEl}
      open={props.open}
      onClose={props.handleClose}
      PaperProps={{
        elevation: 0,
        sx: {
          background: '#50505090',
          borderRadius: 2,
          minWidth: 200,
          overflow: 'visible',
          filter: 'drop-shadow(0px 0px 0px #000000)',
          backdropFilter: 'blur(15px)',
          '.MuiMenu-list': {
            padding: '1px 0',
          },
          '.MuiMenuItem-root': {
            minHeight: 0,
          },
          '.MuiTouchRipple-child': {
            backgroundColor: '#ffffff50 !important',
          },
        },
      }}
      transformOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
    >
      {props.MenuContent.map((value, idx) => (
        <MenuItem
          key={idx + 1}
          onClick={value.onClick}
          className={`${
            props.MenuContent.length === idx + 1 ? 'mb-1' : ''
          } mx-1 mt-1 py-2 px-3 rounded-md hover:bg-[#ffffff20] space-x-3 cursor-default`}
        >
          <Image
            height={19}
            width={19}
            src={value.icon}
            alt={value.label}
            className="text-white text-xs"
          />
          <div className="text-white text-left text-sm font-medium">
            {value.label}
          </div>
        </MenuItem>
      ))}
    </Menu>
  );
}
