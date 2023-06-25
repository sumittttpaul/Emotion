import React, {
  Dispatch,
  FC,
  Fragment,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import Image from 'next/image';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import SwiperCore from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { AnimatePresence, LazyMotion, domAnimation } from 'framer-motion';
import { useColorState } from '../../../providers/state/ColorState';
import { AuthLoadingProps } from '../../loader/Auth/AuthLoading';
import { ToastDarkProps } from '../../toast/ToastDark';
import { AuthTransitionContainer } from './AuthTransitionContainer';
import { AuthType } from '../../ui/AuthUI/AuthType';
import { FinishAuthUIProps } from '../../ui/AuthUI/Finish/FinishAuthUI';
import { SkipDialogAuthUIProps } from '../../ui/AuthUI/Dialog/SkipDialogAuthUI';
import { AuthSkeleton } from '../../loader/Auth/AuthSkeleton';

const AuthLoading = dynamic<AuthLoadingProps>(() =>
  import('../../loader/Auth/AuthLoading').then((x) => x.AuthLoading)
);

const ToastDark = dynamic<ToastDarkProps>(() =>
  import('../../toast/ToastDark').then((x) => x.ToastDark)
);

const FinishAuthUI = dynamic<FinishAuthUIProps>(() =>
  import('../../ui/AuthUI/Finish/FinishAuthUI').then((x) => x.FinishAuthUI)
);

const SkipDialogAuthUI = dynamic<SkipDialogAuthUIProps>(() =>
  import('../../ui/AuthUI/Dialog/SkipDialogAuthUI').then(
    (x) => x.SkipDialogAuthUI
  )
);

interface IProps {
  children: ReactNode;
  ClassName: string;
  InitialSlide: number;
  Loading: boolean;
  InformationCheckLoading: boolean;
  AuthScreen: AuthType;
  Finish: boolean;
  SkipDialogOpen: boolean;
  SkipDialogClose: () => void;
  Toast: {
    Open: boolean;
    onClose: Dispatch<SetStateAction<boolean>>;
    MessageTitle: string;
    MessageDescription: string;
    Type: string;
  };
}

const Illustrations = [
  {
    Alt: 'login-phone',
    Image: '/vectors/login-register-phone.svg',
  },
  {
    Alt: 'login-email',
    Image: '/vectors/login-register-email.svg',
  },
  {
    Alt: 'login-others',
    Image: '/vectors/login-others.svg',
  },
  {
    Alt: 'login-otp',
    Image: '/vectors/login-register-otp-password.svg',
  },
  {
    Alt: 'login-password',
    Image: '/vectors/login-register-otp-password.svg',
  },
  {
    Alt: 'login-forgot-password',
    Image: '/vectors/login-register-otp-password.svg',
  },
  {
    Alt: 'register-name',
    Image: '/vectors/register-name.svg',
  },
  {
    Alt: 'register-phone',
    Image: '/vectors/login-register-phone.svg',
  },
  {
    Alt: 'register-otp',
    Image: '/vectors/login-register-otp-password.svg',
  },
  {
    Alt: 'register-email',
    Image: '/vectors/login-register-email.svg',
  },
  {
    Alt: 'register-password',
    Image: '/vectors/login-register-otp-password.svg',
  },
  {
    Alt: 'register-verify-email',
    Image: '/vectors/register-verify-email.svg',
  },
  {
    Alt: 'register-profile-picture',
    Image: '/vectors/register-profile-picture.svg',
  },
  {
    Alt: 'register-date-of-birth',
    Image: '/vectors/register-date-of-birth.svg',
  },
  {
    Alt: 'register-gender',
    Image: '/vectors/register-gender.svg',
  },
];

/**
 * @author
 * @function @AuthOuterContainer
 **/

const AuthBodyContainer: FC<IProps> = (props) => {
  const { setColorState } = useColorState();
  useEffect(() => {
    setColorState({ bgColor: '#202020' });
    document.body.style.backgroundColor = '#202020';
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const [swiperInstance, setSwiperInstance] = useState<SwiperCore>();
  useEffect(() => {
    if (swiperInstance && props.InitialSlide === 0)
      props.Finish && swiperInstance.slideNext();
  }, [props.Finish, props.InitialSlide, swiperInstance]);

  return (
    <Fragment>
      <Head>
        <meta name="theme-color" content="#202020" />
      </Head>
      <LazyMotion features={domAnimation} strict>
        <div className="bg-[#0f0f0f] flex md:p-[32px] items-center justify-center h-full md:h-screen w-screen main-auth overflow-hidden">
          <div className="relative bg-[#202020] md:rounded-xl w-full md:max-w-[1040px] flex items-center justify-center overflow-hidden">
            {props.InformationCheckLoading ? (
              <AuthSkeleton ClassName={props.ClassName} />
            ) : (
              <Swiper
                onSwiper={(e) => setSwiperInstance(e)}
                slidesPerView={1}
                spaceBetween={0}
                initialSlide={props.InitialSlide}
                draggable={false}
                allowTouchMove={false}
                className={`${props.ClassName} flex w-full relative`}
              >
                <SwiperSlide className="relative items-center justify-center h-full w-full flex flex-col md:flex-row">
                  <div className="p-14 ml-14 relative hidden md:flex w-full h-full justify-center items-center">
                    <AnimatePresence mode="sync" initial={true}>
                      {Illustrations.map((value, idx) => (
                        <Fragment key={idx}>
                          {props.AuthScreen === value.Alt && (
                            <AuthTransitionContainer>
                              <Image
                                priority
                                height={370}
                                width={370}
                                src={value.Image}
                                alt={value.Alt}
                              />
                            </AuthTransitionContainer>
                          )}
                        </Fragment>
                      ))}
                    </AnimatePresence>
                  </div>
                  <div className="md:p-9 relative w-full md:min-w-[400px] flex items-center justify-center overflow-hidden">
                    {props.children}
                  </div>
                </SwiperSlide>
                {props.Finish && (
                  <SwiperSlide className="relative h-full w-full flex">
                    <FinishAuthUI ClassName={props.ClassName} />
                  </SwiperSlide>
                )}
              </Swiper>
            )}
            {props.Loading && <AuthLoading />}
          </div>
        </div>
        <div
          id="verify-sign-in-recaptcha"
          className="h-full sm:h-screen absolute flex text-center items-center justify-center"
        />
        <SkipDialogAuthUI
          Open={props.SkipDialogOpen}
          onClose={props.SkipDialogClose}
        />
        <ToastDark
          Toast={props.Toast}
          SlideDirection="down"
          Vertical="top"
          Horizontal="center"
          HideDuration={10}
        />
      </LazyMotion>
    </Fragment>
  );
};

export default AuthBodyContainer;
