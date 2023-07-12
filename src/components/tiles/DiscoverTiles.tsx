import { DiscoverTilesContentProps } from '../../contents/home/discover/Home.Discover.Tiles';
import { DiscoverTilesBrowser } from './MultiScreen/DiscoverTiles.MultiScreen';

interface IProps {
  ContentArray: DiscoverTilesContentProps[];
  Label: string;
}

function DiscoverTiles(props: IProps) {
  return (
    <div className="px-3 mt-5 flex flex-col text-white p-0 m-0 box-border overflow-y-visible overflow-x-hidden">
      <DiscoverTilesBrowser
        Label={props.Label}
        ContentArray={props.ContentArray}
      />
      {/* <DiscoverTilesMobile ContentArray={props.ContentArray} /> */}
    </div>
  );
}

export default DiscoverTiles;
