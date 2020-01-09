import styled from 'styled-components';

export interface StyleProps {
  isOpen?: boolean;
  highlighted?: boolean;
}

export const StyledDownshiftPreview = styled.button`
  border: 1px solid ${p => p.theme.colors.steelBlueDark};
  border-radius: ${p => p.theme.borderRadius.small};
  background: white;
  width: 100%;
  display: flex;
  color: ${p => p.theme.colors.gray4};
  font-weight: 700;
  align-items: center;
  justify-content: space-between;
  padding: ${p => p.theme.spacing.xsmall};
  font-size: ${p => p.theme.font.size.bodySmall};
  :focus {
    outline: none;
  }
`;

export const StyledDownshiftPreviewInner = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: start;
`;

export const StyledList = styled.ul`
  margin: 0;
  list-style: none;
  padding-left: 0;
  position: relative;
  background: ${p => p.theme.colors.white};
  box-shadow: ${p => p.theme.boxShadow.standard};
  margin-top: ${p => p.theme.spacing.xsmall};
  border-radius: ${p => p.theme.borderRadius.standard};
  &:after {
    content: '';
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    position: absolute;
    left: 13px;
    border-bottom: 8px solid ${p => p.theme.colors.white};
    top: -8px;
    bottom: auto;
  }
  > :first-child {
    border-radius: ${p => p.theme.borderRadius.standard} ${p => p.theme.borderRadius.standard} 0 0;
  }
  > :last-child {
    border-radius: 0 0 ${p => p.theme.borderRadius.standard} ${p => p.theme.borderRadius.standard};
  }
`;

export const StyledListItem = styled.li<StyleProps>`
  margin: 0;
  padding: ${p => p.theme.spacing.xsmall};
  color: ${p => p.theme.colors.gray4};
  background: ${p => (p.highlighted ? p.theme.colors.gray3 : 'transparent')};
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: start;
  font-size: ${p => p.theme.font.size.bodySmall};
  transition: all 200ms;
`;

export const StyledListItemImage = styled.img`
  width: 40px;
  height: 32px;
  margin-right: ${p => p.theme.spacing.small};
  border: 1px solid ${p => p.theme.colors.steelBlueDark};
  border-radius: ${p => p.theme.borderRadius.small};
`;

export const StyledArrow = styled.img<StyleProps>`
  transform: rotate(${p => (p.isOpen ? '180deg' : '0deg')});
  transition: transform 200ms;
`;
