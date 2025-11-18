import React from 'react';
import styled from 'styled-components';

import zoomOutUrl from './icons/zoom-out.svg?url';
import ZoomOut from './icons/zoom-out.svg';

import zoomInUrl from './icons/zoom-in.svg?url';
import ZoomIn from './icons/zoom-in.svg';

import zoomUrl from './icons/zoom.svg?url';
import Zoom from './icons/zoom.svg';

import saveUrl from './icons/save.svg?url';
import Save from './icons/save.svg';

import warningUrl from './icons/warning.svg?url';
import Warning from './icons/warning.svg';

import upgradeUrl from './icons/upgrade.svg?url';
import Upgrade from './icons/upgrade.svg';

import refreshUrl from './icons/refresh.svg?url';
import Refresh from './icons/refresh.svg';

import questionUrl from './icons/question.svg?url';
import Question from './icons/question.svg';

import reloadUrl from './icons/reload.svg?url';
import Reload from './icons/reload.svg';

import editUrl from './icons/edit.svg?url';
import Edit from './icons/edit.svg';

import downloadUrl from './icons/download.svg?url';
import Download from './icons/download.svg';

import plusUrl from './icons/plus.svg?url';
import Plus from './icons/plus.svg';

import closeUrl from './icons/close.svg?url';
import Close from './icons/close.svg';

import minusUrl from './icons/minus.svg?url';
import Minus from './icons/minus.svg';

import arrowDownUrl from './icons/arrow-down.svg?url';
import ArrowDown from './icons/arrow-down.svg';

import arrowUpUrl from './icons/arrow-up.svg?url';
import ArrowUp from './icons/arrow-up.svg';

import checkUrl from './icons/check.svg?url';
import Check from './icons/check.svg';

import infoUrl from './icons/info.svg?url';
import Info from './icons/info.svg';

import binUrl from './icons/bin.svg?url';
import Bin from './icons/bin.svg';

import autoPolygonUrl from './icons/auto-polygon-tool.svg?url';
import AutoPolygon from './icons/auto-polygon-tool.svg';
import LeaseholdAutoPolygon from './icons/auto-polygon-tool.svg';

import drawPolygonUrl from './icons/draw-polygon-tool.svg?url';
import DrawPolygon from './icons/draw-polygon-tool.svg';

import rectangleUrl from './icons/rectangle.svg?url';
import Rectangle from './icons/rectangle.svg';

import circleUrl from './icons/circle.svg?url';
import Circle from './icons/circle.svg';

import arrowToolUrl from './icons/arrow-tool.svg?url';
import ArrowTool from './icons/arrow-tool.svg';

import lineToolUrl from './icons/line-tool.svg?url';
import LineTool from './icons/line-tool.svg';

import newLineToolUrl from './icons/new-line-tool.svg?url';
import NewLineTool from './icons/new-line-tool.svg';

import measureToolUrl from './icons/measure-tool.svg?url';
import MeasureTool from './icons/measure-tool.svg';

import editToolUrl from './icons/edit-tool.svg?url';
import EditTool from './icons/edit-tool.svg';

import modifyToolUrl from './icons/modify-tool.svg?url';
import ModifyTool from './icons/modify-tool.svg';

import textUrl from './icons/text.svg?url';
import Text from './icons/text.svg';

import streetNameTextUrl from './icons/street-name-text.svg?url';
import StreetNameText from './icons/street-name-text.svg';

import buildingNumberTextUrl from './icons/building-number-text.svg?url';
import BuildingNumberText from './icons/building-number-text.svg';

import notesTextUrl from './icons/notes-text.svg?url';
import NotesText from './icons/notes-text.svg';

import deleteAllUrl from './icons/delete-all.svg?url';
import DeleteAll from './icons/delete-all.svg';

import separateUrl from './icons/separate.svg?url';
import Separate from './icons/separate.svg';

import duplicateUrl from './icons/duplicate.svg?url';
import Duplicate from './icons/duplicate.svg';

import mergeUrl from './icons/merge.svg?url';
import Merge from './icons/merge.svg';

import lockOpenUrl from './icons/lock-open.svg?url';
import LockOpen from './icons/lock-open.svg';

import lockClosedUrl from './icons/lock-closed.svg?url';
import LockClosed from './icons/lock-closed.svg';

import deleteUrl from './icons/delete.svg?url';
import Delete from './icons/delete.svg';

import drawingLibraryUrl from './icons/drawing-library.svg?url';
import DrawingLibrary from './icons/drawing-library.svg';

