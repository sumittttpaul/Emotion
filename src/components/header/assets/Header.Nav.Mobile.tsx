import { Button } from '@mui/material';
import { useRouter } from 'next/navigation';
import { Home_Link, Offers_Link, Collections_Link } from 'routers/RouterLinks';

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

function HeaderNavMobile(props: IProps) {
  const router = useRouter();
  return (
    <div className="sticky-top z-[998] flex w-full space-x-2 bg-[#0f0f0f] p-3">
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
                  ? 'bg-[#202020] text-[#ffffff] hover:bg-[#202020]'
                  : 'hove:bg-transparent bg-transparent text-[#ffffff75]'
              } button-text-lower cursor-default rounded-full border-[2px] border-solid border-[#1f1f1f] px-4 py-[6px] text-[12px] font-normal transition-all duration-300 hover:text-[#ffffff]`}
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
