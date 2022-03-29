import { Alert, alertVariant } from './Alert'
import { Breadcrumb, breadcrumbState } from './Breadcrumb'
import { Blankslate, blankslateVariant } from './Blankslate'
import { Button, buttonElement, buttonVariant, buttonSize, buttonState, iconAlignment, buttonInputType } from './Button'
import { Dropdown, dropdownState } from './Dropdown'
import { ErrorBoundary } from './ErrorBoundary'
import { Form } from './Form'
import { Icon, iconName, iconSize } from './Icon'

export const primer = {
  Alert: {
    Alert,
    alertVariant,
  },
  Breadcrumb: {
    Breadcrumb,
    breadcrumbState,
  },
  Blankslate: {
    Blankslate,
    blankslateVariant,
  },
  Button: {
    Button,
    buttonElement,
    buttonVariant,
    buttonSize,
    buttonState,
    iconAlignment,
    buttonInputType,
  },
  Dropdown: {
    Dropdown,
    dropdownState,
  },
  ErrorBoundary,
  Form,
  Icon: {
    Icon,
    iconName,
    iconSize,
  },
}
