import {Collapse, Divider, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {ChevronLeft, Home, MenuBook, People} from "@material-ui/icons";
import {APP_BAR_HEIGHT, APP_DRAWER_WIDTH} from "common/Constants";
import {buildUrl, usePageState} from "common/State";
import PropTypes from "prop-types";
import React from "react";
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
	drawer: {
		flexShrink: 0,
		width: APP_DRAWER_WIDTH,
	},
	drawerPaper: {
		width: APP_DRAWER_WIDTH,
	},
	drawerHeader: {
		alignItems: 'center',
		display: 'flex',
		height: `${APP_BAR_HEIGHT}px`,
		justifyContent: 'flex-end',
		padding: theme.spacing(0, 1),
	},
}));

function AppDrawer(props) {
	const classes = useStyles();
	const [pageState] = usePageState();

	const renderListItem = (text, pageId, IconEle) => {
		const url = buildUrl(pageId);
		const isSelected = pageState.pageId === pageId;
		return (
			<ListItem button key={pageId} component={Link} to={url} selected={isSelected}>
				<ListItemIcon>
					<IconEle/>
				</ListItemIcon>
				<ListItemText primary={text}/>
			</ListItem>
		);
	};
	const renderSubListItem = (text, pageId, sectionId, isDefault) => {
		const url = buildUrl(pageId, sectionId);
		const isSelected = pageState.sectionId === sectionId || (isDefault && !sectionId);
		return (
			<ListItem button key={url} component={Link} to={url} selected={isSelected}>
				<ListItemText inset primary={text}/>
			</ListItem>
		);
	};
	const renderSubListForUsers = () => {
		//TODO: under construction
		return (<Collapse in={pageState.pageId === 'users'}/>);
	};
	const renderSubListForInfo = () => {
		return (
			<Collapse in={pageState.pageId === 'info'}>
				<List>
					{renderSubListItem("Introduction", 'info', 'introduction', true)}
					{renderSubListItem("Details", 'info', 'details')}
					{renderSubListItem("Conclusion", 'info', 'conclusion')}
				</List>
			</Collapse>
		);
	};

	return (
		<Drawer className={classes.drawer} variant="persistent" anchor="left" open={props.isDrawerOpen}
				classes={{paper: classes.drawerPaper}}>
			<div className={classes.drawerHeader}>
				<IconButton onClick={props.handleDrawerClose}>
					<ChevronLeft/>
				</IconButton>
			</div>
			<Divider/>
			<List>
				{renderListItem("Home", 'home', Home)}
				<Divider/>
				{renderListItem("Users", 'users', People)}
				{renderSubListForUsers()}
				<Divider/>
				{renderListItem("Info", 'info', MenuBook)}
				{renderSubListForInfo()}
			</List>
		</Drawer>
	);
}

AppDrawer.propTypes = {
	isDrawerOpen: PropTypes.bool,
	handleDrawerClose: PropTypes.func.isRequired,
};

export default AppDrawer