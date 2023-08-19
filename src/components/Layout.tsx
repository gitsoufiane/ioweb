import React from 'react';
import headerGradient from '../assets/header-gradient.webp';

type LayoutProps = {
  children: React.ReactNode;
};
export function Layout({ children }: LayoutProps) {
  return (
    <div className="container relative p-10 text-white bg-black font-roboto">
      <picture className="absolute top-0 -translate-x-1/2 left-1/2 h-[550px]  z-[2] select-none">
        <img src={headerGradient} alt="bgimg" />
      </picture>
      {children}
    </div>
  );
}
