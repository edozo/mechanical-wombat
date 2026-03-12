import React, { Fragment } from 'react';
import { SkeletonLine } from './SkeletonLine';
import { SkeletonGroup } from './SkeletonGroup';

type SkeletonCompoundComponent = React.FC<{ children?: React.ReactNode }> & {
  Line: typeof SkeletonLine;
  Group: typeof SkeletonGroup;
};

export const Skeleton: SkeletonCompoundComponent = ({ children }) => {
  return <Fragment>{children}</Fragment>;
};

Skeleton.Line = SkeletonLine;
Skeleton.Group = SkeletonGroup;
