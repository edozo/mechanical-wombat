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
import measureToolUrl, { ReactComponent as MeasureTool } from './icons/measure-tool.svg';
import editToolUrl, { ReactComponent as EditTool } from './icons/edit-tool.svg';
import modifyToolUrl, { ReactComponent as ModifyTool } from './icons/modify-tool.svg';
import textUrl, { ReactComponent as Text } from './icons/text.svg';
import deleteAllUrl, { ReactComponent as DeleteAll } from './icons/delete-all.svg';
import separateUrl, { ReactComponent as Separate } from './icons/separate.svg';
import duplicateUrl, { ReactComponent as Duplicate } from './icons/duplicate.svg';
import mergeUrl, { ReactComponent as Merge } from './icons/merge.svg';
import lockOpenUrl, { ReactComponent as LockOpen } from './icons/lock-open.svg';
import lockClosedUrl, { ReactComponent as LockClosed } from './icons/lock-closed.svg';
import deleteUrl, { ReactComponent as Delete } from './icons/delete.svg';
import drawingLibraryUrl, { ReactComponent as DrawingLibrary } from './icons/drawing-library.svg';
import dashedRectangleUrl, { ReactComponent as DashedRectangle } from './icons/dashed-rectangle.svg';
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
import hMarkUrl, { ReactComponent as HMark } from './icons/h-mark.svg';
import tMarkUrl, { ReactComponent as TMark } from './icons/t-mark.svg';

const DEFAULT_ICON_COLOR = '#4c4c4c';

export interface Props {
  fill?: 'string';
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
