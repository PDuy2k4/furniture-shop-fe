import * as Yup from 'yup'

export const ValidationRegisterForm = Yup.object({
  name: Yup.string().min(2, 'Mininum 7 characters').max(12, 'Maximum 12 characters').required('Required!'),
  email: Yup.string().email('Invalid email format').required('Required!'),
  password: Yup.string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{12,}$/,
      'Password should be at least 12 chars long and contain at least one lowercase letter, one uppercase letter, one number, and one symbol'
    )
    .required('Required!'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], "Password's not match")
    .required('Required!')
})
