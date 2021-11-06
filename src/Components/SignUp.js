import React from 'react';
import { useFormik } from 'formik';
import style from './style';
import Name from './Name';

const validate = values => {
    const errors = {};
    if (!values.firstName) {
      errors.firstName = 'Name required';
    } else if (values.firstName.length > 15) {
      errors.firstName = 'Max 15 characters';
    }
    if (!values.email) {
        errors.email = 'Email address required';
    }
    if (!values.bio) {
        errors.bio = 'Required';
    } else if (values.bio.length < 5) {
        errors.bio = 'Min 5 characters';
    }
    if (!values.gender) {
        errors.gender = 'Choose gender';
    }
    if (!values.check) {
        errors.check = 'Required';
    }
    return errors;
};



 const SignupForm = () => {

   const formik = useFormik({
     initialValues: {
        firstName: '',
        email: '',
        bio: '',
        gender: '',
        check: false
     },
     validate,
     onSubmit: values => {
        formik.resetForm();
        alert(JSON.stringify(values, null, 2));
     },
   });
   return (
     <form onSubmit={formik.handleSubmit} style={style.form}>

        <div style={style.divS}>
            <Name
                blur={formik.handleBlur}
                data={formik.values.firstName}
            />
            {formik.touched.firstName && formik.errors.firstName
                ? ( <h5>{formik.errors.firstName}</h5>)
                : null}
        </div>

        <div style={style.inp}>
            <label htmlFor="email"><span style={style.span}>Email address</span></label>
            <input
                name="email"
                type="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                style={style.radius}
            />
            {formik.touched.email && formik.errors.email
            ? ( <h5>{formik.errors.email}</h5>)
            : null}
        </div>

        <div style={style.inp}>
            <label htmlFor="bio"><span style={style.span}>Bio</span></label>
            <input
                name="bio"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.bio}
                style={style.radius}
            />
            {formik.touched.bio && formik.errors.bio
            ? ( <h5>{formik.errors.bio}</h5>)
            : null}
        </div>

        <div style={style.gender}>
            <form  onChange={formik.handleChange}>
                <label htmlFor="female">Female</label>
                <input
                    type="radio"
                    value="Female"
                    id="female"
                    name="gender"
                />
                <label htmlFor="male">Male</label>
                <input
                    type="radio"
                    value="Male"
                    id="male"
                    name="gender"
                />
                <label htmlFor="other">Other</label>
                <input
                    type="radio"
                    value="Other"
                    id="other"
                    name="gender"
                />
            </form>
            {formik.touched.gender && formik.errors.gender
                ? ( <h5>{formik.errors.gender}</h5>)
                : null}
        </div>

        <div style={style.checkbox}>
            <input
                type="checkbox"
                value={formik.values.check}
                name="check"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            />
            <label htmlFor="regulations">I accept the regulations</label>
            {formik.touched.check && formik.errors.check
            ? ( <h5>{formik.errors.check}</h5>)
            : null}
        </div>

       <div>
           <button type="submit" className="btn" style={style.subBtn}>Submit</button>
        </div>
     </form>
   );
 };

 export default SignupForm