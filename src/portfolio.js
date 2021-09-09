import emoji from "react-easy-emoji";

import hcmut from "./assets/img/icons/common/hcmut.png";
import nguyendu from "./assets/img/icons/common/nguyendu.png";
import cohota from "./assets/img/icons/common/cohota.png";

export const greetings = {
	name: "TRUNG.",
	title: "I'm Trung. Do Duc",
	description:
		"Front-End Website Developer, having an experience of building Web applications with JavaScript / Reactjs / PHP and some other cool libraries, frameworks.",
	resumeLink: "https://drive.google.com/file/d/14TL2lS6qvBj8CIvkDnhUnUc6_6wwJc6j/view?usp=sharing",
};

export const openSource = {
	githubUserName: "2dtrung",
};

export const contact = {};

export const socialLinks = {
	facebook: "https://www.facebook.com/2dtrung",
	instagram: "https://www.instagram.com/eightagram",
	twitter: "https://twitter.com/2dtrung",
	github: "https://github.com/2dtrung",
	linkedin: "https://www.linkedin.com/in/2dtrung/",
};

export const skillsSection = {
	title: "What I do",
	subTitle:
		"FRONT-END WEBSITE DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK AND CREATIVE",
	skills: [
		emoji(
			"⚽ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
		),
		emoji(
			"⚽ Progressive Web Applications ( PWA ) in normal and SPA Stacks"
		),
		emoji(
			"⚽ Try to create more value in any technology side, hard-working for gain more lucky!"
		),
	],

	softwareSkills: [
		{
			skillName: "HTML-5",
			fontAwesomeClassname: "vscode-icons:file-type-html",
		},
		{
			skillName: "CSS3",
			fontAwesomeClassname: "vscode-icons:file-type-css",
		},
		{
			skillName: "SASS",
			fontAwesomeClassname: "logos:sass",
		},
		{
			skillName: "JavaScript",
			fontAwesomeClassname: "logos:javascript",
		},
		{
			skillName: "JQuery",
			fontAwesomeClassname: "logos:jquery",
		},
		{
			skillName: "Reactjs",
			fontAwesomeClassname: "vscode-icons:file-type-reactjs",
		},
		{
			skillName: "PHP",
			fontAwesomeClassname: "logos:php",
		},
		{
			skillName: "Nodejs",
			fontAwesomeClassname: "logos:nodejs-icon",
		},
		{
			skillName: "My-SQL",
			fontAwesomeClassname: "logos:mysql",
		},
	],
};

export const educationInfo = [
	{
		schoolName: "Ho Chi Minh University Of Technology",
		subHeader: "Bachelor degree in Computer Science",
		duration: "August 2017 - Now",
		desc: "Currently complete all the subjects and thesis graduation.",
		descBullets: [
			"Lorem ipsum dolor sit amet, consectetur adipdfgiscing elit.",
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		],
	},
	{
		schoolName: "Nguyen Du High School For The Gift Student",
		subHeader: "",
		duration: "August 2014 - April 2017",
		desc: "Member of software development club.",
		descBullets: [
			"Lorem ipsum dolor sit amet, consectetfgur adipiscing elit.",
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		],
	},
	{
		schoolName: "Udemy, Coursera",
		subHeader: "Member",
		duration: "March 2021 - May 2021",
		desc: "Learned some courses about Reactjs, CSS and NodeJS, ...",
		descBullets: [
			"Achieved certifications in Front-End Website Development.",
		],
	},
];

export const experience = [
	{
		role: "Website Developer Intern",
		company: "Cohota",
		companylogo: cohota,
		date: "June 2020 – August 2020",
		desc: "Collaborated with another member to design and build a website for users who are disablities.",
		descBullets: [
			"Experienced in agile methods like Scrum and Figma, Photoshop tool.",
			"Learned and tried to understand ReactJS, Ruby. Recepting knowledge on Amazon Web Services platform (AWS)",
		],
	},
	{
		role: "Full-Stack Website Developer",
		company: "Website Programming Course",
		companylogo: hcmut,
		date: "May 2021 – June 2021",
		desc: "Developed a website that enhances the user's experience when searching and buying books, estimated the capicity per visit around 200+ users.",
		descBullets: [
			"Implemented the server-side using PHP basics, MySQL and call Database from phpMyAdmin.",
			"Designed UX/UI interface on Figma platform.",
		],
	},
	{
		role: "Software Developement Club Member",
		company: "SDC-NguyenDu",
		companylogo: nguyendu,
		date: "Jan 2015 – October 2016",
		desc: "Researched and developved topic which are choosen by club, application are apllied to school area. Language was used most is Pascal, C#.",
		descBullets: [
			"Haved application published to App Store in club.",
			"Designed UX/UI interface.",
		],
	},
];

export const projects = [
	{
		name: "Personal Portfolio",
		desc: "Website that contains information about me like education, technical skill, experience... If you are interested in this website and want to customize it, feel comfortable for my github link below.",
		link: "",
		github: "https://github.com/2dtrung/personal-portfolio",
	},
	{
		name: "TIUH Bookstore",
		desc: "A website that enhances the user's experience when searching and buying books, estimated the capicity per visit around 200+ users. Implemented the server-side using PHP basics, MySQL.",
		link: "https://example.com",
		github: "https://github.com/2dtrung/tiuh-bookstore",
	},
	{
		name: "Simple Search Application",
		desc: "Simple search application in website, allow users to find image related to the keyword. Data is retrieved by calling API.",
		link: "https://react-search-image.herokuapp.com/",
		github: "https://github.com/2dtrung/search-app",
	},
	{
		name: "More in repositories...",
		desc: "Follow link below to view all detail in the remain project that I did before.",
		link: "",
		github: "https://github.com/2dtrung?tab=repositories",
	},
];

export const feedbacks = [
	{
		name: "T.Khanh Linh",
		feedback:
			'" We have been very happy with our new website! It looks professional and very easy to navigate. Our experience with the customer service at Trung has been great. I am using it without any problem, great job, great services. "',
	},
	{
		name: "L.Cong Tri",
		feedback:
			'" Trung handle things very efficiently and are available for any questions we have. He also keep us updated on daily reports so we know how our site is doing. I would recommend that you have choose Trung\'s web developer services for you. "',
	},
];
