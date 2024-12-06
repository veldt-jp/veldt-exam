"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Skeleton } from "@/components/ui/skeleton";

import { cn } from "@/libs/utils";

export function DataTableSkelton() {
  return (
    <div className="flex flex-col w-full gap-4">
      <div className="flex flex-col w-full pb-5 rounded-lg overflow-hidden ring-1 ring-black/20 dark:ring-white/20">
        {Array.from({ length: 11 }).map((_, index) => (
          <div
            key={index}
            className={cn(
              index === 0
                ? "border-b border-black/20 dark:border-white/20"
                : "",
              "flex flex-row h-12 px-2 items-center justify-between gap-2"
            )}
          >
            <div className="flex flex-row items-center justify-start gap-4">
              <Checkbox aria-label="Select all" className="m-2" />
              <Skeleton className="w-[300px] h-6" />
              <Skeleton className="w-[100px] h-6" />
            </div>
            <div className="flex flex-row items-center justify-start gap-4">
              <Skeleton className="w-[100px] h-6" />
              <Skeleton className="w-6 h-6 mr-6" />
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-row px-2 items-center justify-between">
        <Skeleton className="w-[200px] h-6" />
        <div className="flex flex-row gap-4 items-center">
          <Skeleton className="w-[100px] h-6" />
          <div className="flex flex-row gap-2 items-center">
            <Skeleton className="w-8 h-8" />
            <Skeleton className="w-8 h-8" />
            <Skeleton className="w-8 h-8" />
            <Skeleton className="w-8 h-8" />
          </div>
        </div>
      </div>
    </div>
  );
}
