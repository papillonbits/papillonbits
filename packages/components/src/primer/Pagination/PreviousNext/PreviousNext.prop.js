import { string, oneOf, shape, object, func } from 'prop-types'

export const previousNextState = {
  active: 'active',
  inactive: 'inactive',
}

export const propTypes = {
  className: string,
  ariaAttr: shape({
    label: string,
  }).isRequired,
  currentPage: object.isRequired,
  previous: shape({
    rel: string,
    href: string,
    ariaAttr: shape({
      label: string,
    }).isRequired,
    text: string,
  }),
  next: shape({
    rel: string,
    href: string,
    ariaAttr: shape({
      label: string,
    }).isRequired,
    text: string,
  }),
  onClick: func.isRequired,
  state: oneOf(Object.keys(previousNextState)),
}

export const defaultProps = {
  className: null,
  previous: {
    rel: 'previous',
    href: '#url',
    ariaAttr: {
      label: 'Previous',
    },
    text: '<',
  },
  next: {
    rel: 'next',
    href: '#url',
    ariaAttr: {
      label: 'Next',
    },
    text: '>',
  },
  state: previousNextState.active,
}
