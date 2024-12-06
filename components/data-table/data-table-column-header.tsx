import { Column } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { cn } from "@/libs/utils";

interface DataTableColumnHeaderProps<TData, TValue>
  extends React.HTMLAttributes<HTMLDivElement> {
  column: Column<TData, TValue>;
  title: string;
}

export function DataTableColumnHeader<TData, TValue>({
  column,
  title,
  className,
}: DataTableColumnHeaderProps<TData, TValue>) {
  if (!column.getCanSort()) {
    return <div className={cn(className)}>{title}</div>;
  }

  return (
    <div className={cn("flex items-center space-x-2", className)}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="headless"
            size="headless"
            className="flex flex-row p-0 gap-x-2 items-center justify-center text-xs font-medium text-gray-500 dark:text-white bg-transparent hover:bg-transparent"
          >
            {column.getIsSorted() === "desc" ? (
              <Icons.SortDescending className="h-4 w-4" />
            ) : column.getIsSorted() === "asc" ? (
              <Icons.SortAscending className="h-4 w-4" />
            ) : (
              <Icons.AlignLeft className="h-4 w-4" />
            )}
            <span>{title}</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start">
          <DropdownMenuItem
            className="flex flex-row items-center gap-2"
            onClick={() => column.toggleSorting(false)}
          >
            <Icons.SortAscending className="h-4 w-4" />
            Asc
          </DropdownMenuItem>
          <DropdownMenuItem
            className="flex flex-row items-center gap-2"
            onClick={() => column.toggleSorting(true)}
          >
            <Icons.SortDescending className="h-4 w-4" />
            Desc
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
