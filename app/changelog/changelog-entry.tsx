import styles from "./styles.module.css"

export default function ChangelogEntry(props: { date: string, version: string, entries: string[] }) {
  return (
    <div>
      <p className={styles.date}>{props.date}</p>
      <p className={styles.version}>{props.version}</p>
      <ul>
        {props.entries.map((el, i) => {
          return (
            <li key={`${props.date}${i}`}>{el}</li>
          )
        })}
      </ul>
    </div>
  )
}