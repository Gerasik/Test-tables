import InputText from "./InputText"
import { Controller, SubmitHandler, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { DataItem, dataItemSchema } from "schema/data"
import FieldContainer from "./FieldContainer"
import Dropdown from "./Dropdown"
import tablesStore from "store/data"
import Button from "./Button"
import { v4 as uuidv4 } from "uuid"
import { ButtonType } from "types/Button"
import { useEffect } from "react"

interface Props {
  dataToEdit?: DataItem
  onEdit?: (item: DataItem) => void
}

const cityOptions = ["Riga", "Daugavpils", "Jūrmala", "Ventspils"]

const Form = ({ dataToEdit, onEdit }: Props) => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors, isValid },
  } = useForm<DataItem>({
    mode: "onChange",
    defaultValues: dataToEdit || {
      id: uuidv4(),
    },
    resolver: yupResolver(dataItemSchema),
  })

  useEffect(() => {
    if (dataToEdit) {
      reset(dataToEdit)
    }
  }, [dataToEdit, reset])

  const onSubmit: SubmitHandler<DataItem> = (data) => {
    if (onEdit) {
      onEdit(data)
    } else {
      tablesStore.addRow(data)
    }
    reset({ id: uuidv4() })
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded bg-white shadow px-4 py-5 max-w-72 flex flex-col gap-3.5"
    >
      <FieldContainer fieldError={errors.name?.message}>
        <Controller
          name="name"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <InputText
              value={field.value || ""}
              onChange={field.onChange}
              placeholder="Name"
            />
          )}
        />
      </FieldContainer>
      <FieldContainer fieldError={errors.surname?.message}>
        <Controller
          name="surname"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <InputText
              value={field.value || ""}
              onChange={field.onChange}
              placeholder="Surname"
            />
          )}
        />
      </FieldContainer>
      <FieldContainer fieldError={errors.age?.message}>
        <Controller
          name="age"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <InputText
              value={field.value || ""}
              onChange={field.onChange}
              placeholder="Age"
              type="number"
              min={0}
              max={100}
            />
          )}
        />
      </FieldContainer>
      <FieldContainer fieldError={errors.city?.message}>
        <Controller
          name="city"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <Dropdown
              value={field.value || ""}
              onChange={field.onChange}
              placeholder="City"
              options={cityOptions}
            />
          )}
        />
      </FieldContainer>
      <Button disabled={!isValid} type={ButtonType.SUBMIT}>
        {onEdit ? "Edit" : "Add"}
      </Button>
    </form>
  )
}

export default Form
