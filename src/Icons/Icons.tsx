import React from 'react';
import styled from 'styled-components';
import zoomOutUrl, { ReactComponent as ZoomOut } from './icons/zoom-out.svg';
import zoomInUrl, { ReactComponent as ZoomIn } from './icons/zoom-in.svg';
import zoomUrl, { ReactComponent as Zoom } from './icons/zoom.svg';
import saveUrl, { ReactComponent as Save } from './icons/save.svg';
import warningUrl, { ReactComponent as Warning } from './icons/warning.svg';
import upgradeUrl, { ReactComponent as Upgrade } from './icons/upgrade.svg';
import refreshUrl, { ReactComponent as Refresh } from './icons/refresh.svg';
import questionUrl, { ReactComponent as Question } from './icons/question.svg';
import reloadUrl, { ReactComponent as Reload } from './icons/reload.svg';
import editUrl, { ReactComponent as Edit } from './icons/edit.svg';
import downloadUrl, { ReactComponent as Download } from './icons/download.svg';
import plusUrl, { ReactComponent as Plus } from './icons/plus.svg';
import closeUrl, { ReactComponent as Close } from './icons/close.svg';
import minusUrl, { ReactComponent as Minus } from './icons/minus.svg';
import arrowDownUrl, { ReactComponent as ArrowDown } from './icons/arrow-down.svg';
import arrowUpUrl, { ReactComponent as ArrowUp } from './icons/arrow-up.svg';
import checkUrl, { ReactComponent as Check } from './icons/check.svg';
import infoUrl, { ReactComponent as Info } from './icons/info.svg';
import binUrl, { ReactComponent as Bin } from './icons/bin.svg';
import autoPolygonUrl, { ReactComponent as AutoPolygon } from './icons/auto-polygon-tool.svg';
import drawPolygonUrl, { ReactComponent as DrawPolygon } from './icons/draw-polygon-tool.svg';
import rectangleUrl, { ReactComponent as Rectangle } from './icons/rectangle.svg';
import circleUrl, { ReactComponent as Circle } from './icons/circle.svg';
import arrowToolUrl, { ReactComponent as ArrowTool } from './icons/arrow-tool.svg';
import lineToolUrl, { ReactComponent as LineTool } from './icons/line-tool.svg';
import newLineToolUrl, { ReactComponent as NewLineTool } from './icons/new-line-tool.svg';
import measureToolUrl, { ReactComponent as MeasureTool } from './icons/measure-tool.svg';
import editToolUrl, { ReactComponent as EditTool } from './icons/edit-tool.svg';
import modifyToolUrl, { ReactComponent as ModifyTool } from './icons/modify-tool.svg';
import textUrl, { ReactComponent as Text } from './icons/text.svg';
import streetNameTextUrl, { ReactComponent as StreetNameText } from './icons/street-name-text.svg';
import buildingNumberTextUrl, { ReactComponent as BuildingNumberText } from './icons/building-number-text.svg';
import notesTextUrl, { ReactComponent as NotesText } from './icons/notes-text.svg';
import deleteAllUrl, { ReactComponent as DeleteAll } from './icons/delete-all.svg';
import separateUrl, { ReactComponent as Separate } from './icons/separate.svg';
import duplicateUrl, { ReactComponent as Duplicate } from './icons/duplicate.svg';
import mergeUrl, { ReactComponent as Merge } from './icons/merge.svg';
import lockOpenUrl, { ReactComponent as LockOpen } from './icons/lock-open.svg';
import lockClosedUrl, { ReactComponent as LockClosed } from './icons/lock-closed.svg';
import deleteUrl, { ReactComponent as Delete } from './icons/delete.svg';
import drawingLibraryUrl, { ReactComponent as DrawingLibrary } from './icons/drawing-library.svg';
import dashedRectangleUrl, { ReactComponent as DashedRectangle } from './icons/dashed-rectangle.svg';
import dashedCircleUrl, { ReactComponent as DashedCircle } from './icons/dashed-circle.svg';
import boldUrl, { ReactComponent as Bold } from './icons/bold.svg';
import italicUrl, { ReactComponent as Italic } from './icons/italic.svg';
import hatchCDUrl, { ReactComponent as HatchCD } from './icons/hatch-cd.svg';
import hatchCUUrl, { ReactComponent as HatchCU } from './icons/hatch-cu.svg';
import hatchLAUrl, { ReactComponent as HatchLA } from './icons/hatch-la.svg';
import hatchLMinusUrl, { ReactComponent as HatchLMinus } from './icons/hatch-lminus.svg';
import hatchLPlusUrl, { ReactComponent as HatchLPlus } from './icons/hatch-lplus.svg';
import hatchLUUrl, { ReactComponent as HatchLU } from './icons/hatch-lu.svg';
import searchUrl, { ReactComponent as Search } from './icons/search.svg';
import stackUrl, { ReactComponent as Stack } from './icons/stack.svg';
import centerMapUrl, { ReactComponent as CenterMap } from './icons/center-map.svg';
import hMarkUrl, { ReactComponent as HMark } from './icons/H-mark.svg';
import tMarkUrl, { ReactComponent as TMark } from './icons/T-mark.svg';
import arrowMarkUrl, { ReactComponent as ArrowMark } from './icons/arrow-mark.svg';
import crossMarkUrl, { ReactComponent as CrossMark } from './icons/cross-mark.svg';
import starMarkUrl, { ReactComponent as StarMark } from './icons/star-mark.svg';
import dashedDrawPolygonUrl, { ReactComponent as DashedDrawPolygon } from './icons/dashed-draw-polygon.svg';
import dashedModifyUrl, { ReactComponent as DashedModify } from './icons/dashed-modify.svg';
import dashedRectangleNodesUrl, { ReactComponent as DashedRectangleNodes } from './icons/dashed-rectangle-nodes.svg';
import dashedCircleNodesUrl, { ReactComponent as DashedCircleNodes } from './icons/dashed-circle-nodes.svg';
import reopenPolygonUrl, { ReactComponent as ReopenPolygon } from './icons/reopen-polygon.svg';
import featureOutlineUrl, { ReactComponent as FeatureOutline } from './icons/feature-outline-polygon-tool.svg';
import lightBulbUrl, { ReactComponent as LightBulb } from './icons/light-bulb.svg';
import treeUrl, { ReactComponent as Tree } from './icons/tree.svg';
import redoUrl, { ReactComponent as Redo } from './icons/redo.svg';
import undoUrl, { ReactComponent as Undo } from './icons/undo.svg';
import logoutUrl, { ReactComponent as Logout } from './icons/logout-icon.svg';
import switchAppUrl, { ReactComponent as SwitchApp } from './icons/switch-app-icon.svg';
import switchAppColourUrl, { ReactComponent as SwitchAppColour } from './icons/switch-app-icon-color.svg';
import binocularUrl, { ReactComponent as Binocular } from './icons/binocular.svg';
import errorUrl, { ReactComponent as Error } from './icons/error-icon.svg';
import oneAcreUrl, { ReactComponent as OneAcre } from './icons/one-acre.svg';
import halfAcreUrl, { ReactComponent as HalfAcre } from './icons/half-acre.svg';
import oneThirdAcreUrl, { ReactComponent as OneThirdAcre } from './icons/one-third-acre.svg';
import quarterAcreUrl, { ReactComponent as QuarterAcre } from './icons/quarter-acre.svg';
import oneSixthAcreUrl, { ReactComponent as OneSixthAcre } from './icons/one-sixth-acre.svg';
import oneEighthAcreUrl, { ReactComponent as OneEighthAcre } from './icons/one-eighth-acre.svg';
import houseFootprint1Url, { ReactComponent as HouseFootprint1 } from './icons/house-footprint-1.svg';
import houseFootprint2Url, { ReactComponent as HouseFootprint2 } from './icons/house-footprint-2.svg';
import houseFootprint3Url, { ReactComponent as HouseFootprint3 } from './icons/house-footprint-3.svg';
import singleGarageUrl, { ReactComponent as SingleGarage } from './icons/single-garage.svg';
import doubleGarageUrl, { ReactComponent as DoubleGarage } from './icons/double-garage.svg';
import scissorsUrl, { ReactComponent as Scissors } from './icons/scissors.svg';
import splitPolygonUrl, { ReactComponent as SplitPolygon } from './icons/split-polygon.svg';
import eyeUrl, { ReactComponent as Eye } from './icons/eye.svg';
import filtersUrl, { ReactComponent as Filters } from './icons/filters.svg';
import standardArrowUrl, { ReactComponent as StandardArrow } from './icons/standard-arrow.svg';
import bringToFrontUrl, { ReactComponent as BringToFront } from './icons/bring-to-front.svg';
import sendToBackUrl, { ReactComponent as SendToBack } from './icons/send-to-back.svg';
import alignLeftUrl, { ReactComponent as AlignLeft } from './icons/left-align.svg';
import alignCenterUrl, { ReactComponent as AlignCenter } from './icons/center-align.svg';
import alignRightUrl, { ReactComponent as AlignRight } from './icons/right-align.svg';
import verifiedUrl, { ReactComponent as Verified } from './icons/verified.svg';
import goToUrl, { ReactComponent as GoTo } from './icons/go-to.svg';
import moreInfoUrl, { ReactComponent as MoreInfo } from './icons/more-info.svg';
import copyIconUrl, { ReactComponent as Copy } from './icons/copy-icon.svg';
import freeholdAutoPolygonUrl, { ReactComponent as FreeholdAutoPolygon } from './icons/freehold-autopolygon.svg';
import leaseholdAutoPolygonUrl, { ReactComponent as LeaseholdAutoPolygon } from './icons/auto-polygon-tool.svg';

