import Image from 'next/image';
import React, { FC } from 'react';
import { TrendingBadge } from '../badge/TrendingBadge';

interface IProps {}

/**
 * @author
 * @function @DiscoverBannerForYou
 **/

export const DiscoverBannerForYou: FC<IProps> = (props) => {
  return (
    <div className="relative flex w-full p-3">
      <div className="w-full items-center space-x-10 flex bg-white/5 rounded-xl p-5 overflow-hidden">
        {/* Title */}
        <div className="flex flex-col space-y-4 text-white max-w-[300px] py-5 pl-5">
          <div className="flex justify-start">
            <TrendingBadge />
          </div>
          <div className="text-[30px] text-white tracking-wide font-[500] leading-[35px]">
            Top 5 - trends of the week
          </div>
          <div className="text-[14px] text-white tracking-wide font-[300] opacity-[0.85]">
            Make your creative vision a reality with these AI-powered effects
          </div>
        </div>
        {/* Content */}
        <div className="w-full flex">
          <div className="relative flex text-white">
            <div className="flex items-center relative -ml-[20px] -mr-[45px] z-[2]">
              <div className="flex h-[75px] w-[75px] rounded-full items-center justify-center bg-dark-orange/50 backdrop-blur-xl font-[500] text-[25px] tracking-wide text-white">
                1
              </div>
            </div>
            <div className="relative flex h-full w-full overflow-hidden rounded-[15px] bg-dark-yellow-shadow">
              <Image
                priority
                height={150}
                width={300}
                src="/images/avatar/illustration/2.png"
                sizes="(max-width: 800px) 800px"
                style={{
                  objectFit: 'cover',
                  objectPosition: 'center',
                  maxWidth: 300,
                  maxHeight: 200,
                  borderRadius: 15,
                }}
                alt=""
              />
              <div className="absolute flex pl-14 items-center justify-start h-full w-full bg-gradient-to-r from-primary-theme/80 z-[1]">
                <div className='max-w-[75%] text-[16px] font-[500] text-white tracking-wide'>Trends of the week Heading 1</div>
              </div>
            </div>
          </div>
          <div className="relative flex text-white">
            <div className="flex items-center relative -ml-[15px] -mr-[45px] z-[2]">
              <div className="flex h-[75px] w-[75px] rounded-full items-center justify-center bg-dark-green/50 backdrop-blur-xl font-[500] text-[25px] tracking-wide text-white">
                2
              </div>
            </div>
            <div className="relative flex h-full w-full overflow-hidden rounded-[15px] bg-dark-green-shadow">
              <Image
                priority
                height={150}
                width={300}
                src="/images/avatar/illustration/7.png"
                sizes="(max-width: 800px) 800px"
                style={{
                  objectFit: 'cover',
                  objectPosition: 'center',
                  maxWidth: 300,
                  maxHeight: 200,
                  borderRadius: 15,
                }}
                alt=""
              />
              <div className="absolute flex pl-14 items-center justify-start h-full w-full bg-gradient-to-r from-primary-theme/80 z-[1]">
                <div className='max-w-[75%] text-[16px] font-[500] text-white tracking-wide'>Trends of the week Heading 2</div>
              </div>
            </div>
          </div>
          <div className="relative flex text-white">
            <div className="flex items-center relative -ml-[15px] -mr-[45px] z-[2]">
              <div className="flex h-[75px] w-[75px] rounded-full items-center justify-center bg-dark-red/50 backdrop-blur-xl font-[500] text-[25px] tracking-wide text-white">
                3
              </div>
            </div>
            <div className="relative flex h-full w-full overflow-hidden rounded-[15px] bg-dark-red-shadow">
              <Image
                priority
                height={150}
                width={300}
                src="/images/avatar/illustration/4.png"
                sizes="(max-width: 800px) 800px"
                style={{
                  objectFit: 'cover',
                  objectPosition: 'center',
                  maxWidth: 300,
                  maxHeight: 200,
                  borderRadius: 15,
                }}
                alt=""
              />
              <div className="absolute flex pl-14 items-center justify-start h-full w-full bg-gradient-to-r from-primary-theme/80 z-[1]">
                <div className='max-w-[75%] text-[16px] font-[500] text-white tracking-wide'>Trends of the week Heading 3</div>
              </div>
            </div>
          </div>
          <div className="relative flex text-white">
            <div className="flex items-center relative -ml-[15px] -mr-[45px] z-[2]">
              <div className="flex h-[75px] w-[75px] rounded-full items-center justify-center bg-dark-blue/50 backdrop-blur-xl font-[500] text-[25px] tracking-wide text-white">
                4
              </div>
            </div>
            <div className="relative flex h-full w-full overflow-hidden rounded-[15px] bg-dark-blue-shadow">
              <Image
                priority
                height={150}
                width={300}
                src="/images/avatar/illustration/3.png"
                sizes="(max-width: 800px) 800px"
                style={{
                  objectFit: 'cover',
                  objectPosition: 'center',
                  maxWidth: 300,
                  maxHeight: 200,
                  borderRadius: 15,
                }}
                alt=""
              />
              <div className="absolute flex pl-14 items-center justify-start h-full w-full bg-gradient-to-r from-primary-theme/80 z-[1]">
                <div className='max-w-[75%] text-[16px] font-[500] text-white tracking-wide'>Trends of the week Heading 4</div>
              </div>
            </div>
          </div>
          {/* <div className="relative flex text-white -mr-7">
            <div className="flex items-center relative -ml-[15px] -mr-[45px] z-[2]">
              <div className="flex h-[75px] w-[75px] rounded-full items-center justify-center bg-dark-pink/50 backdrop-blur-xl font-[500] text-[25px] tracking-wide text-white">
                5
              </div>
            </div>
            <div className="relative flex h-full w-full overflow-hidden rounded-[15px] bg-dark-pink-shadow">
              <Image
                priority
                height={150}
                width={300}
                src="/images/avatar/illustration/6.png"
                sizes="(max-width: 800px) 800px"
                style={{
                  objectFit: 'cover',
                  objectPosition: 'center',
                  maxWidth: 300,
                  maxHeight: 200,
                  borderRadius: 15,
                }}
                alt=""
              />
              <div className="absolute flex pl-14 items-center justify-start h-full w-full bg-gradient-to-r from-primary-theme/80 z-[1]">
                <div className='max-w-[75%] text-[16px] font-[500] text-white tracking-wide'>Trends of the week Heading 5</div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};
