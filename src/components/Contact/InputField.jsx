import React from "react";

function InputField({
  type = "text",
  fieldName,
  name,
  placeholder,
  message,
  register,
  errors,
  validate,
}) {
  return (
    <>
      {errors?.[fieldName] && (
        <p className="text-sm text-center text-red-500 -mb-2">
          {errors?.[fieldName].message}
        </p>
      )}
      <div className="flex items-center gap-2">
        <label
          className="text-lg text-nowrap font-semibold"
          htmlFor={fieldName}
        >
          {name}
        </label>
        <input
          className="w-full px-3 py-2 bg-zinc-200 rounded-md"
          type={type}
          placeholder={placeholder}
          id={fieldName}
          {...register(fieldName, {
            required: message,
            validate,
          })}
        />
      </div>
    </>
  );
}

export default InputField;
