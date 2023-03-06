import React, {
  createContext,
  useState,
  useContext,
  Dispatch,
  SetStateAction,
} from 'react';

export interface HomePageStateInterface {
  Page: string;
}

const HomePageStateContext = createContext({
  HomePageState: {} as Partial<HomePageStateInterface>,
  setHomePageState: {} as Dispatch<
    SetStateAction<Partial<HomePageStateInterface>>
  >,
});

const HomePageState = ({
  children,
  value = {} as HomePageStateInterface,
}: {
  children: React.ReactNode;
  value?: Partial<HomePageStateInterface>;
}) => {
  const [HomePageState, setHomePageState] = useState(value);
  return (
    <HomePageStateContext.Provider value={{ HomePageState, setHomePageState }}>
      {children}
    </HomePageStateContext.Provider>
  );
};

const useHomePageState = () => {
  const context = useContext(HomePageStateContext);
  if (!context) {
    throw new Error(
      'useHomePageState must be used within a HomePageStateContext'
    );
  }
  return context;
};

export { HomePageState, useHomePageState };
