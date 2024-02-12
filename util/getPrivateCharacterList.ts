import useSWR from 'swr';
import { projectedCharacterList } from './types';


const fetcher = async (url: string) => {
  const data = await fetch(url, { method: "GET" }).then(res => res.json());
  return data;
}

export default function getPrivateCharacterList() {
  let { data, isLoading, error } = useSWR<{ success: boolean, list?: projectedCharacterList, message: string }>(`/profile/characters/api`, (url: string) => fetcher(url))
  return { data, isLoading, error };
}
