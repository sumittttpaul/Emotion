import { NextPage } from 'next';
import { NoAccessToIndexPages } from '../hoc/ProtectedRoutes';

/**
 * @Null_Page
 **/
const Home: NextPage = () => {
  return null;
};

export default Home;

export const getServerSideProps = NoAccessToIndexPages(() => {
  return {
    props: {},
  };
});
