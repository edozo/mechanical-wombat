import React, { useRef } from 'react';
import { useOnClickOutside } from '../hooks';

export interface PopoverProps {
  isOpen: boolean;
  setIsOpen: (param: boolean) => void;
}

export const Popover: React.FC<PopoverProps> = props => {
  const { isOpen, setIsOpen, children, ...rest } = props;
  const node = useRef(null);
  useOnClickOutside(node, () => setIsOpen(false));

  return (
    <div ref={node} {...rest}>
      {isOpen && children}
    </div>
  );
};
