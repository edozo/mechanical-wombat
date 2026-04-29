import { Meta, StoryFn } from '@storybook/react';
import { SkeletonV2 } from './SkeletonV2';

export default {
  title: 'Components/SkeletonV2',
  component: SkeletonV2,
} as Meta;

export const Lines: StoryFn = () => (
  <div style={{ width: 320, display: 'flex', flexDirection: 'column', gap: 8 }}>
    <SkeletonV2.Line />
    <SkeletonV2.Line width="75%" />
    <SkeletonV2.Line width="50%" />
  </div>
);

export const Grouped: StoryFn = () => (
  <div style={{ width: 320 }}>
    <SkeletonV2.Group gap="sm">
      <SkeletonV2.Line height="20px" />
      <SkeletonV2.Line width="80%" />
      <SkeletonV2.Line width="60%" />
    </SkeletonV2.Group>
  </div>
);

export const CardSkeleton: StoryFn = () => (
  <div style={{ width: 320 }}>
    <SkeletonV2.Group gap="md">
      <SkeletonV2.Line height="160px" radius="md" />
      <SkeletonV2.Group gap="xs">
        <SkeletonV2.Line height="20px" width="70%" />
        <SkeletonV2.Line width="90%" />
        <SkeletonV2.Line width="60%" />
      </SkeletonV2.Group>
    </SkeletonV2.Group>
  </div>
);

export const LightVariant: StoryFn = () => (
  <div style={{ width: 320, padding: 24, background: '#4338CA', borderRadius: 8 }}>
    <SkeletonV2.Group gap="sm">
      <SkeletonV2.Line color="light" height="20px" width="70%" />
      <SkeletonV2.Line color="light" />
      <SkeletonV2.Line color="light" width="80%" />
    </SkeletonV2.Group>
  </div>
);

export const Sizes: StoryFn = () => (
  <div style={{ width: 320, display: 'flex', flexDirection: 'column', gap: 8 }}>
    <SkeletonV2.Line height="8px" />
    <SkeletonV2.Line height="12px" />
    <SkeletonV2.Line height="16px" />
    <SkeletonV2.Line height="24px" />
    <SkeletonV2.Line height="40px" />
  </div>
);
