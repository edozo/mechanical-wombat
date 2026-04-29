import { forwardRef } from 'react';
import * as Popover from '@radix-ui/react-popover';
import { StyledPopoverV2Arrow, StyledPopoverV2Content } from 'PopoverV2/PopoverV2.styles';

export type PopoverV2Side = 'top' | 'right' | 'bottom' | 'left';
export type PopoverV2Align = 'start' | 'center' | 'end';

export interface PopoverV2Props {
  /** Controlled open state. */
  open?: boolean;
  /** Default open state for uncontrolled usage. */
  defaultOpen?: boolean;
  /** Called when the open state changes. */
  onOpenChange?: (open: boolean) => void;
  /** PopoverV2.Trigger and PopoverV2.Content. */
  children: React.ReactNode;
}

export interface PopoverV2ContentProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Side the popover appears on relative to the trigger. */
  side?: PopoverV2Side;
  /** Alignment of the popover along the trigger's axis. */
  align?: PopoverV2Align;
  /** Distance in px between the popover and trigger. */
  sideOffset?: number;
  /** Popover panel content. */
  children: React.ReactNode;
}

const PopoverV2Root = ({ open, defaultOpen, onOpenChange, children }: PopoverV2Props) => (
  <Popover.Root open={open} defaultOpen={defaultOpen} onOpenChange={onOpenChange}>
    {children}
  </Popover.Root>
);
PopoverV2Root.displayName = 'PopoverV2';

const PopoverV2Trigger = forwardRef<HTMLButtonElement, React.ComponentPropsWithoutRef<typeof Popover.Trigger>>(
  (props, ref) => <Popover.Trigger ref={ref} {...props} />,
);
PopoverV2Trigger.displayName = 'PopoverV2.Trigger';

const PopoverV2Content = forwardRef<HTMLDivElement, PopoverV2ContentProps>(
  ({ side = 'bottom', align = 'end', sideOffset = 8, children, ...rest }, ref) => (
    <Popover.Portal>
      <StyledPopoverV2Content ref={ref} side={side} align={align} sideOffset={sideOffset} {...rest}>
        {children}
        <StyledPopoverV2Arrow />
      </StyledPopoverV2Content>
    </Popover.Portal>
  ),
);
PopoverV2Content.displayName = 'PopoverV2.Content';

const PopoverV2Close = forwardRef<HTMLButtonElement, React.ComponentPropsWithoutRef<typeof Popover.Close>>(
  (props, ref) => <Popover.Close ref={ref} {...props} />,
);
PopoverV2Close.displayName = 'PopoverV2.Close';

export const PopoverV2 = Object.assign(PopoverV2Root, {
  Trigger: PopoverV2Trigger,
  Content: PopoverV2Content,
  Close: PopoverV2Close,
});
