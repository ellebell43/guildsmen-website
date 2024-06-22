"use client"
import { faGripLines, faCaretDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Contents() {
  useEffect(() => {
    let tags = document.getElementsByTagName("h2")
    let hrefArr = []

    for (let i = 0; i < tags.length; i++) {
      let text = tags[i].textContent
      let parsedText = text?.toLowerCase().split(" ").join("-")
      if (parsedText?.endsWith("?")) parsedText = parsedText.split("").toSpliced(-1).join("")
      if (text && parsedText) hrefArr.push({ text, parsedText })
    }

    setContentsList(hrefArr)
  }, [])

  let [contentsList, setContentsList] = useState<{ text: string, parsedText: string }[]>([])
  let [showList, setShowList] = useState(false)

  return (
    <>
      {/* == SHOW CONTENTS TOGGLE  */}
      <button onClick={e => setShowList(!showList)} className={`button rounded-l-full w-16 h-12 pr-4 border-black border fixed ${showList ? "right-[280px]" : "-right-5"} transition-all`}>
        <FontAwesomeIcon icon={faCaretDown} className={`w-7 h-7 ${showList ? "rotate-0" : "rotate-90"} transition-all`} />
      </button>
      {/* == CONTENTS LIST */}
      <nav onClick={e => setShowList(false)} className={`w-[300px] fixed ${showList ? "scale-x-100" : "scale-x-0"} origin-right right-0 bg-stone-200 dark:bg-stone-600 shadow border px-2 pb-4 transition-all`}>
        <p className="text-center font-bold text-xl">Contents</p>
        <ul>
          {contentsList.map((el, i) => {
            return <li className="py-2 text-lg text-left" key={i}><Link href={`#${el.parsedText}`}>{el.text}</Link></li>
          })}
        </ul>
      </nav>
    </>
  )
}