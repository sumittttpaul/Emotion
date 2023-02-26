import { NextPage } from 'next';
import { NoAccessToIndexPages } from '../hoc/ProtectedRoutes';

/**
 * @Null_Page
 **/
const Home: NextPage = () => {
  return null;
};

export const getServerSideProps = NoAccessToIndexPages(() => {
  return {
    props: {},
  };
});

export default Home;
