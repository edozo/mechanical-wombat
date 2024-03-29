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
  NewLineToolIcon,
  MeasureToolIcon,
  EditToolIcon,
  ModifyToolIcon,
  TextIcon,
  StreetNameTextIcon,
  BuildingNumberTextIcon,
  NotesTextIcon,
  DeleteAllIcon,
  SeparateIcon,
  DuplicateIcon,
  MergeIcon,
  LockOpenIcon,
  LockClosedIcon,
  DeleteIcon,
  DrawingLibraryIcon,
  DashedRectangleIcon,
  DashedCircleIcon,
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
  DashedDrawPolygonIcon,
  DashedModifyIcon,
  DashedRectangleNodesIcon,
  DashedCircleNodesIcon,
  ReopenPolygonIcon,
  FeatureOutlineIcon,
  ArrowMarkIcon,
  CrossMarkIcon,
  StarMarkIcon,
  LightBulbIcon,
  TreeIcon,
  RedoIcon,
  UndoIcon,
  LogoutIcon,
  SwitchAppIcon,
  SwitchAppIconColour,
  BinocularIcon,
  ErrorIcon,
  OneAcreIcon,
  HalfAcreIcon,
  OneThirdAcreIcon,
  QuarterAcreIcon,
  OneSixthAcreIcon,
  OneEighthAcreIcon,
  HouseFootprint1Icon,
  HouseFootprint2Icon,
  HouseFootprint3Icon,
  SingleGarageIcon,
  DoubleGarageIcon,
  ScissorsIcon,
  SplitPolygonIcon,
  EyeIcon,
  FiltersIcon,
  StandardArrowIcon,
  BringToFrontIcon,
  SendToBackIcon,
  AlignLeftIcon,
  AlignCenterIcon,
  AlignRightIcon,
  VerifiedIcon,
  GoToIcon,
  MoreInfoIcon,
  CopyIcon,
  FreeholdAutoPolygonIcon,
  LeaseholdAutoPolygonIcon,
  ActionsIndicatorIcon,
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
  { name: 'Arrow Mark', component: <ArrowMarkIcon /> },
  { name: 'Cross Mark', component: <CrossMarkIcon /> },
  { name: 'Star Mark', component: <StarMarkIcon /> },
  { name: 'Light Bulb', component: <LightBulbIcon /> },
  { name: 'Tree', component: <TreeIcon /> },
  { name: 'Redo', component: <RedoIcon /> },
  { name: 'Undo', component: <UndoIcon /> },
  { name: 'Logout', component: <LogoutIcon /> },
  { name: 'Switch App', component: <SwitchAppIcon /> },
  { name: 'Switch App Colour', component: <SwitchAppIconColour /> },
  { name: 'One Acre', component: <OneAcreIcon /> },
  { name: 'Half Acre', component: <HalfAcreIcon /> },
  { name: 'One Third Acre', component: <OneThirdAcreIcon /> },
  { name: 'Quarter Acre', component: <QuarterAcreIcon /> },
  { name: 'One Sixth Acre', component: <OneSixthAcreIcon /> },
  { name: 'One Eighth Acre', component: <OneEighthAcreIcon /> },
  { name: 'House Footprint 1', component: <HouseFootprint1Icon /> },
  { name: 'House Footprint 2', component: <HouseFootprint2Icon /> },
  { name: 'House Footprint 3', component: <HouseFootprint3Icon /> },
  { name: 'Single Garage', component: <SingleGarageIcon /> },
  { name: 'Double Garage', component: <DoubleGarageIcon /> },
  { name: 'Eye', component: <EyeIcon /> },
  { name: 'Filters', component: <FiltersIcon /> },
  { name: 'Standard Arrow', component: <StandardArrowIcon /> },
  { name: 'Align left', component: <AlignLeftIcon /> },
  { name: 'Align center', component: <AlignCenterIcon /> },
  { name: 'Align right', component: <AlignRightIcon /> },
  { name: 'Go To', component: <GoToIcon /> },
];

