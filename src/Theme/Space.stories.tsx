import { StoryFn, Meta } from '@storybook/react';
import styled from 'styled-components';
import { DisplayBox, DisplayBoxWrapper } from '../DisplayBox';
import { DisplayBoxTitle, DisplayBoxSubTitle } from '../DisplayBox/DisplayBox.styles';
import { Fragment } from 'react';

export default {
  title: 'Theme/Space',
} as Meta;

const legacySpaces = [
  { size: '4px', name: 'xxsmall' },
  { size: '8px', name: 'xsmall' },
  { size: '16px', name: 'small' },
  { size: '24px', name: 'base' },
  { size: '32px', name: 'large' },
  { size: '48px', name: 'xlarge' },
  { size: '64px', name: 'xxlarge' },
];

const newSpaces = [
  { size: '1px', name: '3xs' },
  { size: '2px', name: '2xs' },
  { size: '4px', name: 'xs' },
  { size: '8px', name: 'sm' },
  { size: '16px', name: 'md' },
  { size: '24px', name: 'lg' },
  { size: '32px', name: 'xl' },
  { size: '48px', name: '2xl' },
  { size: '64px', name: '3xl' },
];

const SectionTitle = styled.h3`
  margin: 0;
  padding: ${({ theme }) => theme.spacing.base} ${({ theme }) => theme.spacing.base} 0;
  color: ${({ theme }) => theme.colors.grayDark};
  font-family: ${({ theme }) => theme.typography.fontFamily.sans};
  font-size: ${({ theme }) => theme.typography.scale.md.size};
  line-height: ${({ theme }) => theme.typography.scale.md.lineHeight};
`;

const SectionNote = styled.p`
  margin: 0;
  padding: ${({ theme }) => theme.spacing.xsmall} ${({ theme }) => theme.spacing.base} 0;
  color: ${({ theme }) => theme.colors.grayDark};
  font-family: ${({ theme }) => theme.typography.fontFamily.sans};
  font-size: ${({ theme }) => theme.typography.scale.sm.size};
  line-height: ${({ theme }) => theme.typography.scale.sm.lineHeight};
`;

export const Space: StoryFn = () => (
  <Fragment>
    <SectionTitle>Legacy spacing tokens (deprecated)</SectionTitle>
    <SectionNote>Use only while migrating older components.</SectionNote>
    <DisplayBoxWrapper showBorder={false}>
      {legacySpaces.map(space => (
        <DisplayBox key={`legacy-${space.name}`} size={space.size} borderRadius="xsmall">
          <DisplayBoxSubTitle>Legacy</DisplayBoxSubTitle>
          <DisplayBoxSubTitle>{space.name}</DisplayBoxSubTitle>
          <DisplayBoxTitle>{space.size}</DisplayBoxTitle>
        </DisplayBox>
      ))}
    </DisplayBoxWrapper>

    <SectionTitle>New spacing tokens (preferred)</SectionTitle>
    <SectionNote>Use these tokens for all new work.</SectionNote>
    <DisplayBoxWrapper showBorder={false}>
      {newSpaces.map(space => (
        <DisplayBox key={`new-${space.name}`} size={space.size} borderRadius="xsmall">
          <DisplayBoxSubTitle>Preferred</DisplayBoxSubTitle>
          <DisplayBoxSubTitle>{space.name}</DisplayBoxSubTitle>
          <DisplayBoxTitle>{space.size}</DisplayBoxTitle>
        </DisplayBox>
      ))}
    </DisplayBoxWrapper>
  </Fragment>
);
