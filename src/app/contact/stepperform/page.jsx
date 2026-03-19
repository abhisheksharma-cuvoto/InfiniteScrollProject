"use client";

import PersonalInfo from "@/components/StepperForm/PersonalInfo";
import ContactInfo from "@/components/StepperForm/ContactInfo";
import LocationInfo from "@/components/StepperForm/LocationInfo";
import Stepper from "@/components/StepperForm/Stepper";
import { useForm } from "react-hook-form";
import { useState } from "react";

function StepperForm() {
  const {
    register,
    handleSubmit,
    trigger, // Manually triggers form or input validation.
    reset,
    formState: { errors },
  } = useForm();

  const [step, setStep] = useState(1);
  const [isCompleted, setIsCompleted] = useState({
    personal: false,
    contact: false,
    location: false,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleForm = (data) => {
    console.log(data);
    reset();
    setIsCompleted((prev) => ({ ...prev, location: true }));
    setIsSubmitted(true);
  };

  const handleNext = async () => {
    let isValid = false;

    if (step == 1) {
      isValid = await trigger(["firstname", "lastname"]);
      if (isValid) setIsCompleted((prev) => ({ ...prev, personal: true }));
    } else if (step == 2) {
      isValid = await trigger(["email", "phone"]);
      if (isValid) setIsCompleted((prev) => ({ ...prev, contact: true }));
    }

    console.log({ isValid, step });

    if (isValid) setStep((prev) => prev + 1);
  };

  return (
    <main className="min-h-screen flex flex-col gap-5 justify-center items-center">
      {isSubmitted && (
        <div className="px-5 py-8 bg-zinc-50 rounded-xl shadow-lg flex justify-center items-center">
          <p className="text-green-500 font-semibold text-xl">
            Form Submitted Successfully.
          </p>
        </div>
      )}
      <form
        onSubmit={handleSubmit(handleForm)}
        className="w-[500px] min-h-[400px] flex flex-col justify-between gap-5 p-6 border rounded-2xl shadow"
      >
        <Stepper isCompleted={isCompleted} />
        {step === 1 && <PersonalInfo register={register} errors={errors} />}
        {step === 2 && <ContactInfo register={register} errors={errors} />}
        {step === 3 && <LocationInfo register={register} errors={errors} />}
        <div className="flex justify-between items-center">
          <button
            onClick={() => step > 1 && setStep((prev) => prev - 1)}
            type="button"
            className="px-4 py-2 bg-zinc-800 text-white rounded-md"
          >
            Back
          </button>
          {step != 3 ? (
            <button
              onClick={handleNext}
              type="button"
              className="px-4 py-2 bg-blue-500 text-white rounded-md"
            >
              Next
            </button>
          ) : (
            <button
              type="submit"
              className="px-10 py-2 bg-blue-500 text-white rounded-md"
            >
              Submit
            </button>
          )}
        </div>
      </form>
    </main>
  );
}

export default StepperForm;
