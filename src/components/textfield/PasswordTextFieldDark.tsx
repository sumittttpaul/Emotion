import React, { FC, useState, MouseEvent } from 'react';
import {
  IconButton,
  InputAdornment,
  OutlinedInputProps,
  TextField,
  TextFieldProps,
  alpha,
  styled,
} from '@mui/material';
import { EyeIcon, EyeOffIcon } from '@heroicons/react/solid';
import { PasswordTextFieldProps } from './AllTextFieldProps';

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
    transform: 'translate(26px, 23px) scale(1)',
    '&.Mui-error': {
      color: '#ffffffb3',
    },
  },
  '& label.Mui-focused': {
    color: '#ffffffb3',
    transform: 'translate(26px, 12px) scale(0.90)',
  },
  '& .MuiInputLabel-shrink': {
    transform: 'translate(26px, 12px) scale(0.90)',
  },
  '& .MuiFilledInput-root': {
    height: 63,
    borderRadius: 12,
    fontWeight: 400,
    fontSize: '14px',
    letterSpacing: '0.025em',
    // fontFamily: ['Poppins', 'sans-serif'].join(','),
    color: '#ffffff',
    border: '1px solid #ffffff50',
    overflow: 'hidden',
    paddingLeft: 13,
    paddingRight: 8,
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
      '&:before': {
        borderBottom: 0,
      },
      '&:after': {
        borderBottom: 0,
      },
    },
  },
}));

interface State {
  showPassword: boolean;
}

/**
 * @author
 * @function @PasswordTextFieldDark
 **/

const PasswordTextFieldDark: FC<PasswordTextFieldProps> = (props) => {
  const [values, setValues] = useState<State>({ showPassword: false });

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <div className="flex flex-col w-full">
      <CustomTextField
        id={props.id}
        aria-label="password-textfield"
        className="w-full"
        label={props.placeholder}
        onChange={props.onChange}
        onKeyUp={props.onkeyUp}
        onKeyDown={props.onkeyDown}
        onKeyPress={props.onKeyPress}
        value={props.value}
        error={props.error}
        onFocus={props.onFocus}
        onBlur={props.onBlur}
        variant="filled"
        autoComplete="off"
        autoCapitalize="off"
        type={values.showPassword ? 'text' : 'password'}
        // inputProps={{
        //   maxLength: 16,
        // }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                disableRipple
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                className="z-20 h-11 w-11 mb-[3px] rounded-md passwordEyeButton"
                style={{
                  borderRadius: 8,
                }}
              >
                {values.showPassword ? (
                  <EyeOffIcon
                    height={22}
                    width={22}
                    className="opacity-50 text-white"
                  />
                ) : (
                  <EyeIcon
                    height={22}
                    width={22}
                    className="opacity-50 text-white"
                  />
                )}
              </IconButton>
            </InputAdornment>
          ),
          readOnly: props.readonly,
        }}
      />
    </div>
  );
};

export default PasswordTextFieldDark;
