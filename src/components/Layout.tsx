import React from 'react';

type LayoutProps = {
  children: React.ReactNode;
};
export function Layout({ children }: LayoutProps) {
  return <div className="container p-10 font-roboto">{children}</div>;
}
