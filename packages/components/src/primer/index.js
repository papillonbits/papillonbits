import { Alert, alertVariant } from './Alert'
import { Breadcrumb, breadcrumbState } from './Breadcrumb'
import { Blankslate, blankslateVariant } from './Blankslate'
import { Button, buttonElement, buttonVariant, buttonSize, buttonState, iconAlignment, buttonInputType } from './Button'
import { Dropdown, dropdownState } from './Dropdown'
import { ErrorBoundary } from './ErrorBoundary'
import { Form } from './Form'
import { Grid } from './Grid'
import { Icon, iconName, iconSize } from './Icon'
import { Label } from './Label'
import { Loader, loaderVariant } from './Loader'
import { Navigation } from './Navigation'
import { Pagination } from './Pagination'

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
  Grid,
  Icon: {
    Icon,
    iconName,
    iconSize,
  },
  Label,
  Loader: {
    Loader,
    loaderVariant,
  },
  Navigation,
  Pagination,
}
