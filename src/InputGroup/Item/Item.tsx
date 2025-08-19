import React from 'react';
import { StyledItem } from './Item.styles';

export interface ItemProps {
  backgroundColor?: string;
  children?: React.ReactNode;
}

export const Item: React.FC<ItemProps> = ({ backgroundColor, children }) => (
  <StyledItem backgroundColor={backgroundColor}>{children}</StyledItem>
);
