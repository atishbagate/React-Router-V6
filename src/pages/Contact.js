import React from "react";
import { useForm } from "react-hook-form";

function Contact() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const onSubmit = data => console.log(data);
  const firstName = watch('example');
  return (
    <div className="App flex  justify-center bg-cyan-100">
      <header className="App-header  ">
        <p className="font-serif hover:font-sans text-3xl">Form Validation</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="">
            <input {...register("example", { required: " Enter the valid filed " })} className=" bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 mt-5" />
            {errors.example?.message}
            <p>{firstName}</p>
            
          </div>
          <div>
            <input {...register("exampleRequired", { required: " Enter the valid filed ", minLength: { value: 5, message: "Length must greater than 5" } })} className=" bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 mt-5" />
            {errors.exampleRequired?.message}
          </div>
          <div>
            <select {...register("gender",{required:"Choose filed"})} class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 mt-5">
              <option value="">Gender</option>
              <option value="female">female</option>
              <option value="male">male</option>
              <option value="other">not to tell</option>
            </select>
            {errors.gender?.message}
          </div>
          <br></br>
          <input className="rounded bg-gray-200 ml-3 mt-5 py-2 px-4" type="submit"></input>
        </form>
      </header>
    </div>
  );
}

export default Contact;
