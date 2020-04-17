import React from 'react';
import Tippy from '@tippyjs/react';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'tippy.js/dist/tippy.css';

type TooltipProps = {
  children: React.ReactElement;
  content: React.ReactElement;
};
export const Tooltip: React.FC<TooltipProps> = ({ content, children, ...rest }) => (
  <Tippy {...rest} content={content}>
    {children}
  </Tippy>
);
