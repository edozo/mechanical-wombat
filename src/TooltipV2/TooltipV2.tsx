import * as Tooltip from '@radix-ui/react-tooltip';
import { StyledTooltipArrow, StyledTooltipContent } from 'TooltipV2/TooltipV2.styles';

export type TooltipV2Side = 'top' | 'right' | 'bottom' | 'left';

export interface TooltipV2ProviderProps {
  /** Delay in ms before any tooltip in the tree opens. Overridden per-instance by delayDuration. */
  delayDuration?: number;
  /** Children. */
  children: React.ReactNode;
}

/**
 * Optional app-root provider. Place once at the top of your tree to share tooltip delay
 * settings and reduce context overhead on pages with many tooltips.
 * TooltipV2 includes its own Provider as a fallback when this is not used.
 */
export const TooltipV2Provider = ({ delayDuration = 400, children }: TooltipV2ProviderProps) => (
  <Tooltip.Provider delayDuration={delayDuration}>{children}</Tooltip.Provider>
);
TooltipV2Provider.displayName = 'TooltipV2Provider';

export interface TooltipV2Props {
  /** Content displayed inside the tooltip bubble. */
  content: React.ReactNode;
  /** The trigger element — must be a single focusable element. */
  children: React.ReactElement;
  /** Side the tooltip appears on relative to the trigger. */
  side?: TooltipV2Side;
  /** Delay in ms before the tooltip opens. */
  delayDuration?: number;
  /** Controlled open state. */
  open?: boolean;
  /** Default open state for uncontrolled usage. */
  defaultOpen?: boolean;
  /** Called when the open state changes. */
  onOpenChange?: (open: boolean) => void;
}

export const TooltipV2 = ({
  content,
  children,
  side = 'bottom',
  delayDuration = 400,
  open,
  defaultOpen,
  onOpenChange,
}: TooltipV2Props) => (
  <Tooltip.Provider>
    <Tooltip.Root open={open} defaultOpen={defaultOpen} onOpenChange={onOpenChange} delayDuration={delayDuration}>
      <Tooltip.Trigger asChild>{children}</Tooltip.Trigger>
      <Tooltip.Portal>
        <StyledTooltipContent side={side} sideOffset={6}>
          {content}
          <StyledTooltipArrow />
        </StyledTooltipContent>
      </Tooltip.Portal>
    </Tooltip.Root>
  </Tooltip.Provider>
);

TooltipV2.displayName = 'TooltipV2';
