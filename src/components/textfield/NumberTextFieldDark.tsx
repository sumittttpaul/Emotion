import React, { FC, KeyboardEvent, ChangeEvent } from 'react';
import { alpha, styled } from '@mui/material/styles';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import { OutlinedInputProps } from '@mui/material/OutlinedInput';

const CustomTextField = styled((props: TextFieldProps) => (
  <TextField
    InputProps={{ disableUnderline: true } as Partial<OutlinedInputProps>}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiInputLabel-root': {
    color: 'rgba(255, 255, 255, 0.70)',
    display: 'block',
    fontFamily: ['Poppins', 'sans-serif'].join(','),
    fontSize: '13px',
    textTransform: 'unset',
    letterSpacing: 0.5,
    transform: 'translate(26px, 23px) scale(1)',
    '&.Mui-error': {
      color: 'rgba(255, 255, 255, 0.70)',
    }
  },
  '& label.Mui-focused': {
    color: 'rgba(255, 255, 255, 0.70)',
    transform: 'translate(26px, 12px) scale(0.90)',
  },
  '& .MuiInputLabel-shrink': {
    transform: 'translate(26px, 12px) scale(0.90)',
  },
  '& .MuiFilledInput-root': {
    height: 63,
    borderRadius: 6,
    fontWeight: 300,
    fontSize: '13.5px',
    letterSpacing: 0.5,
    fontFamily: ['Poppins', 'sans-serif'].join(','),
    color: '#ffffff',
    border: '1px solid rgba(255, 255, 255, 0.23)',
    overflow: 'hidden',
    paddingLeft: 13,
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
      borderColor: 'rgba(255, 255, 255, 0.7)',
      color: '#ffffff',
    },
    '&.Mui-error': {
      backgroundColor: 'transparent',
      boxShadow: `${alpha('#FF2020', 0.25)} 0 0 0 0px`,
      borderColor: '#CE0000',
      color: '#ffffff',
    },
  },
}));

interface IProps {
  value: string;
  placeholder?: string;
  type?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onkeyUp?: (event: KeyboardEvent<HTMLInputElement>) => void;
  onkeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
  onKeyPress?: (event: KeyboardEvent<HTMLInputElement>) => void;
  dataPhonecode?: string;
  error?: boolean;
}

/**
 * @author
 * @function @NumberTextFieldDark
 **/

const NumberTextFieldDark: FC<IProps> = (props) => {
  return (
    <div className="flex flex-col w-full">
      <CustomTextField
        className="w-full z-10"
        label={props.placeholder}
        onChange={props.onChange}
        onKeyUp={props.onkeyUp}
        onKeyDown={props.onkeyDown}
        onKeyPress={props.onKeyPress}
        value={props.value}
        type={props.type}
        error={props.error}
        variant="filled"
        data-phonecode={props.dataPhonecode}
      />
    </div>
  );
};

export default NumberTextFieldDark;