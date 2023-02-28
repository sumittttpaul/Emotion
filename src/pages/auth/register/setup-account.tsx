import { NextPage } from 'next';
import { useState } from 'react';
import { ToastDark } from '../../../components/toast/ToastDark';
import { SetupAccountUI } from '../../../components/ui/SetupAccountUI';
import { useAuth } from '../../../firebase/AuthProvider';
import { CreateUserAuthData } from '../../../algorithms/AuthDB';
import Router from 'next/router';
import { useLoaderState } from '../../../providers/state/LoadingState';
import { EncryptData } from '../../../algorithms/security/CryptionSecurity';
import {
  DOBEncrytionKey,
  EmailEncrytionKey,
  FirstNameEncrytionKey,
  GenderEncrytionKey,
  LastNameEncrytionKey,
  PhoneEncrytionKey,
} from '../../../algorithms/security/CryptionKey';
import { NoAccessToNullUserPages } from '../../../hoc/ProtectedRoutes';

/**
 * @SetupAccount_Page
 **/
const SetupAccount: NextPage = () => {
  const user = useAuth();
  // State
  const [Toast, setToast] = useState(false);
  const [ToastMessage, setToastMessage] = useState('');
  const [ToastType, setToastType] = useState('');
  const [DOBValue, setDOBValue] = useState('');
  const [GenderValue, setGenderValue] = useState('');
  const [HandleSubmitBool, setHandleSubmitBool] = useState(true);
  const [SubmitLoader, setSubmitLoader] = useState(false);

  // Loading
  const { setLoader } = useLoaderState();
  const LoadingScreen = (value: boolean) => {
    setLoader({ show: value });
  };
  const SubmitLoading = (value: boolean) => {
    setSubmitLoader(value);
  };

  // Toast
  const AuthToastMessage = (value: string) => {
    setToastMessage(value);
  };
  const AuthToastType = (value: string) => {
    setToastType(value);
  };
  const AuthToast = (value: boolean) => {
    setToast(value);
  };
  const ShowToast = (message: string, type: string, show: boolean) => {
    setToastMessage(message);
    setToastType(type);
    setToast(show);
  };
  const HideToast = () => {
    setToast(false);
  };

  // Gender
  const GenderContent = ['Female', 'Male', 'Others'];

  // Handle Submit
  const HandleSubmit = () => {
    setTimeout(() => {
      if (user) {
        const { id, firstname, lastname, email, phone } = Router.query;
        const UserID = `${id}`;
        const UserFirstName = EncryptData(
          `${firstname}`,
          FirstNameEncrytionKey(UserID)
        );
        const UserLastName = EncryptData(
          `${lastname}`,
          LastNameEncrytionKey(UserID)
        );
        const UserEmail = EncryptData(`${email}`, EmailEncrytionKey(UserID));
        const UserPhone = EncryptData(
          `${'+91'}${phone}`,
          PhoneEncrytionKey(UserID)
        );
        const UserDOB = EncryptData(`${DOBValue}`, DOBEncrytionKey(UserID));
        const UserGender = EncryptData(
          `${GenderValue}`,
          GenderEncrytionKey(UserID)
        );
        CreateUserAuthData({
          Id: UserID,
          FirstName: UserFirstName,
          LastName: UserLastName,
          Email: UserEmail,
          PhoneNumber: UserPhone,
          DOB: UserDOB,
          Gender: UserGender,
          ToastMessage: AuthToastMessage,
          ToastType: AuthToastType,
          ToastShow: AuthToast,
          Loading: SubmitLoading,
          LoadingScreen: LoadingScreen,
        });
        ShowToast(ToastMessage, ToastType, Toast);
      }
    }, 250);
  };
  const HandleSkip = () => {
    if (user) {
      const { id, firstname, lastname, email, phone } = Router.query;
      const UserID = `${id}`;
      const UserFirstName = EncryptData(
        `${firstname}`,
        FirstNameEncrytionKey(UserID)
      );
      const UserLastName = EncryptData(
        `${lastname}`,
        LastNameEncrytionKey(UserID)
      );
      const UserEmail = EncryptData(`${email}`, EmailEncrytionKey(UserID));
      const UserPhone = EncryptData(
        `${'+91'}${phone}`,
        PhoneEncrytionKey(UserID)
      );
      CreateUserAuthData({
        Id: UserID,
        FirstName: UserFirstName,
        LastName: UserLastName,
        Email: UserEmail,
        PhoneNumber: UserPhone,
        DOB: 'Not yet defined',
        Gender: 'Not yet defined',
        ToastMessage: AuthToastMessage,
        ToastType: AuthToastType,
        ToastShow: AuthToast,
        Loading: LoadingScreen,
        LoadingScreen: LoadingScreen,
      });
      ShowToast(ToastMessage, ToastType, Toast);
    }
  };
  const HandleSubmitDisabled: boolean =
    GenderValue.length > 0 && HandleSubmitBool === false;

  return (
    <>
      <SetupAccountUI
        // ------------- Date Of Birth ------------- //
        getDOBValue={(value) => setDOBValue(value)}
        getHandleBoolValue={(value) => setHandleSubmitBool(value)}
        // ------------- Gender ------------- //
        GenderContent={GenderContent}
        GenderValue={GenderValue}
        GenderValueChange={setGenderValue}
        // ------------- Handle Button ------------- //
        HandleSubmit={HandleSubmit}
        HandleSkip={HandleSkip}
        HandleSubmitDisabled={!HandleSubmitDisabled}
        HandleSubmitLoading={SubmitLoader}
      />
      <ToastDark
        message={ToastMessage}
        open={Toast}
        close={HideToast}
        type={ToastType}
        autoHideDuration={6000}
        slideDirection="down"
        positionVertical="top"
        positionHorizontal="center"
        bgColor="bg-[#0f0f0f] sm:bg-[#202020]"
      />
    </>
  );
};

export const getServerSideProps = NoAccessToNullUserPages(() => {
  return {
    props: {},
  };
});

export default SetupAccount;
