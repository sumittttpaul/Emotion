import React, {
  FC,
  useState,
  MouseEvent,
  KeyboardEventHandler,
  ChangeEventHandler,
} from 'react';
import { alpha, styled } from '@mui/material/styles';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import { OutlinedInputProps } from '@mui/material/OutlinedInput';
import { IconButton, InputAdornment } from '@mui/material';
import { EyeIcon, EyeOffIcon } from '@heroicons/react/solid';

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
  },
}));

interface State {
  showPassword: boolean;
}

interface IProps {
  placeholder: string;
  icon: string;
  onkeyUp: KeyboardEventHandler;
  onChange: ChangeEventHandler;
  value: string;
}

/**
 * @author
 * @function @PasswordTextFieldDark
 **/


const PasswordTextFieldDark: FC<IProps> = (props) => {
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
        className="w-full z-10"
        label={props.placeholder}
        onChange={props.onChange}
        onKeyUp={props.onkeyUp}
        value={props.value}
        variant="filled"
        type={values.showPassword ? 'text' : 'password'}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                className="z-20 h-11 w-11 mb-[2px] rounded-md passwordEyeButton"
                style={{
                  borderRadius: 6,
                }}
              >
                {values.showPassword ? (
                  <EyeOffIcon
                    height={22}
                    width={22}
                    className="opacity-[0.4] text-white"
                  />
                ) : (
                  <EyeIcon
                    height={22}
                    width={22}
                    className="opacity-[0.4] text-white"
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
