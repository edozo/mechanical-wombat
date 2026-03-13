import React, { useEffect, useRef, useState } from 'react';
import { PlatformMenuV2 } from 'HeaderV2/Menu/PlatformMenu';
import { MenuItemV2 } from 'HeaderV2/Menu/MenuItem';
import {
  StyledNavList,
  StyledNavMenu,
  StyledNavViewport,
  StyledNavViewportPosition,
} from 'HeaderV2/Menu/MenuV2.styles';

interface MenuV2Composition {
  Item: React.FC<React.PropsWithChildren>;
  PlatformMenu: React.FC<React.PropsWithChildren<unknown>>;
}

interface Props {
  children: React.ReactNode;
  openOnClickOnly?: boolean;
  closeOnOutsideClickOnly?: boolean;
}

const MenuV2: React.FC<Props> & MenuV2Composition = ({
  children,
  openOnClickOnly = false,
  closeOnOutsideClickOnly = false,
}) => {
  const [value, setValue] = useState<string>('');
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!closeOnOutsideClickOnly) return undefined;

    const handlePointerDown = (event: MouseEvent) => {
      if (!rootRef.current) return;
      const { target } = event;
      if (!(target instanceof Node)) return;
      if (rootRef.current.contains(target)) return;
      setValue('');
    };

    document.addEventListener('mousedown', handlePointerDown);
    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
    };
  }, [closeOnOutsideClickOnly]);

  const handleValueChange = (nextValue: string) => {
    if (closeOnOutsideClickOnly && nextValue === '') {
      return;
    }
    setValue(nextValue);
  };

  return (
    <StyledNavMenu
      ref={rootRef}
      value={closeOnOutsideClickOnly ? value : undefined}
      onValueChange={closeOnOutsideClickOnly ? handleValueChange : undefined}
      onPointerMove={openOnClickOnly ? (event) => event.preventDefault() : undefined}
      onPointerLeave={openOnClickOnly ? (event) => event.preventDefault() : undefined}
    >
      <StyledNavList>{children}</StyledNavList>
      <StyledNavViewportPosition>
        <StyledNavViewport />
      </StyledNavViewportPosition>
    </StyledNavMenu>
  );
};

MenuV2.Item = MenuItemV2;
MenuV2.PlatformMenu = PlatformMenuV2;

export { MenuV2 };
