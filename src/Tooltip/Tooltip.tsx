import React from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

type TootipProps = {
  children: React.ReactElement;
  tooltipContent: React.ReactElement;
  interactive: boolean;
};
export const Tooltip: React.FC<TootipProps> = ({ interactive, tooltipContent, children, ...rest }) => (
  <Tippy interactive={interactive} {...rest} content={tooltipContent}>
    {children}
  </Tippy>
);
