import React, {
  createContext,
  useState,
  useContext,
  Dispatch,
  SetStateAction,
} from 'react';

export interface SearchButtonStateInterface {
  state: string;
}

const SearchButtonStateContext = createContext({
  SearchButtonState: {} as Partial<SearchButtonStateInterface>,
  setSearchButtonState: {} as Dispatch<
    SetStateAction<Partial<SearchButtonStateInterface>>
  >,
});

const SearchButtonState = ({
  children,
  value = {} as SearchButtonStateInterface,
}: {
  children: React.ReactNode;
  value?: Partial<SearchButtonStateInterface>;
}) => {
  const [SearchButtonState, setSearchButtonState] = useState(value);
  return (
    <SearchButtonStateContext.Provider
      value={{ SearchButtonState, setSearchButtonState }}
    >
      {children}
    </SearchButtonStateContext.Provider>
  );
};

const useSearchButtonState = () => {
  const context = useContext(SearchButtonStateContext);
  if (!context) {
    throw new Error(
      'useSearchButtonState must be used within a SearchButtonStateContext'
    );
  }
  return context;
};

export { SearchButtonState, useSearchButtonState };
