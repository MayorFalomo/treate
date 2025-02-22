import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
type IProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};
const Anchored: React.FC<IProps> = ({ href, children, className }) => {
  return (
    <AnchorLink className={className} href={href}>
      {children}
    </AnchorLink>
  );
};

export default Anchored;
