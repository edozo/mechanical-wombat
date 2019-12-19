import * as React from 'react';
import { useOnClickOutside } from '../hooks';

const { useRef } = React;

export interface Props {
  isOpen: boolean;
  setIsOpen: (param: boolean) => void;
  children: React.ReactNode;
}

export const Popover = (props: Props): JSX.Element => {
  const { isOpen, setIsOpen, children, ...rest } = props;
  const node = useRef(null);
  useOnClickOutside(node, () => setIsOpen(false));

  return (
    <div ref={node} {...rest}>
      {isOpen && children}
    </div>
  );
};
