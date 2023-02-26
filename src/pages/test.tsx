import { GetServerSideProps, NextPage } from 'next';
import { getSelectorsByUserAgent } from 'react-device-detect';
import { useTypedSelector } from '../redux/useTypeSelector';

interface IProps {
  userAgent: string;
  isMobile: boolean;
}

/**
 * @Test_Page
 **/

const TestPage: NextPage<IProps> = (props) => {
  const { isMobile } = useTypedSelector((state) => state.Device);

  if (isMobile) return <h1>Mobile : {props.userAgent}</h1>;
  return <h1>Desktop : {props.userAgent}</h1>;
};

export const getServerSideProps: GetServerSideProps<IProps> = async (
  context
) => {
  const { req } = context;
  const userAgent = req.headers['user-agent'] ?? '';
  const { isMobile } = getSelectorsByUserAgent(userAgent);
  return {
    props: {
      userAgent,
      isMobile
    },
  };
};

export default TestPage;
