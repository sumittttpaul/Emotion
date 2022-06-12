import { Button } from '@mui/material';
import React, { FC, ChangeEvent, useState } from 'react';

interface IProps {}

/**
 * @author
 * @function @HeaderNav
 **/

const NavLabel = [
  {
    name: 'Store',
    to: '#',
    for: 'tab1',
  },
  {
    name: 'Fanbook',
    to: '#',
    for: 'tab2',
  },
  {
    name: 'FAQ',
    to: '#',
    for: 'tab3',
  },
  {
    name: 'Help',
    to: '#',
    for: 'tab4',
  },
  {
    name: 'About Us',
    to: '#',
    for: 'tab5',
  },
];

const ButtonStyle =
  'text-white opacity-70 hover:opacity-100 navLinks transition-opacity ease-out whitespace-nowrap font-[350] text-[12px] tracking-[0.075em] h-full w-[65px] flex text-center justify-center items-center px-[10px] button-text-lower';

export const HeaderNav: FC<IProps> = (props) => {
  const [selectedValue, setSelectedValue] = useState('tab1');
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };
  return (
    <div className="navBar sm:flex flex-col hidden h-full">
      <input
        value="tab1"
        checked={selectedValue === 'tab1'}
        onChange={handleChange}
        type="radio"
        id="tab1"
        className="hidden"
        name="tab-control"
        aria-label="tab1"
      />
      <input
        value="tab2"
        checked={selectedValue === 'tab2'}
        onChange={handleChange}
        type="radio"
        id="tab2"
        className="hidden"
        name="tab-control"
        aria-label="tab2"
      />
      <input
        value="tab3"
        checked={selectedValue === 'tab3'}
        onChange={handleChange}
        type="radio"
        id="tab3"
        className="hidden"
        name="tab-control"
        aria-label="tab3"
      />
      <input
        value="tab4"
        checked={selectedValue === 'tab4'}
        onChange={handleChange}
        type="radio"
        id="tab4"
        className="hidden"
        name="tab-control"
        aria-label="tab4"
      />
      <input
        value="tab5"
        checked={selectedValue === 'tab5'}
        onChange={handleChange}
        type="radio"
        id="tab5"
        className="hidden"
        name="tab-control"
        aria-label="tab5"
      />
      <ul className="flex flex-row h-full">
        {NavLabel.map((value) => (
          <li key={value.name} className="relative box-border h-full">
            <label htmlFor={value.for} role="button">
              <Button
                disableFocusRipple
                component="a"
                sx={{
                  '.MuiTouchRipple-child': {
                    backgroundColor: 'rgba(225, 225, 255, 0.5) !important',
                  },
                }}
                className={ButtonStyle}
              >
                {value.name}
              </Button>
            </label>
          </li>
        ))}
      </ul>
      <div className="w-[20%] navIndicator relative">
        <div className="h-[1px] -mt-[1px] w-[60%] left-[18%] relative opacity-80 bg-white" />
      </div>
    </div>
  );
};
