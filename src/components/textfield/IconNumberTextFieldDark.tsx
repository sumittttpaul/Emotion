import React, { FC } from 'react';
import { alpha, styled } from '@mui/material/styles';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import { OutlinedInputProps } from '@mui/material/OutlinedInput';
import Image from 'next/image';
import { IconNumberTextFieldProps } from './AllTextFieldProps';
import { Square_BlurDataURL } from '../loader/BlurDataURL';

const CustomTextField = styled((props: TextFieldProps) => (
  <TextField
    InputProps={{ disableUnderline: true } as Partial<OutlinedInputProps>}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiInputLabel-root': {
    color: '#ffffffb3',
    display: 'block',
    fontFamily: ['Poppins', 'sans-serif'].join(','),
    fontSize: '13px',
    textTransform: 'unset',
    letterSpacing: 0.5,
    transform: 'translate(67px, 23px) scale(1)',
    '&.Mui-error': {
      color: '#ffffffb3',
    },
  },
  '& label.Mui-focused': {
    color: '#ffffffb3',
    transform: 'translate(67px, 12px) scale(0.90)',
  },
  '& .MuiInputLabel-shrink': {
    transform: 'translate(67px, 12px) scale(0.90)',
  },
  '& .MuiFilledInput-root': {
    height: 63,
    borderRadius: 6,
    fontWeight: 300,
    fontSize: '13.5px',
    letterSpacing: 0.5,
    fontFamily: ['Poppins', 'sans-serif'].join(','),
    color: '#ffffff',
    border: '1px solid #ffffff3b',
    overflow: 'hidden',
    paddingLeft: 54,
    paddingTop: 4,
    backgroundColor: 'transparent',
    transition: theme.transitions.create([
      'border-color',
      'background-color',
      'box-shadow',
    ]),
    '&:hover': {
      backgroundColor: 'transparent',
      color: '#ffffff',
    },
    '&.Mui-focused': {
      backgroundColor: 'transparent',
      boxShadow: `${alpha('#ffffff', 0.25)} 0 0 0 2px`,
      borderColor: '#ffffffb3',
      color: '#ffffff',
    },
    '&.Mui-error': {
      backgroundColor: 'transparent',
      boxShadow: `${alpha('#FF2020', 0.25)} 0 0 0 0px`,
      borderColor: '#CE0000',
      color: '#ffffff',
      '&:after': {
        borderBottom: 'none',
      },
    },
  },
}));

/**
 * @author
 * @function @IconNumberTextFieldDark
 **/

const IconNumberTextFieldDark: FC<IconNumberTextFieldProps> = (props) => {
  return (
    <div className="flex flex-col w-full">
      <CustomTextField
        id={props.id}
        className="w-full z-10"
        label={props.placeholder}
        onChange={props.onChange}
        onKeyUp={props.onkeyUp}
        onKeyDown={props.onkeyDown}
        onKeyPress={props.onKeyPress}
        onFocus={props.onFocus}
        onBlur={props.onBlur}
        value={props.value}
        type={props.type}
        data-phonecode={props.dataPhonecode}
        variant="filled"
        autoCorrect="off"
        autoComplete="off"
        error={props.error}
        inputProps={{
          maxLength: 10,
        }}
        InputProps={{
          readOnly: props.readonly,
        }}
      />
      <div className="-mt-[46px] ml-[20px] mb-[16px] flex">
        <Image
          height={30}
          width={30}
          className="opacity-[0.4]"
          src={props.icon}
          loading="lazy"
          alt=""
          placeholder="blur"
          blurDataURL={Square_BlurDataURL}
        />
      </div>
    </div>
  );
};

export default IconNumberTextFieldDark;
