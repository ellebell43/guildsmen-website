import { linkClass } from "@/util/variables";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <h1>Resources</h1>
      <Link className={linkClass} href="/resources/character-creator">
        Character Creator
      </Link>
    </>
  )
}