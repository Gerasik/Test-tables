import { DataItem } from "schema/data"

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
          <th className="min-w-24">Age</th>
          <th className="min-w-20">City</th>
          <th className="min-w-48"></th>
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
              <td>
                <button onClick={() => onEdit(item)}>Edit</button>
                <button onClick={() => onDelete(item.id)}>Delete</button>
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
