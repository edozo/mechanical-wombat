import React from 'react';
import Tippy, { TippyProps } from '@tippyjs/react';
import { StyledPopover, StyledTitle } from './Popover.styles';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'tippy.js/dist/tippy.css';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'tippy.js/animations/shift-away.css';

Tippy.defaultProps = {
  animation: 'shift-away',
  delay: [100, 0],
  inertia: true,
  placement: 'bottom',
};

interface PopoverComposition {
  Title: React.FC<any>;
}

const Popover: React.FC<TippyProps & any> & PopoverComposition = ({ content, children, ...rest }) => (
  <StyledPopover content={content} {...rest}>
    {children}
  </StyledPopover>
);

const PopoverTitle: React.FC = ({ children }) => <StyledTitle>{children}</StyledTitle>;

Popover.Title = PopoverTitle;

export { Popover, PopoverTitle };