const DEFAULT_ICON_COLOR = '#4c4c4c';

export interface Props {
  fill?: string;
  size?: 'xxsmall' | 'xsmall' | 'small' | 'base' | 'large' | 'xlarge';
}

export const IconWrapper = styled.div<Props>`
  display: inline-flex;
  svg {
    width: ${p => (p.size ? p.theme.icons[p.size] : p.theme.icons.base)};
    height: ${p => (p.size ? p.theme.icons[p.size] : p.theme.icons.base)};
  }
`;

// TODO: Can we iterate this? possibly from the file system?
// Drawing
const AutoPolygonIcon: React.FC<Props> = ({ size = 'large', fill = DEFAULT_ICON_COLOR, ...props }) => (
  <IconWrapper size={size}>
    <AutoPolygon fill={fill} {...props} />
  </IconWrapper>
);
export { AutoPolygonIcon, autoPolygonUrl };

const LeaseholdPolygonIcon: React.FC<Props> = ({ size = 'large', fill = DEFAULT_ICON_COLOR, ...props }) => (
  <IconWrapper size={size}>
    <LeaseholdAutoPolygon fill={fill} {...props} />
  </IconWrapper>
);
export { LeaseholdPolygonIcon, leaseholdAutoPolygonUrl };

const FreeholdAutoPolygonIcon: React.FC<Props> = ({ size = 'large', fill = DEFAULT_ICON_COLOR, ...props }) => (
  <IconWrapper size={size}>
    <FreeholdAutoPolygon fill={fill} {...props} />
  </IconWrapper>
);
export { FreeholdAutoPolygonIcon, freeholdAutoPolygonUrl };

