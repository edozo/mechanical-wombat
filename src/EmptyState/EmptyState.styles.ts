import styled from 'styled-components';

export const EmptyStateWrapper = styled.div`
  border: 2px dashed ${p => p.theme.colors.grayDark};
  border-radius: ${p => p.theme.borderRadius.small};
  padding: ${p => p.theme.spacing.small};
  font-size: ${p => p.theme.font.size.text.small};
  line-height: ${p => p.theme.font.lineHeight.text.small};
  color: ${p => p.theme.colors.grayDark};
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  > svg {
    fill: ${p => p.theme.colors.grayDark};
  }
`;
