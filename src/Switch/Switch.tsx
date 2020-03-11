import React from 'react';
import './Switch.css';

type Props = {
  disabled?: boolean;
  id: string;
  currentValue: boolean;
  small: boolean;
  onChange: () => void;
};

export const Switch: React.FC<Props> = ({ disabled, id, currentValue, small, onChange }) => {
  return (
    <div className={`toggle-switch${small ? ' small-switch' : ''}`}>
      <input
        type="checkbox"
        className="toggle-switch-checkbox"
        id={id}
        checked={currentValue}
        onChange={onChange}
        disabled={disabled}
      />
      {id ? (
        <label className="toggle-switch-label" htmlFor={id}>
          <span
            className={disabled ? 'toggle-switch-inner toggle-switch-disabled' : 'toggle-switch-inner'}
            data-yes="yes"
            data-no="no"
          />
          <span className={disabled ? 'toggle-switch-switch toggle-switch-disabled' : 'toggle-switch-switch'} />
        </label>
      ) : null}
    </div>
  );
};

// class ToggleSwitch extends Component {
//   state = {
//     checked: this.props.defaultChecked,
//   };

//   onChange = e => {
//     this.setState({
//       checked: e.target.checked,
//     });
//     if (typeof this.props.onChange === 'function') this.props.onChange();
//   };

//   render() {
//     return (
//       <div className={`toggle-switch${this.props.Small ? ' small-switch' : ''}`}>
//         <input
//           type="checkbox"
//           name={this.props.Name}
//           className="toggle-switch-checkbox"
//           id={this.props.id}
//           checked={this.props.currentValue}
//           defaultChecked={this.props.defaultChecked}
//           onChange={this.onChange}
//           disabled={this.props.disabled}
//         />
//         {this.props.id ? (
//           <label className="toggle-switch-label" htmlFor={this.props.id}>
//             <span
//               className={this.props.disabled ? 'toggle-switch-inner toggle-switch-disabled' : 'toggle-switch-inner'}
//               data-yes={this.props.Text[0]}
//               data-no={this.props.Text[1]}
//             />
//             <span
//               className={this.props.disabled ? 'toggle-switch-switch toggle-switch-disabled' : 'toggle-switch-switch'}
//             />
//           </label>
//         ) : null}
//       </div>
//     );
//   }

//   // Set text for rendering.
//   static defaultProps = {
//     Text: ['Yes', 'No'],
//   };
// }

// ToggleSwitch.propTypes = {
//   id: PropTypes.string.isRequired,
//   Text: PropTypes.string.isRequired,
//   Name: PropTypes.string,
//   onChange: PropTypes.func,
//   defaultChecked: PropTypes.bool,
//   Small: PropTypes.bool,
//   currentValue: PropTypes.bool,
//   disabled: PropTypes.bool,
// };

// export default ToggleSwitch;
