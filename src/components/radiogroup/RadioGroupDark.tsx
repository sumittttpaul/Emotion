import { RadioGroup } from '@headlessui/react';
import React, { FC, useState } from 'react';

interface IProps {}

/**
 * @author
 * @function @RadioGroupDark
 **/

const Genders = [
  {
    gender: 'Male',
  },
  {
    gender: 'Female',
  },
  {
    gender: 'Others',
  },
];

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
  const [value, setvalue] = useState();
  return (
    <RadioGroup
      value={value}
      className="custom-webkit-focus"
      onChange={setvalue}
    >
      <RadioGroup.Label className="sr-only custom-webkit-focus">
        Select Gender
      </RadioGroup.Label>
      <div className="space-x-1 mx-auto w-full flex custom-webkit-focus">
        {Genders.map((Genders) => (
          <RadioGroup.Option
            key={Genders.gender}
            value={Genders}
            className={({ active, checked }) =>
              `${active ? 'ring-0 ring-offset-0' : ''}
              ${
                checked
                  ? 'bg-[#121212] text-white border-0'
                  : 'bg-[#191919] text-white'
              }
                relative rounded-md px-4 py-2 w-full cursor-pointer custom-webkit-focus flex outline-none transition-all ease-in`
            }
          >
            {({ active, checked }) => (
              <>
                <div className="flex items-center custom-webkit-focus justify-between w-full">
                  <div className="flex items-center w-full">
                    <div className="text-sm w-full">
                      <RadioGroup.Label
                        as="p"
                        className={`font-normal text-[11px] text-center ${
                          checked
                            ? 'text-white'
                            : 'text-[rgba(255,255,255,0.7)]'
                        }`}
                      >
                        {Genders.gender}
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
