import * as React from 'react';
import Downshift from 'downshift';
import {
  StyledDownshiftWrapper,
  StyledDownshiftPreview,
  StyledDownshiftPreviewInner,
  StyledList,
  StyledListItem,
  StyledListItemImage,
  StyledArrow,
} from './DropDown.styles';
import arrow from './arrow.svg'; // TODO: Make the react SVG as component work

export interface DropDownItem {
  label: React.ReactNode;
  value: string | number;
  thumbnail?: string;
}

export interface Props {
  items: DropDownItem[];
  onChange: (item?: DropDownItem) => void;
  selectedItem: DropDownItem;
  initialSelectedItem?: DropDownItem;
}

const itemToString = (item: DropDownItem): string => (item ? item.value.toString() : '');

export const DropDown = (props: Props): JSX.Element => (
  <div>
    <Downshift {...props} itemToString={itemToString}>
      {({ getMenuProps, getItemProps, getToggleButtonProps, highlightedIndex, selectedItem, isOpen, getRootProps }) => (
        <StyledDownshiftWrapper {...getRootProps()}>
          <StyledDownshiftPreview {...getToggleButtonProps()}>
            <StyledDownshiftPreviewInner>
              {selectedItem && selectedItem.thumbnail && (
                <StyledListItemImage alt={`${selectedItem.label} - thumbnail`} src={selectedItem.thumbnail} />
              )}
              {selectedItem?.label}
            </StyledDownshiftPreviewInner>
            <StyledArrow isOpen={isOpen} alt={isOpen ? 'Close arrow' : 'Open arrow'} src={arrow} />
          </StyledDownshiftPreview>
          {isOpen && (
            <StyledList {...getMenuProps()}>
              {props.items.map((item: DropDownItem, index: number) => (
                <StyledListItem
                  highlighted={index === highlightedIndex}
                  selectedItem={item.value === selectedItem?.value}
                  {...getItemProps({
                    item,
                    key: item.value,
                  })}
                >
                  {item.thumbnail && <StyledListItemImage alt={`${item.label} - thumbnail`} src={item.thumbnail} />}
                  {item.label}
                </StyledListItem>
              ))}
            </StyledList>
          )}
        </StyledDownshiftWrapper>
      )}
    </Downshift>
  </div>
);
