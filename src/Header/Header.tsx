import React, { createContext, useContext } from 'react';
import { StyledHeader } from './Header.styles';

export type AppName = 'maps' | 'occupiers' | 'insight' | '';
export interface Context extends React.HTMLAttributes<HTMLDivElement> {
  appName: AppName;
}

const HeaderContext = createContext<Context>({ appName: 'maps' });

export const useHeaderContext: Function = (): any => {
  const context = useContext(HeaderContext);
  if (!context) {
    throw new Error("Header compound components can't be rendered outside Header component");
  }
  return context;
};

const Header = (props: Context): any => (
  <HeaderContext.Provider value={props}>
    <StyledHeader {...props}>{props.children}</StyledHeader>
  </HeaderContext.Provider>
);

export { Header };