const DrawPolygonIcon: React.FC<Props> = ({ size = 'large', fill = DEFAULT_ICON_COLOR, ...props }) => (
  <IconWrapper size={size}>
    <DrawPolygon fill={fill} {...props} />
  </IconWrapper>
);
export { DrawPolygonIcon, drawPolygonUrl };

const RectangleIcon: React.FC<Props> = ({ size = 'large', fill = DEFAULT_ICON_COLOR, ...props }) => (
  <IconWrapper size={size}>
    <Rectangle fill={fill} {...props} />
  </IconWrapper>
);
export { RectangleIcon, rectangleUrl };

const CircleIcon: React.FC<Props> = ({ size = 'large', fill = DEFAULT_ICON_COLOR, ...props }) => (
  <IconWrapper size={size}>
    <Circle fill={fill} {...props} />
  </IconWrapper>
);
export { CircleIcon, circleUrl };

const ArrowToolIcon: React.FC<Props> = ({ size = 'large', fill = DEFAULT_ICON_COLOR, ...props }) => (
  <IconWrapper size={size}>
    <ArrowTool fill={fill} {...props} />
  </IconWrapper>
);
export { ArrowToolIcon, arrowToolUrl };

const LineToolIcon: React.FC<Props> = ({ size = 'large', fill = DEFAULT_ICON_COLOR, ...props }) => (
  <IconWrapper size={size}>
    <LineTool fill={fill} {...props} />
  </IconWrapper>
);
export { LineToolIcon, lineToolUrl };

const NewLineToolIcon: React.FC<Props> = ({ size = 'large', fill = DEFAULT_ICON_COLOR, ...props }) => (
  <IconWrapper size={size}>
    <NewLineTool fill={fill} {...props} />
  </IconWrapper>
);
export { NewLineToolIcon, newLineToolUrl };

const MeasureToolIcon: React.FC<Props> = ({ size = 'large', fill = DEFAULT_ICON_COLOR, ...props }) => (
  <IconWrapper size={size}>
    <MeasureTool fill={fill} {...props} />
  </IconWrapper>
);
export { MeasureToolIcon, measureToolUrl };

const EditToolIcon: React.FC<Props> = ({ size = 'large', fill = DEFAULT_ICON_COLOR, ...props }) => (
  <IconWrapper size={size}>
    <EditTool fill={fill} {...props} />
  </IconWrapper>
);
export { EditToolIcon, editToolUrl };

const ModifyToolIcon: React.FC<Props> = ({ size = 'large', fill = DEFAULT_ICON_COLOR, ...props }) => (
  <IconWrapper size={size}>
    <ModifyTool fill={fill} {...props} />
  </IconWrapper>
);
export { ModifyToolIcon, modifyToolUrl };

const TextIcon: React.FC<Props> = ({ size = 'large', fill = DEFAULT_ICON_COLOR, ...props }) => (
  <IconWrapper size={size}>
    <Text fill={fill} {...props} />
  </IconWrapper>
);
export { TextIcon, textUrl };

const StreetNameTextIcon: React.FC<Props> = ({ size = 'large', fill = DEFAULT_ICON_COLOR, ...props }) => (
  <IconWrapper size={size}>
    <StreetNameText fill={fill} {...props} />
  </IconWrapper>
);
export { StreetNameTextIcon, streetNameTextUrl };

const BuildingNumberTextIcon: React.FC<Props> = ({ size = 'large', fill = DEFAULT_ICON_COLOR, ...props }) => (
  <IconWrapper size={size}>
    <BuildingNumberText fill={fill} {...props} />
  </IconWrapper>
);
export { BuildingNumberTextIcon, buildingNumberTextUrl };

const NotesTextIcon: React.FC<Props> = ({ size = 'large', fill = DEFAULT_ICON_COLOR, ...props }) => (
  <IconWrapper size={size}>
    <NotesText fill={fill} {...props} />
  </IconWrapper>
);
export { NotesTextIcon, notesTextUrl };

