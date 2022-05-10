import Image from 'next/image';
import AuthContainer from '../../components/container/AuthContainer';
import CheckBoxBlue from '../checkbox/CheckBoxBlue'
import LargeButtonBlue from '../button/LargeButtonBlue';
import IconTextFieldDark from '../textfield/IconTextFieldDark'
import PasswordTextFieldDark from '../textfield/PasswordTextFieldDark'
import { Link } from '@mui/material';
import LargeToggleButtonDark from '../button/LargeToggleButtonDark';

const LoginUI = () => {
 return(
    <AuthContainer>
        <div className='w-full max-w-[350px] space-y-7 py-14 flex flex-col justify-center items-center'>
            <Image height={50} width={50} className='opacity-70' src='/agewear.svg'/>
            <h6 className='font-medium text-center text-md'>Sign in with an Agewear Account</h6>
            <LargeToggleButtonDark/>
            <IconTextFieldDark label="Email Address" icon="/icons/email.svg"/>
            <PasswordTextFieldDark label="Password" icon="/icons/password.svg"/>
            <div className='w-full space-y-1'>
                <Link href="#" className='text-white text-xs text-right w-full -mt-5' component="button" underline="always">Forgot Your Password</Link>
                <div className='flex items-center'>
                    <CheckBoxBlue/>
                    <div className='flex items-center'>
                        <h6 className='ml-3 text-white text-xs font-light opacity-75'>I agree with&#160;</h6>
                        <Link href="#" className='text-white text-xs' component="button" underline="always">privacy policy</Link>
                    </div>
                </div>
            </div>
            <LargeButtonBlue content="Log In Now"/>
            <div className='space-y-2'>
                <div className='flex'>
                    <h6 className='text-white text-xs font-light opacity-75'>Don't have an Agewear account?&#160;</h6>
                    <Link href="#" className='text-white text-xs' component="button" underline="always">Sign Up</Link>
                </div>
                <div className='flex w-full justify-center'>
                    <h6 className='text-white text-xs font-light opacity-75'>Back to&#160;</h6>
                    <Link href="#" className='text-white text-xs' component="button" underline="always">all Sign In options</Link>
                </div>
            </div>
        </div>
    </AuthContainer>
 )
}

export default LoginUI;