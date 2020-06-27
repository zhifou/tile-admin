import React from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import App from '../App';
import Layout from '../Layout';
import Home from '../pages/home';
import Detail from '../pages/detail';
import Theme from '../pages/theme';
import Color from '../pages/theme/color';
import Page404 from '../pages/404';
import Foo from '../pages/foo';

const BasicRoute = () => (
    <HashRouter>
        <Switch>
                <App>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/theme" component={Theme} />
                    <Route exact path="/theme/color" component={Color} />
                    <Route exact path="/detail/:id" component={Detail} />
                    <Route exact path='/404' component={Page404} />
                    <Route exact path='/foo' component={Foo} />
                    {/* <Route component={Page404}/> */}
                </App>
                
                
        </Switch>
    </HashRouter>
);

export default BasicRoute;
