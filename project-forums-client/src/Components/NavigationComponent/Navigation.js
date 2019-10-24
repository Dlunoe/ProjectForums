import React from 'react';
import { Link } from 'react-router-dom';

import SignOutButton from '../User/UserLogoutComponent/Logout'
import * as ROUTES from '../../Constants/Routes';
import { AuthUserContext } from '../Sessions';

const Navigation = () =>(
    <div>
        <AuthUserContext.Consumer>
            {authUser =>
            authUser ? <NavigationAuth /> : <NavigationNonAuth />}
        </AuthUserContext.Consumer>
    </div>
)

const NavigationAuth = () => (
    <ul>
        <li>
            <Link to={ROUTES.ACCOUNT}>Account</Link>
        </li>
        <li>
            <Link to={ROUTES.FORUMS}>Forums</Link>
        </li>
        <li>
            <SignOutButton />
        </li>
    </ul>
)

const NavigationNonAuth = () => (
    <ul>
        <li>
                <Link to={ROUTES.FORUMS}>Forums</Link>
            </li>
            <li>
                <Link to={ROUTES.SIGN_IN}>Sign In</Link>
            </li>
    </ul>
);

export default Navigation;