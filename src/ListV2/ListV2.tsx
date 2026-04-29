import { forwardRef, useMemo } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { StyledListV2, StyledListV2Item } from 'ListV2/ListV2.styles';
import { ListV2Context, useListV2Context } from 'ListV2/ListV2Context';

export type ListV2Variant = 'standard' | 'platform';

export interface ListV2Props extends React.HTMLAttributes<HTMLDivElement> {
  /** Controls item hover and active colours. */
  variant?: ListV2Variant;
}

export interface ListV2ItemProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Prevents click interactions and applies disabled styles. */
  disabled?: boolean;
  /** Render styles onto a child element using Radix Slot. */
  asChild?: boolean;
}

const ListV2Root = forwardRef<HTMLDivElement, ListV2Props>(({ variant = 'standard', children, ...rest }, ref) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const contextValue = useMemo(() => ({ variant }), [variant]);
  return (
    <ListV2Context.Provider value={contextValue}>
      <StyledListV2 ref={ref} {...rest}>
        {children}
      </StyledListV2>
    </ListV2Context.Provider>
  );
});
ListV2Root.displayName = 'ListV2';

const ListV2Item = forwardRef<HTMLDivElement, ListV2ItemProps>(
  ({ disabled = false, asChild = false, onClick, children, ...rest }, ref) => {
    const { variant } = useListV2Context();
    const Comp = asChild ? Slot : 'div';

    return (
      <StyledListV2Item
        as={Comp}
        ref={ref}
        $variant={variant}
        $disabled={disabled}
        aria-disabled={disabled || undefined}
        onClick={disabled ? undefined : onClick}
        {...rest}
      >
        {children}
      </StyledListV2Item>
    );
  },
);
ListV2Item.displayName = 'ListV2.Item';

export const ListV2 = Object.assign(ListV2Root, { Item: ListV2Item });
