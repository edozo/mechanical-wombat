import React from 'react';
import styled from 'styled-components';
import trashUrl, { ReactComponent as TrashCan } from './icons/trash-can.svg';
import zoomOutUrl, { ReactComponent as ZoomOut } from './icons/zoom-out.svg';
import zoomInUrl, { ReactComponent as ZoomIn } from './icons/zoom-in.svg';
import saveUrl, { ReactComponent as Save } from './icons/save.svg';

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
const TrashCanIcon: React.FC<Props> = ({ size = 'base', fill = DEFAULT_ICON_COLOR, ...props }) => (
  <IconWrapper size={size}>
    <TrashCan fill={fill} {...props} />
  </IconWrapper>
);
export { TrashCanIcon, trashUrl };

const ZoomOutIcon: React.FC<Props> = ({ size = 'base', fill = DEFAULT_ICON_COLOR, ...props }) => (
  <IconWrapper size={size}>
    <ZoomOut fill={fill} {...props} />
  </IconWrapper>
);
export { ZoomOutIcon, zoomOutUrl };

const ZoomInIcon: React.FC<Props> = ({ size = 'base', fill = DEFAULT_ICON_COLOR, ...props }) => (
  <IconWrapper size={size}>
    <ZoomIn fill={fill} {...props} />
  </IconWrapper>
);
export { ZoomInIcon, zoomInUrl };

const SaveIcon: React.FC<Props> = ({ size = 'base', fill = DEFAULT_ICON_COLOR, ...props }) => (
  <IconWrapper size={size}>
    <Save fill={fill} {...props} />
  </IconWrapper>
);
export { SaveIcon, saveUrl };
