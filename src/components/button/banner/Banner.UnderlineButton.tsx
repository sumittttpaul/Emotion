import { Button } from '@mui/material';
import React, { FC } from 'react';

interface IProps {
  label: string;
}

/**
 * @author
 * @function @BannerUnderlineButton
 **/

export const BannerUnderlineButton: FC<IProps> = (props) => {
  return (
    <Button
      className="text-white absolute bottom-0 block whitespace-nowrap mx-5 mb-4 p-0 text-[14px] hover:underline underline-offset-4 font-sans font-normal button-text-lower"
      sx={{
        '.MuiTouchRipple-child': {
          backgroundColor: '#ffffff00 !important',
        },
      }}
    >
      {props.label}
    </Button>
  );
};
