/* eslint-disable @typescript-eslint/no-empty-interface */
/**
 * Default CSS definition for typescript,
 * will be overridden with file-specific definitions by rollup
 */
declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}

declare module '*.svg' {
  import * as React from 'react';
  const Component: React.FC<React.SVGProps<SVGSVGElement>>;
  export default Component;
}

declare module '*.svg?url' {
  const src: string;
  export default src;
}

declare module '*.svg?react' {
  import * as React from 'react';
  const Component: React.FC<React.SVGProps<SVGSVGElement>>;
  export default Component;
}

declare module 'react-collapsed' {
  import * as React from 'react';
  export interface CollapseProps {
    isExpanded?: boolean;
    children?: React.ReactNode;
  }
  const useCollapse: (options?: any) => any;
  export default useCollapse;
}
