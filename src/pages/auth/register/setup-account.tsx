import { NextPage } from 'next';
import { useState } from 'react';
import { ToastDark } from '../../../components/toast/ToastDark';
import { SetupAccountUI } from '../../../components/ui/SetupAccountUI';
import { useAuth } from '../../../firebase/AuthProvider';
import moment from 'moment';
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
  var MomentDay = moment().endOf('day').format('DD');
  var MomentMonth = moment().endOf('month').format('MMM');
  var MomentYear = moment().endOf('year').format('YYYY');
  // State
  const [Toast, setToast] = useState(false);
  const [ToastMessage, setToastMessage] = useState('');
  const [ToastType, setToastType] = useState('');
  const [DOBDialog, setDOBDialog] = useState(false);
  const [DOBScreen1, setDOBScreen1] = useState(false);
  const [DOBScreen2, setDOBScreen2] = useState(false);
  const [DOBSubmitDisabled, setDOBSubmitDisabled] = useState(false);
  const [DOBDay, setDOBDay] = useState(0);
  const [DOBMonth, setDOBMonth] = useState(0);
  const [DOBYear, setDOBYear] = useState(0);
  const [DOBDayValue, setDOBDayValue] = useState(MomentDay);
  const [DOBMonthValue, setDOBMonthValue] = useState(MomentMonth);
  const [DOBYearValue, setDOBYearValue] = useState(MomentYear);
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

  // Handle Dialog
  const ShowDOBDialog = () => {
    setDOBDialog(true);
  };
  const HideDOBDialog = () => {
    setDOBDialog(false);
    setTimeout(() => {
      setDOBDayValue(MomentDay);
      setDOBMonthValue(MomentMonth);
      setDOBYearValue(MomentYear);
    }, 250);
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

  // DOB Get
  const GetDOBMonthName = (month: number) => {
    const date = new Date();
    date.setMonth(month - 1);
    return date.toLocaleString('en-IN', {
      month: 'short',
    });
  };
  const GetDOBDay = (day: number) => {
    setDOBDay(day);
    setDOBDayValue(`${day}`);
    setDOBSubmitDisabled(true);
  };
  const GetDOBMonth = (month: number) => {
    setDOBMonth(month);
    setTimeout(() => {
      setDOBScreen1(true);
      setDOBScreen2(true);
      setDOBMonthValue(GetDOBMonthName(month));
    }, 500);
  };
  const GetDOBYear = (year: number) => {
    setDOBYear(year);
    setTimeout(() => {
      setDOBScreen1(true);
      setDOBScreen2(false);
      setDOBYearValue(`${year}`);
    }, 500);
  };

  // DOB handle
  const DOBOpenhandle = () => {
    setDOBSubmitDisabled(false);
    setDOBScreen1(false);
    setDOBScreen2(false);
    setTimeout(() => {
      ShowDOBDialog();
      setDOBDayValue(MomentDay);
      setDOBMonthValue(MomentMonth);
      setDOBYearValue(MomentYear);
    }, 200);
  };
  const DOBCancelhandle = () => {
    setTimeout(() => {
      HideDOBDialog();
      setDOBDayValue(MomentDay);
      setDOBMonthValue(MomentMonth);
      setDOBYearValue(MomentYear);
    }, 200);
  };
  const DOBSubmithandle = () => {
    setTimeout(() => {
      setHandleSubmitBool(false);
      setDOBDialog(false);
    }, 200);
  };
  const DOBLabel = DOBDayValue + ' ' + DOBMonthValue + ' , ' + DOBYearValue;

  // Gender
  const GenderContetnt = ['Female', 'Male', 'Others'];

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
        const UserDOB = EncryptData(
          `${DOBDay + '-' + DOBMonth + '-' + DOBYear}`,
          DOBEncrytionKey(UserID)
        );
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
        DOBShow={DOBDialog}
        setDOBShow={HideDOBDialog}
        DOBScreen1={DOBScreen1}
        DOBScreen2={DOBScreen2}
        DOBDay={DOBDay}
        DOBMonth={DOBMonth}
        DOBYear={DOBYear}
        DOBDayValue={DOBDayValue}
        DOBMonthValue={DOBMonthValue}
        DOBYearValue={DOBYearValue}
        GetDOBDay={GetDOBDay}
        GetDOBMonth={GetDOBMonth}
        GetDOBYear={GetDOBYear}
        DOBCancel={DOBCancelhandle}
        DOBSubmit={DOBSubmithandle}
        DOBClick={DOBOpenhandle}
        DOBLabel={`${DOBLabel}`}
        DOBSubmitDisabled={DOBSubmitDisabled}
        // ------------- Gender ------------- //
        GenderContent={GenderContetnt}
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
        bgColor="bg-[#121212] sm:bg-[#202020]"
      />
    </>
  );
};

export default SetupAccount;

export const getServerSideProps = NoAccessToNullUserPages(() => {
  return {
    props: {},
  };
});
