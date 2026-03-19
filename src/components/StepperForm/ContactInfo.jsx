import InputField from "../Contact/InputField";
import { stepperFields } from "./stepperFields";

function ContactInfo({ errors, register }) {
  const { contactInfo } = stepperFields(errors, register);

  return (
    <div className="flex flex-col gap-5 bg-zinc-50 rounded-md p-6">
      {contactInfo.map((field) => (
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

export default ContactInfo;
