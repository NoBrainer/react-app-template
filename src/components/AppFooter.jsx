import {Grid, Link as ExternalLink, List, ListItem, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {EXTERNAL_LINK_PROPS} from "common/Defaults";
import PropTypes from "prop-types";
import React, {useState} from "react";

const useStyles = makeStyles((theme) => ({
	section: {
		padding: '0 20px',
	},
}));

const defaultFooterSections = [
	{
		title: "First Section",
		links: [
			{text: "Something Useful", href: "#"},
			{text: "Another Useful Link", href: "#"},
			{text: "More Details", href: "#"},
		]
	},
	{
		title: "Feedback/Bug Reporting",
		links: [
			{text: "Issue Tracker", href: "#"},
			{text: "Email the Developer", href: "mailto:fake.person@gmail.com"},
		]
	},
	{
		title: "Legal Stuff",
		links: [
			{text: "Privacy Policy", href: "#"},
			{text: "Terms of Use", href: "#"},
		]
	},
];

function AppFooter(props) {
	const classes = useStyles();
	const [sections] = useState(props.sections || defaultFooterSections);

	const renderContent = () => {
		return sections.map((section, i) => renderSection(section, i))
	};
	const renderSection = (section, i) => {
		return (
			<Grid item className={classes.section} xs={12} sm={6} md={4} key={i}>
				<Typography>{section.title}</Typography>
				<List>{renderLinks(section.links)}</List>
			</Grid>
		);
	};
	const renderLinks = (links) => {
		return links.map((link, i) => renderListItem(link, i));
	};
	const renderListItem = (link, i) => {
		return (
			<ListItem key={i}>
				<ExternalLink {...EXTERNAL_LINK_PROPS} href={link.href} underline="hover">
					{link.text}
				</ExternalLink>
			</ListItem>
		);
	};

	return (
		<footer>
			<Grid container direction="row">
				<Grid item xs={false} sm={1} md={2}/>
				<Grid container item xs={12} sm={10} md={8}>
					{renderContent()}
				</Grid>
				<Grid item xs={false} sm={1} md={2}/>
			</Grid>
		</footer>
	);
}

AppFooter.propTypes = {
	sections: PropTypes.object,
};

export default AppFooter