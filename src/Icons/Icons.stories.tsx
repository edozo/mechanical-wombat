import React from 'react';
import { Story, Meta } from '@storybook/react';
import { DisplayBoxWrapper } from '../DisplayBox';
import { DisplayBoxSubTitle } from '../DisplayBox/DisplayBox.styles.ts';
import {
  ZoomIcon,
  ZoomInIcon,
  ZoomOutIcon,
  SaveIcon,
  WarningIcon,
  UpgradeIcon,
  RefreshIcon,
  QuestionIcon,
  ReloadIcon,
  EditIcon,
  DownloadIcon,
  PlusIcon,
  CloseIcon,
  MinusIcon,
  ArrowDownIcon,
  ArrowUpIcon,
  CheckIcon,
  InfoIcon,
  BinIcon,
  AutoPolygonIcon,
  DrawPolygonIcon,
  RectangleIcon,
  CircleIcon,
  ArrowToolIcon,
  LineToolIcon,
  MeasureToolIcon,
  EditToolIcon,
  ModifyToolIcon,
  TextIcon,
  DeleteAllIcon,
  SeparateIcon,
  DuplicateIcon,
  MergeIcon,
  LockOpenIcon,
  LockClosedIcon,
  DeleteIcon,
  DrawingLibraryIcon,
  DashedRectangleIcon,
  BoldIcon,
  ItalicIcon,
  HatchCDIcon,
  HatchCUIcon,
  HatchLAIcon,
  HatchLMinusIcon,
  HatchLPlusIcon,
  HatchLUIcon,
  SearchIcon,
  StackIcon,
  CenterMapIcon,
  HMarkIcon,
  TMarkIcon,
} from '.';

export default {
  title: 'Components/Icons',
  component: DisplayBoxWrapper,
} as Meta;

const solidIcons = [
  { name: 'Edit', component: <EditIcon /> },
  { name: 'Download', component: <DownloadIcon /> },
  { name: 'Plus', component: <PlusIcon /> },
  { name: 'Close', component: <CloseIcon /> },
  { name: 'Minus', component: <MinusIcon /> },
  { name: 'Arrow Down', component: <ArrowDownIcon /> },
  { name: 'Arrow Up', component: <ArrowUpIcon /> },
  { name: 'Question', component: <QuestionIcon /> },
  { name: 'Warning', component: <WarningIcon /> },
  { name: 'Refresh', component: <RefreshIcon /> },
  { name: 'Upgrade', component: <UpgradeIcon /> },
  { name: 'Check', component: <CheckIcon /> },
  { name: 'Info', component: <InfoIcon /> },
  { name: 'Bin', component: <BinIcon /> },
  { name: 'Bold', component: <BoldIcon /> },
  { name: 'Italic', component: <ItalicIcon /> },
  { name: 'Search', component: <SearchIcon /> },
  { name: 'H Mark', component: <HMarkIcon /> },
  { name: 'T Mark', component: <TMarkIcon /> },
];

const outlinedIcons = [
  { name: 'Save', component: <SaveIcon /> },
  { name: 'Zoom', component: <ZoomIcon /> },
  { name: 'Zoom Out', component: <ZoomOutIcon /> },
  { name: 'Zoom In', component: <ZoomInIcon /> },
  { name: 'Reload', component: <ReloadIcon /> },
  { name: 'Auto-Polygon', component: <AutoPolygonIcon /> },
  { name: 'Draw Polygon', component: <DrawPolygonIcon /> },
  { name: 'Rectangle', component: <RectangleIcon /> },
  { name: 'Circle', component: <CircleIcon /> },
  { name: 'Arrow Tool', component: <ArrowToolIcon /> },
  { name: 'Line Tool', component: <LineToolIcon /> },
  { name: 'Measure Tool', component: <MeasureToolIcon /> },
  { name: 'Edit Tool', component: <EditToolIcon /> },
  { name: 'Modify Tool', component: <ModifyToolIcon /> },
  { name: 'Text', component: <TextIcon /> },
  { name: 'Delete All', component: <DeleteAllIcon /> },
  { name: 'Separate', component: <SeparateIcon /> },
  { name: 'Duplicate', component: <DuplicateIcon /> },
  { name: 'Merge', component: <MergeIcon /> },
  { name: 'Lock Open', component: <LockOpenIcon /> },
  { name: 'Lock Closed', component: <LockClosedIcon /> },
  { name: 'Delete', component: <DeleteIcon /> },
  { name: 'Drawing Library', component: <DrawingLibraryIcon /> },
  { name: 'Dashed Rectangle', component: <DashedRectangleIcon /> },
  { name: 'Hatch CD', component: <HatchCDIcon /> },
  { name: 'Hatch CU', component: <HatchCUIcon /> },
  { name: 'Hatch LA', component: <HatchLAIcon /> },
  { name: 'Hatch LMinus', component: <HatchLMinusIcon /> },
  { name: 'Hatch LPlus', component: <HatchLPlusIcon /> },
  { name: 'Hatch LU', component: <HatchLUIcon /> },
  { name: 'Stack', component: <StackIcon /> },
  { name: 'Center Map', component: <CenterMapIcon /> },
];

export const Solid: Story = () => (
  <DisplayBoxWrapper>
    {solidIcons.map(icon => (
      <div style={{ padding: '8px', textAlign: 'center' }} key={icon.name}>
        {icon.component}
        <DisplayBoxSubTitle style={{ width: '60px' }}>{icon.name}</DisplayBoxSubTitle>
      </div>
    ))}
  </DisplayBoxWrapper>
);

export const Outline: Story = () => (
  <DisplayBoxWrapper>
    {outlinedIcons.map(icon => (
      <div style={{ padding: '8px', textAlign: 'center' }} key={icon.name}>
        {icon.component}
        <DisplayBoxSubTitle style={{ width: '60px' }}>{icon.name}</DisplayBoxSubTitle>
      </div>
    ))}
  </DisplayBoxWrapper>
);
