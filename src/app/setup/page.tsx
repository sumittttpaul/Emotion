import { verfyIdToken } from 'authentication/adminApp';
import { useUserProfile } from 'hooks/Hooks.UserProfile';
import { cookies } from 'next/headers';
import SetupScreenMain from 'components/ui/SetupUI/Setup.Screen.Main';
import SetupScreenTitle from 'components/ui/SetupUI/Setup.Screen.Title';
import SetupScreenContent from 'components/ui/SetupUI/Setup.Screen.Content';

async function Setup() {
  // const cookieStore = cookies();
  // const token = cookieStore.get('token');
  // const user = token ? await verfyIdToken(token.value) : undefined;
  // const uid = user ? user.uid : undefined;
  const { userProfile, error } = await useUserProfile(undefined); // eslint-disable-line react-hooks/rules-of-hooks
  
  return (
    <SetupScreenMain
      userProfileError={error}
      MainClassName="h-full md:h-[652px]"
    >
      <SetupScreenTitle />
      <SetupScreenContent
        userProfile={userProfile}
        AnimationDivClassName="h-[350px]"
        ContentClassName="h-[300px]"
        Animation={{
          Initial: { x: 50, opacity: 0 },
          Final: { x: 0, opacity: 1 },
          Transition: { type: 'tween' },
        }}
      />
    </SetupScreenMain>
  );
}

export default Setup;
