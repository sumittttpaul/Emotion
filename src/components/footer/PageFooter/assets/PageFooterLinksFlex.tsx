import { Link } from '@mui/material';
import React, { FC } from 'react';

interface IProps {
  Content: { label: string; to: string }[];
  heading: string;
}

/**
 * @author
 * @function @PageFooterLinksFlex
 **/

export const PageFooterLinksFlex: FC<IProps> = (props) => {
  return (
    <div className="flex flex-col py-2">
      <h6 className="text-white text-sm opacity-50 py-1">{props.heading}</h6>
      <div className="relative flex">
        <ul className="flex relative space-y-[2px]">
          {props.Content.map((value, idx) => (
            <li key={value.label} className="relative flex">
              <Link
                key={value.label}
                href={value.to}
                underline="hover"
                className="text-white flex justify-start items-center p-0 whitespace-nowrap font-[300] text-[12px] button-text-lower"
              >
                {value.label}
              </Link>
              {idx === 2 ? (
                <></>
              ) : (
                <div className="h-5 w-[1px] mx-2 bg-[rgba(255,255,255,0.23)]" />
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
