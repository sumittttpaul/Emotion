import { RadioGroup } from '@headlessui/react';
import React, { Dispatch, FC, SetStateAction } from 'react';

interface IProps {
  theme: string;
  content: Array<string>;
  value?: string;
  onChange: Dispatch<SetStateAction<unknown>>;
}

/**
 * @author
 * @function @RadioGroupDark
 **/

const CheckIcon = (props: { className: string }) => {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={props.className}>
      <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.25" />
      <path
        d="M7 13l3 3 7-7"
        stroke="#fff"
        strokeWidth={1.75}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const RadioGroupDark: FC<IProps> = (props) => {
  if (props.theme.toLowerCase() === 'light') {
    return (
      <RadioGroup
        value={props.value}
        className="custom-webkit-focus w-full flex"
        onChange={props.onChange}
      >
        <RadioGroup.Label className="sr-only w-full flex custom-webkit-focus">
          Radio Group Dark
        </RadioGroup.Label>
        <div className="space-x-1 w-full flex custom-webkit-focus">
          {props.content.map((content, i) => (
            <RadioGroup.Option
              key={i}
              value={content}
              className={({ active, checked }) =>
                `${active ? 'ring-0 ring-offset-0' : ''}
                ${
                  checked
                    ? 'bg-[#0f0f0f] text-black border-0'
                    : 'bg-[#00000013] text-black'
                }
                  relative rounded-lg px-3 py-2.5 w-full cursor-pointer custom-webkit-focus flex outline-none transition-all ease-in-out duration-300`
              }
            >
              {({ checked }) => (
                <>
                  <div className="flex items-center custom-webkit-focus justify-between w-full">
                    <div className="flex items-center w-full">
                      <div className="text-sm w-full">
                        <RadioGroup.Label
                          as="p"
                          className={`text-sm text-center ${
                            checked
                              ? 'text-white font-normal'
                              : 'text-black font-medium'
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
  }
  if (props.theme.toLowerCase() === 'dark') {
    return (
      <RadioGroup
        value={props.value}
        className="custom-webkit-focus w-full flex max-w-[300px] mx-auto"
        onChange={props.onChange}
      >
        <RadioGroup.Label className="sr-only flex w-full custom-webkit-focus">
          Radio Group Dark
        </RadioGroup.Label>
        <div className="space-x-2 mx-auto w-full flex custom-webkit-focus">
          {props.content.map((content, i) => (
            <RadioGroup.Option
              key={i}
              value={content}
              className={({ active, checked }) =>
                `${active ? 'ring-0 ring-offset-0' : ''}
                ${
                  checked
                    ? 'bg-[#0f0f0f] text-white'
                    : 'bg-[#191919] text-white transition-colors hover:bg-[#101010]'
                }
                  relative rounded-lg border border-solid border-white/10 px-3 py-2.5 w-full cursor-default custom-webkit-focus flex outline-none`
              }
            >
              {({ checked }) => (
                <>
                  <div className="flex items-center custom-webkit-focus justify-between w-full">
                    <div className="flex items-center w-full">
                      <div className="text-sm w-full">
                        <RadioGroup.Label
                          as="p"
                          className={`font-normal text-sm text-center ${
                            checked ? 'text-white' : 'text-[#ffffffb3]'
                          }`}
                        >
                          {content}
                        </RadioGroup.Label>
                      </div>
                    </div>
                    {checked && (
                      <div className="flex-shrink-0 custom-webkit-focus text-white pl-2">
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
  } else {
    return null;
  }
};
