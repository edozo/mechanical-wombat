import styled from 'styled-components';

export const StyledMenuItemWrapper = styled.div`
  > a {
    position: relative;
    display: flex;
    height: 100%;
    align-items: center;
    text-decoration: none;
    font-size: ${p => p.theme.font.size.text.base};
    margin-left: ${p => p.theme.spacing.small};
    color: ${p => p.theme.colors.grayDarker};

    &.active:after {
      height: 6px;
    }

    &:after {
      content: '';
      transition: height 0.2s ease-out;
      height: 0px;
      width: 100%;
      background: ${p => p.theme.colors.aliases.primary};
      position: absolute;
      bottom: 0;
      left: 0;
    }

    :hover {
      text-decoration: none;
      color: ${p => p.theme.colors.aliases.primary};
    }

    :hover:after {
      height: 6px;
    }
  }
`;
