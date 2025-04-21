import CharacterList from "@/util/components/character-list";
import { characterTemplate } from "@/util/types";

export default function CommunityTemplatesClient(props: { list: characterTemplate[] }) {
  return (
    <CharacterList list={props.list} isTemplate={true} public={true} />
  )
}