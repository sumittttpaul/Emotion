import { NextPage } from 'next';
import { useState } from 'react';
import { DeleteAvatar, UploadAvatar } from '../../../algorithms/AuthAlgorithms';
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
import { IAvatarIconReducerState } from '../../../redux/reducers/AvatarReducer';
import { useTypedSelector } from '../../../redux/useTypeSelector';

/**
 * @SetupAccount_Page
 **/
const SetupAccount: NextPage = () => {
  const user = useAuth();
  var MomentDay = moment().endOf('day').format('DD');
  var MomentMonth = moment().endOf('month').format('MMM');
  var MomentYear = moment().endOf('year').format('YYYY');
  // Handle Collections
  const { Avatar } = useTypedSelector((state) => state);
  // State
  const [AvatarDialog, setAvatarDialog] = useState(false);
  const [AvatarURL, setAvatarURL] = useState('/images/user.png');
  const [CropAvatarURL, setCropAvatarURL] = useState('');
  const [AvatarContainer, setAvatarContainer] = useState(
    'ShowAvatar-container'
  );
  const [Collection, setCollection] = useState<IAvatarIconReducerState[]>(
    Avatar.Animal
  );
  const [Collectionheading, setCollectionHeading] = useState('');
  const [CollectionBackBool, setCollectionBackBool] = useState(false);
  const [AvatarScreen1, setAvatarScreen1] = useState(false);
  const [AvatarScreen2, setAvatarScreen2] = useState(false);
  const [RemoveDisabled, setRemoveDisabled] = useState(true);
  const [ChangeDisabled, setChangeDisabled] = useState(false);
  const [Toast, setToast] = useState(false);
  const [ToastMessage, setToastMessage] = useState('');
  const [ToastType, setToastType] = useState('');
  const [AvatarLoading, setAvatarLoading] = useState(false);
  const [UploadProgess, setUploadProgess] = useState('');
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
  const AvatarLoadingState = (value: boolean) => {
    setAvatarLoading(value);
  };
  const ShowAvatarDialog = () => {
    setAvatarDialog(true);
  };
  const HideAvatarDialog = () => {
    setAvatarDialog(false);
    setTimeout(() => {
      setAvatarContainer('ShowAvatar-container');
      setAvatarScreen1(false);
      setAvatarScreen2(false);
    }, 200);
  };
  const HideAvatarDialogDefault = () => {
    setAvatarDialog(false);
  };
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

  // Avatar Screens
  const ShowAvatarScreen = () => {
    setTimeout(() => {
      setAvatarContainer('ShowAvatar-container');
      setAvatarScreen1(false);
      setAvatarScreen2(false);
    }, 200);
  };
  const SelectAvatarScreen = () => {
    setTimeout(() => {
      setAvatarContainer('SelectAvatar-container');
      setAvatarScreen1(true);
      setAvatarScreen2(false);
    }, 200);
  };
  const AvatarCollectionScreen = () => {
    setTimeout(() => {
      setAvatarContainer('SelectAvatar-container');
      setAvatarScreen1(false);
      setAvatarScreen2(true);
    }, 200);
  };
  const CropAvatarScreen = () => {
    setTimeout(() => {
      setAvatarContainer('SelectAvatar-container');
      setAvatarScreen1(true);
      setAvatarScreen2(true);
    }, 200);
  };
  const BackToShowAvatarScreen = () => {
    setAvatarContainer('ShowAvatar-container');
    setAvatarScreen1(false);
    setAvatarScreen2(false);
  };
  const BackToShowAvatarScreenWithDefaultAvatar = () => {
    setAvatarURL('/images/user.png');
    setAvatarContainer('ShowAvatar-container');
    setAvatarScreen1(false);
    setAvatarScreen2(false);
  };
  const BackToSelectAvatarScreen = () => {
    setAvatarContainer('SelectAvatar-container');
    setAvatarScreen1(true);
    setAvatarScreen2(false);
  };
  const BackToAvatarCollectionScreen = () => {
    if (CollectionBackBool === true) {
      setAvatarContainer('SelectAvatar-container');
      setAvatarScreen1(true);
      setAvatarScreen2(false);
    } else {
      setAvatarContainer('SelectAvatar-container');
      setAvatarScreen1(false);
      setAvatarScreen2(true);
    }
  };

  // Handle Image
  const ChangeImageDisabled = (value: boolean) => {
    setChangeDisabled(value);
  };
  const RemoveImageDisabled = (value: boolean) => {
    setRemoveDisabled(value);
  };
  const GetImageURL = (value: string) => {
    ImageURLToCrop(value);
  };
  const GetServerImageURL = (value: string) => {
    setAvatarURL(value);
  };
  const GetCropImageURL = (value: string) => {
    setAvatarURL(value);
  };
  const ImageURLToCrop = (value: string) => {
    setCropAvatarURL(value);
  };
  const CollectionReducerName = (value: string) => {
    if (value === 'Animal') {
      setCollection(Avatar.Animal);
    }
    if (value === 'Emoji') {
      setCollection(Avatar.Emoji);
    }
    if (value === 'Festival') {
      setCollection(Avatar.Festival);
    }
    if (value === 'Handdrawing') {
      setCollection(Avatar.Handdrawing);
    }
    if (value === 'Flat') {
      setCollection(Avatar.Flat);
    }
    if (value === 'Hipster') {
      setCollection(Avatar.Hipster);
    }
    if (value === 'Paint') {
      setCollection(Avatar.Paint);
    }
    if (value === 'Minimal') {
      setCollection(Avatar.Minimal);
    }
    if (value === 'Plain') {
      setCollection(Avatar.Plain);
    }
  };
  const CollectionHeading = (value: string) => {
    setCollectionHeading(value);
  };
  const CollectionBool = (value: boolean) => {
    setCollectionBackBool(value);
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

  // Avatar handle
  const AvatarUploadProgress = (value: string) => {
    setUploadProgess(value);
  };
  const AvatarClick = () => {
    ShowAvatarScreen();
    ShowAvatarDialog();
  };
  const handleImageURL = (value: string) => {
    GetServerImageURL(value);
    RemoveImageDisabled(false);
    ChangeImageDisabled(false);
    setTimeout(() => {
      HideAvatarDialogDefault();
    }, 2500);
  };
  const AvatarSubmit = (value: File) => {
    if (value) {
      RemoveImageDisabled(true);
      ChangeImageDisabled(true);
      setTimeout(() => {
        BackToShowAvatarScreen();
        UploadAvatar({
          Progress: AvatarUploadProgress,
          File: value,
          getImageURL: handleImageURL,
          Loading: AvatarLoadingState,
          ToastMessage: AuthToastMessage,
          ToastShow: AuthToast,
          ToastType: AuthToastType,
        });
        ShowToast(ToastMessage, ToastType, Toast);
      }, 100);
    }
  };
  const RemoveImageClick = () => {
    if (user?.photoURL) {
      setTimeout(() => {
        RemoveImageDisabled(true);
        ChangeImageDisabled(true);
        DeleteAvatar({
          AvatarURL: `${user?.photoURL}`,
          Loading: AvatarLoadingState,
          ToastMessage: AuthToastMessage,
          ToastShow: AuthToast,
          ToastType: AuthToastType,
          AfterDelete: () => {
            setAvatarURL('/images/user.png');
            ChangeImageDisabled(false);
            RemoveImageDisabled(true);
          },
        });
        ShowToast(ToastMessage, ToastType, Toast);
      }, 200);
    }
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
        // ------------- Avatar ------------- //
        AvatarDialog={AvatarDialog}
        setAvatarDialog={HideAvatarDialog}
        AvatarContainer={AvatarContainer}
        AvatarScreen1={AvatarScreen1}
        AvatarScreen2={AvatarScreen2}
        AvatarURL={AvatarURL}
        AvatarClick={AvatarClick}
        RemoveClick={RemoveImageClick}
        RemoveDisabled={RemoveDisabled}
        ChangeDisabled={ChangeDisabled}
        UploadLoadingScreen={AvatarLoading}
        UploadProgress={UploadProgess}
        MoveToSelectAvatar={SelectAvatarScreen}
        MoveToCropAvatar={CropAvatarScreen}
        BackToShowAvatar={BackToShowAvatarScreenWithDefaultAvatar}
        BackToSelectAvatar={BackToSelectAvatarScreen}
        BackToAvatarCollection={BackToAvatarCollectionScreen}
        GetImageURL={GetImageURL}
        GetCropImageURL={GetCropImageURL}
        ImageURLToCrop={CropAvatarURL}
        CollectionShow={AvatarCollectionScreen}
        CollectionReducerName={CollectionReducerName}
        CollectionHeading={CollectionHeading}
        CollectionShowHeading={Collectionheading}
        CollectionReducer={Collection}
        CollectionBackBool={CollectionBool}
        AvatarSubmit={AvatarSubmit}
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
