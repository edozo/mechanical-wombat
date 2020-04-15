import React from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

type TootipProps = {
  children: React.ReactElement;
  tooltipContent: React.ReactElement;
};
export const Tooltip: React.FC<TootipProps> = ({ tooltipContent, children, ...rest }) => (
  <Tippy {...rest} content={tooltipContent}>
    {children}
  </Tippy>
);
