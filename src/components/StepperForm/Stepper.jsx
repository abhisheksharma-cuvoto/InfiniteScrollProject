import React from "react";

function Stepper({ isCompleted }) {
  const stepper = [
    { label: "Personal Info", step: isCompleted.personal },
    { label: "Contact Info", step: isCompleted.contact },
    { label: "Location Info", step: isCompleted.location },
  ];
  return (
    <div className="flex justify-between pb-10">
      {stepper.map((steps) => (
        <p
          key={steps.label}
          className={`px-3 py-2 font-semibold ${steps.step ? "bg-blue-500 text-white" : "bg-zinc-300"} rounded-md `}
        >
          {steps.label}
        </p>
      ))}
    </div>
  );
}

export default Stepper;
