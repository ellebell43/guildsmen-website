export default function getTokenFromCookie(cookie: string): string | undefined {
  let arr = cookie.split("; ")
  const result = {}
  for (let i in arr) {
    const item = arr[i].split('=')
    //@ts-expect-error
    result[item[0]] = item[1]
  }
  //@ts-expect-error
  if (result["token"]) return result["token"]
  return undefined
}