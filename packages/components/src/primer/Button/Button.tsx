import { FunctionComponent } from 'react'
import cx from 'classnames'
import styles from './Button.scss'

export interface ButtonProps {
  className?: string
  text: string
}

export const Button: FunctionComponent<ButtonProps> = ({ className, text }) => (
  <button className={cx(className, styles.btn)} type="button">
    {text}
  </button>
)
