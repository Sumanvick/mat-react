import React from 'react'

// import FloorList from './floor-list'

import '../../scss/style.scss'
// import 'react-date-picker/index.css'

class Main extends React.Component{
    render(){
        return(
            <div className="container">
                {/*<h1>
                    Welcome to Room-Planner
                </h1>*/}
                {React.cloneElement(this.props.children, this.props)}
                {/*<FloorList {...this.props}/>*/}
            </div>
        )
    }
}

export default Main