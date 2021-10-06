import styled from 'styled-components';

export const StyledPlatformMenu = styled.div`
  background: ${p => p.theme.colors.grayLighter};
  align-self: stretch;
  display: flex;
  align-items: center;
  padding: 0 ${p => p.theme.spacing.base} 0 ${p => p.theme.spacing.base};
  margin-left: ${p => p.theme.spacing.base};
  > * {
    margin-right: ${p => p.theme.spacing.small};
  }
  > :last-child {
    margin-right: 0;
  }
`;
