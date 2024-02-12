import useSWR from 'swr';

const fetcher = async (url: string, name: string) => {
  const data = await fetch(url, { method: "GET", headers: { "creature-name": name } }).then(res => res.json());
  return data;
}

export default function getOfficialCreature(name: string) {
  let { data, isLoading, error } = useSWR<{ success: boolean, data: any }>(`/bestiary/${name}/api`, (url: string) => fetcher(url, name))
  return { data, isLoading, error };
}