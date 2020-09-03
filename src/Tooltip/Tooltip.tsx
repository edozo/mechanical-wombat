import React from 'react';
import Tippy from '@tippyjs/react';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'tippy.js/dist/tippy.css';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'tippy.js/animations/shift-away.css';

type TooltipProps = {
  children: React.ReactNode;
  content: React.ReactNode;
};

Tippy.defaultProps = {
  animation: 'shift-away',
  delay: [100, 0],
  inertia: true,
  placement: 'bottom',
};

export const Tooltip: React.FC<TooltipProps> = ({ content, children, ...rest }) => (
  <Tippy content={content} {...rest}>
    {children}
  </Tippy>
);
