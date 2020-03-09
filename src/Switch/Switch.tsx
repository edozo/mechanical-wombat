import * as React from 'react';
import './Switch.css';

type Props = {
  checked: boolean;
  handleToggle: () => void;
  activeColor: string;
};
export const Switch: React.FC<Props> = ({ checked, handleToggle, activeColor = 'fd' }) => {
  return (
    <>
      <input
        className="react-switch-checkbox"
        id="react-switch-new"
        type="checkbox"
        checked={checked}
        onChange={handleToggle}
      />
      <label
        className="react-switch-label"
        htmlFor="react-switch-new"
        style={{ background: checked ? activeColor : '' }}
      >
        <span className="react-switch-button" />
      </label>
    </>
  );
};
