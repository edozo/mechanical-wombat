import React, { createContext, useContext } from 'react';
import { StyledHeader } from 'Header/Header.styles';

export interface Context extends React.HTMLAttributes<HTMLDivElement> {
  // eslint-disable-next-line react/no-unused-prop-types
  appName: string;
}

const HeaderContext = createContext<Context>({ appName: 'maps' });

export const useHeaderContext = () => {
  const context = useContext(HeaderContext);
  if (!context) {
    throw new Error("Header compound components can't be rendered outside Header component");
  }
  return context;
};

const Header = (props: Context) => (
  <HeaderContext.Provider value={props}>
    <StyledHeader>{props.children}</StyledHeader>
  </HeaderContext.Provider>
);

export { Header };
