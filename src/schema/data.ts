import * as yup from "yup"

export const dataItemSchema = yup
  .object({
    id: yup.string().required(),
    name: yup
      .string()
      .matches(/^[a-zA-Z'-]+$/, "The name must contain only letters!")
      .max(32)
      .required(),
    surname: yup
      .string()
      .matches(/^[a-zA-Z'-]+$/, "The surname must contain only letters!")
      .max(32)
      .required(),
    age: yup.number().min(0).max(100).required(),
    city: yup.string().required(),
  })
  .required()

export type DataItem = yup.InferType<typeof dataItemSchema>
