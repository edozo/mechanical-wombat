import * as React from 'react'
import { StyledButton } from './Button.styles'

export interface Props { text: string }

export const Button = (props: Props) => <StyledButton>{props.text}</StyledButton>;
