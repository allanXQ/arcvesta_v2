import React from "react";
import TextField from "./inputs/textfield";
import TextArea from "./inputs/textarea";
import Select from "./inputs/select";

const model = [
  {
    name: "First Name",
    type: "text",
    placeholder: "John",
    required: true,
  },
  {
    name: "Email",
    type: "email",
    placeholder: "example@email.com",
    required: true,
  },
  {
    name: "Phone",
    type: "tel",
    placeholder: "+254798765432",
    required: true,
  },
  {
    name: "Product",
    type: "select",
    required: true,
    placeholder: "",
    options: ["Website", "Web Application", "Mobile Application"],
  },
  // {
  //   name: "Message",
  //   type: "textarea",
  //   placeholder: "Your message here (optional)",
  //   required: false,
  // },
];

interface Field {
  name: string;
  type: string;
  placeholder: string;
  required: boolean;
}

interface SelectField extends Field {
  options: string[];
}

const renderField = (field: Field | SelectField) => {
  switch (field.type) {
    case "text":
    case "email":
    case "tel":
      return (
        <TextField
          key={field.name}
          label={field.name}
          placeholder={field.placeholder}
          required={field.required}
        />
      );
    case "textarea":
      return (
        <TextArea
          key={field.name}
          label={field.name}
          placeholder={field.placeholder}
          required={field.required}
        />
      );
    case "select":
      return (
        <Select
          key={field.name}
          name={field.name}
          required={field.required}
          options={(field as SelectField).options}
          type={field.type}
          placeholder={field.placeholder}
        />
      );
    default:
      return null;
  }
};

const ContactForm = () => {
  return (
    <div className="flex justify-center items-center p-5 flex-col">
      <form className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4 w-full rounded-lg">
        {model.map((field) => renderField(field))}
        {/* <div className="flex w-[inherit] items-center"> */}

        {/* </div> */}
      </form>
      <button
        type="submit"
        className="w-1/2 px-6 py-3 mt-5 bg-black font-semi text-white rounded-lg hover:bg-gray-800 transition"
      >
        Submit
      </button>
    </div>
  );
};

export default ContactForm;
