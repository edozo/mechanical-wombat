import React from 'react';
import cx from 'classnames';
import styles from './Switch.css';

type Props = {
  disabled?: boolean;
  id: string;
  currentValue: boolean;
  small: boolean;
  onChange: () => void;
};

export const Switch: React.FC<Props> = ({ disabled, id, currentValue, small, onChange }) => {
  return (
    <div className={cx(styles.toggle_switch, { [styles.small_switch]: small })}>
      <input
        type="checkbox"
        className={styles.toggle_switch_checkbox}
        id={id}
        checked={currentValue}
        onChange={onChange}
        disabled={disabled}
      />
      {id ? (
        <label className={styles.toggle_switch_label} htmlFor={id}>
          <span
            className={cx(styles.toggle_switch_inner, { [styles.toggle_switch_disabled]: disabled })}
            data-yes="yes"
            data-no="no"
          />
          <span className={cx(styles.toggle_switch_switch, { [styles.toggle_switch_disabled]: disabled })} />
        </label>
      ) : null}
    </div>
  );
};
