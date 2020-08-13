import styled from 'styled-components/macro';

export interface StyleProps {
  radius?: 'small' | 'standard' | 'large';
}

export const StyledPopoverContent = styled.div<StyleProps>`
  box-shadow: ${p => p.theme.boxShadow.standard};
  background-color: ${p => p.theme.colors.white};
  position: relative;
  display: inline-block;
  border-radius: ${p => p.theme.borderRadius[p.radius || 'standard']};

  &:after {
    content: '';
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    position: absolute;
    right: 13px;
    border-bottom: 8px solid ${p => p.theme.colors.white};
    top: -8px;
    bottom: auto;
  }
`;
