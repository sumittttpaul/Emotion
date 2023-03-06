import { NextPage } from 'next';
import { useReduxSelector } from '../redux/useReduxSelector';
import { getServerSideProps } from '../algorithms/DeviceDetectSSR';

interface IProps {
  userAgent: string;
}

/**
 * @Test_Page
 **/

const TestPage: NextPage<IProps> = (props) => {
  const { isMobile } = useReduxSelector((state) => state.Device);

  if (isMobile)
    return (
      <h1 className="flex w-full p-10 text-4xl font-bold justify-center">
        Mobile
      </h1>
    );

  return (
    <h1 className="flex w-full p-10 text-4xl font-bold justify-center">
      Desktop
    </h1>
  );
};

// export { getServerSideProps };

export default TestPage;
