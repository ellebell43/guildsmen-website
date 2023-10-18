import styles from "./styles.module.css"

export function rollDie(id: string) {
  const num = Math.floor(Math.random() * 6 + 1);
  let x, y;

  switch (num) {
    case 1:
      x = 720;
      y = 810;
      break;
    case 6:
      x = 720;
      y = 990;
      break;
    default:
      x = 720 + (6 - num) * 90;
      y = 900;
      break;
  }

  const el = document.getElementById(id)
  if (!el) {
    throw new Error("No element found from given id")
  }
  el.style.transform = `translateZ(-100px) rotateY(${x}deg) rotateX(${y}deg)`;

  return num
}

export function resetDie(id: string) {
  const el = document.getElementById(id)
  if (!el) {
    throw new Error("No element found from given id")
  }
  el.style.transform = `translateZ(-100px) rotateY(-45deg) rotateX(-45deg)`;
}

export default function Die(props: { id: string }) {
  return (
    <div className={`${styles.die} transition-all duration-1000 origin-center w-[100px] h-[100px]`} id={props.id}>
      <Side value={1}>
        <div className="flex items-center justify-center w-full h-full">
          <Pip />
        </div>
      </Side>
      <Side value={2}>
        <div className="self-end justify-self-end">
          <Pip />
        </div>
        <div className="self-start justify-self-start">
          <Pip />
        </div>
      </Side>
      <Side value={3}>
        <div className="self-end justify-self-end">
          <Pip />
        </div>
        <Pip />
        <div className="self-start justify-self-start">
          <Pip />
        </div>
      </Side>
      <Side value={4}>
        <div className="flex justify-between w-full">
          <Pip />
          <Pip />
        </div>
        <div className="flex justify-between w-full">
          <Pip />
          <Pip />
        </div>
      </Side>
      <Side value={5}>
        <div className="flex justify-between w-full">
          <Pip />
          <Pip />
        </div>
        <Pip />
        <div className="flex justify-between w-full">
          <Pip />
          <Pip />
        </div>
      </Side>
      <Side value={6}>
        <div className="flex justify-between w-full">
          <Pip />
          <Pip />
        </div>
        <div className="flex justify-between w-full">
          <Pip />
          <Pip />
        </div>
        <div className="flex justify-between w-full">
          <Pip />
          <Pip />
        </div>
      </Side>
    </div>
  )
}

function Pip() {
  return <div className="w-4 h-4 rounded-full bg-stone-600 dark:bg-stone-200" />
}

function Side(props: { children: React.ReactNode, value: 1 | 2 | 3 | 4 | 5 | 6 }) {
  function getTransform() {
    switch (props.value) {
      case 1:
        return styles.side1
      case 2:
        return styles.side2
      case 3:
        return styles.side3
      case 4:
        return styles.side4
      case 5:
        return styles.side5
      case 6:
        return styles.side6
    }
  }

  return (
    <div className={`w-[100px] h-[100px] absolute rounded border flex justify-between items-center flex-col p-4 bg-stone-200 dark:bg-stone-600 ${getTransform()} transition-all duration-1000`}>
      {props.children}
    </div>
  )
}