'use client';

import { Button } from '@mui/material';
import { useEffect, useState } from 'react';
import OperateUserProfile from 'databases/controllers/Controller.UserProfile';

interface IProps {
  User?: IUserProfile;
  Error?: IError;
}

function ClientDatabaseTest(props: IProps) {
  const [User, setUser] = useState<IUserProfile | undefined>(undefined);
  const [Error, setError] = useState<IError | undefined>(undefined);

  const Update = () => {
    OperateUserProfile('UPDATE', {
      uid: createUser._uid,
      update: updateUser,
    }).catch((value: IError) => {
      setUser(undefined);
      setError(value);
    });
  };

  const Create = () => {
    OperateUserProfile('CREATE', { create: createUser }).catch(
      (value: IError) => {
        setUser(undefined);
        setError(value);
      },
    );
  };

  const Delete = () => {
    OperateUserProfile('DELETE', { uid: createUser._uid }).catch(
      (value: IError) => {
        setUser(undefined);
        setError(value);
      },
    );
  };

  const createUser: IUserProfile = {
    _uid: '1234567890',
    _data: {
      fullName: 'Sumit Paul',
      emailAddress: 'sumitpaul16102002@gmail.com',
      phoneNumber: '+9199999999',
      photoURL: '---photo-url----',
      dateOfBirth: '09-90-1200',
      age: '69',
      gender: 'male',
      isVerified: {
        phoneNumber: true,
        emailAddress: false,
      },
    },
  };

  const updateUser: IUserProfileDataUpdate = {
    '_data.fullName': 'Sumeet Kumar Paul',
    '_data.emailAddress': 'sumitpaul.informal@gmail.com',
  };

  useEffect(() => {
    setUser(props.User);
    setError(props.Error);
    console.log('user : ' + props.User);
    console.log('error : ' + props.Error);
  }, [props.User, props.Error]);

  return (
    <>
      <div className="box-border flex h-14 w-full justify-center py-5">
        {User && (
          <div className="box-border flex h-12 flex-col space-y-2">
            <h6 className="h-5 text-xl font-bold text-green-400">
              {User._data?.fullName}
            </h6>
            <p className="h-5 text-[14px] font-[600] text-green-400">
              {User._data?.emailAddress}
            </p>
          </div>
        )}
        {Error && (
          <h6 className="flex h-12 items-end text-xl font-bold text-red-600">
            {Error.message}
          </h6>
        )}
      </div>
      <h1 className="text-[20px]">Welcome to Emotion</h1>
      <div className="flex w-full max-w-[500px] space-x-3">
        <Button
          onClick={Create}
          className="button-text-lower relative flex h-10 w-full !cursor-default !rounded-lg !bg-green-400/[0.075] p-2 !text-green-400 hover:!bg-green-400/10"
        >
          Create
        </Button>
        <Button
          onClick={Update}
          className="button-text-lower relative flex h-10 w-full !cursor-default !rounded-lg !bg-sky-400/[0.075] p-2 !text-sky-400 hover:!bg-sky-400/10"
        >
          Update
        </Button>
        <Button
          onClick={Delete}
          className="button-text-lower relative flex h-10 w-full !cursor-default !rounded-lg !bg-red-400/[0.075] p-2 !text-red-400 hover:!bg-red-400/10"
        >
          Delete
        </Button>
      </div>
    </>
  );
}

export default ClientDatabaseTest;
