import { HeaderLogo } from 'components/logo/CompanyLogo';
import { HomePageHook } from 'hooks/Hooks.HomePage';
import { Home_Link } from 'routers/RouterLinks';
import { LoaderHook } from 'hooks/Hooks.Loader';
import { useRouter } from 'next/navigation';
import SidePanelVerticalNavBar from './SidePanel.Vertical.NavBar';
import SidePanelShoppingList from './ShoppingList/SidePanel.ShoppingList';

interface SidePanelProps {
  Active: string;
  setActive: React.Dispatch<React.SetStateAction<string>>;
}

function SidePanel(props: SidePanelProps) {
  const { setLoader } = LoaderHook();
  const { setHomePage } = HomePageHook();
  const router = useRouter();
  return (
    <div className="flex flex-col py-1.5 w-[250px] fixed left-0 h-screen text-white bg-[#0f0f0f]">
      {/* Logo */}
      <div className="flex py-3 ml-[27px] h-[65px] min-h-[65px] items-center justify-start">
        <HeaderLogo
          onValueChange={(value) => {
            setHomePage(value);
            setLoader(true);
            router.push(Home_Link);
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
}

export default SidePanel;
