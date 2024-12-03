import { createContext } from 'react';

export const AuthContext = createContext()

const AuthProvider = ({children}) => {

    const userInfo = {
        name: 'test',
        age: '12'
    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;