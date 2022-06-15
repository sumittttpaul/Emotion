import { Button } from '@mui/material';
import React, { FC } from 'react';

interface IProps {
  Content: { label: string; to: string }[];
  heading: string;
}

/**
 * @author
 * @function @PageFooterLinks
 **/

export const PageFooterLinks: FC<IProps> = (props) => {
  return (
    <div className="flex flex-col py-2">
      <h6 className="text-white text-[13px] opacity-50 py-1">
        {props.heading}
      </h6>
      <div className="relative flex">
        <ul className="flex flex-col relative space-y-[2px]">
          {props.Content.map((value) => (
            <li key={value.label} className="relative flex">
              <Button
                key={value.label}
                component="a"
                href={value.to}
                disableFocusRipple
                disableTouchRipple
                disableRipple
                className="text-white flex justify-start items-center p-0 w-28 whitespace-nowrap font-[300] text-[12px] button-text-lower"
              >
                {value.label}
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
