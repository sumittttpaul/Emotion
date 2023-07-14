import { FetchUserProfile } from 'hooks/global/Hooks.FetchUserProfile';
import ClientDatabaseTest from 'components/test/ClientDatabaseTest';

async function Page() {
  const { userProfile, error } = await FetchUserProfile('1234567890'); // eslint-disable-line react-hooks/rules-of-hooks
  return (
    <div
      id="App_Directory_Custom_Page"
      className="relative flex h-screen w-full flex-col items-center justify-center space-y-10 text-center text-white"
    >
      <ClientDatabaseTest User={userProfile} Error={error} />
    </div>
  );
}

export default Page;
