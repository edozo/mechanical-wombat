import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react';
import { Popover } from './Popover';
import { WarningIcon } from '../Icons';
import { Tooltip } from '../Tooltip';

export default {
  title: 'Components/Popover',
  component: Popover,
} as Meta;

export const PopoverWithTitle: Story = () => {
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
          <React.Fragment>
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
          </React.Fragment>
        }
      >
        <button type="button" onClick={popoverVisible ? hidePopover : showPopover}>
          {currentTool} (click)
        </button>
      </Popover>
    </div>
  );
};

export const PopoverWithTooltip: Story = () => {
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
            content="You clicked me"
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

export const PopoverSimple: Story = () => {
  const [popoverVisible, setTooltipVisible] = useState(false);
  const showPopover = (): void => setTooltipVisible(true);
  const hidePopover = (): void => setTooltipVisible(false);

  return (
    <div style={{ minHeight: '200px' }}>
      <Popover
        interactive
        interactiveBorder={10}
        visible={popoverVisible}
        content={
          <div>
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
