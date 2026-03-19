export const stepperFields = (errors, register) => {
  const personalInfo = [
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
  ];

  const contactInfo = [
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
  ];

  const locationInfo = [
    {
      type: "text",
      fieldName: "address",
      name: "Address",
      placeholder: "your address",
      message: "address is requrired",
      errors,
      register,
    },
    {
      type: "text",
      fieldName: "city",
      name: "City",
      placeholder: "city",
      message: "city is requrired",
      errors,
      register,
    },
    {
      type: "text",
      fieldName: "district",
      name: "District",
      placeholder: "north east",
      message: "district is requrired",
      errors,
      register,
    },
    {
      type: "number",
      fieldName: "pincode",
      name: "Pincode",
      placeholder: "11****",
      message: "pincode is requrired",
      errors,
      register,
    },
  ];

  return {
    personalInfo,
    contactInfo,
    locationInfo,
  };
};
