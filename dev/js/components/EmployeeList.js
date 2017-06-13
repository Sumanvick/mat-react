import React from 'react'
import EmploeeCard from './EmployeeCard'
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
    },
    paddingLeftRight:{
        padding: '5px 5px'
    }
}));

class EmployeeList extends React.Component {
    componentWillMount() {
        this.props.getAllEmployee()
    }
    render() {
        const classes = this.props.classes;
        return (
            <div>
                <Grid container className={classes.root} justify="center">
                    <Grid item md={10}>
                        <Grid container className={classes.demo}>
                            {isset(this.props.employees.data) !== 'undefined' ? this.props.employees.data.map((emp, i) => {
                                return (
                                    <Grid item md={3}  key={i}>
                                        <EmploeeCard employee={emp} key={i}></EmploeeCard>
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

export default withStyles(styleSheet)(EmployeeList);