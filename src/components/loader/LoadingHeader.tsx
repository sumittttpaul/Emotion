import { Skeleton } from '@mui/material';
import { PageHeaderLogo } from '../logo/CompanyLogo';

const MainHeaderColor = 'grey.900';

export function LoadingPageheader() {
  return (
    <div className="w-full z-[1201] top-0 self-start relative box-border h-[50px] bg-[#2a2a2a]">
      <PageHeaderLogo onValueChange={() => {}} />
    </div>
  );
}

export function LoadingMainheader() {
  return (
    <>
      {/* Large Screen */}
      <div className="hidden md-900:flex w-full max-w-[1440px] mx-auto text-white p-3 my-[13px] sm:p-5 justify-between">
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
      <div className="hidden sm:flex md-900:hidden w-full max-w-[1440px] mx-auto text-white p-3 my-[13px] sm:p-5 justify-between">
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
      <div className="flex sm:hidden w-full max-w-[1440px] mx-auto text-white p-3 my-[13px] sm:p-5 justify-between">
        <Skeleton
          sx={{ bgcolor: MainHeaderColor }}
          variant="rectangular"
          width={145}
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

export function LoadingFooter() {
  
}
