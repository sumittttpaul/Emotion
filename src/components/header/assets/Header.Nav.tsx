import { Button } from '@mui/material';
import { Collections_Link, Home_Link, Offers_Link } from 'routers/RouterLinks';
import { useRouter } from 'next/navigation';

interface IProps {
  open: boolean;
  onOpen: (event: React.MouseEvent<HTMLElement>) => void;
  onValueChange: (value: 'Discover' | 'Offers' | 'Collections') => void;
  Value: string;
}

interface INavLabel {
  label: 'Discover' | 'Offers' | 'Collections';
  to: string;
}

const NavLabel: INavLabel[] = [
  {
    label: 'Discover',
    to: Home_Link,
  },
  {
    label: 'Offers',
    to: Offers_Link,
  },
  {
    label: 'Collections',
    to: Collections_Link,
  },
];

function HeaderNav(props: IProps) {
  const router = useRouter();
  return (
    <div className="hidden h-full flex-col medium-screen:flex">
      <ul className="flex h-full flex-row items-center space-x-2">
        {NavLabel.map((value) => (
          <li key={value.label} className="relative box-border">
            <Button
              onClick={() => {
                if (props.Value !== value.label) {
                  props.onValueChange(value.label);
                  router.push(value.to);
                }
              }}
              disableRipple
              disableFocusRipple
              disableTouchRipple
              aria-label="desktop-main-header-nav-button"
              className={`${
                props.Value === value.label
                  ? 'bg-[#202020] text-[#ffffff] hover:bg-[#202020]'
                  : 'hove:bg-transparent bg-transparent text-[#ffffff75]'
              } button-text-lower cursor-default rounded-lg border-2 border-solid border-[#1f1f1f] px-7 py-2 text-[12px] font-normal tracking-[0.6px] transition-all duration-300 hover:text-[#ffffff]`}
            >
              {value.label}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HeaderNav;
