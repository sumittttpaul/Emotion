import { Skeleton } from '@mui/material';
import { PageHeaderLogo } from '../logo/CompanyLogo';

const MainHeaderColor = 'grey.900';

export function LoadingPageheader() {
  return (
    <div className="w-full h-[50px] bg-[#2a2a2a]">
      <div className="w-full h-full max-w-[1540px] mx-auto flex justify-center sm:justify-start">
        <PageHeaderLogo onValueChange={() => {}} />
      </div>
    </div>
  );
}

export function LoadingMainheader() {
  return (
    <>
      {/* Large Screen */}
      <div className="hidden md-900:flex max-w-[1440px] mx-auto w-full text-white p-3 my-[13px] sm:p-5 justify-between">
        <Skeleton
          sx={{ bgcolor: MainHeaderColor }}
          variant="rectangular"
          width={451}
          height={38}
        />
        <Skeleton
          sx={{ bgcolor: MainHeaderColor }}
          variant="rectangular"
          width={189}
          height={38}
        />
      </div>

      {/* Medium Screen */}
      <div className="hidden sm:flex md-900:hidden max-w-[1440px] mx-auto w-full text-white p-3 my-[13px] sm:p-5 justify-between">
        <Skeleton
          sx={{ bgcolor: MainHeaderColor }}
          variant="rectangular"
          width={310}
          height={38}
        />
        <Skeleton
          sx={{ bgcolor: MainHeaderColor }}
          variant="rectangular"
          width={108}
          height={38}
        />
      </div>

      {/* Small Screen */}
      <div className="flex sm:hidden max-w-[1440px] mx-auto w-full text-white p-3 my-[13px] sm:p-5 justify-between">
        <Skeleton
          sx={{ bgcolor: MainHeaderColor }}
          variant="rectangular"
          width={38}
          height={38}
        />
        <Skeleton
          sx={{ bgcolor: MainHeaderColor }}
          variant="rectangular"
          width={100}
          height={38}
        />
        <Skeleton
          sx={{ bgcolor: MainHeaderColor }}
          variant="rectangular"
          width={85}
          height={38}
        />
      </div>
    </>
  );
}

export function LoadingAvatarButton() {
  return (
    <Skeleton
      sx={{ bgcolor: MainHeaderColor }}
      variant="circular"
      width={100}
      height={100}
    />
  );
}

export function LoadingAvatarUI() {
  return (
    <Skeleton
      sx={{ bgcolor: MainHeaderColor }}
      variant="rectangular"
      width={350}
      height={161}
    />
  );
}

export function LoadingDatePickerUI() {
  return (
    <Skeleton
      sx={{ bgcolor: MainHeaderColor }}
      variant="rectangular"
      width={350}
      height={109}
    />
  );
}

export function LoadingGenderUI() {
  return (
    <Skeleton
      sx={{ bgcolor: MainHeaderColor }}
      variant="rectangular"
      width={350}
      height={106}
    />
  );
}

export function LoadingLargeBlueButton() {
  return (
    <Skeleton
      sx={{ bgcolor: MainHeaderColor }}
      variant="rectangular"
      width={350}
      height={60}
    />
  );
}

export function LoadingLoginUi() {
  return (
    <Skeleton
      sx={{ bgcolor: MainHeaderColor }}
      variant="rectangular"
      width={350}
      height={322}
    />
  );
}

export function LoadingDiscoverCarousel() {
  return (
    <>
      {/* Large Screen */}
      <Skeleton
        sx={{ bgcolor: MainHeaderColor }}
        variant="rectangular"
        width="100%"
        height={600}
        className="hidden md-900:flex"
      />
      {/* Medium Screen */}
      <Skeleton
        sx={{ bgcolor: MainHeaderColor }}
        variant="rectangular"
        width="100%"
        height={500}
        className="hidden sm:flex md-900:hidden"
      />
      {/* Small Screen */}
      <Skeleton
        sx={{ bgcolor: MainHeaderColor }}
        variant="rectangular"
        width="100%"
        height={450}
        className="flex sm:hidden"
      />
    </>
  );
}

