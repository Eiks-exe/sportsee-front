import React from 'react'
import { userMock } from '../Data/mockData'
import { IUser } from '../interfaces/IUser'
import { checkApi, getUserFromApi } from '../Data/fetchData'
import { getMockUser } from '../Data/mockData'




interface IDataContextProvider {
  children?: React.ReactNode
  userId?: string
}

interface IUserContext {
  user?: IUser
}

// creating Context for props drilling
export const UserContext = React.createContext<[IUserContext, (p: any) => void]>([{ user: userMock }, () => { }])


export const UserContextProvider: React.FC<IDataContextProvider> = ({ children, userId }) => {
  const [user, setUser] = React.useState<IUser>()
  return (
    <UserContext.Provider value={[{ user: user }, (t) => { setUser(t) }]}>
      {children}
    </UserContext.Provider>
  )
}


type TUserContext = {
  user?: IUser;
  isLoading?: boolean;
  error?: Error;
};

export const useUserContext = (
  id: number,
  hasActivity?: boolean,
  hasAvgSession?: boolean,
  hasPerformance?: boolean,
  mode?: "remote" | "local",
): TUserContext => {
  const [context, setContext] = React.useContext(UserContext);
  const [user, setUser] = React.useState<IUser>();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<Error | undefined>();

  React.useEffect(() => {
    if (context.user) {
      // If the user context is already available, set the user state
      setUser(context.user);
    } else if (!isLoading && !error) {
      setIsLoading(true);
      (async () => {
        try {
          if (mode === "remote") {
            const check = await checkApi("http://localhost:3000/user/" + id)
            // Fetch user data from the API
            if (check === "ok") {
              const { main, activity, avgSession, performance } = await getUserFromApi(
                id,
                hasActivity,
                hasAvgSession,
                hasPerformance,

              );
              // Set the user context with the fetched data
              setContext({ main, activity, avgSession, performance } as IUser);
            }
          } else {
            const { main, activity, avgSession, performance } = await getMockUser()
            setContext({ main, activity, avgSession, performance } as IUser);
          }
        } catch (error) {
          // Handle any errors that occur during the API request
          setIsLoading(false);
          setError(error as Error);
        }
      })();
    }
  }, [context.user, id, hasActivity, hasAvgSession, hasPerformance, setContext, isLoading, error]);

  return { user, isLoading, error };
};