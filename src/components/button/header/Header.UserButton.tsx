import Image from 'next/image';
import Router from 'next/router';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import { Button, CircularProgress } from '@mui/material';
import { Setup_Link } from 'routers/RouterLinks';
import { HeaderUserButtonMenuProps } from './Header.UserButton.Menu';
import { SignOut } from 'functions/AuthAlgorithms';
import { LoaderHook } from 'hooks/Hooks.Loader';
import useClientAuth, { ClientUser } from 'authentication/useClientAuth';
import TooltipDark from 'components/tooltip/TooltipDark';

const HeaderUserButtonMenu = dynamic<HeaderUserButtonMenuProps>(
  () => import('./Header.UserButton.Menu'),
  { ssr: false }
);

function HeaderUserButton() {
  const { FirebaseUser, FirebaseLoading } = useClientAuth();
  const { setLoader } = LoaderHook();

  if (FirebaseLoading)
    return (
      <Container>
        <UserLoading />
      </Container>
    );

  if (FirebaseUser)
    return (
      <Container>
        <UserButton user={FirebaseUser} />
      </Container>
    );

  return (
    <Container>
      <LoginButton
        onClick={() => {
          setLoader(true);
          Router.push(Setup_Link);
        }}
      />
    </Container>
  );
}

interface LoginButtonProps {
  onClick: () => void;
}

interface ContainerProps {
  children: React.ReactNode;
}
interface UserButtonProps {
  user: ClientUser;
}

function LoginButton(props: LoginButtonProps) {
  return (
    <TooltipDark
      arrow
      placement="bottom"
      title={<h6 className="font-[400]">Account</h6>}
    >
      <Button
        aria-label="user-login-button"
        disableFocusRipple
        onClick={props.onClick}
        className="flex items-center justify-center button-text-lower h-full bg-transparent hover:bg-[#202020]"
        sx={{
          minWidth: 47,
          '.MuiTouchRipple-child': {
            backgroundColor: '#ffffff50 !important',
          },
        }}
      >
        <Image
          height={20}
          width={20}
          className="opacity-70"
          src="/icons/user-fill.svg"
          alt=""
        />
      </Button>
    </TooltipDark>
  );
}

const UserLoading = () => {
  return (
    <div className="flex items-center justify-center button-text-lower h-full min-w-[47px] bg-transparent">
      <CircularProgress className="text-white p-2.5" thickness={4} />
    </div>
  );
};

function UserButton(props: UserButtonProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const { setLoader } = LoaderHook();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const SignOutUser = () => {
    SignOut({ Next: handleClose });
  };

  return (
    <>
      <TooltipDark
        arrow
        placement="bottom"
        title={<h6 className="font-[400]">Account</h6>}
      >
        <Button
          aria-label="user-popup-button"
          disableFocusRipple
          onClick={handleClick}
          className="flex items-center justify-center button-text-lower h-full bg-transparent hover:bg-[#202020]"
          sx={{
            minWidth: 47,
            '.MuiTouchRipple-child': {
              backgroundColor: '#ffffff50 !important',
            },
          }}
        >
          {props.user?.photoURL ? (
            <Image
              height={35}
              width={35}
              className="rounded-[50%]"
              src={
                props.user.photoURL
                  ? props.user.photoURL
                  : '/images/loader/dark-circle.png'
              }
              alt=""
            />
          ) : (
            <Image
              height={20}
              width={20}
              className="opacity-70"
              src="/icons/user-fill.svg"
              alt=""
            />
          )}
        </Button>
      </TooltipDark>
      <HeaderUserButtonMenu
        anchorEl={anchorEl}
        open={open}
        user={props.user}
        handleClose={handleClose}
        SignOutUser={SignOutUser}
        LoadingScreen={(value) => setLoader(value)}
      />
    </>
  );
}

function Container(props: ContainerProps) {
  return (
    <div className="flex relative box-border h-[47px] min-h-[47px] rounded-lg overflow-hidden">
      {props.children}
    </div>
  );
}

export default HeaderUserButton;