const DeleteAllIcon: React.FC<Props> = ({ size = 'large', fill = DEFAULT_ICON_COLOR, ...props }) => (
  <IconWrapper size={size}>
    <DeleteAll fill={fill} {...props} />
  </IconWrapper>
);
export { DeleteAllIcon, deleteAllUrl };

const SeparateIcon: React.FC<Props> = ({ size = 'large', fill = DEFAULT_ICON_COLOR, ...props }) => (
  <IconWrapper size={size}>
    <Separate fill={fill} {...props} />
  </IconWrapper>
);
export { SeparateIcon, separateUrl };

const DuplicateIcon: React.FC<Props> = ({ size = 'large', fill = DEFAULT_ICON_COLOR, ...props }) => (
  <IconWrapper size={size}>
    <Duplicate fill={fill} {...props} />
  </IconWrapper>
);
export { DuplicateIcon, duplicateUrl };

const MergeIcon: React.FC<Props> = ({ size = 'large', fill = DEFAULT_ICON_COLOR, ...props }) => (
  <IconWrapper size={size}>
    <Merge fill={fill} {...props} />
  </IconWrapper>
);
export { MergeIcon, mergeUrl };

const LockOpenIcon: React.FC<Props> = ({ size = 'large', fill = DEFAULT_ICON_COLOR, ...props }) => (
  <IconWrapper size={size}>
    <LockOpen fill={fill} {...props} />
  </IconWrapper>
);
export { LockOpenIcon, lockOpenUrl };

const LockClosedIcon: React.FC<Props> = ({ size = 'large', fill = DEFAULT_ICON_COLOR, ...props }) => (
  <IconWrapper size={size}>
    <LockClosed fill={fill} {...props} />
  </IconWrapper>
);
export { LockClosedIcon, lockClosedUrl };

const DeleteIcon: React.FC<Props> = ({ size = 'large', fill = DEFAULT_ICON_COLOR, ...props }) => (
  <IconWrapper size={size}>
    <Delete fill={fill} {...props} />
  </IconWrapper>
);
export { DeleteIcon, deleteUrl };

const DrawingLibraryIcon: React.FC<Props> = ({ size = 'large', fill = DEFAULT_ICON_COLOR, ...props }) => (
  <IconWrapper size={size}>
    <DrawingLibrary fill={fill} {...props} />
  </IconWrapper>
);
export { DrawingLibraryIcon, drawingLibraryUrl };

const DashedRectangleIcon: React.FC<Props> = ({ size = 'large', fill = DEFAULT_ICON_COLOR, ...props }) => (
  <IconWrapper size={size}>
    <DashedRectangle fill={fill} {...props} />
  </IconWrapper>
);
export { DashedRectangleIcon, dashedRectangleUrl };

const DashedCircleIcon: React.FC<Props> = ({ size = 'large', fill = DEFAULT_ICON_COLOR, ...props }) => (
  <IconWrapper size={size}>
    <DashedCircle fill={fill} {...props} />
  </IconWrapper>
);
export { DashedCircleIcon, dashedCircleUrl };

// Outlined
const SaveIcon: React.FC<Props> = ({ size = 'large', fill = DEFAULT_ICON_COLOR, ...props }) => (
  <IconWrapper size={size}>
    <Save fill={fill} {...props} />
  </IconWrapper>
);
export { SaveIcon, saveUrl };

const ZoomIcon: React.FC<Props> = ({ size = 'large', fill = DEFAULT_ICON_COLOR, ...props }) => (
  <IconWrapper size={size}>
    <Zoom fill={fill} {...props} />
  </IconWrapper>
);
export { ZoomIcon, zoomUrl };

const ZoomInIcon: React.FC<Props> = ({ size = 'large', fill = DEFAULT_ICON_COLOR, ...props }) => (
  <IconWrapper size={size}>
    <ZoomIn fill={fill} {...props} />
  </IconWrapper>
);
export { ZoomInIcon, zoomInUrl };

const ZoomOutIcon: React.FC<Props> = ({ size = 'large', fill = DEFAULT_ICON_COLOR, ...props }) => (
  <IconWrapper size={size}>
    <ZoomOut fill={fill} {...props} />
  </IconWrapper>
);
export { ZoomOutIcon, zoomOutUrl };

const ReloadIcon: React.FC<Props> = ({ size = 'large', fill = DEFAULT_ICON_COLOR, ...props }) => (
  <IconWrapper size={size}>
    <Reload fill={fill} {...props} />
  </IconWrapper>
);
export { ReloadIcon, reloadUrl };

const SplitPolygonIcon: React.FC<Props> = ({ size = 'large', fill = DEFAULT_ICON_COLOR, ...props }) => (
  <IconWrapper size={size}>
    <SplitPolygon fill={fill} {...props} />
  </IconWrapper>
);
export { SplitPolygonIcon, splitPolygonUrl };

const VerifiedIcon: React.FC<Props> = ({ size = 'large', fill = DEFAULT_ICON_COLOR, ...props }) => (
  <IconWrapper size={size}>
    <Verified fill={fill} {...props} />
  </IconWrapper>
);
export { VerifiedIcon, verifiedUrl };

