import { forwardRef, useState } from 'react';
import { ChevronDown, X } from 'lucide-react';
import {
  AccordionChevron,
  AccordionContent,
  AccordionSummary,
  AccordionSummaryRow,
  AccordionTrigger,
  ContentWrapper,
  DismissButton,
  StyledAccordionRoot,
  StyledNotificationBarV2,
} from 'NotificationBarV2/NotificationBarV2.styles';

export type NotificationBarV2Variant = 'info' | 'success' | 'warning' | 'danger';

export interface NotificationBarV2Props extends React.HTMLAttributes<HTMLDivElement> {
  /** Colour and icon intent. */
  variant?: NotificationBarV2Variant;
  /** Removes border radius — use when the bar is flush against browser edges (e.g. top-of-page banners). */
  square?: boolean;
  /** Called when the dismiss button is clicked. Renders a dismiss button when provided. */
  onDismiss?: () => void;
  /** Notification content. */
  children: React.ReactNode;
}

export interface NotificationBarV2AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Colour and icon intent. */
  variant?: NotificationBarV2Variant;
  /** Removes border radius — use when the bar is flush against browser edges (e.g. top-of-page banners). */
  square?: boolean;
  /** Expandable detail content. */
  details: React.ReactNode;
  /** Called when the dismiss button is clicked. Renders a dismiss button when provided. */
  onDismiss?: () => void;
  /** Summary content shown in the collapsed state. */
  children: React.ReactNode;
}

export const NotificationBarV2 = forwardRef<HTMLDivElement, NotificationBarV2Props>(
  ({ variant = 'info', square = false, onDismiss, children, ...rest }, ref) => (
    <StyledNotificationBarV2 ref={ref} $variant={variant} $square={square} role="status" {...rest}>
      <ContentWrapper>{children}</ContentWrapper>
      {onDismiss && (
        <DismissButton onClick={onDismiss} aria-label="Dismiss">
          <X size={16} />
        </DismissButton>
      )}
    </StyledNotificationBarV2>
  ),
);
NotificationBarV2.displayName = 'NotificationBarV2';

export const NotificationBarV2Accordion = forwardRef<HTMLDivElement, NotificationBarV2AccordionProps>(
  ({ variant = 'info', square = false, details, onDismiss, children, ...rest }, ref) => {
    const [open, setOpen] = useState(false);

    return (
      <StyledAccordionRoot ref={ref} $variant={variant} $square={square} open={open} onOpenChange={setOpen} {...rest}>
        <AccordionSummaryRow>
          <AccordionSummary>{children}</AccordionSummary>
          <AccordionTrigger>
            {open ? 'Show less' : 'Show more'}
            <AccordionChevron $open={open}>
              <ChevronDown size={14} />
            </AccordionChevron>
          </AccordionTrigger>
          {onDismiss && (
            <DismissButton onClick={onDismiss} aria-label="Dismiss">
              <X size={16} />
            </DismissButton>
          )}
        </AccordionSummaryRow>
        <AccordionContent>{details}</AccordionContent>
      </StyledAccordionRoot>
    );
  },
);
NotificationBarV2Accordion.displayName = 'NotificationBarV2Accordion';
