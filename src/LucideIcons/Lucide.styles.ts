import styled from 'styled-components';
import { LucideIconSize } from './Lucide';

export const LucideIconWrapper = styled.span<{ size: LucideIconSize }>`
  display: inline-flex;

  svg {
    width: ${({ theme, size }) => theme.icons[size]};
    height: ${({ theme, size }) => theme.icons[size]};
  }
`;
