import React, { FC, useEffect, useState } from 'react';
import { useCycle } from 'framer-motion';
import { HeaderNav } from './assets/HeaderNav';
import { MobileMenuButton } from '../../button/MobileMenuButton';
import { UserIconButton } from '../../button/UserIconButton';
import { HeaderLogo } from './assets/HeaderLogo';
import { MobileHeaderSlider } from './assets/MobileHeaderSlider';

interface IProps {}

/**
 * @author
 * @function @HeaderHome
 **/

export const HeaderHomeTop: FC<IProps> = (props) => {
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
          <MobileMenuButton Cycle={Cycle} onClick={() => setCycle()} />
          <div className="flex relative">
            <HeaderLogo />
            <HeaderNav
              Value={Content}
              onValueChange={(value) => setContent(value)}
            />
          </div>
          <UserIconButton />
        </div>
      </div>
      <MobileHeaderSlider
        Hvalue={Hvalue}
        Cycle={Cycle}
        onClose={() => setCycle()}
        Value={Content}
        onValueChange={(value) => setContent(value)}
      />
    </>
  );
};
