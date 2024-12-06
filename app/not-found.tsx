"use client";

import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-neutral-100">
      <h1 className="text-5xl font-medium mb-2">404</h1>
      <div className="flex flex-col items-center">
        <h2 className="text-lg mb-2">Page not found</h2>
        <p className="w-[286px] text-center text-[12px] text-black/60 mb-6">
          The requested page doesn&apos;t exist or you don&apos;t have access to
          it.
        </p>
        <div className="flex">
          <Button
            type="submit"
            variant="default"
            size="sm"
            onClick={() => router.push("/")}
            className="flex h-11 w-[200px] rounded-2xl text-white bg-black hover:bg-stone-800"
          >
            <p>Go Back</p>
          </Button>
        </div>
      </div>
    </div>
  );
}
