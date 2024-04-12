import { Subject } from "rxjs"
import { DataItem } from "schema/data"

export interface TablesStoreData {
  data: DataItem[][]
  editableRecord: { arrayIndex: number; rowId: string } | null
}

const STORAGE_KEY = "tablesStoreState"

const subject = new Subject<TablesStoreData>()

let initialState: TablesStoreData
const storedState = localStorage.getItem(STORAGE_KEY)
if (storedState) {
  initialState = JSON.parse(storedState)
} else {
  initialState = {
    data: [[]],
    editableRecord: null,
  }
}

let state = initialState

const tablesStore = {
  subscribe: (setState: (state: TablesStoreData) => void) =>
    subject.subscribe(setState),
  copyTable: () => {
    const newData = [...state.data, state.data[0]]
    updateState({ data: newData })
  },
  deleteTable: (tableId: number) => {
    const newData = state.data.filter((_i, index) => index !== tableId)
    updateState({ data: newData })
  },
  addRow: (newRowData: DataItem) => {
    const newData = [[...state.data[0], newRowData], ...state.data.slice(1)]
    updateState({ data: newData })
  },
  deleteRow: (arrayIndex: number, rowId: string) => {
    const newData = state.data.map((table, index) =>
      index === arrayIndex ? table.filter((item) => item.id !== rowId) : table
    )
    updateState({ data: newData })
  },
  editRow: (newItem: DataItem) => {
    if (state.editableRecord) {
      const { arrayIndex, rowId } = state.editableRecord
      const newData = state.data.map((table, index) =>
        index === arrayIndex
          ? table.map((item) => (item.id === rowId ? newItem : item))
          : table
      )
      updateState({ data: newData, editableRecord: null })
    }
  },
  setEditableRecord: (arrayIndex: number, rowId: string) => {
    updateState({ editableRecord: { arrayIndex, rowId } })
  },
  clearEditableRecord: () => {
    updateState({ editableRecord: null })
  },
  initialState,
}

function updateState(newState: Partial<TablesStoreData>) {
  state = { ...state, ...newState }
  subject.next(state)
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
}

export default tablesStore
