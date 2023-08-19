import React from 'react';

type LayoutProps = {
  children: React.ReactNode;
};
export function Layout({ children }: LayoutProps) {
  return <div className="py-10 m-auto font-roboto">{children}</div>;
}
