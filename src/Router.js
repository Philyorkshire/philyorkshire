import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/home/Home';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Work from './pages/work/Work';
import WorkDetail from './pages/work-detail/WorkDetail';

function Router() {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            <Route exact path='/work' component={Work} />
            <Route path='/work/:client' component={WorkDetail} />
        </Switch>
    )
}

export default Router;