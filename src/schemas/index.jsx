import * as Yup from 'yup'


export const signUpSchema = Yup.object({
    name : Yup.string().min(2).max(25).required('Please enter your name'),
    email : Yup.string().email().required('Please enter your email'),
    password : Yup.string().min(6).required('Please enter your password'),
    confirm_password: Yup.string().required().oneOf([Yup.ref('password')], 'Password must match'),
    termsAndConditions: Yup.boolean().oneOf([true], 'You must accept the terms and conditions'),
});
