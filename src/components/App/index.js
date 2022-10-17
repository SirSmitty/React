import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//opens acces route mapping component
import Navigation from '../Navigation';
import LandingPage from '../Landing';
import SignUpPage from '../SignUp';
import SignInPage from '../Signin';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home';
import AccountPage from '../Account';
import AdminPage from '../Admin'

import * as ROUTES from '../../constants/routes';

//defines nagivation app
const App = () => (
    <Router>
        <div>
            <Navigation />

            <hr />
            <Routes >
                <Route exact path={ROUTES.LANDING} element={<LandingPage />} />
                <Route path={ROUTES.SIGN_UP} element={<SignUpPage />} />
                <Route path={ROUTES.SIGN_IN} element={<SignInPage />} />
                <Route path={ROUTES.PASSWORD_FORGET} element={<PasswordForgetPage />} />
                <Route path={ROUTES.HOME} element={<HomePage />} />
                <Route path={ROUTES.ACCOUNT} element={<AccountPage />} />
                <Route path={ROUTES.ADMIN} element={<AdminPage />} />
            </Routes>
        </div>
    </Router>
);

export default App;