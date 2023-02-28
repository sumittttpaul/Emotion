import { NextPage } from 'next';
import { NoAccessToNullPages } from '../../hoc/ProtectedRoutes';

/**
 * @Null_Page
 **/
const Auth: NextPage = () => {
  return null;
};

export const getServerSideProps = NoAccessToNullPages(() => {
  return {
    props: {},
  };
});

export default Auth;
