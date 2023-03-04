// User auth data
export const FirstNameEncrytionKey = (UID: string) => 'user-' + `${UID}` + '-firstname';
export const LastNameEncrytionKey = (UID: string) => 'user-' + `${UID}` + '-lastname';
export const EmailEncrytionKey = (UID: string) => 'user-' + `${UID}` + '-email';
export const PhoneEncrytionKey = (UID: string) => 'user-' + `${UID}` + '-phonenumber';
export const DOBEncrytionKey = (UID: string) => 'user-' + `${UID}` + '-dateofbirth';
export const GenderEncrytionKey = (UID: string) => 'user-' + `${UID}` + '-gender';
