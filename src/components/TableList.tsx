import { useState, useLayoutEffect } from "react"
import tablesStore from "store/data"
import Table from "./Table"
import Button from "./Button"
import CloseIcon from "assets/close.svg?react"
import { ButtonSize, ButtonStyle } from "types/Button"

const TableList = () => {
  const [tablesState, setTablesState] = useState(tablesStore.initialState)

  useLayoutEffect(() => {
    tablesStore.subscribe(setTablesState)
  }, [])

  return (
    <div className="flex gap-9 flex-col">
      {tablesState.data.map((tableData, tableIndex) => (
        <div key={tableIndex} className="flex gap-3 flex-col">
          <div className="self-end flex gap-5 items-center">
            {!tableIndex && (
              <Button onClick={tablesStore.copyTable} size={ButtonSize.SMALL}>
                Copy table
              </Button>
            )}
            <Button
              className="fill-theme-red ease-in-out transition-transform hover:rotate-90 hover:scale-125 active:scale-75 disabled:fill-theme-button-primary-disabled"
              style={ButtonStyle.EMPTY}
              onClick={() => tablesStore.deleteTable(tableIndex)}
              disabled={!tableIndex}
            >
              <CloseIcon />
            </Button>
          </div>
          <Table
            data={tableData}
            onEdit={(itemId: string) =>
              tablesStore.setEditableRecord(tableIndex, itemId)
            }
            onDelete={(itemId: string) =>
              tablesStore.deleteRow(tableIndex, itemId)
            }
          />
        </div>
      ))}
    </div>
  )
}

export default TableList
