import type { NextPage } from 'next';
import LoginUI from '../../../components/ui/LoginUI';
import OTPAuthUI from '../../../components/ui/AuthComponentUI/LoginComponentUI/OTPAuthUI';
import { ToastDark } from '../../../components/toast/ToastDark';
import { useState } from 'react';

const Login: NextPage = () => {
  return (
    <>
      <LoginUI 
        Phone={}
        PhoneChange={}
        PhoneKeyUp={}
        PhoneKeyPress={}
        PhoneKeyDown={}
        Email={}
        EmailChange={}
        EmailKeyUp={}
        EmailKeyPress={}
        EmailKeyDown={}
        Password={}
        PasswordChange={}
        PasswordKeyUp={}
        PasswordKeyPress={}
        PasswordKeyDown={}
        PhonePolicyChecked={}
        PhonePolicyCheckedChange={}
        EmailPolicyChecked={}
        EmailPolicyCheckedChange={}
        PhoneSubmitDisabled={}
        EmailSubmitDisabled={}
        PhoneSubmitClick={}
        EmailSubmitClick={}
        FacebookSignIn={}
        GoogleSignIn={}
        AppleSignIn={}
      />
      <OTPAuthUI
        open={}
        close={}
        resend={}
        OTP1={}
        OTP2={}
        OTP3={}
        OTP4={}
        OTP5={}
        OTP6={}
        OTP1Change={}
        OTP2Change={}
        OTP3Change={}
        OTP4Change={}
        OTP5Change={}
        OTP6Change={}
      />
      <ToastDark
        message="OTP sent successfully !"
        open={}
        close={}
        autoHideDuration={6000}
        slideDirection="down"
        positionVertical="top"
        positionHorizontal="center"
        type="success"
        bgColor="bg-[#121212] sm:bg-[#202020]"
      />
    </>
  );
};

export default Login;
