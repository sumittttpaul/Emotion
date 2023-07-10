import { NextPage } from 'next';
import { NoAccessToNullPages } from '../../utils/ProtectedRoutes';

/**
 * @Null_Page
 **/
const Account: NextPage = () => {
  return null;
};

export const getServerSideProps = NoAccessToNullPages();

export default Account;
