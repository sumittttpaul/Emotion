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
    <div className="hidden medium-screen:flex flex-col h-full">
      <ul className="flex flex-row space-x-2 h-full items-center">
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
                  ? 'text-[#ffffff] bg-[#202020] hover:bg-[#202020]'
                  : 'text-[#ffffff75] bg-transparent hove:bg-transparent'
              } cursor-default text-[12px] py-2 px-7 border-solid border-2 rounded-lg border-[#1f1f1f] tracking-[0.6px] transition-all duration-300 font-normal hover:text-[#ffffff] button-text-lower`}
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
