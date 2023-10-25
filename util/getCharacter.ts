import { Character, creatureType } from "./types";
import useSWR from 'swr';

const fetcher = async (url: string, id: string) => {
  const data = await fetch(url, { method: "GET", headers: { id } }).then(res => res.json());
  return data;
}

export default function getCharacter(id: string) {
  let { data, isLoading, error } = useSWR<{ success: boolean, message: string, character?: Character }>(`/resources/characters/api`, (url: string) => fetcher(url, id))
  return { data, isLoading, error };
}