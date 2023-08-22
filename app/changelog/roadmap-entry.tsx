import styles from "./styles.module.css"

export default function RoadmapEntry(props: { text: string, completed: boolean, date?: string }) {
  return (
    <li>
      <span className={props.completed ? styles.strikeout : ""}>{props.text}</span>
      <span className="italic">{props.date ? ` Completed ${props.date}` : ""}</span>
    </li>
  )
}