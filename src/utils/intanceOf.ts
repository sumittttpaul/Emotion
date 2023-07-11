export function instanceOfError(data: IError | IUserProfile): data is IError {
  return 'name' && 'message' in data;
}

export function instanceOfUserProfile(
  data: IError | IUserProfile
): data is IUserProfile {
  return '_data' && '_uid' in data;
}
