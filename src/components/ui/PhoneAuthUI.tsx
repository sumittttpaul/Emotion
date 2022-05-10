import { Link } from "@mui/material";
import IconTextFieldDark from "../textfield/IconTextFieldDark";
import CheckBoxBlue from '../checkbox/CheckBoxBlue'
import LargeButtonBlue from '../button/LargeButtonBlue';
import OtherAccountAuthUI from "./OtherAccountAuthUI";
import AuthDivider from "../divider/AuthDivider";
import { motion, AnimatePresence } from "framer-motion";

const PhoneAuthUI:React.FC<{setOTP: (arg: boolean) => void}> = ({setOTP}) => {
    const handleClick = () => {
        setTimeout(() => {
            setOTP(true);
        }, 250);
    }
    return (
        <AnimatePresence exitBeforeEnter>
            <motion.div className="w-full max-w-[350px] space-y-7 flex flex-col justify-center items-center"
                key=""
                animate={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -50 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.25 }}
            >
                <IconTextFieldDark label="Phone Number" icon="/icons/phone.svg"/>
                <div className='flex items-center w-full'>
                    <CheckBoxBlue/>
                    <div className='flex items-center'>
                        <h6 className='ml-3 text-white text-xs font-light opacity-75'>I agree with&#160;</h6>
                        <Link href="#" className='text-white text-xs' component="button" underline="always">privacy policy</Link>
                    </div>
                </div>
                <LargeButtonBlue onClick={handleClick} content="verify with OTP"/>
                <AuthDivider/>
                <OtherAccountAuthUI/>
            </motion.div>
        </AnimatePresence>
    )
}

export default PhoneAuthUI;