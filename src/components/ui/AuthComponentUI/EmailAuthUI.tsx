import CheckBoxBlue from '../../checkbox/CheckBoxBlue'
import LargeButtonBlue from '../../button/LargeButtonBlue';
import IconTextFieldDark from '../../textfield/IconTextFieldDark'
import PasswordTextFieldDark from '../../textfield/PasswordTextFieldDark'
import { motion, AnimatePresence } from "framer-motion";
import { Link } from '@mui/material';
import Router from 'next/router';

const EmailAuthUI = () => {
    const handleClick = () => {

    }
    return (
        <AnimatePresence exitBeforeEnter>
            <motion.div className="w-full max-w-[350px] space-y-7 pb-[7px] flex flex-col justify-center items-center"
                key=""
                animate={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 50 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.25 }}
            >
                <IconTextFieldDark placeholder="Email Address" icon="/icons/email.svg" type='email'/>
                <PasswordTextFieldDark placeholder="Password" icon="/icons/password.svg"/>
                <div className='w-full space-y-1'>
                    <Link onClick={() => {Router.push('/authentication/login/forget-password')}} className='text-white text-xs text-right w-full -mt-5' component="button" underline="always">Forgot Your Password</Link>
                    <div className='flex w-full'>
                        <CheckBoxBlue/>
                        <div className='flex items-center'>
                            <h6 className='ml-3 text-xs font-light text-[rgba(255,255,255,0.75)]'>I agree with&#160;
                                <Link className='text-white text-xs' component="button" underline="always">privacy policy</Link>
                            </h6>
                        </div>
                    </div>
                </div>
                <LargeButtonBlue onClick={handleClick} content="Log In Now"/>
            </motion.div>
        </AnimatePresence>
    )
}

export default EmailAuthUI;