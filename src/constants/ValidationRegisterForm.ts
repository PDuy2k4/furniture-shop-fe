import * as Yup from 'yup'

export const ValidationRegisterForm = Yup.object({
  name: Yup.string().min(7, 'Mininum 7 characters').max(15, 'Maximum 15 characters'),
  email: Yup.string().email('Invalid email format'),
  password: Yup.string().matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{12,}$/,
    'More 12 chars, one lowercase, one uppercase, one number, one symbol'
  ),
  confirmPassword: Yup.string().oneOf([Yup.ref('password')], "Password's not match")
})
