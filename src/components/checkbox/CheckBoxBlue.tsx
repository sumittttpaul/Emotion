import { Checkbox, CheckboxProps } from '@mui/material';
import { alpha } from '@mui/material/styles';
import Image from 'next/image';

const CheckBoxBlue = ( props: CheckboxProps ) => {
    return (
        <Checkbox 
        sx={{
            '&': {
                bgcolor: 'transparent',
                borderWidth: 0,
                borderRadius: '2px',
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
        color='default'
        icon={<Image height={18} width={18} className="opacity-50" src="/icons/unChecked.svg" alt='unchecked-svg'/>}
        inputProps={{ 'aria-label': 'Privary Policy Checkbox' }}
        {...props}/>
    )
}

export default CheckBoxBlue;