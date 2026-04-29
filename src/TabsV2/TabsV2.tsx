import { forwardRef, useMemo } from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import { StyledTabsContent, StyledTabsList, StyledTabsRoot, StyledTabsTrigger } from 'TabsV2/TabsV2.styles';
import { TabsV2Context, useTabsV2Context } from 'TabsV2/TabsV2Context';

export type TabsV2Appearance = 'underline' | 'pill' | 'boxed' | 'subtle';

export interface TabsV2RootProps {
  /** The tab value to activate on first render (uncontrolled). */
  defaultValue?: string;
  /** The controlled active tab value. */
  value?: string;
  /** Called when the active tab changes. */
  onValueChange?: (value: string) => void;
  /** Tab orientation. */
  orientation?: 'horizontal' | 'vertical';
  /** Visual style of the tab list and triggers. */
  appearance?: TabsV2Appearance;
  /** Tab content. */
  children: React.ReactNode;
}

export interface TabsV2ListProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Expand triggers to fill the full width of the list. */
  stretch?: boolean;
  /** Tab trigger content. */
  children: React.ReactNode;
}

export interface TabsV2TriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** The value of the tab this trigger controls. */
  value: string;
  /** Disables the trigger. */
  disabled?: boolean;
  /** Trigger label. */
  children: React.ReactNode;
}

export interface TabsV2ContentProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The tab value this panel is associated with. */
  value: string;
  /** Panel content. */
  children: React.ReactNode;
}

const TabsV2Root = forwardRef<HTMLDivElement, TabsV2RootProps>(
  // TODO: settle on a default appearance — compare all four in the AppearanceComparison story
  (
    { defaultValue, value, onValueChange, orientation = 'horizontal', appearance = 'underline', children, ...rest },
    ref,
  ) => {
    const contextValue = useMemo(() => ({ appearance }), [appearance]);
    return (
      <TabsV2Context.Provider value={contextValue}>
        <StyledTabsRoot
          ref={ref}
          defaultValue={defaultValue}
          value={value}
          onValueChange={onValueChange}
          orientation={orientation}
          {...(rest as React.ComponentPropsWithoutRef<typeof Tabs.Root>)}
        >
          {children}
        </StyledTabsRoot>
      </TabsV2Context.Provider>
    );
  },
);
TabsV2Root.displayName = 'TabsV2';

const TabsV2List = forwardRef<HTMLDivElement, TabsV2ListProps>(({ stretch, children, ...rest }, ref) => {
  const { appearance } = useTabsV2Context();
  return (
    <StyledTabsList ref={ref} $stretch={stretch} $appearance={appearance} {...rest}>
      {children}
    </StyledTabsList>
  );
});
TabsV2List.displayName = 'TabsV2.List';

const TabsV2Trigger = forwardRef<HTMLButtonElement, TabsV2TriggerProps>(
  ({ value, disabled, children, ...rest }, ref) => {
    const { appearance } = useTabsV2Context();
    return (
      <StyledTabsTrigger ref={ref} value={value} disabled={disabled} $appearance={appearance} {...rest}>
        {children}
      </StyledTabsTrigger>
    );
  },
);
TabsV2Trigger.displayName = 'TabsV2.Trigger';

const TabsV2Content = forwardRef<HTMLDivElement, TabsV2ContentProps>(({ value, children, ...rest }, ref) => (
  <StyledTabsContent ref={ref} value={value} {...rest}>
    {children}
  </StyledTabsContent>
));
TabsV2Content.displayName = 'TabsV2.Content';

export const TabsV2 = Object.assign(TabsV2Root, {
  List: TabsV2List,
  Trigger: TabsV2Trigger,
  Content: TabsV2Content,
});
