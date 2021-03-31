import React from 'react';
import Tippy, { TippyProps } from '@tippyjs/react';
import { StyledPopover } from './Popover.styles';
import { PopoverTitle } from './PopoverTitle';
import { PopoverButton, ButtonProps } from './PopoverButton';
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
  Title: React.FC;
  Button: React.FC<ButtonProps>;
}

const Popover: React.FC<TippyProps & any> & PopoverComposition = ({ content, children, ...rest }) => (
  <StyledPopover content={content} {...rest}>
    {children}
  </StyledPopover>
);

Popover.Title = PopoverTitle;
Popover.Button = PopoverButton;

export { Popover };
