import styled, { css } from 'styled-components';

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

export const ToggleInner = styled.span`
  display: block;
  width: 200%;
  margin-left: -100%;
  transition: margin 0.3s ease-in 0s;
  &:before,
  &:after {
    display: block;
    float: left;
    width: 50%;
    height: 34px;
    padding: 0;
    line-height: 34px;
    font-size: 14px;
    color: white;
    font-weight: bold;
    box-sizing: border-box;
  }
  &:before {
    content: attr(data-yes);
    text-transform: uppercase;
    padding-left: 10px;
    background-color: #f90;
    color: #fff;
  }

  :after {
    content: attr(data-no);
    text-transform: uppercase;
    padding-right: 10px;
    background-color: #ccc;
    color: #fff;
    text-align: right;
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
    p.small &&
    css`
      &:after,
      &:before {
        content: '';
        height: 20px;
        line-height: 20px;
      }
    `}
`;

export const Toggle = styled.span`
  display: block;
  width: 24px;
  margin: 5px;
  background: #fff;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 40px;
  border: 0 solid #ccc;
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
    p.small &&
    css`
      width: 16px;
      right: 20px;
      margin: 2px;
    `}
`;

export const SwitchParent = styled.div`
  position: relative;
  width: 75px;
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
    p.small &&
    css`
      width: 40px;
    `}
`;
