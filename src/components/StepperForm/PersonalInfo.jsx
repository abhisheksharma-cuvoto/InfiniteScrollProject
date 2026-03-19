import InputField from "../Contact/InputField";
import { stepperFields } from "./stepperFields";

function PersonalInfo({ errors, register }) {
  const { personalInfo } = stepperFields(errors, register);

  return (
    <div className="flex flex-col gap-5 bg-zinc-50 rounded-md p-6">
      {personalInfo.map((field) => (
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
    </div>
  );
}

export default PersonalInfo;
