import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ChangesPending(props: { pending: boolean, updating: boolean }) {
  if (!(props.pending || props.updating)) return <></>
  return (
    <div className="animate-pulse fixed bottom-5 left-5 w-[50px] h-[50px] flex justify-center items-center border rounded-full bg-stone-200 dark:bg-stone-500 shadow">
      <FontAwesomeIcon className="w-[20px] h-[20px]" icon={faUpload} />
    </div>
  )
}