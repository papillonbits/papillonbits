import { Fragment } from 'react'
import { useState } from '@papillonbits/library/hooks'
// import utilityStyles from '@papillonbits/css/build/primer/utilities/margin.scss'
import cx from 'classnames'
import utilityStyles from '../../../../css/src/primer/utilities/margin.scss'
import { propTypes, defaultProps, alertVariant } from './Alert.prop'
import styles from './Alert.scss'
import buttonStyles from '../Button/Button.scss'
import { Input } from '../Form/Input'
import { Button, buttonVariant, buttonInputType, iconAlignment } from '../Button'
import { iconName } from '../Icon/Icon.prop'
import { Icon, iconSize } from '../Icon'

export function Alert({ dataTest, className, variant, children, consent }) {
  const [consentValue, setConsentValue] = useState('')

  return (
    <div data-test={dataTest?.default} className={className}>
      <div className={cx(styles['flash-messages'])}>
        <div
          className={cx(styles.flash, {
            [styles['flash-warn']]: variant === alertVariant.warning,
            [styles['flash-error']]: variant === alertVariant.error,
            [styles['flash-success']]: variant === alertVariant.success,
            [styles['flash-consent']]: variant === alertVariant.consent,
          })}
        >
          {consent && (
            <Fragment>
              <Button
                dataTest={dataTest?.cancel}
                className={cx(buttonStyles.btn, buttonStyles['btn-sm'], buttonStyles.primary, styles['flash-action'])}
                text="Cancel"
                icon={{ name: iconName.XCircleFill16, alignment: iconAlignment.left }}
                variant={buttonVariant.default}
                inputType={buttonInputType.submit}
                onClick={() => {
                  consent?.action?.cancel()
                  setConsentValue('')
                }}
              />
              <Button
                dataTest={dataTest?.approve}
                className={cx(buttonStyles.btn, buttonStyles['btn-sm'], buttonStyles.primary, styles['flash-action'])}
                text="Approve"
                icon={{ name: iconName.CheckCircleFill16, alignment: iconAlignment.left }}
                variant={buttonVariant.primary}
                inputType={buttonInputType.submit}
                autoFocus={consent?.withInput ? false : true} // eslint-disable-line
                onClick={
                  consent?.withInput
                    ? () => {
                        if (consentValue !== '') {
                          consent?.action?.approve(consentValue)
                          setConsentValue('')
                        }
                      }
                    : consent?.action?.approve
                }
              />
            </Fragment>
          )}
          {variant === alertVariant.info && <Icon className={utilityStyles['mr-2']} icon={iconName.Info16} size={iconSize.small} />}
          {variant === alertVariant.warning && !consent && (
            <Icon className={utilityStyles['mr-2']} icon={iconName.Alert16} size={iconSize.small} />
          )}
          {variant === alertVariant.warning && consent && (
            <Icon className={utilityStyles['mr-2']} icon={iconName.Question16} size={iconSize.small} />
          )}
          {variant === alertVariant.error && <Icon className={utilityStyles['mr-2']} icon={iconName.XCircle16} size={iconSize.small} />}
          {variant === alertVariant.success && (
            <Icon className={utilityStyles['mr-2']} icon={iconName.CheckCircle16} size={iconSize.small} />
          )}
          {variant === alertVariant.consent && <Icon className={utilityStyles['mr-2']} icon={iconName.Question16} size={iconSize.small} />}
          {children}
          {consent?.withInput && (
            <Input
              dataTest={dataTest?.value}
              className={styles['flash-action']}
              value={consentValue}
              placeholder=""
              ariaAttr={{}}
              onChange={(event) => {
                setConsentValue(event.target.value)
              }}
              onKeyUp={(event) => {
                setConsentValue(event.target.value)
              }}
              autoFocus={true} // eslint-disable-line
            />
          )}
        </div>
      </div>
    </div>
  )
}

Alert.propTypes = propTypes

Alert.defaultProps = defaultProps
