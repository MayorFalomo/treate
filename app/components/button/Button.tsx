import React from 'react';
import clsx from 'clsx';
import { Button } from '@/components/ui/button';

type IProps = {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'outline' | 'secondary' | 'custom';
  onClick?: () => void;
  ariaLabel?: string;
};
const ButtonItem: React.FC<IProps> = ({
  children,
  className,
  variant = 'primary',
  onClick,
  ariaLabel = 'click',
}) => {
  return (
    <Button
      className={clsx(
        className,
        variant === 'primary' &&
          'bg-greenish hover:opacity-80 hover:bg-orangish transition-all duration-500 ease-in-out text-white',
        variant === 'outline' && 'border border-green-500 text-green-500 bg-transparent',
        variant === 'secondary' && 'bg-gray-500 text-white',
        variant === 'custom' && ''
      )}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {children}
    </Button>
  );
};

export default ButtonItem;
