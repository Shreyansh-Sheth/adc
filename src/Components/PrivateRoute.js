import { Route, Redirect } from "react-router-dom";
import React from "react";

const PrivateRoute = ({
    component: Component,
    isAuthenticated,
    redirectTo,
    ...rest
}) => (
        <Route
            {...rest}
            render={(props) =>
                isAuthenticated ? (
                    <Component {...props} />
                ) : (
                        <Redirect
                            to={{ pathname: redirectTo, state: { from: props.location } }}
                        />
                    )
            }
        />
    );

export default PrivateRoute;
