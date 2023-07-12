import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Setup',
  description: 'Setup your Emotion Account',
  themeColor: '#202020',
};

function SetupLayout({ children }: ChildrenType) {
  return (
    <>
      <div className="md:bg-[#0f0f0f] flex md:p-[32px] items-start md:items-center justify-center h-full md:h-screen w-screen overflow-hidden">
        <div className="relative bg-[#202020] md:rounded-xl w-full md:max-w-[1040px] flex items-center justify-center overflow-hidden">
          {children}
        </div>
      </div>
      <div
        id="verify-sign-in-recaptcha"
        className="h-full sm:h-screen absolute top-0 flex items-center justify-center"
      />
    </>
  );
}

export default SetupLayout;
