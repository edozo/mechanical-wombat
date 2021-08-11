import React, { useEffect, useState } from 'react';
import useCollapse from 'react-collapsed';
import { StyledCollapse, StyledPanel, StyledTrigger } from './Collapse.styles';

export interface CollapseProps {
  isOpen?: boolean;
  trigger: React.ReactNode;
}

export const Collapse: React.FC<CollapseProps> = ({ children, isOpen = false, trigger, ...rest }) => {
  const [isExpanded, setExpanded] = useState(isOpen);
  const { getToggleProps, getCollapseProps } = useCollapse({
    isExpanded,
  });

  useEffect(() => {
    setExpanded(isOpen);
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
      <StyledPanel {...getCollapseProps()}>{children}</StyledPanel>
    </StyledCollapse>
  );
};
