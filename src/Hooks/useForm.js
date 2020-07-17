import React, { useState } from "react";

export const useForm = (initialValues) => {
    const [form, setForm] = useState(initialValues)

    const onChange= (name, value) => {
        const newForm = { ...form, [name]: value }
        setForm(newForm)
    }

    const resetForm = () => {
        setForm(initialValues)
    }

    return { form, onChange, resetForm }
}
