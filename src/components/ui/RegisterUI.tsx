import AuthContainer from '../container/AuthContainer';
import { motion, AnimatePresence } from "framer-motion";
import Image from 'next/image';
import TextFieldDark from '../textfield/TextFieldDark';
import IconTextFieldDark from '../textfield/IconTextFieldDark';
import PasswordTextFieldDark from '../textfield/PasswordTextFieldDark';
import LargeButtonBlue from '../button/LargeButtonBlue';
import CheckBoxBlue from '../checkbox/CheckBoxBlue';
import { Link } from '@mui/material';

const RegisterUI = () => {
    return (
        <AuthContainer>
            <AnimatePresence exitBeforeEnter>
                <motion.div className="w-full max-w-[350px] space-y-6 flex flex-col justify-center items-center"
                    key=""
                    animate={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 50 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 0.25 }}
                >
                    <Image height={50} width={50} className='opacity-70' src='/agewear.svg' alt='logo-svg'/>
                    <h6 className='font-medium text-center text-md'>Create Agewear account</h6>
                    <div className='w-full flex space-x-5'>
                        <TextFieldDark placeholder='First Name' type='text'/>
                        <TextFieldDark placeholder='Last Name' type='text'/>
                    </div>
                    <IconTextFieldDark placeholder='Email Address' icon='/icons/email.svg' type='email'/>
                    <PasswordTextFieldDark placeholder='Password' icon='/icons/password.svg'/>

                    <div className='flex w-full'>
                        <CheckBoxBlue/>
                        <div className='flex items-center'>
                            <h6 className='ml-3 text-xs font-light text-[rgba(255,255,255,0.75)]'>I have read and agree with&#160;
                                <Link className='text-white text-xs' component="button" underline="always">terms & conditions</Link>
                            </h6>
                        </div>
                    </div>
                    <div className='flex w-full'>
                        <CheckBoxBlue/>
                        <div className='flex items-center'>
                            <h6 className='ml-3 text-xs font-light text-[rgba(255,255,255,0.75)]'>I agree with&#160;
                                <Link className='text-white text-xs' component="button" underline="always">privacy policy</Link>
                            </h6>
                        </div>
                    </div>
                    <LargeButtonBlue onClick={()=>{}} content='Continue'/>
                </motion.div>
            </AnimatePresence>
        </AuthContainer>
    )
}

export default RegisterUI;