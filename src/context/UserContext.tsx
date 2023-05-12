import React from 'react'
import { userMock } from '../Data/mockData'
import { IUser } from '../interfaces/IUser'
import { getUserFromApi } from '../Data/fetchData'




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


type TUserContext = {user?: IUser, isLoading?: boolean, error?: Error};

export const useUserContext = (
    id: number,
    hasActivity?: boolean,
    hasAvgSession?: boolean,
    hasPerformance?: boolean,
) => {
    const [context, setContext] = React.useContext(UserContext)
    const [user, setUser] = React.useState<IUser>()
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    const [error, setError] = React.useState<Error | undefined>();
    React.useEffect(() => {
        if (context.user) {
            setUser(context.user);
        } else if (!isLoading && !error) {
            setIsLoading(true);
            (async () => {
                try {
                    const { main, activity, avgSession, performance } = await getUserFromApi(id, hasActivity, hasAvgSession, hasPerformance);
                    setContext({ main, activity, avgSession, performance } as IUser)
                } catch (error) {
                    setIsLoading(false)
                    setError(error as Error)
                }
            })();
        }
    }, [context.user, id, hasActivity, hasAvgSession, hasPerformance]);

    return {user, isLoading , error};
}
