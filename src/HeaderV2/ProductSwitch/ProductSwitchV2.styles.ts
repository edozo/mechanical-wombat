import styled from 'styled-components';

export const ProductsButtonLabel = styled.span`
  display: inline-flex;
  align-items: center;
`;

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
`;
