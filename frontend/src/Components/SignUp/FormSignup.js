import React from 'react';
import validate from './validateInfo';
import useForm from './useForm';

const FormSignup = ({ submitForm }) => {
    const { handleChange,handleChange2, handleSubmit, values, errors } = useForm(
        submitForm,
        validate
      );
     
    return (
        <div>
            <form onSubmit={handleSubmit} className='form' noValidate>
       
        <div className='form-floating mb-3'>
         
          <input
              className="form-control" id="floatingInput" 
            type='text'
            name='username'
            placeholder='Enter your username'
            autoComplete='off'
            value={values.username}
            onChange={handleChange}
          />
           <label for="floatingInput">Username</label>
          {errors.username && <p className='text-danger fw-bold'>{errors.username}</p>}
        </div>
        <div className='form-floating mb-3'>
        
          <input
           className="form-control" id="floatingInput" 
            type='email'
            name='email'
            placeholder='Enter your email'
            autoComplete='off'
            value={values.email}
            onChange={handleChange}
          />
            <label for="floatingInput">Email</label>
          {errors.email && <p className='text-danger fw-bold'>{errors.email}</p>}
        </div>
        <div className='form-floating mb-3'>
         
          <input
            className="form-control" 
            type='password'
            name='password'
            placeholder='Enter your password'
            value={values.password}
            onChange={handleChange}
          />
           <label for="floatingInput">Password</label>
          {errors.password && <p className='text-danger fw-bold'>{errors.password}</p>}
        </div>
        <div className='form-floating mb-3'>
         
          <input
            className="form-control"
            type='password'
            name='password2'
            placeholder='Confirm your password'
            value={values.password2}
            onChange={handleChange}
          />
           <label for="floatingInput">Confirm Password</label>
          {errors.password2 && <p className='text-danger fw-bold'>{errors.password2}</p>}
        </div>

        <label >Gender</label>
  <div className="form-check">
  <input 
  className="form-check-input" 
  type="checkbox" 
  name="genderm"
  id="flexCheckDefault"
  value={values.genderm}
  onChange={handleChange2}
  />
 
  <label className="form-check-label" for="flexRadioDefault1">
    Male
  </label>
</div>

<div className="form-check mb-3">
  <input className="form-check-input"
   type="checkbox" 
   name="genderf" id="flexRadioDefault2"
   value={values.genderf}
  onChange={handleChange2}
   />
  <label className="form-check-label" for="flexRadioDefault2">
   Female
  </label>
</div>
{errors.genderm && <p className='text-danger fw-bold'>{errors.genderm}</p>}
        <button className='btn btn-primary' type='submit'>
          Sign up
        </button>
       
      </form>
        </div>

    );
    
};

export default FormSignup;