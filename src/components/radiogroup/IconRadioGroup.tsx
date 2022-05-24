import { RadioGroup } from '@headlessui/react';
import React, { FC, useState } from 'react';

interface IProps {}

/**
 * @author
 * @function @IconRadioGroup
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

const CustomCheckIcon = (props: any) => {
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

export const IconRadioGroup: FC<IProps> = (props) => {
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
      <div className="space-x-3 mx-auto w-full flex custom-webkit-focus">
        {Genders.map((Genders) => (
          <RadioGroup.Option
            key={Genders.gender}
            value={Genders}
            className={({ active, checked }) =>
              `${active ? 'ring-0 ring-offset-0' : ''}
                              ${
                                checked
                                  ? 'bg-gray-900 bg-opacity-75 text-white border-0'
                                  : 'bg-white border-2'
                              }
                                relative rounded-xl py-2 px-5 w-full cursor-pointer custom-webkit-focus flex focus:outline-none border-gray-200`
            }
          >
            {({ active, checked }) => (
              <>
                <div className="flex items-center custom-webkit-focus justify-between w-full">
                  <div className="flex items-center w-full">
                    <div className="text-sm w-full">
                      <RadioGroup.Label
                        as="p"
                        className={`font-normal text-center ${
                          checked ? 'text-white' : 'text-gray-900'
                        }`}
                      >
                        {Genders.gender}
                      </RadioGroup.Label>
                    </div>
                  </div>
                  {checked && (
                    <div className="flex-shrink-0 custom-webkit-focus text-white pl-2 -mr-2">
                      <CustomCheckIcon className="w-6 h-6" />
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
