import React from 'react'


export const UserContext = React.createContext({})


export default function UserInfoProvider({setUser, user, children})
{
    return <UserContext.Provider value={{user, setUser}}>
        {children}
    </UserContext.Provider>
}