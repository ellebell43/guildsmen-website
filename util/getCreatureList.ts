import { creatureType } from "./types";
import useSWR from 'swr';

const fetcher = async (url: string, type: creatureType) => {
  const data = await fetch(url, { method: "GET", headers: { "creature-type": type } }).then(res => res.json());
  return data;
}

export default function getCreatureList(type: creatureType) {
  let { data, isLoading, error } = useSWR<{ success: boolean, data: any }>(`/bestiary/api`, (url: string) => fetcher(url, type))
  return { data, isLoading, error };
}