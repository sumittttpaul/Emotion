import React, {
  createContext,
  useState,
  useContext,
  Dispatch,
  SetStateAction,
  useEffect,
} from 'react';
import Router from 'next/router';

export interface LoaderStateInterface {
  show: boolean;
}

const LoaderStateContext = createContext({
  Loader: {} as Partial<LoaderStateInterface>,
  setLoader: {} as Dispatch<SetStateAction<Partial<LoaderStateInterface>>>,
});

const LoaderState = ({
  children,
  value = {} as LoaderStateInterface,
}: {
  children: React.ReactNode;
  value?: Partial<LoaderStateInterface>;
}) => {
  const router = Router;
  const [Loader, setLoader] = useState(value);
  useEffect(() => {
    const ShowLoading = () => {
      setLoader({ show: true });
    };
    const HideLoading = () => {
      setLoader({ show: false });
    };
    if (Loader.show === true) {
      router.events.on('routeChangeStart', ShowLoading);
      router.events.on('routeChangeComplete', HideLoading);
      router.events.on('routeChangeError', HideLoading);
      return () => {
        router.events.off('routeChangeStart', ShowLoading);
        router.events.off('routeChangeComplete', HideLoading);
        router.events.off('routeChangeError', HideLoading);
      };
    }
  }, [setLoader, Loader, router]);
  return (
    <LoaderStateContext.Provider value={{ Loader, setLoader }}>
      {children}
    </LoaderStateContext.Provider>
  );
};

const useLoaderState = () => {
  const context = useContext(LoaderStateContext);
  if (!context) {
    throw new Error('useLoaderState must be used within a LoaderStateContext');
  }
  return context;
};

export { LoaderState, useLoaderState };
