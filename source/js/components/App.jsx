import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import styles from '../../css/index.scss';

const PageNotFound = () => <main className='main'><h1>404 Page not found</h1></main>;

const App = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route component={PageNotFound} />
            </Switch>
            <Footer />
        </div>
    </BrowserRouter>
);

export default App;