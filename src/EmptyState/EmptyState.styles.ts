import styled from 'styled-components';

export const EmptyStateWrapper = styled.div`
  border: 2px dashed ${({ theme }) => theme.colors.grayDark};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  padding: ${({ theme }) => theme.spacing.small};
  font-size: ${({ theme }) => theme.font.size.text.small};
  line-height: ${({ theme }) => theme.font.lineHeight.text.small};
  color: ${({ theme }) => theme.colors.grayDark};
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  > svg {
    fill: ${({ theme }) => theme.colors.grayDark};
  }
`;
