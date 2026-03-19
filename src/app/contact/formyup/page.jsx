"use client";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import InputField from "@/components/Contact/InputField";
import { formFields } from "@/components/Contact/formFields";
import { useState } from "react";

const contactSchema = yup.object({
  firstname: yup.string().required("first name is required"),
  lastname: yup.string().required("last name is required"),
  email: yup.string().email("Invalid Email").required("email is required"),
  phone: yup
    .string()
    .required("phone number is required")
    .matches(/^\d{9,}$/, "Enter a valid phone number"),
  message: yup.string().required("message is required"),
});

function FormYup() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(contactSchema),
  });
  const fields = formFields(errors, register);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleForm = (data) => {
    console.log(data);
    reset();
    setIsSubmitted(true);
  };

  return (
    <main className="min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-semibold py-5">
        Contact Form with{" "}
        <span className="text-blue-500 font-semibold">Yup</span>
      </h1>
      {isSubmitted && (
        <p className="text-xl text-green-600 font-semibold pb-5">
          Form Submitted Successfully.
        </p>
      )}
      <form
        onSubmit={handleSubmit(handleForm)}
        className="w-[500px] min-h-[400px] flex flex-col gap-5 p-6 border rounded-2xl shadow"
      >
        {fields.map((field) => (
          <InputField
            key={field.fieldName}
            type={field.type}
            fieldName={field.fieldName}
            name={field.name}
            placeholder={field.placeholder}
            message={field.message}
            errors={field.errors}
            register={register}
          />
        ))}
        <button className="w-full py-2 bg-blue-500 text-lg font-semibold text-white rounded-md hover:bg-blue-600 cursor-pointer">
          Submit
        </button>
      </form>
    </main>
  );
}

export default FormYup;
