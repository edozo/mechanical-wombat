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
  border: 1px solid ${({ theme }) => theme.colors.steelBlueDark};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  background: white;
  width: 100%;
  display: flex;
  color: ${({ theme }) => theme.colors.grayDark};
  font-weight: 700;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme, $size }) => ($size === 'small' ? theme.spacing.xxsmall : theme.spacing.xsmall)};
  font-size: ${({ theme, $size }) => ($size === 'small' ? theme.font.size.text.small : theme.font.size.text.base)};
  line-height: ${({ theme, $size }) =>
    $size === 'small' ? theme.font.lineHeight.text.small : theme.font.lineHeight.text.base};
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
  background: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.boxShadow.standard};
  margin-top: ${({ theme }) => theme.spacing.xsmall};
  margin-bottom: ${({ theme }) => theme.spacing.xsmall};
  border-radius: ${({ theme }) => theme.borderRadius.standard};
  &:after {
    content: '';
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    position: absolute;
    left: 13px;
    border-bottom: 8px solid ${({ theme }) => theme.colors.white};
    top: -8px;
    bottom: auto;
  }
  > :first-child {
    border-radius: ${({ theme }) => theme.borderRadius.standard} ${({ theme }) => theme.borderRadius.standard} 0 0;
  }
  > :last-child {
    border-radius: 0 0 ${({ theme }) => theme.borderRadius.standard} ${({ theme }) => theme.borderRadius.standard};
  }
`;

export const StyledListItem = styled.li<StyleProps>`
  margin: 0;
  padding: ${({ theme, $size }) => ($size === 'small' ? theme.spacing.xxsmall : theme.spacing.xsmall)};
  color: ${({ theme }) => theme.colors.grayDark};
  background: transparent;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: start;
  font-size: ${({ theme, $size }) => ($size === 'small' ? theme.font.size.text.small : theme.font.size.text.base)};
  line-height: ${({ theme, $size }) =>
    $size === 'small' ? theme.font.lineHeight.text.small : theme.font.lineHeight.text.base};
  transition: all 200ms;
  cursor: pointer;
  ${({ theme, $disabled }) =>
    $disabled &&
    css`
      color: ${theme.colors.gray};
      opacity: 0.6;
      cursor: not-allowed;
      pointer-events: none;
    `};

  ${({ theme, highlighted, $disabled }) =>
    highlighted &&
    !$disabled &&
    css`
      background: ${theme.colors.grayLighter};
    `};

  ${({ theme, selectedItem, $disabled }) =>
    selectedItem &&
    !$disabled &&
    css`
      background: ${theme.colors.gray};
    `};
`;

export const StyledListItemImage = styled.img<StyleProps>`
  width: ${({ $size }) => ($size === 'small' ? '32px' : '40px')};
  height: ${({ $size }) => ($size === 'small' ? '24px' : '32px')};
  margin-right: ${({ theme, $size }) => ($size === 'small' ? theme.spacing.xsmall : theme.spacing.small)};
  border: 1px solid ${({ theme }) => theme.colors.steelBlueDark};
  border-radius: ${({ theme }) => theme.borderRadius.small};
`;

export const StyledArrow = styled.span<StyleProps>`
  display: inline-flex;
  transform: rotate(${({ $isOpen }) => ($isOpen ? '180deg' : '0deg')});
  transition: transform 200ms;
  line-height: 0;
  align-items: center;
  width: ${({ $size }) => ($size === 'small' ? '16px' : '24px')};
  height: ${({ $size }) => ($size === 'small' ? '16px' : '24px')};
  margin-left: ${({ $size }) => ($size === 'small' ? '4px' : '8px')};
`;
