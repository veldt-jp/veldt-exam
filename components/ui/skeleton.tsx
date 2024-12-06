import { cn } from "@/libs/utils";

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "animate-[pulse_1s_ease-in-out_infinite] rounded-md bg-black/20",
        className
      )}
      {...props}
    />
  );
}

export { Skeleton };
