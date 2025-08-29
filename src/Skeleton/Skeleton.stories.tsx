import { Skeleton } from './Skeleton';

export default {
  title: 'Components/Skeleton',
};

export const SkeletonBasicGroup = () => (
  <Skeleton.Group>
    <Skeleton.Line />
    <Skeleton.Line width="80%" height="20px" radius="xlarge" />
    <Skeleton.Line width="60%" />
    <Skeleton.Line height="20px" radius="xlarge" />
  </Skeleton.Group>
);

export const SkeletonNestedGroup = () => (
  <Skeleton.Group gap="xlarge">
    <Skeleton.Group gap="large">
      <Skeleton.Group>
        <Skeleton.Line />
        <Skeleton.Line width="80%" height="20px" radius="xlarge" />
        <Skeleton.Line width="60%" />
        <Skeleton.Line height="20px" radius="xlarge" />
      </Skeleton.Group>
      <Skeleton.Group>
        <Skeleton.Line />
        <Skeleton.Line width="80%" height="20px" radius="xlarge" />
        <Skeleton.Line width="60%" />
        <Skeleton.Line height="20px" radius="xlarge" />
      </Skeleton.Group>
      <Skeleton.Line width="80%" height="20px" radius="xlarge" />
    </Skeleton.Group>
    <Skeleton.Group gap="large">
      <Skeleton.Group>
        <Skeleton.Line />
        <Skeleton.Line width="80%" height="20px" radius="xlarge" />
        <Skeleton.Line width="60%" />
        <Skeleton.Line height="20px" radius="xlarge" />
      </Skeleton.Group>
      <Skeleton.Group>
        <Skeleton.Line />
        <Skeleton.Line width="80%" height="20px" radius="xlarge" />
        <Skeleton.Line width="60%" />
        <Skeleton.Line height="20px" radius="xlarge" />
      </Skeleton.Group>
      <Skeleton.Line width="80%" height="20px" radius="xlarge" />
    </Skeleton.Group>
  </Skeleton.Group>
);
