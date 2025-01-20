import React from 'react'
import TextField from './inputs/textfield'
import TextArea from './inputs/textarea';



const model = [
    {
        name: "First Name",
        type: "text",
        placeholder: "John",
        required: true
    },
    {
        name: "Email",
        type: "email",
        placeholder: "",
        required: true
    },
    {
        name: "Phone",
        type: "tel",
        placeholder: "+254798765432",
        required: true
    },
    {
        name: "Product",
        type: "select",
        required: true,
        placeholder:'',
        options: [
            "Website",
            "Web Application",
            "Mobile Application",
        ]
    },
    {
        name: "Message",
        type: "textarea",
        placeholder: "Your message here(optional)",
        required: false
    }
]
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
        case 'text':
        case 'email':
        case 'tel':
            return <TextField key={field.name} label={field.name} placeholder={field.placeholder} required={field.required} />;
        case 'textarea':
            return <TextArea key={field.name} label={field.name} placeholder={field.placeholder} required={field.required} />;
        case 'select':
        return (
            <select key={field.name} name={field.name} required={field.required} className="form-select">
                {(field as SelectField).options.map(option => (
                    <option key={option} value={option}>{option}</option>
                ))}
            </select>
        );
        default:
            return null;
    }
}
const ContactForm = () => {
    return (
        <form className='w-1/2 grid grid-cols-2 items-center justify-center gap-5'>
                {
                    model.map(field => renderField(field))
                }
        </form>
    )
}

export default ContactForm