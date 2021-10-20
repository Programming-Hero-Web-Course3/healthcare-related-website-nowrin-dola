import React from "react";
import { Spinner } from "react-bootstrap";
import {
    Route,
    Redirect,
    useHistory,
    useLocation,
} from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    const history = useHistory();
    const location = useLocation();

    if (isLoading) {
        return <Spinner className='m-5' animation="border" variant="dark" />
    }
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.displayName ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location },
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;