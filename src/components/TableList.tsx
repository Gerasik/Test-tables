import { useState, useLayoutEffect, Fragment } from "react"
import tablesStore from "store/data"
import Table from "./Table"
import { DataItem } from "schema/data"
import Button from "./Button"

const TableList = () => {
  const [tablesState, setTablesState] = useState(tablesStore.initialState)

  useLayoutEffect(() => {
    tablesStore.subscribe(setTablesState)
  }, [])

  return (
    <div>
      {tablesState.data.map((tableData, tableIndex) => (
        <Fragment key={tableIndex}>
          {!tableIndex && (
            <Button onClick={tablesStore.copyTable}> Copy table</Button>
          )}
          <Table
            data={tableData}
            onEdit={(item: DataItem) => console.log(item)}
            onDelete={(itemId: string) =>
              tablesStore.deleteRow(tableIndex, itemId)
            }
          />
        </Fragment>
      ))}
    </div>
  )
}

export default TableList
