import * as React from 'react'
import styles from './styles.css'

export interface Props { text: string }

export const Button = (props: Props) => <button className={styles.button}>{props.text}</button>;
