import React, { Fragment, PropsWithChildren } from 'react';
import { SkeletonLine } from './SkeletonLine';
import { SkeletonGroup } from './SkeletonGroup';

interface SkeletonProps {
  Line: typeof SkeletonLine;
  Group: typeof SkeletonGroup;
}

type SkeletonCompoundComponent = React.FC<PropsWithChildren<SkeletonProps>> & {
  Line: typeof SkeletonLine;
  Group: typeof SkeletonGroup;
};

export const Skeleton: SkeletonCompoundComponent = ({ children }) => {
  return <Fragment>{children}</Fragment>;
};

Skeleton.Line = SkeletonLine;
Skeleton.Group = SkeletonGroup;
