import { forwardRef } from 'react';
import { StyledSwitchRoot, StyledSwitchThumb } from 'SwitchV2/SwitchV2.styles';

export type SwitchV2Size = 'sm' | 'md';

export interface SwitchV2Props {
  /** Whether the switch is checked (controlled). */
  checked: boolean;
  /** Called when the checked state changes. */
  onCheckedChange: (checked: boolean) => void;
  /** Disables the switch. */
  disabled?: boolean;
  /** Size scale. */
  size?: SwitchV2Size;
  /** Associates the switch with a label element. */
  id?: string;
  /** Accessible name when no label element is present. */
  'aria-label'?: string;
}

export const SwitchV2 = forwardRef<HTMLButtonElement, SwitchV2Props>(
  ({ checked, onCheckedChange, disabled = false, size = 'md', id, ...rest }, ref) => (
    <StyledSwitchRoot
      ref={ref}
      id={id}
      checked={checked}
      onCheckedChange={onCheckedChange}
      disabled={disabled}
      $size={size}
      {...rest}
    >
      <StyledSwitchThumb $size={size} />
    </StyledSwitchRoot>
  ),
);

SwitchV2.displayName = 'SwitchV2';
