export type UserDataType = {
  id?: string;
  FirstName: string;
  LastName: string;
  Email: string;
  PhoneNumber: string;
  DOB: string;
  Gender: string;
};

export interface CreateUserDataProps {
  Id: string;
  FirstName: string;
  LastName: string;
  Email: string;
  PhoneNumber: string;
  DOB: string;
  Gender: string;
  Loading: (value: boolean) => void;
  ToastShow: (value: boolean) => void;
  ToastMessage: (value: string) => void;
  ToastType: (value: string) => void;
}

export interface UpdateUserDataProps {
  Id: string;
  FirstName: string;
  LastName: string;
  Email: string;
  PhoneNumber: string;
  DOB: string;
  Gender: string;
  Loading: (value: boolean) => void;
  ToastShow: (value: boolean) => void;
  ToastMessage: (value: string) => void;
  ToastType: (value: string) => void;
}
