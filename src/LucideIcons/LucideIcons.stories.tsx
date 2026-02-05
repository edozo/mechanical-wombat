import { StoryFn, Meta } from '@storybook/react';
import { DisplayBoxWrapper } from '../DisplayBox';
import { DisplayBoxSubTitle } from '../DisplayBox/DisplayBox.styles';
import { Triangle, Check, Search, X } from 'lucide-react';
import { LucideIcon, LucideCustomExample } from '.';
import { TextBase } from '../Typography';

export default {
  title: 'Components/Lucide Icons',
  component: LucideIcon,
  argTypes: {
    size: {
      control: { type: 'inline-radio' },
      options: ['sm', 'md', 'lg'],
    },
    color: {
      control: { type: 'color' },
    },
    iconKey: {
      control: { type: 'select' },
      options: ['Triangle', 'Check', 'Search', 'X', 'CustomExample'],
    },
    icon: { table: { disable: true } },
    children: { table: { disable: true } },
    background: { table: { disable: true } },
    borderRadius: { table: { disable: true } },
  },
} as Meta;

const iconMap = {
  Triangle,
  Check,
  Search,
  X,
  CustomExample: LucideCustomExample,
};

type ControlsArgs = {
  size: 'sm' | 'md' | 'lg';
  color: string;
  iconKey: keyof typeof iconMap;
};

const icons = [
  { name: 'Triangle', component: <LucideIcon icon={Triangle} /> },
  { name: 'Check', component: <LucideIcon icon={Check} /> },
  { name: 'Custom example', component: <LucideCustomExample /> },
  { name: 'Search', component: <LucideIcon icon={Search} /> },
  { name: 'X', component: <LucideIcon icon={X} /> },
];

export const Controls: StoryFn<ControlsArgs> = ({ size, color, iconKey }) => (
  <div>
    <DisplayBoxWrapper>
      <div style={{ padding: '8px', textAlign: 'center' }}>
        <LucideIcon icon={iconMap[iconKey]} size={size} color={color} />
        <DisplayBoxSubTitle style={{ width: '80px' }}>{iconKey}</DisplayBoxSubTitle>
      </div>
    </DisplayBoxWrapper>
    <TextBase>For the full set of icons available visit - <a href="https://lucide.dev/icons/" target="_blank" rel="noopener noreferrer">lucide.dev/icons</a></TextBase>
  </div>
);

Controls.args = {
  size: 'md',
  color: '#4c4c4c',
  iconKey: 'Search',
};

export const Default: StoryFn = () => (
  <div>
    <DisplayBoxWrapper>
      {icons.map(icon => (
        <div style={{ padding: '8px', textAlign: 'center' }} key={icon.name}>
          {icon.component}
          <DisplayBoxSubTitle style={{ width: '80px' }}>{icon.name}</DisplayBoxSubTitle>
        </div>
      ))}
    </DisplayBoxWrapper>
    <TextBase>For the full set of icons available visit - <a href="https://lucide.dev/icons/" target="_blank" rel="noopener noreferrer">lucide.dev/icons</a></TextBase>
  </div>
);
