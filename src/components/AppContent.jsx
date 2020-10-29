import {Grid} from "@material-ui/core";
import HomeContent from "components/pages/HomeContent";
import InfoContent from "components/pages/InfoContent";
import UsersContent from "components/pages/UsersContent";
import React from "react";
import {Route, Switch} from "react-router-dom";

function AppContent() {
	return (
		<main>
			<Grid container direction="row">
				<Grid item xs={false} sm={1} md={2}/>
				<Grid container item xs={12} sm={10} md={8}>
					<Switch>
						<Route path="/users" children={<UsersContent/>}/>
						<Route path="/info" children={<InfoContent/>}/>
						<Route children={<HomeContent/>}/>
					</Switch>
				</Grid>
				<Grid item xs={false} sm={1} md={2}/>
			</Grid>
		</main>
	);
}

export default AppContent