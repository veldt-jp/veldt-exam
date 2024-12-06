import type { Metadata } from "next";

import { Header } from "@/components/header";

export const metadata: Metadata = {
  title: "Exam 4 - VELDT Inc.",
  description: "Exam 4 page.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <article className="px-6 pt-8 pb-20 bg-neutral-100">
      <Header title="Exam 4" />
      {children}
    </article>
  );
}
