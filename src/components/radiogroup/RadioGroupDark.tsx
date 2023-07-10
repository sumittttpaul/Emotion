import { RadioGroup } from '@headlessui/react';

interface IProps {
  value?: string;
  content: Array<string>;
  onChange: React.Dispatch<React.SetStateAction<unknown>>;
}

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

export function RadioGroupDark(props: IProps) {
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
}
