import styled from 'styled-components';
import { LucideIconSize } from './Lucide';

export const LucideIconWrapper = styled.span<{ size: LucideIconSize }>`
  display: inline-flex;

  svg {
    width: ${p => p.theme.icons[p.size]};
    height: ${p => p.theme.icons[p.size]};
  }
`;
