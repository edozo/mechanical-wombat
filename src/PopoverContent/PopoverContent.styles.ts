import styled from 'styled-components';

export interface StyleProps {
  radius?: 'small' | 'standard' | 'large';
}

export const StyledPopoverContent = styled.div<StyleProps>`
  box-shadow: ${({ theme }) => theme.boxShadow.standard};
  background-color: ${({ theme }) => theme.colors.white};
  position: relative;
  display: inline-block;
  border-radius: ${({ theme, radius }) => theme.borderRadius[radius || 'standard']};

  &:after {
    content: '';
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    position: absolute;
    right: 13px;
    border-bottom: 8px solid ${({ theme }) => theme.colors.white};
    top: -8px;
    bottom: auto;
  }
`;
