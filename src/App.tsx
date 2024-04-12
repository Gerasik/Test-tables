import TableList from "components/TableList"
import EditFrom from "components/EditForm"
import CreateForm from "components/CreateFrom"

function App() {
  return (
    <div className="p-3 flex flex-col">
      <div className="self-center w-4/5 tablet:self-auto tablet:w-auto">
        <CreateForm />
      </div>
      <TableList />
      <EditFrom />
    </div>
  )
}
export default App
