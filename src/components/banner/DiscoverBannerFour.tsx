import { DiscoverBannerFourContentProps } from '../../contents/home/discover/Home.Discover.Banner';
import { DiscoverBannerFourBrowser } from './MultiScreen/DiscoverBannerFour.MultiScreen';

interface IProps {
  ContentArray: DiscoverBannerFourContentProps[];
}

export function DiscoverBannerFour(props: IProps) {
  return (
    <div className="flex w-full overflow-x-hidden overflow-y-visible mt-10">
      <DiscoverBannerFourBrowser ContentArray={props.ContentArray} />
      {/* <DiscoverBannerFourMobile ContentArray={props.ContentArray} /> */}
    </div>
  );
}
