import ProjectStatuses from './project_statuses';

/**
 *  YOFORIA
 */
let yoforia = {
	"name": "Yoforia",
	"slug": "yoforia",
	"icon": "Yoforia/Yoforia - Icon leaf.svg",
	"status": ProjectStatuses.PUBLISHED,
	"description": `
	<p>Yoforia is a self-serve frozen yoghurt eatery in the heart of Darling 
	Harbour, Sydney. With a quirky atmosphere and a desire to set a new standard 
	for healthy eating, Yoforia is taking the city by storm.</p>

	<p>Yoforia wanted to take their company into the digital sphere to provide 
	information about their products, highlight promotions and generate an 
	online menu. As such, I was commissioned to create a fun and fresh website 
	design to reflect their company image. Through in-depth consultation with 
	the business owner, I created a website that was both user and client 
	friendly that provides a wealth of easily accessible information and 
	visually reflects the look the owner was after.</p>

	<p>Alongside developing their custom WordPress theme, I also photographed 
	many of their food products to showcase on the website.</p>
	`,
	"images": [
		"Yoforia/Yoforia - About.jpg",
		"Yoforia/Yoforia - Banner.jpg",
		"Yoforia/Yoforia - Contact.jpg",
		"Yoforia/Yoforia - Menu.jpg",
	],
};

/**
 *  TRACE
 */
let trace = {
	"name": 'Trace',
	"slug": "trace",
	"icon": "TRACE/TRACE - Icon.svg",
	"status": ProjectStatuses.PUBLISHED,
	"description": `
	<p>Trace, an online magazine, asked students from  our university to work 
	as a team to produce a digital publication for an audience of 18-25 year 
	olds. We collectively set out  to “reveal the hidden truth”.</p>

	<p>In my role as Technical Manager, I was responsible for bringing the 
	design ideas of our students to life on screen. Using JavaScript, HTML5 and 
	CSS my team managed the publication's transition from self-constructed 
	article templates to a fully completed digital magazine. This involved 
	solving many technical challenges such as: cross device compatibility, 
	responsive articles, screen reader compatibility, CSS animations and 
	typographic limitations of web technologies.</p>

	<p>We produced a well-received and highly accessible web magazine that I 
	was incredibly proud to be a part of.</p>
	`,
	"images": [
		"TRACE/TRACE - Editorial.jpg",
		"TRACE/TRACE - Home.jpg",
		"TRACE/TRACE - Spread.jpg",
		"TRACE/TRACE - Video.jpg",
	],
};

/**
 *  EXPORT
 */
export default [
	yoforia,
	trace,
];
