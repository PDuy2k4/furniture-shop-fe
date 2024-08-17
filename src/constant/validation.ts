import * as Yup from 'yup';
const SignupSchema = Yup.object().shape({
  name: Yup.string().min(7, 'Mininum 7 characters').max(12, 'Maximum 12 characters'),
  email: Yup.string().email('Invalid email format'),
  password: Yup.string().matches(
    /^(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,8}$/,
    'Requiring 6-8 chars, at least one symbol'
  ),
  confirmPassword: Yup.string().oneOf([Yup.ref('password')], "Password's not match")
  });
  
const SigninSchema = Yup.object().shape({
  userEmail: Yup.string().email('Invalid email format'),
  password: Yup.string().matches(
    /^(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,8}$/,
    'Requiring 6-8 chars, at least one symbol'
  ),
});
const RequestPasswordChanging = Yup.object().shape({
  userEmail: Yup.string().email('Invalid email format')
});
const ResetpasswordSchema = Yup.object().shape({
  userPassword: Yup.string().matches(
    /^(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,8}$/,
    'Requiring 6-8 chars, at least one symbol'  
  ),
  confirmPassword: Yup.string().oneOf([Yup.ref('password')], "Password's not match")
});
  
export { SignupSchema, SigninSchema, ResetpasswordSchema, RequestPasswordChanging };