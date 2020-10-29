import {Paper, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {PAPER_STYLES} from "common/Defaults";
import React from "react";

const useStyles = makeStyles((theme) => ({
	paper: PAPER_STYLES,
}));

function HomeContent() {
	const classes = useStyles();
	return (<Paper className={classes.paper}>
		<Typography component="h1" variant="h4">Welcome to react-app-template!</Typography>
		<Typography paragraph={true}>
			This site is a simple webapp template with a drawer for navigation.
		</Typography>
	</Paper>);
}

export default HomeContent