import { Button } from '@mui/material';
import React, { ChangeEvent, FC, useState } from 'react';

interface IProps {}

/**
 * @author
 * @function @MainHeaderNav
 **/

const NavLabel = [
  {
    name: 'Discover',
    to: '#',
    for: 'MainTab1',
  },
  {
    name: 'Offers',
    to: '#',
    for: 'MainTab2',
  },
  {
    name: 'Collections',
    to: '#',
    for: 'MainTab3',
  },
];

export const MainHeaderNav: FC<IProps> = (props) => {
  const [selectedValue, setSelectedValue] = useState('MainTab1');
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };
  return (
    <>
      <div className="mainNav hidden sm:flex sm:ml-6 md:ml-0 flex-col">
        <input
          value="MainTab1"
          checked={selectedValue === 'MainTab1'}
          onChange={handleChange}
          id="MainTab1"
          type="radio"
          name="main-tab-control"
          className="hidden"
          aria-label="MainTab1"
        />
        <input
          value="MainTab2"
          checked={selectedValue === 'MainTab2'}
          onChange={handleChange}
          id="MainTab2"
          type="radio"
          name="main-tab-control"
          className="hidden"
          aria-label="MainTab2"
        />
        <input
          value="MainTab3"
          checked={selectedValue === 'MainTab3'}
          onChange={handleChange}
          id="MainTab3"
          type="radio"
          name="main-tab-control"
          className="hidden"
          aria-label="MainTab3"
        />
        <ul className="flex flex-row space-x-3">
          {NavLabel.map((value) => (
            <li key={value.name} className="relative box-border">
              <label htmlFor={value.for} role="button">
                <Button
                  component="a"
                  disableRipple
                  disableFocusRipple
                  disableTouchRipple
                  aria-label="main-header-button"
                  className="opacity-50 hover:opacity-75 transition-opacity ease-in font-normal text-white button-text-lower"
                >
                  {value.name}
                </Button>
              </label>
            </li>
          ))}
        </ul>
      </div>
      <Button
        disableRipple
        disableFocusRipple
        disableTouchRipple
        aria-label='mobile-main-nav-button'
        className="ml-[20%] flex sm:hidden font-normal opacity-90 text-white button-text-lower"
      >
        <div>
          <h6>Discover</h6>
        </div>
      </Button>
    </>
  );
};
