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
    border-radius: 5px 5px 0 0;
  }

  &:last-child {
    border-radius: 0 0 5px 5px;
  }

  &:only-child {
    border-radius: 5px;
  }

  &:hover {
    background-color: ${p => p.theme.colors.lightSkyBlue};
    color: ${p => p.theme.colors.white};
  }

  &:active {
    background-color: ${p => p.theme.colors.darkSkyBlue};
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
    border-bottom: 8px solid ${p => p.theme.colors.black};
    position: absolute;
    right: 13px;
    top: 0;
  }
  &:before {
    border-bottom: 8px solid ${p => p.theme.colors.black};
    top: -9px;
    bottom: auto;
  }
  &:after {
    border-bottom: 8px solid ${p => p.theme.colors.white};
    top: -8px;
    bottom: auto;
  }
`;
