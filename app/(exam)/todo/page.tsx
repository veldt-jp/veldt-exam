"use client";

import { useQuery } from "@tanstack/react-query";

import { Skeleton } from "@/components/ui/skeleton";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";

import { useUsecases } from "@/context/usecase";

export default function Page() {
  const { mockUsecase } = useUsecases();
  const { data, isPending, isError } = useQuery({
    queryKey: ["todo-def"],
    queryFn: () => mockUsecase.fetchToDoDef(),
    staleTime: Infinity,
    gcTime: Infinity,
  });

  if (isPending) {
    return (
      <div className="flex flex-col w-full max-w-2xl mx-auto space-y-2">
        <Skeleton className="h-12 w-full" />
        <Skeleton className="h-12 w-full" />
        <Skeleton className="h-12 w-full" />
      </div>
    );
  }

  if (isError) {
    return <p>Error: {isError}</p>;
  }

  if (!data || data.length === 0) {
    return <p>Data: Not Found</p>;
  }

  return (
    <div className="flex flex-col w-full max-w-2xl mx-auto space-y-2">
      {data.map((attr: any, index: number) => (
        <div
          className="flex flex-row items-center gap-x-3 justify-start w-full px-5 py-3 ring-inset rounded-xl bg-white"
          key={index}
        >
          <Checkbox />
          <p>{attr.title}</p>
          <Badge variant="outline">{attr.status}</Badge>
        </div>
      ))}
    </div>
  );
}
