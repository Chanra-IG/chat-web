import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Chat from './Chat';
import Login from './Login';


function App() {

    return (
        <React.Suspense fallback={true}>
            <Switch>
                <Route path='/' exact component={Login}></Route>
                <Route path='/chat' component={Chat}></Route>
            </Switch> 
        </React.Suspense>
         
    )
}

export default App;
