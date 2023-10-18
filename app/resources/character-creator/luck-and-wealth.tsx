import Die, { resetDie, rollDie } from "@/util/components/dice/die";
import { Info } from "@/util/input-components/input-elements";
import { luckRange, wealthRange } from "@/util/types";
import { useEffect, useState } from "react";
import WealthInput from "./wealth-input";

export default function LuckAndWealth(props: { luck: luckRange | undefined, setLuck: Function, wealth: wealthRange | undefined, setWealth: Function }) {
  const [dieRoll, setDieRoll] = useState<number>()
  const [showDie, setShowDie] = useState(false)

  useEffect(() => {
    determineLuck()
  }, [dieRoll])

  const determineLuck = () => {
    switch (dieRoll) {
      case 1:
        props.setLuck(-3)
        break;
      case 2:
        props.setLuck(-2)
        break;
      case 3:
        props.setLuck(-1)
        break;
      case 4:
        props.setLuck(1)
        break;
      case 5:
        props.setLuck(2)
        break;
      case 6:
        props.setLuck(3)
        break;
    }
  }

  return (
    <>
      <h2>Luck & Wealth</h2>

      <p>Next, you need to determine your character's luck and wealth. You're luck will determine a situations outcome when the result should rely on pure chance. Wealth describes how much money your character generally has to spend.</p>

      {!props.luck ?
        <div className="relative w-fit h-fit mx-auto flex justify-center items-center">
          {/* ====== LUCK INFO ====== */}
          <Info>
            <p>You need to determine how lucky your character is. This number ranges from -3 (being really bad) to +3 (being really good). Pressing the button will roll 1, 6-sided die to determine your luck.</p>

            <table className="raceStatTable">
              <thead>
                <tr>
                  <th colSpan={2}>Luck</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="bottom left">1</td>
                  <td className="bottom right">-3</td>
                </tr>
                <tr>
                  <td className="bottom left">2</td>
                  <td className="bottom right">-2</td>
                </tr>
                <tr>
                  <td className="bottom left">3</td>
                  <td className="bottom right">-1</td>
                </tr>
                <tr>
                  <td className="bottom left">4</td>
                  <td className="bottom right">+1</td>
                </tr>
                <tr>
                  <td className="bottom left">5</td>
                  <td className="bottom right">+2</td>
                </tr>
                <tr>
                  <td className="bottom left">6</td>
                  <td className="bottom right">+3</td>
                </tr>
              </tbody>
            </table>
          </Info>
          {/* ====== LUCK ROLL BUTTON ====== */}
          <button
            onClick={e => {
              setShowDie(true)
              setTimeout(() => {
                setDieRoll(rollDie("die"))
              }, 100)
            }}
            className="button px-4 py-2 rounded shadow text-lg"
          >
            Roll for Luck
          </button>
        </div> :
        // ====== LUCK RESULT ======
        <p className="text-center text-lg font-bold">Luck: {props.luck}</p>
      }

      {/* ====== DIE WRAPPER ====== */}
      <div className={`fixed inset-0 bg-stone-100 bg-opacity-90 flex flex-col justify-center items-center ${showDie ? "" : "hidden"} z-30`}>
        <Die id="die" />
        <p className="text-center">You have rolled a {dieRoll}, which make your luck {props.luck}</p>
        <button onClick={e => setShowDie(false)} className="button rounded px-5 py-2">Close</button>
        {/* <button onClick={e => { resetDie("die"); props.setLuck(undefined); }}>Reset</button> // <- die reset button */}
      </div>

      {/* <button className="button" onClick={e => setShowDie(true)}>Show Die</button> // <- show die button */}

      <div className="flex flex-col justify-center items-center">
        <h3 className="relative flex justify-center items-center">
          Wealth
          <Info>
            <p className="text-base font-normal text-justify">You need to select a wealth adjective. This describes how wealthy your character is on average. If you wrote a backstory, go with whatever makes the most sense for your backstory. If not, you should probably go with Moderate.</p>

            <p className="text-base font-normal text-justify">While you&apos;re on your adventure, you may end up buying more items than your character generally carries around. When this happens, your Wealth may go down. More details on this in <a href="/rules/the-market"><em>The Market chapter</em></a>.</p>
          </Info>
        </h3>
        <WealthInput wealth={props.wealth} setWealth={props.setWealth} />
      </div>
    </>
  )
}