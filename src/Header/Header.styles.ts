import styled from 'styled-components';

export const StyledHeader = styled.div`
  position: sticky;
  top: 0;
  max-height: 60px;
  min-height: 60px;
  background: ${p => p.theme.colors.white};
  box-shadow: ${p => p.theme.boxShadow.xsmall};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0 0 ${p => p.theme.spacing.base};
  z-index: 2;
  width: 100%;
  a {
    text-decoration: none;
  }
`;

export const StyledButtonTitle = styled.div`
  font-family: ${p => p.theme.font.family.main};
  font-size: ${p => p.theme.spacing.small};
  font-weight: ${p => p.theme.font.weight.bold};
  line-height: ${p => p.theme.spacing.base};
  color: #060048;
`;
