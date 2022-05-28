import React, {
  createContext,
  useState,
  useContext,
  Dispatch,
  SetStateAction,
} from 'react';

export interface ColorStateInterface {
  bgColor: string;
}

const ColorStateContext = createContext({
  ColorState: {} as Partial<ColorStateInterface>,
  setColorState: {} as Dispatch<SetStateAction<Partial<ColorStateInterface>>>,
});

const ColorState = ({
  children,
  value = {} as ColorStateInterface,
}: {
  children: React.ReactNode;
  value?: Partial<ColorStateInterface>;
}) => {
  const [ColorState, setColorState] = useState(value);
  return (
    <ColorStateContext.Provider value={{ ColorState, setColorState }}>
      {children}
    </ColorStateContext.Provider>
  );
};

const useColorState = () => {
  const context = useContext(ColorStateContext);
  if (!context) {
    throw new Error('useColorState must be used within a ColorStateContext');
  }
  return context;
};

export { ColorState, useColorState };
