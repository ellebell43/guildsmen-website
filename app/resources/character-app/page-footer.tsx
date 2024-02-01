import useWindowDimensions from "@/util/useWindowDimenstions";
import { faBagShopping, faBook, faCircleInfo, faGear, faNoteSticky, faPerson } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function PageFooter(props: { active: "character" | "skills" | "gear" | "details" | "notes" | "settings", setActive: Function }) {
  const buttonClass = "border-stone-400 dark:border-stone-200 w-full py-2 hover:bg-stone-300 dark:hover:bg-stone-500 hover:cursor-pointer lg:h-full lg:flex lg:gap-2 lg:items-center lg:px-2"
  const iconClass = "text-[18px] max-w-[20px]"

  const { width, height } = useWindowDimensions()
  let size: "sm" | "md" | "lg"
  if (width <= 768) {
    size = "sm"
  } else if (width <= 1280) {
    size = "md"
  } else {
    size = "lg"
  }

  return (
    <div className="fixed bottom-0 right-0 left-0 lg:right-auto border-t lg:border-r border-stone-800 dark:border-stone-200 bg-stone-200 dark:bg-stone-600 flex lg:flex-col justify-evenly transition-all">
      <button className={`${buttonClass}  ${props.active == "character" ? "bg-stone-300 dark:bg-stone-500" : ""}`} onClick={e => { props.setActive("character"); window.scrollTo(0, 0) }}>
        <FontAwesomeIcon className={iconClass} icon={faPerson} />
        <p className="m-0 text-xs lg:text-base text-center">{size != "sm" ? "Character" : "Stats"}</p>
      </button>
      <button className={`${buttonClass} ${props.active == "skills" ? "bg-stone-300 dark:bg-stone-500" : ""} md:hidden lg:hidden`} onClick={e => { props.setActive("skills"); window.scrollTo(0, 0) }}>
        <FontAwesomeIcon className={iconClass} icon={faBook} />
        <p className="m-0 text-xs lg:text-base text-center">Skills</p>
      </button>
      <button className={`${buttonClass} ${props.active == "gear" ? "bg-stone-300 dark:bg-stone-500" : ""} lg:hidden`} onClick={e => { props.setActive("gear"); window.scrollTo(0, 0) }}>
        <FontAwesomeIcon className={iconClass} icon={faBagShopping} />
        <p className="m-0 text-xs lg:text-base text-center">Gear</p>
      </button>
      <button className={`${buttonClass} ${props.active == "details" ? "bg-stone-300 dark:bg-stone-500" : ""}`} onClick={e => { props.setActive("details"); window.scrollTo(0, 0) }}>
        <FontAwesomeIcon className={iconClass} icon={faCircleInfo} />
        <p className="m-0 text-xs lg:text-base text-center">Details</p>
      </button>
      <button className={`${buttonClass} ${props.active == "notes" ? "bg-stone-300 dark:bg-stone-500" : ""}`} onClick={e => { props.setActive("notes"); window.scrollTo(0, 0) }}>
        <FontAwesomeIcon className={iconClass} icon={faNoteSticky} />
        <p className="m-0 text-xs lg:text-base text-center">Notes</p>
      </button>
      <button className={`${buttonClass} ${props.active == "settings" ? "bg-stone-300 dark:bg-stone-500" : ""}`} onClick={e => { props.setActive("settings"); window.scrollTo(0, 0) }}>
        <FontAwesomeIcon className={iconClass} icon={faGear} />
        <p className="m-0 text-xs lg:text-base text-center">Settings</p>
      </button>
    </div>
  )
}