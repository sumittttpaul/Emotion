import { GetServerSideProps } from 'next';
import { setDevice } from '../redux/reducers/DeviceReducer';
import { wrapper } from '../redux/store';
import { parse } from 'next-useragent';

type ServerProps = {
  isMobile: boolean;
};

export const getServerSideProps: GetServerSideProps<ServerProps> =
  wrapper.getServerSideProps((store) => async (context) => {
    const { req } = context;
    const userAgent = req.headers['user-agent'] ?? '';
    const isMobile = parse(userAgent).isMobile;
    store.dispatch(setDevice(isMobile));
    return {
      props: {
        isMobile,
      },
    };
  });
