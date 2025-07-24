import React from 'react'
import { useForm } from 'react-hook-form';
import { data } from 'react-router-dom';

function Register() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();
  console.log(watch('username'));


  return (
    <>
      <form action="" method='get'
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
      >
        <h1>Registration Page</h1>

        {/* username form */}
        <label htmlFor="username">Username</label>
        <input type="text" name='username' id='username' required {...register("username", { minLength: { value: 10, message: "this should be min 10 charecters long " } })} /><br />
        <span style={{ color: 'red' }}>
          {errors.username ? errors.username.message : ""}
        </span> <br />

        {/* Email form */}
        <label htmlFor="email">Email</label>
        <input type="text" name='email' id='email' required {...register("email", { minLength: { value: 10, message: "this should be min 10 charecters long " } })} /><br />
        <span style={{ color: 'red' }}>
          {errors.email ? errors.email.message : ""}
        </span> <br />

        {/* Radio Button */}
        <label htmlFor="gender">Gender</label>
        <input type="radio" name="gender" id="male" />Male
        <input type="radio" name="gender" id="female" />Female <br />

        {/* Reset Button */}
        <label htmlFor="reset">Reset</label>
        <input type="reset" value="reset" />

        {/* Submit Button */}
        <button type='submit'>
          Submit
        </button>
      </form>
    </>
  )
}

export default Register;