import React, {
  createContext,
  useState,
  useContext,
  Dispatch,
  SetStateAction,
} from 'react';

export interface OTPStateInterface {
  show: boolean;
}

const OTPStateContext = createContext({
  OTPDialog: {} as Partial<OTPStateInterface>,
  setOTPDialog: {} as Dispatch<SetStateAction<Partial<OTPStateInterface>>>,
});

const OTPState = ({
  children,
  value = {} as OTPStateInterface,
}: {
  children: React.ReactNode;
  value?: Partial<OTPStateInterface>;
}) => {
  const [OTPDialog, setOTPDialog] = useState(value);
  return (
    <OTPStateContext.Provider value={{ OTPDialog, setOTPDialog }}>
      {children}
    </OTPStateContext.Provider>
  );
};

const useOTPState = () => {
  const context = useContext(OTPStateContext);
  if (!context) {
    throw new Error('useOTPState must be used within a OTPStateContext');
  }
  return context;
};

export { OTPState, useOTPState };
