'use client';

export const Header = ({ className, children }) => {
  return <div className={`container-fluid ${className}`}>{children}</div>;
};
