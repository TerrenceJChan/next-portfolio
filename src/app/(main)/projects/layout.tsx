import type { ReactNode } from "react";

export default function MainLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <div>
      <header>Hello World</header>
      <div>{children}</div>
    </div>
  );
}
