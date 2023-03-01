import { GetServerSideProps, NextPage } from 'next';
import { getSelectorsByUserAgent } from 'react-device-detect';
import { setDevice } from '../redux/actions';
import store from '../redux/store';
import { useAppSelector } from '../redux/useAppSelector';

interface IProps {
  userAgent: string;
}

/**
 * @Test_Page
 **/

const TestPage: NextPage<IProps> = (props) => {
  // const { isMobile } = getSelectorsByUserAgent(props.userAgent);
  // store.dispatch(setDevice(isMobile));

  const { Device } = useAppSelector((state) => state);

  if (Device.isMobile)
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

export const getServerSideProps: GetServerSideProps<IProps> = async (
  context
) => {
  const { req } = context;
  const userAgent = req.headers['user-agent'] ?? '';
  return {
    props: {
      userAgent,
    },
  };
};

export default TestPage;
