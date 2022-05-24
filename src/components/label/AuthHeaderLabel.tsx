import React, { FC } from 'react';
import Image from 'next/image';

interface IProps {
  label: string;
}

/**
 * @author
 * @function @AuthHeaderLabel
 **/

export const AuthHeaderLabel: FC<IProps> = (props) => {
  return (
    <>
      <Image
        height={50}
        width={50}
        className="opacity-70"
        src="/agewear.svg"
        alt="logo-svg"
      />
      <h6 className="font-medium text-center text-md">{props.label}</h6>
    </>
  );
};