const MoreInfoIcon: React.FC<Props> = ({ size = 'large', fill = DEFAULT_ICON_COLOR, ...props }) => (
  <IconWrapper size={size}>
    <MoreInfo fill={fill} {...props} />
  </IconWrapper>
);
export { MoreInfoIcon, moreInfoUrl };

// Solid
const EditIcon: React.FC<Props> = ({ size = 'large', fill = DEFAULT_ICON_COLOR, ...props }) => (
  <IconWrapper size={size}>
    <Edit fill={fill} {...props} />
  </IconWrapper>
);
export { EditIcon, editUrl };

const DownloadIcon: React.FC<Props> = ({ size = 'large', fill = DEFAULT_ICON_COLOR, ...props }) => (
  <IconWrapper size={size}>
    <Download fill={fill} {...props} />
  </IconWrapper>
);
export { DownloadIcon, downloadUrl };

const PlusIcon: React.FC<Props> = ({ size = 'large', fill = DEFAULT_ICON_COLOR, ...props }) => (
  <IconWrapper size={size}>
    <Plus fill={fill} {...props} />
  </IconWrapper>
);
export { PlusIcon, plusUrl };

const CloseIcon: React.FC<Props> = ({ size = 'large', fill = DEFAULT_ICON_COLOR, ...props }) => (
  <IconWrapper size={size}>
    <Close fill={fill} {...props} />
  </IconWrapper>
);
export { CloseIcon, closeUrl };

const MinusIcon: React.FC<Props> = ({ size = 'large', fill = DEFAULT_ICON_COLOR, ...props }) => (
  <IconWrapper size={size}>
    <Minus fill={fill} {...props} />
  </IconWrapper>
);
export { MinusIcon, minusUrl };

const ArrowDownIcon: React.FC<Props> = ({ size = 'large', fill = DEFAULT_ICON_COLOR, ...props }) => (
  <IconWrapper size={size}>
    <ArrowDown fill={fill} {...props} />
  </IconWrapper>
);
export { ArrowDownIcon, arrowDownUrl };

const ArrowUpIcon: React.FC<Props> = ({ size = 'large', fill = DEFAULT_ICON_COLOR, ...props }) => (
  <IconWrapper size={size}>
    <ArrowUp fill={fill} {...props} />
  </IconWrapper>
);
export { ArrowUpIcon, arrowUpUrl };

const QuestionIcon: React.FC<Props> = ({ size = 'large', fill = DEFAULT_ICON_COLOR, ...props }) => (
  <IconWrapper size={size}>
    <Question fill={fill} {...props} />
  </IconWrapper>
);
export { QuestionIcon, questionUrl };

const WarningIcon: React.FC<Props> = ({ size = 'large', fill = DEFAULT_ICON_COLOR, ...props }) => (
  <IconWrapper size={size}>
    <Warning fill={fill} {...props} />
  </IconWrapper>
);
export { WarningIcon, warningUrl };

const RefreshIcon: React.FC<Props> = ({ size = 'large', fill = DEFAULT_ICON_COLOR, ...props }) => (
  <IconWrapper size={size}>
    <Refresh fill={fill} {...props} />
  </IconWrapper>
);
export { RefreshIcon, refreshUrl };

const UpgradeIcon: React.FC<Props> = ({ size = 'large', fill = DEFAULT_ICON_COLOR, ...props }) => (
  <IconWrapper size={size}>
    <Upgrade fill={fill} {...props} />
  </IconWrapper>
);
export { UpgradeIcon, upgradeUrl };

const CheckIcon: React.FC<Props> = ({ size = 'large', fill = DEFAULT_ICON_COLOR, ...props }) => (
  <IconWrapper size={size}>
    <Check fill={fill} {...props} />
  </IconWrapper>
);
export { CheckIcon, checkUrl };

const InfoIcon: React.FC<Props> = ({ size = 'large', fill = DEFAULT_ICON_COLOR, ...props }) => (
  <IconWrapper size={size}>
    <Info fill={fill} {...props} />
  </IconWrapper>
);
export { InfoIcon, infoUrl };

const BinIcon: React.FC<Props> = ({ size = 'large', fill = DEFAULT_ICON_COLOR, ...props }) => (
  <IconWrapper size={size}>
    <Bin fill={fill} {...props} />
  </IconWrapper>
);
export { BinIcon, binUrl };

const BoldIcon: React.FC<Props> = ({ size = 'large', fill = DEFAULT_ICON_COLOR, ...props }) => (
  <IconWrapper size={size}>
    <Bold fill={fill} {...props} />
  </IconWrapper>
);
export { BoldIcon, boldUrl };

const ItalicIcon: React.FC<Props> = ({ size = 'large', fill = DEFAULT_ICON_COLOR, ...props }) => (
  <IconWrapper size={size}>
    <Italic fill={fill} {...props} />
  </IconWrapper>
);
export { ItalicIcon, italicUrl };

const HatchCDIcon: React.FC<Props> = ({ size = 'large', fill = DEFAULT_ICON_COLOR, ...props }) => (
  <IconWrapper size={size}>
    <HatchCD fill={fill} {...props} />
  </IconWrapper>
);
export { HatchCDIcon, hatchCDUrl };

