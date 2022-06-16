import React, { FC } from 'react';
import { FooterLogo } from '../../logo/CompanyLogo';
import { FooterBottom } from './assets/FooterBottom';
import { FooterTop } from './assets/FooterTop';
import { ScrollToTopButton } from './assets/ScrollToTopButton';

interface IProps {}

/**
 * @author
 * @function @PageFooter
 **/

export const PageFooter: FC<IProps> = (props) => {
  return (
    <div className="w-full self-end overflow-hidden bg-[#202020]">
      <div className="w-full relative p-5 md-900:p-8 box-border max-w-[1570px] mx-auto">
        <FooterLogo />
        <FooterTop />
        <div className="h-[1px] w-full my-5 bg-[rgba(255,255,255,0.1)]" />
        <h6 className="text-[11.5px] py-2 font-[300] leading-[22px] whitespace-normal lg:max-w-[70%] xl:max-w-[60%] 2xl:max-w-[55%] flex text-white opacity-80">
          Founded in 2022, Agewear is a lifestyle fashion brand that makes
          creative, distinctive fashion for the trendy, contemporary Indian.
          Agewear-lifestyle was created on the principle of creating impact
          through innovation, honesty and thoughtfulness. We like to experiment
          freely, which allows us to balance creativity and relatability, and
          our innovative designs. Our range of products is always fresh and
          up-to-date. Discover the new you with Agewear-lifestyle.
        </h6>
        <h6 className="text-[11.5px] py-2 font-[300] whitespace-normal flex text-white">
          Discover the new you with Agewear-lifestyle.
        </h6>
        <FooterBottom />
        <ScrollToTopButton/>
      </div>
    </div>
  );
};
