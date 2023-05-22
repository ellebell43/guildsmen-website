import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function NextButton(props: { href: string }) {
  return (
    <Link href={props.href} className="button px-4 py-2 mt-8 w-fit flex justify-center items-center gap-4">
      Next
      <FontAwesomeIcon icon={faArrowRight} />
    </Link>
  )
}