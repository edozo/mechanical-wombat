import styled from 'styled-components';

export const StyledLogoutButton = styled.button`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  width: 100%;
  border: none;
  background: transparent;
  cursor: pointer;
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.borderRadius.standard};
  font-family: ${({ theme }) => theme.typography.fontFamily.sans};
  font-size: ${({ theme }) => theme.typography.scale.sm.size};
  line-height: ${({ theme }) => theme.typography.scale.sm.lineHeight};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  text-decoration: none;
  color: ${({ theme }) => theme.colors.status.danger[700]};

  &:hover {
    background: ${({ theme }) => theme.colors.status.danger[100]};
    color: ${({ theme }) => theme.colors.status.danger[700]};
  }

  &:focus-visible {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.blue[400]};
    outline: none;
  }
`;
