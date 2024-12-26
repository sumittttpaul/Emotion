import { Metadata, Viewport } from 'next';

export const metadata: Metadata = {
  title: 'Setup your Emotion Account',
  description: 'Welcome to setup wizard of Emotion account | Emotion.store',
};

export const viewport: Viewport = {
  themeColor: '#0f0f0f',
};

function SetupLayout({ children }: ChildrenType) {
  return (
    <>
      <div className="box-border flex h-full w-screen items-start justify-center overflow-hidden md:h-screen md:items-center md:bg-[#0f0f0f] md:p-[32px]">
        <div className="md:Setup-DropShadow relative box-border flex h-full w-full items-center justify-center overflow-hidden bg-[#202020] md:h-[652px] md:max-w-[1040px] md:rounded-xl">
          {children}
        </div>
      </div>
      <div
        id="verify-sign-in-recaptcha"
        className="absolute top-0 flex h-full items-center justify-center sm:h-screen"
      />
    </>
  );
}

export default SetupLayout;
