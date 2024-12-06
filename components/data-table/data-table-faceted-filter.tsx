import { ForwardRefExoticComponent, RefAttributes, ComponentType } from "react";
import { Column } from "@tanstack/react-table";

import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Icons } from "@/components/icons";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { cn } from "@/libs/utils";

export interface DataTableFacetedFilterProps<TData, TValue> {
  column?: Column<TData, TValue>;
  title?: string;
  options: {
    label: string;
    value: string;
    icon?:
      | ComponentType<{ className?: string }>
      | ForwardRefExoticComponent<RefAttributes<SVGSVGElement>>;
  }[];
  className?: string;
}

export function DataTableFacetedFilter<TData, TValue>({
  column,
  title,
  options,
  className,
}: DataTableFacetedFilterProps<TData, TValue>) {
  const facets = column?.getFacetedUniqueValues();
  const selectedValues = new Set(column?.getFilterValue() as string[]);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          size="headless"
          variant="headless"
          className={cn(
            "flex flex-row items-center text-xs h-8 px-3 rounded-lg bg-black/5 dark:bg-white/5",
            className
          )}
        >
          <Icons.Filter className="h-4 w-4" />
          <p className="ml-2">{title}</p>
          {selectedValues?.size > 0 && (
            <>
              <Separator
                orientation="vertical"
                className="mx-2 h-[16px] w-[1px] bg-black/50 dark:bg-white/50"
              />
              <div className="flex space-x-1">
                {selectedValues.size > 2 ? (
                  <Badge
                    variant="headless"
                    className="rounded-sm px-1 font-normal border-none text-white bg-[#0195c5]"
                  >
                    {selectedValues.size} selected
                  </Badge>
                ) : (
                  options
                    .filter((option) => selectedValues.has(option.value))
                    .map((option) => (
                      <Badge
                        key={option.value}
                        variant="headless"
                        className="rounded-sm px-1 font-normal border-none text-white bg-[#0195c5]"
                      >
                        {option.label}
                      </Badge>
                    ))
                )}
              </div>
            </>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0" align="start">
        <Command>
          <CommandInput placeholder={"Search by..."} />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup>
              {options.map((option) => {
                const isSelected = selectedValues.has(option.value);
                return (
                  <CommandItem
                    key={option.value}
                    onSelect={() => {
                      if (isSelected) {
                        selectedValues.delete(option.value);
                      } else {
                        selectedValues.add(option.value);
                      }
                      const filterValues = Array.from(selectedValues);
                      column?.setFilterValue(
                        filterValues.length ? filterValues : undefined
                      );
                    }}
                  >
                    <div
                      className={cn(
                        "mr-2 flex h-4 w-4 items-center justify-center rounded-sm",
                        isSelected
                          ? "bg-[#0195c5] text-white"
                          : "border border-black/50 dark:border-white/50 opacity-80 [&_svg]:invisible"
                      )}
                    >
                      <Icons.Check className="h-4 w-4" />
                    </div>
                    {option.icon && (
                      <option.icon className="mr-2 h-4 w-4 text-muted-foreground" />
                    )}
                    <span>{option.label}</span>
                    {facets?.get(option.value) && (
                      <span className="ml-auto flex h-4 w-4 items-center justify-center font-mono text-xs">
                        {facets.get(option.value)}
                      </span>
                    )}
                  </CommandItem>
                );
              })}
            </CommandGroup>
            {selectedValues.size > 0 && (
              <>
                <CommandSeparator />
                <CommandGroup>
                  <CommandItem
                    onSelect={() => column?.setFilterValue(undefined)}
                    className="justify-center text-center"
                  >
                    Clear filters
                  </CommandItem>
                </CommandGroup>
              </>
            )}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
