import React, { useRef, useState } from "react";
import ContactSocial from "./ContactSocial";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { Helmet, HelmetProvider } from "react-helmet-async";
const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { register, formState, handleSubmit, reset } = useForm();
  const { errors } = formState;
  const formData = useRef();

  function onSubmit() {
    setIsLoading(true);
    emailjs
      .sendForm(`service_kactiob`, `template_cik7uio`, formData.current, {
        publicKey: "8Pb4WvwTSvUfp132d",
      })

      .then(() =>
        toast.success(
          "Message sent successfully, Check out your Gmail for soonly responding 📩"
        )
      )
      .catch(() =>
        toast.error(
          "An error occurred while submitting the form, Please try again later"
        )
      )
      .finally(() => setIsLoading(false));
    reset();
  }

  return (
    <HelmetProvider>
      <Helmet>
        <title>Haitham B7R | Contact</title>
      </Helmet>
      <div className="flex xl:flex-row flex-col  justify-between  gap-8 bg-mainBg px-8 pt-5 w-full">
        <ContactSocial />
        <div className="flex- flex-col xl:w-1/2  xl:pl-10">
          <p className="capitalize md:text-[33px] text-[28px] text-textColor tracking-wider">
            Or fill out this form
          </p>
          <form
            className="space-y-4 pt-5 text-textColor"
            onSubmit={handleSubmit(onSubmit)}
            ref={formData}
          >
            <div className="flex flex-col">
              <label
                className="text-base md:text-lg font-semibold "
                htmlFor="from_name"
              >
                NAME
              </label>
              <input
                className="input "
                name="from_name"
                type="text"
                id="from_name"
                disabled={isLoading}
                placeholder="Enter your name"
                {...register("from_name", { required: "Name is required" })}
              />
              <p className="error text-sm text-red-500">
                {errors?.from_name?.message}
              </p>
            </div>

            <div className="flex flex-col">
              <label
                className="text-base md:text-lg font-semibold "
                htmlFor="from_email"
              >
                EMAIL
              </label>
              <input
                className="input "
                name="from_email"
                type="text"
                disabled={isLoading}
                id="from_email"
                {...register("from_email", {
                  required: "email is required",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Please provide a valid email address",
                  },
                })}
              />
              <p className="error text-sm text-red-500">
                {errors?.from_email?.message}
              </p>
            </div>

            <div className="flex flex-col">
              <label
                className="text-base md:text-lg font-semibold "
                htmlFor="subject"
              >
                SUBJECT
              </label>
              <input
                className="input "
                name="subject"
                type="text"
                disabled={isLoading}
                id="subject"
                {...register("subject", { required: "subject is required" })}
              />
              <p className="error text-sm text-red-500">
                {errors?.subject?.message}
              </p>
            </div>

            <div className="flex flex-col">
              <label
                className="text-base md:text-lg font-semibold "
                htmlFor="message"
              >
                MESSAGE
              </label>
              <textarea
                className="w-full  bg-articleBg p-2  text-xl focus:border-accentColor focus:outline-none focus:ring-1 focus:ring-accentColor"
                id="message"
                disabled={isLoading}
                name="message"
                cols="30"
                rows="6"
                {...register("message", {
                  required: "textmessage is required",
                })}
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className=" bg-accentColor px-6 py-1 text-lg font-medium text-gray-900"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </HelmetProvider>
  );
};

export default Contact;
