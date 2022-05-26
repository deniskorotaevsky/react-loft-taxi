import React from "react";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
    const [isLoggedin, setIsLoggedin] = React.useState(false)

    const login = (email, password) => {
        if (email !== 'vali@email.com' || password !== 'correctpassword') {
            return
        }

        setIsLoggedin(true)
    }
    const logOut = () => {
        setIsLoggedin(false)
    }
    return(
        <AuthContext.Provider value={{login, logOut, isLoggedin}}>
            {children}
        </AuthContext.Provider>
    );
};

export const withAuth = (WrappedComponent) => {
    return class extends React.Component {
        render() {
            return (
                <AuthContext.Consumer>
                    {
                        (value) => {
                            return <WrappedComponent {...value} {...this.props} />
                        }
                    }
                </AuthContext.Consumer>
            )
        }
    }
}