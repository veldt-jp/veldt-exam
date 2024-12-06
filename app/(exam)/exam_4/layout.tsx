import type { Metadata } from "next";

import { ArticleHeader } from "@/components/header";

export const metadata: Metadata = {
  title: "Exam 4 - VELDT",
  description: "Exam 4 page.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <article className="px-6 pt-8 pb-20 bg-neutral-100">
      <ArticleHeader title="Exam 4" />
      {children}
    </article>
  );
}
