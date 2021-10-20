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
            <Route path="/aereo" component={Aereo}/>
            <Route path="/producto" component={Productos}/>
            <Route path="/social" component={Social}/>
            <Route path="/turismo" component={Turismo}/>
            <Route path="/videos_lachfilms" component={Videos}/>
            <Route path="/codigos" component={UploadFile} />
        </Switch>
    </Router>
);

export default App;