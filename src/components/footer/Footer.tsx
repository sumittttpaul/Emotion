import Router from 'next/router';
import React, { FC } from 'react';
import { useHomePageState } from '../../providers/state/HomePageState';
import { useLoaderState } from '../../providers/state/LoadingState';
import { Home_Link } from '../../routerLinks/RouterLinks';
import { FooterLogo } from '../logo/CompanyLogo';
import { FooterBottom } from './assets/FooterBottom';
import { ScrollToTopButton } from './assets/ScrollToTopButton';

interface FooterProps {}

/**
 * @author
 * @function @Footer
 **/
export const Footer: FC<FooterProps> = (props) => {
  const { setHomePageState } = useHomePageState();
  const { setLoader } = useLoaderState();
  const LoadingScreen = (value: boolean) => {
    setLoader({ show: value });
  };
  return (
    <div className="w-full self-end pr-3">
      <div className="w-full relative pb-5 sm:px-8 px-3 box-border rounded-3xl bg-transparent">
        <div className="flex flex-col items-center justify-center">
          <FooterLogo
            onValueChange={(value) => {
              setHomePageState({ Page: value });
              LoadingScreen(true);
              Router.push(Home_Link);
            }}
          />
          <h6 className="text-[11.5px] text-center py-2 font-[300] leading-[22px] whitespace-normal lg:max-w-[70%] xl:max-w-[60%] 2xl:max-w-[55%] flex text-white opacity-80">
            Founded in 2023, Emotion is a outfit fashion brand that makes
            creative, distinctive fashion for the trendy, contemporary Indian.
            Emotion-outfit was created on the principle of creating impact
            through innovation, honesty and thoughtfulness. We like to
            experiment freely, which allows us to balance creativity and
            relatability, and our innovative designs. Our range of products is
            always fresh and up-to-date. Discover the new you with
            Emotion-outfit.
          </h6>
          <h6 className="text-[11.5px] py-2 font-[300] whitespace-normal flex text-white">
            Discover the new you with Emotion-outfit.
          </h6>
        </div>
        <FooterBottom />
        {/* <ScrollToTopButton /> */}
      </div>
    </div>
  );
};
