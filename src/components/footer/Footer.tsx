import { useRouter } from 'next/navigation';
import { Home_Link } from 'routers/RouterLinks';
import { FooterLogo } from 'components/logo/CompanyLogo';
import { LoaderHook } from 'hooks/Hooks.Loader';
import { HomePageHook } from 'hooks/Hooks.HomePage';
import FooterBottom from './assets/FooterBottom';

function Footer() {
  const { setLoader } = LoaderHook();
  const { setHomePage } = HomePageHook();
  const router = useRouter();
  return (
    <div className="w-full self-end pr-3">
      <div className="relative box-border w-full rounded-3xl bg-transparent px-3 pb-5 sm:px-8">
        <div className="flex flex-col items-center justify-center">
          <FooterLogo
            onValueChange={(value) => {
              setHomePage(value);
              setLoader(true);
              router.push(Home_Link);
            }}
          />
          <h6 className="flex whitespace-normal py-2 text-center text-[11.5px] font-[300] leading-[22px] text-white opacity-80 lg:max-w-[70%] xl:max-w-[60%] 2xl:max-w-[55%]">
            Founded in 2023, Emotion is a outfit fashion brand that makes
            creative, distinctive fashion for the trendy, contemporary Indian.
            Emotion-outfit was created on the principle of creating impact
            through innovation, honesty and thoughtfulness. We like to
            experiment freely, which allows us to balance creativity and
            relatability, and our innovative designs. Our range of products is
            always fresh and up-to-date. Discover the new you with
            Emotion-outfit.
          </h6>
          <h6 className="flex whitespace-normal py-2 text-[11.5px] font-[300] text-white">
            Discover the new you with Emotion-outfit.
          </h6>
        </div>
        <FooterBottom />
        {/* <ScrollToTopButton /> */}
      </div>
    </div>
  );
}

export default Footer;
