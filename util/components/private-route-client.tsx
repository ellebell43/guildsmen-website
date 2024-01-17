'use client'

import { useRouter, usePathname } from "next/navigation"

export default function PrivateRouteClient(props: { ok?: boolean, children?: React.ReactNode }) {
  const router = useRouter()
  const path = usePathname()
  if (!props.ok) { router.push(`/sign-in?return=${path}`); return <></> } else {
    return (
      <>
        {props.children}
      </>
    )
  }
}