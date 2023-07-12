import { DiscoverBannerFiveContentProps } from 'contents/home/discover/Home.Discover.Banner';
import { DiscoverBannerFiveBrowser } from './MultiScreen/DiscoverBannerFive.MultiScreen';

interface IProps {
  ContentArray: DiscoverBannerFiveContentProps[];
  Label: string;
}

function DiscoverBannerFive(props: IProps) {
  return (
    <div className="mt-[30px] flex flex-col text-white p-0 m-0 box-border overflow-y-visible overflow-x-hidden">
      <DiscoverBannerFiveBrowser
        Label={props.Label}
        ContentArray={props.ContentArray}
      />
      {/* <DiscoverBannerFiveMobile ContentArray={props.ContentArray} /> */}
    </div>
  );
}

export default DiscoverBannerFive;
