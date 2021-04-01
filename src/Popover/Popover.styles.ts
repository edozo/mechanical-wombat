// TODO: Finalize this once talked to Silvia about design system
import styled from 'styled-components';
import Tippy from '@tippyjs/react';
import { TextXXSmall } from '../Typography';

export const StyledPopover = styled(Tippy)`
  background-color: ${p => p.theme.colors.white};
  color: ${p => p.theme.colors.grayDarker};
  box-shadow: ${p => p.theme.boxShadow.standard};

  .tippy-content {
    padding: 0;
  }

  .tippy-arrow {
    color: ${p => p.theme.colors.white};
  }
`;

export const StyledTitle = styled(TextXXSmall)`
  font-weight: ${p => p.theme.font.weight.semibold};
  margin-bottom: ${p => p.theme.spacing.xxsmall};
`;

export const StyledButton = styled.button`
  background-color: ${p => p.theme.colors.grayLighter};
  border: 1px solid ${p => p.theme.colors.grayLighter};
  padding: ${p => p.theme.spacing.xsmall} ${p => p.theme.spacing.small};
  font-weight: ${p => p.theme.font.weight.semibold};
  font-size: ${p => p.theme.font.size.text.xxsmall};
  :hover {
    background-color: ${p => p.theme.colors.steelBlueLighter};
    border-color: ${p => p.theme.colors.steelBlueDark};
    color: ${p => p.theme.colors.aliases.primary};
    svg {
      fill: ${p => p.theme.colors.aliases.primary};
    }
  }
  :focus {
    outline: none;
    border-color: ${p => p.theme.colors.steelBlueDark};
  }
`;
