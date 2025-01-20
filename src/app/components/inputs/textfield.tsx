import React from 'react'

interface TextFieldProps {
  label: string;
  placeholder: string;
  required: boolean;
}

const TextField: React.FC<TextFieldProps> = ({label, placeholder, required}) => {
  return (
    <div className="flex flex-col gap-2">
        <div className='flex items-center gap-2'>
        <label htmlFor="name">{label}</label>
        {
            required && <span className='text-red-500'>*</span>
        }
        </div>
        <input
        type="text"
        id="name"
        name="name"
        placeholder={placeholder}
        required={required}
        className='border border-gray-300 rounded-md p-2 w-96'
        />
    </div>
  )
}

export default TextField