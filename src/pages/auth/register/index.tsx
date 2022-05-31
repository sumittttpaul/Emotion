import { NextPage } from 'next';
import { ToastDark } from '../../../components/toast/ToastDark';
import RegisterUI from '../../../components/ui/RegisterUI';

const Register: NextPage = () => {
  return (
    <>
      <RegisterUI
        FirstName={}
        FirstNameID={}
        FirstNameChange={}
        FirstNameKeyUp={}
        FirstNameKeyPress={}
        FirstNameKeyDown={}

        LastName={}
        LastNameID={}
        LastNameChange={}
        LastNameKeyUp={}
        LastNameKeyPress={}
        LastNameKeyDown={}

        Email={}
        EmailID={}
        EmailChange={}
        EmailKeyUp={}
        EmailKeyPress={}
        EmailKeyDown={}

        Phone={}
        PhoneID={}
        PhoneChange={}
        PhoneKeyUp={}
        PhoneKeyPress={}
        PhoneKeyDown={}

        Password={}
        PasswordID={}
        PasswordChange={}
        PasswordKeyUp={}
        PasswordKeyPress={}
        PasswordKeyDown={}
        
        FirstNameError={}
        LastNameError={}
        EmailError={}
        PhoneError={}
        PasswordError={}
        
        FirstNameReadOnly={}
        LastNameReadOnly={}
        EmailReadOnly={}
        PhoneReadOnly={}
        PasswordReadOnly={}

        FirstNameFocus={}
        LastNameFocus={}
        EmailFocus={}
        PhoneFocus={}
        PasswordFocus={}

        FirstNameBlur={}
        LastNameBlur={}
        EmailBlur={}
        PhoneBlur={}
        PasswordBlur={}
        
        TermsChecked={}
        TermsCheckedChange={}
        
        SubmitClick={}
        SubmitDisabled={}
        />
      <ToastDark
        message={}
        open={}
        close={}
        type={}
        autoHideDuration={6000}
        slideDirection="down"
        positionVertical="top"
        positionHorizontal="center"
        bgColor="bg-[#121212] sm:bg-[#202020]"
      />
    </>
  );
};

export default Register;
