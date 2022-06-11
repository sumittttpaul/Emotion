import { Button } from '@mui/material';
import Router from 'next/router';
import React, { FC, useEffect, useState } from 'react';

interface IProps {
  Store?: boolean;
  Fanbook?: boolean;
  FAQ?: boolean;
  Help?: boolean;
  AboutUs?: boolean;
}

/**
 * @author
 * @function @HeaderNav
 **/

const StoreLink = '#';
const FanbookLink = '#';
const FAQLink = '#';
const HelpLink = '#';
const AboutUsLink = '#';

export const HeaderNav: FC<IProps> = (props) => {
  const { Store, Fanbook, FAQ, Help, AboutUs } = props;

  const [StoreOpacity, setStoreOpacity] = useState('opacity-75');
  const [FanbookOpacity, setFanbookOpacity] = useState('opacity-75');
  const [FAQOpacity, setFAQOpacity] = useState('opacity-75');
  const [HelpOpacity, setHelpOpacity] = useState('opacity-75');
  const [AboutUsOpacity, setAboutUsOpacity] = useState('opacity-75');

  const StoreActive = () => setStoreOpacity('opacity-100');
  const FanbookActive = () => setFanbookOpacity('opacity-100');
  const FAQActive = () => setFAQOpacity('opacity-100');
  const HelpActive = () => setHelpOpacity('opacity-100');
  const AboutUsActive = () => setAboutUsOpacity('opacity-100');

  const StoreInactive = () => setStoreOpacity('opacity-75');
  const FanbookInactive = () => setFanbookOpacity('opacity-75');
  const FAQInactive = () => setFAQOpacity('opacity-75');
  const HelpInactive = () => setHelpOpacity('opacity-75');
  const AboutUsInactive = () => setAboutUsOpacity('opacity-75');

  const StoreClick = () => {
    Router.push(StoreLink);
  };
  const FanbookClick = () => {
    Router.push(FanbookLink);
  };
  const FAQClick = () => {
    Router.push(FAQLink);
  };
  const HelpClick = () => {
    Router.push(HelpLink);
  };
  const AboutUsClick = () => {
    Router.push(AboutUsLink);
  };

  useEffect(() => {
    if (typeof window === 'object') {
      if (Store) {
        StoreActive();
      } else {
        StoreInactive();
      }
      if (Fanbook) {
        FanbookActive();
      } else {
        FanbookInactive();
      }
      if (FAQ) {
        FAQActive();
      } else {
        FAQInactive();
      }
      if (Help) {
        HelpActive();
      } else {
        HelpInactive();
      }
      if (AboutUs) {
        AboutUsActive();
      } else {
        AboutUsInactive();
      }
    }
  });
  return (
    <nav className="sm:flex hidden h-full">
      <ul className="flex flex-row h-full">
        <li className="relative box-border h-full">
          <Button
            id="StoreNavButton"
            sx={{
              '.MuiTouchRipple-child': {
                backgroundColor: 'rgba(225, 225, 255, 0.5) !important',
              },
            }}
            onClick={() => {
              setTimeout(() => {
                StoreClick();
              }, 150);
            }}
            className={`${StoreOpacity} ${'text-white navLinks hover:opacity-100 transition-opacity ease-in whitespace-nowrap font-[350] text-[12px] tracking-[0.075em] h-full flex items-center px-[10px] button-text-lower'}`}
          >
            Store
          </Button>
          {Store && (
            <div className="h-[1px] mx-3 w-10 block absolute bottom-0 opacity-80 bg-white" />
          )}
        </li>
        <li className="relative box-border h-full">
          <Button
            id="StoreNavButton"
            sx={{
              '.MuiTouchRipple-child': {
                backgroundColor: 'rgba(225, 225, 255, 0.5) !important',
              },
            }}
            onClick={() => {
              setTimeout(() => {
                FanbookClick();
              }, 150);
            }}
            className={`${FanbookOpacity} ${'text-white navLinks hover:opacity-100 transition-opacity ease-in whitespace-nowrap font-[350] text-[12px] tracking-[0.075em] h-full flex items-center px-[10px] button-text-lower'}`}
          >
            Fanbook
          </Button>
          {Fanbook && (
            <div className="h-[1px] mx-[10px] w-[52.5px] block absolute bottom-0 opacity-80 bg-white" />
          )}
        </li>
        <li className="relative box-border h-full">
          <Button
            id="StoreNavButton"
            sx={{
              '.MuiTouchRipple-child': {
                backgroundColor: 'rgba(225, 225, 255, 0.5) !important',
              },
            }}
            onClick={() => {
              setTimeout(() => {
                FAQClick();
              }, 150);
            }}
            className={`${FAQOpacity} ${'text-white navLinks hover:opacity-100 transition-opacity ease-in whitespace-nowrap font-[350] text-[12px] tracking-[0.075em] h-full flex items-center px-[10px] button-text-lower'}`}
          >
            FAQ
          </Button>
          {FAQ && (
            <div className="h-[1px] mx-3 w-10 block absolute bottom-0 opacity-80 bg-white" />
          )}
        </li>
        <li className="relative box-border h-full">
          <Button
            id="StoreNavButton"
            sx={{
              '.MuiTouchRipple-child': {
                backgroundColor: 'rgba(225, 225, 255, 0.5) !important',
              },
            }}
            onClick={() => {
              setTimeout(() => {
                HelpClick();
              }, 150);
            }}
            className={`${HelpOpacity} ${'text-white navLinks hover:opacity-100 transition-opacity ease-in whitespace-nowrap font-[350] text-[12px] tracking-[0.075em] h-full flex items-center px-[10px] button-text-lower'}`}
          >
            Help
          </Button>
          {Help && (
            <div className="h-[1px] mx-3 w-10 block absolute bottom-0 opacity-80 bg-white" />
          )}
        </li>
        <li className="relative box-border h-full">
          <Button
            id="StoreNavButton"
            sx={{
              '.MuiTouchRipple-child': {
                backgroundColor: 'rgba(225, 225, 255, 0.5) !important',
              },
            }}
            onClick={() => {
              setTimeout(() => {
                AboutUsClick();
              }, 150);
            }}
            className={`${AboutUsOpacity} ${'text-white navLinks hover:opacity-100 transition-opacity ease-in whitespace-nowrap font-[350] text-[12px] tracking-[0.075em] h-full flex items-center px-[10px] button-text-lower'}`}
          >
            About Us
          </Button>
          {AboutUs && (
            <div className="h-[1px] mx-[9.5px] w-[55px] block absolute bottom-0 opacity-80 bg-white" />
          )}
        </li>
      </ul>
    </nav>
  );
};
