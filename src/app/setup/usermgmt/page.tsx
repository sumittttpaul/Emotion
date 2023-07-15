import { FetchUserProfile } from 'hooks/global/Hooks.FetchUserProfile';
import { verfyIdToken } from 'authentication/adminApp';
import { cookies } from 'next/headers';
import UserMgmtInterface from 'interfaces/UserMgmt/UserMgmt.Interface';

async function UserMgmt() {
  const cookieStore = cookies();
  const token = cookieStore.get('token');
  const user = token ? await verfyIdToken(token.value) : undefined;
  const uid = user ? user.uid : undefined;
  const { userProfile } = await FetchUserProfile(uid); // eslint-disable-line react-hooks/rules-of-hooks

  return (
    <UserMgmtInterface
      userProfile={userProfile}
      MainClassName="h-full md:h-[652px]"
      ParentDivClassName="h-[350px]"
      ContentClassName="h-[300px]"
      Animation={{
        Initial: { x: 50, opacity: 0 },
        Final: { x: 0, opacity: 1 },
        Transition: { type: 'tween' },
      }}
    />
  );
}

export default UserMgmt;
