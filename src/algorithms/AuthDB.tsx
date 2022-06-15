import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import Router from 'next/router';
import { Home_Link } from '../routerLinks/RouterLinks';
import {
  CreateUserDataProps,
  UpdateUserDataProps,
  UserDataType,
} from './Props/AuthDBProps';

const COLLECTION_NAME = 'users';

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

export const GetUserAuthData = async (id: string): Promise<UserDataType> => {
  const db = firebase.firestore();
  const _data = await db.collection(COLLECTION_NAME).doc(id).get();
  return _data.data() as UserDataType;
};

const CreateUser = async (
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

const UpdateUser = async (
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

export const DeleteUserAuthData = async (id: string) => {
  const db = firebase.firestore();
  await db.collection(COLLECTION_NAME).doc(id).delete();
};

export const CreateUserAuthData = ({
  Id,
  FirstName,
  LastName,
  Email,
  PhoneNumber,
  DOB,
  Gender,
  Loading,
  ToastShow,
  ToastMessage,
  ToastType,
}: CreateUserDataProps) => {
  const Toast = (message: string, type: string, show: boolean) => {
    ToastMessage(message);
    ToastType(type);
    ToastShow(show);
  };
  Loading(true);
  CreateUser(Id, {
    FirstName: FirstName,
    LastName: LastName,
    Email: Email,
    PhoneNumber: PhoneNumber,
    DOB: DOB,
    Gender: Gender,
  })
    .then(() => {
      Router.push(Home_Link);
      // Loading(false);
    })
    .catch((error) => {
      Loading(false);
      Toast('Something went wrong, please try again later', 'Error', true);
      console.error('Otp not sent beacuse' + error.code);
    });
};

export const UpdateUserAuthData = ({
  Id,
  FirstName,
  LastName,
  Email,
  PhoneNumber,
  DOB,
  Gender,
  Loading,
  ToastShow,
  ToastMessage,
  ToastType,
}: UpdateUserDataProps) => {
  const Toast = (message: string, type: string, show: boolean) => {
    ToastMessage(message);
    ToastType(type);
    ToastShow(show);
  };
  Loading(true);
  UpdateUser(Id, {
    FirstName: FirstName,
    LastName: LastName,
    Email: Email,
    PhoneNumber: PhoneNumber,
    DOB: DOB,
    Gender: Gender,
  })
    .then(() => {
      Toast('User profile updated', 'Success', true);
      Loading(false);
    })
    .catch((error) => {
      Loading(false);
      Toast('Something went wrong, please try again', 'Error', true);
      console.error('Otp not sent beacuse' + error.code);
    });
};
