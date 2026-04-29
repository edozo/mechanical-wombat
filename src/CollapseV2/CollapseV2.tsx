import { forwardRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import {
  ChevronIcon,
  StyledCollapseContent,
  StyledCollapseRoot,
  StyledCollapseTrigger,
} from 'CollapseV2/CollapseV2.styles';

export interface CollapseV2Props {
  /** Controlled open state. */
  open?: boolean;
  /** Default open state for uncontrolled usage. */
  defaultOpen?: boolean;
  /** Called when open state changes. */
  onOpenChange?: (open: boolean) => void;
  /** Trigger element content (text or React node). */
  trigger: React.ReactNode;
  /** Removes border radius — use when the panel is flush against browser or container edges. */
  square?: boolean;
  /** Collapsible panel content. */
  children: React.ReactNode;
}

export const CollapseV2 = forwardRef<HTMLDivElement, CollapseV2Props>(
  ({ open, defaultOpen = false, onOpenChange, trigger, square = false, children, ...rest }, ref) => {
    const [internalOpen, setInternalOpen] = useState(defaultOpen);
    const isOpen = open !== undefined ? open : internalOpen;

    const handleOpenChange = (next: boolean) => {
      if (open === undefined) setInternalOpen(next);
      onOpenChange?.(next);
    };

    return (
      <StyledCollapseRoot ref={ref} open={isOpen} onOpenChange={handleOpenChange} $square={square} {...rest}>
        <StyledCollapseTrigger>
          {trigger}
          <ChevronIcon $open={isOpen}>
            <ChevronDown size={16} />
          </ChevronIcon>
        </StyledCollapseTrigger>
        <StyledCollapseContent>{children}</StyledCollapseContent>
      </StyledCollapseRoot>
    );
  },
);

CollapseV2.displayName = 'CollapseV2';
