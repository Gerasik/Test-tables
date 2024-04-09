import { Subject } from "rxjs"
import { DataItem } from "schema/data"

export interface tablesStoreData {
  data: DataItem[][]
}

const subject = new Subject<tablesStoreData>()

const initialState: tablesStoreData = {
  data: [[]],
}

let state = initialState

const tablesStore = {
  subscribe: (setState: (state: tablesStoreData) => void) =>
    subject.subscribe(setState),
  copyTable: () => {
    state = {
      ...state,
      data: [...state.data, state.data[0]],
    }
    subject.next(state)
  },
  deleteTable: (tableId: number) => {
    state = {
      ...state,
      data: state.data.filter((_i, index) => index !== tableId),
    }
    subject.next(state)
  },
  addRow: (newRowData: DataItem) => {
    state = {
      ...state,
      data: [[...state.data[0], newRowData], ...state.data.slice(1)],
    }
    subject.next(state)
  },
  deleteRow: (arrayIndex: number, rowId: string) => {
    const newData = [...state.data]
    newData[arrayIndex] = newData[arrayIndex].filter(
      (item) => item.id !== rowId
    )
    state = {
      ...state,
      data: newData,
    }
    subject.next(state)
  },
  initialState,
}

export default tablesStore