import dashedRectangleUrl from './icons/dashed-rectangle.svg?url';
import DashedRectangle from './icons/dashed-rectangle.svg';

import dashedCircleUrl from './icons/dashed-circle.svg?url';
import DashedCircle from './icons/dashed-circle.svg';

import boldUrl from './icons/bold.svg?url';
import Bold from './icons/bold.svg';

import italicUrl from './icons/italic.svg?url';
import Italic from './icons/italic.svg';

import hatchCDUrl from './icons/hatch-cd.svg?url';
import HatchCD from './icons/hatch-cd.svg';

import hatchCUUrl from './icons/hatch-cu.svg?url';
import HatchCU from './icons/hatch-cu.svg';

import hatchLAUrl from './icons/hatch-la.svg?url';
import HatchLA from './icons/hatch-la.svg';

import hatchLMinusUrl from './icons/hatch-lminus.svg?url';
import HatchLMinus from './icons/hatch-lminus.svg';

import hatchLPlusUrl from './icons/hatch-lplus.svg?url';
import HatchLPlus from './icons/hatch-lplus.svg';
import hatchLUUrl from './icons/hatch-lu.svg?url';
import HatchLU from './icons/hatch-lu.svg';

import searchUrl from './icons/search.svg?url';
import Search from './icons/search.svg';

import stackUrl from './icons/stack.svg?url';
import Stack from './icons/stack.svg';

import centerMapUrl from './icons/center-map.svg?url';
import CenterMap from './icons/center-map.svg';

import hMarkUrl from './icons/H-mark.svg?url';
import HMark from './icons/H-mark.svg';

import tMarkUrl from './icons/T-mark.svg?url';
import TMark from './icons/T-mark.svg';

import arrowMarkUrl from './icons/arrow-mark.svg?url';
import ArrowMark from './icons/arrow-mark.svg';

import crossMarkUrl from './icons/cross-mark.svg?url';
import CrossMark from './icons/cross-mark.svg';

import starMarkUrl from './icons/star-mark.svg?url';
import StarMark from './icons/star-mark.svg';

import dashedDrawPolygonUrl from './icons/dashed-draw-polygon.svg?url';
import DashedDrawPolygon from './icons/dashed-draw-polygon.svg';

import dashedModifyUrl from './icons/dashed-modify.svg?url';
import DashedModify from './icons/dashed-modify.svg';

import dashedRectangleNodesUrl from './icons/dashed-rectangle-nodes.svg?url';
import DashedRectangleNodes from './icons/dashed-rectangle-nodes.svg';

import dashedCircleNodesUrl from './icons/dashed-circle-nodes.svg?url';
import DashedCircleNodes from './icons/dashed-circle-nodes.svg';

import reopenPolygonUrl from './icons/reopen-polygon.svg?url';
import ReopenPolygon from './icons/reopen-polygon.svg';

import featureOutlineUrl from './icons/feature-outline-polygon-tool.svg?url';
import FeatureOutline from './icons/feature-outline-polygon-tool.svg';

import lightBulbUrl from './icons/light-bulb.svg?url';
import LightBulb from './icons/light-bulb.svg';

import treeUrl from './icons/tree.svg?url';
import Tree from './icons/tree.svg';

import redoUrl from './icons/redo.svg?url';
import Redo from './icons/redo.svg';

import undoUrl from './icons/undo.svg?url';
import Undo from './icons/undo.svg';

import logoutUrl from './icons/logout-icon.svg?url';
import Logout from './icons/logout-icon.svg';

import switchAppUrl from './icons/switch-app-icon.svg?url';
import SwitchApp from './icons/switch-app-icon.svg';

import switchAppColourUrl from './icons/switch-app-icon-color.svg?url';
import SwitchAppColour from './icons/switch-app-icon-color.svg';

import binocularUrl from './icons/binocular.svg?url';
import Binocular from './icons/binocular.svg';

import errorUrl from './icons/error-icon.svg?url';
import Error from './icons/error-icon.svg';

import oneAcreUrl from './icons/one-acre.svg?url';
import OneAcre from './icons/one-acre.svg';

import halfAcreUrl from './icons/half-acre.svg?url';
import HalfAcre from './icons/half-acre.svg';

import oneThirdAcreUrl from './icons/one-third-acre.svg?url';
import OneThirdAcre from './icons/one-third-acre.svg';

import quarterAcreUrl from './icons/quarter-acre.svg?url';
import QuarterAcre from './icons/quarter-acre.svg';

import oneSixthAcreUrl from './icons/one-sixth-acre.svg?url';
import OneSixthAcre from './icons/one-sixth-acre.svg';

