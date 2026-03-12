import styled, { keyframes } from 'styled-components';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';

const enterFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(120px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const enterFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-120px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const exitToRight = keyframes`
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(120px);
  }
`;

const exitToLeft = keyframes`
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(-120px);
  }
`;

const scaleIn = keyframes`
  from {
    opacity: 0;
    transform: rotateX(-30deg) scale(0.96);
  }
  to {
    opacity: 1;
    transform: rotateX(0deg) scale(1);
  }
`;

const scaleOut = keyframes`
  from {
    opacity: 1;
    transform: rotateX(0deg) scale(1);
  }
  to {
    opacity: 0;
    transform: rotateX(-10deg) scale(0.96);
  }
`;

export const StyledNavMenu = styled(NavigationMenu.Root)`
  position: relative;
  display: flex;
  align-items: stretch;
`;

export const StyledNavList = styled(NavigationMenu.List)`
  list-style: none;
  margin: 0;
  padding: ${({ theme }) => theme.spacing.xs};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.borderRadius.standard};
`;

export const StyledNavItem = styled(NavigationMenu.Item)`
  position: relative;
`;

export const StyledNavTrigger = styled(NavigationMenu.Trigger)`
  all: unset;
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing['2xs']};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  background: transparent;
  color: ${({ theme }) => theme.colors.neutral[700]};
  cursor: pointer;
  font-family: ${({ theme }) => theme.typography.fontFamily.sans};
  font-size: ${({ theme }) => theme.typography.scale.sm.size};
  line-height: ${({ theme }) => theme.typography.scale.sm.lineHeight};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  border-radius: ${({ theme }) => theme.borderRadius.standard};

  &:hover {
    background: ${({ theme }) => theme.colors.neutral[200]};
  }

  &:focus-visible {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.blue[300]};
  }

  svg {
    transition: transform 200ms ease;
  }

  &[data-state='open'] svg {
    transform: rotate(-180deg);
  }
`;

export const StyledNavIconTrigger = styled(NavigationMenu.Trigger)`
  all: unset;
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.colors.neutral[300]};
  border-radius: 999px;
  width: 36px;
  height: 36px;
  background: ${({ theme }) => theme.colors.neutral[50]};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: background 100ms ease-out, border-color 120ms ease-out;

  &:hover {
    background: ${({ theme }) => theme.colors.neutral[200]};
    border-color: ${({ theme }) => theme.colors.neutral[400]};
  }

  &:focus-visible {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.blue[300]};
  }
`;

export const StyledNavContent = styled(NavigationMenu.Content)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background: ${({ theme }) => theme.colors.neutral[50]};
  border-radius: ${({ theme }) => theme.borderRadius.standard};
  padding: ${({ theme }) => theme.spacing.sm};
  min-width: 220px;
  z-index: 3;
  animation-duration: 250ms;
  animation-timing-function: ease;

  &[data-motion='from-start'] {
    animation-name: ${enterFromLeft};
  }

  &[data-motion='from-end'] {
    animation-name: ${enterFromRight};
  }

  &[data-motion='to-start'] {
    animation-name: ${exitToLeft};
  }

  &[data-motion='to-end'] {
    animation-name: ${exitToRight};
  }

  button {
    text-decoration: none;
  }
`;

export const StyledNavIndicatorArrow = styled.div`
  position: relative;
  top: 70%;
  background-color: ${({ theme }) => theme.colors.neutral[50]};
  transform: rotate(45deg);
  border-top-left-radius: 2px;
  border: 1px solid ${({ theme }) => theme.colors.neutral[300]};
  border-bottom: none;
  border-right: none;
`;

export const StyledNavViewportPosition = styled.div`
  position: absolute;
  display: flex;
  justify-content: flex-end;
  width: 100%;
  top: 100%;
  left: 0;
  perspective: 2000px;
`;

export const StyledNavViewport = styled(NavigationMenu.Viewport)`
  position: relative;
  transform-origin: top center;
  margin-top: ${({ theme }) => theme.spacing.xs};
  width: 100%;
  background-color: ${({ theme }) => theme.colors.neutral[50]};
  border-radius: ${({ theme }) => theme.borderRadius.standard};
  overflow: visible;
  box-shadow: ${({ theme }) => theme.boxShadow.xlarge};
  height: var(--radix-navigation-menu-viewport-height);
  transition: width, height, 300ms ease;

  &[data-state='open'] {
    animation: ${scaleIn} 200ms ease;
  }

  &[data-state='closed'] {
    animation: ${scaleOut} 200ms ease;
  }
`;
