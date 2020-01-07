import React from 'react';
import { StyledToggleGroup, StyledToggleButton, StyleProps } from './ToggleGroup.styles';

export interface Item {
  label: string;
  value: string;
}

export interface Props extends StyleProps {
  items: Item[];
  onChange: (item: Item) => void;
}

export interface State {
  activeItem: Item;
}

class ToggleGroup extends React.Component<Props, State> {
  state = { activeItem: { ...this.props.items[0] } };

  handleClick = (item: Item): void => {
    this.setState({ activeItem: item });
    this.props.onChange(item);
  };

  render(): JSX.Element {
    return (
      <StyledToggleGroup>
        {this.props.items.map((item: Item) => (
          <StyledToggleButton
            key={item.value}
            type="button"
            onClick={() => this.handleClick(item)}
            isActive={this.state.activeItem.value === item.value}
          >
            {item.label}
          </StyledToggleButton>
        ))}
      </StyledToggleGroup>
    );
  }
}

export { ToggleGroup };
