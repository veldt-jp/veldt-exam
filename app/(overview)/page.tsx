import Link from "next/link";

import { Icons } from "@/components/icons";
import { hrefs } from "../layout";

export default function Page() {
  return (
    <div className="flex flex-col justify-center">
      <p className="mb-6">
        Please select one of the following list to proceed with the assignment.
      </p>
      <div className="flex flex-col w-full max-w-2xl mx-auto space-y-2">
        {hrefs.map((attr: any, index: number) => (
          <Link
            className="flex flex-row group justify-start items-center w-full px-5 py-3 ring-inset rounded-xl bg-white"
            href={attr.href}
            key={index}
          >
            <p>{attr.icon}</p>
            <p className="text-sm font-medium ml-3">{attr.title}</p>
            <Icons.ArrowRight className="hidden group-hover:flex w-5 h-5 ml-auto " />
          </Link>
        ))}
      </div>
    </div>
  );
}
