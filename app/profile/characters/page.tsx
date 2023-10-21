import Message from "@/util/components/message"
import CharacterList from "./character-list"

export default function Characters() {
  return (
    <>
      <h1>My Characters</h1>
      <Message good={true} />
      <CharacterList />
    </>
  )
}