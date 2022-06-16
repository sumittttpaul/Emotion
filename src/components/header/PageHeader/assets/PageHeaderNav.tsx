import { Button } from '@mui/material';
import React, { FC, ChangeEvent, useState, useEffect } from 'react';
import { About_Us_Link, Fanbook_Link, FAQ_Link, Help_Link, Store_Link } from '../../../../routerLinks/RouterLinks';

interface IProps {
  Value: string;
  onValueChange: (value: string) => void;
}


const NavLabel = [
  {
    label: 'Store',
    to: Store_Link,
    for: 'tab1',
  },
  {
    label: 'Fanbook',
    to: Fanbook_Link,
    for: 'tab2',
  },
  {
    label: 'FAQ',
    to: FAQ_Link,
    for: 'tab3',
  },
  {
    label: 'Help',
    to: Help_Link,
    for: 'tab4',
  },
  {
    label: 'About Us',
    to: About_Us_Link,
    for: 'tab5',
  },
];

const ActiveContent = (value: string) => {
  if (value === 'tab1') {
    return 'Store';
  }
  if (value === 'tab2') {
    return 'Fanbook';
  }
  if (value === 'tab3') {
    return 'FAQ';
  }
  if (value === 'tab4') {
    return 'Help';
  }
  if (value === 'tab5') {
    return 'About Us';
  } else {
    return 'Store';
  }
};

/**
 * @author
 * @function @PageHeaderNav
 **/

export const PageHeaderNav: FC<IProps> = (props) => {
  const [selectedValue, setSelectedValue] = useState('tab1');
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    props.onValueChange(ActiveContent(event.target.value));
    setSelectedValue(event.target.value);
  };
  useEffect(() => {
    if (props.Value === 'Store') {
      setSelectedValue('tab1');
    }
    if (props.Value === 'Fanbook') {
      setSelectedValue('tab2');
    }
    if (props.Value === 'FAQ') {
      setSelectedValue('tab3');
    }
    if (props.Value === 'Help') {
      setSelectedValue('tab4');
    }
    if (props.Value === 'About Us') {
      setSelectedValue('tab5');
    }
  }, [props.Value]);
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
          <li key={value.label} className="relative box-border h-full">
            <label htmlFor={value.for} role="button">
              <Button
                component="a"
                aria-label="header-button"
                disableFocusRipple
                sx={{
                  '.MuiTouchRipple-child': {
                    backgroundColor: 'rgba(225, 225, 255, 0.5) !important',
                  },
                }}
                onClick={() => {
                  setTimeout(() => {
                    if (props.Value != value.label) {
                      props.onValueChange(value.label);
                    }
                  }, 200);
                }}
                className="text-white disabled:cursor-not-allowed disabled:text-white opacity-70 hover:opacity-100 navLinks transition-all duration-200 whitespace-nowrap font-[350] text-[12px] tracking-[0.075em] h-full w-[65px] flex text-center justify-center items-center px-[10px] button-text-lower"
              >
                {value.label}
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
