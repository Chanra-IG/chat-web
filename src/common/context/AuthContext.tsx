import React, { createContext, FC, useContext, useState } from 'react';

interface AuthData {
    currentUser: string;
    login?: (name: string) => void;
}

export const AuthContext = createContext<AuthData>({} as AuthData);
export const useAuth = () => useContext(AuthContext);

export const AuthProvider: FC = (props) => {
    const [state, setState] = useState<AuthData>({
        currentUser: ''
    });

    function login(name: string) {
        setState({...state, currentUser: name});
    }

    return (
        <AuthContext.Provider value={{...state, login}}>
            {props.children}
        </AuthContext.Provider>
    );
}