import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react';
import { Popover } from './Popover';
import { WarningIcon } from '../Icons';

export default {
  title: 'Components/Popover',
  component: Popover,
} as Meta;

export const PopoverWithTitle: Story = () => {
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const showTooltip = (): void => setTooltipVisible(true);
  const hideTooltip = (): void => setTooltipVisible(false);
  const [currentTool, setCurrentTool] = useState('tool A');

  return (
    <div style={{ minHeight: '200px' }}>
      <Popover
        interactive
        interactiveBorder={10}
        visible={tooltipVisible}
        onClickOutside={hideTooltip}
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
                    hideTooltip();
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
                    hideTooltip();
                  }
                }}
              >
                text
              </Popover.Button>
            </div>
          </React.Fragment>
        }
      >
        <button type="button" onClick={tooltipVisible ? hideTooltip : showTooltip}>
          {currentTool} (click)
        </button>
      </Popover>
    </div>
  );
};

export const PopoverSimple: Story = () => {
  const [tooltipVisible, setTooltipVisible] = useState(true);
  const showTooltip = (): void => setTooltipVisible(true);
  const hideTooltip = (): void => setTooltipVisible(false);

  return (
    <div style={{ minHeight: '200px' }}>
      <Popover
        interactive
        interactiveBorder={10}
        visible={tooltipVisible}
        content={
          <div>
            <span>Open by default and does not close on click outside</span>
            <img
              alt="Himself"
              src="https://i2-prod.mirror.co.uk/incoming/article5657868.ece/ALTERNATES/s1200b/Boris-Johnson.jpg"
              width="100px"
            />
            <br />
            <button type="button" onClick={hideTooltip}>
              close
            </button>
          </div>
        }
      >
        <button type="button" onClick={tooltipVisible ? hideTooltip : showTooltip}>
          trigger (click)
        </button>
      </Popover>
    </div>
  );
};
