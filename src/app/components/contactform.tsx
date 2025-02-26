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
  {
    name: "Message",
    type: "textarea",
    placeholder: "Your message here (optional)",
    required: false,
  },
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
    <div className="flex justify-center items-center p-5">
      <form className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-3xl bg-white p-6 rounded-lg shadow-lg">
        {model.map((field) => renderField(field))}
        <div className="col-span-1 md:col-span-2 flex justify-center">
          <button
            type="submit"
            className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition w-full md:w-auto"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
