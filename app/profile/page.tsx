"use client"

import getUserByToken from "@/util/getUserByToken"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import Spinner from "../spinner"
import { mutate } from "swr"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUserCircle } from "@fortawesome/free-regular-svg-icons"
import { faGear, faPencil, faSignOut } from "@fortawesome/free-solid-svg-icons"
import Image from "next/image"

export default function Profile() {
  const { data, isLoading, error } = getUserByToken()
  const router = useRouter()

  useEffect(() => {
    if (!isLoading && !data?.user) {
      router.push("/sign-in")
    }
  }, [isLoading, data])

  const formatDate = (date: Date): string => {
    var str = ""
    str += date.getMonth() + "/" + date.getDate() + "/" + date.getFullYear()
    return str
  }
  if (isLoading) return <Spinner />
  if (error) return <p>{String(error)}</p>
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div className="relative w-fit">
          {/* Avatar edit button */}
          <button type="button">
            <FontAwesomeIcon icon={faPencil} className="absolute bottom-1 right-1 w-[15px] h-[15px] p-2 rounded-full shadow button" />
          </button>
          {/* === USER AVATAR === */}
          {data?.user?.avatarUrl ? <Image width={150} height={150} src={data.user.avatarUrl} alt="" className="rounded-full" /> : <FontAwesomeIcon icon={faUserCircle} className="w-[150px] h-[150px]" />}
        </div>
        <p className="text-2xl font-bold text-center mb-0">{String(data?.user?.username)}</p>
        <p className="mt-0 text-xs opacity-70 mb-2">User since {data?.user?.created ? formatDate(new Date(data.user.created)) : ""}</p>
        {data?.user?.bio ? <p className="mt-0 p-2 text-sm italic">{data.user.bio}</p> : <></>}
      </div>
      <div className="flex gap-4 justify-center items-center w-fit mx-auto">
        <Link href="/profile/settings" className="button py-2 px-4 no-underline not-italic rounded"><FontAwesomeIcon icon={faGear} /> Settings</Link>
        <button
          type="button"
          className="button py-2 px-4 rounded"
          onClick={() => {
            document.cookie = "token="
            mutate("/sign-in/api")
          }}
        >
          <FontAwesomeIcon icon={faSignOut} />
          Sign Out
        </button>
      </div>
    </>
  )
}