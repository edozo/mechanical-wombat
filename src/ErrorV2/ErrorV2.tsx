import { forwardRef } from 'react';
import {
  StyledErrorV2,
  StyledErrorV2Actions,
  StyledErrorV2Code,
  StyledErrorV2Description,
  StyledErrorV2Title,
} from 'ErrorV2/ErrorV2.styles';

export interface ErrorV2Props extends React.HTMLAttributes<HTMLDivElement> {
  /** Error code displayed as the primary visual (e.g. 404, "500"). */
  code?: string | number;
  /** Short error title shown below the code. */
  title: string;
  /** Supplementary description providing context or guidance. */
  description?: string;
  /** CTA slot — typically a button or link. */
  action?: React.ReactNode;
}

export const ErrorV2 = forwardRef<HTMLDivElement, ErrorV2Props>(
  ({ code, title, description, action, ...rest }, ref) => (
    <StyledErrorV2 ref={ref} {...rest}>
      {code && <StyledErrorV2Code>{code}</StyledErrorV2Code>}
      <StyledErrorV2Title>{title}</StyledErrorV2Title>
      {description && <StyledErrorV2Description>{description}</StyledErrorV2Description>}
      {action && <StyledErrorV2Actions>{action}</StyledErrorV2Actions>}
    </StyledErrorV2>
  ),
);

ErrorV2.displayName = 'ErrorV2';
