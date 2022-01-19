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
  font-size: ${p => p.theme.font.size.text.base};
  line-height: ${p => p.theme.font.lineHeight.text.base};
  font-weight: ${p => p.theme.font.weight.bold};
  color: #060048;
  display: flex;
  margin-left: ${p => p.theme.spacing.small};
`;

export const StyledText = styled.span`
  font-family: ${p => p.theme.font.family.main};
`;

export const ItemWrapper = styled.span`
  display: grid;
  grid-template-columns: 220px auto;
  align-items: center;
  font-family: ${p => p.theme.font.family.main};
  font-size: ${p => p.theme.font.size.text.small};
  font-weight: ${p => p.theme.font.weight.regular};
`;

export const ListItemWrapper = styled.div`
  border-bottom: 1px solid ${p => p.theme.colors.gray};
`;

export const SwitchAppWrapper = styled.span`
  display: grid;
  grid-template-columns: 10px auto;
  svg {
    margin-top: 4px;
    margin-left: -6px;
  }
`;
