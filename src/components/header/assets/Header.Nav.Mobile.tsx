import { Button } from '@mui/material';
import { useRouter } from 'next/navigation';
import {
  Discover_Link,
  Offers_Link,
  Collections_Link,
} from 'routers/RouterLinks';

interface IProps {
  onValueChange: (value: 'Discover' | 'Offers' | 'Collections') => void;
  Value: 'Discover' | 'Offers' | 'Collections';
}

interface INavLabel {
  label: 'Discover' | 'Offers' | 'Collections';
  to: string;
}

const NavLabel: INavLabel[] = [
  {
    label: 'Discover',
    to: Discover_Link,
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

function HeaderNavMobile(props: IProps) {
  const router = useRouter();
  return (
    <div className="flex w-full sticky-top p-3 space-x-2 z-[998] bg-[#0f0f0f]">
      <ul className="flex flex-row space-x-2">
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
                props.Value == value.label
                  ? 'text-[#ffffff] bg-[#202020] hover:bg-[#202020]'
                  : 'text-[#ffffff75] bg-transparent hove:bg-transparent'
              } cursor-default text-[12px] py-[6px] px-4 border-solid border-[2px] font-normal rounded-full border-[#1f1f1f] transition-all duration-300 hover:text-[#ffffff] button-text-lower`}
            >
              {value.label}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HeaderNavMobile;
