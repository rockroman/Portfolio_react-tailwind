import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

const SERVICE_ID = import.meta.env.VITE_REACT_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_REACT_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_REACT_PUBLIC_KEY;
const Footer = () => {
  const myForm = useRef();
  // created by react-hook-form documentation
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const onSubmit = () => {
    // have to use myForm.current or it wont work and names of the fields must match
    // fields on emailjs template
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, myForm.current, PUBLIC_KEY).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  // common way to reset the form using useEffect
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <footer className="bg-gray-900">
      <form
        className="bg-gray-900"
        onSubmit={handleSubmit(onSubmit)}
        ref={myForm}
      >
        <div
          id="contact"
          className="bg-gray-900 max-w-screen-xl  px-6 grid gap-12 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto  text-zinc-300 rounded-lg shadow-lg"
        >
          <div className="flex flex-col justify-between">
            <div className="mt-6">
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                Lets have a chat!
              </h2>
              <div className="text-blue-700 mt-6">
                Hate forms? Send me an <span className="underline">email</span>{" "}
                instead.
              </div>
            </div>
          </div>
          <div className="">
            <div>
              <label
                htmlFor="fullName"
                className="uppercase text-sm text-gray-600 font-bold"
              >
                Full Name
              </label>
              <input
                className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                id="fullName"
                name="fullName"
                {...register("fullName", {
                  required: "Please enter your Name",
                  maxLength: {
                    value: 20,
                    message: "Name should be less than 20 characters",
                  },
                })}
              />
              <br />
              <p className="text-red-700">
                {errors.fullName && errors.fullName.message}
              </p>
            </div>
            <div className="mt-6">
              <label
                htmlFor="email"
                className="uppercase text-sm text-gray-600 font-bold"
              >
                Email
              </label>
              <input
                className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                id="email"
                name="email"
                {...register("email", {
                  required: "Please enter your Email",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "invalid email address",
                  },
                })}
              />
              <br />
              <p className="text-red-700">
                {errors.email && errors.email.message}
              </p>
              <br />
            </div>
            <div className="mt-6">
              <label
                htmlFor="message"
                className="uppercase text-sm text-gray-600 font-bold"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                {...register("message", {
                  required: true,
                })}
                className="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              />
              <br />
              <p className="text-orange-300">
                {errors.message && "oops, you forgot your message!"}
              </p>
              <br />
            </div>
            <div className="mt-6">
              <input
                type="submit"
                className="uppercase text-sm font-bold tracking-wide bg-blue-700 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline"
              />
            </div>
          </div>
        </div>
      </form>
    </footer>
  );
};
export default Footer;