const HatchCUIcon: React.FC<Props> = ({ size = 'large', fill = DEFAULT_ICON_COLOR, ...props }) => (
  <IconWrapper size={size}>
    <HatchCU fill={fill} {...props} />
  </IconWrapper>
);
export { HatchCUIcon, hatchCUUrl };

const HatchLAIcon: React.FC<Props> = ({ size = 'large', fill = DEFAULT_ICON_COLOR, ...props }) => (
  <IconWrapper size={size}>
    <HatchLA fill={fill} {...props} />
  </IconWrapper>
);
export { HatchLAIcon, hatchLAUrl };

const HatchLMinusIcon: React.FC<Props> = ({ size = 'large', fill = DEFAULT_ICON_COLOR, ...props }) => (
  <IconWrapper size={size}>
    <HatchLMinus fill={fill} {...props} />
  </IconWrapper>
);
export { HatchLMinusIcon, hatchLMinusUrl };

const HatchLPlusIcon: React.FC<Props> = ({ size = 'large', fill = DEFAULT_ICON_COLOR, ...props }) => (
  <IconWrapper size={size}>
    <HatchLPlus fill={fill} {...props} />
  </IconWrapper>
);
export { HatchLPlusIcon, hatchLPlusUrl };

const HatchLUIcon: React.FC<Props> = ({ size = 'large', fill = DEFAULT_ICON_COLOR, ...props }) => (
  <IconWrapper size={size}>
    <HatchLU fill={fill} {...props} />
  </IconWrapper>
);
export { HatchLUIcon, hatchLUUrl };

const SearchIcon: React.FC<Props> = ({ size = 'large', fill = DEFAULT_ICON_COLOR, ...props }) => (
  <IconWrapper size={size}>
    <Search fill={fill} {...props} />
  </IconWrapper>
);
export { SearchIcon, searchUrl };

const StackIcon: React.FC<Props> = ({ size = 'large', fill = DEFAULT_ICON_COLOR, ...props }) => (
  <IconWrapper size={size}>
    <Stack fill={fill} {...props} />
  </IconWrapper>
);
export { StackIcon, stackUrl };

const CenterMapIcon: React.FC<Props> = ({ size = 'large', fill = DEFAULT_ICON_COLOR, ...props }) => (
  <IconWrapper size={size}>
    <CenterMap fill={fill} {...props} />
  </IconWrapper>
);
export { CenterMapIcon, centerMapUrl };

const HMarkIcon: React.FC<Props> = ({ size = 'large', fill = DEFAULT_ICON_COLOR, ...props }) => (
  <IconWrapper size={size}>
    <HMark fill={fill} {...props} />
  </IconWrapper>
);
export { HMarkIcon, hMarkUrl };

const TMarkIcon: React.FC<Props> = ({ size = 'large', fill = DEFAULT_ICON_COLOR, ...props }) => (
  <IconWrapper size={size}>
    <TMark fill={fill} {...props} />
  </IconWrapper>
);
export { TMarkIcon, tMarkUrl };

const DashedDrawPolygonIcon: React.FC<Props> = ({ size = 'large', fill = DEFAULT_ICON_COLOR, ...props }) => (
  <IconWrapper size={size}>
    <DashedDrawPolygon fill={fill} {...props} />
  </IconWrapper>
);
export { DashedDrawPolygonIcon, dashedDrawPolygonUrl };

const DashedModifyIcon: React.FC<Props> = ({ size = 'large', fill = DEFAULT_ICON_COLOR, ...props }) => (
  <IconWrapper size={size}>
    <DashedModify fill={fill} {...props} />
  </IconWrapper>
);
export { DashedModifyIcon, dashedModifyUrl };

const DashedRectangleNodesIcon: React.FC<Props> = ({ size = 'large', fill = DEFAULT_ICON_COLOR, ...props }) => (
  <IconWrapper size={size}>
    <DashedRectangleNodes fill={fill} {...props} />
  </IconWrapper>
);
export { DashedRectangleNodesIcon, dashedRectangleNodesUrl };

const DashedCircleNodesIcon: React.FC<Props> = ({ size = 'large', fill = DEFAULT_ICON_COLOR, ...props }) => (
  <IconWrapper size={size}>
    <DashedCircleNodes fill={fill} {...props} />
  </IconWrapper>
);
export { DashedCircleNodesIcon, dashedCircleNodesUrl };

const ReopenPolygonIcon: React.FC<Props> = ({ size = 'large', fill = DEFAULT_ICON_COLOR, ...props }) => (
  <IconWrapper size={size}>
    <ReopenPolygon fill={fill} {...props} />
  </IconWrapper>
);
export { ReopenPolygonIcon, reopenPolygonUrl };

const FeatureOutlineIcon: React.FC<Props> = ({ size = 'large', fill = DEFAULT_ICON_COLOR, ...props }) => (
  <IconWrapper size={size}>
    <FeatureOutline fill={fill} {...props} />
  </IconWrapper>
);
export { FeatureOutlineIcon, featureOutlineUrl };

