// TODO: Finalize this once talked to Silvia about design system
import styled from 'styled-components';
import Tippy from '@tippyjs/react';
import { TextXXSmall } from '../Typography';

export const StyledPopover = styled(Tippy)`
  background-color: ${p => p.theme.colors.white};
  color: ${p => p.theme.colors.grayDarker};
  box-shadow: ${p => p.theme.boxShadow.standard};

  .tippy-arrow {
    color: ${p => p.theme.colors.white};
  }
`;

export const StyledTitle = styled(TextXXSmall)`
  font-weight: ${p => p.theme.font.weight.semibold};
  margin-bottom: ${p => p.theme.spacing.xxsmall};
`;