const outlinedIcons = [
  { name: 'Save', component: <SaveIcon /> },
  { name: 'Zoom', component: <ZoomIcon /> },
  { name: 'Zoom Out', component: <ZoomOutIcon /> },
  { name: 'Zoom In', component: <ZoomInIcon /> },
  { name: 'Reload', component: <ReloadIcon /> },
  { name: 'Auto-Polygon', component: <AutoPolygonIcon /> },
  { name: 'Freehold Auto-Polygon', component: <FreeholdAutoPolygonIcon /> },
  { name: 'Leasehold Auto-Polygon', component: <LeaseholdAutoPolygonIcon /> },
  { name: 'Draw Polygon', component: <DrawPolygonIcon /> },
  { name: 'Rectangle', component: <RectangleIcon /> },
  { name: 'Circle', component: <CircleIcon /> },
  { name: 'Arrow Tool', component: <ArrowToolIcon /> },
  { name: 'Line Tool', component: <LineToolIcon /> },
  { name: 'New Line Tool', component: <NewLineToolIcon /> },
  { name: 'Measure Tool', component: <MeasureToolIcon /> },
  { name: 'Edit Tool', component: <EditToolIcon /> },
  { name: 'Modify Tool', component: <ModifyToolIcon /> },
  { name: 'Text', component: <TextIcon /> },
  { name: 'Street Name Text', component: <StreetNameTextIcon /> },
  { name: 'Building Number Text', component: <BuildingNumberTextIcon /> },
  { name: 'Notes Text', component: <NotesTextIcon /> },
  { name: 'Delete All', component: <DeleteAllIcon /> },
  { name: 'Separate', component: <SeparateIcon /> },
  { name: 'Duplicate', component: <DuplicateIcon /> },
  { name: 'Merge', component: <MergeIcon /> },
  { name: 'Lock Open', component: <LockOpenIcon /> },
  { name: 'Lock Closed', component: <LockClosedIcon /> },
  { name: 'Delete', component: <DeleteIcon /> },
  { name: 'Drawing Library', component: <DrawingLibraryIcon /> },
  { name: 'Dashed Rectangle', component: <DashedRectangleIcon /> },
  { name: 'Dashed Circle', component: <DashedCircleIcon /> },
  { name: 'Hatch CD', component: <HatchCDIcon /> },
  { name: 'Hatch CU', component: <HatchCUIcon /> },
  { name: 'Hatch LA', component: <HatchLAIcon /> },
  { name: 'Hatch LMinus', component: <HatchLMinusIcon /> },
  { name: 'Hatch LPlus', component: <HatchLPlusIcon /> },
  { name: 'Hatch LU', component: <HatchLUIcon /> },
  { name: 'Stack', component: <StackIcon /> },
  { name: 'Center Map', component: <CenterMapIcon /> },
  { name: 'Dashed Draw Polygon', component: <DashedDrawPolygonIcon /> },
  { name: 'Dashed Modify', component: <DashedModifyIcon /> },
  { name: 'Dashed Rectangle with Nodes', component: <DashedRectangleNodesIcon /> },
  { name: 'Dashed Circle with Nodes', component: <DashedCircleNodesIcon /> },
  { name: 'Reopen Polygon', component: <ReopenPolygonIcon /> },
  { name: 'Feature Outline', component: <FeatureOutlineIcon /> },
  { name: 'Binocular', component: <BinocularIcon /> },
  { name: 'Error', component: <ErrorIcon /> },
  { name: 'Scissors', component: <ScissorsIcon /> },
  { name: 'Split Polygon', component: <SplitPolygonIcon /> },
  { name: 'Bring to Front', component: <BringToFrontIcon /> },
  { name: 'Send to Back', component: <SendToBackIcon /> },
  { name: 'Verified', component: <VerifiedIcon /> },
  { name: 'More Info', component: <MoreInfoIcon /> },
  { name: 'Copy', component: <CopyIcon /> },
  { name: 'Actions Indicator', component: <ActionsIndicatorIcon /> },
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
