import { Checkbox } from '@mui/material';
import { alpha } from '@mui/material/styles';
import Image from 'next/image';
import React, { ChangeEvent, FC, useState } from 'react';

interface IProps {
  Checked: boolean;
  OnCnange: (event: ChangeEvent<HTMLInputElement>) => void;
}

/**
 * @author
 * @function @CheckBoxBlue
 **/

const CheckBoxBlue: FC<IProps> = (props) => {
  return (
    <Checkbox
      checked={props.Checked}
      onChange={props.OnCnange}
      sx={{
        '&': {
          bgcolor: 'transparent',
          borderWidth: 0,
          borderRadius: '6px',
          height: 18,
          width: 18,
          padding: 0,
          margin: 0,
        },
        '&:hover': {
          bgcolor: 'transparent',
          borderRadius: '2px',
          borderWidth: 0,
          padding: 0,
          margin: 0,
          boxShadow: `${alpha('#ffffff', 0.1)} 0 0 0 6px`,
        },
        '&.Mui-checked': {
          color: '#0084FF',
          bgcolor: '#ffffff',
        },
      }}
      disableRipple
      color="default"
      icon={
        <Image
          height={18}
          width={18}
          className="opacity-50"
          src="/icons/unChecked.svg"
          alt="unchecked-svg"
          placeholder="blur"
          blurDataURL={`data:image/svg+xml,%3Csvg id='Layer_1' data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 79.17 79.17'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:none;stroke:%23fff;stroke-linecap:round;stroke-linejoin:round;stroke-width:4.17px;%7D%3C/style%3E%3C/defs%3E%3Crect class='cls-1' x='2.08' y='2.08' width='75' height='75' rx='8.33'/%3E%3C/svg%3E`}
        />
      }
      inputProps={{ 'aria-label': 'Privary Policy Checkbox' }}
    />
  );
};

export default CheckBoxBlue;
