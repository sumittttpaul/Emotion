import AuthContainer from "../container/AuthContainer";
import Image from "next/image";
import Router from "next/router";
import { Link } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import IconTextFieldDark from "../textfield/IconTextFieldDark";
import LargeButtonBlue from "../button/LargeButtonBlue";

const Header = "Please fill in the email that you used to register. You will be sent an email with instruction on how to reset your password."

const ForgetPasswordUI = () => {
    return (
        <AuthContainer>
            <AnimatePresence exitBeforeEnter>
                <motion.div className="w-full max-w-[350px] space-y-6 flex flex-col justify-center items-center"
                    key=""
                    animate={{ opacity: 1, scale: 1 }}
                    initial={{ opacity: 0, scale: 1.25 }}
                    exit={{ opacity: 0, scale: 1.25 }}
                    transition={{ duration: 0.25 }}
                >
                    <Image height={50} width={50} className='opacity-70' src='/agewear.svg' alt='logo-svg'/>
                    <h6 className='font-medium text-center text-md'>Forgot your password ?</h6>
                    <h6 className='text-white text-[13px] font-light opacity-75'>{Header}</h6>
                    <div className="w-full space-y-12">
                        <IconTextFieldDark placeholder="Email Address" icon="/icons/email.svg" type="email"/>
                        <LargeButtonBlue onClick={()=>{}} content="Send Email"/>
                    </div>
                    <div className='flex'>
                        <h6 className='text-[13px] font-light text-[rgba(255,255,255,0.75)] flex items-center'>Remember your password?&#160;
                            <Link onClick={()=>{Router.push('/authentication/login')}} className='text-white text-[13px]' component="button" underline="always">Sign In</Link>
                        </h6>
                    </div>
                </motion.div>
            </AnimatePresence>
        </AuthContainer>
    )
}

export default ForgetPasswordUI;