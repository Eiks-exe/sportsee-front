import axios from 'axios';
import { IUserMain, IUserActivity, IUserAvgSession, IUserPerformance } from '../interfaces/IUser';

export const dataFetch = <T,>(url: string): Promise<T> => {
    const resp =axios.get(url)
    .then((res) => {
      return res.data
    })
    .catch((error)=>{
        return error 
    })
   return resp as Promise<T>
}

interface IFD<T> {
  data: T;
}

export const getUserFromApi =async (
  id: number,
  hasActivity?: boolean,
  hasAvgSession?: boolean,
  hasPerformance?: boolean,
  apiDomain: string = "http://localhost:3000",
) => {
  const parallelFetch: Promise<IFD<unknown>>[] = [dataFetch<IFD<IUserMain>>(apiDomain + `/user/${id}`)];
    hasActivity && parallelFetch.push(dataFetch<IFD<IUserActivity>>(apiDomain + `/user/${id}/activity`));
    hasAvgSession && parallelFetch.push(dataFetch<IFD<IUserAvgSession>>(apiDomain + `/user/${id}/average-sessions`));
    hasPerformance && parallelFetch.push(dataFetch<IFD<IUserPerformance>>(apiDomain + `/user/${id}/performance`));

    const [main, activity, avgSession, performance] = (await Promise.all(parallelFetch)).map((v) => v.data) as [
      IUserMain,
      IUserActivity,
      IUserAvgSession,
      IUserPerformance,
  ];
  return { main, activity, avgSession, performance };
}