import styled from 'styled-components';

export const StyledMenuItemV2 = styled.div`
  > a {
    display: inline-flex;
    align-items: center;
    height: 100%;
    color: ${({ theme }) => theme.colors.neutral[700]};
    font-family: ${({ theme }) => theme.typography.fontFamily.sans};
    font-size: ${({ theme }) => theme.typography.scale.sm.size};
    line-height: ${({ theme }) => theme.typography.scale.sm.lineHeight};
    font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
    text-decoration: none;
    padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.sm};
    border-radius: ${({ theme }) => theme.borderRadius.standard};

    &:hover {
      background: ${({ theme }) => theme.colors.neutral[200]};
    }

    &:focus-visible {
      box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.blue[900]};
      outline: none;
    }
  }
`;
