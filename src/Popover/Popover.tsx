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

  // set classname prop and rerelease? or should we just pass all props down. This fixes not letting us override component styled then just style the popover where it is with absolute position
  return (
    <div ref={node} {...rest}>
      {isOpen && children}
    </div>
  );
};
