import React, { useState } from 'react';
import useCollapse from 'react-collapsed';
import {
  StyledNotificationBar,
  StyledSummary,
  StyledSummaryDetailsWrapper,
  StyledSummaryRow,
  StyledDetailsPanel,
  StyledDetailsTrigger,
} from './NotificationBar.styles';

export interface NotificationBarProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'alert' | 'info' | 'warning';
  children: React.ReactNode;
}

export const NotificationBar: React.FC<NotificationBarProps> = ({ children, variant = 'info', ...props }) => (
  <StyledNotificationBar $variant={variant} {...props}>
    {children}
  </StyledNotificationBar>
);

export interface NotificationBarAccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'alert' | 'info' | 'warning';
  children: React.ReactNode;
  details: React.ReactNode;
}

export const NotificationBarAccordion: React.FC<NotificationBarAccordionProps> = ({
  variant = 'info',
  children,
  details,
  ...props
}) => {
  const [isExpanded, setExpanded] = useState(false);
  const { getCollapseProps, getToggleProps } = useCollapse({
    isExpanded,
  });
  const detailsPanelId = 'notification-details-panel';

  return (
    <StyledNotificationBar $variant={variant} {...props}>
      <StyledSummaryDetailsWrapper>
        <StyledSummaryRow>
          <StyledSummary>{children}</StyledSummary>
          <StyledDetailsTrigger
            $variant={variant}
            aria-expanded={isExpanded}
            aria-controls={detailsPanelId}
            {...getToggleProps({
              onClick: () => setExpanded(prevState => !prevState),
            })}
          >
            {isExpanded ? 'Show less' : 'Show more'}
          </StyledDetailsTrigger>
        </StyledSummaryRow>
        <div id={detailsPanelId} {...getCollapseProps()}>
          <StyledDetailsPanel>{details}</StyledDetailsPanel>
        </div>
      </StyledSummaryDetailsWrapper>
    </StyledNotificationBar>
  );
};
