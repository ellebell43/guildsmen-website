import { faBagShopping, faBook, faCircleInfo, faGear, faNoteSticky, faPerson } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function PageFooter(props: { active: "character" | "skills" | "gear" | "details" | "notes" | "settings", setActive: Function }) {
  const buttonClass = "border-stone-400 dark:border-stone-200 border-t-2 w-full py-2 hover:bg-stone-300 dark:hover:bg-stone-500 hover:cursor-pointer"
  const iconClass = "text-[18px]"
  return (
    <div className="fixed inset-x-0 bottom-0 border-t bg-stone-200 dark:bg-stone-600 flex justify-evenly">
      <button className={`${buttonClass} border-r`} onClick={e => props.setActive("character")}>
        <FontAwesomeIcon className={iconClass} icon={faPerson} />
      </button>
      <button className={`${buttonClass} border-l border-r`} onClick={e => props.setActive("skills")}>
        <FontAwesomeIcon className={iconClass} icon={faBook} />
      </button>
      <button className={`${buttonClass} border-l border-r`} onClick={e => props.setActive("gear")}>
        <FontAwesomeIcon className={iconClass} icon={faBagShopping} />
      </button>
      <button className={`${buttonClass} border-l border-r`} onClick={e => props.setActive("details")}>
        <FontAwesomeIcon className={iconClass} icon={faCircleInfo} />
      </button>
      <button className={`${buttonClass} border-l border-r`} onClick={e => props.setActive("notes")}>
        <FontAwesomeIcon className={iconClass} icon={faNoteSticky} />
      </button>
      <button className={`${buttonClass} border-l`} onClick={e => props.setActive("settings")}>
        <FontAwesomeIcon className={iconClass} icon={faGear} />
      </button>
    </div>
  )
}