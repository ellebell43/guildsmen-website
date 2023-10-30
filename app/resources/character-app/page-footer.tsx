import { faPerson } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function PageFooter(props: { active: "character" | "skills" | "gear" | "details" | "notes" | "settings", setActive: Function }) {
  return (
    <div className="fixed inset-x-0 bottom-0 border-t bg-stone-200 dark:bg-stone-600">
      <button className="">
        <FontAwesomeIcon icon={faPerson} />
      </button>
    </div>
  )
}