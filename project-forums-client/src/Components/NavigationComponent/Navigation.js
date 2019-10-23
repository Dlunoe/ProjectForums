import React from 'react';
import { Link } from 'react-router-dom';

import SignOutButton from '../User/UserLogoutComponent/Logout'
import * as ROUTES from '../../Constants/Routes';

const Navigation = () =>(
    <div>
        <ul>
            <li>
                <Link to={ROUTES.SIGN_IN}>Sign In</Link>
            </li>
            <li>
                <Link to={ROUTES.FORUMS}>Forums</Link>
            </li>
            <li>
                <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
            </li>
            <li>
                <Link to={ROUTES.ACCOUNT}>Account</Link>
            </li>
            <li>
                <Link to={ROUTES.PASSWORD_FORGET}>Forgotten password?</Link>
            </li>
            <li>
                <SignOutButton />
            </li>
        </ul>
    </div>
)

export default Navigation;