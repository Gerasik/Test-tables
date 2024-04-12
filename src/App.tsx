import TableList from "components/TableList"
import "./App.css"
import EditFrom from "components/EditForm"
import CreateForm from "components/CreateFrom"

function App() {
  return (
    <div className="App">
      <CreateForm />
      <TableList />
      <EditFrom />
    </div>
  )
}
export default App
