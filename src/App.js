import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Aereo from './pages/Aereo';
import Turismo from './pages/Turismo';
import Productos from './pages/Productos';
import Social from './pages/Social';
import Inicio from './pages/Inicio';
import Videos from './pages/Videos';
import UploadFile from './pages/UploadFile';

const App = ()=>(
    <Router>
        <Switch>
            <Route exact path="/" component={Inicio}/>
            <Route exact path="/aereo" component={Aereo}/>
            <Route exact path="/producto" component={Productos}/>
            <Route exact path="/social" component={Social}/>
            <Route exact path="/turismo" component={Turismo}/>
            <Route exact path="/videos_lachfilms" component={Videos}/>
            <Route path="/codigos" component={UploadFile}/>
        </Switch>
    </Router>
);

export default App;