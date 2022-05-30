import React, {
  FC,
  useState,
  MouseEvent,
} from 'react';
import { alpha, styled } from '@mui/material/styles';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import { OutlinedInputProps } from '@mui/material/OutlinedInput';
import { IconButton, InputAdornment } from '@mui/material';
import { EyeIcon, EyeOffIcon } from '@heroicons/react/solid';
import { PasswordTextFieldProps } from './AllTextFieldProps';

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
      borderColor: 'rgba(255, 255, 255, 0.7)',
      color: '#ffffff',
    },
    '&.Mui-error': {
      backgroundColor: 'transparent',
      boxShadow: `${alpha('#FF2020', 0.25)} 0 0 0 0px`,
      borderColor: '#CE0000',
      color: '#ffffff',
      '&:after': {
        borderBottom: 'none'
      }
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
        id="PasswordInput"
        aria-label="password-textfield"
        className="w-full z-10"
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
                  borderRadius: 6,
                }}
              >
                {values.showPassword ? (
                  <EyeOffIcon
                    height={22}
                    width={22}
                    className="opacity-[0.5] text-white"
                  />
                ) : (
                  <EyeIcon
                    height={22}
                    width={22}
                    className="opacity-[0.5] text-white"
                  />
                )}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};

export default PasswordTextFieldDark;
