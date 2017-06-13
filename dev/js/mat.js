import React from 'react'
import {render} from 'react-dom'

//Import Components
import App from './components/app'
import Home from './components/home'
import ProjectList from './components/ProjectList'
import EmployeeList from './components/EmployeeList'

import injectTapEventPlugin from 'react-tap-event-plugin';
 
// Needed for onTouchTap 
injectTapEventPlugin();

//Material ui provider
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { MuiThemeProvider } from 'material-ui/styles';

//Import Router Dependecies
import {Router,Route,IndexRoute,browserHistory} from 'react-router'

//Import Provider, store
import {Provider} from 'react-redux'
import store, {history} from './store/config-store'


const router = (
    <MuiThemeProvider>
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={Home}></IndexRoute>
            </Route>
            <Route path="/projects" component={App}>
                <IndexRoute component={ProjectList}></IndexRoute>
            </Route>
            <Route path="/employees" component={App}>
                <IndexRoute component={EmployeeList}></IndexRoute>
            </Route>
        </Router>
    </Provider>
    </MuiThemeProvider>
)

render(
    router,
    document.getElementById('root')
)