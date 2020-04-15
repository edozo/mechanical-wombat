import React from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

type TooltipProps = {
  children: React.ReactElement;
  content: React.ReactElement;
  interactive: boolean;
};
export const Tooltip: React.FC<TooltipProps> = ({ interactive, content, children, ...rest }) => (
  <Tippy interactive={interactive} {...rest} content={content}>
    {children}
  </Tippy>
);
