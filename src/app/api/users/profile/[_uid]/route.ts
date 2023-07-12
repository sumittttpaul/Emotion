import { type NextRequest, NextResponse } from 'next/server';
import connectdatabase from 'databases/ConnectDB';
import userProfileDB from 'databases/schema/Schema.UserProfile';
import {
  DBErrorMessage,
  DataNullMessage,
  ServerErrorMessage,
} from 'databases/message/Message.UserProfile';
import { CatchError } from 'types/Error.Constructor';

// GET (get a user) : http://localhost:3000/api/users/profile/[_uid]
export async function GET(req: NextRequest, context: { params: ParamType }) {
  connectdatabase().catch(() => {
    return NextResponse.json(DBErrorMessage, ServerErrorMessage);
  });
  try {
    const _uid = context.params._uid;
    const _value = await userProfileDB.findOne({ _uid: _uid });
    if (!_value) return NextResponse.json(DataNullMessage, ServerErrorMessage);
    return NextResponse.json(_value as IUserProfile, { status: 200 });
  } catch (error) {
    return NextResponse.json(CatchError(error as IError), ServerErrorMessage);
  }
}
