import Image from 'next/image';
import { Button } from '@mui/material';

export function HeaderMobileSearchButton() {
  const SearchClick = () => {
    // if (!SearchButtonState.show) {
    //   router.push({ hash: 'search' });
    //   setSearchButtonState({ show: true });
    // }
  };

  return (
    <Button
      id="mobile-header-search-button"
      aria-label="mobile-search-button"
      onClick={SearchClick}
      className="min-w-[92px] w-[92px] flex p-0 m-0 z-10 rounded-full cursor-text justify-start items-center button-text-lower outline-none bg-[#202020] hover:bg-[#202020]"
    >
      <div className="flex ml-[11px] justify-center h-[16px] w-[16px] opacity-60">
        <Image src="/icons/search-white-2.svg" height={16} width={16} alt="" />
      </div>
      <div className="mx-2 flex font-normal pt-[10px] pb-[12px] truncate w-full h-full bg-transparent text-[13px] text-[#ffffffad]">
        Search
      </div>
    </Button>
  );
}
