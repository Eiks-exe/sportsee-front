import axios from 'axios';
import { IUserMain, IUserActivity, IUserAvgSession, IUserPerformance, IUser } from '../interfaces/IUser';

/**
 * Fetch data from the API.
 * 
 * @param url - The URL to fetch the data from.
 * @returns A promise that resolves to the fetched data.
 */
export const dataFetch = <T,>(url: string): Promise<T> => {
  // Send GET request to the specified URL
  const resp = axios.get(url)
    .then((res) => {
      // Return the data from the response
      return res.data;
    })
    .catch((error) => {
      // Return the error if the request fails
      return error;
    });
  return resp as Promise<T>;
};

interface IFD<T> {
  data: T;
}

type HeadResponse = {
  "content-type": string;
  "content-length": string;
  // other headers you may need
};

/**
 * Check if the API is available.
 * 
 * @param url - The URL to check.
 * @returns A promise that resolves to "ok" if the API is available, or throws a "404" error otherwise.
 */
export const checkApi = async (url: string) => {
  const { status } = await axios.head<HeadResponse>(url);
  if (status === 200) {
    return "ok";
  } else if (status === 404) {
    throw "404";
  }
}

/**
 * Fetch user data from the API.
 * 
 * @param id - The user ID.
 * @param hasActivity - Optional flag to include activity data.
 * @param hasAvgSession - Optional flag to include average session data.
 * @param hasPerformance - Optional flag to include performance data.
 * @param apiDomain - Optional API domain.
 * @returns The fetched user data.
 */
export const getUserFromApi = async (
  id: number,
  hasActivity?: boolean,
  hasAvgSession?: boolean,
  hasPerformance?: boolean,
  apiDomain: string = "http://localhost:3000",
): Promise<IUser> => {
  // Create an array of parallel fetch requests
  const parallelFetch: Promise<IFD<unknown>>[] = [dataFetch<IFD<IUserMain>>(apiDomain + `/user/${id}`)];
  hasActivity && parallelFetch.push(dataFetch<IFD<IUserActivity>>(apiDomain + `/user/${id}/activity`));
  hasAvgSession && parallelFetch.push(dataFetch<IFD<IUserAvgSession>>(apiDomain + `/user/${id}/average-sessions`));
  hasPerformance && parallelFetch.push(dataFetch<IFD<IUserPerformance>>(apiDomain + `/user/${id}/performance`));

  // Await all the parallel fetch requests and extract the data
  const [main, activity, avgSession, performance] = (await Promise.all(parallelFetch)).map((v) => v.data) as [
    IUserMain,
    IUserActivity,
    IUserAvgSession,
    IUserPerformance,
  ];

  // Return the fetched user data
  return { main, activity, avgSession, performance } as IUser;
};