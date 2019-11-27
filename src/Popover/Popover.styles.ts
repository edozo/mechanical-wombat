import styled, { css } from 'styled-components';

interface OptionProps {
  variant?: string;
}

export const FormatOption = styled.div<OptionProps>`
  text-align: center;
  font-weight: bold;
  height: 36px;
  font-size: 12px;
  line-height: 16px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:first-child {
    border-radius: ${p => p.theme.borderRadiusSmall} ${p => p.theme.borderRadiusSmall} 0 0;
  }

  &:last-child {
    border-radius: 0 0 ${p => p.theme.borderRadiusSmall} ${p => p.theme.borderRadiusSmall};
  }

  &:only-child {
    border-radius: ${p => p.theme.borderRadiusSmall};
  }

  &:hover {
    background-color: ${p => p.theme.colors.aliases.primaryLight};
    color: ${p => p.theme.colors.white};
  }

  &:active {
    background-color: ${p => p.theme.colors.aliases.primaryDark};
  }

  &:not(:last-child) {
    border-bottom: 1px solid ${p => p.theme.colors.gray3};
  }

  ${p =>
    p.variant === 'disabled' &&
    css`
      &:hover {
        background-color: ${p.theme.colors.gray3};
      }
    `};
`;

export const FormatList = styled.div`
  box-shadow: ${p => p.theme.boxShadowSmall};
  background-color: ${p => p.theme.colors.white};
  width: 80px;
  position: absolute;
  left: 35px;
  top: 35px;
  border-radius: 5px;
  &:before,
  &:after {
    content: '';
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    position: absolute;
    right: 13px;
    top: 0;
  }
  &:before {
    top: -9px;
    bottom: auto;
  }
  &:after {
    border-bottom: 8px solid ${p => p.theme.colors.white};
    top: -8px;
    bottom: auto;
  }
`;
