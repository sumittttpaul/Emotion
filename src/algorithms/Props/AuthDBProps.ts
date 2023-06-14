export type UserDataType = {
  FullName?: string;
  EmailAddress?: string;
  PhoneNumber?: string;
  DateOfBirth?: string;
  Gender?: string;
};

export interface CreateUserDataProps {
  UserId: string;
  FullName: string;
  EmailAddress: string;
  PhoneNumber: string;
  DateOfBirth: string;
  Gender: string;
  Next: () => void;
  Loading: (value: boolean) => void;
  ShowToast: (
    title: string,
    description: string,
    type: string,
    show: boolean
  ) => void;
}

export interface UpdateUserDataProps {
  UserId: string;
  FullName: string;
  EmailAddress: string;
  PhoneNumber: string;
  DateOfBirth: string;
  Gender: string;
  Next: () => void;
  Loading: (value: boolean) => void;
  ShowToast: (
    title: string,
    description: string,
    type: string,
    show: boolean
  ) => void;
}
