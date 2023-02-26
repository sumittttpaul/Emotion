import { NextPage } from 'next';
import { GetServerSideProps } from 'next';
import { getSelectorsByUserAgent } from 'react-device-detect';
import { useDeviceState } from '../providers/state/DeviceState';

interface IProps {}

interface ServerProps {
  isMobile: boolean;
}

type CombinedProps = IProps & ServerProps;

/**
 * @Page_Template
 * @Temporary_Purpose
 **/

const PageTemplate: NextPage<CombinedProps> = (props) => {
  const { setDeviceState } = useDeviceState();
  setDeviceState({ isMobile: props.isMobile });

  // Return your Stuff
  return null;
};

export const getServerSideProps: GetServerSideProps<ServerProps> = async (
  context
) => {
  const { req } = context;
  const userAgent = req.headers['user-agent'] ?? '';
  const { isMobile } = getSelectorsByUserAgent(userAgent);
  return {
    props: {
      isMobile,
    },
  };
};

export default PageTemplate;
