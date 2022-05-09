import * as React from 'react';
import { alpha, styled } from '@mui/material/styles';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import { OutlinedInputProps } from '@mui/material/OutlinedInput';

const CustomTextField = styled((props: TextFieldProps) => (
    <TextField
      InputProps={{ disableUnderline: true } as Partial<OutlinedInputProps>}
      {...props}
    />
  ))(({ theme }) => ({
    '& label': {
        color: 'rgba(255, 255, 255, 0.70)',
        display: 'block',
        fontFamily: ['Poppins','sans-serif'].join(','),
        fontSize: '14px',
        letterSpacing: 0.5,
        paddingLeft: 15,
        paddingTop: 6,
      },
    '& label.Mui-focused': {
      color: 'rgba(255, 255, 255, 0.70)',
      display: 'block',
      fontFamily: ['Poppins','sans-serif'].join(','),
      fontSize: '14px',
      letterSpacing: 0.5,
      paddingLeft: 15,
      paddingTop: 6,
      },
    '& .MuiFilledInput-root': {
      height: 65,
      fontWeight: 300,
      fontSize: '14px',
      letterSpacing: 0.5,
      fontFamily: ['Poppins','sans-serif'].join(','),
      color: '#ffffff',
      border: '1px solid rgba(255, 255, 255, 0.23)',
      overflow: 'hidden',
      paddingLeft: 10,
      paddingTop: 5,
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
        borderColor: 'rgba(255, 255, 255, 0.6)',
        color: '#ffffff',
      },
    },
  }));

const DarkTextField: React.FC<{label:string}> = ({label}) => {
  return(
    <div className="p-5 w-full max-w-sm">
      <CustomTextField
      className='w-full'
      label={label}
      variant="filled"
      />
    </div>
  )
}

export default DarkTextField;