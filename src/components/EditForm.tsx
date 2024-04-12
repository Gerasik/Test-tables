import { useState, useLayoutEffect } from "react"
import tablesStore from "store/data"
import Form from "./Form"
import ModalContainer from "./ModalContainer"

const EditFrom = () => {
  const [tablesState, setTablesState] = useState(tablesStore.initialState)

  useLayoutEffect(() => {
    tablesStore.subscribe(setTablesState)
  }, [])

  return (
    <ModalContainer
      onCloseModal={() => tablesStore.clearEditableRecord()}
      active={!!tablesState.editableRecord}
      label="Edit"
    >
      <Form
        dataToEdit={
          tablesState.editableRecord
            ? tablesState.data[tablesState.editableRecord?.arrayIndex].find(
                (i) => i.id === tablesState.editableRecord?.rowId
              )
            : undefined
        }
        buttonTitle="Edit"
        onSubmitForm={(item) => tablesStore.editRow(item)}
      />
    </ModalContainer>
  )
}

export default EditFrom
