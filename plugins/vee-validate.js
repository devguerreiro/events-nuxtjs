import {
  alpha,
  confirmed,
  email,
  max,
  min,
  required,
} from 'vee-validate/dist/rules'
import { configure, extend } from 'vee-validate'

extend('required', required)
extend('alpha', alpha)
extend('email', email)
extend('max', max)
extend('min', min)
extend('confirmed', confirmed)

// Custom rule
extend('username', {
  validate: (value) => /^[\w.]+$/.test(value),
})

export default ({ app }) => {
  configure({
    // translate error messages
    defaultMessage: (_, values) => {
      values.target = app.i18n.t(values.target)
      return app.i18n.t(`validations.${values._rule_}`, values)
    },
    // apply class when has the error
    classes: {
      valid: 'ring-blue-400',
      invalid: ['ring-red-400', 'text-red-400'],
    },
  })
}
