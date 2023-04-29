import React from 'react';
import { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { ContextUser } from '../../../App';

const PrivateRoute = ({children,...rest}) => {
   const [user,setUser] = useContext(ContextUser);
   console.log(setUser);
    return (
        <Route
        {...rest}
        render={({ location }) =>
          user.email ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
};

export default PrivateRoute;