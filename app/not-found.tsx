import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPersonDigging } from "@fortawesome/free-solid-svg-icons";

export default function NotFound() {
  return (
    <>
      <h1>404</h1>
      <div className="flex justify-center items-center my-8">
        <FontAwesomeIcon icon={faPersonDigging} className="max-w-[80vw] text-[300px]" />
      </div>
      <p className="text-center text-xl">Oh no, This page doesn't exist!</p>
      <p>That either means that we're still working on it, or something went wrong
        somewhere. Judging by the angry god poking a mountain with a stick, we suggest returning to somewhere with
        content. Check back later!</p></>
  )
}