import * as React from 'react';
import Downshift, { DownshiftProps, StateChangeOptions } from 'downshift';
import {
  StyledDownshiftWrapper,
  StyledDownshiftPreview,
  StyledDownshiftPreviewInner,
  StyledList,
  StyledListItem,
  StyledListItemImage,
  StyledArrow,
} from './DropDown.styles';
import ArrowIcon from './arrow.svg';

export interface DropDownItem {
  label: React.ReactNode;
  value: string | number;
  thumbnail?: string;
  disabled?: boolean;
}

export interface Props {
  items: DropDownItem[];
  onChange: (item?: DropDownItem) => void;
  selectedItem: DropDownItem;
  initialSelectedItem?: DropDownItem;
}

const itemToString = (item: DropDownItem): string => (item ? item.value.toString() : '');

const preventDisabledSelection: DownshiftProps<DropDownItem>['stateReducer'] = (state, changes) => {
  const typedChanges = changes as StateChangeOptions<DropDownItem>;
  if (
    (typedChanges.type === Downshift.stateChangeTypes.keyDownEnter ||
      typedChanges.type === Downshift.stateChangeTypes.clickItem ||
      typedChanges.type === Downshift.stateChangeTypes.blurInput) &&
    typedChanges.selectedItem &&
    typedChanges.selectedItem.disabled
  ) {
    return {
      ...typedChanges,
      selectedItem: state.selectedItem as DropDownItem | undefined,
    } as Partial<StateChangeOptions<DropDownItem>>;
  }
  return changes;
};

export const DropDown = (props: Props): JSX.Element => (
  <div>
    <Downshift {...props} itemToString={itemToString} stateReducer={preventDisabledSelection}>
      {({ getMenuProps, getItemProps, getToggleButtonProps, highlightedIndex, selectedItem, isOpen, getRootProps }) => (
        <div {...getRootProps()}>
          <StyledDownshiftWrapper>
            <StyledDownshiftPreview {...getToggleButtonProps()}>
              <StyledDownshiftPreviewInner>
                {selectedItem && selectedItem.thumbnail && (
                  <StyledListItemImage alt={`${selectedItem.label} - thumbnail`} src={selectedItem.thumbnail} />
                )}
                {selectedItem?.label}
              </StyledDownshiftPreviewInner>
              <StyledArrow $isOpen={isOpen} aria-hidden>
                <ArrowIcon />
              </StyledArrow>
            </StyledDownshiftPreview>
            {/* Always render the menu root so Downshift can attach refs/aria correctly */}
            <StyledList {...getMenuProps({ refKey: 'ref' })} hidden={!isOpen}>
              {isOpen &&
                props.items.map((item: DropDownItem, index: number) => (
                  <StyledListItem
                    highlighted={highlightedIndex !== undefined && index === highlightedIndex}
                    selectedItem={item.value === selectedItem?.value}
                    $disabled={!!item.disabled}
                    {...getItemProps({
                      item,
                      key: item.value,
                      disabled: item.disabled,
                    })}
                  >
                    {item.thumbnail && <StyledListItemImage alt={`${item.label} - thumbnail`} src={item.thumbnail} />}
                    {item.label}
                  </StyledListItem>
                ))}
            </StyledList>
          </StyledDownshiftWrapper>
        </div>
      )}
    </Downshift>
  </div>
);