export function LoadingDiscoverSlider() {
  return (
    <>
      {/* Large Screen */}
      <div className="hidden md-900:flex w-full flex-col justify-start space-y-6 px-5">
        <Skeleton
          sx={{ bgcolor: MainHeaderColor }}
          variant="rectangular"
          width={233}
          height={27}
          className="flex w-full"
        />
        <div className="flex w-full space-x-4">
          {[...Array(6)].map((value, index) => (
            <div key={index} className="flex w-full flex-col justify-start space-y-2">
              <Skeleton
                sx={{ bgcolor: MainHeaderColor }}
                variant="rectangular"
                width={220}
                height={294}
                className="flex w-full"
              />
              <Skeleton
                sx={{ bgcolor: MainHeaderColor }}
                variant="rectangular"
                width={116.5}
                height={20}
                className="flex"
              />
              <Skeleton
                sx={{ bgcolor: MainHeaderColor }}
                variant="rectangular"
                width={220}
                height={30}
                className="flex"
              />
            </div>
          ))}
        </div>
      </div>
      {/* Medium Screen */}
      <div className="hidden sm:flex w-full md-900:hidden flex-col justify-start space-y-6 px-5">
        <Skeleton
          sx={{ bgcolor: MainHeaderColor }}
          variant="rectangular"
          width={233}
          height={27}
          className="flex"
        />
        <div className="hidden sm:flex w-full md-900:hidden space-x-4">
          {[...Array(4)].map((value, index) => (
            <div key={index} className="flex flex-col w-full justify-start space-y-2">
              <Skeleton
                sx={{ bgcolor: MainHeaderColor }}
                variant="rectangular"
                width={198}
                height={294}
                className="flex w-full"
              />
              <Skeleton
                sx={{ bgcolor: MainHeaderColor }}
                variant="rectangular"
                width={116.5}
                height={20}
                className="flex"
              />
              <Skeleton
                sx={{ bgcolor: MainHeaderColor }}
                variant="rectangular"
                width={198}
                height={30}
                className="flex"
              />
            </div>
          ))}
        </div>
      </div>
      {/* Small Screen */}
      <div className="flex sm:hidden w-full flex-col justify-start space-y-6 px-5">
        <Skeleton
          sx={{ bgcolor: MainHeaderColor }}
          variant="rectangular"
          width={233}
          height={27}
          className="flex w-full"
        />
        <div className="flex w-full space-x-4">
          {[...Array(2)].map((value, index) => (
            <div key={index} className="flex flex-col w-full justify-start space-y-2">
              <Skeleton
                sx={{ bgcolor: MainHeaderColor }}
                variant="rectangular"
                width={178}
                height={294}
                className="flex w-full"
              />
              <Skeleton
                sx={{ bgcolor: MainHeaderColor }}
                variant="rectangular"
                width={116.5}
                height={20}
                className="flex"
              />
              <Skeleton
                sx={{ bgcolor: MainHeaderColor }}
                variant="rectangular"
                width={178}
                height={30}
                className="flex"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export function LoadingDiscoverTiles() {
  return (
    <>
      {/* Large Screen */}
      <div className="hidden md-900:flex flex-col space-y-5 px-5 w-full">
        <Skeleton
          sx={{ bgcolor: MainHeaderColor }}
          variant="rectangular"
          width={100}
          height={27}
          className="flex"
        />
        <div className="flex w-full space-x-10">
          {[...Array(3)].map((value, index) => (
            <div key={index} className="flex w-full space-x-2">
              <Skeleton
                sx={{ bgcolor: MainHeaderColor }}
                variant="rectangular"
                width={111}
                height={113}
                className="flex w-full"
              />
              <div className="flex w-full flex-col justify-between">
                <div className="flex w-full flex-col space-y-2">
                  <Skeleton
                    sx={{ bgcolor: MainHeaderColor }}
                    variant="rectangular"
                    width={120}
                    height={20}
                    className="flex"
                  />
                  <Skeleton
                    sx={{ bgcolor: MainHeaderColor }}
                    variant="rectangular"
                    width={210}
                    height={15}
                    className="flex mr-[110px]"
                  />
                </div>
                <div className="flex w-full justify-between">
                  <Skeleton
                    sx={{ bgcolor: MainHeaderColor }}
                    variant="rectangular"
                    width={100}
                    height={20}
                    className="flex"
                  />
                  <Skeleton
                    sx={{ bgcolor: MainHeaderColor }}
                    variant="rectangular"
                    width={85}
                    height={20}
                    className="flex"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Medium Screen */}
      <div className="hidden sm:flex flex-col md-900:hidden space-y-5 px-5 w-full">
        <Skeleton
          sx={{ bgcolor: MainHeaderColor }}
          variant="rectangular"
          width={100}
          height={27}
          className="flex w-full"
        />
        <div className="flex w-full space-x-4">
          {[...Array(2)].map((value, index) => (
            <div key={index} className="flex w-full space-x-2">
              <Skeleton
                sx={{ bgcolor: MainHeaderColor }}
                variant="rectangular"
                width={104}
                height={123}
                className="flex w-full"
              />
              <div className="flex w-full flex-col justify-between">
                <div className="flex w-full flex-col space-y-2">
                  <Skeleton
                    sx={{ bgcolor: MainHeaderColor }}
                    variant="rectangular"
                    width={116.5}
                    height={20}
                    className="flex"
                  />
                  <Skeleton
                    sx={{ bgcolor: MainHeaderColor }}
                    variant="rectangular"
                    width={180}
                    height={15}
                    className="flex"
                  />
                </div>
                <div className="flex w-full justify-between">
                  <Skeleton
                    sx={{ bgcolor: MainHeaderColor }}
                    variant="rectangular"
                    width={100}
                    height={20}
                    className="flex"
                  />
                  <Skeleton
                    sx={{ bgcolor: MainHeaderColor }}
                    variant="rectangular"
                    width={85}
                    height={20}
                    className="flex"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Small Screen */}
      <div className="flex flex-col sm:hidden space-y-5 px-5 w-full">
        <Skeleton
          sx={{ bgcolor: MainHeaderColor }}
          variant="rectangular"
          width={100}
          height={27}
          className="flex"
        />
        <div className="flex w-full space-x-4">
          {[...Array(2)].map((value, index) => (
            <div key={index} className="flex w-full space-x-2">
              <Skeleton
                sx={{ bgcolor: MainHeaderColor }}
                variant="rectangular"
                width={104}
                height={123}
                className="flex w-full"
              /> 
              <div className="flex w-full flex-col justify-between">
                <div className="flex w-full flex-col space-y-2">
                  <Skeleton
                    sx={{ bgcolor: MainHeaderColor }}
                    variant="rectangular"
                    width={116.5}
                    height={20}
                    className="flex"
                  />
                  <Skeleton
                    sx={{ bgcolor: MainHeaderColor }}
                    variant="rectangular"
                    width={225}
                    height={15}
                    className="flex"
                  />
                </div>
                <div className="flex w-full justify-between">
                  <Skeleton
                    sx={{ bgcolor: MainHeaderColor }}
                    variant="rectangular"
                    width={100}
                    height={20}
                    className="flex"
                  />
                  <Skeleton
                    sx={{ bgcolor: MainHeaderColor }}
                    variant="rectangular"
                    width={85}
                    height={20}
                    className="flex"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
