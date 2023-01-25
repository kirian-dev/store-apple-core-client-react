import * as React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import { Layout } from '@/common/components/layout';
import { store } from '../store';

const ErrorFallback = () => {
  return (
    <div
      className="text-red-500 w-screen h-screen flex flex-col justify-center items-center"
      role="alert"
    >
      <h2 className="text-3xl font-semibold mb-5">Ooooooopppps, something went wrong :( </h2>
      <button
        className="p-3 shadow-lg border-red-300  border-1 flex justify-center items-center hover:scale-105"
        onClick={() => window.location.assign(window.location.origin)}
      >
        Reload page
      </button>
    </div>
  );
};

interface MainProviderProps {
  children: React.ReactNode;
}

export const MainProvider = ({ children }: MainProviderProps) => {
  return (
    <React.Suspense
      fallback={
        <div className="flex items-center justify-center w-screen h-screen">Loading....</div>
      }
    >
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <HelmetProvider>
          <Provider store={store}>
            <Router>{children}</Router>
          </Provider>
        </HelmetProvider>
      </ErrorBoundary>
    </React.Suspense>
  );
};
