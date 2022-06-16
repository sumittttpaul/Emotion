import React, { FC, useEffect, useState } from 'react';
import { useCycle } from 'framer-motion';
import { PageHeaderUserButton } from '../../button/header/PageHeaderUserButton';
import { PageHeaderMenuButton } from '../../button/header/PageHeaderMenuButton';
import { PageHeaderNav } from './assets/PageHeaderNav';
import { PageHeaderSlider } from './assets/PageHeaderSlider';
import { PageHeaderLogo } from '../../logo/CompanyLogo';

interface IProps {}

/**
 * @author
 * @function @PageHeader
 **/

export const PageHeader: FC<IProps> = (props) => {
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
  }, [Hvalue, Content]);

  return (
    <>
      <div className="w-full z-[1201] top-0 self-start relative box-border h-[50px] bg-[#2a2a2a]">
        <div className="flex w-full justify-between max-w-[1540px] mx-auto">
          <PageHeaderMenuButton Cycle={Cycle} onClick={() => setCycle()} />
          <div className="flex relative">
            <PageHeaderLogo />
            <PageHeaderNav
              Value={Content}
              onValueChange={(value) => setContent(value)}
            />
          </div>
          <PageHeaderUserButton />
        </div>
      </div>
      <PageHeaderSlider
        Hvalue={Hvalue}
        Cycle={Cycle}
        onClose={() => setCycle()}
        Value={Content}
        onValueChange={(value) => setContent(value)}
      />
    </>
  );
};
