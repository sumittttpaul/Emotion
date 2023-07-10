'use client';

import { Button } from '@mui/material';
import React, { FC, useEffect, useState } from 'react';
import OperateUserProfile from 'databases/controller/Controller.UserProfile';

interface IProps {
  User?: IUserProfile;
  Error?: IError;
}

/**
 * @author
 * @function @ClientButton
 **/

export const ClientButton: FC<IProps> = (props) => {
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
      }
    );
  };

  const Delete = () => {
    OperateUserProfile('DELETE', { uid: createUser._uid }).catch(
      (value: IError) => {
        setUser(undefined);
        setError(value);
      }
    );
  };

  const createUser: IUserProfile = {
    _uid: '1234567890',
    _data: {
      fullName: 'ABC',
      emailAddress: 'ABC@emotion.com',
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
  };

  useEffect(() => {
    setUser(props.User);
    setError(props.Error);
    console.log('user : ' + props.User);
    console.log('error : ' + props.Error);
  }, [props.User, props.Error]);

  return (
    <>
      <div className="h-5 py-5 flex w-full justify-center">
        {User && (
          <h6 className="text-xl h-5 font-bold text-green-400">
            {User._data?.fullName}
          </h6>
        )}
        {Error && (
          <h6 className="text-xl h-5 font-bold text-red-600">
            {Error.message}
          </h6>
        )}
      </div>
      <h1 className="text-[20px]">Welcome to Emotion</h1>
      <div className="w-full flex space-x-3 max-w-[500px]">
        <Button
          onClick={Create}
          className="relative button-text-lower !cursor-default h-10 hover:!bg-green-400/10 !text-green-400 !bg-green-400/[0.075] flex p-2 !rounded-lg w-full"
        >
          Create
        </Button>
        <Button
          onClick={Update}
          className="relative button-text-lower !cursor-default h-10 hover:!bg-sky-400/10 !text-sky-400 !bg-sky-400/[0.075] flex p-2 !rounded-lg w-full"
        >
          Update
        </Button>
        <Button
          onClick={Delete}
          className="relative button-text-lower !cursor-default h-10 hover:!bg-red-400/10 !text-red-400 !bg-red-400/[0.075] flex p-2 !rounded-lg w-full"
        >
          Delete
        </Button>
      </div>
    </>
  );
};
