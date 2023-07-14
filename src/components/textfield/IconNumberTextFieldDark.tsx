import {
  FilledInputProps,
  TextField,
  TextFieldProps,
  alpha,
  styled,
} from '@mui/material';
import Image from 'next/image';
import { IconNumberTextFieldProps } from './AllTextFieldProps';
import { CheckIcon } from '@heroicons/react/solid';

const CustomTextField = styled((props: TextFieldProps) => (
  <TextField
    InputProps={{ disableUnderline: true } as Partial<FilledInputProps>}
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
  '& .MuiInputBase-underline': {
    display: 'none',
  },
  '& .MuiFilledInput-root': {
    height: 63,
    borderRadius: 12,
    fontWeight: 600,
    fontSize: '14px',
    letterSpacing: '0.025em',
    // fontFamily: ['Poppins', 'sans-serif'].join(','),
    color: '#ffffff',
    border: '1px solid #ffffff50',
    overflow: 'hidden',
    paddingLeft: 54,
    paddingRight: 34,
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
    '&:before': {
      transition: 'none !important',
      borderBottom: '0 !important',
    },
    '&:after': {
      transition: 'none !important',
      borderBottom: '0 !important',
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

function IconNumberTextFieldDark(props: IconNumberTextFieldProps) {
  return (
    <div className="relative mt-[2px] flex w-full flex-col">
      <div className="pointer-events-none -mb-[46px] ml-[20px] mt-[16px] flex cursor-text touch-none">
        <Image
          height={30}
          width={30}
          className="opacity-50"
          src={props.icon}
          alt=""
        />
      </div>
      <CustomTextField
        id={props.id}
        className="w-full"
        label={props.placeholder}
        onChange={props.onChange}
        onKeyUp={props.onkeyUp}
        onKeyDown={props.onkeyDown}
        onFocus={props.onFocus}
        onBlur={props.onBlur}
        value={props.value}
        type={props.type}
        data-phonecode={props.dataPhonecode}
        variant="filled"
        autoCorrect="off"
        autoComplete="off"
        error={props.error}
        inputProps={{ maxLength: 10 }}
        InputProps={{ readOnly: props.readonly }}
      />
      {props.valid && (
        <div className="pointer-events-none absolute right-4 mt-5 flex cursor-text touch-none">
          <CheckIcon className="h-5 text-green-400" />
        </div>
      )}
    </div>
  );
}

export default IconNumberTextFieldDark;
