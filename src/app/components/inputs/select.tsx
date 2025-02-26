import React from "react";

interface SelectProps {
  label: string;
  placeholder: string;
  required: boolean;
}

interface Field {
  name: string;
  type: string;
  placeholder: string;
  required: boolean;
}

interface SelectField extends Field {
  options: string[];
}

const Select: React.FC<SelectField> = (field: SelectField) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <label htmlFor="name">{field.name}</label>
        {field.required && <span className="text-red-500">*</span>}
      </div>
      <select
        key={field.name}
        name={field.name}
        required={field.required}
        className="border border-gray-300 rounded-md p-2 w-96 bg-white"
      >
        {(field as SelectField).options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
