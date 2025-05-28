import MainNav from "@/components/Navs/MainNav";
import type { ReactNode } from "react";
import { unstable_ViewTransition as ViewTransition } from "react";

export default function MainLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <>
      <ViewTransition name="header">
        <header className="mx-auto max-w-4xl px-4">
          <MainNav />
        </header>
        <div className="mx-auto max-w-4xl px-4">{children}</div>
      </ViewTransition>
    </>
  );
}
