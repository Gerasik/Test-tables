import { DataItem } from "schema/data"
import Button from "./Button"
import { ButtonStyle } from "types/Button"

interface Props {
  data: DataItem[]
  onEdit: (item: DataItem) => void
  onDelete: (id: string) => void
}

const Table: React.FC<Props> = ({ data, onEdit, onDelete }) => {
  return (
    <table className="table-list">
      <thead>
        <tr>
          <th className="min-w-24">Name</th>
          <th className="min-w-32">Surname</th>
          <th className="w-24">Age</th>
          <th className="min-w-20">City</th>
          <th className="w-48"></th>
        </tr>
      </thead>
      <tbody>
        {data.length ? (
          data.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.surname}</td>
              <td>{item.age}</td>
              <td>{item.city}</td>
              <td className="flex justify-around">
                <Button
                  style={ButtonStyle.UNDERLINE}
                  className=" text-table-button-primary"
                  onClick={() => onEdit(item)}
                >
                  Edit
                </Button>
                <Button
                  style={ButtonStyle.UNDERLINE}
                  className="text-table-button-dangerous"
                  onClick={() => onDelete(item.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td />
            <td />
            <td />
            <td />
            <td>⠀</td>
          </tr>
        )}
      </tbody>
    </table>
  )
}

export default Table
