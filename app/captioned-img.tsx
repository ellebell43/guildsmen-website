import Image from "next/image"

export default function CaptionedImg(props: { src: string, alt: string, width: number, height: number }) {
  return (
    <div className="flex flex-col justify-center items-center gap-1 max-w-[400px] mx-auto">
      <Image src={props.src} alt={props.alt} width={props.width} height={props.height} className="border mx-auto" />
      <p className="text-xs text-center m-0 text-stone-400 dark:text-stone-300 italic">{props.alt}</p>
    </div>
  )
}