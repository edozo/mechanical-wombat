import React from 'react';
import { Story, Meta } from '@storybook/react';
import {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  TextXLarge,
  TextLarge,
  TextBase,
  TextSmall,
  TextXSmall,
  TextXXSmall,
  Title,
  SubTitle,
} from './Typography';
import { DisplayBoxTitle, DisplayBoxSubTitle } from '../DisplayBox/DisplayBox.styles.ts';
import { DisplayWrapper } from './Typography.styles.ts';

export default {
  title: 'Theme/Typography',
  component: DisplayWrapper,
} as Meta;

const previewTitle = 'Lorem ipsum dolor sit amet.';
const previewBody =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis leo enim. Ut finibus dictum nisi eu bibendum. Maecenas fringilla vehicula augue, eu fermentum lorem venenatis ac. Maecenas consectetur tellus ut tellus tempor congue. Donec felis mauris, tincidunt in pharetra eget, faucibus vel risus. Nullam semper neque porttitor est hendrerit, ac iaculis ex rhoncus. Proin vitae ante vel ligula consectetur varius in non dolor. Praesent consectetur laoreet scelerisque. Cras vestibulum pharetra tincidunt. Sed auctor maximus tellus. Proin at dui orci. Pellentesque fermentum, diam et commodo aliquet, massa est scelerisque sapien, eu tempus lectus augue sit amet turpis. Nulla facilisi. Cras et nulla vestibulum, auctor dui eu, consectetur mauris.';

interface InfoBlockProps {
  fontWeight: string;
  font?: string;
  fontSize: string;
  lineHeight: string;
  letterSpacing?: string;
}
const InfoBlock: React.FC<InfoBlockProps> = ({
  fontWeight,
  font = 'Open Sans',
  fontSize,
  lineHeight,
  letterSpacing,
  children,
}) => (
  <DisplayWrapper>
    {children}
    <hr />
    <DisplayBoxSubTitle>{fontWeight}</DisplayBoxSubTitle>
    <DisplayBoxTitle>{font}</DisplayBoxTitle>
    <DisplayBoxSubTitle>{fontSize}</DisplayBoxSubTitle>
    <DisplayBoxSubTitle>{lineHeight}</DisplayBoxSubTitle>
    {letterSpacing && <DisplayBoxSubTitle>{letterSpacing}</DisplayBoxSubTitle>}
  </DisplayWrapper>
);

export const H1Block: Story = () => (
  <InfoBlock fontWeight="Bold" fontSize="2.5rem" lineHeight="3.375rem" letterSpacing="0.02em">
    <H1>{previewTitle}</H1>
  </InfoBlock>
);

export const H2Block: Story = () => (
  <InfoBlock fontWeight="Semi-Bold" fontSize="2rem" lineHeight="2.75rem" letterSpacing="0.01em">
    <H2>{previewTitle}</H2>
  </InfoBlock>
);

export const H3Block: Story = () => (
  <InfoBlock fontWeight="Bold" fontSize="1.5rem" lineHeight="2.125rem" letterSpacing="0.01em">
    <H3>{previewTitle}</H3>
  </InfoBlock>
);

export const H4Block: Story = () => (
  <InfoBlock fontWeight="Semi-Bold" fontSize="1.25rem" lineHeight="1.875rem" letterSpacing="0.01em">
    <H4>{previewTitle}</H4>
  </InfoBlock>
);

export const H5Block: Story = () => (
  <InfoBlock fontWeight="Semi-Bold" fontSize="1rem" lineHeight="1.5rem" letterSpacing="0.01em">
    <H5>{previewTitle}</H5>
  </InfoBlock>
);

export const H6Block: Story = () => (
  <InfoBlock fontWeight="Regular" fontSize="0.75rem" lineHeight="1rem" letterSpacing="0.08em">
    <H6>{previewTitle}</H6>
  </InfoBlock>
);

export const TextXLargeBlock: Story = () => (
  <InfoBlock fontWeight="Regular" fontSize="1.25rem" lineHeight="1.875rem">
    <TextXLarge>{previewBody}</TextXLarge>
  </InfoBlock>
);

export const TextLargeBlock: Story = () => (
  <InfoBlock fontWeight="Regular" fontSize="1.125rem" lineHeight="1.75rem">
    <TextLarge>{previewBody}</TextLarge>
  </InfoBlock>
);

export const TextBaseBlock: Story = () => (
  <InfoBlock fontWeight="Regular" fontSize="1rem" lineHeight="1.5rem">
    <TextBase>{previewBody}</TextBase>
  </InfoBlock>
);

export const TextSmallBlock: Story = () => (
  <InfoBlock fontWeight="Regular" fontSize="0.875rem" lineHeight="1.25rem">
    <TextSmall>{previewBody}</TextSmall>
  </InfoBlock>
);

export const TextXSmallBlock: Story = () => (
  <InfoBlock fontWeight="Regular" fontSize="0.75rem" lineHeight="1rem">
    <TextXSmall>{previewBody}</TextXSmall>
  </InfoBlock>
);

export const TextXXSmallBlock: Story = () => (
  <InfoBlock fontWeight="Regular" fontSize="0.625" lineHeight="0.875rem">
    <TextXLarge>{previewBody}</TextXLarge>
    <TextXXSmall>{previewBody}</TextXXSmall>
  </InfoBlock>
);

export const TitleBlock: Story = () => (
  <InfoBlock fontWeight="Regular" fontSize="1rem" lineHeight="1.5rem">
    <Title>{previewBody}</Title>
  </InfoBlock>
);

export const SubtitleBlock: Story = () => (
  <InfoBlock fontWeight="Regular" fontSize="0.875rem" lineHeight="1.25rem">
    <SubTitle>{previewBody}</SubTitle>
  </InfoBlock>
);
