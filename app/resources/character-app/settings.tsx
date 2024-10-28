import { Character } from "@/util/types";
import Link from "next/link";

export default function Settings(props: { setEdit: Function, edit: boolean, character: Character }) {
  return (
    <div className="flex justify-center flex-col w-fit gap-y-4 mx-auto">
      <div className="flex gap-2 items-center justify-between">
        <p className="w-fit m-0 text-lg">Edit mode</p>
        <button className={`button border m-0 relative w-[60px] h-[25px] rounded-full shadow-inner ${props.edit ? "bg-green-200 hover:bg-green-300 dark:bg-green-800 dark:hover:bg-green-700" : "bg-stone-200 hover:bg-stone-300"}`} onClick={e => props.setEdit(!props.edit)}>
          <div className={`rounded-full w-[20px] h-[20px] absolute transition-all shadow ${props.edit ? "right-[2px] bg-stone-400 border dark:border-none" : "right-[37px] bg-stone-700 dark:bg-stone-400"}`} />
        </button>
      </div>
      <Link href={`/resources/character-sheet/${props.character._id}`} className="button px-6 py-2">Print View</Link>

    </div>
  )
}