const ArrowMarkIcon: React.FC<Props> = ({ size = 'large', fill = DEFAULT_ICON_COLOR, ...props }) => (
  <IconWrapper size={size}>
    <ArrowMark fill={fill} {...props} />
  </IconWrapper>
);
export { ArrowMarkIcon, arrowMarkUrl };

const CrossMarkIcon: React.FC<Props> = ({ size = 'large', fill = DEFAULT_ICON_COLOR, ...props }) => (
  <IconWrapper size={size}>
    <CrossMark fill={fill} {...props} />
  </IconWrapper>
);
export { CrossMarkIcon, crossMarkUrl };

const StarMarkIcon: React.FC<Props> = ({ size = 'large', fill = DEFAULT_ICON_COLOR, ...props }) => (
  <IconWrapper size={size}>
    <StarMark fill={fill} {...props} />
  </IconWrapper>
);
export { StarMarkIcon, starMarkUrl };

const LightBulbIcon: React.FC<Props> = ({ size = 'large', fill = DEFAULT_ICON_COLOR, ...props }) => (
  <IconWrapper size={size}>
    <LightBulb fill={fill} {...props} />
  </IconWrapper>
);
export { LightBulbIcon, lightBulbUrl };

const TreeIcon: React.FC<Props> = ({ size = 'large', fill = DEFAULT_ICON_COLOR, ...props }) => (
  <IconWrapper size={size}>
    <Tree fill={fill} {...props} />
  </IconWrapper>
);
export { TreeIcon, treeUrl };

const RedoIcon: React.FC<Props> = ({ size = 'large', fill = DEFAULT_ICON_COLOR, ...props }) => (
  <IconWrapper size={size}>
    <Redo fill={fill} {...props} />
  </IconWrapper>
);
export { RedoIcon, redoUrl };

const UndoIcon: React.FC<Props> = ({ size = 'large', fill = DEFAULT_ICON_COLOR, ...props }) => (
  <IconWrapper size={size}>
    <Undo fill={fill} {...props} />
  </IconWrapper>
);
export { UndoIcon, undoUrl };

const LogoutIcon: React.FC<Props> = ({ size = 'large', fill = DEFAULT_ICON_COLOR, ...props }) => (
  <IconWrapper size={size}>
    <Logout fill={fill} {...props} />
  </IconWrapper>
);
export { LogoutIcon, logoutUrl };

const SwitchAppIcon: React.FC<Props> = ({ size = 'large', fill = DEFAULT_ICON_COLOR, ...props }) => (
  <IconWrapper size={size}>
    <SwitchApp fill={fill} {...props} />
  </IconWrapper>
);
export { SwitchAppIcon, switchAppUrl };

const SwitchAppIconColour: React.FC<Props> = ({ size = 'large', fill = DEFAULT_ICON_COLOR, ...props }) => (
  <IconWrapper size={size}>
    <SwitchAppColour fill={fill} {...props} />
  </IconWrapper>
);
export { SwitchAppIconColour, switchAppColourUrl };

const BinocularIcon: React.FC<Props> = ({ size = 'large', fill = DEFAULT_ICON_COLOR, ...props }) => (
  <IconWrapper size={size}>
    <Binocular fill={fill} {...props} />
  </IconWrapper>
);
export { BinocularIcon, binocularUrl };

const ErrorIcon: React.FC<Props> = ({ size = 'large', fill = DEFAULT_ICON_COLOR, ...props }) => (
  <IconWrapper size={size}>
    <Error fill={fill} {...props} />
  </IconWrapper>
);
export { ErrorIcon, errorUrl };

const OneAcreIcon: React.FC<Props> = ({ size = 'large', fill = DEFAULT_ICON_COLOR, ...props }) => (
  <IconWrapper size={size}>
    <OneAcre fill={fill} {...props} />
  </IconWrapper>
);
export { OneAcreIcon, oneAcreUrl };

const HalfAcreIcon: React.FC<Props> = ({ size = 'large', fill = DEFAULT_ICON_COLOR, ...props }) => (
  <IconWrapper size={size}>
    <HalfAcre fill={fill} {...props} />
  </IconWrapper>
);
export { HalfAcreIcon, halfAcreUrl };

const OneThirdAcreIcon: React.FC<Props> = ({ size = 'large', fill = DEFAULT_ICON_COLOR, ...props }) => (
  <IconWrapper size={size}>
    <OneThirdAcre fill={fill} {...props} />
  </IconWrapper>
);
export { OneThirdAcreIcon, oneThirdAcreUrl };

const QuarterAcreIcon: React.FC<Props> = ({ size = 'large', fill = DEFAULT_ICON_COLOR, ...props }) => (
  <IconWrapper size={size}>
    <QuarterAcre fill={fill} {...props} />
  </IconWrapper>
);
export { QuarterAcreIcon, quarterAcreUrl };

const OneSixthAcreIcon: React.FC<Props> = ({ size = 'large', fill = DEFAULT_ICON_COLOR, ...props }) => (
  <IconWrapper size={size}>
    <OneSixthAcre fill={fill} {...props} />
  </IconWrapper>
);
export { OneSixthAcreIcon, oneSixthAcreUrl };

