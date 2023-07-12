import { DiscoverSliderContent } from 'contents/home/discover/Home.Discover.Slider';
import { DiscoverCarouselContent } from 'contents/home/discover/Home.Discover.Carousel';
import { DiscoverBannerFourContent } from 'contents/home/discover/Home.Discover.Banner';
import { DiscoverTilesContent } from 'contents/home/discover/Home.Discover.Tiles';
import {
  DiscoverBannerFiveContent,
  DiscoverBannerDealContent,
  DiscoverBannerTop5Content,
} from 'contents/home/discover/Home.Discover.Banner';
import DiscoverSlider from 'components/slider/DiscoverSlider';
import DiscoverBannerTop5 from 'components/banner/DiscoverBannerTop5';
import DiscoverTiles from 'components/tiles/DiscoverTiles';
import DiscoverBannerFour from 'components/banner/DiscoverBannerFour';
import DiscoverBannerFive from 'components/banner/DiscoverBannerFive';
import DiscoverCatelog from 'components/catelog/DiscoverCatelog';
import DiscoverCarousel from 'components/carousel/DiscoverCarousel';
import DiscoverBannerDeal from 'components/banner/DiscoverBannerDeal';
import LightningBadge from 'components/badge/LightningBadge';
import NewBadge from 'components/badge/NewBadge';

function DiscoverUI() {
  return (
    <div className="relative z-10 w-full rounded-xl">
      <DiscoverCarousel ContentArray={DiscoverCarouselContent} />
      <DiscoverBannerTop5 ContentArray={DiscoverBannerTop5Content} />
      <DiscoverTiles Label="Our Category" ContentArray={DiscoverTilesContent} />
      <DiscoverSlider
        Label="Recommended for you"
        ContentArray={DiscoverSliderContent}
      />
      <DiscoverBannerFour ContentArray={DiscoverBannerFourContent} />
      <DiscoverBannerDeal
        Label="Daily lightning deals"
        Description="Make your creative vision a reality with these AI-powered effects"
        Badge={<LightningBadge />}
        ContentArray={DiscoverBannerDealContent}
      />
      <DiscoverSlider
        Label="Best summer sale"
        ContentArray={DiscoverSliderContent}
      />
      <DiscoverBannerFour ContentArray={DiscoverBannerFourContent} />
      <DiscoverBannerDeal
        Label="New arrivals"
        Description="Make your creative vision a reality with these AI-powered effects"
        Badge={<NewBadge />}
        ContentArray={DiscoverBannerDealContent}
      />
      <DiscoverBannerFour ContentArray={DiscoverBannerFourContent} />
      <DiscoverBannerFive
        Label="Our services"
        ContentArray={DiscoverBannerFiveContent}
      />
      <DiscoverCatelog />
    </div>
  );
}

export default DiscoverUI;
