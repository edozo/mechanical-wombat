import React, { useEffect, useState } from 'react';
import useCollapse from 'react-collapsed';
import { StyledCollapse, StyledPanel, StyledTrigger } from './Collapse.styles';

export interface CollapseProps {
  isOpen?: boolean;
  trigger: React.ReactNode;
  children: React.ReactNode;
}

export const Collapse: React.FC<CollapseProps> = ({ children, isOpen = false, trigger, ...rest }) => {
  const [isExpanded, setExpanded] = useState(isOpen);
  const { getToggleProps, getCollapseProps } = useCollapse({
    isExpanded,
  });

  useEffect(() => {
    let mounted = true;
    mounted && setExpanded(isOpen);

    return () => {
      mounted = false;
    };
  }, [isOpen, setExpanded]);

  return (
    <StyledCollapse {...rest}>
      <StyledTrigger
        {...getToggleProps({
          onClick: () => setExpanded(prevState => !prevState),
        })}
      >
        {trigger}
      </StyledTrigger>
      <div {...getCollapseProps()}>
        <StyledPanel>{children}</StyledPanel>
      </div>
    </StyledCollapse>
  );
};
