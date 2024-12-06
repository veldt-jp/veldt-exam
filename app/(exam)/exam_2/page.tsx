"use client";

import { useQuery } from "@tanstack/react-query";

import { useUsecases } from "@/context/usecase";

export default function Page() {
  const { mockUsecase } = useUsecases();
  const { data, isPending, isError } = useQuery({
    queryKey: ["form-def"],
    queryFn: () => mockUsecase.fetchFormData(),
    staleTime: Infinity,
    gcTime: Infinity,
  });

  if (isPending) {
    return <p>Loading: {isPending}</p>;
  }

  if (isError) {
    return <p>Error: {isError}</p>;
  }

  if (!(data.length > 0)) {
    return <p>Data: Not Found</p>;
  }

  return (
    <div className="text-start">
      <p>{data}</p>
    </div>
  );
}
