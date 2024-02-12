export default function PopUp(props: { children: React.ReactNode }) {
  return (
    <>
      {/* Wrapper */}
      <div className={`fixed inset-0 bg-opacity-70 bg-stone-100 dark:bg-stone-600 flex justify-center items-center flex-col z-30`}>
        {/* Content container */}
        <div className={`relative bottom-10 border shadow-md bg-stone-100 dark:bg-stone-600 p-2 w-[300px] md:w-[600px] overflow-y-scroll overflow-x-visible max-h-[500px] z-40`}>
          {props.children}
        </div>
      </div>
    </>
  )
}