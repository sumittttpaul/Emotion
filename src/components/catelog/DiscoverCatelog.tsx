import Image from 'next/image';
import { Button } from '@mui/material';
import { Rectangle_BlurDataURL } from '../loader/BlurDataURL';
import { ChevronRightIcon } from '@heroicons/react/outline';

function DiscoverCatelog() {
  return (
    <div className="flex w-full h-full px-3 my-[50px] relative box-border overflow-x-hidden overflow-y-visible bg-transparent">
      <div className="flex flex-row w-full h-[250px] small-medium-screen:h-[300px] space-x-14 box-border relative">
        <div className="medium-screen:max-w-[65%] small-medium-screen:max-w-[50%] max-w-[0%] w-full h-full flex">
          <div className="z-[1] absolute w-full h-full bg-gradient-to-l from-dark-orange rounded-xl" />
          <Image
            className="rounded-xl"
            fill
            style={{
              objectFit: 'cover',
              objectPosition: 'center',
            }}
            src="/images/avatar/illustration/5.png"
            blurDataURL={Rectangle_BlurDataURL}
            alt=""
          />
        </div>
        <div className="medium-screen:max-w-[35%] small-medium-screen:max-w-[50%] max-w-[65%] h-full w-full z-[2] flex relative justify-start items-center">
          <div className="text-white flex flex-col w-full space-y-2">
            <div className="text-[14px] font-[500] small-screen:text-[30px] w-full">
              Explore our Gallery
            </div>
            <h6 className="text-[13px] small-screen:text-[16px] whitespace-normal leading-[18px] font-normal text-left w-full opacity-[0.75]">
              Browse by genre, features, price and more to find your next
              favorite look.
            </h6>
            <div className="w-full justify-start flex">
              <Button
                disableFocusRipple
                className="rounded-lg py-2 px-8 small-screen:px-10 small-screen:mt-3 small-medium-screen:mt-10 text-[12px] font-[500] tracking-wide button-text-lower bg-super-dark-orange text-white transition-all cursor-default"
                sx={{
                  '.MuiTouchRipple-child': {
                    backgroundColor: '#ffffff30 !important',
                  },
                }}
              >
                <div className="flex space-x-2 items-center justify-center">
                  <ChevronRightIcon className="h-4" />
                  <p className="text-[12px] tracking-wide font-[400]">
                    See details
                  </p>
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DiscoverCatelog;
