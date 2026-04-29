import { forwardRef } from 'react';
import { StyledToggleGroupItem, StyledToggleGroupRoot } from 'ToggleGroupV2/ToggleGroupV2.styles';

export type ToggleGroupV2Size = 'sm' | 'md';

export interface ToggleGroupV2Item {
  /** Display label. */
  label: string;
  /** Unique value for this item. */
  value: string;
  /** Prevents selection. */
  disabled?: boolean;
}

interface ToggleGroupV2SingleProps {
  /** Single selection mode. */
  type: 'single';
  /** The selected value. */
  value: string;
  /** Called when the selection changes. */
  onValueChange: (value: string) => void;
  /** Items to render. */
  items: ToggleGroupV2Item[];
  /** Size scale. */
  size?: ToggleGroupV2Size;
}

interface ToggleGroupV2MultipleProps {
  /** Multiple selection mode. */
  type: 'multiple';
  /** The selected values. */
  value: string[];
  /** Called when the selection changes. */
  onValueChange: (value: string[]) => void;
  /** Items to render. */
  items: ToggleGroupV2Item[];
  /** Size scale. */
  size?: ToggleGroupV2Size;
}

export type ToggleGroupV2Props = ToggleGroupV2SingleProps | ToggleGroupV2MultipleProps;

export const ToggleGroupV2 = forwardRef<HTMLDivElement, ToggleGroupV2Props>(({ items, size = 'md', ...props }, ref) => {
  if (props.type === 'single') {
    return (
      <StyledToggleGroupRoot ref={ref} type="single" value={props.value} onValueChange={props.onValueChange}>
        {items.map((item) => (
          <StyledToggleGroupItem key={item.value} value={item.value} disabled={item.disabled} $size={size}>
            {item.label}
          </StyledToggleGroupItem>
        ))}
      </StyledToggleGroupRoot>
    );
  }

  return (
    <StyledToggleGroupRoot ref={ref} type="multiple" value={props.value} onValueChange={props.onValueChange}>
      {items.map((item) => (
        <StyledToggleGroupItem key={item.value} value={item.value} disabled={item.disabled} $size={size}>
          {item.label}
        </StyledToggleGroupItem>
      ))}
    </StyledToggleGroupRoot>
  );
});

ToggleGroupV2.displayName = 'ToggleGroupV2';
