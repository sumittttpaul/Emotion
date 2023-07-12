import { Link } from '@mui/material';

interface IProps {
  label: string;
  to: string;
  className?: string;
}

function FooterBottomLinks(props: IProps) {
  return (
    <Link
      href={props.to}
      underline="hover"
      className={`${
        props.className
      } ${'text-[11.5px] font-[300] underline-offset-2 whitespace-nowrap flex text-white opacity-80'}`}
    >
      {props.label}
    </Link>
  );
}

export default FooterBottomLinks;
