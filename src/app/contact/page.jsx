"use client";

import { formFields } from "@/components/Contact/formFields";
import InputField from "@/components/Contact/InputField";
import { useForm } from "react-hook-form";

function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const fields = formFields(errors, register);

  const handleForm = (data) => {
    console.log(data);
    reset(); // Clears all form values
  };

  return (
    <main className="min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-semibold py-5">Contact Form</h1>
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
            validate={field?.validate}
          />
        ))}
        <button className="w-full py-2 bg-violet-500 text-lg font-semibold text-white rounded-md hover:bg-violet-600 cursor-pointer">
          Submit
        </button>
      </form>
    </main>
  );
}

export default Contact;
