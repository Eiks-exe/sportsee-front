import React from 'react'
import { userMock } from '../Data/mockData'
import { IUser } from '../interfaces/IUser'

interface IDataContextProvider {
    children?: React.ReactNode
}

// creating Context for pro drilling

export const UserContext = React.createContext<IUser>(userMock) 


export const UserContextProvider: React.FC<IDataContextProvider> = ({children}) => {
    return (
        <UserContext.Provider value={userMock}>
            {children}
        </UserContext.Provider>
    )
}