import oneEighthAcreUrl from './icons/one-eighth-acre.svg?url';
import OneEighthAcre from './icons/one-eighth-acre.svg';

import houseFootprint1Url from './icons/house-footprint-1.svg?url';
import HouseFootprint1 from './icons/house-footprint-1.svg';

import houseFootprint2Url from './icons/house-footprint-2.svg?url';
import HouseFootprint2 from './icons/house-footprint-2.svg';

import houseFootprint3Url from './icons/house-footprint-3.svg?url';
import HouseFootprint3 from './icons/house-footprint-3.svg';

import singleGarageUrl from './icons/single-garage.svg?url';
import SingleGarage from './icons/single-garage.svg';

import doubleGarageUrl from './icons/double-garage.svg?url';
import DoubleGarage from './icons/double-garage.svg';

import scissorsUrl from './icons/scissors.svg?url';
import Scissors from './icons/scissors.svg';

import splitPolygonUrl from './icons/split-polygon.svg?url';
import SplitPolygon from './icons/split-polygon.svg';

import eyeUrl from './icons/eye.svg?url';
import Eye from './icons/eye.svg';

import filtersUrl from './icons/filters.svg?url';
import Filters from './icons/filters.svg';

import standardArrowUrl from './icons/standard-arrow.svg?url';
import StandardArrow from './icons/standard-arrow.svg';

import bringToFrontUrl from './icons/bring-to-front.svg?url';
import BringToFront from './icons/bring-to-front.svg';

import sendToBackUrl from './icons/send-to-back.svg?url';
import SendToBack from './icons/send-to-back.svg';

import alignLeftUrl from './icons/left-align.svg?url';
import AlignLeft from './icons/left-align.svg';

import alignCenterUrl from './icons/center-align.svg?url';
import AlignCenter from './icons/center-align.svg';

import alignRightUrl from './icons/right-align.svg?url';
import AlignRight from './icons/right-align.svg';

import verifiedUrl from './icons/verified.svg?url';
import Verified from './icons/verified.svg';

import goToUrl from './icons/go-to.svg?url';
import GoTo from './icons/go-to.svg';

import moreInfoUrl from './icons/more-info.svg?url';
import MoreInfo from './icons/more-info.svg';

import copyIconUrl from './icons/copy-icon.svg?url';
import Copy from './icons/copy-icon.svg';

import freeholdAutoPolygonUrl from './icons/freehold-autopolygon.svg?url';
import FreeholdAutoPolygon from './icons/freehold-autopolygon.svg';

import actionsIndicatorUrl from './icons/actions-indicator.svg?url';
import ActionsIndicator from './icons/actions-indicator.svg';

import aiThreeStarsUrl from './icons/ai-three-stars.svg?url';
import AiThreeStars from './icons/ai-three-stars.svg';

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

const LeaseholdAutoPolygonIcon: React.FC<Props> = ({ size = 'large', fill = DEFAULT_ICON_COLOR, ...props }) => (
  <IconWrapper size={size}>
    <LeaseholdAutoPolygon fill={fill} {...props} />
  </IconWrapper>
);
export { LeaseholdAutoPolygonIcon, autoPolygonUrl as leaseholdAutoPolygonUrl };

const FreeholdAutoPolygonIcon: React.FC<Props> = ({ size = 'large', fill = DEFAULT_ICON_COLOR, ...props }) => (
  <IconWrapper size={size}>
    <FreeholdAutoPolygon fill={fill} {...props} />
  </IconWrapper>
);
export { FreeholdAutoPolygonIcon, freeholdAutoPolygonUrl };

const ActionsIndicatorIcon: React.FC<Props> = ({ size = 'large', fill = DEFAULT_ICON_COLOR, ...props }) => (
  <IconWrapper size={size}>
    <ActionsIndicator fill={fill} {...props} />
  </IconWrapper>
);
export { ActionsIndicatorIcon, actionsIndicatorUrl };

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
export { GoToIcon, goToUrl };

const CopyIcon: React.FC<Props> = ({ size = 'large', fill = DEFAULT_ICON_COLOR, ...props }) => (
  <IconWrapper size={size}>
    <Copy fill={fill} {...props} />
  </IconWrapper>
);
export { CopyIcon, copyIconUrl };

const AiThreeStarsIcon: React.FC<Props> = ({ size = 'large', fill = DEFAULT_ICON_COLOR, ...props }) => (
  <IconWrapper size={size}>
    <AiThreeStars fill={fill} {...props} />
  </IconWrapper>
);
export { AiThreeStarsIcon, aiThreeStarsUrl };
