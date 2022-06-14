import React, { FC, useEffect, useState } from 'react';
import { useCycle } from 'framer-motion';
import { TopHeaderUserButton } from '../../button/header/TopHeaderUserButton';
import { TopHeaderMenuButton } from '../../button/header/TopHeaderMenuButton';
import { TopHeaderLogo } from './assets/TopHeaderLogo';
import { TopHeaderNav } from './assets/TopHeaderNav';
import { TopHeaderSlider } from './assets/TopHeaderSlider';

interface IProps {}

/**
 * @author
 * @function @HeaderTop
 **/

export const HeaderTop: FC<IProps> = (props) => {
  const [Cycle, setCycle] = useCycle(false, true);
  const [Hvalue, setHvalue] = useState(0);
  const [Content, setContent] = useState('Store');

  useEffect(() => {
    if (global.window) {
      setHvalue(global.window.innerHeight);
    }
    global.window.addEventListener('resize', () => {
      if (global.window) {
        setHvalue(global.window.innerHeight);
      }
    });
    return () => {
      global.window.removeEventListener('resize', () => {
        if (global.window) {
          setHvalue(global.window.innerHeight);
        }
      });
    };
  }, [Hvalue]);

  return (
    <>
      <div className="w-full z-[9999] relative box-border h-[50px] bg-[#2a2a2a]">
        <div className="flex w-full justify-between max-w-[1540px] mx-auto">
          <TopHeaderMenuButton Cycle={Cycle} onClick={() => setCycle()} />
          <div className="flex relative">
            <TopHeaderLogo />
            <TopHeaderNav
              Value={Content}
              onValueChange={(value) => setContent(value)}
            />
          </div>
          <TopHeaderUserButton />
        </div>
      </div>
      <TopHeaderSlider
        Hvalue={Hvalue}
        Cycle={Cycle}
        onClose={() => setCycle()}
        Value={Content}
        onValueChange={(value) => setContent(value)}
      />
    </>
  );
};
