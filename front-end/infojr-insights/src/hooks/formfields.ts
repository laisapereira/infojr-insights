import React from 'react'

export function useFormFields<T>(initialValues: T) {
  const [formFields, setFormFields] = React.useState<T>(initialValues)
  const createChangeHandler =
    (key: keyof T) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >
    ) => {
      const { value } = e.target
      setFormFields((prev: T) => ({ ...prev, [key]: value }))
    }
  return { formFields, createChangeHandler }
}
