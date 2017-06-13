import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'

import employees from './employee-reducers'
import projects from './project-reducers'

const rootReducer = combineReducers({
    employees,
    projects,
    routing : routerReducer
})

export default rootReducer