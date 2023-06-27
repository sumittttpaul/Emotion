import { setDevice } from '../redux/reducers/DeviceReducer';
import { wrapper } from '../redux/ReduxStore';
import { GetServerSideProps } from 'next';
import { parse } from 'next-useragent';

type ServerProps = {
  isMobile: boolean;
};

export const getServerSideProps: GetServerSideProps<ServerProps> =
  wrapper.getServerSideProps((ReduxStore) => async (context) => {
    const { req } = context;
    const userAgent = req.headers['user-agent'] ?? '';
    const isMobile = parse(userAgent).isMobile;
    ReduxStore.dispatch(setDevice(isMobile));
    return {
      props: {
        isMobile,
      },
    };
  });
