import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <article className="px-6 pt-8 pb-20 bg-neutral-100">
      <Skeleton className="h-10 w-60 mb-6" />
      <Skeleton className="h-6 w-40" />
    </article>
  );
}
