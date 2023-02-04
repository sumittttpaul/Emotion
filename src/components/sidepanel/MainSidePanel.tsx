import { PageHeaderLogo } from '../logo/CompanyLogo';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Router from 'next/router';
import { FC } from 'react';
import { useLoaderState } from '../../providers/state/LoadingState';
import { Home_Link } from '../../routerLinks/RouterLinks';

interface MainSidePanelProps {
  TopPanelData: { Name: string; Icon: string; IconActive: string }[];
  BottomPanelData: { Name: string; Icon: string; IconActive: string }[];
  Active: string;
  setActive: (value: string) => void;
  setChildPage: (value: string) => void;
}

/**
 * @author
 * @function @MainSidePanel
 **/

export const MainSidePanel: FC<MainSidePanelProps> = (props) => {
  const { setLoader } = useLoaderState();
  const LoadingScreen = (value: boolean) => {
    setLoader({ show: value });
  };
  return (
    <div className="flex flex-col py-1.5 w-20 fixed left-0 h-screen text-white bg-[#0f0f0f]">
      {/* Logo */}
      <div className="flex py-3 h-[65px] items-center justify-center">
        <PageHeaderLogo
          onValueChange={(value) => {
            props.setChildPage(value);
            LoadingScreen(true);
            Router.push(Home_Link);
          }}
        />
      </div>
      {/* Top Side Panel */}
      <div className="flex flex-col space-y-1.5 w-full h-full">
        {props.TopPanelData.map((data, i) => (
          <motion.button
            key={i}
            onPointerUp={() => props.setActive(data.Name)}
            disabled={true}
            whileTap={{ scale: 0.9 }}
            className={`mx-1.5 h-[65px] relative rounded-lg cursor-default ${
              props.Active == data.Name
                ? 'bg-[#202020]'
                : 'bg-transparent hover:bg-[#191919] hover:transition-colors group'
            }`}
          >
            {props.Active == data.Name ? (
              <div className="fixed mt-2 h-[25px] w-[3px] rounded-sm bg-white opacity-30" />
            ) : (
              <></>
            )}
            <div className="m-3 flex flex-col">
              <Image
                height={`${props.Active == data.Name ? 20 : 22}`}
                width={`${props.Active == data.Name ? 20 : 22}`}
                className={`${
                  props.Active == data.Name
                    ? 'opacity-90'
                    : 'opacity-50 group-hover:opacity-90 hover:transition-opacity'
                }`}
                src={`${
                  props.Active == data.Name ? data.IconActive : data.Icon
                }`}
                alt=""
              />
              <p
                className={`text-[10px] mt-2 opacity-75 ${
                  props.Active == data.Name
                    ? 'hidden'
                    : 'block group-hover:opacity-100 hover:transition-opacity'
                }`}
              >
                {data.Name}
              </p>
            </div>
          </motion.button>
        ))}
      </div>
      {/* Bottom Side Panel */}
      <div className="flex flex-col space-y-1.5 w-full">
        {props.BottomPanelData.map((data, i) => (
          <motion.button
            key={i}
            onPointerUp={() => props.setActive(data.Name)}
            disabled={true}
            whileTap={{ scale: 0.9 }}
            className={`mx-1.5 h-[65px] relative rounded-lg cursor-default ${
              props.Active == data.Name
                ? 'bg-[#202020]'
                : 'bg-transparent hover:bg-[#191919] hover:transition-colors group'
            }`}
          >
            {props.Active == data.Name ? (
              <div className="fixed mt-2 h-[25px] w-[3px] rounded-sm bg-white opacity-30" />
            ) : (
              <></>
            )}
            <div className="m-3 flex flex-col">
              <Image
                height={`${props.Active == data.Name ? 20 : 22}`}
                width={`${props.Active == data.Name ? 20 : 22}`}
                className={`${
                  props.Active == data.Name
                    ? 'opacity-90'
                    : 'opacity-50 group-hover:opacity-90 hover:transition-opacity'
                }`}
                src={`${
                  props.Active == data.Name ? data.IconActive : data.Icon
                }`}
                alt=""
              />
              <p
                className={`text-[10px] mt-2 opacity-75 ${
                  props.Active == data.Name
                    ? 'hidden'
                    : 'block group-hover:opacity-100 hover:transition-opacity'
                }`}
              >
                {data.Name}
              </p>
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  );
};