const OneEighthAcreIcon: React.FC<Props> = ({ size = 'large', fill = DEFAULT_ICON_COLOR, ...props }) => (
  <IconWrapper size={size}>
    <OneEighthAcre fill={fill} {...props} />
  </IconWrapper>
);
export { OneEighthAcreIcon, oneEighthAcreUrl };

const HouseFootprint1Icon: React.FC<Props> = ({ size = 'large', fill = DEFAULT_ICON_COLOR, ...props }) => (
  <IconWrapper size={size}>
    <HouseFootprint1 fill={fill} {...props} />
  </IconWrapper>
);
export { HouseFootprint1Icon, houseFootprint1Url };

const HouseFootprint2Icon: React.FC<Props> = ({ size = 'large', fill = DEFAULT_ICON_COLOR, ...props }) => (
  <IconWrapper size={size}>
    <HouseFootprint2 fill={fill} {...props} />
  </IconWrapper>
);
export { HouseFootprint2Icon, houseFootprint2Url };

const HouseFootprint3Icon: React.FC<Props> = ({ size = 'large', fill = DEFAULT_ICON_COLOR, ...props }) => (
  <IconWrapper size={size}>
    <HouseFootprint3 fill={fill} {...props} />
  </IconWrapper>
);
export { HouseFootprint3Icon, houseFootprint3Url };

const SingleGarageIcon: React.FC<Props> = ({ size = 'large', fill = DEFAULT_ICON_COLOR, ...props }) => (
  <IconWrapper size={size}>
    <SingleGarage fill={fill} {...props} />
  </IconWrapper>
);
export { SingleGarageIcon, singleGarageUrl };

const DoubleGarageIcon: React.FC<Props> = ({ size = 'large', fill = DEFAULT_ICON_COLOR, ...props }) => (
  <IconWrapper size={size}>
    <DoubleGarage fill={fill} {...props} />
  </IconWrapper>
);
export { DoubleGarageIcon, doubleGarageUrl };

const ScissorsIcon: React.FC<Props> = ({ size = 'large', fill = DEFAULT_ICON_COLOR, ...props }) => (
  <IconWrapper size={size}>
    <Scissors fill={fill} {...props} />
  </IconWrapper>
);
export { ScissorsIcon, scissorsUrl };

const EyeIcon: React.FC<Props> = ({ size = 'large', fill = DEFAULT_ICON_COLOR, ...props }) => (
  <IconWrapper size={size}>
    <Eye fill={fill} {...props} />
  </IconWrapper>
);
export { EyeIcon, eyeUrl };

const FiltersIcon: React.FC<Props> = ({ size = 'large', fill = DEFAULT_ICON_COLOR, ...props }) => (
  <IconWrapper size={size}>
    <Filters fill={fill} {...props} />
  </IconWrapper>
);
export { FiltersIcon, filtersUrl };

const StandardArrowIcon: React.FC<Props> = ({ size = 'large', fill = DEFAULT_ICON_COLOR, ...props }) => (
  <IconWrapper size={size}>
    <StandardArrow fill={fill} {...props} />
  </IconWrapper>
);
export { StandardArrowIcon, standardArrowUrl };

const BringToFrontIcon: React.FC<Props> = ({ size = 'large', fill = DEFAULT_ICON_COLOR, ...props }) => (
  <IconWrapper size={size}>
    <BringToFront fill={fill} {...props} />
  </IconWrapper>
);
export { BringToFrontIcon, bringToFrontUrl };

const SendToBackIcon: React.FC<Props> = ({ size = 'large', fill = DEFAULT_ICON_COLOR, ...props }) => (
  <IconWrapper size={size}>
    <SendToBack fill={fill} {...props} />
  </IconWrapper>
);
export { SendToBackIcon, sendToBackUrl };

const AlignLeftIcon: React.FC<Props> = ({ size = 'large', fill = DEFAULT_ICON_COLOR, ...props }) => (
  <IconWrapper size={size}>
    <AlignLeft fill={fill} {...props} />
  </IconWrapper>
);
export { AlignLeftIcon, alignLeftUrl };

const AlignCenterIcon: React.FC<Props> = ({ size = 'large', fill = DEFAULT_ICON_COLOR, ...props }) => (
  <IconWrapper size={size}>
    <AlignCenter fill={fill} {...props} />
  </IconWrapper>
);
export { AlignCenterIcon, alignCenterUrl };

const AlignRightIcon: React.FC<Props> = ({ size = 'large', fill = DEFAULT_ICON_COLOR, ...props }) => (
  <IconWrapper size={size}>
    <AlignRight fill={fill} {...props} />
  </IconWrapper>
);
export { AlignRightIcon, alignRightUrl };

const GoToIcon: React.FC<Props> = ({ size = 'large', fill = DEFAULT_ICON_COLOR, ...props }) => (
  <IconWrapper size={size}>
    <GoTo fill={fill} {...props} />
  </IconWrapper>
);

const CopyIcon: React.FC<Props> = ({ size = 'large', fill = DEFAULT_ICON_COLOR, ...props }) => (
  <IconWrapper size={size}>
    <Copy fill={fill} {...props} />
  </IconWrapper>
);
export { CopyIcon, copyIconUrl };

export { GoToIcon, goToUrl };
