import { user } from "@/util/types"
import useSWR from 'swr';

const fetcher = async (url: string) => {
  const data = await fetch(url, { method: "GET", headers: { "cookieSignIn": "true" } }).then(res => res.json());
  return data;
}

export default function getUserByToken() {
  let { data, isLoading, error } = useSWR<{ success: boolean, message: string, user?: user }>(`/sign-in/api`, (url: string) => fetcher(url))
  return { data, isLoading, error };
}