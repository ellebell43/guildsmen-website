import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function PopUp(props: { children: React.ReactNode, setShow?: Function, show?: boolean }) {
  if (props.show && props.setShow) {
    return (
      // Wrapper
      <div className={`${props.show ? "" : "hidden"} fixed inset-0 bg-opacity-70 dark:bg-opacity-70 bg-stone-100 dark:bg-stone-600 flex justify-center items-center flex-col z-30`}>
        {/* Close button */}
        {/* @ts-expect-error */}
        <button onClick={e => props.setShow(false)} className="z-50 button text-xs relative rounded-full border w-8 h-8 right-[-150px] md:right-[-300px] top-[-20px]" >
          <FontAwesomeIcon icon={faX} />
        </button>
        {/* Children container */}
        <div className={`relative bottom-10 border shadow-md bg-stone-100 dark:bg-stone-600 p-2 w-[300px] md:w-[600px] overflow-y-scroll overflow-x-visible max-h-[500px] z-40`}>
          {props.children}
        </div>
      </div>
    )
  }

  return (
    <>
      {/* Wrapper */}
      <div className={`fixed inset-0 bg-opacity-70 dark:bg-opacity-70 bg-stone-100 dark:bg-stone-600 flex justify-center items-center flex-col z-30`}>
        {/* Content container */}
        <div className={`relative bottom-10 border shadow-md bg-stone-100 dark:bg-stone-600 p-2 w-[300px] md:w-[600px] overflow-y-scroll overflow-x-visible max-h-[500px] z-30`}>
          {props.children}
        </div>
      </div>
    </>
  )
}