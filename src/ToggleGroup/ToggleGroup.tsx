// TODO: Make this use hooks. Also don't think it need internal state.
import React from 'react';
import { StyledToggleGroup, StyledToggleButton, StyleProps } from './ToggleGroup.styles';

export interface Item {
  label: string;
  value: string;
}

export interface Props extends StyleProps {
  items: Item[];
  onChange: (item: Item) => void;
  selectedItem: Item;
}

export interface State {
  activeItem: Item;
}

class ToggleGroup extends React.Component<Props, State> {
  state = { activeItem: this.props.selectedItem };

  componentDidUpdate = (prevProps: any): void => {
    if (this.props.selectedItem.value && this.props.selectedItem.value !== prevProps.selectedItem.value) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({ activeItem: this.props.selectedItem });
    }
  };

  handleClick = (item: Item): void => {
    this.setState({ activeItem: item });
    this.props.onChange(item);
  };

  render(): React.ReactElement {
    return (
      <StyledToggleGroup>
        {this.props.items.map((item: Item) => (
          <StyledToggleButton
            key={item.value}
            type="button"
            onClick={() => this.handleClick(item)}
            $isActive={this.state.activeItem.value === item.value}
          >
            {item.label}
          </StyledToggleButton>
        ))}
      </StyledToggleGroup>
    );
  }
}

export { ToggleGroup };
