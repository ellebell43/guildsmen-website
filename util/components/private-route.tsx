import PrivateRouteClient from "./private-route-client"

export default function PrivateRoute(props: { children?: React.ReactNode }) {
  let component: any
  fetch(`${process.env.NEXT_PUBLIC_HOST}/sign-in/api`, { method: "GET", headers: { cookieSignIn: "true" } })
    .then(res => {
      if (!res.ok) {
        component = (
          <PrivateRouteClient ok={false}>
            <p>Redirecting...</p>
          </PrivateRouteClient>
        )
      } else {
        component = (
          <PrivateRouteClient ok={true}>
            {props.children}
          </PrivateRouteClient>
        )
      }
    })

  return component
}