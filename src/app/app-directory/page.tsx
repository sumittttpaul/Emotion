import { ClientButton } from 'components/test/ClientButton';
import { useUserProfile } from 'hooks/Hooks.UserProfile';

async function Page() {
  const { userProfile, error } = await useUserProfile('1234567890'); // eslint-disable-line react-hooks/rules-of-hooks
  return (
    <div
      id="App_Directory_Custom_Page"
      className="text-white relative space-y-10 flex flex-col h-screen w-full items-center justify-center text-center"
    >
      <ClientButton User={userProfile} Error={error} />
    </div>
  );
}

export default Page;
