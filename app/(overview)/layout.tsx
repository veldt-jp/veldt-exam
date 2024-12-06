import type { Metadata } from "next";

import { Header } from "@/components/header";

export const metadata: Metadata = {
  title: "Overview - VELDT Inc.",
  description: "Overview page.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <article className="px-6 pt-8 pb-20 bg-neutral-100">
      <Header title="Overview" />
      {children}
    </article>
  );
}
