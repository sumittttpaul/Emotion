import React, { FC, useEffect, useState } from 'react';
import { useCycle } from 'framer-motion';
import { HeaderNav } from './assets/HeaderNav';
import { MenuButton } from './assets/MenuButton';
import { UserIconButton } from './assets/UserIconButton';
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
  },[Hvalue]);

  return (
    <>
      <div className="w-full relative h-[45px] bg-[#2a2a2a]">
        <div className="flex w-full justify-between max-w-[1440px] mx-auto">
          <MenuButton Cycle={Cycle} onClick={() => setCycle()} />
          <div className="flex relative">
            <HeaderLogo />
            <HeaderNav Store={true}/>
          </div>
          <UserIconButton />
        </div>
      </div>
      <MobileHeaderSlider Hvalue={Hvalue} Cycle={Cycle} />
    </>
  );
};
