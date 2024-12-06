"use client";

import * as React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { MockGateway } from "@/core/mock/gateway";
import { MockUsecase } from "@/core/mock/usecase";

import { ErrorProvider, useError } from "@/context/error";

type UseCases = {
  mockUsecase: MockUsecase;
};

const UsecaseContext = React.createContext<UseCases | null>(null);

export function UsecaseProvider({ children }: { children: React.ReactNode }) {
  const mockRepo = new MockGateway();
  const { error } = useError();

  const mockUsecase = new MockUsecase(mockRepo, error);
  const usecases: UseCases = {
    mockUsecase,
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
