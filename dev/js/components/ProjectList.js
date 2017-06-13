import React from 'react'
import ProjectCard from './ProjectCard'
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
//Import Bootstrap Styles

//Import sub components
const isset = (a) => {
    if (typeof a !== 'undefined') return true
    else return false
}
const styleSheet = createStyleSheet('EmployeeList', theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        height: 140,
        width: 100,
    },
    control: {
        padding: theme.spacing.unit * 2,
    }
}));

class ProjectList extends React.Component {
    componentWillMount() {
        this.props.getAllProject()
    }
    render() {
        const classes = this.props.classes;
        return (
            <div>
                {/*{JSON.stringify(this.props.projects)}*/}
                <Grid container className={classes.root} justify="center">
                    <Grid item md={10}>
                        <Grid container className={classes.demo} justify="center">
                            {isset(this.props.projects.data) !== 'undefined' ? this.props.projects.data.map((prj, i) => {
                                return (
                                    <Grid item md={8}  key={i}>
                                        <ProjectCard project={prj} key={i}></ProjectCard>
                                    </Grid>
                                )
                            }) : ''}
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default withStyles(styleSheet)(ProjectList);