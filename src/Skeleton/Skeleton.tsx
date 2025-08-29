import { Fragment, PropsWithChildren } from 'react';
import { SkeletonLine } from './SkeletonLine';
import { SkeletonGroup } from './SkeletonGroup';

export type SkeletonCompoundComponent = ((props: PropsWithChildren<{}>) => JSX.Element) & {
  Line: typeof SkeletonLine;
  Group: typeof SkeletonGroup;
};

export const Skeleton: SkeletonCompoundComponent = ({ children }) => {
  return <Fragment>{children}</Fragment>;
};

Skeleton.Line = SkeletonLine;
Skeleton.Group = SkeletonGroup;
