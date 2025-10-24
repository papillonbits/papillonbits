import { propTypes, defaultProps, iconSize, iconAlign } from './Icon.prop'
import { iconComponents } from './Icon.part'

const defaultSize = [16, 16]

export function Icon({
  className = defaultProps.className,
  ariaLabel = defaultProps.ariaLabel,
  icon,
  height = defaultProps.height,
  width = defaultProps.width,
  size = defaultProps.size,
  fill = defaultProps.fill,
  verticalAlign = defaultProps.verticalAlign,
  ...otherProps
}) {
  const widthHeight = defaultSize

  const attrs = {
    className,
    'aria-hidden': ariaLabel ? 'false' : 'true',
    'aria-label': ariaLabel,
    height,
    role: 'img',
    viewBox: [0, 0, ...widthHeight].join(' '),
  }

  if (width && height) {
    Object.assign(attrs, { width, height })
  } else {
    const dims = { width: widthHeight[0], height: widthHeight[1] }
    const given = width ? 'width' : 'height'
    const computed = given === 'width' ? 'height' : 'width'
    attrs[given] = width || height || iconSize[size] || size
    attrs[computed] = attrs[given] * (dims[computed] / dims[given])
  }

  attrs.style = {
    display: 'inline-block',
    fill,
    userSelect: 'none',
    verticalAlign: iconAlign[verticalAlign] || verticalAlign,
  }

  const Element = iconComponents[icon]

  return Element != null ? <Element className={className} {...attrs} {...otherProps} /> : null
}

Icon.propTypes = propTypes
