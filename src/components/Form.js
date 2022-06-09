import React from 'react'
import bgimg from '../assets/img1.jpg'
import { useForm } from 'react-hook-form'
// import { type } from '@testing-library/user-event/dist/type';

export default function Form() {

  const {register,handleSubmit,watch,formState:{errors}} = useForm()
  const onSubmit = data => console.log(data);

  // console.log(watch('username'))
  return (
    <section>
      <div className='register'>
        <div className='col-1'>
          <h2>Sign In</h2>
          <span>register and enjoy the service</span>

          <form id='form' className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
            <input type='text' {...register("username")} placeholder='username'/>
            <input type='text' {...register("password")} placeholder='password'/>
            <input type='text' {...register("confirmpwd")} placeholder='confirm password'/>
            <input type='text' {...register("mobile",{required:true,maxLength:10})}placeholder='mobile number'/>
            {errors.mobile?.type==="required"&&"Mobile Number is required"}
            {errors.mobile?.type==="maxLength"&&"MaxLength exceeded"}
            <button className='btn'>Sign In</button>
          </form>
        </div>
        <div className='col-2'>
          <img src={bgimg} alt=''/>
        </div>
      </div>
    </section>
  )
}
