import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import webRouter from './webRouter';

const LoginPage = lazy(() => import('../pages/Login'));
const RegisterPage = lazy(() => import('../pages/Register'));
const SalesPage = lazy(() => import('../pages/Sales'))
const SaleEditPage = lazy(() => import('../pages/SaleEdit'))

function AppRouter() {
    return (
        <Router>
            <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    <Route exact path={webRouter.DEFAULT} component={RegisterPage} />
                    <Route path={webRouter.LOGIN} component={LoginPage} />

                    <Route path={webRouter.SALE_EDIT} component={SaleEditPage} />
                    <Route exact path={webRouter.SALES} component={SalesPage} />

                    <Route path="*" component={() => <h1>NOT FOUND</h1>} />
                </Switch>
            </Suspense>
        </Router>
    )
};

export default AppRouter;
