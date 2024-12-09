import "../styles/globals.css";

import type { Metadata } from "next";
import { Toaster } from "sonner";

import { SideTitle, Sidebar } from "@/components/side-bar";
import { Icons } from "@/components/icons";

import { Provider } from "@/context/usecase";

export const hrefs = [
  {
    title: "1. ToDo App",
    href: "/todo",
    icon: <Icons.MessageCircle className="h-4 w-4 stroke-[2.5px]" />,
  },
  {
    title: "2. WIP",
    href: "/exam_2",
    icon: <Icons.MessageCircle className="h-4 w-4 stroke-[2.5px]" />,
  },
  {
    title: "3. WIP",
    href: "/exam_3",
    icon: <Icons.MessageCircle className="h-4 w-4 stroke-[2.5px]" />,
  },
  {
    title: "4. WIP",
    href: "/exam_4",
    icon: <Icons.MessageCircle className="h-4 w-4 stroke-[2.5px]" />,
  },
  {
    title: "5. WIP",
    href: "/exam_5",
    icon: <Icons.MessageCircle className="h-4 w-4 stroke-[2.5px]" />,
  },
];
const sidebar = [
  { title: "Getting Started" },
  {
    title: "Overview",
    href: "/",
    icon: <Icons.LayoutGrid className="h-4 w-4 stroke-[2.5px]" />,
  },
  { title: "Exams" },
  ...hrefs,
];

export const metadata: Metadata = {
  title: "Overview - VELDT Inc.",
  description: "VELDT exam web.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <main>
          <Provider>
            <div className="flex min-h-screen w-full bg-neutral-100">
              <aside className="sticky top-0 z-30 flex justify-center h-screen w-full min-w-56 max-w-60 p-3 backdrop-blur-sm border-r border-gray-200 bg-white">
                <ul className="flex flex-col w-full mt-4">
                  {sidebar.map((entry: any, index: number) => (
                    <li key={index}>
                      {entry.href ? (
                        <Sidebar
                          title={entry.title}
                          href={entry.href}
                          icon={entry.icon}
                          budge={entry.budge}
                        />
                      ) : (
                        <SideTitle title={entry.title} />
                      )}
                    </li>
                  ))}
                </ul>
              </aside>
              <div className="w-full min-w-80">
                <header className="sticky top-0 z-30 w-full h-16 p-3 backdrop-blur-sm border-b border-gray-200 bg-white" />
                {children}
              </div>
            </div>
          </Provider>
          <Toaster />
        </main>
      </body>
    </html>
  );
}
