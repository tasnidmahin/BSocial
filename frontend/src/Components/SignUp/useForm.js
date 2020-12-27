import { useState, useEffect } from 'react';

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    password2: '',
    genderm:false,
    genderf:false
  });
 
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    //console.log({ [e.target.name]: e.target.checked });
    //console.log(e.target);
    setValues({
      ...values,
      [name]: value
    });
   
  };
  const handleChange2 = e=>{
      setValues ({ ...values, [e.target.name]: e.target.checked }); 
      console.log(e.target);
      
  };

  const handleSubmit = e => {
    e.preventDefault();

    setErrors(validate(values));
    setIsSubmitting(true);
  };

  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        callback();
      }
    },
    [errors]
  );

  return { handleChange,handleChange2, handleSubmit, values, errors };
};

export default useForm;