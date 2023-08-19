import React from 'react';

type LayoutProps = {
  children: React.ReactNode;
};
export function Layout({ children }: LayoutProps) {
  return <div className="h-screen p-10">{children}</div>;
}
