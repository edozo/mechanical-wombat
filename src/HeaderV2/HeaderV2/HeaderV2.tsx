import React from 'react';
import { StyledHeaderV2 } from 'HeaderV2/HeaderV2/HeaderV2.styles';

export type HeaderV2Props = React.HTMLAttributes<HTMLDivElement>;

export const HeaderV2: React.FC<HeaderV2Props> = ({ children }) => <StyledHeaderV2>{children}</StyledHeaderV2>;
