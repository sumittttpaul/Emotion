import { Checkbox } from '@mui/material';
import { alpha } from '@mui/material/styles';
import Image from 'next/image';
import React, { ChangeEvent, FC, useState } from 'react';
import { Square_BlurDataURL } from '../loader/BlurDataURL';

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
          loading='lazy'
          blurDataURL={Square_BlurDataURL}
        />
      }
      inputProps={{ 'aria-label': 'Privary Policy Checkbox' }}
    />
  );
};

export default CheckBoxBlue;
