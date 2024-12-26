import { FetchUserProfile } from 'databases/helpers/Helper.FetchUserProfile';
import UserMgmtInterface from 'interfaces/UserMgmt/UserMgmt.Interface';
import UseServerAuth from 'authentication/UseServerAuth';

async function UserMgmt() {
  const FirebaseUser = await UseServerAuth();
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
