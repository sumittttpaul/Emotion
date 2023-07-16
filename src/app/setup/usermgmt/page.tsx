import { FetchUserProfile } from 'hooks/global/Hooks.FetchUserProfile';
import { cookies } from 'next/headers';
import UserMgmtInterface from 'interfaces/UserMgmt/UserMgmt.Interface';
import UseServerAuth from 'authentication/UseServerAuth';

async function UserMgmt() {
  const cookieStore = cookies();
  const token = cookieStore.get('token');
  const FirebaseUser = await UseServerAuth(token?.value);
  const { userProfile } = await FetchUserProfile(FirebaseUser?.uid);

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
