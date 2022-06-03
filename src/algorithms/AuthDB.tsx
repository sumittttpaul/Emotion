import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const db = firebase.firestore();
const COLLECTION_NAME = 'users';

export type UserDataType = {
  id?: string;
  FirstName: string;
  LastName: string;
  Email: string;
  PhoneNumber: string;
  DOB: string;
  Gender: string;
};

export const GetAllUserAuthData = async (): Promise<Array<UserDataType>> => {
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
  const _data = await db.collection(COLLECTION_NAME).doc(id).get();
  return _data.data() as UserDataType;
};

export const CreateUserAuthData = async (
  id: string,
  userData: UserDataType
): Promise<UserDataType> => {
  await db.collection(COLLECTION_NAME).doc(id).set(userData);
  return {
    id: id,
    ...userData,
  } as UserDataType;
};

export const UpdateUserAuthData = async (
  id: string,
  userData: UserDataType
): Promise<UserDataType> => {
  await db.collection(COLLECTION_NAME).doc(id).update(userData);
  return {
    id: id,
    ...userData,
  } as UserDataType;
};

export const DeleteUserAuthData = async (id: string) => {
  await db.collection(COLLECTION_NAME).doc(id).delete();
};
