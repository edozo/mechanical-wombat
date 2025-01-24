import styled, { css } from 'styled-components';
import { Props } from './Switch';

export const Checkbox = styled.input`
  display: none;
`;

export const Label = styled.label`
  display: block;
  overflow: hidden;
  cursor: pointer;
  border: 0 solid #ccc;
  border-radius: 20px;
  margin: 0;
`;

export const ToggleInner = styled.span<Partial<Props>>`
  display: block;
  width: 200%;
  margin-left: -100%;
  transition: margin 0.3s ease-in 0s;
  &:before,
  &:after {
    display: inline-flex;
    float: left;
    width: 50%;
    height: 26px;
    padding: 0;
    font-size: 12px;
    color: white;
    font-weight: bold;
    box-sizing: border-box;
    align-items: center;
    justify-content: center;
  }
  &:before {
    content: attr(data-yes);
    text-transform: uppercase;
    padding-left: 6px;
    padding-right: 24px;
    background-color: ${p => p.theme.colors.aliases.primary};
    color: #fff;
  }

  :after {
    content: attr(data-no);
    text-transform: uppercase;
    padding-right: 6px;
    padding-left: 24px;
    background-color: #ccc;
    color: #fff;
  }

  ${p =>
    p.disabled &&
    css`
      background-color: #ccc;
      cursor: not-allowed;
      &:before {
        background-color: #ccc;
        cursor: not-allowed;
      }
    `};
  ${p =>
    p.size === 'small' &&
    css`
      &:after,
      &:before {
        height: 20px;
      }
    `}
`;

export const Toggle = styled.span<Partial<Props>>`
  display: block;
  width: 18px;
  margin: 4px;
  background: #fff;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 30px;
  border-radius: 20px;
  transition: all 0.3s ease-in 0s;
  ${p =>
    p.disabled &&
    css`
      background-color: #ccc;
      cursor: not-allowed;
      &:before {
        background-color: #ccc;
        cursor: not-allowed;
      }
    `};
  ${p =>
    p.size === 'small' &&
    css`
      width: 16px;
      right: 38px;
      margin: 2px;
    `}
`;

export const SwitchParent = styled.div<Partial<Props>>`
  position: relative;
  width: 56px;
  display: inline-block;
  vertical-align: middle;
  user-select: none;
  text-align: left;
  > ${Checkbox}:checked + ${Label} {
    ${ToggleInner} {
      margin-left: 0;
    }
    ${Toggle} {
      right: 0px;
    }
  }

  ${p =>
    p.size === 'small' &&
    css`
      width: 58px;
    `}
`;
