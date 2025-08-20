/* eslint-disable no-alert */
import { useState } from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Popover } from './Popover';
import { WarningIcon } from '../Icons';
import { Tooltip } from '../Tooltip';
import { List } from '../List';

export default {
  title: 'Components/Popover',
  component: Popover,
  parameters: {
    backgrounds: {
      default: 'dark blue',
    },
  },
} as Meta;

export const PopoverWithTitle: StoryFn = () => {
  const [popoverVisible, setPopoverVisible] = useState(false);
  const showPopover = (): void => setPopoverVisible(true);
  const hidePopover = (): void => setPopoverVisible(false);
  const [currentTool, setCurrentTool] = useState('tool A');

  return (
    <div style={{ minHeight: '200px' }}>
      <Popover
        interactive
        interactiveBorder={10}
        visible={popoverVisible}
        onClickOutside={hidePopover}
        content={
          <div style={{ padding: '8px' }}>
            <Popover.Title>Tooltip</Popover.Title>
            <div style={{ display: 'flex' }}>
              <Popover.Button
                style={{ marginRight: '4px' }}
                name="a button"
                onClick={() => {
                  if (currentTool !== 'tool A') {
                    // eslint-disable-next-line no-restricted-globals
                    const result = confirm('Are you sure you want to change the tool');
                    result && setCurrentTool('tool A');
                    hidePopover();
                  }
                }}
              >
                <WarningIcon />
                <div style={{ marginTop: '4px' }}>
                  Freehold
                  <br />
                  Title
                </div>
              </Popover.Button>
              <Popover.Button
                onClick={() => {
                  if (currentTool !== 'tool B') {
                    setCurrentTool('tool B');
                    hidePopover();
                  }
                }}
              >
                text
              </Popover.Button>
            </div>
          </div>
        }
      >
        <button type="button" onClick={popoverVisible ? hidePopover : showPopover}>
          {currentTool} (click)
        </button>
      </Popover>
    </div>
  );
};

export const PopoverWithTooltip: StoryFn = () => {
  const [popoverVisible, setTooltipVisible] = useState(false);
  const showPopover = (): void => setTooltipVisible(true);
  const hidePopover = (): void => setTooltipVisible(false);

  return (
    <div style={{ minHeight: '200px' }}>
      <Tooltip content="You're hovering me" disabled={popoverVisible}>
        <span>
          <Popover
            interactive
            interactiveBorder={40}
            visible={popoverVisible}
            onClickOutside={hidePopover}
            content={<div style={{ padding: '8px' }}>You clicked me</div>}
          >
            <button type="button" onClick={popoverVisible ? hidePopover : showPopover}>
              Trigger (hover + click)
            </button>
          </Popover>
        </span>
      </Tooltip>
    </div>
  );
};

export const PopoverSimple: StoryFn = () => {
  const [popoverVisible, setTooltipVisible] = useState(true);
  const showPopover = (): void => setTooltipVisible(true);
  const hidePopover = (): void => setTooltipVisible(false);

  return (
    <div style={{ minHeight: '200px' }}>
      <Popover
        interactive
        interactiveBorder={10}
        visible={popoverVisible}
        content={
          <div style={{ padding: '8px' }}>
            <span>Open by default and does not close on click outside</span>
            <img
              alt="Himself"
              src="https://i2-prod.mirror.co.uk/incoming/article5657868.ece/ALTERNATES/s1200b/Boris-Johnson.jpg"
              width="100px"
            />
            <br />
            <button type="button" onClick={hidePopover}>
              close
            </button>
          </div>
        }
      >
        <button type="button" onClick={popoverVisible ? hidePopover : showPopover}>
          trigger (click)
        </button>
      </Popover>
    </div>
  );
};

export const PopoverList: StoryFn = ({ ...args }) => {
  const elements = [
    { node: 'Element 1' },
    { node: 'Element 2', disabled: true },
    { node: 'Element 3' },
    { node: 'Element 4' },
    { node: 'Element 5' },
    { node: 'Element 6' },
  ];
  return (
    <div style={{ minHeight: '200px' }}>
      <Popover
        interactive
        interactiveBorder={10}
        visible
        // Tippy logs a warning here, we can find a fix later as it doesn't effect anything
        {...args}
        content={
          <List {...args}>
            {elements.map(element => (
              <List.Item disabled={element.disabled} key={element.node}>
                {element.node}
              </List.Item>
            ))}
          </List>
        }
      >
        <span>some element</span>
      </Popover>
    </div>
  );
};
PopoverList.args = {
  radius: 'xlarge',
  variant: 'standard',
};
