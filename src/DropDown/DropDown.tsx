import * as React from 'react';
import Downshift from 'downshift';
import {
  StyledDownshiftPreview,
  StyledDownshiftPreviewInner,
  StyledList,
  StyledListItem,
  StyledListItemImage,
  StyledArrow,
} from './DropDown.styles';
import arrow from './arrow.svg'; // TODO: Make the react SVG as component work

export interface Item {
  label: string;
  value: string;
  thumbnail?: string;
}

export interface Props {
  children: React.ReactNode;
  items: Item[];
}

const itemToString = (item: Item): string => (item ? item.value : '');

export const DropDown = (props: Props): JSX.Element => (
  <div>
    <Downshift {...props} itemToString={itemToString}>
      {({ getMenuProps, getItemProps, getToggleButtonProps, highlightedIndex, selectedItem, isOpen }) => (
        <div>
          <StyledDownshiftPreview {...getToggleButtonProps()}>
            {selectedItem ? (
              <StyledDownshiftPreviewInner>
                {selectedItem.thumbnail && (
                  <StyledListItemImage alt={`${selectedItem.label} - thumbnail`} src={selectedItem.thumbnail} />
                )}
                {selectedItem.label}
              </StyledDownshiftPreviewInner>
            ) : (
              <StyledDownshiftPreviewInner>
                {props.items[0].thumbnail && (
                  <StyledListItemImage alt={`${selectedItem.label} - thumbnail`} src={props.items[0].thumbnail} />
                )}
                {props.items[0].label}
              </StyledDownshiftPreviewInner>
            )}
            <StyledArrow isOpen={isOpen} alt={isOpen ? 'Close arrow' : 'Open arrow'} src={arrow} />
          </StyledDownshiftPreview>
          {isOpen && (
            <StyledList {...getMenuProps()}>
              {props.items.map((item: Item, index: number) => (
                <StyledListItem
                  highlighted={index === highlightedIndex}
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
        </div>
      )}
    </Downshift>
  </div>
);
