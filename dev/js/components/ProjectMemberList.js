import React from 'react'
import ProjectMemberCard from './ProjectMemberCard'
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';


const styleSheet = createStyleSheet('ProjectMemberList', theme => ({
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
    paddingLeftRight: {
        padding: '5px 5px'
    }
}));

class ProjectMemberList extends React.Component {
    render() {
        const classes = this.props.classes;
        return (
            <div>
                <Grid item md={12}>
                    <Grid container className={classes.demo}>
                        {this.props.members !== 'undefined' ? this.props.members.map((m, i) => {
                            return (
                                <Grid item md={4} key={i}>
                                    <ProjectMemberCard member={m} key={i}></ProjectMemberCard>
                                </Grid>
                            )
                        }) : ''}
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default withStyles(styleSheet)(ProjectMemberList);