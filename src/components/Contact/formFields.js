export const formFields = (errors, register) => {
  const fields = [
    {
      type: "text",
      fieldName: "firstname",
      name: "First Name",
      placeholder: "your first name",
      message: "firstname is requrired",
      errors,
      register,
    },
    {
      type: "text",
      fieldName: "lastname",
      name: "Last Name",
      placeholder: "your last name",
      message: "lastname is requrired",
      errors,
      register,
    },
    {
      type: "email",
      fieldName: "email",
      name: "Email",
      placeholder: "your email",
      message: "email is requrired",
      errors,
      register,
      validate: (value) =>
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/.test(value) ||
        "Invalid Email",
    },
    {
      type: "number",
      fieldName: "phone",
      name: "Phone",
      placeholder: "+91 ****",
      message: "phone number is requrired",
      errors,
      register,
      validate: (value) =>
        /^\d{9,}$/.test(value) || "Enter a valid phone number",
    },
    {
      type: "text",
      fieldName: "message",
      name: "Message",
      placeholder: "your message",
      message: "message is requrired",
      errors,
      register,
    },
  ];

  return fields;
};
