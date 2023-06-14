import React, { FC, ReactNode } from 'react';

interface IProps {
  ClassName?: string;
  children: ReactNode;
}

/**
 * @author
 * @function @AuthContentHeader
 **/

export const AuthContentHeader: FC<IProps> = (props) => {
  return (
    <div className={`${props.ClassName} w-full h-7 justify-start space-y-3`}>
      {/* <div className="w-full justify-start">
          <Image height={30} width={125} src="/agewear_full_white.svg" alt="" />
        </div> */}
      <h6 className="font-[600] text-left w-full text-white text-[25px] md:text-[30px]">
        {props.children}
      </h6>
    </div>
  );
};
