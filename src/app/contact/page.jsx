"use client";

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
        <InputField
          fieldName="firstname"
          name="First Name"
          placeholder="your first name"
          message="firstname is requrired"
          errors={errors}
          register={register}
        />
        <InputField
          fieldName="lastname"
          name="Last Name"
          placeholder="your last name"
          message="lastname is requrired"
          errors={errors}
          register={register}
        />
        <InputField
          type="email"
          fieldName="email"
          name="Email"
          placeholder="your email"
          message="email is requrired"
          errors={errors}
          register={register}
          validate={(value) =>
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/.test(value) ||
            "Invalid Email"
          }
        />
        <InputField
          type="number"
          fieldName="number"
          name="Phone"
          placeholder="+91 ****"
          message="phone number is requrired"
          errors={errors}
          register={register}
          validate={(value) =>
            /^\d{9,}$/.test(value) || "Enter a valid phone number"
          }
        />
        <InputField
          fieldName="message"
          name="Message"
          placeholder="your message"
          message="message is requrired"
          errors={errors}
          register={register}
        />

        <button className="w-full py-2 bg-violet-500 text-lg font-semibold text-white rounded-md hover:bg-violet-600 cursor-pointer">
          Submit
        </button>
      </form>
    </main>
  );
}

export default Contact;
