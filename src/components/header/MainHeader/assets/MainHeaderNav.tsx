import { Button } from '@mui/material';
import React, { FC } from 'react';

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
  return (
    <div className="hidden sm:flex flex-col MainNavBar">
      <input
        id="MainTab1"
        type="radio"
        name="main-tab-control"
        className="hidden"
        aria-label="MainTab1"
      />
      <input
        id="MainTab2"
        type="radio"
        name="main-tab-control"
        className="hidden"
        aria-label="MainTab2"
      />
      <input
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
                disableRipple
                disableFocusRipple
                disableTouchRipple
                component="a"
                className="opacity-50 hover:opacity-90 transition-opacity ease-in font-normal text-white button-text-lower"
              >
                {value.name}
              </Button>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};
