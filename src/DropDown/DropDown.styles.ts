import styled, { css } from 'styled-components';

export interface StyleProps {
  $isOpen?: boolean;
  highlighted?: boolean;
  selectedItem?: boolean;
  $disabled?: boolean;
  $size?: 'small' | 'standard';
}

export const StyledDownshiftWrapper = styled.div`
  position: relative;
`;

export const StyledDownshiftPreview = styled.button<StyleProps>`
  border: 1px solid ${p => p.theme.colors.steelBlueDark};
  border-radius: ${p => p.theme.borderRadius.small};
  background: white;
  width: 100%;
  display: flex;
  color: ${p => p.theme.colors.grayDark};
  font-weight: 700;
  align-items: center;
  justify-content: space-between;
  padding: ${p => (p.$size === 'small' ? p.theme.spacing.xxsmall : p.theme.spacing.xsmall)};
  font-size: ${p => (p.$size === 'small' ? p.theme.font.size.text.small : p.theme.font.size.text.base)};
  line-height: ${p => (p.$size === 'small' ? p.theme.font.lineHeight.text.small : p.theme.font.lineHeight.text.base)};
  &:focus {
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
  position: absolute;
  width: 100%;
  z-index: 1;
  background: ${p => p.theme.colors.white};
  box-shadow: ${p => p.theme.boxShadow.standard};
  margin-top: ${p => p.theme.spacing.xsmall};
  margin-bottom: ${p => p.theme.spacing.xsmall};
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
  padding: ${p => (p.$size === 'small' ? p.theme.spacing.xxsmall : p.theme.spacing.xsmall)};
  color: ${p => p.theme.colors.grayDark};
  background: transparent;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: start;
  font-size: ${p => (p.$size === 'small' ? p.theme.font.size.text.small : p.theme.font.size.text.base)};
  line-height: ${p => (p.$size === 'small' ? p.theme.font.lineHeight.text.small : p.theme.font.lineHeight.text.base)};
  transition: all 200ms;
  cursor: pointer;
  ${p =>
    p.$disabled &&
    css`
      color: ${p.theme.colors.gray};
      opacity: 0.6;
      cursor: not-allowed;
      pointer-events: none;
    `};

  ${p =>
    p.highlighted &&
    !p.$disabled &&
    css`
      background: ${p.theme.colors.grayLighter};
    `};

  ${p =>
    p.selectedItem &&
    !p.$disabled &&
    css`
      background: ${p.theme.colors.gray};
    `};
`;

export const StyledListItemImage = styled.img<StyleProps>`
  width: ${p => (p.$size === 'small' ? '32px' : '40px')};
  height: ${p => (p.$size === 'small' ? '24px' : '32px')};
  margin-right: ${p => (p.$size === 'small' ? p.theme.spacing.xsmall : p.theme.spacing.small)};
  border: 1px solid ${p => p.theme.colors.steelBlueDark};
  border-radius: ${p => p.theme.borderRadius.small};
`;

export const StyledArrow = styled.span<StyleProps>`
  display: inline-flex;
  transform: rotate(${p => (p.$isOpen ? '180deg' : '0deg')});
  transition: transform 200ms;
  line-height: 0;
  align-items: center;
  width: ${p => (p.$size === 'small' ? '16px' : '24px')};
  height: ${p => (p.$size === 'small' ? '16px' : '24px')};
  margin-left: ${p => (p.$size === 'small' ? '4px' : '8px')};
`;
