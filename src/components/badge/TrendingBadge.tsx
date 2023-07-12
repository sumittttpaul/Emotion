import Image from 'next/image';

function TrendingBadge() {
  return (
    <div className="flex py-1 px-2 rounded-md space-x-1 items-center bg-[#0063b490]">
      <div className="w-[15px] h-[15px] min-w-[15px] min-h-[15px]">
        <Image height={15} width={15} src="/icons/trending-color.svg" alt="" />
      </div>
      <div className="text-[11px] font-[500] tracking-wide block">Trending</div>
    </div>
  );
}

export default TrendingBadge;
