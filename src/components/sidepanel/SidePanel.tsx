import { HeaderLogo } from '../logo/CompanyLogo';
import Router from 'next/router';
import { Dispatch, FC, SetStateAction } from 'react';
import { useLoaderState } from '../../providers/state/LoadingState';
import { Home_Link } from '../../routerLinks/RouterLinks';
import { useHomePageState } from '../../providers/state/HomePageState';
import { SidePanelVerticalNavBar } from './SidePanel.Vertical.NavBar';
import { SidePanelShoppingList } from './ShoppingList/SidePanel.ShoppingList';

interface SidePanelProps {
  Active: string;
  setActive: Dispatch<SetStateAction<string>>;
}

/**
 * @author
 * @function @SidePanel
 **/

export const SidePanel: FC<SidePanelProps> = (props) => {
  const { setHomePageState } = useHomePageState();
  const { setLoader } = useLoaderState();
  const LoadingScreen = (value: boolean) => {
    setLoader({ show: value });
  };

  return (
    <div className="flex flex-col py-1.5 w-[250px] fixed left-0 h-screen text-white bg-[#0f0f0f]">
      {/* Logo */}
      <div className="flex py-3 ml-[27px] h-[65px] min-h-[65px] items-center justify-start">
        <HeaderLogo
          onValueChange={(value) => {
            setHomePageState({ Page: value });
            LoadingScreen(true);
            Router.push(Home_Link);
          }}
        />
      </div>
      {/* Home, Gallery Nav */}
      <SidePanelVerticalNavBar
        Active={props.Active}
        setActive={props.setActive}
      />
      {/* Shopping List */}
      <SidePanelShoppingList />
    </div>
  );
};
