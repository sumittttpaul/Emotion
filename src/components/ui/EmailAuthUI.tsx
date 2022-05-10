import CheckBoxBlue from '../checkbox/CheckBoxBlue'
import LargeButtonBlue from '../button/LargeButtonBlue';
import IconTextFieldDark from '../textfield/IconTextFieldDark'
import PasswordTextFieldDark from '../textfield/PasswordTextFieldDark'
import { motion, AnimatePresence } from "framer-motion";
import { Link } from '@mui/material';

const EmailAuthUI = () => {
    return (
        <AnimatePresence exitBeforeEnter>
            <motion.div className="w-full max-w-[350px] space-y-7 flex flex-col justify-center items-center"
                key=""
                animate={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 50 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.25 }}
            >
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
            </motion.div>
        </AnimatePresence>
    )
}

export default EmailAuthUI;