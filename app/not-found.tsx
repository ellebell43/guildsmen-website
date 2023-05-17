export default function Page404() {
  return (
    <>
      <h1>404</h1>
      <div className="flex justify-center items-center my-8">
        <img src='/icons/person-digging-solid.svg' alt="" className="filter dark:invert w-[80vw] max-w-[300px] h-auto" />
      </div>
      <p className="text-center text-xl">Oh no, This page doesn't exist!</p>
      <p>That either means that we're still working on it, or something went wrong
        somewhere. Judging by the angry god poking a mountain with a stick, we suggest returning to somewhere with
        content. Check back later!</p></>
  )
}