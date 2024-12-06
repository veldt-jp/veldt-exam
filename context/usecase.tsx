"use client";

import * as React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { AccountGateway } from "@/core/account/gateway";
import { AccountUsecase } from "@/core/account/usecase";

import { ErrorProvider, useError } from "@/context/error";

type UseCases = {
  accountUsecase: AccountUsecase;
};

const UsecaseContext = React.createContext<UseCases | null>(null);

export function UsecaseProvider({ children }: { children: React.ReactNode }) {
  const accountRepo = new AccountGateway();
  const { error } = useError();

  const accountUsecase = new AccountUsecase(accountRepo, error);
  const usecases: UseCases = {
    accountUsecase,
  };

  return (
    <UsecaseContext.Provider value={usecases}>
      {children}
    </UsecaseContext.Provider>
  );
}

export function Provider({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ErrorProvider>
        <UsecaseProvider>{children}</UsecaseProvider>
      </ErrorProvider>
    </QueryClientProvider>
  );
}

export function useUsecases() {
  const context = React.useContext(UsecaseContext);
  if (!context) {
    throw new Error("useUsecases must be used within a Provider");
  }
  return context;
}
