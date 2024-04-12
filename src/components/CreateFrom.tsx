import { DataItem } from "schema/data"
import Form from "./Form"
import tablesStore from "store/data"

const CreateForm = () => {
  return (
    <Form
      buttonTitle="Add"
      onSubmitForm={(item: DataItem) => tablesStore.addRow(item)}
    />
  )
}

export default CreateForm
