import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

export default function Spinner() {
  return (
    <div className="flex justify-center items-center h-[20] max-h-[20] w-[20] max-w-[20px] mx-auto">
      <FontAwesomeIcon icon={faSpinner} className=" mx-auto transition-all animate-spin" />
    </div>
  )
}