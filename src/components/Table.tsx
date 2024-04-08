import { useState, useLayoutEffect, Fragment } from "react"
import tablesStore from "store/data"

const Table = () => {
  const [tablesState, setTablesState] = useState(tablesStore.initialState)

  useLayoutEffect(() => {
    tablesStore.subscribe(setTablesState)
  }, [])

  return (
    <div>
      {tablesState.data.map((tableData, tableIndex) => (
        <Fragment key={tableIndex}>
          {!tableIndex && (
            <button onClick={tablesStore.copyTable}>Clone</button>
          )}
          <ul>
            {tableData.map((i) => (
              <li key={i.id}>
                {i.name} {i.surname} {i.age} {i.city}{" "}
                <button onClick={() => tablesStore.deleteRow(tableIndex, i.id)}>
                  Delete item
                </button>
              </li>
            ))}
          </ul>
        </Fragment>
      ))}
    </div>
  )
}
export default Table
