import React, { FC, useEffect, useState } from 'react';
import Router from 'next/router';
import dynamic from 'next/dynamic';
import { LoadingAvatarButton } from '../../../../loader/LoadingHeader';
// import { AvatarButton } from '../buttonUI/AvatarButton';

const AvatarButton = dynamic(
  // @ts-ignore: Unreachable code error
  () => import('../buttonUI/AvatarButton').then((x) => x.AvatarButton),
  {
    loading: () => <LoadingAvatarButton />,
    ssr: false,
  }
);

interface IProps {}

/**
 * @author
 * @function @AvatarUI
 **/

export const AvatarUI: FC<IProps> = (props) => {
  const [FristName, setFirstName] = useState('');
  const [LastName, setLastName] = useState('');
  useEffect(() => {
    const { firstname, lastname } = Router.query;
    setFirstName(`${firstname}`);
    setLastName(`${lastname}`);
  }, [setFirstName, setLastName]);
  return (
    <div className="flex flex-col space-y-2 items-center w-full relative">
      <AvatarButton />
      <h6 className="text-md font-[300] text-center text-white">
        {'Welcome, '}
        {FristName} {LastName}
      </h6>
      <h6 className="text-xs opacity-75 font-[300] text-center text-white">
        Manage your info to make Agewear work better for you
      </h6>
    </div>
  );
};
