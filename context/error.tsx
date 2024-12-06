"use client";

import * as React from "react";

type Errors = {
  error: (error: any) => void;
};

const ErrorContext = React.createContext<Errors | null>(null);

export function ErrorProvider({ children }: { children: React.ReactNode }) {
  const [error, setError] = React.useState<any>(null);

  const errors: Errors = {
    error: setError,
  };

  React.useEffect(() => {
    if (error?.response?.status === 401) {
      console.error(error);
    }
  }, [error]);

  return (
    <ErrorContext.Provider value={errors}>{children}</ErrorContext.Provider>
  );
}

export function useError() {
  const context = React.useContext(ErrorContext);
  if (!context) {
    throw new Error("useError must be used within an ErrorProvider");
  }
  return context;
}
