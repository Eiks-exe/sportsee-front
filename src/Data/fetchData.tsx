import axios from 'axios';
import { IUserMain, IUserActivity, IUserAvgSession, IUserPerformance } from '../interfaces/IUser';

// Function to fetch data from the API
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

// Function to fetch user data from the API
export const getUserFromApi = async (
  id: number,
  hasActivity?: boolean,
  hasAvgSession?: boolean,
  hasPerformance?: boolean,
  apiDomain: string = "http://localhost:3000",
) => {
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
  return { main, activity, avgSession, performance };
};