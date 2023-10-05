import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function Details(props: { children: React.ReactNode }) {
  const [active, setActive] = useState(false)
  return (
    <>
      <button className="button px-2 mt-4" onClick={e => setActive(!active)}>
        Details <FontAwesomeIcon icon={faInfoCircle} />
      </button>
      <div className={`${active ? "scale-100 relative" : "scale-0 absolute"} transition-all origin-top`}>
        {props.children}
      </div>
    </>
  )
}