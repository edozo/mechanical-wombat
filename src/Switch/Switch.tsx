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
