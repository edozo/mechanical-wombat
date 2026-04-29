import { forwardRef } from 'react';
import * as Select from '@radix-ui/react-select';
import { ChevronDown } from 'lucide-react';
import {
  ItemThumbnail,
  StyledSelectContent,
  StyledSelectIcon,
  StyledSelectItem,
  StyledSelectTrigger,
  StyledSelectValue,
  StyledSelectViewport,
  TriggerItemWrapper,
} from 'DropDownV2/DropDownV2.styles';

export type DropDownV2Size = 'sm' | 'md';

export interface DropDownV2Item {
  /** Display label. */
  label: string;
  /** Unique identifier used as the select value. */
  value: string;
  /** Prevents selection. */
  disabled?: boolean;
  /** Optional thumbnail image URL shown alongside the label. */
  thumbnail?: string;
}

export interface DropDownV2Props {
  /** Currently selected value (controlled). */
  value: string;
  /** Called when the selection changes. */
  onValueChange: (value: string) => void;
  /** Selectable options. */
  items: DropDownV2Item[];
  /** Placeholder shown when no value is selected. */
  placeholder?: string;
  /** Size scale for the trigger. */
  size?: DropDownV2Size;
  /** Disables the entire select. */
  disabled?: boolean;
}

export const DropDownV2 = forwardRef<HTMLButtonElement, DropDownV2Props>(
  ({ value, onValueChange, items, placeholder = 'Select…', size = 'md', disabled = false }, ref) => {
    const selectedItem = items.find((item) => item.value === value);

    return (
      <Select.Root value={value} onValueChange={onValueChange} disabled={disabled}>
        <StyledSelectTrigger ref={ref} $size={size}>
          <StyledSelectValue placeholder={placeholder}>
            {selectedItem ? (
              <TriggerItemWrapper>
                {selectedItem.thumbnail && <ItemThumbnail src={selectedItem.thumbnail} alt="" />}
                {selectedItem.label}
              </TriggerItemWrapper>
            ) : undefined}
          </StyledSelectValue>
          <StyledSelectIcon>
            <ChevronDown size={16} />
          </StyledSelectIcon>
        </StyledSelectTrigger>

        <Select.Portal>
          <StyledSelectContent position="popper" sideOffset={4}>
            <StyledSelectViewport>
              {items.map((item) => (
                <StyledSelectItem key={item.value} value={item.value} disabled={item.disabled}>
                  {item.thumbnail && <ItemThumbnail src={item.thumbnail} alt="" />}
                  <Select.ItemText>{item.label}</Select.ItemText>
                </StyledSelectItem>
              ))}
            </StyledSelectViewport>
          </StyledSelectContent>
        </Select.Portal>
      </Select.Root>
    );
  },
);

DropDownV2.displayName = 'DropDownV2';
