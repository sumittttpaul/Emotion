import { NextPage } from 'next';
import { NoAccessToNullPages } from '../../hoc/ProtectedRoutes';

/**
 * @Null_Page
 **/
const Auth: NextPage = () => {
  return null;
};

export default Auth;

export const getServerSideProps = NoAccessToNullPages(() => {
  return {
    props: {},
  };
});
