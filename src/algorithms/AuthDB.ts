import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { CreateUserDataProps, UserDataType } from './Props/AuthDBProps';

const COLLECTION_NAME = 'user-profile';

export const GetAllUserAuthData = async (): Promise<Array<UserDataType>> => {
  const db = firebase.firestore();
  const snapshot = await db.collection(COLLECTION_NAME).get();
  const data: Array<any> = [];
  snapshot.docs.map((_data) => {
    data.push({
      id: _data.id,
      ..._data.data(),
    });
  });
  return data as Array<UserDataType>;
};

export const GetUserData = async (id: string): Promise<UserDataType> => {
  const db = firebase.firestore();
  const _data = await db.collection(COLLECTION_NAME).doc(id).get();
  return _data.data() as UserDataType;
};

export const CreateUserData = async (
  id: string,
  userData: UserDataType
): Promise<UserDataType> => {
  const db = firebase.firestore();
  await db.collection(COLLECTION_NAME).doc(id).set(userData);
  return {
    id: id,
    ...userData,
  } as UserDataType;
};

export const UpdateUserData = async (
  id: string,
  userData: UserDataType
): Promise<UserDataType> => {
  const db = firebase.firestore();
  await db.collection(COLLECTION_NAME).doc(id).update(userData);
  return {
    id: id,
    ...userData,
  } as UserDataType;
};

export const DeleteUserData = async (id: string) => {
  const db = firebase.firestore();
  await db.collection(COLLECTION_NAME).doc(id).delete();
};

export const CreateUserProfileData = ({
  UserId,
  FullName,
  PhoneNumber,
  EmailAddress,
  DateOfBirth,
  Gender,
  Loading,
  ShowToast,
  Next,
}: CreateUserDataProps) => {
  Loading(true);
  CreateUserData(UserId, {
    FullName: FullName && FullName.length > 0 ? FullName : '',
    PhoneNumber: PhoneNumber && PhoneNumber.length > 0 ? PhoneNumber : '',
    EmailAddress: EmailAddress && EmailAddress.length > 0 ? EmailAddress : '',
    DateOfBirth: DateOfBirth && DateOfBirth.length > 0 ? DateOfBirth : '',
    Gender: Gender && Gender.length > 0 ? Gender : '',
  })
    .then(() => {
      // Loading(false);
      Next();
    })
    .catch((error) => {
      Loading(false);
      ShowToast('Something went wrong', `${error.message}`, 'Error', true);
      console.error('User data not created because ' + error.message);
    });
};
