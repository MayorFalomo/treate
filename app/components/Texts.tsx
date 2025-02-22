import clsx from 'clsx';
import React from 'react';

type Props = {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'custom';
  onClick?: () => void;
};

const Texts: React.FC<Props> = ({
  children,
  className,
  variant = 'primary',
  onClick,
}) => {
  return (
    <p
      className={clsx(
        className,
        variant === 'primary' && 'font-normal font-sourceSans text-[16px]',
        variant === 'secondary' && 'font-light font-sourceSansItalic',
        variant === 'custom' && ''
      )}
      onClick={onClick}
    >
      {children}
    </p>
  );
};

export default Texts;
