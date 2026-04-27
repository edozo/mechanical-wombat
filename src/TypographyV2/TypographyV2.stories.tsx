import * as React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Body, Caption, Display, HeadingLg, HeadingMd, HeadingSm, Label } from './TypographyV2';

export default {
  title: 'Components/TypographyV2',
  component: Display,
} as Meta;

const previewTitle = 'Lorem ipsum dolor sit amet.';
const previewBody =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis leo enim. Ut finibus dictum nisi eu bibendum.';

interface InfoBlockProps {
  typographyRole: string;
  element: string;
  fontWeight: string;
  fontSize: string;
  lineHeight: string;
  letterSpacing: string;
  children?: React.ReactNode;
}

const InfoBlock: React.FC<InfoBlockProps> = ({
  typographyRole,
  element,
  fontWeight,
  fontSize,
  lineHeight,
  letterSpacing,
  children,
}) => (
  <div style={{ padding: '16px', background: '#f9fafb', borderRadius: '6px', marginBottom: '8px' }}>
    {children}
    <hr style={{ margin: '12px 0', border: 'none', borderTop: '1px solid #e5e7eb' }} />
    <div
      style={{
        fontSize: '11px',
        color: '#6b7280',
        fontFamily: 'monospace',
        display: 'flex',
        gap: '16px',
        flexWrap: 'wrap',
      }}
    >
      <span>role: {typographyRole}</span>
      <span>element: &lt;{element}&gt;</span>
      <span>weight: {fontWeight}</span>
      <span>size: {fontSize}</span>
      <span>line-height: {lineHeight}</span>
      <span>letter-spacing: {letterSpacing}</span>
    </div>
  </div>
);

export const DisplayBlock: StoryFn = () => (
  <InfoBlock
    typographyRole="display"
    element="h1"
    fontWeight="600"
    fontSize="2.5rem"
    lineHeight="3rem"
    letterSpacing="-0.01em"
  >
    <Display>{previewTitle}</Display>
  </InfoBlock>
);

export const HeadingLgBlock: StoryFn = () => (
  <InfoBlock
    typographyRole="headingLg"
    element="h2"
    fontWeight="600"
    fontSize="2rem"
    lineHeight="2.5rem"
    letterSpacing="-0.01em"
  >
    <HeadingLg>{previewTitle}</HeadingLg>
  </InfoBlock>
);

export const HeadingMdBlock: StoryFn = () => (
  <InfoBlock
    typographyRole="headingMd"
    element="h3"
    fontWeight="600"
    fontSize="1.5rem"
    lineHeight="2rem"
    letterSpacing="-0.01em"
  >
    <HeadingMd>{previewTitle}</HeadingMd>
  </InfoBlock>
);

export const HeadingSmBlock: StoryFn = () => (
  <InfoBlock
    typographyRole="headingSm"
    element="h4"
    fontWeight="600"
    fontSize="1.25rem"
    lineHeight="1.75rem"
    letterSpacing="0"
  >
    <HeadingSm>{previewTitle}</HeadingSm>
  </InfoBlock>
);

export const BodyBlock: StoryFn = () => (
  <InfoBlock typographyRole="body" element="p" fontWeight="400" fontSize="1rem" lineHeight="1.5rem" letterSpacing="0">
    <Body>{previewBody}</Body>
  </InfoBlock>
);

export const LabelBlock: StoryFn = () => (
  <InfoBlock
    typographyRole="label"
    element="span"
    fontWeight="500"
    fontSize="0.875rem"
    lineHeight="1.25rem"
    letterSpacing="0"
  >
    <Label>{previewTitle}</Label>
  </InfoBlock>
);

export const CaptionBlock: StoryFn = () => (
  <InfoBlock
    typographyRole="caption"
    element="span"
    fontWeight="400"
    fontSize="0.75rem"
    lineHeight="1rem"
    letterSpacing="0"
  >
    <Caption>{previewBody}</Caption>
  </InfoBlock>
);

export const AllRoles: StoryFn = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
    <InfoBlock
      typographyRole="display"
      element="h1"
      fontWeight="600"
      fontSize="2.5rem"
      lineHeight="3rem"
      letterSpacing="-0.01em"
    >
      <Display>{previewTitle}</Display>
    </InfoBlock>
    <InfoBlock
      typographyRole="headingLg"
      element="h2"
      fontWeight="600"
      fontSize="2rem"
      lineHeight="2.5rem"
      letterSpacing="-0.01em"
    >
      <HeadingLg>{previewTitle}</HeadingLg>
    </InfoBlock>
    <InfoBlock
      typographyRole="headingMd"
      element="h3"
      fontWeight="600"
      fontSize="1.5rem"
      lineHeight="2rem"
      letterSpacing="-0.01em"
    >
      <HeadingMd>{previewTitle}</HeadingMd>
    </InfoBlock>
    <InfoBlock
      typographyRole="headingSm"
      element="h4"
      fontWeight="600"
      fontSize="1.25rem"
      lineHeight="1.75rem"
      letterSpacing="0"
    >
      <HeadingSm>{previewTitle}</HeadingSm>
    </InfoBlock>
    <InfoBlock typographyRole="body" element="p" fontWeight="400" fontSize="1rem" lineHeight="1.5rem" letterSpacing="0">
      <Body>{previewBody}</Body>
    </InfoBlock>
    <InfoBlock
      typographyRole="label"
      element="span"
      fontWeight="500"
      fontSize="0.875rem"
      lineHeight="1.25rem"
      letterSpacing="0"
    >
      <Label>{previewTitle}</Label>
    </InfoBlock>
    <InfoBlock
      typographyRole="caption"
      element="span"
      fontWeight="400"
      fontSize="0.75rem"
      lineHeight="1rem"
      letterSpacing="0"
    >
      <Caption>{previewBody}</Caption>
    </InfoBlock>
  </div>
);
