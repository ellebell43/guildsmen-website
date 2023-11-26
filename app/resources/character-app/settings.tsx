export default function Settings(props: { setEdit: Function, edit: boolean }) {
  return (
    <div>
      <button className="button" onClick={e => props.setEdit(!props.edit)}>
        {props.edit ? "Edit mode on" : "Edit mode off"}
      </button>
    </div>
  )
}