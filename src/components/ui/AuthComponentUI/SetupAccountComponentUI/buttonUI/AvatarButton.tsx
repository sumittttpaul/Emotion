import Router from 'next/router';
import React, { FC, useEffect, useState } from 'react';
import { AvatarCircularButton } from '../../../../button/AvatarCircularButton';

interface IProps {
  onClick?: () => void;
  ImageURL: string;
}

/**
 * @author
 * @function @AvatarButton
 **/

export const AvatarButton: FC<IProps> = (props) => {
  const [FristName, setFirstName] = useState('');
  const [LastName, setLastName] = useState('');
  useEffect(() => {
    const { firstname, lastname } = Router.query;
    setFirstName(`${firstname}`);
    setLastName(`${lastname}`);
  });
  return (
    <div className="flex flex-col space-y-2 items-center w-full relative">
      <AvatarCircularButton
        onClick={props.onClick}
        ImageURL={props.ImageURL}
      />
      <h6 className="text-md font-[300] text-center text-white">
        {'Welcome, '}{FristName}{' '}{LastName}
      </h6>
      <h6 className="text-xs opacity-75 font-[300] text-center text-white">
        Manage your info to make Agewear work better for you
      </h6>
    </div>
  );
};
