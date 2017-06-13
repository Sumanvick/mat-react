import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as actionCreatiors from '../actions/actionCreators'
import Main from './main'

function mapStateToProps(state){
    return{
        employees : state.employees,
        projects: state.projects
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(actionCreatiors,dispatch)
}

const App = connect(mapStateToProps,mapDispatchToProps)(Main)

export default App;