import { RadioGroup } from '@headlessui/react';
import React, { Dispatch, FC, SetStateAction, useState } from 'react';

interface IProps {
  content: Array<string>;
  value?: string;
  onChange: Dispatch<SetStateAction<any>>
}

/**
 * @author
 * @function @RadioGroupDark
 **/

const CheckIcon = (props: any) => {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
      <path
        d="M7 13l3 3 7-7"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const RadioGroupDark: FC<IProps> = (props) => {
  return (
    <RadioGroup
      value={props.value}
      className="custom-webkit-focus"
      onChange={props.onChange}
    >
      <RadioGroup.Label className="sr-only custom-webkit-focus">
        Radio Group Dark
      </RadioGroup.Label>
      <div className="space-x-1 mx-auto w-full flex custom-webkit-focus">
        {props.content.map((content) => (
          <RadioGroup.Option
            key={content.toString()}
            value={content}
            className={({ active, checked }) =>
              `${active ? 'ring-0 ring-offset-0' : ''}
              ${
                checked
                  ? 'bg-[#121212] text-white border-0'
                  : 'bg-[#191919] text-white'
              }
                relative rounded-md px-3 xs-300:px-4 xs-350:px-5 py-2.5 w-full cursor-pointer custom-webkit-focus flex outline-none transition-all ease-in`
            }
          >
            {({ active, checked }) => (
              <>
                <div className="flex items-center custom-webkit-focus justify-between w-full">
                  <div className="flex items-center w-full">
                    <div className="text-sm w-full">
                      <RadioGroup.Label
                        as="p"
                        className={`font-normal text-[12px] text-center ${
                          checked
                            ? 'text-white'
                            : 'text-[rgba(255,255,255,0.7)]'
                        }`}
                      >
                        {content}
                      </RadioGroup.Label>
                    </div>
                  </div>
                  {checked && (
                    <div className="flex-shrink-0 custom-webkit-focus text-white pl-2 -mr-1">
                      <CheckIcon className="w-4 h-4" />
                    </div>
                  )}
                </div>
              </>
            )}
          </RadioGroup.Option>
        ))}
      </div>
    </RadioGroup>
  );
};
