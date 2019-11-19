import * as React from 'react';
import styles from './styles.css';

export interface Props {
  text: string;
}

export const Example = (props: Props): JSX.Element => (
  <div className={styles.example}>Example Component: {props.text}</div>
);
